#!/usr/bin/env python3
"""Build docs/sitemap.xml with the date each page last changed.

Mintlify stamps most pages of its generated sitemap with the build date, so
search engines cannot tell which pages changed. Mintlify serves this file
instead of the generated one. It lists the same URLs: every page in the
docs.json navigation plus one page per OpenAPI operation.

- Pages (.mdx): date of the last commit that changed the page or a snippet it
  imports. A page with uncommitted changes gets today's date.
- API operations: date of the last openapi.yaml commit that changed the
  operation, its path-level parameters or a component it references
  (directly or through other components).

It reads git history, so it needs a full clone (not a shallow one). Run it
after committing page changes, and after any openapi.yaml update:

    python3 scripts/sitemap/generate.py          # write docs/sitemap.xml
    python3 scripts/sitemap/generate.py --check  # fail if docs/sitemap.xml is stale
"""
import hashlib
import importlib.util
import json
import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parents[2]
DOCS = ROOT / "docs"
SPEC = "docs/api-reference/openapi.yaml"
BASE = "https://www.qovery.com/docs/"
TARGET = DOCS / "sitemap.xml"
TODAY = datetime.now(timezone.utc).strftime("%Y-%m-%d")

# The page list and the API page slugs come from the llms generator, so both
# files always agree on the URL set.
_spec = importlib.util.spec_from_file_location("llms", ROOT / "scripts" / "llms" / "generate.py")
llms = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(llms)


def git(*args, stdin=None):
    return subprocess.run(["git", *args], cwd=ROOT, input=stdin, capture_output=True,
                          check=True).stdout


# ---------------------------------------------------------------------------
# Pages


def utc_date(timestamp):
    return datetime.fromtimestamp(int(timestamp), timezone.utc).strftime("%Y-%m-%d")


def file_dates():
    """Last commit date that changed the content of every file, in one git log
    pass. A pure rename (100% similar) is not a content change, so the file
    keeps the date of its last edit under its old path."""
    if git("rev-parse", "--is-shallow-repository").strip() == b"true":
        sys.exit("shallow clone: run `git fetch --unshallow` first")
    dates, alias, date = {}, {}, None
    log = git("log", "--format=%x00%ct", "--name-status", "-M").decode()
    for line in log.split("\n"):
        if line.startswith("\0"):
            date = utc_date(line[1:])
            continue
        parts = line.split("\t")
        if len(parts) < 2:
            continue
        status, path = parts[0], parts[-1]
        current = alias.get(path, path)
        if current in dates:
            continue
        if status == "R100":
            alias[parts[1]] = current  # older history of the old path counts for the new one
        else:
            dates[current] = date
    # uncommitted edits count as today
    for line in git("status", "--porcelain", "--untracked-files=all", "--", "docs").decode().splitlines():
        dates[line[3:].split(" -> ")[-1]] = TODAY
    return dates


def imports(page_path, depth=0):
    """Snippet files a page imports, followed through nested snippets."""
    if depth > 3 or not page_path.exists():
        return set()
    found = set()
    for line in page_path.read_text().split("\n"):
        m = llms.IMPORT_RE.match(line)
        if m:
            snippet = DOCS / m.group(2).lstrip("/")
            found.add(snippet)
            found |= imports(snippet, depth + 1)
    return found


def indexed(page_path):
    fields, _ = llms.split_frontmatter(page_path.read_text())
    return fields.get("noindex") != "true" and fields.get("hidden") != "true"


def page_lastmods():
    dates = file_dates()
    nav = json.loads((DOCS / "docs.json").read_text())["navigation"]
    pages = []
    llms.nav_pages(nav, pages)
    out = {}
    for page in dict.fromkeys(pages):
        path = DOCS / f"{page}.mdx"
        if not path.exists() or not indexed(path):
            continue
        files = {path} | imports(path)
        known = [dates[str(f.relative_to(ROOT))] for f in files if str(f.relative_to(ROOT)) in dates]
        out[page] = max(known) if known else TODAY
    return out


# ---------------------------------------------------------------------------
# API operations

METHOD_RE = re.compile(r"^    (get|put|post|delete|patch|head|options|trace):\s*$")
PATH_RE = re.compile(r"""^  (['"]?)(/\S*?)\1:\s*$""")
REF_RE = re.compile(r"""\$ref:\s*['"]?#/components/(\w+)/([^'"\s]+)""")


def h(text):
    return hashlib.sha1(text.encode()).hexdigest()


def spec_blocks(text):
    """Split a spec into operation blocks and component blocks.

    Returns ({(method, path): text}, {"section/Name": text}). Path-level keys
    (shared parameters) are added to every operation of the path.
    """
    ops, comps = {}, {}
    section = sub = None
    path = method = None
    shared = []
    comp_name = None

    def flush_path():
        if path:
            for key in [k for k in ops if k[1] == path]:
                ops[key] = "\n".join(shared) + "\n" + ops[key]

    for line in text.split("\n"):
        if line and not line.startswith(" "):
            if section == "paths":
                flush_path()
                path = None
            section = line.split(":")[0]
            comp_name = None
            continue
        if section == "paths":
            m = PATH_RE.match(line)
            if m:
                flush_path()
                path, method, shared = m.group(2), None, []
                continue
            m = METHOD_RE.match(line)
            if m:
                method = m.group(1)
                ops.setdefault((method, path), "")
                continue
            if re.match(r"^    \S", line):
                method = None
            if method:
                ops[(method, path)] += line + "\n"
            elif path:
                shared.append(line)
        elif section == "components":
            if re.match(r"^  \S", line):
                sub = line.strip().rstrip(":")
                comp_name = None
            elif re.match(r"^    \S", line):
                comp_name = f"{sub}/{line.strip().rstrip(':').strip(chr(39) + chr(34))}"
                comps[comp_name] = line + "\n"
            elif comp_name:
                comps[comp_name] += line + "\n"
    if section == "paths":
        flush_path()
    return ops, comps


def op_hashes(text):
    """Hash of each operation, including every component it reaches."""
    ops, comps = spec_blocks(text)
    comp_hash = {name: h(body) for name, body in comps.items()}
    comp_refs = {name: {f"{s}/{n}" for s, n in REF_RE.findall(body)} for name, body in comps.items()}
    closures = {}

    def closure(name):
        if name not in closures:
            seen, todo = set(), [name]
            while todo:
                n = todo.pop()
                if n in seen:
                    continue
                seen.add(n)
                todo.extend(comp_refs.get(n, ()))
            closures[name] = seen
        return closures[name]

    out = {}
    for key, body in ops.items():
        reached = set()
        for s, n in REF_RE.findall(body):
            reached |= closure(f"{s}/{n}")
        out[key] = h(body + "".join(sorted(f"{n}={comp_hash.get(n, '-')}" for n in reached)))
    return out


def spec_versions():
    """(date, text) of every committed openapi.yaml, oldest first, then the
    working copy if it has uncommitted changes. Follows the file through
    earlier locations (it started at the repository root)."""
    commits, sha = [], None
    log = git("log", "--follow", "--format=%x00%H %ct", "--name-only", "--", SPEC).decode()
    for line in log.split("\n"):
        if line.startswith("\0"):
            sha, ts = line[1:].split()
        elif line and sha:
            commits.append((sha, utc_date(ts), line))
            sha = None
    commits.reverse()
    batch = "".join(f"{sha}:{path}\n" for sha, _, path in commits).encode()
    raw = git("cat-file", "--batch", stdin=batch)
    versions, pos = [], 0
    for _, date, _ in commits:
        header_end = raw.index(b"\n", pos)
        header = raw[pos:header_end].split()
        if header[-1] == b"missing":
            pos = header_end + 1
            continue
        size = int(header[2])
        body = raw[header_end + 1:header_end + 1 + size].decode()
        pos = header_end + 1 + size + 1
        versions.append((date, body))
    if git("status", "--porcelain", "--", SPEC).strip():
        versions.append((TODAY, (ROOT / SPEC).read_text()))
    return versions


def api_lastmods():
    changed, previous = {}, {}
    for date, text in spec_versions():
        current = op_hashes(text)
        for key, digest in current.items():
            if previous.get(key) != digest:
                changed[key] = date
        previous = current
    out, used = {}, {}
    for o in llms.api_operations():
        title = o["summary"] or f"{o['method'].upper()} {o['path']}"
        tag = llms.slug(o["tags"][0]) + "/" if o["tags"] else ""
        url = f"api-reference/{tag}{llms.slug(title)}"
        used[url] = used.get(url, -1) + 1
        if used[url]:
            url += f"-{used[url]}"
        out[url] = changed.get((o["method"], o["path"]), TODAY)
    return out


# ---------------------------------------------------------------------------


def build():
    lastmods = {**page_lastmods(), **api_lastmods()}
    out = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for page in sorted(lastmods):
        out += ["  <url>", f"    <loc>{escape(BASE + page)}</loc>", f"    <lastmod>{lastmods[page]}</lastmod>", "  </url>"]
    out.append("</urlset>")
    return "\n".join(out) + "\n"


if __name__ == "__main__":
    text = build()
    if "--check" in sys.argv:
        if not TARGET.exists() or TARGET.read_text() != text:
            sys.exit("docs/sitemap.xml stale: run python3 scripts/sitemap/generate.py")
        print("docs/sitemap.xml is up to date")
    else:
        TARGET.write_text(text)
        print(f"wrote {TARGET.relative_to(ROOT)} ({text.count('<url>')} URLs)")

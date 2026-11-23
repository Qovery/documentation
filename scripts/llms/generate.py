#!/usr/bin/env python3
"""Build the llms files from docs/docs.json, the pages and the OpenAPI spec.

- docs/llms.txt: index of every page, from docs.json and page frontmatter.
- docs/llms-full.txt: the full text of every page, product overview first and
  API reference last (tab order in FULL_TAB_ORDER).
- docs/llms-full-guides.txt: the same without the API reference.

Mintlify serves these files instead of the ones it would generate. Run this
after adding, removing, retitling or editing a page:

    python3 scripts/llms/generate.py          # write the files
    python3 scripts/llms/generate.py --check  # fail if any file is stale
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DOCS = ROOT / "docs"
HERE = Path(__file__).resolve().parent
BASE = "https://www.qovery.com/docs/"
SKIP_TABS = {"API Reference"}  # listed through the API indexes instead
API_TAB = "API Reference"
# Order of the tabs in the full-text files. Tabs missing from this list go
# after the listed ones and before the API reference.
FULL_TAB_ORDER = ["Getting Started", "Configuration", "AI", "CLI", "Terraform Provider"]
FULL_LINKS = """## Full text

- [Full documentation](https://www.qovery.com/docs/llms-full.txt): every page in one file, product overview first, API reference last.
- [Guides and reference without the API](https://www.qovery.com/docs/llms-full-guides.txt): the same file without the API reference."""


def frontmatter(page):
    path = DOCS / f"{page}.mdx"
    if not path.exists():
        return page, ""
    text = path.read_text()
    m = re.match(r"---\n(.*?)\n---", text, re.S)
    fields = {}
    if m:
        for line in m.group(1).splitlines():
            k, _, v = line.partition(":")
            if v:
                fields[k.strip()] = v.strip().strip('"').strip("'")
    return fields.get("title", page), fields.get("description", "")


def walk(node, depth, out):
    if isinstance(node, str):
        title, desc = frontmatter(node)
        line = f"- [{title}]({BASE}{node}.md)"
        out.append(line + (f": {desc}" if desc else ""))
        return
    name = node.get("tab") or node.get("group")
    if node.get("tab") in SKIP_TABS:
        return
    if name:
        if out and out[-1] != "":
            out.append("")
        out.append("#" * min(depth, 6) + " " + name)
        out.append("")
    for key in ("tabs", "groups", "pages"):
        after_group = False
        for child in node.get(key, []):
            if isinstance(child, str) and after_group and name:
                # pages that follow a nested group belong to this group, not the nested one
                out += ["", "#" * min(depth, 6) + " " + name + " (continued)", ""]
                after_group = False
            walk(child, depth + 1, out)
            if isinstance(child, dict):
                after_group = True


def build():
    nav = json.loads((DOCS / "docs.json").read_text())["navigation"]
    out = [(HERE / "header.md").read_text().rstrip(), "", FULL_LINKS, "", "## Documentation"]
    walk(nav, 2, out)
    out += ["", "## API reference", "", (HERE / "api-indexes.md").read_text().rstrip(), ""]
    return "\n".join(out)



# ---------------------------------------------------------------------------
# Full-text files


def split_frontmatter(text):
    m = re.match(r"---\n(.*?)\n---\n?", text, re.S)
    if not m:
        return {}, text
    fields = {}
    for line in m.group(1).splitlines():
        k, _, v = line.partition(":")
        if v:
            fields[k.strip()] = v.strip().strip('"').strip("'")
    return fields, text[m.end():]


IMPORT_RE = re.compile(r"""^import\s+(\w+)\s+from\s+['"](/snippets/[^'"]+)['"];?\s*$""")
ATTR_RE = re.compile(r"""(\w+)=(?:"([^"]*)"|'([^']*)'|\{([^}]*)\})""")
FENCE_RE = re.compile(r"^\s*(```|~~~)")


def outside_fences(text, fn):
    """Apply fn to each run of lines that is not inside a code fence."""
    out, chunk, fenced = [], [], False
    for line in text.split("\n"):
        if FENCE_RE.match(line):
            if not fenced:
                out.append(fn("\n".join(chunk)))
                chunk = []
                out.append(line)
            else:
                out.append(line)
            fenced = not fenced
            continue
        (out if fenced else chunk).append(line)
    if chunk:
        out.append(fn("\n".join(chunk)))
    return "\n".join(out)


def absolute_links(text):
    text = re.sub(r"\]\(/(?!/)", "](" + BASE, text)
    return re.sub(r'href="/(?!/)', 'href="' + BASE, text)


def render_snippet(path, attrs, depth):
    snippet = DOCS / path.lstrip("/")
    if not snippet.exists():
        return ""
    _, body = split_frontmatter(snippet.read_text())
    if "=>" in body or "onClick" in body:
        # interactive component: keep only what it displays
        return "\n".join(f"{v}" for v in attrs.values())
    for k, v in attrs.items():
        body = body.replace("{" + k + "}", v)
    return page_body(body, depth + 1).strip()


def page_body(text, depth=0):
    """Turn MDX into plain markdown: inline snippets, drop imports, absolute links."""
    imports = {}

    def prose(chunk):
        lines = []
        for line in chunk.split("\n"):
            m = IMPORT_RE.match(line)
            if m:
                imports[m.group(1)] = m.group(2)
                continue
            lines.append(line)
        chunk = "\n".join(lines)
        if depth < 3:
            for name, path in imports.items():
                def repl(m, path=path):
                    attrs = {a: (b or c or d) for a, b, c, d in ATTR_RE.findall(m.group(1) or "")}
                    return render_snippet(path, attrs, depth)
                chunk = re.sub(r"<" + name + r"\b([^>]*?)/>", repl, chunk, flags=re.S)
        return absolute_links(chunk)

    # imports come first in a page, so a first pass collects them
    for line in text.split("\n"):
        m = IMPORT_RE.match(line)
        if m:
            imports[m.group(1)] = m.group(2)
    text = outside_fences(text, prose)
    return re.sub(r"\n{3,}", "\n\n", text).strip()


def nav_pages(node, acc):
    if isinstance(node, str):
        acc.append(node)
        return
    for key in ("tabs", "groups", "pages"):
        for child in node.get(key, []):
            nav_pages(child, acc)


def page_entry(page):
    path = DOCS / f"{page}.mdx"
    if not path.exists():
        return None
    fields, body = split_frontmatter(path.read_text())
    title = fields.get("title", page)
    parts = [f"# {title}", f"Source: {BASE}{page}", ""]
    if fields.get("description"):
        parts += [f"> {fields['description']}", ""]
    parts.append(page_body(body))
    return "\n".join(parts).rstrip()


def yaml_scalar(lines, i, indent):
    """Read the scalar value of `key: value` at lines[i] (block or plain)."""
    value = lines[i].split(":", 1)[1].strip()
    if value in (">-", ">", "|", "|-", ">+", "|+"):
        folded = value.startswith(">")
        block = []
        i += 1
        while i < len(lines) and (not lines[i].strip() or len(lines[i]) - len(lines[i].lstrip()) > indent):
            block.append(lines[i].strip())
            i += 1
        if folded:
            paras, cur = [], []
            for b in block:
                if b:
                    cur.append(b)
                else:
                    paras.append(" ".join(cur))
                    cur = []
            paras.append(" ".join(cur))
            return "\n\n".join(p for p in paras if p)
        return "\n".join(block).strip()
    if len(value) >= 2 and value[0] == value[-1] and value[0] in "'\"":
        value = value[1:-1]
    # plain or quoted scalars can continue on more-indented lines
    i += 1
    while i < len(lines) and lines[i].strip() and len(lines[i]) - len(lines[i].lstrip()) > indent and ":" not in lines[i].split("#")[0][:1]:
        nxt = lines[i].strip()
        if re.match(r"^[\w$-]+:", nxt) or nxt.startswith("- "):
            break
        value += " " + nxt.strip("'\"")
        i += 1
    return value


def slug(text):
    """Page slug the way Mintlify builds it for OpenAPI pages."""
    text = re.sub(r"[^a-z0-9 _&-]", "", text.lower())
    return re.sub(r"[ -]+", "-", text).strip("-")


def api_operations():
    """Operations from openapi.yaml, without a YAML dependency.

    The spec is machine-written with two-space indentation, so a line scan is
    enough: paths at indent 2, methods at indent 4, fields at indent 6.
    """
    lines = (DOCS / "api-reference" / "openapi.yaml").read_text().split("\n")
    tag_order, ops = [], []
    i = 0
    section = None
    path = op = None
    while i < len(lines):
        line = lines[i]
        if line and not line.startswith(" "):
            section = line.split(":")[0]
            i += 1
            continue
        if section == "tags" and line.startswith("  - name:"):
            tag_order.append(line.split(":", 1)[1].strip().strip("'\""))
        elif section == "paths":
            m = re.match(r"""^  (['"]?)(/\S*?)\1:\s*$""", line)
            if m:
                path = m.group(2)
            elif re.match(r"^    (get|put|post|delete|patch|head|options):\s*$", line):
                op = {"method": line.strip()[:-1], "path": path, "summary": "", "description": "", "tags": []}
                ops.append(op)
            elif op and line.startswith("      ") and not line.startswith("       "):
                key = line.strip().split(":")[0]
                if key in ("summary", "description"):
                    op[key] = yaml_scalar(lines, i, 6)
                elif key == "tags":
                    j = i + 1
                    while j < len(lines) and re.match(r"^ {6,8}- [^:]+$", lines[j]):
                        op["tags"].append(lines[j].strip()[2:].strip("'\""))
                        j += 1
            elif re.match(r"^    \S", line):
                op = None
        i += 1
    rank = {t: n for n, t in enumerate(tag_order)}
    ops.sort(key=lambda o: rank.get((o["tags"] or [""])[0], len(rank)))
    return ops


def api_entries():
    out, used = [], {}
    for o in api_operations():
        title = o["summary"] or f"{o['method'].upper()} {o['path']}"
        tag = slug(o["tags"][0]) + "/" if o["tags"] else ""
        url = f"api-reference/{tag}{slug(title)}"
        used[url] = used.get(url, -1) + 1
        if used[url]:
            url += f"-{used[url]}"
        parts = [f"# {title}", f"Source: {BASE}{url}", "",
                 f"{o['method'].upper()} {o['path']}"]
        if o["description"]:
            parts += ["", o["description"]]
        out.append("\n".join(parts))
    return out


def intro_definition():
    """The product definition at the top of the introduction page."""
    _, body = split_frontmatter((DOCS / "getting-started" / "introduction.mdx").read_text())
    paras = [p.strip() for p in re.split(r"\n\s*\n", body) if p.strip() and not p.strip().startswith(("#", "<", "import "))]
    return paras[0]


def build_full(include_api):
    nav = json.loads((DOCS / "docs.json").read_text())["navigation"]
    tabs = {t["tab"]: t for t in nav["tabs"]}
    order = [t for t in FULL_TAB_ORDER if t in tabs]
    order += [t for t in tabs if t not in order and t != API_TAB]
    if include_api and API_TAB in tabs:
        order.append(API_TAB)
    name = "llms-full.txt" if include_api else "llms-full-guides.txt"
    scope = ("Pages follow the documentation navigation: " + ", ".join(order)
             + (". The API reference comes last." if include_api else ". The API reference is not included; see https://www.qovery.com/docs/llms-full.txt."))
    out = [
        "# Qovery documentation",
        "",
        "> " + intro_definition(),
        "",
        f"This is {BASE}{name}, the full text of the Qovery documentation. {scope} "
        f"An index of every page is at {BASE}llms.txt.",
    ]
    seen = set()
    for tab in order:
        pages = []
        nav_pages(tabs[tab], pages)
        for page in pages:
            if page in seen:
                continue
            seen.add(page)
            entry = page_entry(page)
            if entry:
                out += ["", entry]
        if tab == API_TAB:
            out += ["", "# OpenAPI specification", f"Source: {BASE}api-reference/openapi.yaml", "",
                    "Every endpoint below is described in full, with request and response schemas, in the OpenAPI file."]
            for entry in api_entries():
                out += ["", entry]
    return "\n".join(out) + "\n"


OUTPUTS = {
    "llms.txt": build,
    "llms-full.txt": lambda: build_full(include_api=True),
    "llms-full-guides.txt": lambda: build_full(include_api=False),
}


if __name__ == "__main__":
    stale = []
    for name, fn in OUTPUTS.items():
        text = fn()
        target = DOCS / name
        if "--check" in sys.argv:
            if not target.exists() or target.read_text() != text:
                stale.append(f"docs/{name}")
        else:
            target.write_text(text)
            print(f"wrote {target.relative_to(ROOT)} ({len(text.encode())} bytes)")
    if "--check" in sys.argv:
        if stale:
            sys.exit(", ".join(stale) + " stale: run python3 scripts/llms/generate.py")
        print("docs/llms.txt, docs/llms-full.txt and docs/llms-full-guides.txt are up to date")

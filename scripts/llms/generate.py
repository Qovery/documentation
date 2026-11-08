#!/usr/bin/env python3
"""Build docs/llms.txt from docs/docs.json and page frontmatter.

Mintlify serves docs/llms.txt instead of its generated file. Run this after
adding, removing or retitling a page:

    python3 scripts/llms/generate.py          # write docs/llms.txt
    python3 scripts/llms/generate.py --check  # fail if docs/llms.txt is stale
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
        for child in node.get(key, []):
            walk(child, depth + 1, out)


def build():
    nav = json.loads((DOCS / "docs.json").read_text())["navigation"]
    out = [(HERE / "header.md").read_text().rstrip(), "", "## Documentation"]
    walk(nav, 2, out)
    out += ["", "## API reference", "", (HERE / "api-indexes.md").read_text().rstrip(), ""]
    return "\n".join(out)


if __name__ == "__main__":
    text = build()
    target = DOCS / "llms.txt"
    if "--check" in sys.argv:
        if not target.exists() or target.read_text() != text:
            sys.exit("docs/llms.txt is stale: run python3 scripts/llms/generate.py")
        print("docs/llms.txt is up to date")
    else:
        target.write_text(text)
        print(f"wrote {target.relative_to(ROOT)} ({len(text)} bytes)")

#!/usr/bin/env python3
"""Generate the CLI command reference from the real `qovery --help` output.

The script walks `qovery --help` recursively (every command and subcommand),
parses the Cobra help text and renders one MDX reference section per
top-level command. Each section is wrapped in markers so it can be
regenerated without touching the hand-written prose around it:

    {/* BEGIN GENERATED: qovery <cmd> --help, CLI v<version> */}
    ...
    {/* END GENERATED */}

Usage:
    # Print the reference for every top-level command to a folder
    python3 scripts/cli-reference/generate.py --qovery /path/to/qovery --out /tmp/cli-ref

    # Dump the parsed command tree as JSON
    python3 scripts/cli-reference/generate.py --qovery /path/to/qovery --json /tmp/cli.json

    # Replace the generated sections in docs/cli/commands/*.mdx
    python3 scripts/cli-reference/generate.py --qovery /path/to/qovery --apply docs/cli/commands

`--help` does not need authentication. Pass `--version` to set the version
written in the markers when the binary is a development build.
"""

import argparse
import json
import os
import re
import shlex
import subprocess
import sys

BEGIN_RE = re.compile(r"\{/\* BEGIN GENERATED: qovery [^*]*\*/\}")
END_MARK = "{/* END GENERATED */}"

# Pages whose generated block covers the global flags instead of a command.
GLOBAL_PAGE = "overview"

# Top-level commands that still ship in the CLI but are not documented.
# `rde`: Remote Development Environments are no longer offered.
SKIP = ("rde",)


def run_help(qovery, path):
    out = subprocess.run(
        [qovery, *path, "--help"],
        capture_output=True,
        text=True,
        env={**os.environ, "NO_COLOR": "1"},
        timeout=60,
    )
    return out.stdout + out.stderr


def split_sections(text):
    """Split Cobra help into {"_description": ..., "Usage": [...], ...}."""
    sections = {}
    current = "_description"
    sections[current] = []
    for line in text.splitlines():
        m = re.match(r"^([A-Z][A-Za-z ]+):\s*$", line)
        if m and m.group(1) in (
            "Usage",
            "Aliases",
            "Examples",
            "Available Commands",
            "Additional Commands",
            "Flags",
            "Global Flags",
            "Additional help topics",
        ):
            current = m.group(1)
            sections[current] = []
            continue
        if line.startswith("Use \"qovery") and "--help" in line:
            continue
        sections.setdefault(current, []).append(line)
    return sections


def parse_commands(lines):
    cmds = []
    for line in lines:
        m = re.match(r"^\s{2}(\S+)\s+(.*\S)\s*$", line)
        if m:
            cmds.append({"name": m.group(1), "short": m.group(2)})
    return cmds


FLAG_RE = re.compile(
    r"^\s+(?:-(?P<short>[A-Za-z0-9]), )?--(?P<long>[A-Za-z0-9][\w-]*)"
    r"(?: (?P<type>[a-zA-Z][\w\[\]]*))?\s{2,}(?P<desc>.*)$"
)
FLAG_NODESC_RE = re.compile(
    r"^\s+(?:-(?P<short>[A-Za-z0-9]), )?--(?P<long>[A-Za-z0-9][\w-]*)(?: (?P<type>[a-zA-Z][\w\[\]]*))?\s*$"
)


def parse_flags(lines):
    flags = []
    for line in lines:
        if not line.strip():
            continue
        m = FLAG_RE.match(line) or FLAG_NODESC_RE.match(line)
        if m and line.lstrip().startswith("-"):
            desc = (m.groupdict().get("desc") or "").strip()
            flags.append(
                {
                    "long": m.group("long"),
                    "short": m.group("short") or "",
                    "type": m.group("type") or "bool",
                    "desc": desc,
                }
            )
        elif flags:
            # Continuation of a multi-line flag description.
            flags[-1]["desc"] = (flags[-1]["desc"] + " " + line.strip()).strip()
    for f in flags:
        default = ""
        dm = re.search(r'\s*\(default (.*)\)\s*$', f["desc"])
        if dm:
            default = dm.group(1)
            f["desc"] = f["desc"][: dm.start()].rstrip()
        f["default"] = default
    return flags


def parse_help(text):
    s = split_sections(text)
    usage = [l.strip() for l in s.get("Usage", []) if l.strip()]
    aliases = ", ".join(l.strip() for l in s.get("Aliases", []) if l.strip())
    description = "\n".join(s.get("_description", [])).strip()
    examples = "\n".join(s.get("Examples", [])).rstrip()
    return {
        "description": description,
        "usage": usage,
        "aliases": aliases,
        "examples": examples,
        "commands": parse_commands(
            s.get("Available Commands", []) + s.get("Additional Commands", [])
        ),
        "flags": parse_flags(s.get("Flags", [])),
        "global_flags": parse_flags(s.get("Global Flags", [])),
    }


def walk(qovery, path, short=""):
    info = parse_help(run_help(qovery, path))
    full = " ".join(["qovery", *path])
    # Cobra falls back to the parent's help for unknown subcommands.
    if path and not any(u == full or u.startswith(full + " ") for u in info["usage"]):
        return None
    node = {"path": path, "name": full, "short": short, **info, "children": []}
    for c in info["commands"]:
        child = walk(qovery, [*path, c["name"]], c["short"])
        if child:
            node["children"].append(child)
    return node


def esc(text):
    """Escape text for an MDX table cell."""
    text = text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    text = text.replace("{", "&#123;").replace("}", "&#125;").replace("|", "\\|")
    text = text.replace("*", "\\*").replace("_", "\\_")
    return text


def code(text):
    """Inline code inside a table cell."""
    return "`" + text.replace("|", "\\|") + "`"


def flags_table(flags):
    rows = [f for f in flags if f["long"] != "help"]
    if not rows:
        return ["No flags other than `--help`."]
    out = [
        "| Flag | Short | Type | Default | Description |",
        "|------|-------|------|---------|-------------|",
    ]
    for f in rows:
        out.append(
            "| {} | {} | {} | {} | {} |".format(
                code("--" + f["long"]),
                code("-" + f["short"]) if f["short"] else "",
                f["type"],
                code(f["default"]) if f["default"] else "",
                esc(f["desc"]),
            )
        )
    return out


def render_node(node, lines, heading="###"):
    lines.append(f"{heading} `{node['name']}`")
    lines.append("")
    if node["short"]:
        lines.append(esc(node["short"]))
        lines.append("")
    lines.append("```bash")
    lines.extend(node["usage"])
    lines.append("```")
    lines.append("")
    if node["aliases"]:
        lines.append("Aliases: " + ", ".join(code(a.strip()) for a in node["aliases"].split(",")))
        lines.append("")
    if node["children"]:
        lines.append("| Subcommand | Description |")
        lines.append("|------------|-------------|")
        for c in node["children"]:
            if c:
                lines.append(f"| {code(c['name'])} | {esc(c['short'])} |")
        lines.append("")
    lines.extend(flags_table(node["flags"]))
    lines.append("")
    if node["examples"].strip():
        lines.append("Examples from the CLI help:")
        lines.append("")
        lines.append("```bash")
        lines.extend(l.strip() for l in node["examples"].strip("\n").splitlines())
        lines.append("```")
        lines.append("")
    for c in node["children"]:
        if c:
            render_node(c, lines, heading)


def render_command(node, version):
    cmd = " ".join(node["path"])
    lines = [
        f"{{/* BEGIN GENERATED: qovery {cmd} --help, CLI v{version} */}}",
        "## Command reference",
        "",
        f"Generated from `qovery {cmd} --help` (CLI v{version}). Every command also "
        "accepts `-h, --help` and the [global flags](/cli/commands/overview#global-flags).",
        "",
    ]
    render_node(node, lines)
    while lines and lines[-1] == "":
        lines.pop()
    lines.append(END_MARK)
    return "\n".join(lines) + "\n"


def render_global(root, version):
    lines = [
        f"{{/* BEGIN GENERATED: qovery --help, CLI v{version} */}}",
        "## Global flags",
        "",
        f"Generated from `qovery --help` (CLI v{version}). These flags work with every command.",
        "",
        "| Flag | Short | Type | Default | Description |",
        "|------|-------|------|---------|-------------|",
    ]
    for f in root["flags"]:
        lines.append(
            "| {} | {} | {} | {} | {} |".format(
                code("--" + f["long"]),
                code("-" + f["short"]) if f["short"] else "",
                f["type"],
                code(f["default"]) if f["default"] else "",
                esc(f["desc"]),
            )
        )
    lines += [
        "",
        "## All commands",
        "",
        "| Command | Description |",
        "|---------|-------------|",
    ]
    for c in root["children"]:
        if c:
            name = " ".join(c["path"])
            lines.append(f"| [{code('qovery ' + name)}](/cli/commands/{name}) | {esc(c['short'])} |")
    lines.append(END_MARK)
    return "\n".join(lines) + "\n"


def replace_block(content, block):
    m = BEGIN_RE.search(content)
    if m:
        end = content.find(END_MARK, m.end())
        if end == -1:
            raise ValueError("BEGIN GENERATED marker without END GENERATED")
        return content[: m.start()] + block.rstrip("\n") + content[end + len(END_MARK):]
    # No marker yet: insert before "## Related Commands", or append.
    anchor = content.find("\n## Related Commands")
    if anchor == -1:
        return content.rstrip("\n") + "\n\n" + block
    return content[:anchor].rstrip("\n") + "\n\n" + block + content[anchor:]


def index_tree(root):
    """Map "application deploy" -> node."""
    idx = {}

    def rec(n):
        if not n:
            return
        idx[" ".join(n["path"])] = n
        for c in n["children"]:
            rec(c)

    rec(root)
    return idx


def iter_commands(content):
    """Yield (line_no, command) for `qovery ...` calls written by hand.

    Generated blocks are skipped. Fenced code blocks and inline code spans
    that start with `qovery ` are both checked.
    """
    content = re.sub(
        r"\{/\* BEGIN GENERATED.*?\{/\* END GENERATED \*/\}",
        lambda m: "\n" * m.group(0).count("\n"),
        content,
        flags=re.S,
    )
    in_fence = False
    for no, line in enumerate(content.splitlines(), 1):
        if line.lstrip().startswith("```"):
            in_fence = not in_fence
            continue
        if in_fence:
            text = line.strip()
            if text.startswith("$ "):
                text = text[2:]
            for part in re.split(r"\s*(?:&&|\|\||;|\|)\s*", text):
                if part.startswith("qovery ") or part == "qovery":
                    yield no, part
        else:
            for m in re.finditer(r"`(qovery(?: [^`]*)?)`", line):
                yield no, m.group(1)


def check_command(idx, cmd):
    """Return a list of problems with one `qovery ...` invocation."""
    cmd = re.sub(r"\s+#.*$", "", cmd).rstrip("\\ ").strip()
    try:
        tokens = shlex.split(cmd)
    except ValueError:
        tokens = cmd.split()
    tokens = tokens[1:]
    path = []
    i = 0
    while i < len(tokens) and " ".join(path + [tokens[i]]) in idx:
        path.append(tokens[i])
        i += 1
    node = idx[" ".join(path)]
    where = " ".join(["qovery", *path])
    rest = tokens[i:]
    usage = " ".join(node["usage"])
    takes_args = re.search(r"\[(?!flags\]|command\])[^\]]+\]|<[^>]+>", usage)
    if (
        rest
        and not rest[0].startswith("-")
        and node["children"]
        and not takes_args
        and not re.match(r"^[<\[{$]|https?://", rest[0])
    ):
        return [f"unknown subcommand '{rest[0]}' for '{where}'"]
    known = set()
    for f in node["flags"] + node["global_flags"]:
        known.add("--" + f["long"])
        if f["short"]:
            known.add("-" + f["short"])
    problems = []
    for t in rest:
        if not t.startswith("-") or t in ("-", "--"):
            continue
        name = t.split("=", 1)[0]
        if re.match(r"^-[0-9]", name) or name in known:
            continue
        if re.match(r"^-[A-Za-z]{2,}$", name) and all("-" + ch in known for ch in name[1:]):
            continue
        problems.append(f"unknown flag '{name}' for '{where}'")
    return problems


def check_pages(idx, folder):
    found = 0
    for fname in sorted(os.listdir(folder)):
        if not fname.endswith(".mdx"):
            continue
        with open(os.path.join(folder, fname)) as fh:
            content = fh.read()
        for no, cmd in iter_commands(content):
            for problem in check_command(idx, cmd):
                found += 1
                print(f"{fname}:{no}: {problem}: {cmd}")
    return found


def detect_version(qovery):
    out = subprocess.run([qovery, "version"], capture_output=True, text=True).stdout
    m = re.search(r"(\d+\.\d+\.\d+)", out)
    return m.group(1) if m else "unknown"


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--qovery", default="qovery", help="path to the qovery binary")
    p.add_argument("--version", help="CLI version written in the markers (default: detected)")
    p.add_argument("--out", help="write one <command>.mdx fragment per top-level command here")
    p.add_argument("--json", help="write the parsed command tree as JSON to this file")
    p.add_argument("--from-json", help="read the command tree from a file written by --json instead of running the CLI")
    p.add_argument("--apply", help="replace generated blocks in this folder of .mdx pages")
    p.add_argument("--check", help="report hand-written examples in this folder that use unknown subcommands or flags")
    p.add_argument(
        "--skip",
        nargs="*",
        default=list(SKIP),
        help="top-level commands left out of the docs (default: %(default)s)",
    )
    p.add_argument("--only", nargs="*", help="limit to these top-level commands")
    args = p.parse_args()

    if args.from_json:
        with open(args.from_json) as fh:
            root = json.load(fh)
        version = args.version or root.get("version", "unknown")
    else:
        version = args.version or detect_version(args.qovery)
        root = walk(args.qovery, [])
        root["version"] = version
    root["children"] = [c for c in root["children"] if c and c["path"][0] not in args.skip]
    children = list(root["children"])
    if args.only:
        children = [c for c in children if c["path"][0] in args.only]

    if args.json:
        with open(args.json, "w") as fh:
            json.dump(root, fh, indent=2)

    blocks = {c["path"][0]: render_command(c, version) for c in children}
    blocks[GLOBAL_PAGE] = render_global(root, version)

    if args.out:
        os.makedirs(args.out, exist_ok=True)
        for name, block in blocks.items():
            with open(os.path.join(args.out, name + ".mdx"), "w") as fh:
                fh.write(block)

    if args.apply:
        missing = []
        for name, block in blocks.items():
            path = os.path.join(args.apply, name + ".mdx")
            if not os.path.exists(path):
                missing.append(name)
                continue
            with open(path) as fh:
                content = fh.read()
            new = replace_block(content, block)
            if new != content:
                with open(path, "w") as fh:
                    fh.write(new)
                print("updated", path)
        if missing:
            print("no page for:", ", ".join(missing), file=sys.stderr)

    if args.check:
        problems = check_pages(index_tree(root), args.check)
        print(f"{problems} problem(s) found", file=sys.stderr)
        if problems:
            sys.exit(1)

    if not (args.out or args.json or args.apply or args.check):
        for block in blocks.values():
            sys.stdout.write(block + "\n")


if __name__ == "__main__":
    main()

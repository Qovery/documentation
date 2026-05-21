# Qovery Documentation — Agent & Contributor Guide

Qovery is a Kubernetes control plane for developers and DevOps teams. It abstracts cluster management, deployments, environments, and cost optimization — running on the customer's own cloud infrastructure (AWS, GCP, Azure, Scaleway) or on-premise.

**Primary audience for this documentation:** backend and fullstack developers deploying applications, DevOps and platform engineers managing clusters and configuration, CTOs evaluating the platform, and AI agents interacting via MCP.

This documentation is built with [Mintlify](https://mintlify.com).

## Project Structure

```
docs/
  docs.json              # Mintlify config: navigation, theme, colors
  getting-started/       # Getting Started tab
  configuration/         # Configuration tab
  copilot/               # AI tab (Copilot, Early Access)
  cli/                   # CLI tab
  terraform-provider/    # Terraform Provider tab
  api-reference/         # API Reference tab (auto-generated, do not edit)
  snippets/              # Reusable MDX components
  images/                # Visual assets
  custom.css             # CSS overrides (modify sparingly)
cloudflare-worker/       # Cloudflare Worker for redirects — not documentation, do not modify
```

## Navigation Map

| Tab | Folder | Main sections |
|-----|--------|---------------|
| Getting Started | `getting-started/` | Get Started, Platform Capabilities, How-to Guides, Tutorials, Troubleshooting |
| Configuration | `configuration/` | Account & Organization, Clusters & Cloud, Services, Deployment & CI/CD, Networking & Advanced |
| AI | `copilot/` | Overview, Getting Started, Capabilities, Examples |
| Terraform Provider | `terraform-provider/` | Getting Started, Examples |
| CLI | `cli/` | Getting Started, Commands |
| API Reference | `api-reference/` | Auto-generated from OpenAPI spec — do not edit |

Use this table to decide where to place a new page. If no existing tab fits, ask a Product Manager before creating a new one.

## Local Preview

```bash
cd docs
mintlify dev
```

Always check the local render before opening a PR.

## Editing Content

### Existing pages

Files are `.mdx` in the `docs/` folder. Each page starts with frontmatter:

```mdx
---
title: "Page title"
description: "Short description shown below the title."
---
```

### Creating a new page

1. Create the `.mdx` file in the appropriate folder.
2. Add its path to `docs/docs.json` in the correct group under `navigation.tabs`.

### Navigation (`docs.json`)

Navigation is hierarchical: `tabs` > `groups` > `pages`. A page not referenced in `docs.json` will not appear in the menu. Always keep them in sync.

### Using snippets

Snippets are reusable MDX components stored in `docs/snippets/`. Use them for content that appears in multiple pages (e.g. credential setup instructions).

To use a snippet in a page:

```mdx
import InstallCli from "/snippets/install-qovery-cli.mdx";

<InstallCli />
```

Check `docs/snippets/` before writing repeated content — it may already exist as a snippet.

## Available Mintlify Components

| Component | Usage |
|-----------|-------|
| `<Card>`, `<CardGroup cols={2\|3}>` | Link grids or feature overviews |
| `<Tabs>`, `<Tab>` | Alternate content (e.g. OS, cloud providers) |
| `<Steps>` | Step-by-step procedures |
| `<AccordionGroup>`, `<Accordion>` | Collapsible content (FAQ, options) |
| `<Info>`, `<Warning>`, `<Tip>` | Informational callouts |

## Brand Colors

| Usage | Value |
|-------|-------|
| Primary | `#642DFF` |
| Light background | `#D8CBFF` |
| Dark background | `#151B2B` |

For Mermaid diagrams, use the Qovery purple palette: `#642DFF`, `#7C3FFF`, `#965FFF`, `#B080FF`.

## Sources of Truth

Before writing or updating any content, verify the information against these sources:

| Topic | Source |
|-------|--------|
| API endpoints and parameters | `docs/api-reference/openapi.yaml` (automatically pushed on every API update — do not edit manually) |
| CLI commands and flags | [github.com/Qovery/qovery-cli](https://github.com/Qovery/qovery-cli) |
| All other product behavior | Existing documentation pages in this repo |

If the information cannot be found in one of these sources, do not write it. Ask a human contributor to verify first.

## Frozen Files — Do Not Modify

| File | Reason |
|------|--------|
| `getting-started/introduction.mdx` | Entry point of the documentation, frozen by design |
| `docs/api-reference/openapi.yaml` | Automatically pushed on every API update — manual edits will be overwritten on the next push |
| `docs/api-reference/` (all files) | Derived from the OpenAPI spec — do not edit manually |

## Editorial Rules — Strictly Required

### Never do

- **Do not invent features.** The documentation is the source of truth. Only document what exists and is available in the product. When in doubt, do not write it.
- **Do not use emojis.** The tone is technical and professional.
- **Do not modify frozen files** (see table above).
- **Do not create a new tab** (`tab` in `docs.json`) **or a new top-level section** (e.g. a group equivalent to "Integrations", "Configuration", "Copilot") **without prior approval from Product Managers.** Any major navigation restructuring requires explicit sign-off.

### Allowed without approval

- Updating content in existing pages (corrections, clarifications, adding examples).
- Creating new pages inside existing sections.
- Fixing typos, broken links, inconsistencies.
- Adding pages to an already existing group in `docs.json`.

### Tone and style

- Technical and direct. Written for developers and DevOps teams.
- No marketing language or superlatives.
- CLI commands and code snippets must be verified or tested.
- Screenshots follow the conventions in the README (13" MacBook, Arc browser, fullscreen).

## Contribution Workflow

1. Edit `.mdx` files and/or `docs.json`.
2. Check the render with `mintlify dev`.
3. Open a Pull Request targeting the `main` branch.

---
name: qovery
description: Use when deploying an application, database, job or Helm chart to Kubernetes with Qovery, on the user's own cloud account or cluster; when creating environments or preview environments; when reading deployment status or logs; or when managing Qovery through its CLI, REST API, Terraform provider or MCP server.
compatibility: Needs the Qovery CLI (curl -s https://get.qovery.com | bash) and a Qovery account. A person approves the first sign-in.
metadata:
  author: qovery
  version: "2.0"
---

# Qovery

Qovery is an Agentic DevOps platform. It deploys and runs applications on Kubernetes clusters in the user's own cloud account (AWS, GCP, Azure, Scaleway) or on their own Kubernetes cluster. The user keeps the cloud account; Qovery is the control plane.

Documentation: https://www.qovery.com/docs (every page is also available as markdown by adding `.md` to its URL). Index: https://www.qovery.com/docs/llms.txt

## Prefer the official skills

For deploying from a repository, install the Qovery agent skills. They detect the stack, write a Dockerfile if needed, plan the changes, ask for approval and deploy:

```bash
curl -fsSL https://skill.qovery.com/install.sh | bash
```

Then use `/qovery-deploy`, `/qovery-troubleshoot`, `/qovery-preview`, `/qovery-policy-token` and the others listed at https://www.qovery.com/docs/getting-started/quickstart/agent-skills.md

## Without the skills: the CLI and API path

Full page: https://www.qovery.com/docs/getting-started/quickstart/cli-and-api.md

```bash
curl -s https://get.qovery.com | bash
qovery auth --headless            # prints a link a person opens once
qovery api organization           # list organizations, keep the id
qovery api organization/<organizationId>/cluster
qovery api organization/<organizationId>/project --method POST --field name=<project>
qovery api project/<projectId>/environment --method POST --field name=production --field mode=PRODUCTION --field cluster=<clusterId>
qovery api environment/<environmentId>/application --method POST --input - < application.json
qovery application deploy --organization "<org>" --project <project> --environment production --application <app> --commit-id latest --watch
qovery application list --organization "<org>" --project <project> --environment production --json
```

- `qovery api` is an authenticated HTTP client for https://api.qovery.com. `qovery api spec` prints the OpenAPI file.
- In CI, set `QOVERY_CLI_ACCESS_TOKEN` to an API token instead of running `qovery auth`.
- For a token limited to what the agent needs (for example, deploy staging only), use an API Policy Token: https://www.qovery.com/docs/configuration/organization/api-policy-token.md

## Concepts

```
Organization
  Cluster        Kubernetes cluster in the user's cloud account, or their own cluster
  Project
    Environment  DEVELOPMENT, STAGING, PRODUCTION, or PREVIEW (one per pull request)
      Services   application (from Git), container (from a registry), database,
                 cronjob, lifecycle job, Helm chart, Terraform, Blueprint, agent task
```

Environment variables and secrets can be set at project, environment or service level. Aliases let one service read another's variables, for example a database URL.

## Do not

- Do not create `qovery.yml`, `.qovery.yml` or `.qovery.toml`. Qovery reads no file from the repository except the `Dockerfile` (and `.tf` files if the user picks Terraform).
- Do not use `qovery init`, a top-level `qovery deploy`, `qovery token create`, or `qovery application|database|project|environment create`. They do not exist. Use `qovery api ... --method POST` or the Terraform provider. `qovery container create` exists for image-based services.
- Do not call `qovery context set` in scripts: it is interactive and takes no flags. Pass `--organization`, `--project` and `--environment` instead.
- Do not ask for cloud admin credentials or create an IAM user with `AdministratorAccess`. A person connects the cloud account to Qovery once; agents only need a Qovery token.
- Do not deploy to a production environment without the user's approval.

## Read status and logs

- CLI: `qovery status`, `qovery log --application <app> ...`, `qovery environment list`.
- MCP server: https://mcp.qovery.com/mcp (OAuth, read-only by default). Setup: https://www.qovery.com/docs/copilot/mcp-server.md
- Troubleshooting guide: https://www.qovery.com/docs/getting-started/troubleshoot/overview.md

## Infrastructure as code

Terraform provider `qovery/qovery`: https://www.qovery.com/docs/terraform-provider/overview.md. An existing setup can be exported to Terraform: https://www.qovery.com/docs/terraform-provider/exporter.md

# Qovery

> Qovery is an Agentic DevOps platform. It deploys and runs applications, databases, jobs and Helm charts on Kubernetes clusters in your own cloud account (AWS, GCP, Azure, Scaleway) or on your own Kubernetes cluster. People use the Console; scripts and coding agents use the CLI, the REST API, the Terraform provider, the MCP server and the agent skills.

## Start here (for coding agents)

1. Install the agent skills, which plan and run deployments for you: `curl -fsSL https://skill.qovery.com/install.sh | bash`. See [Deploy with AI Agent](https://www.qovery.com/docs/getting-started/quickstart/ai-agent.md).
2. Without the skills, follow [Deploy from a Repository with the CLI and API](https://www.qovery.com/docs/getting-started/quickstart/cli-and-api.md). It covers the whole path as commands:
   - `curl -s https://get.qovery.com | bash` then `qovery auth --headless` (a person approves the sign-in link once)
   - create the project, environment and application with `qovery api <path> --method POST`
   - `qovery application deploy --application <name> --commit-id latest --watch`
3. To read status and logs from an agent, connect the [MCP server](https://www.qovery.com/docs/copilot/mcp-server.md) at `https://mcp.qovery.com/mcp`.
4. To limit what an agent can do, use an [API Policy Token](https://www.qovery.com/docs/configuration/organization/api-policy-token.md). See [Let a Coding Agent Deploy Without Cloud Admin Credentials](https://www.qovery.com/docs/getting-started/guides/use-cases/coding-agent-deploy-access.md).
5. API schema: [OpenAPI file](https://www.qovery.com/docs/api-reference/openapi.yaml), also printed by `qovery api spec`.

## These do not exist

- No repository manifest: `qovery.yml`, `.qovery.yml` and `.qovery.toml` are not read. Do not create them.
- No `qovery init`, no top-level `qovery deploy`, no `qovery token create`.
- No `qovery application create`, `qovery database create`, `qovery project create` or `qovery environment create`. Use `qovery api ... --method POST` or Terraform. `qovery container create` exists for image-based services.
- `qovery context set` takes no flags and is interactive. In scripts, pass `--organization`, `--project` and `--environment` to each command.

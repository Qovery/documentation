# Console screenshots

The PNG files in `docs/images/console/` are rendered from these configs, not captured from a live account. The renderer uses the real Console component library, so labels and spacing match production, and every name and number is sample data (Acme, storefront, eu-west-3-prod). No customer data appears.

To update an image after a Console change, re-render its config with the Qovery image generator (`shoot.py <config>.json -o <image>.png`, docs canvas, 2x) and replace the PNG. Keep one config per image, with the same name.

| Config | Image | Used on |
| --- | --- | --- |
| `environment-overview.json` | `docs/images/console/environment-overview.png` | getting-started/basic-concepts |
| `environment-deploy-button.json` | `docs/images/console/environment-deploy-button.png` | getting-started/guides/qovery-101/deploy |
| `cluster-workloads.json` | `docs/images/console/cluster-workloads.png` | getting-started/guides/qovery-101/optimize |
| `agent-task-runs.json` | `docs/images/console/agent-task-runs.png` | getting-started/agent-tasks |

The diagram `docs/images/diagrams/own-cluster-install-paths.svg` is plain SVG: edit it directly.

# Console screenshots

The PNG files in `docs/images/console/` are rendered from these configs, not captured from a live account. The renderer uses the real Console component library, so labels and spacing match production, and every name and number is sample data (Acme, storefront, eu-west-3-prod). No customer data appears.

To update an image after a Console change, re-render its config with the Qovery image generator and replace the PNG. The generator is an internal Qovery tool, not part of this repository: ask the marketing team to run it, or capture the same screen on console-demo.qovery.com, which also shows sample data. Keep one config per image, with the same name.

All configs use a 1440 px wide canvas exported at 2x. `environment-deploy-button.json` is cropped to 520 px high and zoomed to 1.25 on purpose, because it shows one button rather than a whole page.

| Config | Image | Used on |
| --- | --- | --- |
| `environment-overview.json` | `docs/images/console/environment-overview.png` | getting-started/basic-concepts |
| `environment-deploy-button.json` | `docs/images/console/environment-deploy-button.png` | getting-started/guides/qovery-101/deploy |
| `cluster-workloads.json` | `docs/images/console/cluster-workloads.png` | getting-started/guides/qovery-101/optimize |
| `agent-task-runs.json` | `docs/images/console/agent-task-runs.png` | getting-started/agent-tasks |

The diagram `docs/images/diagrams/own-cluster-install-paths.svg` is plain SVG: edit it directly.

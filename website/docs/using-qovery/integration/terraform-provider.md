---
last_modified_on: "2024-08-12"
title: "Terraform Provider"
description: "Learn how to manage the Qovery configuration via our Terraform Provider"
---

import Alert from '@site/src/components/Alert';

Qovery integrates with Terraform to create a complete workflow with a strong developer and operations experience for the different teams from development to critical production applications. By integrating Terraform with Qovery, your team can quickly implement governance at scale while drastically improving the developer experience when deploying and managing applications.


Thanks to our **Terraform provider**, you can automate the creation of your organization, project, clusters, applications and environments (and more).

<Alert type="info">

Check out our Terraform Provider on [Terraform Registry](https://registry.terraform.io/providers/Qovery/qovery/latest/docs) and on [GitHub](https://github.com/Qovery/terraform-provider-qovery).

</Alert>

### GitOps

If you want to manage Qovery in a GitOps way, have a look at [our guide here][guides.tutorial.gitops-with-qovery]

### Examples

Check out our Terraform examples [here](https://github.com/Qovery/terraform-examples).

### Terraform Exporter

Qovery allows you to easily export your environment as a Terraform Manifest and from there manage the configuration of the environment via our Terraform Provider. Check [the Terraform Exporter documentation][docs.using-qovery.configuration.environment#terraform-exporter] to know more.

### Resources

- [Qovery Terraform Registry](https://registry.terraform.io/providers/Qovery/qovery/latest/docs)
- [Qovery Terraform Provider source code](https://github.com/Qovery/terraform-provider-qovery)
- [Terraform Examples](https://github.com/Qovery/terraform-examples)


[docs.using-qovery.configuration.environment#terraform-exporter]: /docs/using-qovery/configuration/environment/#terraform-exporter
[guides.tutorial.gitops-with-qovery]: /guides/tutorial/gitops-with-qovery/

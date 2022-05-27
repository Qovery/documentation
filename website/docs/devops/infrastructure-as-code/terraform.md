---
last_modified_on: "2022-05-13"
title: Terraform
description: "How to use Terraform (IaC) to manage Qovery resources"
---

import Alert from '@site/src/components/Alert';

[Terraform](https://www.terraform.io) is an open-source infrastructure as code software (IaC) tool that provides a consistent CLI workflow to manage hundreds of cloud services. Terraform codifies cloud APIs into declarative configuration files.

<Alert type="success">

Check out our Terraform Provider on [Terraform Registry](https://registry.terraform.io/providers/Qovery/qovery/latest/docs) and [GitHub](https://github.com/Qovery/terraform-provider-qovery).

</Alert>

Qovery integrates with Terraform to create a complete workflow with a strong developer and operations experience for the different teams from development to critical production applications. By integrating Terraform with Qovery, your team can quickly implement governance at scale while drastically improving the developer experience when deploying and managing applications.

For Terraform 0.13 and later, please include this:

```hcl title="main.tf"
terraform {
  required_providers {
    qovery = {
      source = "qovery/qovery"
    }
  }
  required_version = ">= 0.13"
}

# Configure the Qovery provider
provider "qovery" {
  token = "<your-qovery-token>"
}

resource "qovery_organization" "my_organization" {
  name = "MyOrganization"
  plan = "FREE"
}

resource "qovery_aws_credentials" "my_aws_creds" {
  organization_id = qovery_organization.my_organization.id
  name = "my_aws_creds"
  access_key_id = "<your-aws-access-key-id>"
  secret_access_key = "<your-aws-secret-access-key>"

  depends_on = [
    qovery_organization.my_organization
  ]
}

resource "qovery_cluster" "my_cluster" {
  organization_id = qovery_organization.my_organization.id
  credentials_id = qovery_aws_credentials.my_aws_creds.id
  name = "test_terraform_provider"
  cloud_provider = "AWS"
  region = "eu-west-3"
  instance_type = "T3A_MEDIUM"
  min_running_nodes = 3
  max_running_nodes = 10

  depends_on = [
    qovery_organization.my_organization,
    qovery_aws_credentials.my_aws_creds
  ]
}
```

Read our [Qovery Terraform Provider announcement article](https://www.qovery.com/blog/the-qovery-terraform-provider-is-available-now)

Resources:

- [Qovery Terraform Registry](https://registry.terraform.io/providers/Qovery/qovery/latest/docs)
- [Qovery Terraform Provider source code](https://github.com/Qovery/terraform-provider-qovery)




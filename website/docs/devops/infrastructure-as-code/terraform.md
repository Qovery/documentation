---
last_modified_on: "2022-02-11"
title: Terraform
description: "How to use Terraform (IaC) to manage Qovery resources"
---

import Alert from '@site/src/components/Alert';

[Terraform](https://www.terraform.io) is an open-source infrastructure as code software (IaC) tool that provides a consistent CLI workflow to manage hundreds of cloud services. Terraform codifies cloud APIs into declarative configuration files.

<Alert type="warning">

Check out our [Terraform Provider on GitHub](https://github.com/Qovery/terraform-provider-qovery).

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
  organization_id   = qovery_organization.my_organization.id
  name              = "my_aws_creds"
  access_key_id     = "<your-aws-access-key-id>"
  secret_access_key = "<your-aws-secret-access-key>"

  depends_on = [
    qovery_organization.my_organization
  ]
}

resource "qovery_cluster" "my_cluster" {
  organization_id = qovery_organization.my_organization.id
  credentials_id  = qovery_aws_credentials.my_aws_creds.id
  name            = "test_terraform_provider"
  cloud_provider  = "AWS"
  region          = "eu-west-3"
  cpu_per_node = 4
  ram_in_gb_per_node = 8
  min_nodes = 3
  max_nodes = 10

  depends_on = [
    qovery_organization.my_organization,
    qovery_aws_credentials.my_aws_creds
  ]
}
```

Here is an example on how to deploy a container application and a Postgres database:

```hcl title="main.tf"
Check out Github Repo
```




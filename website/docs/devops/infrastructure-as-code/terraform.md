---
last_modified_on: "2021-10-09"
title: Terraform
description: "How to use Terraform (IaC) to manage Qovery resources"
---

import Alert from '@site/src/components/Alert';

[Terraform](https://www.terraform.io) is an open-source infrastructure as code software (IaC) tool that provides a consistent CLI workflow to manage hundreds of cloud services. Terraform codifies cloud APIs into declarative configuration files.

<Alert type="warning">

[Contact us][urls.qovery_contact_us] to get early access to our Terraform provider

</Alert>

Qovery integrates with Terraform to create a complete workflow with a strong developer and operations experience for the different teams from development to critical production applications. By integrating Terraform with Qovery, your team can quickly implement governance at scale while drastically improving the developer experience when deploying and managing applications.

For Terraform 0.13 and later, please include this:

```terraform title="main.tf"
terraform {
  required_providers {
    qovery = {
      source = "qovery/qovery"
    }
  }
  required_version = ">= 0.13"
}

provider "qovery" {
  token = "<your-qovery-token>"
}

resource "qovery_cluster" "prod-cluster" {
  name = "prod cluster"
  cloud_provider = "AWS"
  region = "us-east-2"
  cpu_per_node = 4
  ram_in_gb_per_node = 8
  min_nodes = 3
  max_nodes = 10
  credentials {
    access_key_id = "<your-aws-access-key-id>"
    secret_access_key = "<your-aws-secret-access-key>"
  }
}
```

Here is an example on how to deploy a container application and a PostgreSQL database:

```terraform title="main.tf"
resource "qovery_project" "my project" {
  cluster = "prod-cluster"
  environments {
    "prod-env" = {
      name = "prod"
      mode = "production"
      applications = {
        "my-backend-app" = {
          name = "backend"
          git_url = "https://github.com/evoxmusic/ShortMe-URL-Shortener"
          branch = "master"
          build_mode = "dockerfile"
          dockerfile_path = "/Dockerfile"
          cpu = 1
          ram_in_gb = 0.25
          min_instances = 1
          max_instances = 1
          ports = {
            "http" = {
              protocol = "web-api"
              local_port = 5555
              exposed_port = 443
            }
          }
          environment_variables = {
            "key" = "value"
          }
        }
      }
      databases = {
        "my-psql-db" = {
          name = "psql"
          type = "postgresql"
          version = "13"
          mode = "managed"
          cpu = 1
          ram_in_gb = 1
        }
      }
    }
  }
}
```


[urls.qovery_contact_us]: https://www.qovery.com/contact

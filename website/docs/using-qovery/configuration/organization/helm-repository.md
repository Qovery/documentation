---
last_modified_on: "2023-12-19"
title: "Helm Repository"
description: "Learn how to manage the helm repository allowed in your organization"
---

import Alert from '@site/src/components/Alert';

import Jump from '@site/src/components/Jump';
import Assumptions from '@site/src/components/Assumptions';

This section allows you to define the list of helm repositories that can be used within your organization. Only helm charts stored on those helm repositories are allowed to be deployed on your cluster.

You can access this section by opening the Organization Settings -> Helm Repositories

<p align="center">
  <img src="/img/configuration/organization/access_settings.png" alt="How to access your organization settings" />
</p>

<p align="center">
  <img src="/img/configuration/organization/helm_repository_1.png" alt="Helm" />
</p>

### Create a Helm Repository

<p align="center">
  <img src="/img/configuration/organization/helm_repository_creation.png" alt="Helm" />
</p>

By clicking on "Add Repository" you will be able to create a new Helm Repository by filling these information:
- Repository Name
- Description
- Kind:
  - HTTP: for standard helm repository
  - OCI_ECR: for AWS private OCI-based registries
  - OCI_SCALEWAY: for Scaleway OCI-based registries
  - OCI_DOCKER_HUB: for Docker Hub OCI-based registries
  - OCI_PUBLIC_ECR: for AWS public OCI-based registries
  - OCI_GENERIC_CR: for Generic OCI-based registries
  - OCI_GITHUB_CR: for Github OCI-based registries
  - OCI_GITLAB_CR: for Gitlab OCI-based registries
- Repository Url: the  url of the repository (example: oci://registry-1.docker.io/repository, https://helm.datadoghq.com etc..)
- Credentials: these depend on the chosen repository type. If a helm repository is public, you don't need to fill this part.
- Skip TLS verification: to activate the helm argument --insecure-skip-tls-verify

Now that you have created the repository, you can start using it in order to [create and deploy a helm chart][docs.using-qovery.configuration.helm#deploying-from-a-helm-repository] using the images stored within it.

### Modify or Delete an existing repository
You can modify an existing helm repository by clicking on the "Wheel" button next to it
You can delete an existing helm repository by clicking on the "Trash" button next to it

<Alert type="alert">

Before deleting it, make sure there is no helm service within your organization using a helm chart stored in this repository.

</Alert>

<p align="center">
  <img src="/img/configuration/organization/helm_repository_edit.png" alt="Helm" />
</p>


[docs.using-qovery.configuration.helm#deploying-from-a-helm-repository]: /docs/using-qovery/configuration/helm/#deploying-from-a-helm-repository

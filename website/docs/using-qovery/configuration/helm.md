---
last_modified_on: "2025-06-18"
title: "Helm"
description: "Learn how to configure your Helm on Qovery"
---

import Steps from '@site/src/components/Steps';

import Jump from '@site/src/components/Jump';
import Alert from '@site/src/components/Alert';
import Assumptions from '@site/src/components/Assumptions';

<Assumptions name="documentation">

You have created an [Environment][docs.using-qovery.configuration.environment].

</Assumptions>

A **helm** is one of the service types that can be deployed within an [Environment][docs.using-qovery.configuration.environment]. Via the helm service you can deploy any helm chart from a git repository or helm repository directly on the kubernetes cluster.

Qovery allows you to create and deploy helms from two different sources: Git Repository or Helm Repository

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/docs/using-qovery/configuration/helm.md.erb
-->

## Deploying from a Git Repository
In this configuration, Qovery will pull the chart from the chosen repository and install it on your kubernetes cluster.

## Deploying from a Helm Repository
In this configuration, Qovery will pull the chosen helm repository a chart and install it on your kubernetes cluster.

To improve security and avoid deploying charts from non-authorized repositories, we have decided to restrict the list of Helm Repositories you can use during the setup process. Only an administrator with the right permissions can manage it from the [Helm Repository Management page][docs.using-qovery.configuration.organization.helm-repository]

## Create a Helm

<Steps headingDepth={3}>
<ol>
<li>

Go into the chosen environment and press the "New Service" button and then the "Create helm" button

</li>
<li>

Select the following fields:
- Helm chart Name: give a name to your helm
- Description (Optional): write a text to describe your helm service
- Helm chart Source: Chose between Git Repository or Helm Repository, depending on the source location of your application

If you want to deploy a helm from a Git Repository you will have to select:
- Git Repository: Select the git provider and the git repository hosting your code (it can be hosted on GitHub, GitLab or Bitbucket).
- Branch: Select branch that Qovery should use to deploy your helm
- Root Helm Path: base folder in which the helm chart resides in your repository

If you want to deploy a helm from a Helm Repository you will have to select:
- Helm repository: select the helm repository storing the helm chart. Note: only pre-configured registry are available in this list, check the [Helm Repository Management page][docs.using-qovery.configuration.organization.helm-repository] for more information.
- Chart name: the name of the helm to be deployed with this application (example: jenkins)
- Chart version: the version of the chart to be deployed with this application (example: 1.0.0). 

- Helm arguments: specify the [helm arguments](https://helm.sh/docs/helm/helm_install/#options) to be used during the helm install/upgrade.
- Helm timeout: specify the value to wait for Kubernetes commands to complete. This defaults to 5mins.
- Allow cluster-wide resources: Allow this chart to deploy resources outside of the environment namespace. You must have the [full-access permissions][docs.using-qovery.configuration.organization.members-rbac] on the cluster, the right is present by default in `Admin`, `Devops` and `Owner` roles. Example: if you want to create a new CRD or a new ClusterRole, check this flag.

** Auto Deploy **

Available only if you have selected a git repository as helm source.
See the [Deploying with auto-deploy feature][docs.qovery.deployment.deploying-with-auto-deploy] section.

</li>
<li>

By default, the `values.yaml` next to your `chart.yaml` is used to configure your helm chart but you can create an override in the next two sections.

In the override as file section, define the location of the file containing the override you want to define for the values of this chart.

** Git Repository **

If you want to override it from another already existing values file from a Git Repository you will have to select:
- Git Repository: Select the git provider and git repository hosting your code (it can be hosted on GitHub, GitLab or Bitbucket).
- Branch: Select branch that Qovery should use to deploy your helm
- Overrides path: the path of the values files (example: ci/values_ci.yaml). You can specify multiple paths by separating them with a semi-colon.

** Raw YAML **

If you want to override it with a raw yaml you will have to click on `Create override`. A new editor modal will be opened, to let you write your yaml override. The default values.yaml content will be displayed on the right to help you to respect the structure.


<Alert type="warning">

- Git repository source is recommended as the raw yaml is not versioned.
- On both file types you can use your environment variables in your chart. Check [the section below][docs.using-qovery.configuration.helm#using-the-environment-variables-in-your-chart].

</Alert>

</li>

<li>

if you want to specify one by one your overrides or define additional overrides on top of the one available in your override file, you can pass them as arguments. These will be passed to the helm command via the `--set`, `--set-string` or `--set-json` arguments.

Add a new variable by declaring:
  - Variable: the variable name
  - Value type: 
    - Select `Generic` to pass configuration from the command line
    - Select `String` if you want to pass a string type (and avoid weird numeric conversions like 021341 interpreted as a number and thus the 0 is removed)
    - Select `Json` to set json values (scalars/objects/arrays) from the command line
  - Value

  
<Alert type="warning">

- You can combine override as file and override as argument but, in case of collision, the priority will be given to the override as argument.
- You can use your environment variables in your chart. Check [the section below][docs.using-qovery.configuration.helm#using-the-environment-variables-in-your-chart].

</Alert>
  
</li>

<li>

You will find a recap of your helm setup and you can now decide to:
- Go back to one of the previous steps and change your helm settings (1)
- Create your helm without deploying it (2)
- Create and deploy your helm (3)

<p align="center">
  <img src="/img/configuration/helm/helm_creation_recap.png" alt="Helm" />
</p>

</li>
</ol>
</Steps>

<Alert type="info">

To let you access every Qovery functionality, additional Qovery labels and annotations are automatically injected in some of the Kubernetes objects deployed within your helm.

</Alert>

## Deployment Management
Have a look at the [Deployment Management][docs.using-qovery.deployment] section for more information.

## Configuration

Once created, you can access the configuration of a helm at any time via the Settings tab available on the helm section

You can find below the description of each of the tabs available in this section

### General

General settings section allows you to set up the name and the source of your helm (git repository or helm repository) .

#### Git Repository

If your heml is from a git repository, within this section you can:
- Modify the git provider where your code is stored (it can be hosted on GitHub, GitLab or Bitbucket).
- Modify the branch that Qovery should use for deploying your application
- Modify `Root Helm Path` - base folder in which the helm chart resides in your repository

<Alert type="info">

Qovery supports mono repositories. [See our advanced guide for more details.][guides.advanced.monorepository]

</Alert>

<Alert type="warning">

If your repository contains private submodules using SSH protocol, you will need to add a secret beginning with GIT_SSH_KEY_, containing a private SSH key with access rights to your sumbodules repositories.

Secret names examples:

- GIT_SSH_KEY_GITHUB
- GIT_SSH_KEY_GITLAB
- GIT_SSH_KEY_MYAPP

</Alert>

#### Helm Repository
If your helm is deployed from a helm repository, within this section you can modify:
- Helm repository: select the helm repository storing the helm chart. You can add a new container registry by clicking on `New helm repository`.
- Chart name: the name of the helm to be deployed with this application (example: jenkins)
- Chart version: the version of the chart to be deployed with this application (example: 1.0.0). 

#### Arguments
For both kind of helm source, within this section yoiu can modify:
- Helm arguments: specify the [helm arguments](https://helm.sh/docs/intro/using_helm/#helpful-options-for-installupgraderollback) to be used during the helm install/upgrade.
- Helm timeout: specify the value to wait for Kubernetes commands to complete. This defaults to 5mins.

#### Auto Deploy

See the [Deploying with auto-deploy feature][docs.qovery.deployment.deploying-with-auto-deploy] section.

### Values

Within this section you can modify the values override defined within the creation flow.

#### Override as file

Define the location of the file containing the override you want to define for the values of this chart.

Select the source of your override:

** Git Repository **
If you want to override it from another already existing values file from a Git Repository you will have to select:
- Git Repository: Select the git provider and git repository hosting your code (it can be hosted on GitHub, GitLab or Bitbucket).
- Branch: Select branch that Qovery should use to deploy your helm
- Overrides path: the path of the values files (example: ci/values_ci.yaml). You can specify multiple paths by separating them with a semi-colon.

** Raw YAML **
If you want to override it with a raw yaml you will have to click on `Create override`. A new editor modal will be opened, to let you write your yaml override. The default values.yaml content will be displayed on the right to help you to respect the structure.

On both file types you can use your environment variables in your chart. Check [the section below][docs.using-qovery.configuration.helm#using-the-environment-variables-in-your-chart].

#### Override as arguments

if you want to specify one by one your overrides or define additional overrides on top of the one available in your override file, you can pass them as arguments. These will be passed to the helm command via the `--set`, `--set-string` or `--set-json` arguments.

Add a new variable by declaring:
- Override type: select the type of your variable. For more information, have a look at the Helm documentation
- Variable: the variable name
- Value
  
<Alert type="info">
  
You can combine override as file and override as argument but, in case of collision, the priority will be given to the override as argument.
  
</Alert>

You can use your environment variables in your chart. Check [the section below][docs.using-qovery.configuration.helm#using-the-environment-variables-in-your-chart].

#### Using the environment variables in your chart

Qovery allows you to use the following macros within your override file. These macros will be automatically replaced by Qovery during the deployment phase, allowing you to access additional functionalities.

** Access to the Qovery environment variables **

Macro: `qovery.env.<ENV_VAR_NAME>`

It allows you to access the value of an environment variable or secret stored within Qovery. This is helpful when your deployed helm chart needs to access a secret or an environment variable available in Qovery.

Example: 

On Qovery we have created a database and created two aliases for the database url (DB_URL) and, the database password (DB_PASSWORD). Here an example on how the helm chart can access these environment variables and let your service point to the right database:
```yaml
postgres:
  url: qovery.env.DB_URL
  password: qovery.env.DB_PASSWORD
```

### Network

Within this section you can define the Kubernetes service and port to be exposed publicly over the network. Concretely, Qovery will take care of deploying the right ingress configuration and assign a domain and certificate to reach your service.

You can edit the existing service/port or declare new ones by specifying:
- Service name: this is the kubernetes service name in your helm chart. Qovery automatically fetches the services actually deployed on your kubernetes cluster
- Namespace (only if Allow cluster-wide resources was enabled): this is the kubernetes namespace used by your helm chart to deploy the pods behind the chosen service
- Service port: this is the port exposed internally by your service for the other services. Qovery automatically fetches the ports from your kubernetes cluster based on the selected service
- Protocol: you can select the protocol used by your service. Today Qovery supports the following protocols:
  - HTTPS (Select this protocol if you need to run Websockets)
  - gRPC
- External port: it is the port that can be used to access this service over the internet (when exposed publicly). Note that for HTTP and gRPC the port is set by default to 443.
- Port Name: it is the name assigned to the port. When multiple ports are exposed publicly, its value is used to route the traffic to the right port based on the called subdomain (which will contain the port name value). Since each port is exposed on the port 443, having a different subdomain is the only way to have multiple ports exposed over the internet. If not set, the default value is `p<portNumber>` (see [Qovery Provided Domain section](#qovery-provided-domains) for more information)

<Alert type="info">

When cloning a Helm chart (via a [manual clone][docs.using-qovery.configuration.environment#clone-environment] or the [preview environment feature][docs.using-qovery.configuration.environment#preview-environment]), the network setup copying behavior depends on the service name format:

* The network setup will be copied if the service name is generic (without any service identifier)
* The network setup will not be copied if the service name contains a specific service ID

| Service Name | Format | Clone Behavior |
|--------------|--------|------------------|
| `grafana-front` | Generic name | ✅ Network setup is copied |
| `helm-z1243144-grafana-front` | Contains service ID | ❌ Network setup is not copied |

**Note**: Service IDs are unique identifiers (like `z1243144`) that are embedded within the service name.
</Alert>

#### Important Informations

- Connections on public ports are automatically closed after 60 seconds. If you want to implement long living connection (like for websockets) please make sure to use the rigth ingress timeouts in the [advanced settings section][docs.using-qovery.configuration.advanced-settings#network-settings]

### Domains

## Connecting from the internet

Your helm services can be reached from the internet by publicly exposing at least one of its ports (See the [Ports](#ports) section to know more). Once this is done, Qovery will generate and assign a domain to your application (See [this section](#qovery-provided-domains) to know more). You can customize the domain assigned to your application via the `Domain` section in the settings (see [this section](#custom-domains) to know more).

### Qovery provided domains

For each port publicly exposed, a domain is automatically assigned by Qovery to your helm services. Qovery will manage for you the networking and the TLS configuration for these domains. 

Example: `p80-zdf72de72-z709e1a88-gtw.za8ad0657.bool.sh` or `<service_name>-p80-zdf72de72-z709e1a88-gtw.za8ad0657.bool.sh` for helm services.

Note:
- each service deployed on the same cluster will have the same root domain assigned (example: `za8ad0657.bool.sh`)
- the first characters of the domain (before the `-`) is based on the portName given to the port associated with this domain (See the [port section](#ports))
- a default domain (without the portName) is assigned to the `default port`(See the [port section](#ports)). Example `zdf72de72-z709e1a88-gtw.za8ad0657.bool.sh`

**Special Case - Preview Environment** 
For each port exposed publicly, an additional domain will be created with the following pattern `portName-prId-srvName-envSourceName.cluster_domain`:
- portName: is the port name, as explained above
- prID: is the id of the PR that has generated the preview environment
- srvName: is the name of the service
- envSourceName: is the name of the blueprint environment that has created the current preview environment

domain example: `p80-123-frontend-blueprint.za8ad0657.bool.sh`

### Custom domains

If you prefer to assign your own domain to the helm services, you can customize it from the "Domain" section within the helm services settings.

You can customize the domain of your helm services in different ways, depending on what you want to achieve:
* You want to use your own domain for your helm services
* You want to modify the subdomain assigned to your helm services by Qovery (i.e. change `p80-zdf72de72-z709e1a88-gtw.za8ad0657.bool.sh` into `my-app-domain.za8ad0657.bool.sh`). See [this section](#qovery-provided-domains) to know more about these domains.

<Alert type="info">

If you want to use a root domain as custom domain, your provider must support CNAME Flattening (like Cloudflare) to avoid [APEX](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-zone-apex/) domain issues.

</Alert>

In both cases, you can assign the new custom domain by pressing the `Add Domain` button.

<p align="center">
  <img src="/img/configuration/application/app-16.png" alt="Application Domains" />
</p>

<Alert type="info">

This configuration will be **automatically removed** on every cloned environment or preview environment in order to avoid domain collision.

</Alert>

For each custom domain, a green checkmark will appear if the domain is correctly configured. You can perform another check by clicking on the checkmark. If you're behind a CDN, we will only check if your custom domain resolves to an IP address.

<p align="center">
  <img src="/img/configuration/application/domain_check.png" alt="Check Domains" />
</p>

If there's an issue with a domain, a global error message will be displayed, and you can view the error details by hovering over the red cross. After correcting your configuration, you can perform another check by clicking on the red cross.

<p align="center">
  <img src="/img/configuration/application/domain_check_error.png" alt="Check Domains" />
</p>

#### Configuring your own domain

Once the domain is added within the Qovery console (Example: mydomain.com), you need to configure within your DNS two `CNAME` records pointing to the domain provided by Qovery, as shown in the UI (example: `mydomain.com CNAME za7cc1b71-z4b8474b3-gtw.zc531a994.rustrocks.cloud` and `*.mydomain.com CNAME za7cc1b71-z4b8474b3-gtw.zc531a994.rustrocks.cloud`). 

Having a wildcard domain entry (example: `*.mydomain.com`) configured on your DNS will avoid you to modify the Qovery setup every time you want to add a new subdomain. If `wildcard` is not supported by your DNS provider, you will have to configure each subdomain manually.

If a service needs to expose more than one port publicly, you can define a dedicated subdomain to redirect the traffic on the right port by setting the “Port Name” value within the [port settings](#ports).

After re-deploying the service, Qovery will automatically handle the TLS/SSL certificate creation and renewal for the configured domain.

<p align="center">
  <img src="/img/configuration/application/custom-domain.png" alt="Custom Domain" />
</p>

<Alert type="info">

[We prepared a guide and video tutorial that explains how to set up your custom domain.][guides.getting-started.setting-custom-domain]

</Alert>

** Special case - domain behind a CDN **

If your service is behind a CDN using a `proxy mode` (i.e. the traffic is routed through the CDN to Qovery), make sure to enable the option `Domain behind a CDN` and disable the option "Generate certificate" on the domain setup. Since the certificate of your domain is directly managed by the CDN, Qovery won't be able to do that for you and it will raise warnings on your application status.

<p align="center">
  <img src="/img/configuration/application/cdn-proxy.png" alt="CDN Proxy" />
</p>

If you are using Cloudflare to manage your CDN, we can also manage automatically your custom domain configuration via a wildcard domain setup for the whole cluster. Check our [documentation here][docs.using-qovery.configuration.clusters#use-custom-domain-and-wildcard-tls-for-the-whole-cluster-beta]

#### Change the auto assigned sub-domain

You can specify a different sub-domain for your helm services as long as it belongs to the assigned cluster domain (see [Qovery provided domains](#qovery-provided-domains)). 
Example: 
- your current domain is zdf72de71-z709e1a85-gtw.za8ad0659.bool.sh (so your assigned cluster domain is `za8ad0659.bool.sh`)
- you can enter a new custom domain `myfrontend.za8ad0659.bool.sh` (since it is a subdomain of the cluster domain)

The helm services will now be accessible from both the default and the new custom domain.

<Alert type="info">

Qovery does not check collision in the domain declaration. Make sure you assign a unique subdomain within your cluster.

</Alert>

## Logs

To learn how to display your helm logs, navigate to [logs section][docs.using-qovery.deployment.logs#live-logs]

## Clone

You can create a clone of the service via the clone feature. A new service with the same configuration (see below for exceptions) will be created into the target environment.

<p align="center">
  <img src="/img/clone_service.png" alt="Clone Service" />
</p>

The target environment can be the same as the current environment or even another one in a completely different project.

** Important information **

Not every configuration parameter will be copied within the new service for consistency reasons. The configuration is fully or partially copied depending on the target environment:
- same environment:
    - custom domain: this setup is not copied into the new service (to avoid collision)
- another environment:
    - custom domain: this setup is not copied into the new service (to avoid collision)
    - environment variable: aliases defined on environment variables are not copied (since the aliased env var might not exist)
    - deployment pipeline: stage setup is not copied (since the target stage might not exist)
    - number of instances: if the target environment runs on a Qovery EC2 cluster, the max number of instances is set to 1 (Qovery EC2 constraint)

Please check the configuration of the new service before deploying it.

### Advanced Settings

You can further customize the service behaviour via the service advanced settings. Check [this documentation][docs.using-qovery.configuration.advanced-settings] to know more.

## Delete a Helm

<Steps headingDepth={3}>
<ol>
<li>

Choose your helm

</li>
<li>

In the helm overview, click on the `3 dots` button and remove the helm.

</li>
</ol>
</Steps>


[docs.qovery.deployment.deploying-with-auto-deploy]: /docs/using-qovery/deployment/deploying-with-auto-deploy/
[docs.using-qovery.configuration.advanced-settings#network-settings]: /docs/using-qovery/configuration/advanced-settings/#network-settings
[docs.using-qovery.configuration.advanced-settings]: /docs/using-qovery/configuration/advanced-settings/
[docs.using-qovery.configuration.clusters#use-custom-domain-and-wildcard-tls-for-the-whole-cluster-beta]: /docs/using-qovery/configuration/clusters/#use-custom-domain-and-wildcard-tls-for-the-whole-cluster-beta
[docs.using-qovery.configuration.environment#clone-environment]: /docs/using-qovery/configuration/environment/#clone-environment
[docs.using-qovery.configuration.environment#preview-environment]: /docs/using-qovery/configuration/environment/#preview-environment
[docs.using-qovery.configuration.environment]: /docs/using-qovery/configuration/environment/
[docs.using-qovery.configuration.helm#using-the-environment-variables-in-your-chart]: /docs/using-qovery/configuration/helm/#using-the-environment-variables-in-your-chart
[docs.using-qovery.configuration.organization.helm-repository]: /docs/using-qovery/configuration/organization/helm-repository/
[docs.using-qovery.configuration.organization.members-rbac]: /docs/using-qovery/configuration/organization/members-rbac/
[docs.using-qovery.deployment.logs#live-logs]: /docs/using-qovery/deployment/logs/#live-logs
[docs.using-qovery.deployment]: /docs/using-qovery/deployment/
[guides.advanced.monorepository]: /guides/advanced/monorepository/
[guides.getting-started.setting-custom-domain]: /guides/getting-started/setting-custom-domain/

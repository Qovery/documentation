---
last_modified_on: "2025-03-18"
title: "AWS EKS with Karpenter"
description: "Learn how to configure your AWS Kubernetes clusters with Karpenter on Qovery"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Steps from '@site/src/components/Steps';

import Jump from '@site/src/components/Jump';
import Alert from '@site/src/components/Alert';
import Assumptions from '@site/src/components/Assumptions';

Karpenter automatically launches just the right compute resources to handle your cluster's applications. It is designed to let you take full advantage of the cloud with fast and simple compute provisioning for Kubernetes clusters.
You can our [blog post](https://www.qovery.com/blog/save-up-to-60-on-aws-costs-with-eks-and-karpenter/) for more information."

### Creating a AWS EKS Cluster with Karpenter

<Steps headingDepth={3}>
<ol>
<li>

Click on `AWS` as hosting mode and then `Qovery Managed` option:

<p align="center">
  <img src="/img/configuration/clusters/cluster_hosting_selection_aws.png" alt="Cluster AWS" />
</p>

In the `Create Cluster` window enter:

* `Cluster name`: enter the name of your choice for your cluster.
* `Description`: enter a description to identify better your cluster.
* `Production cluster`: select this option if your cluster will be used for production. Note: Karpenter is currently only available for non-production clusters.
* `Region`: select the geographical area in which you want your cluster to be hosted.
* `Credentials`: select one of the existing cloud provider credentials or add a new one by clicking on `New Credentials`. In the New credentials window, add the credentials that you have generated on your cloud provider console ([Procedure for AWS account][docs.getting-started.install-qovery.aws.cluster-managed-by-qovery.quickstart#attach-aws-credentials]). Added credentials can be used later to create and manage additional cluster.

To confirm, click `Next`.

</li>
<li>

In the `Set Resources` window, select:

* `Karpenter`: Toggle the switch to enable Karpenter on your AWS EKS cluster
* `Instance types scopes`: By editing it, you can apply different filters to the node architectures, categories, families, and sizes. On the right, you can view all the instance types that match the applied filters. This means Karpenter will be able to spawn nodes on any of the listed instance types.
  * `Architectures`: by default both `AMD64` and `ARM64` architectures are selected.
  * `Default build architecture`: by default `AMD64`. If you build your application with the Qovery CI, your application will be built using this architecture by default.
  * `Families`: by default all families are selected.
  * `Sizes`: by default all sizes are selected.
* `Spot instances`: In order to reduce even more your costs, you can also enable the spot instances on your clusters. Spot instances cost up to 90% less compared to On-Demand prices. But keep in mind that spot instances can be terminated by the cloud provider at any time. Check this [documentation](https://aws.amazon.com/ec2/spot/) for more information. Even if this flag is enabled, the statefulsets and Nginx controller won't run on spot instances.

<p align="center">
  <img src="/img/configuration/clusters/spot_usage.png" alt="Spot usage" />
</p>

<Alert type="warning">
Instance type selection from your Qovery Console has direct consequences on your cloud provider’s bill. While Qovery allows you to switch to a different instance type whenever you want, it is your sole responsibility to keep an eye on your infrastructure costs, especially when you want to upsize.

Please be aware that changing the instance type or disk size might cause a downtime for your service.

For more information on the instance types provided by each cloud provider and their associated pricing, see [What are the different instance types available when creating a cluster?][docs.using-qovery.configuration.clusters#what-are-the-different-instance-types-available-when-creating-a-cluster]

Also, before downsizing, you need to ensure that your applications will still have enough resources to run correctly.

</Alert>

<br/>

To confirm, click `Next`.

</li>
<li>

In the `Features` step, select the features you want to enable on your cluster.

If you want to manage the network layer of your cluster by yourself, you can switch VPC mode to `Deploy on my existing VPC` to use your own VPC instead of the one provided by Qovery.

<Alert type="warning">

These options can only be configured during cluster creation and cannot be modified later.

</Alert>

<Tabs
  centered={true}
  className={"rounded"}
  defaultValue={"vpc managed by qovery"}
  placeholder="Select a VPC mode"
  select={false}
  size={null}
  values={[
    {"group":"Features","label":"VPC managed by Qovery","value":"vpc managed by qovery"},
    {"group":"Features","label":"Use your existing VPC","value":"use existing vpc"},
  ]}>

<TabItem value="vpc managed by qovery">

#### Static IP

By default, when your cluster is created, its worker nodes are allocated public IP addresses, which are used for external communication. For improved security and control, the **Static IP** feature allows you to ensure that outbound traffic from your cluster uses specific IP addresses.

Here is what will be deployed on your cluster:
* Nat Gateways
* Elastic IPs
* Private subnets

Once set up, here is the procedure to find your static IP addresses on `AWS`:
- On your AWS account, select the VPC service.
- On the left menu, you’ll find Elastic IP addresses. Once on it, in the Allocated IPv4 address column, you’ll have your public IPs.

<Alert type="info">

If you work in a sensitive business area such as financial technology, enabling the **Static IP** feature can help fulfil the security requirements of some of the external services you use, therefore making it easier for you to get whitelisted by them.

This feature has been activated by default. Since February 1, 2024, AWS charge public IPv4 Addresses. Disabling it may cost you more, depending on the number of nodes in your cluster. Check this [link](https://aws.amazon.com/blogs/aws/new-aws-public-ipv4-address-charge-public-ip-insights/) for more information.

</Alert>

#### Custom VPC Subnet

Virtual Private Cloud (VPC) peering allows you to set up a connection between your Qovery VPC and another VPC on your AWS account. This way, you can access resources stored on your AWS VPC directly from your Qovery applications.

A VPC can only be used if it has at least one range of IP addresses called a **subnet**. When you create a cluster, Qovery automatically picks a default subnet for it. However, to perform VPC peering, you may want to define which specific VPC subnet you want to use, so that you can avoid any conflicting settings. To do so, you can enable the **Custom VPC Subnet** feature on your cluster. For more information on how to set up VPC peering, [see our dedicated tutorial](https://hub.qovery.com/guides/tutorial/aws-vpc-peering-with-qovery/).

</TabItem>

<TabItem value="use existing vpc">

You have to specify the `VPC id` (1) and ensure that in your VPC settings you have enabled the `DNS hostnames` (2):

<p align="center">
  <img src="/img/configuration/clusters/existing_vpc_aws_dns_hostnames.png" alt="Existing VPC AWS DNS Hostnmaes" />
</p>

Then you have to specify the different subnets ids:

**EKS**:

The EKS subnets are mandatory, you have to specify at least **one subnet id per zone** (1) and ensure you have enabled the **auto-assign public IPv4 address** setting on your subnets (2).

<p align="center">
  <img src="/img/configuration/clusters/existing_vpc_aws_auto_assign.png" alt="Existing VPC AWS DNS Hostnmaes" />
</p>

**Managed databases**:

This section is exclusively for enabling managed databases (container databases will be enabled by default).

Depending on the managed databases you want to you use (**MongoDB**, **RDS:MySQL/PostgreSQL** and **Redis**), specify at least one subnet id per zone.

</TabItem>
</Tabs>
</li>
<li>

In the `Ready to install your cluster` window, check that the services needed to install your cluster are correct.

You can now press the `Create and Install` button.

Your cluster is now displayed in your organization settings, featuring the `Installing...` status (orange status). Once your cluster is properly installed, its status turns to green and you will be able to deploy your applications on it.

You can follow the execution of the action via the cluster status and/or by accessing the [Cluster Logs][docs.using-qovery.configuration.clusters#logs]

</li>
</ol>
</Steps>

### Migrating from AWS with auto-scaler to AWS with Karpenter

#### Requirements


<Alert type="warning">

Please check carefully the following requirements to ensure a successful migration with the minimum downtime.

</Alert>

<Steps headingDepth={3}>
<ol>
<li>

A SQS queue will be created. Update the IAM permissions of the Qovery user: make sure to use the [latest version here](https://hub.qovery.com/files/qovery-iam-aws.json) to add the permission on SQS.

</li>

<li>

Your cluster should use the [Instance Metadata Service Version 2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html): make sure to set the `aws.eks.ec2.metadata_imds` cluster advanced settings to `required` if not already set (more details [here](https://hub.qovery.com/docs/using-qovery/configuration/cluster-advanced-settings/#awseksec2metadata_imds)).
Redeploy your cluster before enabling Karpenter to apply the advanced setting change.

<Alert type="warning">

If some of your services are using the Instance Metadata Service Version 1, you must first update them to support the Version 2.

</Alert>

</li>

<li>

If you have configured an existing vpc for your cluster, you'll need to indicate some additionnal subnets dedicated to fargate:
* those subnets must be **private**
* they must all have access to internet through a NAT gateway

</li>

<li>

If you have deployed some daemonsets, you must update their definitions to enable them to run on every node of the future nodepools (stable & default). Everything is explained in [our guide](https://hub.qovery.com/guides/advanced/deploy-daemonset-with-karpenter/)

</li>

</ol>

</Steps>

#### Enable karpenter

You can easily activate Karpenter on your non-production existing cluster by following this process:

<Steps headingDepth={3}>
<ol>
<li>

Open your [Qovery Console][urls.qovery_console].

</li>
<li>

On the left menu bar, click on the Cluster page.

</li>
<li>

To access your cluster settings, click on the wheel button:

<p align="center">
  <img src="/img/configuration/clusters/cluster_settings.png" alt="Display Cluster Settings" />
</p>

</li>

<li>

Access to `Resources` section and switch on the toggle `Activate Karpenter`

</li>

<li>

Update your cluster by selecting the action `Update` from the drop-down menu.

</li>

<li>

Once the update is complete, your cluster will be running on Karpenter. By default, only the instance types selected when you created your AWS cluster with the auto-scaler will be configured. You can add additional instance types by editing the instance types in the resources section.

</li>

<li>

Please redeploy all your environments of your cluster: this will automatically update your services configuration to run them on the appropriate nodepool.

</li>

</ol>
</Steps>

### Managing your Cluster Settings

To manage the settings of an existing cluster:

<Steps headingDepth={3}>
<ol>
<li>

Open your [Qovery Console][urls.qovery_console].

</li>
<li>

On the left menu bar, click on the Cluster page.

</li>
<li>

To access your cluster settings, click on the wheel button:

<p align="center">
  <img src="/img/configuration/clusters/cluster_settings.png" alt="Display Cluster Settings" />
</p>

</li>

</ol>
</Steps>

Below you can find a description of each section

#### General

The `General` tab allows you to define high-level information on your cluster:

|Item|Description|
|--------------|---------------------------|
|Cluster Name|To edit the name of your cluster.|
|Description|To enter or edit the description of your cluster.|
|Production Cluster|To enter or edit the production flag of your cluster.|

#### Credentials

Here you can manage here the cloud provider credentials associated with your cluster.

If you need to change the credentials:
* generate a new set of credentials on your cloud provider([Procedure for AWS account][docs.getting-started.install-qovery.aws.cluster-managed-by-qovery.quickstart#attach-aws-credentials])
* create the new credential on the Qovery by opening the drop-down and selecting "New Credentials"

Once created and associated, you need to [updating your cluster][docs.using-qovery.configuration.clusters#updating-a-cluster] to apply the change.

#### Resources

Qovery deploys two node pools by default:

- **Stable node pool**: Used for single instances and internal Qovery applications. For example, any containerized databases or application having the number of minimum and maximum instances equal to 1 will be deployed on this nodepool. On this nodepool the consolidation is deactivated by default.
- **Default node pool**: Designed to handle general workloads and serves as the foundation for deploying most applications.

Qovery allows you to modify the resources allocated to your cluster:

##### Shared settings for both nodepools:
- **Instance types**: Define the list of instance types that can be used.
- **Spot instances**: Enable or disable spot instances.
- **Node disk size (GB)**: Specify the disk capacity allocated per worker node, determining the amount of data each node can store.

<Alert type="warning">
Instance type selection from your Qovery Console has direct consequences on your cloud provider’s bill. While Qovery allows you to switch to a different instance type whenever you want, it is your sole responsibility to keep an eye on your infrastructure costs, especially when you want to upsize.

For more information on the instance types provided by each cloud provider and their associated pricing, see [What are the different instance types available when creating a cluster?][docs.using-qovery.configuration.clusters#what-are-the-different-instance-types-available-when-creating-a-cluster]

</Alert>

##### Nodepool specific settings:
- **Consolidation schedule** *(Stable nodepool only)*: Optimizes resource usage by consolidating workloads onto fewer nodes. This feature is not available for the default nodepool, as consolidation can happen at any time. We recommend enabling this option; otherwise, nodes will never be consolidated, leading to unnecessary infrastructure costs.
- **Node pool limits**: Configure CPU and memory limits to ensure nodes stay within defined resource constraints, preventing excessive costs.

#### Image registry

In this tab, you will see that a container registry already exist (called `registry-{$UIID}`).
This is your cloud provider container registry used by Qovery to manage the deployment of your applications by mirroring the docker images.

The credentials configured on this registry are the one used to create the cluster. But you can still update them if you prefer to manage them separately (dedicated pair of creds just to access the registry).

Check [this link][docs.using-qovery.deployment.image-mirroring] for more information.

#### Features

The `Features` tab in your cluster settings allows you to check if the [**Static IP**](#static-ip),  [**Custom VPC subnet**](#custom-vpc-subnet), [**Deploy on existing VPC**](#use-existing-vpc) features are enabled on your cluster. The enabled features cannot be changed after the creation of the cluster.

#### Network

The `Network` tab in your cluster settings allows you to update your Qovery VPC route table so that you can perform VPC peering. For step-by-step guidelines on how to set up VPC peering, [see our dedicated tutorial](https://hub.qovery.com/guides/tutorial/aws-vpc-peering-with-qovery/).

### Defining cluster node constraints to run your Services

#### Define if your service can run on a on-demand instance

When using spot instances in your cluster, you may want to ensure that certain critical services, such as databases or essential applications, are always deployed on on-demand instances.

To specify that a service should be deployed on an `on-demand` instance, manually set the `deployment.affinity.node.required` advanced setting to:

```json
{"karpenter.sh/capacity-type":"on-demand"}
```

#### Define the instance type to run your service

In some cases, you may need to ensure that a specific service runs on a particular instance type to meet performance, compliance, or cost requirements.

For example, to assign a service to the t3a.xlarge instance type, manually set the `deployment.affinity.node.required` advanced setting to:

```json
{"node.kubernetes.io/instance-type": "t3a.xlarge"}
```

<Alert type="info">

The specified instance type must be included in the list of instance types defined in the [NodePool configuration][docs.using-qovery.configuration.clusters.aws-with-karpenter#resources].

</Alert>


[docs.getting-started.install-qovery.aws.cluster-managed-by-qovery.quickstart#attach-aws-credentials]: /docs/getting-started/install-qovery/aws/cluster-managed-by-qovery/quickstart/#attach-aws-credentials
[docs.using-qovery.configuration.clusters#logs]: /docs/using-qovery/configuration/clusters/#logs
[docs.using-qovery.configuration.clusters#updating-a-cluster]: /docs/using-qovery/configuration/clusters/#updating-a-cluster
[docs.using-qovery.configuration.clusters#what-are-the-different-instance-types-available-when-creating-a-cluster]: /docs/using-qovery/configuration/clusters/#what-are-the-different-instance-types-available-when-creating-a-cluster
[docs.using-qovery.configuration.clusters.aws-with-karpenter#resources]: /docs/using-qovery/configuration/clusters/aws-with-karpenter/#resources
[docs.using-qovery.deployment.image-mirroring]: /docs/using-qovery/deployment/image-mirroring/
[urls.qovery_console]: https://console.qovery.com

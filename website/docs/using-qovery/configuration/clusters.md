---
last_modified_on: "2023-03-20"
title: "Clusters"
description: "Learn how to configure your Kubernetes clusters on Qovery"
---

import Steps from '@site/src/components/Steps';

import Jump from '@site/src/components/Jump';
import Alert from '@site/src/components/Alert';
import Assumptions from '@site/src/components/Assumptions';

This section brings you answers to all the questions our users usually ask about clusters:

* [What is a cluster?][docs.using-qovery.configuration.clusters#what-is-a-cluster]
* [Why do I need a cluster?][docs.using-qovery.configuration.clusters#why-do-i-need-a-cluster]
* [What are the different instance types available when creating a cluster?][docs.using-qovery.configuration.clusters#what-are-the-different-instance-types-available-when-creating-a-cluster]
* [How does Qovery handle cluster updates and upgrades?][docs.using-qovery.configuration.clusters#how-does-qovery-handle-cluster-updates-and-upgrades]
* [How do I set up a cluster?][docs.using-qovery.configuration.clusters#creating-a-cluster]
* [How do I update my cluster settings?][docs.using-qovery.configuration.clusters#managing-your-cluster-settings]

### What is a cluster?

At Qovery, when we refer to clusters, we mean Kubernetes clusters. A Kubernetes cluster is a collection of node machines that allows you to run containerized applications. It is usually made up of:

* **Pods**: think of a pod as one instance of your application. Pods are the smallest deployable objects in Kubernetes, and they are hosted by worker nodes.
* **Worker Nodes**: worker nodes essentially run your applications and workloads. When you create a cluster from your Qovery Console, it generates the set up of worker nodes (also called “instances”, “EC2 instances” for AWS users, or “droplets” for DigitalOcean users).
Qovery allows you to define worker nodes settings, so that you end up deploying the right type of instances on your infrastructure based on your CPU, memory, storage and network performance needs.
* a **Control Plane** (or **Master Node**): the control plane manages the worker nodes. Since we deploy managed Kubernetes services, the control plane is handled exclusively by your cloud provider, and left untouched by Qovery.

<p align="center">
  <img src="/img/configuration/clusters/cluster-overview.jpg" alt="Application" />
</p>

For more information on Kubernetes clusters, see [the Kubernetes documentation](https://kubernetes.io/docs/concepts/overview/components/).

### Why do I need a cluster?

Qovery is built on top of Kubernetes, which means we need Kubernetes clusters to be able to deploy and run your applications.

Thanks to clusters, you can easily deploy several (and many) instances of the same application, so that if one fails, the others can instantly take over. Also, clusters can auto-scale, meaning that the number of worker nodes in a cluster can automatically go up or down as traffic fluctuates on your application(s), thus ensuring high availability and performance. Clusters are also extremely useful [to isolate your production environment from your staging environment](https://www.qovery.com/blog/how-to-isolate-your-production-from-staging-with-kubernetes).

In short, through the use of clusters, Kubernetes provides you with a resilient, flexible and powerful infrastructure, fit for production environment needs and requirements. And with the help of Qovery, setting up and maintaining your Kubernetes clusters has never been easier.

Qovery allows you to create and manage two types of clusters:

|                             |**Managed K8S **                                                                                                                                 |** BETA - Single EC2 (K3s)**                                                                                                         |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| **Description**             | A multi-node Kubernetes cluster managed by your cloud provider (EKS, Kapsule etc..)                                                             | K3s Cluster running on a single EC2 instance (single-node) **Available only on AWS and still in BETA**
| **Usage**                   | Hosting professional applications in production (resilient, scalable and powerful infrastructure). Scalable staging / preview / dev environments| Hobby projects, trying out Qovery, ephemeral environments deployment |
| **Cloud provider cost**     | Starting from 200$/month, based on the chosen instance type                                                                                    | starting from 20$/month, based on the chosen instance type               |
<br/>
<Alert type="warning">
Single EC2 (K3s) is still in BETA phase and has the following limitations

* You can’t access the historical logs and thus you can access your application logs only if it's running (Since we don’t have loki installed)
* No public accessibility for DB container (we do not manage the public DNS entry for db). We will work on it in the upcoming weeks, in the meantime we will write a guide on how to connect to the DB via the ssh key / kubeconf
* You can configure only 1 instance per application. Thus you can’t change the number of instances nor activate the sticky session feature
* We do not manage YET the cluster version upgrades
* Stop instance feature not ready YET
* You can’t change the cluster settings without a service downtime since we kill the instance and we spawn a new one
* We do not manage YET the external storage
* We do not support YET the VPC setting
* If you want to connect via SSH, you can't get YET the instance hostname directly in the Qovery console, you need to get it from the AWS console

</Alert>

<br/>

<Alert type="warning">

K3s clusters are [deployed on one AWS availability zone](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones). Therefore, if a network or power disruption happens on the availability zone where your K3s instance is running, your applications will no longer be available until it is solved.

This is why we do not recommend installing K3s clusters to run professional applications in a production environment.

</Alert>

### What are the different instance types available when creating a cluster?

The range of instance types available at cluster creation depends on your cloud provider:

* AWS offers over 400 instance types. You can [view their details on the official AWS website](https://aws.amazon.com/ec2/instance-types/), as well as [their pricing](https://aws.amazon.com/ec2/pricing/on-demand/).
* Scaleway also offers a wide range of instance types, [whose details and pricing you can view on the official Scaleway website](https://www.scaleway.com/en/pricing/).

<Alert type="info">

Qovery supports only instance types having an x86_64 architecture.

</Alert>

### How does Qovery handle cluster updates and upgrades?

As far as cluster updates and upgrades to a newer version of Kubernetes are concerned, our Qovery engineering team handles everything in due time, so you don’t even need to think about it!

<Alert type="info">

You may notice that Qovery does not provide you with the latest Kubernetes version offered by your cloud provider. This is due to the high amount of testing we need to perform to ensure smooth upgrades with no interruptions for your applications. Our priority is always to guarantee you maximum uptime.

</Alert>

<Alert type="warning">

Please **DO NOT** upgrade the cluster version by yourself from the cloud provider console.

That's the whole point of Qovery, we manage this task for you so you don't have to bother.
If you did update by mistake, then you need to reach to Qovery team in order to get some help.

**Proceeding with a cluster version upgrade outside of Qovery will prevent any future update on this cluster** and might be irreversible preventing Qovery to properly deploy on this cluster. Most importantly will expose you to some unknown / untested areas which can put your applications stability at risks. 

</Alert>

Usually we work on a given upgrade for one month of intensive testing on our end in order to make sure everything will be smooth for you. Once we are pretty confident our stack is stable, we move on with the following steps wich last approximatively 3 weeks:

1. Notify users about new version coming in approximatively 1 month before
2. Upgrade clusters for a handful of beta-tester customers (1 week)
3. Upgrade all non-production flagged clusters (1-2 week(s))
4. Upgrade all clusters

If, somehow the planning or timeframe for the upgrade is clashing with your busines needs, you will be able to contact us so we can arrange the best timeframe for you.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/docs/using-qovery/configuration/clusters.md.erb
-->

## What do you do when a vulnerability is found?

Security is our main concern. When a vulnerability is found, here are the actions that we take:

1. We quickly identify how significant is the impact of the vulnerability.
2. We look at how we can solve or mitigate the vulnerability.
3. We transparently communicate with our customers on the vulnerability to help them take the right actions.


## Managing your Clusters with Qovery

From the [Qovery Console][urls.qovery_console], you can manage the settings of the clusters you want to run on your infrastructure. The clusters are then created (or updated) by the cloud provider that hosts them.

### Creating a Cluster

<Alert type="info">

To install a cluster, Qovery needs a set of credentials to access your cloud provider account (example: AWS secret_access_key and access_key_id). If this is the first time you are installing a cluster with Qovery, have a look at this guide on how to get the credentials: [here for AWS][docs.using-qovery.configuration.cloud-service-provider.amazon-web-services#connect-your-aws-account], [here for Scaleway][docs.using-qovery.configuration.cloud-service-provider.scaleway#connect-your-scaleway-account].

</Alert>

To create a cluster:

<Steps headingDepth={3}>
<ol>
<li>

Open your [Qovery Console][urls.qovery_console].

</li>
<li>

On the left menu bar, click on the Cluster page:

<p align="center">
  <img src="/img/configuration/clusters/cluster_section_access.png" alt="Cluster Access" />
</p>

</li>
<li>

Click `Add Cluster`:

<p align="center">
  <img src="/img/configuration/clusters/add-cluster-button.png" alt="Add Cluster Button" />
</p>

</li>
<li>

In the `Create Cluster` window enter:

* `Cluster name`: enter the name of your choice for your cluster.
* `Description`: enter a description to identify better your cluster.
* `Production cluster`: select this option if your cluster will be used for production.
* `Cloud provider`: select your cloud provider.
* `Region`: select the geographical area in which you want your cluster to be hosted.
* `Credentials`: select one of the existing cloud provider credentials or add a new one by clicking on `New Credentials`. In the New credentials window, add the credentials that you have generated on your cloud provider console ([Procedure for AWS account][docs.using-qovery.configuration.cloud-service-provider.amazon-web-services#connect-your-aws-account], [Procedure for Scaleway account][docs.using-qovery.configuration.cloud-service-provider.scaleway#connect-your-scaleway-account]). Added credentials can be used later to create and manage additional cluster.

To confirm, click `Next`.

</li>
<li>

In the `Set Resources` window, select: 

* `Cluster`: select the cluster type to use. Please refer to this section for [more information][docs.using-qovery.configuration.clusters#why-do-i-need-a-cluster]. 
* `Instance type`: select the type of [worker nodes][docs.using-qovery.configuration.clusters#what-is-a-cluster] you want to deploy to your cluster:
* `Disk size`: select the size of the disks to be attached to your cluster instances (to locally store container images etc..). Setting available only on AWS.
* `Node auto-scaling`: define the minimum and the maximum number of worker nodes that your cluster can run. The lowest number is the number of worker nodes running on your infrastructure at any time, while the highest number is the maximum number of worker nodes that can automatically be deployed as traffic grows. Please note that a minimum of 3 worker nodes is required to deploy your EKS cluster.

<br/>

<Alert type="warning">
Instance type selection from your Qovery Console has direct consequences on your cloud provider’s bill. While Qovery allows you to switch to a different instance type whenever you want, it is your sole responsibility to keep an eye on your infrastructure costs, especially when you want to upsize.

For more information on the instance types provided by each cloud provider and their associated pricing, see [What are the different instance types available when creating a cluster?][docs.using-qovery.configuration.clusters#what-are-the-different-instance-types-available-when-creating-a-cluster]

Also, before downsizing, you need to ensure that your applications will still have enough resources to run correctly.

</Alert>

<br/>

<Alert type="info">

At the bottom of the window, you can see an estimate of the cost associated with the selected instance type.

</Alert>

To confirm, click `Next`.

</li>
<li>

*(Only for AWS K8S Clusters)* In the `Features` window, select the features you want to enable on your cluster.

<Alert type="info">

For more information, see [Features][docs.using-qovery.configuration.clusters#features].

</Alert>

</li>
<li>

*(Only for Single EC2 K3S Clusters)* In the `Set SSH Key` window:

The SSH key enables you (or Qovery on your behalf) to freely manage your cluster. For information on how to generate an SSH key, see [Generating an SSH Key for Your Cluster][docs.using-qovery.configuration.clusters#generating-an-ssh-key-for-your-cluster].

You can add an SSH key to your cluster settings later, however it is recommended to do it at cluster creation to avoid downtime.

</li>
<li>

In the `Ready to install your cluster` window, check that the services needed to install your cluster are correct.

You can now press the `Create and Install` button.

Your cluster is now displayed in your organization settings, featuring the `Installing...` status (orange status). Once your cluster is properly installed, its status turns to green and you will be able to deploy your applications on it.

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

On the left menu bar, click on the Cluster page:

<p align="center">
  <img src="/img/configuration/clusters/cluster_section_access.png" alt="Cluster Access" />
</p>

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
- generate a new set of credentials on your cloud provider([Procedure for AWS account][docs.using-qovery.configuration.cloud-service-provider.amazon-web-services#connect-your-aws-account], [Procedure for Scaleway account][docs.using-qovery.configuration.cloud-service-provider.scaleway#connect-your-scaleway-account]) 
- create the new credential on the Qovery by opening the drop-down and selectin "New Credentials"

In the two dedicated fields, enter the credentials you created on your cloud provider account:

| Account Provider | Field Labels                                   |
|------------------|------------------------------------------------|
| AWS              | `Access Key` and `Secret Access Key`           |
| Scaleway         | `Scaleway Access Key` and `Scaleway Project ID`|

Once created and associated, you need to [updating your cluster][docs.using-qovery.configuration.clusters#updating-a-cluster] to apply the change.

#### Resources

Qovery allows you to modify the resources allocated for your cluster: 

- In the `Instance type` dropdown menu, select the type of [worker node(s)][docs.using-qovery.configuration.clusters#what-is-a-cluster] you want to deploy to your cluster.
- *(AWS users only)* In the `Node disk size (GB)` field, enter the disk capacity you want to allocate to your worker node(s) (meaning how much data, in gigabytes, you want each worker node to be able to hold).
- *(EKS users only)* On the `Nodes auto-scaling`, define the range of worker nodes you want to deploy to your cluster.

<Alert type="warning">
Instance type selection from your Qovery Console has direct consequences on your cloud provider’s bill. While Qovery allows you to switch to a different instance type whenever you want, it is your sole responsibility to keep an eye on your infrastructure costs, especially when you want to upsize.

For more information on the instance types provided by each cloud provider and their associated pricing, see [What are the different instance types available when creating a cluster?][docs.using-qovery.configuration.clusters#what-are-the-different-instance-types-available-when-creating-a-cluster]

</Alert>

<br/>

<Alert type="info">

The lowest number is the number of worker nodes running on your infrastructure at any time, while the highest number is the maximum number of worker nodes that can automatically be deployed as traffic grows.

Please note that a minimum of 3 worker nodes is required to deploy your [EKS cluster][docs.using-qovery.configuration.clusters#creating-a-cluster].

[K3s clusters][docs.using-qovery.configuration.clusters#creating-a-cluster] can only have one node.

</Alert>


#### Features

The `Features` tab in your cluster settings allows you to check if the **Static IP** and **Custom VPC subnet** features are enabled on your cluster. The enabled features cannot be changed after the creation of the cluster.

##### Static IP

The **Static IP** feature is currently only available to clusters deployed on AWS and can only be enabled at cluster creation.

By default, when your cluster is created, its worker nodes are allocated public IP addresses, which are used for external communication. For improved security and control, the **Static IP** feature allows you to ensure that outbound traffic from your cluster uses specific IP addresses.

<Alert type="info">

If you work in a sensitive business area such as financial technology, enabling the **Static IP** feature can help fulfill the security requirements of some of the external services you use, therefore making it easier for you to get whitelisted by them.

</Alert>

##### Custom VPC Subnet

The **Static IP** feature is currently only available to clusters deployed on AWS and can only be enabled at cluster creation.

Virtual Private Cloud (VPC) peering allows you to set up a connection between your Qovery VPC and another VPC on your AWS account. This way, you can access resources stored on your AWS VPC directly from your Qovery applications.

A VPC can only be used if it has at least one range of IP addresses called a **subnet**. When you create a cluster, Qovery automatically picks a default subnet for it. However, to perform VPC peering, you may want to define which specific VPC subnet you want to use, so that you can avoid any conflicting settings. To do so, you can enable the **Custom VPC Subnet** feature on your cluster. For more information on how to set up VPC peering, [see our dedicated tutorial](https://hub.qovery.com/guides/tutorial/aws-vpc-peering-with-qovery/).

#### Network

The `Network` tab in your cluster settings allows you to update your Qovery VPC route table so that you can perform VPC peering. For step-by-step guidelines on how to set up VPC peering, [see our dedicated tutorial](https://hub.qovery.com/guides/tutorial/aws-vpc-peering-with-qovery/).

### Performing Actions on your Clusters

Qovery allows you to [update][docs.using-qovery.configuration.clusters#updating-a-cluster], [stop][docs.using-qovery.configuration.clusters#stopping-a-cluster], [restart][docs.using-qovery.configuration.clusters#restarting-a-cluster] or [delete][docs.using-qovery.configuration.clusters#deleting-a-cluster] your clusters at organization level.

| Action                | Description    |
|---------------------------------|---------|
|[Updating a cluster][docs.using-qovery.configuration.clusters#updating-a-cluster]| To redeploy your cluster after a change has been made to it.|
|[Stopping a cluster][docs.using-qovery.configuration.clusters#stopping-a-cluster]| To temporarily stop your cluster. Some services you have subscribed to via your cloud provider may still be active and incur costs when your cluster is stopped. For more information, see [Stopping a cluster][docs.using-qovery.configuration.clusters#stopping-a-cluster].|
|[Restarting a cluster][docs.using-qovery.configuration.clusters#restarting-a-cluster]| To restart your cluster after it has been temporarily stopped.|
|[Deleting a cluster][docs.using-qovery.configuration.clusters#deleting-a-cluster]| To delete your cluster. This is final and needs to be done properly to ensure all the services deployed by Qovery on your cloud provider's account are disabled, with no leftover cloud-related costs. For more information, see [Deleting a cluster][docs.using-qovery.configuration.clusters#deleting-a-cluster].|

To access these actions:

<Steps headingDepth={3}>
<ol>
<li>

Open your [Qovery Console][urls.qovery_console].

</li>
<li>

On the left menu bar, click on the Cluster page:

<p align="center">
  <img src="/img/configuration/clusters/cluster_section_access.png" alt="Cluster Access" />
</p>

</li>
<li>

To view your cluster actions, click `Play` button:

<p align="center">
  <img src="/img/configuration/clusters/cluster_actions.png" alt="Cluster Actions Menu" />
</p>

A dropdown menu unfolds, featuring all the actions available on your cluster.

</li>

</ol>
</Steps>

You can follow the execution of the action via the cluster status and/or by accessing the [Cluster Logs][docs.using-qovery.configuration.clusters#logs]

#### Updating a Cluster

If you made a change on your cluster, you need to run an update on your cluster to propagate remotely the new configuration.  
 
To update your cluster, select the action `Update` from the drop-down menu.

A confirmation pop-up window opens before triggering the action.

Once confirmed, the status of your cluster turns to `Updating...` (orange status).

Once the update is complete, the status dot next to your cluster turns to green.

#### Stopping a Cluster

Qovery allows you to temporarily stop your cluster instead of deleting it.

<Alert type="warning">

When you stop a cluster from the Qovery console, only the workers nodes managed by Qovery are stopped. If you have subscribed to services via your cloud provider (load balancing, storage system, or any other managed services), they will remain active and you will be charged for them.
For more information, please contact your cloud provider.
To permanently delete a cluster and all its associated costs, see [Deleting a Cluster][docs.using-qovery.configuration.clusters#deleting-a-cluster].

</Alert>

To temporarily stop a cluster, select the `Stop` action from the drop-down menu. 
A confirmation pop-up window opens before triggering the action.

Once confirmed, the status of your cluster turns to `Pausing...` (orange status).

Once the stop is complete, the status dot next to your cluster turns to grey, and the status of your cluster turns to `Paused` (gray status).

#### Restarting a Cluster

You can restart a cluster after it has been temporarily stopped.

To restart your cluster, select the action `Resume` from the drop-down menu.

A confirmation pop-up window opens before triggering the action.

Once confirmed, the status of your cluster turns to `Updating...` (orange status).

Once your cluster has restarted, the status dot next to your cluster turns to green.


#### Deleting a Cluster

<Alert type="warning">

Deleting a cluster from the Qovery console is final, and cuts all associated costs on your cloud provider's end.
To only temporarily stop a cluster, see [Stopping a Cluster][docs.using-qovery.configuration.clusters#stopping-a-cluster].

</Alert>

To delete a cluster, open the `...` section and press `Delete Cluster`

A confirmation is required before deleting the cluster.

Once confirmed, its status turns to `Deleting...` (red status) and once the deletion is complete, the cluster is removed from your organization settings.

## Logs

Qovery allows you to access the logs of your cluster in order to follow its installation or investigate any issue happening on it.

To access the logs you need to open the cluster, click the log button

<p align="center">
<img src="/img/configuration/clusters/cluster_logs_access.png" alt="Cluster Logs" />
</p>

A new windows is opened, displaying the logs of the cluster.

<p align="center">
<img src="/img/configuration/clusters/ok-infra-logs.jpg" alt="Cluster Logs" />
</p>

The tab system on the right allows you to access the cluster information and, if an error occurred, the detail of the error.

<p align="center">
<img src="/img/configuration/clusters/error-infra-logs.jpg" alt="Cluster Logs" />
</p>

<Alert type="info">

The error message should provide you enough information to solve the issue. If that's not the case, feel free to ask for support on our [forum](https://discuss.qovery.com/) or [discord channel](https://discord.com/channels/688766934917185556/688826155611979807)

</Alert>

## Generating an SSH Key for Your Cluster

<Alert type="info">

You need a public SSH key for your K3s clusters only.

</Alert>

  To allow Qovery or yourself to connect remotely to your K3s instance and manage it, you need to generate an SSH key and add it to your cluster settings. To do so:

  <Steps headingDepth={3}>
  <ol>
  <li>

 On your computer, open a terminal.

  </li>
  <li>

  Run `ssh-keygen -t`, followed by the key type and an optional comment.

<Alert type="info">

This comment is included in the .pub file that is created. You may want to use an email address for the comment.

</Alert>

For example, you can enter `ssh-keygen -t rsa -b 2048 -C "<comment>"`.

  </li>
  <li>

Press `Enter`.

You should get an output similar to:

```
{
  Generating public/private ed25519 key pair.
  Enter file in which to save the key (/home/user/.ssh/id_ed25519):
}
```

  </li>
  <li>

  Accept the suggested filename and directory, unless you want to save your SSH key in a specific directory where you store other keys.

  </li>
  <li>

  Enter a passphrase:

  ```
{
   Enter passphrase (empty for no passphrase):
   Enter same passphrase again:
}
```

  A confirmation is displayed, including information about where your files are stored.

  </li>
  </ol>
  </Steps>
  

 You can add the generated public SSH key at cluster creation (see [Creating a Cluster][docs.using-qovery.configuration.clusters#creating-a-cluster]), or later from your cluster settings. 
 
 To do so:
  - on your [Qovery Console][urls.qovery_console], access your [cluster settings][docs.using-qovery.configuration.clusters#managing-your-cluster-settings].
  - In the `Remote Access` tab, enter your SSH key and click `Save`.
  - Launch the [Update Cluster][docs.using-qovery.configuration.clusters] action to propagate the new key.

  

  #### Cleaning up a Cluster from your AWS Account

<Alert type="warning">

The following troubleshooting procedure is intended for AWS users who did not properly delete their cluster before revoking Qovery's access to their platform.

To properly delete your clusters and avoid any unexpected issues or costs, see [Deleting a Cluster][docs.using-qovery.configuration.clusters#deleting-a-cluster].

</Alert>

To clean up a Qovery cluster from your cloud provider account, go to `AWS Console`>`Services`>`Management & Governance`>`Resource Groups & Tag Editor`> `Create Resource Group`:

<p align="center">
<img src="/img/configuration/clusters/aws-console-cluster-cleanup.jpg" alt="AWS Console Cluster Cleanup" />
</p>

| Step | Description                                                                                                                                  |
|------|----------------------------------------------------------------------------------------------------------------------------------------------|
| 1    | In the `Group type` area, select `Tag based`.                                                                                                |
| 2    | In the `Tags` field of the `Grouping criteria` area, enter `ClusterId`.                                                                      |
| 3    | Click `Add`.                                                                                                                                 |
| 4    | Click `Preview Resources`. <br /> All your Qovery clusters are now displayed in the `Group resources` table, and you can delete them by hand.|


[docs.using-qovery.configuration.cloud-service-provider.amazon-web-services#connect-your-aws-account]: /docs/using-qovery/configuration/cloud-service-provider/amazon-web-services/#connect-your-aws-account
[docs.using-qovery.configuration.cloud-service-provider.scaleway#connect-your-scaleway-account]: /docs/using-qovery/configuration/cloud-service-provider/scaleway/#connect-your-scaleway-account
[docs.using-qovery.configuration.clusters#creating-a-cluster]: /docs/using-qovery/configuration/clusters/#creating-a-cluster
[docs.using-qovery.configuration.clusters#deleting-a-cluster]: /docs/using-qovery/configuration/clusters/#deleting-a-cluster
[docs.using-qovery.configuration.clusters#features]: /docs/using-qovery/configuration/clusters/#features
[docs.using-qovery.configuration.clusters#generating-an-ssh-key-for-your-cluster]: /docs/using-qovery/configuration/clusters/#generating-an-ssh-key-for-your-cluster
[docs.using-qovery.configuration.clusters#how-does-qovery-handle-cluster-updates-and-upgrades]: /docs/using-qovery/configuration/clusters/#how-does-qovery-handle-cluster-updates-and-upgrades
[docs.using-qovery.configuration.clusters#logs]: /docs/using-qovery/configuration/clusters/#logs
[docs.using-qovery.configuration.clusters#managing-your-cluster-settings]: /docs/using-qovery/configuration/clusters/#managing-your-cluster-settings
[docs.using-qovery.configuration.clusters#restarting-a-cluster]: /docs/using-qovery/configuration/clusters/#restarting-a-cluster
[docs.using-qovery.configuration.clusters#stopping-a-cluster]: /docs/using-qovery/configuration/clusters/#stopping-a-cluster
[docs.using-qovery.configuration.clusters#updating-a-cluster]: /docs/using-qovery/configuration/clusters/#updating-a-cluster
[docs.using-qovery.configuration.clusters#what-are-the-different-instance-types-available-when-creating-a-cluster]: /docs/using-qovery/configuration/clusters/#what-are-the-different-instance-types-available-when-creating-a-cluster
[docs.using-qovery.configuration.clusters#what-is-a-cluster]: /docs/using-qovery/configuration/clusters/#what-is-a-cluster
[docs.using-qovery.configuration.clusters#why-do-i-need-a-cluster]: /docs/using-qovery/configuration/clusters/#why-do-i-need-a-cluster
[docs.using-qovery.configuration.clusters]: /docs/using-qovery/configuration/clusters/
[urls.qovery_console]: https://console.qovery.com

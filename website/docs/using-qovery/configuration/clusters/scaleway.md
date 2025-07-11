---
last_modified_on: "2025-07-07"
title: "Scaleway kapsule"
description: "Learn how to configure your Scaleway Kubernetes clusters on Qovery"
---

import Steps from '@site/src/components/Steps';

import Jump from '@site/src/components/Jump';
import Alert from '@site/src/components/Alert';
import Assumptions from '@site/src/components/Assumptions';

### Creating a Scaleway Kapsule Cluster

<Steps headingDepth={3}>
<ol>
<li>

Click on `Scaleway` as hosting mode and then `Qovery Managed` option:

<p align="center">
  <img src="/img/configuration/clusters/cluster_hosting_selection_scw.png" alt="Cluster Scaleway" />
</p>


In the `Create Cluster` window enter:

* `Cluster name`: enter the name of your choice for your cluster.
* `Description`: enter a description to identify better your cluster.
* `Production cluster`: select this option if your cluster will be used for production.
* `Region`: select the geographical area in which you want your cluster to be hosted.
* `Credentials`: select one of the existing cloud provider credentials or add a new one by clicking on `New Credentials`. In the New credentials window, add the credentials that you have generated on your cloud provider console ([Procedure for Scaleway account][docs.getting-started.install-qovery.scaleway.cluster-managed-by-qovery.quickstart#attach-scaleway-credentials]). Added credentials can be used later to create and manage additional cluster. You can also view the complete list of all your cloud credentials at the organization level, ([More info here][docs.using-qovery.configuration.organization.cloud-credentials]).

To confirm, click `Next`.

</li>
<li>

In the `Set Resources` window, select:

* `Instance type`: select the type of [worker nodes][docs.using-qovery.configuration.clusters#what-is-a-cluster] you want to deploy to your cluster.
* `Node auto-scaling`: define the minimum and the maximum number of worker nodes that your cluster can run. The lowest number is the number of worker nodes running on your infrastructure at any time, while the highest number is the maximum number of worker nodes that can automatically be deployed as traffic grows. Please note that a minimum of 3 worker nodes is required to deploy your Kapsule cluster.
* `Control plane type`:  select the type of control plane managing your cluster. [Click here to know more](https://www.scaleway.com/en/docs/kubernetes/reference-content/kubernetes-control-plane-offers/)

<br/>

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

In the `Ready to install your cluster` window, check that the services needed to install your cluster are correct.

You can now press the `Create and Install` button.

Your cluster is now displayed in your organization settings, featuring the `Installing...` status (orange status). Once your cluster is properly installed, its status turns to green and you will be able to deploy your applications on it.

You can follow the execution of the action via the cluster status and/or by accessing the [Cluster Logs][docs.using-qovery.configuration.clusters#logs]

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
- generate a new set of credentials on your cloud provider([Procedure for Scaleway account][docs.getting-started.install-qovery.scaleway.cluster-managed-by-qovery.quickstart#attach-scaleway-credentials])
- create the new credential on the Qovery by opening the drop-down and selecting "New Credentials"

Once created and associated, you need to [updating your cluster][docs.using-qovery.configuration.clusters#updating-a-cluster] to apply the change.

#### Mirroring registry

In this tab, you will see that a container registry already exist (called `registry-{$UIID}`). 
This is your cloud provider container registry used by Qovery to manage the deployment of your applications by mirroring the docker images.

The credentials configured on this registry are the one used to create the cluster. But you can still update them if you prefer to manage them separately (dedicated pair of creds just to access the registry).

Check [this link][docs.using-qovery.deployment.image-mirroring] for more information.


[docs.getting-started.install-qovery.scaleway.cluster-managed-by-qovery.quickstart#attach-scaleway-credentials]: /docs/getting-started/install-qovery/scaleway/cluster-managed-by-qovery/quickstart/#attach-scaleway-credentials
[docs.using-qovery.configuration.clusters#logs]: /docs/using-qovery/configuration/clusters/#logs
[docs.using-qovery.configuration.clusters#updating-a-cluster]: /docs/using-qovery/configuration/clusters/#updating-a-cluster
[docs.using-qovery.configuration.clusters#what-are-the-different-instance-types-available-when-creating-a-cluster]: /docs/using-qovery/configuration/clusters/#what-are-the-different-instance-types-available-when-creating-a-cluster
[docs.using-qovery.configuration.clusters#what-is-a-cluster]: /docs/using-qovery/configuration/clusters/#what-is-a-cluster
[docs.using-qovery.configuration.organization.cloud-credentials]: /docs/using-qovery/configuration/organization/cloud-credentials/
[docs.using-qovery.deployment.image-mirroring]: /docs/using-qovery/deployment/image-mirroring/
[urls.qovery_console]: https://console.qovery.com

---
last_modified_on: "2025-06-09"
title: "Azure AKS"
description: "Learn how to configure your AKS Kubernetes clusters on Qovery"
---

import Steps from '@site/src/components/Steps';

import Jump from '@site/src/components/Jump';
import Alert from '@site/src/components/Alert';
import Assumptions from '@site/src/components/Assumptions';

### Creating an Azure AKS Cluster

<Steps headingDepth={3}>
<ol>
<li>

Click on `AKS` as hosting mode and then `Qovery Managed` option:

<p align="center">
  <img src="/img/configuration/clusters/cluster_hosting_selection_azure.png" alt="Cluster Azure" />
</p>


In the `Create Cluster` window enter:

* `Cluster name`: enter the name of your choice for your cluster.
* `Description`: enter a description to identify better your cluster.
* `Production cluster`: select this option if your cluster will be used for production.
* `Region`: select the geographical area in which you want your cluster to be hosted.
* `Credentials`: select one of the existing cloud provider credentials or add a new one by clicking on `New Credentials`. In the New credentials window, add the credentials that you have generated on your cloud provider console ([Procedure for Azure account][docs.getting-started.install-qovery.azure.cluster-managed-by-qovery.quickstart#attach-azure-credentials]). Added credentials can be used later to create and manage additional cluster.

To confirm, click `Next`.

</li>
<li>

In the `Set Resources` window, select:

* `Instance type`: select the type of [worker nodes][docs.using-qovery.configuration.clusters#what-is-a-cluster] you want to deploy to your cluster.
* `Node auto-scaling`: define the minimum and the maximum number of worker nodes that your cluster can run. The lowest number is the number of worker nodes running on your infrastructure at any time, while the highest number is the maximum number of worker nodes that can automatically be deployed as traffic grows. Please note that a minimum of 3 worker nodes is required to deploy your AKS cluster.

</li>
<br/>
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
- generate a new set of credentials on your cloud provider([Procedure for Azure account][docs.getting-started.install-qovery.azure.cluster-managed-by-qovery.quickstart#attach-azure-credentials])
- create the new credential on the Qovery by opening the drop-down and selecting "New Credentials"

Once created and associated, you need to [updating your cluster][docs.using-qovery.configuration.clusters#updating-a-cluster] to apply the change.

#### Mirroring registry

In this tab, you will see that a container registry already exist (called `registry-{$UIID}`). 
This is your cloud provider container registry used by Qovery to manage the deployment of your applications by mirroring the docker images.

The credentials configured on this registry are the one used to create the cluster. But you can still update them if you prefer to manage them separately (dedicated pair of creds just to access the registry).

Check [this link][docs.using-qovery.deployment.image-mirroring] for more information.


[docs.getting-started.install-qovery.azure.cluster-managed-by-qovery.quickstart#attach-azure-credentials]: /docs/getting-started/install-qovery/azure/cluster-managed-by-qovery/quickstart/#attach-azure-credentials
[docs.using-qovery.configuration.clusters#updating-a-cluster]: /docs/using-qovery/configuration/clusters/#updating-a-cluster
[docs.using-qovery.configuration.clusters#what-is-a-cluster]: /docs/using-qovery/configuration/clusters/#what-is-a-cluster
[docs.using-qovery.deployment.image-mirroring]: /docs/using-qovery/deployment/image-mirroring/
[urls.qovery_console]: https://console.qovery.com

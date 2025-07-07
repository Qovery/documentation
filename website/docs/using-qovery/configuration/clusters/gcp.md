---
last_modified_on: "2025-07-07"
title: "GCP GKE"
description: "Learn how to configure your GCP Kubernetes clusters on Qovery"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Steps from '@site/src/components/Steps';

import Jump from '@site/src/components/Jump';
import Alert from '@site/src/components/Alert';
import Assumptions from '@site/src/components/Assumptions';

### Creating a GCP GKE Cluster

<Steps headingDepth={3}>
<ol>
<li>

Click on `GCP` as hosting mode and then `Qovery Managed` option:

<p align="center">
  <img src="/img/configuration/clusters/cluster_hosting_selection_gcp.png" alt="Cluster GCP" />
</p>


In the `Create Cluster` window enter:

* `Cluster name`: enter the name of your choice for your cluster.
* `Description`: enter a description to identify better your cluster.
* `Production cluster`: select this option if your cluster will be used for production.
* `Region`: select the geographical area in which you want your cluster to be hosted.
* `Credentials`: select one of the existing cloud provider credentials or add a new one by clicking on `New Credentials`. In the New credentials window, add the credentials that you have generated on your cloud provider console ([Procedure for GCP account][docs.getting-started.install-qovery.gcp.cluster-managed-by-qovery.quickstart#attach-gcp-credentials]). Added credentials can be used later to create and manage additional cluster. You can also view the complete list of all your cloud credentials at the organization level, ([More info here][docs.using-qovery.configuration.organization.cloud-credentials]).

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

The **Static IP** feature is currently only available to clusters deployed with a VPC managed by Qovery and can only be enabled at cluster creation.

By default, when your cluster is created, its worker nodes are allocated public IP addresses, which are used for external communication. For improved security and control, the **Static IP** feature allows you to ensure that outbound traffic from your cluster uses specific IP addresses.

Here is what will be deployed on your cluster:
* Cloud Nats
* Static IPs
* Routers

Once set up, here is the procedure to find your static IP addresses on `GCP`:
- On your GCP account, select the IP addresses service.
- In the list you will find your static IP used by your cluster router.

<Alert type="info">

If you work in a sensitive business area such as financial technology, enabling the **Static IP** feature can help fulfil the security requirements of some of the external services you use, therefore making it easier for you to get whitelisted by them.

</Alert>

</TabItem>

<TabItem value="use existing vpc">

##### Use existing VPC

You can opt to use your own VPC instead of the one provided by Qovery by switching VPC mode to `Deploy on my existing VPC`.

In GCP you have two VPC modes: `Automatic` or `Custom`.

If you are using an automatic or a custom VPC, you have to set:
* Your VPC Name
* External project id (optional): by default, the project id used is the one specified in the credentials file. But if your VPC is defined in another GCP project, you have to specify the Project id.

In addition if you are using a custom VPC, you have to set:
* Your Subnet range name (`https://console.cloud.google.com/networking/networks/details/<your-vpc>?project=<your-project>&pageTab=SUBNETS`)

<Alert type="info">

You can also specify (optional):
  * Pod ipv4 address range name
  * Additional cluster pod ipv4 ranges names (separated with a comma)
  * Ipv4 service range name

For these ranges, you have to create Secondary IPv4 ranges inside your subnet.

</Alert>
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
- generate a new set of credentials on your cloud provider([Procedure for GCP account][docs.getting-started.install-qovery.gcp.cluster-managed-by-qovery.quickstart#attach-gcp-credentials])
- create the new credential on the Qovery by opening the drop-down and selecting "New Credentials"

Once created and associated, you need to [updating your cluster][docs.using-qovery.configuration.clusters#updating-a-cluster] to apply the change.

#### Image registry

In this tab, you will see that a container registry already exist (called `registry-{$UIID}`). 
This is your cloud provider container registry used by Qovery to manage the deployment of your applications by mirroring the docker images.

The credentials configured on this registry are the one used to create the cluster. But you can still update them if you prefer to manage them separately (dedicated pair of creds just to access the registry).

Check [this link][docs.using-qovery.deployment.image-mirroring] for more information.

#### Features

The `Features` tab in your cluster settings allows you to check if the [**Static IP**](#static-ip), [**Deploy on existing VPC**](#use-existing-vpc) features are enabled on your cluster. The enabled features cannot be changed after the creation of the cluster.


[docs.getting-started.install-qovery.gcp.cluster-managed-by-qovery.quickstart#attach-gcp-credentials]: /docs/getting-started/install-qovery/gcp/cluster-managed-by-qovery/quickstart/#attach-gcp-credentials
[docs.using-qovery.configuration.clusters#logs]: /docs/using-qovery/configuration/clusters/#logs
[docs.using-qovery.configuration.clusters#updating-a-cluster]: /docs/using-qovery/configuration/clusters/#updating-a-cluster
[docs.using-qovery.configuration.organization.cloud-credentials]: /docs/using-qovery/configuration/organization/cloud-credentials/
[docs.using-qovery.deployment.image-mirroring]: /docs/using-qovery/deployment/image-mirroring/
[urls.qovery_console]: https://console.qovery.com

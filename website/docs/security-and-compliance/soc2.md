---
last_modified_on: "2023-03-17"
title: SOC2
description: Systems and Organizations Controls 2
---

![](/img/soc2_logo.png)

Qovery infrastructure and process comply with SOC2 (Systems and Organizations Controls 2) best practices. Qovery also brings by default many security features to your applications, clusters, and databases to comply with the most stringent security standards of SOC2.
You can find additional information on the [Qovery trust page](https://trust.qovery.com/).

All customers using Qovery, requiring to be SOC2 compliant, save a lot of time as the deployed infrastructure is SOC2 ready!

In this documentation, you will find settings to update to comply with SOC2 and even more.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/docs/security-and-compliance/soc2.md.erb
-->

## Cluster advanced settings

In the [cluster advanced settings][docs.using-qovery.configuration.cluster-advanced-settings], you will find several options to update based on your wishes and to comply with SOC2. Here are the most important ones:

### Log retention days
* AWS Cloudwatch retention days (aws.cloudwatch.eks_logs_retention_days): 365 days is what SOC2 requests at least
* Enable VPC flow logs (aws.vpc.enable_s3_flow_logs and aws.vpc.flow_logs_retention_days): Enable it and set the retention days to 365 days
* Allowed databases CIDR: you have to disable or restrict public access, but not let them open to the world


[docs.using-qovery.configuration.cluster-advanced-settings]: /docs/using-qovery/configuration/cluster-advanced-settings/

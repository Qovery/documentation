---
last_modified_on: "2021-04-29"
title: FAQ
description: "Frequently Asked Questions"
---
### What is the difference between a Project, Application, and Environment?

A [project][docs.main-concepts.project] is the site that you're working on. Each project can contain multiple [applications][docs.main-concepts.application] and be deployed in multiple [environments][docs.main-concepts.environment]. An environment is a standalone copy of your site, including apps, databases, storage, data, and all other services. By default, `master` branch is the production environment, while all other branches can be set up as identical copies of the prod environment for testing purposes.

### Can you help me to deploy my application on Qovery?

Yes, absolutely. [Join our fantastic community][urls.qovery_community] to get the help of our +2000 developers and Qovery team members.

### How does application build work?

We build and run your Dockerfile, so it's up to you to provide all the good instructions. If you have any trouble, we can assist you.

### How does Qovery manage databases?

Qovery relies on the managed databases provided by the Cloud provider of your choice (AWS, GCP, Azure). So it's highly reliable. For development usage, we rely on a single instance database running inside a container (to keep the cost low for development purposes). But, we guarantee the safety of the data and the availability.

### Does Qovery replace Kubernetes?

Behind the scene, Qovery uses [Kubernetes][urls.kubernetes]. Qovery adds a simplification layer on top of Kubernetes to make it accessible to any developer. Qovery is installable on your Kubernetes clusters with the Enterprise version. [Read more][urls.qovery_enterprise]

### Does Qovery support mono repository?

We expect to support mono repository as soon as possible. Please do [upvote for mono repository support in our roadmap][urls.qovery_roadmap].

### Does Qovery support private Git repository ?

Yes, absolutely.

### What resources are provided with Free plan ?

Free plan comes with 10GB of storage, 1GB of RAM and 1 vCPU.

### Where are your servers located?

Qovery relies on Cloud providers like AWS (Amazon Web Services), GCP (Google Cloud Platform) and Azure. For each [project][docs.project], and [environment][docs.environment] you can select the region (America, Europe, Asia) of your choice.

### What is the IP address of Qovery? I would like to whitelist it on my side

It is not possible to whitelist only one IP address as we have several nodes, and they have different IP addresses. Your app can move to any of those nodes.
In addition to that, nodes can be deleted/replaced with new ones and therefore have different IPs. Authentication based on an IP address is not a viable solution for any cloud-native solution like Qovery.

### If I have N custom domains under the same root domain, do I need to create N CNAME records, or just creating one for the root domain is enough ?

You have to create N CNAME, one per custom domain

### I have made actions on my AWS account and want to clean my organization in order to restart from scratch, how can I proceed ?

If you want to remove Qovery infrastructure from your AWS account in order to restart from the beginning, or if you are leaving Qovery and want to delete Qovery infrastructure from your AWS account, you can do that buy clicking on "delete infrastraucture" on your Organization page:

<p align="center">
  <img src="/img/organization-delete-infra.png" alt="Delete Qovery infrastructure" />
</p>

The option is also available if you do not have any project;

<p align="center">
  <img src="/img/organization-delete-infra-2.png" alt="Delete Qovery infrastructure" />
</p>

### How Qovery works under the hood?

We will explain in details soon.

### How can I contact you?

Feel free to join our [Discord server][urls.qovery_chat] or contact us by email at hello (at) qovery.com.


[docs.environment]: /docs/main-concepts/environment/
[docs.main-concepts.application]: /docs/main-concepts/application/
[docs.main-concepts.environment]: /docs/main-concepts/environment/
[docs.main-concepts.project]: /docs/main-concepts/project/
[docs.project]: /docs/main-concepts/project/
[urls.kubernetes]: https://kubernetes.io/
[urls.qovery_chat]: https://discord.qovery.com
[urls.qovery_community]: https://community.qovery.com/
[urls.qovery_enterprise]: https://www.qovery.com/business
[urls.qovery_roadmap]: https://roadmap.qovery.com/

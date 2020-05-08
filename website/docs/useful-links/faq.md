---
last_modified_on: "2020-05-08"
title: FAQ
description: "Frequently Asked Questions"
---
### What is the difference between a Project, Application, and Environment?

A [project][docs.project] is the site that you're working on. Each project can contain multiple [applications][docs.application] and be deployed in multiple [environments][docs.environment]. An environment is a standalone copy of your site, including apps, databases, storage, data, and all other services. By default, `master` branch is the production environment, while all other branches can be set up as identical copies of the prod environment for testing purposes.

### How does application build work?

We [build and run your Dockerfile][guides.how-to-deploy-a-docker-container], so it's up to you to provide all the good instructions. If you have any trouble, we can assist you.

### How does Qovery manage databases?

Qovery relies on the managed databases provided by the Cloud provider of your choice (AWS, GCP, Azure). So it's highly reliable. For development usage, we rely on a single instance database running inside a container (to keep the cost low for development purposes). But, we guarantee the safety of the data and the availability.

### Does Qovery replace Kubernetes?

Behind the scene, Qovery uses [Kubernetes][urls.kubernetes]. Qovery adds a simplification layer on top of Kubernetes to make it accessible to any developer. Qovery is installable on your Kubernetes clusters with the Enterprise version. [Read more][urls.qovery_enterprise]

### Does Qovery support mono repository?

We expect to support mono repository as soon as possible. Please do [upvote for mono repository support in our roadmap][urls.qovery_roadmap].

### Does support private Git repository ?

Yes, absolutely.

### Is Qovery production ready?

Qovery is in beta but is stable enough to consider hosting your projects. Qovery v1.0 will be out in July 2020.

### Where are your servers located?

Qovery relies on Cloud providers like AWS (Amazon Web Services), GCP (Google Cloud Platform) and Azure. For each [project][docs.project], and [environment][docs.environment] you can select the region (America, Europe, Asia) of your choice.

### How can I contact you?

Feel free to join our [Discord server][urls.qovery_chat] or contact us by email at hello (at) qovery.com.


[docs.application]: /docs/main-concepts/application/
[docs.environment]: /docs/main-concepts/environment/
[docs.project]: /docs/main-concepts/project/
[guides.how-to-deploy-a-docker-container]: /guides/tutorial/how-to-deploy-a-docker-container/
[urls.kubernetes]: https://kubernetes.io/
[urls.qovery_chat]: https://discord.qovery.com
[urls.qovery_enterprise]: https://www.qovery.com/enterprise
[urls.qovery_roadmap]: https://roadmap.qovery.com/

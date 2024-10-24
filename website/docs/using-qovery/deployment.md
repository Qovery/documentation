---
last_modified_on: "2024-10-15"
title: Deployment
description: "Everything you need to know about the deployment of your applications with Qovery"
sidebar_label: hidden
hide_pagination: true
---
In the following subsections, you'll find all the information about the deployment management with Qovery.

The deployment has the end goal to create the resources necessary to run your applications on your cloud account, based on the configuration you have done on the Qovery console.

In the image below you can find the complete flow that your application will go through, from your Git repository up to your Kuernetes cluster.

<p align="center">
  <img src="/img/deployment/deployment_overview_qovery.png" alt="Deployment history access" />
</p>

1. The developer pushes the code within the git repository
2. The deployment trigger can come from different sources depending on your integration type:
2.a The auto-deploy feature is activated on Qovery. When the new commit is pushed, a webhook call is received by Qovery and can proceed with the application deployment. See [this section][docs.using-qovery.deployment.deploying-with-auto-deploy] for more information.
2.b The auto-deploy feature is not activated on Qovery and the deployment is managed via [the CI/CD][docs.using-qovery.deployment.deploying-with-ci-cd].
2.c The auto-deploy feature is not activated on Qovery and the user decides to trigger the deployment directly from within the Qovery console.
3. The Qovery engine starts processing based on the configured `Deployment Pipeline`. The pipeline defines the steps that need to be followed in order to deploy your applications. See [this section][docs.using-qovery.deployment.deployment-pipeline] for more information.
4. The Qovery engine pulls the code from your repository.
5. The Qovery engine builds the code and pushes the generated images on a registry present within your cloud account (See the [Image Mirroring][docs.using-qovery.deployment.image-mirroring] page for more information).
6. The Qovery engine creates the load balancers and configure the network.
7. The Qovery engine creates a namespace within the Kubernetes cluster and deploys the application.
8. The Qovery engine takes care of creating a custom domain for your application and as well configure the TLS so that you can access the application from the internet.

The developer can monitor at each time the status of the deployment or of the running applications by:
- checking the `Deployment Status` and `Running Status`. See [this section][docs.using-qovery.deployment.running-and-deployment-statuses] for more information.
- access the `Logs` interface to retrieve the deployment logs and as well the application logs in real-time. See [this section][docs.using-qovery.deployment.logs] for more information.
- access the `Deployment History` section to get all the information about the past deployments. See [this section][docs.using-qovery.deployment.deployment-history] for more information.


Note: 
- Qovery also support deployments from container registry but actions 2a is not supported plus 4 and 5 are not done.
- In the example above we have shown how the deployment of an application is done but Qovery provides you with a complete set of `Deployment Actions` allowing you to manage the deployment lifecycle of your applications and environments (Stop, restart etc..). See [this section][docs.using-qovery.deployment.deployment-actions] for more information.


[docs.using-qovery.deployment.deploying-with-auto-deploy]: /docs/using-qovery/deployment/deploying-with-auto-deploy/
[docs.using-qovery.deployment.deploying-with-ci-cd]: /docs/using-qovery/deployment/deploying-with-ci-cd/
[docs.using-qovery.deployment.deployment-actions]: /docs/using-qovery/deployment/deployment-actions/
[docs.using-qovery.deployment.deployment-history]: /docs/using-qovery/deployment/deployment-history/
[docs.using-qovery.deployment.deployment-pipeline]: /docs/using-qovery/deployment/deployment-pipeline/
[docs.using-qovery.deployment.image-mirroring]: /docs/using-qovery/deployment/image-mirroring/
[docs.using-qovery.deployment.logs]: /docs/using-qovery/deployment/logs/
[docs.using-qovery.deployment.running-and-deployment-statuses]: /docs/using-qovery/deployment/running-and-deployment-statuses/

---
last_modified_on: "2024-08-12"
title: "Cloudformation"
description: "Learn how to deploy your Cloudformation template with Qovery"
---

import Steps from '@site/src/components/Steps';

You can deploy any Cloudformation manifests/templates with Qovery and manage the lifecycle of your own cloud resources. For example, you can deploy your own databases, lambdas, brokers etc...

Running and deploying your Cloudformation manifest/template is achieved via the Qovery Lifecycle Jobs, have a look at [this section][docs.using-qovery.integration.iac] to know how it works.

To simplify the configuration, Qovery provides a Cloudformation configuration template for your Lifecycle job, allowing you to package your manifest and run it with the Cloudformation CLI directly on your cluster.

Follow these steps to create and deploy your Cloudformation manifest/template:

<Steps headingDepth={3}>
<ol>
<li>
Add a new service

Enter the environment where you want to deploy your Cloudformation manifest and select the "Add Service" button 

</li>
<li>
Use the Cloudformation template

Select the "Cloudformation" option in the service creation list and follow the steps.

</li>

<li>
Manifest location

Provide the location of your manifest within your git repository

</li>

<li>
Customize your configuration

Qovery provides you with a pre-configuration for your lifecycle job capable to run and deploy your Cloudformation:
- **Dockerfile**: you will find a Dockerfile capable to package your manifest/template and run the right Cloudformation commmand depending on the event triggered (Example: the "start" command executes "Cloudformation apply .."). Customize this file to match your needs (backend config, additional configuration etc..)
- **Triggers**: you will find the default triggers and commands based on the default Dockerfile.
- **Resources**: you will find a default CPU/Memory values capable to run the Cloudformation CLI on a Kubernetes job
- **Environment variables**: you will be able to provide the input of your Cloudformation manifest/template as a TF_VAR file. You can also add additional environment variables necessary to run the Cloudformation commands (like AWS_SECRET_ACCESS_KEY etc..)

</li>

<li>
Create & Deploy

Once it is all set, you can Create and Deploy your Cloudformation job. This will trigger the execution and deployment of the Cloudformation manifest/template.

</li>

<li>
Access the Cloudformation output

If your Cloudformation manifest/template generates an output (see [Lifecycle job output][docs.using-qovery.configuration.lifecycle-job#job-output] for more information), the output will be fetched and injected as environment variable to any service of the same environment. It will allow those services to access the newly created resource.

<p align="center">
  <img src="/img/configuration/job/job_output.png" alt="Job output" />
</p>

</li>

</ol>
</Steps>

### Resources

- [Qovery Lifecycle Job Documentation][docs.using-qovery.configuration.lifecycle-job]
- [Qovery Lifecycle Job Examples](https://github.com/Qovery/lifecycle-job-examples)
- [How to deploy any resource with Lifecycle Jobs][guides.tutorial.how-to-use-lifecycle-job-to-deploy-any-kind-of-resources]


[docs.using-qovery.configuration.lifecycle-job#job-output]: /docs/using-qovery/configuration/lifecycle-job/#job-output
[docs.using-qovery.configuration.lifecycle-job]: /docs/using-qovery/configuration/lifecycle-job/
[docs.using-qovery.integration.iac]: /docs/using-qovery/integration/iac/
[guides.tutorial.how-to-use-lifecycle-job-to-deploy-any-kind-of-resources]: /guides/tutorial/how-to-use-lifecycle-job-to-deploy-any-kind-of-resources/

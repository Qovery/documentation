---
last_modified_on: "2021-07-02"
$schema: "/.meta/.schemas/guides.json"
title: Staging environment
description: How to create a staging environment with Qovery
author_github: https://github.com/evoxmusic
tags: ["type: guide", "technology: qovery"]
---
import Steps from '@site/src/components/Steps';
import Assumptions from '@site/src/components/Assumptions';
import Alert from '@site/src/components/Alert';

Very often, before merging new changes to your production environment, you'd like to test them live in a deployed environment that resembles your production. Doing so allows you to make sure that everything works as expected before releasing new changes to your clients.
Achieving it with Qovery is very simple and works well even if your project is made out of many applications, e.g. multiple backend services, websites, databases and so on.

### Creating a staging environment

<Steps headingDepth={3}>
<ol>
<li>

Create a new environment

<Alert type="info">
  You can 
  <a href="https://hub.qovery.com/docs/using-qovery/configuration/environment/#clone-environment"> clone your production environment </a> 
  or follow the following steps to set up your staging environment manually.
</Alert>

<p align="center">
  <img src="/img/staging/staging-4.png" alt="Staging Environment" />
</p>

</li>

<li>
Add your applications

Choose your application names, git repositories, and branches you want to use for staging. You can set up the same environment as you use for production or use the clone functionality.

<p align="center">
  <img src="/img/staging/staging-1.png" alt="Staging Environment" />
</p>

<p align="center">
  <img src="/img/staging/staging-2.png" alt="Staging Environment" />
</p>

As you can see in the screenshots, we used `staging` branches for our applications in the staging environment. Applications in this environment will be deployed using source code from `staging` branches.

</li>

<li>

Add required services/databases

If your project requires databases, you can [add them to your staging environment][guides.getting-started.create-a-database].

<p align="center">
  <img src="/img/staging/staging-3.png" alt="Staging Environment" />
</p>

</li>

<li>


[Set up secrets and environment variables][guides.getting-started.managing-environment-variables]

The last step you probably need to take is to set up another set of secrets and environment variables that are separate from your production.
You can do it in your application `Environment Variables` section:

<p align="center">
  <img src="/img/staging/staging-6.png" alt="Staging Environment" />
</p>

Now, before merging new code to production, you can merge it first to your `staging` branch (or any other branch name you use for this purpose).
New changes will be reflected in your `staging` environment, which is separate from your production.

After making sure new changes work well, all you need to do to release them to your clients is to update your production branch with the commits you tested in your staging environment.

</li>
</ol>
</Steps>


[guides.getting-started.create-a-database]: /guides/getting-started/create-a-database/
[guides.getting-started.managing-environment-variables]: /guides/getting-started/managing-environment-variables/

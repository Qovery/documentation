---
last_modified_on: "2023-04-19"
title: "Git Repository access"
description: "Learn how to manage the git repository permission access"
---

import Alert from '@site/src/components/Alert';
import Steps from '@site/src/components/Steps';

import Jump from '@site/src/components/Jump';
import Assumptions from '@site/src/components/Assumptions';

When you first sign into the [Qovery Console][urls.qovery_console], you need to provide your Git provider account credentials. This allows you to later take advantage of a Single Sign-On process through your Git provider. 
However, by default, Qovery is then allowed to access all the resources stored on your Git provider account. 

For better control, as a Github user, you can install the **Qovery Github App**, and define which Github repositories Qovery can access.
<Alert type="info">

You can only link one Github Organization to your Qovery Organization through the **Qovery Github App**. 
Also, once the **Qovery Github App** is installed, all the members of your Qovery Organization will only have access to the repositories linked to your **Qovery Github App**.

</Alert>

### Installing the Qovery Github App

<Alert type="warning">

If you have already one or more applications running on your Qovery Organization, please make sure to give the **Qovery Github App** access to their repositories. If a repository is missing, you might experience a loss of functionalities for those applications (update, auto-deploy, preview environments, etc.).

</Alert>


To install the **Qovery Github App**:

<Steps headingDepth={3}>
<ol>
<li>

Open your [Qovery Console][urls.qovery_console] and access your organization settings:

<p align="center">
  <img src="/img/configuration/organization/access_settings.png" alt="How to access your organization settings" />
</p>

</li>
<li>

In the `Organization settings` menu, click `Git Repository Access`:

<p align="center">
  <img src="/img/configuration/organization/git_repository_access.png" alt="Git Repository Access" />
</p>

</li>
<li>

To start the installation process click `Install`:

A new window opens in your browser so you can install the **Qovery Github App** on your Github account.
</li>
<li>

Click the Github account on which you want to install the **Qovery Github App**:

<p align="center">
  <img src="/img/configuration/organization/Install_GithubApp_Access.png" alt="Application" />
</p>

</li>
<li>

Click `Only select repositories` and, in the dropdown menu, define which Github repositories you want to give Qovery access to:


<p align="center">
  <img src="/img/configuration/organization/Repositories_Selection.png" alt="Application" />
</p>

<Alert type="info">

You need to give Qovery access to any Github repository linked to an existing Qovery application. 
Failure to do so will result in the loss of some functionalities (update, auto-deploy, preview environments, etc.).

</Alert>

</li>
<li>

To confirm, click `Install & Authorize`:

<p align="center">
  <img src="/img/configuration/organization/Confirmation_Window_GithubApp.png" alt="Application" />
</p>

You are redirected to your Qovery Console, where the list of authorized Github repositories is updated.

<Alert type="info">

You can update or revoke access to one or multiple Github repositories at any time. To do so, in the `Git Repository Access` section, click `Manage Permission` below your Git provider account, and repeat the selection process on the Github website.
Please note that the repositories must belong to the same Github organization, we do not support yet a multi-github organization setup

</Alert>

</li>
</ol>
</Steps>

### Managing the Github permissions

To add or remove access to one of your repositories:

<Steps headingDepth={3}>
<ol>
<li>

Open your [Qovery Console][urls.qovery_console] and access your organization settings:

<p align="center">
  <img src="/img/configuration/clusters/Organization_Settings_Access_Button.png" alt="Qovery - delete organization" />
</p>

</li>
<li>

In the `Organization settings` menu, click `Git Permission`:

<p align="center">
  <img src="/img/configuration/organization/Git_Permissions_Tab.png" alt="Application" />
</p>

</li>
<li>

Next to your Git provider account, click `Manage permission`:

<p align="center">
  <img src="/img/configuration/organization/Github_App_Disconnect.png" alt="Application" />
</p>

</li>

<li>

Click the Github account on which you want to manage the **Qovery Github App** access:

<p align="center">
  <img src="/img/configuration/organization/Install_GithubApp_Access.png" alt="Application" />
</p>

</li>
<li>

Add or remove the repositories you want to give Qovery access to:


<p align="center">
  <img src="/img/configuration/organization/Repositories_Selection.png" alt="Application" />
</p>

<Alert type="warning">

Rremoving access to a Github repository linked to an existing Qovery application will result in the loss of some functionalities for that application (update, auto-deploy, preview environments, etc.).

</Alert>

</li>

</ol>
</Steps>

### Uninstalling the Qovery Github App

<Alert type="warning">

Uninstalling the **Qovery Github App** will result in a loss of some functionalities for all your applications (update, auto-deploy, preview environments, etc.).

</Alert>


To uninstall the **Qovery Github App**:

<Steps headingDepth={3}>
<ol>
<li>

Open your [Qovery Console][urls.qovery_console] and access your organization settings:

<p align="center">
  <img src="/img/configuration/clusters/Organization_Settings_Access_Button.png" alt="Qovery - delete organization" />
</p>

</li>
<li>

In the `Organization settings` menu, click `Git Permission`:

<p align="center">
  <img src="/img/configuration/organization/Git_Permissions_Tab.png" alt="Application" />
</p>

</li>
<li>

Next to your Git provider account, click `Disconnect`:

<p align="center">
  <img src="/img/configuration/organization/Github_App_Disconnect.png" alt="Application" />
</p>

The list of authorized Github repositories is updated, meaning Qovery now has access to all of your Github repositories again.
</li>
<li>

From your browser, access your Github account and open your `Settings`:

<p align="center">
  <img src="/img/configuration/organization/Github_Settings.png" alt="Application" />
</p>

</li>
<li>

In the navigation menu, click `Applications`:


<p align="center">
  <img src="/img/configuration/organization/Github_Applications_Menu.png" alt="Application" />
</p>

</li>
<li>

At the bottom of the page, click `Uninstall`:

<p align="center">
  <img src="/img/configuration/organization/GithubApp_Uninstall_Finalize.png" alt="Application" />
</p>

A confirmation pop-up window opens.
</li>
<li>

Click `OK`:

The **Qovery Github App** is uninstalled.
</li>
</ol>
</Steps>


[urls.qovery_console]: https://console.qovery.com

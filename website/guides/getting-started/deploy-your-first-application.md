---
last_modified_on: "2020-04-21"
$schema: "/.meta/.schemas/guides.json"
title: Hello World. Deploy your first application.
description: How to deploy your first application with Qovery
series_position: 1
author_github: https://github.com/pjeziorowski
tags: ["type: guide"]
---

import Steps from '@site/src/components/Steps';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sign up using the **Qovery CLI**, it's very simple!

### Install the CLI!

<Tabs
  centered={true}
  className={"rounded"}
  defaultValue={"linux"}
  placeholder="Please select your OS"
  select={false}
  size={null}
  values={[{"group":"Platforms","label":"Linux","value":"linux"},{"group":"Platforms","label":"MacOS","value":"macos"},{"group":"Platforms","label":"Windows","value":"windows"}]}>

<TabItem value="linux">

**Download and install Qovery CLI on every Linux distribution**

```bash
curl -s https://get.qovery.com | sudo bash
```

</TabItem>

<TabItem value="macos">

<Tabs
  centered={true}
  className="rounded"
  defaultValue="homebrew"
  values={[{"label":"Homebrew","value":"homebrew"},{"label":"Manual","value":"manual"}]}>

<TabItem value="homebrew">

**The common solution to install a command line binary on the MacOS is to use [Homebrew][urls.brew].**

<Steps headingDepth={3}>

1.  ### Add Qovery brew repository
    ```bash
    brew tap Qovery/qovery-cli
    ```

2.  ### Install the CLI
    ```bash
    brew install qovery-cli
    ```

</Steps>

</TabItem>

<TabItem value="manual">

**Install the Qovery CLI on MacOS manually**

```bash
curl -s https://get.qovery.com | bash
```

</TabItem>

</Tabs>

</TabItem>

<TabItem value="windows">

<Tabs
  centered={true}
  className="rounded"
  defaultValue="scoop"
  values={[{"label":"Scoop","value":"scoop"},{"label":"Manual","value":"manual"}]}>

<TabItem value="scoop">

**The classic way to install binaries on Windows is to use [Scoop][urls.scoop].**

<Steps headingDepth={3}>

1.  ### Add Qovery bucket
    ```bash
    scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli
    ```
2.  ### Install the CLI
    ```bash
    scoop install qovery-cli
    ```

</Steps>

</TabItem>

<TabItem value="manual">

** Install the Qovery CLI on Windows manually by downloading the [latest realease][urls.qovery_cli_releases] and uncompressing its content to
`C:\Windows`.**

</TabItem>

</Tabs>

</TabItem>

</Tabs>

### Sign Up

After the Qovery CLI is installed, run the following command:

```bash
qovery auth
```

A browser window with sign-in options will open.

<p align="center">
  <img src="/img/qovery_signup.svg" alt="Qovery Sign-up page" />
</p>

Choose one of the options (e.g. **Github**) to authenticate.

### Authorize Qovery

Qovery needs access to your account to be able to clone your repository for future application builds.

[Click here][urls.authorize_qovery] to authorize Qovery to clone and build your applications.

<p align="center">
  <img src="/img/github-connect.png" alt="Connect Github" />
</p>

**That's it! You should see "Authentication successful. You can close this window." message.**


[urls.authorize_qovery]: https://github.com/apps/qovery/installations/new
[urls.brew]: https://brew.sh/
[urls.qovery_cli_releases]: https://github.com/Qovery/qovery-cli/releases
[urls.scoop]: https://brew.sh/

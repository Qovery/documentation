---
last_modified_on: "2021-09-06"
$schema: "/.meta/.schemas/guides.json"
title: How to use Github Organizations with Qovery
description: How to configure Github and Qovery to use your Github Organization repositories with Qovery
author_github: https://github.com/pjeziorowski
tags: ["type: tutorial", "technology: qovery"]
hide_pagination: true
---

import Steps from '@site/src/components/Steps';

When you create a new application, you need to connect it to a Git repository.
If your code is stored in a Github Organization, Qovery needs privileges to access your Organization's repositories
in order to run deployments.

<p align="center">
  <img src="/img/github-org-access-1.png" alt="Github Organization" />
</p>

If Organization repositories are missing in the repository selector, you will need to grant Qovery access to your organization.

<Steps headingDepth={3}>
<ol>
<li>

Navigate to [Qovery Github Application](https://github.com/settings/connections/applications/f54d3da8bad40800b3bf)

</li>
<li>

Make sure Qovery has access to the organization you want to use (grant permissions if necessary)

<p align="center">
  <img src="/img/github-org-access-2.png" alt="Github Organization" />
</p>

</li>

</ol>
</Steps>

After following the steps from above, you should be able to select your organization repositories in Qovery Console while creating an application.




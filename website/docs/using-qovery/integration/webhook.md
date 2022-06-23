---
last_modified_on: "2022-06-23"
title: "Webhooks"
description: "Learn how to use Qovery Webhooks"
---

import Alert from '@site/src/components/Alert';
import Steps from '@site/src/components/Steps';

Qovery allows you to create webhooks at organization-level so that, when an event happens on an environment within your organization, you can get notified on external applications (for instance, [Slack][docs.using-qovery.integration.slack]).

You can trigger webhooks when:

* An environment is created.
* An environment is successfully deployed.
* An environment is stopped.
* An environment failed to deploy.
* A deployment started in the environment.

<Alert type="info">

Webhooks are not available in the Qovery console yet, but you can create and manage them via the Qovery API.

</Alert>

# Creating a Webhook

To create a webhook via the Qovery API:

<Steps headingDepth={3}>
<ol>
<li>

Install the [Qovery CLI][docs.using-qovery.interface.cli].

</li>
<li>

Generate an [API Token][docs.using-qovery.interface.cli#generate-api-token].

</li>
<li>

Enter a cURL command similar to this:

```bash
curl -X POST -H 'Content-type: application/json' -H 'Authorization: Token <Your API Token>' -d \
'{"description": "notifications on my external application", "target_url": "<Your External Application Webhook URL>", "events": ["DEPLOYMENT_STARTED", "DEPLOYMENT_CANCELLED", "DEPLOYMENT_SUCCESSFUL", "DEPLOYMENT_FAILURE"], "kind": "name of my external application", "enabled": true}' \
"https://api.qovery.com/organization/{Your Organization ID}/webhook"
```

Where you need to replace:

* `<Your API Token>` with your Qovery API token.
* `<Your External Application Webhook URL>` with the webhook URL provided by the external application you want to receive notifications on.
* `{Your Organization ID}` with the ID of the Qovery organization you want to create the webhook on.
* and the request details with customized [information and parameters](https://api-doc.qovery.com/#tag/Organization-Webhook/operation/createOrganizationWebhook), depending on which kind of notifications you want to receive and on which external application.

</li>
</ol>
</Steps>

# Managing your Webhooks

Via the Qovery API, you can also:

* [Edit your webhooks](https://api-doc.qovery.com/#tag/Organization-Webhook/operation/editOrganizationWebhook).
* [Delete your webhooks](https://api-doc.qovery.com/#tag/Organization-Webhook/operation/deleteOrganizationWebhook).
* [Display a list of your existing webhooks and their configuration](https://api-doc.qovery.com/#tag/Organization-Webhook/operation/listOrganizationWebHooks).


[docs.using-qovery.integration.slack]: /docs/using-qovery/integration/slack/
[docs.using-qovery.interface.cli#generate-api-token]: /docs/using-qovery/interface/cli/#generate-api-token
[docs.using-qovery.interface.cli]: /docs/using-qovery/interface/cli/

---
last_modified_on: "2022-06-28"
title: "Webhooks"
description: "Learn how to use Qovery Webhooks"
---

import Alert from '@site/src/components/Alert';
import Steps from '@site/src/components/Steps';

Qovery allows you to create webhooks at organization-level so that, when an event happens on an environment within your organization, you can get notified on external applications (for instance, [Slack][docs.using-qovery.integration.slack]).

You can trigger webhooks when:

* A deployment has started in the environment.
* A deployment has been successful in the environment.
* A deployment has been cancelled in the environment.
* A deployment has failed in the environment.

<Alert type="info">

Webhooks are not available in the Qovery console yet, but you can create and manage them via the Qovery API.

</Alert>

# Creating an Incoming Webhook on Slack

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
'{"description": "slack notifications", "target_url": "<Your Slack Webhook URL>", "environment_types_filter": ["PRODUCTION", "STAGING"], "project_names_filter": ["product*", "analytics"], "events": ["DEPLOYMENT_STARTED", "DEPLOYMENT_CANCELLED", "DEPLOYMENT_SUCCESSFUL", "DEPLOYMENT_FAILURE"], "kind": "SLACK", "enabled": true}' \
"https://api.qovery.com/organization/{Your Organization ID}/webhook"
```
The above command is used to create a webhook to [get notifications on Slack][docs.using-qovery.integration.slack] whenever a deployment has been started, cancelled, successful or failed.

Here is how you can customize the command so that it fits your specific needs:

|     Parameter                | Usage                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `<Your API Token>`           | Replace with your actual Qovery API token.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `"description"`              | Enter a self-explanatory description of what your webhook does. In the example, `"description": "slack notifications"` clearly states that the webhook triggers notifications on Slack.                                                                                                                                                                                                                                                                                                          | 
| `<Your Slack Webhook URL>`   | Replace with the webhook URL provided by the external application you want to receive notifications on.                                                                                                                                                                                                                                                                                                                                                                                          |   
| `"environment_types_filter"` | *(Optional)* If you only want to get notified about events happening on one or several specific type(s) or environment(s), you can provide a list using the following possible values: `"PRODUCTION"`, `"DEVELOPMENT"`, `"STAGING"` and `"PREVIEW"`. <br /> <br /> Please note that `"environment_types_filter"` can be used together with `"project_names_filter"`.                                                                                                                             |
| `"project_names_filter"`     | *(Optional)* If you only want to get notified about events happening in one or several specific projects, you can provide a list of project names that will act as a filter. Notifications will then only be triggered for projects whose names match or, if you're using a wildcard, start with one of the values from your list. <br /> <br /> Please note that `"project_names_filter"` is not case-sensitive, accepts wildcards, and can be used together with `"environment_types_filter"`. |
| `"events"`                   | List all the events you want to be notified about.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `"kind"`                     | Specify which kind of webhook you want to create. At the moment, you can specify : `"kind": "STANDARD"` to create a generic webhook, or `"kind": "SLACK"` to create [a Slack webhook][docs.using-qovery.integration.slack].                                                                                                                                                                                                                                                                      |
| `{Your Organization ID}`     | Replace with the ID of the Qovery organization you want to create your webhook on.                                                                                                                                                                                                                                                                                                                                                                                                               | 

For more information on all the parameters you can set depending on which kind of notifications you want to receive and on which external application, see our [Qovery API Documentation] (https://api-doc.qovery.com/#tag/Organization-Webhook/operation/createOrganizationWebhook).

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

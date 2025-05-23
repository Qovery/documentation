---
last_modified_on: "2025-01-06"
$schema: "/.meta/.schemas/guides.json"
title: Setting up Cloudflare and Custom Domain on Qovery
description: Using Cloudflare for applications deployed on Qovery
author_github: https://github.com/jul-dan
tags: ["type: tutorial", "technology: qovery"]
hide_pagination: true
---
import Alert from '@site/src/components/Alert';
import Assumptions from '@site/src/components/Assumptions';
import Jump from '@site/src/components/Jump';

The guide assumes that you have an application up and running on Qovery. We'll go through the process of adding a new Custom Domain to the application and use Cloudflare as the domain provider. We also assume that you own a custom domain on Cloudflare (or any other domain registrar):

<p align="center">
  <img src="/img/cloudflare/1.png" alt="Cloudflare" />
</p>

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/guides/tutorial/setting-up-cloudflare-and-custom-domain-on-qovery.md.erb
-->

## Adding a Custom Domain

First, let's open application settings:

<p align="center">
  <img src="/img/cloudflare/2.png" alt="Cloudflare" />
</p>

Add your Cloudflare managed domain in `Domain` section:

<p align="center">
  <img src="/img/cloudflare/3.png" alt="Cloudflare" />
</p>


Since your domain is behind a CDN (Cloudflare), you need to switch on the `Domain behind a CDN` toggle. This will automatically switch off the `Generate certificate` toggle because Qovery won't be able to manage it, as it will be handled by Cloudflare.

## Cloudflare Configuration

### CNAME

To finish the configuration on Cloudflare, open the DNS Settings:

<p align="center">
  <img src="/img/cloudflare/4.png" alt="Cloudflare" />
</p>

And add a CNAME entry with the value taken from the Qovery Console just like this:

<p align="center">
  <img src="/img/cloudflare/5.png" alt="Cloudflare" />
</p>

You can safely use the `Proxy` mode.

### SSL/TLS

The last step to configure the domain Cloudflare side properly, is to use the `Full` TLS encryption:

<p align="center">
  <img src="/img/cloudflare/6.png" alt="Cloudflare" />
</p>

This is the requirement to make Custom Domain work properly using Cloudflare as the domain provider on Qovery.

### Restrict application access

If you want to limit the application access via Cloudflare only, you have two ways to perform it:

#### IP whitelisting

In Qovery it is possible to whitelist a range of IPs that can reach your application:
* In the advanced settings section of your application:
<p align="center">
  <img src="/img/cloudflare/8.png" alt="Cloudflare" />
</p>
* Get the [Cloudflare ips](https://www.cloudflare.com/ips-v4/)
* Edit the `network.ingress.whitelist_source_range` setting and add the Cloudflare IPs separated with a comma:
<p align="center">
  <img src="/img/cloudflare/9.png" alt="Cloudflare" />
</p>
* Save and redeploy your application

#### Cloudflared

Cloudflared establishes outbound connections (tunnels) between your resources and Cloudflare’s global network.

You have different ways to install Cloudflared on your cluster, you can find the installation instructions within this [documentation](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-remote-tunnel/)
Since Cloudflared establishes a tunnel for you and the domain and TLS management is done by Cloudflare, you don't need to expose publicly the application during the setup (See [port setup][docs.using-qovery.configuration.application#ports]

You can decide to install Cloudflared by yourself or via Qovery. Within the section below, you will find documentation on how to install Cloudflared as a container in one of the Qovery environments.
By creating and deploying the following service, using the Cloudflared image:

<p align="center">
  <img src="/img/cloudflare/10.png" alt="Cloudflare" />
</p>

<Alert type="info">

Create a `TUNNEL_TOKEN` secret environment variable (Scope: Environment) to pass the Cloudflare token.
<p align="center">
  <img src="/img/cloudflare/13.png" alt="Cloudflare" />
</p>
</Alert>

Once your tunnel is created and connected, you have to set the public hostname and the related service settings.

<p align="center">
  <img src="/img/cloudflare/11.png" alt="Cloudflare" />
</p>

To get the service name of your application deployed by Qovery, you can get it in your application variables:

<p align="center">
  <img src="/img/cloudflare/12.png" alt="Cloudflare" />
</p>

<Alert type="info">

This setup works for static environments but not for dynamic ones since the service name is dynamic. We should probably suggest to use the [cloudflared helm chart](https://github.com/cloudflare/helm-charts) once we release helm deployment

</Alert>

## Conclusion

After following the steps from above, our application should be accessible using the custom domain we selected:

<p align="center">
  <img src="/img/cloudflare/7.png" alt="Cloudflare" />
</p>

In the guide we went through all the necessary steps to configure Cloudflare and Qovery to make use of your custom domain.


[docs.using-qovery.configuration.application#ports]: /docs/using-qovery/configuration/application/#ports

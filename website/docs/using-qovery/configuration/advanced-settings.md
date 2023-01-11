---
last_modified_on: "2023-01-10"
title: "Service Advanced Settings"
description: "Learn how to set advanced settings on your infrastructure with Qovery"
---

import Steps from '@site/src/components/Steps';

import Jump from '@site/src/components/Jump';
import Alert from '@site/src/components/Alert';
import Assumptions from '@site/src/components/Assumptions';

To further fine-tune your Qovery infrastructure, you can set advanced settings through the Advanced Settings section of your service.

To access the Advanced Settings section:

<Steps headingDepth={3}>
<ol>
<li>

Select the service where you want to modify the advanced settings

<p align="center">
  <img src="/img/configuration/advanced-settings/settings.png" alt="Settings" />
</p>

</li>
<li>

Open the advanced settings section from the left menu

<p align="center">
  <img src="/img/configuration/advanced-settings/advanced_settings.png" alt="Advanced Settings" />
</p>

</li>
</ol>
</Steps>

The screen shows you the list of available advanced settings and for each of them:
- The default value
- The value configured right now

You can show only the modified values by activating the "Show only overridden settings" feature

Below is the list of advanced settings available. Note: some service type might now have access to a specific advanced settings. 

### Application Deployment

#### build.timeout_max_sec ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg) ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

| Type    | Description                                                                                 | Default Value |
|---------|---------------------------------------------------------------------------------------------|---------------|
| integer | Allows you to specify an interval, in seconds, after which the application build times out. | `1800`        |

#### deployment.custom_domain_check_enabled ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg) ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

| Type    | Description                                                                                                                                                                                                                                                                                       | Use Case                                                                                                                                                                                                                                                                                                                                      | Default Value |
|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| boolean | Qovery allows you to set custom domains for your applications through the addition of a CNAME record to your domain's DNS settings. By default, when an application is deployed, Qovery checks that the CNAME record is set up correctly. This advanced setting allows you to disable this check. | If you are using a Content Delivery Network (CDN), checking the CNAME setup for any custom domains you may have set up is likely to stall the deployment of your application. <br /> <br />  Therefore, if you are using a CDN behind your application, we recommend disabling this feature to save time during your application deployments. | `true`        |

### Kubernetes Probes ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg) ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

With Kubernetes probes, you can perform health checks to ensure that your applications are running smoothly. You can configure:

* **Liveness probes:** to check if the application container is alive (passing) or dead (failing). If the check fails, the dead container is restarted to attempt to heal the application.
* **Readiness probes:** to check if the application container is ready to receive requests (as even alive containers can enter phases where they cannot handle incoming traffic). Kubernetes only routes traffic to the application if the check succeeds.

<p align="center">
  <img src="/img/configuration/advanced-settings/workflow.png" alt="Kubernetes Probes Workflow" />
</p>


#### liveness_probe.type ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg) ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

| Type   | Description/Use Case                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Possible Values                                                                                                                                                                                                          |
|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| string | Allows you to specify the type of liveness probe you want to launch. <br /> <br/> **HTTP probes** are the most common probe type. You can use them if your application is a HTTP server, or if you create a lightweight HTTP server inside your application specifically to respond to such probes. When using a HTTP liveness probe, Kubernetes pings a path (for example: `/healthz `) at a given port. If it gets a response in the 200 or 300 range, the application is considered healthy. Otherwise, it is considered dead and its container is restarted. <br /> <br /> **TCP probes** are most often used when HTTP or command probes aren't an option. When using a TCP probe, Kubernetes tries to establish a connection on the specified port. If the connection is successful, the application is considered healthy. Otherwise, it is considered dead and the container is restarted. | `"TCP"` (default) <br /> `"HTTP"` <br /> `"NONE"` <br /> <br /> **Warning** `"NONE"` disables the liveness probe, which we strongly advise against, as Kubernetes is then unable to check the state of your application. |

<Alert type="info">

The port used for both HTTP and TCP probes is [the application port][docs.using-qovery.configuration.application#ports].

To define which path should be used for HTTP probes, you can configure the [`liveness_probe.http_get.path`](#liveness_probehttp_getpath) advanced setting.

</Alert>

#### liveness_probe.http_get.path ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg) ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

| Type   | Description                                                                                                                                                                                     | Default Value |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| string | *(Optional/For HTTP liveness probes)* When configuring an HTTP liveness probe, this advanced setting allows you to set the path to access on the HTTP/HTTPS server to perform the health check. | `"/"`         |


#### liveness_probe.initial_delay_seconds ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg) ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

| Type    | Description                                                                                                          | Use Case                                                                                                                                                                                                                                                             | Default Value |
|---------|----------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| integer | Allows you to specify an interval, in seconds, between the application container start and the first liveness check. | Allowing additional time for the application to start can be useful when boot time usually takes too long (due to long boot operations), or when the application opens the port before being ready to receive traffic on it (due to a still ongoing boot operation). | `30`          |


#### liveness_probe.period_seconds ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg) ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

| Type    | Description                                                                      | Default Value |
|---------|----------------------------------------------------------------------------------|---------------|
| integer | Allows you to specify an interval, in seconds, between each liveness probe.      | `10`          |

#### liveness_probe.timeout_seconds ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg) ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

| Type    | Description                                                                               | Default Value |
|---------|-------------------------------------------------------------------------------------------|---------------|
| integer | Allows you to specify the interval, in seconds, after which the liveness probe times out. | `5`           |


#### liveness_probe.success_threshold ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg) ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

| Type    | Description                                                                                                                                              | Default Value |
|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| integer | Allows you to specify how many consecutive successes are needed, as a minimum, for the probe to be considered successful after having failed previously. | `1`           |

#### liveness_probe.failure_threshold ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg) ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

| Type    | Description                                                                                                                                            | Default Value |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| integer | Allows you to specify how many consecutive failures are needed, as a minimum, for the probe to be considered failed after having succeeded previously. | `3`           |

#### readiness_probe.type ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg) ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

| Type   | Description/Use Case                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Possible Values                                                                   |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| string | Allows you to specify the type of readiness probe you want to launch. <br /> <br/> **HTTP probes** are the most common probe type. You can use them if your application is an HTTP server, or if you create a lightweight HTTP server inside your application specifically to respond to such probes. When using an HTTP readiness probe, Kubernetes pings a path (for example: `/healthz `) at a given port. If it gets a response in the 200 or 300 range, the application is considered ready to receive traffic. Otherwise, incoming traffic is suspended. <br /> <br /> **TCP probes** are most often used when HTTP or command probes aren't an option. When using a TCP probe, Kubernetes tries to establish a connection on the specified port. If the connection is successful, the application is considered ready to receive traffic. Otherwise, incoming traffic is suspended. | `"TCP"` (default) <br /> `"HTTP"` <br /> `"NONE"` (disables the readiness probe). |

<Alert type="info">

The port used for both HTTP and TCP probes is [the application port][docs.using-qovery.configuration.application#ports].

To define which path should be used for HTTP probes, you can configure the [`readiness_probe.http_get.path`](#readiness_probehttp_getpath) advanced setting.

</Alert>

#### readiness_probe.http_get.path ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg) ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

| Type    | Description                                                                                                                                                        | Default Value |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| string  | *(Optional/For HTTP readiness probes)* This advanced setting allows you to set the path to access the HTTP/HTTPS server to perform the health check.               | `"/"`         |


#### readiness_probe.initial_delay_seconds ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg) ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

| Type    | Description                                                                                                           | Use Case                                                                                                                                                                                                                                                             | Default Value |
|---------|-----------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| integer | Allows you to specify an interval, in seconds, between the application container start and the first readiness check. | Allowing additional time for the application to start can be useful when boot time usually takes too long (due to long boot operations), or when the application opens the port before being ready to receive traffic on it (due to a still ongoing boot operation). | `30`          |

#### readiness_probe.period_seconds ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg) ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

| Type    | Description                                                                       | Default Value |
|---------|-----------------------------------------------------------------------------------|---------------|
| integer | Allows you to specify an interval, in seconds, between each readiness probe.      | `10`          |

#### readiness_probe.timeout_seconds ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg) ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

| Type    | Description                                                                               | Default Value |
|---------|-------------------------------------------------------------------------------------------|---------------|
| integer | Allows you to specify an interval, in seconds, after which the readiness probe times out. | `1`           |


#### readiness_probe.success_threshold ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg) ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

| Type    | Description                                                                                                                                              | Default Value |
|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| integer | Allows you to specify how many consecutive successes are needed, as a minimum, for the probe to be considered successful after having failed previously. | `1`           |

#### readiness_probe.failure_threshold ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg) ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

| Type    | Description                                                                                                                                            | Default Value |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| integer | Allows you to specify how many consecutive failures are needed, as a minimum, for the probe to be considered failed after having succeeded previously. | `3`           |

### Network Settings

#### network.ingress.cors_allow_headers ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg)

| Type   | Description                                                                                         | Use Case                                                                                                                                                                                                                                                                                                              | Default Value                                                                                                   |
|--------|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| string | *(For CORS users)* Allows you to specify which set of headers can be present in the client request. | For security purposes, you can indicate which HTTP headers can be used during a CORS preflight request which includes the `Access-Control-Request-Headers` request header. For more information, see [CORS HTTP Response Headers] (https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#the_http_response_headers). | `"DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization"` |

#### network.ingress.cors_allow_methods ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg)

| Type   | Description                                                                                       | Use Case                                                                                                                                                                                                                                                                             | Default Value                              |
|--------|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| string | *(For CORS users)* Allows you to specify which set of methods can be used for the client request. | For security purposes, you can indicate which HTTP methods are permitted while accessing a resource in response to cross-origin requests. For more information, see [CORS HTTP Response Headers] (https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#the_http_response_headers). | `"GET, PUT, POST, DELETE, PATCH, OPTIONS"` |

#### network.ingress.cors_allow_origin ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg)

| Type   | Description                                                                                            | Use Case                                                                                                                                                                                                                                      | Default Value |
|--------|--------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| string | *(For CORS users)* Allows you to specify which origin(s) (domain, scheme, port) can access a resource. | For security purposes, you can allow only one or a short list of origins to access your resources. For more information, see [CORS HTTP Response Headers] (https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#the_http_response_headers). | `"*"`         |

#### network.ingress.enable_cors ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg)

| Type    | Description                                                | Use Case                                                                                                                                                                                                                                                     | Default Value  |
|---------|------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| boolean | Allows you to enable Cross-Origin Resource Sharing (CORS). | The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. For more information on CORS and when to enable it, see [Cross-Origin Resources Sharing] (https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). | `false`        |

#### network.ingress.enable_sticky_session ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg)

| Type    | Description                          | Use Case                                                                                                                                                            | Default Value  |
|---------|--------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| boolean | Allows you to enable Sticky session. | Enable the load balancer to bind a user's session to a specific target. This ensures that all requests from the user during the session are sent to the same target | `false`        |

#### network.ingress.keepalive_time_seconds ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg)

| Type    | Description                                                                                                                                                                                                     | Use Case                             | Default Value  |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|----------------|
| integer | Limits the maximum time (in seconds) during which requests can be processed through one keepalive connection. After this time is reached, the connection is closed following the subsequent request processing. | Useful to tune your gRPC application | `3600`         |

#### network.ingress.keepalive_timeout_seconds ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg)

| Type    | Description                                                                                                 | Use Case                             | Default Value |
|---------|-------------------------------------------------------------------------------------------------------------|--------------------------------------|---------------|
| integer | Sets a timeout (in seconds) during which an idle keepalive connection to an upstream server will stay open. | Useful to tune your gRPC application | `60`          |Available for: Application, Container

#### network.ingress.proxy_body_size_mb ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg)

| Type    | Description                                                                                            | Use Case                                                                                                                                                     | Default Value |
|---------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| integer | Allows you to set, in megabytes, a maximum size for resources that can be downloaded from your server. | By default, users can download resources (files, images, videos...) of up to 100 MB. You can use this advanced setting to lower or increase this limitation. | `100`         |

#### network.ingress.proxy_buffer_size_kb ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg)

| Type    | Description                                                                                             | Use Case                                                                        | Default Value |
|---------|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|---------------|
| integer | Allows you to set, in kilobytes, a header buffer size used while reading the response header from upstream. | E.g. You are using Auth0 with NextJS, you will need to set a bigger header size | `4`           |

#### network.ingress.proxy_connect_timeout_seconds ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg)

| Type    | Description                                                                                                                                                | Use Case                                                                                                | Default Value |
|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|---------------|
| integer | Defines a timeout (in seconds) for establishing a connection with a proxied server. It should be noted that this timeout cannot usually exceed 75 seconds. | E.g. You can use it to define the maximum time to wait for your application to establish the connexion. | `60`          |

#### network.ingress.proxy_read_timeout_seconds ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg)

| Type    | Description                                                                                                                                                                                                                                                                    | Use Case                                                     | Default Value |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|---------------|
| integer | Defines a timeout for reading a response from the proxied server. The timeout is set only between two successive read operations, not for the transmission of the whole response. If the proxied server does not transmit anything within this time, the connection is closed. | E.g. You can use it to fine-tune your WebSocket application. | `60`          |

#### network.ingress.proxy_send_timeout_seconds ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg)

| Type    | Description                                                                                                                                                                                                                                                                               | Use Case                                                     | Default Value |
|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|---------------|
| integer | Sets a timeout (in seconds) for transmitting a request to the proxied server. The timeout is set only between two successive write operations, not for the transmission of the whole request. If the proxied server does not receive anything within this time, the connection is closed. | E.g. You can use it to fine-tune your WebSocket application. | `60`          |

#### network.ingress.send_timeout_seconds ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg)

| Type    | Description                                                                                                                                                                                                                                                                 | Use Case                                                            | Default Value |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|---------------|
| integer | Sets a timeout (in seconds) for transmitting a response to the client. The timeout is set only between two successive write operations, not for the transmission of the whole response. If the client does not receive anything within this time, the connection is closed. | Useful to define the maximum timeout to wait for client connection. | `60`          |

#### network.ingress.whitelist_source_range ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg)

| Type    | Description                                                                                            | Use Case                                                                                                                                                                                                                                                  | Default Value        |
|---------|--------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| string | Allows you to specify which IP ranges are allowed to access your application. The value is a comma-separated list of CIDRs, e.g. 10.0.0.0/24,172.10.0.1 | By default, any IP can access your application if it's exposed publicly and the users know the URL. You can limit its access by specifying the IPs you want to reach the app (e.g. the IP of your office) | `0.0.0.0/0` (any IP) |

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/docs/using-qovery/configuration/advanced-settings.md.erb
-->

## Auto-scaling

####  hpa.cpu.average_utilization_percent ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg)

| Type    | Description                                                                                                                                            | Default Value |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| integer | Auto-scaling is triggered when a specific CPU utilization metric is reached (for instance, 40%). This advanced setting allows you to set this metric.  | `60`          |

## Job Settings

#### job.delete_ttl_seconds_after_finished ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

| Type    | Description                                                                                                                                            | Default Value |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| integer | By default terminated jobs in a completed or failure state are not deleted. if this parameter is set, Kubernetes will automatically cleanup completed jobs after the ttl | `null` |


#### cronjob.concurrency_policy ![](/img/advanced_settings/cronjob.svg)

| Type    | Description                                                                                                                                            | Default Value |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| string | It defines if it is allowed to start another instance of the same job if the previous execution didn't finish yet  | `Forbidden`          |

#### cronjob.failed_job_history_limit ![](/img/advanced_settings/cronjob.svg)

| Type    | Description                                                                                                                                            | Default Value |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| string | Allows you to define the maximum number of failed job executions that should be returned in the job execution history  | `1`          |

#### cronjob.success_job_history_limit ![](/img/advanced_settings/cronjob.svg)

| Type    | Description                                                                                                                                            | Default Value |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| string | Allows you to define the maximum number of succeeded job executions that should be returned in the job execution history | `1`          |

### Security

#### security.service_account_name ![](/img/advanced_settings/application.svg) ![](/img/advanced_settings/container.svg) ![](/img/advanced_settings/cronjob.svg) ![](/img/advanced_settings/job.svg)

| Type   | Description                                                   | Use Case                                                                                                                           | Default Value |
|--------|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|---------------|
| string | Allows you to set an existing Kubernetes service account name | E.g. On AWS, you can assume a role on an application to give it specific AWS permissions without having to specify AWS credentials | ``            |


[docs.using-qovery.configuration.application#ports]: /docs/using-qovery/configuration/application/#ports

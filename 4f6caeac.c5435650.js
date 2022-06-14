/*! For license information please see 4f6caeac.c5435650.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{250:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),b=(a(0),a(440)),l=(a(446),a(439)),c=(a(444),{last_modified_on:"2022-06-12",title:"Advanced Settings",description:"Learn how to set advanced settings on your infrastructure with Qovery"}),i={id:"using-qovery/configuration/advanced-settings",title:"Advanced Settings",description:"Learn how to set advanced settings on your infrastructure with Qovery",source:"@site/docs/using-qovery/configuration/advanced-settings.md",permalink:"/docs/using-qovery/configuration/advanced-settings",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/advanced-settings.md",sidebar:"docs",previous:{title:"Application",permalink:"/docs/using-qovery/configuration/application"},next:{title:"Databases",permalink:"/docs/using-qovery/configuration/database"}},o=[{value:"Application Deployment",id:"application-deployment",children:[]},{value:"Kubernetes Probes",id:"kubernetes-probes",children:[]},{value:"Network Settings",id:"network-settings",children:[]},{value:"Auto-scaling",id:"auto-scaling",children:[]}],s={rightToc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"To further fine-tune your Qovery infrastructure, you can set advanced settings through ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://api-doc.qovery.com/#tag/Application-Configuration/operation/getAdvancedSettings"}),"the Qovery API endpoint"),"."),Object(b.b)(l.a,{type:"info",mdxType:"Alert"},"Advanced settings are not available in the Qovery console yet."),Object(b.b)("p",null,"Below is the list of advanced settings currently available."),Object(b.b)("h3",{id:"application-deployment"},"Application Deployment"),Object(b.b)("h4",{id:"buildtimeout_max_sec"},"build.timeout_max_sec"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to specify an interval, in seconds, after which the application build times out."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"1800"))))),Object(b.b)("h3",{id:"kubernetes-probes"},"Kubernetes Probes"),Object(b.b)("p",null,"With Kubernetes probes, you can perform health checks to ensure that your applications are running smoothly. You can configure:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Liveness probes:")," to check if the application container is alive (passing) or dead (failing). If the check fails, the dead container is restarted to attempt to heal the application."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Readiness probes:")," to check if the application container is ready to receive requests (as even alive containers can enter phases where they cannot handle incoming traffic). Kubernetes only routes traffic to the application if the check succeeds.")),Object(b.b)("p",{align:"center"},Object(b.b)("img",{src:"/img/configuration/advanced-settings/workflow.png",alt:"Kubernetes Probes Workflow"})),Object(b.b)("h4",{id:"liveness_probetype"},"liveness_probe.type"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description/Use Case"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Possible Values"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to specify the type of liveness probe you want to launch. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," ",Object(b.b)("strong",{parentName:"td"},"HTTP probes")," are the most common probe type. You can use them if your application is a HTTP server, or if you create a lightweight HTTP server inside your application specifically to respond to such probes. When using a HTTP liveness probe, Kubernetes pings a path (for example: ",Object(b.b)("inlineCode",{parentName:"td"},"/healthz "),") at a given port. If it gets a response in the 200 or 300 range, the application is considered healthy. Otherwise, it is considered dead and its container is restarted. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," ",Object(b.b)("strong",{parentName:"td"},"TCP probes")," are most often used when HTTP or command probes aren't an option. When using a TCP probe, Kubernetes tries to establish a connection on the specified port. If the connection is successful, the application is considered healthy. Otherwise, it is considered dead and the container is restarted."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"TCP"')," (default) ",Object(b.b)("br",null)," ",Object(b.b)("inlineCode",{parentName:"td"},'"HTTP"')," ",Object(b.b)("br",null)," ",Object(b.b)("inlineCode",{parentName:"td"},'"NONE"')," ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," ",Object(b.b)("strong",{parentName:"td"},"Warning")," ",Object(b.b)("inlineCode",{parentName:"td"},'"NONE"')," disables the liveness probe, which we strongly advise against, as Kubernetes is then unable to check the state of your application.")))),Object(b.b)(l.a,{type:"info",mdxType:"Alert"},Object(b.b)("p",null,"The port used for both HTTP and TCP probes is ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/#ports"}),"the application port"),"."),Object(b.b)("p",null,"To define which path should be used for HTTP probes, you can configure the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#liveness_probehttp_getpath"}),Object(b.b)("inlineCode",{parentName:"a"},"liveness_probe.http_get.path"))," advanced setting.")),Object(b.b)("h4",{id:"liveness_probehttp_getpath"},"liveness_probe.http_get.path"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"(Optional/For HTTP liveness probes)")," When configuring a HTTP liveness probe, this advanced setting allows you to set the path to access on the HTTP/HTTPS server to perform the health check."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"/"'))))),Object(b.b)("h4",{id:"liveness_probeinitial_delay_seconds"},"liveness_probe.initial_delay_seconds"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Use Case"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to specify an interval, in seconds, between the application container start and the first liveness check."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allowing additional time for the application to start can be useful when boot time usually takes too long (due to long boot operations), or when the application opens the port before being ready to receive traffic on it (due to a still ongoing boot operation)."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"30"))))),Object(b.b)("h4",{id:"liveness_probeperiod_seconds"},"liveness_probe.period_seconds"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to specify an interval, in seconds, between each liveness probe."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"10"))))),Object(b.b)("h4",{id:"liveness_probetimeout_seconds"},"liveness_probe.timeout_seconds"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to specify the interval, in seconds, after which the liveness probe times out."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"5"))))),Object(b.b)("h4",{id:"liveness_probesuccess_threshold"},"liveness_probe.success_threshold"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to specify how many consecutive successes are needed, as a minimum, for the probe to be considered successful after having failed previously."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"1"))))),Object(b.b)("h4",{id:"liveness_probefailure_threshold"},"liveness_probe.failure_threshold"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to specify how many consecutive failures are needed, as a minimum, for the probe to be considered failed after having succeeded previously."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"3"))))),Object(b.b)("h4",{id:"readiness_probetype"},"readiness_probe.type"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description/Use Case"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Possible Values"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to specify the type of readiness probe you want to launch. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," ",Object(b.b)("strong",{parentName:"td"},"HTTP probes")," are the most common probe type. You can use them if your application is a HTTP server, or if you create a lightweight HTTP server inside your application specifically to respond to such probes. When using a HTTP readiness probe, Kubernetes pings a path (for example: ",Object(b.b)("inlineCode",{parentName:"td"},"/healthz "),") at a given port. If it gets a response in the 200 or 300 range, the application is considered ready to receive traffic. Otherwise, incoming traffic is suspended. ",Object(b.b)("br",null)," ",Object(b.b)("br",null)," ",Object(b.b)("strong",{parentName:"td"},"TCP probes")," are most often used when HTTP or command probes aren't an option. When using a TCP probe, Kubernetes tries to establish a connection on the specified port. If the connection is successful, the application is considered ready to receive traffic. Otherwise, incoming traffic is suspended."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"TCP"')," (default) ",Object(b.b)("br",null)," ",Object(b.b)("inlineCode",{parentName:"td"},'"HTTP"')," ",Object(b.b)("br",null)," ",Object(b.b)("inlineCode",{parentName:"td"},'"NONE"')," (disables the readiness probe).")))),Object(b.b)(l.a,{type:"info",mdxType:"Alert"},Object(b.b)("p",null,"The port used for both HTTP and TCP probes is ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/#ports"}),"the application port"),"."),Object(b.b)("p",null,"To define which path should be used for HTTP probes, you can configure the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#readiness_probehttp_getpath"}),Object(b.b)("inlineCode",{parentName:"a"},"readiness_probe.http_get.path"))," advanced setting.")),Object(b.b)("h4",{id:"readiness_probehttp_getpath"},"readiness_probe.http_get.path"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"(Optional/For HTTP readiness probes)")," This advanced setting allows you to set the path to access on the HTTP/HTTPS server to perform the health check."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"/"'))))),Object(b.b)("h4",{id:"readiness_probeinitial_delay_seconds"},"readiness_probe.initial_delay_seconds"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Use Case"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to specify an interval, in seconds, between the application container start and the first readiness check."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allowing additional time for the application to start can be useful when boot time usually takes too long (due to long boot operations), or when the application opens the port before being ready to receive traffic on it (due to a still ongoing boot operation)."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"30"))))),Object(b.b)("h4",{id:"readiness_probeperiod_seconds"},"readiness_probe.period_seconds"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to specify an interval, in seconds, between each readiness probe."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"10"))))),Object(b.b)("h4",{id:"readiness_probetimeout_seconds"},"readiness_probe.timeout_seconds"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to specify an interval, in seconds, after which the readiness probe times out."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"1"))))),Object(b.b)("h4",{id:"readiness_probesuccess_threshold"},"readiness_probe.success_threshold"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to specify how many consecutive successes are needed, as a minimum, for the probe to be considered successful after having failed previously."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"1"))))),Object(b.b)("h4",{id:"readiness_probefailure_threshold"},"readiness_probe.failure_threshold"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to specify how many consecutive failures are needed, as a minimum, for the probe to be considered failed after having succeeded previously."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"3"))))),Object(b.b)("h3",{id:"network-settings"},"Network Settings"),Object(b.b)("h4",{id:"deploymentcustom_domain_check_enabled"},"deployment.custom_domain_check_enabled"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Use Case"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery allows you to set custom domains for your applications through the addition of a CNAME record to your domain's DNS settings. By default, when an application is deployed, Qovery checks that the CNAME record is set up correctly. This advanced setting allows you to disable this check."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If you are using a Content Delivery Network (CDN), checking the CNAME setup for any custom domains you may have set is likely to stall the deployment of your application. ",Object(b.b)("br",null)," ",Object(b.b)("br",null),"  Therefore, if you are using a CDN behind your application, we recommend disabling this feature to save time during your application deployments."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true"))))),Object(b.b)("h4",{id:"networkingress_proxy_body_size_mb"},"network.ingress_proxy_body_size_mb"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Use Case"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to set, in megabytes, a maximum size for resources that can be downloaded from your server."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"By default, users can download resources (files, images, videos...) of up to 100 MB. You can use this advanced setting to lower or increase this limitation."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"100"))))),Object(b.b)("h4",{id:"networkingress_cors_enable"},"network.ingress_cors_enable"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Use Case"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to enable Cross-Origin Resource Sharing (CORS)."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. For more information on CORS and when to enable it, see ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"}),"Cross-Origin Resources Sharing")," ."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false"))))),Object(b.b)("h4",{id:"networkingress_cors_allow_origin"},"network.ingress_cors_allow_origin"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Use Case"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"(For CORS users)")," Allows you to specify which origin(s) (domain, scheme, port) can access a resource."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"For security purposes, you can allow only one or a short list of origins to access your resources. For more information, see ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#the_http_response_headers"}),"CORS HTTP Response Headers"),"."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"*"'))))),Object(b.b)("h4",{id:"networkingress_cors_allow_methods"},"network.ingress_cors_allow_methods"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Use Case"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"(For CORS users)")," Allows you to specify which set of methods can be used for the client request."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"For security purposes, you can indicate which HTTP methods are permitted while accessing a resource in response to cross-origin requests. For more information, see ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#the_http_response_headers"}),"CORS HTTP Response Headers"),"."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"GET, PUT, POST, DELETE, PATCH, OPTIONS"'))))),Object(b.b)("h4",{id:"networkingress_cors_allow_headers"},"network.ingress_cors_allow_headers"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Use Case"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"(For CORS users)")," Allows you to specify which set of headers can be present in the client request."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"For security purposes, you can indicate which HTTP headers can be used during a CORS preflight request which includes the ",Object(b.b)("inlineCode",{parentName:"td"},"Access-Control-Request-Headers")," request header. For more information, see ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#the_http_response_headers"}),"CORS HTTP Response Headers"),"."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization"'))))),Object(b.b)("h2",{id:"auto-scaling"},"Auto-scaling"),Object(b.b)("h4",{id:"hpacpuaverage_utilization_percent"},"hpa.cpu.average_utilization_percent"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Auto-scaling is triggered when a specific CPU utilization metric is reached (for instance, 40%). This advanced setting allows you to set this metric."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"60"))))))}p.isMDXComponent=!0},438:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var b=typeof n;if("string"===b||"number"===b)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===b)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},439:function(e,t,a){"use strict";a(442);var n=a(0),r=a.n(n),b=a(438),l=a.n(b);a(131);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,b=e.icon,c=e.type,i=null;switch(c){case"danger":i="alert-triangle";break;case"success":i="check-circle";break;case"warning":i="alert-triangle";break;default:i="info"}return r.a.createElement("div",{className:l()(a,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==b}),role:"alert"},!1!==b&&r.a.createElement("i",{className:l()("feather","icon-"+(b||i))}),t)}},440:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,O=p["".concat(l,".").concat(d)]||p[d]||u[d]||b;return a?r.a.createElement(O,c({ref:t},o,{components:a})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},441:function(e,t,a){"use strict";var n=a(1),r=a(0),b=a.n(r),l=a(39),c=a(447),i=a(19),o=a.n(i);t.a=function(e){var t,a=e.to,i=e.href,s=a||i,p=Object(c.a)(s),u=Object(r.useRef)(!1),d=o.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(s),function(){d&&t&&t.disconnect()}}),[s,d,p]),s&&p?b.a.createElement(l.b,Object(n.a)({},e,{onMouseEnter:function(){u.current||(window.docusaurus.preload(s),u.current=!0)},innerRef:function(e){var a,n;d&&e&&p&&(a=e,n=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:s})):b.a.createElement("a",Object(n.a)({},e,{href:s}))}},442:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(445)}),a(74)("fill")},443:function(e,t,a){var n=a(25).f,r=Function.prototype,b=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(b)[1]}catch(e){return""}}})},444:function(e,t,a){"use strict";a(443);var n=a(0),r=a.n(n),b=a(439);t.a=function(e){var t=e.children,a=e.name;return r.a.createElement(b.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},445:function(e,t,a){"use strict";var n=a(27),r=a(75),b=a(26);e.exports=function(e){for(var t=n(this),a=b(t.length),l=arguments.length,c=r(l>1?arguments[1]:void 0,a),i=l>2?arguments[2]:void 0,o=void 0===i?a:r(i,a);o>c;)t[c++]=e;return t}},446:function(e,t,a){"use strict";var n=a(0),r=a.n(n),b=a(441),l=a(438),c=a.n(l);a(132);t.a=function(e){var t=e.children,a=e.className,n=e.badge,l=e.leftIcon,i=e.rightIcon,o=e.size,s=e.target,p=e.to,u=c()("jump-to","jump-to--"+o,a),d=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},l&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+l})),r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(i||"chevron-right")+" arrow"}))));return s?r.a.createElement("a",{href:p,target:s,className:u},d):r.a.createElement(b.a,{to:p,className:u},d)}},447:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))}}]);
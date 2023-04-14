/*! For license information please see b4dda200.1d47fbac.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{345:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n(1),a=n(9),r=(n(0),n(448)),i=n(447),c=n(457),s={last_modified_on:"2023-04-12",title:"Troubleshoot",description:"Everything you need to troubleshoot your application with Qovery",hide_pagination:!0},l={id:"using-qovery/troubleshoot",title:"Troubleshoot",description:"Everything you need to troubleshoot your application with Qovery",source:"@site/docs/using-qovery/troubleshoot.md",permalink:"/docs/using-qovery/troubleshoot",sidebar:"docs",previous:{title:"Logs",permalink:"/docs/using-qovery/deployment/logs"},next:{title:"Quickstarts",permalink:"/docs/using-qovery/quickstart"}},u=[{value:"Liveness/Readiness failed, connect: connection refused",id:"livenessreadiness-failed-connect-connection-refused",children:[]},{value:"My app is crashing, how do I connect to investigate?",id:"my-app-is-crashing-how-do-i-connect-to-investigate",children:[]},{value:"0/x nodes are available: x insufficient cpu/ram",id:"0x-nodes-are-available-x-insufficient-cpuram",children:[]},{value:"During a managed database delete, I&#39;ve this error: SnapshotQuotaExceeded",id:"during-a-managed-database-delete-ive-this-error-snapshotquotaexceeded",children:[]},{value:"Can&#39;t get my SSL / TLS Certificate",id:"cant-get-my-ssl--tls-certificate",children:[]},{value:"Git Submodules - Error while checkout submodules",id:"git-submodules---error-while-checkout-submodules",children:[]},{value:"I don&#39;t have Qovery access anymore, how could I delete Qovery deployed resources on my AWS account?",id:"i-dont-have-qovery-access-anymore-how-could-i-delete-qovery-deployed-resources-on-my-aws-account",children:[]},{value:"My cloud account has been blocked, what should I do?",id:"my-cloud-account-has-been-blocked-what-should-i-do",children:[]}],b={rightToc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"In this guide, you'll find common mistakes, and how to resolve them. If you don't find what you need here, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"please use the forum"),".")),Object(r.b)("p",null,"This guide is divided into two section:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Application deployment issues: it contains the common error you may find during the deployment of an application"),Object(r.b)("li",{parentName:"ul"},"Cluster issues: it contains the common error you may find while managing your clusters")),Object(r.b)("h1",{id:"application-deployment-issues"},"Application deployment issues"),Object(r.b)("h2",{id:"livenessreadiness-failed-connect-connection-refused"},"Liveness/Readiness failed, connect: connection refused"),Object(r.b)("p",null,"If you encounter this kind of error on the Liveness and/or Readiness probe during an application deployment phase:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"Readiness probe failed: dial tcp 100.64.2.230:80: connect: connection refused\nLiveness probe failed: dial tcp 100.64.2.230:80: connect: connection refused\n")),Object(r.b)("p",null,"That means your application may not able to start, or has started but takes too many time to start."),Object(r.b)("p",null,"Here are the possible reasons for starting issues you should check:"),Object(r.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",null,Object(r.b)("p",null,"The declared port on Qovery (here 80), does not match your application's opening port. Check your application port, and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/#ports"}),"set the correct port to your application configuration"),".")),Object(r.b)("li",null,Object(r.b)("p",null,"Ensure your application is not listening onto localhost (127.0.0.1) or a specific IP. But set it to all interfaces (0.0.0.0).")),Object(r.b)("li",null,Object(r.b)("p",null,"Your application takes too long to start and the liveness probe is flagging your application as unhealthy. Try to grow the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/advanced-settings/"}),Object(r.b)("inlineCode",{parentName:"a"},"liveness_probe.initial_delay_seconds")," parameter"),", to inform Kubernetes to delay the time before checking your application availability. Set it for example to 120.")))),Object(r.b)("h2",{id:"my-app-is-crashing-how-do-i-connect-to-investigate"},"My app is crashing, how do I connect to investigate?"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Goal: You want to connect to your container's application to debug your application")),Object(r.b)("p",null,"First, try to use ",Object(r.b)("inlineCode",{parentName:"p"},"qovery shell")," command from the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/#shell"}),"Qovery CLI"),". It's a safe method to connect to your container and debug your application."),Object(r.b)("p",null,"If your app is crashing in the first seconds, you'll lose the connection to your container, making the debug almost impossible, then continue reading."),Object(r.b)(i.a,{type:"danger",mdxType:"Alert"},Object(r.b)("p",null,"You can apply this procedure directly on your application OR on a copy having the same setup.\nIf you don't make a copy, doing this procedure directly on the ",Object(r.b)("strong",{parentName:"p"},"PRODUCTION")," application will lead to a downtime in your service. Be sure of what you're doing before going ahead!")),Object(r.b)("p",null,"Your app is crashing very quickly, here is how to keep the full control of your container:"),Object(r.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",null,Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/#ports"}),"Temporary delete the application port from your application configuration"),". This to avoid Kubernetes to restart the container when the port is not open.")),Object(r.b)("li",null,Object(r.b)("p",null,"Into your Dockerfile, comment your ",Object(r.b)("inlineCode",{parentName:"p"},"EXEC")," or ",Object(r.b)("inlineCode",{parentName:"p"},"ENTRYPOINT")," and add a way to make your container sleep. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'#CMD ["npm", "run", "start"]\nCMD ["tail", "-f", "/dev/null"]\n')),Object(r.b)("p",null,"Commit and push your changes to trigger a new deployment (trigger it manually from the Qovery console if it's not the case).")),Object(r.b)("li",null,Object(r.b)("p",null,"Once the deployment done, you can use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/#shell"}),"qovery shell")," command to connect to your container and debug."),Object(r.b)(i.a,{type:"success",mdxType:"Alert"},Object(r.b)("p",null,"Once you've finished debugging, ",Object(r.b)("strong",{parentName:"p"},"remember to configure your application port back"),". It's mandatory to avoid downtimes during application releases."))))),Object(r.b)("h2",{id:"0x-nodes-are-available-x-insufficient-cpuram"},"0/x nodes are available: x insufficient cpu/ram"),Object(r.b)("p",null,"If you encounter this kind of error during an application deployment phase:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"0/1 nodes are available: 1 Insufficient cpu (or ram).\n")),Object(r.b)("p",null,"That means that we cannot reserve the necessary resources to deploy your application or database on your cluster due to an insufficient amount of CPU or RAM. Moreover, the cluster auto-scaler cannot be triggered since it has already reached the maximum number of instances for your cluster (valid only for Managed Kubernetes clusters)."),Object(r.b)("p",null,"Here are the possible solutions you can apply:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Reduce the resources (CPU/RAM) allocated to your existing/new service. Have a review of the deployed services and see if you can save up some resources by reducing their CPU/RAM setting. If you are using a ",Object(r.b)("em",{parentName:"p"},"K3S (EC2) cluster"),", stop your service before changing the settings. Remember to re-deploy the applications when you edit the resource. Have a look at ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/#resources"}),"the resource section for more information"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select a bigger instance type for your cluster (in terms of CPU/RAM). By increasing it, it will unlock the deployment of your application (since new resources have been added). Check your ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/clusters/#managing-your-cluster-settings"}),"cluster settings"),", and change the instance type of your cluster.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"(only for Managed kubernets clusters) Increase the maximum number of nodes of your cluster. By increasing it, it will allow the cluster autoscaler to add a new node and allow the deployment of your application (since new resources have been added). Check your ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/clusters/#managing-your-cluster-settings"}),"cluster settings"),", and increase the maximum number of nodes of your cluster."))),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"Please note that by increasing the number of nodes OR by selecting a bigger instance type you will increase your cloud provider cost. For more information, have a look at our ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/clusters/#what-are-the-different-instance-types-available-when-creating-a-cluster"}),"cluster section"),".")),Object(r.b)("p",null,"Please note that application resource consumption and application resource allocation are not the same. Have a look at ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/#resources"}),"the resource section for more information")),Object(r.b)("h2",{id:"during-a-managed-database-delete-ive-this-error-snapshotquotaexceeded"},"During a managed database delete, I've this error: SnapshotQuotaExceeded"),Object(r.b)("p",null,"This errors occurs because Qovery creates a snapshot before the delete of the database. This to avoid a user mistake who delete a database accidentally."),Object(r.b)("p",null,"To fix this issue, you have 2 solutions:"),Object(r.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",null,Object(r.b)("p",null,"You certainly have useless snapshots, from old databases or old ones you don't want to keep anymore. Delete them directly from your Cloud Provider web interface. Here is an example on AWS:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Search for the database service (here RDS)"),Object(r.b)("li",{parentName:"ul"},"Select the Snapshots menu"),Object(r.b)("li",{parentName:"ul"},"Select the snapshots to delete")),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/configuration/database/db-snaptshots-quotas-exceed.png",alt:"Database snapshots"}))),Object(r.b)("li",null,Object(r.b)("p",null,"Open a ticket to the Cloud Provider support, and as to raise this limit.")))),Object(r.b)("h2",{id:"cant-get-my-ssl--tls-certificate"},"Can't get my SSL / TLS Certificate"),Object(r.b)("p",null,"When a custom domain is added to an application, it must be configured on your side according to the instructions displayed:"),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/custom-domain-configuration.png",alt:"Custom Domain Configuration"})),Object(r.b)("p",null,"You can check that your custom domain is well configured using the following command: ",Object(r.b)("inlineCode",{parentName:"p"},"dig CNAME ${YOUR_CUSTOM_DOMAIN} +short"),". On the domain above, we can check the configuration is correct on Google DNS servers:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"$ dig CNAME new.console.qovery.com +short @8.8.8.8\nzdf72de71-z709e1a85-gtw.za8ad0659.bool.sh.\n")),Object(r.b)("p",null,"It should return the same value as the one configured on Qovery. Otherwise, be patient (some minutes depending on DNS registrars) and ensure the DNS modification has been applied. Finally, you can check the content of the ",Object(r.b)("inlineCode",{parentName:"p"},"CNAME")," with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"$ dig A new.console.qovery.com +short @8.8.8.8\nzdf72de71-z709e1a85-gtw.za8ad0659.bool.sh.\nac8ad80d15e534c549ee10c87aaf82b4-bba68d8f58c6755d.elb.us-east-2.amazonaws.com.\n3.19.99.1\n18.188.137.104\n")),Object(r.b)("p",null,"We can see the destination contains other elements, indicating that the ",Object(r.b)("inlineCode",{parentName:"p"},"CNAME")," is pointing to an endpoint and correctly configured."),Object(r.b)("p",null,"The SSL / TLS Certificate is generated for the whole group of custom domains you define:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"if one custom domain is misconfigured: the certificate can't be generated"),Object(r.b)("li",{parentName:"ul"},"if the certificate has been generated once, but later one custom domain configuration is changed and misconfigured: the certificate can't be generated again")),Object(r.b)("p",null,"If you experience some invalid certificate, here is how you can fix the issue:"),Object(r.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",null,Object(r.b)("p",null,"Identify the misconfigured custom domain(s) in your application settings.")),Object(r.b)("li",null,Object(r.b)("p",null,"Fix or delete them.")),Object(r.b)("li",null,Object(r.b)("p",null,"Redeploy your impacted application(s).")))),Object(r.b)("h2",{id:"git-submodules---error-while-checkout-submodules"},"Git Submodules - Error while checkout submodules"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Error Message"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'Error message: Error while checkout submodules from repository https://github.com/user/repo.git.\nError: Error { code: -1, klass: 23, message: "authentication required but no callback set" }\n')),Object(r.b)("p",null,"There are limitations with the support for Git Submodules. Only public Submodules over HTTPS or private with embedded basic authentication are supported."),Object(r.b)("p",null,"Solution: Follow our ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/tutorial/working-with-git-submodules/"}),"Git Submodules guide")," to make your application working with Git Submodules on Qovery."),Object(r.b)("h1",{id:"cluster"},"Cluster"),Object(r.b)("h2",{id:"i-dont-have-qovery-access-anymore-how-could-i-delete-qovery-deployed-resources-on-my-aws-account"},"I don't have Qovery access anymore, how could I delete Qovery deployed resources on my AWS account?"),Object(r.b)("p",null,'Unfortunately, there is no automatic way to do it with Qovery once we don\'t have access. However, AWS provides an easy way to retrieve those resources, so you can manually perform the delete. To do so, go on the AWS web console, and search for "Resource Groups & Tag Editor" service, then:'),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/aws_resource_groups.png",alt:"Resource groups search by tag"})),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},'Click on "Create Resource Group".'),Object(r.b)("li",{parentName:"ol"},'In Tags, enter: "ClusterLongId".'),Object(r.b)("li",{parentName:"ol"},'In the "Optional Tag value", enter the Qovery cluster ID. If you don\'t have it, let AWS suggest it for you. If you have Qovery deployed elements remainings, it will propose the Cluster long ID automatically.'),Object(r.b)("li",{parentName:"ol"},'Click on "Add".'),Object(r.b)("li",{parentName:"ol"},"You should see the filter with the information you just entered."),Object(r.b)("li",{parentName:"ol"},'Click on "Preview groups resources".'),Object(r.b)("li",{parentName:"ol"},"You'll have all elements deployed by Qovery and you can delete what you want.")),Object(r.b)("h2",{id:"my-cloud-account-has-been-blocked-what-should-i-do"},"My cloud account has been blocked, what should I do?"),Object(r.b)("p",null,"If you encounter this kind of error during an infrastructure deployment (including managed DBs):"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"This account is currently blocked by your cloud provider, please contact them directly.\n")),Object(r.b)("p",null,"Or"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"This AWS account is currently blocked and not recognized as a valid account.\nPlease contact aws-verification@amazon.com directly to get more details.\nMaybe you are not allowed to use your free tier in this region?\nMaybe you need to provide billing info?\n")),Object(r.b)("p",null,"This error is likely due to a billing issue or blocked free-tier usage in the given region."),Object(r.b)("p",null,"Unfortunately, there is nothing Qovery can do. You need to reach out directly to your cloud provider to get more details and get your account unblocked."),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},"If you are using AWS, you can contact them directly via dedicated email: aws-verification@amazon.com."),Object(r.b)("h1",{id:"more"},"More"),Object(r.b)("p",null,"You are looking to troubleshoot your application with Qovery? ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/getting-started/debugging/"}),"Read this very short guide")))}d.isMDXComponent=!0},446:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var i=a.apply(null,o);i&&e.push(i)}else if("object"===r)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()},447:function(e,t,n){"use strict";n(451);var o=n(0),a=n.n(o),r=n(446),i=n.n(r);n(132);t.a=function(e){var t=e.children,n=e.classNames,o=e.fill,r=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":o,"alert--icon":!1!==r}),role:"alert"},!1!==r&&a.a.createElement("i",{className:i()("feather","icon-"+(r||s))}),t)}},448:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=o,h=b["".concat(i,".").concat(p)]||b[p]||d[p]||r;return n?a.a.createElement(h,c({ref:t},l,{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},451:function(e,t,n){var o=n(12);o(o.P,"Array",{fill:n(453)}),n(74)("fill")},453:function(e,t,n){"use strict";var o=n(28),a=n(75),r=n(27);e.exports=function(e){for(var t=o(this),n=r(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),s=i>2?arguments[2]:void 0,l=void 0===s?n:a(s,n);l>c;)t[c++]=e;return t}},456:function(e,t,n){"use strict";var o=n(458),a=n(51);function r(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,o){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===o[e]&&(o[e]={}),o[e][t[1]]=n):o[e]=n};case"bracket":return function(e,n,o){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==o[e]?o[e]=[].concat(o[e],n):o[e]=[n]:o[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),o=Object.create(null);return"string"!=typeof e?o:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),r=t.length>0?t.join("="):void 0;r=void 0===r?null:decodeURIComponent(r),n(decodeURIComponent(a),r,o)})),Object.keys(o).sort().reduce((function(e,t){var n=o[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):o},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,o){return null===n?[r(t,e),"[",o,"]"].join(""):[r(t,e),"[",r(o,e),"]=",r(n,e)].join("")};case"bracket":return function(t,n){return null===n?r(t,e):[r(t,e),"[]=",r(n,e)].join("")};default:return function(t,n){return null===n?r(t,e):[r(t,e),"=",r(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(o){var a=e[o];if(void 0===a)return"";if(null===a)return r(o,t);if(Array.isArray(a)){var i=[];return a.slice().forEach((function(e){void 0!==e&&i.push(n(o,e,i.length))})),i.join("&")}return r(o,t)+"="+r(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},457:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=(n(446),n(456)),i=n.n(r);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,r=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,s={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},l="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(s),u=Object(o.useState)(null),b=u[0],d=u[1];return a.a.createElement("div",{className:"steps steps--h"+n},t,!r&&!b&&a.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",a.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return d("yes")}},"Yes"),"\xa0\xa0",a.a.createElement("a",{href:l,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==b&&a.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",a.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},458:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
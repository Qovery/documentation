/*! For license information please see 8ae34d0a.9a90cf00.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{314:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(1),i=n(9),a=(n(0),n(472)),r=(n(480),n(471)),l=(n(476),{last_modified_on:"2025-03-10",title:"Deployment Actions",description:"Learn how to deploy your application"}),s={id:"using-qovery/deployment/deployment-actions",title:"Deployment Actions",description:"Learn how to deploy your application",source:"@site/docs/using-qovery/deployment/deployment-actions.md",permalink:"/docs/using-qovery/deployment/deployment-actions",sidebar:"docs",previous:{title:"Deployment Pipeline",permalink:"/docs/using-qovery/deployment/deployment-pipeline"},next:{title:"Deployment History",permalink:"/docs/using-qovery/deployment/deployment-history"}},c=[{value:"Deployment Actions",id:"deployment-actions",children:[{value:"Deploy",id:"deploy",children:[]},{value:"Redeploy",id:"redeploy",children:[]},{value:"Stop",id:"stop",children:[]},{value:"Restart Service",id:"restart-service",children:[]},{value:"Cancel Deployment",id:"cancel-deployment",children:[]},{value:"Deploy other version",id:"deploy-other-version",children:[]},{value:"Deploy latest version",id:"deploy-latest-version",children:[]}]},{value:"Queueing deployment actions",id:"queueing-deployment-actions",children:[]}],p={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Qovery allows you to manage the deployment lifecycle of your services and environments via a set of ",Object(a.b)("inlineCode",{parentName:"p"},"Deployment actions")," (example: deploy, redeploy, restart, stop etc..). These actions can be triggered via the Qovery web console, via the Qovery API, via the Qovery CLI or from your CI/CD depending on your integration type."),Object(a.b)("p",null,"You can imagine the deployment lifecycle of a service or environment like a state machine: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"each state is identified by a ",Object(a.b)("inlineCode",{parentName:"li"},"Deployment Status")),Object(a.b)("li",{parentName:"ul"},"the execution of a deployment action will modify the state of the service/environment until it reaches a final status (ok or error)"),Object(a.b)("li",{parentName:"ul"},"the list of allowed ",Object(a.b)("inlineCode",{parentName:"li"},"Deployment action")," depends on the current ",Object(a.b)("inlineCode",{parentName:"li"},"Deployment Status"),". Example: if the deployment status is ",Object(a.b)("inlineCode",{parentName:"li"},"Deployment Ok"),", you can trigger only the action ",Object(a.b)("inlineCode",{parentName:"li"},"Stop"),". This will stop the execution of the service (deployment status ",Object(a.b)("inlineCode",{parentName:"li"},"Stopped"),").")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example"),":\nWhen a new application is created within Qovery, the application will have the deployment status ",Object(a.b)("inlineCode",{parentName:"p"},"Ready"),". Once the action ",Object(a.b)("inlineCode",{parentName:"p"},"Deploy")," is executed on the service, the service will go through the statuses ",Object(a.b)("inlineCode",{parentName:"p"},"Queued"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Building"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Deploying")," and then finally on the status ",Object(a.b)("inlineCode",{parentName:"p"},"Deployed")," (meaning that the application is correctly deployed). At this point, you can trigger only the action ",Object(a.b)("inlineCode",{parentName:"p"},"Stop")," (This will stop the execution of the service, moving the application to the deployment status ",Object(a.b)("inlineCode",{parentName:"p"},"Stopped"),")."),Object(a.b)("p",null,"You can find the status of the last deployment directly in the Qovery console in the service or environment list:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deployment/deployment_status.png",alt:"Deployment Statuses"})),Object(a.b)("p",null,"Note that the deployment status of the environment is built based on the deployment statuses of each service within it."),Object(a.b)(r.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"Deployment Status and Running Status do not provide the same information. Just because a deployment has failed does not mean your application is not running anymore. Monitoring both your deployment and service statuses allows you to know exactly which applications are currently running on your platform.\nHave a look at ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/running-and-deployment-statuses/"}),"this section")," for more information")),Object(a.b)("p",null,"You can decide to execute a deployment action on:\n1. an environment: via the ",Object(a.b)("inlineCode",{parentName:"p"},"Play")," button at environment level, the action will be executed on each service within the environment. To know more about the deployment order of your services, have a look at the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/deployment-pipeline/"}),"Deployment Pipeline"),"\n2. a single service: via the ",Object(a.b)("inlineCode",{parentName:"p"},"Play")," button at service level, the action will be executed only on the selected service.\n3. a subset of services: selecting one or more services from the service list and using the floating action button. "),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deployment/deployment_actions.png",alt:"Deployment Actions"})),Object(a.b)("p",null,"Note that all the deployment actions are available via any interface described within ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/interface/"}),"this section"),"."),Object(a.b)("h2",{id:"deployment-actions"},"Deployment Actions"),Object(a.b)("p",null,"You can find below a description of each deployment action, including its purpose and the deployment status your environment and/or service will go through."),Object(a.b)("h3",{id:"deploy"},"Deploy"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Deploy")," action allows you to create the resource necessary to run your code on your Kubernetes cluster. This action is available only if the service or environment have never been deployed."),Object(a.b)("p",null,"Based on the configuration of your services within, a certain number of ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/pods/"}),"Pods")," will be created in a dedicated ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"}),"Namespace")," of the target Kubernetes cluster. "),Object(a.b)(r.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"The commit id or tag that will be deployed is the one visible on the interface and not necessarily the latest version (unless the auto-deploy feature is activated)")),Object(a.b)("p",null,"Once triggered, the deployment of a service goes through the following deployment statuses:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"QUEUED")," : the deployment has been queued and it is waiting for the necessary resources to be allocated to manage your request"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"BUILDING")," : the Qovery engine is downloading the git repository and building your code. At the end of this step an image is built and pushed to a registry available on your cloud account. The status will become ",Object(a.b)("strong",{parentName:"li"},"BUILD ERROR")," in case of issues on building your code"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"DEPLOYING")," : the pods are being created on your cluster based on the image built on the previous step. The status will become ",Object(a.b)("strong",{parentName:"li"},"DEPLOYMENT ERROR")," in case of issues on deploying your service. A service is considered un-healthy if the Kubernetes readiness probe check is never OK (more info on ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#before-you-begin"}),"readiness probe"),")."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"DEPLOYMENT OK")," : all the requested pods have been created and the service is correctly running (liveness and readiness probes are ok).")),Object(a.b)("p",null,"If the deployment was triggered on the entire environment, the environment will go through the following deployment statuses:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"QUEUED")," : at least one service is in status ",Object(a.b)("strong",{parentName:"li"},"QUEUED")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"BUILDING")," : at least one service is in status ",Object(a.b)("strong",{parentName:"li"},"BUILDING")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"DEPLOYING")," : at least one service is in status ",Object(a.b)("strong",{parentName:"li"},"DEPLOYING")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"DEPLOYMENT OK")," : at least one service is in status ",Object(a.b)("strong",{parentName:"li"},"DEPLOYMENT OK")," but none of them is in error (",Object(a.b)("strong",{parentName:"li"},"BUILD ERROR")," or ",Object(a.b)("strong",{parentName:"li"},"DEPLOYMENT ERROR"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"DEPLOYMENT ERROR")," : at least one service is in status ",Object(a.b)("strong",{parentName:"li"},"DEPLOYMENT ERROR"))),Object(a.b)("h3",{id:"redeploy"},"Redeploy"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Redeploy")," action allows you to update the remote configuration of your services based on their configuration on Qovery side. If any difference exists (vCPU, number of instances, code version etc..), a new set of pod will be created with the new configuration and replace the existing ones. If there are no configuration differences, nothing will happen on the pods running on your cluster (not even a restart, please use the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/deployment-actions/#restart-service"}),"Restart Service")," feature).\nThis action is available only if the ",Object(a.b)("inlineCode",{parentName:"p"},"Deploy")," action has been triggered at least once on the service or environment."),Object(a.b)("p",null,"When replacing the pods of your application, Qovery uses the rolling-restart deployment logic:"),Object(a.b)("p",null,"1) Deploy new version of instance ","#","1."),Object(a.b)("p",null,"2) New version of instance ","#","1 is running => kill previous version of instance ","#","1."),Object(a.b)("p",null,"3) Deploy new version of instance ","#","2."),Object(a.b)("p",null,"4) New version of instance ","#","2 is running => kill previous version of instance ","#","2."),Object(a.b)("p",null,"And so on..."),Object(a.b)("p",null,"You can trigger the re-deployment of a service or of the entire environment. The service or environment goes through the same deployment statuses described in the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/deployment-actions/#deploy"}),"deployment section"),". "),Object(a.b)(r.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"A redeploy on an environment triggers the deployment of any service in the environment, no matter their previous status (even stopped ones)")),Object(a.b)("h3",{id:"stop"},"Stop"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Stop")," action allows you to stop the execution on the cluster of the selected service or environment (deployment status = Stopped). This action is available only if the current deployment status is ",Object(a.b)("inlineCode",{parentName:"p"},"Deployment OK")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Deployment Error"),"."),Object(a.b)("p",null,"The effect on your cluster of the stop operation is different depending on the type of service:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Application, Container, Container DB ")," : Pods of those services are stopped. Any attached storage is preserved"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Cloud provider Managed DB"),": the database is paused (only for AWS, not working on Redis)")),Object(a.b)("h3",{id:"restart-service"},"Restart Service"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Restart Service")," action allows you to restart the pods of your service without applying any configuration change. This action is available only if the current deployment status is ",Object(a.b)("inlineCode",{parentName:"p"},"Deployment OK")," and only for a single service."),Object(a.b)("p",null,"Once triggered, the deployment status service goes through the following statuses:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"RESTARTING")," : the request to restart has been received"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"RESTARTED")," : all the pods of the service have been restarted"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"RESTART ERROR")," : Qovery couldn't process the restart request")),Object(a.b)("h3",{id:"cancel-deployment"},"Cancel Deployment"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Cancel Deployment")," action allows you to abort any ",Object(a.b)("inlineCode",{parentName:"p"},"Deploy")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Redeploy")," action and stop the execution of the deployment pipeline. This action is available only if the current deployment status is ",Object(a.b)("inlineCode",{parentName:"p"},"Queued")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Building")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Deploying"),"."),Object(a.b)("p",null,"If a deployment of a service A is already ongoing, the cancel operation will stop the deployment execution and rollback the service A to the previous version. Any service already deployed during the pipeline execution will not rollback to the previous version."),Object(a.b)("p",null,"For ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/lifecycle-job/"}),"Lifecycle Jobs"),", the cancel operation is not taken into account unless it is ",Object(a.b)("inlineCode",{parentName:"p"},"forced"),' via the checkbox available in the "Deployment cancel" modal.'),Object(a.b)("h3",{id:"deploy-other-version"},"Deploy other version"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Deploy other version")," action allows you to deploy a different version for your service. This action is available no matter the deployment status of the service."),Object(a.b)("p",null,"Once you click on the action, this panel will appear, and you will be able to choose the version you wish to update/rollback (either git commit or image Tag)."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deployment/deploy_other_version.png",alt:"Deploy Other Version"})),Object(a.b)("p",null,"By pressing on the Deploy button, a deployment of the service will be triggered using the selected version."),Object(a.b)("h3",{id:"deploy-latest-version"},"Deploy latest version"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Deploy latest version")," action allows you to deploy the latest version for any of your services within the environment. This action is available no matter the deployment status of the service and only at environment level"),Object(a.b)("p",null,"Once you click on the action, this panel will appear, and you will be able to choose the services you wish to update to the latest version (only for services with source = git repository)."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deployment/deploy_latest_version.png",alt:"Deploy Latest Version"})),Object(a.b)("p",null,"By pressing on the Deploy button, a deployment of the service will be triggered using the selected version."),Object(a.b)("h2",{id:"queueing-deployment-actions"},"Queueing deployment actions"),Object(a.b)("p",null,"Only one deployment action request can be treated at each time, every successive request will be queued. All the queued requests can be found within the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/deployment-history/"}),"Deployment History")," section."),Object(a.b)("p",null,"If multiple requests are queued at the same time, the following merge logic is applied to optimize the overall deployment time:"),Object(a.b)("p",null,"If two queued requests have the same action (Deploy, stop etc..) and are triggered by the same user, they are merged into one single request."),Object(a.b)("p",null,"Example:\nI have an ongoing deployment of my application A. "),Object(a.b)("p",null,"case 1: if I trigger the deployment on the app B and then on the app C, both requests will be queued and merged into one. When the deployment of the application A is completed, a new deployment request will be treated by Qovery and it will deploy both the app B and C (following the ordering defined in the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/deployment-pipeline/"}),"Deployment Pipeline"),")"),Object(a.b)("p",null,"case 2: if I trigger the deployment of the app B and another user triggers the deployment of the app C, both requests will be queued but they will not be merged into one. When the deployment of the application A is completed, a new deployment request will be treated by Qovery and it will deploy first the app B and then the app C."))}u.isMDXComponent=!0},470:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var r=i.apply(null,o);r&&e.push(r)}else if("object"===a)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(o=function(){return i}.apply(t,[]))||(e.exports=o)}()},471:function(e,t,n){"use strict";n(473);var o=n(0),i=n.n(o),a=n(470),r=n.n(a);n(132);t.a=function(e){var t=e.children,n=e.classNames,o=e.fill,a=e.icon,l=e.type,s=null;switch(l){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return i.a.createElement("div",{className:r()(n,"alert","alert--"+l,{"alert--fill":o,"alert--icon":!1!==a}),role:"alert"},!1!==a&&i.a.createElement("i",{className:r()("feather","icon-"+(a||s))}),t)}},472:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(r,".").concat(d)]||u[d]||b[d]||a;return n?i.a.createElement(m,l({ref:t},c,{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},473:function(e,t,n){var o=n(12);o(o.P,"Array",{fill:n(474)}),n(74)("fill")},474:function(e,t,n){"use strict";var o=n(27),i=n(75),a=n(26);e.exports=function(e){for(var t=o(this),n=a(t.length),r=arguments.length,l=i(r>1?arguments[1]:void 0,n),s=r>2?arguments[2]:void 0,c=void 0===s?n:i(s,n);c>l;)t[l++]=e;return t}},475:function(e,t,n){var o=n(28).f,i=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in i||n(10)&&o(i,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},476:function(e,t,n){"use strict";n(475);var o=n(0),i=n.n(o),a=n(471);t.a=function(e){var t=e.children,n=e.name;return i.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},i.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},477:function(e,t,n){"use strict";var o=n(1),i=n(0),a=n.n(i),r=n(39),l=n(481),s=n(20),c=n.n(s);t.a=function(e){var t,n=e.to,s=e.href,p=n||s,u=Object(l.a)(p),b=Object(i.useRef)(!1),d=c.a.canUseIntersectionObserver;return Object(i.useEffect)((function(){return!d&&u&&window.docusaurus.prefetch(p),function(){d&&t&&t.disconnect()}}),[p,d,u]),p&&u?a.a.createElement(r.b,Object(o.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(p),b.current=!0)},innerRef:function(e){var n,o;d&&e&&u&&(n=e,o=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),o())}))}))).observe(n))},to:p})):a.a.createElement("a",Object(o.a)({},e,{href:p}))}},480:function(e,t,n){"use strict";var o=n(0),i=n.n(o),a=n(477),r=n(470),l=n.n(r);n(134);t.a=function(e){var t=e.children,n=e.className,o=e.badge,r=e.leftIcon,s=e.rightIcon,c=e.size,p=e.target,u=e.to,b=l()("jump-to","jump-to--"+c,n),d=i.a.createElement("div",{className:"jump-to--inner"},i.a.createElement("div",{className:"jump-to--inner-2"},r&&i.a.createElement("div",{className:"jump-to--left"},i.a.createElement("i",{className:"feather icon-"+r})),i.a.createElement("div",{className:"jump-to--main"},o?i.a.createElement("span",{className:"badge badge--primary badge--right"},o):"",t),i.a.createElement("div",{className:"jump-to--right"},i.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return p?i.a.createElement("a",{href:u,target:p,className:b},d):i.a.createElement(a.a,{to:u,className:b},d)}},481:function(e,t,n){"use strict";function o(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return o}))}}]);
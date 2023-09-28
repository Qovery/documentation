/*! For license information please see 8ae34d0a.0bce97c7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{280:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(9),i=(n(0),n(414)),a=(n(421),n(413)),l=(n(418),{last_modified_on:"2023-09-27",title:"Deployment Actions",description:"Learn how to deploy your application"}),s={id:"using-qovery/deployment/deployment-actions",title:"Deployment Actions",description:"Learn how to deploy your application",source:"@site/docs/using-qovery/deployment/deployment-actions.md",permalink:"/docs/using-qovery/deployment/deployment-actions",sidebar:"docs",previous:{title:"Deployment Pipeline",permalink:"/docs/using-qovery/deployment/deployment-pipeline"},next:{title:"Deployment History",permalink:"/docs/using-qovery/deployment/deployment-history"}},c=[{value:"Deployment Actions",id:"deployment-actions",children:[{value:"Deploy",id:"deploy",children:[]},{value:"Redeploy",id:"redeploy",children:[]},{value:"Stop",id:"stop",children:[]},{value:"Restart Service",id:"restart-service",children:[]},{value:"Cancel Deployment",id:"cancel-deployment",children:[]},{value:"Deploy other version",id:"deploy-other-version",children:[]},{value:"Deploy latest version",id:"deploy-latest-version",children:[]}]}],p={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Qovery allows you to manage the deployment lifecycle of your services and environments via a set of ",Object(i.b)("inlineCode",{parentName:"p"},"Deployment actions")," (example: deploy, redeploy, restart, stop etc..). These actions can be triggered via the Qovery web console, via the Qovery API, via the Qovery CLI or from your CI/CD depending on your integration type."),Object(i.b)("p",null,"You can imagine the deployment lifecycle of a service or environment like a state machine: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"each state is identified by a ",Object(i.b)("inlineCode",{parentName:"li"},"Deployment Status")),Object(i.b)("li",{parentName:"ul"},"the execution of a deployment action will modify the state of the service/environment until it reaches a final status (ok or error)"),Object(i.b)("li",{parentName:"ul"},"the list of allowed ",Object(i.b)("inlineCode",{parentName:"li"},"Deployment action")," depends on the current ",Object(i.b)("inlineCode",{parentName:"li"},"Deployment Status"),". Example: if the deployment status is ",Object(i.b)("inlineCode",{parentName:"li"},"Deployment Ok"),", you can trigger only the action ",Object(i.b)("inlineCode",{parentName:"li"},"Stop"),". This will stop the execution of the service (deployment status ",Object(i.b)("inlineCode",{parentName:"li"},"Stopped"),").")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example"),":\nWhen a new application is created within Qovery, the application will have the deployment status ",Object(i.b)("inlineCode",{parentName:"p"},"Ready"),". Once the action ",Object(i.b)("inlineCode",{parentName:"p"},"Deploy")," is executed on the service, the service will go through the statuses ",Object(i.b)("inlineCode",{parentName:"p"},"Queued"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Building"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Deploying")," and then finally on the status ",Object(i.b)("inlineCode",{parentName:"p"},"Deployed")," (meaning that the application is correctly deployed)."),Object(i.b)("p",null,"You can find the deployment status directly in the Qovery console in the service or environment list:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/deployment/deployment_statuses.png",alt:"Deployment Statuses"})),Object(i.b)("p",null,"Note that the deployment status of the environment is built based on the deployment statuses of each service within it."),Object(i.b)(a.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Deployment Status and Running Status do not provide the same information. Just because an error arose during deployment does not mean your application is not running anymore. Monitoring both your deployment and service statuses allows you to know exactly which applications are currently running on your platform.\nHave a look at ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/running-and-deployment-statuses/"}),"this section")," for more information")),Object(i.b)("p",null,"You can decide to execute a deployment action on:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"an environment: the action will be executed on each service within the environment. To know more about the deployment order of your services, have a look at the ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/deployment/deployment-pipeline/"}),"Deployment Pipeline")," "),Object(i.b)("li",{parentName:"ul"},"a single service: the action will be executed only on the selected service.")),Object(i.b)("p",null,"The deployment actions are accessible through the ",Object(i.b)("inlineCode",{parentName:"p"},"Play")," button available at service or environment level. "),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/deployment/deployment_actions.png",alt:"Deployment Actions"})),Object(i.b)("p",null,"You can trigger the deployment actions via the UI but also via any interface described within ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/interface/"}),"this section"),"."),Object(i.b)(a.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"You cannot have two or more deployment actions running at the same time on one environment. Example: you can't trigger the deployment of service A and stop service B at the same time. You need to wait for the deployment of service A to finish before triggering the pause of the service B")),Object(i.b)("h2",{id:"deployment-actions"},"Deployment Actions"),Object(i.b)("p",null,"You can find below a description of each deployment action, including its purpose and the deployment status your environment and/or service will go through."),Object(i.b)("h3",{id:"deploy"},"Deploy"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Deploy")," action allows you to create the resource necessary to run your code on your Kubernetes cluster. This action is available only if the service or environment have never been deployed."),Object(i.b)("p",null,"Based on the configuration of your services within, a certain number of ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/pods/"}),"Pods")," will be created in a dedicated ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"}),"Namespace")," of the target Kubernetes cluster. "),Object(i.b)(a.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"The commit id or tag that will be deployed is the one visible on the interface and not necessarily the latest version (unless the auto-deploy feature is activated)")),Object(i.b)("p",null,"Once triggered, the deployment of a service goes through the following deployment statuses:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"QUEUED")," : the deployment has been queued and it is waiting for the necessary resources to be allocated to manage your request"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"BUILDING")," : the Qovery engine is downloading the git repository and building your code. At the end of this step an image is built and pushed to a registry available on your cloud account. The status will become ",Object(i.b)("strong",{parentName:"li"},"BUILD ERROR")," in case of issues on building your code"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"DEPLOYING")," : the pods are being created on your cluster based on the image built on the previous step. The status will become ",Object(i.b)("strong",{parentName:"li"},"DEPLOYMENT ERROR")," in case of issues on deploying your service. A service is considered un-healthy if the Kubernetes readiness probe check is never OK (more info on ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#before-you-begin"}),"readiness probe"),")."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"DEPLOYMENT OK")," : all the requested pods have been created and the service is correctly running (liveness and readiness probes are ok).")),Object(i.b)("p",null,"If the deployment was triggered on the entire environment, the environment will go through the following deployment statuses:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"QUEUED")," : at least one service is in status ",Object(i.b)("strong",{parentName:"li"},"QUEUED")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"BUILDING")," : at least one service is in status ",Object(i.b)("strong",{parentName:"li"},"BUILDING")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"DEPLOYING")," : at least one service is in status ",Object(i.b)("strong",{parentName:"li"},"DEPLOYING")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"DEPLOYMENT OK")," : at least one service is in status ",Object(i.b)("strong",{parentName:"li"},"DEPLOYMENT OK")," but none of them is in error (",Object(i.b)("strong",{parentName:"li"},"BUILD ERROR")," or ",Object(i.b)("strong",{parentName:"li"},"DEPLOYMENT ERROR"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"DEPLOYMENT ERROR")," : at least one service is in status ",Object(i.b)("strong",{parentName:"li"},"DEPLOYMENT ERROR"))),Object(i.b)("h3",{id:"redeploy"},"Redeploy"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Redeploy")," action allows you to update the remote configuration of your services based on their configuration on Qovery side. If any difference exists (vCPU, number of instances, code version etc..), a new set of pod will be created with the new configuration and replace the existing ones. If there are no configuration differences, nothing will happen on the pods running on your cluster (not even a restart, please use the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/deployment-actions/#restart-service"}),"Restart Service")," feature).\nThis action is available only if the ",Object(i.b)("inlineCode",{parentName:"p"},"Deploy")," action has been triggered at least once on the service or environment."),Object(i.b)("p",null,"When replacing the pods of your application, Qovery uses the rolling-restart deployment logic:"),Object(i.b)("p",null,"1) Deploy new version of instance ","#","1."),Object(i.b)("p",null,"2) New version of instance ","#","1 is running => kill previous version of instance ","#","1."),Object(i.b)("p",null,"3) Deploy new version of instance ","#","2."),Object(i.b)("p",null,"4) New version of instance ","#","2 is running => kill previous version of instance ","#","2."),Object(i.b)("p",null,"And so on..."),Object(i.b)("p",null,"You can trigger the re-deployment of a service or of the entire environment. The service or environment goes through the same deployment statuses described in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/deployment-actions/#deploy"}),"deployment section"),". "),Object(i.b)(a.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"A redeploy on an environment triggers the deployment of any service in the environment, no matter their previous status (even stopped ones)")),Object(i.b)("h3",{id:"stop"},"Stop"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Stop")," action allows you to stop the execution on the cluster of the selected service or environment (deployment status = Stopped). This action is available only if the current deployment status is ",Object(i.b)("inlineCode",{parentName:"p"},"Deployment OK")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Deployment Error"),"."),Object(i.b)("p",null,"The effect on your cluster of the stop operation is different depending on the type of service:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Application, Container, Container DB ")," : Pods of those services are stopped. Any attached storage is preserved"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Cloud provider Managed DB"),": the database is paused (only for AWS, not working on Redis)")),Object(i.b)("h3",{id:"restart-service"},"Restart Service"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Restart Service")," action allows you to restart the pods of your service without applying any configuration change. This action is available only if the current deployment status is ",Object(i.b)("inlineCode",{parentName:"p"},"Deployment OK")," and only for a single service."),Object(i.b)("p",null,"Once triggered, the deployment status service goes through the following statuses:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"RESTARTING")," : the request to restart has been received"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"RESTARTED")," : all the pods of the service have been restarted"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"RESTART ERROR")," : Qovery couldn't process the restart request")),Object(i.b)("h3",{id:"cancel-deployment"},"Cancel Deployment"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Cancel Deployment")," action allows you to abort any ",Object(i.b)("inlineCode",{parentName:"p"},"Deploy")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Redeploy")," action. This action is available only if the current deployment status is ",Object(i.b)("inlineCode",{parentName:"p"},"Queued")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Building")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Deploying"),"."),Object(i.b)(a.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"The action allows to cancel the operation, not to rollback to the previous state. If during the deployment of services A and B, the ",Object(i.b)("inlineCode",{parentName:"p"},"Cancel Deployment")," action is triggered after that the deployment of service A has been completed, only the deployment of service B will be cancelled (service A will use the new config / version)")),Object(i.b)("h3",{id:"deploy-other-version"},"Deploy other version"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Deploy other version")," action allows you to deploy a different version for your service. This action is available no matter the deployment status of the service."),Object(i.b)("p",null,"Once you click on the action, this panel will appear, and you will be able to choose the version you wish to update/rollback (either git commit or image Tag)."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/deployment/deploy_other_version.png",alt:"Deploy Other Version"})),Object(i.b)("p",null,"By pressing on the Deploy button, a deployment of the service will be triggered using the selected version."),Object(i.b)("h3",{id:"deploy-latest-version"},"Deploy latest version"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Deploy latest version")," action allows you to deploy the latest version for any of your services within the environment. This action is available no matter the deployment status of the service and only at environment level"),Object(i.b)("p",null,"Once you click on the action, this panel will appear, and you will be able to choose the services you wish to update to the latest version (only for services with source = git repository)."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/deployment/deploy_latest_version.png",alt:"Deploy Latest Version"})),Object(i.b)("p",null,"By pressing on the Deploy button, a deployment of the service will be triggered using the selected version."))}u.isMDXComponent=!0},412:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&e.push(a)}else if("object"===i)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},413:function(e,t,n){"use strict";n(415);var o=n(0),r=n.n(o),i=n(412),a=n.n(i);n(132);t.a=function(e){var t=e.children,n=e.classNames,o=e.fill,i=e.icon,l=e.type,s=null;switch(l){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return r.a.createElement("div",{className:a()(n,"alert","alert--"+l,{"alert--fill":o,"alert--icon":!1!==i}),role:"alert"},!1!==i&&r.a.createElement("i",{className:a()("feather","icon-"+(i||s))}),t)}},414:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(m,l({ref:t},c,{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},415:function(e,t,n){var o=n(12);o(o.P,"Array",{fill:n(416)}),n(74)("fill")},416:function(e,t,n){"use strict";var o=n(27),r=n(75),i=n(26);e.exports=function(e){for(var t=o(this),n=i(t.length),a=arguments.length,l=r(a>1?arguments[1]:void 0,n),s=a>2?arguments[2]:void 0,c=void 0===s?n:r(s,n);c>l;)t[l++]=e;return t}},417:function(e,t,n){var o=n(28).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(10)&&o(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},418:function(e,t,n){"use strict";n(417);var o=n(0),r=n.n(o),i=n(413);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(i.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},419:function(e,t,n){"use strict";var o=n(1),r=n(0),i=n.n(r),a=n(39),l=n(422),s=n(20),c=n.n(s);t.a=function(e){var t,n=e.to,s=e.href,p=n||s,u=Object(l.a)(p),b=Object(r.useRef)(!1),d=c.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!d&&u&&window.docusaurus.prefetch(p),function(){d&&t&&t.disconnect()}}),[p,d,u]),p&&u?i.a.createElement(a.b,Object(o.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(p),b.current=!0)},innerRef:function(e){var n,o;d&&e&&u&&(n=e,o=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),o())}))}))).observe(n))},to:p})):i.a.createElement("a",Object(o.a)({},e,{href:p}))}},421:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(419),a=n(412),l=n.n(a);n(133);t.a=function(e){var t=e.children,n=e.className,o=e.badge,a=e.leftIcon,s=e.rightIcon,c=e.size,p=e.target,u=e.to,b=l()("jump-to","jump-to--"+c,n),d=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},a&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+a})),r.a.createElement("div",{className:"jump-to--main"},o?r.a.createElement("span",{className:"badge badge--primary badge--right"},o):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return p?r.a.createElement("a",{href:u,target:p,className:b},d):r.a.createElement(i.a,{to:u,className:b},d)}},422:function(e,t,n){"use strict";function o(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return o}))}}]);
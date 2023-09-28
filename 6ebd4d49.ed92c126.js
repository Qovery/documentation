/*! For license information please see 6ebd4d49.ed92c126.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{267:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(1),i=n(9),a=(n(0),n(414)),r=(n(421),n(413)),l=(n(418),{last_modified_on:"2023-08-18",title:"Logs",description:"Learn how to access the logs of your environment and services"}),c={id:"using-qovery/deployment/logs",title:"Logs",description:"Learn how to access the logs of your environment and services",source:"@site/docs/using-qovery/deployment/logs.md",permalink:"/docs/using-qovery/deployment/logs",sidebar:"docs",previous:{title:"Running and Deployment Statuses",permalink:"/docs/using-qovery/deployment/running-and-deployment-statuses"},next:{title:"Deployment Strategies",permalink:"/docs/using-qovery/deployment/deployment-strategies"}},s=[{value:"How to access the logs",id:"how-to-access-the-logs",children:[]},{value:"Navigation Panel",id:"navigation-panel",children:[]},{value:"Log section",id:"log-section",children:[{value:"Deployment Logs",id:"deployment-logs",children:[]},{value:"Live Logs",id:"live-logs",children:[]}]}],u={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Logs interface allows you to access:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"The deployment logs"),": every time a deployment is triggered, Qovery provides you with the log of its execution and as well with any error that might occur."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"The live logs")," of your applications: Qovery allows you to retrieve the logs of your application in real time, streamed directly from your remote application (no data is stored on Qovery side).  The logs are accessible as long as the application is running and writing the logs in the ",Object(a.b)("inlineCode",{parentName:"li"},"stdout"),".")),Object(a.b)("h2",{id:"how-to-access-the-logs"},"How to access the logs"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Logs")," interface can be accessed from the console by clicking on the ",Object(a.b)("inlineCode",{parentName:"p"},"parchment")," icon available in the header or within the table"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deployment/access_logs.png",alt:"Log access"})),Object(a.b)("p",null,"The interface is composed by two sections:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("strong",{parentName:"li"},"navigation panel")," (on the left)"),Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("strong",{parentName:"li"},"log section")," allowing you to switch between the deployment logs and the live logs of a service.")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deployment/logs_view.png",alt:"Log View"})),Object(a.b)("h2",{id:"navigation-panel"},"Navigation Panel"),Object(a.b)("p",null,"This section provides you with some information on the last ",Object(a.b)("inlineCode",{parentName:"p"},"Deployment")," happened on the environment and as well a navigation system to access the logs of each services of your environment. "),Object(a.b)("p",null,"More in detail you will find here:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Deployment information (top section): this section shows you the status of the deployment execution and when it happened. If a deployment is ongoing, its status will be updated accordingly on this section. "),Object(a.b)("li",{parentName:"ul"},"Pipeline view: this section provides an overall view of the current configuration of the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/deployment/deployment-pipeline/"}),"Deployment Pipeline")," and each services present within the environment. By default, only the services that have been deployed within the last deployment execution are displayed but you can still display all of them by un-ticking the option ",Object(a.b)("inlineCode",{parentName:"li"},"Last deployed only"),". ")),Object(a.b)("h2",{id:"log-section"},"Log section"),Object(a.b)("p",null,"This section allows you to access the ",Object(a.b)("inlineCode",{parentName:"p"},"Deployment Logs")," and the ",Object(a.b)("inlineCode",{parentName:"p"},"Live logs")," of each service."),Object(a.b)("h3",{id:"deployment-logs"},"Deployment Logs"),Object(a.b)("p",null,"This tab shows you the deployment logs for each service of the environment. By default you get access to the logs of the last deployment execution but you can switch to previous execution (See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#accessing-old-deployment-logs"}),"Accessing old deployment logs"),")."),Object(a.b)("p",null,"If the service is built via the Qovery CI pipeline, you will get access to the build logs."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deployment/build_logs.png",alt:"Build Logs"})),Object(a.b)("p",null,"When the deployment on Kubernetes is executed, the system will provide you the deployment status updates. In case of deployment issues, these updates will provide you with some information on the rootcause."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deployment/deployment_status_update.png",alt:"Deployment Status Update"})),Object(a.b)("p",null,"At the end of the deployment, a final message is emitted confirming if the deployment was successful or not and, in case of issue, it provides you with some information on how to solve the issue. "),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deployment/log_content.png",alt:"Log content"})),Object(a.b)("p",null,"You can use the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/troubleshoot/"}),"Troubleshoot section")," to investigate any issue you might encounter during the deployment of your services."),Object(a.b)("h4",{id:"accessing-old-deployment-logs"},"Accessing old deployment logs"),Object(a.b)("p",null,"You can access the logs of a past deployment execution in two ways:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"using the ",Object(a.b)("inlineCode",{parentName:"li"},"Deployment log switch")," on the logs view")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deployment/deployment_switch.png",alt:"Deployment Log Switch"})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"from the ",Object(a.b)("inlineCode",{parentName:"li"},"Deployment")," tab from the service or environment page and clicking on the ",Object(a.b)("inlineCode",{parentName:"li"},"parchment")," icon of a previous deployment")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deployment/deployment_tab_switch.png",alt:"Deployment Tab Switch"})),Object(a.b)(r.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"Qovery provides access to the logs of the last 20 deployments executed on your environment. If your service has been deployed before more than 20 deployments ago, you won't be able to access its deployment logs.")),Object(a.b)("h3",{id:"live-logs"},"Live Logs"),Object(a.b)("p",null,"The live logs tab gives you a real-time view on the log generated by your application while running remotely on your cloud provider infrastructure. "),Object(a.b)("p",null,"Within this section you will find:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Timestamp: the timestamp of the message"),Object(a.b)("li",{parentName:"ul"},"Pod Name: the name of the kubernetes pod where your application is running (to distinguish the instance in case of multi-instance app). If you want to follow a specific pod, you can filter the logs by clicking on the pod name"),Object(a.b)("li",{parentName:"ul"},"Version: the commit id or the image tag of the application running on this POD"),Object(a.b)("li",{parentName:"ul"},"Message: the log message")),Object(a.b)("p",null,"If you need to troubleshoot issues on the requests managed by your application, you can also access the Nginx logs in the same view (logs format is available in the helper). Note that this option is available only if the application is exposed publicly (See the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/#ports"}),"Port Section"),")"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deployment/live_logs.png",alt:"Log content"})))}p.isMDXComponent=!0},412:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var r=i.apply(null,o);r&&e.push(r)}else if("object"===a)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(o=function(){return i}.apply(t,[]))||(e.exports=o)}()},413:function(e,t,n){"use strict";n(415);var o=n(0),i=n.n(o),a=n(412),r=n.n(a);n(132);t.a=function(e){var t=e.children,n=e.classNames,o=e.fill,a=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return i.a.createElement("div",{className:r()(n,"alert","alert--"+l,{"alert--fill":o,"alert--icon":!1!==a}),role:"alert"},!1!==a&&i.a.createElement("i",{className:r()("feather","icon-"+(a||c))}),t)}},414:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,d=p["".concat(r,".").concat(b)]||p[b]||m[b]||a;return n?i.a.createElement(d,l({ref:t},s,{components:n})):i.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},415:function(e,t,n){var o=n(12);o(o.P,"Array",{fill:n(416)}),n(74)("fill")},416:function(e,t,n){"use strict";var o=n(27),i=n(75),a=n(26);e.exports=function(e){for(var t=o(this),n=a(t.length),r=arguments.length,l=i(r>1?arguments[1]:void 0,n),c=r>2?arguments[2]:void 0,s=void 0===c?n:i(c,n);s>l;)t[l++]=e;return t}},417:function(e,t,n){var o=n(28).f,i=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in i||n(10)&&o(i,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},418:function(e,t,n){"use strict";n(417);var o=n(0),i=n.n(o),a=n(413);t.a=function(e){var t=e.children,n=e.name;return i.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},i.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},419:function(e,t,n){"use strict";var o=n(1),i=n(0),a=n.n(i),r=n(39),l=n(422),c=n(20),s=n.n(c);t.a=function(e){var t,n=e.to,c=e.href,u=n||c,p=Object(l.a)(u),m=Object(i.useRef)(!1),b=s.a.canUseIntersectionObserver;return Object(i.useEffect)((function(){return!b&&p&&window.docusaurus.prefetch(u),function(){b&&t&&t.disconnect()}}),[u,b,p]),u&&p?a.a.createElement(r.b,Object(o.a)({},e,{onMouseEnter:function(){m.current||(window.docusaurus.preload(u),m.current=!0)},innerRef:function(e){var n,o;b&&e&&p&&(n=e,o=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),o())}))}))).observe(n))},to:u})):a.a.createElement("a",Object(o.a)({},e,{href:u}))}},421:function(e,t,n){"use strict";var o=n(0),i=n.n(o),a=n(419),r=n(412),l=n.n(r);n(133);t.a=function(e){var t=e.children,n=e.className,o=e.badge,r=e.leftIcon,c=e.rightIcon,s=e.size,u=e.target,p=e.to,m=l()("jump-to","jump-to--"+s,n),b=i.a.createElement("div",{className:"jump-to--inner"},i.a.createElement("div",{className:"jump-to--inner-2"},r&&i.a.createElement("div",{className:"jump-to--left"},i.a.createElement("i",{className:"feather icon-"+r})),i.a.createElement("div",{className:"jump-to--main"},o?i.a.createElement("span",{className:"badge badge--primary badge--right"},o):"",t),i.a.createElement("div",{className:"jump-to--right"},i.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return u?i.a.createElement("a",{href:p,target:u,className:m},b):i.a.createElement(a.a,{to:p,className:m},b)}},422:function(e,t,n){"use strict";function o(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return o}))}}]);
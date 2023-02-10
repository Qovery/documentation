/*! For license information please see e3c664e0.a49da9fb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{414:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),o=(n(0),n(448)),c=(n(453),n(447)),l=(n(452),{last_modified_on:"2023-02-01",title:"Running and Deployment Statuses",description:"Learn how to monitor your services"}),i={id:"using-qovery/deployment/running-and-deployment-statuses",title:"Running and Deployment Statuses",description:"Learn how to monitor your services",source:"@site/docs/using-qovery/deployment/running-and-deployment-statuses.md",permalink:"/docs/using-qovery/deployment/running-and-deployment-statuses",sidebar:"docs",previous:{title:"Deployment management",permalink:"/docs/using-qovery/deployment/deployment-management"},next:{title:"Deployment Pipeline",permalink:"/docs/using-qovery/deployment/deployment-pipeline"}},s=[{value:"Environment Statuses",id:"environment-statuses",children:[]},{value:"Service Statuses",id:"service-statuses",children:[]}],b={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"From any environment window on your ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Qovery Console"),", you can monitor the running and deployment status of your environments and services."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/monitoring/Run_Deployment_Statuses.jpg",alt:"Application"})),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Item"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The dot next to the name of the environment shows its overall status. ",Object(o.b)("br",null),"  For more information, see ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/using-qovery/deployment/running-and-deployment-statuses/#environment-statuses"}),"Environment Statuses"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The dot in the ",Object(o.b)("inlineCode",{parentName:"td"},"Service")," column shows the status of the related service. ",Object(o.b)("br",null)," For more information, see ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/using-qovery/deployment/running-and-deployment-statuses/#service-statuses"}),"Service Statuses"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The label next to the name of the environment shows the overall status of your deployments in that specific environment. ",Object(o.b)("br",null)," For more information, see Deployment Statuses section below.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The label in the ",Object(o.b)("inlineCode",{parentName:"td"},"Service")," column shows the deployment status of the related service. ",Object(o.b)("br",null)," For more information, see Deployment Statuses section below.")))),Object(o.b)("h1",{id:"run-statuses"},"Run Statuses"),Object(o.b)("p",null,"Thanks to run statuses, you can find out which services are currently running on your platform, and which ones are interrupted. There are two types of run services available at the moment: environment statuses and service statuses."),Object(o.b)("h2",{id:"environment-statuses"},"Environment Statuses"),Object(o.b)("p",null,"When you access an environment on your ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Qovery Console"),", you can check its status in real time. To do so, at the top of the environment window, hover over the status dot next to the environment name."),Object(o.b)("p",null,"The environment status is computed based on the statuses of all the services in that specific environment. Here are all the possible environment statuses:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Status"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"STOPPED ",Object(o.b)("em",{parentName:"td"},"(Gray dot)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"All the services are stopped.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"STARTING ",Object(o.b)("em",{parentName:"td"},"(Loading Icon)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"At least 1 service is starting.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"STOPPING ",Object(o.b)("em",{parentName:"td"},"(Loading Icon)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"At least 1 service is stopping.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RUNNING ",Object(o.b)("em",{parentName:"td"},"(Green dot)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"All services are running correctly.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ERROR ",Object(o.b)("em",{parentName:"td"},"(Red dot)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"All services are in error status.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"WARNING ",Object(o.b)("em",{parentName:"td"},"(Orange dot)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"At least 1 service is in error status (but not all of them).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"COMPLETED ",Object(o.b)("em",{parentName:"td"},"(Green dot)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The job execution has completed (only for cronjob and lifecycle jobs).")))),Object(o.b)("h2",{id:"service-statuses"},"Service Statuses"),Object(o.b)("p",null,"When you access an environment on your ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Qovery Console"),", you can check the status of each service in that environment in real time. To do so, hover over the status dot next to the service name."),Object(o.b)(c.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"At the moment, you can only check the service status, meaning the overall status of your application (based on all the statuses of its various instances). Soon, you will also be able to check the status of each instance of your application from your console.")),Object(o.b)("p",null,"Here are all the possible service statuses:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Status"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"STOPPED ",Object(o.b)("em",{parentName:"td"},"(Gray dot)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"All the application instances are stopped.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"STARTING ",Object(o.b)("em",{parentName:"td"},"(Loading Icon)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"At least 1 application instance is starting.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"STOPPING ",Object(o.b)("em",{parentName:"td"},"(Loading Icon)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"At least 1 application instance is stopping.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RUNNING ",Object(o.b)("em",{parentName:"td"},"(Green dot)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"All application instances are running correctly.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ERROR ",Object(o.b)("em",{parentName:"td"},"(Red dot)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"All application instances are in error status.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"WARNING ",Object(o.b)("em",{parentName:"td"},"(Orange dot)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"(Valid for multi-instance applications only)")," At least 1 application instance is in error status (but not all of them).")))),Object(o.b)("h1",{id:"deployment-statuses"},"Deployment Statuses"),Object(o.b)("p",null,"When you access an environment on your ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Qovery Console"),", you can check:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"the overall status of your deployments in that specific environment"),", thanks to the label displayed next to the environment name. This corresponds to the status of the last deployment performed on the environment.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"the deployment status of each service in that specific environment"),", thanks to the label displayed in the ",Object(o.b)("inlineCode",{parentName:"p"},"Service")," column. This corresponds to the status of the last deployment performed on the service."),Object(o.b)("p",{parentName:"li"},"Here are all the possible deployment statuses for both environments and services:")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"QUEUED")," (temporary state).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"BUILDING")," (temporary state).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"BUILDING ERROR")," (final state).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"DEPLOYING")," (temporary state).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"DEPLOYMENT ERROR")," (final state).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"CANCELLING BUILDING")," (temporary state).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"CANCELLED")," (temporary state).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"DEPLOYMENT OK")," (final state)."))),Object(o.b)(c.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Just because an error arised during deployment does not mean your application is not running. Monitoring both your deployment and service statuses allows you to know exactly which applications are currently running on your platform.")))}p.isMDXComponent=!0},446:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},447:function(e,t,n){"use strict";n(451);var a=n(0),r=n.n(a),o=n(446),c=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,o=e.icon,l=e.type,i=null;switch(l){case"danger":i="alert-triangle";break;case"success":i="check-circle";break;case"warning":i="alert-triangle";break;default:i="info"}return r.a.createElement("div",{className:c()(n,"alert","alert--"+l,{"alert--fill":a,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:c()("feather","icon-"+(o||i))}),t)}},448:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(d,l({ref:t},s,{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},449:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),c=n(39),l=n(454),i=n(20),s=n.n(i);t.a=function(e){var t,n=e.to,i=e.href,b=n||i,p=Object(l.a)(b),u=Object(r.useRef)(!1),m=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!m&&p&&window.docusaurus.prefetch(b),function(){m&&t&&t.disconnect()}}),[b,m,p]),b&&p?o.a.createElement(c.b,Object(a.a)({},e,{onMouseEnter:function(){u.current||(window.docusaurus.preload(b),u.current=!0)},innerRef:function(e){var n,a;m&&e&&p&&(n=e,a=function(){window.docusaurus.prefetch(b)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:b})):o.a.createElement("a",Object(a.a)({},e,{href:b}))}},450:function(e,t,n){var a=n(26).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},451:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(455)}),n(74)("fill")},452:function(e,t,n){"use strict";n(450);var a=n(0),r=n.n(a),o=n(447);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},453:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(449),c=n(446),l=n.n(c);n(133);t.a=function(e){var t=e.children,n=e.className,a=e.badge,c=e.leftIcon,i=e.rightIcon,s=e.size,b=e.target,p=e.to,u=l()("jump-to","jump-to--"+s,n),m=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},c&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+c})),r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(i||"chevron-right")+" arrow"}))));return b?r.a.createElement("a",{href:p,target:b,className:u},m):r.a.createElement(o.a,{to:p,className:u},m)}},454:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))},455:function(e,t,n){"use strict";var a=n(28),r=n(75),o=n(27);e.exports=function(e){for(var t=a(this),n=o(t.length),c=arguments.length,l=r(c>1?arguments[1]:void 0,n),i=c>2?arguments[2]:void 0,s=void 0===i?n:r(i,n);s>l;)t[l++]=e;return t}}}]);
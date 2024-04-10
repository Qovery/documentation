/*! For license information please see b5eab6bb.06b51fa5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{352:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),o=(n(0),n(446)),i=n(453),c=(n(445),n(450)),l=(n(454),{last_modified_on:"2024-04-10",$schema:"/.meta/.schemas/guides.json",title:"Kubernetes observability and monitoring with Datadog",description:"How to integrate Datadog with Kubernetes on Qovery.",author_github:"https://github.com/acarranoqovery",tags:["type: tutorial","technology: qovery"],hide_pagination:!0}),s={categories:[{name:"tutorial",title:"Tutorial",description:"Additional step-by-step resources to leverage even more Qovery",permalink:"/guides/tutorial"}],coverLabel:"Kubernetes observability and monitoring with Datadog",description:"How to integrate Datadog with Kubernetes on Qovery.",permalink:"/guides/tutorial/kubernetes-observability-and-monitoring-with-datadog",readingTime:"4 min read",source:"@site/guides/tutorial/kubernetes-observability-and-monitoring-with-datadog.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Kubernetes observability and monitoring with Datadog",truncated:!1,prevItem:{title:"Integrate your application logs to Cloudwatch",permalink:"/guides/tutorial/cloudwatch-integration"},nextItem:{title:"Managing Environment Variables in React (create-react-app)",permalink:"/guides/tutorial/managing-env-variables-in-create-react-app"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],b={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"While Qovery will soon provide basic metrics on apps resources usage, you might need a more advanced view on what happens on your infrastructure. There are many solutions on the market, one of them being Datadog.\nDatadog is one of the leading platforms for monitoring and observability, and it's pretty easy to integrate it with Qovery."),Object(o.b)(c.a,{name:"guide",mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have a Qovery cluster running"),Object(o.b)("li",{parentName:"ul"},"You have a dedicated Qovery project and environment to deploy Datadog (example: Project=Tooling, Environment=Production)"),Object(o.b)("li",{parentName:"ul"},"You have a Datadog account"),Object(o.b)("li",{parentName:"ul"},"You have already created a ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.datadoghq.com/account_management/api-app-keys/#api-keys"}),"Datadog API Key")))),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"In this tutorial, we will install the Datadog agent on a Qovery cluster to gather metrics about infrastructure and applications."),Object(o.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("h4",{id:"add-the-datadog-helm-repository"},"Add the Datadog helm repository"),Object(o.b)("p",null,"Add the Datadog helm repository in your Qovery settings by following ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/helm-repository/"}),"this documentation")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Repository name: ",Object(o.b)("inlineCode",{parentName:"li"},"Datadog")),Object(o.b)("li",{parentName:"ul"},"Kind: ",Object(o.b)("inlineCode",{parentName:"li"},"HTTPS")),Object(o.b)("li",{parentName:"ul"},"Repository URL: ",Object(o.b)("inlineCode",{parentName:"li"},"https://helm.datadoghq.com")))),Object(o.b)("li",null,Object(o.b)("h4",{id:"create-the-datadog-service-within-qovery"},"Create the datadog service within Qovery"),Object(o.b)("p",null,"Create the Datadog helm service in the Qovery environment of your choice (preferrably within a dedicated Tooling project) by following ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/helm/"}),"this documentation")," and these values:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"General:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Application name: ",Object(o.b)("inlineCode",{parentName:"li"},"Datadog")),Object(o.b)("li",{parentName:"ul"},"Source:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Helm source: ",Object(o.b)("inlineCode",{parentName:"li"},"Helm repository")),Object(o.b)("li",{parentName:"ul"},"Repository: ",Object(o.b)("inlineCode",{parentName:"li"},"Datadog")," (the name given during the datadog helm repository added in the previous step)"),Object(o.b)("li",{parentName:"ul"},"Chart name: ",Object(o.b)("inlineCode",{parentName:"li"},"datadog")),Object(o.b)("li",{parentName:"ul"},"Version: ",Object(o.b)("inlineCode",{parentName:"li"},"3.49.5")," (this is the version we used for this setup, update it based on the chosen version)"),Object(o.b)("li",{parentName:"ul"},"Allow cluster-wide resources \u2714\ufe0f"))))),Object(o.b)("li",{parentName:"ul"},"Values",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Values override as file:"),Object(o.b)("li",{parentName:"ul"},"File source: ",Object(o.b)("inlineCode",{parentName:"li"},"Raw YAML")),Object(o.b)("li",{parentName:"ul"},"Raw YAML:")))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# The following YAML contains the minimum configuration required to deploy the Datadog Agent\n# on your cluster. Update it accordingly to your needs\ndatadog:\n  # here we use a Qovery secret to retrieve the Datadog API Key (See next step)\n  apiKey: qovery.env.DD_API_KEY\n  # Update the site depending on where you want to store your data in Datadog\n  site: datadoghq.eu\n  # Update the cluster name with the name of your choice\n  clusterName: qoverycluster\n")),Object(o.b)("p",null,"There are many other values you can set and modify the Datadog agent behaviour. For advanced usage, check: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Datadog/helm-charts/blob/main/charts/datadog/values.yaml"}),"https://github.com/Datadog/helm-charts/blob/main/charts/datadog/values.yaml")),Object(o.b)("p",null,"Now get to the last step and just ",Object(o.b)("inlineCode",{parentName:"p"},"Create")," the service on Qovery.")),Object(o.b)("li",null,Object(o.b)("h4",{id:"store-the-datadog-api-key-as-secret"},"Store the Datadog API Key as secret"),Object(o.b)("p",null,"In the previous step we have assigned the macro ",Object(o.b)("inlineCode",{parentName:"p"},"qovery.env.DD_API_KEY")," to the API Key value. In this step we will create this secret within the Qovery console."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open the service overview of the created Datadog service"),Object(o.b)("li",{parentName:"ul"},"Enter the ",Object(o.b)("inlineCode",{parentName:"li"},"Variables")," section"),Object(o.b)("li",{parentName:"ul"},"Add a new Variable with:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Variable = DD_API_KEY"),Object(o.b)("li",{parentName:"ul"},"Value = <your_API_KEY>"),Object(o.b)("li",{parentName:"ul"},"Scope = Service (so that it is accessible only to this service)"),Object(o.b)("li",{parentName:"ul"},"Secret variable \u2714\ufe0f")))),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/kubernetes-observability-and-monitoring-with-datadog/datadog-secret.png",alt:"Datadog - API Key"})),Object(o.b)("p",null,"If you need more information on how to manage your environment variables, have a look at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"this documentation"))),Object(o.b)("li",null,Object(o.b)("h4",{id:"deploy-your-chart"},"Deploy your chart"),Object(o.b)("p",null,"Open the ",Object(o.b)("inlineCode",{parentName:"p"},"Play")," button and trigger the deployment of your chart (see point 1 in the picture below)."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/kubernetes-observability-and-monitoring-with-datadog/deploy.png",alt:"Datadog - Deploy"})),Object(o.b)("p",null,"You can follow the deployment and access the deployment logs by pressing the ",Object(o.b)("inlineCode",{parentName:"p"},"Log")," button (see point 2 in the picutre above)."),Object(o.b)("p",null,"Once the deployment is completed, you should see the Datadog agent pods and their status directly within the Qovery console."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/kubernetes-observability-and-monitoring-with-datadog/datadog-pods.png",alt:"Datadog - Pods"})),Object(o.b)("p",null,"You can also look at the Pod logs by pressing the ",Object(o.b)("inlineCode",{parentName:"p"},"Log")," button.")),Object(o.b)("li",null,Object(o.b)("h4",{id:"verify-the-setup-on-datadog"},"Verify the setup on Datadog"),Object(o.b)("p",null,"Access again your Datadog interface and access the Infrastructure > Containers > Kubernetes sections. You should now see the data coming from your Qovery cluster"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/kubernetes-observability-and-monitoring-with-datadog/datadog-console.png",alt:"Datadog - Console"}))))),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"You now have Datadog agent running on your Qovery cluster. You can check their ",Object(o.b)("inlineCode",{parentName:"p"},"Getting Started")," guide to familiarize yourself with the product: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.datadoghq.com/fr/getting_started"}),"https://docs.datadoghq.com/fr/getting_started"),"."))}d.isMDXComponent=!0},444:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},445:function(e,t,n){"use strict";n(447);var a=n(0),r=n.n(a),o=n(444),i=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":a,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return n?r.a.createElement(m,c({ref:t},s,{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},447:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(448)}),n(74)("fill")},448:function(e,t,n){"use strict";var a=n(27),r=n(75),o=n(26);e.exports=function(e){for(var t=a(this),n=o(t.length),i=arguments.length,c=r(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,s=void 0===l?n:r(l,n);s>c;)t[c++]=e;return t}},449:function(e,t,n){var a=n(28).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},450:function(e,t,n){"use strict";n(449);var a=n(0),r=n.n(a),o=n(445);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},451:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),i=n(39),c=n(455),l=n(20),s=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,u=n||l,b=Object(c.a)(u),d=Object(r.useRef)(!1),p=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!p&&b&&window.docusaurus.prefetch(u),function(){p&&t&&t.disconnect()}}),[u,p,b]),u&&b?o.a.createElement(i.b,Object(a.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(u),d.current=!0)},innerRef:function(e){var n,a;p&&e&&b&&(n=e,a=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:u})):o.a.createElement("a",Object(a.a)({},e,{href:u}))}},452:function(e,t,n){"use strict";var a=n(456),r=n(51);function o(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,a){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=n):a[e]=n};case"bracket":return function(e,n,a){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],n):a[e]=[n]:a[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=r({arrayFormat:"none"},t)),a=Object.create(null);return"string"!=typeof e?a:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(r),o,a)})),Object.keys(a).sort().reduce((function(e,t){var n=a[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):a},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,a){return null===n?[o(t,e),"[",a,"]"].join(""):[o(t,e),"[",o(a,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(a){var r=e[a];if(void 0===r)return"";if(null===r)return o(a,t);if(Array.isArray(r)){var i=[];return r.slice().forEach((function(e){void 0!==e&&i.push(n(a,e,i.length))})),i.join("&")}return o(a,t)+"="+o(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},453:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=(n(444),n(452)),i=n.n(o);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(l),u=Object(a.useState)(null),b=u[0],d=u[1];return r.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!b&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return d("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==b&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},454:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(451),i=n(444),c=n.n(i);n(134);t.a=function(e){var t=e.children,n=e.className,a=e.badge,i=e.leftIcon,l=e.rightIcon,s=e.size,u=e.target,b=e.to,d=c()("jump-to","jump-to--"+s,n),p=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},i&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+i})),r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return u?r.a.createElement("a",{href:b,target:u,className:d},p):r.a.createElement(o.a,{to:b,className:d},p)}},455:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))},456:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
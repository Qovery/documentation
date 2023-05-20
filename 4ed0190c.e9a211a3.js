/*! For license information please see 4ed0190c.e9a211a3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{252:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return y}));var n=a(1),r=a(9),o=(a(0),a(454)),c=a(460),i=(a(463),a(458),a(453)),l={last_modified_on:"2022-07-09",$schema:"/.meta/.schemas/guides.json",title:"Deploy on your Scaleway account",description:"How to configure and deploy your apps on your Scaleway account with Qovery",author_github:"https://github.com/evoxmusic",tags:["type: guide","cloud_provider: scaleway"]},u={categories:[{name:"advanced",title:"Advanced",description:"Go beyond the basics, become a Qovery pro, and extract the full potential of Qovery.",permalink:"/guides/advanced"}],coverLabel:"Deploy on your Scaleway account",description:"How to configure and deploy your apps on your Scaleway account with Qovery",permalink:"/guides/advanced/guide-scaleway",readingTime:"5 min read",source:"@site/guides/advanced/guide-scaleway.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"cloud_provider: scaleway",permalink:"/guides/tags/cloud-provider-scaleway"}],title:"Deploy on your Scaleway account",truncated:!1,prevItem:{title:"Deploy on your GCP account",permalink:"/guides/advanced/guide-google-cloud-platform"},nextItem:{title:"Deploy Rails with PostgreSQL",permalink:"/guides/tutorial/deploy-rails-with-postgresql"}},s=[{value:"Before you start",id:"before-you-start",children:[{value:"What is Qovery",id:"what-is-qovery",children:[]},{value:"Why you should use Scaleway",id:"why-you-should-use-scaleway",children:[]},{value:"Why you should not use Scaleway",id:"why-you-should-not-use-scaleway",children:[]}]},{value:"Create a Scaleway account",id:"create-a-scaleway-account",children:[{value:"Get your Scaleway API keys",id:"get-your-scaleway-api-keys",children:[]}]},{value:"Configure Qovery",id:"configure-qovery",children:[{value:"Sign-up to Qovery",id:"sign-up-to-qovery",children:[]},{value:"Create your Organization",id:"create-your-organization",children:[]},{value:"Install Qovery on your Scaleway account",id:"install-qovery-on-your-scaleway-account",children:[]}]},{value:"Deploy your application",id:"deploy-your-application",children:[]}],p={rightToc:s};function y(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.scaleway.com?ref=qovery"}),"Scaleway")," (SCW) is a platform that offers flexible, reliable, and scalable Cloud computing solutions. The platform is developed with a combination of infrastructure as a service (IaaS), platform as a service (PaaS), and packaged software as a service (SaaS) offerings."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.qovery.com"}),"Qovery")," is the simplest way to deploy your apps on Scaleway.")),Object(o.b)("p",null,"In this tutorial, I will explain step by step how to deploy your app on Scaleway in 10 minutes. No Scaleway/infrastructure/Cloud knowledge required - no kidding!"),Object(o.b)("h2",{id:"before-you-start"},"Before you start"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"This tutorial is perfect for anyone interested into deploying their apps on Scaleway seamlessly."),Object(o.b)("li",{parentName:"ol"},"If you have any question or suggestion on this tutorial, please contact us via ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.qovery.com/contact"}),"this form")," or ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://discord.qovery.com"}),"Discord"),".")),Object(o.b)("h3",{id:"what-is-qovery"},"What is Qovery"),Object(o.b)("p",null,'Qovery is a platform that makes your app deployment on Scaleway very simple. The installation of Qovery on your Scaleway account takes approximately 10 minutes. Then you\'re ready to deploy your apps "\xe0 la" Heroku-like..'),Object(o.b)("h3",{id:"why-you-should-use-scaleway"},"Why you should use Scaleway"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You want to use a European Cloud provider \ud83c\uddea\ud83c\uddfa."),Object(o.b)("li",{parentName:"ul"},"You want to stay focus on what you are building."),Object(o.b)("li",{parentName:"ul"},"You need to speed up your Go-To-Market and Product Market Fit."),Object(o.b)("li",{parentName:"ul"},"You are looking for a cheapest alternative to AWS.")),Object(o.b)("h3",{id:"why-you-should-not-use-scaleway"},"Why you should not use Scaleway"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You need to host your applications outside of Europe."),Object(o.b)("li",{parentName:"ul"},"You need to use MongoDB in production. (They do not have managed MongoDB)."),Object(o.b)("li",{parentName:"ul"},"You need any specific AWS, GCP or Azure services.")),Object(o.b)("p",null,"Let's start!"),Object(o.b)("h1",{id:"install-qovery-on-scaleway"},"Install Qovery on Scaleway"),Object(o.b)("h2",{id:"create-a-scaleway-account"},"Create a Scaleway account"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"If you already have a Scaleway account, you can go to the next point.")),Object(o.b)("p",null,"Before creating a Scaleway account, I'd recommend contacting Scaleway to see if you are eligible to free credits. Which is convenient to have at the beginning of a project. If you know that you are not eligible, you can create your account by clicking on the top right button ",Object(o.b)("inlineCode",{parentName:"p"},"Create an Scaleway Account")," of their ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.scaleway.com?ref=qovery"}),"main page"),"."),Object(o.b)("img",{src:"/img/scaleway-create-an-account.jpg",alt:"Create an account on Scaleway"}),Object(o.b)("h3",{id:"get-your-scaleway-api-keys"},"Get your Scaleway API keys"),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Follow ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/cloud-service-provider/scaleway/"}),"this guide")," to create your Scaleway credentials")),Object(o.b)("p",null,"To install Qovery on your Scaleway account, the ",Object(o.b)("inlineCode",{parentName:"p"},"project id"),", ",Object(o.b)("inlineCode",{parentName:"p"},"secret access key")," and ",Object(o.b)("inlineCode",{parentName:"p"},"access key id")," are required. Here is a comprehensive ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/cloud-service-provider/scaleway/"}),"step-by-step guide")," on how to generate your ",Object(o.b)("inlineCode",{parentName:"p"},"secret access key")," and ",Object(o.b)("inlineCode",{parentName:"p"},"access key id"),". If you already have those keys, then you can go to the next point."),Object(o.b)("h2",{id:"configure-qovery"},"Configure Qovery"),Object(o.b)("h3",{id:"sign-up-to-qovery"},"Sign-up to Qovery"),Object(o.b)("p",null,"Using Qovery is as simple as connect with your ",Object(o.b)("em",{parentName:"p"},"Github"),", ",Object(o.b)("em",{parentName:"p"},"Gitlab")," or ",Object(o.b)("em",{parentName:"p"},"Bitbucket")," account on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"console.qovery.com"),"."),Object(o.b)("p",null,"-> ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Connect to Qovery")),Object(o.b)("h3",{id:"create-your-organization"},"Create your Organization"),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"You can skip this step if you already have an Organization.")),Object(o.b)("p",null,"An organization is a shared account where developers can collaborate across many projects at once. Owners and organization administrators can manage:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cloud accounts."),Object(o.b)("li",{parentName:"ul"},"Members access."),Object(o.b)("li",{parentName:"ul"},"Billing.")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/"}),"Read more")," about Organizations"),Object(o.b)("p",null,"To deploy on your Scaleway account, you have to choose between ",Object(o.b)("strong",{parentName:"p"},"Free"),", ",Object(o.b)("strong",{parentName:"p"},"Professional")," and ",Object(o.b)("strong",{parentName:"p"},"Business")," plan for your organization."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/configuration/organization/Qovery_Pricing_Plans.png",alt:"Qovery - Create an Organization and select the plan"})),Object(o.b)("h3",{id:"install-qovery-on-your-scaleway-account"},"Install Qovery on your Scaleway account"),Object(o.b)("p",null,'1/ Go to your organization settings by clicking on the "cog" icon next to your organization name.'),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/organization_settings_clusters_empty.jpg",alt:"Go your organization settings > clusters"})),Object(o.b)("p",null,"2/ Create a cluster, select ",Object(o.b)("em",{parentName:"p"},"Scaleway")," and the region where you want to deploy your apps."),Object(o.b)(i.a,{type:"success",mdxType:"Alert"},Object(o.b)("p",null,"Choose a region close to where your users will use your applications to have better performances.")),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/organization_settings_create_cluster.jpg",alt:"Create a cluster"})),Object(o.b)("p",null,"3/ Set your Scaleway credentials. (Check out ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/cloud-service-provider/scaleway/"}),"this guide")," if you have no Scaleway credentials)."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/organization_settings_add_credentials.jpg",alt:"Set your cloud credentials"})),Object(o.b)("p",null,"4/ Under the hood, Qovery uses a managed Kubernetes (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.scaleway.com/en/kubernetes-kapsule/"}),"Scaleway Kapsule"),") to run your applications. You need to specify the CPU and RAM you want per node, and the min/max number of nodes. Qovery will keep low the number of nodes and will only scale up your nodes if your applications really need to scale."),Object(o.b)(i.a,{type:"success",mdxType:"Alert"},Object(o.b)("p",null,"Qovery optimizes and keep your Scaleway costs low.")),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/organization_settings_cluster_resources.jpg",alt:"Set your cluster resources"})),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},"Qovery might use some temporary free resources on your Kubernetes cluster to perform spotted maintenance operations (e.g. : cluster version upgrades). This is why we recommend a cluster setup with:",Object(o.b)("ul",null,Object(o.b)("li",null,"at least 20% difference between the minimum and the maximum number of nodes;"),Object(o.b)("li",null,"at least 5 nodes as the maximum number of nodes of your cluster;"))),Object(o.b)("p",null,"5/ Click on ",Object(o.b)("strong",{parentName:"p"},"Save")," and ",Object(o.b)("strong",{parentName:"p"},"Deploy"),"."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/organization_settings_clusters_scaleway.jpg",alt:"Scaleway cluster is now available"})),Object(o.b)("p",null,"Congrats! Qovery will be installed within 10 minutes \ud83c\udf89. You will be notified when it is all good.\nIn the meantime, you can take a look at our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/getting-started/"}),"guide section"),"."),Object(o.b)("h2",{id:"deploy-your-application"},"Deploy your application"),Object(o.b)("p",null,"Once Qovery is installed on your Scaleway account, you have the possibility to deploy your application. Take a look to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/getting-started/"}),"our guide")," on how to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/getting-started/deploy-your-first-application/"}),"deploy your first application")," with Qovery."),Object(o.b)(c.a,{to:"/guides/getting-started/deploy-your-first-application",mdxType:"Jump"},"Deploy your first application"))}y.isMDXComponent=!0},452:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},453:function(e,t,a){"use strict";a(456);var n=a(0),r=a.n(n),o=a(452),c=a.n(o);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,o=e.icon,i=e.type,l=null;switch(i){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:c()(a,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:c()("feather","icon-"+(o||l))}),t)}},454:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),b=n,d=p["".concat(c,".").concat(b)]||p[b]||y[b]||o;return a?r.a.createElement(d,i({ref:t},u,{components:a})):r.a.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=a[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},455:function(e,t,a){"use strict";var n=a(1),r=a(0),o=a.n(r),c=a(39),i=a(461),l=a(20),u=a.n(l);t.a=function(e){var t,a=e.to,l=e.href,s=a||l,p=Object(i.a)(s),y=Object(r.useRef)(!1),b=u.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!b&&p&&window.docusaurus.prefetch(s),function(){b&&t&&t.disconnect()}}),[s,b,p]),s&&p?o.a.createElement(c.b,Object(n.a)({},e,{onMouseEnter:function(){y.current||(window.docusaurus.preload(s),y.current=!0)},innerRef:function(e){var a,n;b&&e&&p&&(a=e,n=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:s})):o.a.createElement("a",Object(n.a)({},e,{href:s}))}},456:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(459)}),a(74)("fill")},457:function(e,t,a){var n=a(26).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},458:function(e,t,a){"use strict";a(457);var n=a(0),r=a.n(n),o=a(453);t.a=function(e){var t=e.children,a=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},459:function(e,t,a){"use strict";var n=a(28),r=a(75),o=a(27);e.exports=function(e){for(var t=n(this),a=o(t.length),c=arguments.length,i=r(c>1?arguments[1]:void 0,a),l=c>2?arguments[2]:void 0,u=void 0===l?a:r(l,a);u>i;)t[i++]=e;return t}},460:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(455),c=a(452),i=a.n(c);a(133);t.a=function(e){var t=e.children,a=e.className,n=e.badge,c=e.leftIcon,l=e.rightIcon,u=e.size,s=e.target,p=e.to,y=i()("jump-to","jump-to--"+u,a),b=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},c&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+c})),r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return s?r.a.createElement("a",{href:p,target:s,className:y},b):r.a.createElement(o.a,{to:p,className:y},b)}},461:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},462:function(e,t,a){"use strict";var n=a(464),r=a(51);function o(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var a=function(e){var t;switch(e.arrayFormat){case"index":return function(e,a,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=a):n[e]=a};case"bracket":return function(e,a,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=[a]:n[e]=a};default:return function(e,t,a){void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t=r({arrayFormat:"none"},t)),n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),a(decodeURIComponent(r),o,n)})),Object.keys(n).sort().reduce((function(e,t){var a=n[t];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(a):e[t]=a,e}),Object.create(null))):n},t.stringify=function(e,t){var a=function(e){switch(e.arrayFormat){case"index":return function(t,a,n){return null===a?[o(t,e),"[",n,"]"].join(""):[o(t,e),"[",o(n,e),"]=",o(a,e)].join("")};case"bracket":return function(t,a){return null===a?o(t,e):[o(t,e),"[]=",o(a,e)].join("")};default:return function(t,a){return null===a?o(t,e):[o(t,e),"=",o(a,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var r=e[n];if(void 0===r)return"";if(null===r)return o(n,t);if(Array.isArray(r)){var c=[];return r.slice().forEach((function(e){void 0!==e&&c.push(a(n,e,c.length))})),c.join("&")}return o(n,t)+"="+o(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},463:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(452),a(462)),c=a.n(o);a(134);t.a=function(e){var t=e.children,a=e.headingDepth,o=e.hideFeedbackQuestion,i="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+i+" failed",body:"The tutorial on:\n\n"+i+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},u="https://github.com/qovery/documentation/issues/new?"+c.a.stringify(l),s=Object(n.useState)(null),p=s[0],y=s[1];return r.a.createElement("div",{className:"steps steps--h"+a},t,!o&&!p&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return y("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:u,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},464:function(e,t,a){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
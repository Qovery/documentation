/*! For license information please see 2f1afd92.1381e759.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{209:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(9),c=(a(0),a(446)),i=(a(451),a(445)),l=(a(450),{last_modified_on:"2023-01-12",title:"Cluster Advanced Settings",description:"Learn how to set advanced settings on your infrastructure with Qovery"}),o={id:"using-qovery/configuration/cluster-advanced-settings",title:"Cluster Advanced Settings",description:"Learn how to set advanced settings on your infrastructure with Qovery",source:"@site/docs/using-qovery/configuration/cluster-advanced-settings.md",permalink:"/docs/using-qovery/configuration/cluster-advanced-settings",sidebar:"docs",previous:{title:"Clusters",permalink:"/docs/using-qovery/configuration/clusters"},next:{title:"Application",permalink:"/docs/using-qovery/configuration/application"}},s=[{value:"Logs",id:"logs",children:[]},{value:"Image registry",id:"image-registry",children:[]},{value:"Network",id:"network",children:[]}],b={rightToc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"To further fine-tune your Qovery infrastructure, you can set advanced settings through ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://api-doc.qovery.com/#tag/Clusters/operation/editClusterAdvancedSettings"}),"the Qovery API endpoint"),"."),Object(c.b)(i.a,{type:"info",mdxType:"Alert"},Object(c.b)("p",null,"Cluster advanced settings are not available in the Qovery console yet.")),Object(c.b)("p",null,"All clusters have access to advanced settings, you can find where they are available in the documentation below with those badges mentioning for which Cloud provider they are available:"),Object(c.b)("h4",{id:""},Object(c.b)("img",Object(n.a)({parentName:"h4"},{src:"/img/advanced_settings/aws.svg",alt:null}))," ",Object(c.b)("img",Object(n.a)({parentName:"h4"},{src:"/img/advanced_settings/scaleway.svg",alt:null}))),Object(c.b)("p",null,"Below is the list of advanced settings currently available for clusters."),Object(c.b)("h2",{id:"logs"},"Logs"),Object(c.b)("h4",{id:"lokilog_retention_in_week"},"loki.log_retention_in_week ",Object(c.b)("img",Object(n.a)({parentName:"h4"},{src:"/img/advanced_settings/aws.svg",alt:null}))," ",Object(c.b)("img",Object(n.a)({parentName:"h4"},{src:"/img/advanced_settings/scaleway.svg",alt:null}))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to specify an amount in weeks for how long logs of your applications are kept."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"12"))))),Object(c.b)("h4",{id:"awsvpcenable_s3_flow_logs"},"aws.vpc.enable_s3_flow_logs ",Object(c.b)("img",Object(n.a)({parentName:"h4"},{src:"/img/advanced_settings/aws.svg",alt:null}))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable flow logs on the cluster VPC and store them in an s3 bucket."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"false"))))),Object(c.b)("h2",{id:"image-registry"},"Image registry"),Object(c.b)("h4",{id:"registryimage_retention_time"},"registry.image_retention_time ",Object(c.b)("img",Object(n.a)({parentName:"h4"},{src:"/img/advanced_settings/aws.svg",alt:null}))," ",Object(c.b)("img",Object(n.a)({parentName:"h4"},{src:"/img/advanced_settings/scaleway.svg",alt:null}))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to specify an amount in seconds after which images in the default registry are deleted."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"31536000"))))),Object(c.b)("h4",{id:"cloud_provider_container_registry_tags"},"cloud_provider_container_registry_tags ",Object(c.b)("img",Object(n.a)({parentName:"h4"},{src:"/img/advanced_settings/aws.svg",alt:null}))," ",Object(c.b)("img",Object(n.a)({parentName:"h4"},{src:"/img/advanced_settings/scaleway.svg",alt:null}))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Map<String, String>"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add additional tags on the cluster dedicated registry"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(c.b)("h2",{id:"network"},"Network"),Object(c.b)("h4",{id:"load_balancersize"},"load_balancer.size ",Object(c.b)("img",Object(n.a)({parentName:"h4"},{src:"/img/advanced_settings/scaleway.svg",alt:null}))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allows you to specify the load balancer size in front of your cluster."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"lb-s"))))))}u.isMDXComponent=!0},444:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},445:function(e,t,a){"use strict";a(449);var n=a(0),r=a.n(n),c=a(444),i=a.n(c);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,c=e.icon,l=e.type,o=null;switch(l){case"danger":o="alert-triangle";break;case"success":o="check-circle";break;case"warning":o="alert-triangle";break;default:o="info"}return r.a.createElement("div",{className:i()(a,"alert","alert--"+l,{"alert--fill":n,"alert--icon":!1!==c}),role:"alert"},!1!==c&&r.a.createElement("i",{className:i()("feather","icon-"+(c||o))}),t)}},446:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=b(a),p=n,m=u["".concat(i,".").concat(p)]||u[p]||d[p]||c;return a?r.a.createElement(m,l({ref:t},s,{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},447:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),i=a(39),l=a(452),o=a(20),s=a.n(o);t.a=function(e){var t,a=e.to,o=e.href,b=a||o,u=Object(l.a)(b),d=Object(r.useRef)(!1),p=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!p&&u&&window.docusaurus.prefetch(b),function(){p&&t&&t.disconnect()}}),[b,p,u]),b&&u?c.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(b),d.current=!0)},innerRef:function(e){var a,n;p&&e&&u&&(a=e,n=function(){window.docusaurus.prefetch(b)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:b})):c.a.createElement("a",Object(n.a)({},e,{href:b}))}},448:function(e,t,a){var n=a(26).f,r=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},449:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(453)}),a(74)("fill")},450:function(e,t,a){"use strict";a(448);var n=a(0),r=a.n(n),c=a(445);t.a=function(e){var t=e.children,a=e.name;return r.a.createElement(c.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},451:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(447),i=a(444),l=a.n(i);a(133);t.a=function(e){var t=e.children,a=e.className,n=e.badge,i=e.leftIcon,o=e.rightIcon,s=e.size,b=e.target,u=e.to,d=l()("jump-to","jump-to--"+s,a),p=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},i&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+i})),r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(o||"chevron-right")+" arrow"}))));return b?r.a.createElement("a",{href:u,target:b,className:d},p):r.a.createElement(c.a,{to:u,className:d},p)}},452:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},453:function(e,t,a){"use strict";var n=a(28),r=a(75),c=a(27);e.exports=function(e){for(var t=n(this),a=c(t.length),i=arguments.length,l=r(i>1?arguments[1]:void 0,a),o=i>2?arguments[2]:void 0,s=void 0===o?a:r(o,a);s>l;)t[l++]=e;return t}}}]);
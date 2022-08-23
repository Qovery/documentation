/*! For license information please see 2f1afd92.cc8273e3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),i=(n(0),n(431)),c=(n(436),n(430)),o=(n(435),{last_modified_on:"2022-08-23",title:"Cluster Advanced Settings",description:"Learn how to set advanced settings on your infrastructure with Qovery"}),l={id:"using-qovery/configuration/cluster-advanced-settings",title:"Cluster Advanced Settings",description:"Learn how to set advanced settings on your infrastructure with Qovery",source:"@site/docs/using-qovery/configuration/cluster-advanced-settings.md",permalink:"/docs/using-qovery/configuration/cluster-advanced-settings",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/cluster-advanced-settings.md",sidebar:"docs",previous:{title:"Clusters",permalink:"/docs/using-qovery/configuration/clusters"},next:{title:"Application",permalink:"/docs/using-qovery/configuration/application"}},s=[{value:"Logs",id:"logs",children:[]},{value:"Image registry",id:"image-registry",children:[]},{value:"Cloud Provider",id:"cloud-provider",children:[]}],u={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To further fine-tune your Qovery infrastructure, you can set advanced settings through ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://api-doc.qovery.com/#tag/Clusters/operation/editClusterAdvancedSettings"}),"the Qovery API endpoint"),"."),Object(i.b)(c.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Cluster advanced settings are not available in the Qovery console yet.")),Object(i.b)("p",null,"Below is the list of advanced settings currently available for clusters."),Object(i.b)("h3",{id:"logs"},"Logs"),Object(i.b)("h4",{id:"lokilog_retention_in_week"},"loki.log_retention_in_week"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"integer"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Allows you to specify an amount in weeks for how long logs of your applications are kept."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"12"))))),Object(i.b)("h3",{id:"image-registry"},"Image registry"),Object(i.b)("h4",{id:"registryimage_retention_time"},"registry.image_retention_time"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"integer"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Allows you to specify an amount in seconds after which images in default registry are deleted."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"31536000"))))),Object(i.b)("h3",{id:"cloud-provider"},"Cloud Provider"),Object(i.b)("h4",{id:"load_balancersize"},"load_balancer.size"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default Value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(Scaleway Only) Allows you to specify the load balancer size in front of your cluster."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"lb-s"))))))}b.isMDXComponent=!0},429:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===i)for(var o in r)n.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},430:function(e,t,n){"use strict";n(434);var r=n(0),a=n.n(r),i=n(429),c=n.n(i);n(131);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,i=e.icon,o=e.type,l=null;switch(o){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:c()(n,"alert","alert--"+o,{"alert--fill":r,"alert--icon":!1!==i}),role:"alert"},!1!==i&&a.a.createElement("i",{className:c()("feather","icon-"+(i||l))}),t)}},431:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,f=b["".concat(c,".").concat(p)]||b[p]||d[p]||i;return n?a.a.createElement(f,o({ref:t},s,{components:n})):a.a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},432:function(e,t,n){"use strict";var r=n(1),a=n(0),i=n.n(a),c=n(39),o=n(437),l=n(19),s=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,u=n||l,b=Object(o.a)(u),d=Object(a.useRef)(!1),p=s.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!p&&b&&window.docusaurus.prefetch(u),function(){p&&t&&t.disconnect()}}),[u,p,b]),u&&b?i.a.createElement(c.b,Object(r.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(u),d.current=!0)},innerRef:function(e){var n,r;p&&e&&b&&(n=e,r=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:u})):i.a.createElement("a",Object(r.a)({},e,{href:u}))}},433:function(e,t,n){var r=n(25).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},434:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(438)}),n(74)("fill")},435:function(e,t,n){"use strict";n(433);var r=n(0),a=n.n(r),i=n(430);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(i.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},436:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(432),c=n(429),o=n.n(c);n(132);t.a=function(e){var t=e.children,n=e.className,r=e.badge,c=e.leftIcon,l=e.rightIcon,s=e.size,u=e.target,b=e.to,d=o()("jump-to","jump-to--"+s,n),p=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},c&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+c})),a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return u?a.a.createElement("a",{href:b,target:u,className:d},p):a.a.createElement(i.a,{to:b,className:d},p)}},437:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))},438:function(e,t,n){"use strict";var r=n(27),a=n(75),i=n(26);e.exports=function(e){for(var t=r(this),n=i(t.length),c=arguments.length,o=a(c>1?arguments[1]:void 0,n),l=c>2?arguments[2]:void 0,s=void 0===l?n:a(l,n);s>o;)t[o++]=e;return t}}}]);
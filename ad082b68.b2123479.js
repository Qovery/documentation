/*! For license information please see ad082b68.b2123479.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{331:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(9),i=(r(0),r(433)),a=r(432),c={last_modified_on:"2022-02-23",title:"New Relic",description:"Learn how to configure and plug your New Relic account"},l={id:"using-qovery/addon/monitoring/new-relic",title:"New Relic",description:"Learn how to configure and plug your New Relic account",source:"@site/docs/using-qovery/addon/monitoring/new-relic.md",permalink:"/docs/using-qovery/addon/monitoring/new-relic",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/addon/monitoring/new-relic.md",sidebar:"docs",previous:{title:"Datadog",permalink:"/docs/using-qovery/addon/monitoring/datadog"},next:{title:"Quickstarts",permalink:"/docs/using-qovery/quickstart"}},u=[{value:"Install NewRelic",id:"install-newrelic",children:[]}],s={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"NewRelic is a recommended product to monitor and track down your application performance issue (APM). Qovery supports and recommends using NewRelic (or another monitoring/observability platform)."),Object(i.b)("h2",{id:"install-newrelic"},"Install NewRelic"),Object(i.b)("p",null,"To install NewRelic on Qovery, you need to:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Connect to your Qovery Kubernetes cluster."),Object(i.b)("li",{parentName:"ol"},"Use ",Object(i.b)("inlineCode",{parentName:"li"},"helm")," to ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/newrelic/helm-charts"}),"install NewRelic"),".")),Object(i.b)(a.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Helm is a Kubernetes package manager. NewRelic provides an official helm chart that you can use to install NewRelic on your Kubernetes infrastructure.")))}p.isMDXComponent=!0},431:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===i)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},432:function(e,t,r){"use strict";r(435);var n=r(0),o=r.n(n),i=r(431),a=r.n(i);r(131);t.a=function(e){var t=e.children,r=e.classNames,n=e.fill,i=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return o.a.createElement("div",{className:a()(r,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==i}),role:"alert"},!1!==i&&o.a.createElement("i",{className:a()("feather","icon-"+(i||l))}),t)}},433:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return r?o.a.createElement(m,c({ref:t},u,{components:r})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},435:function(e,t,r){var n=r(12);n(n.P,"Array",{fill:r(440)}),r(74)("fill")},440:function(e,t,r){"use strict";var n=r(27),o=r(75),i=r(26);e.exports=function(e){for(var t=n(this),r=i(t.length),a=arguments.length,c=o(a>1?arguments[1]:void 0,r),l=a>2?arguments[2]:void 0,u=void 0===l?r:o(l,r);u>c;)t[c++]=e;return t}}}]);
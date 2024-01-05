/*! For license information please see e1e0a511.02f8aceb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{408:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(1),i=r(9),o=(r(0),r(440)),a=r(439),c={last_modified_on:"2024-01-03",title:"New Relic",description:"Learn how to configure and plug your New Relic account"},l={id:"using-qovery/integration/monitoring/new-relic",title:"New Relic",description:"Learn how to configure and plug your New Relic account",source:"@site/docs/using-qovery/integration/monitoring/new-relic.md",permalink:"/docs/using-qovery/integration/monitoring/new-relic",sidebar:"docs",previous:{title:"Datadog",permalink:"/docs/using-qovery/integration/monitoring/datadog"},next:{title:"Secret Manager",permalink:"/docs/using-qovery/integration/secret-manager"}},u=[{value:"Install NewRelic",id:"install-newrelic",children:[{value:"By deploying the helm chart with Qovery",id:"by-deploying-the-helm-chart-with-qovery",children:[]},{value:"By using kubectl",id:"by-using-kubectl",children:[]}]}],s={rightToc:u};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"NewRelic is a recommended product to monitor and track down your application performance issue (APM). Qovery supports and recommends using NewRelic (or another monitoring/observability platform)."),Object(o.b)("h2",{id:"install-newrelic"},"Install NewRelic"),Object(o.b)("p",null,"To install NewRelic on Qovery, you have 2 choices:"),Object(o.b)("h3",{id:"by-deploying-the-helm-chart-with-qovery"},"By deploying the helm chart with Qovery"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Follow ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/helm/"}),"this guide")," to deploy your NewRelic Helm Chart with Qovery.")),Object(o.b)("h3",{id:"by-using-kubectl"},"By using kubectl"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/guides/tutorial/how-to-connect-to-your-eks-cluster-with-kubectl/"}),"Connect to your Qovery Kubernetes cluster"),"."),Object(o.b)("li",{parentName:"ol"},"Use ",Object(o.b)("inlineCode",{parentName:"li"},"helm")," to ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/newrelic/helm-charts"}),"install NewRelic"),".")),Object(o.b)(a.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Helm is a Kubernetes package manager. NewRelic provides an official helm chart that you can use to install NewRelic on your Kubernetes infrastructure.")))}p.isMDXComponent=!0},438:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var a=i.apply(null,n);a&&e.push(a)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},439:function(e,t,r){"use strict";r(441);var n=r(0),i=r.n(n),o=r(438),a=r.n(o);r(132);t.a=function(e){var t=e.children,r=e.classNames,n=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return i.a.createElement("div",{className:a()(r,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&i.a.createElement("i",{className:a()("feather","icon-"+(o||l))}),t)}},440:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,y=p["".concat(a,".").concat(f)]||p[f]||b[f]||o;return r?i.a.createElement(y,c({ref:t},u,{components:r})):i.a.createElement(y,c({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},441:function(e,t,r){var n=r(12);n(n.P,"Array",{fill:r(442)}),r(74)("fill")},442:function(e,t,r){"use strict";var n=r(27),i=r(75),o=r(26);e.exports=function(e){for(var t=n(this),r=o(t.length),a=arguments.length,c=i(a>1?arguments[1]:void 0,r),l=a>2?arguments[2]:void 0,u=void 0===l?r:i(l,r);u>c;)t[c++]=e;return t}}}]);
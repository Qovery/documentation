/*! For license information please see 68b95634.e25411de.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{261:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(9),a=(r(0),r(413)),i=(r(428),r(422),r(417),r(412),r(541),{last_modified_on:"2023-08-30",title:"What is Qovery?",description:"High-level description of the Qovery goals and mission."}),s={id:"getting-started/what-is-qovery",title:"What is Qovery?",description:"High-level description of the Qovery goals and mission.",source:"@site/docs/getting-started/what-is-qovery.md",permalink:"/docs/getting-started/what-is-qovery",sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/getting-started"},next:{title:"How Qovery Works",permalink:"/docs/getting-started/how-qovery-works"}},c=[{value:"Qovery For DevOps",id:"qovery-for-devops",children:[]},{value:"Qovery For Developers",id:"qovery-for-developers",children:[]}],u={rightToc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Qovery is a modern infrastructure automation platform")," that simplifies the process of managing cloud infrastructure for DevOps, Platform and Engineering teams. It provides a set of tools and features that automate the provisioning, configuration, and management of infrastructure resources."),Object(a.b)("h2",{id:"qovery-for-devops"},"Qovery For DevOps"),Object(a.b)("p",null,"Qovery is helpful for DevOps teams as it allows them to automate the provisioning, configuration, and management of infrastructure resources. This can help to streamline the process of creating and destroying environments on demand and reduce the time and effort required to set up and manage environments. Additionally, Qovery provides features such as resource consumption optimization, which can help to reduce cloud costs and optimize infrastructure costs. This can help to free up resources and focus on delivering value to the business. Qovery also helps DevOps teams to maintain a high level of control, security and governance by providing a way to define, manage and monitor their infrastructure as code, thus reducing human error and ensuring compliance with best practices and security standards."),Object(a.b)("h2",{id:"qovery-for-developers"},"Qovery For Developers"),Object(a.b)("p",null,"For developers, Qovery is helpful as it allows them to easily spin up services with minimal effort. This allows developers to focus on writing code and delivering features, rather than worrying about infrastructure management. Additionally, Qovery provides a way to manage multiple environments and configurations, which can help to ensure that the development, staging, and production environments are consistent and up-to-date. This can help to reduce the risk of errors and inconsistencies and ensure that the application is always ready for deployment. Developers can also be assured that their environments are secure and compliant with best practices and security standards, thanks to the control and governance features provided by Qovery."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/how-qovery-works.svg",alt:"How Qovery Works"})))}l.isMDXComponent=!0},411:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},412:function(e,t,r){"use strict";r(414);var n=r(0),o=r.n(n),a=r(411),i=r.n(a);r(132);t.a=function(e){var t=e.children,r=e.classNames,n=e.fill,a=e.icon,s=e.type,c=null;switch(s){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return o.a.createElement("div",{className:i()(r,"alert","alert--"+s,{"alert--fill":n,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:i()("feather","icon-"+(a||c))}),t)}},413:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},f=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return r?o.a.createElement(m,s({ref:t},u,{components:r})):o.a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},414:function(e,t,r){var n=r(12);n(n.P,"Array",{fill:r(415)}),r(74)("fill")},415:function(e,t,r){"use strict";var n=r(27),o=r(75),a=r(26);e.exports=function(e){for(var t=n(this),r=a(t.length),i=arguments.length,s=o(i>1?arguments[1]:void 0,r),c=i>2?arguments[2]:void 0,u=void 0===c?r:o(c,r);u>s;)t[s++]=e;return t}},416:function(e,t,r){var n=r(28).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||r(10)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},417:function(e,t,r){"use strict";r(416);var n=r(0),o=r.n(n),a=r(412);t.a=function(e){var t=e.children,r=e.name;return o.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",r||"page"," assumes the following:"),t)}},419:function(e,t,r){"use strict";var n=r(423),o=r(51);function a(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t=o({arrayFormat:"none"},t)),n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),r(decodeURIComponent(o),a,n)})),Object.keys(n).sort().reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(r):e[t]=r,e}),Object.create(null))):n},t.stringify=function(e,t){var r=function(e){switch(e.arrayFormat){case"index":return function(t,r,n){return null===r?[a(t,e),"[",n,"]"].join(""):[a(t,e),"[",a(n,e),"]=",a(r,e)].join("")};case"bracket":return function(t,r){return null===r?a(t,e):[a(t,e),"[]=",a(r,e)].join("")};default:return function(t,r){return null===r?a(t,e):[a(t,e),"=",a(r,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var o=e[n];if(void 0===o)return"";if(null===o)return a(n,t);if(Array.isArray(o)){var i=[];return o.slice().forEach((function(e){void 0!==e&&i.push(r(n,e,i.length))})),i.join("&")}return a(n,t)+"="+a(o,t)})).filter((function(e){return e.length>0})).join("&"):""}},422:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=(r(411),r(419)),i=r.n(a);r(134);t.a=function(e){var t=e.children,r=e.headingDepth,a=e.hideFeedbackQuestion,s="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+s+" failed",body:"The tutorial on:\n\n"+s+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},u="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(c),l=Object(n.useState)(null),f=l[0],p=l[1];return o.a.createElement("div",{className:"steps steps--h"+r},t,!a&&!f&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:u,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==f&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},423:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},541:function(e,t,r){"use strict";r(0)}}]);
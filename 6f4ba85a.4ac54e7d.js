/*! For license information please see 6f4ba85a.4ac54e7d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{281:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(9),a=(n(0),n(445)),c=(n(452),n(444),{last_modified_on:"2024-01-10",title:"FAQ",description:"Discover the most frequently asked questions about Qovery BYOK"}),i={id:"getting-started/install-qovery/kubernetes/faq",title:"FAQ",description:"Discover the most frequently asked questions about Qovery BYOK",source:"@site/docs/getting-started/install-qovery/kubernetes/faq.md",permalink:"/docs/getting-started/install-qovery/kubernetes/faq",sidebar:"docs",previous:{title:"Create Demo Cluster",permalink:"/docs/getting-started/install-qovery/kubernetes/create-k8s-cluster"},next:{title:"Deploy my application",permalink:"/docs/getting-started/deploy-my-app"}},u=[{value:"FAQ",id:"faq",children:[{value:"I have a non-covered use case. What should I do?",id:"i-have-a-non-covered-use-case-what-should-i-do",children:[]},{value:"Can I host the Qovery control plane on my own?",id:"can-i-host-the-qovery-control-plane-on-my-own",children:[]}]}],s={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"faq"},"FAQ"),Object(a.b)("h3",{id:"i-have-a-non-covered-use-case-what-should-i-do"},"I have a non-covered use case. What should I do?"),Object(a.b)("p",null,"Please ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.qovery.com/contact"}),"contact us"),". We will be happy to help you."),Object(a.b)("h3",{id:"can-i-host-the-qovery-control-plane-on-my-own"},"Can I host the Qovery control plane on my own?"),Object(a.b)("p",null,"At the moment, you can't. But please ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.qovery.com/contact"}),"contact us")," to discuss it. We will be happy to help you."))}l.isMDXComponent=!0},443:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},444:function(e,t,n){"use strict";n(446);var r=n(0),o=n.n(r),a=n(443),c=n.n(a);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,a=e.icon,i=e.type,u=null;switch(i){case"danger":u="alert-triangle";break;case"success":u="check-circle";break;case"warning":u="alert-triangle";break;default:u="info"}return o.a.createElement("div",{className:c()(n,"alert","alert--"+i,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:c()("feather","icon-"+(a||u))}),t)}},445:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,y=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return n?o.a.createElement(y,i({ref:t},s,{components:n})):o.a.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},446:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(447)}),n(74)("fill")},447:function(e,t,n){"use strict";var r=n(27),o=n(75),a=n(26);e.exports=function(e){for(var t=r(this),n=a(t.length),c=arguments.length,i=o(c>1?arguments[1]:void 0,n),u=c>2?arguments[2]:void 0,s=void 0===u?n:o(u,n);s>i;)t[i++]=e;return t}},451:function(e,t,n){"use strict";var r=n(455),o=n(51);function a(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=o({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(o),a,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[a(t,e),"[",r,"]"].join(""):[a(t,e),"[",a(r,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var o=e[r];if(void 0===o)return"";if(null===o)return a(r,t);if(Array.isArray(o)){var c=[];return o.slice().forEach((function(e){void 0!==e&&c.push(n(r,e,c.length))})),c.join("&")}return a(r,t)+"="+a(o,t)})).filter((function(e){return e.length>0})).join("&"):""}},452:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(443),n(451)),c=n.n(a);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,a=e.hideFeedbackQuestion,i="undefined"!=typeof window?window.location:null,u={title:"Tutorial on "+i+" failed",body:"The tutorial on:\n\n"+i+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+c.a.stringify(u),l=Object(r.useState)(null),p=l[0],f=l[1];return o.a.createElement("div",{className:"steps steps--h"+n},t,!a&&!p&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return f("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},455:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
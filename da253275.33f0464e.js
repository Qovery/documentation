/*! For license information please see da253275.33f0464e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{408:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(9),a=(n(0),n(455)),i=(n(462),n(459),n(454),{last_modified_on:"2024-09-09",$schema:"/.meta/.schemas/guides.json",title:"Costs Control",description:"Learn how to keep control of your costs with Qovery",author_github:"https://github.com/evoxmusic",tags:["type: guide","technology: qovery"]}),c={categories:[{name:"advanced",title:"Advanced",description:"Go beyond the basics, become a Qovery pro, and extract the full potential of Qovery.",permalink:"/guides/advanced"}],coverLabel:"Costs Control",description:"Learn how to keep control of your costs with Qovery",permalink:"/guides/advanced/costs-control",readingTime:"2 min read",source:"@site/guides/advanced/costs-control.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Costs Control",truncated:!1,prevItem:{title:"Continuous Integration",permalink:"/guides/advanced/continuous-integration"},nextItem:{title:"Create a blazingly fast REST API in Rust (Part 1/2)",permalink:"/guides/tutorial/create-a-blazingly-fast-api-in-rust-part-1"}},u=[{value:"Resources",id:"resources",children:[{value:"Deployment rules",id:"deployment-rules",children:[]},{value:"Karpenter",id:"karpenter",children:[]},{value:"Kubecost",id:"kubecost",children:[]}]},{value:"Q&amp;A",id:"qa",children:[]}],s={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("p",null,"Here are some resources you can use to reduce your cloud cost with Qovery."),Object(a.b)("h3",{id:"deployment-rules"},"Deployment rules"),Object(a.b)("p",null,"Deployment rules allows you to start and stop environments at a given time. Stopping dev environments outside of your working hours is a great way to reduce your cloud bills.\nYou can find more information on Deployment rules in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.qovery.com/docs/using-qovery/configuration/deployment-rule/"}),"our documentation")),Object(a.b)("h3",{id:"karpenter"},"Karpenter"),Object(a.b)("p",null,"To optimize efficiency and reduce costs for your nodes on AWS EKS clusters, you can enable the Karpenter autoscaler. For a deeper dive into Karpenter and its integration with Qovery, check out ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.qovery.com/blog/installing-karpenter-lessons-learned-from-our-experience/"}),"our blog"),". Detailed instructions on enabling Karpenter are available in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.qovery.com/docs/using-qovery/configuration/clusters/#managing-your-clusters-with-qovery"}),"our documentation"),"."),Object(a.b)("h3",{id:"kubecost"},"Kubecost"),Object(a.b)("p",null,"Kubecost provides real-time cost visibility and insights on your Kubernetes cluster. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.qovery.com/blog/kubecost-and-qovery-team-up-to-offer-cost-monitoring-for-devops-teams/"}),"Qovery partnered with Kubecost")," to help customers monitor their spendings in the cloud. We also have a guide on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.qovery.com/guides/tutorial/monitor-and-reduce-kubernetes-spend-with-kubecost/"}),"how to deploy Kubecost on your cluster"),"."),Object(a.b)("h2",{id:"qa"},"Q&A"),Object(a.b)("p",null,"Do you need more examples? Do you have any questions? Feel free to ask on our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"Community forum"),"."))}l.isMDXComponent=!0},453:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},454:function(e,t,n){"use strict";n(456);var r=n(0),o=n.n(r),a=n(453),i=n.n(a);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,a=e.icon,c=e.type,u=null;switch(c){case"danger":u="alert-triangle";break;case"success":u="check-circle";break;case"warning":u="alert-triangle";break;default:u="info"}return o.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:i()("feather","icon-"+(a||u))}),t)}},455:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(m,c({ref:t},s,{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},456:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(457)}),n(74)("fill")},457:function(e,t,n){"use strict";var r=n(27),o=n(75),a=n(26);e.exports=function(e){for(var t=r(this),n=a(t.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,n),u=i>2?arguments[2]:void 0,s=void 0===u?n:o(u,n);s>c;)t[c++]=e;return t}},458:function(e,t,n){var r=n(28).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||n(10)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},459:function(e,t,n){"use strict";n(458);var r=n(0),o=n.n(r),a=n(454);t.a=function(e){var t=e.children,n=e.name;return o.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},461:function(e,t,n){"use strict";var r=n(465),o=n(51);function a(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=o({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(o),a,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[a(t,e),"[",r,"]"].join(""):[a(t,e),"[",a(r,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var o=e[r];if(void 0===o)return"";if(null===o)return a(r,t);if(Array.isArray(o)){var i=[];return o.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return a(r,t)+"="+a(o,t)})).filter((function(e){return e.length>0})).join("&"):""}},462:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(453),n(461)),i=n.n(a);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,a=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,u={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(u),l=Object(r.useState)(null),p=l[0],d=l[1];return o.a.createElement("div",{className:"steps steps--h"+n},t,!a&&!p&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return d("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},465:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
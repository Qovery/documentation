/*! For license information please see dac3123c.89c16053.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{397:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(441)),i=n(450),c=(n(440),n(445),{last_modified_on:"2024-01-10",title:"Initialize your cloud account",description:"Initialize your cloud account allowing GKE clusters deplyments"}),l={id:"getting-started/install-qovery/gcp/cluster-managed-by-qovery/initialize-your-cloud-account-to-deploy-GKE",title:"Initialize your cloud account",description:"Initialize your cloud account allowing GKE clusters deplyments",source:"@site/docs/getting-started/install-qovery/gcp/cluster-managed-by-qovery/initialize-your-cloud-account-to-deploy-GKE.md",permalink:"/docs/getting-started/install-qovery/gcp/cluster-managed-by-qovery/initialize-your-cloud-account-to-deploy-GKE",sidebar:"docs",previous:{title:"Quickstart",permalink:"/docs/getting-started/install-qovery/gcp/cluster-managed-by-qovery/quickstart"},next:{title:"Create Credentials",permalink:"/docs/getting-started/install-qovery/gcp/cluster-managed-by-qovery/create-credentials"}},u=[{value:"Enable GCP services",id:"enable-gcp-services",children:[]}],s={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This guide will help you to initialize your GCP account allowing Qovery to deploy GKE clusters."),Object(a.b)("h2",{id:"enable-gcp-services"},"Enable GCP services"),Object(a.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.cloud.google.com"}),"Connect to your GCP console"))),Object(a.b)("li",null,Object(a.b)("p",null,"Activate Kubernetes Engine API (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.cloud.google.com/apis/api/container.googleapis.com/overview"}),"Console API link"),")"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/gcp-account-initialization/kubernetes-api-activation.png"}))),Object(a.b)("li",null,Object(a.b)("p",null,"Activate Compute Engine API (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.cloud.google.com/apis/api/compute.googleapis.com/overview"}),"Console API link"),")"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/gcp-account-initialization/compute-engine-api-activation.png"}))),Object(a.b)("li",null,Object(a.b)("p",null,"Activate Artifact Registry API (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.cloud.google.com/apis/api/artifactregistry.googleapis.com/overview"}),"Console API link"),")"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/gcp-account-initialization/artifact-registry-api-activation.png"}))),Object(a.b)("li",null,Object(a.b)("p",null,"Cloud Storage API (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.cloud.google.com/apis/api/storage.googleapis.com/overview"}),"Console API link"),")"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/gcp-account-initialization/cloud-storage-api-activation.png"}))),Object(a.b)("li",null,Object(a.b)("p",null,"Cloud Resource Manager API (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.cloud.google.com/apis/api/cloudresourcemanager.googleapis.com/overview"}),"Console API link"),")"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/gcp-account-initialization/cloud-resource-manager-api-activation.png"}))),Object(a.b)("li",null,Object(a.b)("p",null,"That's it!")))))}p.isMDXComponent=!0},439:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},440:function(e,t,n){"use strict";n(442);var r=n(0),o=n.n(r),a=n(439),i=n.n(a);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,a=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return o.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:i()("feather","icon-"+(a||l))}),t)}},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,g=p["".concat(i,".").concat(f)]||p[f]||b[f]||a;return n?o.a.createElement(g,c({ref:t},u,{components:n})):o.a.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},442:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(443)}),n(74)("fill")},443:function(e,t,n){"use strict";var r=n(27),o=n(75),a=n(26);e.exports=function(e){for(var t=r(this),n=a(t.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,u=void 0===l?n:o(l,n);u>c;)t[c++]=e;return t}},444:function(e,t,n){var r=n(28).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||n(10)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},445:function(e,t,n){"use strict";n(444);var r=n(0),o=n.n(r),a=n(440);t.a=function(e){var t=e.children,n=e.name;return o.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},447:function(e,t,n){"use strict";var r=n(451),o=n(51);function a(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=o({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(o),a,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[a(t,e),"[",r,"]"].join(""):[a(t,e),"[",a(r,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var o=e[r];if(void 0===o)return"";if(null===o)return a(r,t);if(Array.isArray(o)){var i=[];return o.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return a(r,t)+"="+a(o,t)})).filter((function(e){return e.length>0})).join("&"):""}},450:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(439),n(447)),i=n.n(a);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,a=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},u="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(l),s=Object(r.useState)(null),p=s[0],b=s[1];return o.a.createElement("div",{className:"steps steps--h"+n},t,!a&&!p&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:u,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},451:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
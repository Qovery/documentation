/*! For license information please see be464708.71c26bf1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{365:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),o=n(9),a=(n(0),n(440)),c=n(449),i=n(439),l=(n(444),{last_modified_on:"2023-12-30",title:"Create Credentials",description:"Generate your GCP credentials to connect your GCP account to Qovery"}),u={id:"getting-started/install-qovery/gcp/cluster-managed-by-qovery/create-credentials",title:"Create Credentials",description:"Generate your GCP credentials to connect your GCP account to Qovery",source:"@site/docs/getting-started/install-qovery/gcp/cluster-managed-by-qovery/create-credentials.md",permalink:"/docs/getting-started/install-qovery/gcp/cluster-managed-by-qovery/create-credentials",sidebar:"docs",previous:{title:"Quickstart",permalink:"/docs/getting-started/install-qovery/gcp/cluster-managed-by-qovery/quickstart"},next:{title:"Self-Managed Cluster",permalink:"/docs/getting-started/install-qovery/gcp/self-managed-cluster"}},s=[{value:"Generate your GCP credentials",id:"generate-your-gcp-credentials",children:[{value:"Install a new cluster on Qovery",id:"install-a-new-cluster-on-qovery",children:[]}]}],p={rightToc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This guide will help you to generate your GCP credentials to connect your GCP account to Qovery."),Object(a.b)("h2",{id:"generate-your-gcp-credentials"},"Generate your GCP credentials"),Object(a.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.cloud.google.com"}),"Connect to your GCP console"))),Object(a.b)("li",null,Object(a.b)("p",null,"Create a new ",Object(a.b)("inlineCode",{parentName:"p"},"Project")," or open an exiting one"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/gcp-credentials/gcp_project.png"}))),Object(a.b)("li",null,Object(a.b)("p",null,"Open the embedded Google shell"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/gcp-credentials/gcp_shell_1.png"}))),Object(a.b)("li",null,Object(a.b)("p",null,"Run the following command in the Google Shell to create the service account and generate the json key:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"wget https://hub.qovery.com/files/create_credentials_gcp.sh && \\\nchmod +x create_credentials_gcp.sh && \\\n./create_credentials_gcp.sh $GOOGLE_CLOUD_PROJECT qovery-service-account\n")),Object(a.b)(i.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"You can modify the service account name by replacing ",Object(a.b)("inlineCode",{parentName:"p"},"qovery-service-account")," by the name of your choice."))),Object(a.b)("li",null,Object(a.b)("p",null,"Once the script is finished, you will see the following message:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"created key [xxxx] of type [json] as [key.json] for [qovery-service-account@<your-project>.iam.gserviceaccount.com]\nOperations completed. You can now download your json key to upload in Qovery\n")),Object(a.b)("p",null,"So you can download it by clicking on the ",Object(a.b)("inlineCode",{parentName:"p"},"Download")," button."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/gcp-credentials/gcp_shell_5.png"})),Object(a.b)("p",null,"And specify the name of the file ",Object(a.b)("inlineCode",{parentName:"p"},"/your/home/key.json")," and click on ",Object(a.b)("inlineCode",{parentName:"p"},"Download"),"."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/gcp-credentials/gcp_shell_6.png"})),Object(a.b)("p",null,"That's it!")))),Object(a.b)("p",null,"Well done!! You now have your GCP ",Object(a.b)("inlineCode",{parentName:"p"},"JSON credentials key"),"; It is time to connect Qovery to your GCP account."),Object(a.b)("h3",{id:"install-a-new-cluster-on-qovery"},"Install a new cluster on Qovery"),Object(a.b)("p",null,"You will be able to use the credentials you just generated when creating a cluster via the Qovery console. This cluster will be linked to your Qovery organization.\nFollow ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/clusters/#creating-a-cluster"}),"this documentation")," to create a new cluster on your organization."))}b.isMDXComponent=!0},438:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},439:function(e,t,n){"use strict";n(441);var r=n(0),o=n.n(r),a=n(438),c=n.n(a);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,a=e.icon,i=e.type,l=null;switch(i){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return o.a.createElement("div",{className:c()(n,"alert","alert--"+i,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:c()("feather","icon-"+(a||l))}),t)}},440:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(f,i({ref:t},u,{components:n})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},441:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(442)}),n(74)("fill")},442:function(e,t,n){"use strict";var r=n(27),o=n(75),a=n(26);e.exports=function(e){for(var t=r(this),n=a(t.length),c=arguments.length,i=o(c>1?arguments[1]:void 0,n),l=c>2?arguments[2]:void 0,u=void 0===l?n:o(l,n);u>i;)t[i++]=e;return t}},443:function(e,t,n){var r=n(28).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||n(10)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},444:function(e,t,n){"use strict";n(443);var r=n(0),o=n.n(r),a=n(439);t.a=function(e){var t=e.children,n=e.name;return o.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},446:function(e,t,n){"use strict";var r=n(450),o=n(51);function a(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=o({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(o),a,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[a(t,e),"[",r,"]"].join(""):[a(t,e),"[",a(r,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var o=e[r];if(void 0===o)return"";if(null===o)return a(r,t);if(Array.isArray(o)){var c=[];return o.slice().forEach((function(e){void 0!==e&&c.push(n(r,e,c.length))})),c.join("&")}return a(r,t)+"="+a(o,t)})).filter((function(e){return e.length>0})).join("&"):""}},449:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(438),n(446)),c=n.n(a);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,a=e.hideFeedbackQuestion,i="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+i+" failed",body:"The tutorial on:\n\n"+i+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},u="https://github.com/qovery/documentation/issues/new?"+c.a.stringify(l),s=Object(r.useState)(null),p=s[0],b=s[1];return o.a.createElement("div",{className:"steps steps--h"+n},t,!a&&!p&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:u,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},450:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
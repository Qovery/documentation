/*! For license information please see 9ab61bc5.ce6e76ee.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{305:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(1),o=n(9),c=(n(0),n(424)),a=n(433),i=n(423),l=n(428),u={last_modified_on:"2023-12-29",title:"Google Cloud Platform (GCP)",description:"Learn how to configure and plug your Google Cloud Platform (GCP) account"},s={id:"using-qovery/configuration/cloud-service-provider/google-cloud-platform",title:"Google Cloud Platform (GCP)",description:"Learn how to configure and plug your Google Cloud Platform (GCP) account",source:"@site/docs/using-qovery/configuration/cloud-service-provider/google-cloud-platform.md",permalink:"/docs/using-qovery/configuration/cloud-service-provider/google-cloud-platform",sidebar:"docs",previous:{title:"Amazon Web Services (AWS)",permalink:"/docs/using-qovery/configuration/cloud-service-provider/amazon-web-services"},next:{title:"Microsoft Azure",permalink:"/docs/using-qovery/configuration/cloud-service-provider/microsoft-azure"}},p=[{value:"Getting started",id:"getting-started",children:[{value:"Connect your GCP account",id:"connect-your-gcp-account",children:[]},{value:"Install a new cluster on Qovery",id:"install-a-new-cluster-on-qovery",children:[]},{value:"Remove your GCP account",id:"remove-your-gcp-account",children:[]}]}],d={rightToc:p};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(i.a,{type:"info",mdxType:"Alert"},Object(c.b)("p",null,"Please refer to ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/provider/kubernetes/"}),"this page")," if you want to install Qovery on your own Kubernetes cluster (BYOK).")),Object(c.b)("p",null,"Qovery lets you quickly deploy applications to your ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloud.google.com"}),"GCP (GCP)")," account. No knowledge needed, and it takes less than 10 minutes to install Qovery on your GCP account."),Object(c.b)("h2",{id:"getting-started"},"Getting started"),Object(c.b)(l.a,{mdxType:"Assumptions"},Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"You have a Qovery account"),Object(c.b)("li",{parentName:"ul"},"You have created an ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/organization/"}),"Organization")),Object(c.b)("li",{parentName:"ul"},"You have a GCP account"))),Object(c.b)("h3",{id:"connect-your-gcp-account"},"Connect your GCP account"),Object(c.b)("p",null,"To link your GCP account to Qovery you need to provide a GCP JSON credentials key."),Object(c.b)(i.a,{type:"info",mdxType:"Alert"},Object(c.b)("p",null,"You can link more than one GCP account. Qovery also support multiple Cloud providers within the same Organization. Meaning, you can balance your workload on different Cloud providers.")),Object(c.b)("h4",{id:"create-your-gcp-credentials"},"Create your GCP credentials"),Object(c.b)(a.a,{headingDepth:3,mdxType:"Steps"},Object(c.b)("ol",null,Object(c.b)("li",null,Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.cloud.google.com"}),"Connect to your GCP console"))),Object(c.b)("li",null,Object(c.b)("p",null,"Create a new ",Object(c.b)("inlineCode",{parentName:"p"},"Project")," or open an exiting one"),Object(c.b)("img",{src:"/img/gcp-credentials/gcp_project.png"})),Object(c.b)("li",null,Object(c.b)("p",null,"Open the embedded Google shell"),Object(c.b)("img",{src:"/img/gcp-credentials/gcp_shell_1.png"})),Object(c.b)("li",null,Object(c.b)("p",null,"Run the following command in the Google Shell to create the service account and generate the json key:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"wget https://hub.qovery.com/files/create_credentials_gcp.sh && chmod +x create_credentials_gcp.sh && ./create_credentials_gcp.sh $GOOGLE_CLOUD_PROJECT qovery-service-account\n")),Object(c.b)(i.a,{type:"info",mdxType:"Alert"},Object(c.b)("p",null,"You can modify the service account name by replacing ",Object(c.b)("inlineCode",{parentName:"p"},"qovery-service-account")," by the name of your choice."))),Object(c.b)("li",null,Object(c.b)("p",null,"Once the script is done. A GCP JSON credentials key has been created and you can download it."),Object(c.b)("img",{src:"/img/gcp-credentials/gcp_shell_5.png"}),Object(c.b)("img",{src:"/img/gcp-credentials/gcp_shell_6.png"})))),Object(c.b)("p",null,"Well done!! You now have your GCP ",Object(c.b)("inlineCode",{parentName:"p"},"JSON credentials key"),"; It is time to connect Qovery to your GCP account."),Object(c.b)("h3",{id:"install-a-new-cluster-on-qovery"},"Install a new cluster on Qovery"),Object(c.b)("p",null,"You will be able to use the credentials you just generated when creating a cluster via the Qovery console. This cluster will be linked to your Qovery organization.\nFollow ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/clusters/#creating-a-cluster"}),"this documentation")," to create a new cluster on your organization."),Object(c.b)("h3",{id:"remove-your-gcp-account"},"Remove your GCP account"),Object(c.b)(i.a,{type:"warning",mdxType:"Alert"},Object(c.b)("p",null,"Your applications and your data will be deleted.")),Object(c.b)("p",null,"To delete Qovery from your GCP account you must be the owner of the Organization and delete the cluster on Qovery side. Follow ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/clusters/#deleting-a-cluster"}),"this documentation"),"\nOnce your GCP account removed from Qovery, everything configured (VPC, Kubernetes, databases, ...) by Qovery will be deleted forever."))}b.isMDXComponent=!0},422:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===c)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},423:function(e,t,n){"use strict";n(425);var r=n(0),o=n.n(r),c=n(422),a=n.n(c);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,c=e.icon,i=e.type,l=null;switch(i){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return o.a.createElement("div",{className:a()(n,"alert","alert--"+i,{"alert--fill":r,"alert--icon":!1!==c}),role:"alert"},!1!==c&&o.a.createElement("i",{className:a()("feather","icon-"+(c||l))}),t)}},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||c;return n?o.a.createElement(f,i({ref:t},u,{components:n})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},425:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(426)}),n(74)("fill")},426:function(e,t,n){"use strict";var r=n(27),o=n(75),c=n(26);e.exports=function(e){for(var t=r(this),n=c(t.length),a=arguments.length,i=o(a>1?arguments[1]:void 0,n),l=a>2?arguments[2]:void 0,u=void 0===l?n:o(l,n);u>i;)t[i++]=e;return t}},427:function(e,t,n){var r=n(28).f,o=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in o||n(10)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},428:function(e,t,n){"use strict";n(427);var r=n(0),o=n.n(r),c=n(423);t.a=function(e){var t=e.children,n=e.name;return o.a.createElement(c.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},432:function(e,t,n){"use strict";var r=n(434),o=n(51);function c(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=o({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),c=t.length>0?t.join("="):void 0;c=void 0===c?null:decodeURIComponent(c),n(decodeURIComponent(o),c,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[c(t,e),"[",r,"]"].join(""):[c(t,e),"[",c(r,e),"]=",c(n,e)].join("")};case"bracket":return function(t,n){return null===n?c(t,e):[c(t,e),"[]=",c(n,e)].join("")};default:return function(t,n){return null===n?c(t,e):[c(t,e),"=",c(n,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var o=e[r];if(void 0===o)return"";if(null===o)return c(r,t);if(Array.isArray(o)){var a=[];return o.slice().forEach((function(e){void 0!==e&&a.push(n(r,e,a.length))})),a.join("&")}return c(r,t)+"="+c(o,t)})).filter((function(e){return e.length>0})).join("&"):""}},433:function(e,t,n){"use strict";var r=n(0),o=n.n(r),c=(n(422),n(432)),a=n.n(c);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,c=e.hideFeedbackQuestion,i="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+i+" failed",body:"The tutorial on:\n\n"+i+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},u="https://github.com/qovery/documentation/issues/new?"+a.a.stringify(l),s=Object(r.useState)(null),p=s[0],d=s[1];return o.a.createElement("div",{className:"steps steps--h"+n},t,!c&&!p&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return d("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:u,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},434:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
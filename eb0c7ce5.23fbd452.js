/*! For license information please see eb0c7ce5.23fbd452.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{368:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return b}));var r=n(1),o=n(9),a=(n(0),n(390)),c=n(399),i=n(389),l=n(394),u=(n(396),{last_modified_on:"2022-01-27",$schema:"/.meta/.schemas/guides.json",title:"How to connect to a managed MongoDB instance on AWS",description:"How to connect to a managed MongoDB instance on AWS from your local client.",author_github:"https://github.com/l0ck3",tags:["type: tutorial","cloud_provider: aws"],hide_pagination:!0}),s={categories:[{name:"tutorial",title:"Tutorial",description:"Additional step-by-step resources to leverage even more Qovery",permalink:"/guides/tutorial"}],coverLabel:"How to connect to a managed MongoDB instance on AWS",description:"How to connect to a managed MongoDB instance on AWS from your local client.",permalink:"/guides/tutorial/how-to-connect-to-a-managed-mongodb-instance-on-aws",readingTime:"3 min read",source:"@site/guides/tutorial/how-to-connect-to-a-managed-mongodb-instance-on-aws.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"cloud_provider: aws",permalink:"/guides/tags/cloud-provider-aws"}],title:"How to connect to a managed MongoDB instance on AWS",truncated:!1,prevItem:{title:"How to Build a Cloud Version of Your Open Source Software - A Case Study with AppWrite - Part 3",permalink:"/guides/tutorial/how-to-build-a-cloud-version-of-your-open-source-software-part-3"},nextItem:{title:"How to connect to your EKS cluster with kubectl",permalink:"/guides/tutorial/how-to-connect-to-your-eks-cluster-with-kubectl"}},d=[{value:"Goal",id:"goal",children:[]}],p={rightToc:d};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When creating a managed MongoDB instance on AWS via Qovery, you don't get a publicly accessible endpoint. While it is good from a security point of view, you still might need to connect to it from a local client. "),Object(a.b)(i.a,{type:"note",mdxType:"Alert"},"Public endpoint for managed MongoDB instance will be available in Q1 2022. This is a temporary workaround."),Object(a.b)(l.a,{name:"guide",mdxType:"Assumptions"},Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You have a managed MongoDB instance up and running"),Object(a.b)("li",{parentName:"ul"},"You have access to your Kubernetes cluster through kubectl: ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/guides/tutorial/how-to-connect-to-your-eks-cluster-with-kubectl/"}),"see how here")))),Object(a.b)("h2",{id:"goal"},"Goal"),Object(a.b)("p",null,"This tutorial will show you how to connect to your managed MongoDB instance private endpoint from your local machine, through your EKS cluster."),Object(a.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("h4",{id:"open-two-terminal-windows-with-access-to-your-kubernetes-cluster"},"Open two terminal windows with access to your Kubernetes cluster"),Object(a.b)("p",null,"We will need to run two different commands to forward your local traffic to your database.")),Object(a.b)("li",null,Object(a.b)("h4",{id:"export-the-required-environment-variables"},"Export the required environment variables"),Object(a.b)("p",null,"In each terminal window, export some env variables: "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"export SERVICE_NAME=mongodb-tunnel\nexport ENDPOINT=<the private endpoint to your db from your AWS console>\nexport PORT=<your DB port>\nexport LOCAL_PORT=8080 # you can use any other port available on your computer\n"))),Object(a.b)("li",null,Object(a.b)("h4",{id:"run-a-socat-container-in-your-cluster"},"Run a socat container in your cluster"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"socat")," is a relay for bidirectional data transfers between two independent data channels.\nIt will forward all traffic between your computer and your database."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"kubectl run ${SERVICE_NAME} --image=alpine/socat \\\n  -it --tty --rm --expose=true --port=${PORT} \\\n  -- \\\n  tcp-listen:${PORT},fork,reuseaddr \\\n  tcp-connect:${ENDPOINT}:${PORT}\n"))),Object(a.b)("li",null,Object(a.b)("h4",{id:"start-port-forwarding-to-your-socat-pod"},"Start port-forwarding to your socat pod"),Object(a.b)("p",null,"To access your ",Object(a.b)("inlineCode",{parentName:"p"},"socat")," pod from your container you will need to start a port-forwarding."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"kubectl port-forward service/${SERVICE_NAME} ${LOCAL_PORT}:${PORT}\n"))),Object(a.b)("li",null,Object(a.b)("h4",{id:"download-the-mongodb-certificate"},"Download the MongoDB certificate"),Object(a.b)("p",null,"Connections to MongoDB instances on AWS use TLS. You will need the certificate to connect.\nYou can download it here: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.pem"}),"https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.pem"))),Object(a.b)("li",null,Object(a.b)("h4",{id:"connect-to-your-db-instance"},"Connect to your DB instance"),Object(a.b)("p",null,"In this example we are using the Mongo Shell, but you can use any other client to connect to it.\nThe credentials are available on the Qovery console."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mongosh --host 127.0.0.1  \\\n  --port ${LOCAL_PORT} \\\n  --username <username>  \\\n  --tls --tlsCAFile <path to downloaded PEM>/rds-combined-ca-bundle.pem \\\n  --tlsAllowInvalidCertificates\n")),Object(a.b)(i.a,{type:"note",mdxType:"Alert"},"Since 127.0.0.1 is not listed in the certificate, you need to allow invalid certificates.")))))}b.isMDXComponent=!0},388:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},389:function(e,t,n){"use strict";n(391);var r=n(0),o=n.n(r),a=n(388),c=n.n(a);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,a=e.icon,i=e.type,l=null;switch(i){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return o.a.createElement("div",{className:c()(n,"alert","alert--"+i,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:c()("feather","icon-"+(a||l))}),t)}},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(m,i({ref:t},u,{components:n})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},391:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(392)}),n(74)("fill")},392:function(e,t,n){"use strict";var r=n(27),o=n(75),a=n(26);e.exports=function(e){for(var t=r(this),n=a(t.length),c=arguments.length,i=o(c>1?arguments[1]:void 0,n),l=c>2?arguments[2]:void 0,u=void 0===l?n:o(l,n);u>i;)t[i++]=e;return t}},393:function(e,t,n){var r=n(28).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||n(10)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},394:function(e,t,n){"use strict";n(393);var r=n(0),o=n.n(r),a=n(389);t.a=function(e){var t=e.children,n=e.name;return o.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},395:function(e,t,n){"use strict";var r=n(1),o=n(0),a=n.n(o),c=n(39),i=n(397),l=n(20),u=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,s=n||l,d=Object(i.a)(s),p=Object(o.useRef)(!1),b=u.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!b&&d&&window.docusaurus.prefetch(s),function(){b&&t&&t.disconnect()}}),[s,b,d]),s&&d?a.a.createElement(c.b,Object(r.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(s),p.current=!0)},innerRef:function(e){var n,r;b&&e&&d&&(n=e,r=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:s})):a.a.createElement("a",Object(r.a)({},e,{href:s}))}},396:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(395),c=n(388),i=n.n(c);n(133);t.a=function(e){var t=e.children,n=e.className,r=e.badge,c=e.leftIcon,l=e.rightIcon,u=e.size,s=e.target,d=e.to,p=i()("jump-to","jump-to--"+u,n),b=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},c&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+c})),o.a.createElement("div",{className:"jump-to--main"},r?o.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return s?o.a.createElement("a",{href:d,target:s,className:p},b):o.a.createElement(a.a,{to:d,className:p},b)}},397:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))},398:function(e,t,n){"use strict";var r=n(400),o=n(51);function a(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=o({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(o),a,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[a(t,e),"[",r,"]"].join(""):[a(t,e),"[",a(r,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var o=e[r];if(void 0===o)return"";if(null===o)return a(r,t);if(Array.isArray(o)){var c=[];return o.slice().forEach((function(e){void 0!==e&&c.push(n(r,e,c.length))})),c.join("&")}return a(r,t)+"="+a(o,t)})).filter((function(e){return e.length>0})).join("&"):""}},399:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(388),n(398)),c=n.n(a);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,a=e.hideFeedbackQuestion,i="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+i+" failed",body:"The tutorial on:\n\n"+i+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},u="https://github.com/qovery/documentation/issues/new?"+c.a.stringify(l),s=Object(r.useState)(null),d=s[0],p=s[1];return o.a.createElement("div",{className:"steps steps--h"+n},t,!a&&!d&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:u,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==d&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},400:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
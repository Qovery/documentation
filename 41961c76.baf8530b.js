/*! For license information please see 41961c76.baf8530b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{225:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return s})),r.d(n,"rightToc",(function(){return u})),r.d(n,"default",(function(){return p}));var t=r(1),a=r(9),o=(r(0),r(422)),l=r(421),i=r(426),c={last_modified_on:"2023-11-25",$schema:"/.meta/.schemas/guides.json",title:"Install Qovery on your Kubernetes cluster",description:"Learn how to install Qovery on your own Kubernetes cluster (BYOK)",author_github:"https://github.com/evoxmusic",tags:["type: guide","provider: kubernetes"]},s={categories:[{name:"provider",title:"Provider",description:null,permalink:"/guides/provider"}],coverLabel:"Install Qovery on your Kubernetes cluster",description:"Learn how to install Qovery on your own Kubernetes cluster (BYOK)",permalink:"/guides/provider/guide-kubernetes",readingTime:"2 min read",source:"@site/guides/provider/guide-kubernetes.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"provider: kubernetes",permalink:"/guides/tags/provider-kubernetes"}],title:"Install Qovery on your Kubernetes cluster",truncated:!1,prevItem:{title:"Install Qovery on your Amazon Web Services account",permalink:"/guides/cloud-provider/guide-amazon-web-services"},nextItem:{title:"Install Qovery on your Microsoft Azure account",permalink:"/guides/cloud-provider/guide-microsoft-azure"}},u=[{value:"Install Qovery",id:"install-qovery",children:[]},{value:"Configure",id:"configure",children:[{value:"Qovery",id:"qovery",children:[]},{value:"Nginx",id:"nginx",children:[]},{value:"External DNS",id:"external-dns",children:[]}]}],b={rightToc:u};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},b,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)(l.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,"Installing Qovery on your Kubernetes cluster is currently in beta. ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.qovery.com/solutions/bring-your-own-kubernetes"}),"You need to request your access here"),".")),Object(o.b)("p",null,"In this guide, I'll explain step-by-step how to install Qovery on your Kubernetes cluster."),Object(o.b)(i.a,{mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have a Qovery account"),Object(o.b)("li",{parentName:"ul"},"You have a running Kubernetes cluster"),Object(o.b)("li",{parentName:"ul"},"You have basic knowledge in Kubernetes"),Object(o.b)("li",{parentName:"ul"},"You have installed Helm on your local machine"))),Object(o.b)("h2",{id:"install-qovery"},"Install Qovery"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"helm install qovery")),Object(o.b)("h2",{id:"configure"},"Configure"),Object(o.b)("p",null,"To configure Qovery you need to override your Helm ",Object(o.b)("inlineCode",{parentName:"p"},"values.yaml")," file. Here is the simple example of the configuration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="values.yaml"',title:'"values.yaml"'}),"qovery:\n  clusterId: set-by-customer\n  apkKey: set-by-customer\n  jwtToken: set-by-customer\n  qovery-cluster-agent:\n    enabled: true\n    override_chart: qovery-cluster-agent\n  qovery-shell-agent:\n    enabled: true\n    override_chart: qovery-shell-agent\n  qovery-engine:\n    enabled: false\n    override_chart: qovery-engine\ningress:\n  ingress-nginx:\n    enabled: false\ndns:\n  external-dns:\n    enabled: false\nlogging:\n  promtail:\n    enabled: false\n  loki:\n    enabled: false\ncertificates:\n  cert-manager:\n    enabled: false\n  qovery-cert-manager-webhook:\n    enabled: false\n  cert-manager-configs:\n    enabled: false\naws:\n  q-storageclass:\n    enabled: false\nobersavability:\n  metrics-server:\n    enabled: false\n")),Object(o.b)("h3",{id:"qovery"},"Qovery"),Object(o.b)("p",null,"TODO"),Object(o.b)("h3",{id:"nginx"},"Nginx"),Object(o.b)("p",null,"TODO"),Object(o.b)("h3",{id:"external-dns"},"External DNS"),Object(o.b)("p",null,"TODO"))}p.isMDXComponent=!0},420:function(e,n,r){var t;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)&&t.length){var l=a.apply(null,t);l&&e.push(l)}else if("object"===o)for(var i in t)r.call(t,i)&&t[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()},421:function(e,n,r){"use strict";r(423);var t=r(0),a=r.n(t),o=r(420),l=r.n(o);r(132);n.a=function(e){var n=e.children,r=e.classNames,t=e.fill,o=e.icon,i=e.type,c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return a.a.createElement("div",{className:l()(r,"alert","alert--"+i,{"alert--fill":t,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:l()("feather","icon-"+(o||c))}),n)}},422:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i({},n,{},e)),r},b=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(r),d=t,f=b["".concat(l,".").concat(d)]||b[d]||p[d]||o;return r?a.a.createElement(f,i({ref:n},s,{components:r})):a.a.createElement(f,i({ref:n},s))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},423:function(e,n,r){var t=r(12);t(t.P,"Array",{fill:r(424)}),r(74)("fill")},424:function(e,n,r){"use strict";var t=r(27),a=r(75),o=r(26);e.exports=function(e){for(var n=t(this),r=o(n.length),l=arguments.length,i=a(l>1?arguments[1]:void 0,r),c=l>2?arguments[2]:void 0,s=void 0===c?r:a(c,r);s>i;)n[i++]=e;return n}},425:function(e,n,r){var t=r(28).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||r(10)&&t(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},426:function(e,n,r){"use strict";r(425);var t=r(0),a=r.n(t),o=r(421);n.a=function(e){var n=e.children,r=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",r||"page"," assumes the following:"),n)}}}]);
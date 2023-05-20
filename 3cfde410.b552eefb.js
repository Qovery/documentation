/*! For license information please see 3cfde410.b552eefb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{226:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return u})),o.d(t,"default",(function(){return d}));var r=o(1),n=o(9),a=(o(0),o(454)),c=o(453),l={last_modified_on:"2023-05-19",title:"Cluster Troubleshoot",description:"Everything you need to troubleshoot your cluster with Qovery",hide_pagination:!0},i={id:"using-qovery/troubleshoot/cluster-troubleshoot",title:"Cluster Troubleshoot",description:"Everything you need to troubleshoot your cluster with Qovery",source:"@site/docs/using-qovery/troubleshoot/cluster-troubleshoot.md",permalink:"/docs/using-qovery/troubleshoot/cluster-troubleshoot",sidebar:"docs",previous:{title:"Lifecycle Job Troubleshoot",permalink:"/docs/using-qovery/troubleshoot/lifecycle-troubleshoot"},next:{title:"Quickstarts",permalink:"/docs/using-qovery/quickstart"}},u=[{value:"I don&#39;t have Qovery access anymore, how could I delete Qovery deployed resources on my AWS account?",id:"i-dont-have-qovery-access-anymore-how-could-i-delete-qovery-deployed-resources-on-my-aws-account",children:[]},{value:"My cloud account has been blocked, what should I do?",id:"my-cloud-account-has-been-blocked-what-should-i-do",children:[]}],s={rightToc:u};function d(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Within this section you will find the common errors you might encounter when deploying or running your clusters with Qovery"),Object(a.b)("h2",{id:"i-dont-have-qovery-access-anymore-how-could-i-delete-qovery-deployed-resources-on-my-aws-account"},"I don't have Qovery access anymore, how could I delete Qovery deployed resources on my AWS account?"),Object(a.b)("p",null,'Unfortunately, there is no automatic way to do it with Qovery once we don\'t have access. However, AWS provides an easy way to retrieve those resources, so you can manually perform the delete. To do so, go on the AWS web console, and search for "Resource Groups & Tag Editor" service, then:'),Object(a.b)("p",{Valign:"center"},Object(a.b)("img",{src:"/img/aws_resource_groups.png",alt:"Resource groups search by tag"})),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'Click on "Create Resource Group".'),Object(a.b)("li",{parentName:"ol"},'In Tags, enter: "ClusterLongId".'),Object(a.b)("li",{parentName:"ol"},'In the "Optional Tag value", enter the Qovery cluster ID. If you don\'t have it, let AWS suggest it for you. If you have Qovery deployed elements remainings, it will propose the Cluster long ID automatically.'),Object(a.b)("li",{parentName:"ol"},'Click on "Add".'),Object(a.b)("li",{parentName:"ol"},"You should see the filter with the information you just entered."),Object(a.b)("li",{parentName:"ol"},'Click on "Preview groups resources".'),Object(a.b)("li",{parentName:"ol"},"You'll have all elements deployed by Qovery and you can delete what you want.")),Object(a.b)("h2",{id:"my-cloud-account-has-been-blocked-what-should-i-do"},"My cloud account has been blocked, what should I do?"),Object(a.b)("p",null,"If you encounter this kind of error during an infrastructure deployment (including managed DBs):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"This account is currently blocked by your cloud provider, please contact them directly.\n")),Object(a.b)("p",null,"Or"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"This AWS account is currently blocked and not recognized as a valid account.\nPlease contact aws-verification@amazon.com directly to get more details.\nMaybe you are not allowed to use your free tier in this region?\nMaybe you need to provide billing info?\n")),Object(a.b)("p",null,"This error is likely due to a billing issue or blocked free-tier usage in the given region."),Object(a.b)("p",null,"Unfortunately, there is nothing Qovery can do. You need to reach out directly to your cloud provider to get more details and get your account unblocked."),Object(a.b)(c.a,{type:"info",mdxType:"Alert"},"If you are using AWS, you can contact them directly via dedicated email: aws-verification@amazon.com."),Object(a.b)("h1",{id:"more"},"More"),Object(a.b)("p",null,"You are looking to troubleshoot your application with Qovery? ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/getting-started/debugging/"}),"Read this very short guide")))}d.isMDXComponent=!0},452:function(e,t,o){var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var c=n.apply(null,r);c&&e.push(c)}else if("object"===a)for(var l in r)o.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},453:function(e,t,o){"use strict";o(456);var r=o(0),n=o.n(r),a=o(452),c=o.n(a);o(132);t.a=function(e){var t=e.children,o=e.classNames,r=e.fill,a=e.icon,l=e.type,i=null;switch(l){case"danger":i="alert-triangle";break;case"success":i="check-circle";break;case"warning":i="alert-triangle";break;default:i="info"}return n.a.createElement("div",{className:c()(o,"alert","alert--"+l,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&n.a.createElement("i",{className:c()("feather","icon-"+(a||i))}),t)}},454:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return p}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=n.a.createContext({}),s=function(e){var t=n.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):l({},t,{},e)),o},d=function(e){var t=s(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(o),b=r,p=d["".concat(c,".").concat(b)]||d[b]||y[b]||a;return o?n.a.createElement(p,l({ref:t},u,{components:o})):n.a.createElement(p,l({ref:t},u))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<a;u++)c[u]=o[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},456:function(e,t,o){var r=o(12);r(r.P,"Array",{fill:o(459)}),o(74)("fill")},459:function(e,t,o){"use strict";var r=o(28),n=o(75),a=o(27);e.exports=function(e){for(var t=r(this),o=a(t.length),c=arguments.length,l=n(c>1?arguments[1]:void 0,o),i=c>2?arguments[2]:void 0,u=void 0===i?o:n(i,o);u>l;)t[l++]=e;return t}}}]);
/*! For license information please see 3248e450.b1190c84.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{216:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(465)),i=(n(464),n(472),n(469),{last_modified_on:"2024-11-27",$schema:"/.meta/.schemas/guides.json",title:"Deploy a DaemonSet in a Karpenter context",description:"How to ensure your DaemonSet is well deployed when you are using Karpenter.",author_github:"https://github.com/baalooos",tags:["type: tutorial","technology: qovery","installation_guide: aws"],hide_pagination:!0}),s={categories:[{name:"advanced",title:"Advanced",description:"Go beyond the basics, become a Qovery pro, and extract the full potential of Qovery.",permalink:"/guides/advanced"}],coverLabel:"Deploy a DaemonSet in a Karpenter context",description:"How to ensure your DaemonSet is well deployed when you are using Karpenter.",permalink:"/guides/advanced/deploy-daemonset-with-karpenter",readingTime:"3 min read",source:"@site/guides/advanced/deploy-daemonset-with-karpenter.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"},{label:"installation_guide: aws",permalink:"/guides/tags/installation-guide-aws"}],title:"Deploy a DaemonSet in a Karpenter context",truncated:!1,prevItem:{title:"Customizing Preview URL with Qovery CLI",permalink:"/guides/tutorial/customizing-preview-url-with-qovery-cli"},nextItem:{title:"Deploy API Gateway",permalink:"/guides/advanced/deploy-api-gateway"}},l=[{value:"What is a DaemonSet?",id:"what-is-a-daemonset",children:[]},{value:"What is the problem?",id:"what-is-the-problem",children:[]},{value:"How to resolve it?",id:"how-to-resolve-it",children:[{value:"What is a Priority Class?",id:"what-is-a-priority-class",children:[]},{value:"Deploy a new Priority Class using Helm",id:"deploy-a-new-priority-class-using-helm",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://karpenter.sh/"}),"Karpenter")," is a great way to cut your AWS bill. It provides an easy and flexible way to scale and optimize your resource consumption. But there is a known ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kubernetes-sigs/karpenter/issues/731"}),"issue")," with capacity planning when you deploy DaemonSets. In this guide, I will present the issue and explain how to avoid it by using Priority Class."),Object(o.b)("h2",{id:"what-is-a-daemonset"},"What is a DaemonSet?"),Object(o.b)("p",null,"A DaemonSet in Kubernetes is a specialized controller used to ensure that a copy of a particular pod runs on all nodes in a cluster. It is particularly useful for deploying background tasks or system-level services that need to run on every node, such as log collectors, monitoring agents, or network components."),Object(o.b)("p",null,"When nodes are added to the cluster, the DaemonSet automatically schedules the specified pod on the new nodes, ensuring consistent deployment across the entire infrastructure. Similarly, when nodes are removed, the DaemonSet takes care of cleaning up the pods that were running on those nodes."),Object(o.b)("p",null,"This makes DaemonSets a powerful tool for maintaining uniformity and reliability in the operation of essential services across a Kubernetes cluster."),Object(o.b)("h2",{id:"what-is-the-problem"},"What is the problem?"),Object(o.b)("p",null,"There is a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kubernetes-sigs/karpenter/issues/731"}),"known issue")," with Karpenter and DaemonSets when scaling nodes. DaemonSets ensure a copy of a pod runs on every node, consuming additional resources that Karpenter does not consider, leading to potential resource contention and under-provisioned nodes."),Object(o.b)("p",null,"This forces operators to over-provision their nodes, resulting in inefficient resource utilization and higher costs. While the Kubernetes community and Karpenter developers are working on solutions, users currently need to manually adjust resource allocations and monitor node utilization to mitigate these issues."),Object(o.b)("p",null,"A way to resolve this problem is to use a Priority Class and attach it to the DaemonSet we are creating."),Object(o.b)("h2",{id:"how-to-resolve-it"},"How to resolve it?"),Object(o.b)("h3",{id:"what-is-a-priority-class"},"What is a Priority Class?"),Object(o.b)("p",null,"A PriorityClass in Kubernetes is a resource used to assign a priority level to pods. This resource helps the scheduler make decisions during resource contention."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Higher-priority pods are scheduled before lower-priority ones"),Object(o.b)("li",{parentName:"ul"},"In case of resource shortages, lower-priority pods may be preempted (evicted) to make room for higher-priority pods.")),Object(o.b)("p",null,"This ensures that critical workloads receive the necessary resources to run effectively."),Object(o.b)("h3",{id:"deploy-a-new-priority-class-using-helm"},"Deploy a new Priority Class using Helm"),Object(o.b)("p",null,"I created a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-charts-examples/tree/main/karpenter-daemonset-priority-class-main"}),"simple repository")," you can clone to follow along."),Object(o.b)("p",null,"Create the karpenter-priority-class service in the Qovery environment where you want to deploy your DaemonSet by following ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/helm/"}),"this documentation")," and these values:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"General:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Service name: ",Object(o.b)("inlineCode",{parentName:"li"},"karpenter-priority-class")),Object(o.b)("li",{parentName:"ul"},"Source:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Helm source: ",Object(o.b)("inlineCode",{parentName:"li"},"Git Provider")),Object(o.b)("li",{parentName:"ul"},"Git account: ",Object(o.b)("inlineCode",{parentName:"li"},"Public repository")," (Change if you are not using GitHub)"),Object(o.b)("li",{parentName:"ul"},"Repository: ",Object(o.b)("inlineCode",{parentName:"li"},"https://github.com/Qovery/qovery-charts-examples.git")," (Replace by the name of your repository)"),Object(o.b)("li",{parentName:"ul"},"Branch: ",Object(o.b)("inlineCode",{parentName:"li"},"main")),Object(o.b)("li",{parentName:"ul"},"Root application path: ",Object(o.b)("inlineCode",{parentName:"li"},"/karpenter-daemonset-priority-class-main")),Object(o.b)("li",{parentName:"ul"},"Allow cluster-wide resources \u2714\ufe0f")))))),Object(o.b)("p",null,"Click on Continue"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Values override as file:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"File source: ",Object(o.b)("inlineCode",{parentName:"li"},"None"))))),Object(o.b)("p",null,"Then, you can:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"deploy this helm service to add the priority class on your cluster"),Object(o.b)("li",{parentName:"ul"},"Modify your DaemonSet configuration to use the new priority class an redeploy it")),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"Even if Karpenter is a great way of reducing your AWS bill, sometimes you will have to do some manual lifting. This issue is a good example. A single Priority Class is enough to avoid a complex resource allocation problem."))}u.isMDXComponent=!0},463:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},464:function(e,t,n){"use strict";n(466);var r=n(0),a=n.n(r),o=n(463),i=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,o=e.icon,s=e.type,l=null;switch(s){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+s,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,s({ref:t},c,{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},466:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(467)}),n(74)("fill")},467:function(e,t,n){"use strict";var r=n(27),a=n(75),o=n(26);e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,s=a(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,c=void 0===l?n:a(l,n);c>s;)t[s++]=e;return t}},468:function(e,t,n){var r=n(28).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},469:function(e,t,n){"use strict";n(468);var r=n(0),a=n.n(r),o=n(464);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},471:function(e,t,n){"use strict";var r=n(475),a=n(51);function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(a),o,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var a=e[r];if(void 0===a)return"";if(null===a)return o(r,t);if(Array.isArray(a)){var i=[];return a.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return o(r,t)+"="+o(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},472:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(463),n(471)),i=n.n(o);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,s="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+s+" failed",body:"The tutorial on:\n\n"+s+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},c="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(l),u=Object(r.useState)(null),p=u[0],d=u[1];return a.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!p&&a.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",a.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return d("yes")}},"Yes"),"\xa0\xa0",a.a.createElement("a",{href:c,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&a.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",a.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},475:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
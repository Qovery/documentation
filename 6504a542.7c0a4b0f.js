/*! For license information please see 6504a542.7c0a4b0f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{271:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(446)),i=(n(453),n(450)),c=(n(445),{last_modified_on:"2024-02-27",$schema:"/.meta/.schemas/guides.json",title:"Debugging",description:"How to debug your application",series_position:5,author_github:"https://github.com/evoxmusic",tags:["type: guide","technology: qovery"]}),s={categories:[{name:"getting-started",title:"Getting Started",description:"Take Qovery from zero to production in under 10 minutes.",permalink:"/guides/getting-started"}],coverLabel:"Debugging",description:"How to debug your application",permalink:"/guides/getting-started/debugging",readingTime:"3 min read",seriesPosition:5,source:"@site/guides/getting-started/debugging.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Debugging",truncated:!1,prevItem:{title:"Environment variables",permalink:"/guides/getting-started/managing-environment-variables"},nextItem:{title:"Install Qovery on your Amazon Web Services account",permalink:"/guides/installation-guide/guide-amazon-web-services"}},u=[{value:"Check the status of your app",id:"check-the-status-of-your-app",children:[]},{value:"Live Logs",id:"live-logs",children:[]},{value:"Deployment Logs",id:"deployment-logs",children:[]},{value:"Monitoring",id:"monitoring",children:[]},{value:"Alerting",id:"alerting",children:[]}],l={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Your application is running, but something goes wrong? In this guide, you'll learn how to debug your application and solve your problem to\nmake it running smoothly."),Object(a.b)(i.a,{mdxType:"Assumptions"},Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You have already deployed an application with Qovery"))),Object(a.b)("p",null,"Your application is running, but for some reason, it is not working as expected. Here are a few tips to find out what's going on."),Object(a.b)("h2",{id:"check-the-status-of-your-app"},"Check the status of your app"),Object(a.b)("p",null,"Qovery expose in the interface the running status of your application which provides you some highlevel information of its healthiness. You can look ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/running-and-deployment-statuses/"}),"in this section")," to know more about the ",Object(a.b)("inlineCode",{parentName:"p"},"Running Status")),Object(a.b)("p",null,"If the service crashes, its ",Object(a.b)("inlineCode",{parentName:"p"},"Running Status")," will be displayed as a red dot. If that's the case, you can have a look at the logs to investigate the reason behind."),Object(a.b)("h2",{id:"live-logs"},"Live Logs"),Object(a.b)("p",null,"If you need to see the log output of your application while it's running, qovery expose them to you in real-time thanks to the Logs interface. You can have a look at ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/logs/#live-logs"}),"this section")," to know more."),Object(a.b)("p",null,"You can use this information to find out what causes your application to behave incorrectly."),Object(a.b)("h2",{id:"deployment-logs"},"Deployment Logs"),Object(a.b)("p",null,"If your application fails to start, you can check what's the cause in its deployment logs. You can have a look at ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/logs/#deployment-logs"}),"this section")," to have more information on the deployment logs and how to access them."),Object(a.b)("p",null,"This view provides insight into the build and deployment process. If anything goes wrong, you can see all the required information to fix the problem here."),Object(a.b)("p",null,"You can check the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/troubleshoot/"}),"Troubleshoot section")," to investigate any issue you might encounter during the deployment of your services."),Object(a.b)("h2",{id:"monitoring"},"Monitoring"),Object(a.b)("p",null,"If you need more information about the resources consumed by your application, Qovery provides basic metrics about your CPU, memory and storage usage."),Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"Navigate to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Console"))),Object(a.b)("li",null,Object(a.b)("p",null,"Choose your project, environment, and application.")),Object(a.b)("li",null,Object(a.b)("p",null,"In the main application view, you can see a table with the current application resource consumption."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/debugging/metrics.png",alt:"Metrics"})))),Object(a.b)("h2",{id:"alerting"},"Alerting"),Object(a.b)("p",null,"We highly recommend using tools like ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.datadoghq.com"}),"Datadog"),", ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://sentry.io/"}),"Sentry")," or ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://newrelic.com/"}),"NewRelic")," to manage your alerting.\nQovery will provide easy integrations in the coming release. Check out our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://roadmap.qovery.com/"}),"roadmap")),Object(a.b)("p",null,"Do you need any help? ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"Reach us on our forum")))}p.isMDXComponent=!0},444:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},445:function(e,t,n){"use strict";n(447);var r=n(0),o=n.n(r),a=n(444),i=n.n(a);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,a=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return o.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:i()("feather","icon-"+(a||s))}),t)}},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,g=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(g,c({ref:t},u,{components:n})):o.a.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},447:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(448)}),n(74)("fill")},448:function(e,t,n){"use strict";var r=n(27),o=n(75),a=n(26);e.exports=function(e){for(var t=r(this),n=a(t.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,n),s=i>2?arguments[2]:void 0,u=void 0===s?n:o(s,n);u>c;)t[c++]=e;return t}},449:function(e,t,n){var r=n(28).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||n(10)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},450:function(e,t,n){"use strict";n(449);var r=n(0),o=n.n(r),a=n(445);t.a=function(e){var t=e.children,n=e.name;return o.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},452:function(e,t,n){"use strict";var r=n(456),o=n(51);function a(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=o({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(o),a,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[a(t,e),"[",r,"]"].join(""):[a(t,e),"[",a(r,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var o=e[r];if(void 0===o)return"";if(null===o)return a(r,t);if(Array.isArray(o)){var i=[];return o.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return a(r,t)+"="+a(o,t)})).filter((function(e){return e.length>0})).join("&"):""}},453:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(444),n(452)),i=n.n(a);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,a=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,s={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},u="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(s),l=Object(r.useState)(null),p=l[0],b=l[1];return o.a.createElement("div",{className:"steps steps--h"+n},t,!a&&!p&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:u,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},456:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
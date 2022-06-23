/*! For license information please see 7df50433.206b7c66.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{288:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(441)),i=n(440),c=n(450),l={last_modified_on:"2022-06-23",title:"Webhooks",description:"Learn how to use Qovery Webhooks"},u={id:"using-qovery/integration/webhook",title:"Webhooks",description:"Learn how to use Qovery Webhooks",source:"@site/docs/using-qovery/integration/webhook.md",permalink:"/docs/using-qovery/integration/webhook",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/integration/webhook.md",sidebar:"docs",previous:{title:"New Relic",permalink:"/docs/using-qovery/integration/monitoring/new-relic"},next:{title:"API",permalink:"/docs/using-qovery/integration/api-integration"}},s=[],b={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Qovery allows you to create webhooks at organization-level so that, when an event happens on an environment within your organization, you can get notified on external applications (for instance, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/integration/slack/"}),"Slack"),")."),Object(a.b)("p",null,"You can trigger webhooks when:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A deployment has started in the environment."),Object(a.b)("li",{parentName:"ul"},"A deployment has been successful in the environment."),Object(a.b)("li",{parentName:"ul"},"A deployment has been cancelled in the environment."),Object(a.b)("li",{parentName:"ul"},"A deployment has failed in the environment.")),Object(a.b)(i.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"Webhooks are not available in the Qovery console yet, but you can create and manage them via the Qovery API.")),Object(a.b)("h1",{id:"creating-a-webhook"},"Creating a Webhook"),Object(a.b)("p",null,"To create a webhook via the Qovery API:"),Object(a.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"Install the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/"}),"Qovery CLI"),".")),Object(a.b)("li",null,Object(a.b)("p",null,"Generate an ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/#generate-api-token"}),"API Token"),".")),Object(a.b)("li",null,Object(a.b)("p",null,"Enter a cURL command similar to this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'curl -X POST -H \'Content-type: application/json\' -H \'Authorization: Token <Your API Token>\' -d \\\n\'{"description": "slack notifications", "target_url": "<Your Slack Webhook URL>", "events": ["DEPLOYMENT_STARTED", "DEPLOYMENT_CANCELLED", "DEPLOYMENT_SUCCESSFUL", "DEPLOYMENT_FAILURE"], "kind": "SLACK", "enabled": true}\' \\\n"https://api.qovery.com/organization/{Your Organization ID}/webhook"\n')),Object(a.b)("p",null,"The above command is used to create a webhook to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/integration/slack/"}),"get notifications on Slack")," whenever a deployment has been started, cancelled, successful or failed."),Object(a.b)("p",null,"To customize the command so that it fits your specific needs:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Replace ",Object(a.b)("inlineCode",{parentName:"li"},"<Your API Token>")," with your actual Qovery API token."),Object(a.b)("li",{parentName:"ul"},"With the ",Object(a.b)("inlineCode",{parentName:"li"},'"description"')," parameter, enter a self-explanatory description of what your webhook does (in the example, ",Object(a.b)("inlineCode",{parentName:"li"},'"description": "slack notifications"')," clearly states that the webhook triggers notifications on Slack)."),Object(a.b)("li",{parentName:"ul"},"Replace ",Object(a.b)("inlineCode",{parentName:"li"},"<Your Slack Webhook URL>")," with the webhook URL provided by the external application you want to receive notifications on."),Object(a.b)("li",{parentName:"ul"},"With the ",Object(a.b)("inlineCode",{parentName:"li"},'"events"')," parameter, list all the events you want to be notified of."),Object(a.b)("li",{parentName:"ul"},"With the ",Object(a.b)("inlineCode",{parentName:"li"},'"kind"')," parameter, specify which kind of webhook you want to create. At the moment you can specify : ",Object(a.b)("inlineCode",{parentName:"li"},'"kind": "STANDARD"')," to create a generic webhook, or ",Object(a.b)("inlineCode",{parentName:"li"},'"kind": "SLACK"')," to create ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/using-qovery/integration/slack/"}),"a Slack webhook"),"."),Object(a.b)("li",{parentName:"ul"},"Replace ",Object(a.b)("inlineCode",{parentName:"li"},"{Your Organization ID}")," with the ID of the Qovery organization you want to create your webhook on.")),Object(a.b)("p",null,"For information on all the parameters you can set depending on which kind of notifications you want to receive and on which external application, see our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://api-doc.qovery.com/#tag/Organization-Webhook/operation/createOrganizationWebhook"}),"Qovery API Documentation"),".")))),Object(a.b)("h1",{id:"managing-your-webhooks"},"Managing your Webhooks"),Object(a.b)("p",null,"Via the Qovery API, you can also:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://api-doc.qovery.com/#tag/Organization-Webhook/operation/editOrganizationWebhook"}),"Edit your webhooks"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://api-doc.qovery.com/#tag/Organization-Webhook/operation/deleteOrganizationWebhook"}),"Delete your webhooks"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://api-doc.qovery.com/#tag/Organization-Webhook/operation/listOrganizationWebHooks"}),"Display a list of your existing webhooks and their configuration"),".")))}p.isMDXComponent=!0},439:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},440:function(e,t,n){"use strict";n(444);var r=n(0),o=n.n(r),a=n(439),i=n.n(a);n(131);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,a=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return o.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:i()("feather","icon-"+(a||l))}),t)}},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),f=r,h=b["".concat(i,".").concat(f)]||b[f]||p[f]||a;return n?o.a.createElement(h,c({ref:t},u,{components:n})):o.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},444:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(448)}),n(74)("fill")},448:function(e,t,n){"use strict";var r=n(27),o=n(75),a=n(26);e.exports=function(e){for(var t=r(this),n=a(t.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,u=void 0===l?n:o(l,n);u>c;)t[c++]=e;return t}},449:function(e,t,n){"use strict";var r=n(451),o=n(51);function a(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=o({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(o),a,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[a(t,e),"[",r,"]"].join(""):[a(t,e),"[",a(r,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var o=e[r];if(void 0===o)return"";if(null===o)return a(r,t);if(Array.isArray(o)){var i=[];return o.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return a(r,t)+"="+a(o,t)})).filter((function(e){return e.length>0})).join("&"):""}},450:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(439),n(449)),i=n.n(a);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,a=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},u="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(l),s=Object(r.useState)(null),b=s[0],p=s[1];return o.a.createElement("div",{className:"steps steps--h"+n},t,!a&&!b&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:u,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==b&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},451:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
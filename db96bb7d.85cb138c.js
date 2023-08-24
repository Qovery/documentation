/*! For license information please see db96bb7d.85cb138c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{369:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),o=n(9),a=(n(0),n(410)),i=n(409),l=n(419),c={last_modified_on:"2023-08-21",title:"Deployment Rule",description:"Learn how to configure the lifecycle of your Environments"},u={id:"using-qovery/configuration/deployment-rule",title:"Deployment Rule",description:"Learn how to configure the lifecycle of your Environments",source:"@site/docs/using-qovery/configuration/deployment-rule.md",permalink:"/docs/using-qovery/configuration/deployment-rule",sidebar:"docs",previous:{title:"Object Storage",permalink:"/docs/using-qovery/configuration/object-storage"},next:{title:"Cloud Service Provider",permalink:"/docs/using-qovery/configuration/cloud-service-provider"}},s=[{value:"Why using Deployment Rule?",id:"why-using-deployment-rule",children:[{value:"Cloud cost optimization",id:"cloud-cost-optimization",children:[]},{value:"Time optimization",id:"time-optimization",children:[]},{value:"Examples",id:"examples",children:[]}]},{value:"Rule Levels",id:"rule-levels",children:[]},{value:"Project Deployment Rules",id:"project-deployment-rules",children:[{value:"Project Rules Configuration",id:"project-rules-configuration",children:[]},{value:"Matching rule definition",id:"matching-rule-definition",children:[]},{value:"Setup to apply - General",id:"setup-to-apply---general",children:[]},{value:"Setup to apply - Start &amp; stop",id:"setup-to-apply---start--stop",children:[]},{value:"Rules priority",id:"rules-priority",children:[]}]},{value:"Environment Deployment Rules",id:"environment-deployment-rules",children:[]}],p={rightToc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A ",Object(a.b)("strong",{parentName:"p"},"Deployment Rules")," lets you configure the lifecycle of your ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environments"),"."),Object(a.b)("h2",{id:"why-using-deployment-rule"},"Why using Deployment Rule?"),Object(a.b)("h3",{id:"cloud-cost-optimization"},"Cloud cost optimization"),Object(a.b)("p",null,"Using the Deployment Rules is a good practice to drastically ",Object(a.b)("strong",{parentName:"p"},"reduce your cost"),". Indeed, Qovery knows how to optimize your Cloud resources\nwhen your applications are not running. Then you can expect to reduce your Cloud cost up to 60% by using the ",Object(a.b)("strong",{parentName:"p"},"Deployment Rules"),"."),Object(a.b)("h3",{id:"time-optimization"},"Time optimization"),Object(a.b)("p",null,"Configuring your environments, managing, starting, shutting down all takes valuable time from your developers. Deployment Rules allow you\nto declaratively set up how your resources should be used, let Qovery do the dirty job, allowing your employees to focus on important things."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("h4",{id:"shutting-down-environments"},"Shutting down environments"),Object(a.b)("p",null,"Developers in your company work from 9-to-5, five days a week. During the weekend, at night, and of the working hours, keeping all development environments running\nmay be a huge expense that gives you no benefits. "),Object(a.b)("p",null,"Deployment Rules address this problem very effectively - all you need to do is to define when you need your environments to be running,\nand let us handle the rest. Qovery will start and stop your services for you to make sure your cloud spending is optimized and wise."),Object(a.b)("h4",{id:"using-cheaper-cloud-providers"},"Using cheaper cloud providers"),Object(a.b)("p",null,"Running your development environments on expensive cloud providers might not be the best way to spend your money. Deployment Rules allow you to deploy\nyour development environments to a cheaper cloud account while still keeping your production using the most reliable services provided by the more expensive cloud provider."),Object(a.b)("h2",{id:"rule-levels"},"Rule Levels"),Object(a.b)("p",null,"You can set up your Rules at ",Object(a.b)("strong",{parentName:"p"},"Project")," and ",Object(a.b)("strong",{parentName:"p"},"Environment")," levels. Rules set up at the Project level will be automatically applied to ",Object(a.b)("strong",{parentName:"p"},"newly created")," Environments you target in the rule.\nIf, however, the default settings applied by the Project level rule does not meet your needs, you are allowed to override the settings at the Environment level later on."),Object(a.b)("h2",{id:"project-deployment-rules"},"Project Deployment Rules"),Object(a.b)("p",null,"Declaring deployment rules at the project level allows you to apply reasonable defaults to all newly created environments. After a new environment within a project is created, rules from the Project are applied to the Environment. However, to keep things flexible, Qovery allows you to override the rules after environment creation at the Environment level, in Environment settings."),Object(a.b)("h3",{id:"project-rules-configuration"},"Project Rules Configuration"),Object(a.b)(l.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"Navigate to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Console"))),Object(a.b)("li",null,Object(a.b)("p",null,"Select your project")),Object(a.b)("li",null,Object(a.b)("p",null,"In the environment list, select the tab ",Object(a.b)("strong",{parentName:"p"},"Deployment Rule")," and click ",Object(a.b)("strong",{parentName:"p"},"Add Rule")," button:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/configuration/deployment_rule/deployment_rules_project.png",alt:"Deployment Rules Project"}))),Object(a.b)("li",null,Object(a.b)("h3",{id:"matching-rule-definition"},"Matching rule definition"),Object(a.b)("p",null,"You will have to provide a rule name, description and a ",Object(a.b)("strong",{parentName:"p"},"matching condition"),"."),Object(a.b)("h4",{id:"matching-condition---environment-name"},"Matching Condition - Environment Name"),Object(a.b)("p",null,"This field allows you to specify which environments should be affected by the given deployment rule, based on their name."),Object(a.b)("p",null,"You can either enter the full environment name or use ",Object(a.b)("strong",{parentName:"p"},"Wildcards"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Wildcards")),Object(a.b)("p",null,"Wildcards allows you to build regular expression to match the name of the environments you want your deployment rule to target. "),Object(a.b)("p",null,"You can use the following characters to specify your rule."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"wildcard"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"behavior"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"will match"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"?"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Any one character"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),'"A", "B", "c", "z", etc.')),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"??"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Any two characters"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),'"AA", "AZ", "zz", etc.')),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"???"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Any three characters"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),'"Jet", "AAA", "ccc", etc.')),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"*"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Any characters"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),'"apple", "APPLE", "A100", etc.')),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"*th"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),'Ends in "th"'),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),'"bath", "fourth", etc.')),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"c*"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),'Starts with "c"'),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),'"Cat", "CAB", "cindy", "candy", etc.')),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"?*"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"At least one character"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),'"a", "b", "ab", "ABCD", etc.')),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"???-??"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"5 characters with hypen"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),'"ABC-99","100-ZT", etc.')),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(a.b)("em",{parentName:"td"},"xyz")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),'Contains "xyz"'),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),'"code is XYZ", "100-XYZ", "XyZ90", etc.')))),Object(a.b)("p",null,"For example, the rule ",Object(a.b)("inlineCode",{parentName:"p"},"Prod_Env_*")," will target the environment named:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Prod_Env_1")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Prod_Env_feature"))),Object(a.b)("p",null,"But will not target the environment named: ",Object(a.b)("inlineCode",{parentName:"p"},"Staging_Env_1")),Object(a.b)(i.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,'If you want to apply a rule to the preview envirionments, use the rule "',"[PR]",'*" (since every preview environment name will start with "',"[PR]",'")')),Object(a.b)("h3",{id:"setup-to-apply---general"},"Setup to apply - General"),Object(a.b)("h4",{id:"mode"},"Mode"),Object(a.b)("p",null,"Selecting Mode allows you to labelize the environment. "),Object(a.b)(i.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"To learn more about the environment modes, take a look to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"docs.using-qovery.configuration.environment#type-of-environment"}),"Type of environments")," section.")),Object(a.b)("h4",{id:"cluster"},"Cluster"),Object(a.b)("p",null,"Selecting the cluster allows you to control to which cluster your environments in the project will be deployed to."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example use cases")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"deploy your development environments on a more cost effective cluster"),Object(a.b)("li",{parentName:"ul"},"deploy your environments in multiple regions")),Object(a.b)("h4",{id:"auto-deploy"},"Auto-deploy"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Auto deploy")," feature allows you to control if your applications should be, by default, automatically updated after receiving new commits."),Object(a.b)("h3",{id:"setup-to-apply---start--stop"},"Setup to apply - Start & stop"),Object(a.b)("h4",{id:"auto-delete"},"Auto-delete"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Auto-delete")," feature allows you to control if your applications should be, by default, automatically deleted after branch merging or deletion."),Object(a.b)("h4",{id:"start--stop"},"Start & Stop"),Object(a.b)("p",null,"The start and stop section allow you to precisely set up when the environments inside the project should be deployed and cleaned up."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Use cases examples")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"shut down your development environments during the weekend"),Object(a.b)("li",{parentName:"ul"},"deploy additional environments during peak hours")),Object(a.b)("br",null)))),Object(a.b)("h3",{id:"rules-priority"},"Rules priority"),Object(a.b)("p",null,"Since you can define several rules, it is possible that an environment is targeted by more than one of them.\nIn order to define which rule applies first to your new environments, you can reorder the list of rules in the deployment setting window.\nStarting from the top, the rules are ranked from highest to lowest priority. "),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/configuration/deployment_rule/ordering_deployment_rule.png",alt:"Reorder priority rules"})),Object(a.b)("h2",{id:"environment-deployment-rules"},"Environment Deployment Rules"),Object(a.b)("p",null,"Setting up Deployment Rules at the Enviornment level allows you to make all necessary adjustments applied by your default rules from the Project level."),Object(a.b)("p",null,"Have a look at ","[this section]","[docs.using-qovery.configuration.environment#deployment-rule]","] to know more."))}b.isMDXComponent=!0},408:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},409:function(e,t,n){"use strict";n(411);var r=n(0),o=n.n(r),a=n(408),i=n.n(a);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,a=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return o.a.createElement("div",{className:i()(n,"alert","alert--"+l,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:i()("feather","icon-"+(a||c))}),t)}},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(m,l({ref:t},u,{components:n})):o.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},411:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(412)}),n(74)("fill")},412:function(e,t,n){"use strict";var r=n(27),o=n(75),a=n(26);e.exports=function(e){for(var t=r(this),n=a(t.length),i=arguments.length,l=o(i>1?arguments[1]:void 0,n),c=i>2?arguments[2]:void 0,u=void 0===c?n:o(c,n);u>l;)t[l++]=e;return t}},416:function(e,t,n){"use strict";var r=n(420),o=n(51);function a(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=o({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(o),a,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[a(t,e),"[",r,"]"].join(""):[a(t,e),"[",a(r,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var o=e[r];if(void 0===o)return"";if(null===o)return a(r,t);if(Array.isArray(o)){var i=[];return o.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return a(r,t)+"="+a(o,t)})).filter((function(e){return e.length>0})).join("&"):""}},419:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(408),n(416)),i=n.n(a);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,a=e.hideFeedbackQuestion,l="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+l+" failed",body:"The tutorial on:\n\n"+l+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},u="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(c),s=Object(r.useState)(null),p=s[0],b=s[1];return o.a.createElement("div",{className:"steps steps--h"+n},t,!a&&!p&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:u,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},420:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
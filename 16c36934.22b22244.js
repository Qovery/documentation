/*! For license information please see 16c36934.22b22244.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n(1),r=n(9),i=(n(0),n(462)),a=n(461),c=n(471),l={last_modified_on:"2023-01-06",$schema:"/.meta/.schemas/guides.json",title:"Mono repository",description:"How to deploy applications using Monorepository with Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: guide","technology: qovery"]},p={categories:[{name:"advanced",title:"Advanced",description:"Go beyond the basics, become a Qovery pro, and extract the full potential of Qovery.",permalink:"/guides/advanced"}],coverLabel:"Mono repository",description:"How to deploy applications using Monorepository with Qovery",permalink:"/guides/advanced/monorepository",readingTime:"3 min read",source:"@site/guides/advanced/monorepository.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Mono repository",truncated:!1,prevItem:{title:"Migrate your application from Heroku to AWS",permalink:"/guides/tutorial/migrate-your-application-from-heroku-to-aws"},nextItem:{title:"Preview Environments",permalink:"/guides/advanced/use-preview-environments"}},s=[{value:"Deploying multiple applications using one repository",id:"deploying-multiple-applications-using-one-repository",children:[{value:"First application",id:"first-application",children:[]},{value:"Second application",id:"second-application",children:[]}]},{value:"Deploying application with multiple configurations using one repository",id:"deploying-application-with-multiple-configurations-using-one-repository",children:[{value:"First application",id:"first-application-1",children:[]},{value:"Second application",id:"second-application-1",children:[]}]}],u={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Qovery provides a very simple way of working with ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Monorepo"}),"monorepositories"),".\nYou can deploy multiple applications using the same git repository or deploy the same application in many different modes/configurations."),Object(i.b)("h2",{id:"deploying-multiple-applications-using-one-repository"},"Deploying multiple applications using one repository"),Object(i.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("p",null,"Navigate to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Console"))),Object(i.b)("li",null,Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.qovery.com/guides/getting-started/deploy-your-first-application/"}),"Create new applications")," or navigate to existing ones")),Object(i.b)("li",null,Object(i.b)("p",null,"Navigate to application settings"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/monorepo/monorepo-6.png",alt:"Monorepository"}))),Object(i.b)("li",null,Object(i.b)("p",null,"To deploy multiple apps using one repository, set up the app to target your monorepo. Additionally, you need to set up the folder in which your application resides."),Object(i.b)("h3",{id:"first-application"},"First application"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/monorepo/monorepo-1.png",alt:"Monorepository"})),Object(i.b)("h3",{id:"second-application"},"Second application"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/monorepo/monorepo-2.png",alt:"Monorepository"})),Object(i.b)("p",null,"As you see in the examples above, we used one repository (",Object(i.b)("inlineCode",{parentName:"p"},"poc-factory/tweetifier"),") in two applications:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"timescale"),Object(i.b)("li",{parentName:"ul"},"core")),Object(i.b)("p",null,"All we need to do to deploy multiple applications using one repository is:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Select the application name"),Object(i.b)("li",{parentName:"ul"},"Select our repository"),Object(i.b)("li",{parentName:"ul"},"Select the application root folder")),Object(i.b)("p",null,"That's it. Using monorepositories with Qovery is that simple. "),Object(i.b)("p",null,"Those applications may be a part of the same project or different projects; it's all up to you and your configuration."),Object(i.b)(a.a,{type:"info",mdxType:"Alert"},"Each commit to the repository will make sure all applications affected will be redeployed and up-to-date.")))),Object(i.b)("h2",{id:"deploying-application-with-multiple-configurations-using-one-repository"},"Deploying application with multiple configurations using one repository"),Object(i.b)("p",null,"A special case of monorepository is a situation when one repository is used to deploy multiple applications with the same source code but different configurations or modes. Application behaviour depends on provided config, like environment variables and secrets."),Object(i.b)("p",null,"Qovery supports this case well. The steps do not differ much from the steps from the previous example:"),Object(i.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("p",null,"Navigate to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Console"))),Object(i.b)("li",null,Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.qovery.com/guides/getting-started/deploy-your-first-application/"}),"Create new applications")," or navigate to existing ones")),Object(i.b)("li",null,Object(i.b)("p",null,"Navigate to application settings"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/monorepo/monorepo-6.png",alt:"Monorepository"}))),Object(i.b)("li",null,Object(i.b)("p",null,"Configure application repositories:"),Object(i.b)("h3",{id:"first-application-1"},"First application"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/monorepo/monorepo-3.png",alt:"Monorepository"})),Object(i.b)("h3",{id:"second-application-1"},"Second application"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/monorepo/monorepo-4.png",alt:"Monorepository"}))),Object(i.b)("p",null,"As you see in the examples above, we used one repository (",Object(i.b)("inlineCode",{parentName:"p"},"poc-factory/tweetifier"),") in two applications:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"app-1"),Object(i.b)("li",{parentName:"ul"},"app-2")),Object(i.b)("br",null),Object(i.b)("p",null,"Those applications use the same application root path - ",Object(i.b)("inlineCode",{parentName:"p"},"/"),", so they can be build using the same source code. To adjust the behavior of applications to meet your needs, use ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"environment variables or secrets"),".\nIt allows you to run multiple applications using the same source code in different modes."),Object(i.b)("p",null,"You can set up secret or env variables in your application ",Object(i.b)("inlineCode",{parentName:"p"},"Environment Variables")," section:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/monorepo/monorepo-5.png",alt:"Monorepository"})))))}b.isMDXComponent=!0},460:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&e.push(a)}else if("object"===i)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},461:function(e,t,n){"use strict";n(463);var o=n(0),r=n.n(o),i=n(460),a=n.n(i);n(132);t.a=function(e){var t=e.children,n=e.classNames,o=e.fill,i=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:a()(n,"alert","alert--"+c,{"alert--fill":o,"alert--icon":!1!==i}),role:"alert"},!1!==i&&r.a.createElement("i",{className:a()("feather","icon-"+(i||l))}),t)}},462:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(m,c({ref:t},p,{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},463:function(e,t,n){var o=n(12);o(o.P,"Array",{fill:n(467)}),n(74)("fill")},467:function(e,t,n){"use strict";var o=n(28),r=n(75),i=n(27);e.exports=function(e){for(var t=o(this),n=i(t.length),a=arguments.length,c=r(a>1?arguments[1]:void 0,n),l=a>2?arguments[2]:void 0,p=void 0===l?n:r(l,n);p>c;)t[c++]=e;return t}},470:function(e,t,n){"use strict";var o=n(472),r=n(51);function i(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,o){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===o[e]&&(o[e]={}),o[e][t[1]]=n):o[e]=n};case"bracket":return function(e,n,o){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==o[e]?o[e]=[].concat(o[e],n):o[e]=[n]:o[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=r({arrayFormat:"none"},t)),o=Object.create(null);return"string"!=typeof e?o:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),i=t.length>0?t.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),n(decodeURIComponent(r),i,o)})),Object.keys(o).sort().reduce((function(e,t){var n=o[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):o},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,o){return null===n?[i(t,e),"[",o,"]"].join(""):[i(t,e),"[",i(o,e),"]=",i(n,e)].join("")};case"bracket":return function(t,n){return null===n?i(t,e):[i(t,e),"[]=",i(n,e)].join("")};default:return function(t,n){return null===n?i(t,e):[i(t,e),"=",i(n,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(o){var r=e[o];if(void 0===r)return"";if(null===r)return i(o,t);if(Array.isArray(r)){var a=[];return r.slice().forEach((function(e){void 0!==e&&a.push(n(o,e,a.length))})),a.join("&")}return i(o,t)+"="+i(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},471:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=(n(460),n(470)),a=n.n(i);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,i=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},p="https://github.com/qovery/documentation/issues/new?"+a.a.stringify(l),s=Object(o.useState)(null),u=s[0],b=s[1];return r.a.createElement("div",{className:"steps steps--h"+n},t,!i&&!u&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:p,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==u&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},472:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
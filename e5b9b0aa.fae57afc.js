/*! For license information please see e5b9b0aa.fae57afc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{430:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),o=(r(0),r(457)),i=(r(464),r(461),r(456)),c={last_modified_on:"2023-06-07",$schema:"/.meta/.schemas/guides.json",title:"Migration",description:"Learn how to migrate your applications with Qovery",author_github:"https://github.com/evoxmusic",tags:["type: guide","technology: qovery"]},u={categories:[{name:"advanced",title:"Advanced",description:"Go beyond the basics, become a Qovery pro, and extract the full potential of Qovery.",permalink:"/guides/advanced"}],coverLabel:"Migration",description:"Learn how to migrate your applications with Qovery",permalink:"/guides/advanced/migration",readingTime:"2 min read",source:"@site/guides/advanced/migration.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Migration",truncated:!1,prevItem:{title:"Migrate your application from Heroku to AWS",permalink:"/guides/tutorial/migrate-your-application-from-heroku-to-aws"},nextItem:{title:"Minimize downtime while upgrading RDS instances",permalink:"/guides/advanced/upgrading-rds-instance"}},s=[{value:"Resources",id:"resources",children:[]},{value:"Migration assistance",id:"migration-assistance",children:[]},{value:"Q&amp;A",id:"qa",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You plan to migrate to AWS (Amazon Web Services), GCP (Google Cloud Platform) or Microsoft Azure with Qovery? This guide is for you."),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("p",null,"Here are some resources you can use to migrate your applications to your favorite cloud provider with Qovery."),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Are you migrating from Digital Ocean, OVH, Netlify or any other cloud provider? You can use the same resources to migrate your applications. Qovery provides the same features for all cloud providers.")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Title"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Author"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/guides/tutorial/migrate-your-application-from-heroku-to-aws/"}),"Migrate from Heroku to AWS")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/guides/tutorial/migrate-your-application-from-heroku-to-aws/"}),"Complete guide to migrate from Heroku to AWS with Qovery")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Migration checklist"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Comprehensive migration checklist to read before migrating your applications with Qovery (coming soon)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://discuss.qovery.com/search?q=migration"}),"Forum")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://discuss.qovery.com/search?q=migration"}),'List "Migration" threads from Qovery community forum')),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Community")))),Object(o.b)("h2",{id:"migration-assistance"},"Migration assistance"),Object(o.b)("p",null,"Qovery provides a migration assistance to help you migrate your applications with Qovery. Contact us via the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/System_console"}),"Qovery Console")," and ask for migration assistance via the chat."),Object(o.b)("h2",{id:"qa"},"Q&A"),Object(o.b)("p",null,"Do you need more examples? Do you have any questions? Feel free to ask on our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"Community forum"),"."))}p.isMDXComponent=!0},455:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},456:function(e,t,r){"use strict";r(458);var n=r(0),a=r.n(n),o=r(455),i=r.n(o);r(132);t.a=function(e){var t=e.children,r=e.classNames,n=e.fill,o=e.icon,c=e.type,u=null;switch(c){case"danger":u="alert-triangle";break;case"success":u="check-circle";break;case"warning":u="alert-triangle";break;default:u="info"}return a.a.createElement("div",{className:i()(r,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||u))}),t)}},457:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return r?a.a.createElement(b,c({ref:t},s,{components:r})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},458:function(e,t,r){var n=r(12);n(n.P,"Array",{fill:r(459)}),r(74)("fill")},459:function(e,t,r){"use strict";var n=r(27),a=r(75),o=r(26);e.exports=function(e){for(var t=n(this),r=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,r),u=i>2?arguments[2]:void 0,s=void 0===u?r:a(u,r);s>c;)t[c++]=e;return t}},460:function(e,t,r){var n=r(28).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||r(10)&&n(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},461:function(e,t,r){"use strict";r(460);var n=r(0),a=r.n(n),o=r(456);t.a=function(e){var t=e.children,r=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",r||"page"," assumes the following:"),t)}},463:function(e,t,r){"use strict";var n=r(467),a=r(51);function o(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t=a({arrayFormat:"none"},t)),n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),r(decodeURIComponent(a),o,n)})),Object.keys(n).sort().reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(r):e[t]=r,e}),Object.create(null))):n},t.stringify=function(e,t){var r=function(e){switch(e.arrayFormat){case"index":return function(t,r,n){return null===r?[o(t,e),"[",n,"]"].join(""):[o(t,e),"[",o(n,e),"]=",o(r,e)].join("")};case"bracket":return function(t,r){return null===r?o(t,e):[o(t,e),"[]=",o(r,e)].join("")};default:return function(t,r){return null===r?o(t,e):[o(t,e),"=",o(r,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var a=e[n];if(void 0===a)return"";if(null===a)return o(n,t);if(Array.isArray(a)){var i=[];return a.slice().forEach((function(e){void 0!==e&&i.push(r(n,e,i.length))})),i.join("&")}return o(n,t)+"="+o(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},464:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=(r(455),r(463)),i=r.n(o);r(133);t.a=function(e){var t=e.children,r=e.headingDepth,o=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,u={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(u),l=Object(n.useState)(null),p=l[0],m=l[1];return a.a.createElement("div",{className:"steps steps--h"+r},t,!o&&!p&&a.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",a.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return m("yes")}},"Yes"),"\xa0\xa0",a.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&a.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",a.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},467:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
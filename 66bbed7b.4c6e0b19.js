/*! For license information please see 66bbed7b.4c6e0b19.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{251:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),o=(n(0),n(400)),i=n(409),c=n(404),l=n(399),s={last_modified_on:"2023-06-05",$schema:"/.meta/.schemas/guides.json",title:"Microservices",description:"How to deploy microservices with Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: guide","technology: qovery"]},p={categories:[{name:"advanced",title:"Advanced",description:"Go beyond the basics, become a Qovery pro, and extract the full potential of Qovery.",permalink:"/guides/advanced"}],coverLabel:"Microservices",description:"How to deploy microservices with Qovery",permalink:"/guides/advanced/microservices",readingTime:"6 min read",source:"@site/guides/advanced/microservices.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Microservices",truncated:!1,prevItem:{title:"Managing Environment Variables in React (create-react-app)",permalink:"/guides/tutorial/managing-env-variables-in-create-react-app"},nextItem:{title:"Migrate your application from Heroku to AWS",permalink:"/guides/tutorial/migrate-your-application-from-heroku-to-aws"}},u=[{value:"Deploy Application A",id:"deploy-application-a",children:[{value:"Exposing public API",id:"exposing-public-api",children:[]}]},{value:"Deploy Application B",id:"deploy-application-b",children:[]},{value:"Deploy Database",id:"deploy-database",children:[]},{value:"Use the database",id:"use-the-database",children:[]},{value:"Consume internal APIs",id:"consume-internal-apis",children:[]},{value:"Consume the public API in the frontend application",id:"consume-the-public-api-in-the-frontend-application",children:[]},{value:"Summary",id:"summary",children:[]},{value:"Q&amp;A",id:"qa",children:[]}],b={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have already deployed an application with Qovery"),Object(o.b)("li",{parentName:"ul"},"You are familiar with the concept of Microservices"))),Object(o.b)("p",null,"In this guide, we'll deploy a set of microservices, a database and a frontend UI application that consumes our public API.\nOur backend microservices will communicate on a secure internal network, not accessible from the outside.\nOur front-end application will consume the API only from the publicly exposed application."),Object(o.b)("p",null,"The schema of what we want to achieve:"),Object(o.b)("p",{align:"left"},Object(o.b)("img",{src:"/img/micro/micros.jpg",alt:"Microservices"})),Object(o.b)("p",null,"As you can see in the picture:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"we have two backend applications (",Object(o.b)("strong",{parentName:"li"},"App A")," and ",Object(o.b)("strong",{parentName:"li"},"App B"),")"),Object(o.b)("li",{parentName:"ul"},"one of them (",Object(o.b)("strong",{parentName:"li"},"App B"),") connected to a database"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"App A")," exposes a public API that is consumed by API clients (our frontend application run in users browsers)."),Object(o.b)("li",{parentName:"ul"},"additionally, we host our frontend application (",Object(o.b)("strong",{parentName:"li"},"UI"),") on Qovery so that users can access it directly in their browsers.")),Object(o.b)("p",null,"What differentiates Qovery from most other similar platforms is its first-class support of microservices. At Qovery, your project can be easily\ncomposed of multiple applications. It's up to you to decide how to build your system, but Qovery enables you to easily and safely communicate between your backend applications, databases, and frontend websites."),Object(o.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("h2",{id:"deploy-application-a"},"Deploy Application A"),Object(o.b)(l.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"This guide assumes you already know how to deploy applications. If you have any problems, refer to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/getting-started/deploy-your-first-application/"}),"this video guide"),".")),Object(o.b)("p",null,"In the first step, deploy an application named ",Object(o.b)("strong",{parentName:"p"},"APP_A")," in your environment."),Object(o.b)("p",null,"Assumptions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The app exposes REST API over HTTP on port 8080"),Object(o.b)("li",{parentName:"ul"},"The app name is ",Object(o.b)("strong",{parentName:"li"},"APP_A"))),Object(o.b)("p",null,"After the application is created, let's expose the API publicly - it will be used later on by our frontend application."),Object(o.b)("h3",{id:"exposing-public-api"},"Exposing public API"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Navigate to ",Object(o.b)("strong",{parentName:"li"},"APP_A")," application settings"),Object(o.b)("li",{parentName:"ul"},"Select ",Object(o.b)("strong",{parentName:"li"},"Port")),Object(o.b)("li",{parentName:"ul"},"Add port 8080")),Object(o.b)("p",{align:"left"},Object(o.b)("img",{src:"/img/micro/micros-1.png",alt:"Microservices"})),Object(o.b)("p",null,"This is it. By default, Qovery exposes your ports publicly over HTTPS on port 443, so the app should be publicly accessible and reachable later on by our frontend application.")),Object(o.b)("li",null,Object(o.b)("h2",{id:"deploy-application-b"},"Deploy Application B"),Object(o.b)("p",null,"In the second step, deploy an application named ",Object(o.b)("strong",{parentName:"p"},"APP_B")," in your environment."),Object(o.b)("p",null,"Assumptions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The app exposes REST API over HTTP on port 8080"),Object(o.b)("li",{parentName:"ul"},"The app name is ",Object(o.b)("strong",{parentName:"li"},"APP_B")),Object(o.b)("li",{parentName:"ul"},"The app is ready to use a PostgreSQL client to connect to a PostgreSQL database")),Object(o.b)("p",null,"Steps to do:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Navigate to ",Object(o.b)("strong",{parentName:"li"},"APP_B")," application settings"),Object(o.b)("li",{parentName:"ul"},"Select ",Object(o.b)("strong",{parentName:"li"},"Port")),Object(o.b)("li",{parentName:"ul"},"Add port 8080"),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"Advanced")," settings in the 8080 port"),Object(o.b)("li",{parentName:"ul"},"Remove the check from the ",Object(o.b)("strong",{parentName:"li"},"Publicly Accessible")," field")),Object(o.b)("p",{align:"left"},Object(o.b)("img",{src:"/img/micro/micros-2.png",alt:"Microservices"})),Object(o.b)(l.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"It will make your ",Object(o.b)("strong",{parentName:"p"},"APP_B")," application not reachable publicly. It will be only reachable on the internal network by other microservices in your environment."))),Object(o.b)("li",null,Object(o.b)("h2",{id:"deploy-database"},"Deploy Database"),Object(o.b)("p",null,"In this step, we'll deploy a PostgreSQL database that we'll consume in ",Object(o.b)("strong",{parentName:"p"},"APP_B")," in the next step."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Navigate to the environment in which you previously deployed your apps"),Object(o.b)("li",{parentName:"ul"},"Create a new PostgreSQL database named ",Object(o.b)("strong",{parentName:"li"},"MY_DB"))),Object(o.b)(l.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"This guide assumes you already know how to deploy databases. If you have any problems, refer to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/getting-started/create-a-database/"}),"this video guide"),"."))),Object(o.b)("li",null,Object(o.b)("h2",{id:"use-the-database"},"Use the database"),Object(o.b)("p",null,"In this step, we'll make use of our database in ",Object(o.b)("strong",{parentName:"p"},"APP_B")),Object(o.b)("p",null,"All you need to do to consume your database in ",Object(o.b)("strong",{parentName:"p"},"APP_B")," is to configure your PostgreSQL client to use ",Object(o.b)("inlineCode",{parentName:"p"},"BUILT_IN")," secrets injected by Qovery.\nYou can read more about this concept ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/#connecting-to-a-database"}),"here"),"."),Object(o.b)("p",null,"If your ",Object(o.b)("strong",{parentName:"p"},"APP_B")," is a Node.js application, this examplary code snippet will work well:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const { Client } = require('pg')\n\nconst client = new Client({\n  host: process.env.QOVERY_DATABASE_MY_DB_HOST,\n  port: process.env.QOVERY_DATABASE_MY_DB_PORT,\n  user: process.env.QOVERY_DATABASE_MY_DB_USER,\n  password: process.env.QOVERY_DATABASE_MY_DB_PASSWORD,\n})\n\nclient.connect(err => {\n  if (err) {\n    console.error('connection error', err.stack)\n  } else {\n    console.log('connected')\n  }\n})\n")),Object(o.b)("p",null,"This is it! After deploying the database, application and executing the code snippet, you should see the message ",Object(o.b)("inlineCode",{parentName:"p"},"connected"),"."),Object(o.b)("p",null,"We made use of ",Object(o.b)("inlineCode",{parentName:"p"},"BUILT_IN")," variables injected by Qovery to make it easy to consume all the services within the environment.")),Object(o.b)("li",null,Object(o.b)("h2",{id:"consume-internal-apis"},"Consume internal APIs"),Object(o.b)("p",null,"In this step, we'll use the private API of our ",Object(o.b)("strong",{parentName:"p"},"APP_B")," in our ",Object(o.b)("strong",{parentName:"p"},"APP_A")," over a private network.\nWe have already configured everything to make it work. The only missing step is the configuration in ",Object(o.b)("strong",{parentName:"p"},"APP_A")," - it needs to know how to access our ",Object(o.b)("strong",{parentName:"p"},"APP_B"),"."),Object(o.b)("p",null,"In the example below, we'll use Node.js and ",Object(o.b)("inlineCode",{parentName:"p"},"axios")," to create an HTTP client able to consume the API of ",Object(o.b)("strong",{parentName:"p"},"APP_B"),":"),Object(o.b)("p",null,"Now, you can configure your HTTP client in the frontend application to target your backend API:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const axios = require('axios');\nconst appBAddress = \"http://\" + process.env.QOVERY_APPLICATION_APP_B_HOST + \":\" + process.env.QOVERY_APPLICATION_APP_B_PORT\n\naxios.get(appBAddress + '/api/users')\n  .then(response => {\n    console.log(response.data);\n  })\n  .catch(error => {\n    console.log(error);\n  });\n")),Object(o.b)("p",null,"This is it! ",Object(o.b)("strong",{parentName:"p"},"Every request using the API client we have just configured will consume the API of "),"APP_B",Object(o.b)("strong",{parentName:"p"}," over the secure, internal network.")),Object(o.b)("p",null,"Once again, we used the ",Object(o.b)("inlineCode",{parentName:"p"},"BUILT_IN")," secrets. Read more about them ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/#connecting-to-another-application"}),"here"))),Object(o.b)("li",null,Object(o.b)("h2",{id:"consume-the-public-api-in-the-frontend-application"},"Consume the public API in the frontend application"),Object(o.b)("p",null,"In this step, we'll deploy a frontend application and consume our public API exposed by ",Object(o.b)("strong",{parentName:"p"},"APP_A"),"."),Object(o.b)("p",null,"In the first step, create your frontend application."),Object(o.b)("p",null,"After the application is created, we can easily configure it to consume our public API. All we need to do is to make use of the ",Object(o.b)("inlineCode",{parentName:"p"},"BUILT_IN")," secrets. See how to achieve it in a Nuxt.js example below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"export default {\n  env: {\n    apiUrl: process.env.QOVERY_APPLICATION_APP_A_URL\n  }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import axios from 'axios'\n\nexport default axios.create({\n  baseURL: process.env.apiUrl\n})\n")),Object(o.b)("p",null,"After providing the configuration from above, deploy your frontend application."),Object(o.b)("p",null,"Now our frontend application will be able to consume the API exposed by the publicly exposed ",Object(o.b)("strong",{parentName:"p"},"APP_A"),".")))),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("p",null,"In this guide, we deployed two microservices that communicate over the internal network. We also deployed a frontend application that makes use of a public API exposed by one of our applications. At the same time, we deployed a database and connected it to the second of our backend microservices."),Object(o.b)("h2",{id:"qa"},"Q&A"),Object(o.b)("p",null,"Do you have any questions? Feel free to ask on our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"Community forum"),"."))}d.isMDXComponent=!0},398:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},399:function(e,t,n){"use strict";n(401);var a=n(0),r=n.n(a),o=n(398),i=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":a,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},400:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,c({ref:t},s,{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},401:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(402)}),n(74)("fill")},402:function(e,t,n){"use strict";var a=n(27),r=n(75),o=n(26);e.exports=function(e){for(var t=a(this),n=o(t.length),i=arguments.length,c=r(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,s=void 0===l?n:r(l,n);s>c;)t[c++]=e;return t}},403:function(e,t,n){var a=n(28).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},404:function(e,t,n){"use strict";n(403);var a=n(0),r=n.n(a),o=n(399);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},408:function(e,t,n){"use strict";var a=n(410),r=n(51);function o(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,a){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=n):a[e]=n};case"bracket":return function(e,n,a){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],n):a[e]=[n]:a[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=r({arrayFormat:"none"},t)),a=Object.create(null);return"string"!=typeof e?a:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(r),o,a)})),Object.keys(a).sort().reduce((function(e,t){var n=a[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):a},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,a){return null===n?[o(t,e),"[",a,"]"].join(""):[o(t,e),"[",o(a,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(a){var r=e[a];if(void 0===r)return"";if(null===r)return o(a,t);if(Array.isArray(r)){var i=[];return r.slice().forEach((function(e){void 0!==e&&i.push(n(a,e,i.length))})),i.join("&")}return o(a,t)+"="+o(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},409:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=(n(398),n(408)),i=n.n(o);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(l),p=Object(a.useState)(null),u=p[0],b=p[1];return r.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!u&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==u&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},410:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
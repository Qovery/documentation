/*! For license information please see 0881099a.fb0054c8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{159:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(9),o=(a(0),a(364)),i=a(369),l=a(373),c=(a(363),a(368)),s={last_modified_on:"2021-09-04",$schema:"/.meta/.schemas/guides.json",title:"How to deploy a full-stack application composed of Hasura, PostgreSQL and Angular",description:"State of the art full-stack application deployment with Qovery",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","framework: hasura","language: javascript","database: postgresql"],hide_pagination:!0},u={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How to deploy a full-stack application composed of Hasura, PostgreSQL and Angular",description:"State of the art full-stack application deployment with Qovery",permalink:"/guides/tutorial/deploy-fullstack-application-composed-of-hasura-postgresql-angular",readingTime:"6 min read",source:"@site/guides/tutorial/deploy-fullstack-application-composed-of-hasura-postgresql-angular.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"framework: hasura",permalink:"/guides/tags/framework-hasura"},{label:"language: javascript",permalink:"/guides/tags/language-javascript"},{label:"database: postgresql",permalink:"/guides/tags/database-postgresql"}],title:"How to deploy a full-stack application composed of Hasura, PostgreSQL and Angular",truncated:!1,prevItem:{title:"How to create and deploy a Discord bot in Python",permalink:"/guides/tutorial/create-and-deploy-python-discord-bot"},nextItem:{title:"How to deploy a Rust REST API application on AWS with ease",permalink:"/guides/tutorial/how-to-deploy-a-rust-rest-api-application-on-aws-with-ease"}},p=[{value:"What is...",id:"what-is",children:[{value:"Hasura",id:"hasura",children:[]},{value:"PostgreSQL",id:"postgresql",children:[]},{value:"Angular",id:"angular",children:[]},{value:"Qovery",id:"qovery",children:[]},{value:"Full-stack application",id:"full-stack-application",children:[]}]},{value:"Hasura and PostgreSQL",id:"hasura-and-postgresql",children:[{value:"Quick deployment",id:"quick-deployment",children:[]},{value:"Hasura web interface",id:"hasura-web-interface",children:[]}]},{value:"Angular",id:"angular-1",children:[{value:"GraphQL client",id:"graphql-client",children:[]},{value:"Quick deployment",id:"quick-deployment-1",children:[]}]},{value:"Deploy your application",id:"deploy-your-application",children:[]},{value:"Demo",id:"demo",children:[]},{value:"Beyond application deployment",id:"beyond-application-deployment",children:[]},{value:"Wrapping-up",id:"wrapping-up",children:[]}],b={rightToc:p};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this article, I will show you how to deploy a full-stack application with Angular for the frontend, with Hasura and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org"}),"PostgreSQL")," for the backend.\nIn the end, our application will be available within development and production environments, which makes it convenient to make code changes without putting down the production."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/deploy-fullstack-application-composed-of-hasura-postgresql-angular/fullstack_with_background.jpg",alt:"Full-stack application Hasura, Angular and PostgreSQL with Qovery"})),Object(o.b)("p",null,"To show all of that, we will create a food application to find out the best Parisian restaurants."),Object(o.b)("h2",{id:"what-is"},"What is..."),Object(o.b)("h3",{id:"hasura"},"Hasura"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://hasura.io"}),"Hasura")," is a Turnkey ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphql.org"}),"GraphQL API")," backend - Meaning, you don't need to write any code to have a ready GraphQL API. Hasura stores all the data into a PostgreSQL database. What's interesting, is that Hasura manages the database for you, all the setup is done automatically. Hasura is extensible and lets you integrate with your other applications, through a well-designed hook system (Actions/Events)."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/deploy-fullstack-application-composed-of-hasura-postgresql-angular/hasura-graphic.jpg",alt:"Hasura Graphic"})),Object(o.b)("h3",{id:"postgresql"},"PostgreSQL"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org"}),"PostgreSQL")," is one of the most famous open-source SQL database - very useful for storing application data efficiently. It will be used by Hasura behind the scene to store the data."),Object(o.b)("h3",{id:"angular"},"Angular"),Object(o.b)("p",null,"You may have already heard about ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://angular.io"}),"Angular"),". It is one of the most popular JavaScript frameworks, that developers use to build dynamic websites. We will use it to display the raw data from our GraphQL API made with Hasura."),Object(o.b)("h3",{id:"qovery"},"Qovery"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.qovery.com"}),"Qovery")," is a Container as a Service platform that helps developers deploy their applications in the Cloud in just a few seconds. Qovery is designed to deploy stateless and stateful applications - like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/database/"}),"databases"),", and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/object-storage/"}),"storage"),". And all of this, on any Cloud providers; More specifically AWS (Amazon Web Services), GCP (Google Cloud Platform), and Azure (Microsoft Cloud)."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/deploy-fullstack-application-composed-of-hasura-postgresql-angular/qovery_with_background.jpg",alt:"Qovery integrated with gitlab, github and bitbucket. And integrated with the Cloud providers"})),Object(o.b)("h3",{id:"full-stack-application"},"Full-stack application"),Object(o.b)("p",null,'A full-stack application refers to multiple applications working all-together as a single one. From frontend (customer or user-facing) to the backend (the "behind-the-scenes" technology such as databases and internal architecture) and the software code that connects the two (middleware). In our case, our backend is Hasura, our database PostgreSQL and our frontend Angular. From the application user point of view, this is seen as a single application.'),Object(o.b)("h1",{id:"tutorial"},"Tutorial"),Object(o.b)(c.a,{mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You host your code on ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com"}),"Github")," or ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://gitlab.com"}),"Gitlab")),Object(o.b)("li",{parentName:"ul"},"You have signed up to ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://start.qovery.com"}),"Qovery")))),Object(o.b)("h2",{id:"hasura-and-postgresql"},"Hasura and PostgreSQL"),Object(o.b)("h3",{id:"quick-deployment"},"Quick deployment"),Object(o.b)("p",null,"To deploy Hasura to Qovery, follow steps from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/tutorial/graphql-api-with-hasura/#hasura-deployment-on-qovery"}),"this guide"),"."),Object(o.b)("h3",{id:"hasura-web-interface"},"Hasura web interface"),Object(o.b)("p",null,"Once the Hasura application and the PostgreSQL database running, we can get access to the Hasura web interface to set-up our GraphQL API."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/deploy-fullstack-application-composed-of-hasura-postgresql-angular/hasura_web_interface.png",alt:"Hasura web interface to configure the data model"})),Object(o.b)("p",null,"To open the application in your browser, click on ",Object(o.b)("strong",{parentName:"p"},"Action")," and ",Object(o.b)("strong",{parentName:"p"},"Open")," buttons in your application overview:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/deploy-env-1.png",alt:"Open App"})),Object(o.b)("h2",{id:"angular-1"},"Angular"),Object(o.b)("h3",{id:"graphql-client"},"GraphQL client"),Object(o.b)(c.a,{mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have installed the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://cli.angular.io"}),"angular CLI")))),Object(o.b)("p",null,"Ok, now let's deploy our Angular application. We need to use a GraphQL client to connect to our server. We'll use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.apollographql.com"}),"Apollo")," by running in our shell:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ ng add apollo-angular\n")),Object(o.b)("p",null,"Then, we link the client to our server by modifying the ",Object(o.b)("em",{parentName:"p"},"uri")," variable into ",Object(o.b)("inlineCode",{parentName:"p"},"src/app/graphql.module.ts"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="src/app/graphql.module.ts"',title:'"src/app/graphql.module.ts"'}),'//...\nconst uri = "https://api.tld.com";\n//...\n')),Object(o.b)("p",null,"You can find the correct URL in Hasura application Environment Variable section (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"learn more about env variables"),")."),Object(o.b)("p",null,"Finally, we can now fetch data from our GraphQL backend with the following code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import { Apollo } from "apollo-angular";\n//...\nexport class HomeComponent implements OnInit {\n    //...\n    ngOnInit() {\n      const gquery = "..."; // graphql query\n      this.apollo.query<any>({query: gquery}).subscribe(({ data, loading }) => {\n          // response with the data...\n      });\n    }\n    //...\n}\n')),Object(o.b)("h3",{id:"quick-deployment-1"},"Quick deployment"),Object(o.b)(l.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("p",null,"Create a Github or Gitlab repository with the sample code")),Object(o.b)("li",null,Object(o.b)("p",null,"Add a new application linked to your repository. If you don't know how to create a new app, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/getting-started/deploy-your-first-application/#step-by-step-tutorial"}),"check our guide"),".")),Object(o.b)("h2",{id:"deploy-your-application"},"Deploy your application"),Object(o.b)("p",null,"All you have to do now is to navigate to your application and click ",Object(o.b)("strong",{parentName:"p"},"Deploy")," button"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/heroku/heroku-1.png",alt:"Deploy App"})),Object(o.b)("p",null,"That's it. Watch the status and wait till the app is deployed."))),Object(o.b)("h2",{id:"demo"},"Demo"),Object(o.b)("p",null,"Now, let's look at the final result..."),Object(o.b)("div",{class:"video-container"},Object(o.b)("p",{align:"center"},Object(o.b)("iframe",{width:"800",height:"600",src:"https://www.youtube.com/embed/nmtLfzSDlPM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),Object(o.b)("h2",{id:"beyond-application-deployment"},"Beyond application deployment"),Object(o.b)("p",null,"Application deployment is one part of what Qovery provides. Qovery helps development teams to better collaborate altogether by cloning ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"environment")," and creating ephemeral environments on Pull Requests. Plus, deploying on its own Cloud account is available for business plans - and last, but not least, a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/interface/web-interface/"}),"web interface")," will be available very soon."),Object(o.b)("h2",{id:"wrapping-up"},"Wrapping-up"),Object(o.b)("p",null,"In this tutorial, we saw how to deploy a full-stack application composed of a frontend, backend, and a database. We saw how Qovery perfectly fits Hasura and make it publicly available in a couple of seconds. So ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"join us on Qovery")," to deploy your next full-stack project :)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Resources")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://angular.io/"}),"Angular")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://hasura.io/"}),"Hasura")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.postgresql.org/"}),"PostgreSQL")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://material.angular.io/"}),"Angular - Material Design"))),Object(o.b)(i.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}d.isMDXComponent=!0},362:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===o)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},363:function(e,t,a){"use strict";a(366);var n=a(0),r=a.n(n),o=a(362),i=a.n(o);a(131);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,o=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:i()(a,"alert","alert--"+l,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:i()("feather","icon-"+(o||c))}),t)}},364:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return a?r.a.createElement(h,l({ref:t},s,{components:a})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},365:function(e,t,a){"use strict";var n=a(1),r=a(0),o=a.n(r),i=a(39),l=a(370),c=a(19),s=a.n(c);t.a=function(e){var t,a=e.to,c=e.href,u=a||c,p=Object(l.a)(u),b=Object(r.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,p]),u&&p?o.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(u),b.current=!0)},innerRef:function(e){var a,n;d&&e&&p&&(a=e,n=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:u})):o.a.createElement("a",Object(n.a)({},e,{href:u}))}},366:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(371)}),a(74)("fill")},367:function(e,t,a){var n=a(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},368:function(e,t,a){"use strict";a(367);var n=a(0),r=a.n(n),o=a(363);t.a=function(e){var t=e.children,a=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},369:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(365),i=a(362),l=a.n(i);a(132);t.a=function(e){var t=e.children,a=e.className,n=e.badge,i=e.leftIcon,c=e.rightIcon,s=e.size,u=e.target,p=e.to,b=l()("jump-to","jump-to--"+s,a),d=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},i&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+i})),r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return u?r.a.createElement("a",{href:p,target:u,className:b},d):r.a.createElement(o.a,{to:p,className:b},d)}},370:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},371:function(e,t,a){"use strict";var n=a(27),r=a(75),o=a(26);e.exports=function(e){for(var t=n(this),a=o(t.length),i=arguments.length,l=r(i>1?arguments[1]:void 0,a),c=i>2?arguments[2]:void 0,s=void 0===c?a:r(c,a);s>l;)t[l++]=e;return t}},372:function(e,t,a){"use strict";var n=a(375),r=a(51);function o(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var a=function(e){var t;switch(e.arrayFormat){case"index":return function(e,a,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=a):n[e]=a};case"bracket":return function(e,a,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=[a]:n[e]=a};default:return function(e,t,a){void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t=r({arrayFormat:"none"},t)),n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),a(decodeURIComponent(r),o,n)})),Object.keys(n).sort().reduce((function(e,t){var a=n[t];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(a):e[t]=a,e}),Object.create(null))):n},t.stringify=function(e,t){var a=function(e){switch(e.arrayFormat){case"index":return function(t,a,n){return null===a?[o(t,e),"[",n,"]"].join(""):[o(t,e),"[",o(n,e),"]=",o(a,e)].join("")};case"bracket":return function(t,a){return null===a?o(t,e):[o(t,e),"[]=",o(a,e)].join("")};default:return function(t,a){return null===a?o(t,e):[o(t,e),"=",o(a,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var r=e[n];if(void 0===r)return"";if(null===r)return o(n,t);if(Array.isArray(r)){var i=[];return r.slice().forEach((function(e){void 0!==e&&i.push(a(n,e,i.length))})),i.join("&")}return o(n,t)+"="+o(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},373:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(362),a(372)),i=a.n(o);a(133);t.a=function(e){var t=e.children,a=e.headingDepth,o=e.hideFeedbackQuestion,l="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+l+" failed",body:"The tutorial on:\n\n"+l+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(c),u=Object(n.useState)(null),p=u[0],b=u[1];return r.a.createElement("div",{className:"steps steps--h"+a},t,!o&&!p&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},375:function(e,t,a){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
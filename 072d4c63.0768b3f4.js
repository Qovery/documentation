/*! For license information please see 072d4c63.0768b3f4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{157:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(1),r=t(9),i=(t(0),t(458)),o=(t(457),t(462),t(464),{last_modified_on:"2021-12-27",$schema:"/.meta/.schemas/guides.json",title:"Managing Environment Variables in React (create-react-app)",description:"How to manage environemnt variables in applications bootstrapped with create-react-app",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial","language: javascript"],hide_pagination:!0}),c={categories:[{name:"tutorial",title:"Tutorial",description:"Step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Managing Environment Variables in React (create-react-app)",description:"How to manage environemnt variables in applications bootstrapped with create-react-app",permalink:"/guides/tutorial/managing-env-variables-in-create-react-app",readingTime:"5 min read",source:"@site/guides/tutorial/managing-env-variables-in-create-react-app.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"language: javascript",permalink:"/guides/tags/language-javascript"}],title:"Managing Environment Variables in React (create-react-app)",truncated:!1,prevItem:{title:"Kubernetes observability and monitoring with Datadog",permalink:"/guides/tutorial/kubernetes-observability-and-monitoring-with-datadog"},nextItem:{title:"Microservices",permalink:"/guides/advanced/microservices"}},l=[{value:"Code Repository",id:"code-repository",children:[]},{value:"Environment Variables",id:"environment-variables",children:[{value:"Warning!",id:"warning",children:[]}]},{value:"Deployment",id:"deployment",children:[]},{value:"Adding Environment Variable",id:"adding-environment-variable",children:[]},{value:"Going Prod",id:"going-prod",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this short guide, we'll go trough managing Secrets/Environment Variables in React applications created using ",Object(i.b)("inlineCode",{parentName:"p"},"create-react-app")," and deployed on Qovery."),Object(i.b)("p",null,"Most of the guides you can find online propose quite complex solutions with creating your own bash scripts to set up env variables in apps created by ",Object(i.b)("inlineCode",{parentName:"p"},"create-react-app")," - this guide will show you an easier alternative and a way to Dockerize your React app in production-ready way."),Object(i.b)("h2",{id:"code-repository"},"Code Repository"),Object(i.b)("p",null,"In this guide we'll use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pjeziorowski/cra-test"}),"https://github.com/pjeziorowski/cra-test")," repository - it's a sample application bootstrapped using ",Object(i.b)("inlineCode",{parentName:"p"},"npx create-react-app my-app")," command."),Object(i.b)("p",null,"After the application structure is generated, we dockerize the application by adding a ",Object(i.b)("inlineCode",{parentName:"p"},"Dockerfile")," with the following content:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'# Docker Image which is used as foundation to create\n# a custom Docker Image with this Dockerfile\nFROM node:10\n\n# A directory within the virtualized Docker environment\nWORKDIR /usr/src/app\n\n# Copies package.json and package-lock.json to Docker environment\nCOPY package*.json ./\n\n# Installs all node packages\nRUN npm install\n\n# Copies everything over to Docker environment\nCOPY . .\n\n# Uses port which is used by the actual application\nEXPOSE 3000\n\n# Finally runs the application\nCMD [ "npm", "start" ]\n')),Object(i.b)("p",null,"One more little thing that we change is creating a new constant that uses a value of ",Object(i.b)("inlineCode",{parentName:"p"},"REACT_APP_MSG")," environment variable to print a text on the website:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const msg = process.env.REACT_APP_MSG\n")),Object(i.b)("p",null,"And then, we print it in the UI:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<a\n    className="App-link"\n    href="https://reactjs.org"\n    target="_blank"\n    rel="noopener noreferrer"\n  >\n    {msg}\n</a>\n')),Object(i.b)("h2",{id:"environment-variables"},"Environment Variables"),Object(i.b)("p",null,"Let's now add a ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file for the default environment variables for our React app. For this, we create a ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file with the content:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'HOST="0.0.0.0"\nPORT="3000"\nREACT_APP_MSG="From .env"\n')),Object(i.b)("h3",{id:"warning"},"Warning!"),Object(i.b)("p",null,"For all custom environment variables in apps created via ",Object(i.b)("inlineCode",{parentName:"p"},"create-react-app"),", we need to use ",Object(i.b)("inlineCode",{parentName:"p"},"REACT_APP_")," prefix in env var names - it's a requirement, if we don't follow the convention, variables will not be accessible in our application!"),Object(i.b)("p",null,"Also, remember that all the values are accessible on the client-side (browser). You should not use it for any data that your users should not access in the browser."),Object(i.b)("h2",{id:"deployment"},"Deployment"),Object(i.b)("p",null,"Before overriding the default env vars hardcoded in our repository using Qovery, let's first deploy the app."),Object(i.b)("p",null,"To do so, add a new application using the code from previous steps. When configuring the application, don't forget to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use ",Object(i.b)("inlineCode",{parentName:"li"},"Docker")," build mode"),Object(i.b)("li",{parentName:"ul"},"Add port ",Object(i.b)("inlineCode",{parentName:"li"},"3000")," to expose the app on the internet")),Object(i.b)("p",null,"After the application is created, click on the ",Object(i.b)("inlineCode",{parentName:"p"},"Deploy")," button in application actions."),Object(i.b)("p",null,"In a few minutes, your application should be up and running:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/cra-envs/1.png",alt:"create-react-app environment variables"})),Object(i.b)("p",null,"As you see, the text in the link ",Object(i.b)("strong",{parentName:"p"},"From .env file indicates that the value")),Object(i.b)("h2",{id:"adding-environment-variable"},"Adding Environment Variable"),Object(i.b)("p",null,"Now, let's override our ",Object(i.b)("inlineCode",{parentName:"p"},"REACT_APP_MSG")," environment variable (and the text we display in the UI)."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/cra-envs/2.png",alt:"create-react-app environment variables"})),Object(i.b)("p",null,"After adding a new variable, restart the application. In a minute or so, we should see that the message in our website is updated with the value of ",Object(i.b)("inlineCode",{parentName:"p"},"REACT_APP_MSG")," we added in Qovery Console:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/cra-envs/3.png",alt:"create-react-app environment variables"})),Object(i.b)("h2",{id:"going-prod"},"Going Prod"),Object(i.b)("p",null,"To optimize our application for production usage, we\u2019ll use a Nginx server to serve our frontend static content. To do so, we need to update our Dockerfile to the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'FROM node:14-alpine AS builder\nENV NODE_ENV production\n\nARG REACT_APP_MSG\nENV REACT_APP_MSG $REACT_APP_MSG\n\n# Add a work directory\nWORKDIR /app\n# Cache and Install dependencies\nCOPY package.json .\nCOPY yarn.lock .\nRUN yarn install --production\n# Copy app files\nCOPY . .\n# Build the app\nRUN yarn build\n\n# Bundle static assets with nginx\nFROM nginx:1.21.0-alpine as production\nENV NODE_ENV production\n# Copy built assets from builder\nCOPY --from=builder /app/build /usr/share/nginx/html\n# Add your nginx.conf\nCOPY nginx.conf /etc/nginx/conf.d/default.conf\n# Expose port\nEXPOSE 3000\n# Start nginx\nCMD ["nginx", "-g", "daemon off;"]\n')),Object(i.b)("p",null,"It uses a Nginx server for hosting your application instead of starting a Node.js server, which is more optimal for production usage."),Object(i.b)("p",null,"Additionally, add a ",Object(i.b)("inlineCode",{parentName:"p"},"nginx.conf")," file with this content to configure your app:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"server {\n  listen 80;\n\n  location / {\n    root /usr/share/nginx/html/;\n    include /etc/nginx/mime.types;\n    try_files $uri $uri/ /index.html;\n  }\n}\n")),Object(i.b)("p",null,"Now, commit and push your changes - your ",Object(i.b)("inlineCode",{parentName:"p"},"create-react-app")," is handling env vars properly and is optimized for production usage."),Object(i.b)("h2",{id:"conclusion"},"Conclusion"),Object(i.b)("p",null,"In the guide, we went through managing environment variables in react / create-react-apps without resorting to using any bash scripts and host it on Qovery using Ngnix server."))}p.isMDXComponent=!0},456:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var c in a)t.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},457:function(e,n,t){"use strict";t(459);var a=t(0),r=t.n(a),i=t(456),o=t.n(i);t(132);n.a=function(e){var n=e.children,t=e.classNames,a=e.fill,i=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:o()(t,"alert","alert--"+c,{"alert--fill":a,"alert--icon":!1!==i}),role:"alert"},!1!==i&&r.a.createElement("i",{className:o()("feather","icon-"+(i||l))}),n)}},458:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return t?r.a.createElement(m,c({ref:n},s,{components:t})):r.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},459:function(e,n,t){var a=t(12);a(a.P,"Array",{fill:t(463)}),t(74)("fill")},460:function(e,n,t){var a=t(26).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||t(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},461:function(e,n,t){"use strict";var a=t(1),r=t(0),i=t.n(r),o=t(39),c=t(465),l=t(20),s=t.n(l);n.a=function(e){var n,t=e.to,l=e.href,p=t||l,u=Object(c.a)(p),b=Object(r.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!d&&u&&window.docusaurus.prefetch(p),function(){d&&n&&n.disconnect()}}),[p,d,u]),p&&u?i.a.createElement(o.b,Object(a.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(p),b.current=!0)},innerRef:function(e){var t,a;d&&e&&u&&(t=e,a=function(){window.docusaurus.prefetch(p)},(n=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())}))}))).observe(t))},to:p})):i.a.createElement("a",Object(a.a)({},e,{href:p}))}},462:function(e,n,t){"use strict";t(460);var a=t(0),r=t.n(a),i=t(457);n.a=function(e){var n=e.children,t=e.name;return r.a.createElement(i.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",t||"page"," assumes the following:"),n)}},463:function(e,n,t){"use strict";var a=t(28),r=t(75),i=t(27);e.exports=function(e){for(var n=a(this),t=i(n.length),o=arguments.length,c=r(o>1?arguments[1]:void 0,t),l=o>2?arguments[2]:void 0,s=void 0===l?t:r(l,t);s>c;)n[c++]=e;return n}},464:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(461),o=t(456),c=t.n(o);t(133);n.a=function(e){var n=e.children,t=e.className,a=e.badge,o=e.leftIcon,l=e.rightIcon,s=e.size,p=e.target,u=e.to,b=c()("jump-to","jump-to--"+s,t),d=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},o&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+o})),r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",n),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return p?r.a.createElement("a",{href:u,target:p,className:b},d):r.a.createElement(i.a,{to:u,className:b},d)}},465:function(e,n,t){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}t.d(n,"a",(function(){return a}))}}]);
/*! For license information please see a1fea8fb.8404ba58.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{324:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),o=(n(0),n(458)),i=(n(457),n(462),n(464),{last_modified_on:"2021-12-17",$schema:"/.meta/.schemas/guides.json",title:"How to use CloudFront with a React frontend application on Qovery",description:"Setting up AWS CloudFront for frontend apps on Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial","cloud_provider: aws"],hide_pagination:!0}),c={categories:[{name:"tutorial",title:"Tutorial",description:"Step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How to use CloudFront with a React frontend application on Qovery",description:"Setting up AWS CloudFront for frontend apps on Qovery",permalink:"/guides/tutorial/how-to-use-cloudfront-with-react-frontend-application-on-qovery",readingTime:"4 min read",source:"@site/guides/tutorial/how-to-use-cloudfront-with-react-frontend-application-on-qovery.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"cloud_provider: aws",permalink:"/guides/tags/cloud-provider-aws"}],title:"How to use CloudFront with a React frontend application on Qovery",truncated:!1,prevItem:{title:"How to seed a Postgres database on a dev environment",permalink:"/guides/tutorial/data-seeding-in-postgres"},nextItem:{title:"How to use Github Organizations with Qovery",permalink:"/guides/tutorial/github-organization-repository-access"}},l=[{value:"Stack",id:"stack",children:[]},{value:"Frontend Application",id:"frontend-application",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"CloudFront",id:"cloudfront",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you'd like to use Cloudflare instead of CloudFront as your CDN, check out ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/tutorial/setting-up-cloudflare-and-custom-domain-on-qovery/"}),"this article"),".")),Object(o.b)("p",null,"Frontend apps primarily consist of static content which goes unchanged. Web pages that contain static assets are essentially prebuilt, which makes it efficiently quicker to grab and render content. Their static nature makes them a perfect use case for CDNs and caching systems on edge servers is as it boosts the web page performance and user experience with the system."),Object(o.b)("h2",{id:"stack"},"Stack"),Object(o.b)("p",null,"For our frontend stack, we'll use a React app that is served as static files using Nginx."),Object(o.b)("h2",{id:"frontend-application"},"Frontend Application"),Object(o.b)("p",null,"To bootstrap the application skeleton, we use ",Object(o.b)("inlineCode",{parentName:"p"},"create-react-app"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npx create-react-app my-app\n")),Object(o.b)("p",null,"Then, we add a ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," to configure how to build the application image:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-docker"}),'FROM node:14-alpine AS builder\nENV NODE_ENV production\n\n# Add a work directory\nWORKDIR /app\n# Cache and Install dependencies\nCOPY package.json .\nCOPY yarn.lock .\nRUN yarn install --production\n# Copy app files\nCOPY . .\n# Build the app\nRUN yarn build\n\n# Bundle static assets with nginx\nFROM nginx:1.21.0-alpine as production\nENV NODE_ENV production\n# Copy built assets from builder\nCOPY --from=builder /app/build /usr/share/nginx/html\n# Add your nginx.conf\nCOPY nginx.conf /etc/nginx/conf.d/default.conf\n# Expose port\nEXPOSE 80\n# Start nginx\nCMD ["nginx", "-g", "daemon off;"]\n')),Object(o.b)("p",null,"The last step - let's configure our Nginx server by adding a ",Object(o.b)("inlineCode",{parentName:"p"},"nginx.conf")," file with the following content:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"server {\n  listen 80;\n\n  location / {\n    root /usr/share/nginx/html/;\n    include /etc/nginx/mime.types;\n    try_files $uri $uri/ /index.html;\n  }\n}\n")),Object(o.b)("h2",{id:"deployment"},"Deployment"),Object(o.b)("p",null,"Now, to deploy the app, create a new application on Qovery with the following configuration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Port - ",Object(o.b)("inlineCode",{parentName:"li"},"80")),Object(o.b)("li",{parentName:"ul"},"Build Mode - ",Object(o.b)("inlineCode",{parentName:"li"},"Docker")),Object(o.b)("li",{parentName:"ul"},"Keep other options in default settings")),Object(o.b)("p",null,"After the app is created and configured as above, you can safely run the app deployment. After a few minutes when the app is running, click on the ",Object(o.b)("inlineCode",{parentName:"p"},"Open")," button:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudfront/1.png",alt:"CloudFront"})),Object(o.b)("h2",{id:"cloudfront"},"CloudFront"),Object(o.b)("p",null,"To set up CloudFront as a CDN, first, navigate to CloudFront service in AWS console and click on the new distribution button:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudfront/2.png",alt:"CloudFront"})),Object(o.b)("p",null,"In settings, choose an origin (URL to your frontend app hosted on Qovery):"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudfront/3.png",alt:"CloudFront"})),Object(o.b)("p",null,"You can also tweak other settings or leave them in their defaults:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudfront/4.png",alt:"CloudFront"})),Object(o.b)("p",null,"Additionally, you can assign an alternate domain to your application in ",Object(o.b)("inlineCode",{parentName:"p"},"Alternate domain name"),":"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudfront/5.png",alt:"CloudFront"})),Object(o.b)("p",null,"Adding an alternate domain requires it having a certificate - click on the ",Object(o.b)("inlineCode",{parentName:"p"},"Request certificate")," button, type your alternate domain name and use DNS for validation method:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudfront/6.png",alt:"CloudFront"})),Object(o.b)("p",null,"Request the certificate. In the end, you will see a screen with settings you need to set up in your domain name provider:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudfront/7.png",alt:"CloudFront"})),Object(o.b)("p",null,"Copy them and save them in your DNS provider settings:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudfront/8.png",alt:"CloudFront"})),Object(o.b)("p",null,"After it's done, you should be granted a certificate - go back to CloudFront Distribution settings, and pick the certificate for your alternate domain name from the list:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudfront/9.png",alt:"CloudFront"})),Object(o.b)("p",null,"In the end, you should end up with a CloudFront set up with your app on Qovery and using an alternate domain name. Now it's time for you to tweak the CloudFront settings to meet your needs."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudfront/10.png",alt:"CloudFront"})))}s.isMDXComponent=!0},456:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},457:function(e,t,n){"use strict";n(459);var r=n(0),a=n.n(r),o=n(456),i=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},458:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,c({ref:t},u,{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},459:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(463)}),n(74)("fill")},460:function(e,t,n){var r=n(26).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},461:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(39),c=n(465),l=n(20),u=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,s=n||l,p=Object(c.a)(s),d=Object(a.useRef)(!1),b=u.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!b&&p&&window.docusaurus.prefetch(s),function(){b&&t&&t.disconnect()}}),[s,b,p]),s&&p?o.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(s),d.current=!0)},innerRef:function(e){var n,r;b&&e&&p&&(n=e,r=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:s})):o.a.createElement("a",Object(r.a)({},e,{href:s}))}},462:function(e,t,n){"use strict";n(460);var r=n(0),a=n.n(r),o=n(457);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},463:function(e,t,n){"use strict";var r=n(28),a=n(75),o=n(27);e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,u=void 0===l?n:a(l,n);u>c;)t[c++]=e;return t}},464:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(461),i=n(456),c=n.n(i);n(133);t.a=function(e){var t=e.children,n=e.className,r=e.badge,i=e.leftIcon,l=e.rightIcon,u=e.size,s=e.target,p=e.to,d=c()("jump-to","jump-to--"+u,n),b=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},i&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+i})),a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return s?a.a.createElement("a",{href:p,target:s,className:d},b):a.a.createElement(o.a,{to:p,className:d},b)}},465:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);
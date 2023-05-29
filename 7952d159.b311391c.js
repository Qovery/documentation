/*! For license information please see 7952d159.b311391c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{254:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(9),r=(n(0),n(390)),o=n(389),c=n(394),l=(n(396),{last_modified_on:"2023-05-29",$schema:"/.meta/.schemas/guides.json",title:"Use an API gateway in front of multiple services",description:"Learn how to use an API gateway in front of multiple services",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","technology: qovery"],hide_pagination:!0}),s={categories:[{name:"tutorial",title:"Tutorial",description:"Additional step-by-step resources to leverage even more Qovery",permalink:"/guides/tutorial"}],coverLabel:"Use an API gateway in front of multiple services",description:"Learn how to use an API gateway in front of multiple services",permalink:"/guides/tutorial/use-an-api-gateway-in-front-of-multiple-services",readingTime:"4 min read",source:"@site/guides/tutorial/use-an-api-gateway-in-front-of-multiple-services.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Use an API gateway in front of multiple services",truncated:!1,prevItem:{title:"URL Shortener API with Kotlin (Part 1/2)",permalink:"/guides/tutorial/url-shortener-api-with-kotlin"},nextItem:{title:"Use AWS IAM roles with Qovery",permalink:"/guides/tutorial/use-aws-iam-roles-with-qovery"}},p=[{value:"Clone API Gateway",id:"clone-api-gateway",children:[]},{value:"Edit configuration",id:"edit-configuration",children:[]},{value:"Create API Gateway app",id:"create-api-gateway-app",children:[]},{value:"Add environment variables",id:"add-environment-variables",children:[{value:"How to find the correct environment variable",id:"how-to-find-the-correct-environment-variable",children:[]}]},{value:"Set up custom domain",id:"set-up-custom-domain",children:[]},{value:"Deploy API Gateway",id:"deploy-api-gateway",children:[]}],u={rightToc:p};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(o.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"In the future, Qovery will integrate an ",Object(r.b)("em",{parentName:"p"},"API gateway")," service. In the meantime, you can use this tutorial to use an API gateway in front of your apps.")),Object(r.b)("p",null,"Using an API gateway is perfect to expose a single web API domain without exposing the underlying implementation. Especially, when using a decoupled architecture with multiple services."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/apigateway/api-gateway.jpg",alt:"API Gateway architecture"})),Object(r.b)("p",null,"In this tutorial, you will learn how to connect an API gateway in front of 3 different applications (cf. schema above)."),Object(r.b)(c.a,{mdxType:"Assumptions"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You have created at least one application in Qovery"))),Object(r.b)("p",null,"Note: My tutorial required to have 3 applications - a ",Object(r.b)("em",{parentName:"p"},"billing API"),", ",Object(r.b)("em",{parentName:"p"},"core API")," and a ",Object(r.b)("em",{parentName:"p"},"messaging API"),". You don't necessarily need to have 3 applications to put an API gateway. Only one application is enough. Feel free to adapt the tutorial to your real need."),Object(r.b)("h2",{id:"clone-api-gateway"},"Clone API Gateway"),Object(r.b)("p",null,"I have prepared an API Gateway template project that you can find ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Qovery/nginx-gateway"}),"here"),". Fork it, and I will guide you to make the appropriate changes. Our API Gateway is based on NGINX - one of the most used web server out there. Written in C++, NGINX is lightweight and can handle thousands of requests per second without any issue."),Object(r.b)("p",null,"Repository to fork: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Qovery/nginx-gateway"}),"https://github.com/Qovery/nginx-gateway")),Object(r.b)("h2",{id:"edit-configuration"},"Edit configuration"),Object(r.b)("p",null,"Once the repo forked, you will have access to ",Object(r.b)("inlineCode",{parentName:"p"},"nginx.conf.template")," and ",Object(r.b)("inlineCode",{parentName:"p"},"routes.conf.template")," - which are the two configuration files.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"nginx.conf.template")," is the configuration of the NGINX server. This is where you can tweak your server. We will not modify it since I have set up a good configuration for an API gateway. Feel free to dig into it and check out the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://nginx.org/en/docs/"}),"NGINX documentation")," to learn more."),Object(r.b)("p",null,"However, the ",Object(r.b)("inlineCode",{parentName:"p"},"routes.conf.template")," is the file that we need to modify to route the incoming traffic from ",Object(r.b)("inlineCode",{parentName:"p"},"api.foo.bar")," to the right service.\nOur route configuration file looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="routes.conf.template"',title:'"routes.conf.template"'}),"location ~* ^/api/billing/?(.*)$ {\n    proxy_pass http://$BILLING_BACKEND$request_uri;\n}\n\nlocation ~* ^/api/messaging/?(.*)$ {\n    proxy_pass http://$MESSAGING_BACKEND$request_uri;\n}\n\nlocation ~* ^/api/(.*)$ {\n    proxy_pass http://$CORE_BACKEND$request_uri;\n}\n\nlocation ~* ^/?(.*)$ {\n    proxy_pass http://$CORE_BACKEND$request_uri;\n}\n")),Object(r.b)("p",null,"Here are the explanation of those rules:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"All the traffic matching the path ",Object(r.b)("inlineCode",{parentName:"li"},"/api/billing/*")," is redirect to the BILLING backend."),Object(r.b)("li",{parentName:"ol"},"All the traffic matching the path ",Object(r.b)("inlineCode",{parentName:"li"},"/api/messaging/*")," is redirect to the MESSAGING backend."),Object(r.b)("li",{parentName:"ol"},"All the traffic matching the path ",Object(r.b)("inlineCode",{parentName:"li"},"/api/*")," is redirect to the CORE backend."),Object(r.b)("li",{parentName:"ol"},"All the traffic by default is redirected to the CORE backend.")),Object(r.b)("p",null,"Notes:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The rule definition order is from the first to the last to apply. If there is a conflicting rule, then the first matched applies."),Object(r.b)("li",{parentName:"ol"},"The internal network is in HTTP, that is why the value of the ",Object(r.b)("inlineCode",{parentName:"li"},"proxy_pass")," directive starts with ",Object(r.b)("inlineCode",{parentName:"li"},"http://"),"."),Object(r.b)("li",{parentName:"ol"},"The connections on ",Object(r.b)("inlineCode",{parentName:"li"},"api.foo.bar")," are in HTTPS."),Object(r.b)("li",{parentName:"ol"},"You can make complex rules like the one below:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:'title="more complex rule"',title:'"more',complex:!0,'rule"':!0}),"location ~* ^/api/v1/user/(.*)/app/(.*)/index/(.*)/search/?(.*)$ {\n    proxy_pass http://$CORE_BACKEND/api/v1/user/$1/app/$2/index/$3/search/$4$is_args$args;\n}\n")),Object(r.b)("h2",{id:"create-api-gateway-app"},"Create API Gateway app"),Object(r.b)("p",null,"Commit and push your changes. Then go to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery web console"),", and add your API gateway inside the same environment of your applications."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Build mode: Dockerfile"),Object(r.b)("li",{parentName:"ul"},"Port: 80")),Object(r.b)("h2",{id:"add-environment-variables"},"Add environment variables"),Object(r.b)("p",null,"For our gateway, we need to create 3 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/#alias-environment-variable"}),"environment variable aliases")," corresponding to the internal network names of our applications."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"XXX_HOST_INTERNAL")," -> ALIAS -> ",Object(r.b)("inlineCode",{parentName:"li"},"BILLING_BACKEND")," with scope ",Object(r.b)("inlineCode",{parentName:"li"},"ENVIRONMENT")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"YYY_HOST_INTERNAL")," -> ALIAS -> ",Object(r.b)("inlineCode",{parentName:"li"},"MESSAGING_BACKEND")," with scope ",Object(r.b)("inlineCode",{parentName:"li"},"ENVIRONMENT")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ZZZ_HOST_INTERNAL")," -> ALIAS -> ",Object(r.b)("inlineCode",{parentName:"li"},"CORE_BACKEND")," with scope ",Object(r.b)("inlineCode",{parentName:"li"},"ENVIRONMENT"))),Object(r.b)("h3",{id:"how-to-find-the-correct-environment-variable"},"How to find the correct environment variable"),Object(r.b)("p",null,"When you have multiple applications within the same environment, it is difficult to find the appropriate environment variable. A workaround is to:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to one of your application"),Object(r.b)("li",{parentName:"ol"},"Find the ID of your application in your URL ",Object(r.b)("inlineCode",{parentName:"li"},"https://console.qovery.com/platform/organization/xxx/projects/yyy/environments/zzz/applications/082e36c4-7fbb-42b2-9046-37ccce21616a/variables")),Object(r.b)("li",{parentName:"ol"},"Truncate your application ID and take the first segment. For ",Object(r.b)("inlineCode",{parentName:"li"},"082e36c4-7fbb-42b2-9046-37ccce21616a")," it is ",Object(r.b)("inlineCode",{parentName:"li"},"082e36c4")),Object(r.b)("li",{parentName:"ol"},"Add the letter z in front of id ",Object(r.b)("inlineCode",{parentName:"li"},"Z082e36c4"),"."),Object(r.b)("li",{parentName:"ol"},"All the environment variables containing ",Object(r.b)("inlineCode",{parentName:"li"},"Z082e36c4")," are attached to the corresponding app.")),Object(r.b)("h2",{id:"set-up-custom-domain"},"Set up custom domain"),Object(r.b)("p",null,"Add a custom domain to expose your API gateway with the domain of your choice. Check out ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/#domains"}),"this documentation")," to set up your domain."),Object(r.b)("h2",{id:"deploy-api-gateway"},"Deploy API Gateway"),Object(r.b)("p",null,"Once everything is set up, you can deploy your application."))}b.isMDXComponent=!0},388:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var o=i.apply(null,a);o&&e.push(o)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},389:function(e,t,n){"use strict";n(391);var a=n(0),i=n.n(a),r=n(388),o=n.n(r);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,r=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return i.a.createElement("div",{className:o()(n,"alert","alert--"+c,{"alert--fill":a,"alert--icon":!1!==r}),role:"alert"},!1!==r&&i.a.createElement("i",{className:o()("feather","icon-"+(r||l))}),t)}},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||r;return n?i.a.createElement(d,c({ref:t},s,{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},391:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(392)}),n(74)("fill")},392:function(e,t,n){"use strict";var a=n(27),i=n(75),r=n(26);e.exports=function(e){for(var t=a(this),n=r(t.length),o=arguments.length,c=i(o>1?arguments[1]:void 0,n),l=o>2?arguments[2]:void 0,s=void 0===l?n:i(l,n);s>c;)t[c++]=e;return t}},393:function(e,t,n){var a=n(28).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||n(10)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},394:function(e,t,n){"use strict";n(393);var a=n(0),i=n.n(a),r=n(389);t.a=function(e){var t=e.children,n=e.name;return i.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},i.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},395:function(e,t,n){"use strict";var a=n(1),i=n(0),r=n.n(i),o=n(39),c=n(397),l=n(20),s=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,p=n||l,u=Object(c.a)(p),b=Object(i.useRef)(!1),m=s.a.canUseIntersectionObserver;return Object(i.useEffect)((function(){return!m&&u&&window.docusaurus.prefetch(p),function(){m&&t&&t.disconnect()}}),[p,m,u]),p&&u?r.a.createElement(o.b,Object(a.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(p),b.current=!0)},innerRef:function(e){var n,a;m&&e&&u&&(n=e,a=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:p})):r.a.createElement("a",Object(a.a)({},e,{href:p}))}},396:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(395),o=n(388),c=n.n(o);n(133);t.a=function(e){var t=e.children,n=e.className,a=e.badge,o=e.leftIcon,l=e.rightIcon,s=e.size,p=e.target,u=e.to,b=c()("jump-to","jump-to--"+s,n),m=i.a.createElement("div",{className:"jump-to--inner"},i.a.createElement("div",{className:"jump-to--inner-2"},o&&i.a.createElement("div",{className:"jump-to--left"},i.a.createElement("i",{className:"feather icon-"+o})),i.a.createElement("div",{className:"jump-to--main"},a?i.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),i.a.createElement("div",{className:"jump-to--right"},i.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return p?i.a.createElement("a",{href:u,target:p,className:b},m):i.a.createElement(r.a,{to:u,className:b},m)}},397:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))}}]);
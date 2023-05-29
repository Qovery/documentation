/*! For license information please see 276bd8dd.26d4191b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),i=(n(0),n(458)),o=(n(457),n(462),n(464),{last_modified_on:"2021-11-19",$schema:"/.meta/.schemas/guides.json",title:"Getting started with Sinatra on Qovery",description:"How to quickly deploy a Sinatra app on Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: guide","framework: sinatra"],hide_pagination:!0}),c={categories:[{name:"tutorial",title:"Tutorial",description:"Step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Getting started with Sinatra on Qovery",description:"How to quickly deploy a Sinatra app on Qovery",permalink:"/guides/tutorial/quickstart-sinatra",readingTime:"2 min read",source:"@site/guides/tutorial/quickstart-sinatra.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"framework: sinatra",permalink:"/guides/tags/framework-sinatra"}],title:"Getting started with Sinatra on Qovery",truncated:!1,prevItem:{title:"Getting started with Scala on Qovery",permalink:"/guides/tutorial/quickstart-scala"},nextItem:{title:"Getting started with Spring Boot on Qovery",permalink:"/guides/tutorial/quickstart-springboot"}},s=[{value:"Source Code",id:"source-code",children:[]},{value:"App Setup",id:"app-setup",children:[]},{value:"Env Vars",id:"env-vars",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"Logs",id:"logs",children:[]},{value:"Push Changes",id:"push-changes",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This tutorial will have you deploying a ",Object(i.b)("strong",{parentName:"p"},"Sinatra")," app in minutes."),Object(i.b)("p",null,"Sinatra is a free and open source software web application library and domain-specific language written in Ruby. It is an alternative to other Ruby web application frameworks such as Ruby on Rails, Merb, Nitro, and Camping. It is dependent on the Rack web server interface. "),Object(i.b)("h2",{id:"source-code"},"Source Code"),Object(i.b)("p",null,"In the tutorial, we will use a sample application ready to be deployed on Qovery. To get the application source code, please ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-ruby-sinatra-sample"}),"fork this repository"),"."),Object(i.b)("h2",{id:"app-setup"},"App Setup"),Object(i.b)("p",null,"In ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery Console"),", choose or create your project and environment. Then, add a new application:"),Object(i.b)("p",null,Object(i.b)("img",{src:"/img/quickstart-1.png",alt:"Sinatra"})),Object(i.b)("p",null,"In ",Object(i.b)("strong",{parentName:"p"},"Git Repository"),", pick the forked application source code repository."),Object(i.b)("p",null,"In the ",Object(i.b)("strong",{parentName:"p"},"Port")," section type ",Object(i.b)("strong",{parentName:"p"},"8080"),"."),Object(i.b)("p",null,"That's it, create!"),Object(i.b)("h2",{id:"env-vars"},"Env Vars"),Object(i.b)("p",null,"The last step is to add a ",Object(i.b)("strong",{parentName:"p"},"PORT")," environment variable. To do so, navigate to your application and add a new ",Object(i.b)("strong",{parentName:"p"},"PORT")," variable with value ",Object(i.b)("strong",{parentName:"p"},"8080"),":"),Object(i.b)("p",null,Object(i.b)("img",{src:"/img/quickstart-3.png",alt:"Sinatra"})),Object(i.b)("h2",{id:"deploy"},"Deploy"),Object(i.b)("p",null,"It's all ready. In your application's screen click on ",Object(i.b)("strong",{parentName:"p"},"Actions")," and ",Object(i.b)("strong",{parentName:"p"},"Deploy")," your application."),Object(i.b)("p",null,Object(i.b)("img",{src:"/img/quickstart-4.png",alt:"Sinatra"})),Object(i.b)("h2",{id:"logs"},"Logs"),Object(i.b)("p",null,"To see the progress of your deployment and the output of your application, click on ",Object(i.b)("strong",{parentName:"p"},"Show Logs")," button. You can navigate between build/deployment logs as well as your application runtime logs."),Object(i.b)("p",null,Object(i.b)("img",{src:"/img/quickstart-5.png",alt:"Sinatra"})),Object(i.b)("h2",{id:"push-changes"},"Push Changes"),Object(i.b)("p",null,"Now, anytime you push new changes to your repository, Qovery will automatically update your application with the latest code!"))}u.isMDXComponent=!0},456:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},457:function(e,t,n){"use strict";n(459);var r=n(0),a=n.n(r),i=n(456),o=n.n(i);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,i=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return a.a.createElement("div",{className:o()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==i}),role:"alert"},!1!==i&&a.a.createElement("i",{className:o()("feather","icon-"+(i||s))}),t)}},458:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},459:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(463)}),n(74)("fill")},460:function(e,t,n){var r=n(26).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},461:function(e,t,n){"use strict";var r=n(1),a=n(0),i=n.n(a),o=n(39),c=n(465),s=n(20),l=n.n(s);t.a=function(e){var t,n=e.to,s=e.href,u=n||s,p=Object(c.a)(u),b=Object(a.useRef)(!1),d=l.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,p]),u&&p?i.a.createElement(o.b,Object(r.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(u),b.current=!0)},innerRef:function(e){var n,r;d&&e&&p&&(n=e,r=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:u})):i.a.createElement("a",Object(r.a)({},e,{href:u}))}},462:function(e,t,n){"use strict";n(460);var r=n(0),a=n.n(r),i=n(457);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(i.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},463:function(e,t,n){"use strict";var r=n(28),a=n(75),i=n(27);e.exports=function(e){for(var t=r(this),n=i(t.length),o=arguments.length,c=a(o>1?arguments[1]:void 0,n),s=o>2?arguments[2]:void 0,l=void 0===s?n:a(s,n);l>c;)t[c++]=e;return t}},464:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(461),o=n(456),c=n.n(o);n(133);t.a=function(e){var t=e.children,n=e.className,r=e.badge,o=e.leftIcon,s=e.rightIcon,l=e.size,u=e.target,p=e.to,b=c()("jump-to","jump-to--"+l,n),d=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},o&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+o})),a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return u?a.a.createElement("a",{href:p,target:u,className:b},d):a.a.createElement(i.a,{to:p,className:b},d)}},465:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);
/*! For license information please see 9d79f608.9a6c65de.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{320:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),i=(r(0),r(458)),o=(r(457),r(462),r(464),{last_modified_on:"2021-11-19",$schema:"/.meta/.schemas/guides.json",title:"Getting started with Rails on Qovery",description:"How to quickly deploy a Rails app on Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: guide","framework: rails"],hide_pagination:!0}),c={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Getting started with Rails on Qovery",description:"How to quickly deploy a Rails app on Qovery",permalink:"/guides/tutorial/quickstart-rails",readingTime:"2 min read",source:"@site/guides/tutorial/quickstart-rails.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"framework: rails",permalink:"/guides/tags/framework-rails"}],title:"Getting started with Rails on Qovery",truncated:!1,prevItem:{title:"Getting Started with Preview Environments on AWS",permalink:"/guides/tutorial/getting-started-with-preview-environments-on-aws-for-beginners"},nextItem:{title:"Getting started with Rust on Qovery",permalink:"/guides/tutorial/quickstart-rust-rocket"}},s=[{value:"Source Code",id:"source-code",children:[]},{value:"App Setup",id:"app-setup",children:[]},{value:"Env Vars",id:"env-vars",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"Logs",id:"logs",children:[]},{value:"Push Changes",id:"push-changes",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This tutorial will have you deploying a ",Object(i.b)("strong",{parentName:"p"},"Rails")," app in minutes."),Object(i.b)("p",null,"Rails is a development tool which gives web developers a framework, providing structure for all the code they write. The Rails framework helps developers to build websites and applications, because it abstracts and simplifies common repetitive tasks. "),Object(i.b)("h2",{id:"source-code"},"Source Code"),Object(i.b)("p",null,"In the tutorial, we will use a sample application ready to be deployed on Qovery. To get the application source code, please ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-ruby-rails-sample"}),"fork this repository"),"."),Object(i.b)("h2",{id:"app-setup"},"App Setup"),Object(i.b)("p",null,"In ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery Console"),", choose or create your project and environment. Then, add a new application:"),Object(i.b)("p",null,Object(i.b)("img",{src:"/img/quickstart-1.png",alt:"Rails"})),Object(i.b)("p",null,"In ",Object(i.b)("strong",{parentName:"p"},"Git Repository"),", pick the forked application source code repository."),Object(i.b)("p",null,"In the ",Object(i.b)("strong",{parentName:"p"},"Port")," section type ",Object(i.b)("strong",{parentName:"p"},"3000"),"."),Object(i.b)("p",null,"That's it, create!"),Object(i.b)("h2",{id:"env-vars"},"Env Vars"),Object(i.b)("p",null,"The last step is to add a ",Object(i.b)("strong",{parentName:"p"},"PORT")," environment variable. To do so, navigate to your application and add a new ",Object(i.b)("strong",{parentName:"p"},"PORT")," variable with value ",Object(i.b)("strong",{parentName:"p"},"3000"),":"),Object(i.b)("p",null,Object(i.b)("img",{src:"/img/quickstart-3.png",alt:"Rails"})),Object(i.b)("h2",{id:"deploy"},"Deploy"),Object(i.b)("p",null,"It's all ready. In your application's screen click on ",Object(i.b)("strong",{parentName:"p"},"Actions")," and ",Object(i.b)("strong",{parentName:"p"},"Deploy")," your application."),Object(i.b)("p",null,Object(i.b)("img",{src:"/img/quickstart-4.png",alt:"Rails"})),Object(i.b)("h2",{id:"logs"},"Logs"),Object(i.b)("p",null,"To see the progress of your deployment and the output of your application, click on ",Object(i.b)("strong",{parentName:"p"},"Show Logs")," button. You can navigate between build/deployment logs as well as your application runtime logs."),Object(i.b)("p",null,Object(i.b)("img",{src:"/img/quickstart-5.png",alt:"Rails"})),Object(i.b)("h2",{id:"push-changes"},"Push Changes"),Object(i.b)("p",null,"Now, anytime you push new changes to your repository, Qovery will automatically update your application with the latest code!"))}u.isMDXComponent=!0},456:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=a.apply(null,n);o&&e.push(o)}else if("object"===i)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},457:function(e,t,r){"use strict";r(459);var n=r(0),a=r.n(n),i=r(456),o=r.n(i);r(132);t.a=function(e){var t=e.children,r=e.classNames,n=e.fill,i=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return a.a.createElement("div",{className:o()(r,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==i}),role:"alert"},!1!==i&&a.a.createElement("i",{className:o()("feather","icon-"+(i||s))}),t)}},458:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return r?a.a.createElement(m,c({ref:t},l,{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},459:function(e,t,r){var n=r(12);n(n.P,"Array",{fill:r(463)}),r(74)("fill")},460:function(e,t,r){var n=r(26).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||r(10)&&n(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},461:function(e,t,r){"use strict";var n=r(1),a=r(0),i=r.n(a),o=r(39),c=r(465),s=r(20),l=r.n(s);t.a=function(e){var t,r=e.to,s=e.href,u=r||s,p=Object(c.a)(u),b=Object(a.useRef)(!1),d=l.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,p]),u&&p?i.a.createElement(o.b,Object(n.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(u),b.current=!0)},innerRef:function(e){var r,n;d&&e&&p&&(r=e,n=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:u})):i.a.createElement("a",Object(n.a)({},e,{href:u}))}},462:function(e,t,r){"use strict";r(460);var n=r(0),a=r.n(n),i=r(457);t.a=function(e){var t=e.children,r=e.name;return a.a.createElement(i.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",r||"page"," assumes the following:"),t)}},463:function(e,t,r){"use strict";var n=r(28),a=r(75),i=r(27);e.exports=function(e){for(var t=n(this),r=i(t.length),o=arguments.length,c=a(o>1?arguments[1]:void 0,r),s=o>2?arguments[2]:void 0,l=void 0===s?r:a(s,r);l>c;)t[c++]=e;return t}},464:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(461),o=r(456),c=r.n(o);r(133);t.a=function(e){var t=e.children,r=e.className,n=e.badge,o=e.leftIcon,s=e.rightIcon,l=e.size,u=e.target,p=e.to,b=c()("jump-to","jump-to--"+l,r),d=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},o&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+o})),a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return u?a.a.createElement("a",{href:p,target:u,className:b},d):a.a.createElement(i.a,{to:p,className:b},d)}},465:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}r.d(t,"a",(function(){return n}))}}]);
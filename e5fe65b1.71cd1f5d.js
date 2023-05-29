/*! For license information please see e5fe65b1.71cd1f5d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{428:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(458)),i=(n(457),n(462),n(464),{last_modified_on:"2021-11-19",$schema:"/.meta/.schemas/guides.json",title:"Getting started with Golang on Qovery",description:"How to quickly deploy a Golang app on Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: guide","language: go"],hide_pagination:!0}),c={categories:[{name:"tutorial",title:"Tutorial",description:"Step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Getting started with Golang on Qovery",description:"How to quickly deploy a Golang app on Qovery",permalink:"/guides/tutorial/quickstart-go",readingTime:"2 min read",source:"@site/guides/tutorial/quickstart-go.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"language: go",permalink:"/guides/tags/language-go"}],title:"Getting started with Golang on Qovery",truncated:!1,prevItem:{title:"Getting started with Django on Qovery",permalink:"/guides/tutorial/quickstart-django"},nextItem:{title:"Getting started with Laravel on Qovery",permalink:"/guides/tutorial/quickstart-laravel"}},l=[{value:"Source Code",id:"source-code",children:[]},{value:"App Setup",id:"app-setup",children:[]},{value:"Env Vars",id:"env-vars",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"Logs",id:"logs",children:[]},{value:"Push Changes",id:"push-changes",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This tutorial will have you deploying a ",Object(o.b)("strong",{parentName:"p"},"Golang")," app in minutes."),Object(o.b)("p",null,"Go (also called Golang or Go language) is an open source programming language used for general purpose. Go was developed by Google engineers to create dependable and efficient software. Most similarly modeled after C, Go is statically typed and explicit. "),Object(o.b)("h2",{id:"source-code"},"Source Code"),Object(o.b)("p",null,"In the tutorial, we will use a sample application ready to be deployed on Qovery. To get the application source code, please ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-go-sample"}),"fork this repository"),"."),Object(o.b)("h2",{id:"app-setup"},"App Setup"),Object(o.b)("p",null,"In ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery Console"),", choose or create your project and environment. Then, add a new application:"),Object(o.b)("p",null,Object(o.b)("img",{src:"/img/quickstart-1.png",alt:"Golang"})),Object(o.b)("p",null,"In ",Object(o.b)("strong",{parentName:"p"},"Git Repository"),", pick the forked application source code repository."),Object(o.b)("p",null,"In the ",Object(o.b)("strong",{parentName:"p"},"Port")," section type ",Object(o.b)("strong",{parentName:"p"},"8080"),"."),Object(o.b)("p",null,"That's it, create!"),Object(o.b)("h2",{id:"env-vars"},"Env Vars"),Object(o.b)("p",null,"The last step is to add a ",Object(o.b)("strong",{parentName:"p"},"PORT")," environment variable. To do so, navigate to your application and add a new ",Object(o.b)("strong",{parentName:"p"},"PORT")," variable with value ",Object(o.b)("strong",{parentName:"p"},"8080"),":"),Object(o.b)("p",null,Object(o.b)("img",{src:"/img/quickstart-3.png",alt:"Golang"})),Object(o.b)("h2",{id:"deploy"},"Deploy"),Object(o.b)("p",null,"It's all ready. In your application's screen click on ",Object(o.b)("strong",{parentName:"p"},"Actions")," and ",Object(o.b)("strong",{parentName:"p"},"Deploy")," your application."),Object(o.b)("p",null,Object(o.b)("img",{src:"/img/quickstart-4.png",alt:"Golang"})),Object(o.b)("h2",{id:"logs"},"Logs"),Object(o.b)("p",null,"To see the progress of your deployment and the output of your application, click on ",Object(o.b)("strong",{parentName:"p"},"Show Logs")," button. You can navigate between build/deployment logs as well as your application runtime logs."),Object(o.b)("p",null,Object(o.b)("img",{src:"/img/quickstart-5.png",alt:"Golang"})),Object(o.b)("h2",{id:"push-changes"},"Push Changes"),Object(o.b)("p",null,"Now, anytime you push new changes to your repository, Qovery will automatically update your application with the latest code!"))}u.isMDXComponent=!0},456:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},457:function(e,t,n){"use strict";n(459);var r=n(0),a=n.n(r),o=n(456),i=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},458:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||g[d]||o;return n?a.a.createElement(b,c({ref:t},s,{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},459:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(463)}),n(74)("fill")},460:function(e,t,n){var r=n(26).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},461:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(39),c=n(465),l=n(20),s=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,u=n||l,p=Object(c.a)(u),g=Object(a.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,p]),u&&p?o.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){g.current||(window.docusaurus.preload(u),g.current=!0)},innerRef:function(e){var n,r;d&&e&&p&&(n=e,r=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:u})):o.a.createElement("a",Object(r.a)({},e,{href:u}))}},462:function(e,t,n){"use strict";n(460);var r=n(0),a=n.n(r),o=n(457);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},463:function(e,t,n){"use strict";var r=n(28),a=n(75),o=n(27);e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,s=void 0===l?n:a(l,n);s>c;)t[c++]=e;return t}},464:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(461),i=n(456),c=n.n(i);n(133);t.a=function(e){var t=e.children,n=e.className,r=e.badge,i=e.leftIcon,l=e.rightIcon,s=e.size,u=e.target,p=e.to,g=c()("jump-to","jump-to--"+s,n),d=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},i&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+i})),a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return u?a.a.createElement("a",{href:p,target:u,className:g},d):a.a.createElement(o.a,{to:p,className:g},d)}},465:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);
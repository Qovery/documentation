/*! For license information please see 58379094.7ef17ba2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{264:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),o=r(9),a=(r(0),r(452)),i=r(451),c={last_modified_on:"2023-04-19",title:"Web interface",description:"How to use the Qovery web interface"},s={id:"using-qovery/interface/web-interface",title:"Web interface",description:"How to use the Qovery web interface",source:"@site/docs/using-qovery/interface/web-interface.md",permalink:"/docs/using-qovery/interface/web-interface",sidebar:"docs",previous:{title:"Interface",permalink:"/docs/using-qovery/interface"},next:{title:"CLI",permalink:"/docs/using-qovery/interface/cli"}},l=[{value:"First sign-up",id:"first-sign-up",children:[]},{value:"Deploy your first application",id:"deploy-your-first-application",children:[]}],p={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)(i.a,{type:"success",mdxType:"Alert"},Object(a.b)("p",null,"Use Infrastructure as Code (IaC) with ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/integration/terraform/"}),"Terraform")," and our ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/interface/rest-api/"}),"REST API")," to manage Qovery and deploy your apps.")),Object(a.b)("p",null,"Qovery provides a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"management console")," which allows you to interact with your projects and manage your environments."),Object(a.b)("h2",{id:"first-sign-up"},"First sign-up"),Object(a.b)("p",null,"Sign in to the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery web interface"),"."),Object(a.b)("p",{align:"center"},Object(a.b)("a",{href:"https://onboarding.qovery.com/"},Object(a.b)("img",{src:"/img/Qovery_Sign_Up_Page.jpg",alt:"Qovery Sign-up page"}))),Object(a.b)(i.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"When you first sign into the Qovery Console, you need to provide your Git provider account credentials. This allows you to later take advantage of a Single Sign-On process through your Git provider. However, by default, Qovery is then allowed to access all the resources stored on your Git provider account."),Object(a.b)("p",null,"For better control, as a Github user, you can install the Qovery Github App, and define which Github repositories Qovery can access. For more information, see ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/git-repository-access/"}),"Managing Git Permissions with the Qovery Github App"),".")),Object(a.b)("h2",{id:"deploy-your-first-application"},"Deploy your first application"),Object(a.b)("p",null,"Now that you have signed up on the web interface, check out ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/getting-started/deploy-your-first-application/"}),"how to deploy your first application")))}u.isMDXComponent=!0},450:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},451:function(e,t,r){"use strict";r(455);var n=r(0),o=r.n(n),a=r(450),i=r.n(a);r(132);t.a=function(e){var t=e.children,r=e.classNames,n=e.fill,a=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return o.a.createElement("div",{className:i()(r,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:i()("feather","icon-"+(a||s))}),t)}},452:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,y=u["".concat(i,".").concat(b)]||u[b]||f[b]||a;return r?o.a.createElement(y,c({ref:t},l,{components:r})):o.a.createElement(y,c({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},455:function(e,t,r){var n=r(12);n(n.P,"Array",{fill:r(457)}),r(74)("fill")},457:function(e,t,r){"use strict";var n=r(28),o=r(75),a=r(27);e.exports=function(e){for(var t=n(this),r=a(t.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,r),s=i>2?arguments[2]:void 0,l=void 0===s?r:o(s,r);l>c;)t[c++]=e;return t}}}]);
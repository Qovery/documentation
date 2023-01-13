/*! For license information please see c3f02c14.627824e4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{373:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),c=(r(0),r(446)),o=r(445),i={last_modified_on:"2022-02-23",title:"REST API",description:"How to use REST API to manage Qovery resources"},l={id:"using-qovery/interface/rest-api",title:"REST API",description:"How to use REST API to manage Qovery resources",source:"@site/docs/using-qovery/interface/rest-api.md",permalink:"/docs/using-qovery/interface/rest-api",sidebar:"docs",previous:{title:"CLI",permalink:"/docs/using-qovery/interface/cli"},next:{title:"Terraform",permalink:"/docs/using-qovery/interface/terraform-interface"}},p=[{value:"API clients",id:"api-clients",children:[{value:"Generate an API token",id:"generate-an-api-token",children:[]}]},{value:"API Documentation",id:"api-documentation",children:[]}],b={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Use the Qovery REST API to programmatically create infrastructure and deploy your applications. The only limit is your imagination. Find the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://api-doc.qovery.com"}),"Qovery API documentation")," and the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"blob:https://api-doc.qovery.com/1d5bb570-c5ce-7e4a-adfb-eb149616e5e9"}),"OpenAPI spec")," to generate your own Qovery client with your favorite programming language."),Object(c.b)("h2",{id:"api-clients"},"API clients"),Object(c.b)("p",null,"Here is the list of clients available to use the Qovery Web API."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Language"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Link"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Golang"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Qovery/qovery-client-go"}),"source"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Python"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Qovery/qovery-client-python"}),"source"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Typescript"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Qovery/qovery-client-typescript"}),"source"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Javascript"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Qovery/qovery-client-javascript"}),"source"))))),Object(c.b)(o.a,{type:"success",mdxType:"Alert"},Object(c.b)("p",null,"You can generate a Qovery client for any language. ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/tutorial/generate-qovery-api-client/"}),"Read this post"))),Object(c.b)("h3",{id:"generate-an-api-token"},"Generate an API token"),Object(c.b)("p",null,"Check out the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/#generate-api-token"}),"CLI documentation")),Object(c.b)("h2",{id:"api-documentation"},"API Documentation"),Object(c.b)("p",null,"The API documentation is available ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://api-doc.qovery.com"}),"here")))}u.isMDXComponent=!0},444:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=a.apply(null,n);o&&e.push(o)}else if("object"===c)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},445:function(e,t,r){"use strict";r(449);var n=r(0),a=r.n(n),c=r(444),o=r.n(c);r(132);t.a=function(e){var t=e.children,r=e.classNames,n=e.fill,c=e.icon,i=e.type,l=null;switch(i){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:o()(r,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==c}),role:"alert"},!1!==c&&a.a.createElement("i",{className:o()("feather","icon-"+(c||l))}),t)}},446:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(r),f=n,d=u["".concat(o,".").concat(f)]||u[f]||s[f]||c;return r?a.a.createElement(d,i({ref:t},p,{components:r})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},449:function(e,t,r){var n=r(12);n(n.P,"Array",{fill:r(453)}),r(74)("fill")},453:function(e,t,r){"use strict";var n=r(28),a=r(75),c=r(27);e.exports=function(e){for(var t=n(this),r=c(t.length),o=arguments.length,i=a(o>1?arguments[1]:void 0,r),l=o>2?arguments[2]:void 0,p=void 0===l?r:a(l,r);p>i;)t[i++]=e;return t}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{337:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),o=(r(0),r(446)),c={last_modified_on:"2023-04-04",title:"MySQL",description:"How to set up and use a MySQL database"},i={id:"using-qovery/configuration/database/mysql",title:"MySQL",description:"How to set up and use a MySQL database",source:"@site/docs/using-qovery/configuration/database/mysql.md",permalink:"/docs/using-qovery/configuration/database/mysql",sidebar:"docs",previous:{title:"PostgreSQL",permalink:"/docs/using-qovery/configuration/database/postgresql"},next:{title:"MongoDB",permalink:"/docs/using-qovery/configuration/database/mongodb"}},l=[{value:"Supported Versions and Cloud Providers",id:"supported-versions-and-cloud-providers",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"MySQL is the world's most popular open source database. Whether you are a fast growing web property, technology ISV or large enterprise, MySQL can cost-effectively help you deliver high performance, scalable database applications."),Object(o.b)("h2",{id:"supported-versions-and-cloud-providers"},"Supported Versions and Cloud Providers"),Object(o.b)("p",null,"You can find the supported versions directly within the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Qovery Console"),"."),Object(o.b)("p",null,"Availability of the Container version or Cloud Provider Managed versions depends on the chosen Cloud Provider "),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Cloud provider"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Container supported"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Managed supported"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AWS"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes (RDS)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Scaleway"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(o.b)("p",null,"Have a look at the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/database/"}),"Database page")," to know more about the database creation and setup."))}s.isMDXComponent=!0},446:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(f,i({ref:t},p,{components:r})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
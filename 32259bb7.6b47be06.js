(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{175:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(9),c=(r(0),r(253)),i={last_modified_on:"2020-04-23",title:"Project",description:"High-level description of Qovery Projects"},a={id:"main-concepts/project",title:"Project",description:"High-level description of Qovery Projects",source:"@site/docs/main-concepts/project.md",permalink:"/docs/main-concepts/project",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/main-concepts/project.md",sidebar:"docs",previous:{title:"Application",permalink:"/docs/main-concepts/application"},next:{title:"Environment",permalink:"/docs/main-concepts/environment"}},p=[],s={rightToc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A project is a ",Object(c.b)("strong",{parentName:"p"},"set of applications and their dependencies")," (databases & other services). Today's software products are rarely made of just one application.\nTo meet the needs of modern software architectures, Qovery natively supports projects with multiple apps. "),Object(c.b)("h4",{id:"microservices"},"Microservices"),Object(c.b)("p",null,"With Qovery, you can design your product as a set of independent applications (",Object(c.b)("inlineCode",{parentName:"p"},"microservices"),"). We take care of all the plumbing (network, resiliency, deployments) to let you focus on your business goals."))}l.isMDXComponent=!0},253:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||c;return r?o.a.createElement(m,a({ref:t},s,{components:r})):o.a.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);
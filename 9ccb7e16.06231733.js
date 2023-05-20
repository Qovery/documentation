/*! For license information please see 9ccb7e16.06231733.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{321:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(9),a=(r(0),r(454)),c=r(460),i={last_modified_on:"2023-01-10",title:"Quickstarts",description:"Quickstart to deploy your project with Qovery",sidebar_label:"hidden",hide_pagination:!0},s={id:"using-qovery/quickstart",title:"Quickstarts",description:"Quickstart to deploy your project with Qovery",source:"@site/docs/using-qovery/quickstart.md",permalink:"/docs/using-qovery/quickstart",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Cluster Troubleshoot",permalink:"/docs/using-qovery/troubleshoot/cluster-troubleshoot"},next:{title:"Hasura",permalink:"/docs/using-qovery/quickstart/hasura"}},u=[],l={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In the following subsections, you'll learn how to deploy your application with Qovery."),Object(a.b)(c.a,{to:"/docs/using-qovery/quickstart/django/",mdxType:"Jump"},"Django"),Object(a.b)(c.a,{to:"/docs/using-qovery/quickstart/hasura/",mdxType:"Jump"},"Hasura"),Object(a.b)(c.a,{to:"/docs/using-qovery/quickstart/meilisearch/",mdxType:"Jump"},"Meilisearch"),Object(a.b)(c.a,{to:"/docs/using-qovery/quickstart/nodejs/",mdxType:"Jump"},"Nodejs"),Object(a.b)(c.a,{to:"/docs/using-qovery/quickstart/rails/",mdxType:"Jump"},"Rails"),Object(a.b)(c.a,{to:"/docs/using-qovery/quickstart/rust/",mdxType:"Jump"},"Rust"),Object(a.b)(c.a,{to:"/docs/using-qovery/quickstart/spring/",mdxType:"Jump"},"Spring"),Object(a.b)(c.a,{to:"/docs/using-qovery/quickstart/strapi/",mdxType:"Jump"},"Strapi"))}p.isMDXComponent=!0},452:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var c=o.apply(null,n);c&&e.push(c)}else if("object"===a)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},454:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return r?o.a.createElement(m,i({ref:t},u,{components:r})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},455:function(e,t,r){"use strict";var n=r(1),o=r(0),a=r.n(o),c=r(39),i=r(461),s=r(20),u=r.n(s);t.a=function(e){var t,r=e.to,s=e.href,l=r||s,p=Object(i.a)(l),f=Object(o.useRef)(!1),d=u.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(l),function(){d&&t&&t.disconnect()}}),[l,d,p]),l&&p?a.a.createElement(c.b,Object(n.a)({},e,{onMouseEnter:function(){f.current||(window.docusaurus.preload(l),f.current=!0)},innerRef:function(e){var r,n;d&&e&&p&&(r=e,n=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:l})):a.a.createElement("a",Object(n.a)({},e,{href:l}))}},460:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(455),c=r(452),i=r.n(c);r(133);t.a=function(e){var t=e.children,r=e.className,n=e.badge,c=e.leftIcon,s=e.rightIcon,u=e.size,l=e.target,p=e.to,f=i()("jump-to","jump-to--"+u,r),d=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},c&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+c})),o.a.createElement("div",{className:"jump-to--main"},n?o.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return l?o.a.createElement("a",{href:p,target:l,className:f},d):o.a.createElement(a.a,{to:p,className:f},d)}},461:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}r.d(t,"a",(function(){return n}))}}]);
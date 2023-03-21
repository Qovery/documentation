/*! For license information please see 56cfbe62.3e8de665.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{260:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(9),a=(n(0),n(444)),c=n(449),i={last_modified_on:"2023-03-21",title:"Using Qovery",description:"Everything you need to know to configure and use your applications on Qovery",sidebar_label:"hidden",hide_pagination:!0},u={id:"using-qovery",title:"Using Qovery",description:"Everything you need to know to configure and use your applications on Qovery",source:"@site/docs/using-qovery.md",permalink:"/docs/using-qovery",sidebar_label:"hidden",sidebar:"docs",previous:{title:"What's next?",permalink:"/docs/getting-started/whats-next"},next:{title:"Interface",permalink:"/docs/using-qovery/interface"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This section covers everything you need to know to configure and use your applications on Qovery:"),Object(a.b)(c.a,{to:"/docs/using-qovery/configuration/",mdxType:"Jump"},"Configuration"),Object(a.b)(c.a,{to:"/docs/using-qovery/deployment/",mdxType:"Jump"},"Deployment"),Object(a.b)(c.a,{to:"/docs/using-qovery/integration/",mdxType:"Jump"},"Integration"),Object(a.b)(c.a,{to:"/docs/using-qovery/interface/",mdxType:"Jump"},"Interface"),Object(a.b)(c.a,{to:"/docs/using-qovery/maintenance/",mdxType:"Jump"},"Maintenance"),Object(a.b)(c.a,{to:"/docs/using-qovery/quickstart/",mdxType:"Jump"},"Quickstart"),Object(a.b)(c.a,{to:"/docs/using-qovery/troubleshoot/",mdxType:"Jump"},"Troubleshoot"))}l.isMDXComponent=!0},442:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},444:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,m=l["".concat(c,".").concat(d)]||l[d]||f[d]||a;return n?o.a.createElement(m,i({ref:t},s,{components:n})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},445:function(e,t,n){"use strict";var r=n(1),o=n(0),a=n.n(o),c=n(39),i=n(450),u=n(20),s=n.n(u);t.a=function(e){var t,n=e.to,u=e.href,p=n||u,l=Object(i.a)(p),f=Object(o.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!d&&l&&window.docusaurus.prefetch(p),function(){d&&t&&t.disconnect()}}),[p,d,l]),p&&l?a.a.createElement(c.b,Object(r.a)({},e,{onMouseEnter:function(){f.current||(window.docusaurus.preload(p),f.current=!0)},innerRef:function(e){var n,r;d&&e&&l&&(n=e,r=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:p})):a.a.createElement("a",Object(r.a)({},e,{href:p}))}},449:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(445),c=n(442),i=n.n(c);n(133);t.a=function(e){var t=e.children,n=e.className,r=e.badge,c=e.leftIcon,u=e.rightIcon,s=e.size,p=e.target,l=e.to,f=i()("jump-to","jump-to--"+s,n),d=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},c&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+c})),o.a.createElement("div",{className:"jump-to--main"},r?o.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return p?o.a.createElement("a",{href:l,target:p,className:f},d):o.a.createElement(a.a,{to:l,className:f},d)}},450:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);
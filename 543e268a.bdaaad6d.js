/*! For license information please see 543e268a.bdaaad6d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{252:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(444)),c=n(452),i=(n(572),{last_modified_on:"2021-06-19",title:"What's next?",description:"Where should I go to learn more about Qovery?"}),u={id:"getting-started/whats-next",title:"What's next?",description:"Where should I go to learn more about Qovery?",source:"@site/docs/getting-started/whats-next.md",permalink:"/docs/getting-started/whats-next",sidebar:"docs",previous:{title:"Deploy my application",permalink:"/docs/getting-started/deploy-my-app"},next:{title:"Using Qovery",permalink:"/docs/using-qovery"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Before you go any further, make sure you have followed and finished the basic Getting Started Guide:"),Object(o.b)(c.a,{to:"/guides/getting-started/",mdxType:"Jump"},"Getting Started Guide"),Object(o.b)("p",null,"After you have hands-on experience with Qovery, you can learn more about all the concepts and features in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/"}),Object(o.b)("em",{parentName:"a"},"Using Qovery")),"\nsubsections:"),Object(o.b)(c.a,{to:"/docs/using-qovery",mdxType:"Jump"},"Using Qovery"))}p.isMDXComponent=!0},442:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},444:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return n?a.a.createElement(m,i({ref:t},s,{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},449:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),c=n(39),i=n(453),u=n(20),s=n.n(u);t.a=function(e){var t,n=e.to,u=e.href,l=n||u,p=Object(i.a)(l),f=Object(a.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(l),function(){d&&t&&t.disconnect()}}),[l,d,p]),l&&p?o.a.createElement(c.b,Object(r.a)({},e,{onMouseEnter:function(){f.current||(window.docusaurus.preload(l),f.current=!0)},innerRef:function(e){var n,r;d&&e&&p&&(n=e,r=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:l})):o.a.createElement("a",Object(r.a)({},e,{href:l}))}},452:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(449),c=n(442),i=n.n(c);n(134);t.a=function(e){var t=e.children,n=e.className,r=e.badge,c=e.leftIcon,u=e.rightIcon,s=e.size,l=e.target,p=e.to,f=i()("jump-to","jump-to--"+s,n),d=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},c&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+c})),a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return l?a.a.createElement("a",{href:p,target:l,className:f},d):a.a.createElement(o.a,{to:p,className:f},d)}},453:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))},572:function(e,t,n){"use strict";n(0)}}]);
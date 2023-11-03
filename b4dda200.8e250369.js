/*! For license information please see b4dda200.8e250369.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{322:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return f}));var n=r(1),o=r(9),a=(r(0),r(417)),i=r(416),c=r(424),s={last_modified_on:"2023-11-02",title:"Troubleshoot",description:"Everything you need to troubleshoot your application with Qovery",sidebar_label:"hidden",hide_pagination:!0},u={id:"using-qovery/troubleshoot",title:"Troubleshoot",description:"Everything you need to troubleshoot your application with Qovery",source:"@site/docs/using-qovery/troubleshoot.md",permalink:"/docs/using-qovery/troubleshoot",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Image Mirroring",permalink:"/docs/using-qovery/deployment/image-mirroring"},next:{title:"Application Troubleshoot",permalink:"/docs/using-qovery/troubleshoot/application-troubleshoot"}},l=[],p={rightToc:l};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)(i.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"In this guide, you'll find common mistakes, and how to resolve them. If you don't find what you need here, ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"please use the forum"),".")),Object(a.b)("p",null,"This guide is divided into three sections that will guide you through your troubleshooting depending on the issue you face"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Deployment issues: guide through to fix the deployment "),Object(a.b)("li",{parentName:"ul"},"Run issues : App in error -> provide Pod errors, performance issues (?), dropped request(nginx investigations)"),Object(a.b)("li",{parentName:"ul"},"Cluster issues: ")),Object(a.b)(c.a,{to:"/docs/using-qovery/troubleshoot/application-troubleshoot/",mdxType:"Jump"},"Application troubleshoot"),Object(a.b)(c.a,{to:"/docs/using-qovery/troubleshoot/cluster-troubleshoot/",mdxType:"Jump"},"Cluster troubleshoot"),Object(a.b)(c.a,{to:"/docs/using-qovery/troubleshoot/database-troubleshoot/",mdxType:"Jump"},"Database troubleshoot"),Object(a.b)(c.a,{to:"/docs/using-qovery/troubleshoot/lifecycle-troubleshoot/",mdxType:"Jump"},"Lifecycle troubleshoot"))}f.isMDXComponent=!0},415:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},416:function(e,t,r){"use strict";r(418);var n=r(0),o=r.n(n),a=r(415),i=r.n(a);r(132);t.a=function(e){var t=e.children,r=e.classNames,n=e.fill,a=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return o.a.createElement("div",{className:i()(r,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:i()("feather","icon-"+(a||s))}),t)}},417:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return r?o.a.createElement(b,c({ref:t},u,{components:r})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},418:function(e,t,r){var n=r(12);n(n.P,"Array",{fill:r(419)}),r(74)("fill")},419:function(e,t,r){"use strict";var n=r(27),o=r(75),a=r(26);e.exports=function(e){for(var t=n(this),r=a(t.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,r),s=i>2?arguments[2]:void 0,u=void 0===s?r:o(s,r);u>c;)t[c++]=e;return t}},422:function(e,t,r){"use strict";var n=r(1),o=r(0),a=r.n(o),i=r(39),c=r(425),s=r(20),u=r.n(s);t.a=function(e){var t,r=e.to,s=e.href,l=r||s,p=Object(c.a)(l),f=Object(o.useRef)(!1),d=u.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(l),function(){d&&t&&t.disconnect()}}),[l,d,p]),l&&p?a.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){f.current||(window.docusaurus.preload(l),f.current=!0)},innerRef:function(e){var r,n;d&&e&&p&&(r=e,n=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:l})):a.a.createElement("a",Object(n.a)({},e,{href:l}))}},424:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(422),i=r(415),c=r.n(i);r(133);t.a=function(e){var t=e.children,r=e.className,n=e.badge,i=e.leftIcon,s=e.rightIcon,u=e.size,l=e.target,p=e.to,f=c()("jump-to","jump-to--"+u,r),d=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},i&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+i})),o.a.createElement("div",{className:"jump-to--main"},n?o.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return l?o.a.createElement("a",{href:p,target:l,className:f},d):o.a.createElement(a.a,{to:p,className:f},d)}},425:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}r.d(t,"a",(function(){return n}))}}]);
/*! For license information please see 4354960d.19380b10.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{233:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),o=(n(0),n(444)),c=n(452),i={last_modified_on:"2023-06-05",title:"Deploy my application",description:"How to deploy your application"},u={id:"getting-started/deploy-my-app",title:"Deploy my application",description:"How to deploy your application",source:"@site/docs/getting-started/deploy-my-app.md",permalink:"/docs/getting-started/deploy-my-app",sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/getting-started/install-qovery/kubernetes/faq"},next:{title:"What's next?",permalink:"/docs/getting-started/whats-next"}},p=[{value:"Advanced",id:"advanced",children:[]}],s={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Check our video tutorial to learn how to quickly deploy your application with Qovery!"),Object(o.b)(c.a,{to:"/guides/getting-started",mdxType:"Jump"},"Deploy your application"),Object(o.b)("h2",{id:"advanced"},"Advanced"),Object(o.b)("p",null,"Once you know how to deploy a simple application, take a look at how to go beyond with Qovery."),Object(o.b)(c.a,{to:"/guides/advanced",mdxType:"Jump"},"Advanced"))}l.isMDXComponent=!0},442:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},444:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(n),f=r,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||o;return n?a.a.createElement(m,i({ref:t},p,{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},449:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),c=n(39),i=n(453),u=n(20),p=n.n(u);t.a=function(e){var t,n=e.to,u=e.href,s=n||u,l=Object(i.a)(s),d=Object(a.useRef)(!1),f=p.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!f&&l&&window.docusaurus.prefetch(s),function(){f&&t&&t.disconnect()}}),[s,f,l]),s&&l?o.a.createElement(c.b,Object(r.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(s),d.current=!0)},innerRef:function(e){var n,r;f&&e&&l&&(n=e,r=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:s})):o.a.createElement("a",Object(r.a)({},e,{href:s}))}},452:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(449),c=n(442),i=n.n(c);n(134);t.a=function(e){var t=e.children,n=e.className,r=e.badge,c=e.leftIcon,u=e.rightIcon,p=e.size,s=e.target,l=e.to,d=i()("jump-to","jump-to--"+p,n),f=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},c&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+c})),a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return s?a.a.createElement("a",{href:l,target:s,className:d},f):a.a.createElement(o.a,{to:l,className:d},f)}},453:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);
/*! For license information please see d2c61796.37f296f6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{379:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),o=(r(0),r(434)),i=r(439),c={last_modified_on:"2021-10-21",title:"Rails",description:"Getting started with Rails and Qovery"},s={id:"using-qovery/quickstart/rails",title:"Rails",description:"Getting started with Rails and Qovery",source:"@site/docs/using-qovery/quickstart/rails.md",permalink:"/docs/using-qovery/quickstart/rails",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/quickstart/rails.md",sidebar:"docs",previous:{title:"Django",permalink:"/docs/using-qovery/quickstart/django"},next:{title:"Integrations",permalink:"/docs/using-qovery/integration"}},u=[],l={rightToc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://rubyonrails.org/"}),"Rails")," is web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern."),Object(o.b)("p",null,"Here is a list of quickstarts for Rails and Qovery"),Object(o.b)(i.a,{to:"/guides/tutorial/quickstart-rails/",leftIcon:"book",mdxType:"Jump"},Object(o.b)("div",{className:"title"},"Getting started with Rails on Qovery")))}p.isMDXComponent=!0},432:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},434:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return r?a.a.createElement(m,c({ref:t},u,{components:r})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},435:function(e,t,r){"use strict";var n=r(1),a=r(0),o=r.n(a),i=r(39),c=r(440),s=r(19),u=r.n(s);t.a=function(e){var t,r=e.to,s=e.href,l=r||s,p=Object(c.a)(l),f=Object(a.useRef)(!1),d=u.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(l),function(){d&&t&&t.disconnect()}}),[l,d,p]),l&&p?o.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){f.current||(window.docusaurus.preload(l),f.current=!0)},innerRef:function(e){var r,n;d&&e&&p&&(r=e,n=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:l})):o.a.createElement("a",Object(n.a)({},e,{href:l}))}},439:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(435),i=r(432),c=r.n(i);r(132);t.a=function(e){var t=e.children,r=e.className,n=e.badge,i=e.leftIcon,s=e.rightIcon,u=e.size,l=e.target,p=e.to,f=c()("jump-to","jump-to--"+u,r),d=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},i&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+i})),a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return l?a.a.createElement("a",{href:p,target:l,className:f},d):a.a.createElement(o.a,{to:p,className:f},d)}},440:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}r.d(t,"a",(function(){return n}))}}]);
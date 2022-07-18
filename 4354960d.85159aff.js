/*! For license information please see 4354960d.85159aff.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{228:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(9),a=(n(0),n(426)),c=n(431),i={last_modified_on:"2021-10-10",title:"Deploy my application",description:"How to deploy your application"},p={id:"getting-started/deploy-my-app",title:"Deploy my application",description:"How to deploy your application",source:"@site/docs/getting-started/deploy-my-app.md",permalink:"/docs/getting-started/deploy-my-app",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/getting-started/deploy-my-app.md",sidebar:"docs",previous:{title:"Install Qovery",permalink:"/docs/getting-started/install-qovery"},next:{title:"What's next?",permalink:"/docs/getting-started/whats-next"}},u=[{value:"Advanced",id:"advanced",children:[]}],s={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Check our video tutorial to learn how to quickly deploy your application with Qovery!"),Object(a.b)(c.a,{to:"/guides/getting-started/deploy-your-first-application",mdxType:"Jump"},"Deploy your application"),Object(a.b)("h2",{id:"advanced"},"Advanced"),Object(a.b)("p",null,"Once you know how to deploy a simple application, take a look at how to go beyond with mono-repository app, full-stack app and microservices."),Object(a.b)(c.a,{to:"/guides/advanced/monorepository",mdxType:"Jump"},"Deploy a mono-repository app"),Object(a.b)(c.a,{to:"/guides/advanced/deploy-backend-and-frontend-apps",mdxType:"Jump"},"Deploy your backend and frontend"),Object(a.b)(c.a,{to:"/guides/advanced/microservices",mdxType:"Jump"},"Deploy your microservices"))}l.isMDXComponent=!0},424:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},426:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(n),f=r,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||a;return n?o.a.createElement(m,i({ref:t},u,{components:n})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},427:function(e,t,n){"use strict";var r=n(1),o=n(0),a=n.n(o),c=n(39),i=n(432),p=n(19),u=n.n(p);t.a=function(e){var t,n=e.to,p=e.href,s=n||p,l=Object(i.a)(s),d=Object(o.useRef)(!1),f=u.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!f&&l&&window.docusaurus.prefetch(s),function(){f&&t&&t.disconnect()}}),[s,f,l]),s&&l?a.a.createElement(c.b,Object(r.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(s),d.current=!0)},innerRef:function(e){var n,r;f&&e&&l&&(n=e,r=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:s})):a.a.createElement("a",Object(r.a)({},e,{href:s}))}},431:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(427),c=n(424),i=n.n(c);n(132);t.a=function(e){var t=e.children,n=e.className,r=e.badge,c=e.leftIcon,p=e.rightIcon,u=e.size,s=e.target,l=e.to,d=i()("jump-to","jump-to--"+u,n),f=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},c&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+c})),o.a.createElement("div",{className:"jump-to--main"},r?o.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(p||"chevron-right")+" arrow"}))));return s?o.a.createElement("a",{href:l,target:s,className:d},f):o.a.createElement(a.a,{to:l,className:d},f)}},432:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);
/*! For license information please see 3a03b8f9.a235e3e1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),o=(n(0),n(439)),c=n(444),i={last_modified_on:"2022-06-15",title:"Interface",description:"Everything you need to know to use Qovery",sidebar_label:"hidden",hide_pagination:!0},u={id:"using-qovery/interface",title:"Interface",description:"Everything you need to know to use Qovery",source:"@site/docs/using-qovery/interface.md",permalink:"/docs/using-qovery/interface",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/interface.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Using Qovery",permalink:"/docs/using-qovery"},next:{title:"Web interface",permalink:"/docs/using-qovery/interface/web-interface"}},s=[],f={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In the following subsections, you'll learn how to use the web interface, the CLI (Command Line Interface) and other interfaces to deploy your application with Qovery."),Object(o.b)(c.a,{to:"/docs/using-qovery/interface/cli/",mdxType:"Jump"},"Cli"),Object(o.b)(c.a,{to:"/docs/using-qovery/interface/rest-api/",mdxType:"Jump"},"Rest api"),Object(o.b)(c.a,{to:"/docs/using-qovery/interface/terraform-interface/",mdxType:"Jump"},"Terraform interface"),Object(o.b)(c.a,{to:"/docs/using-qovery/interface/web-interface/",mdxType:"Jump"},"Web interface"))}l.isMDXComponent=!0},437:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},439:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),f=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=f(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=f(n),d=r,m=l["".concat(c,".").concat(d)]||l[d]||p[d]||o;return n?a.a.createElement(m,i({ref:t},s,{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),c=n(39),i=n(445),u=n(19),s=n.n(u);t.a=function(e){var t,n=e.to,u=e.href,f=n||u,l=Object(i.a)(f),p=Object(a.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!d&&l&&window.docusaurus.prefetch(f),function(){d&&t&&t.disconnect()}}),[f,d,l]),f&&l?o.a.createElement(c.b,Object(r.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(f),p.current=!0)},innerRef:function(e){var n,r;d&&e&&l&&(n=e,r=function(){window.docusaurus.prefetch(f)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:f})):o.a.createElement("a",Object(r.a)({},e,{href:f}))}},444:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(440),c=n(437),i=n.n(c);n(132);t.a=function(e){var t=e.children,n=e.className,r=e.badge,c=e.leftIcon,u=e.rightIcon,s=e.size,f=e.target,l=e.to,p=i()("jump-to","jump-to--"+s,n),d=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},c&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+c})),a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return f?a.a.createElement("a",{href:l,target:f,className:p},d):a.a.createElement(o.a,{to:l,className:p},d)}},445:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);
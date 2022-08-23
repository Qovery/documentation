/*! For license information please see fc376fea.4b86e162.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{420:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(9),a=(n(0),n(431)),i=n(436),c={last_modified_on:"2022-08-23",title:"Configuration",description:"Everything you need to know to configure and deploy your applications on Qovery",sidebar_label:"hidden",hide_pagination:!0},u={id:"using-qovery/configuration",title:"Configuration",description:"Everything you need to know to configure and deploy your applications on Qovery",source:"@site/docs/using-qovery/configuration.md",permalink:"/docs/using-qovery/configuration",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Terraform",permalink:"/docs/using-qovery/interface/terraform-interface"},next:{title:"Organization",permalink:"/docs/using-qovery/configuration/organization"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In the following subsections, you'll learn all you need to know to configure and deploy your apps on Qovery."),Object(a.b)(i.a,{to:"/docs/using-qovery/configuration/advanced-settings/",mdxType:"Jump"},"Advanced settings"),Object(a.b)(i.a,{to:"/docs/using-qovery/configuration/application/",mdxType:"Jump"},"Application"),Object(a.b)(i.a,{to:"/docs/using-qovery/configuration/cloud-service-provider/",mdxType:"Jump"},"Cloud service provider"),Object(a.b)(i.a,{to:"/docs/using-qovery/configuration/cluster-advanced-settings/",mdxType:"Jump"},"Cluster advanced settings"),Object(a.b)(i.a,{to:"/docs/using-qovery/configuration/clusters/",mdxType:"Jump"},"Clusters"),Object(a.b)(i.a,{to:"/docs/using-qovery/configuration/database/",mdxType:"Jump"},"Database"),Object(a.b)(i.a,{to:"/docs/using-qovery/configuration/deployment-rule/",mdxType:"Jump"},"Deployment rule"),Object(a.b)(i.a,{to:"/docs/using-qovery/configuration/environment-variable/",mdxType:"Jump"},"Environment variable"),Object(a.b)(i.a,{to:"/docs/using-qovery/configuration/environment/",mdxType:"Jump"},"Environment"),Object(a.b)(i.a,{to:"/docs/using-qovery/configuration/object-storage/",mdxType:"Jump"},"Object storage"),Object(a.b)(i.a,{to:"/docs/using-qovery/configuration/organization/",mdxType:"Jump"},"Organization"),Object(a.b)(i.a,{to:"/docs/using-qovery/configuration/project/",mdxType:"Jump"},"Project"),Object(a.b)(i.a,{to:"/docs/using-qovery/configuration/secret/",mdxType:"Jump"},"Secret"))}l.isMDXComponent=!0},429:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},431:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,m=l["".concat(i,".").concat(f)]||l[f]||d[f]||a;return n?o.a.createElement(m,c({ref:t},s,{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},432:function(e,t,n){"use strict";var r=n(1),o=n(0),a=n.n(o),i=n(39),c=n(437),u=n(19),s=n.n(u);t.a=function(e){var t,n=e.to,u=e.href,p=n||u,l=Object(c.a)(p),d=Object(o.useRef)(!1),f=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!f&&l&&window.docusaurus.prefetch(p),function(){f&&t&&t.disconnect()}}),[p,f,l]),p&&l?a.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(p),d.current=!0)},innerRef:function(e){var n,r;f&&e&&l&&(n=e,r=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:p})):a.a.createElement("a",Object(r.a)({},e,{href:p}))}},436:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(432),i=n(429),c=n.n(i);n(132);t.a=function(e){var t=e.children,n=e.className,r=e.badge,i=e.leftIcon,u=e.rightIcon,s=e.size,p=e.target,l=e.to,d=c()("jump-to","jump-to--"+s,n),f=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},i&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+i})),o.a.createElement("div",{className:"jump-to--main"},r?o.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return p?o.a.createElement("a",{href:l,target:p,className:d},f):o.a.createElement(a.a,{to:l,className:d},f)}},437:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);
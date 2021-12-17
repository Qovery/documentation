/*! For license information please see ba43933d.feb96ad9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{332:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),o=(n(0),n(411)),i=(n(410),n(417),n(415),{last_modified_on:"2021-12-17",$schema:"/.meta/.schemas/guides.json",title:"Setting up Cloudflare and Custom Domain on Qovery",description:"Using Cloudflare for applications deployed on Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial","technology: qovery"],hide_pagination:!0}),c={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Setting up Cloudflare and Custom Domain on Qovery",description:"Using Cloudflare for applications deployed on Qovery",permalink:"/guides/tutorial/setting-up-cloudflare-and-custom-domain-on-qovery",readingTime:"2 min read",source:"@site/guides/tutorial/setting-up-cloudflare-and-custom-domain-on-qovery.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Setting up Cloudflare and Custom Domain on Qovery",truncated:!1,prevItem:{title:"Mono repository",permalink:"/guides/advanced/monorepository"},nextItem:{title:"Setup VPC peering on AWS with Qovery",permalink:"/guides/tutorial/aws-vpc-peering-with-qovery"}},l=[{value:"Adding a Custom Domain",id:"adding-a-custom-domain",children:[]},{value:"Cloudflare Configuration",id:"cloudflare-configuration",children:[{value:"CNAME",id:"cname",children:[]},{value:"SSL/TLS",id:"ssltls",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The guide assumes that you have an application up and running on Qovery. We'll go through the process of adding a new Custom Domain to the application and use Cloudflare as the domain provider. We also assume that you own a custom domain on Cloudflare (or any other domain registrar):"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudflare/1.png",alt:"Cloudflare"})),Object(o.b)("h2",{id:"adding-a-custom-domain"},"Adding a Custom Domain"),Object(o.b)("p",null,"First, let's open application settings:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudflare/2.png",alt:"Cloudflare"})),Object(o.b)("p",null,"Add your Cloudflare managed domain in ",Object(o.b)("inlineCode",{parentName:"p"},"Domain")," section:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudflare/3.png",alt:"Cloudflare"})),Object(o.b)("h2",{id:"cloudflare-configuration"},"Cloudflare Configuration"),Object(o.b)("h3",{id:"cname"},"CNAME"),Object(o.b)("p",null,"To finish the configuration on Cloudfalre, open the DNS Settings:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudflare/4.png",alt:"Cloudflare"})),Object(o.b)("p",null,"And add a CNAME entry with the value taken from the Qovery Console just like this:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudflare/5.png",alt:"Cloudflare"})),Object(o.b)("p",null,"You can safely use the ",Object(o.b)("inlineCode",{parentName:"p"},"Proxy")," mode."),Object(o.b)("h3",{id:"ssltls"},"SSL/TLS"),Object(o.b)("p",null,"The last step to configure the domain Cloudflare side properly, is to use the ",Object(o.b)("inlineCode",{parentName:"p"},"Full")," TLS encryption:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudflare/6.png",alt:"Cloudflare"})),Object(o.b)("p",null,"This is the requirement to make Custom Domain work properly using Cloudflare as the domain provider on Qovery."),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"After following the steps from above, our application should be accessible using the custom domain we selected:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudflare/7.png",alt:"Cloudflare"})),Object(o.b)("p",null,"In the guide we went through all the necessary steps to configure Cloudflare and Qovery to make use of your custom domain."))}s.isMDXComponent=!0},409:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},410:function(e,t,n){"use strict";n(413);var r=n(0),a=n.n(r),o=n(409),i=n.n(o);n(131);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.a.createElement(f,c({ref:t},u,{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(39),c=n(416),l=n(19),u=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,s=n||l,d=Object(c.a)(s),p=Object(a.useRef)(!1),m=u.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!m&&d&&window.docusaurus.prefetch(s),function(){m&&t&&t.disconnect()}}),[s,m,d]),s&&d?o.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(s),p.current=!0)},innerRef:function(e){var n,r;m&&e&&d&&(n=e,r=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:s})):o.a.createElement("a",Object(r.a)({},e,{href:s}))}},413:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(418)}),n(74)("fill")},414:function(e,t,n){var r=n(25).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},415:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(412),i=n(409),c=n.n(i);n(132);t.a=function(e){var t=e.children,n=e.className,r=e.badge,i=e.leftIcon,l=e.rightIcon,u=e.size,s=e.target,d=e.to,p=c()("jump-to","jump-to--"+u,n),m=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},i&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+i})),a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return s?a.a.createElement("a",{href:d,target:s,className:p},m):a.a.createElement(o.a,{to:d,className:p},m)}},416:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))},417:function(e,t,n){"use strict";n(414);var r=n(0),a=n.n(r),o=n(410);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},418:function(e,t,n){"use strict";var r=n(27),a=n(75),o=n(26);e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,u=void 0===l?n:a(l,n);u>c;)t[c++]=e;return t}}}]);
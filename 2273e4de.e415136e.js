/*! For license information please see 2273e4de.e415136e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),o=(n(0),n(413)),i=(n(412),n(419),n(417),{last_modified_on:"2021-12-17",$schema:"/.meta/.schemas/guides.json",title:"How to use Cloudflare on Qovery",description:"Using Cloudflare for applications deployed on Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial","language: javascript"],hide_pagination:!0}),l={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How to use Cloudflare on Qovery",description:"Using Cloudflare for applications deployed on Qovery",permalink:"/guides/tutorial/how-to-use-cloudflare-on-qovery",readingTime:"2 min read",source:"@site/guides/tutorial/how-to-use-cloudflare-on-qovery.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"language: javascript",permalink:"/guides/tags/language-javascript"}],title:"How to use Cloudflare on Qovery",truncated:!1,prevItem:{title:"How to deploy Strapi with PostgreSQL",permalink:"/guides/tutorial/how-to-deploy-strapi-with-postgresql"},nextItem:{title:"How to use CloudFront with a React frontend application on Qovery",permalink:"/guides/tutorial/how-to-use-cloudfront-with-react-frontend-application-on-qovery"}},c=[{value:"Adding a Custom Domain",id:"adding-a-custom-domain",children:[]},{value:"Cloudflare Configuration",id:"cloudflare-configuration",children:[{value:"CNAME",id:"cname",children:[]},{value:"SSL/TLS",id:"ssltls",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],u={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The guide assumes that you have an application up and running on Qovery. We'll go through the process of adding a new Custom Domain to the application and use Cloudflare as the domain provider. We also assume that you own a custom domain on Cloudflare (or any other domain registrar):"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudflare/1.png",alt:"Cloudflare"})),Object(o.b)("h2",{id:"adding-a-custom-domain"},"Adding a Custom Domain"),Object(o.b)("p",null,"First, let's open application settings:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudflare/2.png",alt:"Cloudflare"})),Object(o.b)("p",null,"Add your Cloudflare managed domain in ",Object(o.b)("inlineCode",{parentName:"p"},"Domain")," section:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudflare/3.png",alt:"Cloudflare"})),Object(o.b)("h2",{id:"cloudflare-configuration"},"Cloudflare Configuration"),Object(o.b)("h3",{id:"cname"},"CNAME"),Object(o.b)("p",null,"To finish the configuration on Cloudfalre, open the DNS Settings:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudflare/4.png",alt:"Cloudflare"})),Object(o.b)("p",null,"And add a CNAME entry with the value taken from the Qovery Console just like this:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudflare/5.png",alt:"Cloudflare"})),Object(o.b)("p",null,"You can safely use the ",Object(o.b)("inlineCode",{parentName:"p"},"Proxy")," mode."),Object(o.b)("h3",{id:"ssltls"},"SSL/TLS"),Object(o.b)("p",null,"The last step to configure the domain Cloudflare side properly, is to use the ",Object(o.b)("inlineCode",{parentName:"p"},"Full")," TLS encryption:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudflare/6.png",alt:"Cloudflare"})),Object(o.b)("p",null,"This is the requirement to make Custom Domain work properly using Cloudflare as the domain provider on Qovery."),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"After following the steps from above, our application should be accessible using the custom domain we selected:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/cloudflare/7.png",alt:"Cloudflare"})),Object(o.b)("p",null,"In the guide we went through all the necessary steps to configure Cloudflare and Qovery to make use of your custom domain."))}s.isMDXComponent=!0},411:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},412:function(e,t,n){"use strict";n(415);var r=n(0),a=n.n(r),o=n(411),i=n.n(o);n(131);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,o=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+l,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||c))}),t)}},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return n?a.a.createElement(m,l({ref:t},u,{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},414:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(39),l=n(418),c=n(19),u=n.n(c);t.a=function(e){var t,n=e.to,c=e.href,s=n||c,p=Object(l.a)(s),d=Object(a.useRef)(!1),f=u.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!f&&p&&window.docusaurus.prefetch(s),function(){f&&t&&t.disconnect()}}),[s,f,p]),s&&p?o.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(s),d.current=!0)},innerRef:function(e){var n,r;f&&e&&p&&(n=e,r=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:s})):o.a.createElement("a",Object(r.a)({},e,{href:s}))}},415:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(420)}),n(74)("fill")},416:function(e,t,n){var r=n(25).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},417:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(414),i=n(411),l=n.n(i);n(132);t.a=function(e){var t=e.children,n=e.className,r=e.badge,i=e.leftIcon,c=e.rightIcon,u=e.size,s=e.target,p=e.to,d=l()("jump-to","jump-to--"+u,n),f=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},i&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+i})),a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return s?a.a.createElement("a",{href:p,target:s,className:d},f):a.a.createElement(o.a,{to:p,className:d},f)}},418:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))},419:function(e,t,n){"use strict";n(416);var r=n(0),a=n.n(r),o=n(412);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},420:function(e,t,n){"use strict";var r=n(27),a=n(75),o=n(26);e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,l=a(i>1?arguments[1]:void 0,n),c=i>2?arguments[2]:void 0,u=void 0===c?n:a(c,n);u>l;)t[l++]=e;return t}}}]);
/*! For license information please see 888595cd.1243205a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{306:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(1),a=r(9),o=(r(0),r(457)),i=r(456),c=r(463),l={last_modified_on:"2023-05-20",title:"Secret Manager",description:"Learn how to configure your Secret Manager provider in Qovery",sidebar_label:"hidden",hide_pagination:!0},u={id:"using-qovery/integration/secret-manager",title:"Secret Manager",description:"Learn how to configure your Secret Manager provider in Qovery",source:"@site/docs/using-qovery/integration/secret-manager.md",permalink:"/docs/using-qovery/integration/secret-manager",sidebar_label:"hidden",sidebar:"docs",previous:{title:"New Relic",permalink:"/docs/using-qovery/integration/monitoring/new-relic"},next:{title:"Doppler",permalink:"/docs/using-qovery/integration/secret-manager/doppler"}},s=[{value:"FAQ",id:"faq",children:[{value:"I don&#39;t find my Secret Manager provider, what should I do?",id:"i-dont-find-my-secret-manager-provider-what-should-i-do",children:[]},{value:"By using the Qovery Lifecycle Jobs",id:"by-using-the-qovery-lifecycle-jobs",children:[]},{value:"By using kubectl",id:"by-using-kubectl",children:[]},{value:"Do you need help?",id:"do-you-need-help",children:[]}]}],p={rightToc:s};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{to:"/docs/using-qovery/integration/secret-manager/doppler",mdxType:"Jump"},"Doppler"),Object(o.b)(c.a,{to:"/docs/using-qovery/integration/secret-manager/aws-secrets-manager",mdxType:"Jump"},"AWS Secrets Manager"),Object(o.b)("h2",{id:"faq"},"FAQ"),Object(o.b)("h3",{id:"i-dont-find-my-secret-manager-provider-what-should-i-do"},"I don't find my Secret Manager provider, what should I do?"),Object(o.b)("p",null,"Basically, Qovery relies on Kubernetes to run your apps. Meaning, Qovery will support your secret manager if their maintainers provide a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://helm.sh"}),"Helm Chart"),"."),Object(o.b)("p",null,"If your secret manager provides a Helm Chart, then you can install it:"),Object(o.b)("h3",{id:"by-using-the-qovery-lifecycle-jobs"},"By using the Qovery Lifecycle Jobs"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Follow ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/guides/tutorial/how-to-deploy-helm-charts/"}),"this guide")," to deploy your Helm Chart with the Qovery Lifecycle Jobs.")),Object(o.b)("h3",{id:"by-using-kubectl"},"By using kubectl"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/guides/tutorial/how-to-connect-to-your-eks-cluster-with-kubectl/"}),"Connect to your Qovery Kubernetes cluster"),"."),Object(o.b)("li",{parentName:"ol"},"Install the helm chart.")),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Helm is a Kubernetes package manager.")),Object(o.b)("h3",{id:"do-you-need-help"},"Do you need help?"),Object(o.b)("p",null,"Feel free to open a thread on our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"Community Forum"),". We will be happy to help you."))}d.isMDXComponent=!0},455:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},456:function(e,t,r){"use strict";r(459);var n=r(0),a=r.n(n),o=r(455),i=r.n(o);r(132);t.a=function(e){var t=e.children,r=e.classNames,n=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:i()(r,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},457:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?a.a.createElement(b,c({ref:t},u,{components:r})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},458:function(e,t,r){"use strict";var n=r(1),a=r(0),o=r.n(a),i=r(39),c=r(464),l=r(20),u=r.n(l);t.a=function(e){var t,r=e.to,l=e.href,s=r||l,p=Object(c.a)(s),d=Object(a.useRef)(!1),f=u.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!f&&p&&window.docusaurus.prefetch(s),function(){f&&t&&t.disconnect()}}),[s,f,p]),s&&p?o.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(s),d.current=!0)},innerRef:function(e){var r,n;f&&e&&p&&(r=e,n=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:s})):o.a.createElement("a",Object(n.a)({},e,{href:s}))}},459:function(e,t,r){var n=r(12);n(n.P,"Array",{fill:r(462)}),r(74)("fill")},462:function(e,t,r){"use strict";var n=r(28),a=r(75),o=r(27);e.exports=function(e){for(var t=n(this),r=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,r),l=i>2?arguments[2]:void 0,u=void 0===l?r:a(l,r);u>c;)t[c++]=e;return t}},463:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(458),i=r(455),c=r.n(i);r(133);t.a=function(e){var t=e.children,r=e.className,n=e.badge,i=e.leftIcon,l=e.rightIcon,u=e.size,s=e.target,p=e.to,d=c()("jump-to","jump-to--"+u,r),f=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},i&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+i})),a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return s?a.a.createElement("a",{href:p,target:s,className:d},f):a.a.createElement(o.a,{to:p,className:d},f)}},464:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}r.d(t,"a",(function(){return n}))}}]);
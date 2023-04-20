/*! For license information please see 1d187ae3.aa13cd97.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(452)),i=n(451),c=(n(458),n(456),{last_modified_on:"2023-04-19",title:"API Token",description:"Learn how to manage the API token via Qovery"}),s={id:"using-qovery/configuration/organization/api-token",title:"API Token",description:"Learn how to manage the API token via Qovery",source:"@site/docs/using-qovery/configuration/organization/api-token.md",permalink:"/docs/using-qovery/configuration/organization/api-token",sidebar:"docs",previous:{title:"Container Registry",permalink:"/docs/using-qovery/configuration/organization/container-registry"},next:{title:"Project",permalink:"/docs/using-qovery/configuration/project"}},l=[{value:"Create a new token",id:"create-a-new-token",children:[]},{value:"Delete a token",id:"delete-a-token",children:[]},{value:"Edit a token",id:"edit-a-token",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"API token allows third-party applications or script to access your organization via the Qovery API (CI/CD, Terraform script, Pulumi etc..)."),Object(o.b)("p",null,"You can manage the API tokens attached to your organization directly from the Qovery console."),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"You can manage the API tokens of your organization with the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/#generate-api-token"}),"Qovery CLI")," as well")),Object(o.b)("p",null,"You can access the token API configuration by opening the ",Object(o.b)("inlineCode",{parentName:"p"},"Token API")," section within the organization settings."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/configuration/organization/access_settings.png",alt:"How to access your organization settings"})),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/configuration/organization/token_api_access.png",alt:"How to access your Token API section"})),Object(o.b)("h2",{id:"create-a-new-token"},"Create a new token"),Object(o.b)("p",null,"You can create a new token API by pressing the ",Object(o.b)("inlineCode",{parentName:"p"},"Add")," button. Once you have provided a name and a description, the token value will be displayed on the interface."),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Make sure you safely store the token returned by the UI. You won't be able to retrieve it again (you will have to create a new one)")),Object(o.b)("p",null,"Note that every Token API generated has the ",Object(o.b)("inlineCode",{parentName:"p"},"Admin")," permission rights. See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/members-rbac/#roles-based-access-control-rbac"}),"RBAC section")," to know more."),Object(o.b)("h2",{id:"delete-a-token"},"Delete a token"),Object(o.b)("p",null,"You can create a new token API by pressing the ",Object(o.b)("inlineCode",{parentName:"p"},"Bin")," button next to the Token you want to delete."),Object(o.b)("h2",{id:"edit-a-token"},"Edit a token"),Object(o.b)("p",null,"This functionality is not yet available"))}p.isMDXComponent=!0},450:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},451:function(e,t,n){"use strict";n(455);var r=n(0),a=n.n(r),o=n(450),i=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,o=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||s))}),t)}},452:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||f[b]||o;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},453:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(39),c=n(459),s=n(20),l=n.n(s);t.a=function(e){var t,n=e.to,s=e.href,u=n||s,p=Object(c.a)(u),f=Object(a.useRef)(!1),b=l.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!b&&p&&window.docusaurus.prefetch(u),function(){b&&t&&t.disconnect()}}),[u,b,p]),u&&p?o.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){f.current||(window.docusaurus.preload(u),f.current=!0)},innerRef:function(e){var n,r;b&&e&&p&&(n=e,r=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:u})):o.a.createElement("a",Object(r.a)({},e,{href:u}))}},454:function(e,t,n){var r=n(26).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},455:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(457)}),n(74)("fill")},456:function(e,t,n){"use strict";n(454);var r=n(0),a=n.n(r),o=n(451);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},457:function(e,t,n){"use strict";var r=n(28),a=n(75),o=n(27);e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),s=i>2?arguments[2]:void 0,l=void 0===s?n:a(s,n);l>c;)t[c++]=e;return t}},458:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(453),i=n(450),c=n.n(i);n(133);t.a=function(e){var t=e.children,n=e.className,r=e.badge,i=e.leftIcon,s=e.rightIcon,l=e.size,u=e.target,p=e.to,f=c()("jump-to","jump-to--"+l,n),b=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},i&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+i})),a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return u?a.a.createElement("a",{href:p,target:u,className:f},b):a.a.createElement(o.a,{to:p,className:f},b)}},459:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);
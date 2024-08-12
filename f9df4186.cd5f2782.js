/*! For license information please see f9df4186.cd5f2782.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{442:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return s}));var o=t(1),n=t(9),a=(t(0),t(455)),i=t(454),c={last_modified_on:"2024-08-12",title:"Terraform Provider",description:"Learn how to manage the Qovery configuration via our Terraform Provider"},l={id:"using-qovery/integration/terraform-provider",title:"Terraform Provider",description:"Learn how to manage the Qovery configuration via our Terraform Provider",source:"@site/docs/using-qovery/integration/terraform-provider.md",permalink:"/docs/using-qovery/integration/terraform-provider",sidebar:"docs",previous:{title:"Webhooks",permalink:"/docs/using-qovery/integration/webhook"},next:{title:"API",permalink:"/docs/using-qovery/integration/api-integration"}},p=[{value:"GitOps",id:"gitops",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Terraform Exporter",id:"terraform-exporter",children:[]},{value:"Resources",id:"resources",children:[]}],u={rightToc:p};function s(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Qovery integrates with Terraform to create a complete workflow with a strong developer and operations experience for the different teams from development to critical production applications. By integrating Terraform with Qovery, your team can quickly implement governance at scale while drastically improving the developer experience when deploying and managing applications."),Object(a.b)("p",null,"Thanks to our ",Object(a.b)("strong",{parentName:"p"},"Terraform provider"),", you can automate the creation of your organization, project, clusters, applications and environments (and more)."),Object(a.b)(i.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"Check out our Terraform Provider on ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://registry.terraform.io/providers/Qovery/qovery/latest/docs"}),"Terraform Registry")," and on ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Qovery/terraform-provider-qovery"}),"GitHub"),".")),Object(a.b)("h3",{id:"gitops"},"GitOps"),Object(a.b)("p",null,"If you want to manage Qovery in a GitOps way, have a look at ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/tutorial/gitops-with-qovery/"}),"our guide here")),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("p",null,"Check out our Terraform examples ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Qovery/terraform-examples"}),"here"),"."),Object(a.b)("h3",{id:"terraform-exporter"},"Terraform Exporter"),Object(a.b)("p",null,"Qovery allows you to easily export your environment as a Terraform Manifest and from there manage the configuration of the environment via our Terraform Provider. Check ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/#terraform-exporter"}),"the Terraform Exporter documentation")," to know more."),Object(a.b)("h3",{id:"resources"},"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://registry.terraform.io/providers/Qovery/qovery/latest/docs"}),"Qovery Terraform Registry")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/Qovery/terraform-provider-qovery"}),"Qovery Terraform Provider source code")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/Qovery/terraform-examples"}),"Terraform Examples"))))}s.isMDXComponent=!0},453:function(e,r,t){var o;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var i=n.apply(null,o);i&&e.push(i)}else if("object"===a)for(var c in o)t.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(r,[]))||(e.exports=o)}()},454:function(e,r,t){"use strict";t(456);var o=t(0),n=t.n(o),a=t(453),i=t.n(a);t(132);r.a=function(e){var r=e.children,t=e.classNames,o=e.fill,a=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return n.a.createElement("div",{className:i()(t,"alert","alert--"+c,{"alert--fill":o,"alert--icon":!1!==a}),role:"alert"},!1!==a&&n.a.createElement("i",{className:i()("feather","icon-"+(a||l))}),r)}},455:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return b}));var o=t(0),n=t.n(o);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=n.a.createContext({}),u=function(e){var r=n.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},s=function(e){var r=u(e.components);return n.a.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},m=Object(o.forwardRef)((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=o,b=s["".concat(i,".").concat(m)]||s[m]||f[m]||a;return t?n.a.createElement(b,c({ref:r},p,{components:t})):n.a.createElement(b,c({ref:r},p))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},456:function(e,r,t){var o=t(12);o(o.P,"Array",{fill:t(457)}),t(74)("fill")},457:function(e,r,t){"use strict";var o=t(27),n=t(75),a=t(26);e.exports=function(e){for(var r=o(this),t=a(r.length),i=arguments.length,c=n(i>1?arguments[1]:void 0,t),l=i>2?arguments[2]:void 0,p=void 0===l?t:n(l,t);p>c;)r[c++]=e;return r}}}]);
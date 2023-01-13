/*! For license information please see b98931a2.dbbbcd9f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{353:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return p}));var n=t(1),a=t(9),i=(t(0),t(446)),o=t(445),c={last_modified_on:"2021-07-26",title:"Backup and Restore",description:"Your data are safe and can be easily restored"},l={id:"security-and-compliance/backup-and-restore",title:"Backup and Restore",description:"Your data are safe and can be easily restored",source:"@site/docs/security-and-compliance/backup-and-restore.md",permalink:"/docs/security-and-compliance/backup-and-restore",sidebar:"docs",previous:{title:"Security and Compliance",permalink:"/docs/security-and-compliance"},next:{title:"Encryption",permalink:"/docs/security-and-compliance/encryption"}},s=[{value:"Backups",id:"backups",children:[{value:"Applications",id:"applications",children:[]},{value:"Services",id:"services",children:[]}]},{value:"Restore",id:"restore",children:[{value:"Applications",id:"applications-1",children:[]},{value:"Services",id:"services-1",children:[]}]}],u={rightToc:s};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Backups and restore are frequently a nightmare to setup. Especially for databases. Qovery helps you to get this part ",Object(i.b)("strong",{parentName:"p"},"always automatically managed by the Cloud provider"),"."),Object(i.b)("h2",{id:"backups"},"Backups"),Object(i.b)("h3",{id:"applications"},"Applications"),Object(i.b)("p",null,"When containers' applications are successfully built, ",Object(i.b)("strong",{parentName:"p"},"all containers are kept for possible future rollback"),"."),Object(i.b)("h3",{id:"services"},"Services"),Object(i.b)("p",null,"Take a look at the desired service to know how they are backed up."),Object(i.b)("h2",{id:"restore"},"Restore"),Object(i.b)("h3",{id:"applications-1"},"Applications"),Object(i.b)("p",null,"As the Qovery configuration file is in your git repository and versioned, you can rollback any version when you want."),Object(i.b)(o.a,{type:"warning",mdxType:"Alert"},Object(i.b)("p",null,"When you rollback a commit containing a Qovery configuration change, ensure there are no other changes to avoid unwanted behavior.")),Object(i.b)("h3",{id:"services-1"},"Services"),Object(i.b)("p",null,"Take a look at the desired service to know how you can restore it."))}p.isMDXComponent=!0},444:function(e,r,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=a.apply(null,n);o&&e.push(o)}else if("object"===i)for(var c in n)t.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(r,[]))||(e.exports=n)}()},445:function(e,r,t){"use strict";t(449);var n=t(0),a=t.n(n),i=t(444),o=t.n(i);t(132);r.a=function(e){var r=e.children,t=e.classNames,n=e.fill,i=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:o()(t,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==i}),role:"alert"},!1!==i&&a.a.createElement("i",{className:o()("feather","icon-"+(i||l))}),r)}},446:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},p=function(e){var r=u(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=n,b=p["".concat(o,".").concat(f)]||p[f]||d[f]||i;return t?a.a.createElement(b,c({ref:r},s,{components:t})):a.a.createElement(b,c({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},449:function(e,r,t){var n=t(12);n(n.P,"Array",{fill:t(453)}),t(74)("fill")},453:function(e,r,t){"use strict";var n=t(28),a=t(75),i=t(27);e.exports=function(e){for(var r=n(this),t=i(r.length),o=arguments.length,c=a(o>1?arguments[1]:void 0,t),l=o>2?arguments[2]:void 0,s=void 0===l?t:a(l,t);s>c;)r[c++]=e;return r}}}]);
/*! For license information please see 6b0e113a.ca760c8d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{249:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),i=n(9),a=(n(0),n(390)),o=n(389),c=(n(396),n(394),{last_modified_on:"2023-04-19",title:"Container Registry",description:"Learn how to manage the container registry allowed in your organization"}),s={id:"using-qovery/configuration/organization/container-registry",title:"Container Registry",description:"Learn how to manage the container registry allowed in your organization",source:"@site/docs/using-qovery/configuration/organization/container-registry.md",permalink:"/docs/using-qovery/configuration/organization/container-registry",sidebar:"docs",previous:{title:"Git Repository access",permalink:"/docs/using-qovery/configuration/organization/git-repository-access"},next:{title:"API Token",permalink:"/docs/using-qovery/configuration/organization/api-token"}},l=[{value:"Create a Container Registry",id:"create-a-container-registry",children:[]},{value:"Modify or Delete an existing registry",id:"modify-or-delete-an-existing-registry",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This section allows you to define the list of container registries that can be used within your organization. Only images stored on those container registries are allowed to be deployed on your cluster."),Object(a.b)("p",null,"You can access this section by opening the Organization Settings -> Container Registries"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/configuration/organization/access_settings.png",alt:"How to access your organization settings"})),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/configuration/organization/container_1.png",alt:"Application"})),Object(a.b)(o.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,'When accessing the interface for the first time, you will see that a container registry already exist (called "registry-{$UIID}"). This container registry is created by Qovery on your infrastructure and is used to manage the deployment of your applications. You are free to use them to store your applications but you need to retrieve the credentials from your cloud provider console.')),Object(a.b)("h3",{id:"create-a-container-registry"},"Create a Container Registry"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/configuration/organization/container_creation.png",alt:"Application"})),Object(a.b)("p",null,'By clicking on "Add Registry" you will be able to create a new Container Registry by filling these information:'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Registry Name"),Object(a.b)("li",{parentName:"ul"},"Description"),Object(a.b)("li",{parentName:"ul"},"Registry Url: the base url of the registry (example: ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://docker.io"}),"https://docker.io"),", ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://public.ecr.aws"}),"https://public.ecr.aws")," etc..)"),Object(a.b)("li",{parentName:"ul"},"Registry type: you can chose among DockerHub, Public ECR, ECR (AWS private CR), Scaleway CR (Scaleway private CR)"),Object(a.b)("li",{parentName:"ul"},"Credentials: these depends on the chosen registry type. If a container registry is public, you don't need to fill this part. ")),Object(a.b)(o.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"We encourage you to set credentials for Docker Hub due to the limits on the pull rate. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.docker.com/increase-rate-limits/"}),"See here")," for more details")),Object(a.b)("p",null,"Now that you have created the registry, you can start using it in order to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/#deploying-from-a-container-registry"}),"create and deploy a service")," using the images stored within it."),Object(a.b)("h3",{id:"modify-or-delete-an-existing-registry"},"Modify or Delete an existing registry"),Object(a.b)("p",null,'You can modify an existing container registry by clicking on the "Wheel" button next to it\nYou can delete an existing container registry by clicking on the "Trash" button next to it'),Object(a.b)(o.a,{type:"alert",mdxType:"Alert"},Object(a.b)("p",null,"Before deleting it, make sure that there is no application within your organization using an image stored in this registry.")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/configuration/organization/container_edit.png",alt:"Application"})))}p.isMDXComponent=!0},388:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var o=i.apply(null,r);o&&e.push(o)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},389:function(e,t,n){"use strict";n(391);var r=n(0),i=n.n(r),a=n(388),o=n.n(a);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,a=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return i.a.createElement("div",{className:o()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&i.a.createElement("i",{className:o()("feather","icon-"+(a||s))}),t)}},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(o,".").concat(f)]||p[f]||g[f]||a;return n?i.a.createElement(b,c({ref:t},l,{components:n})):i.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},391:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(392)}),n(74)("fill")},392:function(e,t,n){"use strict";var r=n(27),i=n(75),a=n(26);e.exports=function(e){for(var t=r(this),n=a(t.length),o=arguments.length,c=i(o>1?arguments[1]:void 0,n),s=o>2?arguments[2]:void 0,l=void 0===s?n:i(s,n);l>c;)t[c++]=e;return t}},393:function(e,t,n){var r=n(28).f,i=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in i||n(10)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},394:function(e,t,n){"use strict";n(393);var r=n(0),i=n.n(r),a=n(389);t.a=function(e){var t=e.children,n=e.name;return i.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},i.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},395:function(e,t,n){"use strict";var r=n(1),i=n(0),a=n.n(i),o=n(39),c=n(397),s=n(20),l=n.n(s);t.a=function(e){var t,n=e.to,s=e.href,u=n||s,p=Object(c.a)(u),g=Object(i.useRef)(!1),f=l.a.canUseIntersectionObserver;return Object(i.useEffect)((function(){return!f&&p&&window.docusaurus.prefetch(u),function(){f&&t&&t.disconnect()}}),[u,f,p]),u&&p?a.a.createElement(o.b,Object(r.a)({},e,{onMouseEnter:function(){g.current||(window.docusaurus.preload(u),g.current=!0)},innerRef:function(e){var n,r;f&&e&&p&&(n=e,r=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:u})):a.a.createElement("a",Object(r.a)({},e,{href:u}))}},396:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(395),o=n(388),c=n.n(o);n(133);t.a=function(e){var t=e.children,n=e.className,r=e.badge,o=e.leftIcon,s=e.rightIcon,l=e.size,u=e.target,p=e.to,g=c()("jump-to","jump-to--"+l,n),f=i.a.createElement("div",{className:"jump-to--inner"},i.a.createElement("div",{className:"jump-to--inner-2"},o&&i.a.createElement("div",{className:"jump-to--left"},i.a.createElement("i",{className:"feather icon-"+o})),i.a.createElement("div",{className:"jump-to--main"},r?i.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),i.a.createElement("div",{className:"jump-to--right"},i.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return u?i.a.createElement("a",{href:p,target:u,className:g},f):i.a.createElement(a.a,{to:p,className:g},f)}},397:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);
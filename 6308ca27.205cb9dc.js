/*! For license information please see 6308ca27.205cb9dc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{260:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return m}));var i=r(1),n=r(9),a=(r(0),r(417)),o=(r(424),r(416)),s=(r(421),{last_modified_on:"2023-10-11",title:"Image Mirroring",description:"Learn how images are mirrored within your cloud account"}),c={id:"using-qovery/deployment/image-mirroring",title:"Image Mirroring",description:"Learn how images are mirrored within your cloud account",source:"@site/docs/using-qovery/deployment/image-mirroring.md",permalink:"/docs/using-qovery/deployment/image-mirroring",sidebar:"docs",previous:{title:"Deployment Strategies",permalink:"/docs/using-qovery/deployment/deployment-strategies"},next:{title:"Troubleshoot",permalink:"/docs/using-qovery/troubleshoot"}},l=[{value:"Application built via the Qovery pipeline",id:"application-built-via-the-qovery-pipeline",children:[]},{value:"Application deployed from a contianer registry",id:"application-deployed-from-a-contianer-registry",children:[{value:"Why image mirroring is necessary",id:"why-image-mirroring-is-necessary",children:[]},{value:"Why unique image tags are necessary",id:"why-unique-image-tags-are-necessary",children:[]}]}],u={rightToc:l};function m(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When a cluster is deployed on your cloud account, a dedicated image registry is created to serve as a mirroring system. "),Object(a.b)("p",null,"This ",Object(a.b)("inlineCode",{parentName:"p"},"mirroring registry")," is also available within the Qovery interface"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deployment/mirror-registry.png",alt:"Mirroring Registry"})),Object(a.b)("h1",{id:"how-does-it-work"},"How does it work"),Object(a.b)("p",null,"Every time an application needs to be deployed on your cluster, the application image is mirrored on the mirroring registry."),Object(a.b)("h2",{id:"application-built-via-the-qovery-pipeline"},"Application built via the Qovery pipeline"),Object(a.b)("p",null,'Images within the mirroring registry are organized by "Qovery service", each service has its own repository (or namespace, naming depends on the cloud provider). This means that each service build and mirroring process is completely isolated from the others.'),Object(a.b)("p",null,"Before building the application A1, Qovery checks within mirroring registry at the repository of the application A1 if an image has already being built with the same version (commit id and environment variables). "),Object(a.b)("p",null,"If the image already exists, the built is skipped and Qovery starts the deployment of that image on the Kubernetes cluster."),Object(a.b)("p",null,"Otherwise, the image is built by the Qovery pipeline the resulting image is pushed on the mirroring registry at the repository of the application A1, deleting any previous image."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deployment/build-mirror.png",alt:"Mirroring built image"})),Object(a.b)("p",null,"Given this isolation mechanism, if the same application is cloned (via the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/#clone-environment"}),"clone")," or ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/#preview-environment"}),"preview environment")," feature), Qovery will re-build the application since the environment variables have changed (the ones at environment level)."),Object(a.b)("h2",{id:"application-deployed-from-a-contianer-registry"},"Application deployed from a contianer registry"),Object(a.b)("p",null,"The Qovery behaviour in this case will depend on the chosen ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/cluster-advanced-settings/#image-registry"}),"mirroring mode")," within the cluster advanced settings. "),Object(a.b)("p",null,"Two mirroring modes are available when deploying a service from a container registry:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Service (Default) ")),Object(a.b)("p",null,'Images within the mirroring registry are organized by "Qovery service", each service has its own repository (or namespace, naming depends on the cloud provider). This means that each service mirroring process is completely isolated from the others.'),Object(a.b)("p",null,"At the beginning of the deployment of the application A1, Qovery checks within mirroring registry at the repository of the application A1 if an image with the same image name and tag exists. "),Object(a.b)("p",null,"If the image already exists, the mirroring process is skipped and Qovery starts the deployment of that image on the Kubernetes cluster."),Object(a.b)("p",null,"Otherwise, the image is pulled from the source registry and pushed on the mirroring registry at the repository of the application A1, deleting any previous image."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deployment/image-mirror-service.png",alt:"Mirroring image from registry - Service case"})),Object(a.b)("p",null,"Pro:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Images are automatically deleted when not needede anymore")),Object(a.b)("p",null,"Cons:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If the same image is used across environments or service, Qovery will mirror multiple time the same image, reducing the deployment speed")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Cluster ")),Object(a.b)(o.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"This is not available on Scaleway.")),Object(a.b)("p",null,'Images within the mirroring registry are organized by "Qovery cluster", meaning that the application deployed on the same cluster are all mirrored on the same repository.'),Object(a.b)("p",null,"At the beginning of the deployment of the application A1, Qovery checks within mirroring registry at the repository of the cluster C1 if an image with the same image name and tag exists. "),Object(a.b)("p",null,"If the image already exists, the mirroring process is skipped and Qovery starts the deployment of that image on the Kubernetes cluster."),Object(a.b)("p",null,"Otherwise, the image is pulled from the source registry and pushed on the mirroring registry at the repository of the cluster C1."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/deployment/image-mirror-cluster.png",alt:"Mirroring image from registry - Cluster case"})),Object(a.b)("p",null,"Pro:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If the same image is used across environments or service, this setup will avoid to mirror multiple time the same image, increasing the deployment speed.")),Object(a.b)("p",null,"Cons:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Qovery can't automatically delete the images mirrored on the mirroring registry. This will increase the cloud provider cost of your image registry since it will store more data. To reduce the amount data stored you can reduce the image TTL via the cluster advanced settings ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/cluster-advanced-settings/#image-registry"}),"registry.image_retention_time"))),Object(a.b)("h3",{id:"why-image-mirroring-is-necessary"},"Why image mirroring is necessary"),Object(a.b)("p",null,"Image mirroring is a general best practice: you don't want your system to be strictly coupled on a third party."),Object(a.b)("p",null,"Let's say that you run an application on your production environment and Kubernetes needs to pull again the image to spawn a new instance for the application. In this case, you don't want to make this fail due to the unavailability of your source container registry. This is why we make sure that a copy is always available on the container registry next to the Kubernetes cluster."),Object(a.b)("h3",{id:"why-unique-image-tags-are-necessary"},"Why unique image tags are necessary"),Object(a.b)("p",null,"Having unique image tags is the best practice: you want to be 100% of the version running within a container. Moreover, not using unique image tags will have bad side effects given the image cachin mechanism provided by the Qovery mirroring system and by Kubernetes itself:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Mirroring registry: since Qovery mirrors the images on the mirroring registry, if the image tag doesn't change between two versions, the new version won't be mirrored. This means that the new version will not be deployed."),Object(a.b)("li",{parentName:"ul"},"Kubernetes: applications deployed by Qovery on Kubernetes uses the ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy"}),"image pull policy")," ",Object(a.b)("inlineCode",{parentName:"li"},"ifNotPresent"),". This means that if the image already exists on the Kubernetes node local disk, Kubernetes won't pull again the image. If the image tag doesn't change, then the new image version won't be pulled and your pods will still run the old application code.")))}m.isMDXComponent=!0},415:function(e,t,r){var i;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var a=typeof i;if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i)&&i.length){var o=n.apply(null,i);o&&e.push(o)}else if("object"===a)for(var s in i)r.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(i=function(){return n}.apply(t,[]))||(e.exports=i)}()},416:function(e,t,r){"use strict";r(418);var i=r(0),n=r.n(i),a=r(415),o=r.n(a);r(132);t.a=function(e){var t=e.children,r=e.classNames,i=e.fill,a=e.icon,s=e.type,c=null;switch(s){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return n.a.createElement("div",{className:o()(r,"alert","alert--"+s,{"alert--fill":i,"alert--icon":!1!==a}),role:"alert"},!1!==a&&n.a.createElement("i",{className:o()("feather","icon-"+(a||c))}),t)}},417:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return h}));var i=r(0),n=r.n(i);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},m=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=Object(i.forwardRef)((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(r),g=i,h=m["".concat(o,".").concat(g)]||m[g]||p[g]||a;return r?n.a.createElement(h,s({ref:t},l,{components:r})):n.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},418:function(e,t,r){var i=r(12);i(i.P,"Array",{fill:r(419)}),r(74)("fill")},419:function(e,t,r){"use strict";var i=r(27),n=r(75),a=r(26);e.exports=function(e){for(var t=i(this),r=a(t.length),o=arguments.length,s=n(o>1?arguments[1]:void 0,r),c=o>2?arguments[2]:void 0,l=void 0===c?r:n(c,r);l>s;)t[s++]=e;return t}},420:function(e,t,r){var i=r(28).f,n=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in n||r(10)&&i(n,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},421:function(e,t,r){"use strict";r(420);var i=r(0),n=r.n(i),a=r(416);t.a=function(e){var t=e.children,r=e.name;return n.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},n.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",r||"page"," assumes the following:"),t)}},422:function(e,t,r){"use strict";var i=r(1),n=r(0),a=r.n(n),o=r(39),s=r(425),c=r(20),l=r.n(c);t.a=function(e){var t,r=e.to,c=e.href,u=r||c,m=Object(s.a)(u),p=Object(n.useRef)(!1),g=l.a.canUseIntersectionObserver;return Object(n.useEffect)((function(){return!g&&m&&window.docusaurus.prefetch(u),function(){g&&t&&t.disconnect()}}),[u,g,m]),u&&m?a.a.createElement(o.b,Object(i.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(u),p.current=!0)},innerRef:function(e){var r,i;g&&e&&m&&(r=e,i=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),i())}))}))).observe(r))},to:u})):a.a.createElement("a",Object(i.a)({},e,{href:u}))}},424:function(e,t,r){"use strict";var i=r(0),n=r.n(i),a=r(422),o=r(415),s=r.n(o);r(133);t.a=function(e){var t=e.children,r=e.className,i=e.badge,o=e.leftIcon,c=e.rightIcon,l=e.size,u=e.target,m=e.to,p=s()("jump-to","jump-to--"+l,r),g=n.a.createElement("div",{className:"jump-to--inner"},n.a.createElement("div",{className:"jump-to--inner-2"},o&&n.a.createElement("div",{className:"jump-to--left"},n.a.createElement("i",{className:"feather icon-"+o})),n.a.createElement("div",{className:"jump-to--main"},i?n.a.createElement("span",{className:"badge badge--primary badge--right"},i):"",t),n.a.createElement("div",{className:"jump-to--right"},n.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return u?n.a.createElement("a",{href:m,target:u,className:p},g):n.a.createElement(a.a,{to:m,className:p},g)}},425:function(e,t,r){"use strict";function i(e){return!1===/^(https?:|\/\/)/.test(e)}r.d(t,"a",(function(){return i}))}}]);
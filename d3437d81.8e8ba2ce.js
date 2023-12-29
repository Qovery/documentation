/*! For license information please see d3437d81.8e8ba2ce.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{373:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),o=(n(0),n(424)),c=n(433),i=n(423),l=n(428),s={last_modified_on:"2023-12-28",title:"Scaleway (SCW)",description:"Learn how to configure and plug your Scaleway (SCW) account"},u={id:"using-qovery/configuration/cloud-service-provider/scaleway",title:"Scaleway (SCW)",description:"Learn how to configure and plug your Scaleway (SCW) account",source:"@site/docs/using-qovery/configuration/cloud-service-provider/scaleway.md",permalink:"/docs/using-qovery/configuration/cloud-service-provider/scaleway",sidebar:"docs",previous:{title:"Microsoft Azure",permalink:"/docs/using-qovery/configuration/cloud-service-provider/microsoft-azure"},next:{title:"Other Cloud Service Provider",permalink:"/docs/using-qovery/configuration/cloud-service-provider/other-csps"}},b=[{value:"Getting started",id:"getting-started",children:[{value:"Connect your Scaleway account",id:"connect-your-scaleway-account",children:[]},{value:"Install a new cluster on Qovery",id:"install-a-new-cluster-on-qovery",children:[]},{value:"Remove your Scaleway account",id:"remove-your-scaleway-account",children:[]},{value:"Delete Qovery from your Scaleway account",id:"delete-qovery-from-your-scaleway-account",children:[]}]},{value:"Regions",id:"regions",children:[]},{value:"How Qovery works on Scaleway",id:"how-qovery-works-on-scaleway",children:[{value:"Kubernetes",id:"kubernetes",children:[]},{value:"Managed services",id:"managed-services",children:[]},{value:"Security and compliance",id:"security-and-compliance",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"How to choose a region?",id:"how-to-choose-a-region",children:[]},{value:"I don&#39;t find a region that is provided by Scaleway",id:"i-dont-find-a-region-that-is-provided-by-scaleway",children:[]},{value:"Migrate between Cloud providers and regions",id:"migrate-between-cloud-providers-and-regions",children:[]}]}],p={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Please refer to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/provider/kubernetes/"}),"this page")," if you want to install Qovery on your own Kubernetes cluster (BYOK).")),Object(o.b)("p",null,"Qovery lets you quickly deploy applications to your ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.scaleway.com"}),"Scaleway (Scaleway)")," account. No knowledge needed, and it takes less than 10 minutes to install Qovery on your Scaleway account."),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)(l.a,{mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have a Qovery account"),Object(o.b)("li",{parentName:"ul"},"You have created an ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/organization/"}),"Organization")),Object(o.b)("li",{parentName:"ul"},"You have a Scaleway account"))),Object(o.b)("h3",{id:"connect-your-scaleway-account"},"Connect your Scaleway account"),Object(o.b)("p",null,"To link your Scaleway account to Qovery you need to provide a Scaleway ",Object(o.b)("inlineCode",{parentName:"p"},"access key id"),", ",Object(o.b)("inlineCode",{parentName:"p"},"secret access key"),", ",Object(o.b)("inlineCode",{parentName:"p"},"organization id")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"project id"),"."),Object(o.b)(i.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,'If your Scaleway account is new, you need to open a ticket to Scaleway support to unlock your quota. You can post the following message:\n"Hello, I am going to deploy my applications on Scaleway with Qovery. Can you increase my quota for current Kubernetes nodes type, to 10 please? Thanks"')),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"You can link more than one Scaleway account. Qovery also support multiple Cloud providers within the same Organization. Meaning, you can balance your workload on different Cloud providers.")),Object(o.b)("h4",{id:"create-your-scaleway-credentials---access-key-id-secret-access-key-organization-id-and-project-id"},"Create your Scaleway credentials - ",Object(o.b)("inlineCode",{parentName:"h4"},"access key id"),", ",Object(o.b)("inlineCode",{parentName:"h4"},"secret access key"),", ",Object(o.b)("inlineCode",{parentName:"h4"},"organization id")," and ",Object(o.b)("inlineCode",{parentName:"h4"},"project id"),"."),Object(o.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.scaleway.com"}),"Connect to your Scaleway console"))),Object(o.b)("li",null,Object(o.b)("p",null,"Go to ",Object(o.b)("inlineCode",{parentName:"p"},"IAM")),Object(o.b)("img",{src:"/img/scw-api-key/scw_IAM.png"})),Object(o.b)("li",null,Object(o.b)("p",null,"Go to ",Object(o.b)("inlineCode",{parentName:"p"},"Applications")),Object(o.b)("img",{src:"/img/scw-api-key/scw_applications.png"})),Object(o.b)("li",null,Object(o.b)("p",null,"Create a new application for your project"),Object(o.b)("img",{src:"/img/scw-api-key/scw_create_app.png"})),Object(o.b)("li",null,Object(o.b)("p",null,"Generate your new API key from your application view"),Object(o.b)("img",{src:"/img/scw-api-key/scw_create_key_1.png"}),"Set up the the preferred `Project` for `Object Storage` with your Scaleway Project",Object(o.b)("img",{src:"/img/scw-api-key/scw_create_key_2.png"})),Object(o.b)("li",null,Object(o.b)("p",null,"Save the generated ",Object(o.b)("inlineCode",{parentName:"p"},"access key id")," and ",Object(o.b)("inlineCode",{parentName:"p"},"secret access key"),"."),Object(o.b)("img",{src:"/img/scw-api-key/scw_creds.png"})),Object(o.b)("li",null,Object(o.b)("p",null,"Go to ",Object(o.b)("inlineCode",{parentName:"p"},"Policies")),Object(o.b)("img",{src:"/img/scw-api-key/scw_policies.png"})),Object(o.b)("li",null,Object(o.b)("p",null,"Create a new policy with ",Object(o.b)("inlineCode",{parentName:"p"},"Principal")," linked to the application you just created."),Object(o.b)("img",{src:"/img/scw-api-key/scw_create_policy.png"})),Object(o.b)("li",null,Object(o.b)("p",null,"Set the scope of the policy to your project"),Object(o.b)("img",{src:"/img/scw-api-key/scw_policy_scope.png"})),Object(o.b)("li",null,Object(o.b)("p",null,"Select the following rules for your policy"),Object(o.b)("ul",null,Object(o.b)("li",null,"Containers permissions",Object(o.b)("br",null),Object(o.b)("img",{src:"/img/scw-api-key/scw_perms_containers.png"})),Object(o.b)("li",null,"Network Service permissions",Object(o.b)("br",null),Object(o.b)("img",{src:"/img/scw-api-key/scw_perms_network.png"})),Object(o.b)("li",null,"Compute permissions",Object(o.b)("br",null),Object(o.b)("img",{src:"/img/scw-api-key/scw_perms_compute.png"})),Object(o.b)("li",null,"Storage permissions",Object(o.b)("br",null),Object(o.b)("img",{src:"/img/scw-api-key/scw_perms_storage.png"})),Object(o.b)("li",null,"VPC permissions",Object(o.b)("br",null),Object(o.b)("img",{src:"/img/scw-api-key/scw_perms_vpc.png"})))),Object(o.b)("li",null,Object(o.b)("p",null,"Create your policy"),Object(o.b)("img",{src:"/img/scw-api-key/scw_apply_policy.png"})),Object(o.b)("li",null,Object(o.b)("p",null,"Get your ",Object(o.b)("inlineCode",{parentName:"p"},"organization id")," in your ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.scaleway.com/organization/settings"}),"organization settings")),Object(o.b)("img",{src:"/img/scw-api-key/scw_organization_id.png"})),Object(o.b)("li",null,Object(o.b)("p",null,"Get your ",Object(o.b)("inlineCode",{parentName:"p"},"project id")," on your project dashboard"),Object(o.b)("img",{src:"/img/scw-api-key/scw_project_id.png"})))),Object(o.b)("p",null,"Well done!! You now have your Scaleway ",Object(o.b)("inlineCode",{parentName:"p"},"access key id"),", ",Object(o.b)("inlineCode",{parentName:"p"},"secret access key"),", ",Object(o.b)("inlineCode",{parentName:"p"},"organization_id")," and ",Object(o.b)("inlineCode",{parentName:"p"},"project id"),"; It is time to connect Qovery to your Scaleway account."),Object(o.b)("h3",{id:"install-a-new-cluster-on-qovery"},"Install a new cluster on Qovery"),Object(o.b)("p",null,"You will be able to use the credentials you just generated when creating a cluster via the Qovery console. This cluster will be linked to your Qovery organization.\nFollow ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/clusters/#creating-a-cluster"}),"this documentation")," to create a new cluster on your organization."),Object(o.b)("h3",{id:"remove-your-scaleway-account"},"Remove your Scaleway account"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"this section is under development - ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://discord.qovery.com"}),"join us")," and be part of the first to try it")),Object(o.b)("h3",{id:"delete-qovery-from-your-scaleway-account"},"Delete Qovery from your Scaleway account"),Object(o.b)(i.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,"Your applications and your data will be deleted.")),Object(o.b)("p",null,"To delete Qovery from your Scaleway account you must be the owner of the Organization.\nOnce your Scaleway account removed from Qovery, everything configured (VPC, Kubernetes, databases, ...) by Qovery will be deleted forever."),Object(o.b)("h2",{id:"regions"},"Regions"),Object(o.b)("p",null,"Qovery supports the following Scalewav regions:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\ud83c\uddeb\ud83c\uddf7"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fr-par-1"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Paris DC1 (France)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\ud83c\uddeb\ud83c\uddf7"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fr-par-2"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Paris DC2 (France)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\ud83c\uddeb\ud83c\uddf7"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fr-par-3"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Paris DC3 (France)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\ud83c\uddf3\ud83c\uddf1"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nl-ams-1"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Amsterdam DC1 (Netherlands)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\ud83c\uddf5\ud83c\uddf1"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"pl-waw-1"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Warsaw DC1 (Poland)")))),Object(o.b)("p",null,"Qovery supports regions where ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.scaleway.com/en/kubernetes-kapsule/"}),"Scaleway Kubernetes (Kapsule)")," is supported."),Object(o.b)("h2",{id:"how-qovery-works-on-scaleway"},"How Qovery works on Scaleway"),Object(o.b)("p",null,"Qovery is an abstraction layer on top of Scaleway and Kubernetes. Qovery manages the configuration of Scaleway account, and helps you to deploy production ready apps in seconds.\nTo make it works, Qovery rely on Kubernetes for stateless apps (containers), and  Scaleway for stateful apps (databases, storage...)."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/how-qovery-works/"}),"Read more")," on how Qovery works behind the scene."),Object(o.b)("h3",{id:"kubernetes"},"Kubernetes"),Object(o.b)("p",null,"The first time you set up your Scaleway account, Qovery creates a Kubernetes cluster in your chosen region. Qovery managed it for you - no action required. It takes ~15 minutes to configure and bootstrap a Kubernetes cluster. Once bootstrapped, your Kubernetes cluster runs the Qovery app and is ready to deploy your applications."),Object(o.b)("h3",{id:"managed-services"},"Managed services"),Object(o.b)("p",null,"Scaleway provides managed services for ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/database/postgresql/"}),"PostgreSQL"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/database/mysql/"}),"MySQL"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/database/redis/"}),"Redis"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/database/mongodb/"}),"MongoDB"),". Qovery gives you access to those services when you set the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/deployment-rule/#environment-deployment-rules"}),"environment mode")," to ",Object(o.b)("inlineCode",{parentName:"p"},"Production"),". In ",Object(o.b)("inlineCode",{parentName:"p"},"Development")," mode, Qovery provides containers equivalent, which is cheaper and faster to start."),Object(o.b)("h3",{id:"security-and-compliance"},"Security and compliance"),Object(o.b)("p",null,"Qovery runs your Kubernetes cluster and is autonomous to manage your applications, which means:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Your configuration are stored on your Scaleway account."),Object(o.b)("li",{parentName:"ul"},"Your configuration is encrypted on your Scaleway account."),Object(o.b)("li",{parentName:"ul"},"Qovery can't access to your data."),Object(o.b)("li",{parentName:"ul"},"Suppose Qovery stops to run, your applications are not impacted.")),Object(o.b)("h2",{id:"faq"},"FAQ"),Object(o.b)("h3",{id:"how-to-choose-a-region"},"How to choose a region?"),Object(o.b)("p",null,"Different datacenters are located in different geographic areas, and you may want to keep your site physically close to the bulk of your user base for reduced latency."),Object(o.b)("h3",{id:"i-dont-find-a-region-that-is-provided-by-scaleway"},"I don't find a region that is provided by Scaleway"),Object(o.b)("p",null,"We are probably testing the support of this region, please ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.qovery.com/contact"}),"contact us")," to know what's the status"),Object(o.b)("h3",{id:"migrate-between-cloud-providers-and-regions"},"Migrate between Cloud providers and regions"),Object(o.b)("p",null,"Today, you can't migrate an environment from one region to another after it has been created. Vote ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://roadmap.qovery.com/"}),"here")," if you need this feature."))}d.isMDXComponent=!0},422:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},423:function(e,t,n){"use strict";n(425);var a=n(0),r=n.n(a),o=n(422),c=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,o=e.icon,i=e.type,l=null;switch(i){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:c()(n,"alert","alert--"+i,{"alert--fill":a,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:c()("feather","icon-"+(o||l))}),t)}},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,y=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return n?r.a.createElement(y,i({ref:t},s,{components:n})):r.a.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(426)}),n(74)("fill")},426:function(e,t,n){"use strict";var a=n(27),r=n(75),o=n(26);e.exports=function(e){for(var t=a(this),n=o(t.length),c=arguments.length,i=r(c>1?arguments[1]:void 0,n),l=c>2?arguments[2]:void 0,s=void 0===l?n:r(l,n);s>i;)t[i++]=e;return t}},427:function(e,t,n){var a=n(28).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},428:function(e,t,n){"use strict";n(427);var a=n(0),r=n.n(a),o=n(423);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},432:function(e,t,n){"use strict";var a=n(434),r=n(51);function o(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,a){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=n):a[e]=n};case"bracket":return function(e,n,a){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],n):a[e]=[n]:a[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=r({arrayFormat:"none"},t)),a=Object.create(null);return"string"!=typeof e?a:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(r),o,a)})),Object.keys(a).sort().reduce((function(e,t){var n=a[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):a},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,a){return null===n?[o(t,e),"[",a,"]"].join(""):[o(t,e),"[",o(a,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(a){var r=e[a];if(void 0===r)return"";if(null===r)return o(a,t);if(Array.isArray(r)){var c=[];return r.slice().forEach((function(e){void 0!==e&&c.push(n(a,e,c.length))})),c.join("&")}return o(a,t)+"="+o(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},433:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=(n(422),n(432)),c=n.n(o);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,i="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+i+" failed",body:"The tutorial on:\n\n"+i+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+c.a.stringify(l),u=Object(a.useState)(null),b=u[0],p=u[1];return r.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!b&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==b&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},434:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
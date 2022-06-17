/*! For license information please see 97f5d064.2087daa8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{308:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return u})),o.d(t,"default",(function(){return b}));var a=o(1),n=o(9),r=(o(0),o(439)),i=o(438),c=(o(443),o(444)),s={last_modified_on:"2022-04-29",$schema:"/.meta/.schemas/guides.json",title:"Zero to Hero - How to deploy your apps on AWS in 30 minutes",description:"Step-by-step guide on how to deploy your apps on AWS in 30 minutes. No AWS knowledge required.",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","cloud_provider: aws"],hide_pagination:!0},l={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Zero to Hero - How to deploy your apps on AWS in 30 minutes",description:"Step-by-step guide on how to deploy your apps on AWS in 30 minutes. No AWS knowledge required.",permalink:"/guides/tutorial/how-to-deploy-your-application-on-aws-in-30-minutes",readingTime:"6 min read",source:"@site/guides/tutorial/how-to-deploy-your-application-on-aws-in-30-minutes.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"cloud_provider: aws",permalink:"/guides/tags/cloud-provider-aws"}],title:"Zero to Hero - How to deploy your apps on AWS in 30 minutes",truncated:!1,prevItem:{title:"Working with Git Submodules",permalink:"/guides/tutorial/working-with-git-submodules"}},u=[{value:"Before you start",id:"before-you-start",children:[{value:"What is Qovery",id:"what-is-qovery",children:[]},{value:"Why you should use AWS",id:"why-you-should-use-aws",children:[]},{value:"Why you should not use AWS",id:"why-you-should-not-use-aws",children:[]}]},{value:"Create an AWS account",id:"create-an-aws-account",children:[{value:"Get your AWS API keys",id:"get-your-aws-api-keys",children:[]}]},{value:"Configure Qovery",id:"configure-qovery",children:[{value:"Sign-up to Qovery",id:"sign-up-to-qovery",children:[]},{value:"Create your Organization",id:"create-your-organization",children:[]},{value:"Install Qovery on your AWS account",id:"install-qovery-on-your-aws-account",children:[]}]},{value:"Deploy your application",id:"deploy-your-application",children:[]}],p={rightToc:u};function b(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com?ref=qovery"}),"Amazon Web Services")," (AWS) is a platform that offers flexible, reliable, and scalable Cloud computing solutions. The platform is developed with a combination of infrastructure as a service (IaaS), platform as a service (PaaS), and packaged software as a service (SaaS) offerings. In 2021, thousands of companies host their apps on AWS. In 2006, AWS was composed of only 3 services (SQS, S3, EC2) that were simple to use. In 2021, more than 200 services and 2000 features exist, and deploying your app can take days."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.qovery.com"}),"Qovery")," is the simplest way to deploy your apps on AWS.")),Object(r.b)("p",null,"In this tutorial, I will explain step by step how to deploy your app on AWS in 30 minutes. No AWS/infrastructure/Cloud knowledge required - no kidding!"),Object(r.b)("h2",{id:"before-you-start"},"Before you start"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"This tutorial is perfect for anyone interested into deploying their apps on AWS seamlessly."),Object(r.b)("li",{parentName:"ol"},"If you have any question or suggestion on this tutorial, please contact us via ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.qovery.com/contact"}),"this form")," or ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://discord.qovery.com"}),"Discord"),".")),Object(r.b)("h3",{id:"what-is-qovery"},"What is Qovery"),Object(r.b)("p",null,'Qovery is a platform that makes your app deployment on AWS very simple. The installation of Qovery on your AWS account takes approximately 30 minutes. Then you\'re ready to deploy your apps "a la" Heroku-like. ',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/what-is-qovery/"}),"Read more about Qovery"),"."),Object(r.b)("h3",{id:"why-you-should-use-aws"},"Why you should use AWS"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You need a reliable hosting platform."),Object(r.b)("li",{parentName:"ul"},"You want to stay focus on what you are building."),Object(r.b)("li",{parentName:"ul"},"You need to speed up your Go-To-Market and Product Market Fit."),Object(r.b)("li",{parentName:"ul"},"You plan to be the next unicorn \ud83e\udd84")),Object(r.b)("h3",{id:"why-you-should-not-use-aws"},"Why you should not use AWS"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You are building a hobby project."),Object(r.b)("li",{parentName:"ul"},"You are looking for a cheap hosting provider."),Object(r.b)("li",{parentName:"ul"},"You do not want to use Amazon services.")),Object(r.b)("p",null,"Let's start!"),Object(r.b)("h1",{id:"video-install-qovery-on-aws"},"Video: Install Qovery on AWS"),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"Follow ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/cloud-service-provider/amazon-web-services/#connect-your-aws-account"}),"this guide")," to create your AWS credentials")),Object(r.b)("div",{class:"video-container"},Object(r.b)("p",{align:"center"},Object(r.b)("iframe",{src:"https://www.loom.com/embed/3450aa0c4122467892cd7c6e1fc85f6e",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(r.b)("h1",{id:"step-by-step-install-qovery-on-aws"},"Step-by-step: Install Qovery on AWS"),Object(r.b)("h2",{id:"create-an-aws-account"},"Create an AWS account"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"If you already have an AWS account, you can go to the next point.")),Object(r.b)("p",null,"Before creating an AWS account, I'd recommend contacting AWS to see if you are eligible to free credits. AWS provides up to $100k of credits for 12 to 24 months. Which is convenient to have at the beginning of a project. If you know that you are not eligible, you can create your account by clicking on the top right button ",Object(r.b)("inlineCode",{parentName:"p"},"Create an AWS Account")," of their ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com?ref=qovery"}),"main page"),"."),Object(r.b)("img",{src:"/img/aws-create-an-account.jpg",alt:"Create an account on AWS"}),Object(r.b)("h3",{id:"get-your-aws-api-keys"},"Get your AWS API keys"),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"Follow ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/cloud-service-provider/amazon-web-services/#connect-your-aws-account"}),"this guide")," to create your AWS credentials")),Object(r.b)("p",null,"To install Qovery on your AWS account, the ",Object(r.b)("inlineCode",{parentName:"p"},"secret access key")," and ",Object(r.b)("inlineCode",{parentName:"p"},"access key id")," are required. Here is a comprehensive ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/cloud-service-provider/amazon-web-services/#connect-your-aws-account"}),"step-by-step guide")," on how to generate your ",Object(r.b)("inlineCode",{parentName:"p"},"secret access key")," and ",Object(r.b)("inlineCode",{parentName:"p"},"access key id"),". If you already have those keys, then you can go to the next point."),Object(r.b)("h2",{id:"configure-qovery"},"Configure Qovery"),Object(r.b)("h3",{id:"sign-up-to-qovery"},"Sign-up to Qovery"),Object(r.b)("p",null,"Using Qovery is as simple as connect with your ",Object(r.b)("em",{parentName:"p"},"Github"),", ",Object(r.b)("em",{parentName:"p"},"Gitlab")," or ",Object(r.b)("em",{parentName:"p"},"Bitbucket")," account on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://start.qovery.com"}),"start.qovery.com"),"."),Object(r.b)("p",null,"-> ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Connect to Qovery")),Object(r.b)("h3",{id:"create-your-organization"},"Create your Organization"),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"You can skip this step if you already have an Organization.")),Object(r.b)("p",null,"An organization is a shared account where developers can collaborate across many projects at once. Owners and organization administrators can manage:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Cloud accounts."),Object(r.b)("li",{parentName:"ul"},"Members access."),Object(r.b)("li",{parentName:"ul"},"Billing.")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/"}),"Read more")," about Organizations"),Object(r.b)("p",null,"To deploy on your AWS account, you have to choose between ",Object(r.b)("strong",{parentName:"p"},"Free"),", ",Object(r.b)("strong",{parentName:"p"},"Professional")," and ",Object(r.b)("strong",{parentName:"p"},"Business")," plan for your organization."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/configuration/organization/Qovery_Pricing_Plans.png",alt:"Qovery - Create an Organization and select the plan"})),Object(r.b)("h3",{id:"install-qovery-on-your-aws-account"},"Install Qovery on your AWS account"),Object(r.b)("p",null,'1/ Go to your organization settings by clicking on the "cog" icon next to your organization name.'),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/organization_settings_clusters_empty.jpg",alt:"Go your organization settings > clusters"})),Object(r.b)("p",null,"2/ Create a cluster, select ",Object(r.b)("em",{parentName:"p"},"Amazon Web Services")," and the region where you want to deploy your apps."),Object(r.b)(i.a,{type:"success",mdxType:"Alert"},Object(r.b)("p",null,"Choose a region close to where your users will use your applications to have better performances.")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/organization_settings_create_cluster.jpg",alt:"Create a cluster"})),Object(r.b)("p",null,"3/ Set your AWS credentials. (Check out ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/cloud-service-provider/amazon-web-services/"}),"this guide")," if you have no AWS credentials)."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/organization_settings_add_credentials.jpg",alt:"Set your cloud credentials"})),Object(r.b)("p",null,"4/ Under the hood, Qovery uses a managed Kubernetes (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/eks"}),"AWS EKS"),") to run your applications. You need to specify the instance type that you would like to use and the min/max number of nodes. Qovery will keep low the number of nodes and will only scale up your nodes if your applications really need to scale.\nIf you don't know which instance type to chose, have a look at the AWS instance list or use the helper to chose the right instance based on your CPU/RAM needs."),Object(r.b)(i.a,{type:"success",mdxType:"Alert"},Object(r.b)("p",null,"Qovery optimizes and keep your AWS costs low.")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/organization_settings_cluster_resources.jpg",alt:"Set your cluster resources"})),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},"Qovery might use some temporary free resources on your Kubernetes cluster to perform spotted maintenance operations (e.g. : cluster version upgrades). This is why we recommend a cluster setup with:",Object(r.b)("ul",null,Object(r.b)("li",null,"at least 20% difference between the minimum and the maximum number of nodes;"),Object(r.b)("li",null,"at least 5 nodes as the maximum number of nodes of your cluster;"))),Object(r.b)("p",null,"5/ Click on ",Object(r.b)("strong",{parentName:"p"},"Save")," and ",Object(r.b)("strong",{parentName:"p"},"Deploy"),"."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/organization_settings_clusters_aws.jpg",alt:"AWS cluster is now available"})),Object(r.b)("p",null,"Congrats! Qovery will be installed within 30 minutes \ud83c\udf89. You will be notified when it is all good.\nIn the meantime, you can take a look at our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/getting-started/"}),"guide section"),"."),Object(r.b)("p",null,"6/ Enable cluster sync with SSO account"),Object(r.b)("p",null,"If you're using SSO for your AWS account deploying the Qovery cluster you have to add some infos in the ",Object(r.b)("em",{parentName:"p"},"aws-auth configmap")," in ",Object(r.b)("inlineCode",{parentName:"p"},"kube-system")," namespace.\nConnect to your cluster and edit the ",Object(r.b)("em",{parentName:"p"},"aws-auth configmap")," in order to add the following code in the mapRoles section:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'- rolearn: arn:aws:iam::<iam_id>:role/AWSReservedSSO_AdministratorAccess_<the_role_id>\n  username: "{{SessionName}}"\n  groups:\n  - system:masters\n')),Object(r.b)("h2",{id:"deploy-your-application"},"Deploy your application"),Object(r.b)("p",null,"Once Qovery is installed on your AWS account, you have the possibility to deploy your application. Take a look to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/getting-started/"}),"our guide")," on how to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/getting-started/deploy-your-first-application/"}),"deploy your first application")," with Qovery."),Object(r.b)(c.a,{to:"/guides/getting-started/deploy-your-first-application",mdxType:"Jump"},"Deploy your first application"))}b.isMDXComponent=!0},437:function(e,t,o){var a;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=n.apply(null,a);i&&e.push(i)}else if("object"===r)for(var c in a)o.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},438:function(e,t,o){"use strict";o(442);var a=o(0),n=o.n(a),r=o(437),i=o.n(r);o(131);t.a=function(e){var t=e.children,o=e.classNames,a=e.fill,r=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return n.a.createElement("div",{className:i()(o,"alert","alert--"+c,{"alert--fill":a,"alert--icon":!1!==r}),role:"alert"},!1!==r&&n.a.createElement("i",{className:i()("feather","icon-"+(r||s))}),t)}},439:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return y}));var a=o(0),n=o.n(a);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c({},t,{},e)),o},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(o),d=a,y=p["".concat(i,".").concat(d)]||p[d]||b[d]||r;return o?n.a.createElement(y,c({ref:t},l,{components:o})):n.a.createElement(y,c({ref:t},l))}));function y(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=o[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},440:function(e,t,o){"use strict";var a=o(1),n=o(0),r=o.n(n),i=o(39),c=o(445),s=o(19),l=o.n(s);t.a=function(e){var t,o=e.to,s=e.href,u=o||s,p=Object(c.a)(u),b=Object(n.useRef)(!1),d=l.a.canUseIntersectionObserver;return Object(n.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,p]),u&&p?r.a.createElement(i.b,Object(a.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(u),b.current=!0)},innerRef:function(e){var o,a;d&&e&&p&&(o=e,a=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){o===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(o),t.disconnect(),a())}))}))).observe(o))},to:u})):r.a.createElement("a",Object(a.a)({},e,{href:u}))}},441:function(e,t,o){var a=o(25).f,n=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in n||o(10)&&a(n,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},442:function(e,t,o){var a=o(12);a(a.P,"Array",{fill:o(446)}),o(74)("fill")},443:function(e,t,o){"use strict";o(441);var a=o(0),n=o.n(a),r=o(438);t.a=function(e){var t=e.children,o=e.name;return n.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},n.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",o||"page"," assumes the following:"),t)}},444:function(e,t,o){"use strict";var a=o(0),n=o.n(a),r=o(440),i=o(437),c=o.n(i);o(132);t.a=function(e){var t=e.children,o=e.className,a=e.badge,i=e.leftIcon,s=e.rightIcon,l=e.size,u=e.target,p=e.to,b=c()("jump-to","jump-to--"+l,o),d=n.a.createElement("div",{className:"jump-to--inner"},n.a.createElement("div",{className:"jump-to--inner-2"},i&&n.a.createElement("div",{className:"jump-to--left"},n.a.createElement("i",{className:"feather icon-"+i})),n.a.createElement("div",{className:"jump-to--main"},a?n.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),n.a.createElement("div",{className:"jump-to--right"},n.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return u?n.a.createElement("a",{href:p,target:u,className:b},d):n.a.createElement(r.a,{to:p,className:b},d)}},445:function(e,t,o){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}o.d(t,"a",(function(){return a}))},446:function(e,t,o){"use strict";var a=o(27),n=o(75),r=o(26);e.exports=function(e){for(var t=a(this),o=r(t.length),i=arguments.length,c=n(i>1?arguments[1]:void 0,o),s=i>2?arguments[2]:void 0,l=void 0===s?o:n(s,o);l>c;)t[c++]=e;return t}}}]);
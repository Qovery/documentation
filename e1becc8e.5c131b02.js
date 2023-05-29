/*! For license information please see e1becc8e.5c131b02.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{357:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(9),r=(n(0),n(390)),i=(n(396),n(389)),c=(n(394),{last_modified_on:"2022-11-16",$schema:"/.meta/.schemas/guides.json",title:"Integrate your application logs to Cloudwatch",description:"Add Kubernetes pod logs into Cloudwatch to perform full text search",author_github:"https://github.com/deimosfr",tags:["type: tutorial","technology: qovery"],hide_pagination:!0}),l={categories:[{name:"tutorial",title:"Tutorial",description:"Additional step-by-step resources to leverage even more Qovery",permalink:"/guides/tutorial"}],coverLabel:"Integrate your application logs to Cloudwatch",description:"Add Kubernetes pod logs into Cloudwatch to perform full text search",permalink:"/guides/tutorial/cloudwatch-integration",readingTime:"4 min read",source:"@site/guides/tutorial/cloudwatch-integration.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Integrate your application logs to Cloudwatch",truncated:!1,prevItem:{title:"Import your environment variables with the Qovery CLI",permalink:"/guides/tutorial/import-your-environment-variables-with-the-qovery-cli"},nextItem:{title:"Kubernetes observability and monitoring with Datadog",permalink:"/guides/tutorial/kubernetes-observability-and-monitoring-with-datadog"}},s=[{value:"AWS permissions for Cloudwatch",id:"aws-permissions-for-cloudwatch",children:[]},{value:"Helm",id:"helm",children:[]},{value:"Cloudwatch usage",id:"cloudwatch-usage",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Qovery provides by default an easy way to get access to your logs through the Console or the CLI. For statistics, debugging or security reasons, you may want to access all logs and perform a full-text search inside them."),Object(r.b)("p",null,"Qovery implementation is based on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://grafana.com/oss/loki/"}),"Loki")," for performance and cost-effective reasons. However, Loki is not a full-text search engine. It is a log aggregation system. It is not designed to be queried directly."),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"Why Qovery does not provides current Loki access?"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"As mentioned Loki is not a full-text search and results may not reflect what you are looking for."),Object(r.b)("li",{parentName:"ol"},"Loki is configured to answer usage from Qovery Console and CLI. Using it directly may impact Qovery Console and CLI performances or worst, lose logs and make it irresponsive."))),Object(r.b)("p",null,"Serveral solutions exists, with and without 3rd parties. We will cover here a solution without a third party. But if you're interrested, you can take a look at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/tutorial/kubernetes-observability-and-monitoring-with-datadog/"}),"Datadog integration"),"."),Object(r.b)("p",null,"Note: in this tutorial, we are using Fluent-bit with proposed solutions above. However, if none of those solutions suits your needs, feel free to look at supported solution on the official website."),Object(r.b)("h2",{id:"aws-permissions-for-cloudwatch"},"AWS permissions for Cloudwatch"),Object(r.b)("p",null,"We will create a dedicated service account (note: STS account can be used, but for simplicity reasons, we will use a dedicated service account)."),Object(r.b)("p",null,"On IAM create a policy with the following permissions, and name this policy ",Object(r.b)("inlineCode",{parentName:"p"},"fluent-bit-write-policy"),":"),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/aws-cloudwatch/fluent-bit-policy-content.png",alt:"policy content"})),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "CloudWatchLogs",\n            "Effect": "Allow",\n            "Action": [\n                "logs:CreateLogGroup",\n                "logs:CreateLogStream",\n                "logs:PutRetentionPolicy",\n                "logs:PutLogEvents"\n            ],\n            "Resource": "arn:aws:logs:*:*:*"\n        }\n    ]\n}\n')),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/aws-cloudwatch/fluent-bit-policy-create.png",alt:"policy create"})),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"You can enforce this policy by cluster if you need, by updating the ",Object(r.b)("inlineCode",{parentName:"p"},"Resource")," content. But we want to keep it simple in this tutorial, so we will apply it to all clusters (so you can reuse the same service account if you want for other clusters).")),Object(r.b)("p",null,"Once done, let's create a user and attach the policy to it:"),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/aws-cloudwatch/fluent-bit-user-create.png",alt:"User create"})),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/aws-cloudwatch/fluent-bit-cloudwatch-permissions.png",alt:"User permissions"})),Object(r.b)("p",null,"Finish the user creation and keep credentials for the coming section."),Object(r.b)("h2",{id:"helm"},"Helm"),Object(r.b)("p",null,"Ensure you have the following elements before going ahead:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Helm should be installed on your machine. If you don't have it, you can follow the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://helm.sh/docs/intro/install/"}),"official documentation"),"."),Object(r.b)("li",{parentName:"ol"},"You need Kubeconfig configuration file and permissions to access the cluster. You can use the same documentation as kubectl to ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/guides/tutorial/how-to-connect-to-your-eks-cluster-with-kubectl/"}),"get the kubeconfig file"),".")),Object(r.b)("p",null,"We will use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://artifacthub.io/packages/helm/aws/aws-for-fluent-bit"}),"AWS fluent-bit Helm Chart")," to setup logs streaming:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"helm repo add eks https://aws.github.io/eks-charts\n")),Object(r.b)("p",null,"Create on your workstation a ",Object(r.b)("inlineCode",{parentName:"p"},"values.yaml")," file to setup your custom configuration and adapt required fields:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'cloudWatch:\n  enabled: true\n  region: "<enter your cluster region>"\n  logGroupName: "/aws/eks/fluentbit-<enter your cluster region>/logs"\n  logRetentionDays: 7\n\nenv:\n  - name: "AWS_ACCESS_KEY_ID"\n    value: "<your access key>"\n  - name: "AWS_SECRET_ACCESS_KEY"\n    value: "<your secret access key>"\n\nfirehose:\n  enabled: false\n\nkinesis:\n  enabled: false\n\nelasticsearch:\n  enabled: false\n')),Object(r.b)("p",null,"You can take a look at additional configuration options on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://artifacthub.io/packages/helm/aws/aws-for-fluent-bit"}),"AWS provided chart")," "),Object(r.b)("p",null,"Then deploy fluent-bit with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"helm upgrade --install aws-for-fluent-bit -f values.yaml --namespace fluent-bit --create-namespace eks/aws-for-fluent-bit --version 0.1.21\n")),Object(r.b)("p",null,"You should start seeing fluent-bit pods. Take a look at the logs to ensure there is no configuration issue."),Object(r.b)("h2",{id:"cloudwatch-usage"},"Cloudwatch usage"),Object(r.b)("p",null,"You can now use Cloudwatch to look at your logs. Connect to Cloudwatch, go into the ",Object(r.b)("inlineCode",{parentName:"p"},"Logs insight")," section, then you can perform queries:"),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/aws-cloudwatch/cloudwatch-search.png",alt:"cloudwatch search"})),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Select the fluent-bit group of logs"),Object(r.b)("li",{parentName:"ol"},"Create a query (",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html"}),"syntax examples"),")"),Object(r.b)("li",{parentName:"ol"},"Run your query"),Object(r.b)("li",{parentName:"ol"},"See the result and expand to filter on other elements")))}p.isMDXComponent=!0},388:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},389:function(e,t,n){"use strict";n(391);var a=n(0),o=n.n(a),r=n(388),i=n.n(r);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,r=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return o.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":a,"alert--icon":!1!==r}),role:"alert"},!1!==r&&o.a.createElement("i",{className:i()("feather","icon-"+(r||l))}),t)}},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||r;return n?o.a.createElement(m,c({ref:t},s,{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},391:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(392)}),n(74)("fill")},392:function(e,t,n){"use strict";var a=n(27),o=n(75),r=n(26);e.exports=function(e){for(var t=a(this),n=r(t.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,s=void 0===l?n:o(l,n);s>c;)t[c++]=e;return t}},393:function(e,t,n){var a=n(28).f,o=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in o||n(10)&&a(o,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},394:function(e,t,n){"use strict";n(393);var a=n(0),o=n.n(a),r=n(389);t.a=function(e){var t=e.children,n=e.name;return o.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},395:function(e,t,n){"use strict";var a=n(1),o=n(0),r=n.n(o),i=n(39),c=n(397),l=n(20),s=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,u=n||l,p=Object(c.a)(u),b=Object(o.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,p]),u&&p?r.a.createElement(i.b,Object(a.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(u),b.current=!0)},innerRef:function(e){var n,a;d&&e&&p&&(n=e,a=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:u})):r.a.createElement("a",Object(a.a)({},e,{href:u}))}},396:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(395),i=n(388),c=n.n(i);n(133);t.a=function(e){var t=e.children,n=e.className,a=e.badge,i=e.leftIcon,l=e.rightIcon,s=e.size,u=e.target,p=e.to,b=c()("jump-to","jump-to--"+s,n),d=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},i&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+i})),o.a.createElement("div",{className:"jump-to--main"},a?o.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return u?o.a.createElement("a",{href:p,target:u,className:b},d):o.a.createElement(r.a,{to:p,className:b},d)}},397:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))}}]);
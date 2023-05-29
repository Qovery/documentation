/*! For license information please see b479fc9a.247ab397.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{344:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),o=(n(0),n(458)),i=n(467),c=(n(457),n(462)),l=(n(464),{last_modified_on:"2022-09-23",$schema:"/.meta/.schemas/guides.json",title:"Kubernetes observability and monitoring with Datadog",description:"How to integrate Datadog with Kubernetes on Qovery.",author_github:"https://github.com/l0ck3",tags:["type: tutorial","technology: qovery"],hide_pagination:!0}),s={categories:[{name:"tutorial",title:"Tutorial",description:"Step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Kubernetes observability and monitoring with Datadog",description:"How to integrate Datadog with Kubernetes on Qovery.",permalink:"/guides/tutorial/kubernetes-observability-and-monitoring-with-datadog",readingTime:"4 min read",source:"@site/guides/tutorial/kubernetes-observability-and-monitoring-with-datadog.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Kubernetes observability and monitoring with Datadog",truncated:!1,prevItem:{title:"Integrate your application logs to Cloudwatch",permalink:"/guides/tutorial/cloudwatch-integration"},nextItem:{title:"Managing Environment Variables in React (create-react-app)",permalink:"/guides/tutorial/managing-env-variables-in-create-react-app"}},u=[{value:"Goal",id:"goal",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],d={rightToc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"While Qovery will soon provide basic metrics on apps resources usage, you might need a more advanced view on what happens on your infrastructure. There are many solutions on the market, one of them being Datadog.\nDatadog is one of the leading platforms for monitoring and observability, and it's pretty easy to integrate it with Qovery."),Object(o.b)(c.a,{name:"guide",mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have a Qovery cluster running"),Object(o.b)("li",{parentName:"ul"},"You have access to your Kubernetes cluster through kubectl: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/guides/tutorial/how-to-connect-to-your-eks-cluster-with-kubectl/"}),"see how here")),Object(o.b)("li",{parentName:"ul"},"Helm v3 is installed on your machine: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://helm.sh/docs/intro/install/"}),"https://helm.sh/docs/intro/install/")))),Object(o.b)("h2",{id:"goal"},"Goal"),Object(o.b)("p",null,"In this tutorial, we will install the Datadog agent on a Qovery cluster to gather metrics about infrastructure and applications."),Object(o.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("h4",{id:"create-a-datadog-account"},"Create a Datadog Account"),Object(o.b)("p",null," The first step is to create an account on Datadog: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.datadoghq.com"}),"https://www.datadoghq.com"),"."),Object(o.b)("p",null," You will be prompted to enter some information. An important decision you have to make is which site to use. It will determine where your data get stored."),Object(o.b)("p",null," Warning: You can't migrate your data between regions, so chose carefully. More information here: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.datadoghq.com/fr/getting_started/site/"}),"https://docs.datadoghq.com/fr/getting_started/site/")),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/kubernetes-observability-and-monitoring-with-datadog/0.png",alt:"Datadog - Console"})),Object(o.b)("p",null,"After signup, you will be redirected to a wizard. Fill-in the information until you get to step 3.")),Object(o.b)("li",null,Object(o.b)("h4",{id:"prepare-the-agent-helm-chart-values"},"Prepare the agent Helm chart values"),Object(o.b)("p",null,"When you get to step 3, ",Object(o.b)("inlineCode",{parentName:"p"},"Agent Setup"),", select ",Object(o.b)("inlineCode",{parentName:"p"},"Kubernetes")," in the list."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/kubernetes-observability-and-monitoring-with-datadog/1.png",alt:"Datadog - Console"})),Object(o.b)("p",null,"This screen shows you all the information you need to install the agent."),Object(o.b)("p",null,"Create a ",Object(o.b)("inlineCode",{parentName:"p"},"datadog-values.yaml")," file with the following content:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'datadog:\n  clusterName: qovery-dx-cluster\n\n  # datadog.site -- The site of the Datadog intake to send Agent data to\n  ## Set to \'datadoghq.eu\' to send data to the EU site.\n  site: datadoghq.eu\n\n  # Export custom Kubernetes labels as tags\n  podLabelsAsTags:\n    "qovery.com/*": "%%label%%"\n\n  logs:\n    enabled: true\n    containerCollectAll: true\n\n  # Set to false if you are not using APM.\n  apm:\n    enabled: true\n  \n  containerExcludeLogs: "kube_namespace:kube-system kube_namespace:qovery kube_namespace:cert-manager kube_namespace:nginx-ingress kube_namespace:logging kube_namespace:prometheus"\n\n# You can remove this part if you are not using APM.\n# Note that it it will be enabled for all your applications.\nclusterAgent:\n  admissionController:\n    enabled: true\n    mutateUnlabelled: true\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Replace ",Object(o.b)("inlineCode",{parentName:"li"},"<CLUSTER NAME>")," with a meaningful name to identify your cluster."),Object(o.b)("li",{parentName:"ul"},"Set the ",Object(o.b)("inlineCode",{parentName:"li"},"site")," value corresponding to the one you selected upon account creation (you can find the information under ",Object(o.b)("inlineCode",{parentName:"li"},"1 > With Helm V3 > --set datadog.site=<YOUR SITE VALUE>"),")")),Object(o.b)("p",null,"There are many other values you can set. For advanced usage, check: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Datadog/helm-charts/blob/main/charts/datadog/values.yaml"}),"https://github.com/Datadog/helm-charts/blob/main/charts/datadog/values.yaml"))),Object(o.b)("li",null,Object(o.b)("h4",{id:"install-datadog-agent-in-your-cluster"},"Install Datadog agent in your cluster"),Object(o.b)("p",null,"The Datadog agent is a program that will collect data from your cluster and forward it to Datadog.\nWe'll install it uning ",Object(o.b)("inlineCode",{parentName:"p"},"Helm"),"."),Object(o.b)("p",null,"First add the ",Object(o.b)("inlineCode",{parentName:"p"},"datadog")," Helm repository and update your local list:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"helm repo add datadog https://helm.datadoghq.com\nhelm repo update\n")),Object(o.b)("p",null,"Then we will install the agent in the ",Object(o.b)("inlineCode",{parentName:"p"},"datadog")," namespace:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"helm install datadog-agent \\ \n  -n datadog --create-namespace \\\n  -f <PATH TO datadog-values.yaml> \\\n  --set datadog.apiKey='<API KEY>' \\\n  datadog/datadog\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Edit the path to the ",Object(o.b)("inlineCode",{parentName:"li"},"datadog-values.yaml")," file you created"),Object(o.b)("li",{parentName:"ul"},"Replace ",Object(o.b)("inlineCode",{parentName:"li"},"<API KEY>")," with your actual API KEY. You can find it under ",Object(o.b)("inlineCode",{parentName:"li"},"1 > With Helm V3 > --set datadog.apiKey=<API KEY>")))),Object(o.b)("li",null,Object(o.b)("h4",{id:"check-the-agent-is-running-properly"},"Check the agent is running properly"),Object(o.b)("p",null,"Wait for a minute then run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods -n datadog\n")),Object(o.b)("p",null,"If the installation was successful, you should see an output similar to this one: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"NAME                                                READY   STATUS    RESTARTS   AGE\ndatadog-agent-2xhsv                                 3/3     Running   0          1m\ndatadog-agent-cluster-agent-7f8bddd44-pwjnl         1/1     Running   0          1m\ndatadog-agent-kube-state-metrics-577fcf6778-kc2gk   1/1     Running   0          1m\ndatadog-agent-qfsl2                                 3/3     Running   0          1m\ndatadog-agent-s5r5r                                 3/3     Running   0          1m\n"))),Object(o.b)("li",null,Object(o.b)("h4",{id:"finish-setup"},"Finish Setup"),Object(o.b)("p",null,"Once Datadog receives your data, you should be able to click ",Object(o.b)("inlineCode",{parentName:"p"},"Next")," on the wizard. You might need to refresh the page in some cases. It can take a couple minutes before your data is ready."),Object(o.b)("p",null,"You will then arrive on ",Object(o.b)("inlineCode",{parentName:"p"},"Step 4")),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/kubernetes-observability-and-monitoring-with-datadog/2.png",alt:"Datadog - Console"})),Object(o.b)("p",null,"You can skip this part if you're not interested in monitoring your cloud account."),Object(o.b)("p",null,"Finally, restart your applications if you are using APM.")))),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"You now have Datadog agent running on your Qovery cluster. You can check their ",Object(o.b)("inlineCode",{parentName:"p"},"Getting Started")," guide to familiarize yourself with the product: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.datadoghq.com/fr/getting_started"}),"https://docs.datadoghq.com/fr/getting_started"),"."))}b.isMDXComponent=!0},456:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},457:function(e,t,n){"use strict";n(459);var a=n(0),r=n.n(a),o=n(456),i=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":a,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},458:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(i,".").concat(p)]||d[p]||b[p]||o;return n?r.a.createElement(m,c({ref:t},s,{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},459:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(463)}),n(74)("fill")},460:function(e,t,n){var a=n(26).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},461:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),i=n(39),c=n(465),l=n(20),s=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,u=n||l,d=Object(c.a)(u),b=Object(r.useRef)(!1),p=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!p&&d&&window.docusaurus.prefetch(u),function(){p&&t&&t.disconnect()}}),[u,p,d]),u&&d?o.a.createElement(i.b,Object(a.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(u),b.current=!0)},innerRef:function(e){var n,a;p&&e&&d&&(n=e,a=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:u})):o.a.createElement("a",Object(a.a)({},e,{href:u}))}},462:function(e,t,n){"use strict";n(460);var a=n(0),r=n.n(a),o=n(457);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},463:function(e,t,n){"use strict";var a=n(28),r=n(75),o=n(27);e.exports=function(e){for(var t=a(this),n=o(t.length),i=arguments.length,c=r(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,s=void 0===l?n:r(l,n);s>c;)t[c++]=e;return t}},464:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(461),i=n(456),c=n.n(i);n(133);t.a=function(e){var t=e.children,n=e.className,a=e.badge,i=e.leftIcon,l=e.rightIcon,s=e.size,u=e.target,d=e.to,b=c()("jump-to","jump-to--"+s,n),p=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},i&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+i})),r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return u?r.a.createElement("a",{href:d,target:u,className:b},p):r.a.createElement(o.a,{to:d,className:b},p)}},465:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))},466:function(e,t,n){"use strict";var a=n(468),r=n(51);function o(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,a){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=n):a[e]=n};case"bracket":return function(e,n,a){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],n):a[e]=[n]:a[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=r({arrayFormat:"none"},t)),a=Object.create(null);return"string"!=typeof e?a:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(r),o,a)})),Object.keys(a).sort().reduce((function(e,t){var n=a[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):a},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,a){return null===n?[o(t,e),"[",a,"]"].join(""):[o(t,e),"[",o(a,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(a){var r=e[a];if(void 0===r)return"";if(null===r)return o(a,t);if(Array.isArray(r)){var i=[];return r.slice().forEach((function(e){void 0!==e&&i.push(n(a,e,i.length))})),i.join("&")}return o(a,t)+"="+o(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},467:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=(n(456),n(466)),i=n.n(o);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(l),u=Object(a.useState)(null),d=u[0],b=u[1];return r.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!d&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==d&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},468:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
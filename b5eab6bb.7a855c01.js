(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{359:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(1),o=a(9),r=(a(0),a(455)),i=a(462),l=a(467),c=a(469),s=(a(454),a(459)),u=(a(463),{last_modified_on:"2024-09-09",$schema:"/.meta/.schemas/guides.json",title:"Kubernetes observability and monitoring with Datadog",description:"How to integrate Datadog with Kubernetes on Qovery.",author_github:"https://github.com/acarranoqovery",tags:["type: tutorial","technology: qovery"],hide_pagination:!0}),d={categories:[{name:"tutorial",title:"Tutorial",description:"Additional step-by-step resources to leverage even more Qovery",permalink:"/guides/tutorial"}],coverLabel:"Kubernetes observability and monitoring with Datadog",description:"How to integrate Datadog with Kubernetes on Qovery.",permalink:"/guides/tutorial/kubernetes-observability-and-monitoring-with-datadog",readingTime:"5 min read",source:"@site/guides/tutorial/kubernetes-observability-and-monitoring-with-datadog.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Kubernetes observability and monitoring with Datadog",truncated:!1,prevItem:{title:"Integrate your application logs to Cloudwatch",permalink:"/guides/tutorial/cloudwatch-integration"},nextItem:{title:"Managing Environment Variables in React (create-react-app)",permalink:"/guides/tutorial/managing-env-variables-in-create-react-app"}},b=[{value:"Installation",id:"installation",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],m={rightToc:b};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"While Qovery will soon provide basic metrics on apps resources usage, you might need a more advanced view on what happens on your infrastructure. There are many solutions on the market, one of them being Datadog.\nDatadog is one of the leading platforms for monitoring and observability, and it's pretty easy to integrate it with Qovery."),Object(r.b)(s.a,{name:"guide",mdxType:"Assumptions"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You have a Qovery cluster running"),Object(r.b)("li",{parentName:"ul"},"You have a dedicated Qovery project and environment to deploy Datadog (example: Project=Tooling, Environment=Production)"),Object(r.b)("li",{parentName:"ul"},"You have a Datadog account"),Object(r.b)("li",{parentName:"ul"},"You have already created a ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.datadoghq.com/account_management/api-app-keys/#api-keys"}),"Datadog API Key")))),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"In this tutorial, we will install the Datadog agent on a Qovery cluster to gather metrics about infrastructure and applications."),Object(r.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",null,Object(r.b)("h4",{id:"add-the-datadog-helm-repository"},"Add the Datadog helm repository"),Object(r.b)("p",null,"Add the Datadog helm repository in your Qovery settings by following ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/helm-repository/"}),"this documentation")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Repository name: ",Object(r.b)("inlineCode",{parentName:"li"},"Datadog")),Object(r.b)("li",{parentName:"ul"},"Kind: ",Object(r.b)("inlineCode",{parentName:"li"},"HTTPS")),Object(r.b)("li",{parentName:"ul"},"Repository URL: ",Object(r.b)("inlineCode",{parentName:"li"},"https://helm.datadoghq.com")))),Object(r.b)("li",null,Object(r.b)("h4",{id:"create-the-datadog-service-within-qovery"},"Create the datadog service within Qovery"),Object(r.b)("p",null,"Create the Datadog helm service in the Qovery environment of your choice (preferrably within a dedicated Tooling project) by following ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/helm/"}),"this documentation")," and these values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"General:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Application name: ",Object(r.b)("inlineCode",{parentName:"li"},"Datadog")),Object(r.b)("li",{parentName:"ul"},"Source:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Helm source: ",Object(r.b)("inlineCode",{parentName:"li"},"Helm repository")),Object(r.b)("li",{parentName:"ul"},"Repository: ",Object(r.b)("inlineCode",{parentName:"li"},"Datadog")," (the name given during the datadog helm repository added in the previous step)"),Object(r.b)("li",{parentName:"ul"},"Chart name: ",Object(r.b)("inlineCode",{parentName:"li"},"datadog")),Object(r.b)("li",{parentName:"ul"},"Version: ",Object(r.b)("inlineCode",{parentName:"li"},"3.49.5")," (this is the version we used for this setup, update it based on the chosen version)"),Object(r.b)("li",{parentName:"ul"},"Allow cluster-wide resources \u2714\ufe0f"))))),Object(r.b)("li",{parentName:"ul"},"Values",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Values override as file:"),Object(r.b)("li",{parentName:"ul"},"File source: ",Object(r.b)("inlineCode",{parentName:"li"},"Raw YAML")),Object(r.b)("li",{parentName:"ul"},"Raw YAML:")))),Object(r.b)(l.a,{centered:!0,className:"rounded",defaultValue:"default",placeholder:"Select your cluster type",select:!1,size:null,values:[{group:"Cluster",label:"Default",value:"default"},{group:"Cluster",label:"AWS with Karpenter",value:"karpenter"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"default",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# The following YAML contains the minimum configuration required to deploy the Datadog Agent\n# on your cluster. Update it accordingly to your needs\ndatadog:\n  # here we use a Qovery secret to retrieve the Datadog API Key (See next step)\n  apiKey: qovery.env.DD_API_KEY\n  # Update the site depending on where you want to store your data in Datadog\n  site: datadoghq.eu\n  # Update the cluster name with the name of your choice\n  clusterName: qoverycluster\n"))),Object(r.b)(c.a,{value:"karpenter",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# The following YAML contains the minimum configuration required to deploy the Datadog Agent\n# on your cluster. Update it accordingly to your needs\ndatadog:\n  # here we use a Qovery secret to retrieve the Datadog API Key (See next step)\n  apiKey: qovery.env.DD_API_KEY\n  # Update the site depending on where you want to store your data in Datadog\n  site: datadoghq.eu\n  # Update the cluster name with the name of your choice\n  clusterName: qoverycluster\nagents:\n  tolerations:\n    - operator: Exists\n  affinity:\n    nodeAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        nodeSelectorTerms:\n          - matchExpressions:\n            - key: eks.amazonaws.com/compute-type\n              operator: NotIn\n              values:\n                - fargate\n")))),Object(r.b)("p",null,"There are many other values you can set and modify the Datadog agent behaviour. For advanced usage, check: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Datadog/helm-charts/blob/main/charts/datadog/values.yaml"}),"https://github.com/Datadog/helm-charts/blob/main/charts/datadog/values.yaml")),Object(r.b)("p",null,"Now get to the last step and just ",Object(r.b)("inlineCode",{parentName:"p"},"Create")," the service on Qovery.")),Object(r.b)("li",null,Object(r.b)("h4",{id:"store-the-datadog-api-key-as-secret"},"Store the Datadog API Key as secret"),Object(r.b)("p",null,"In the previous step we have assigned the macro ",Object(r.b)("inlineCode",{parentName:"p"},"qovery.env.DD_API_KEY")," to the API Key value. In this step we will create this secret within the Qovery console."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open the service overview of the created Datadog service"),Object(r.b)("li",{parentName:"ul"},"Enter the ",Object(r.b)("inlineCode",{parentName:"li"},"Variables")," section"),Object(r.b)("li",{parentName:"ul"},"Add a new Variable with:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Variable = DD_API_KEY"),Object(r.b)("li",{parentName:"ul"},"Value = <your_API_KEY>"),Object(r.b)("li",{parentName:"ul"},"Scope = Service (so that it is accessible only to this service)"),Object(r.b)("li",{parentName:"ul"},"Secret variable \u2714\ufe0f")))),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/kubernetes-observability-and-monitoring-with-datadog/datadog-secret.png",alt:"Datadog - API Key"})),Object(r.b)("p",null,"If you need more information on how to manage your environment variables, have a look at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"this documentation"))),Object(r.b)("li",null,Object(r.b)("h4",{id:"deploy-your-chart"},"Deploy your chart"),Object(r.b)("p",null,"Open the ",Object(r.b)("inlineCode",{parentName:"p"},"Play")," button and trigger the deployment of your chart (see point 1 in the picture below)."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/kubernetes-observability-and-monitoring-with-datadog/deploy.png",alt:"Datadog - Deploy"})),Object(r.b)("p",null,"You can follow the deployment and access the deployment logs by pressing the ",Object(r.b)("inlineCode",{parentName:"p"},"Log")," button (see point 2 in the picutre above)."),Object(r.b)("p",null,"Once the deployment is completed, you should see the Datadog agent pods and their status directly within the Qovery console."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/kubernetes-observability-and-monitoring-with-datadog/datadog-pods.png",alt:"Datadog - Pods"})),Object(r.b)("p",null,"You can also look at the Pod logs by pressing the ",Object(r.b)("inlineCode",{parentName:"p"},"Log")," button.")),Object(r.b)("li",null,Object(r.b)("h4",{id:"verify-the-setup-on-datadog"},"Verify the setup on Datadog"),Object(r.b)("p",null,"Access again your Datadog interface and access the Infrastructure > Containers > Kubernetes sections. You should now see the data coming from your Qovery cluster"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/kubernetes-observability-and-monitoring-with-datadog/datadog-console.png",alt:"Datadog - Console"}))))),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"You now have Datadog agent running on your Qovery cluster. You can check their ",Object(r.b)("inlineCode",{parentName:"p"},"Getting Started")," guide to familiarize yourself with the product: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.datadoghq.com/fr/getting_started"}),"https://docs.datadoghq.com/fr/getting_started"),"."))}p.isMDXComponent=!0},454:function(e,t,a){"use strict";a(456);var n=a(0),o=a.n(n),r=a(453),i=a.n(r);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,r=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return o.a.createElement("div",{className:i()(a,"alert","alert--"+l,{"alert--fill":n,"alert--icon":!1!==r}),role:"alert"},!1!==r&&o.a.createElement("i",{className:i()("feather","icon-"+(r||c))}),t)}},458:function(e,t,a){var n=a(28).f,o=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in o||a(10)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},459:function(e,t,a){"use strict";a(458);var n=a(0),o=a.n(n),r=a(454);t.a=function(e){var t=e.children,a=e.name;return o.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},460:function(e,t,a){"use strict";var n=a(1),o=a(0),r=a.n(o),i=a(39),l=a(464),c=a(20),s=a.n(c);t.a=function(e){var t,a=e.to,c=e.href,u=a||c,d=Object(l.a)(u),b=Object(o.useRef)(!1),m=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!m&&d&&window.docusaurus.prefetch(u),function(){m&&t&&t.disconnect()}}),[u,m,d]),u&&d?r.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(u),b.current=!0)},innerRef:function(e){var a,n;m&&e&&d&&(a=e,n=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:u})):r.a.createElement("a",Object(n.a)({},e,{href:u}))}},462:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=(a(453),a(461)),i=a.n(r);a(133);t.a=function(e){var t=e.children,a=e.headingDepth,r=e.hideFeedbackQuestion,l="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+l+" failed",body:"The tutorial on:\n\n"+l+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(c),u=Object(n.useState)(null),d=u[0],b=u[1];return o.a.createElement("div",{className:"steps steps--h"+a},t,!r&&!d&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==d&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},463:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(460),i=a(453),l=a.n(i);a(134);t.a=function(e){var t=e.children,a=e.className,n=e.badge,i=e.leftIcon,c=e.rightIcon,s=e.size,u=e.target,d=e.to,b=l()("jump-to","jump-to--"+s,a),m=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},i&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+i})),o.a.createElement("div",{className:"jump-to--main"},n?o.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return u?o.a.createElement("a",{href:d,target:u,className:b},m):o.a.createElement(r.a,{to:d,className:b},m)}},464:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},467:function(e,t,a){"use strict";var n=a(1),o=(a(471),a(468),a(52),a(29),a(22),a(21),a(0)),r=a.n(o),i=a(475),l=a(453),c=a.n(l),s=a(461),u=a.n(s),d=a(474),b=37,m=39;function p(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,o=e.className,i=e.handleKeydown,l=e.style,s=e.values,u=e.selectedValue,d=e.tabRefs;return r.a.createElement("div",{className:a?"tabs--centered":null},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",o,{"tabs--block":t}),style:l},s.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:c()("tab-item",{"tab-item--active":u===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return i(d,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,o=e.size,l=e.values,c=l;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return r.a.createElement(i.a,{className:"react-select-container react-select--"+o,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:l.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,i=e.groupId,l=e.label,c=e.placeholder,s=e.select,g=e.size,y=(e.style,e.values),f=e.urlKey,v=Object(d.a)(),j=v.tabGroupChoices,O=v.setTabGroupChoices,w=Object(o.useState)(a),N=w[0],D=w[1];if(null!=i){var k=j[i];null!=k&&k!==N&&D(k)}var E=function(e){D(e),null!=i&&O(i,e)},C=[],I=function(e,t,a){switch(a.keyCode){case m:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(o.useEffect)((function(){if("undefined"!=typeof window&&window.location&&f){var e=u.a.parse(window.location.search);e[f]&&D(e[f])}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"margin-bottom--"+(g||"md")},l&&r.a.createElement("div",{className:"margin-vert--sm"},l),y.length>1&&(s?r.a.createElement(h,Object(n.a)({changeSelectedValue:E,handleKeydown:I,placeholder:c,selectedValue:N,size:g,tabRefs:C},e)):r.a.createElement(p,Object(n.a)({changeSelectedValue:E,handleKeydown:I,selectedValue:N,tabRefs:C},e)))),o.Children.toArray(t).filter((function(e){return e.props.value===N}))[0])}},469:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement(o.a.Fragment,null,e.children)}}}]);
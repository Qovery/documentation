(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{354:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return m}));var n=a(1),r=a(9),l=(a(0),a(465)),i=a(477),o=a(478),u=a(472),c=a(469),s={last_modified_on:"2024-11-30",$schema:"/.meta/.schemas/guides.json",title:"Deploy JupyterHub using Helm",description:"How to deploy JupyterHub on Qovery using the official Helm chart.",author_github:"https://github.com/baalooos",tags:["type: tutorial","technology: qovery"],hide_pagination:!0},b={categories:[{name:"tutorial",title:"Tutorial",description:"Additional step-by-step resources to leverage even more Qovery",permalink:"/guides/tutorial"}],coverLabel:"Deploy JupyterHub using Helm",description:"How to deploy JupyterHub on Qovery using the official Helm chart.",permalink:"/guides/tutorial/deploy-jupyterhub-qovery",readingTime:"3 min read",source:"@site/guides/tutorial/deploy-jupyterhub-qovery.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Deploy JupyterHub using Helm",truncated:!1,prevItem:{title:"Deploy Frontend App",permalink:"/guides/advanced/deploy-frontend"},nextItem:{title:"Deploy Rails with PostgreSQL and Sidekiq",permalink:"/guides/tutorial/deploy-rails-with-postgresql-and-sidekiq"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],d={rightToc:p};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"JupyterHub is an easy way to interact with a computing environment through a webpage. It provides a standardized way to serve Jupyter Notebooks for multiple users. Pairing it with Kubernetes and Qovery makes it easier to manage and scale."),Object(l.b)(c.a,{name:"guide",mdxType:"Assumptions"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You have a Qovery cluster ready"),Object(l.b)("li",{parentName:"ul"},"You have a dedicated Qovery project and environment to deploy JupyterHub (example: Project=JupyterHub, Environment=Production)"))),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("p",null,"The easiest way to deploy JupyterHub is using the official ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jupyterhub/helm-chart"}),"Helm Chart"),". It will create all the resources you need to run JupyterHub."),Object(l.b)("p",null,"For more information, the official documentation is available ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://z2jh.jupyter.org/en/stable/jupyterhub/installation.html"}),"here"),"."),Object(l.b)(u.a,{headingDepth:3,mdxType:"Steps"},Object(l.b)("ol",null,Object(l.b)("li",null,Object(l.b)("h4",{id:"add-the-jupyterhub-helm-repository"},"Add the JupyterHub helm repository"),Object(l.b)("p",null,"Add the JupyterHub helm repository in your Qovery settings by following ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/helm-repository/"}),"this documentation")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Repository name: ",Object(l.b)("inlineCode",{parentName:"li"},"JupyterHub")),Object(l.b)("li",{parentName:"ul"},"Kind: ",Object(l.b)("inlineCode",{parentName:"li"},"HTTPS")),Object(l.b)("li",{parentName:"ul"},"Repository URL: ",Object(l.b)("inlineCode",{parentName:"li"},"https://hub.jupyter.org/helm-chart/")))),Object(l.b)("li",null,Object(l.b)("h4",{id:"create-the-jupyterhub-service-within-qovery"},"Create the JupyterHub service within Qovery"),Object(l.b)("p",null,"Create the JupyterHub service in the Qovery environment of your choice (preferably within a dedicated JupyterHub project) by following ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/helm/"}),"this documentation")," and these values:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"General:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Application name: ",Object(l.b)("inlineCode",{parentName:"li"},"JupyterHub")),Object(l.b)("li",{parentName:"ul"},"Source:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Helm source: ",Object(l.b)("inlineCode",{parentName:"li"},"Helm repository")),Object(l.b)("li",{parentName:"ul"},"Repository: ",Object(l.b)("inlineCode",{parentName:"li"},"JupyterHub")," (the name given during the JupyterHub helm repository added in the previous step)"),Object(l.b)("li",{parentName:"ul"},"Chart name: ",Object(l.b)("inlineCode",{parentName:"li"},"jupyterhub")),Object(l.b)("li",{parentName:"ul"},"Version: ",Object(l.b)("inlineCode",{parentName:"li"},"3.3.7")," (this is the version we used for this setup, update it based on the chosen version)"),Object(l.b)("li",{parentName:"ul"},"Allow cluster-wide resources \u2714\ufe0f"))))),Object(l.b)("li",{parentName:"ul"},"Values",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Values override as file:"),Object(l.b)("li",{parentName:"ul"},"File source: ",Object(l.b)("inlineCode",{parentName:"li"},"Raw YAML")),Object(l.b)("li",{parentName:"ul"},"Raw YAML:")))),Object(l.b)(i.a,{centered:!0,className:"rounded",defaultValue:"default",placeholder:"Select your cluster type",select:!1,size:null,values:[{group:"Cluster",label:"Default",value:"default"},{group:"Cluster",label:"AWS with Karpenter",value:"karpenter"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"default",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'fullnameOverride: "jupyterhub"\nproxy:\n    service:\n        type: ClusterIP\n'))),Object(l.b)(o.a,{value:"EKS with karpenter",mdxType:"TabItem"},Object(l.b)("p",null,"To ensure every node created by Karpenter is monitored by Datadog, we need to configure a priority class."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'fullnameOverride: "jupyterhub"\nproxy:\n    service:\n        type: ClusterIP\nscheduling:\n    podPriority:\n        enabled: true\n        globalDefault: true\n        defaultPriority: 50\n        imagePullerPriority: 1000\n        userPlaceholderPriority: 0\n')))),Object(l.b)("p",null,"There are many other values you can set to modify the JupyterHub behavior. For advanced usage, check: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://z2jh.jupyter.org/en/stable/jupyterhub/customization.html"}),"JupyterHub Customization")),Object(l.b)("p",null,"Now get to the last step and ",Object(l.b)("inlineCode",{parentName:"p"},"Create")," the service on Qovery.")),Object(l.b)("li",null,Object(l.b)("h4",{id:"add-network-configuration"},"Add Network configuration"),Object(l.b)("p",null,"In the previous step, we created the JupyterHub service. In this step, we will update its configuration to make it available on the public network (through Qovery Nginx Ingress)."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Open the JupyterHub service details"),Object(l.b)("li",{parentName:"ul"},"Enter the ",Object(l.b)("inlineCode",{parentName:"li"},"Settings")," section"),Object(l.b)("li",{parentName:"ul"},"Click on ",Object(l.b)("inlineCode",{parentName:"li"},"Networking")),Object(l.b)("li",{parentName:"ul"},"Add a new Port with:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Service name: jupyterhub-proxy-public"),Object(l.b)("li",{parentName:"ul"},"Service port: 80"),Object(l.b)("li",{parentName:"ul"},"Select protocol: HTTP"),Object(l.b)("li",{parentName:"ul"},"External port: 443"),Object(l.b)("li",{parentName:"ul"},"Port name: jupyterhub-proxy-public-p80")))),Object(l.b)("p",null,"If you need more information on how to manage your ports, have a look at ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.qovery.com/docs/using-qovery/configuration/application/#ports"}),"this"))),Object(l.b)("li",null,Object(l.b)("h4",{id:"deploy-your-chart"},"Deploy your chart"),Object(l.b)("p",null,"Open the ",Object(l.b)("inlineCode",{parentName:"p"},"Play")," button and trigger the deployment of your chart."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/deploy-jupyterhub-qovery/deploy.png",alt:"JupyterHub - Deploy"}))),Object(l.b)("li",null,Object(l.b)("h4",{id:"access-jupyterhub"},"Access JupyterHub"),Object(l.b)("p",null,"You can click the ",Object(l.b)("inlineCode",{parentName:"p"},"Link")," button to access JupyterHub on your cluster."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/deploy-jupyterhub-qovery/link.png",alt:"JupyterHub - Link"})),Object(l.b)("p",null,"Now you can login to the webUI and start playing with Jupyter Notebooks.")))),Object(l.b)("h2",{id:"conclusion"},"Conclusion"),Object(l.b)("p",null,"JupyterHub is running on your Qovery cluster. This is a simple installation and you should try to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://z2jh.jupyter.org/en/stable/jupyterhub/customization.html"}),"customize")," it according to your needs. You can also check the",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://z2jh.jupyter.org/en/stable/administrator/index.html"}),"Adminstrator Guide"),"to better understand how it works."))}m.isMDXComponent=!0},464:function(e,t,a){"use strict";a(466);var n=a(0),r=a.n(n),l=a(463),i=a.n(l);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,l=e.icon,o=e.type,u=null;switch(o){case"danger":u="alert-triangle";break;case"success":u="check-circle";break;case"warning":u="alert-triangle";break;default:u="info"}return r.a.createElement("div",{className:i()(a,"alert","alert--"+o,{"alert--fill":n,"alert--icon":!1!==l}),role:"alert"},!1!==l&&r.a.createElement("i",{className:i()("feather","icon-"+(l||u))}),t)}},468:function(e,t,a){var n=a(28).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},469:function(e,t,a){"use strict";a(468);var n=a(0),r=a.n(n),l=a(464);t.a=function(e){var t=e.children,a=e.name;return r.a.createElement(l.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},472:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=(a(463),a(471)),i=a.n(l);a(133);t.a=function(e){var t=e.children,a=e.headingDepth,l=e.hideFeedbackQuestion,o="undefined"!=typeof window?window.location:null,u={title:"Tutorial on "+o+" failed",body:"The tutorial on:\n\n"+o+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},c="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(u),s=Object(n.useState)(null),b=s[0],p=s[1];return r.a.createElement("div",{className:"steps steps--h"+a},t,!l&&!b&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:c,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==b&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},477:function(e,t,a){"use strict";var n=a(1),r=(a(480),a(479),a(52),a(29),a(22),a(21),a(0)),l=a.n(r),i=a(483),o=a(463),u=a.n(o),c=a(471),s=a.n(c),b=a(482),p=37,d=39;function m(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,r=e.className,i=e.handleKeydown,o=e.style,c=e.values,s=e.selectedValue,b=e.tabRefs;return l.a.createElement("div",{className:a?"tabs--centered":null},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:u()("tabs",r,{"tabs--block":t}),style:o},c.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":s===t,className:u()("tab-item",{"tab-item--active":s===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return i(b,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,r=e.size,o=e.values,u=o;if(u[0].group){var c=_.groupBy(u,"group");u=Object.keys(c).map((function(e){return{label:e,options:c[e]}}))}return l.a.createElement(i.a,{className:"react-select-container react-select--"+r,classNamePrefix:"react-select",options:u,isClearable:a,placeholder:t,value:o.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,i=e.groupId,o=e.label,u=e.placeholder,c=e.select,y=e.size,j=(e.style,e.values),g=e.urlKey,f=Object(b.a)(),O=f.tabGroupChoices,v=f.setTabGroupChoices,N=Object(r.useState)(a),w=N[0],k=N[1];if(null!=i){var H=O[i];null!=H&&H!==w&&k(H)}var C=function(e){k(e),null!=i&&v(i,e)},J=[],T=function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(r.useEffect)((function(){if("undefined"!=typeof window&&window.location&&g){var e=s.a.parse(window.location.search);e[g]&&k(e[g])}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"margin-bottom--"+(y||"md")},o&&l.a.createElement("div",{className:"margin-vert--sm"},o),j.length>1&&(c?l.a.createElement(h,Object(n.a)({changeSelectedValue:C,handleKeydown:T,placeholder:u,selectedValue:w,size:y,tabRefs:J},e)):l.a.createElement(m,Object(n.a)({changeSelectedValue:C,handleKeydown:T,selectedValue:w,tabRefs:J},e)))),r.Children.toArray(t).filter((function(e){return e.props.value===w}))[0])}},478:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement(r.a.Fragment,null,e.children)}}}]);
/*! For license information please see cb2208c1.865200fe.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{387:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),l=(a(0),a(455)),b=a(454),c={last_modified_on:"2023-05-29",title:"How Qovery Works",description:"How Qovery works under the hood and how to use it when you are a DevOps"},o={id:"getting-started/how-qovery-works",title:"How Qovery Works",description:"How Qovery works under the hood and how to use it when you are a DevOps",source:"@site/docs/getting-started/how-qovery-works.md",permalink:"/docs/getting-started/how-qovery-works",sidebar:"docs",previous:{title:"What is Qovery?",permalink:"/docs/getting-started/what-is-qovery"},next:{title:"Basic Concepts",permalink:"/docs/getting-started/basic-concepts"}},i=[{value:"Your cloud infrastructure with Qovery",id:"your-cloud-infrastructure-with-qovery",children:[{value:"Qovery infrastructure services",id:"qovery-infrastructure-services",children:[]},{value:"Services installed on your infrastructure",id:"services-installed-on-your-infrastructure",children:[]}]},{value:"Application and database deployment",id:"application-and-database-deployment",children:[]},{value:"Integrations",id:"integrations",children:[]},{value:"What&#39;s next",id:"whats-next",children:[]}],u={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Qovery is the state-of-the-art deployment platform that any DevOps would build for their company. Beyond application deployment, Qovery is tailored to run production workload with maximum uptime. It is the perfect solution to make your developers autonomous in deploying their applications and keeping flexibility and control."),Object(l.b)("p",null,"Qovery is the perfect product for DevOps who want to:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Build an internal Platform as a Service (PaaS) with outstanding experience for developers."),Object(l.b)("li",{parentName:"ul"},"Build development, staging and production environments."),Object(l.b)("li",{parentName:"ul"},"Make developers productive and autonomous, while keeping the control on what they do."),Object(l.b)("li",{parentName:"ul"},"Get a production-ready infrastructure and save more than 18 months of work.")),Object(l.b)("p",null,"Qovery is an abstraction layer on top of the most promising tools (Kubernetes, Terraform, Helm...) and cloud service providers (AWS, Digital Ocean, Scaleway...). The goal of Qovery is to provide production-ready platform layer to build on top of it."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/devops/qovery-on-top-of-kubernetes-and-terraform.svg",style:{maxWidth:"400px"},alt:"Qovery runs on top of Kubernetes, Terraform, Helm and many other tools"})),Object(l.b)("h2",{id:"your-cloud-infrastructure-with-qovery"},"Your cloud infrastructure with Qovery"),Object(l.b)(b.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"Check out our guides on how to install Qovery on your ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/advanced/guide-amazon-web-services/"}),"AWS")," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/advanced/guide-scaleway/"}),"Scaleway")," account.")),Object(l.b)("p",null,"Qovery needs to install a few services on your cloud account to work. Some of them are required and others optional."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/devops/qovery-infra-and-your-infra.svg",alt:"Your infrastructure is completely isolated from the qovery control plane"})),Object(l.b)("p",null,"All your applications and your data run in your cloud account. The ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://engine.qovery.com"}),"Qovery Engine"),", Qovery Agent, and Kubernetes are the three main services running on your infrastructure to run your applications. The Qovery Engine and the Qovery Agent receive remote instructions from the control plane via a secured gRPC/TLS connection initiated. Qovery infrastructure and your infrastructure are completely isolated from each other. Qovery has been designed to never impact your infrastructure in case of any outage and security breach."),Object(l.b)("h3",{id:"qovery-infrastructure-services"},"Qovery infrastructure services"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Service"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Open-source"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery Control Plane"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Service to manage user authentication. authorization, and the whole Qovery business logic")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://api-doc.qovery.com/"}),"Qovery API")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"API to programmatically interact with Qovery")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery Web Interface"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"soon"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Web application to interact with Qovery")))),Object(l.b)("h3",{id:"services-installed-on-your-infrastructure"},"Services installed on your infrastructure"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Service"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Open-source"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://engine.qovery.com"}),"Qovery Engine")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Transactional deployment service in charge of maintaining your infrastructure and deploying applications with all the dependencies")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery Agent"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"soon"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Service to forward application logs, services status and real-time metrics to the Qovery Control Plane")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/kubernetes/kubernetes"}),"Kubernetes")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Product to run and scale containers. Qovery runs your application on your cloud managed Kubernetes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/kubernetes-sigs/external-dns"}),"External DNS")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tool to configure external DNS for Kubernetes services")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/jetstack/cert-manager"}),"Cert Manager")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tool to provision and manage TLS certificates on Kubernetes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/grafana/loki"}),"Loki")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tool to aggregate Kubernetes logs. Qovery Agent fetch logs from Loki in real-time")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/grafana/grafana"}),"Grafana")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Product to visualize metrics and logs from infrastructure and app services")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/kubernetes/ingress-nginx/"}),"NGINX ingress")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NGINX ingress controller for Kubernetes")))),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/engine/blob/main/lib/helm-freeze.yaml"}),"Check out")," the list of services installed on your infrastructure."),Object(l.b)("h2",{id:"application-and-database-deployment"},"Application and database deployment"),Object(l.b)("p",null,"Here is an example of what happen in details when you deploy a ",Object(l.b)("strong",{parentName:"p"},"NodeJS application")," with a ",Object(l.b)("strong",{parentName:"p"},"PostgreSQL database")," in ",Object(l.b)("strong",{parentName:"p"},"production")," on ",Object(l.b)("strong",{parentName:"p"},"AWS")," with Qovery."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/devops/from-build-to-scale-schema.svg",alt:"Schema from build to scale with Qovery"})),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Stage"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Step"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Qovery service"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Auth"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Git push received"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Control plane"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery receives your git commit via Github/Gitlab/Bitbucket webhooks")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Auth"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Check permissions"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Control plane"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery checks permissions to proceed app deployment or not")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Build"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Build container"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Engine"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery builds your NodeJS app into container")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Build"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Push container"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Engine"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery push the container into your container registry")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deploy"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deploy PostgreSQL"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Engine"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery match the PostgreSQL version with AWS RDS PostgreSQL and deploy it on your AWS account")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deploy"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Configure PostgreSQL network"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Engine"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery configure the network of your AWS RDS PostgreSQL to make it accessible from your application")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deploy"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Check PostgreSQL"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Engine"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery checks your AWS RDS PostgreSQL is well deployed and running")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deploy"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deploy container"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Engine"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery deploys your container on your Kubernetes cluster")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deploy"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Configure container network"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Engine"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery configure the network of your container to make it accessible from outside")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deploy"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Load balancer"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Engine"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery deploys a load balancer and bind it to your application")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deploy"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DNS"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Engine"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery assign a domain to your application")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deploy"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TLS"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Engine"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery request a TLS certificate and bind it to your domain and application")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deploy"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Check container"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Engine"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery checks your container is well deployed and accessible via internet")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Run"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Run database"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Engine"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery monitor your AWS RDS PostgreSQL database")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Run"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Run container"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Engine"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery runs your container on Kubernetes and ensure it has the maximum uptime")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Run"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Metrics"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Agent"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery watch your application and database metrics and forward them to the Qovery Control Plane")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Run"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Notification"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Control plane"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery notifies the user on the successful app and db deployment")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Scale"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Scale container"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Agent"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Qovery scale your containers depending on the CPU and custom metrics")))),Object(l.b)(b.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"Suppose something goes wrong while deploying your application. Qovery rollbacks your app to return in a consistent state.")),Object(l.b)("h2",{id:"integrations"},"Integrations"),Object(l.b)("p",null,"Qovery lets you integrates any tool that you already have or need. There is no limitations as Qovery runs on Kubernetes and your cloud service provider."),Object(l.b)("h2",{id:"whats-next"},"What's next"),Object(l.b)("p",null,"In the next section we explain how you can manage Qovery via ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/integration/terraform/"}),"Terraform")," and our ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/interface/rest-api/"}),"REST API"),"."))}p.isMDXComponent=!0},453:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var b=r.apply(null,n);b&&e.push(b)}else if("object"===l)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},454:function(e,t,a){"use strict";a(457);var n=a(0),r=a.n(n),l=a(453),b=a.n(l);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,l=e.icon,c=e.type,o=null;switch(c){case"danger":o="alert-triangle";break;case"success":o="check-circle";break;case"warning":o="alert-triangle";break;default:o="info"}return r.a.createElement("div",{className:b()(a,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==l}),role:"alert"},!1!==l&&r.a.createElement("i",{className:b()("feather","icon-"+(l||o))}),t)}},455:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(a),O=n,s=p["".concat(b,".").concat(O)]||p[O]||d[O]||l;return a?r.a.createElement(s,c({ref:t},i,{components:a})):r.a.createElement(s,c({ref:t},i))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var i=2;i<l;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},457:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(460)}),a(74)("fill")},460:function(e,t,a){"use strict";var n=a(28),r=a(75),l=a(27);e.exports=function(e){for(var t=n(this),a=l(t.length),b=arguments.length,c=r(b>1?arguments[1]:void 0,a),o=b>2?arguments[2]:void 0,i=void 0===o?a:r(o,a);i>c;)t[c++]=e;return t}}}]);
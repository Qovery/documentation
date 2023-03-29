(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{393:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(9),a=(n(0),n(444)),i={last_modified_on:"2023-03-29",title:"Basic Concepts",description:"Basic Concepts about Qovery"},c={id:"getting-started/basic-concepts",title:"Basic Concepts",description:"Basic Concepts about Qovery",source:"@site/docs/getting-started/basic-concepts.md",permalink:"/docs/getting-started/basic-concepts",sidebar:"docs",previous:{title:"How Qovery Works",permalink:"/docs/getting-started/how-qovery-works"},next:{title:"Install Qovery",permalink:"/docs/getting-started/install-qovery"}},s=[{value:"Organization",id:"organization",children:[]},{value:"Cluster",id:"cluster",children:[]},{value:"Project",id:"project",children:[]},{value:"Environment",id:"environment",children:[]},{value:"Preview Environment",id:"preview-environment",children:[]},{value:"Service",id:"service",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"High Level Schema",id:"high-level-schema",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"organization"},"Organization"),Object(a.b)("p",null,"An Organization is the workspace where devops and developers can collaborate across many projects at once and it usually corresponds to your company. A user can have access to one or more organizations and have different roles & permissions assigned within it thanks to our ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/#roles-based-access-control-rbac"}),"RBAC system"),"."),Object(a.b)("p",null,"More information about ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/"}),"Organization here"),"."),Object(a.b)("h2",{id:"cluster"},"Cluster"),Object(a.b)("p",null,"At Qovery, when we refer to Clusters, we mean Kubernetes clusters. A Kubernetes cluster is a collection of node machines that allows you to run containerized applications. "),Object(a.b)("p",null,"Qovery creates and manage for you clusters on your cloud account, more than one cluster can be created to match your use case (production, staging, dev etc..). "),Object(a.b)("p",null,"A running cluster is necessary to deploy your application with Qovery."),Object(a.b)("p",null,"More information about ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/clusters/"}),"Cluster here"),"."),Object(a.b)("h2",{id:"project"},"Project"),Object(a.b)("p",null,"A Project allows you to group together a set of services interacting between each other to serve a common purpose. For example, you can have one project to run your main application (composed by a front-end, back-end and a db) and another project to manage your internal tools."),Object(a.b)("p",null,"Services can be then organized into environments so that you can have different versions of the same service running within your project (production, staging, fix for issue X etc..)"),Object(a.b)("p",null,"One organization can have more than one project and you can customize the access to your project thanks to our ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/#roles-based-access-control-rbac"}),"RBAC system"),"."),Object(a.b)("p",null,"More information about ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/project/"}),"Project here"),"."),Object(a.b)("h2",{id:"environment"},"Environment"),Object(a.b)("p",null,"An Environment allows you to group together a set of services having a specific version, usually based on a branch of your repository. For example, you can have one ",Object(a.b)("inlineCode",{parentName:"p"},"Production")," environment (all the services pointing to the main branch), one ",Object(a.b)("inlineCode",{parentName:"p"},"Staging")," environment (all services pointing to the staging branch) etc.."),Object(a.b)("p",null,"Your production environment runs 24/7 while your other environments may not need to run all day long. By setting a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/deployment-rule/"}),"Deployment Rule")," on your environment you can automatically start/stop your non-production environments and thus reduce your cloud provider bill."),Object(a.b)("p",null,"Environments let's you chose on which cluster your services should be deployed."),Object(a.b)("p",null,"More information about ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environment here"),"."),Object(a.b)("h2",{id:"preview-environment"},"Preview Environment"),Object(a.b)("p",null,"A Preview Environment is an ephemeral environment allowing you to get early feedback on your application changes before the changes are merged into production. A dedicated preview environment can be automatically created at each new PR on your repository to validate the change. The environment is automatically deleted once the PR is merged or closed."),Object(a.b)("p",null,"More information about ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/#preview-environment"}),"Preview Environment here"),"."),Object(a.b)("h2",{id:"service"},"Service"),Object(a.b)("p",null,"A Service is the basic unit that you can add to an environment. Each service has an associated git repository (or registry) and a commit (or image_name:tag) that will be used to deploy the service on the cluster."),Object(a.b)("p",null,"Four type of services exists:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Application: it allows you to run your long-running workloads. We usually call them "Containers" when the source code is stored on an image registry. More information about ',Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/application/"}),"Applications here")),Object(a.b)("li",{parentName:"ul"},"Database: it allows you to deploy a database. Qovery allows you to deploy a container and a cloud provider managed version.  More information about ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/database/"}),"Databases here")),Object(a.b)("li",{parentName:"ul"},"CronJob: it allows you to deploy a cronjob on your cluster and execute it based on the selected schedule. More information about ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/cronjob/"}),"Cronjob here")),Object(a.b)("li",{parentName:"ul"},"Lifecycle: it allows you to execute your code based on the events happening on your environment (Start, Stop, Delete etc..). With the right code, it can be used to seed your database when the environment is created or manage the lifecycle of any external resource (via a terraform file, pulumi code etc..). More information about ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/cronjob/"}),"Lifecycle here"))),Object(a.b)("h2",{id:"deployment"},"Deployment"),Object(a.b)("p",null,"A Deployment is the operation allowing you to gather your code and make it runs on your cluster. Qovery can pull your repository, generate a docker image and spawn the necessary resources on your clusters to make your application run."),Object(a.b)("p",null,"You can monitor the execution of the deployment via the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/deployment-management/"}),"Deployment Logs")," while you can monitor the execution of your application thanks to the streamed ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/getting-started/debugging/#logs"}),"Service logs")," directly from the Qovery interface."),Object(a.b)("h2",{id:"high-level-schema"},"High Level Schema"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/basic_concept_orga_project_env.png",alt:"Basic Structure"})))}u.isMDXComponent=!0},444:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?r.a.createElement(m,c({ref:t},l,{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
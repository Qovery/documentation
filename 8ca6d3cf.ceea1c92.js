(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{285:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var o=n(1),r=n(9),i=(n(0),n(417)),a={last_modified_on:"2023-10-10",title:"Deployment",description:"Everything you need to know about the deployment of your applications with Qovery",sidebar_label:"hidden",hide_pagination:!0},l={id:"using-qovery/deployment",title:"Deployment",description:"Everything you need to know about the deployment of your applications with Qovery",source:"@site/docs/using-qovery/deployment.md",permalink:"/docs/using-qovery/deployment",sidebar_label:"hidden",sidebar:"docs",previous:{title:"User Account",permalink:"/docs/using-qovery/configuration/user-account"},next:{title:"Deploying with the auto-deploy feature",permalink:"/docs/using-qovery/deployment/deploying-with-auto-deploy"}},c=[],p={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In the following subsections, you'll find all the information about the deployment management with Qovery."),Object(i.b)("p",null,"The deployment has the end goal to create the resources necessary to run your applications on your cloud account, based on the configuration you have done on the Qovery console."),Object(i.b)("p",null,"In the image below you can find the complete flow that your application will go through, from your Git repository up to your Kuernetes cluster."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/deployment/deployment_overview_qovery.png",alt:"Deployment history access"})),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The developer pushes the code within the git repository"),Object(i.b)("li",{parentName:"ol"},"The deployment trigger can come from different sources depending on your integration type:\n2.a The auto-deploy feature is activated on Qovery. When the new commit is pushed, a webhook call is received by Qovery and can proceed with the application deployment. See ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/deployment/deploying-with-auto-deploy/"}),"this section")," for more information.\n2.b The auto-deploy feature is not activated on Qovery and the deployment is managed via ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/deployment/deploying-with-ci-cd/"}),"the CI/CD"),".\n2.c The auto-deploy feature is not activated on Qovery and the user decides to trigger the deployment directly from within the Qovery console."),Object(i.b)("li",{parentName:"ol"},"The Qovery engine starts processing based on the configured ",Object(i.b)("inlineCode",{parentName:"li"},"Deployment Pipeline"),". The pipeline defines the steps that need to be followed in order to deploy your applications. See ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/deployment/deployment-pipeline/"}),"this section")," for more information."),Object(i.b)("li",{parentName:"ol"},"The Qovery engine pulls the code from your repository."),Object(i.b)("li",{parentName:"ol"},"The Qovery engine builds the code and pushes the generated images on a registry present within your cloud account (See the ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/deployment/image-mirroring/"}),"Image Mirroring")," page for more information)."),Object(i.b)("li",{parentName:"ol"},"The Qovery engine creates the load balancers and configure the network."),Object(i.b)("li",{parentName:"ol"},"The Qovery engine creates a namespace within the Kubernetes cluster and deploys the application."),Object(i.b)("li",{parentName:"ol"},"The Qovery engine takes care of creating a custom domain for your application and as well configure the TLS so that you can access the application from the internet.")),Object(i.b)("p",null,"The developer can monitor at each time the status of the deployment or of the running applications by:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"checking the ",Object(i.b)("inlineCode",{parentName:"li"},"Deployment Status")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Running Status"),". See ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/deployment/running-and-deployment-statuses/"}),"this section")," for more information."),Object(i.b)("li",{parentName:"ul"},"access the ",Object(i.b)("inlineCode",{parentName:"li"},"Logs")," interface to retrieve the deployment logs and as well the application logs in real-time. See ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/deployment/logs/"}),"this section")," for more information."),Object(i.b)("li",{parentName:"ul"},"access the ",Object(i.b)("inlineCode",{parentName:"li"},"Deployment History")," section to get all the information about the past deployments. See ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/deployment/deployment-history/"}),"this section")," for more information.")),Object(i.b)("p",null,"Note: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Qovery also support deployments from container registry but actions 2a is not supported plus 4 and 5 are not done."),Object(i.b)("li",{parentName:"ul"},"In the example above we have shown how the deployment of an application is done but Qovery provides you with a complete set of ",Object(i.b)("inlineCode",{parentName:"li"},"Deployment Actions")," allowing you to manage the deployment lifecycle of your applications and environments (Stop, restart etc..). See ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/deployment/deployment-actions/"}),"this section")," for more information.")))}s.isMDXComponent=!0},417:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},y=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),y=o,m=u["".concat(a,".").concat(y)]||u[y]||d[y]||i;return n?r.a.createElement(m,l({ref:t},p,{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);
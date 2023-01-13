/*! For license information please see 54ad54c7.3e7fd467.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{260:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var o=n(1),r=n(9),i=(n(0),n(446)),a=n(455),c=(n(451),n(445)),l=n(450),s={last_modified_on:"2022-12-23",title:"Cronjob",description:"Learn how to configure your Cronjob on Qovery"},u={id:"using-qovery/configuration/cronjob",title:"Cronjob",description:"Learn how to configure your Cronjob on Qovery",source:"@site/docs/using-qovery/configuration/cronjob.md",permalink:"/docs/using-qovery/configuration/cronjob",sidebar:"docs",previous:{title:"Redis",permalink:"/docs/using-qovery/configuration/database/redis"},next:{title:"Lifecycle Job",permalink:"/docs/using-qovery/configuration/lifecycle-job"}},b=[{value:"Deploying from a Git Repository",id:"deploying-from-a-git-repository",children:[]},{value:"Deploying from a Container Registry",id:"deploying-from-a-container-registry",children:[]},{value:"Create a Cronjob",id:"create-a-cronjob",children:[]},{value:"Configuration",id:"configuration",children:[{value:"General",id:"general",children:[]},{value:"JOB Configuration",id:"job-configuration",children:[]},{value:"Resources",id:"resources",children:[]}]},{value:"Environment Variable",id:"environment-variable",children:[]},{value:"Secrets",id:"secrets",children:[]},{value:"Logs",id:"logs",children:[]},{value:"Force execution / Run",id:"force-execution--run",children:[]},{value:"Deploy other version",id:"deploy-other-version",children:[]},{value:"Delete a job",id:"delete-a-job",children:[]}],p={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l.a,{name:"documentation",mdxType:"Assumptions"},Object(i.b)("p",null,"You have created an ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environment"),".")),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"cronjob")," is a workload that runs on your kubernetes cluster on a regular bases depending on the configured schedule (See ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/"}),"Cronjob on Kubernetes")," for more info). It is useful to execute tasks on a regular bases, like pulling data from an external service every hour or process the last 24hrs of data in your database."),Object(i.b)("p",null,"Qovery allows you to create and deploy cronjobs from two different sources: Git Repository or Container Registry"),Object(i.b)("h2",{id:"deploying-from-a-git-repository"},"Deploying from a Git Repository"),Object(i.b)("p",null,"In this configuration, Qovery will pull the code from the chosen repository, build the application and deploy it on your kubernetes cluster."),Object(i.b)("p",null,"The list of Git repositories available during the setup is strictly tied to the permissions of your git account (by default Qovery can access all your repositories). If you want to restrict the Qovery access only to a few repositories, user the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/#managing-git-permissions-using-the-qovery-github-app"}),"GitHub Qovery Application")," (only for Github)."),Object(i.b)("h2",{id:"deploying-from-a-container-registry"},"Deploying from a Container Registry"),Object(i.b)("p",null,"In this configuration, Qovery will pull the chosen container registry an image you have pre-built and deploy it on your kubernetes cluster."),Object(i.b)("p",null,"To improve the security and avoid deploying images from non-authorized registries, we have decided to restrict the list of Container Registry you can use during the setup process. Only an administrator with the right permissions can manage it from the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/#container-registry-management"}),"Container Registry Management page")),Object(i.b)("h2",{id:"create-a-cronjob"},"Create a Cronjob"),Object(i.b)(a.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("p",null,'Go into the chosen environment and press the "New Service" button and then the "Create Cronjob" button'),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/environments/service_creation.png",alt:"Creation"}))),Object(i.b)("li",null,Object(i.b)("p",null,"Select the following fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Name: give a name to your applicaiton"),Object(i.b)("li",{parentName:"ul"},"Source: Chose between Git Repository or Container Registry, depending on the source location of your application")),Object(i.b)("p",null,"If you want to deploy a cronjob from a Git Repository you will have to select:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Git Repository: Select the git provider hosting your code (it can be hosted on GitHub, GitLab or Bitbucket)."),Object(i.b)("li",{parentName:"ul"},"Branch: Select branch that Qovery should use to deploy your code"),Object(i.b)("li",{parentName:"ul"},"Root Application Path: base folder in which the code resides in your repository"),Object(i.b)("li",{parentName:"ul"},"Build Mode: only Docker is supported")),Object(i.b)(c.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"A Dockerfile is necessary to build and deploy your job")),Object(i.b)("p",null,"If you want to deploy a cronjob from a Container Registry you will have to select:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Registry: select the container registry storing the image of your job. Note: only pre-configured registry are available in this list, check the ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/organization/#container-registry-management"}),"Container Registry Management page")," for more information."),Object(i.b)("li",{parentName:"ul"},"Image name: the name of the image to be deployed with this job (example: postgres)"),Object(i.b)("li",{parentName:"ul"},"Image tag: the tag of the image to be deployed with this job (example: 12)")),Object(i.b)(c.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"The tag 'latest' is not supported, please use a specific tag."))),Object(i.b)("li",null,'Specify the configuration of your job: - CRON Schedule: specify a valid CRON expression (see [Crontab guru](https://crontab.guru/) for help). After being deployed, the job will be executed following the defined schedule. - Image Entrypoint: the entrypoint to be used to launch your job (not mandatory) - CMD Arguments: the arguments to be passed to launch your job (not mandatory). We expect the format to be an array. Example ["rails", "-h", "0.0.0.0", "-p", "8080", "string"] - Number of restarts: Maximum number of restarts allowed in case of job failure (0 means no failure) - Max duration time in seconds: Maximum duration allowed for the job to run before killing it and mark it as failed - Port: Port used by Kubernetes to run readiness and liveliness probes checks. The port will not be exposed externally'),Object(i.b)("li",null,"Within this section, you will need to define the resources to be assigned to your job at run time.",Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"vCPU: the vCPU assigned to each instance of your application. The default is 500m (0.5 vCPU)."),Object(i.b)("li",{parentName:"ul"},"RAM: the amount of RAM assigned to each instance of your application. The default is 512MB.")),Object(i.b)(c.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Please note that in this section you configure the CPU/RAM allocated by the cluster for your application and that cannot consume more than this value. Even if the application is underused and consume less resources, the cluster will still reserve the selected amount of CPU/RAM."))),Object(i.b)("li",null,Object(i.b)("p",null,"Define any input variable required by your job to run. Any declared variable will be injected as environment variables based on the selected scope (project, environment, service)\nAny additional environment variable can be added later from the environment variable section"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/job/variables.png",alt:"Input Variables"}))),Object(i.b)("li",null,Object(i.b)("p",null,"You will find a recap of your job setup and you can now decide to:\n1. Go back to one of the previous steps and change your settings\n2. Create your job without deploying it\n3. Create and deploy your job"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/job/cronjob_recap.png",alt:"Recap"}))))),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Once created, you can access the configuration at any time via the Settings tab available on the service section"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/application/settings.png",alt:"Settings"})),Object(i.b)("p",null,"You can find below the description of each of the tabs available in this section"),Object(i.b)("h3",{id:"general"},"General"),Object(i.b)("p",null,"General settings section allows you to set up your application name and the source code location (git repository or image registry) ."),Object(i.b)("h4",{id:"git-repository"},"Git Repository"),Object(i.b)("p",null,"If your job is built and deployed from a git repository, within this section you can:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Modify the git provider where your code is stored (it can be hosted on GitHub, GitLab or Bitbucket)."),Object(i.b)("li",{parentName:"ul"},"Modify the branch that Qovery should use for deploying your code"),Object(i.b)("li",{parentName:"ul"},"Modify ",Object(i.b)("inlineCode",{parentName:"li"},"Root Application Path")," - base folder in which the application resides in your repository")),Object(i.b)(c.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Qovery supports mono repositories. ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/advanced/monorepository/"}),"See our advanced guide for more details."))),Object(i.b)(c.a,{type:"warning",mdxType:"Alert"},Object(i.b)("p",null,"If your repository contains private submodules using SSH protocol, you will need to add a secret beginning with GIT",Object(i.b)("em",{parentName:"p"},"SSH_KEY"),", containing a private SSH key with access rights to your sumbodules repositories."),Object(i.b)("p",null,"Secret names examples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"GIT_SSH_KEY_GITHUB"),Object(i.b)("li",{parentName:"ul"},"GIT_SSH_KEY_GITLAB"),Object(i.b)("li",{parentName:"ul"},"GIT_SSH_KEY_MYAPP"))),Object(i.b)("h4",{id:"container-registry"},"Container Registry"),Object(i.b)("p",null,"If your application is deployed from an image registry, within this section you can modify:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Registry: select the container registry storing the image of your application. Note: only pre-configured registry are available in this list, check the ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/organization/#container-registry-management"}),"Container Registry Management page")," for more information."),Object(i.b)("li",{parentName:"ul"},"Image name: the name of the image to be deployed with this application (example: postgres)"),Object(i.b)("li",{parentName:"ul"},"Image tag: the tag of the image to be deployed with this application (example: 12)")),Object(i.b)(c.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"The tag 'latest' is not supported, please use a specific tag.")),Object(i.b)("h4",{id:"build-mode"},"Build Mode"),Object(i.b)("p",null,'This option is available only if you have selected "Git Repository" as source. Only Docker is supported'),Object(i.b)("p",null,"Qovery runs your application within the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.docker.com/resources/what-container"}),"Container technology"),". To build and run your application, you need to provide a valid ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder"}),"Dockerfile"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-Dockerfile",metastring:'title="Valid NodeJS Dockerfile"',title:'"Valid',NodeJS:!0,'Dockerfile"':!0}),"FROM node:13-alpine\nRUN mkdir -p /usr/src/app\nWORKDIR /usr/src/app\nCOPY . .\nRUN npm install\nEXPOSE 3000\nCMD node ./bin/www\n")),Object(i.b)("p",null,"After creating a Dockerfile, specify the location of your Dockerfile in ",Object(i.b)("inlineCode",{parentName:"p"},"Dockefile path")," field."),Object(i.b)("p",null,"Configuration from above will make Qovery look for the Dockerfile in ",Object(i.b)("inlineCode",{parentName:"p"},"/timescale/Dockerfile")," path of your repository (",Object(i.b)("inlineCode",{parentName:"p"},"Root Application Path")," + ",Object(i.b)("inlineCode",{parentName:"p"},"Dockerfile Path"),")."),Object(i.b)("h3",{id:"job-configuration"},"JOB Configuration"),Object(i.b)("p",null,"You can modify here the configuration of your job:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CRON Schedule: specify a valid CRON expression (see ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://crontab.guru/"}),"Crontab guru")," for help). After being deployed, the job will be executed following the defined schedule."),Object(i.b)("li",{parentName:"ul"},"Image Entrypoint: the entrypoint to be used to launch your job (not mandatory)"),Object(i.b)("li",{parentName:"ul"},"CMD Arguments: the arguments to be passed to launch your job (not mandatory). We expect the format to be an array. Example ",'["rails", "-h", "0.0.0.0", "-p", "8080", "string"]'),Object(i.b)("li",{parentName:"ul"},"Number of restarts: Maximum number of restarts allowed in case of job failure (0 means no failure)"),Object(i.b)("li",{parentName:"ul"},"Max duration time in seconds: Maximum duration allowed for the job to run before killing it and mark it as failed"),Object(i.b)("li",{parentName:"ul"},"Port: Port used by Kubernetes to run readiness and liveliness probes checks. The port will not be exposed externally")),Object(i.b)("h3",{id:"resources"},"Resources"),Object(i.b)("h4",{id:"cpu"},"CPU"),Object(i.b)("p",null,"To configure the number of CPUs that your job needs, adjust the setting in the ",Object(i.b)("inlineCode",{parentName:"p"},"Resources")," section."),Object(i.b)(c.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Default is 500m (0.5 vCPU). ")),Object(i.b)("p",null,"Please note that in this section you configure the CPU allocated by the cluster for your application and that cannot consume more than this value. Even if the application is underused and consume less resources, the cluster will still reserve the selected amount of CPU."),Object(i.b)("h4",{id:"ram"},"RAM"),Object(i.b)("p",null,"To configure the amount of RAM that your app needs, adjust the setting in ",Object(i.b)("inlineCode",{parentName:"p"},"Resources")," section."),Object(i.b)(c.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Default is 512MB.")),Object(i.b)("p",null,"Please note that in this section you configure the CPU allocated by the cluster for your application and that cannot consume more than this value. Even if the application is underused and consume less resources, the cluster will still reserve the selected amount of CPU. If your application requires more RAM than requested, it will be killed by the kubernetes scheduler."),Object(i.b)("h2",{id:"environment-variable"},"Environment Variable"),Object(i.b)("p",null,"To learn how to set up environment variables in your projects and applications, navigate to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"configuring Environment Variables")," section."),Object(i.b)("h2",{id:"secrets"},"Secrets"),Object(i.b)("p",null,"To learn how to set up secrets in your projects and applications, navigate to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"configuring Secrets")," section."),Object(i.b)("h2",{id:"logs"},"Logs"),Object(i.b)("p",null,"To learn how to display your application logs, navigate to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/getting-started/debugging/#logs"}),"logs section in our Debugging guide")),Object(i.b)("h2",{id:"force-execution--run"},"Force execution / Run"),Object(i.b)("p",null,"You can force the execution of a job and execute it independently of its configuration (cron expression or event) by:"),Object(i.b)(a.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("p",null,"Selecting your job")),Object(i.b)("li",null,Object(i.b)("p",null,"In the application overview, click on the ",Object(i.b)("inlineCode",{parentName:"p"},"Play")," button and ",Object(i.b)("inlineCode",{parentName:"p"},"Run"),".")),Object(i.b)("li",null,Object(i.b)("p",null,"Once you click, the job will be executed and you will be able to follow its execution within the application logs")))),Object(i.b)("h2",{id:"deploy-other-version"},"Deploy other version"),Object(i.b)(a.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("p",null,"Choose your job")),Object(i.b)("li",null,Object(i.b)("p",null,"In the application overview, click on the ",Object(i.b)("inlineCode",{parentName:"p"},"Play")," button and ",Object(i.b)("inlineCode",{parentName:"p"},"Deploy Other Version"),"."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/application/deploy-other-version.png",alt:"Update All"}))),Object(i.b)("li",null,Object(i.b)("p",null,"Once you click, this panel will appear, and you will be able to choose the version you wish to update/rollback."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/application/deploy-other-version2.png",alt:"Application"}))))),Object(i.b)("h2",{id:"delete-a-job"},"Delete a job"),Object(i.b)(a.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("p",null,"Choose your application")),Object(i.b)("li",null,Object(i.b)("p",null,"In the application overview, click on the ",Object(i.b)("inlineCode",{parentName:"p"},"3 dots")," button and remove the application."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/application/app-1.png",alt:"Application"}))))))}d.isMDXComponent=!0},444:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&e.push(a)}else if("object"===i)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},445:function(e,t,n){"use strict";n(449);var o=n(0),r=n.n(o),i=n(444),a=n.n(i);n(132);t.a=function(e){var t=e.children,n=e.classNames,o=e.fill,i=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:a()(n,"alert","alert--"+c,{"alert--fill":o,"alert--icon":!1!==i}),role:"alert"},!1!==i&&r.a.createElement("i",{className:a()("feather","icon-"+(i||l))}),t)}},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=o,f=b["".concat(a,".").concat(d)]||b[d]||p[d]||i;return n?r.a.createElement(f,c({ref:t},s,{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},447:function(e,t,n){"use strict";var o=n(1),r=n(0),i=n.n(r),a=n(39),c=n(452),l=n(20),s=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,u=n||l,b=Object(c.a)(u),p=Object(r.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!d&&b&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,b]),u&&b?i.a.createElement(a.b,Object(o.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(u),p.current=!0)},innerRef:function(e){var n,o;d&&e&&b&&(n=e,o=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),o())}))}))).observe(n))},to:u})):i.a.createElement("a",Object(o.a)({},e,{href:u}))}},448:function(e,t,n){var o=n(26).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(10)&&o(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},449:function(e,t,n){var o=n(12);o(o.P,"Array",{fill:n(453)}),n(74)("fill")},450:function(e,t,n){"use strict";n(448);var o=n(0),r=n.n(o),i=n(445);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(i.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},451:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(447),a=n(444),c=n.n(a);n(133);t.a=function(e){var t=e.children,n=e.className,o=e.badge,a=e.leftIcon,l=e.rightIcon,s=e.size,u=e.target,b=e.to,p=c()("jump-to","jump-to--"+s,n),d=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},a&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+a})),r.a.createElement("div",{className:"jump-to--main"},o?r.a.createElement("span",{className:"badge badge--primary badge--right"},o):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return u?r.a.createElement("a",{href:b,target:u,className:p},d):r.a.createElement(i.a,{to:b,className:p},d)}},452:function(e,t,n){"use strict";function o(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return o}))},453:function(e,t,n){"use strict";var o=n(28),r=n(75),i=n(27);e.exports=function(e){for(var t=o(this),n=i(t.length),a=arguments.length,c=r(a>1?arguments[1]:void 0,n),l=a>2?arguments[2]:void 0,s=void 0===l?n:r(l,n);s>c;)t[c++]=e;return t}},454:function(e,t,n){"use strict";var o=n(456),r=n(51);function i(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,o){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===o[e]&&(o[e]={}),o[e][t[1]]=n):o[e]=n};case"bracket":return function(e,n,o){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==o[e]?o[e]=[].concat(o[e],n):o[e]=[n]:o[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=r({arrayFormat:"none"},t)),o=Object.create(null);return"string"!=typeof e?o:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),i=t.length>0?t.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),n(decodeURIComponent(r),i,o)})),Object.keys(o).sort().reduce((function(e,t){var n=o[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):o},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,o){return null===n?[i(t,e),"[",o,"]"].join(""):[i(t,e),"[",i(o,e),"]=",i(n,e)].join("")};case"bracket":return function(t,n){return null===n?i(t,e):[i(t,e),"[]=",i(n,e)].join("")};default:return function(t,n){return null===n?i(t,e):[i(t,e),"=",i(n,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(o){var r=e[o];if(void 0===r)return"";if(null===r)return i(o,t);if(Array.isArray(r)){var a=[];return r.slice().forEach((function(e){void 0!==e&&a.push(n(o,e,a.length))})),a.join("&")}return i(o,t)+"="+i(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},455:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=(n(444),n(454)),a=n.n(i);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,i=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+a.a.stringify(l),u=Object(o.useState)(null),b=u[0],p=u[1];return r.a.createElement("div",{className:"steps steps--h"+n},t,!i&&!b&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==b&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},456:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
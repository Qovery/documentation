/*! For license information please see 54ad54c7.a19b0a46.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{252:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var o=n(1),i=n(9),a=(n(0),n(445)),r=n(452),c=(n(453),n(444)),l=n(449),s={last_modified_on:"2024-07-03",title:"Cronjob",description:"Learn how to configure your Cronjob on Qovery"},u={id:"using-qovery/configuration/cronjob",title:"Cronjob",description:"Learn how to configure your Cronjob on Qovery",source:"@site/docs/using-qovery/configuration/cronjob.md",permalink:"/docs/using-qovery/configuration/cronjob",sidebar:"docs",previous:{title:"Redis",permalink:"/docs/using-qovery/configuration/database/redis"},next:{title:"Lifecycle Job",permalink:"/docs/using-qovery/configuration/lifecycle-job"}},b=[{value:"Deploying from a Git Repository",id:"deploying-from-a-git-repository",children:[]},{value:"Deploying from a Container Registry",id:"deploying-from-a-container-registry",children:[]},{value:"Create a Cronjob",id:"create-a-cronjob",children:[]},{value:"Deployment Management",id:"deployment-management",children:[]},{value:"Force Run",id:"force-run",children:[]},{value:"Configuration",id:"configuration",children:[{value:"General",id:"general",children:[]},{value:"JOB Configuration",id:"job-configuration",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Health Checks",id:"health-checks",children:[]},{value:"Deployment Restrictions",id:"deployment-restrictions",children:[]},{value:"Advanced Settings",id:"advanced-settings",children:[]}]},{value:"Environment Variable",id:"environment-variable",children:[]},{value:"Secrets",id:"secrets",children:[]},{value:"Logs",id:"logs",children:[]},{value:"Clone",id:"clone",children:[]},{value:"Delete a job",id:"delete-a-job",children:[]}],p={rightToc:b};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(l.a,{name:"documentation",mdxType:"Assumptions"},Object(a.b)("p",null,"You have created an ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environment"),".")),Object(a.b)("p",null,"A ",Object(a.b)("strong",{parentName:"p"},"cronjob")," is a workload that runs on your kubernetes cluster on a regular bases depending on the configured schedule (See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/"}),"Cronjob on Kubernetes")," for more info). It is useful to execute tasks on a regular bases, like pulling data from an external service every hour or process the last 24hrs of data in your database."),Object(a.b)("p",null,"Qovery allows you to create and deploy cronjobs from two different sources: Git Repository or Container Registry"),Object(a.b)("h2",{id:"deploying-from-a-git-repository"},"Deploying from a Git Repository"),Object(a.b)("p",null,"In this configuration, Qovery will pull the code from the chosen repository, build the application and deploy it on your kubernetes cluster."),Object(a.b)("p",null,"The list of Git repositories available during the setup is strictly tied to the permissions of your git account (by default Qovery can access all your repositories). If you want to restrict the Qovery access only to a few repositories, user the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/git-repository-access/"}),"GitHub Qovery Application")," (only for Github)."),Object(a.b)("h2",{id:"deploying-from-a-container-registry"},"Deploying from a Container Registry"),Object(a.b)("p",null,"In this configuration, Qovery will pull the chosen container registry an image you have pre-built and deploy it on your kubernetes cluster."),Object(a.b)("p",null,"To improve the security and avoid deploying images from non-authorized registries, we have decided to restrict the list of Container Registry you can use during the setup process. Only an administrator with the right permissions can manage it from the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/container-registry/"}),"Container Registry Management page")),Object(a.b)("h2",{id:"create-a-cronjob"},"Create a Cronjob"),Object(a.b)(r.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,'Go into the chosen environment and press the "New Service" button and then the "Create Cronjob" button'),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/configuration/environments/service_creation.png",alt:"Creation"}))),Object(a.b)("li",null,Object(a.b)("p",null,"Select the following fields:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Name: give a name to your applicaiton"),Object(a.b)("li",{parentName:"ul"},"Source: Chose between Git Repository or Container Registry, depending on the source location of your application")),Object(a.b)("p",null,"If you want to deploy a cronjob from a Git Repository you will have to select:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Git Repository: Select the git provider hosting your code (it can be hosted on GitHub, GitLab or Bitbucket). You can add a new git access by clicking on ",Object(a.b)("inlineCode",{parentName:"li"},"New git access"),"."),Object(a.b)("li",{parentName:"ul"},"Branch: Select branch that Qovery should use to deploy your code"),Object(a.b)("li",{parentName:"ul"},"Root Application Path: base folder in which the code resides in your repository"),Object(a.b)("li",{parentName:"ul"},"Build Mode: only Docker is supported")),Object(a.b)(c.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"A Dockerfile is necessary to build and deploy your job")),Object(a.b)("p",null,"If you want to deploy a cronjob from a Container Registry you will have to select:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Registry: select the container registry storing the image of your job. You can add a new container registry by clicking on ",Object(a.b)("inlineCode",{parentName:"li"},"New registry"),"."),Object(a.b)("li",{parentName:"ul"},"Image name: the name of the image to be deployed with this job (example: postgres)"),Object(a.b)("li",{parentName:"ul"},"Image tag: the tag of the image to be deployed with this job (example: 12)")),Object(a.b)(c.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"The tag 'latest' is not supported, please use a specific tag.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Auto Deploy ")),Object(a.b)("p",null,"See the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/deploying-with-auto-deploy/"}),"Deploying with auto-deploy feature")," section."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Extra labels/annotations (optional)")),Object(a.b)("p",null,"Add your extra annotation/label groups. See the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/labels-annotations/"}),"Add annotation/label group")," section for more information.")),Object(a.b)("li",null,"Specify the configuration of your job:",Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"CRON Schedule: specify a valid CRON expression (see ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://crontab.guru/"}),"Crontab guru")," for help). After being deployed, the job will be executed following the defined schedule."),Object(a.b)("li",{parentName:"ul"},"Timezone: select a valid timezone identifier. After being deployed, the job will be executed following the defined timezone. ",Object(a.b)("inlineCode",{parentName:"li"},"Etc/UTC")," is the default value."),Object(a.b)("li",{parentName:"ul"},"Image Entrypoint: the entrypoint to be used to launch your job (not mandatory)"),Object(a.b)("li",{parentName:"ul"},"CMD Arguments: the arguments to be passed to launch your application (not mandatory) separated with a space. Example: ",Object(a.b)("inlineCode",{parentName:"li"},'rails -h 0.0.0.0 -p 8080 string "complex arg"'),"."),Object(a.b)("li",{parentName:"ul"},"Number of restarts: Maximum number of restarts allowed in case of job failure (0 means no failure)"),Object(a.b)("li",{parentName:"ul"},"Max duration time in seconds: Maximum duration allowed for the job to run before killing it and mark it as failed"),Object(a.b)("li",{parentName:"ul"},"Port: Port used by Kubernetes to run readiness and liveliness probes checks. The port will not be exposed externally"))),Object(a.b)("li",null,"Within this section, you will need to define the resources to be assigned to your job at run time.",Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"vCPU: the vCPU assigned to each instance of your application. The default is 500m (0.5 vCPU)."),Object(a.b)("li",{parentName:"ul"},"RAM: the amount of RAM assigned to each instance of your application. The default is 512MB.")),Object(a.b)(c.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"Please note that in this section you configure the CPU/RAM allocated by the cluster for your application and that cannot consume more than this value. Even if the application is underused and consume less resources, the cluster will still reserve the selected amount of CPU/RAM."))),Object(a.b)("li",null,Object(a.b)("p",null,"Define any input variable required by your job to run. Any declared variable will be injected as environment variables based on the selected scope (project, environment, service)\nAny additional environment variable can be added later from the environment variable section"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/configuration/job/variables.png",alt:"Input Variables"}))),Object(a.b)("li",null,Object(a.b)("p",null,"You will find a recap of your job setup and you can now decide to:\n1. Go back to one of the previous steps and change your settings\n2. Create your job without deploying it\n3. Create and deploy your job"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/configuration/job/cronjob_recap.png",alt:"Recap"}))))),Object(a.b)("h2",{id:"deployment-management"},"Deployment Management"),Object(a.b)("p",null,"Have a look at the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/"}),"Deployment Management")," section for more information."),Object(a.b)("h2",{id:"force-run"},"Force Run"),Object(a.b)("p",null,"You can force the execution of a job independently its deployment status by:"),Object(a.b)(r.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"Select the job that you want to force")),Object(a.b)("li",null,Object(a.b)("p",null,"click on the ",Object(a.b)("inlineCode",{parentName:"p"},"Play")," button of the cronjob you want to force and select the ",Object(a.b)("inlineCode",{parentName:"p"},"Force Run")," option. Note: the same option is available on the service list as well")),Object(a.b)("li",null,Object(a.b)("p",null,"Once you click, the job will be deployed and executed once. You will be able to follow its execution within the application logs")))),Object(a.b)(c.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"If the cronjob has not yet been deployed, forcing its execution will make it run only once (the scheduling mechanism will not start).")),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"Once created, you can access the configuration at any time via the Settings tab available on the service section"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/configuration/application/settings.png",alt:"Settings"})),Object(a.b)("p",null,"You can find below the description of each of the tabs available in this section"),Object(a.b)("h3",{id:"general"},"General"),Object(a.b)("p",null,"General settings section allows you to set up your application name and the source code location (git repository or image registry) ."),Object(a.b)("h4",{id:"git-repository"},"Git Repository"),Object(a.b)("p",null,"If your job is built and deployed from a git repository, within this section you can:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Modify the git provider where your code is stored (it can be hosted on GitHub, GitLab or Bitbucket)."),Object(a.b)("li",{parentName:"ul"},"Modify the branch that Qovery should use for deploying your code"),Object(a.b)("li",{parentName:"ul"},"Modify ",Object(a.b)("inlineCode",{parentName:"li"},"Root Application Path")," - base folder in which the application resides in your repository")),Object(a.b)(c.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"Qovery supports mono repositories. ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/advanced/monorepository/"}),"See our advanced guide for more details."))),Object(a.b)(c.a,{type:"warning",mdxType:"Alert"},Object(a.b)("p",null,"If your repository contains private submodules using SSH protocol, you will need to add a secret beginning with GIT",Object(a.b)("em",{parentName:"p"},"SSH_KEY"),", containing a private SSH key with access rights to your sumbodules repositories."),Object(a.b)("p",null,"Secret names examples:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"GIT_SSH_KEY_GITHUB"),Object(a.b)("li",{parentName:"ul"},"GIT_SSH_KEY_GITLAB"),Object(a.b)("li",{parentName:"ul"},"GIT_SSH_KEY_MYAPP"))),Object(a.b)("h4",{id:"container-registry"},"Container Registry"),Object(a.b)("p",null,"If your application is deployed from an image registry, within this section you can modify:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Registry: select the container registry storing the image of your application. Note: only pre-configured registry are available in this list, check the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/organization/container-registry/"}),"Container Registry Management page")," for more information."),Object(a.b)("li",{parentName:"ul"},"Image name: the name of the image to be deployed with this application (example: postgres)"),Object(a.b)("li",{parentName:"ul"},"Image tag: the tag of the image to be deployed with this application (example: 12)")),Object(a.b)(c.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"The tag 'latest' is not supported, please use a specific tag.")),Object(a.b)("h4",{id:"build-mode"},"Build Mode"),Object(a.b)("p",null,'This option is available only if you have selected "Git Repository" as source. Only Docker is supported'),Object(a.b)("p",null,"Qovery runs your application within the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.docker.com/resources/what-container"}),"Container technology"),". To build and run your application, you need to provide a valid ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder"}),"Dockerfile"),"."),Object(a.b)("p",null,"After creating a Dockerfile, specify the location of your Dockerfile in ",Object(a.b)("inlineCode",{parentName:"p"},"Dockefile path")," field."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Auto Deploy ")),Object(a.b)("p",null,"See the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/deploying-with-auto-deploy/"}),"Deploying with auto-deploy feature")," section."),Object(a.b)("h4",{id:"extra-labelsannotations"},"Extra labels/annotations"),Object(a.b)("p",null,"Add your extra annotation/label groups. See the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/labels-annotations/"}),"Add annotation/label group")," section for more information."),Object(a.b)("h3",{id:"job-configuration"},"JOB Configuration"),Object(a.b)("p",null,"You can modify here the configuration of your job:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"CRON Schedule: specify a valid CRON expression (see ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://crontab.guru/"}),"Crontab guru")," for help). After being deployed, the job will be executed following the defined schedule."),Object(a.b)("li",{parentName:"ul"},"Timezone: select a valid timezone identifier. After being deployed, the job will be executed following the defined timezone. ",Object(a.b)("inlineCode",{parentName:"li"},"Etc/UTC")," is the default value."),Object(a.b)("li",{parentName:"ul"},"Image Entrypoint: the entrypoint to be used to launch your job (not mandatory)"),Object(a.b)("li",{parentName:"ul"},"CMD Arguments: the arguments to be passed to launch your application (not mandatory) separated with a space. Example: ",Object(a.b)("inlineCode",{parentName:"li"},'rails -h 0.0.0.0 -p 8080 string "complex arg"'),"."),Object(a.b)("li",{parentName:"ul"},"Number of restarts: Maximum number of restarts allowed in case of job failure (0 means no failure)"),Object(a.b)("li",{parentName:"ul"},"Max duration time in seconds: Maximum duration allowed for the job to run before killing it and mark it as failed"),Object(a.b)("li",{parentName:"ul"},"Port: Port used by Kubernetes to run readiness and liveliness probes checks. The port will not be exposed externally")),Object(a.b)("h3",{id:"resources"},"Resources"),Object(a.b)("h4",{id:"cpu"},"CPU"),Object(a.b)("p",null,"To configure the number of CPUs that your job needs, adjust the setting in the ",Object(a.b)("inlineCode",{parentName:"p"},"Resources")," section."),Object(a.b)(c.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"Default is 500m (0.5 vCPU). ")),Object(a.b)("p",null,"Please note that in this section you configure the CPU allocated by the cluster for your application and that cannot consume more than this value. Even if the application is underused and consume less resources, the cluster will still reserve the selected amount of CPU."),Object(a.b)("h4",{id:"ram"},"RAM"),Object(a.b)("p",null,"To configure the amount of RAM that your app needs, adjust the setting in ",Object(a.b)("inlineCode",{parentName:"p"},"Resources")," section."),Object(a.b)(c.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"Default is 512MB.")),Object(a.b)("p",null,"Please note that in this section you configure the CPU allocated by the cluster for your application and that cannot consume more than this value. Even if the application is underused and consume less resources, the cluster will still reserve the selected amount of CPU. If your application requires more RAM than requested, it will be killed by the kubernetes scheduler."),Object(a.b)("h3",{id:"health-checks"},"Health Checks"),Object(a.b)("p",null,"To know more about how to configure your Liveness and Readiness probes, have a look at ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application-health-checks/"}),"the health-checks section")),Object(a.b)("h3",{id:"deployment-restrictions"},"Deployment Restrictions"),Object(a.b)("p",null,"This section allows to specify which changes on your repository should trigger an auto-deploy (if enabled). To know more about how to configure your Deployment Restrictions, have a look at the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/deploying-with-auto-deploy/#filtering-commits-triggering-the-auto-deploy"}),"deployment restrictions section"),"."),Object(a.b)("h3",{id:"advanced-settings"},"Advanced Settings"),Object(a.b)("p",null,"You can further customize the service behaviour via the service advanced settings. Check ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/advanced-settings/"}),"this documentation")," to know more."),Object(a.b)("h2",{id:"environment-variable"},"Environment Variable"),Object(a.b)("p",null,"To learn how to set up environment variables in your projects and applications, navigate to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"configuring Environment Variables")," section."),Object(a.b)("h2",{id:"secrets"},"Secrets"),Object(a.b)("p",null,"To learn how to set up secrets in your projects and applications, navigate to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"configuring Secrets")," section."),Object(a.b)("h2",{id:"logs"},"Logs"),Object(a.b)("p",null,"To learn how to display your application logs, navigate to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/logs/#live-logs"}),"logs section")),Object(a.b)("h2",{id:"clone"},"Clone"),Object(a.b)("p",null,"You can create a clone of the service via the clone feature. A new service with the same configuration (see below for exceptions) will be created into the target environment."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/clone_service.png",alt:"Clone Service"})),Object(a.b)("p",null,"The target environment can be the same as the current environment or even another one in a completely different project."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Important information ")),Object(a.b)("p",null,"Not every configuration parameter will be copied within the new service for consistency reasons. The configuration is fully or partially copied depending on the target environment:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"same environment:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"custom domain: this setup is not copied into the new service (to avoid collision)"))),Object(a.b)("li",{parentName:"ul"},"another environment:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"custom domain: this setup is not copied into the new service (to avoid collision)"),Object(a.b)("li",{parentName:"ul"},"environment variable: aliases defined on environment variables are not copied (since the aliased env var might not exist)"),Object(a.b)("li",{parentName:"ul"},"deployment pipeline: stage setup is not copied (since the target stage might not exist)"),Object(a.b)("li",{parentName:"ul"},"number of instances: if the target environment runs on a Qovery EC2 cluster, the max number of instances is set to 1 (Qovery EC2 constraint)")))),Object(a.b)("p",null,"Please check the configuration of the new service before deploying it."),Object(a.b)("h2",{id:"delete-a-job"},"Delete a job"),Object(a.b)(r.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"Select the job you want to delete")),Object(a.b)("li",null,Object(a.b)("p",null,"In the overview, click on the ",Object(a.b)("inlineCode",{parentName:"p"},"3 dots")," button and remove the job. Note: the same option is available on the service list as well"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/configuration/application/app-1.png",alt:"Application"}))))))}d.isMDXComponent=!0},443:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var r=i.apply(null,o);r&&e.push(r)}else if("object"===a)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(o=function(){return i}.apply(t,[]))||(e.exports=o)}()},444:function(e,t,n){"use strict";n(446);var o=n(0),i=n.n(o),a=n(443),r=n.n(a);n(132);t.a=function(e){var t=e.children,n=e.classNames,o=e.fill,a=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return i.a.createElement("div",{className:r()(n,"alert","alert--"+c,{"alert--fill":o,"alert--icon":!1!==a}),role:"alert"},!1!==a&&i.a.createElement("i",{className:r()("feather","icon-"+(a||l))}),t)}},445:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=o,h=b["".concat(r,".").concat(d)]||b[d]||p[d]||a;return n?i.a.createElement(h,c({ref:t},s,{components:n})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},446:function(e,t,n){var o=n(12);o(o.P,"Array",{fill:n(447)}),n(74)("fill")},447:function(e,t,n){"use strict";var o=n(27),i=n(75),a=n(26);e.exports=function(e){for(var t=o(this),n=a(t.length),r=arguments.length,c=i(r>1?arguments[1]:void 0,n),l=r>2?arguments[2]:void 0,s=void 0===l?n:i(l,n);s>c;)t[c++]=e;return t}},448:function(e,t,n){var o=n(28).f,i=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in i||n(10)&&o(i,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},449:function(e,t,n){"use strict";n(448);var o=n(0),i=n.n(o),a=n(444);t.a=function(e){var t=e.children,n=e.name;return i.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},i.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},450:function(e,t,n){"use strict";var o=n(1),i=n(0),a=n.n(i),r=n(39),c=n(454),l=n(20),s=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,u=n||l,b=Object(c.a)(u),p=Object(i.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(i.useEffect)((function(){return!d&&b&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,b]),u&&b?a.a.createElement(r.b,Object(o.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(u),p.current=!0)},innerRef:function(e){var n,o;d&&e&&b&&(n=e,o=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),o())}))}))).observe(n))},to:u})):a.a.createElement("a",Object(o.a)({},e,{href:u}))}},451:function(e,t,n){"use strict";var o=n(455),i=n(51);function a(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,o){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===o[e]&&(o[e]={}),o[e][t[1]]=n):o[e]=n};case"bracket":return function(e,n,o){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==o[e]?o[e]=[].concat(o[e],n):o[e]=[n]:o[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=i({arrayFormat:"none"},t)),o=Object.create(null);return"string"!=typeof e?o:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),i=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(i),a,o)})),Object.keys(o).sort().reduce((function(e,t){var n=o[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):o},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,o){return null===n?[a(t,e),"[",o,"]"].join(""):[a(t,e),"[",a(o,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=i({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(o){var i=e[o];if(void 0===i)return"";if(null===i)return a(o,t);if(Array.isArray(i)){var r=[];return i.slice().forEach((function(e){void 0!==e&&r.push(n(o,e,r.length))})),r.join("&")}return a(o,t)+"="+a(i,t)})).filter((function(e){return e.length>0})).join("&"):""}},452:function(e,t,n){"use strict";var o=n(0),i=n.n(o),a=(n(443),n(451)),r=n.n(a);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,a=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+r.a.stringify(l),u=Object(o.useState)(null),b=u[0],p=u[1];return i.a.createElement("div",{className:"steps steps--h"+n},t,!a&&!b&&i.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",i.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",i.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==b&&i.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",i.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},453:function(e,t,n){"use strict";var o=n(0),i=n.n(o),a=n(450),r=n(443),c=n.n(r);n(134);t.a=function(e){var t=e.children,n=e.className,o=e.badge,r=e.leftIcon,l=e.rightIcon,s=e.size,u=e.target,b=e.to,p=c()("jump-to","jump-to--"+s,n),d=i.a.createElement("div",{className:"jump-to--inner"},i.a.createElement("div",{className:"jump-to--inner-2"},r&&i.a.createElement("div",{className:"jump-to--left"},i.a.createElement("i",{className:"feather icon-"+r})),i.a.createElement("div",{className:"jump-to--main"},o?i.a.createElement("span",{className:"badge badge--primary badge--right"},o):"",t),i.a.createElement("div",{className:"jump-to--right"},i.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return u?i.a.createElement("a",{href:b,target:u,className:p},d):i.a.createElement(a.a,{to:b,className:p},d)}},454:function(e,t,n){"use strict";function o(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return o}))},455:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
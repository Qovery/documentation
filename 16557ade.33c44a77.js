/*! For license information please see 16557ade.33c44a77.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var o=n(1),i=n(9),a=(n(0),n(442)),r=n(451),l=(n(447),n(441)),c=n(446),s={last_modified_on:"2022-12-25",title:"Lifecycle Job",description:"Learn how to configure your Lifecycle job on Qovery"},u={id:"using-qovery/configuration/lifecycle-job",title:"Lifecycle Job",description:"Learn how to configure your Lifecycle job on Qovery",source:"@site/docs/using-qovery/configuration/lifecycle-job.md",permalink:"/docs/using-qovery/configuration/lifecycle-job",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/lifecycle-job.md",sidebar:"docs",previous:{title:"Cronjob",permalink:"/docs/using-qovery/configuration/cronjob"},next:{title:"Environment Variable & Secrets",permalink:"/docs/using-qovery/configuration/environment-variable"}},b=[{value:"Deploying from a Git Repository",id:"deploying-from-a-git-repository",children:[]},{value:"Deploying from a Container Registry",id:"deploying-from-a-container-registry",children:[]},{value:"Create a Job",id:"create-a-job",children:[]},{value:"Configuration",id:"configuration",children:[{value:"General",id:"general",children:[]},{value:"JOB Configuration",id:"job-configuration",children:[]},{value:"Resources",id:"resources",children:[]}]},{value:"Environment Variable",id:"environment-variable",children:[]},{value:"Secrets",id:"secrets",children:[]},{value:"Logs",id:"logs",children:[]},{value:"Job output",id:"job-output",children:[]},{value:"Force execution",id:"force-execution",children:[]},{value:"Deploy other version",id:"deploy-other-version",children:[]},{value:"Delete a job",id:"delete-a-job",children:[]}],p={rightToc:b};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c.a,{name:"documentation",mdxType:"Assumptions"},Object(a.b)("p",null,"You have created an ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environment"),".")),Object(a.b)("p",null,"A ",Object(a.b)("strong",{parentName:"p"},"Lifecycle Job")," is a job that runs on your kubernetes cluster with the following characteristics:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"it is executed ONLY when the selected environment event occurs (unless its execution is forced, ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"#force-execution"}),"see the Force execution section"),")."),Object(a.b)("li",{parentName:"ul"},"any output file created at the end of the execution will be automatically injected as environment variable to any service within the same environment (",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"#job-output"}),"see the Job Output section"),").")),Object(a.b)("p",null,"Given its characteristics, lifecycle jobs are particularly useful for:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Seed your database on your preview environment: you can create a custom job that will seed a database when the preview environment is deployed"),Object(a.b)("li",{parentName:"ul"},"Create an external resources not natively managed by Qovery: you can create a custom job that will create the external resource. By writing the connection strings in an output file, those information will be injected as environment variables on any service of the environment (so that they can consume this new resource).")),Object(a.b)(l.a,{type:"success",mdxType:"Alert"},Object(a.b)("p",null,"Check out ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/tutorial/how-to-use-lifecycle-job-to-deploy-any-kind-of-resources/"}),"this complete example")," on how to deploy a Terraform module with the Lifecycle Job feature")),Object(a.b)("p",null,"Qovery allows you to create and deploy jobs from two different sources: Git Repository or Container Registry"),Object(a.b)("h2",{id:"deploying-from-a-git-repository"},"Deploying from a Git Repository"),Object(a.b)("p",null,"In this configuration, Qovery will pull the code from the chosen repository, build the application and deploy it on your kubernetes cluster."),Object(a.b)("p",null,"The list of Git repositories available during the setup is strictly tied to the permissions of your git account (by default Qovery can access all your repositories). If you want to restrict the Qovery access only to a few repositories, user the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/#managing-git-permissions-using-the-qovery-github-app"}),"GitHub Qovery Application")," (only for Github)."),Object(a.b)("h2",{id:"deploying-from-a-container-registry"},"Deploying from a Container Registry"),Object(a.b)("p",null,"In this configuration, Qovery will pull the chosen container registry an image you have pre-built and deploy it on your kubernetes cluster."),Object(a.b)("p",null,"To improve the security and avoid deploying images from non-authorized registries, we have decided to restrict the list of Container Registry you can use during the setup process. Only an administrator with the right permissions can manage it from the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/#container-registry-management"}),"Container Registry Management page")),Object(a.b)("h2",{id:"create-a-job"},"Create a Job"),Object(a.b)(r.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,'Go into the chosen environment and press the "New Service" button and then the "Create Lifecycle job" button'),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/configuration/environments/service_creation.png",alt:"Creation"}))),Object(a.b)("li",null,Object(a.b)("p",null,"Select the following fields:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Name: give a name to your application"),Object(a.b)("li",{parentName:"ul"},"Source: Chose between Git Repository or Container Registry, depending on the source location of your application")),Object(a.b)("p",null,"If you want to deploy a cronjob from a Git Repository you will have to select:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Git Repository: Select the git provider hosting your code (it can be hosted on GitHub, GitLab or Bitbucket)."),Object(a.b)("li",{parentName:"ul"},"Branch: Select branch that Qovery should use to deploy your code"),Object(a.b)("li",{parentName:"ul"},"Root Application Path: base folder in which the code resides in your repository"),Object(a.b)("li",{parentName:"ul"},"Build Mode: only Docker is supported")),Object(a.b)(l.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"A Dockerfile is necessary to build and deploy your job")),Object(a.b)("p",null,"If you want to deploy a job from a Container Registry you will have to select:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Registry: select the container registry storing the image of your job. Note: only pre-configured registry are available in this list, check the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/organization/#container-registry-management"}),"Container Registry Management page")," for more information."),Object(a.b)("li",{parentName:"ul"},"Image name: the name of the image to be deployed with this job (example: postgres)"),Object(a.b)("li",{parentName:"ul"},"Image tag: the tag of the image to be deployed with this job (example: 12)")),Object(a.b)(l.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"The tag 'latest' is not supported, please use a specific tag."))),Object(a.b)("li",null,'Specify the configuration of your job: - Event: select the environment event which should trigger the execution of the job (Environment start, stop, delete) - Image Entrypoint: the entrypoint to be used to launch your job (not mandatory). - CMD Arguments: the arguments to be passed to launch your job (not mandatory). We expect the format to be an array. Example ["rails", "-h", "0.0.0.0", "-p", "8080", "string"] - Number of restarts: Maximum number of restarts allowed in case of job failure (0 means no failure) - Max duration time in seconds: Maximum duration allowed for the job to run before killing it and mark it as failed - Port: Port used by Kubernetes to run readiness and liveliness probes checks. The port will not be exposed externally',Object(a.b)(l.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,'Entrypoint and Arguments can be customized for each event. This will allow your job to behave differently depending on the environment status (example: you might want to run a "create" command when the environment starts and a "destroy" command when the environment is deleted)'))),Object(a.b)("li",null,"Within this section, you will need to define the resources to be assigned to your job at run time.",Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"vCPU: the vCPU assigned to each instance of your application. The default is 500m (0.5 vCPU)."),Object(a.b)("li",{parentName:"ul"},"RAM: the amount of RAM assigned to each instance of your application. The default is 512MB.")),Object(a.b)(l.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"Please note that in this section you configure the CPU/RAM allocated by the cluster for your application and that cannot consume more than this value. Even if the application is underused and consume less resources, the cluster will still reserve the selected amount of CPU/RAM."))),Object(a.b)("li",null,Object(a.b)("p",null,"Define any input variable required by your job to run. Any declared variable will be injected as environment variables based on the selected scope (project, environment, service)\nAny additional environment variable can be added later from the environment variable section"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/configuration/job/variables.png",alt:"Input Variables"}))),Object(a.b)("li",null,Object(a.b)("p",null,"You will find a recap of your job setup and you can now decide to:\n1. Go back to one of the previous steps and change your settings\n2. Create your job without deploying it\n3. Create and deploy your job"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/configuration/job/cronjob_recap.png",alt:"Recap"}))))),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"Once created, you can access the configuration at any time via the Settings tab available on the service section"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/configuration/application/settings.png",alt:"Settings"})),Object(a.b)("p",null,"You can find below the description of each of the tabs available in this section"),Object(a.b)("h3",{id:"general"},"General"),Object(a.b)("p",null,"General settings section allows you to set up your application name and the source code location (git repository or image registry) ."),Object(a.b)("h4",{id:"git-repository"},"Git Repository"),Object(a.b)("p",null,"If your job is built and deployed from a git repository, within this section you can:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Modify the git provider where your code is stored (it can be hosted on GitHub, GitLab or Bitbucket)."),Object(a.b)("li",{parentName:"ul"},"Modify the branch that Qovery should use for deploying your code"),Object(a.b)("li",{parentName:"ul"},"Modify ",Object(a.b)("inlineCode",{parentName:"li"},"Root Application Path")," - base folder in which the application resides in your repository")),Object(a.b)(l.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"Qovery supports mono repositories. ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/advanced/monorepository/"}),"See our advanced guide for more details."))),Object(a.b)(l.a,{type:"warning",mdxType:"Alert"},Object(a.b)("p",null,"If your repository contains private submodules using SSH protocol, you will need to add a secret beginning with GIT",Object(a.b)("em",{parentName:"p"},"SSH_KEY"),", containing a private SSH key with access rights to your sumbodules repositories."),Object(a.b)("p",null,"Secret names examples:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"GIT_SSH_KEY_GITHUB"),Object(a.b)("li",{parentName:"ul"},"GIT_SSH_KEY_GITLAB"),Object(a.b)("li",{parentName:"ul"},"GIT_SSH_KEY_MYAPP"))),Object(a.b)("h4",{id:"container-registry"},"Container Registry"),Object(a.b)("p",null,"If your application is deployed from an image registry, within this section you can modify:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Registry: select the container registry storing the image of your application. Note: only pre-configured registry are available in this list, check the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/organization/#container-registry-management"}),"Container Registry Management page")," for more information."),Object(a.b)("li",{parentName:"ul"},"Image name: the name of the image to be deployed with this application (example: postgres)"),Object(a.b)("li",{parentName:"ul"},"Image tag: the tag of the image to be deployed with this application (example: 12)")),Object(a.b)(l.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"The tag 'latest' is not supported, please use a specific tag.")),Object(a.b)("h4",{id:"build-mode"},"Build Mode"),Object(a.b)("p",null,'This option is available only if you have selected "Git Repository" as source. Only Docker is supported'),Object(a.b)("p",null,"Qovery runs your application within the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.docker.com/resources/what-container"}),"Container technology"),". To build and run your application, you need to provide a valid ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder"}),"Dockerfile"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-Dockerfile",metastring:'title="Valid NodeJS Dockerfile"',title:'"Valid',NodeJS:!0,'Dockerfile"':!0}),"FROM node:13-alpine\nRUN mkdir -p /usr/src/app\nWORKDIR /usr/src/app\nCOPY . .\nRUN npm install\nEXPOSE 3000\nCMD node ./bin/www\n")),Object(a.b)("p",null,"After creating a Dockerfile, specify the location of your Dockerfile in ",Object(a.b)("inlineCode",{parentName:"p"},"Dockefile path")," field."),Object(a.b)("p",null,"Configuration from above will make Qovery look for the Dockerfile in ",Object(a.b)("inlineCode",{parentName:"p"},"/timescale/Dockerfile")," path of your repository (",Object(a.b)("inlineCode",{parentName:"p"},"Root Application Path")," + ",Object(a.b)("inlineCode",{parentName:"p"},"Dockerfile Path"),")."),Object(a.b)("h3",{id:"job-configuration"},"JOB Configuration"),Object(a.b)("p",null,"You can modify here the configuration of your job:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"CRON Schedule: specify a valid CRON expression (see ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://crontab.guru/"}),"Crontab guru")," for help). After being deployed, the job will be executed following the defined schedule."),Object(a.b)("li",{parentName:"ul"},"Image Entrypoint: the entrypoint to be used to launch your job (not mandatory)"),Object(a.b)("li",{parentName:"ul"},"CMD Arguments: the arguments to be passed to launch your job (not mandatory). We expect the format to be an array. Example ",'["rails", "-h", "0.0.0.0", "-p", "8080", "string"]'),Object(a.b)("li",{parentName:"ul"},"Number of restarts: Maximum number of restarts allowed in case of job failure (0 means no failure)"),Object(a.b)("li",{parentName:"ul"},"Max duration time in seconds: Maximum duration allowed for the job to run before killing it and mark it as failed"),Object(a.b)("li",{parentName:"ul"},"Port: Port used by Kubernetes to run readiness and liveliness probes checks. The port will not be exposed externally")),Object(a.b)("h3",{id:"resources"},"Resources"),Object(a.b)("h4",{id:"cpu"},"CPU"),Object(a.b)("p",null,"To configure the number of CPUs that your job needs, adjust the setting in the ",Object(a.b)("inlineCode",{parentName:"p"},"Resources")," section."),Object(a.b)(l.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"Default is 500m (0.5 vCPU).")),Object(a.b)("p",null,"Please note that in this section you configure the CPU allocated by the cluster for your application and that cannot consume more than this value. Even if the application is underused and consume less resources, the cluster will still reserve the selected amount of CPU."),Object(a.b)("h4",{id:"ram"},"RAM"),Object(a.b)("p",null,"To configure the amount of RAM that your app needs, adjust the setting in ",Object(a.b)("inlineCode",{parentName:"p"},"Resources")," section."),Object(a.b)(l.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"Default is 512MB.")),Object(a.b)("p",null,"Please note that in this section you configure the CPU allocated by the cluster for your application and that cannot consume more than this value. Even if the application is underused and consume less resources, the cluster will still reserve the selected amount of CPU. If your application requires more RAM than requested, it will be killed by the kubernetes scheduler."),Object(a.b)("h2",{id:"environment-variable"},"Environment Variable"),Object(a.b)("p",null,"To learn how to set up environment variables in your projects and applications, navigate to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"configuring Environment Variables")," section."),Object(a.b)("h2",{id:"secrets"},"Secrets"),Object(a.b)("p",null,"To learn how to set up secrets in your projects and applications, navigate to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"configuring Secrets")," section."),Object(a.b)("h2",{id:"logs"},"Logs"),Object(a.b)("p",null,"To learn how to display your application logs, navigate to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/getting-started/debugging/#logs"}),"logs section in our Debugging guide")),Object(a.b)("h2",{id:"job-output"},"Job output"),Object(a.b)("p",null,"Qovery expects the output file to be written in the following path ",Object(a.b)("inlineCode",{parentName:"p"},"/qovery-output/qovery-output.json")," (the ",Object(a.b)("inlineCode",{parentName:"p"},"output")," folder is automatically mounted by Qovery).\nThe file should follow this format:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "varname1": {\n    "sensitive": True,\n    "value": "myvalue"\n  },\n  "varname2": {\n    "sensitive": False,\n    "value": "myvalue"\n  }\n}\n...\n')),Object(a.b)("p",null,"At the end of the job execution, this file will be processed by Qovery and a set of environment variables will be created, one for each element in the json. The information in the json file will be mapped to an environment variables in this way:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Variable Name: ",Object(a.b)("inlineCode",{parentName:"li"},"QOVERY_OUTPUT_JOB_<JOBID>_<VARNAME>")," , where ",Object(a.b)("inlineCode",{parentName:"li"},"<JOBID>")," is the id of the Job on Qovery side and ",Object(a.b)("inlineCode",{parentName:"li"},"<VARNAME>")," is the name of the element in the output file."),Object(a.b)("li",{parentName:"ul"},'Variable Value: field "value"'),Object(a.b)("li",{parentName:"ul"},'Secret: field "sensitive"')),Object(a.b)("p",null,"An alias ",Object(a.b)("inlineCode",{parentName:"p"},"<VARNAME>")," will be automatically created to simplify your setup."),Object(a.b)("p",null,"Example\nLet's say that the code of our job creates a PostgreSQL RDS on AWS. At the end of its execution, the job should know the connection Once created, the job should know the connection string of the PostgreSQL. The job can now create a file ",Object(a.b)("inlineCode",{parentName:"p"},"/qovery-output/qovery-output.json")," with the following structure:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "POSTGRES_DB_HOST": {\n    "sensitive": False,\n    "value": "zf138d9c8-postgresql"\n  },\n  "POSTGRES_DB_USER": {\n    "sensitive": False,\n    "value": "root"\n  },\n  "POSTGRES_DB_PASS": {\n    "sensitive": True,\n    "value": "mypassword"\n  },\n  "POSTGRES_DB_TABLE": {\n    "sensitive": False,\n    "value": "MYDB"\n  },\n  "POSTGRES_DB_PORT": {\n    "sensitive": False,\n    "value": "3600"\n  }\n}\n')),Object(a.b)("p",null,"This file will be processed by Qovery and the following environment variables will be created:"),Object(a.b)("p",null,"Var ",Object(a.b)("inlineCode",{parentName:"p"},"QOVERY_OUTPUT_JOB_<JOBID>_POSTGRES_DB_HOST")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Value: "zf138d9c8-postgresql"'),Object(a.b)("li",{parentName:"ul"},"Secret: false"),Object(a.b)("li",{parentName:"ul"},"Alias: POSTGRES_DB_HOST")),Object(a.b)("p",null,"Var ",Object(a.b)("inlineCode",{parentName:"p"},"QOVERY_OUTPUT_JOB_<JOBID>_POSTGRES_DB_USER")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Value: "root"'),Object(a.b)("li",{parentName:"ul"},"Secret: false"),Object(a.b)("li",{parentName:"ul"},"Alias: POSTGRES_DB_USER")),Object(a.b)("p",null,"Var ",Object(a.b)("inlineCode",{parentName:"p"},"QOVERY_OUTPUT_JOB_<JOBID>_POSTGRES_DB_PASS")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Value: "mypassword"'),Object(a.b)("li",{parentName:"ul"},"Secret: true"),Object(a.b)("li",{parentName:"ul"},"Alias: POSTGRES_DB_PASS")),Object(a.b)("p",null,"Var ",Object(a.b)("inlineCode",{parentName:"p"},"QOVERY_OUTPUT_JOB_<JOBID>_POSTGRES_DB_TABLE")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Value: "MYDB"'),Object(a.b)("li",{parentName:"ul"},"Secret: false"),Object(a.b)("li",{parentName:"ul"},"Alias: POSTGRES_DB_TABLE")),Object(a.b)("p",null,"Var ",Object(a.b)("inlineCode",{parentName:"p"},"QOVERY_OUTPUT_JOB_<JOBID>_DB_PORT")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Value: "3600"'),Object(a.b)("li",{parentName:"ul"},"Secret: false"),Object(a.b)("li",{parentName:"ul"},"Alias: POSTGRES_DB_PORT")),Object(a.b)("p",null,"Once the execution of the job is terminated and the environment variables are created, any application within the same environment will be able to access those environment variables and thus connect to the postgres instance."),Object(a.b)("h2",{id:"force-execution"},"Force execution"),Object(a.b)("p",null,"You can force the execution of a job and execute it independently of its configuration (cron expression or event) by:"),Object(a.b)(r.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"Selecting your job")),Object(a.b)("li",null,Object(a.b)("p",null,"In the application overview, click on the ",Object(a.b)("inlineCode",{parentName:"p"},"Play")," button and ",Object(a.b)("inlineCode",{parentName:"p"},"Run"),".")),Object(a.b)("li",null,Object(a.b)("p",null,"Once you click, the job will be executed and you will be able to follow its execution within the application logs")))),Object(a.b)("h2",{id:"deploy-other-version"},"Deploy other version"),Object(a.b)(r.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"Choose your job")),Object(a.b)("li",null,Object(a.b)("p",null,"In the application overview, click on the ",Object(a.b)("inlineCode",{parentName:"p"},"Play")," button and ",Object(a.b)("inlineCode",{parentName:"p"},"Deploy Other Version"),"."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/configuration/application/deploy-other-version.png",alt:"Update All"}))),Object(a.b)("li",null,Object(a.b)("p",null,"Once you click, this panel will appear, and you will be able to choose the version you wish to update/rollback."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/configuration/application/deploy-other-version2.png",alt:"Application"}))))),Object(a.b)("h2",{id:"delete-a-job"},"Delete a job"),Object(a.b)(r.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"Choose your application")),Object(a.b)("li",null,Object(a.b)("p",null,"In the application overview, click on the ",Object(a.b)("inlineCode",{parentName:"p"},"3 dots")," button and remove the application."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/configuration/application/app-1.png",alt:"Application"}))))))}d.isMDXComponent=!0},440:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var r=i.apply(null,o);r&&e.push(r)}else if("object"===a)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(o=function(){return i}.apply(t,[]))||(e.exports=o)}()},441:function(e,t,n){"use strict";n(445);var o=n(0),i=n.n(o),a=n(440),r=n.n(a);n(132);t.a=function(e){var t=e.children,n=e.classNames,o=e.fill,a=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return i.a.createElement("div",{className:r()(n,"alert","alert--"+l,{"alert--fill":o,"alert--icon":!1!==a}),role:"alert"},!1!==a&&i.a.createElement("i",{className:r()("feather","icon-"+(a||c))}),t)}},442:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=o,m=b["".concat(r,".").concat(d)]||b[d]||p[d]||a;return n?i.a.createElement(m,l({ref:t},s,{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},443:function(e,t,n){"use strict";var o=n(1),i=n(0),a=n.n(i),r=n(39),l=n(448),c=n(20),s=n.n(c);t.a=function(e){var t,n=e.to,c=e.href,u=n||c,b=Object(l.a)(u),p=Object(i.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(i.useEffect)((function(){return!d&&b&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,b]),u&&b?a.a.createElement(r.b,Object(o.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(u),p.current=!0)},innerRef:function(e){var n,o;d&&e&&b&&(n=e,o=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),o())}))}))).observe(n))},to:u})):a.a.createElement("a",Object(o.a)({},e,{href:u}))}},444:function(e,t,n){var o=n(26).f,i=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in i||n(10)&&o(i,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},445:function(e,t,n){var o=n(12);o(o.P,"Array",{fill:n(449)}),n(74)("fill")},446:function(e,t,n){"use strict";n(444);var o=n(0),i=n.n(o),a=n(441);t.a=function(e){var t=e.children,n=e.name;return i.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},i.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},447:function(e,t,n){"use strict";var o=n(0),i=n.n(o),a=n(443),r=n(440),l=n.n(r);n(133);t.a=function(e){var t=e.children,n=e.className,o=e.badge,r=e.leftIcon,c=e.rightIcon,s=e.size,u=e.target,b=e.to,p=l()("jump-to","jump-to--"+s,n),d=i.a.createElement("div",{className:"jump-to--inner"},i.a.createElement("div",{className:"jump-to--inner-2"},r&&i.a.createElement("div",{className:"jump-to--left"},i.a.createElement("i",{className:"feather icon-"+r})),i.a.createElement("div",{className:"jump-to--main"},o?i.a.createElement("span",{className:"badge badge--primary badge--right"},o):"",t),i.a.createElement("div",{className:"jump-to--right"},i.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return u?i.a.createElement("a",{href:b,target:u,className:p},d):i.a.createElement(a.a,{to:b,className:p},d)}},448:function(e,t,n){"use strict";function o(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return o}))},449:function(e,t,n){"use strict";var o=n(28),i=n(75),a=n(27);e.exports=function(e){for(var t=o(this),n=a(t.length),r=arguments.length,l=i(r>1?arguments[1]:void 0,n),c=r>2?arguments[2]:void 0,s=void 0===c?n:i(c,n);s>l;)t[l++]=e;return t}},450:function(e,t,n){"use strict";var o=n(452),i=n(51);function a(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,o){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===o[e]&&(o[e]={}),o[e][t[1]]=n):o[e]=n};case"bracket":return function(e,n,o){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==o[e]?o[e]=[].concat(o[e],n):o[e]=[n]:o[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=i({arrayFormat:"none"},t)),o=Object.create(null);return"string"!=typeof e?o:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),i=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(i),a,o)})),Object.keys(o).sort().reduce((function(e,t){var n=o[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):o},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,o){return null===n?[a(t,e),"[",o,"]"].join(""):[a(t,e),"[",a(o,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=i({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(o){var i=e[o];if(void 0===i)return"";if(null===i)return a(o,t);if(Array.isArray(i)){var r=[];return i.slice().forEach((function(e){void 0!==e&&r.push(n(o,e,r.length))})),r.join("&")}return a(o,t)+"="+a(i,t)})).filter((function(e){return e.length>0})).join("&"):""}},451:function(e,t,n){"use strict";var o=n(0),i=n.n(o),a=(n(440),n(450)),r=n.n(a);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,a=e.hideFeedbackQuestion,l="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+l+" failed",body:"The tutorial on:\n\n"+l+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+r.a.stringify(c),u=Object(o.useState)(null),b=u[0],p=u[1];return i.a.createElement("div",{className:"steps steps--h"+n},t,!a&&!b&&i.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",i.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",i.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==b&&i.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",i.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},452:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
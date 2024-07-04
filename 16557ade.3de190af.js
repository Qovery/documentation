/*! For license information please see 16557ade.3de190af.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var o=n(1),a=n(9),i=(n(0),n(445)),r=n(452),l=(n(453),n(444)),c=n(449),s={last_modified_on:"2024-07-03",title:"Lifecycle Job",description:"Learn how to configure your Lifecycle job on Qovery"},u={id:"using-qovery/configuration/lifecycle-job",title:"Lifecycle Job",description:"Learn how to configure your Lifecycle job on Qovery",source:"@site/docs/using-qovery/configuration/lifecycle-job.md",permalink:"/docs/using-qovery/configuration/lifecycle-job",sidebar:"docs",previous:{title:"Cronjob",permalink:"/docs/using-qovery/configuration/cronjob"},next:{title:"Environment Variable & Secrets",permalink:"/docs/using-qovery/configuration/environment-variable"}},b=[{value:"Deploying from a Git Repository",id:"deploying-from-a-git-repository",children:[]},{value:"Deploying from a Container Registry",id:"deploying-from-a-container-registry",children:[]},{value:"Create a Job",id:"create-a-job",children:[]},{value:"Deployment Management",id:"deployment-management",children:[]},{value:"Job output",id:"job-output",children:[]},{value:"Force Run",id:"force-run",children:[]},{value:"Configuration",id:"configuration",children:[{value:"General",id:"general",children:[]},{value:"Dockerfile",id:"dockerfile",children:[]},{value:"JOB Configuration",id:"job-configuration",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Deployment Restrictions",id:"deployment-restrictions",children:[]},{value:"Advanced Settings",id:"advanced-settings",children:[]}]},{value:"Environment Variable",id:"environment-variable",children:[]},{value:"Secrets",id:"secrets",children:[]},{value:"Logs",id:"logs",children:[]},{value:"Clone",id:"clone",children:[]},{value:"Delete a job",id:"delete-a-job",children:[]}],p={rightToc:b};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(c.a,{name:"documentation",mdxType:"Assumptions"},Object(i.b)("p",null,"You have created an ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environment"),".")),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"Lifecycle Job")," is a job that runs on your kubernetes cluster with the following characteristics:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"it is executed ONLY when the selected environment event occurs (unless its execution is forced, ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"#force-execution"}),"see the Force execution section"),")."),Object(i.b)("li",{parentName:"ul"},"any output file created at the end of the execution will be automatically injected as environment variable to any service within the same environment (",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"#job-output"}),"see the Job Output section"),").")),Object(i.b)("p",null,"Given its characteristics, lifecycle jobs are particularly useful for:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Seed your database on your preview environment: you can create a custom job that will seed a database when the preview environment is deployed"),Object(i.b)("li",{parentName:"ul"},"Create an external resources not natively managed by Qovery: you can create a custom job that will create the external resource. By writing the connection strings in an output file, those information will be injected as environment variables on any service of the environment (so that they can consume this new resource).")),Object(i.b)("p",null,"A lifecycle job can be executed on the following environment events:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Start"),': the job is executed when the environment starts. Note that a start event is generated on both the "Deploy" and "Redeploy" actions so you should take care of managing this in your code to avoid executing it twice (on the first deploy and on the re-deploy).'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Stop"),": the job is executed when the environment stops."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Delete"),": the job is executed when the environment is deleted.")),Object(i.b)(l.a,{type:"success",mdxType:"Alert"},Object(i.b)("p",null,"Check out ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/tutorial/how-to-use-lifecycle-job-to-deploy-any-kind-of-resources/"}),"this complete example")," on how to deploy a Terraform module with the Lifecycle Job feature")),Object(i.b)("p",null,"Qovery allows you to create and deploy jobs from two different sources: Git Repository or Container Registry"),Object(i.b)("h2",{id:"deploying-from-a-git-repository"},"Deploying from a Git Repository"),Object(i.b)("p",null,"In this configuration, Qovery will pull the code from the chosen repository, build the application and deploy it on your kubernetes cluster."),Object(i.b)("p",null,"The list of Git repositories available during the setup is strictly tied to the permissions of your git account (by default Qovery can access all your repositories). If you want to restrict the Qovery access only to a few repositories, user the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/git-repository-access/"}),"GitHub Qovery Application")," (only for Github)."),Object(i.b)("h2",{id:"deploying-from-a-container-registry"},"Deploying from a Container Registry"),Object(i.b)("p",null,"In this configuration, Qovery will pull the chosen container registry an image you have pre-built and deploy it on your kubernetes cluster."),Object(i.b)("p",null,"To improve the security and avoid deploying images from non-authorized registries, we have decided to restrict the list of Container Registry you can use during the setup process. Only an administrator with the right permissions can manage it from the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/container-registry/"}),"Container Registry Management page")),Object(i.b)("h2",{id:"create-a-job"},"Create a Job"),Object(i.b)(r.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("p",null,'Go into the chosen environment and press the "New Service" button and then the "Create Lifecycle job" button'),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/environments/service_creation.png",alt:"Creation"}))),Object(i.b)("li",null,Object(i.b)("p",null,"Select the following fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Name: give a name to your application"),Object(i.b)("li",{parentName:"ul"},"Source: Chose between Git Repository or Container Registry, depending on the source location of your application")),Object(i.b)("p",null,"If you want to deploy a cronjob from a Git Repository you will have to select:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Git Repository: Select the git provider hosting your code (it can be hosted on GitHub, GitLab or Bitbucket).  You can add a new git access by clicking on ",Object(i.b)("inlineCode",{parentName:"li"},"New git access"),"."),Object(i.b)("li",{parentName:"ul"},"Branch: Select branch that Qovery should use to deploy your code"),Object(i.b)("li",{parentName:"ul"},"Root Application Path: base folder in which the code resides in your repository")),Object(i.b)("p",null,"If you want to deploy a job from a Container Registry you will have to select:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Registry: select the container registry storing the image of your job.You can add a new container registry by clicking on ",Object(i.b)("inlineCode",{parentName:"li"},"New registry"),"."),Object(i.b)("li",{parentName:"ul"},"Image name: the name of the image to be deployed with this job (example: postgres)"),Object(i.b)("li",{parentName:"ul"},"Image tag: the tag of the image to be deployed with this job (example: 12)")),Object(i.b)(l.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"The tag 'latest' is not supported, please use a specific tag.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Auto Deploy ")),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/deploying-with-auto-deploy/"}),"Deploying with auto-deploy feature")," section."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Extra labels/annotations (optional)")),Object(i.b)("p",null,"Add your extra annotation/label groups. See the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/labels-annotations/"}),"Add annotation/label group")," section for more information.")),Object(i.b)("li",null,"Specify the Dockerfile",Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"#dockerfile"}),"Dockerfile section")," for more information.")),Object(i.b)("li",null,Object(i.b)("p",null,"Specify the configuration of your job:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Event: select the environment event which should trigger the execution of the job (Environment start, stop, delete)"),Object(i.b)("li",{parentName:"ul"},"Image Entrypoint: the entrypoint to be used to launch your job (not mandatory)."),Object(i.b)("li",{parentName:"ul"},"CMD Arguments: the arguments to be passed to launch your application (not mandatory) separated with a space. Example: ",Object(i.b)("inlineCode",{parentName:"li"},'rails -h 0.0.0.0 -p 8080 string "complex arg"'),"."),Object(i.b)("li",{parentName:"ul"},"Number of restarts: Maximum number of restarts allowed in case of job failure (0 means no failure)"),Object(i.b)("li",{parentName:"ul"},"Max duration time in seconds: Maximum duration allowed for the job to run before killing it and mark it as failed"),Object(i.b)("li",{parentName:"ul"},"Port: Port used by Kubernetes to run readiness and liveliness probes checks. The port will not be exposed externally")),Object(i.b)(l.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,'Entrypoint and Arguments can be customized for each event. This will allow your job to behave differently depending on the environment status (example: you might want to run a "create" command when the environment starts and a "destroy" command when the environment is deleted)'))),Object(i.b)("li",null,"Within this section, you will need to define the resources to be assigned to your job at run time.",Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"vCPU: the vCPU assigned to each instance of your application. The default is 500m (0.5 vCPU)."),Object(i.b)("li",{parentName:"ul"},"RAM: the amount of RAM assigned to each instance of your application. The default is 512MB.")),Object(i.b)(l.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Please note that in this section you configure the CPU/RAM allocated by the cluster for your application and that cannot consume more than this value. Even if the application is underused and consume less resources, the cluster will still reserve the selected amount of CPU/RAM."))),Object(i.b)("li",null,Object(i.b)("p",null,"Define any input variable required by your job to run. Any declared variable will be injected as environment variables based on the selected scope (project, environment, service)\nAny additional environment variable can be added later from the environment variable section"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/job/variables.png",alt:"Input Variables"}))),Object(i.b)("li",null,Object(i.b)("p",null,"You will find a recap of your job setup and you can now decide to:\n1. Go back to one of the previous steps and change your settings\n2. Create your job without deploying it\n3. Create and deploy your job"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/job/cronjob_recap.png",alt:"Recap"}))))),Object(i.b)("h2",{id:"deployment-management"},"Deployment Management"),Object(i.b)("p",null,"Have a look at the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/"}),"Deployment Management")," section for more information."),Object(i.b)("h2",{id:"job-output"},"Job output"),Object(i.b)("p",null,"Qovery expects the output file to be written in the following path ",Object(i.b)("inlineCode",{parentName:"p"},"/qovery-output/qovery-output.json")," (the ",Object(i.b)("inlineCode",{parentName:"p"},"output")," folder is automatically mounted by Qovery).\nThe file should follow this format:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "varname1": {\n    "sensitive": true,\n    "value": "myvalue"\n  },\n  "varname2": {\n    "sensitive": false,\n    "value": "myvalue"\n  }\n}\n...\n')),Object(i.b)("p",null,"At the end of the job execution, this file will be processed by Qovery and a set of environment variables will be created, one for each element in the json. The information in the json file will be mapped to an environment variables in this way:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Variable Name: ",Object(i.b)("inlineCode",{parentName:"li"},"QOVERY_OUTPUT_JOB_<JOBID>_<VARNAME>")," , where ",Object(i.b)("inlineCode",{parentName:"li"},"<JOBID>")," is the id of the Job on Qovery side and ",Object(i.b)("inlineCode",{parentName:"li"},"<VARNAME>")," is the name of the element in the output file."),Object(i.b)("li",{parentName:"ul"},'Variable Value: field "value"'),Object(i.b)("li",{parentName:"ul"},'Secret: field "sensitive"')),Object(i.b)("p",null,"An alias ",Object(i.b)("inlineCode",{parentName:"p"},"<VARNAME>")," will be automatically created to simplify your setup."),Object(i.b)("p",null,"The output (and thus the created environment variables) are displayed in the Lifecycle job overview."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/job/job_output.png",alt:"Job output"})),Object(i.b)("p",null,"Example\nLet's say that the code of our job creates a PostgreSQL RDS on AWS. At the end of its execution, the job should know the connection Once created, the job should know the connection string of the PostgreSQL. The job can now create a file ",Object(i.b)("inlineCode",{parentName:"p"},"/qovery-output/qovery-output.json")," with the following structure:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "POSTGRES_DB_HOST": {\n    "sensitive": False,\n    "value": "zf138d9c8-postgresql"\n  },\n  "POSTGRES_DB_USER": {\n    "sensitive": False,\n    "value": "root"\n  },\n  "POSTGRES_DB_PASS": {\n    "sensitive": True,\n    "value": "mypassword"\n  },\n  "POSTGRES_DB_TABLE": {\n    "sensitive": False,\n    "value": "MYDB"\n  },\n  "POSTGRES_DB_PORT": {\n    "sensitive": False,\n    "value": "3600"\n  }\n}\n')),Object(i.b)("p",null,"This file will be processed by Qovery and the following environment variables will be created:"),Object(i.b)("p",null,"Var ",Object(i.b)("inlineCode",{parentName:"p"},"QOVERY_OUTPUT_JOB_<JOBID>_POSTGRES_DB_HOST")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Value: "zf138d9c8-postgresql"'),Object(i.b)("li",{parentName:"ul"},"Secret: false"),Object(i.b)("li",{parentName:"ul"},"Alias: POSTGRES_DB_HOST")),Object(i.b)("p",null,"Var ",Object(i.b)("inlineCode",{parentName:"p"},"QOVERY_OUTPUT_JOB_<JOBID>_POSTGRES_DB_USER")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Value: "root"'),Object(i.b)("li",{parentName:"ul"},"Secret: false"),Object(i.b)("li",{parentName:"ul"},"Alias: POSTGRES_DB_USER")),Object(i.b)("p",null,"Var ",Object(i.b)("inlineCode",{parentName:"p"},"QOVERY_OUTPUT_JOB_<JOBID>_POSTGRES_DB_PASS")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Value: "mypassword"'),Object(i.b)("li",{parentName:"ul"},"Secret: true"),Object(i.b)("li",{parentName:"ul"},"Alias: POSTGRES_DB_PASS")),Object(i.b)("p",null,"Var ",Object(i.b)("inlineCode",{parentName:"p"},"QOVERY_OUTPUT_JOB_<JOBID>_POSTGRES_DB_TABLE")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Value: "MYDB"'),Object(i.b)("li",{parentName:"ul"},"Secret: false"),Object(i.b)("li",{parentName:"ul"},"Alias: POSTGRES_DB_TABLE")),Object(i.b)("p",null,"Var ",Object(i.b)("inlineCode",{parentName:"p"},"QOVERY_OUTPUT_JOB_<JOBID>_DB_PORT")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Value: "3600"'),Object(i.b)("li",{parentName:"ul"},"Secret: false"),Object(i.b)("li",{parentName:"ul"},"Alias: POSTGRES_DB_PORT")),Object(i.b)("p",null,"Once the execution of the job is terminated and the environment variables are created, any application within the same environment will be able to access those environment variables and thus connect to the postgres instance."),Object(i.b)("h2",{id:"force-run"},"Force Run"),Object(i.b)("p",null,"You can force the execution of a job independently its deployment status by:"),Object(i.b)(r.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("p",null,"Select the job that you want to force")),Object(i.b)("li",null,Object(i.b)("p",null,"click on the ",Object(i.b)("inlineCode",{parentName:"p"},"Play")," button of the cronjob you want to force and select the ",Object(i.b)("inlineCode",{parentName:"p"},"Force Run")," option. Note: the same option is available on the service list as well")),Object(i.b)("li",null,Object(i.b)("p",null,"Select the environment event you want to force. ")),Object(i.b)("li",null,Object(i.b)("p",null,"Once you click, the job will be deployed and executed with the entrypoint and arguments associated to the selected event. You will be able to follow its execution within the application logs")))),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Once created, you can access the configuration at any time via the Settings tab available on the service section"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/application/settings.png",alt:"Settings"})),Object(i.b)("p",null,"You can find below the description of each of the tabs available in this section"),Object(i.b)("h3",{id:"general"},"General"),Object(i.b)("p",null,"General settings section allows you to set up your application name and the source code location (git repository or image registry) ."),Object(i.b)("h4",{id:"git-repository"},"Git Repository"),Object(i.b)("p",null,"If your job is built and deployed from a git repository, within this section you can:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Modify the git provider where your code is stored (it can be hosted on GitHub, GitLab or Bitbucket)."),Object(i.b)("li",{parentName:"ul"},"Modify the branch that Qovery should use for deploying your code"),Object(i.b)("li",{parentName:"ul"},"Modify ",Object(i.b)("inlineCode",{parentName:"li"},"Root Application Path")," - base folder in which the application resides in your repository")),Object(i.b)(l.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Qovery supports mono repositories. ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/advanced/monorepository/"}),"See our advanced guide for more details."))),Object(i.b)(l.a,{type:"warning",mdxType:"Alert"},Object(i.b)("p",null,"If your repository contains private submodules using SSH protocol, you will need to add a secret beginning with GIT",Object(i.b)("em",{parentName:"p"},"SSH_KEY"),", containing a private SSH key with access rights to your sumbodules repositories."),Object(i.b)("p",null,"Secret names examples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"GIT_SSH_KEY_GITHUB"),Object(i.b)("li",{parentName:"ul"},"GIT_SSH_KEY_GITLAB"),Object(i.b)("li",{parentName:"ul"},"GIT_SSH_KEY_MYAPP"))),Object(i.b)("h4",{id:"container-registry"},"Container Registry"),Object(i.b)("p",null,"If your application is deployed from an image registry, within this section you can modify:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Registry: select the container registry storing the image of your application. Note: only pre-configured registry are available in this list, check the ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/organization/container-registry/"}),"Container Registry Management page")," for more information."),Object(i.b)("li",{parentName:"ul"},"Image name: the name of the image to be deployed with this application (example: postgres)"),Object(i.b)("li",{parentName:"ul"},"Image tag: the tag of the image to be deployed with this application (example: 12)")),Object(i.b)(l.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"The tag 'latest' is not supported, please use a specific tag.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Auto Deploy ")),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/deploying-with-auto-deploy/"}),"Deploying with auto-deploy feature")," section."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Extra labels/annotations (optional)")),Object(i.b)("p",null,"Add your extra annotation/label groups. See the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/labels-annotations/"}),"Add annotation/label group")," section for more information."),Object(i.b)("h3",{id:"dockerfile"},"Dockerfile"),Object(i.b)("p",null,'If your job is built via the Qovery CI (Source="Git Repository"), this section allows you to define the Dockerfile location. '),Object(i.b)("p",null,"Two options are available, depending on where you want to store the Dockerfile:"),Object(i.b)("h4",{id:"git-repository-1"},"Git repository"),Object(i.b)("p",null,"Specify the location of your Dockerfile in ",Object(i.b)("inlineCode",{parentName:"p"},"Dockefile path")," field."),Object(i.b)("h4",{id:"raw-dockerfile"},"RAW Dockerfile"),Object(i.b)("p",null,"Qovery can store and inject for you the Dockerfile instead of storing it into your repository."),Object(i.b)(l.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Qovery does not apply any versioning on the provided Dockerfile, we strongly suggest to store the Dockerfile within your repository.")),Object(i.b)("p",null,"If you don't have one, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"docker init")," command to generate one for your application (check the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/reference/cli/docker/init/"}),"documentation here"),")."),Object(i.b)("h3",{id:"job-configuration"},"JOB Configuration"),Object(i.b)("p",null,"You can modify here the configuration of your job:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CRON Schedule: specify a valid CRON expression (see ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://crontab.guru/"}),"Crontab guru")," for help). After being deployed, the job will be executed following the defined schedule."),Object(i.b)("li",{parentName:"ul"},"Image Entrypoint: the entrypoint to be used to launch your job (not mandatory)"),Object(i.b)("li",{parentName:"ul"},"CMD Arguments: the arguments to be passed to launch your application (not mandatory) separated with a space. Example: ",Object(i.b)("inlineCode",{parentName:"li"},'rails -h 0.0.0.0 -p 8080 string "complex arg"'),"."),Object(i.b)("li",{parentName:"ul"},"Number of restarts: Maximum number of restarts allowed in case of job failure (0 means no failure)"),Object(i.b)("li",{parentName:"ul"},"Max duration time in seconds: Maximum duration allowed for the job to run before killing it and mark it as failed"),Object(i.b)("li",{parentName:"ul"},"Port: Port used by Kubernetes to run readiness and liveliness probes checks. The port will not be exposed externally")),Object(i.b)("h3",{id:"resources"},"Resources"),Object(i.b)("h4",{id:"cpu"},"CPU"),Object(i.b)("p",null,"To configure the number of CPUs that your job needs, adjust the setting in the ",Object(i.b)("inlineCode",{parentName:"p"},"Resources")," section."),Object(i.b)(l.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Default is 500m (0.5 vCPU).")),Object(i.b)("p",null,"Please note that in this section you configure the CPU allocated by the cluster for your application and that cannot consume more than this value. Even if the application is underused and consume less resources, the cluster will still reserve the selected amount of CPU."),Object(i.b)("h4",{id:"ram"},"RAM"),Object(i.b)("p",null,"To configure the amount of RAM that your app needs, adjust the setting in ",Object(i.b)("inlineCode",{parentName:"p"},"Resources")," section."),Object(i.b)(l.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Default is 512MB.")),Object(i.b)("p",null,"Please note that in this section you configure the CPU allocated by the cluster for your application and that cannot consume more than this value. Even if the application is underused and consume less resources, the cluster will still reserve the selected amount of CPU. If your application requires more RAM than requested, it will be killed by the kubernetes scheduler."),Object(i.b)("h3",{id:"deployment-restrictions"},"Deployment Restrictions"),Object(i.b)("p",null,"This section allows to specify which changes on your repository should trigger an auto-deploy (if enabled). To know more about how to configure your Deployment Restrictions, have a look at the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/deploying-with-auto-deploy/#filtering-commits-triggering-the-auto-deploy"}),"deployment restrictions section"),"."),Object(i.b)("h3",{id:"advanced-settings"},"Advanced Settings"),Object(i.b)("p",null,"You can further customize the service behaviour via the service advanced settings. Check ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/advanced-settings/"}),"this documentation")," to know more."),Object(i.b)("h2",{id:"environment-variable"},"Environment Variable"),Object(i.b)("p",null,"To learn how to set up environment variables in your projects and applications, navigate to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"configuring Environment Variables")," section."),Object(i.b)("h2",{id:"secrets"},"Secrets"),Object(i.b)("p",null,"To learn how to set up secrets in your projects and applications, navigate to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"configuring Secrets")," section."),Object(i.b)("h2",{id:"logs"},"Logs"),Object(i.b)("p",null,"To learn how to display your application logs, navigate to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/logs/#live-logs"}),"logs section")),Object(i.b)("h2",{id:"clone"},"Clone"),Object(i.b)("p",null,"You can create a clone of the service via the clone feature. A new service with the same configuration (see below for exceptions) will be created into the target environment."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/clone_service.png",alt:"Clone Service"})),Object(i.b)("p",null,"The target environment can be the same as the current environment or even another one in a completely different project."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Important information ")),Object(i.b)("p",null,"Not every configuration parameter will be copied within the new service for consistency reasons. The configuration is fully or partially copied depending on the target environment:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"same environment:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"custom domain: this setup is not copied into the new service (to avoid collision)"))),Object(i.b)("li",{parentName:"ul"},"another environment:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"custom domain: this setup is not copied into the new service (to avoid collision)"),Object(i.b)("li",{parentName:"ul"},"environment variable: aliases defined on environment variables are not copied (since the aliased env var might not exist)"),Object(i.b)("li",{parentName:"ul"},"deployment pipeline: stage setup is not copied (since the target stage might not exist)"),Object(i.b)("li",{parentName:"ul"},"number of instances: if the target environment runs on a Qovery EC2 cluster, the max number of instances is set to 1 (Qovery EC2 constraint)")))),Object(i.b)("p",null,"Please check the configuration of the new service before deploying it."),Object(i.b)("h2",{id:"delete-a-job"},"Delete a job"),Object(i.b)(r.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("p",null,"Select the job you want to delete")),Object(i.b)("li",null,Object(i.b)("p",null,"In the overview, click on the ",Object(i.b)("inlineCode",{parentName:"p"},"3 dots")," button and remove the job. Note: the same option is available on the service list as well"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/application/app-1.png",alt:"Application"}))))))}d.isMDXComponent=!0},443:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var r=a.apply(null,o);r&&e.push(r)}else if("object"===i)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()},444:function(e,t,n){"use strict";n(446);var o=n(0),a=n.n(o),i=n(443),r=n.n(i);n(132);t.a=function(e){var t=e.children,n=e.classNames,o=e.fill,i=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return a.a.createElement("div",{className:r()(n,"alert","alert--"+l,{"alert--fill":o,"alert--icon":!1!==i}),role:"alert"},!1!==i&&a.a.createElement("i",{className:r()("feather","icon-"+(i||c))}),t)}},445:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=o,m=b["".concat(r,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(m,l({ref:t},s,{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},446:function(e,t,n){var o=n(12);o(o.P,"Array",{fill:n(447)}),n(74)("fill")},447:function(e,t,n){"use strict";var o=n(27),a=n(75),i=n(26);e.exports=function(e){for(var t=o(this),n=i(t.length),r=arguments.length,l=a(r>1?arguments[1]:void 0,n),c=r>2?arguments[2]:void 0,s=void 0===c?n:a(c,n);s>l;)t[l++]=e;return t}},448:function(e,t,n){var o=n(28).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||n(10)&&o(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},449:function(e,t,n){"use strict";n(448);var o=n(0),a=n.n(o),i=n(444);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(i.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},450:function(e,t,n){"use strict";var o=n(1),a=n(0),i=n.n(a),r=n(39),l=n(454),c=n(20),s=n.n(c);t.a=function(e){var t,n=e.to,c=e.href,u=n||c,b=Object(l.a)(u),p=Object(a.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!d&&b&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,b]),u&&b?i.a.createElement(r.b,Object(o.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(u),p.current=!0)},innerRef:function(e){var n,o;d&&e&&b&&(n=e,o=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),o())}))}))).observe(n))},to:u})):i.a.createElement("a",Object(o.a)({},e,{href:u}))}},451:function(e,t,n){"use strict";var o=n(455),a=n(51);function i(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,o){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===o[e]&&(o[e]={}),o[e][t[1]]=n):o[e]=n};case"bracket":return function(e,n,o){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==o[e]?o[e]=[].concat(o[e],n):o[e]=[n]:o[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),o=Object.create(null);return"string"!=typeof e?o:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),i=t.length>0?t.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),n(decodeURIComponent(a),i,o)})),Object.keys(o).sort().reduce((function(e,t){var n=o[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):o},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,o){return null===n?[i(t,e),"[",o,"]"].join(""):[i(t,e),"[",i(o,e),"]=",i(n,e)].join("")};case"bracket":return function(t,n){return null===n?i(t,e):[i(t,e),"[]=",i(n,e)].join("")};default:return function(t,n){return null===n?i(t,e):[i(t,e),"=",i(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(o){var a=e[o];if(void 0===a)return"";if(null===a)return i(o,t);if(Array.isArray(a)){var r=[];return a.slice().forEach((function(e){void 0!==e&&r.push(n(o,e,r.length))})),r.join("&")}return i(o,t)+"="+i(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},452:function(e,t,n){"use strict";var o=n(0),a=n.n(o),i=(n(443),n(451)),r=n.n(i);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,i=e.hideFeedbackQuestion,l="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+l+" failed",body:"The tutorial on:\n\n"+l+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+r.a.stringify(c),u=Object(o.useState)(null),b=u[0],p=u[1];return a.a.createElement("div",{className:"steps steps--h"+n},t,!i&&!b&&a.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",a.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",a.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==b&&a.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",a.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},453:function(e,t,n){"use strict";var o=n(0),a=n.n(o),i=n(450),r=n(443),l=n.n(r);n(134);t.a=function(e){var t=e.children,n=e.className,o=e.badge,r=e.leftIcon,c=e.rightIcon,s=e.size,u=e.target,b=e.to,p=l()("jump-to","jump-to--"+s,n),d=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},r&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+r})),a.a.createElement("div",{className:"jump-to--main"},o?a.a.createElement("span",{className:"badge badge--primary badge--right"},o):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return u?a.a.createElement("a",{href:b,target:u,className:p},d):a.a.createElement(i.a,{to:b,className:p},d)}},454:function(e,t,n){"use strict";function o(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return o}))},455:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
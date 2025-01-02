(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{416:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return d}));var a=t(1),o=t(9),l=(t(0),t(465)),r=t(477),c=t(478),i=t(464),s={last_modified_on:"2025-01-02",title:"CLI",description:"How to use the Qovery CLI (Command Line Interface)"},b={id:"using-qovery/interface/cli",title:"CLI",description:"How to use the Qovery CLI (Command Line Interface)",source:"@site/docs/using-qovery/interface/cli.md",permalink:"/docs/using-qovery/interface/cli",sidebar:"docs",previous:{title:"Web interface",permalink:"/docs/using-qovery/interface/web-interface"},next:{title:"REST API",permalink:"/docs/using-qovery/interface/rest-api"}},p=[{value:"First usage",id:"first-usage",children:[{value:"Install",id:"install",children:[]},{value:"Sign up",id:"sign-up",children:[]},{value:"Help",id:"help",children:[]}]},{value:"Context",id:"context",children:[{value:"Set New Context",id:"set-new-context",children:[]},{value:"Print Current Context",id:"print-current-context",children:[]}]},{value:"Log",id:"log",children:[{value:"Follow Logs",id:"follow-logs",children:[]}]},{value:"Status",id:"status",children:[]},{value:"Console",id:"console",children:[]},{value:"Shell",id:"shell",children:[{value:"Pass a command",id:"pass-a-command",children:[]},{value:"Shell in a dedicated pod",id:"shell-in-a-dedicated-pod",children:[]},{value:"Shell in a dedicated container",id:"shell-in-a-dedicated-container",children:[]}]},{value:"Port-forward",id:"port-forward",children:[{value:"Port-forward a dedicated pod",id:"port-forward-a-dedicated-pod",children:[]}]},{value:"Generate API token",id:"generate-api-token",children:[]},{value:"Managing services, environments and projects",id:"managing-services-environments-and-projects",children:[{value:"Environment",id:"environment",children:[]},{value:"Projects",id:"projects",children:[]}]},{value:"Access your Qovery-managed cluster",id:"access-your-qovery-managed-cluster",children:[]},{value:"Lock cluster updates",id:"lock-cluster-updates",children:[]},{value:"Managing the Deployment Pipeline",id:"managing-the-deployment-pipeline",children:[{value:"List stages",id:"list-stages",children:[]},{value:"Add a stage",id:"add-a-stage",children:[]},{value:"Modify a stage",id:"modify-a-stage",children:[]},{value:"Delete a stage",id:"delete-a-stage",children:[]},{value:"Change stage for a service",id:"change-stage-for-a-service",children:[]}]},{value:"Static token",id:"static-token",children:[]},{value:"Support",id:"support",children:[]}],u={rightToc:p};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)(i.a,{type:"success",mdxType:"Alert"},Object(l.b)("p",null,"Use Infrastructure as Code (IaC) with our ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/integration/terraform-provider/"}),"Terraform Provider")," and our ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/interface/rest-api/"}),"REST API")," to manage Qovery and deploy your apps.")),Object(l.b)("p",null,"Qovery provides a very easy to use CLI (Command Line Interface) designed to fit the developer workflow perfectly."),Object(l.b)("hr",null),Object(l.b)("p",null,"The purpose of the CLI is to integrate seamlessly with your development workflow:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Write code"),Object(l.b)("li",{parentName:"ol"},"Commit"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Qovery")," - deploy a new version of your application"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Qovery CLI")," - check the status of your application"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Qovery CLI")," - debug your application"),Object(l.b)("li",{parentName:"ol"},"Repeat")),Object(l.b)("h2",{id:"first-usage"},"First usage"),Object(l.b)("h3",{id:"install"},"Install"),Object(l.b)(r.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"},{group:"Platforms",label:"Docker",value:"docker"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"linux",mdxType:"TabItem"},Object(l.b)(r.a,{centered:!0,className:"rounded",defaultValue:"universal",values:[{label:"*nix",value:"universal"},{label:"Arch Linux",value:"arch"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"universal",mdxType:"TabItem"},Object(l.b)("p",null,"To download and install Qovery CLI on any Linux distribution:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ curl -s https://get.qovery.com | bash\n"))),Object(l.b)(c.a,{value:"arch",mdxType:"TabItem"},Object(l.b)("p",null,"Qovery is part of ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://aur.archlinux.org/packages"}),"AUR")," packages, so you can install it with ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Jguer/yay"}),"yay"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ yay qovery-cli\n"))),Object(l.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("p",null,"Install the Qovery CLI on Linux manually by downloading the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest release"),", and uncompress its content to a folder into your shell ",Object(l.b)("inlineCode",{parentName:"p"},"PATH"),".")))),Object(l.b)(c.a,{value:"macos",mdxType:"TabItem"},Object(l.b)(r.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Script",value:"script"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"homebrew",mdxType:"TabItem"},Object(l.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(l.b)(c.a,{value:"script",mdxType:"TabItem"},Object(l.b)("p",null,"To download and install Qovery CLI from the command line:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ curl -s https://get.qovery.com | bash\n"))),Object(l.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("p",null,"Install the Qovery CLI on Mac OS manually by downloading the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest release"),", and uncompress its content to a folder into your shell ",Object(l.b)("inlineCode",{parentName:"p"},"PATH"),".")))),Object(l.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(l.b)(r.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"scoop",mdxType:"TabItem"},Object(l.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(l.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest release"),", and uncompress its content to\n",Object(l.b)("inlineCode",{parentName:"p"},"C:\\Windows"),".")))),Object(l.b)(c.a,{value:"docker",mdxType:"TabItem"},Object(l.b)("p",null,"Install Docker on your local machine and run the following command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Pull and Run the latest Qovery CLI\n$ docker run ghcr.io/qovery/qovery-cli:latest help\n")),Object(l.b)("p",null,"Change ",Object(l.b)("inlineCode",{parentName:"p"},"latest")," by the version you want to use. For example, to use the version 0.58.4, run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ docker run ghcr.io/qovery/qovery-cli:0.58.4 help\n")),Object(l.b)("p",null,"Note: ",Object(l.b)("inlineCode",{parentName:"p"},"ghcr.io")," is the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/pkgs/container/qovery-cli"}),"GitHub Container Registry"),"."))),Object(l.b)("h3",{id:"sign-up"},"Sign up"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(l.b)(i.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"If you are using a headless (without GUI) environment, you can use the following command to sign up and sign in:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth --headless\n"))),Object(l.b)("p",null,"Your browser window with Qovery sign-up page will open. Follow the instructions to sign up and sign in."),Object(l.b)("h3",{id:"help"},"Help"),Object(l.b)("p",null,"You can see all the commands available by executing:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery help\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Help output"',title:'"Help','output"':!0}),'$ qovery help\nA Command-line Interface of the Qovery platform\n\nUsage:\n  qovery [command]\n\nAvailable Commands:\n  application  Manage applications\n  auth         Log in to Qovery\n  cluster      Manage clusters\n  completion   Generate the autocompletion script for the specified shell\n  console      Opens the application in Qovery Console in your browser\n  container    Manage containers\n  context      Manage CLI context\n  cronjob      Manage cronjobs\n  database     Manage databases\n  env          Manage Environment Variables and Secrets\n  environment  Manage environments\n  helm         Manage helms\n  help         Help about any command\n  lifecycle    Manage lifecycle jobs\n  list-pods    List the pods of a service with their pods\n  log          Print your application logs\n  port-forward Port forward a port to an application container\n  project      Manage Project\n  service      Manage services\n  shell        Connect to an application container\n  status       Print the status of your application\n  token        Generate an API token\n  upgrade      Upgrade Qovery CLI to latest version\n  version      Print installed version of the Qovery CLI\n\nFlags:\n  -h, --help      help for qovery\n      --verbose   Verbose output\n\nUse "qovery [command] --help" for more information about a command.\n')),Object(l.b)("h2",{id:"context"},"Context"),Object(l.b)("p",null,"Context command lets you configure the CLI to work with your chosen application. Before executing other commands, you need first to set up the context.\nThe context is then remembered and used by the CLI. You can configure a new context anytime by running the ",Object(l.b)("inlineCode",{parentName:"p"},"qovery context set")," command."),Object(l.b)("p",null,"Most of the commands support an inline context set allowing you to directly pass the URL of the application you wants to interact with."),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery shell https://console.qovery.com/organization/51927012-8377-4e0f-84cf-7f5f38a0154b/project/a6545d50-69a3-4966-89cc-4c0bfb6d3448/environment/c9ac549b-a855-4d3b-b652-d68d5f1fea11/application/820ca0a3-08bf-42c1-8ad2-540714ad657f/general\n# this is the url of my back-end application\n\nOrganization | My orga\nProject      | R&D / Backend\nEnvironment  | prod\nServiceLevel | back-end\nServiceType  | application\n\n$ ls\n...\n")),Object(l.b)("h3",{id:"set-new-context"},"Set New Context"),Object(l.b)("p",null,"To set a new context, type ",Object(l.b)("inlineCode",{parentName:"p"},"qovery context set"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery context set\nQovery: Current context:\nOrganization | Qovery\nProject      | test\nEnvironment  | development\nApplication  | website\n\nQovery: Select new context\nOrganization:\n\u2714 Qovery\nProject:\n\u2714 admin\nEnvironment:\n\u2714 main\nApplication:\n\u2714 app\n\nQovery: New context:\nOrganization | Qovery\nProject      | admin\nEnvironment  | main\nApplication  | app\n")),Object(l.b)("h3",{id:"print-current-context"},"Print Current Context"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery context\nQovery: Current context:\nOrganization | Qovery\nProject      | admin\nEnvironment  | main\nApplication  | app\n\nQovery: You can set a new context using 'qovery context set'.\n")),Object(l.b)("h2",{id:"log"},"Log"),Object(l.b)("p",null,"Log command allows you to display the application logs."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery log\n  TIME                    MESSAGE\n  Jul 15 08:46:13.019717       at /usr/src/app/autoFunctions/levels.js:17:16\n  Jul 15 08:46:13.019721       at Array.forEach (<anonymous>)\n  Jul 15 08:46:13.019724       at Timeout._onTimeout (/usr/src/app/autoFunctions/levels.js:15:14)\n  Jul 15 08:46:13.019728       at listOnTimeout (internal/timers.js:557:17)\n  # ... the rest of logs\n")),Object(l.b)("p",null,"By default, the last 1000 logs is displayed."),Object(l.b)("h3",{id:"follow-logs"},"Follow Logs"),Object(l.b)("p",null,"To make the CLI follow your logs, use ",Object(l.b)("inlineCode",{parentName:"p"},"-f")," flag:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery log -f\n  TIME                    MESSAGE\n  Jul 15 08:46:13.019717       at /usr/src/app/autoFunctions/levels.js:17:16\n  Jul 15 08:46:13.019721       at Array.forEach (<anonymous>)\n  Jul 15 08:46:13.019724       at Timeout._onTimeout (/usr/src/app/autoFunctions/levels.js:15:14)\n  Jul 15 08:46:13.019728       at listOnTimeout (internal/timers.js:557:17)\n  # ... the rest of logs\n")),Object(l.b)("p",null,"This will make the CLI follow your application logs and append any new logs till you use ",Object(l.b)("inlineCode",{parentName:"p"},"CTRL+C"),"."),Object(l.b)("h2",{id:"status"},"Status"),Object(l.b)("p",null,"Status command lets you print the basic status of your application."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery status\n15 Jul 21 10:55 CEST\nApplication | Backend\nStatus      | RUNNING\n")),Object(l.b)("h2",{id:"console"},"Console"),Object(l.b)("p",null,"Console command quickly opens the Qovery Console in your browser to let you display more information about your application."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery console\nQovery: Opening https://console.qovery.com/platform/organization/your-org/projects/your-proj/environments/your-env/applications/your-app/summary\n")),Object(l.b)("h2",{id:"shell"},"Shell"),Object(l.b)("p",null,"Shell command allows you to open a connection and execute commands directly on the container running application."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery shell\n/ # ls\nbin                   media                 srv\ndev                   mnt                   sys\ndocker-entrypoint.d   opt                   tmp\ndocker-entrypoint.sh  proc                  usr\netc                   root                  var\nhome                  run                   www\nlib                   sbin\n")),Object(l.b)(i.a,{type:"info",mdxType:"Alert"},"Keep in mind these limitations when using this feature:",Object(l.b)("ul",null,Object(l.b)("li",null,"Install a process reaper as pid one in your container (i.e: dumb-init), as you may leave zoombie process in your container if your shell terminate unproperly (i.e: ctrl+c, cnx restart). This is a known issue with kubernetes exec to leave process alive after attach is closed;"),Object(l.b)("li",null,"shell is force closed after [1 hour, 1GB transmitted];"),Object(l.b)("li",null,"we use SH by default. To have auto-completion, start bash."))),Object(l.b)(i.a,{type:"info",mdxType:"Alert"},"The width of the terminal is limited to 80 characters. But you can resize it once you are inside the application with one of these commands:",Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"COLUMNS=200 tput init\nstty cols 200\n"))),Object(l.b)("h3",{id:"pass-a-command"},"Pass a command"),Object(l.b)("p",null,"To pass a command, you can use the ",Object(l.b)("inlineCode",{parentName:"p"},"--command")," or ",Object(l.b)("inlineCode",{parentName:"p"},"-c")," argument followed by your command."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery shell --command ls\nbin                   media                 srv\ndev                   mnt                   sys\ndocker-entrypoint.d   opt                   tmp\ndocker-entrypoint.sh  proc                  usr\netc                   root                  var\nhome                  run                   www\nlib                   sbin\n")),Object(l.b)("p",null,"To pass several arguments, you can separate them with a comma or send different ",Object(l.b)("inlineCode",{parentName:"p"},"--command"),"."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"qovery shell --command ls --command -l"),"\n",Object(l.b)("inlineCode",{parentName:"p"},"qovery shell --command ls,-l"),"\n",Object(l.b)("inlineCode",{parentName:"p"},"qovery shell -c ls,-l")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery shell --command ls --command -l\ndrwxr-xr-x    2 root     root          4096 Nov 30 09:32 bin\ndrwxr-xr-x    5 root     root           360 Dec 21 09:46 dev\ndrwxr-xr-x    1 root     root            41 Dec 20 20:13 docker-entrypoint.d\n-rwxr-xr-x    1 root     root          1620 Dec 20 20:13 docker-entrypoint.sh\ndrwxr-xr-x    1 root     root            25 Dec 21 09:46 etc\ndrwxr-xr-x    2 root     root             6 Nov 30 09:32 home\ndrwxr-xr-x    1 root     root            61 Dec 20 22:11 lib\ndrwxr-xr-x    5 root     root            44 Nov 30 09:32 media\ndrwxr-xr-x    2 root     root             6 Nov 30 09:32 mnt\ndrwxr-xr-x    2 root     root             6 Nov 30 09:32 opt\ndr-xr-xr-x  209 root     root             0 Dec 21 09:46 proc\ndrwx------    1 root     root            26 Dec 21 10:38 root\ndrwxr-xr-x    1 root     root            23 Dec 21 09:46 run\ndrwxr-xr-x    2 root     root          4096 Nov 30 09:32 sbin\ndrwxr-xr-x    2 root     root             6 Nov 30 09:32 srv\ndr-xr-xr-x   13 root     root             0 Dec 21 09:46 sys\ndrwxrwxrwt    2 root     root             6 Nov 30 09:32 tmp\ndrwxr-xr-x    1 root     root            66 Nov 30 09:32 usr\ndrwxr-xr-x    1 root     root            19 Nov 30 09:32 var\ndrwxr-xr-x    2 root     root            59 Dec 21 09:45 www\n")),Object(l.b)("h3",{id:"shell-in-a-dedicated-pod"},"Shell in a dedicated pod"),Object(l.b)("p",null,"If your application is running on several pods, you can shell directly in a dedicated one by using the ",Object(l.b)("inlineCode",{parentName:"p"},"--pod")," or ",Object(l.b)("inlineCode",{parentName:"p"},"-p")," argument followed by your pod name."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery shell --pod app-5f65fb5c4-frontend-5f65db5c4b-q4w11\n")),Object(l.b)("p",null,"NOTE: you can get the list of pods by running the ",Object(l.b)("inlineCode",{parentName:"p"},"qovery list-pods")," command."),Object(l.b)("h3",{id:"shell-in-a-dedicated-container"},"Shell in a dedicated container"),Object(l.b)("p",null,"If you have several containers in your pod, you can shell directly in a dedicated one by using the ",Object(l.b)("inlineCode",{parentName:"p"},"--container")," argument followed by your container name."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery shell --container app-5f65fb5c4-frontend\n")),Object(l.b)("h2",{id:"port-forward"},"Port-forward"),Object(l.b)("p",null,"Port-forward command allows you to port-forward all the traffic on your local machine to a remote resource available on a Qovery environment. This mechanism allows developers to create a secure, encrypted tunnel from their local machine to the application or databases hosted in the cloud. "),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ qovery port-forward -p 8000:80 #your_local_port:your_remote_port\nInfo: Current context:\nOrganization | Qovery Prod\nProject      | R&D / Frontend\nEnvironment  | prod\nService      | console\nType         | application\n\nInfo: Continue with port-forward command using this context ?\nPlease type "yes" to validate context: yes\n\nListening on 127.0.0.1:8000 => 80\n')),Object(l.b)("p",null,"The port-forward feature works with any ",Object(l.b)("inlineCode",{parentName:"p"},"application"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Cronjob"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Lifecycle job")," or ",Object(l.b)("inlineCode",{parentName:"p"},"database")," (Container or Managed) deployed with Qovery. For ",Object(l.b)("inlineCode",{parentName:"p"},"Managed database")," instances on AWS, once the port-forwarded is activated, you must specify ~ ",Object(l.b)("inlineCode",{parentName:"p"},"--tls")," and ",Object(l.b)("inlineCode",{parentName:"p"},"--tls-insecure")," in your database connection command since localhost is not the valid hostname."),Object(l.b)("h3",{id:"port-forward-a-dedicated-pod"},"Port-forward a dedicated pod"),Object(l.b)("p",null,"If your application is running on several pods, you can port-forward to a dedicated one by using the ",Object(l.b)("inlineCode",{parentName:"p"},"--pod")," argument followed by your pod name."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery port-forward -p 8000:80 -pod app-5f65fb5c4-frontend-5f65db5c4b-q4w11\n")),Object(l.b)("p",null,"NOTE: you can get the list of pods by running the ",Object(l.b)("inlineCode",{parentName:"p"},"qovery list-pods")," command."),Object(l.b)("h2",{id:"generate-api-token"},"Generate API token"),Object(l.b)("p",null,"To use the Qovery API you will need to generate an authentication token. To generate an API token you can install the CLI and type"),Object(l.b)(i.a,{type:"warning",mdxType:"Alert"},Object(l.b)("p",null,"Never share your API token with anyone.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery token\n\nQovery: Select organization\nOrganization:\n\u2714 My Organization\nChoose a token name\nToken name: Romaric\nChoose a token description\nToken description: used for Github Actions\nQovery: ---- Never share this authentication token and keep it secure ----\nQovery: qov_4LnEg2wFxxxxxHObGSQ22rjBZZyyyySgyR6Y_2500882691\nQovery: ---- Never share this authentication token and keep it secure ----\n")),Object(l.b)("p",null,"To use your token and list your organizations."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET -H 'Authorization: Token qov_4LnEg2wFxxxxxHObGSQ22rjBZZyyyySgyR6Y_2500882691' https://api.qovery.com/organization\n")),Object(l.b)(i.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"The token can be used to interact programmatically with our API (directly, via our Terraform Provider etc..).\nIf you get a 424 error while trying to create new applications from one of your git repository, please make sure that the Organization Owner has access to the repository you are configuring for your app.")),Object(l.b)("p",null,"Check out our ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://api-doc.qovery.com"}),"API documentation")),Object(l.b)("h2",{id:"managing-services-environments-and-projects"},"Managing services, environments and projects"),Object(l.b)("p",null,"The CLI allows you to manage and deploy the environment and services within your organization"),Object(l.b)("p",null,"###\xa0application, container, lifecycle, cronjob\nThese commands allow you to manage all these services via the CLI. You can run the following actions on these services:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"cancel: Cancel the service deployment"),Object(l.b)("li",{parentName:"ul"},"delete: Delete a service"),Object(l.b)("li",{parentName:"ul"},"deploy: Deploy a service"),Object(l.b)("li",{parentName:"ul"},"list: List the service of the specified type"),Object(l.b)("li",{parentName:"ul"},"redeploy: Redeploy a service (already deployed before)"),Object(l.b)("li",{parentName:"ul"},"stop: Stop a service"),Object(l.b)("li",{parentName:"ul"},"update: Update a service (service name, git branch, auto-deploy, ...)")),Object(l.b)("p",null,"Each action allows you to specify additional parameters to define the service you want to modify (you can find them via the --help command) "),Object(l.b)("p",null,"Example: Listing applications and triggering a deployment"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ qovery application list\nName      | Type        | Status  | Last Update                         \nbackend   | Application | STOPPED | 2023-02-02 14:48:05.339652 +0000 UTC\nfront-end | Application | STOPPED | 2023-02-09 14:04:38.079792 +0000 UTC\n\n$ qovery application deploy -n "backend"\nDeploying application backend in progress..\n\n$ qovery application list\nName      | Type        | Status  | Last Update                         \nbackend   | Application | RUNNING | 2023-02-13 12:59:23.228231 +0000 UTC\nfront-end | Application | STOPPED | 2023-02-09 14:04:38.079792 +0000 UTC\n')),Object(l.b)("p",null,"Example: Enable the auto-deploy feature for an application"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery application update --application backend --auto-deploy true\nApplication backend updated!\n")),Object(l.b)("h3",{id:"environment"},"Environment"),Object(l.b)("p",null,"The command ",Object(l.b)("inlineCode",{parentName:"p"},"environment")," allow you to manage a specific environment via the CLI. You can run the following actions on environments:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"cancel: Cancel an environment deployment"),Object(l.b)("li",{parentName:"ul"},"clone: Clone an environment"),Object(l.b)("li",{parentName:"ul"},"delete: Delete an environment"),Object(l.b)("li",{parentName:"ul"},"deploy: Deploy an environment"),Object(l.b)("li",{parentName:"ul"},"list: List environments"),Object(l.b)("li",{parentName:"ul"},"redeploy: Redeploy an environment"),Object(l.b)("li",{parentName:"ul"},"stage: Manage deployment stages"),Object(l.b)("li",{parentName:"ul"},"stop: Stop an environment")),Object(l.b)("p",null,"Each action allows you to specify additional parameters to define the service you want to modify (you can find them via the --help command)"),Object(l.b)("p",null,"Example: Manage deployment stages and triggering deployment"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'~ $ qovery environment stage list\n\n# deployment stage 1: "DATABASE DEFAULT"\nRename me to avoid default/legacy ordering\n\nType     | Name\nDATABASE | Redis\nDATABASE | DB\n\n\n# deployment stage 2: "JOB DEFAULT"\nRename me to avoid default/legacy ordering\n\n<no service>\n\n\n# deployment stage 3: "CONTAINER DEFAULT"\nRename me to avoid default/legacy ordering\n\nType      | Name\nCONTAINER | Rabbitmq\n\n\n# deployment stage 4: "APPLICATION DEFAULT"\nRename me to avoid default/legacy ordering\n\nType        | Name\nAPPLICATION | Backend\nAPPLICATION | Frontend\nAPPLICATION | Pablo Backend App\nAPPLICATION | API gateway\n\n~ $ qovery environment deploy\nEnvironment is deploying!\n')),Object(l.b)("h3",{id:"projects"},"Projects"),Object(l.b)("p",null,"You can list the organization's projects by using the following command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qovery project list\n")),Object(l.b)("h2",{id:"access-your-qovery-managed-cluster"},"Access your Qovery-managed cluster"),Object(l.b)("p",null,"To access your Qovery managed cluster, follow these steps:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Export your kubeconfig file")," by running the command below, replacing ",Object(l.b)("inlineCode",{parentName:"li"},"<your-cluster_id>")," with your actual cluster ID:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qovery cluster kubeconfig --cluster-id <your-cluster_id>\n")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Set the KUBECONFIG environment variable")," to the path of the kubeconfig file obtained from the previous command:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export KUBECONFIG=<path_to_kubeconfig_file>\n")),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"You can now use tools like ",Object(l.b)("inlineCode",{parentName:"li"},"k9s")," or ",Object(l.b)("inlineCode",{parentName:"li"},"kubectl")," to access and manage your cluster:")),Object(l.b)(i.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"Some cloud providers like GCP or AWS require additional configuration to access the cluster. Make sure you have CLI binaries installed (gcloud CLI/AWS CLI/...), and the right permissions and credentials set up (environment variables or profile file).")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Using k9s")),Object(l.b)("p",null,"Launch the k9s terminal UI to interact with your Kubernetes cluster:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"k9s\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Using kubectl")),Object(l.b)("p",null,"Here are a few examples of common kubectl commands:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods #List all pods in the default namespace\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl describe pod <pod_name> #Get detailed information about a specific pod\n")),Object(l.b)("h2",{id:"lock-cluster-updates"},"Lock cluster updates"),Object(l.b)("p",null,"The lock cluster command prevents any update or deployment from being initiated on a cluster while it is locked. Once a cluster is locked, no new updates can be processed until it is unlocked."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Lock cluster")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qovery cluster lock --cluster-id <your-cluster_id> --reason <reason> --ttl-in-days <days>\n")),Object(l.b)("p",null,"Note that the TTL can not be greater than 5 days."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Unlock cluster")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qovery cluster unlock --cluster-id <your-cluster_id>\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"List clusters locked")),Object(l.b)("p",null,"You can list all the cluster locked withing an organization by running this comamnd:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qovery cluster locked --organization-id <org-id>\n")),Object(l.b)("h2",{id:"managing-the-deployment-pipeline"},"Managing the Deployment Pipeline"),Object(l.b)("p",null,"In the following sections we will describe how to modify the Deployment Pipeline. "),Object(l.b)("h3",{id:"list-stages"},"List stages"),Object(l.b)("p",null,"You can list all the stages of your environment by using the following command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qovery environment stage list\n")),Object(l.b)("h3",{id:"add-a-stage"},"Add a stage"),Object(l.b)("p",null,"You can add a new stage by using the following command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qovery environment stage create -n <name> -d <description>\n")),Object(l.b)("p",null,"Note that the stage will be added at the end of the pipeline (the highest number)"),Object(l.b)("h3",{id:"modify-a-stage"},"Modify a stage"),Object(l.b)("p",null,"You can modify a stage by using the following command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qovery environment stage edit -n <original name> --new-name <new name> --new-description <new description>\n")),Object(l.b)("h3",{id:"delete-a-stage"},"Delete a stage"),Object(l.b)("p",null,"You can modify a stage by using the following command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qovery environment stage delete -n <name>\n")),Object(l.b)("h3",{id:"change-stage-for-a-service"},"Change stage for a service"),Object(l.b)("p",null,"You can modify the stage associated to a service by using the following command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qovery environment stage move -n <service name> --stage <stage name>\n")),Object(l.b)("h2",{id:"static-token"},"Static token"),Object(l.b)("p",null,"You can use a static token to authenticate to Qovery CLI. Which is useful for CI/CD pipelines."),Object(l.b)("p",null,"Environment variables available to set static token:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"QOVERY_CLI_ACCESS_TOKEN")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Q_CLI_ACCESS_TOKEN"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export QOVERY_CLI_ACCESS_TOKEN=xxx\n\nqovery log --organization MyOrg --project MyProject --environment MyEnv --application MyApp\n# you will see the log output\n")),Object(l.b)("h2",{id:"support"},"Support"),Object(l.b)("p",null,"Do you have any issues with Qovery CLI? ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/issues"}),"Open an issue"),"."))}d.isMDXComponent=!0},464:function(e,n,t){"use strict";t(466);var a=t(0),o=t.n(a),l=t(463),r=t.n(l);t(132);n.a=function(e){var n=e.children,t=e.classNames,a=e.fill,l=e.icon,c=e.type,i=null;switch(c){case"danger":i="alert-triangle";break;case"success":i="check-circle";break;case"warning":i="alert-triangle";break;default:i="info"}return o.a.createElement("div",{className:r()(t,"alert","alert--"+c,{"alert--fill":a,"alert--icon":!1!==l}),role:"alert"},!1!==l&&o.a.createElement("i",{className:r()("feather","icon-"+(l||i))}),n)}},477:function(e,n,t){"use strict";var a=t(1),o=(t(480),t(479),t(52),t(29),t(22),t(21),t(0)),l=t.n(o),r=t(483),c=t(463),i=t.n(c),s=t(471),b=t.n(s),p=t(482),u=37,d=39;function m(e){var n=e.block,t=e.centered,a=e.changeSelectedValue,o=e.className,r=e.handleKeydown,c=e.style,s=e.values,b=e.selectedValue,p=e.tabRefs;return l.a.createElement("div",{className:t?"tabs--centered":null},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",o,{"tabs--block":n}),style:c},s.map((function(e){var n=e.value,t=e.label;return l.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===n,className:i()("tab-item",{"tab-item--active":b===n}),key:n,ref:function(e){return p.push(e)},onKeyDown:function(e){return r(p,e.target,e)},onFocus:function(){return a(n)},onClick:function(){return a(n)}},t)}))))}function h(e){var n=e.placeholder,t=e.selectedValue,a=e.changeSelectedValue,o=e.size,c=e.values,i=c;if(i[0].group){var s=_.groupBy(i,"group");i=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return l.a.createElement(r.a,{className:"react-select-container react-select--"+o,classNamePrefix:"react-select",options:i,isClearable:t,placeholder:n,value:c.find((function(e){return e.value==t})),onChange:function(e){return a(e?e.value:null)}})}n.a=function(e){e.block,e.centered;var n=e.children,t=e.defaultValue,r=e.groupId,c=e.label,i=e.placeholder,s=e.select,y=e.size,O=(e.style,e.values),j=e.urlKey,g=Object(p.a)(),v=g.tabGroupChoices,f=g.setTabGroupChoices,N=Object(o.useState)(t),w=N[0],x=N[1];if(null!=r){var C=v[r];null!=C&&C!==w&&x(C)}var T=function(e){x(e),null!=r&&f(r,e)},k=[],I=function(e,n,t){switch(t.keyCode){case d:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}};return Object(o.useEffect)((function(){if("undefined"!=typeof window&&window.location&&j){var e=b.a.parse(window.location.search);e[j]&&x(e[j])}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"margin-bottom--"+(y||"md")},c&&l.a.createElement("div",{className:"margin-vert--sm"},c),O.length>1&&(s?l.a.createElement(h,Object(a.a)({changeSelectedValue:T,handleKeydown:I,placeholder:i,selectedValue:w,size:y,tabRefs:k},e)):l.a.createElement(m,Object(a.a)({changeSelectedValue:T,handleKeydown:I,selectedValue:w,tabRefs:k},e)))),o.Children.toArray(n).filter((function(e){return e.props.value===w}))[0])}},478:function(e,n,t){"use strict";var a=t(0),o=t.n(a);n.a=function(e){return o.a.createElement(o.a.Fragment,null,e.children)}}}]);
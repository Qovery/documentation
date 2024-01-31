(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{398:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return d}));var a=t(1),o=t(9),r=(t(0),t(445)),l=t(457),c=t(462),i=t(444),s={last_modified_on:"2024-01-31",title:"CLI",description:"How to use the Qovery CLI (Command Line Interface)"},b={id:"using-qovery/interface/cli",title:"CLI",description:"How to use the Qovery CLI (Command Line Interface)",source:"@site/docs/using-qovery/interface/cli.md",permalink:"/docs/using-qovery/interface/cli",sidebar:"docs",previous:{title:"Web interface",permalink:"/docs/using-qovery/interface/web-interface"},next:{title:"REST API",permalink:"/docs/using-qovery/interface/rest-api"}},p=[{value:"First usage",id:"first-usage",children:[{value:"Install",id:"install",children:[]},{value:"Sign up",id:"sign-up",children:[]},{value:"Help",id:"help",children:[]}]},{value:"Context",id:"context",children:[{value:"Set New Context",id:"set-new-context",children:[]},{value:"Print Current Context",id:"print-current-context",children:[]}]},{value:"Log",id:"log",children:[{value:"Follow Logs",id:"follow-logs",children:[]}]},{value:"Status",id:"status",children:[]},{value:"Console",id:"console",children:[]},{value:"Shell",id:"shell",children:[{value:"Pass a command",id:"pass-a-command",children:[]},{value:"Shell in a dedicated pod",id:"shell-in-a-dedicated-pod",children:[]},{value:"Shell in a dedicated container",id:"shell-in-a-dedicated-container",children:[]}]},{value:"Port-forward",id:"port-forward",children:[{value:"Port-forward a dedicated pod",id:"port-forward-a-dedicated-pod",children:[]}]},{value:"Generate API token",id:"generate-api-token",children:[]},{value:"Managing services and environments",id:"managing-services-and-environments",children:[{value:"Environment",id:"environment",children:[]}]},{value:"Managing the Deployment Pipeline",id:"managing-the-deployment-pipeline",children:[{value:"List stages",id:"list-stages",children:[]},{value:"Add a stage",id:"add-a-stage",children:[]},{value:"Modify a stage",id:"modify-a-stage",children:[]},{value:"Delete a stage",id:"delete-a-stage",children:[]},{value:"Change stage for a service",id:"change-stage-for-a-service",children:[]}]},{value:"Static token",id:"static-token",children:[]},{value:"Support",id:"support",children:[]}],u={rightToc:p};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)(i.a,{type:"success",mdxType:"Alert"},Object(r.b)("p",null,"Use Infrastructure as Code (IaC) with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/integration/terraform/"}),"Terraform")," and our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/interface/rest-api/"}),"REST API")," to manage Qovery and deploy your apps.")),Object(r.b)("p",null,"Qovery provides a very easy to use CLI (Command Line Interface) designed to fit the developer workflow perfectly."),Object(r.b)("hr",null),Object(r.b)("p",null,"The purpose of the CLI is to integrate seamlessly with your development workflow:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Write code"),Object(r.b)("li",{parentName:"ol"},"Commit"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Qovery")," - deploy a new version of your application"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Qovery CLI")," - check the status of your application"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Qovery CLI")," - debug your application"),Object(r.b)("li",{parentName:"ol"},"Repeat")),Object(r.b)("h2",{id:"first-usage"},"First usage"),Object(r.b)("h3",{id:"install"},"Install"),Object(r.b)(l.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"},{group:"Platforms",label:"Docker",value:"docker"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"linux",mdxType:"TabItem"},Object(r.b)(l.a,{centered:!0,className:"rounded",defaultValue:"universal",values:[{label:"*nix",value:"universal"},{label:"Arch Linux",value:"arch"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"universal",mdxType:"TabItem"},Object(r.b)("p",null,"To download and install Qovery CLI on any Linux distribution:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ curl -s https://get.qovery.com | bash\n"))),Object(r.b)(c.a,{value:"arch",mdxType:"TabItem"},Object(r.b)("p",null,"Qovery is part of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://aur.archlinux.org/packages"}),"AUR")," packages, so you can install it with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Jguer/yay"}),"yay"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ yay qovery-cli\n"))),Object(r.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(r.b)("p",null,"Install the Qovery CLI on Linux manually by downloading the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest release"),", and uncompress its content to a folder into your shell ",Object(r.b)("inlineCode",{parentName:"p"},"PATH"),".")))),Object(r.b)(c.a,{value:"macos",mdxType:"TabItem"},Object(r.b)(l.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Script",value:"script"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"homebrew",mdxType:"TabItem"},Object(r.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(r.b)(c.a,{value:"script",mdxType:"TabItem"},Object(r.b)("p",null,"To download and install Qovery CLI from the command line:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ curl -s https://get.qovery.com | bash\n"))),Object(r.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(r.b)("p",null,"Install the Qovery CLI on Mac OS manually by downloading the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest release"),", and uncompress its content to a folder into your shell ",Object(r.b)("inlineCode",{parentName:"p"},"PATH"),".")))),Object(r.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(r.b)(l.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"scoop",mdxType:"TabItem"},Object(r.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(r.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(r.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest release"),", and uncompress its content to\n",Object(r.b)("inlineCode",{parentName:"p"},"C:\\Windows"),".")))),Object(r.b)(c.a,{value:"docker",mdxType:"TabItem"},Object(r.b)("p",null,"Install Docker on your local machine and run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Pull and Run the latest Qovery CLI\n$ docker run ghcr.io/qovery/qovery-cli:latest help\n")),Object(r.b)("p",null,"Change ",Object(r.b)("inlineCode",{parentName:"p"},"latest")," by the version you want to use. For example, to use the version 0.58.4, run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ docker run ghcr.io/qovery/qovery-cli:0.58.4 help\n")),Object(r.b)("p",null,"Note: ",Object(r.b)("inlineCode",{parentName:"p"},"ghcr.io")," is the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/pkgs/container/qovery-cli"}),"GitHub Container Registry"),"."))),Object(r.b)("h3",{id:"sign-up"},"Sign up"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"If you are using an environment without access to GUI or a browser, you can use headless authentication instead:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth --headless\n"))),Object(r.b)("p",null,"Your browser window with sign-in options will open."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/github_signup.svg",alt:"Connect Github"})),Object(r.b)("p",null,"Congratulations, you are logged-in."),Object(r.b)("h3",{id:"help"},"Help"),Object(r.b)("p",null,"You can see all the commands available by executing:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery help\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Help output"',title:'"Help','output"':!0}),'$ qovery help\nA Command-line Interface of the Qovery platform\n\nUsage:\n  qovery [command]\n\nAvailable Commands:\n  application  Manage applications\n  auth         Log in to Qovery\n  cluster      Manage clusters\n  completion   Generate the autocompletion script for the specified shell\n  console      Opens the application in Qovery Console in your browser\n  container    Manage containers\n  context      Manage CLI context\n  cronjob      Manage cronjobs\n  database     Manage databases\n  env          Manage Environment Variables and Secrets\n  environment  Manage environments\n  helm         Manage helms\n  help         Help about any command\n  lifecycle    Manage lifecycle jobs\n  list-pods    List the pods of a service with their pods\n  log          Print your application logs\n  port-forward Port forward a port to an application container\n  project      Manage Project\n  service      Manage services\n  shell        Connect to an application container\n  status       Print the status of your application\n  token        Generate an API token\n  upgrade      Upgrade Qovery CLI to latest version\n  version      Print installed version of the Qovery CLI\n\nFlags:\n  -h, --help      help for qovery\n      --verbose   Verbose output\n\nUse "qovery [command] --help" for more information about a command.\n')),Object(r.b)("h2",{id:"context"},"Context"),Object(r.b)("p",null,"Context command lets you configure the CLI to work with your chosen application. Before executing other commands, you need first to set up the context.\nThe context is then remembered and used by the CLI. You can configure a new context anytime by running the ",Object(r.b)("inlineCode",{parentName:"p"},"qovery context set")," command."),Object(r.b)("p",null,"Most of the commands support an inline context set allowing you to directly pass the URL of the application you wants to interact with."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery shell https://console.qovery.com/organization/51927012-8377-4e0f-84cf-7f5f38a0154b/project/a6545d50-69a3-4966-89cc-4c0bfb6d3448/environment/c9ac549b-a855-4d3b-b652-d68d5f1fea11/application/820ca0a3-08bf-42c1-8ad2-540714ad657f/general\n# this is the url of my back-end application\n\nOrganization | My orga\nProject      | R&D / Backend\nEnvironment  | prod\nServiceLevel | back-end\nServiceType  | application\n\n$ ls\n...\n")),Object(r.b)("h3",{id:"set-new-context"},"Set New Context"),Object(r.b)("p",null,"To set a new context, type ",Object(r.b)("inlineCode",{parentName:"p"},"qovery context set"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery context set\nQovery: Current context:\nOrganization | Qovery\nProject      | test\nEnvironment  | development\nApplication  | website\n\nQovery: Select new context\nOrganization:\n\u2714 Qovery\nProject:\n\u2714 admin\nEnvironment:\n\u2714 main\nApplication:\n\u2714 app\n\nQovery: New context:\nOrganization | Qovery\nProject      | admin\nEnvironment  | main\nApplication  | app\n")),Object(r.b)("h3",{id:"print-current-context"},"Print Current Context"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery context\nQovery: Current context:\nOrganization | Qovery\nProject      | admin\nEnvironment  | main\nApplication  | app\n\nQovery: You can set a new context using 'qovery context set'.\n")),Object(r.b)("h2",{id:"log"},"Log"),Object(r.b)("p",null,"Log command allows you to display the application logs."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery log\n  TIME                    MESSAGE\n  Jul 15 08:46:13.019717       at /usr/src/app/autoFunctions/levels.js:17:16\n  Jul 15 08:46:13.019721       at Array.forEach (<anonymous>)\n  Jul 15 08:46:13.019724       at Timeout._onTimeout (/usr/src/app/autoFunctions/levels.js:15:14)\n  Jul 15 08:46:13.019728       at listOnTimeout (internal/timers.js:557:17)\n  # ... the rest of logs\n")),Object(r.b)("p",null,"By default, the last 1000 logs is displayed."),Object(r.b)("h3",{id:"follow-logs"},"Follow Logs"),Object(r.b)("p",null,"To make the CLI follow your logs, use ",Object(r.b)("inlineCode",{parentName:"p"},"-f")," flag:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery log -f\n  TIME                    MESSAGE\n  Jul 15 08:46:13.019717       at /usr/src/app/autoFunctions/levels.js:17:16\n  Jul 15 08:46:13.019721       at Array.forEach (<anonymous>)\n  Jul 15 08:46:13.019724       at Timeout._onTimeout (/usr/src/app/autoFunctions/levels.js:15:14)\n  Jul 15 08:46:13.019728       at listOnTimeout (internal/timers.js:557:17)\n  # ... the rest of logs\n")),Object(r.b)("p",null,"This will make the CLI follow your application logs and append any new logs till you use ",Object(r.b)("inlineCode",{parentName:"p"},"CTRL+C"),"."),Object(r.b)("h2",{id:"status"},"Status"),Object(r.b)("p",null,"Status command lets you print the basic status of your application."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery status\n15 Jul 21 10:55 CEST\nApplication | Backend\nStatus      | RUNNING\n")),Object(r.b)("h2",{id:"console"},"Console"),Object(r.b)("p",null,"Console command quickly opens the Qovery Console in your browser to let you display more information about your application."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery console\nQovery: Opening https://console.qovery.com/platform/organization/your-org/projects/your-proj/environments/your-env/applications/your-app/summary\n")),Object(r.b)("h2",{id:"shell"},"Shell"),Object(r.b)("p",null,"Shell command allows you to open a connection and execute commands directly on the container running application."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery shell\n/ # ls\nbin                   media                 srv\ndev                   mnt                   sys\ndocker-entrypoint.d   opt                   tmp\ndocker-entrypoint.sh  proc                  usr\netc                   root                  var\nhome                  run                   www\nlib                   sbin\n")),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},"Keep in mind these limitations when using this feature:",Object(r.b)("ul",null,Object(r.b)("li",null,"Install a process reaper as pid one in your container (i.e: dumb-init), as you may leave zoombie process in your container if your shell terminate unproperly (i.e: ctrl+c, cnx restart). This is a known issue with kubernetes exec to leave process alive after attach is closed;"),Object(r.b)("li",null,"shell is force closed after [1 hour, 1GB transmitted];"),Object(r.b)("li",null,"we use SH by default. To have auto-completion, start bash."))),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},"The width of the terminal is limited to 80 characters. But you can resize it once you are inside the application with one of these commands:",Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"COLUMNS=200 tput init\nstty cols 200\n"))),Object(r.b)("h3",{id:"pass-a-command"},"Pass a command"),Object(r.b)("p",null,"To pass a command, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"--command")," or ",Object(r.b)("inlineCode",{parentName:"p"},"-c")," argument followed by your command."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery shell --command ls\nbin                   media                 srv\ndev                   mnt                   sys\ndocker-entrypoint.d   opt                   tmp\ndocker-entrypoint.sh  proc                  usr\netc                   root                  var\nhome                  run                   www\nlib                   sbin\n")),Object(r.b)("p",null,"To pass several arguments, you can separate them with a comma or send different ",Object(r.b)("inlineCode",{parentName:"p"},"--command"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"qovery shell --command ls --command -l"),"\n",Object(r.b)("inlineCode",{parentName:"p"},"qovery shell --command ls,-l"),"\n",Object(r.b)("inlineCode",{parentName:"p"},"qovery shell -c ls,-l")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery shell --command ls --command -l\ndrwxr-xr-x    2 root     root          4096 Nov 30 09:32 bin\ndrwxr-xr-x    5 root     root           360 Dec 21 09:46 dev\ndrwxr-xr-x    1 root     root            41 Dec 20 20:13 docker-entrypoint.d\n-rwxr-xr-x    1 root     root          1620 Dec 20 20:13 docker-entrypoint.sh\ndrwxr-xr-x    1 root     root            25 Dec 21 09:46 etc\ndrwxr-xr-x    2 root     root             6 Nov 30 09:32 home\ndrwxr-xr-x    1 root     root            61 Dec 20 22:11 lib\ndrwxr-xr-x    5 root     root            44 Nov 30 09:32 media\ndrwxr-xr-x    2 root     root             6 Nov 30 09:32 mnt\ndrwxr-xr-x    2 root     root             6 Nov 30 09:32 opt\ndr-xr-xr-x  209 root     root             0 Dec 21 09:46 proc\ndrwx------    1 root     root            26 Dec 21 10:38 root\ndrwxr-xr-x    1 root     root            23 Dec 21 09:46 run\ndrwxr-xr-x    2 root     root          4096 Nov 30 09:32 sbin\ndrwxr-xr-x    2 root     root             6 Nov 30 09:32 srv\ndr-xr-xr-x   13 root     root             0 Dec 21 09:46 sys\ndrwxrwxrwt    2 root     root             6 Nov 30 09:32 tmp\ndrwxr-xr-x    1 root     root            66 Nov 30 09:32 usr\ndrwxr-xr-x    1 root     root            19 Nov 30 09:32 var\ndrwxr-xr-x    2 root     root            59 Dec 21 09:45 www\n")),Object(r.b)("h3",{id:"shell-in-a-dedicated-pod"},"Shell in a dedicated pod"),Object(r.b)("p",null,"If your application is running on several pods, you can shell directly in a dedicated one by using the ",Object(r.b)("inlineCode",{parentName:"p"},"--pod")," or ",Object(r.b)("inlineCode",{parentName:"p"},"-p")," argument followed by your pod name."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery shell --pod app-5f65fb5c4-frontend-5f65db5c4b-q4w11\n")),Object(r.b)("p",null,"NOTE: you can get the list of pods by running the ",Object(r.b)("inlineCode",{parentName:"p"},"qovery list-pods")," command."),Object(r.b)("h3",{id:"shell-in-a-dedicated-container"},"Shell in a dedicated container"),Object(r.b)("p",null,"If you have several containers in your pod, you can shell directly in a dedicated one by using the ",Object(r.b)("inlineCode",{parentName:"p"},"--container")," argument followed by your container name."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery shell --container app-5f65fb5c4-frontend\n")),Object(r.b)("h2",{id:"port-forward"},"Port-forward"),Object(r.b)("p",null,"Port-forward command allows you to port-forward all the traffic on your local machine to a remote resource available on a Qovery environment. This mechanism allows developers to create a secure, encrypted tunnel from their local machine to the application or databases hosted in the cloud. "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ qovery port-forward -p 8000:80 #your_local_port:your_remote_port\nInfo: Current context:\nOrganization | Qovery Prod\nProject      | R&D / Frontend\nEnvironment  | prod\nService      | console\nType         | application\n\nInfo: Continue with port-forward command using this context ?\nPlease type "yes" to validate context: yes\n\nListening on 127.0.0.1:8000 => 80\n')),Object(r.b)("p",null,"The port-forward feature works with any ",Object(r.b)("inlineCode",{parentName:"p"},"application"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Cronjob"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Lifecycle job")," or ",Object(r.b)("inlineCode",{parentName:"p"},"database")," (Container or Managed) deployed with Qovery. For ",Object(r.b)("inlineCode",{parentName:"p"},"Managed database")," instances on AWS, once the port-forwarded is activated, you must specify ~ ",Object(r.b)("inlineCode",{parentName:"p"},"--tls")," and ",Object(r.b)("inlineCode",{parentName:"p"},"--tls-insecure")," in your database connection command since localhost is not the valid hostname."),Object(r.b)("h3",{id:"port-forward-a-dedicated-pod"},"Port-forward a dedicated pod"),Object(r.b)("p",null,"If your application is running on several pods, you can port-forward to a dedicated one by using the ",Object(r.b)("inlineCode",{parentName:"p"},"--pod")," argument followed by your pod name."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery port-forward -p 8000:80 -pod app-5f65fb5c4-frontend-5f65db5c4b-q4w11\n")),Object(r.b)("p",null,"NOTE: you can get the list of pods by running the ",Object(r.b)("inlineCode",{parentName:"p"},"qovery list-pods")," command."),Object(r.b)("h2",{id:"generate-api-token"},"Generate API token"),Object(r.b)("p",null,"To use the Qovery API you will need to generate an authentication token. To generate an API token you can install the CLI and type"),Object(r.b)(i.a,{type:"warning",mdxType:"Alert"},Object(r.b)("p",null,"Never share your API token with anyone.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery token\n\nQovery: Select organization\nOrganization:\n\u2714 My Organization\nChoose a token name\nToken name: Romaric\nChoose a token description\nToken description: used for Github Actions\nQovery: ---- Never share this authentication token and keep it secure ----\nQovery: qov_4LnEg2wFxxxxxHObGSQ22rjBZZyyyySgyR6Y_2500882691\nQovery: ---- Never share this authentication token and keep it secure ----\n")),Object(r.b)("p",null,"To use your token and list your organizations."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET -H 'Authorization: Token qov_4LnEg2wFxxxxxHObGSQ22rjBZZyyyySgyR6Y_2500882691' https://api.qovery.com/organization\n")),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"The token can be used to interact programmatically with our API (directly, via our Terraform Provider etc..).\nIf you get a 424 error while trying to create new applications from one of your git repository, please make sure that the Organization Owner has access to the repository you are configuring for your app.")),Object(r.b)("p",null,"Check out our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://api-doc.qovery.com"}),"API documentation")),Object(r.b)("h2",{id:"managing-services-and-environments"},"Managing services and environments"),Object(r.b)("p",null,"The CLI allows you to manage and deploy the environment and services within your organization"),Object(r.b)("p",null,"###\xa0application, container, lifecycle, cronjob\nThese commands allow you to manage all these services via the CLI. You can run the following actions on these services:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"cancel: Cancel the service deployment"),Object(r.b)("li",{parentName:"ul"},"delete: Delete a service"),Object(r.b)("li",{parentName:"ul"},"deploy: Deploy a service"),Object(r.b)("li",{parentName:"ul"},"list: List the service of the specified type"),Object(r.b)("li",{parentName:"ul"},"redeploy: Redeploy a service (already deployed before)"),Object(r.b)("li",{parentName:"ul"},"stop: Stop a service")),Object(r.b)("p",null,"Each action allows you to specify additional parameters to define the service you want to modify (you can find them via the --help command) "),Object(r.b)("p",null,"Example: Listing applications and triggering a deployment"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ qovery application list\nName      | Type        | Status  | Last Update                         \nbackend   | Application | STOPPED | 2023-02-02 14:48:05.339652 +0000 UTC\nfront-end | Application | STOPPED | 2023-02-09 14:04:38.079792 +0000 UTC\n\n$ qovery application deploy -n "backend"\nDeploying application backend in progress..\n\n$ qovery application list\nName      | Type        | Status  | Last Update                         \nbackend   | Application | RUNNING | 2023-02-13 12:59:23.228231 +0000 UTC\nfront-end | Application | STOPPED | 2023-02-09 14:04:38.079792 +0000 UTC\n')),Object(r.b)("h3",{id:"environment"},"Environment"),Object(r.b)("p",null,"The command ",Object(r.b)("inlineCode",{parentName:"p"},"environment")," allow you to manage a specific environment via the CLI. You can run the following actions on environments:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"cancel: Cancel an environment deployment"),Object(r.b)("li",{parentName:"ul"},"clone: Clone an environment"),Object(r.b)("li",{parentName:"ul"},"delete: Delete an environment"),Object(r.b)("li",{parentName:"ul"},"deploy: Deploy an environment"),Object(r.b)("li",{parentName:"ul"},"list: List environments"),Object(r.b)("li",{parentName:"ul"},"redeploy: Redeploy an environment"),Object(r.b)("li",{parentName:"ul"},"stage: Manage deployment stages"),Object(r.b)("li",{parentName:"ul"},"stop: Stop an environment")),Object(r.b)("p",null,"Each action allows you to specify additional parameters to define the service you want to modify (you can find them via the --help command)"),Object(r.b)("p",null,"Example: Manage deployment stages and triggering deployment"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'~ $ qovery environment stage list\n\n# deployment stage 1: "DATABASE DEFAULT"\nRename me to avoid default/legacy ordering\n\nType     | Name\nDATABASE | Redis\nDATABASE | DB\n\n\n# deployment stage 2: "JOB DEFAULT"\nRename me to avoid default/legacy ordering\n\n<no service>\n\n\n# deployment stage 3: "CONTAINER DEFAULT"\nRename me to avoid default/legacy ordering\n\nType      | Name\nCONTAINER | Rabbitmq\n\n\n# deployment stage 4: "APPLICATION DEFAULT"\nRename me to avoid default/legacy ordering\n\nType        | Name\nAPPLICATION | Backend\nAPPLICATION | Frontend\nAPPLICATION | Pablo Backend App\nAPPLICATION | API gateway\n\n~ $ qovery environment deploy\nEnvironment is deploying!\n')),Object(r.b)("h2",{id:"managing-the-deployment-pipeline"},"Managing the Deployment Pipeline"),Object(r.b)("p",null,"In the following sections we will describe how to modify the Deployment Pipeline. "),Object(r.b)("h3",{id:"list-stages"},"List stages"),Object(r.b)("p",null,"You can list all the stages of your environment by using the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qovery environment stage list\n")),Object(r.b)("h3",{id:"add-a-stage"},"Add a stage"),Object(r.b)("p",null,"You can add a new stage by using the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qovery environment stage create -n <name> -d <description>\n")),Object(r.b)("p",null,"Note that the stage will be added at the end of the pipeline (the highest number)"),Object(r.b)("h3",{id:"modify-a-stage"},"Modify a stage"),Object(r.b)("p",null,"You can modify a stage by using the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qovery environment stage edit -n <original name> --new-name <new name> --new-description <new description>\n")),Object(r.b)("h3",{id:"delete-a-stage"},"Delete a stage"),Object(r.b)("p",null,"You can modify a stage by using the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qovery environment stage delete -n <name>\n")),Object(r.b)("h3",{id:"change-stage-for-a-service"},"Change stage for a service"),Object(r.b)("p",null,"You can modify the stage associated to a service by using the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qovery environment stage move -n <service name> --stage <stage name>\n")),Object(r.b)("h2",{id:"static-token"},"Static token"),Object(r.b)("p",null,"You can use a static token to authenticate to Qovery CLI. Which is useful for CI/CD pipelines."),Object(r.b)("p",null,"Environment variables available to set static token:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"QOVERY_CLI_ACCESS_TOKEN")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Q_CLI_ACCESS_TOKEN"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export QOVERY_CLI_ACCESS_TOKEN=xxx\n\nqovery log --organization MyOrg --project MyProject --environment MyEnv --application MyApp\n# you will see the log output\n")),Object(r.b)("h2",{id:"support"},"Support"),Object(r.b)("p",null,"Do you have any issues with Qovery CLI? ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/issues"}),"Open an issue"),"."))}d.isMDXComponent=!0},444:function(e,n,t){"use strict";t(446);var a=t(0),o=t.n(a),r=t(443),l=t.n(r);t(132);n.a=function(e){var n=e.children,t=e.classNames,a=e.fill,r=e.icon,c=e.type,i=null;switch(c){case"danger":i="alert-triangle";break;case"success":i="check-circle";break;case"warning":i="alert-triangle";break;default:i="info"}return o.a.createElement("div",{className:l()(t,"alert","alert--"+c,{"alert--fill":a,"alert--icon":!1!==r}),role:"alert"},!1!==r&&o.a.createElement("i",{className:l()("feather","icon-"+(r||i))}),n)}},457:function(e,n,t){"use strict";var a=t(1),o=(t(463),t(458),t(52),t(29),t(22),t(21),t(0)),r=t.n(o),l=t(466),c=t(443),i=t.n(c),s=t(451),b=t.n(s),p=t(465),u=37,d=39;function m(e){var n=e.block,t=e.centered,a=e.changeSelectedValue,o=e.className,l=e.handleKeydown,c=e.style,s=e.values,b=e.selectedValue,p=e.tabRefs;return r.a.createElement("div",{className:t?"tabs--centered":null},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",o,{"tabs--block":n}),style:c},s.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===n,className:i()("tab-item",{"tab-item--active":b===n}),key:n,ref:function(e){return p.push(e)},onKeyDown:function(e){return l(p,e.target,e)},onFocus:function(){return a(n)},onClick:function(){return a(n)}},t)}))))}function h(e){var n=e.placeholder,t=e.selectedValue,a=e.changeSelectedValue,o=e.size,c=e.values,i=c;if(i[0].group){var s=_.groupBy(i,"group");i=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return r.a.createElement(l.a,{className:"react-select-container react-select--"+o,classNamePrefix:"react-select",options:i,isClearable:t,placeholder:n,value:c.find((function(e){return e.value==t})),onChange:function(e){return a(e?e.value:null)}})}n.a=function(e){e.block,e.centered;var n=e.children,t=e.defaultValue,l=e.groupId,c=e.label,i=e.placeholder,s=e.select,y=e.size,g=(e.style,e.values),O=e.urlKey,v=Object(p.a)(),j=v.tabGroupChoices,f=v.setTabGroupChoices,N=Object(o.useState)(t),w=N[0],x=N[1];if(null!=l){var C=j[l];null!=C&&C!==w&&x(C)}var T=function(e){x(e),null!=l&&f(l,e)},I=[],k=function(e,n,t){switch(t.keyCode){case d:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}};return Object(o.useEffect)((function(){if("undefined"!=typeof window&&window.location&&O){var e=b.a.parse(window.location.search);e[O]&&x(e[O])}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"margin-bottom--"+(y||"md")},c&&r.a.createElement("div",{className:"margin-vert--sm"},c),g.length>1&&(s?r.a.createElement(h,Object(a.a)({changeSelectedValue:T,handleKeydown:k,placeholder:i,selectedValue:w,size:y,tabRefs:I},e)):r.a.createElement(m,Object(a.a)({changeSelectedValue:T,handleKeydown:k,selectedValue:w,tabRefs:I},e)))),o.Children.toArray(n).filter((function(e){return e.props.value===w}))[0])}},462:function(e,n,t){"use strict";var a=t(0),o=t.n(a);n.a=function(e){return o.a.createElement(o.a.Fragment,null,e.children)}}}]);
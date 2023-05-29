(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{302:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return g}));var n=a(1),o=a(9),l=(a(0),a(458)),r=a(464),c=a(467),i=a(470),s=a(471),b=a(462),p=a(457),u={last_modified_on:"2023-04-23",$schema:"/.meta/.schemas/guides.json",title:"Deploy NodeJS with PostgreSQL",description:"How to deploy a NodeJS application with the PostgreSQL database with Qovery",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","framework: nodejs","language: javascript","database: postgresql"],hide_pagination:!0},d={categories:[{name:"tutorial",title:"Tutorial",description:"Step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Deploy NodeJS with PostgreSQL",description:"How to deploy a NodeJS application with the PostgreSQL database with Qovery",permalink:"/guides/tutorial/deploy-node-js-with-postgresql",readingTime:"7 min read",source:"@site/guides/tutorial/deploy-node-js-with-postgresql.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"framework: nodejs",permalink:"/guides/tags/framework-nodejs"},{label:"language: javascript",permalink:"/guides/tags/language-javascript"},{label:"database: postgresql",permalink:"/guides/tags/database-postgresql"}],title:"Deploy NodeJS with PostgreSQL",truncated:!1,prevItem:{title:"Deploy Laravel with MySQL",permalink:"/guides/tutorial/deploy-laravel-with-mysql"},nextItem:{title:"Deploy Rails with PostgreSQL",permalink:"/guides/tutorial/deploy-rails-with-postgresql"}},m=[{value:"Steps to deploy NodeJS with Qovery",id:"steps-to-deploy-nodejs-with-qovery",children:[{value:"Install Qovery CLI",id:"install-qovery-cli",children:[]},{value:"Sign up",id:"sign-up",children:[]}]},{value:"NodeJS application",id:"nodejs-application",children:[{value:"NodeJS sample application",id:"nodejs-sample-application",children:[]},{value:"Create a new project",id:"create-a-new-project",children:[]},{value:"Create a new environment",id:"create-a-new-environment",children:[]},{value:"Create a new application",id:"create-a-new-application",children:[]},{value:"Select application port",id:"select-application-port",children:[]},{value:"Use Dockerfile",id:"use-dockerfile",children:[]}]},{value:"PostgreSQL",id:"postgresql",children:[{value:"Deploy a PostgreSQL database",id:"deploy-a-postgresql-database",children:[]},{value:"Connect your NodeJS application to PostgreSQL",id:"connect-your-nodejs-application-to-postgresql",children:[]}]},{value:"Deploy your application",id:"deploy-your-application",children:[]},{value:"Trigger a new deployment",id:"trigger-a-new-deployment",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],h={rightToc:m};function g(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This tutorial show you how to deploy your ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org"}),"NodeJS")," application with ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org"}),"PostgreSQL")," database. Let's go!"),Object(l.b)(b.a,{name:"guide",mdxType:"Assumptions"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Your Operating System is macOS / Windows / Linux"),Object(l.b)("li",{parentName:"ul"},"You have a ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com"}),"Github"),", ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://gitlab.com"}),"Gitlab")," or ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://bitbucket.com"}),"Bitbucket")," account"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u27a1\ufe0f. Do you migrate from Heroku to AWS? Read ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/tutorial/migrate-your-application-from-heroku-to-aws/"}),"this tutorial")," \u2b05\ufe0f")),Object(l.b)("h2",{id:"steps-to-deploy-nodejs-with-qovery"},"Steps to deploy NodeJS with Qovery"),Object(l.b)(i.a,{centered:!0,className:"rounded",defaultValue:"web",placeholder:"Select your interface",select:!1,size:null,values:[{group:"Interfaces",label:"Web",value:"web"},{group:"Interfaces",label:"CLI",value:"cli"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"web",mdxType:"TabItem"},Object(l.b)("li",null,Object(l.b)("p",null,"Sign in to the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery web interface"),"."),Object(l.b)("p",{align:"center"},Object(l.b)("a",{href:"https://onboarding.qovery.com/"},Object(l.b)("img",{src:"/img/Qovery_Sign_Up_Page.jpg",alt:"Qovery Sign-up page"}))))),Object(l.b)(s.a,{value:"cli",mdxType:"TabItem"},Object(l.b)("li",null,Object(l.b)("h3",{id:"install-qovery-cli"},"Install Qovery CLI"),Object(l.b)(i.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"},{group:"Platforms",label:"Docker",value:"docker"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"linux",mdxType:"TabItem"},Object(l.b)(i.a,{centered:!0,className:"rounded",defaultValue:"universal",values:[{label:"*nix",value:"universal"},{label:"Arch Linux",value:"arch"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"universal",mdxType:"TabItem"},Object(l.b)("p",null,"To download and install Qovery CLI on any Linux distribution:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ curl -s https://get.qovery.com | bash\n"))),Object(l.b)(s.a,{value:"arch",mdxType:"TabItem"},Object(l.b)("p",null,"Qovery is part of ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://aur.archlinux.org/packages"}),"AUR")," packages, so you can install it with ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Jguer/yay"}),"yay"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ yay qovery-cli\n"))),Object(l.b)(s.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("p",null,"Install the Qovery CLI on Linux manually by downloading the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest release"),", and uncompress its content to a folder into your shell ",Object(l.b)("inlineCode",{parentName:"p"},"PATH"),".")))),Object(l.b)(s.a,{value:"macos",mdxType:"TabItem"},Object(l.b)(i.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Script",value:"script"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"homebrew",mdxType:"TabItem"},Object(l.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(l.b)(s.a,{value:"script",mdxType:"TabItem"},Object(l.b)("p",null,"To download and install Qovery CLI from the command line:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ curl -s https://get.qovery.com | bash\n"))),Object(l.b)(s.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("p",null,"Install the Qovery CLI on Mac OS manually by downloading the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest release"),", and uncompress its content to a folder into your shell ",Object(l.b)("inlineCode",{parentName:"p"},"PATH"),".")))),Object(l.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(l.b)(i.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"scoop",mdxType:"TabItem"},Object(l.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(l.b)(s.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest release"),", and uncompress its content to\n",Object(l.b)("inlineCode",{parentName:"p"},"C:\\Windows"),".")))),Object(l.b)(s.a,{value:"docker",mdxType:"TabItem"},Object(l.b)("p",null,"Install Docker on your local machine and run the following command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Pull and Run the latest Qovery CLI\n$ docker run ghcr.io/qovery/qovery-cli:latest help\n")),Object(l.b)("p",null,"Change ",Object(l.b)("inlineCode",{parentName:"p"},"latest")," by the version you want to use. For example, to use the version 0.58.4, run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ docker run ghcr.io/qovery/qovery-cli:0.58.4 help\n")),Object(l.b)("p",null,"Note: ",Object(l.b)("inlineCode",{parentName:"p"},"ghcr.io")," is the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/pkgs/container/qovery-cli"}),"GitHub Container Registry"),".")))),Object(l.b)("li",null,Object(l.b)("h3",{id:"sign-up"},"Sign up"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(l.b)(p.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"If you are using an environment without access to GUI or a browser, you can use headless authentication instead:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth --headless\n"))),Object(l.b)("p",null,"Your browser window with sign-in options will open."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/github_signup.svg",alt:"Connect Github"})),Object(l.b)("p",null,"Congratulations, you are logged-in.")))),Object(l.b)("h2",{id:"nodejs-application"},"NodeJS application"),Object(l.b)("h3",{id:"nodejs-sample-application"},"NodeJS sample application"),Object(l.b)("p",null,"Get a copy of the sample source code of ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/simple-example-node-with-postgresql"}),"NodeJS sample project")," by forking it."),Object(l.b)("p",null,"To deploy your NodeJS application connected to a ",Object(l.b)("strong",{parentName:"p"},"PostgreSQL"),", you can use our sample code and follow the configuration steps."),Object(l.b)("p",null,"In this example we are using ",Object(l.b)("strong",{parentName:"p"},"PostgreSQL")," ",Object(l.b)("strong",{parentName:"p"},"v11.5"),"."),Object(l.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(l.b)("ol",null,Object(l.b)("li",null,Object(l.b)("h3",{id:"create-a-new-project"},"Create a new project"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/heroku/heroku-2.png",alt:"Migrate from Heroku"}))),Object(l.b)("li",null,Object(l.b)("h3",{id:"create-a-new-environment"},"Create a new environment"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/heroku/heroku-3.png",alt:"Migrate from Heroku"}))),Object(l.b)("li",null,Object(l.b)("h3",{id:"create-a-new-application"},"Create a new application"),Object(l.b)("p",null,"To follow the guide, ",Object(l.b)("a",{href:"urls.sample_node_js_with_postgresql"},"you can fork and use our repository")),Object(l.b)("p",null,"Use the forked repository (and branch ",Object(l.b)("strong",{parentName:"p"},"master"),") while creating the application in the repository field:"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/rust/rust.png",alt:"Migrate from Heroku"}))),Object(l.b)("li",null,Object(l.b)("h3",{id:"select-application-port"},"Select application port"),Object(l.b)("p",null,"After the application is created: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Navigate application settings"),Object(l.b)("li",{parentName:"ul"},"Select ",Object(l.b)("strong",{parentName:"li"},"Port")),Object(l.b)("li",{parentName:"ul"},"Add port ",Object(l.b)("strong",{parentName:"li"}," 3000 "))),Object(l.b)("p",{align:"left"},Object(l.b)("img",{src:"/img/micro/micros-1.png",alt:"Port"}))),Object(l.b)("li",null,Object(l.b)("h3",{id:"use-dockerfile"},"Use Dockerfile"),Object(l.b)("p",null,"In the settings ",Object(l.b)("strong",{parentName:"p"},"General")," section, set ",Object(l.b)("strong",{parentName:"p"},"Build Mode"),' to Dockerfile and set Dockerfile path as "Dockerfile". Then ',Object(l.b)("strong",{parentName:"p"},"save")," your change.")))),Object(l.b)("h2",{id:"postgresql"},"PostgreSQL"),Object(l.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(l.b)("ol",null,Object(l.b)("li",null,Object(l.b)("h3",{id:"deploy-a-postgresql-database"},"Deploy a PostgreSQL database"),Object(l.b)("p",null,"In your environment view, click on ",Object(l.b)("strong",{parentName:"p"},"Add")," and ",Object(l.b)("strong",{parentName:"p"},"Database")," buttons:"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/template-add-db.png",alt:"Template DB NodeJS"})),Object(l.b)("p",null,"In the popup window while adding a database, choose your name, select ",Object(l.b)("strong",{parentName:"p"},"PostgreSQL")," and ",Object(l.b)("strong",{parentName:"p"},"11.5")," version."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/template-db.png",alt:"Template DB"})),Object(l.b)("p",null,"In the end, click on your added database - in the new screen you'll be able to find the ",Object(l.b)("strong",{parentName:"p"},"Deploy")," button:"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/template-deploy-db.png",alt:"Template DB"})),Object(l.b)(p.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"To learn how to add a PostgreSQL database in more details, you can ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/getting-started/create-a-database/"}),"follow this guide"),"."))),Object(l.b)("li",null,Object(l.b)("h3",{id:"connect-your-nodejs-application-to-postgresql"},"Connect your NodeJS application to PostgreSQL"),Object(l.b)("p",null,"Credentials of your PostgreSQL database are available via ",Object(l.b)("strong",{parentName:"p"},"Environment Variables")," and ",Object(l.b)("strong",{parentName:"p"},"Secrets"),". Qovery injects environment vars at the runtime."),Object(l.b)("p",null,"You can learn more about environment variables and secrets ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"here"),"."),Object(l.b)("p",null,"To list all the environment variables available to your NodeJS application, you can open ",Object(l.b)("strong",{parentName:"p"},"Environment Variables")," and ",Object(l.b)("strong",{parentName:"p"},"Secret")," tabs in your application window:"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/secret-2.png",alt:"Secret"})),Object(l.b)(p.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"In the ",Object(l.b)("strong",{parentName:"p"},"Secrets")," section, you'll see all names of injected database secrets, including those for the previously created PostgreSQL database.\nTo connect the NodeJS app to the PostgreSQL database, you need to setup the application to use those secrets."),Object(l.b)("p",null,"All you have to do is to open and edit ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/simple-example-node-with-postgresql/blob/master/app.js"}),"database configuration file")," in your forked repository.\nReplace all the ",Object(l.b)("strong",{parentName:"p"},"QOVERY_DATABASE_XXX")," variables with values you have in your own environment. Those variable keys contain your database ID, this is why you need to update the file."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"TIP: you could also make use of ",Object(l.b)("strong",{parentName:"em"},"Variable Aliases")," to change the name of used environment variables in your NodeJS application. ",Object(l.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/using-qovery/configuration/environment-variable/#alias-environment-variable"}),"Learn more here"),".")))))),Object(l.b)("h2",{id:"deploy-your-application"},"Deploy your application"),Object(l.b)("p",null,"All you have to do now is to navigate to your application and click ",Object(l.b)("strong",{parentName:"p"},"Deploy")," button"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/heroku/heroku-1.png",alt:"Deploy App"})),Object(l.b)("p",null,"That's it. Watch the status and wait till the app is deployed."),Object(l.b)("p",null,"Congratulations! Your environment with ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org"}),"NodeJS")," application and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org"}),"PostgreSQL")," database should be in progress."),Object(l.b)("h2",{id:"trigger-a-new-deployment"},"Trigger a new deployment"),Object(l.b)("p",null,"Now, you can play with the sample NodeJS application and commit & push your changes. Qovery detects your actions and triggers new builds and application deployments. Any change you make will be reflected in your deployed application automatically."),Object(l.b)("h2",{id:"conclusion"},"Conclusion"),Object(l.b)("p",null,"Congratulations! Now, you know how to deploy your NodeJS app with PostgreSQL in just a few steps."),Object(l.b)("p",null,"Do you have any feedback about this tutorial? Let us know what you think on ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Discord"),", and join our wonderful dev community of +5500 devs."),Object(l.b)(r.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}g.isMDXComponent=!0},457:function(e,t,a){"use strict";a(459);var n=a(0),o=a.n(n),l=a(456),r=a.n(l);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,l=e.icon,c=e.type,i=null;switch(c){case"danger":i="alert-triangle";break;case"success":i="check-circle";break;case"warning":i="alert-triangle";break;default:i="info"}return o.a.createElement("div",{className:r()(a,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==l}),role:"alert"},!1!==l&&o.a.createElement("i",{className:r()("feather","icon-"+(l||i))}),t)}},460:function(e,t,a){var n=a(26).f,o=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in o||a(10)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},461:function(e,t,a){"use strict";var n=a(1),o=a(0),l=a.n(o),r=a(39),c=a(465),i=a(20),s=a.n(i);t.a=function(e){var t,a=e.to,i=e.href,b=a||i,p=Object(c.a)(b),u=Object(o.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(b),function(){d&&t&&t.disconnect()}}),[b,d,p]),b&&p?l.a.createElement(r.b,Object(n.a)({},e,{onMouseEnter:function(){u.current||(window.docusaurus.preload(b),u.current=!0)},innerRef:function(e){var a,n;d&&e&&p&&(a=e,n=function(){window.docusaurus.prefetch(b)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:b})):l.a.createElement("a",Object(n.a)({},e,{href:b}))}},462:function(e,t,a){"use strict";a(460);var n=a(0),o=a.n(n),l=a(457);t.a=function(e){var t=e.children,a=e.name;return o.a.createElement(l.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},464:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(461),r=a(456),c=a.n(r);a(133);t.a=function(e){var t=e.children,a=e.className,n=e.badge,r=e.leftIcon,i=e.rightIcon,s=e.size,b=e.target,p=e.to,u=c()("jump-to","jump-to--"+s,a),d=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},r&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+r})),o.a.createElement("div",{className:"jump-to--main"},n?o.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(i||"chevron-right")+" arrow"}))));return b?o.a.createElement("a",{href:p,target:b,className:u},d):o.a.createElement(l.a,{to:p,className:u},d)}},465:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},467:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=(a(456),a(466)),r=a.n(l);a(134);t.a=function(e){var t=e.children,a=e.headingDepth,l=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,i={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+r.a.stringify(i),b=Object(n.useState)(null),p=b[0],u=b[1];return o.a.createElement("div",{className:"steps steps--h"+a},t,!l&&!p&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return u("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},470:function(e,t,a){"use strict";var n=a(1),o=(a(473),a(472),a(52),a(29),a(22),a(21),a(0)),l=a.n(o),r=a(476),c=a(456),i=a.n(c),s=a(466),b=a.n(s),p=a(475),u=37,d=39;function m(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,o=e.className,r=e.handleKeydown,c=e.style,s=e.values,b=e.selectedValue,p=e.tabRefs;return l.a.createElement("div",{className:a?"tabs--centered":null},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",o,{"tabs--block":t}),style:c},s.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===t,className:i()("tab-item",{"tab-item--active":b===t}),key:t,ref:function(e){return p.push(e)},onKeyDown:function(e){return r(p,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,o=e.size,c=e.values,i=c;if(i[0].group){var s=_.groupBy(i,"group");i=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return l.a.createElement(r.a,{className:"react-select-container react-select--"+o,classNamePrefix:"react-select",options:i,isClearable:a,placeholder:t,value:c.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,r=e.groupId,c=e.label,i=e.placeholder,s=e.select,g=e.size,j=(e.style,e.values),y=e.urlKey,O=Object(p.a)(),v=O.tabGroupChoices,f=O.setTabGroupChoices,w=Object(o.useState)(a),N=w[0],S=w[1];if(null!=r){var k=v[r];null!=k&&k!==N&&S(k)}var T=function(e){S(e),null!=r&&f(r,e)},I=[],Q=function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(o.useEffect)((function(){if("undefined"!=typeof window&&window.location&&y){var e=b.a.parse(window.location.search);e[y]&&S(e[y])}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"margin-bottom--"+(g||"md")},c&&l.a.createElement("div",{className:"margin-vert--sm"},c),j.length>1&&(s?l.a.createElement(h,Object(n.a)({changeSelectedValue:T,handleKeydown:Q,placeholder:i,selectedValue:N,size:g,tabRefs:I},e)):l.a.createElement(m,Object(n.a)({changeSelectedValue:T,handleKeydown:Q,selectedValue:N,tabRefs:I},e)))),o.Children.toArray(t).filter((function(e){return e.props.value===N}))[0])}},471:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement(o.a.Fragment,null,e.children)}}}]);
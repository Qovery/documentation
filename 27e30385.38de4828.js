(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{202:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return m}));var n=a(1),o=a(9),l=(a(0),a(448)),r=a(460),i=a(461),c=a(447),s=(a(452),a(453)),b={last_modified_on:"2023-03-01",$schema:"/.meta/.schemas/guides.json",title:"How to create and deploy a Discord bot in Python",description:"This tutorial will show you how to create and host a Discord bot made with Python.",author_github:"https://github.com/Aggis15",tags:["type: tutorial","framework: discordpy"],hide_pagination:!0},u={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How to create and deploy a Discord bot in Python",description:"This tutorial will show you how to create and host a Discord bot made with Python.",permalink:"/guides/tutorial/create-and-deploy-python-discord-bot",readingTime:"8 min read",source:"@site/guides/tutorial/create-and-deploy-python-discord-bot.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"framework: discordpy",permalink:"/guides/tags/framework-discordpy"}],title:"How to create and deploy a Discord bot in Python",truncated:!1,prevItem:{title:"How to create an RDS instance through the AWS console",permalink:"/guides/tutorial/how-to-create-an-rds-instance-through-aws-console"},nextItem:{title:"How to deploy a full-stack application composed of Hasura, PostgreSQL and Angular",permalink:"/guides/tutorial/deploy-fullstack-application-composed-of-hasura-postgresql-angular"}},p=[{value:"Installing the required libraries",id:"installing-the-required-libraries",children:[]},{value:"Get your Bot token",id:"get-your-bot-token",children:[]},{value:"Write your discord bot",id:"write-your-discord-bot",children:[{value:"Write a Dockerfile",id:"write-a-dockerfile",children:[]},{value:"Final Steps",id:"final-steps",children:[]}]},{value:"Hosting your bot on AWS with Qovery",id:"hosting-your-bot-on-aws-with-qovery",children:[{value:"Install Qovery CLI",id:"install-qovery-cli",children:[]},{value:"Sign up",id:"sign-up",children:[]}]}],d={rightToc:p};function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(c.a,{type:"success",mdxType:"Alert"},Object(l.b)("p",null,"This tutorial was created by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Aggis15"}),"Aggis")," - Active Qovery contributor")),Object(l.b)("p",null,"Discord bots are rather famous lately for their flexibility and ease to make simple ones, provided you have the needed knowledge. In this guide, you'll learn how to create a very simple Discord bot in Python that will respond to messages and how you can host it your cloud of choice with Qovery."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Discord.py is a famous Python package you can use for creating complex bots made in Python that can do everything Discord's API supports. It's flexible and easy to use.")),Object(l.b)("h2",{id:"installing-the-required-libraries"},"Installing the required libraries"),Object(l.b)(c.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"If you already have Discord.py and python-dotenv installed, you can move on to the Write your Discord bot section.")),Object(l.b)("p",null,"Start by opening a command prompt, then type the following command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"python3 -m pip install -U discord.py python-dotenv\n")),Object(l.b)("p",null,"This will fetch the latest version of both packages from PyPI. If you run into any issues, make sure pip is installed and set up correctly. You can follow the pip docs ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://pip.pypa.io/en/stable/installing/"}),"here")," to install it correctly."),Object(l.b)("p",null,"Now you are ready to write your Discord bot!"),Object(l.b)("h2",{id:"get-your-bot-token"},"Get your Bot token"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Head back to the browser, and go to the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.discord.com/developers"}),"Discord developer portal"),". Here you are going to log in with your account, and click on New Application on the top right. From there, give your bot a name. It can be anything you like.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Now, it should automatically redirect you to your bot page. Click on Bot, and then Add Bot. Click, Yes, do it.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"From here, you're gonna need the token, so go ahead and click on copy, and keep it somewhere for now until we use it.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Go back to the OAuth2 tab, and click on Bot, then below, check all the permissions you want to have. For the purpose of the tutorial, I just clicked on Administrator, which gives the bot every permission.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Copy the link that comes up, and paste it in your browser. Discord will ask you which server you want to add your bot, so choose the one you want. After that, your bot should be in your server. It will be offline and that's okay for now."))),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/discordpy-tutorial.png",alt:"Discord Portal"})),Object(l.b)("h2",{id:"write-your-discord-bot"},"Write your discord bot"),Object(l.b)(c.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"If you want to know more about the discordpy library and the many functions it has, you can take a look at their ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://discordpy.readthedocs.io/en/stable/"}),"documentation"),".")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Start by making a new folder for your bot files to reside. It can be anywhere you like.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Open up your IDE of your choosing and navigate to the directory you made.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"From there, create a new python file. You can name it whatever you like, just make it easy to type, like ",Object(l.b)("inlineCode",{parentName:"p"},"main.py"),".")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"You're also going to create a new file called ",Object(l.b)("inlineCode",{parentName:"p"},".env"),". There we are going to store all our sensitive values like our bot token.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Now we get to the coding part. Start by importing all the needed libraries, it's as simple as:"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"import os\nimport discord\nfrom dotenv import load_dotenv\n")),Object(l.b)("ol",{start:6},Object(l.b)("li",{parentName:"ol"},"Initialize the dotenv library by adding the following line below:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"load_dotenv()\n")),Object(l.b)("ol",{start:7},Object(l.b)("li",{parentName:"ol"},"Now go back to the .env file and create a new variable called token and paste your token:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"token=your_token_here\n")),Object(l.b)("ol",{start:8},Object(l.b)("li",{parentName:"ol"},"After that, you're ready to import the value from the file. Go ahead and add this line to your code:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'token = os.getenv("token")\n')),Object(l.b)("ol",{start:9},Object(l.b)("li",{parentName:"ol"},"Now we get to actually code the bot. Start by initializing the client. To do that, it's as simple as:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"client = discord.Client()\n")),Object(l.b)("ol",{start:10},Object(l.b)("li",{parentName:"ol"},"Then, we're going to be adding a very simple function where the client will say something in the console when the bot is ready. To do this, you can add this function to your code:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"@client.event\nasync def on_ready():\n# Print this when the bot starts up for the first time.\n    print(f'{client.user} has connected to Discord!')\n")),Object(l.b)("ol",{start:11},Object(l.b)("li",{parentName:"ol"},"Now, we can make a simple function where the bot will respond to someone when they say hello. The following code is responsible for that:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"@client.event\nasync def on_message(message):\n# Ignore messages from the bot itself so that there's no conflict.\n    if message.author == client.user:\n        return\n# Respond to hello.\n    if message.content == 'hello':\n        await message.channel.send(\"Hi there!\")\n")),Object(l.b)("ol",{start:12},Object(l.b)("li",{parentName:"ol"},"Lastly, we're going to need to make the bot run when we run our file. Add this line to your code:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"client.run(token)\n")),Object(l.b)("p",null,"The finalized code should look something like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'import os\nimport discord\nfrom dotenv import load_dotenv\n\nload_dotenv()\n\ntoken = os.getenv("token")\n\nclient = discord.Client()\n\n@client.event\nasync def on_ready():\n    print(f"{client.user} has connected to Discord!")\n\n@client.event\nasync def on_message(message):\n    if message.author == client.user:\n        return\n\n    if message.content == \'hello\':\n        await message.channel.send("Hi there!")\n\nclient.run(token)\n')),Object(l.b)("h3",{id:"write-a-dockerfile"},"Write a Dockerfile"),Object(l.b)("p",null,"In order to host your bot to Qovery, you're going to need a very simple Dockerfile. This one should be sufficient enough for this simple application."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Dockerfile"}),"FROM python:3\n\nWORKDIR /app\n\nCOPY . .\n\nRUN python3 -m pip install -U discord.py python-dotenv\n\nCMD python -u ./main.py\n")),Object(l.b)("p",null,"For more complex applications and a more in depth look in Dockerfiles, you can check out ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.qovery.com/guides/tutorial/how-to-write-a-dockerfile/"}),"this")," tutorial."),Object(l.b)("h3",{id:"final-steps"},"Final Steps"),Object(l.b)("p",null,"All that's left now is adding all your files (except the ",Object(l.b)("inlineCode",{parentName:"p"},".env")," file) in your git repo. I'm not going to go in depth in this tutorial since that's not the purpose of this tutorial, but there are plenty of guides online."),Object(l.b)("h2",{id:"hosting-your-bot-on-aws-with-qovery"},"Hosting your bot on AWS with Qovery"),Object(l.b)(c.a,{type:"warning",mdxType:"Alert"},Object(l.b)("p",null,"Qovery is not a hosting platform, it's a deployment platform. This means that you will need to have a hosting platform (like AWS) to host your bot. Qovery will deploy your bot to your hosting platform of choice.")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Sign up to Qovery.")),Object(l.b)(r.a,{centered:!0,className:"rounded",defaultValue:"web",placeholder:"Select your interface",select:!1,size:null,values:[{group:"Interfaces",label:"Web",value:"web"},{group:"Interfaces",label:"CLI",value:"cli"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"web",mdxType:"TabItem"},Object(l.b)("li",null,Object(l.b)("p",null,"Sign in to the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery web interface"),"."),Object(l.b)("p",{align:"center"},Object(l.b)("a",{href:"https://onboarding.qovery.com/"},Object(l.b)("img",{src:"/img/Qovery_Sign_Up_Page.jpg",alt:"Qovery Sign-up page"}))))),Object(l.b)(i.a,{value:"cli",mdxType:"TabItem"},Object(l.b)("li",null,Object(l.b)("h3",{id:"install-qovery-cli"},"Install Qovery CLI"),Object(l.b)(r.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"linux",mdxType:"TabItem"},Object(l.b)(r.a,{centered:!0,className:"rounded",defaultValue:"universal",values:[{label:"*nix",value:"universal"},{label:"Arch Linux",value:"arch"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"universal",mdxType:"TabItem"},Object(l.b)("p",null,"To download and install Qovery CLI on any Linux distribution:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ curl -s https://get.qovery.com | bash\n"))),Object(l.b)(i.a,{value:"arch",mdxType:"TabItem"},Object(l.b)("p",null,"Qovery is part of ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://aur.archlinux.org/packages"}),"AUR")," packages, so you can install it with ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Jguer/yay"}),"yay"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ yay qovery-cli\n"))),Object(l.b)(i.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("p",null,"Install the Qovery CLI on Linux manually by downloading the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to a folder into your shell ",Object(l.b)("inlineCode",{parentName:"p"},"PATH"),".")))),Object(l.b)(i.a,{value:"macos",mdxType:"TabItem"},Object(l.b)(r.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Script",value:"script"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"homebrew",mdxType:"TabItem"},Object(l.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(l.b)(i.a,{value:"script",mdxType:"TabItem"},Object(l.b)("p",null,"To download and install Qovery CLI from the command line:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ curl -s https://get.qovery.com | bash\n"))),Object(l.b)(i.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("p",null,"Install the Qovery CLI on Mac OS manually by downloading the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to a folder into your shell ",Object(l.b)("inlineCode",{parentName:"p"},"PATH"),".")))),Object(l.b)(i.a,{value:"windows",mdxType:"TabItem"},Object(l.b)(r.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"scoop",mdxType:"TabItem"},Object(l.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(l.b)(i.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to\n",Object(l.b)("inlineCode",{parentName:"p"},"C:\\Windows"),".")))))),Object(l.b)("li",null,Object(l.b)("h3",{id:"sign-up"},"Sign up"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(l.b)(c.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"If you are using an environment without access to GUI or a browser, you can use headless authentication instead:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth --headless\n"))),Object(l.b)("p",null,"Your browser window with sign-in options will open."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/github_signup.svg",alt:"Connect Github"})),Object(l.b)("p",null,"Congratulations, you are logged-in.")))),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Create a new project, and choose your git repo.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Go to your app, select Environment Variables, then add your token. This will make sure the token is injected during runtime so the bot can start without any issues.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Go back to your app, then settings, and select Dockerfile as the build mode. Qovery will automatically choose the Dockerfile.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click deploy and your bot should be deployed in the next few minutes."))),Object(l.b)("p",null,"Your bot is now online!"),Object(l.b)("p",null,"Should you run into any issues, feel free to join the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Qovery Discord server")," and ask for help there!"),Object(l.b)(s.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}m.isMDXComponent=!0},447:function(e,t,a){"use strict";a(451);var n=a(0),o=a.n(n),l=a(446),r=a.n(l);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,l=e.icon,i=e.type,c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return o.a.createElement("div",{className:r()(a,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==l}),role:"alert"},!1!==l&&o.a.createElement("i",{className:r()("feather","icon-"+(l||c))}),t)}},449:function(e,t,a){"use strict";var n=a(1),o=a(0),l=a.n(o),r=a(39),i=a(454),c=a(20),s=a.n(c);t.a=function(e){var t,a=e.to,c=e.href,b=a||c,u=Object(i.a)(b),p=Object(o.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!d&&u&&window.docusaurus.prefetch(b),function(){d&&t&&t.disconnect()}}),[b,d,u]),b&&u?l.a.createElement(r.b,Object(n.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(b),p.current=!0)},innerRef:function(e){var a,n;d&&e&&u&&(a=e,n=function(){window.docusaurus.prefetch(b)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:b})):l.a.createElement("a",Object(n.a)({},e,{href:b}))}},450:function(e,t,a){var n=a(26).f,o=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in o||a(10)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},452:function(e,t,a){"use strict";a(450);var n=a(0),o=a.n(n),l=a(447);t.a=function(e){var t=e.children,a=e.name;return o.a.createElement(l.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},453:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(449),r=a(446),i=a.n(r);a(133);t.a=function(e){var t=e.children,a=e.className,n=e.badge,r=e.leftIcon,c=e.rightIcon,s=e.size,b=e.target,u=e.to,p=i()("jump-to","jump-to--"+s,a),d=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},r&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+r})),o.a.createElement("div",{className:"jump-to--main"},n?o.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return b?o.a.createElement("a",{href:u,target:b,className:p},d):o.a.createElement(l.a,{to:u,className:p},d)}},454:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},460:function(e,t,a){"use strict";var n=a(1),o=(a(463),a(462),a(52),a(29),a(22),a(21),a(0)),l=a.n(o),r=a(465),i=a(446),c=a.n(i),s=a(456),b=a.n(s),u=a(464),p=37,d=39;function m(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,o=e.className,r=e.handleKeydown,i=e.style,s=e.values,b=e.selectedValue,u=e.tabRefs;return l.a.createElement("div",{className:a?"tabs--centered":null},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",o,{"tabs--block":t}),style:i},s.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===t,className:c()("tab-item",{"tab-item--active":b===t}),key:t,ref:function(e){return u.push(e)},onKeyDown:function(e){return r(u,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,o=e.size,i=e.values,c=i;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return l.a.createElement(r.a,{className:"react-select-container react-select--"+o,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:i.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,r=e.groupId,i=e.label,c=e.placeholder,s=e.select,y=e.size,g=(e.style,e.values),j=e.urlKey,O=Object(u.a)(),f=O.tabGroupChoices,v=O.setTabGroupChoices,w=Object(o.useState)(a),N=w[0],k=w[1];if(null!=r){var T=f[r];null!=T&&T!==N&&k(T)}var I=function(e){k(e),null!=r&&v(r,e)},x=[],C=function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(o.useEffect)((function(){if("undefined"!=typeof window&&window.location&&j){var e=b.a.parse(window.location.search);e[j]&&k(e[j])}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"margin-bottom--"+(y||"md")},i&&l.a.createElement("div",{className:"margin-vert--sm"},i),g.length>1&&(s?l.a.createElement(h,Object(n.a)({changeSelectedValue:I,handleKeydown:C,placeholder:c,selectedValue:N,size:y,tabRefs:x},e)):l.a.createElement(m,Object(n.a)({changeSelectedValue:I,handleKeydown:C,selectedValue:N,tabRefs:x},e)))),o.Children.toArray(t).filter((function(e){return e.props.value===N}))[0])}},461:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement(o.a.Fragment,null,e.children)}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{243:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return m}));var n=a(1),l=a(9),r=(a(0),a(441)),o=a(453),c=a(454),i=a(440),s=(a(445),a(446)),u={last_modified_on:"2022-12-21",$schema:"/.meta/.schemas/guides.json",title:"How to deploy NuxtJS",description:"This tutorial show you how to deploy NuxtJS in a few seconds",author_github:"https://github.com/Stun3R",tags:["type: tutorial","framework: nuxtjs"],hide_pagination:!0},b={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How to deploy NuxtJS",description:"This tutorial show you how to deploy NuxtJS in a few seconds",permalink:"/guides/tutorial/how-to-deploy-nuxtjs",readingTime:"6 min read",source:"@site/guides/tutorial/how-to-deploy-nuxtjs.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"framework: nuxtjs",permalink:"/guides/tags/framework-nuxtjs"}],title:"How to deploy NuxtJS",truncated:!1,prevItem:{title:"How to deploy a Rust REST API application on AWS with ease",permalink:"/guides/tutorial/how-to-deploy-a-rust-rest-api-application-on-aws-with-ease"},nextItem:{title:"How to deploy Strapi with PostgreSQL",permalink:"/guides/tutorial/how-to-deploy-strapi-with-postgresql"}},p=[{value:"Add a Dockerfile (optional)",id:"add-a-dockerfile-optional",children:[]},{value:"Deploy with Qovery",id:"deploy-with-qovery",children:[{value:"Sign up",id:"sign-up",children:[]},{value:"Install Qovery CLI",id:"install-qovery-cli",children:[]},{value:"Sign up",id:"sign-up-1",children:[]}]}],d={rightToc:p};function m(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i.a,{type:"success",mdxType:"Alert"},Object(r.b)("p",null,"This tutorial has been created by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Stun3R"}),"Stun3R")," - CTO of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://shelt.in"}),"Shelt.in")," and active Qovery contributor.")),Object(r.b)("p",null,"In this tutorial, you'll see how to initialize a NuxtJS application in the environment setup by Qovery."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Nuxt.js is a free and open source web application framework based on Vue.js, Node.js, Webpack and Babel.js. Nuxt is inspired by Next.js, which is a framework of similar purpose, based on React.js - Wikipedia")),Object(r.b)("p",null,"Before start you have to choose between ",Object(r.b)("strong",{parentName:"p"},"Static Hosting")," or ",Object(r.b)("strong",{parentName:"p"},"Server Hosting"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Static Hosting"),": Statically render your Nuxt.js application and get all of the benefits of a universal app without a server. It will generate a static site."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Server Hosting"),": Good choice when you need an hosting that requires a server and is intended for SSR applications.")),Object(r.b)("p",null,"Check the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://nuxtjs.org/docs/2.x/features/deployment-targets"}),"nuxtjs documentation")," for more informations"),Object(r.b)("h1",{id:"initialize-a-nuxtjs-project"},"Initialize a NuxtJS project"),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"If you have a NuxtJS app ready to be deployed, go to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#deploy-your-nuxtjs-app"}),"deployment section"),".")),Object(r.b)(o.a,{centered:!0,className:"rounded",defaultValue:"server",placeholder:"Select your interface",select:!1,size:null,values:[{group:"Interfaces",label:"Server Hosting",value:"server"},{group:"Interfaces",label:"Static Hosting",value:"static"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"server",mdxType:"TabItem"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to this ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Stun3R/qovery-nuxt"}),"NuxtJS repository")," and select ",Object(r.b)("inlineCode",{parentName:"li"},"Use this template"),"."),Object(r.b)("li",{parentName:"ol"},"Initialize your cloned NuxtJS project by running:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn create nuxt-app nuxt-app\n")),Object(r.b)("p",null,"or"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npx create-nuxt-app nuxt-app\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Choose all the features you want to have in your NuxtJS app.")),Object(r.b)(i.a,{type:"warn",mdxType:"Alert"},Object(r.b)("p",null,"Choose ",Object(r.b)("inlineCode",{parentName:"p"},"Server (Node.js hosting)")," for the ",Object(r.b)("strong",{parentName:"p"},"Deployment target")," and ",Object(r.b)("inlineCode",{parentName:"p"},"None")," for the ",Object(r.b)("strong",{parentName:"p"},"Version control system"))),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Try to run your project in local:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn develop\n")),Object(r.b)("p",null,"or"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm run develop\n")),Object(r.b)("p",null,"Now, you are ready to deploy it \ud83d\udcaa")),Object(r.b)(c.a,{value:"static",mdxType:"TabItem"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to this ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Stun3R/qovery-nuxt-static"}),"NuxtJS repository")," and select ",Object(r.b)("inlineCode",{parentName:"li"},"Use this template"),"."),Object(r.b)("li",{parentName:"ol"},"Initialize your cloned NuxtJS project by running:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn create nuxt-app nuxt-app\n")),Object(r.b)("p",null,"or"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npx create-nuxt-app nuxt-app\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Choose all the features you want to have in your NuxtJS app.")),Object(r.b)(i.a,{type:"warn",mdxType:"Alert"},Object(r.b)("p",null,"Choose ",Object(r.b)("inlineCode",{parentName:"p"},"Static (Static/Jamstack hosting)")," for the ",Object(r.b)("strong",{parentName:"p"},"Deployment target")," and ",Object(r.b)("inlineCode",{parentName:"p"},"None")," for the ",Object(r.b)("strong",{parentName:"p"},"Version control system"))),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Try to run your project in local:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn develop\n")),Object(r.b)("p",null,"or"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm run develop\n")),Object(r.b)("p",null,"Now, you are ready to deploy it \ud83d\udcaa"))),Object(r.b)("h1",{id:"deploy-your-nuxtjs-app"},"Deploy your NuxtJS app"),Object(r.b)("h2",{id:"add-a-dockerfile-optional"},"Add a Dockerfile (optional)"),Object(r.b)("p",null,"To deploy your app with Qovery, you can provide your own Dockerfile. However, for NodeJS app, the Dockerfile is optional. It's up to you to decide if you want to provide one or not. Here is a working Dockerfile example."),Object(r.b)(o.a,{centered:!0,className:"rounded",defaultValue:"server",placeholder:"Select your interface",select:!1,size:null,values:[{group:"Interfaces",label:"Server Hosting",value:"server"},{group:"Interfaces",label:"Static Hosting",value:"static"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"server",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Dockerfile"}),'FROM node:14-alpine\n\nRUN mkdir -p /usr/src/nuxt-app\nWORKDIR /usr/src/nuxt-app\n\nRUN apk update && apk upgrade\n\nCOPY ./nuxt-app /usr/src/nuxt-app/\nRUN yarn install --silent\n\nRUN yarn build\n\nEXPOSE 3000\n\nENV NUXT_HOST=0.0.0.0\nENV NUXT_PORT=3000\n\n# start the app\nCMD [ "yarn", "start" ]\n'))),Object(r.b)(c.a,{value:"static",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Dockerfile"}),'### STAGE 1: Build ###\nFROM node:14-alpine as build\n\nRUN mkdir -p /usr/src/nuxt-app\nWORKDIR /usr/src/nuxt-app\n\nRUN apk update && apk upgrade\n\nCOPY ./nuxt-app /usr/src/nuxt-app\nRUN yarn install --silent\n\nRUN yarn generate\n\n### STAGE 2: NGINX ###\nFROM nginx:stable-alpine\n\nCOPY --from=build /usr/src/nuxt-app/dist /usr/share/nginx/html\n\nEXPOSE 80\n\nCMD ["nginx", "-g", "daemon off;"]\n')))),Object(r.b)("h2",{id:"deploy-with-qovery"},"Deploy with Qovery"),Object(r.b)("h3",{id:"sign-up"},"Sign up"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"To Deploy with Qovery you need to create an account.")),Object(r.b)(o.a,{centered:!0,className:"rounded",defaultValue:"web",placeholder:"Select your interface",select:!1,size:null,values:[{group:"Interfaces",label:"Web",value:"web"},{group:"Interfaces",label:"CLI",value:"cli"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"web",mdxType:"TabItem"},Object(r.b)("li",null,Object(r.b)("p",null,"Sign in to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery web interface"),"."),Object(r.b)("p",{align:"center"},Object(r.b)("a",{href:"https://onboarding.qovery.com/"},Object(r.b)("img",{src:"/img/Qovery_Sign_Up_Page.jpg",alt:"Qovery Sign-up page"}))))),Object(r.b)(c.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("li",null,Object(r.b)("h3",{id:"install-qovery-cli"},"Install Qovery CLI"),Object(r.b)(o.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"linux",mdxType:"TabItem"},Object(r.b)(o.a,{centered:!0,className:"rounded",defaultValue:"universal",values:[{label:"*nix",value:"universal"},{label:"Arch Linux",value:"arch"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"universal",mdxType:"TabItem"},Object(r.b)("p",null,"To download and install Qovery CLI on any Linux distribution:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ curl -s https://get.qovery.com | bash\n"))),Object(r.b)(c.a,{value:"arch",mdxType:"TabItem"},Object(r.b)("p",null,"Qovery is part of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://aur.archlinux.org/packages"}),"AUR")," packages, so you can install it with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Jguer/yay"}),"yay"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ yay qovery-cli\n"))),Object(r.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(r.b)("p",null,"Install the Qovery CLI on Linux manually by downloading the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to a folder into your shell ",Object(r.b)("inlineCode",{parentName:"p"},"PATH"),".")))),Object(r.b)(c.a,{value:"macos",mdxType:"TabItem"},Object(r.b)(o.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Script",value:"script"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"homebrew",mdxType:"TabItem"},Object(r.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(r.b)(c.a,{value:"script",mdxType:"TabItem"},Object(r.b)("p",null,"To download and install Qovery CLI from the command line:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ curl -s https://get.qovery.com | bash\n"))),Object(r.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(r.b)("p",null,"Install the Qovery CLI on Mac OS manually by downloading the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to a folder into your shell ",Object(r.b)("inlineCode",{parentName:"p"},"PATH"),".")))),Object(r.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(r.b)(o.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"scoop",mdxType:"TabItem"},Object(r.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(r.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(r.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to\n",Object(r.b)("inlineCode",{parentName:"p"},"C:\\Windows"),".")))))),Object(r.b)("li",null,Object(r.b)("h3",{id:"sign-up-1"},"Sign up"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"If you are using an environment without access to GUI or a browser, you can use headless authentication instead:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth --headless\n"))),Object(r.b)("p",null,"Your browser window with sign-in options will open."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/github_signup.svg",alt:"Connect Github"})),Object(r.b)("p",null,"Congratulations, you are logged-in.")))),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Create a project."),Object(r.b)("li",{parentName:"ol"},"Select your Git repository."),Object(r.b)("li",{parentName:"ol"},"Click on ",Object(r.b)("strong",{parentName:"li"},"deploy"))),Object(r.b)("p",null,"Tada, your NuxtJS app is deployed and fully operational."),Object(r.b)("h1",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"You can now use your NuxtJS app online and configure your ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/getting-started/setting-custom-domain/"}),"custom domain"),"."),Object(r.b)("p",null,"Happy coding."),Object(r.b)(s.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}m.isMDXComponent=!0},440:function(e,t,a){"use strict";a(443);var n=a(0),l=a.n(n),r=a(439),o=a.n(r);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,r=e.icon,c=e.type,i=null;switch(c){case"danger":i="alert-triangle";break;case"success":i="check-circle";break;case"warning":i="alert-triangle";break;default:i="info"}return l.a.createElement("div",{className:o()(a,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==r}),role:"alert"},!1!==r&&l.a.createElement("i",{className:o()("feather","icon-"+(r||i))}),t)}},442:function(e,t,a){"use strict";var n=a(1),l=a(0),r=a.n(l),o=a(39),c=a(447),i=a(20),s=a.n(i);t.a=function(e){var t,a=e.to,i=e.href,u=a||i,b=Object(c.a)(u),p=Object(l.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(l.useEffect)((function(){return!d&&b&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,b]),u&&b?r.a.createElement(o.b,Object(n.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(u),p.current=!0)},innerRef:function(e){var a,n;d&&e&&b&&(a=e,n=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:u})):r.a.createElement("a",Object(n.a)({},e,{href:u}))}},444:function(e,t,a){var n=a(26).f,l=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in l||a(10)&&n(l,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},445:function(e,t,a){"use strict";a(444);var n=a(0),l=a.n(n),r=a(440);t.a=function(e){var t=e.children,a=e.name;return l.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},l.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},446:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(442),o=a(439),c=a.n(o);a(133);t.a=function(e){var t=e.children,a=e.className,n=e.badge,o=e.leftIcon,i=e.rightIcon,s=e.size,u=e.target,b=e.to,p=c()("jump-to","jump-to--"+s,a),d=l.a.createElement("div",{className:"jump-to--inner"},l.a.createElement("div",{className:"jump-to--inner-2"},o&&l.a.createElement("div",{className:"jump-to--left"},l.a.createElement("i",{className:"feather icon-"+o})),l.a.createElement("div",{className:"jump-to--main"},n?l.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),l.a.createElement("div",{className:"jump-to--right"},l.a.createElement("i",{className:"feather icon-"+(i||"chevron-right")+" arrow"}))));return u?l.a.createElement("a",{href:b,target:u,className:p},d):l.a.createElement(r.a,{to:b,className:p},d)}},447:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},453:function(e,t,a){"use strict";var n=a(1),l=(a(456),a(455),a(52),a(29),a(22),a(21),a(0)),r=a.n(l),o=a(458),c=a(439),i=a.n(c),s=a(449),u=a.n(s),b=a(457),p=37,d=39;function m(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,l=e.className,o=e.handleKeydown,c=e.style,s=e.values,u=e.selectedValue,b=e.tabRefs;return r.a.createElement("div",{className:a?"tabs--centered":null},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",l,{"tabs--block":t}),style:c},s.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:i()("tab-item",{"tab-item--active":u===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return o(b,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function j(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,l=e.size,c=e.values,i=c;if(i[0].group){var s=_.groupBy(i,"group");i=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return r.a.createElement(o.a,{className:"react-select-container react-select--"+l,classNamePrefix:"react-select",options:i,isClearable:a,placeholder:t,value:c.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,o=e.groupId,c=e.label,i=e.placeholder,s=e.select,O=e.size,h=(e.style,e.values),y=e.urlKey,g=Object(b.a)(),f=g.tabGroupChoices,v=g.setTabGroupChoices,N=Object(l.useState)(a),w=N[0],x=N[1];if(null!=o){var T=f[o];null!=T&&T!==w&&x(T)}var S=function(e){x(e),null!=o&&v(o,e)},I=[],k=function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(l.useEffect)((function(){if("undefined"!=typeof window&&window.location&&y){var e=u.a.parse(window.location.search);e[y]&&x(e[y])}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"margin-bottom--"+(O||"md")},c&&r.a.createElement("div",{className:"margin-vert--sm"},c),h.length>1&&(s?r.a.createElement(j,Object(n.a)({changeSelectedValue:S,handleKeydown:k,placeholder:i,selectedValue:w,size:O,tabRefs:I},e)):r.a.createElement(m,Object(n.a)({changeSelectedValue:S,handleKeydown:k,selectedValue:w,tabRefs:I},e)))),l.Children.toArray(t).filter((function(e){return e.props.value===w}))[0])}},454:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement(l.a.Fragment,null,e.children)}}}]);
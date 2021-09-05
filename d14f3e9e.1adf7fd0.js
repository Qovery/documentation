(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{314:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return h}));var n=a(1),l=a(9),o=(a(0),a(355)),r=a(360),i=a(364),c=a(367),s=a(368),b=a(359),u=a(354),p={last_modified_on:"2021-09-04",$schema:"/.meta/.schemas/guides.json",title:"Deploy Rails with PostgreSQL",description:"How to deploy a Rails application with the PostgreSQL database with Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial","framework: rails","language: ruby","database: postgresql"],hide_pagination:!0},d={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Deploy Rails with PostgreSQL",description:"How to deploy a Rails application with the PostgreSQL database with Qovery",permalink:"/guides/tutorial/deploy-rails-with-postgresql",readingTime:"6 min read",source:"@site/guides/tutorial/deploy-rails-with-postgresql.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"framework: rails",permalink:"/guides/tags/framework-rails"},{label:"language: ruby",permalink:"/guides/tags/language-ruby"},{label:"database: postgresql",permalink:"/guides/tags/database-postgresql"}],title:"Deploy Rails with PostgreSQL",truncated:!1,prevItem:{title:"Deploy on your Scaleway account",permalink:"/guides/advanced/guide-scaleway"},nextItem:{title:"Deploy Spring Boot with PostgreSQL",permalink:"/guides/tutorial/deploy-spring-boot-with-postgresql"}},m=[{value:"Steps to deploy Rails with Qovery",id:"steps-to-deploy-rails-with-qovery",children:[{value:"Install Qovery CLI",id:"install-qovery-cli",children:[]},{value:"Sign up",id:"sign-up",children:[]}]},{value:"Rails application",id:"rails-application",children:[{value:"Rails sample application",id:"rails-sample-application",children:[]},{value:"Create a new project",id:"create-a-new-project",children:[]},{value:"Create a new environment",id:"create-a-new-environment",children:[]},{value:"Create a new application",id:"create-a-new-application",children:[]},{value:"Select application port",id:"select-application-port",children:[]},{value:"Use Dockerfile",id:"use-dockerfile",children:[]}]},{value:"PostgreSQL",id:"postgresql",children:[{value:"Deploy a PostgreSQL database",id:"deploy-a-postgresql-database",children:[]},{value:"Connect your Rails application to PostgreSQL",id:"connect-your-rails-application-to-postgresql",children:[]}]},{value:"Deploy your application",id:"deploy-your-application",children:[]},{value:"Trigger a new deployment",id:"trigger-a-new-deployment",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],g={rightToc:m};function h(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This tutorial show you how to deploy your ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://rubyonrails.org/"}),"Rails")," application with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org"}),"PostgreSQL")," database. Let's go!"),Object(o.b)(b.a,{name:"guide",mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Your Operating System is macOS / Windows / Linux"),Object(o.b)("li",{parentName:"ul"},"You have a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com"}),"Github")," or ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://gitlab.com"}),"Gitlab")," account"))),Object(o.b)("h2",{id:"steps-to-deploy-rails-with-qovery"},"Steps to deploy Rails with Qovery"),Object(o.b)(c.a,{centered:!0,className:"rounded",defaultValue:"web",placeholder:"Select your interface",select:!1,size:null,values:[{group:"Interfaces",label:"Web",value:"web"},{group:"Interfaces",label:"CLI",value:"cli"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"web",mdxType:"TabItem"},Object(o.b)("li",null,Object(o.b)("p",null,"Sign in to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery web interface"),"."),Object(o.b)("p",{align:"center"},Object(o.b)("a",{href:"https://start.qovery.com"},Object(o.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"}))))),Object(o.b)(s.a,{value:"cli",mdxType:"TabItem"},Object(o.b)("li",null,Object(o.b)("h3",{id:"install-qovery-cli"},"Install Qovery CLI"),Object(o.b)(c.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"linux",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Download and install Qovery CLI on every Linux distribution\n$ curl -s https://get.qovery.com | sudo bash\n"))),Object(o.b)(s.a,{value:"macos",mdxType:"TabItem"},Object(o.b)(c.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"homebrew",mdxType:"TabItem"},Object(o.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(o.b)(s.a,{value:"manual",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Install the Qovery CLI on MacOS manually\n$ curl -s https://get.qovery.com | bash\n"))))),Object(o.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(o.b)(c.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"scoop",mdxType:"TabItem"},Object(o.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(o.b)(s.a,{value:"manual",mdxType:"TabItem"},Object(o.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to\n",Object(o.b)("inlineCode",{parentName:"p"},"C:\\Windows"),".")))))),Object(o.b)("li",null,Object(o.b)("h3",{id:"sign-up"},"Sign up"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(o.b)(u.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"If you are using an environment without access to GUI or a browser, you can use headless authentication instead:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth --headless\n"))),Object(o.b)("p",null,"Your browser window with sign-in options will open."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/github_signup.svg",alt:"Connect Github"})),Object(o.b)("p",null,"Congratulations, you are logged-in.")))),Object(o.b)("h2",{id:"rails-application"},"Rails application"),Object(o.b)("h3",{id:"rails-sample-application"},"Rails sample application"),Object(o.b)("p",null,"Get a copy of the sample source code of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/simple-example-rails-with-postgresql"}),"Rails sample project")," by forking it."),Object(o.b)("p",null,"To deploy your Rails application connected to a ",Object(o.b)("strong",{parentName:"p"},"PostgreSQL"),", you can use our sample code and follow the configuration steps."),Object(o.b)("p",null,"In this example we are using ",Object(o.b)("strong",{parentName:"p"},"PostgreSQL")," ",Object(o.b)("strong",{parentName:"p"},"v11.5"),"."),Object(o.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("h3",{id:"create-a-new-project"},"Create a new project"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/heroku/heroku-2.png",alt:"Migrate from Heroku"}))),Object(o.b)("li",null,Object(o.b)("h3",{id:"create-a-new-environment"},"Create a new environment"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/heroku/heroku-3.png",alt:"Migrate from Heroku"}))),Object(o.b)("li",null,Object(o.b)("h3",{id:"create-a-new-application"},"Create a new application"),Object(o.b)("p",null,"To follow the guide, ",Object(o.b)("a",{href:"urls.sample_rails_with_postgresql"},"you can fork and use our repository")),Object(o.b)("p",null,"Use the forked repository (and branch ",Object(o.b)("strong",{parentName:"p"},"master"),") while creating the application in the repository field:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/rust/rust.png",alt:"Migrate from Heroku"}))),Object(o.b)("li",null,Object(o.b)("h3",{id:"select-application-port"},"Select application port"),Object(o.b)("p",null,"After the application is created: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Navigate application settings"),Object(o.b)("li",{parentName:"ul"},"Select ",Object(o.b)("strong",{parentName:"li"},"Port")),Object(o.b)("li",{parentName:"ul"},"Add port ",Object(o.b)("strong",{parentName:"li"}," 3000 "))),Object(o.b)("p",{align:"left"},Object(o.b)("img",{src:"/img/micro/micros-1.png",alt:"Port"}))),Object(o.b)("li",null,Object(o.b)("h3",{id:"use-dockerfile"},"Use Dockerfile"),Object(o.b)("p",null,"In the settings ",Object(o.b)("strong",{parentName:"p"},"General")," section, set ",Object(o.b)("strong",{parentName:"p"},"Build Mode"),' to Dockerfile and set Dockerfile path as "Dockerfile". Then ',Object(o.b)("strong",{parentName:"p"},"save")," your change.")))),Object(o.b)("h2",{id:"postgresql"},"PostgreSQL"),Object(o.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("h3",{id:"deploy-a-postgresql-database"},"Deploy a PostgreSQL database"),Object(o.b)("p",null,"In your environment view, click on ",Object(o.b)("strong",{parentName:"p"},"Add")," and ",Object(o.b)("strong",{parentName:"p"},"Database")," buttons:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/template-add-db.png",alt:"Template DB Rails"})),Object(o.b)("p",null,"In the popup window while adding a database, choose your name, select ",Object(o.b)("strong",{parentName:"p"},"PostgreSQL")," and ",Object(o.b)("strong",{parentName:"p"},"11.5")," version."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/template-db.png",alt:"Template DB"})),Object(o.b)("p",null,"In the end, click on your added database - in the new screen you'll be able to find the ",Object(o.b)("strong",{parentName:"p"},"Deploy")," button:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/template-deploy-db.png",alt:"Template DB"})),Object(o.b)(u.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"To learn how to add a PostgreSQL database in more details, you can ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/getting-started/create-a-database/"}),"follow this guide"),"."))),Object(o.b)("li",null,Object(o.b)("h3",{id:"connect-your-rails-application-to-postgresql"},"Connect your Rails application to PostgreSQL"),Object(o.b)("p",null,"Credentials of your PostgreSQL database are available via ",Object(o.b)("strong",{parentName:"p"},"Environment Variables")," and ",Object(o.b)("strong",{parentName:"p"},"Secrets"),". Qovery injects environment vars at the runtime."),Object(o.b)("p",null,"You can learn more about environment variables and secrets ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"here"),"."),Object(o.b)("p",null,"To list all the environment variables available to your Rails application, you can open ",Object(o.b)("strong",{parentName:"p"},"Environment Variables")," and ",Object(o.b)("strong",{parentName:"p"},"Secret")," tabs in your application window:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/configuration/variables/secret-2.png",alt:"Secret"})),Object(o.b)(u.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"In the ",Object(o.b)("strong",{parentName:"p"},"Secrets")," section, you'll see all names of injected database secrets, including those for the previously created PostgreSQL database.\nTo connect the Rails app to the PostgreSQL database, you need to setup the application to use those secrets."),Object(o.b)("p",null,"All you have to do is to open and edit ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/simple-example-rails-with-postgresql/blob/master/config/database.yml"}),"database configuration file")," in your forked repository.\nReplace all the ",Object(o.b)("strong",{parentName:"p"},"QOVERY_DATABASE_XXX")," variables with values you have in your own environment. Those variable keys contain your database ID, this is why you need to update the file."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"TIP: you could also make use of ",Object(o.b)("strong",{parentName:"em"},"Variable Aliases")," to change the name of used environment variables in your Rails application. ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/using-qovery/configuration/secret/#alias-secret"}),"Learn more here"),".")))))),Object(o.b)("h2",{id:"deploy-your-application"},"Deploy your application"),Object(o.b)("p",null,"All you have to do now is to navigate to your application and click ",Object(o.b)("strong",{parentName:"p"},"Deploy")," button"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/heroku/heroku-1.png",alt:"Deploy App"})),Object(o.b)("p",null,"That's it. Watch the status and wait till the app is deployed."),Object(o.b)("p",null,"Congratulations! Your environment with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://rubyonrails.org/"}),"Rails")," application and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org"}),"PostgreSQL")," database should be in progress."),Object(o.b)("h2",{id:"trigger-a-new-deployment"},"Trigger a new deployment"),Object(o.b)("p",null,"Now, you can play with the sample Rails application and commit & push your changes. Qovery detects your actions and triggers new builds and application deployments. Any change you make will be reflected in your deployed application automatically."),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"Congratulations! Now, you know how to deploy your Rails app with PostgreSQL in just a few steps."),Object(o.b)("p",null,"Do you have any feedback about this tutorial? Let us know what you think on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Discord"),", and join our wonderful dev community of +5500 devs."),Object(o.b)(r.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}h.isMDXComponent=!0},354:function(e,t,a){"use strict";a(358);var n=a(0),l=a.n(n),o=a(353),r=a.n(o);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,o=e.icon,i=e.type,c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return l.a.createElement("div",{className:r()(a,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&l.a.createElement("i",{className:r()("feather","icon-"+(o||c))}),t)}},356:function(e,t,a){"use strict";var n=a(1),l=a(0),o=a.n(l),r=a(39),i=a(361),c=a(19),s=a.n(c);t.a=function(e){var t,a=e.to,c=e.href,b=a||c,u=Object(i.a)(b),p=Object(l.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(l.useEffect)((function(){return!d&&u&&window.docusaurus.prefetch(b),function(){d&&t&&t.disconnect()}}),[b,d,u]),b&&u?o.a.createElement(r.b,Object(n.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(b),p.current=!0)},innerRef:function(e){var a,n;d&&e&&u&&(a=e,n=function(){window.docusaurus.prefetch(b)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:b})):o.a.createElement("a",Object(n.a)({},e,{href:b}))}},357:function(e,t,a){var n=a(25).f,l=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in l||a(10)&&n(l,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},359:function(e,t,a){"use strict";a(357);var n=a(0),l=a.n(n),o=a(354);t.a=function(e){var t=e.children,a=e.name;return l.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},l.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},360:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(356),r=a(353),i=a.n(r);a(133);t.a=function(e){var t=e.children,a=e.className,n=e.badge,r=e.leftIcon,c=e.rightIcon,s=e.size,b=e.target,u=e.to,p=i()("jump-to","jump-to--"+s,a),d=l.a.createElement("div",{className:"jump-to--inner"},l.a.createElement("div",{className:"jump-to--inner-2"},r&&l.a.createElement("div",{className:"jump-to--left"},l.a.createElement("i",{className:"feather icon-"+r})),l.a.createElement("div",{className:"jump-to--main"},n?l.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),l.a.createElement("div",{className:"jump-to--right"},l.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return b?l.a.createElement("a",{href:u,target:b,className:p},d):l.a.createElement(o.a,{to:u,className:p},d)}},361:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},364:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=(a(353),a(362)),r=a.n(o);a(134);t.a=function(e){var t=e.children,a=e.headingDepth,o=e.hideFeedbackQuestion,i="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+i+" failed",body:"The tutorial on:\n\n"+i+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+r.a.stringify(c),b=Object(n.useState)(null),u=b[0],p=b[1];return l.a.createElement("div",{className:"steps steps--h"+a},t,!o&&!u&&l.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",l.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",l.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==u&&l.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",l.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},367:function(e,t,a){"use strict";var n=a(1),l=(a(371),a(369),a(53),a(28),a(21),a(20),a(0)),o=a.n(l),r=a(375),i=a(353),c=a.n(i),s=a(362),b=a.n(s),u=a(374),p=37,d=39;function m(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,l=e.className,r=e.handleKeydown,i=e.style,s=e.values,b=e.selectedValue,u=e.tabRefs;return o.a.createElement("div",{className:a?"tabs--centered":null},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",l,{"tabs--block":t}),style:i},s.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===t,className:c()("tab-item",{"tab-item--active":b===t}),key:t,ref:function(e){return u.push(e)},onKeyDown:function(e){return r(u,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function g(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,l=e.size,i=e.values,c=i;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return o.a.createElement(r.a,{className:"react-select-container react-select--"+l,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:i.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,r=e.groupId,i=e.label,c=e.placeholder,s=e.select,h=e.size,y=(e.style,e.values),j=e.urlKey,O=Object(u.a)(),f=O.tabGroupChoices,v=O.setTabGroupChoices,w=Object(l.useState)(a),N=w[0],k=w[1];if(null!=r){var T=f[r];null!=T&&T!==N&&k(T)}var S=function(e){k(e),null!=r&&v(r,e)},Q=[],I=function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(l.useEffect)((function(){if("undefined"!=typeof window&&window.location&&j){var e=b.a.parse(window.location.search);e[j]&&k(e[j])}}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"margin-bottom--"+(h||"md")},i&&o.a.createElement("div",{className:"margin-vert--sm"},i),y.length>1&&(s?o.a.createElement(g,Object(n.a)({changeSelectedValue:S,handleKeydown:I,placeholder:c,selectedValue:N,size:h,tabRefs:Q},e)):o.a.createElement(m,Object(n.a)({changeSelectedValue:S,handleKeydown:I,selectedValue:N,tabRefs:Q},e)))),l.Children.toArray(t).filter((function(e){return e.props.value===N}))[0])}},368:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement(l.a.Fragment,null,e.children)}}}]);
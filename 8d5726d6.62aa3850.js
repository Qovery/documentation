/*! For license information please see 8d5726d6.62aa3850.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{297:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),i=(n(0),n(421)),o=n(430),c=(n(425),n(420)),l=n(427),s={last_modified_on:"2021-10-18",title:"Application",description:"Learn how to configure your Application on Qovery"},p={id:"using-qovery/configuration/application",title:"Application",description:"Learn how to configure your Application on Qovery",source:"@site/docs/using-qovery/configuration/application.md",permalink:"/docs/using-qovery/configuration/application",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/application.md",sidebar:"docs",previous:{title:"Environment",permalink:"/docs/using-qovery/configuration/environment"},next:{title:"Databases",permalink:"/docs/using-qovery/configuration/database"}},b=[{value:"Create an Application",id:"create-an-application",children:[]},{value:"Configuration",id:"configuration",children:[{value:"General",id:"general",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Storage",id:"storage",children:[]},{value:"Ports",id:"ports",children:[]},{value:"Domains",id:"domains",children:[]},{value:"Database",id:"database",children:[]}]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Secrets",id:"secrets",children:[]},{value:"Logs",id:"logs",children:[]},{value:"SSH",id:"ssh",children:[]},{value:"Delete an Application",id:"delete-an-application",children:[]}],u={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l.a,{name:"documentation",mdxType:"Assumptions"},Object(i.b)("p",null,"You have created an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environment"),".")),Object(i.b)("p",null,"An ",Object(i.b)("strong",{parentName:"p"},"application")," is part of a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/project/"}),"Project")," within an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environment")," and is a container unit. Multiple applications can be part of the same ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environment"),", be connected to a set of dependencies (databases and other services), and can communicate with other applications within the same Environment."),Object(i.b)("h2",{id:"create-an-application"},"Create an Application"),Object(i.b)(c.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Check out ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/getting-started/deploy-your-first-application/"}),"this video guide")," to create and deploy your first application")),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("h3",{id:"general"},"General"),Object(i.b)("p",null,"General settings allow you to set up your application name, git repository and build mode."),Object(i.b)("h4",{id:"git-repository"},"Git Repository"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Configure your repository URL (it can be hosted on Github or Gitlab, Bitbucket support coming soon)."),Object(i.b)("li",{parentName:"ul"},"Select branch that Qovery should use for builds in this environment"),Object(i.b)("li",{parentName:"ul"},"Select ",Object(i.b)("inlineCode",{parentName:"li"},"Root Application Path")," - base folder in which the application resides in your repository")),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/application/app-17.png",alt:"CPU"})),Object(i.b)(c.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Qovery supports monorepositories, you can deploy multiple apps using a single repository. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/advanced/monorepository/"}),"For details, see our advanced guide."))),Object(i.b)("h4",{id:"build-mode"},"Build Mode"),Object(i.b)("h4",{id:"option-1-buildpacks"},"Option 1: Buildpacks"),Object(i.b)("p",null,"To simplify the application build for the developer, Qovery supports ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://buildpacks.io"}),"Buildpacks")," out of the box. Buildpacks determine the build process for an app and which assets and runtimes should be made available to your code at runtime. If your complex apps are running multiple languages, you can also use multiple buildpacks within a single app.\nMeaning, as a developer, you don't need to write a ",Object(i.b)("inlineCode",{parentName:"p"},"Dockerfile")," to build and run your app. Qovery Buildpacks takes care of everything for you."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Supported languages")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"language"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"version"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Ruby"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Java"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Node.JS"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Python"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Javascript"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Typescript"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Golang"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"PHP"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")))),Object(i.b)("p",null,"You don't find a cool language? ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://roadmap.qovery.com/"}),"Suggest us to support it")),Object(i.b)("h4",{id:"option-2-dockerfile"},"Option 2: Dockerfile"),Object(i.b)("p",null,"Qovery runs your application within the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.docker.com/resources/what-container"}),"Container technology"),". To build and run your application, you need to provide a valid ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder"}),"Dockerfile"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Dockerfile",metastring:'title="Valid NodeJS Dockerfile"',title:'"Valid',NodeJS:!0,'Dockerfile"':!0}),"FROM node:13-alpine\nRUN mkdir -p /usr/src/app\nWORKDIR /usr/src/app\nCOPY . .\nRUN npm install\nEXPOSE 3000\nCMD node ./bin/www\n")),Object(i.b)("p",null,"After creating a Dockerfile, specify the location of your Dockerfile in ",Object(i.b)("inlineCode",{parentName:"p"},"Dockefile path")," field."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/application/app-18.png",alt:"Dockerfile"})),Object(i.b)("p",null,"Configuration from above will make Qovery look for the Dockerfile in ",Object(i.b)("inlineCode",{parentName:"p"},"/timescale/Dockerfile")," path of your repository (",Object(i.b)("inlineCode",{parentName:"p"},"Root Application Path")," + ",Object(i.b)("inlineCode",{parentName:"p"},"Dockerfile Path"),")."),Object(i.b)("h3",{id:"resources"},"Resources"),Object(i.b)("h4",{id:"cpu"},"CPU"),Object(i.b)("p",null,"To configure the number of CPUs that your app needs, adjust the setting in the ",Object(i.b)("inlineCode",{parentName:"p"},"Resources")," section of the application configuration."),Object(i.b)(c.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Default is 0.25CPU. The maximum you can set is 1CPU in ",Object(i.b)("strong",{parentName:"p"},"Community")," version and unlimited in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.qovery.com/pricing"}),"paid plans"),".")),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/application/app-13.png",alt:"CPU"})),Object(i.b)("h4",{id:"ram"},"RAM"),Object(i.b)("p",null,"To configure the amount of RAM that your app needs, adjust the setting in ",Object(i.b)("inlineCode",{parentName:"p"},"Resources")," section of the application configuration."),Object(i.b)(c.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Default is 256MB, maximum you can set is 512MB in ",Object(i.b)("strong",{parentName:"p"},"Community")," version, and unlimited in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.qovery.com/pricing"}),"paid plans"),".")),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/application/app-14.png",alt:"RAM"})),Object(i.b)("h3",{id:"dependencies"},"Dependencies"),Object(i.b)("p",null,"Qovery gives you the power to have multiple apps within one environment. Sometimes it's necessary to one or multiple apps before others.\nBy using the ",Object(i.b)("inlineCode",{parentName:"p"},"Dependency")," configuration, you can declare a list of apps your app is depending on."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/application/app-6.png",alt:"Application Dependencies"})),Object(i.b)("p",null,"Setting up application dependencies will make sure all the dependencies are running before your application starts."),Object(i.b)("h3",{id:"storage"},"Storage"),Object(i.b)("h4",{id:"block-storage"},"Block Storage"),Object(i.b)("p",null,"The default filesystem for applications running on Qovery is ephemeral. Application data isn\u2019t persisted across deploys and restarts, which works just fine for most apps because they use managed databases to persist data."),Object(i.b)("p",null,"However, many applications need persistent disk storage that isn\u2019t ephemeral. These include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Blogging platforms and CMSs like WordPress, Ghost, and Strapi."),Object(i.b)("li",{parentName:"ul"},"Collaboration apps like Mattermost, GitLab, and Discourse.")),Object(i.b)("p",null,"This is where Qovery block Storage comes in. Qovery applications can use storage to store data that persists across deploys and restarts, making it easy to deploy stateful applications."),Object(i.b)(c.a,{type:"warning",mdxType:"Alert"},Object(i.b)("p",null,"For most use cases, it is better to use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/object-storage/"}),"Object Storage")," instead of Block Storage.")),Object(i.b)("h6",{id:"use-cases"},"Use cases"),Object(i.b)("h6",{id:"-good-use-cases"},"\u2705 Good use cases"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For I/O intensive applications (E.g. database)"),Object(i.b)("li",{parentName:"ul"},"To store temporary files")),Object(i.b)("h6",{id:"-bad-use-cases"},"\u274c Bad use cases"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To store file > 1 TB"),Object(i.b)("li",{parentName:"ul"},"To expose files from an application (E.g. images)")),Object(i.b)("h5",{id:"types-of-block-storage"},"Types of Block Storage"),Object(i.b)("p",null,"Qovery Storage supports:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Max IOPS"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Max Throughput"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Min Size"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Max Size"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Use cases"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fast_ssd"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"64000"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1GB/s"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5GB"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10GB ",Object(i.b)("inlineCode",{parentName:"td"},"Community")," / 1TB paid plans"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Critical business applications that require sustained IOPS like databases")))),Object(i.b)("h5",{id:"configuration-1"},"Configuration"),Object(i.b)("p",null,"You can set up your Block Storage in ",Object(i.b)("inlineCode",{parentName:"p"},"Storage")," section of your application configuration."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/application/app-7.png",alt:"Application Storage"})),Object(i.b)("h3",{id:"ports"},"Ports"),Object(i.b)("p",null,"Most of the application needs to be accessed by other services inside or outside of your environment. To set up the access,\ndeclare the ports your application uses. Internal ports are available internally inside your environment for other services to use.\nYou can also expose ports publicly - it makes them accessible over the public network."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/application/app-15.png",alt:"Application Ports"})),Object(i.b)(c.a,{type:"info",mdxType:"Alert"},"By default, newly created ports are publicly exposed over HTTPS. You can change this setting in the `Advanced` section."),Object(i.b)("h4",{id:"exposing-applications"},"Exposing Applications"),Object(i.b)("p",null,"Before your application is exposed to the internet, Qovery needs to know what ",Object(i.b)("strong",{parentName:"p"},"PORT")," to listen on to expose your app. Qovery does try to do it's best to do this automatically for you however, there are cases when we can't."),Object(i.b)("p",null,"You can configure your application to use the ",Object(i.b)("strong",{parentName:"p"},"PORT")," environment variable by adding the ",Object(i.b)("strong",{parentName:"p"},"PORT")," on your application env variables page."),Object(i.b)(c.a,{type:"warning",mdxType:"Alert"},Object(i.b)("p",null,"A Note on Listening IPs: It's best for your application to listen on ",Object(i.b)("inlineCode",{parentName:"p"},"0.0.0.0:$PORT"),". While most things work with ",Object(i.b)("inlineCode",{parentName:"p"},"127.0.0.1")," and ",Object(i.b)("inlineCode",{parentName:"p"},"localhost"),", some do not (NodeJS for example)")),Object(i.b)("h3",{id:"domains"},"Domains"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Domain")," section of your application configuration allows you to define a custom domain for your application."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/application/app-16.png",alt:"Application Domains"})),Object(i.b)("p",null,"After setting up a custom domain, you'll see a ",Object(i.b)("inlineCode",{parentName:"p"},"Value")," that you need to set up as a ",Object(i.b)("inlineCode",{parentName:"p"},"CNAME")," record in your domain registrar."),Object(i.b)(c.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/getting-started/setting-custom-domain/"}),"We prepared a guide and video tutorial that explains how to set up your custom domain."))),Object(i.b)("p",null,"Setting up the ",Object(i.b)("inlineCode",{parentName:"p"},"CNAME")," on the domain provider side will make your app accessible through your custom domain on Qovery."),Object(i.b)("h3",{id:"database"},"Database"),Object(i.b)("p",null,"To access your database in your application, link it to your application in the ",Object(i.b)("inlineCode",{parentName:"p"},"Database")," section of your application configuration."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/application/app-10.png",alt:"Application Databases"})),Object(i.b)("p",null,"Linking the database to your app will make sure it's up and running before your application starts. It will also ensure that database secrets and other important information are injected as secrets into your application."),Object(i.b)("p",null,"Example of secrets and environment variables injected into your app for the linked database:"),Object(i.b)("h4",{id:"database-secrets"},"Database Secrets"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"QOVERY_DATABASE_MY_POSTGRESQL_DATABASE": "postgres"\n"QOVERY_DATABASE_MY_POSTGRESQL_PASSWORD": "xxx"\n"QOVERY_DATABASE_MY_POSTGRESQL_USERNAME": "superuser"\n"QOVERY_DATABASE_MY_POSTGRESQL_PORT": "5432"\n"QOVERY_DATABASE_MY_POSTGRESQL_FQDN": "my-postgresq-y1irp3nmdzj32yjl-svc.cnuxtlki1yn9.eu-west-3.rds.amazonaws.com"\n"QOVERY_DATABASE_MY_POSTGRESQL_HOST": "my-postgresq-y1irp3nmdzj32yjl-svc.cnuxtlki1yn9.eu-west-3.rds.amazonaws.com"\n"QOVERY_DATABASE_MY_POSTGRESQL_CONNECTION_URI_WITHOUT_CREDENTIALS": "postgresql://my-postgresq-y1irp3nmdzj32yjl-svc.cnuxtlki1yn9.eu-west-3.rds.amazonaws.com:5432/postgres"\n"QOVERY_DATABASE_MY_POSTGRESQL_CONNECTION_URI": "postgresql://superuser:xxx@my-postgresq-y1irp3nmdzj32yjl-svc.cnuxtlki1yn9.eu-west-3.rds.amazonaws.com:5432/postgres"\n"QOVERY_DATABASE_MY_POSTGRESQL_VERSION": "11.5"\n"QOVERY_DATABASE_MY_POSTGRESQL_TYPE": "POSTGRESQL"\n"QOVERY_DATABASE_MY_POSTGRESQL_NAME": "my-postgresql"\n')),Object(i.b)("p",null,"The built-in variables follow the naming pattern: ",Object(i.b)("inlineCode",{parentName:"p"},"QOVERY_DATABASE")," + <your_db_name> + <type_of_variable> where:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<your_db_name>")," is the name of your database"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<type_of_variable>")," is the type of variable we inject, e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"PASSWORD"),", ",Object(i.b)("inlineCode",{parentName:"li"},"VERSION"),", ",Object(i.b)("inlineCode",{parentName:"li"},"CONNECTION_URI")," and so on.")),Object(i.b)("h2",{id:"environment-variables"},"Environment Variables"),Object(i.b)("p",null,"To learn how to set up environment variables in your projects and applications, navigate to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"configuring Environment Variables")," section."),Object(i.b)("h2",{id:"secrets"},"Secrets"),Object(i.b)("p",null,"To learn how to set up secrets in your projects and applications, navigate to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/secret/"}),"configuring Secrets")," section."),Object(i.b)("h2",{id:"logs"},"Logs"),Object(i.b)("p",null,"To learn how to display your application logs, navigate to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/getting-started/debugging/#logs"}),"logs section in our Debugging guide")),Object(i.b)("h2",{id:"ssh"},"SSH"),Object(i.b)("p",null,"To connect to your application via SSH, you need to install the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/"}),"Qovery CLI")," and run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery application ssh <your app ID>\n")),Object(i.b)("p",null,"If you have multiple instances running."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery application ssh <your app ID> <instance ID>\n")),Object(i.b)("h2",{id:"delete-an-application"},"Delete an Application"),Object(i.b)(o.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("p",null,"Navigate to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://console-beta.qovery.com"}),"Console"))),Object(i.b)("li",null,Object(i.b)("p",null,"Choose your application")),Object(i.b)("li",null,Object(i.b)("p",null,"In the application overview, click on the ",Object(i.b)("inlineCode",{parentName:"p"},"Actions")," button and remove the application."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/configuration/application/app-1.png",alt:"Application"}))))))}d.isMDXComponent=!0},419:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},420:function(e,t,n){"use strict";n(423);var a=n(0),r=n.n(a),i=n(419),o=n.n(i);n(131);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,i=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:o()(n,"alert","alert--"+c,{"alert--fill":a,"alert--icon":!1!==i}),role:"alert"},!1!==i&&r.a.createElement("i",{className:o()("feather","icon-"+(i||l))}),t)}},421:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,c({ref:t},s,{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},422:function(e,t,n){"use strict";var a=n(1),r=n(0),i=n.n(r),o=n(39),c=n(426),l=n(19),s=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,p=n||l,b=Object(c.a)(p),u=Object(r.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!d&&b&&window.docusaurus.prefetch(p),function(){d&&t&&t.disconnect()}}),[p,d,b]),p&&b?i.a.createElement(o.b,Object(a.a)({},e,{onMouseEnter:function(){u.current||(window.docusaurus.preload(p),u.current=!0)},innerRef:function(e){var n,a;d&&e&&b&&(n=e,a=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:p})):i.a.createElement("a",Object(a.a)({},e,{href:p}))}},423:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(428)}),n(74)("fill")},424:function(e,t,n){var a=n(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},425:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(422),o=n(419),c=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.className,a=e.badge,o=e.leftIcon,l=e.rightIcon,s=e.size,p=e.target,b=e.to,u=c()("jump-to","jump-to--"+s,n),d=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},o&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+o})),r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return p?r.a.createElement("a",{href:b,target:p,className:u},d):r.a.createElement(i.a,{to:b,className:u},d)}},426:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))},427:function(e,t,n){"use strict";n(424);var a=n(0),r=n.n(a),i=n(420);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(i.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},428:function(e,t,n){"use strict";var a=n(27),r=n(75),i=n(26);e.exports=function(e){for(var t=a(this),n=i(t.length),o=arguments.length,c=r(o>1?arguments[1]:void 0,n),l=o>2?arguments[2]:void 0,s=void 0===l?n:r(l,n);s>c;)t[c++]=e;return t}},429:function(e,t,n){"use strict";var a=n(432),r=n(51);function i(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,a){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=n):a[e]=n};case"bracket":return function(e,n,a){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],n):a[e]=[n]:a[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=r({arrayFormat:"none"},t)),a=Object.create(null);return"string"!=typeof e?a:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),i=t.length>0?t.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),n(decodeURIComponent(r),i,a)})),Object.keys(a).sort().reduce((function(e,t){var n=a[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):a},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,a){return null===n?[i(t,e),"[",a,"]"].join(""):[i(t,e),"[",i(a,e),"]=",i(n,e)].join("")};case"bracket":return function(t,n){return null===n?i(t,e):[i(t,e),"[]=",i(n,e)].join("")};default:return function(t,n){return null===n?i(t,e):[i(t,e),"=",i(n,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(a){var r=e[a];if(void 0===r)return"";if(null===r)return i(a,t);if(Array.isArray(r)){var o=[];return r.slice().forEach((function(e){void 0!==e&&o.push(n(a,e,o.length))})),o.join("&")}return i(a,t)+"="+i(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},430:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=(n(419),n(429)),o=n.n(i);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,i=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+o.a.stringify(l),p=Object(a.useState)(null),b=p[0],u=p[1];return r.a.createElement("div",{className:"steps steps--h"+n},t,!i&&!b&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return u("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==b&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},432:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
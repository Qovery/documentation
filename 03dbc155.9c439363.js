(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return m}));var o=a(1),n=a(9),r=(a(0),a(390)),l=a(389),i=a(408),c=a(403),b=a(394),u={last_modified_on:"2023-05-29",$schema:"/.meta/.schemas/guides.json",title:"Migrate your application from Heroku to AWS",description:"Guide on how to migrate all your applications from Heroku to AWS with your databases",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","cloud_provider: aws"],hide_pagination:!0},s={categories:[{name:"tutorial",title:"Tutorial",description:"Additional step-by-step resources to leverage even more Qovery",permalink:"/guides/tutorial"}],coverLabel:"Migrate your application from Heroku to AWS",description:"Guide on how to migrate all your applications from Heroku to AWS with your databases",permalink:"/guides/tutorial/migrate-your-application-from-heroku-to-aws",readingTime:"13 min read",source:"@site/guides/tutorial/migrate-your-application-from-heroku-to-aws.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"cloud_provider: aws",permalink:"/guides/tags/cloud-provider-aws"}],title:"Migrate your application from Heroku to AWS",truncated:!1,prevItem:{title:"Microservices",permalink:"/guides/advanced/microservices"},nextItem:{title:"Mono repository",permalink:"/guides/advanced/monorepository"}},p=[{value:"Migration Steps",id:"migration-steps",children:[]},{value:"1. Create your Dockerfile or Use Buildpacks",id:"1-create-your-dockerfile-or-use-buildpacks",children:[{value:"Choose your Dockerfile template",id:"choose-your-dockerfile-template",children:[]},{value:"Test your Dockerfile",id:"test-your-dockerfile",children:[]},{value:"Environment variables at the build time",id:"environment-variables-at-the-build-time",children:[]},{value:"Add your Dockerfile to Git",id:"add-your-dockerfile-to-git",children:[]},{value:"Loop",id:"loop",children:[]},{value:"Limitations",id:"limitations",children:[]}]},{value:"2. Create resources on Qovery",id:"2-create-resources-on-qovery",children:[{value:"Application",id:"application",children:[]},{value:"Database",id:"database",children:[]}]},{value:"3. Configure your Environment Variables and Secrets",id:"3-configure-your-environment-variables-and-secrets",children:[{value:"Connect your frontend app to your backend app",id:"connect-your-frontend-app-to-your-backend-app",children:[]},{value:"Connect your backend app to your database",id:"connect-your-backend-app-to-your-database",children:[]}]},{value:"4. Copy data from your Heroku databases to your AWS databases",id:"4-copy-data-from-your-heroku-databases-to-your-aws-databases",children:[]},{value:"5. Deploy your apps!",id:"5-deploy-your-apps",children:[]},{value:"FAQ by Heroku users",id:"faq-by-heroku-users",children:[{value:"How to create a custom domain?",id:"how-to-create-a-custom-domain",children:[]},{value:"How to monitor my apps?",id:"how-to-monitor-my-apps",children:[]},{value:"Do you have Heroku &quot;Review App&quot; equivalent?",id:"do-you-have-heroku-review-app-equivalent",children:[]},{value:"How to rollback?",id:"how-to-rollback",children:[]},{value:"How auto-scaling works?",id:"how-auto-scaling-works",children:[]},{value:"How to manage database migration?",id:"how-to-manage-database-migration",children:[]},{value:"Is it possible to get a shell / connect to my app?",id:"is-it-possible-to-get-a-shell--connect-to-my-app",children:[]},{value:"Can I use Terraform and Infrastructure as Code?",id:"can-i-use-terraform-and-infrastructure-as-code",children:[]},{value:"How can I connect my app to MongoDB Atlas?",id:"how-can-i-connect-my-app-to-mongodb-atlas",children:[]},{value:"How can I connect my app to an AWS service not managed by Qovery?",id:"how-can-i-connect-my-app-to-an-aws-service-not-managed-by-qovery",children:[]}]},{value:"Wrapping up",id:"wrapping-up",children:[]}],d={rightToc:p};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This guide describes how to migrate your application running on Heroku to AWS with Qovery. It covers all required steps you need to take to deploy your application on AWS and transfer your data from Heroku Postgres to the database managed by AWS via Qovery."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Please contact us via ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"our forum")," if you experience any problem while migrating from Heroku to AWS with Qovery.")),Object(r.b)(b.a,{name:"guide",mdxType:"Assumptions"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You are familiar with Heroku basics, have a Heroku account and access to Heroku CLI"),Object(r.b)("li",{parentName:"ul"},"You have ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://start.qovery.com"}),"sign in on Qovery")),Object(r.b)("li",{parentName:"ul"},"You have ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/guides/cloud-provider/guide-amazon-web-services/"}),"set up your AWS account")," with Qovery"))),Object(r.b)("h2",{id:"migration-steps"},"Migration Steps"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#1-create-your-dockerfile-or-use-buildpacks"}),"Use Buildpacks or Create your Dockerfile")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#2-create-resources-on-qovery"}),"Create resources on Qovery")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#3-configure-your-environment-variables-and-secrets"}),"Configure Environment Variables and Secrets")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#4-copy-data-from-your-heroku-databases-to-your-aws-databases"}),"Copy data from your Heroku databases to your AWS databases")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#5-deploy-your-apps-"}),"Deploy your apps")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#faq-by-heroku-users"}),"FAQ by Heroku users"))),Object(r.b)("h2",{id:"1-create-your-dockerfile-or-use-buildpacks"},"1. Create your Dockerfile or Use Buildpacks"),Object(r.b)("p",null,"Qovery supports two ways to build and run your application coming from Heroku:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Buildpacks"),Object(r.b)("li",{parentName:"ol"},"Docker")),Object(r.b)("p",null,"Both options build a container image that is runnable by a container engine (E.g. Docker). Qovery runs containers on Kubernetes."),Object(r.b)("p",null,"Choose the option that better fits you:"),Object(r.b)(c.a,{centered:!0,className:"rounded",defaultValue:"buildpacks",placeholder:"Use Buildpacks or Create your Dockerfile",select:!1,size:null,values:[{group:"Platforms",label:"Use Buildpacks",value:"buildpacks"},{group:"Platforms",label:"Create your Dockerfile",value:"dockerfile"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"dockerfile",mdxType:"TabItem"},Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Are you familiar with Dockerfile? If not, I do recommend reading ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/tutorial/how-to-write-a-dockerfile/"}),"this article"),".")),Object(r.b)("p",null,"Here we will create our Dockerfiles to build and run our applications. Qovery will handle the build and the run of your applications, but need to have at least a Dockerfile to do it."),Object(r.b)("h3",{id:"choose-your-dockerfile-template"},"Choose your Dockerfile template"),Object(r.b)("p",null,"To get started,"),Object(r.b)("h4",{id:"find-dockerfile-template"},"Find Dockerfile template"),Object(r.b)("p",null,"Pick one Dockerfile template according to the programming language or framework you are using for your app:"),Object(r.b)(l.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"Your framework or language is missing? Open a thread on ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"our forum"),", and we will provide you one.")),Object(r.b)(c.a,{centered:!1,className:"square",defaultValue:"rails",select:!1,size:null,values:[{group:"Files",label:"Rails",value:"rails"},{group:"Files",label:"NodeJS",value:"nodejs"},{group:"Files",label:"React",value:"react"},{group:"Files",label:"VueJS",value:"vuejs"},{group:"Files",label:"NextJS",value:"nextjs"},{group:"Files",label:"Golang",value:"golang"},{group:"Files",label:"Flask",value:"flask"},{group:"Files",label:"Django",value:"django"},{group:"Files",label:"Laravel",value:"laravel"},{group:"Files",label:"Symfony",value:"symfony"},{group:"Files",label:"Spring",value:"spring"},{group:"Files",label:"Rust",value:"rust"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"rails",mdxType:"TabItem"},Object(r.b)("p",null,"Here is the Dockerfile for your Rails application listening on the PORT 3000"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell",metastring:'title="Dockerfile"',title:'"Dockerfile"'}),'# syntax=docker/dockerfile:1\nFROM ruby:2.7\nRUN apt-get update -qq && apt-get install -y nodejs postgresql-client\nWORKDIR /myapp\nCOPY Gemfile Gemfile\nCOPY Gemfile.lock Gemfile.lock\nRUN bundle install\n\nCOPY . .\n\nEXPOSE 3000\n\n# Configure the main process to run when running the image\nCMD ["rails", "server", "-b", "0.0.0.0", "-p", "3000"]\n')),Object(r.b)("details",null,Object(r.b)("summary",null,"Dockerfile for Sidekiq"),Object(r.b)("p",null,"Here is the Dockerfile for your Rails app running as a worker mode with Sidekiq."),Object(r.b)(l.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"There is no listening port since it is consuming resources from a queuing system (E.g. Redis)")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell",metastring:'title="Dockerfile for Sidekiq"',title:'"Dockerfile',for:!0,'Sidekiq"':!0}),'# syntax=docker/dockerfile:1\nFROM ruby:2.7\nRUN apt-get update -qq && apt-get install -y nodejs postgresql-client # add mysql client if you need to\nWORKDIR /myapp\nCOPY Gemfile Gemfile\nCOPY Gemfile.lock Gemfile.lock\nRUN bundle install\n\nCOPY . .\n\nCMD ["bundle", "exec", "sidekiq"]\n')))),Object(r.b)(i.a,{value:"nodejs",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"\nTODO\n\n"))),Object(r.b)(i.a,{value:"react",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"\nTODO\n\n"))),Object(r.b)(i.a,{value:"vuejs",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"\nTODO\n\n"))),Object(r.b)(i.a,{value:"nextjs",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"\nTODO\n\n"))),Object(r.b)(i.a,{value:"golang",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"\nTODO\n\n"))),Object(r.b)(i.a,{value:"flask",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"\nTODO\n\n"))),Object(r.b)(i.a,{value:"django",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"\nTODO\n\n"))),Object(r.b)(i.a,{value:"laravel",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"\nTODO\n\n"))),Object(r.b)(i.a,{value:"symfony",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"\nTODO\n\n"))),Object(r.b)(i.a,{value:"spring",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"\nTODO\n\n"))),Object(r.b)(i.a,{value:"rust",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"\nTODO\n\n")))),Object(r.b)("h4",{id:"copy-template"},"Copy template"),Object(r.b)("p",null,"Copy your Dockerfile at the root of your project. By convention, you can name your file ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile"),". If you already have a Dockerfile, feel free to name it ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile.qovery"),". If you are using multiple Dockerfile for Qovery, feel free to give a name like ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile-sidekiq.qovery"),"."),Object(r.b)(l.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"Read ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://discuss.qovery.com/t/904"}),"this forum post")," to know how to use the same Dockerfile with different CMD parameters.")),Object(r.b)("p",null,"For our example of migrating a Rails app and a Rails Sidekiq app, I will have at the root of my project a ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile.qovery")," and a ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile-sidekiq.qovery"),"."),Object(r.b)("h3",{id:"test-your-dockerfile"},"Test your Dockerfile"),Object(r.b)(b.a,{mdxType:"Assumptions"},Object(r.b)("p",null,"You need to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/get-docker/"}),"install Docker")," to test your Dockerfile")),Object(r.b)("p",null,"To test your Dockerfile we will locally our container. You just need to run the following commands:"),Object(r.b)(l.a,{type:"warning",mdxType:"Alert"},Object(r.b)("p",null,"Don't forget the ",Object(r.b)("inlineCode",{parentName:"p"},".")," (dot) at the end of the ",Object(r.b)("inlineCode",{parentName:"p"},"docker build")," command.")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"docker build -f Dockerfile.qovery .\n")),Object(r.b)("p",null,"If everything goes well you should get the finale image ID at the end of the output."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"[+] Building 19.0s (16/16) FINISHED\n => [internal] load build definition from Dockerfile                                       0.0s\n => => transferring dockerfile: 37B                                                        0.0s\n => [internal] load .dockerignore                                                          0.0s\n ...\n => [7/7] COPY . .                                                                         0.2s\n => exporting to image                                                                     0.0s\n => exporting layers                                                                       0.4s\n => writing image sha256:a0f90a6ec8bc4036a7b268479a0c0773ca324ba2de11fdef31309650743f4055  0.0s\n")),Object(r.b)("p",null,"To run your image you can run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"docker run a0f90a6ec8bc4036a7b268479a0c0773ca324ba2de11fdef31309650743f4055\n")),Object(r.b)("p",null,"If your app required a database to starts, then it can be normal that it fails to start. Otherwise, if your app is supposed to start and does not, then you will need to fix the issue and rebuild your app with ",Object(r.b)("inlineCode",{parentName:"p"},"docker build -f Dockerfile.qovery .")),Object(r.b)(l.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"This step is one of the most complex, but once you successfully build your application with Docker, your app will run anywhere (not only on AWS with Qovery).")),Object(r.b)("p",null,"Any error while building your container image? 2 solutions:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},'Read the error message and try to understand from where the problem is coming from. You can "Google" the error if it is not related to your code.'),Object(r.b)("li",{parentName:"ol"},"Open a thread on ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://discuss.qovery.com/"}),"our forum")," if you don't find the answer there, we will be happy to assist you.")),Object(r.b)("h3",{id:"environment-variables-at-the-build-time"},"Environment variables at the build time"),Object(r.b)("p",null,"Does your app use some environment variables at the build time? Then you will need to modify your Dockerfile to includes the environment variables. Let's imagine your app uses the environment variable ",Object(r.b)("inlineCode",{parentName:"p"},"CONTENT_API_KEY"),", then you will need to add the following instructions in your Dockerfile:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell",metastring:'title="Dockerfile with environment variables"',title:'"Dockerfile',with:!0,environment:!0,'variables"':!0}),"...\nARG CONTENT_API_KEY\nENV CONTENT_API_KEY $CONTENT_API_KEY\n...\n")),Object(r.b)("p",null,"The value of the ",Object(r.b)("inlineCode",{parentName:"p"},"CONTENT_API_KEY")," environment variable will be taken from the specified environment variables in Qovery."),Object(r.b)(l.a,{type:"success",mdxType:"Alert"},Object(r.b)("p",null,"Qovery injects Environment Variables and Secrets at the build and run time of your app.")),Object(r.b)("h3",{id:"add-your-dockerfile-to-git"},"Add your Dockerfile to Git"),Object(r.b)("p",null,"Now, add your new Dockerfile to git with the following commands:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),'git add Dockerfile.qovery\ngit commit -m "Add Qovery Dockerfile"\ngit push origin\n')),Object(r.b)("h3",{id:"loop"},"Loop"),Object(r.b)("p",null,"If you have multiple applications to deploy, create a Dockerfile for each of them.")),Object(r.b)(i.a,{value:"buildpacks",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://buildpacks.io/"}),"Buildpacks")," automatically detects the language and the framework your application is using. Buildpacks builds and runs your app. Here is the list of ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/#option-1-buildpacks"}),"supported languages and frameworks"),"."),Object(r.b)(l.a,{type:"warning",mdxType:"Alert"},Object(r.b)("p",null,"We do recommend using Docker to keep the full control of what's going on behind the scene. Buildpacks is a great technology but difficult to debug when something goes wrong. You can try deploying your apps on AWS with Qovery with Buildpacks, if you do not succeed, we do recommend switching for Docker.")),Object(r.b)("h3",{id:"limitations"},"Limitations"),Object(r.b)("p",null,"Here are some limitations due to our Buildpacks implementation:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Qovery Buildpacks does not support Procfile with multiple commands at the moment."),Object(r.b)("li",{parentName:"ul"},"Qovery does not support custom Buildpacks.")),Object(r.b)("p",null,"Those limitations will be solved in the coming months."))),Object(r.b)("h2",{id:"2-create-resources-on-qovery"},"2. Create resources on Qovery"),Object(r.b)("h3",{id:"application"},"Application"),Object(r.b)(l.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"Are you a new Qovery user? Watch ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/getting-started/deploy-your-first-application/"}),"this tutorial")," to learn how to deploy your first app.")),Object(r.b)("div",{class:"video-container"},Object(r.b)("p",{align:"center"},Object(r.b)("iframe",{src:"https://www.loom.com/embed/9246ae68c68f42debc3d5183d2b4f7f8",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(r.b)("p",null,"Steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Connect to the ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://start.qovery.com"}),"Qovery console"),"."),Object(r.b)("li",{parentName:"ol"},"Create your ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/organization/"}),"Organization")," and your ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/project/"}),"Project"),"."),Object(r.b)("li",{parentName:"ol"},"Create an environment with the name ",Object(r.b)("inlineCode",{parentName:"li"},"production")," (it can be changed after)."),Object(r.b)("li",{parentName:"ol"},"Create an application and give it a name (you can give the name of your repo if you have no idea)"),Object(r.b)("li",{parentName:"ol"},"Select your app repository from your GitHub, GitLab or Bitbucket."),Object(r.b)("li",{parentName:"ol"},"Select the branch you want to deploy."),Object(r.b)("li",{parentName:"ol"},"Select the Build mode for ",Object(r.b)("inlineCode",{parentName:"li"},"Buildpacks")," or ",Object(r.b)("inlineCode",{parentName:"li"},"Dockerfile")," according to what you want."),Object(r.b)("li",{parentName:"ol"},"Specify the local listening port of your application."),Object(r.b)("li",{parentName:"ol"},'Click on "create"')),Object(r.b)("p",null,"Congrats! Your application is created \ud83c\udf89"),Object(r.b)(l.a,{type:"warning",mdxType:"Alert"},Object(r.b)("p",null,'Your application is created but not deployed yet! You can configure the vCPU, Memory, Environment Variables... before deploying it. If you want to deploy it before finishing the configuration you can click on "Actions" > "Deploy".')),Object(r.b)("p",null,"If you deploy an app from a mono-repository, we have a must-read guide for you ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/advanced/monorepository/"}),"here"),"."),Object(r.b)("h3",{id:"database"},"Database"),Object(r.b)(l.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"Are you a new Qovery user? Watch ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/getting-started/create-a-database/"}),"this tutorial")," to learn how to deploy your database.")),Object(r.b)("p",null,"Here are the steps to deploy your database:"),Object(r.b)(b.a,{mdxType:"Assumptions"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You have created an application before"))),Object(r.b)("div",{class:"video-container"},Object(r.b)("p",{align:"center"},Object(r.b)("iframe",{src:"https://www.loom.com/embed/d7e10be0e5964f6799b158dc631bbbd1",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(r.b)("p",null,"Steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to your ",Object(r.b)("inlineCode",{parentName:"li"},"production")," environment."),Object(r.b)("li",{parentName:"ol"},'Add your database by clicking on "Add" > "Database".'),Object(r.b)("li",{parentName:"ol"},"Select the database (PostgreSQL, MySQL, MongoDB, Redis..) and the version you want to deploy."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/database/#general"}),"Managed or Container mode")," for your database."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("inlineCode",{parentName:"li"},"Public")," accessibility (set ",Object(r.b)("inlineCode",{parentName:"li"},"Private")," if you don't want to restore your data from an existing Heroku database).")),Object(r.b)("p",null,"Congrats! Your database is created as well \ud83c\udf89"),Object(r.b)("p",null,"If you use MongoDB Atlas, or an existing database on AWS that you want to connect to your application deployed by Qovery. Check out ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/tutorial/aws-vpc-peering-with-qovery/"}),"our tutorial about VPC peering")," and how to securely connect to your existing database."),Object(r.b)("h2",{id:"3-configure-your-environment-variables-and-secrets"},"3. Configure your Environment Variables and Secrets"),Object(r.b)(l.a,{type:"success",mdxType:"Alert"},Object(r.b)("p",null,"Qovery supports Doppler integration - it's the easiest way to migrate your Environment Variables and Secrets from Heroku to Qovery. ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/integration/secret-manager/doppler/"}),"More info here"),".")),Object(r.b)("p",null,"Qovery makes the difference between an environment variable and a secret. Basically, a Secret is similar to an Environment Variable but the value is encrypted and can't be revealed. Both are injected as environment variables during the build and the run of your applications. ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"More info here")),Object(r.b)(l.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"I recommend reading our ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/getting-started/managing-environment-variables/"}),"Getting Started with Environment Variables")," guide.")),Object(r.b)("p",null,"To extract your environment variables from Heroku, we recommend using the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://devcenter.heroku.com/articles/heroku-cli"}),"Heroku CLI")," and exporting all the environment variables and secrets in an .env (dot env) file. Qovery supports the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/tutorial/import-your-environment-variables-with-the-qovery-cli/"}),"import of a dot env file")," via the Qovery web interface and the Qovery CLI."),Object(r.b)(l.a,{type:"warning",mdxType:"Alert"},Object(r.b)("p",null,"If you use Buildpacks for one of your app AND you have indicated a local listening port of your application, you will need to add an environment variable ",Object(r.b)("inlineCode",{parentName:"p"},"PORT")," with the value of your port to make your application starting properly. Otherwise, Qovery will fail to deploy your app!")),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://devcenter.heroku.com/articles/config-vars#view-current-config-var-values"}),"Export your environment variable via the Heroku CLI")," with the command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"# To install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli\nheroku config\n\nGREETINGS: hello world\nSTRIPE_API_KEY: xxx-yyy-zzz\nIS_PRODUCTION: true\n")),Object(r.b)("p",null,"Then you can create your environment variables via the web interface (watch the video below)"),Object(r.b)("div",{class:"video-container"},Object(r.b)("p",{align:"center"},Object(r.b)("iframe",{src:"https://www.loom.com/embed/50899d7fa3d84a418f0db69f54f970d3",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(r.b)("p",null,"Or via the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/"}),"Qovery CLI"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell",metastring:'title="Import Heroku environment variables with the Qovery CLI"',title:'"Import',Heroku:!0,environment:!0,variables:!0,with:!0,the:!0,Qovery:!0,'CLI"':!0}),"# auth yourself\nqovery auth\n\n# selection the app where you want to import your environment variables\nqovery context set\n\n# import your Heroku environment variables\nheroku config --app <your_heroku_app_name> --json | \\\n  qovery env parse --heroku-json > heroku.env && \\\n  qovery env import heroku.env && \\\n  rm heroku.env\n\nQovery: dot env file to import: 'heroku.env'\n? Do you want to import Environment Variables or Secrets? Environment Variables\n? What environment variables do you want to import?  [Use arrows to move, space to select, <right> to all, <left> to none, type to filter]\n  [x]  GREETINGS=hello world\n  [ ]  STRIPE_API_KEY=xxx-yyy-zzz\n> [x]  IS_PRODUCTION=true\n\nQovery: \u2705 Environment Variables successfully imported!\n")),Object(r.b)(l.a,{type:"warning",mdxType:"Alert"},Object(r.b)("p",null,"Import sensitive data (E.g. API keys, credentials...) as ",Object(r.b)("inlineCode",{parentName:"p"},"Secret")," and not ",Object(r.b)("inlineCode",{parentName:"p"},"Environment Variable"),".")),Object(r.b)("h3",{id:"connect-your-frontend-app-to-your-backend-app"},"Connect your frontend app to your backend app"),Object(r.b)("p",null,"To connect your frontend app your backend app we will create an ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/#alias-environment-variable"}),"environment variable alias"),"."),Object(r.b)("p",null,"Here is how to create a frontend app:"),Object(r.b)("div",{class:"video-container"},Object(r.b)("p",{align:"center"},Object(r.b)("iframe",{src:"https://www.loom.com/embed/bafbbda93bd64d04afb3189bf4a1a201",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(r.b)("p",null,"And now how to connect your frontend app with your backend app:"),Object(r.b)("div",{class:"video-container"},Object(r.b)("p",{align:"center"},Object(r.b)("iframe",{src:"https://www.loom.com/embed/f820925f2175465f9271b97ef414bb42",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(r.b)("p",null,"You can also take a look at ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://discuss.qovery.com/t/918"}),"this forum reply")," to learn how to do it."),Object(r.b)("h3",{id:"connect-your-backend-app-to-your-database"},"Connect your backend app to your database"),Object(r.b)("p",null,"Same as connecting your frontend app to your backend app, you can create an environment variable alias ",Object(r.b)("inlineCode",{parentName:"p"},"DATABASE_URL")," for the ",Object(r.b)("em",{parentName:"p"},"built-in")," secret finishing with ",Object(r.b)("inlineCode",{parentName:"p"},"_DATABASE_URL_INTERNAL"),"."),Object(r.b)(l.a,{type:"warning",mdxType:"Alert"},Object(r.b)("p",null,"Create an alias on ",Object(r.b)("inlineCode",{parentName:"p"},"_DATABASE_URL_INTERNAL")," and not ",Object(r.b)("inlineCode",{parentName:"p"},"_DATABASE_URL"))),Object(r.b)("div",{class:"video-container"},Object(r.b)("p",{align:"center"},Object(r.b)("iframe",{src:"https://www.loom.com/embed/59f8368eb3c14796a807c7e39e9c0ab0",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(r.b)("h2",{id:"4-copy-data-from-your-heroku-databases-to-your-aws-databases"},"4. Copy data from your Heroku databases to your AWS databases"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Coming soon with ",Object(r.b)("a",Object(o.a)({parentName:"em"},{href:"https://www.replibyte.com"}),"Replibyte"))),Object(r.b)("h2",{id:"5-deploy-your-apps"},"5. Deploy your apps!"),Object(r.b)("p",null,"We are finally ready to deploy my applications on AWS!"),Object(r.b)("div",{class:"video-container"},Object(r.b)("p",{align:"center"},Object(r.b)("iframe",{src:"https://www.loom.com/embed/0589d2f2aa4149edb605dc23f4efd23d",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(r.b)("p",null,"Watch the final result \ud83d\ude0e"),Object(r.b)("div",{class:"video-container"},Object(r.b)("p",{align:"center"},Object(r.b)("iframe",{src:"https://www.loom.com/embed/da31c21f9c104eae9270e4c4db59055e",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(r.b)("h2",{id:"faq-by-heroku-users"},"FAQ by Heroku users"),Object(r.b)("h3",{id:"how-to-create-a-custom-domain"},"How to create a custom domain?"),Object(r.b)("p",null,"Check out the documentation on ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/getting-started/setting-custom-domain/"}),"how to configure your custom domain"),"."),Object(r.b)("h3",{id:"how-to-monitor-my-apps"},"How to monitor my apps?"),Object(r.b)("p",null,"We do recommend using ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.datadoghq.com"}),"Datadog")," or any other monitoring products for monitoring your apps deployed by Qovery. Check out ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/tutorial/kubernetes-observability-and-monitoring-with-datadog/"}),"our tutorial on how to install Datadog"),"."),Object(r.b)("h3",{id:"do-you-have-heroku-review-app-equivalent"},'Do you have Heroku "Review App" equivalent?'),Object(r.b)("p",null,"Yes, it's what we call ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/#preview-environment"}),"Preview Environment")),Object(r.b)("h3",{id:"how-to-rollback"},"How to rollback?"),Object(r.b)("p",null,"Check out the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/deployment-actions/#deploy-other-version"}),"app rollback documentation")),Object(r.b)("h3",{id:"how-auto-scaling-works"},"How auto-scaling works?"),Object(r.b)("p",null,"Check out the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/#auto-scaling"}),"app auto-scaling documentation")),Object(r.b)("h3",{id:"how-to-manage-database-migration"},"How to manage database migration?"),Object(r.b)("p",null,"Check out ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://discuss.qovery.com/t/951"}),"our forum reply")),Object(r.b)("h3",{id:"is-it-possible-to-get-a-shell--connect-to-my-app"},"Is it possible to get a shell / connect to my app?"),Object(r.b)("p",null,"Yes, with the Qovery CLI and the command ",Object(r.b)("inlineCode",{parentName:"p"},"qovery shell"),". ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/#shell"}),"Check out the documentation"),"."),Object(r.b)("h3",{id:"can-i-use-terraform-and-infrastructure-as-code"},"Can I use Terraform and Infrastructure as Code?"),Object(r.b)("p",null,"Absolutely, we have a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/integration/terraform/"}),"Qovery Terraform provider")," available."),Object(r.b)("h3",{id:"how-can-i-connect-my-app-to-mongodb-atlas"},"How can I connect my app to MongoDB Atlas?"),Object(r.b)("p",null,"If you use MongoDB Atlas check out ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/tutorial/aws-vpc-peering-with-qovery/"}),"our tutorial about VPC peering")," and how to securely connect to your existing MongoDB Atlas database."),Object(r.b)("h3",{id:"how-can-i-connect-my-app-to-an-aws-service-not-managed-by-qovery"},"How can I connect my app to an AWS service not managed by Qovery?"),Object(r.b)("p",null,"If you want to connect your app to an AWS service not managed by Qovery, check out ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/tutorial/aws-vpc-peering-with-qovery/"}),"our tutorial about VPC peering")," and how to securely connect to this AWS service."),Object(r.b)("hr",null),Object(r.b)("p",null,"If you have a common question about Qovery, we have a more general ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/useful-resources/faq/"}),"FAQ section")," available."),Object(r.b)("h2",{id:"wrapping-up"},"Wrapping up"),Object(r.b)("p",null,"Congrats! You have migrated from Heroku to AWS. Feel free to check out our ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"forum")," and open a thread if you have any question."))}m.isMDXComponent=!0},389:function(e,t,a){"use strict";a(391);var o=a(0),n=a.n(o),r=a(388),l=a.n(r);a(132);t.a=function(e){var t=e.children,a=e.classNames,o=e.fill,r=e.icon,i=e.type,c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return n.a.createElement("div",{className:l()(a,"alert","alert--"+i,{"alert--fill":o,"alert--icon":!1!==r}),role:"alert"},!1!==r&&n.a.createElement("i",{className:l()("feather","icon-"+(r||c))}),t)}},393:function(e,t,a){var o=a(28).f,n=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in n||a(10)&&o(n,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},394:function(e,t,a){"use strict";a(393);var o=a(0),n=a.n(o),r=a(389);t.a=function(e){var t=e.children,a=e.name;return n.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},n.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},403:function(e,t,a){"use strict";var o=a(1),n=(a(409),a(404),a(52),a(29),a(22),a(21),a(0)),r=a.n(n),l=a(414),i=a(388),c=a.n(i),b=a(398),u=a.n(b),s=a(413),p=37,d=39;function m(e){var t=e.block,a=e.centered,o=e.changeSelectedValue,n=e.className,l=e.handleKeydown,i=e.style,b=e.values,u=e.selectedValue,s=e.tabRefs;return r.a.createElement("div",{className:a?"tabs--centered":null},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",n,{"tabs--block":t}),style:i},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:c()("tab-item",{"tab-item--active":u===t}),key:t,ref:function(e){return s.push(e)},onKeyDown:function(e){return l(s,e.target,e)},onFocus:function(){return o(t)},onClick:function(){return o(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,o=e.changeSelectedValue,n=e.size,i=e.values,c=i;if(c[0].group){var b=_.groupBy(c,"group");c=Object.keys(b).map((function(e){return{label:e,options:b[e]}}))}return r.a.createElement(l.a,{className:"react-select-container react-select--"+n,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:i.find((function(e){return e.value==a})),onChange:function(e){return o(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,l=e.groupId,i=e.label,c=e.placeholder,b=e.select,y=e.size,f=(e.style,e.values),O=e.urlKey,j=Object(s.a)(),g=j.tabGroupChoices,v=j.setTabGroupChoices,w=Object(n.useState)(a),k=w[0],N=w[1];if(null!=l){var T=g[l];null!=T&&T!==k&&N(T)}var C=function(e){N(e),null!=l&&v(l,e)},D=[],A=function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(n.useEffect)((function(){if("undefined"!=typeof window&&window.location&&O){var e=u.a.parse(window.location.search);e[O]&&N(e[O])}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"margin-bottom--"+(y||"md")},i&&r.a.createElement("div",{className:"margin-vert--sm"},i),f.length>1&&(b?r.a.createElement(h,Object(o.a)({changeSelectedValue:C,handleKeydown:A,placeholder:c,selectedValue:k,size:y,tabRefs:D},e)):r.a.createElement(m,Object(o.a)({changeSelectedValue:C,handleKeydown:A,selectedValue:k,tabRefs:D},e)))),n.Children.toArray(t).filter((function(e){return e.props.value===k}))[0])}},408:function(e,t,a){"use strict";var o=a(0),n=a.n(o);t.a=function(e){return n.a.createElement(n.a.Fragment,null,e.children)}}}]);
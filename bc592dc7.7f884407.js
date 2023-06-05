/*! For license information please see bc592dc7.7f884407.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{323:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(1),n=a(9),o=(a(0),a(400)),i=(a(399),a(404),a(406)),c={last_modified_on:"2021-10-18",$schema:"/.meta/.schemas/guides.json",title:"How to Build a Cloud Version of Your Open Source Software - A Case Study with AppWrite - Part 1",description:"Open-source eat the world. More and more great open-source projects are used. One standard method to make those products financially sustainable is to provide a managed version. Meaning, you can enjoy using their product without the hassle of managing the product updates, the backups, the security, and the scaling. This guide will attempt to explain how to build a cloud-managed version of an open-source project.",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","technology: qovery"],hide_pagination:!0},s={categories:[{name:"tutorial",title:"Tutorial",description:"Additional step-by-step resources to leverage even more Qovery",permalink:"/guides/tutorial"}],coverLabel:"How to Build a Cloud Version of Your Open Source Software - A Case Study with AppWrite - Part 1",description:"Open-source eat the world. More and more great open-source projects are used. One standard method to make those products financially sustainable is to provide a managed version. Meaning, you can enjoy using their product without the hassle of managing the product updates, the backups, the security, and the scaling. This guide will attempt to explain how to build a cloud-managed version of an open-source project.",permalink:"/guides/tutorial/how-to-build-a-cloud-version-of-your-open-source-software-part-1",readingTime:"11 min read",source:"@site/guides/tutorial/how-to-build-a-cloud-version-of-your-open-source-software-part-1.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"How to Build a Cloud Version of Your Open Source Software - A Case Study with AppWrite - Part 1",truncated:!1,prevItem:{title:"Helm Charts",permalink:"/guides/advanced/helm-chart"},nextItem:{title:"How to Build a Cloud Version of Your Open Source Software - A Case Study with AppWrite - Part 2",permalink:"/guides/tutorial/how-to-build-a-cloud-version-of-your-open-source-software-part-2"}},l=[{value:"Before getting started",id:"before-getting-started",children:[{value:"Motivation",id:"motivation",children:[]},{value:"Why AppWrite",id:"why-appwrite",children:[]}]},{value:"Technologies",id:"technologies",children:[]},{value:"Architecture",id:"architecture",children:[{value:"User flow 1: Customer request an AppWrite instance",id:"user-flow-1-customer-request-an-appwrite-instance",children:[]},{value:"User flow 2: customer deletes an AppWrite instance",id:"user-flow-2-customer-deletes-an-appwrite-instance",children:[]},{value:"AppWrite cloud frontend and backend (control plane)",id:"appwrite-cloud-frontend-and-backend-control-plane",children:[]},{value:"Qovery and AWS",id:"qovery-and-aws",children:[]},{value:"Qovery and other cloud providers",id:"qovery-and-other-cloud-providers",children:[]},{value:"MariaDB - Data persistence and backup",id:"mariadb---data-persistence-and-backup",children:[]}]},{value:"Contributors",id:"contributors",children:[]},{value:"What\u2019s next",id:"whats-next",children:[]}],u={rightToc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As a developer, I am super impressed by the number of great open-source projects popping around. I think of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://supabase.io/"}),"Supabase")," (an open-source alternative to Firebase), ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://strapi.io/"}),"Strapi")," (open-source headless CMS), ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.meilisearch.com/"}),"Meilisearch")," (open-source search engine), ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://posthog.com/"}),"Posthog")," (open-source product analytics tool), and so many others. For me, these are the tools that most developers will use in the future. One common method to make those products financially sustainable is to provide a managed version. Meaning, you can enjoy using their product without the hassle of managing the product updates, the backups, the security, and the scaling. It is exactly what ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hasura.io/cloud/"}),"Hasura")," did with its cloud version - and it is pretty convenient to use their product in production. However, building a cloud version takes months (sometimes years). What takes time? Hiring platform engineers, building the infrastructure, testing it, monitoring it... All of that takes a considerable amount of time and effort. Luckily, at Qovery, we provide the infrastructure stack that every open-source project needs to build 90% of their cloud-managed version. The remaining 10% are the UI and the business model logic. In this 6-part article series, I will attempt to explain how to build a cloud-managed version of AppWrite. Let\u2019s go!"),Object(o.b)("p",null,"Articles:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Part 1: Introduction and architecture"),Object(o.b)("li",{parentName:"ul"},"Part 2: Build our AppWrite cloud backend and integrate it with the Qovery API"),Object(o.b)("li",{parentName:"ul"},"Part 3: Build our AppWrite cloud frontend and combine it with our cloud backend"),Object(o.b)("li",{parentName:"ul"},"Part 4: Monitor our AppWrite cloud version"),Object(o.b)("li",{parentName:"ul"},"Part 5: Integrate the payment system with Stripe (optional)"),Object(o.b)("li",{parentName:"ul"},"Part 6: Integrate email notification with Courier (optional)"),Object(o.b)("li",{parentName:"ul"},"Part 7: Give your customer a production, staging, and dev environment (optional)")),Object(o.b)("h2",{id:"before-getting-started"},"Before getting started"),Object(o.b)("h3",{id:"motivation"},"Motivation"),Object(o.b)("p",null,"Since I launched ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.qovery.com/"}),"Qovery")," in 2019, I have talked to dozens of founders from great open-source software companies. Most of them were looking to build their cloud-managed service at some point. Some of them even asked me for feedback on building one and asked me to use Qovery as a white-label technology when they discovered it was a full-time job. Qovery is a product simplifying app deployment and infrastructure management on AWS. Time flies, and as Qovery evolves, it is now possible for any open-source project to use Qovery as a white-label technology to provide a cloud version of an open-source project. No hidden cost. Just pick the plan that fits you best and build your cloud version in days instead of months. My team will be proud to help you in your success."),Object(o.b)("h3",{id:"why-appwrite"},"Why AppWrite"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://appwrite.io/"}),"AppWrite")," is quite representative of a \u201cmodern web open-source project\u201d. In this guide, AppWrite is used as a demo project to demonstrate the concept of building a cloud-managed version for an open-source web project. AppWrite is written in PHP for the backend and JS for the frontend. It provides a user-friendly web interface connected to a web API, and it stores the data in MariaDB and Redis databases. The idea is: if it works for AppWrite, then it is good to work for any other web open-source project with a similar technical stack. Feel free to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/rophilogene"}),"contact me")," if you have any concerns."),Object(o.b)("h2",{id:"technologies"},"Technologies"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"AppWrite is a Backend as a Service open-source software. It is similar to Supabase and Firebase to create a backend in a few minutes.")),Object(o.b)("p",null,"Our goal is to provide a fully managed cloud version of AppWrite. Meaning we need to deliver to our customers a way to order their AppWrite instance and use it, while the maintenance is handled by us. It is the most common managed version out there - think MongoDB Atlas. To achieve this, we will use the following technologies:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://appwrite.io/"}),"AppWrite")),": We will use ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://hub.docker.com/r/appwrite/appwrite"}),"AppWrite Docker container image")," to run the latest version of AppWrite."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://mariadb.org/"}),"MariaDB")),": AppWrite is using a MariaDB server for managing persistent database data."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://redis.io/"}),"Redis")),": AppWrite uses a Redis server for managing cache, queues, and scheduled tasks."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://aws.amazon.com/fr/"}),"AWS")),": We will host AppWrite on AWS EKS (Kubernetes), Redis (in-memory database), and MariaDB (AWS RDS) for each customer on AWS."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://www.qovery.com/"}),"Qovery")),": Qovery will create an environment composed of AppWrite, Redis, and MariaDB for each customer on our AWS account."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://hasura.io/"}),"Hasura")),": Low-code GraphQL backend to manage our customers\u2019 data."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://www.gatsbyjs.com/"}),"GatsbyJS")),": JS frontend framework to provide a web interface to our customers."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://www.postgresql.org/"}),"PostgreSQL")),": database to store our customers\u2019 data"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://auth0.com/fr"}),"Auth0")),": To manage the auth of our customers."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://stripe.com/fr"}),"Stripe")),": To charge our customers."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://www.courier.com/"}),"Courier")),": To send an email and Slack notifications to our customers.")),Object(o.b)("p",null,"This bunch of technologies combined enable us to build a cloud version for AppWrite. Let\u2019s take a deeper look at how all of them are interconnected."),Object(o.b)("h2",{id:"architecture"},"Architecture"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/oss-cloud-managed/part-1/architecture.svg",alt:"architecture schema"})),Object(o.b)("p",null,"This schema represents the different layers composing the cloud version of AppWrite. From top to bottom, we will give the details of each layer."),Object(o.b)("h3",{id:"user-flow-1-customer-request-an-appwrite-instance"},"User flow 1: Customer request an AppWrite instance"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/oss-cloud-managed/part-1/flow1.png",alt:"customer request an appwrite instance - behind the scene"})),Object(o.b)("p",null,"Here is what happens when the customer requests a cloud AppWrite instance:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The customer connects on ",Object(o.b)("inlineCode",{parentName:"li"},"cloud.appwrite.com")," (fake domain to represent \u201cAppWrite cloud frontend\u201d)."),Object(o.b)("li",{parentName:"ol"},"The customer requests a new AppWrite instance."),Object(o.b)("li",{parentName:"ol"},"The AppWrite cloud backend calls the Qovery API to create an ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://hub.qovery.com/docs/using-qovery/configuration/environment/"}),"Environment"),"."),Object(o.b)("li",{parentName:"ol"},"The AppWrite cloud backend calls the Qovery API to create a MariaDB database."),Object(o.b)("li",{parentName:"ol"},"The AppWrite cloud backend calls the Qovery API to create a Redis database."),Object(o.b)("li",{parentName:"ol"},"The AppWrite cloud backend calls the Qovery API to create an AppWrite application."),Object(o.b)("li",{parentName:"ol"},"The AppWrite cloud backend calls the Qovery API to bind the AppWrite application to the MariaDB and Redis databases."),Object(o.b)("li",{parentName:"ol"},"The AppWrite cloud backend calls the Qovery API to start the Environment."),Object(o.b)("li",{parentName:"ol"},"The Qovery API returns the temporary URL to the AppWrite cloud backend."),Object(o.b)("li",{parentName:"ol"},"The customer receives the URL of his instance via the AppWrite cloud frontend."),Object(o.b)("li",{parentName:"ol"},"The customer can use his AppWrite instance.")),Object(o.b)("h3",{id:"user-flow-2-customer-deletes-an-appwrite-instance"},"User flow 2: customer deletes an AppWrite instance"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/oss-cloud-managed/part-1/flow2.png",alt:"customer deletes an appwrite instance - behind the scene"})),Object(o.b)("p",null,"Let\u2019s say our customer now wants to delete his cloud AppWrite instance; this is what happens:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The customer connects on ",Object(o.b)("inlineCode",{parentName:"li"},"cloud.appwrite.com")," (fake domain to represent \u201cAppWrite cloud frontend\u201d)."),Object(o.b)("li",{parentName:"ol"},"The customer removes his AppWrite instance."),Object(o.b)("li",{parentName:"ol"},"The AppWrite cloud backend calls the Qovery API to delete the customer ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://hub.qovery.com/docs/using-qovery/configuration/environment/"}),"Environment"),"."),Object(o.b)("li",{parentName:"ol"},"Qovery deletes the AppWrite application, MariaDB, and Redis databases.")),Object(o.b)("p",null,"We can add other steps like payment (part 5), notifications (part 6), and everything you want - they are not required to make our cloud version functional. Let\u2019s now take a deeper look at the infrastructure."),Object(o.b)("h3",{id:"appwrite-cloud-frontend-and-backend-control-plane"},"AppWrite cloud frontend and backend (control plane)"),Object(o.b)("p",null,"The AppWrite cloud frontend and backend are the two components that we have to build from scratch. It includes our business logic and customer management system. We will use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hasura.io/"}),"Hasura")," for the backend and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.gatsbyjs.com/"}),"GatsbyJS")," for the frontend. We will connect the frontend to the backend via a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphql.org/"}),"GraphQL")," API. The advantage of using Hasura instead of coding our web backend is that we have access to many features (Auth0, Stripe support...) right away. Saving days of work."),Object(o.b)("p",null,"The goal here is to provide to the customers a web interface to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create, update, stop, restart, delete AppWrite instances."),Object(o.b)("li",{parentName:"ul"},"Configure their custom domain."),Object(o.b)("li",{parentName:"ul"},"Charge our customers and let them pay for their subscriptions")),Object(o.b)("h3",{id:"qovery-and-aws"},"Qovery and AWS"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.qovery.com/"}),"Qovery")," is the simplest way to deploy apps and manage your infrastructure on AWS. We will use Qovery as an Infrastructure as Code (IaC) API.")),Object(o.b)("p",null,"Qovery provides a production-ready infrastructure on our AWS account in 30 minutes that we will use to host our customers\u2019 instances. The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://api-doc.qovery.com/"}),"Qovery API")," provides a high-level abstraction to create for each customer an isolated ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.qovery.com/docs/using-qovery/configuration/environment/"}),"Environment")," including:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"An AppWrite app instance with the possibility to scale it horizontally."),Object(o.b)("li",{parentName:"ol"},"A MariaDB database."),Object(o.b)("li",{parentName:"ol"},"A Redis database."),Object(o.b)("li",{parentName:"ol"},"An HTTPS endpoint."),Object(o.b)("li",{parentName:"ol"},"The option to bind a custom domain with TLS."),Object(o.b)("li",{parentName:"ol"},"A secure API to manage Environment variables and Secrets.")),Object(o.b)("p",null,"Each Environment is isolated and will be accessible for only one customer. And as admin, Qovery provides a web interface to manage all our customers\u2019 instances and troubleshoot any of their issues."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Curious to know more about how Qovery works? Take a look at ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://hub.qovery.com/docs/devops/qovery-for-devops-introduction/"}),"this page"),".")),Object(o.b)("h3",{id:"qovery-and-other-cloud-providers"},"Qovery and other cloud providers"),Object(o.b)("p",null,"Qovery supports ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.qovery.com/guides/tutorial/how-to-deploy-your-application-on-aws-in-30-minutes/"}),"AWS"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.qovery.com/guides/advanced/guide-digital-ocean/"}),"Digital Ocean"),", and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.qovery.com/guides/advanced/guide-scaleway/"}),"Scaleway"),". In this guide, we will focus on AWS to make it simpler. But keep in mind that you can use another supported cloud provider. You can even imagine a feature where your customers can choose the cloud provider of their choice. This is exactly what \u201cMongoDB Atlas\u201d and \u201cHasura Cloud\u201d do."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Side note"),": Qovery will support ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.qovery.com/guides/advanced/guide-google-cloud-platform/"}),"Google Cloud Platform")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.qovery.com/guides/advanced/guide-microsoft-azure/"}),"Microsoft Azure")," for S1 2022."),Object(o.b)("h3",{id:"mariadb---data-persistence-and-backup"},"MariaDB - Data persistence and backup"),Object(o.b)("p",null,"Our customers expect us to provide a reliable service and manage the database backups by using a cloud version. For AppWrite, MariaDB is the persistent database and needs to be backed up. Four options with pros and cons do exist:"),Object(o.b)("h4",{id:"1st-option-single-tenant-mariadb-container"},"1st option: single-tenant MariaDB container"),Object(o.b)("p",null,"Pros:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cheap"),Object(o.b)("li",{parentName:"ul"},"Fast to spawn"),Object(o.b)("li",{parentName:"ul"},"Physical isolation per customer"),Object(o.b)("li",{parentName:"ul"},"Decent performance")),Object(o.b)("p",null,"Cons:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have to manage the backups")),Object(o.b)("h4",{id:"2nd-option-multi-tenant-mariadb-container"},"2nd option: multi-tenant MariaDB container"),Object(o.b)("p",null,"Pros:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The cheapest option (1 container divided by the number of customers means higher margins)"),Object(o.b)("li",{parentName:"ul"},"Fast to spawn")),Object(o.b)("p",null,"Cons:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have to manage the backups"),Object(o.b)("li",{parentName:"ul"},"No physical isolation per customer"),Object(o.b)("li",{parentName:"ul"},"The more you have customers, the poorest the performance is."),Object(o.b)("li",{parentName:"ul"},"Potential security breaches as many customers are using the same database instance.")),Object(o.b)("h4",{id:"3rd-option-single-tenant-managed-mariadb-database-aws-rds-mariadb"},"3rd option: single-tenant managed MariaDB database (AWS RDS MariaDB)"),Object(o.b)("p",null,"Pros:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Backup managed by AWS (point-in-time recovery included)"),Object(o.b)("li",{parentName:"ul"},"Physical isolation per customer (security++)"),Object(o.b)("li",{parentName:"ul"},"The most performant"),Object(o.b)("li",{parentName:"ul"},"Scalable (managed by AWS)")),Object(o.b)("p",null,"Cons:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The most expensive option (~$11 per instance for the cheapest one on AWS US-EAST-2)")),Object(o.b)("h4",{id:"4th-option-multi-tenant-managed-mariadb-database-aws-rds-mariadb"},"4th option: multi-tenant managed MariaDB database (AWS RDS MariaDB)"),Object(o.b)("p",null,"Pros:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Backup managed by AWS (point-in-time recovery included)"),Object(o.b)("li",{parentName:"ul"},"Higher performance than container version"),Object(o.b)("li",{parentName:"ul"},"Scalable (managed by AWS)"),Object(o.b)("li",{parentName:"ul"},"Expensive for a few customers, but the more customers you have, the cheaper it is.")),Object(o.b)("p",null,"Cons:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The most expensive option (~$11 per instance for the cheapest one on AWS us-east-2)"),Object(o.b)("li",{parentName:"ul"},"Potential security breaches as many customers are using the same database instance.")),Object(o.b)("p",null,"We will pick the third option (single-tenant with managed MariaDB database) to create a state-of-the-art cloud version, but you are free to choose the one you want for your customer. Do not forget your customer expects you to take care of their business."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Side note"),": AppWrite uses Redis as a caching system. Then, we will use a Redis container instance which is the cheapest."),Object(o.b)("h2",{id:"contributors"},"Contributors"),Object(o.b)("p",null,"Here is the list of contributors to this first part:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ricardo Sueiras - Principal Advocate in OSS at AWS"),Object(o.b)("li",{parentName:"ul"},"Raman Sharma - VP Product Marketing at DigitalOcean"),Object(o.b)("li",{parentName:"ul"},"Anton Babenko - AWS Community Hero and Hashicorp Ambassador"),Object(o.b)("li",{parentName:"ul"},"Javier Viola Villanueva - Simulation Network Lead at Parity"),Object(o.b)("li",{parentName:"ul"},"Ziad Ghalleb - Product Marketing Manager at Gitguardian"),Object(o.b)("li",{parentName:"ul"},"Oliver Juhl - CTO and co-founder at Medusa"),Object(o.b)("li",{parentName:"ul"},"Yann Irbah - SRE at Fewlines"),Object(o.b)("li",{parentName:"ul"},"Laurent Doguin - ex VP Developer Relation at Clever Cloud"),Object(o.b)("li",{parentName:"ul"},"Qovery Team and our community ambassadors (Aggis, Stun3r, Kartik)")),Object(o.b)("p",null,"Thank you to our contributors for their review and suggestions."),Object(o.b)("h2",{id:"whats-next"},"What\u2019s next"),Object(o.b)("p",null,"Thank you all for taking the time to read until the end. We will build our AppWrite cloud backend and integrate it into the Qovery API in the next part."),Object(o.b)(i.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}p.isMDXComponent=!0},398:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)a.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},399:function(e,t,a){"use strict";a(401);var r=a(0),n=a.n(r),o=a(398),i=a.n(o);a(132);t.a=function(e){var t=e.children,a=e.classNames,r=e.fill,o=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return n.a.createElement("div",{className:i()(a,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&n.a.createElement("i",{className:i()("feather","icon-"+(o||s))}),t)}},400:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return a?n.a.createElement(m,c({ref:t},l,{components:a})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},401:function(e,t,a){var r=a(12);r(r.P,"Array",{fill:a(402)}),a(74)("fill")},402:function(e,t,a){"use strict";var r=a(27),n=a(75),o=a(26);e.exports=function(e){for(var t=r(this),a=o(t.length),i=arguments.length,c=n(i>1?arguments[1]:void 0,a),s=i>2?arguments[2]:void 0,l=void 0===s?a:n(s,a);l>c;)t[c++]=e;return t}},403:function(e,t,a){var r=a(28).f,n=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in n||a(10)&&r(n,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},404:function(e,t,a){"use strict";a(403);var r=a(0),n=a.n(r),o=a(399);t.a=function(e){var t=e.children,a=e.name;return n.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},n.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},405:function(e,t,a){"use strict";var r=a(1),n=a(0),o=a.n(n),i=a(39),c=a(407),s=a(20),l=a.n(s);t.a=function(e){var t,a=e.to,s=e.href,u=a||s,p=Object(c.a)(u),b=Object(n.useRef)(!1),d=l.a.canUseIntersectionObserver;return Object(n.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,p]),u&&p?o.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(u),b.current=!0)},innerRef:function(e){var a,r;d&&e&&p&&(a=e,r=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),r())}))}))).observe(a))},to:u})):o.a.createElement("a",Object(r.a)({},e,{href:u}))}},406:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(405),i=a(398),c=a.n(i);a(133);t.a=function(e){var t=e.children,a=e.className,r=e.badge,i=e.leftIcon,s=e.rightIcon,l=e.size,u=e.target,p=e.to,b=c()("jump-to","jump-to--"+l,a),d=n.a.createElement("div",{className:"jump-to--inner"},n.a.createElement("div",{className:"jump-to--inner-2"},i&&n.a.createElement("div",{className:"jump-to--left"},n.a.createElement("i",{className:"feather icon-"+i})),n.a.createElement("div",{className:"jump-to--main"},r?n.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),n.a.createElement("div",{className:"jump-to--right"},n.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return u?n.a.createElement("a",{href:p,target:u,className:b},d):n.a.createElement(o.a,{to:p,className:b},d)}},407:function(e,t,a){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return r}))}}]);
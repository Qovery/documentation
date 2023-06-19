/*! For license information please see 9feef5a0.a4a2988f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{295:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return m}));var n=a(1),r=a(9),o=(a(0),a(410)),i=a(409),c=a(417),l=a(419),s=a(414),b={last_modified_on:"2023-06-08",title:"Databases",description:"Learn how to configure Databases on Qovery",sidebar_label:"hidden",hide_pagination:!0},d={id:"using-qovery/configuration/database",title:"Databases",description:"Learn how to configure Databases on Qovery",source:"@site/docs/using-qovery/configuration/database.md",permalink:"/docs/using-qovery/configuration/database",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Application",permalink:"/docs/using-qovery/configuration/application"},next:{title:"PostgreSQL",permalink:"/docs/using-qovery/configuration/database/postgresql"}},u=[{value:"Create a database",id:"create-a-database",children:[]},{value:"Configuration",id:"configuration",children:[{value:"General",id:"general",children:[]},{value:"Resources",id:"resources",children:[]}]},{value:"Credentials and connectivity",id:"credentials-and-connectivity",children:[]},{value:"Delete your database instance",id:"delete-your-database-instance",children:[]},{value:"Available Databases",id:"available-databases",children:[]}],p={rightToc:u};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s.a,{name:"documentation",mdxType:"Assumptions"},Object(o.b)("p",null,"You have created an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environment"),".")),Object(o.b)("p",null,"Qovery natively lets you deploy and access the most popular SQL and NoSQL databases available on the major cloud providers. Reliability and resiliency are at the heart of their services, so you don't have to worry about your data on Qovery. "),Object(o.b)("p",null,"Qovery natively supports the following databases:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"PostgreSQL"),Object(o.b)("li",{parentName:"ul"},"MySQL"),Object(o.b)("li",{parentName:"ul"},"MongoDB"),Object(o.b)("li",{parentName:"ul"},"Redis")),Object(o.b)("p",null,'Qovery can natively operate a database in two different ways (called "Mode"):'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"As a Docker Container: Testing / dev : Qovery can provide the database as Docker container with attached persistent storage directly on your Kubernetes cluster (1 instance). They are perfect for development and testing, as they are significantly cheaper than services provided by cloud providers. In the Qovery UI these will be called Databases in ",Object(o.b)("inlineCode",{parentName:"li"},"Container")," mode"),Object(o.b)("li",{parentName:"ul"},"As a Cloud provider managed database: Qovery can create and manage the lifecycle of a cloud provider managed database instance (for example via RDS on AWS). These are perfect for production since they guarantee the right level of resiliance, performance and data security best practices. In the Qovery UI these will be called Databases in ",Object(o.b)("inlineCode",{parentName:"li"},"Managed")," mode")),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},"If you chose the Managed mode, Qovery will manage the entire lifecycle of your database for you. DO NOT change the database settings directly from within the cloud provider console."),Object(o.b)("p",null,"If the natively supported databases and operation modes are not enough for you, we can still offer you an alternative solution depending on your use case:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use an existing DB on a dedicated VPC: your applications can access this database via VPC peering. Have a look at ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/guides/tutorial/aws-vpc-peering-with-qovery/"}),"this guide")," for more information."),Object(o.b)("li",{parentName:"ul"},"Create my own database: You will be able to manage the lifecycle of this database using the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/lifecycle-job/"}),"lifecycle jobs"),". Have a look at ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Qovery/lifecycle-job-examples/tree/main/examples/aws-rds-with-terraform"}),"this example")," which allows you to deploy your custom RDS instance on AWS via Terraform.")),Object(o.b)("p",null,"The following sections will show you how you can create and manage the databases natively supported by Qovery. For any other use case, please refer to the guides provided above. "),Object(o.b)("h2",{id:"create-a-database"},"Create a database"),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Check out ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/getting-started/create-a-database/"}),"this video guide")," to create and deploy your first database")),Object(o.b)(l.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("p",null,"Navigate to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Console"))),Object(o.b)("li",null,Object(o.b)("p",null,"Select your project and environment")),Object(o.b)("li",null,Object(o.b)("p",null,"Click ",Object(o.b)("inlineCode",{parentName:"p"},"Add Database")," button"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/configuration/database/db-1.png",alt:"Database"}))),Object(o.b)("li",null,Object(o.b)("p",null,"Select database type, name, description (optional), version, mode and accessibility"),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},"Please refer to the Configuration section below to know more about each of these parameters."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/configuration/database/db-2.png",alt:"General Information"}))),Object(o.b)("li",null,Object(o.b)("p",null,'Within the "Resources" step you will find different configuration based on the selected ',Object(o.b)("inlineCode",{parentName:"p"},"mode"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you are using the database in ",Object(o.b)("inlineCode",{parentName:"li"},"Container")," mode, you can set the CPU, RAM and storage that will be assigned to the instance running the docker image of the database."),Object(o.b)("li",{parentName:"ul"},"If you are using the database in ",Object(o.b)("inlineCode",{parentName:"li"},"Managed")," mode, you can select the instance type and the storage that will be assigned to the instance running the database. Note, the instance selected instance type has a direct impact on your cloud provider cost.")),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/configuration/database/db-3.png",alt:"Resources"}))),Object(o.b)("li",null,"At the end a recap will allow you to just create the database or create and deploy it",Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/configuration/database/db-4.png",alt:"Recap"}))))),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Once created, you can access the configuration of a database at any time via the Settings tab available on the database page"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/configuration/database/settings.png",alt:"Database Settings"})),Object(o.b)("p",null,"You can find below the description of each of the tabs available in this section"),Object(o.b)("h3",{id:"general"},"General"),Object(o.b)("h4",{id:"modes"},"Modes"),Object(o.b)("p",null,"As described at the beginning of this document, databases can operate in two modes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Managed"),Object(o.b)("li",{parentName:"ul"},"Container")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Managed")," databases are perfect for production - they are provided and managed by major cloud providers like AWS to make sure your production data is well managed."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Container")," databases are managed by Qovery as Docker containers with attached persistent storage directly on your Kubernetes cluster (1 instance). They are perfect for development and testing, as they are significantly cheaper than services provided by cloud providers."),Object(o.b)("p",null,"Please refer to the dedicated database sub-pages to get more information on the supported mode for each cloud provider."),Object(o.b)("h4",{id:"versions"},"Versions"),Object(o.b)("p",null,"We regularly update the version available for each database. Please refer to the dedicated database sub-pages to get more information on the supported version for each database types and cloud provider."),Object(o.b)("p",null,"You can upgrade the version of your database directly from the Qovery interface."),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Once the upgrade is requested, the cloud provider applies the update based on its own internal rules and might cause a downtime of your database."),Object(o.b)("p",null,"For example, by default AWS applies major updates on the database during the ",Object(o.b)("inlineCode",{parentName:"p"},"maintenance window"),", the instance might be rebooted during this window. This also means that your upgrade request will not be applied immediately but you can force the switch directly from your AWS console AFTER having launched the upgrade on Qovery. "),Object(o.b)("p",null,"Have a look at your cloud provider documentation to know more about how version upgrades are managed:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"AWS RDS DB engine upgrade:  ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.MySQL.html"}),"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.MySQL.html")),Object(o.b)("li",{parentName:"ul"},"AWS maintenance window: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html"}),"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html")))),Object(o.b)("h4",{id:"accessibility"},"Accessibility"),Object(o.b)("p",null,"This parameter let you decide to expose publicly or not your database."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Public")," access will make your database accessible via the public network"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Private")," access will make your database accessible only by applications in your environment")),Object(o.b)("h3",{id:"resources"},"Resources"),Object(o.b)("h4",{id:"cpu--memory"},"CPU / Memory"),Object(o.b)("p",null,"This configuration is available only for databases in ",Object(o.b)("strong",{parentName:"p"},"Container")," mode"),Object(o.b)("p",null,"You can select the CPU assigned to the Kuerbetes pod running the database instance"),Object(o.b)("h4",{id:"instance-type"},"Instance Type"),Object(o.b)("p",null,"This configuration is available only for databases in ",Object(o.b)("strong",{parentName:"p"},"Managed")," mode"),Object(o.b)("p",null,"You can modify the CPU assigned to the instance running your database (And thus, its resouces)."),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Once the upgrade is requested, the cloud provider applies the update based on its own internal rules and might cause a downtime of your database."),Object(o.b)("p",null,"For example, by default AWS applies major updates on the database during the ",Object(o.b)("inlineCode",{parentName:"p"},"maintenance window"),", the instance might be rebooted during this window. This also means that your upgrade request will not be applied immediately but you can force the maintenance window to start immediately from your AWS console AFTER having launched the upgrade on Qovery. "),Object(o.b)("p",null,"Have a look at your cloud provider documentation to know more about instance type upgrades are managed:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"AWS RDS instance changes: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.htm"}),"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.htm")),Object(o.b)("li",{parentName:"ul"},"AWS maintenance window: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html"}),"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html")))),Object(o.b)("h4",{id:"storage"},"Storage"),Object(o.b)("p",null,"You can select the size of the persistant storage attached to the container database."),Object(o.b)("h2",{id:"credentials-and-connectivity"},"Credentials and connectivity"),Object(o.b)("p",null,"When a database is created in your environment, Qovery will automatically create and inject a set of BUILT_IN environment variables containing all the parameters necessary to your application to connect to the database."),Object(o.b)("p",null,"This is the list of environment variables and secrets that will be automatically created:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"QOVERY",Object(o.b)("em",{parentName:"td"},Object(o.b)("inlineCode",{parentName:"em"},"<DATABASE_TYPE>")),Object(o.b)("inlineCode",{parentName:"td"},"<DBID>"),"_DEFAULT_DATABASE_NAME"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Env Var containing the default database name"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"postgres")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"QOVERY",Object(o.b)("em",{parentName:"td"},Object(o.b)("inlineCode",{parentName:"em"},"<DATABASE_TYPE>")),Object(o.b)("inlineCode",{parentName:"td"},"<DBID>"),"_HOST"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Env Var containing the external hostname of the database (if you need access from the outside and the DB is configured with visibility "PUBLIC")'),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zf5206c84-postgresql.oom.sh")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"QOVERY",Object(o.b)("em",{parentName:"td"},Object(o.b)("inlineCode",{parentName:"em"},"<DATABASE_TYPE>")),Object(o.b)("inlineCode",{parentName:"td"},"<DBID>"),"_HOST_INTERNAL"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Env Var containing the internal hostname of the database (if you need access it from within the cluster network)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zf5206c84-postgresql")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"QOVERY",Object(o.b)("em",{parentName:"td"},Object(o.b)("inlineCode",{parentName:"em"},"<DATABASE_TYPE>")),Object(o.b)("inlineCode",{parentName:"td"},"<DBID>"),"_LOGIN"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Env Var containing the username of the DB"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"superuser")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"QOVERY",Object(o.b)("em",{parentName:"td"},Object(o.b)("inlineCode",{parentName:"em"},"<DATABASE_TYPE>")),Object(o.b)("inlineCode",{parentName:"td"},"<DBID>"),"_PORT"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Env Var containing the port to be used for connecting to the DB"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5432")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"QOVERY",Object(o.b)("em",{parentName:"td"},Object(o.b)("inlineCode",{parentName:"em"},"<DATABASE_TYPE>")),Object(o.b)("inlineCode",{parentName:"td"},"<DBID>"),"_HOST"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Secret containing the external URI to be used for connecting to the DB (if you need access from the outside and the DB is configured with visibility "PUBLIC")'),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sql://root:xxxx@z4a58c1e2-postgresql.oom.sh:27017/admin")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"QOVERY",Object(o.b)("em",{parentName:"td"},Object(o.b)("inlineCode",{parentName:"em"},"<DATABASE_TYPE>")),Object(o.b)("inlineCode",{parentName:"td"},"<DBID>"),"_HOST_INTERNAL"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Secret containing the internal URI to be used for connecting to the DB (if you need access it from within the cluster network)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sql://root:xxxx@z4a58c1e2-postgresql:27017/admin")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"QOVERY",Object(o.b)("em",{parentName:"td"},Object(o.b)("inlineCode",{parentName:"em"},"<DATABASE_TYPE>")),Object(o.b)("inlineCode",{parentName:"td"},"<DBID>"),"_PASSWORD"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Secret containing the password of the DB"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dbsecret")))),Object(o.b)("p",null,"Please note that the built-in variables follow the naming pattern: ",Object(o.b)("inlineCode",{parentName:"p"},"QOVERY_DATABASETYPE")," + <your_db_name> + <type_of_variable> where:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<your_db_name>")," is the name of your database"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<type_of_variable>")," is the type of variable we inject, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"PASSWORD"),", ",Object(o.b)("inlineCode",{parentName:"li"},"VERSION"),", ",Object(o.b)("inlineCode",{parentName:"li"},"CONNECTION_URI")," and so on.")),Object(o.b)("p",null,"To know how to access your database from your application, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/#connecting-to-a-database"}),"have a look at the database section"),"."),Object(o.b)("h2",{id:"delete-your-database-instance"},"Delete your database instance"),Object(o.b)(i.a,{type:"danger",mdxType:"Alert"},Object(o.b)("p",null,"Delete action drops the service and its data!")),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"As Managed Services databases (like RDS) are mainly used for production, Qovery do not delete automated snapshots and backups on deletion.\nIt is up to the user or Cloud provider Administrator to delete it manually.")),Object(o.b)(l.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("p",null,"Navigate to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Console"))),Object(o.b)("li",null,Object(o.b)("p",null,"Select your environment and database")),Object(o.b)("li",null,Object(o.b)("p",null,"In database overview, click on ",Object(o.b)("inlineCode",{parentName:"p"},"Action")," remove button"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/configuration/database/delete.png",alt:"Database Remove"})))),Object(o.b)("h2",{id:"available-databases"},"Available Databases"),Object(o.b)(c.a,{to:"/docs/using-qovery/configuration/database/mongodb/",mdxType:"Jump"},"Mongodb"),Object(o.b)(c.a,{to:"/docs/using-qovery/configuration/database/mysql/",mdxType:"Jump"},"Mysql"),Object(o.b)(c.a,{to:"/docs/using-qovery/configuration/database/postgresql/",mdxType:"Jump"},"Postgresql"),Object(o.b)(c.a,{to:"/docs/using-qovery/configuration/database/redis/",mdxType:"Jump"},"Redis")))}m.isMDXComponent=!0},408:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},409:function(e,t,a){"use strict";a(411);var n=a(0),r=a.n(n),o=a(408),i=a.n(o);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:i()(a,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},410:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return a?r.a.createElement(m,c({ref:t},s,{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},411:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(412)}),a(74)("fill")},412:function(e,t,a){"use strict";var n=a(27),r=a(75),o=a(26);e.exports=function(e){for(var t=n(this),a=o(t.length),i=arguments.length,c=r(i>1?arguments[1]:void 0,a),l=i>2?arguments[2]:void 0,s=void 0===l?a:r(l,a);s>c;)t[c++]=e;return t}},413:function(e,t,a){var n=a(28).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},414:function(e,t,a){"use strict";a(413);var n=a(0),r=a.n(n),o=a(409);t.a=function(e){var t=e.children,a=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},415:function(e,t,a){"use strict";var n=a(1),r=a(0),o=a.n(r),i=a(39),c=a(418),l=a(20),s=a.n(l);t.a=function(e){var t,a=e.to,l=e.href,b=a||l,d=Object(c.a)(b),u=Object(r.useRef)(!1),p=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!p&&d&&window.docusaurus.prefetch(b),function(){p&&t&&t.disconnect()}}),[b,p,d]),b&&d?o.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){u.current||(window.docusaurus.preload(b),u.current=!0)},innerRef:function(e){var a,n;p&&e&&d&&(a=e,n=function(){window.docusaurus.prefetch(b)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:b})):o.a.createElement("a",Object(n.a)({},e,{href:b}))}},416:function(e,t,a){"use strict";var n=a(420),r=a(51);function o(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var a=function(e){var t;switch(e.arrayFormat){case"index":return function(e,a,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=a):n[e]=a};case"bracket":return function(e,a,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=[a]:n[e]=a};default:return function(e,t,a){void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t=r({arrayFormat:"none"},t)),n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),a(decodeURIComponent(r),o,n)})),Object.keys(n).sort().reduce((function(e,t){var a=n[t];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(a):e[t]=a,e}),Object.create(null))):n},t.stringify=function(e,t){var a=function(e){switch(e.arrayFormat){case"index":return function(t,a,n){return null===a?[o(t,e),"[",n,"]"].join(""):[o(t,e),"[",o(n,e),"]=",o(a,e)].join("")};case"bracket":return function(t,a){return null===a?o(t,e):[o(t,e),"[]=",o(a,e)].join("")};default:return function(t,a){return null===a?o(t,e):[o(t,e),"=",o(a,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var r=e[n];if(void 0===r)return"";if(null===r)return o(n,t);if(Array.isArray(r)){var i=[];return r.slice().forEach((function(e){void 0!==e&&i.push(a(n,e,i.length))})),i.join("&")}return o(n,t)+"="+o(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},417:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(415),i=a(408),c=a.n(i);a(133);t.a=function(e){var t=e.children,a=e.className,n=e.badge,i=e.leftIcon,l=e.rightIcon,s=e.size,b=e.target,d=e.to,u=c()("jump-to","jump-to--"+s,a),p=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},i&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+i})),r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return b?r.a.createElement("a",{href:d,target:b,className:u},p):r.a.createElement(o.a,{to:d,className:u},p)}},418:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},419:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(408),a(416)),i=a.n(o);a(134);t.a=function(e){var t=e.children,a=e.headingDepth,o=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(l),b=Object(n.useState)(null),d=b[0],u=b[1];return r.a.createElement("div",{className:"steps steps--h"+a},t,!o&&!d&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return u("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==d&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},420:function(e,t,a){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
/*! For license information please see b2880863.7009f51d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{313:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),l=(n(0),n(410)),c=n(409),i=(n(417),n(414),{last_modified_on:"2023-08-04",title:"Members and RBAC",description:"Learn how to manage the RBAC via Qovery"}),b={id:"using-qovery/configuration/organization/members-rbac",title:"Members and RBAC",description:"Learn how to manage the RBAC via Qovery",source:"@site/docs/using-qovery/configuration/organization/members-rbac.md",permalink:"/docs/using-qovery/configuration/organization/members-rbac",sidebar:"docs",previous:{title:"Organization",permalink:"/docs/using-qovery/configuration/organization"},next:{title:"Git Repository access",permalink:"/docs/using-qovery/configuration/organization/git-repository-access"}},o=[{value:"Organization members",id:"organization-members",children:[]},{value:"Roles-Based access control (RBAC)",id:"roles-based-access-control-rbac",children:[{value:"Custom roles",id:"custom-roles",children:[]}]},{value:"Cluster Level Permissions",id:"cluster-level-permissions",children:[{value:"Examples",id:"examples",children:[]},{value:"Example 2, advanced setup",id:"example-2-advanced-setup",children:[]}]}],s={rightToc:o};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"You can manage from the organization settings the members capable to access your organization and as well their permission via an RBAC system."),Object(l.b)("p",null,"You can access the organization settings using the ",Object(l.b)("inlineCode",{parentName:"p"},"Wheel")," button on the left nav bar"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/organization/access_settings.png",alt:"How to access your organization settings"})),Object(l.b)("h2",{id:"organization-members"},"Organization members"),Object(l.b)("p",null,"This section allows you to manage the members of your organization (add / remove) and as well assign a role to each of them."),Object(l.b)("p",null,"You can invite someone to join your organization by email. Then he will get access to your projects and will be able to contribute."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/organization/members.png",alt:"Qovery - List all members within an organization"})),Object(l.b)(c.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"Changing the role of a member requires the user to logout/login to make the changes effective or wait a few minutes (max 1 hour)")),Object(l.b)("h2",{id:"roles-based-access-control-rbac"},"Roles-Based access control (RBAC)"),Object(l.b)("p",null,"Qovery allows you to control the access to your cluster and environment resources by defining and assigning  roles to your users."),Object(l.b)("p",null,"By default, five roles are created within your organization (Basic Roles):"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Owner: the user has full access on the organization"),Object(l.b)("li",{parentName:"ul"},"Admin: same as the owner, the has full access to the organization but he cannot delete it"),Object(l.b)("li",{parentName:"ul"},"DevOps: the user can manage the organization infrastructure (clusters/registry/webhook setup) and manage the deployments of any environment within the organization."),Object(l.b)("li",{parentName:"ul"},"Billing Manager: the user can only manage the billing of the organization"),Object(l.b)("li",{parentName:"ul"},"Viewer: the user has read-only access to any section of the organization")),Object(l.b)("p",null,"More in detail, you can find the associated permissions below:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Action"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Owner"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Admin"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"DevOps"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Billing Manager"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Viewer"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Read organization"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Edit organization"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Delete organization"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Manage billing"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Manage members & roles"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Manage cluster & container registry"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Manage organization setup (webhooks, API tokens etc..)"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Read ANY project"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Edit/Delete ANY project"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Create project"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Read ANY environment"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Edit/Delete ANY environment or service"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Create environment or service"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Add/Edit/Delete environment variables and secrets"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Deploy/Stop ANY environment or service"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Connect via shell to ANY application"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")))),Object(l.b)(c.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"Only one user can be Owner of an organization. You can transfer the ownership to another member via the menu available on the target member")),Object(l.b)("h3",{id:"custom-roles"},"Custom roles"),Object(l.b)("p",null,"If the basic roles are not enough given your internal organization, Qovery allows you to customize the accesses to your clusters, projets and environments by defining ",Object(l.b)("inlineCode",{parentName:"p"},"Custom Roles"),"."),Object(l.b)("p",null,"A ",Object(l.b)("inlineCode",{parentName:"p"},"Custom role")," allows you to customize:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Cluster Level Permissions: you can specify the access to the existing computing resources (manage cluster X, create environments on cluster Y, read-only access on cluster K)"),Object(l.b)("li",{parentName:"ul"},"Project Level Permissions: you can specify the access to the projects and their environments by environment type (deploy type X, create type K etc..)")),Object(l.b)(c.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"Users with a custom role cannot create clusters or manage any of the organization settings (members, webhook, API token etc..)")),Object(l.b)("p",null,'To create a custom role, go in the Roles & Permissions section press "Add new Role"'),Object(l.b)("p",null,"For the new role, you will be able to specify:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The name of the role"),Object(l.b)("li",{parentName:"ul"},"A description"),Object(l.b)("li",{parentName:"ul"},"Cluster Level permissions"),Object(l.b)("li",{parentName:"ul"},"Project Level Permissions")),Object(l.b)("h2",{id:"cluster-level-permissions"},"Cluster Level Permissions"),Object(l.b)("p",null,"This section allows you to fine tune the access to the computing resources. For each cluster of your organization, you will be able to specify an access permission (ordered by permission level):"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Permission Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Read-Only"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The user can access the cluster information (name, region etc..). Minimum permission level.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Create Environment"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'The user can create environments on this cluster. Only users with this role could allocate resources for their environments on this cluster. Further environment level permissions (like deployment rights) are managed via the "Project Permissions", see below')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Full Access"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The user can create create environments on this cluster and as well manage the cluster's settings (start/stop, change number and type of nodes etc..). This permission allows a group of users to manage by themselves a specific cluster")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Project Level Permissions\nThis section allows you to fine tune the access to the projects and their environments. The environment access is managed by "Environment Type" to simplify the configuration (Production, Staging, Development, Preview). For each project of your organization and by environment type, you will be able to specify an access permission (ordered by permission level):')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Permission Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No Access"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'The user has no access to this environment type. If the user has "No Access" on all the environment types, he will not have access to the project')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Read-Only"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Access in read-only to this environment type. Useful to restrict access on sensitive environments")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Deploy"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Manage the deployments of this environment type, access the logs, connect via SSH to the application and manage its environment variables")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Manage"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Manage the deployments and the settings of this environment type (including adding or removing services)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Full Access"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The user is admin of the project and can do everything he wants on it (no matter the environment type)")))),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/organization/custom_role_creation.png",alt:"Qovery - custom role"})),Object(l.b)("p",null,'Once the role is created, you can assign it to a member of your organization within the "Members" section. You can also update the permissions by editing the role from the Roles&Permissions screen'),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("p",null,"Within this section, we will try to provide you some example of roles & permission setup"),Object(l.b)("h4",{id:"example-1-simple-setup"},"Example 1, simple setup"),Object(l.b)("p",null,'An organization has 3 clusters ("prod cluster", \u201cstaging cluster\u201d, \u201cdev cluster\u201d) and 1 project P1. The organization has a CTO, a devops and some developers.\nThe roles & permissions could be configured in this way:'),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"CTO = Owner"),Object(l.b)("li",{parentName:"ul"},"Devops = Devops or Admin"),Object(l.b)("li",{parentName:"ul"},"Developers: we want these users capable of accessing the project, having read access to the prod clusters/env, managing deployments on the staging cluster (but not creating new environments on it) and doing whatever they want for the development environments on the dev cluster. So the configuration will look like:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Create a new Role \u201cdeveloper\u201d with the following permissions:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Cluster Level Permissions:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Prod cluster \u2192 Read-Only"),Object(l.b)("li",{parentName:"ul"},"Staging cluster \u2192 Read-Only"),Object(l.b)("li",{parentName:"ul"},"Dev cluster \u2192 Create Environment (they can create environments on this cluster)"))),Object(l.b)("li",{parentName:"ul"},'Project Level Permissions for the project "P1":',Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Environment access (by env type)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"prod = Read-Only"),Object(l.b)("li",{parentName:"ul"},"staging = deploye (i.e. they can deploy env of type \u201cstaging\u201d)"),Object(l.b)("li",{parentName:"ul"},"development = Full Access  (i.e. they can manage and create env of type \u201cdev\u201d)")))))))))),Object(l.b)("h3",{id:"example-2-advanced-setup"},"Example 2, advanced setup"),Object(l.b)("p",null,'An organization with 4 dev clusters (\u201cprod cluster\u201d, \u201cstaging clyster\u201d, 2 Dev clusters called \u201cdev cluster team 1\u201d and "dev cluster team 2\u201d) and 2 projects P1 and P2. The organization has a CTO, a devops, 2 dev teams with an \u201cacting dev-ops\u201d in it who manages the dev cluster on behalf of the devops.\nThe roles & permissions could be configured in this way:'),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"CTO = Owner"),Object(l.b)("li",{parentName:"ul"},"Devops = Devops or Admin"),Object(l.b)("li",{parentName:"ul"},'Dev team 1: we want these users capable of accessing the project P1, having no access to the prod env and managing their deployments only on the "dev cluster Dev team 1" for their development environments.So the config will look like:',Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Create a new Role \u201cDev Team 1\u201d",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Cluster Level Permissions:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Prod cluster \u2192 Read-Only"),Object(l.b)("li",{parentName:"ul"},"Staging cluster \u2192 Read-Only"),Object(l.b)("li",{parentName:"ul"},"Dev cluster team 1 \u2192 Create Environment (they can create envs only on their dev cluster)"),Object(l.b)("li",{parentName:"ul"},"Dev cluster team 2 \u2192 Read-Only"))),Object(l.b)("li",{parentName:"ul"},"Project Level Permissions:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Config on the project \u201cP1\u201d",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Environment access (by env type)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"prod = no-access"),Object(l.b)("li",{parentName:"ul"},"staging = deploy"),Object(l.b)("li",{parentName:"ul"},"dev = Full Access (i.e. they can do whatever they want on env of type \u201cdev\u201d)"))))),Object(l.b)("li",{parentName:"ul"},"Config on the project \u201cP2\u201d (i.e. they can't access P2)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Environment access (by env type)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"prod = no-access"),Object(l.b)("li",{parentName:"ul"},"staging = no-access"),Object(l.b)("li",{parentName:"ul"},"dev = no-access"))))))))))),Object(l.b)("li",{parentName:"ul"},'Dev team 2: we want these users capable of accessing the project P2, having no access to the prod env and managing their deployments only on the "dev cluster team 2" for their development environments. So the config will look like:',Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Create a new Role \u201cDev Team 2\u201d",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Cluster Level Permissions:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Prod cluster \u2192 Read-Only"),Object(l.b)("li",{parentName:"ul"},"Staging cluster \u2192 Read-Only"),Object(l.b)("li",{parentName:"ul"},"Dev cluster team 1 \u2192 Read-Only"),Object(l.b)("li",{parentName:"ul"},"Dev cluster team 2 \u2192 Create Environment (they can create envs only on their dev cluster)"))),Object(l.b)("li",{parentName:"ul"},"Project Level Permissions:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Config on the project \u201cP1\u201d (i.e. they can't access P1)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Environment access (by env type)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"prod = no-access"),Object(l.b)("li",{parentName:"ul"},"staging = no-access"),Object(l.b)("li",{parentName:"ul"},"dev = no-access"))))),Object(l.b)("li",{parentName:"ul"},"Config on the project \u201cP2\u201d",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Environment access (by env type)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"prod = no-access"),Object(l.b)("li",{parentName:"ul"},"staging = deploy"),Object(l.b)("li",{parentName:"ul"},"dev = Full Access (i.e. they can do whatever they want on env of type \u201cdev\u201d)"))))))))))),Object(l.b)("li",{parentName:"ul"},"Acting DevOps user: we want this user capable of accessing the project, having read access to the prod env, managing the dev clusters and all the environments on it. So the config will look like this:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Create a new Group \u201cActing DevOps\u201d",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Cluster Level Permissions:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Prod cluster \u2192 Read-Only"),Object(l.b)("li",{parentName:"ul"},"Staging cluster \u2192 Create Environment"),Object(l.b)("li",{parentName:"ul"},"Dev1 cluster \u2192 Full Access"),Object(l.b)("li",{parentName:"ul"},"Dev2 cluster \u2192 Full Access"))),Object(l.b)("li",{parentName:"ul"},"Project permissions settings",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Config on the project \u201cP1\u201d",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Admin (i.e.: full access to the project)"))),Object(l.b)("li",{parentName:"ul"},"Config on the project \u201cP2\u201d",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Admin (i.e.: full access to the project)")))))))))))}u.isMDXComponent=!0},408:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===l)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},409:function(e,t,n){"use strict";n(411);var a=n(0),r=n.n(a),l=n(408),c=n.n(l);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,l=e.icon,i=e.type,b=null;switch(i){case"danger":b="alert-triangle";break;case"success":b="check-circle";break;case"warning":b="alert-triangle";break;default:b="info"}return r.a.createElement("div",{className:c()(n,"alert","alert--"+i,{"alert--fill":a,"alert--icon":!1!==l}),role:"alert"},!1!==l&&r.a.createElement("i",{className:c()("feather","icon-"+(l||b))}),t)}},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,O=u["".concat(c,".").concat(p)]||u[p]||m[p]||l;return n?r.a.createElement(O,i({ref:t},o,{components:n})):r.a.createElement(O,i({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=p;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<l;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},411:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(412)}),n(74)("fill")},412:function(e,t,n){"use strict";var a=n(27),r=n(75),l=n(26);e.exports=function(e){for(var t=a(this),n=l(t.length),c=arguments.length,i=r(c>1?arguments[1]:void 0,n),b=c>2?arguments[2]:void 0,o=void 0===b?n:r(b,n);o>i;)t[i++]=e;return t}},413:function(e,t,n){var a=n(28).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},414:function(e,t,n){"use strict";n(413);var a=n(0),r=n.n(a),l=n(409);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(l.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},415:function(e,t,n){"use strict";var a=n(1),r=n(0),l=n.n(r),c=n(39),i=n(418),b=n(20),o=n.n(b);t.a=function(e){var t,n=e.to,b=e.href,s=n||b,u=Object(i.a)(s),m=Object(r.useRef)(!1),p=o.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!p&&u&&window.docusaurus.prefetch(s),function(){p&&t&&t.disconnect()}}),[s,p,u]),s&&u?l.a.createElement(c.b,Object(a.a)({},e,{onMouseEnter:function(){m.current||(window.docusaurus.preload(s),m.current=!0)},innerRef:function(e){var n,a;p&&e&&u&&(n=e,a=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:s})):l.a.createElement("a",Object(a.a)({},e,{href:s}))}},417:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(415),c=n(408),i=n.n(c);n(133);t.a=function(e){var t=e.children,n=e.className,a=e.badge,c=e.leftIcon,b=e.rightIcon,o=e.size,s=e.target,u=e.to,m=i()("jump-to","jump-to--"+o,n),p=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},c&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+c})),r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(b||"chevron-right")+" arrow"}))));return s?r.a.createElement("a",{href:u,target:s,className:m},p):r.a.createElement(l.a,{to:u,className:m},p)}},418:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))}}]);
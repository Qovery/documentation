/*! For license information please see c0ab55e0.9cf8a4d0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{372:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(1),i=n(9),r=(n(0),n(458)),o=(n(464),n(457)),c=(n(462),{last_modified_on:"2023-04-22",$schema:"/.meta/.schemas/guides.json",title:"Use AWS IAM roles with Qovery",description:"Give AWS IAM permissions to your application/container/job with Qovery",author_github:"https://github.com/deimosfr",tags:["type: tutorial","technology: qovery"],hide_pagination:!0}),l={categories:[{name:"tutorial",title:"Tutorial",description:"Step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Use AWS IAM roles with Qovery",description:"Give AWS IAM permissions to your application/container/job with Qovery",permalink:"/guides/tutorial/use-aws-iam-roles-with-qovery",readingTime:"8 min read",source:"@site/guides/tutorial/use-aws-iam-roles-with-qovery.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Use AWS IAM roles with Qovery",truncated:!1,prevItem:{title:"Use an API gateway in front of multiple services",permalink:"/guides/tutorial/use-an-api-gateway-in-front-of-multiple-services"},nextItem:{title:"Using Amazon SQS and Lambda on Qovery",permalink:"/guides/tutorial/aws-sqs-lambda-with-qovery"}},s=[{value:"Application requiring S3 permissions",id:"application-requiring-s3-permissions",children:[{value:"Create an application",id:"create-an-application",children:[]},{value:"Get Kubernetes namespace name",id:"get-kubernetes-namespace-name",children:[]}]},{value:"Configure OIDC provider",id:"configure-oidc-provider",children:[{value:"Get your Cluster OIDC provider URL",id:"get-your-cluster-oidc-provider-url",children:[]},{value:"Create an Identity provider",id:"create-an-identity-provider",children:[]}]},{value:"Configure AWS IAM roles",id:"configure-aws-iam-roles",children:[{value:"Create a role",id:"create-a-role",children:[]},{value:"Role permissions",id:"role-permissions",children:[]},{value:"Configure trusted entities",id:"configure-trusted-entities",children:[]}]},{value:"Create a service account",id:"create-a-service-account",children:[{value:"Kubernetes authentication",id:"kubernetes-authentication",children:[]},{value:"Create a Lifecycle job",id:"create-a-lifecycle-job",children:[]}]},{value:"Set application service account",id:"set-application-service-account",children:[{value:"Set service account",id:"set-service-account",children:[]},{value:"Validate access",id:"validate-access",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],b={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"AWS IAM (Identity & Access Management) service allows AWS services to interact with each other by using roles. Those roles can easily be used to give permissions to your Qovery application, container or job."),Object(r.b)("p",null,"It is a secure way to give your application permissions without having to manage credentials. More than that, it rotates the token automatically."),Object(r.b)("p",null,"This tutorial will show you how to add AWS IAM roles to your Qovery application, container or job."),Object(r.b)("h2",{id:"application-requiring-s3-permissions"},"Application requiring S3 permissions"),Object(r.b)("p",null,"In this first step, we will create a simple application that needs AWS permissions to access s3 buckets."),Object(r.b)("h3",{id:"create-an-application"},"Create an application"),Object(r.b)("p",null,"We are going to will create a simple container, but you can use an existing one if you want (or an application or job). "),Object(r.b)(o.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"You do not have to deploy it now, just create one container this way.")),Object(r.b)("p",null,"Here is a simple Debian container example:"),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/aws-iam-assume-role/debian_app.png",alt:"debian app"})),Object(r.b)("p",null,"Set only 1 instance and 128MB of memory is enough for this example. Then continue until you have the ",Object(r.b)("inlineCode",{parentName:"p"},"Create")," button, there is nothing more to setup."),Object(r.b)("h3",{id:"get-kubernetes-namespace-name"},"Get Kubernetes namespace name"),Object(r.b)("p",null,"Then in this container (or any application in this environment) ",Object(r.b)("inlineCode",{parentName:"p"},"Variables"),", search for the variable called ",Object(r.b)("inlineCode",{parentName:"p"},"QOVERY_KUBERNETES_NAMESPACE_NAME")," and copy its value somewhere."),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/aws-iam-assume-role/debian_namespace.png",alt:"debian app"})),Object(r.b)("p",null,"It is the Kubernetes namespace name where the container is located."),Object(r.b)("h2",{id:"configure-oidc-provider"},"Configure OIDC provider"),Object(r.b)(o.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"This step should be done only once per cluster")),Object(r.b)("h3",{id:"get-your-cluster-oidc-provider-url"},"Get your Cluster OIDC provider URL"),Object(r.b)("p",null,"On your AWS console, go to your EKS cluster and ",Object(r.b)("inlineCode",{parentName:"p"},"Overview")," section. Copy the ",Object(r.b)("inlineCode",{parentName:"p"},"OpenID Connect provider URL"),":"),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/aws-iam-assume-role/eks_oidc.png",alt:"EKS OIDC"})),Object(r.b)("h3",{id:"create-an-identity-provider"},"Create an Identity provider"),Object(r.b)("p",null,"On your AWS console, go to ",Object(r.b)("inlineCode",{parentName:"p"},"IAM")," service, then ",Object(r.b)("inlineCode",{parentName:"p"},"Identity providers")," section, and ",Object(r.b)("inlineCode",{parentName:"p"},"Add provider")," button:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Select the ",Object(r.b)("inlineCode",{parentName:"li"},"OpenID Connect")," provider type"),Object(r.b)("li",{parentName:"ol"},"Paste the ",Object(r.b)("inlineCode",{parentName:"li"},"OpenID Connect provider URL")," previously copied to ",Object(r.b)("inlineCode",{parentName:"li"},"Provider URL")),Object(r.b)("li",{parentName:"ol"},"Click on ",Object(r.b)("inlineCode",{parentName:"li"},"Get thumbprint")," button, once done the button will change to ",Object(r.b)("inlineCode",{parentName:"li"},"Edit URL")),Object(r.b)("li",{parentName:"ol"},"Add ",Object(r.b)("inlineCode",{parentName:"li"},"sts.amazonaws.com")," as ",Object(r.b)("inlineCode",{parentName:"li"},"Audience")),Object(r.b)("li",{parentName:"ol"},"Click on ",Object(r.b)("inlineCode",{parentName:"li"},"Add provider")," button")),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/aws-iam-assume-role/oidc_connect.png",alt:"OIDC Connect"})),Object(r.b)("h2",{id:"configure-aws-iam-roles"},"Configure AWS IAM roles"),Object(r.b)("h3",{id:"create-a-role"},"Create a role"),Object(r.b)("p",null,"Now we can create a role. In the ",Object(r.b)("inlineCode",{parentName:"p"},"IAM")," service, go to ",Object(r.b)("inlineCode",{parentName:"p"},"Roles")," section, and click on ",Object(r.b)("inlineCode",{parentName:"p"},"Create role")," button."),Object(r.b)("p",null,"You have to select the Trusted entity type. For this tutorial, we are going to use the ",Object(r.b)("inlineCode",{parentName:"p"},"Web identity")," type."),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"Identity provider")," to the one you just created, and the ",Object(r.b)("inlineCode",{parentName:"p"},"Audience")," to ",Object(r.b)("inlineCode",{parentName:"p"},"sts.amazonaws.com"),". Then click on the ",Object(r.b)("inlineCode",{parentName:"p"},"Next")," button."),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/aws-iam-assume-role/role_create_step1.png",alt:"Role create step 1"})),Object(r.b)("h3",{id:"role-permissions"},"Role permissions"),Object(r.b)("p",null,"Select the policy of your choice. For this example, the policy ",Object(r.b)("inlineCode",{parentName:"p"},"AmazonS3ReadOnlyAccess")," will be used to list S3 buckets. Then click on the ",Object(r.b)("inlineCode",{parentName:"p"},"Next")," button."),Object(r.b)("p",null,"To finish, set the role name and description of your choice and click on ",Object(r.b)("inlineCode",{parentName:"p"},"Create role")," button."),Object(r.b)("h3",{id:"configure-trusted-entities"},"Configure trusted entities"),Object(r.b)("h4",{id:"qovery-environment-scoped-role"},"Qovery environment scoped role"),Object(r.b)("p",null,"Once created, select your freshly created role, go to the ",Object(r.b)("inlineCode",{parentName:"p"},"Trust relationships")," tab, and click on ",Object(r.b)("inlineCode",{parentName:"p"},"Edit trust policy")," button."),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/aws-iam-assume-role/role_trusted_entities_default.png",alt:"role trusted default"})),Object(r.b)("p",null,"Update the policy line regarding the ",Object(r.b)("inlineCode",{parentName:"p"},"OIDC")," condition from:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'"oidc.eks.eu-west-3.amazonaws.com/id/xxxxxxx:aud": "sts.amazonaws.com"\n')),Object(r.b)("p",null,"to:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'"oidc.eks.eu-west-3.amazonaws.com/id/xxxxxxx:sub": "system:serviceaccount:kubernetes_namespace:service_account_name"\n')),Object(r.b)("p",null,"Replace:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"kubernetes_namespace"),": with the namespace name, corresponding to the Qovery environment (",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#get-kubernetes-namespace-name"}),"previously copied in step 1"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"service_account_name"),": define a service account name which will be re-use later (ex: ",Object(r.b)("inlineCode",{parentName:"li"},"my-s3-role"),")")),Object(r.b)("p",null,"Once done, click on the ",Object(r.b)("inlineCode",{parentName:"p"},"Update policy")," button."),Object(r.b)("p",null,"Last element to copy and save somewhere: is the role ",Object(r.b)("inlineCode",{parentName:"p"},"ARN"),"."),Object(r.b)("p",null,"In the end, you should have something like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Principal": {\n                "Federated": "arn:aws:iam::yyyyyyy:oidc-provider/oidc.eks.us-east-2.amazonaws.com/id/xxxxxxx"\n            },\n            "Action": "sts:AssumeRoleWithWebIdentity",\n            "Condition": {\n                "StringEquals": {\n                    "oidc.eks.eu-west-3.amazonaws.com/id/xxxxxxx:sub": "system:serviceaccount:kubernetes_namespace:service_account_name"\n                }\n            }\n        }\n    ]\n}\n')),Object(r.b)("h4",{id:"cluster-scoped-role"},"Cluster scoped role"),Object(r.b)("p",null,'If you want to be able to keep the Role and permissions with the "On-demand environment" and "Clone" features, then you have to scope the role "cluster side" instead of the "Kubernetes namespace" side.'),Object(r.b)("p",null,"To do so, update the ",Object(r.b)("inlineCode",{parentName:"p"},"Condition")," with ",Object(r.b)("inlineCode",{parentName:"p"},"StringLike")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"StringEquals"),", and use a wildcard instead of the namespace name:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"Condition": {\n    "StringLike": {\n        "oidc.eks.eu-west-3.amazonaws.com/id/xxxxxxx:sub": "system:serviceaccount:z*:service_account_name"\n    }\n}\n')),Object(r.b)("p",null,"Replace:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"service_account_name"),": define a service account name which will be re-use later (ex: ",Object(r.b)("inlineCode",{parentName:"li"},"my-s3-role"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"z*"),": the wildcard to use to match all namespaces deployed with Qovery")),Object(r.b)(o.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"Do not forget to set the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#create-a-service-account"}),"Service Account")," as well in those environments.")),Object(r.b)("h2",{id:"create-a-service-account"},"Create a service account"),Object(r.b)(o.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"If you already have an existing service account on your Kubernetes cluster and want to use it, you can skip this step.")),Object(r.b)(o.a,{type:"warning",mdxType:"Alert"},Object(r.b)("p",null,"Kubernetes reminder: ",Object(r.b)("strong",{parentName:"p"},"a deployed service account in a Kubernetes namespace, becomes available by all applications in the same namespace."))),Object(r.b)("p",null,"This step will help you on deploying a service account on your Kubernetes cluster. In case you want to do it manually on the cluster with ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl"),", you just have to push a service account like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n name: $SERVICE_ACCOUNT_NAME\n namespace: $QOVERY_KUBERNETES_NAMESPACE_NAME\n annotations:\n   eks.amazonaws.com/role-arn: $AWS_ROLE_ARN\n")),Object(r.b)("h3",{id:"kubernetes-authentication"},"Kubernetes authentication"),Object(r.b)("p",null,"On AWS, there are ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/eks/latest/userguide/cluster-auth.html"}),"several ways to authenticate to Kubernetes"),". To make it simple, we are going to use a dedicated IAM user, but you can select the best method for your need."),Object(r.b)("p",null,"From your AWS Console, create an IAM user account, get ",Object(r.b)("inlineCode",{parentName:"p"},"Access key ID")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Secret access key")," and save them somewhere."),Object(r.b)("p",null,"Qovery helps ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/tutorial/how-to-connect-to-your-eks-cluster-with-kubectl/#add-your-iam-user-to-the-admin-group"}),"IAM users to get quick access to the Kubernetes cluster"),". Simply add this user to the ",Object(r.b)("inlineCode",{parentName:"p"},"Admins")," group."),Object(r.b)("h3",{id:"create-a-lifecycle-job"},"Create a Lifecycle job"),Object(r.b)("p",null,"In the same environment than your application, create a ",Object(r.b)("inlineCode",{parentName:"p"},"Lifecycle job")," which will be used to deploy a service account on the Kubernetes cluster:"),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/aws-iam-assume-role/lifecycle_step1.png",alt:"Lifecycle creation"})),Object(r.b)("p",null,"Here a container ",Object(r.b)("inlineCode",{parentName:"p"},"qoveryrd/create-sa:1.0")," available on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.docker.com/r/qoveryrd/create-sa"}),"DockerHub")," made by Qovery is used, but you can fork ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Qovery/create_service_account"}),"this repository")," and update to your needs if you prefer."),Object(r.b)("p",null,"Click on the ",Object(r.b)("inlineCode",{parentName:"p"},"Continue")," button and select the ",Object(r.b)("inlineCode",{parentName:"p"},"Start")," event because we want to deploy the service account at the environment start and ",Object(r.b)("inlineCode",{parentName:"p"},"Delete")," to delete it if we decide to remove it. Set parameters as well with the according action:"),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/aws-iam-assume-role/lifecycle_step2.png",alt:"Lifecycle creation"})),Object(r.b)("p",null,"Then click on the ",Object(r.b)("inlineCode",{parentName:"p"},"Continue")," button, set the resources (128Mb is enough) and click on the ",Object(r.b)("inlineCode",{parentName:"p"},"Continue")," button."),Object(r.b)("p",null,"Then add the following environment variables to the ",Object(r.b)("inlineCode",{parentName:"p"},"job")," scope:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"KUBERNETES_VERSION"),": the version of your Kubernetes cluster which will be used to download kubectl (ex: 1.23.0)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SERVICE_ACCOUNT_NAME"),": the name of the service account in Kubernetes (the same name ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#configure-trusted-entities"}),"you have declared")," for the role in the ",Object(r.b)("inlineCode",{parentName:"li"},"Trusted entities")," policy section)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"AWS_ROLE_ARN"),": the AWS ARN role you have just created"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID"),": the AWS access key ID of the IAM user you have created (if you decided to use this authentication method)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY"),": the AWS secret access key of the IAM user you have created (if you decided to use this authentication method)")),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/aws-iam-assume-role/lifecycle_step2.png",alt:"Lifecycle creation"})),Object(r.b)("p",null,"Then ",Object(r.b)("inlineCode",{parentName:"p"},"Create")," the ",Object(r.b)("inlineCode",{parentName:"p"},"Lifecycle job"),". Go into the ",Object(r.b)("inlineCode",{parentName:"p"},"Variables")," tab and create a ",Object(r.b)("inlineCode",{parentName:"p"},"Variable Alias")," on ",Object(r.b)("inlineCode",{parentName:"p"},"QOVERY_CLOUD_PROVIDER_REGION"),", name it ",Object(r.b)("inlineCode",{parentName:"p"},"AWS_DEFAULT_REGION")," and scope it to the ",Object(r.b)("inlineCode",{parentName:"p"},"job"),"."),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/aws-iam-assume-role/lifecycle_step3.png",alt:"Lifecycle creation"})),Object(r.b)("p",null,"You can now run your job by clicking on the ",Object(r.b)("inlineCode",{parentName:"p"},"Deploy now")," button. You should see the following output in your job logs:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"-> Ensuring required environment variables are present\n-> Downloading kubectl version 1.23.0\n-> Generated service account:\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n name: my-s3-role\n namespace: xxxxxx\n annotations:\n   eks.amazonaws.com/role-arn: arn:aws:iam::xxxxxx:role/my-s3-role\n-> Getting kubeconfig\nAdded new context arn:aws:eks:region:id:cluster/cluster-name to /root/.kube/config\n-> Deploying service account\nserviceaccount/aws-permissions created\n")),Object(r.b)("h2",{id:"set-application-service-account"},"Set application service account"),Object(r.b)("h3",{id:"set-service-account"},"Set service account"),Object(r.b)("p",null,"The final step is to set this service account (pointing to the AWS role) to your application. Go into your application ",Object(r.b)("inlineCode",{parentName:"p"},"Advanced settings")," and set the ",Object(r.b)("inlineCode",{parentName:"p"},"Service account")," to the one you have just created:"),Object(r.b)("p",{Valign:"center"},Object(r.b)("img",{src:"/img/aws-iam-assume-role/debian_sa.png",alt:"Lifecycle creation"})),Object(r.b)("p",null,"Deploy your application with the ",Object(r.b)("inlineCode",{parentName:"p"},"Deploy now")," button."),Object(r.b)("p",null,"At this stage, the job should have been executed and the service account should be deployed on your Kubernetes cluster, and the Debian container, running."),Object(r.b)("h3",{id:"validate-access"},"Validate access"),Object(r.b)("p",null,"To validate the AWS role has correctly been deployed, we can connect to the pod, and see if we have the AWS token. We will use the Qovery CLI to connect to our pod:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery shell\nQovery: Select organization\nOrganization:\n\u2714 Qovery\nQovery: Select project\nProject:\n\u2714 AWS roles tutorial\nQovery: Select environment\nEnvironment:\n\u2714 aws-role\nQovery: Select service\nServices:\n\u2714 debian\n")),Object(r.b)("p",null,"Now we are connected to the pod, we can check the AWS token:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ env | grep AWS\nAWS_DEFAULT_REGION=us-east-2\nAWS_REGION=us-east-2\nAWS_ROLE_ARN=arn:aws:iam::xxxxxx:role/my-s3-role\nAWS_WEB_IDENTITY_TOKEN_FILE=/var/run/secrets/eks.amazonaws.com/serviceaccount/token\nAWS_STS_REGIONAL_ENDPOINTS=regional\n")),Object(r.b)("p",null,"Token is here! Let's install the AWS CLI and validate the role access. We should be able to list S3 buckets:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ apt-get update && apt-get -y install awscli\n$ aws s3 ls\n2022-09-23 06:56:38 aws-cloudtrail-logs-qovery\n...\n")),Object(r.b)("p",null,"It works! We have access to S3 buckets using the AWS role."),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"The first setup phase can be time-consuming. However, once done, applying roles to your applications is very easy and fast. You can now use roles to access any AWS service!"))}u.isMDXComponent=!0},456:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var o=i.apply(null,a);o&&e.push(o)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},457:function(e,t,n){"use strict";n(459);var a=n(0),i=n.n(a),r=n(456),o=n.n(r);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,r=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return i.a.createElement("div",{className:o()(n,"alert","alert--"+c,{"alert--fill":a,"alert--icon":!1!==r}),role:"alert"},!1!==r&&i.a.createElement("i",{className:o()("feather","icon-"+(r||l))}),t)}},458:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||r;return n?i.a.createElement(m,c({ref:t},s,{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},459:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(463)}),n(74)("fill")},460:function(e,t,n){var a=n(26).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||n(10)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},461:function(e,t,n){"use strict";var a=n(1),i=n(0),r=n.n(i),o=n(39),c=n(465),l=n(20),s=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,b=n||l,u=Object(c.a)(b),p=Object(i.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(i.useEffect)((function(){return!d&&u&&window.docusaurus.prefetch(b),function(){d&&t&&t.disconnect()}}),[b,d,u]),b&&u?r.a.createElement(o.b,Object(a.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(b),p.current=!0)},innerRef:function(e){var n,a;d&&e&&u&&(n=e,a=function(){window.docusaurus.prefetch(b)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:b})):r.a.createElement("a",Object(a.a)({},e,{href:b}))}},462:function(e,t,n){"use strict";n(460);var a=n(0),i=n.n(a),r=n(457);t.a=function(e){var t=e.children,n=e.name;return i.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},i.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},463:function(e,t,n){"use strict";var a=n(28),i=n(75),r=n(27);e.exports=function(e){for(var t=a(this),n=r(t.length),o=arguments.length,c=i(o>1?arguments[1]:void 0,n),l=o>2?arguments[2]:void 0,s=void 0===l?n:i(l,n);s>c;)t[c++]=e;return t}},464:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(461),o=n(456),c=n.n(o);n(133);t.a=function(e){var t=e.children,n=e.className,a=e.badge,o=e.leftIcon,l=e.rightIcon,s=e.size,b=e.target,u=e.to,p=c()("jump-to","jump-to--"+s,n),d=i.a.createElement("div",{className:"jump-to--inner"},i.a.createElement("div",{className:"jump-to--inner-2"},o&&i.a.createElement("div",{className:"jump-to--left"},i.a.createElement("i",{className:"feather icon-"+o})),i.a.createElement("div",{className:"jump-to--main"},a?i.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),i.a.createElement("div",{className:"jump-to--right"},i.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return b?i.a.createElement("a",{href:u,target:b,className:p},d):i.a.createElement(r.a,{to:u,className:p},d)}},465:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))}}]);
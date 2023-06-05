/*! For license information please see 4fed1128.1acca33a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{230:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return m}));var n=a(1),r=a(9),l=(a(0),a(400)),b=(a(406),a(399)),i=(a(404),{last_modified_on:"2023-06-05",$schema:"/.meta/.schemas/guides.json",title:"How to deploy Helm charts",description:"Use jobs to simply deploy Helm charts with Qovery (Kubecost example)",author_github:"https://github.com/deimosfr",tags:["type: tutorial","technology: qovery"],hide_pagination:!0}),c={categories:[{name:"tutorial",title:"Tutorial",description:"Additional step-by-step resources to leverage even more Qovery",permalink:"/guides/tutorial"}],coverLabel:"How to deploy Helm charts",description:"Use jobs to simply deploy Helm charts with Qovery (Kubecost example)",permalink:"/guides/tutorial/how-to-deploy-helm-charts",readingTime:"7 min read",source:"@site/guides/tutorial/how-to-deploy-helm-charts.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"How to deploy Helm charts",truncated:!1,prevItem:{title:"How to deploy a Rust REST API application on AWS with ease",permalink:"/guides/tutorial/how-to-deploy-a-rust-rest-api-application-on-aws-with-ease"},nextItem:{title:"How to integrate Qovery with GitHub Actions",permalink:"/guides/tutorial/how-to-integrate-qovery-with-github-actions"}},o=[{value:"Choose a deployment method",id:"choose-a-deployment-method",children:[]},{value:"Lifecycle job parameters for Helm charts",id:"lifecycle-job-parameters-for-helm-charts",children:[]},{value:"Chart deployment",id:"chart-deployment",children:[{value:"From a 3rd party or Artifact Hub",id:"from-a-3rd-party-or-artifact-hub",children:[]},{value:"From a Helm chart from a Git repository",id:"from-a-helm-chart-from-a-git-repository",children:[]},{value:"Lifecycle Job and Timeout management",id:"lifecycle-job-and-timeout-management",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],p={rightToc:o};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://helm.sh/docs/"}),"Helm")," is one of the most known tools to deploy on Kubernetes. It has several very useful features, Qovery uses it behind the scene to deploy some of its components. But you can also deploy Helm charts by your self if you wish."),Object(l.b)("p",null,"Installing a chart can be useful for specific use cases:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"When you want to deploy some specific objects on Kubernetes."),Object(l.b)("li",{parentName:"ul"},"When a third-party vendor requires an installation with Helm."),Object(l.b)("li",{parentName:"ul"},"When some specific configuration has to be set and does not fit into an application or container proposed by Qovery.")),Object(l.b)("h2",{id:"choose-a-deployment-method"},"Choose a deployment method"),Object(l.b)("p",null,"There are several ways to deploy a chart:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"You can find a lot of Helm charts on the ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://artifacthub.io/"}),"Artifact Hub")),Object(l.b)("li",{parentName:"ol"},"You can deploy a Helm chart from a third-party provider (",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.datadoghq.com/"}),"Datadog"),", ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.kubecost.com/"}),"Kubecost"),"...)"),Object(l.b)("li",{parentName:"ol"},"You can deploy a Helm chart from a private or public Git repository (",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Qovery/helm-freeze"}),"Helm freeze")," is useful in this case)")),Object(l.b)("p",null,"We will make an example with all of these methods, so you can choose the one that suits you best.\nIn all the examples, we will make use of the Lifecycle jobs to manage the deployment of your helm chart (install and uninstall). The Lifecycle job configuration will be different depending on the method you have chosen."),Object(l.b)("h2",{id:"lifecycle-job-parameters-for-helm-charts"},"Lifecycle job parameters for Helm charts"),Object(l.b)(b.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"Qovery provides a Helm container, simplifying the Helm chart deployments, but you can do it your way if you prefer. The container image is ",Object(l.b)("inlineCode",{parentName:"p"},"qoveryrd/helm"),".")),Object(l.b)("p",null,"From the Qovery Helm container, several options exist and are accessible through environment variables to help you to configure the chart deployment:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_REPO_ADD_NAME")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Helm repository name"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_REPO_ADD_URL")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Helm chart URL (if none is specified, Artifact Hub will be used)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"default")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_REPO_PATH")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The local repository PATH or name from Artifact Hub"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_RELEASE_NAME")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The release name of the chart deployment (should be unique in a given namespace)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_VALUES")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Helm chart values file path, containing your custom settings to override from the default values"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_TIMEOUT_SEC")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Helm timeout in seconds, to install and uninstall chart"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"180")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_MAX_HISTORY")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The number of releases history. Useful to be able to rollback"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"50")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_DRY_RUN")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable or disable ",Object(l.b)("inlineCode",{parentName:"td"},"dry run")," for testing purpose"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_SHOW_DIFF")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable or disable ",Object(l.b)("inlineCode",{parentName:"td"},"helm diff")," between the currently deployed version and the requested one"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_ADDITIONAL_PARAMS")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Additional Helm CLI parameters to add to the command line"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_KUBERNETES_NAMESPACE")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Kubernetes namespace name in which this chart will be deployed"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"$QOVERY_KUBERNETES_NAMESPACE_NAME")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"KUBECONFIG")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Kubeconfig file path location"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no*")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"KUBECONFIG_B64")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The encoded base64 Kubeconfig content. It will be decoded and used in ",Object(l.b)("inlineCode",{parentName:"td"},"KUBECONFIG")," environment variable"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no*")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"KUBECONFIG_GET_EKS")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set to ",Object(l.b)("inlineCode",{parentName:"td"},"true")," to get the Kubeconfig from AWS API. It will be used as ",Object(l.b)("inlineCode",{parentName:"td"},"KUBECONFIG")," environment variable"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no*")))),Object(l.b)(b.a,{type:"warning",mdxType:"Alert"},Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"KUBECONFIG"),", ",Object(l.b)("inlineCode",{parentName:"p"},"KUBECONFIG_B64")," or ",Object(l.b)("inlineCode",{parentName:"p"},"KUBECONFIG_GET_EKS")," are required to be set to access Kubernetes cluster")),Object(l.b)("h2",{id:"chart-deployment"},"Chart deployment"),Object(l.b)("p",null,"In this tutorial, ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.kubecost.com/install-and-configure/install"}),"Kubecost")," will be the chart to deploy. You can deploy it in an environment where other applications are already deployed or create a dedicated one for this purpose (tooling, monitoring...)."),Object(l.b)(b.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"You will have to configure the ",Object(l.b)("inlineCode",{parentName:"p"},"KUBECONFIG"),", ",Object(l.b)("inlineCode",{parentName:"p"},"KUBECONFIG_B64")," or ",Object(l.b)("inlineCode",{parentName:"p"},"KUBECONFIG_GET_EKS")," environment variable to be able to deploy the chart. It is mandatory to ensure Helm will be able to connect to your Kubernetes cluster.\nYou may also have to push AWS credentials (with ",Object(l.b)("inlineCode",{parentName:"p"},"eks:DescribeCluster")," permissions) or use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/tutorial/use-aws-iam-roles-with-qovery"}),"AWS IAM roles"),".")),Object(l.b)("h3",{id:"from-a-3rd-party-or-artifact-hub"},"From a 3rd party or Artifact Hub"),Object(l.b)("p",null,"First of all, create a ",Object(l.b)("inlineCode",{parentName:"p"},"Lifecycle Job"),":"),Object(l.b)("p",{Valign:"center"},Object(l.b)("img",{src:"/img/helm/helm_container.png",alt:"create lifecycle job"})),Object(l.b)("p",null,"Then select the ",Object(l.b)("inlineCode",{parentName:"p"},"Start")," event, and add ",Object(l.b)("inlineCode",{parentName:"p"},'["install"]')," in the command arguments. In the ",Object(l.b)("inlineCode",{parentName:"p"},"Delete")," event, add ",Object(l.b)("inlineCode",{parentName:"p"},'["uninstall"]'),". And configure them to run the install during the Start"),Object(l.b)("p",{Valign:"center"},Object(l.b)("img",{src:"/img/helm/helm_event.png",alt:"lifecycle event"})),Object(l.b)("p",null,"Click on continue and go up to the environment variables."),Object(l.b)("p",null,"Qovery Helm image to deploy Helm charts, proposes several options to be set with the help of environment variables:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Variable"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Secret"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_REPO_ADD_NAME")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"kubecost")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_REPO_ADD_URL")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"https://kubecost.github.io/cost-analyzer/")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_REPO_PATH")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"kubecost/cost-analyzer")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_RELEASE_NAME")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"kubecost")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_KUBERNETES_NAMESPACE")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"kubecost")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")))),Object(l.b)("p",null,"Additionally, you can set the ",Object(l.b)("inlineCode",{parentName:"p"},"Kubecost token")," if you have a license with additional Helm args like:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Variable"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Secret"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_ADDITIONAL_PARAMS")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'--set kubecostToken="xxx"')),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")))),Object(l.b)("h3",{id:"from-a-helm-chart-from-a-git-repository"},"From a Helm chart from a Git repository"),Object(l.b)("p",null,"If you prefer using a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/DevOps#GitOps"}),"GitOps")," approach, having all your charts, etc... in a single Git repository, it is possible to deploy your charts this way."),Object(l.b)("p",null,"From a very simple repository where we could have a helm-freeze configuration looking like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"charts:\n  - name: cost-analyzer\n    version: 1.99.0\n    repo_name: kubecost\n\nrepos:\n  - name: stable\n    url: https://charts.helm.sh/stable\n  - name: kubecost\n    url: https://kubecost.github.io/cost-analyzer/\n\ndestinations:\n  - name: default\n    path: ./charts\n")),Object(l.b)("p",null,"Running ",Object(l.b)("inlineCode",{parentName:"p"},"helm-freeze sync")," will download the chart ",Object(l.b)("inlineCode",{parentName:"p"},"cost-analyzer")," into the charts folder.  You can then use this simple ",Object(l.b)("inlineCode",{parentName:"p"},"Dockerfile")," which will add all the content of this git repository inside a container:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'FROM qoveryrd/helm:1.0\nADD . /helm\nENTRYPOINT ["/helm/run.sh"]\n')),Object(l.b)("p",null,"Finally, add the ",Object(l.b)("inlineCode",{parentName:"p"},"run.sh")," file from the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/lifecycle-job-examples/tree/main/examples/helm"}),"Qovery Helm image")," inside your repository. Commit now everything. To summarize, in your Git repository you should have:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"charts"),": a folder containing all the charts (here cost-analyzer chart)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Dockerfile"),": helping you to deploy helm chart and containing all your charts"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"helm-freeze.yaml"),": configuration file for helm-freeze"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"run.sh"),": the container start script")),Object(l.b)("p",null,"We are now ready to create a ",Object(l.b)("inlineCode",{parentName:"p"},"Lifecycle job")," and select your repository:"),Object(l.b)("p",{Valign:"center"},Object(l.b)("img",{src:"/img/helm/helm_git.png",alt:"create lifecycle job"})),Object(l.b)("p",null,"Then select the ",Object(l.b)("inlineCode",{parentName:"p"},"Start")," event, and add ",Object(l.b)("inlineCode",{parentName:"p"},'["install"]')," in the command arguments. In the ",Object(l.b)("inlineCode",{parentName:"p"},"Delete")," event, add ",Object(l.b)("inlineCode",{parentName:"p"},'["uninstall"]'),". And configure them to run the install during the Start"),Object(l.b)("p",{Valign:"center"},Object(l.b)("img",{src:"/img/helm/helm_event.png",alt:"lifecycle event"})),Object(l.b)("p",null,"Set the environment variables to point to the chart to deploy with the release name and other required information:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Variable"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Secret"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_REPO_PATH")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"/helm/charts/cost-analyzer")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_RELEASE_NAME")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"kubecost")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_KUBERNETES_NAMESPACE")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"kubecost")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")))),Object(l.b)("p",null,"Additionally, you can set the ",Object(l.b)("inlineCode",{parentName:"p"},"Kubecost token")," if you have a license with additional Helm args like:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Variable"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Secret"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"HELM_ADDITIONAL_PARAMS")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'--set kubecostToken="xxx"')),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")))),Object(l.b)("h3",{id:"lifecycle-job-and-timeout-management"},"Lifecycle Job and Timeout management"),Object(l.b)(b.a,{type:"warning",mdxType:"Alert"},Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://helm.sh/docs/intro/using_helm/#helpful-options-for-installupgraderollback"}),"Helm timeout")," and Qovery Lifecycle job should be correctly set to avoid board effects!"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Qovery Liefcycle Job timeout > ( Helm deployment timeout + Helm rollback time )"))),Object(l.b)("p",null,"The default Helm timeout set by Qovery is 3 minutes. Qovery enables Helm options:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--wait"),": to wait for all resources to be in a ready state before marking the release as successful"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--atomic"),": to roll back the release if the deployment fails")),Object(l.b)("p",null,"Because of the atomic check, the rollback can take more than 5 minutes. By default, Qovery set the default Lifecycle timeout to 3 minutes, to avoid falling into this issue, but there is no guarantee, it depends on what resources are deployed:"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Qovery strongly recommends leveraging the default Qovery Lifecycle Job timeout or reducing the default Helm timeout to ensure the rollback will occur properly in case of failure.")),Object(l.b)("h2",{id:"conclusion"},"Conclusion"),Object(l.b)("p",null,"As you can see, deploying Helm charts with Qovery is straightforward. Qovery Lifecycle jobs and its Qovery Helm image should help you a lot if you familiarize yourself with it and its options."))}m.isMDXComponent=!0},398:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var b=r.apply(null,n);b&&e.push(b)}else if("object"===l)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},399:function(e,t,a){"use strict";a(401);var n=a(0),r=a.n(n),l=a(398),b=a.n(l);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,l=e.icon,i=e.type,c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:b()(a,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==l}),role:"alert"},!1!==l&&r.a.createElement("i",{className:b()("feather","icon-"+(l||c))}),t)}},400:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},m=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,s=m["".concat(b,".").concat(u)]||m[u]||d[u]||l;return a?r.a.createElement(s,i({ref:t},o,{components:a})):r.a.createElement(s,i({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},401:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(402)}),a(74)("fill")},402:function(e,t,a){"use strict";var n=a(27),r=a(75),l=a(26);e.exports=function(e){for(var t=n(this),a=l(t.length),b=arguments.length,i=r(b>1?arguments[1]:void 0,a),c=b>2?arguments[2]:void 0,o=void 0===c?a:r(c,a);o>i;)t[i++]=e;return t}},403:function(e,t,a){var n=a(28).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},404:function(e,t,a){"use strict";a(403);var n=a(0),r=a.n(n),l=a(399);t.a=function(e){var t=e.children,a=e.name;return r.a.createElement(l.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},405:function(e,t,a){"use strict";var n=a(1),r=a(0),l=a.n(r),b=a(39),i=a(407),c=a(20),o=a.n(c);t.a=function(e){var t,a=e.to,c=e.href,p=a||c,m=Object(i.a)(p),d=Object(r.useRef)(!1),u=o.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!u&&m&&window.docusaurus.prefetch(p),function(){u&&t&&t.disconnect()}}),[p,u,m]),p&&m?l.a.createElement(b.b,Object(n.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(p),d.current=!0)},innerRef:function(e){var a,n;u&&e&&m&&(a=e,n=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:p})):l.a.createElement("a",Object(n.a)({},e,{href:p}))}},406:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(405),b=a(398),i=a.n(b);a(133);t.a=function(e){var t=e.children,a=e.className,n=e.badge,b=e.leftIcon,c=e.rightIcon,o=e.size,p=e.target,m=e.to,d=i()("jump-to","jump-to--"+o,a),u=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},b&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+b})),r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return p?r.a.createElement("a",{href:m,target:p,className:d},u):r.a.createElement(l.a,{to:m,className:d},u)}},407:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))}}]);
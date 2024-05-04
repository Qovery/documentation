(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{339:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return h}));var n,l=a(1),r=a(9),o=(a(0),a(445)),c=a(460),s=a(452),u=a(444),b=a(457),i={last_modified_on:"2024-05-04",title:"Self-Managed Cluster",description:"Learn how to install and configure Qovery on your Azure Kubernetes Service (AKS) cluster"},p={id:"getting-started/install-qovery/azure/self-managed-cluster",title:"Self-Managed Cluster",description:"Learn how to install and configure Qovery on your Azure Kubernetes Service (AKS) cluster",source:"@site/docs/getting-started/install-qovery/azure/self-managed-cluster.md",permalink:"/docs/getting-started/install-qovery/azure/self-managed-cluster",sidebar:"docs",previous:{title:"Quickstart",permalink:"/docs/getting-started/install-qovery/azure/cluster-managed-by-qovery/quickstart"},next:{title:"Kubernetes",permalink:"/docs/getting-started/install-qovery/kubernetes"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install Qovery on your Azure AKS cluster",id:"install-qovery-on-your-azure-aks-cluster",children:[]},{value:"What&#39;s Next?",id:"whats-next",children:[]}],m=(n="Assumption",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),y={rightToc:d};function h(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(l.a)({},y,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(u.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"If you are not familiar with Kubernetes, we recommend you to use Qovery on a Managed Kubernetes cluster on ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/getting-started/install-qovery/aws/cluster-managed-by-qovery/quickstart/"}),"AWS"),", ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/getting-started/install-qovery/gcp/cluster-managed-by-qovery/quickstart/"}),"GCP"),", ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/getting-started/install-qovery/scaleway/cluster-managed-by-qovery/quickstart/"}),"Scaleway"),", ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/getting-started/install-qovery/azure/cluster-managed-by-qovery/quickstart/"}),"Azure"),", or contact us.")),Object(o.b)("p",null,"Qovery Self-Managed (or BYOK: Bring Your Own Kubernetes) is a self-hosted version of Qovery. It allows you to install Qovery on your own Kubernetes cluster.\nRead ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://www.qovery.com/blog/kubernetes-cluster-managed-by-qovery-vs-self-managed-byok"}),"this article")," to better understand the difference with the Managed Kubernetes by Qovery. In a nutshell, Qovery BYOK is for Kubernetes experts who want to manage their own Kubernetes cluster. In this version, Qovery does not manage the Kubernetes cluster for you."),Object(o.b)(u.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,"Qovery automatically updates ",Object(o.b)("strong",{parentName:"p"},"ONLY")," the Qovery applications (agent, shell-agent etc..) via the Qovery Helm chart. With the self-managed offer it will be up to you to manage any dependency components (ingress, dns, logging...), making sure they run with the right version over time."),Object(o.b)("p",null,"The dependencies provided with the Qovery Helm chart are here to help you with the bootstrap, and are not maintained by Qovery. If you want to simplify the maintenance of your cluster, please look at ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://www.qovery.com/pricing/"}),"Qovery managed Kubernetes offer"),".")),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(m,{mdxType:"Assumption"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have a Azure AKS Kubernetes cluster up and running."),Object(o.b)("li",{parentName:"ul"},"You have a Azure AKS Kubernetes cluster with at least 4 CPUs and 8GB of RAM."),Object(o.b)("li",{parentName:"ul"},"You have ",Object(o.b)("inlineCode",{parentName:"li"},"kubectl")," installed and configured to access your Azure AKS Kubernetes cluster."),Object(o.b)("li",{parentName:"ul"},"You have ",Object(o.b)("inlineCode",{parentName:"li"},"helm")," installed."),Object(o.b)("li",{parentName:"ul"},"You have a Qovery account."))),Object(o.b)("h2",{id:"install-qovery-on-your-azure-aks-cluster"},"Install Qovery on your Azure AKS cluster"),Object(o.b)(u.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Follow ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/getting-started/install-qovery/local/"}),"this guide")," to try Qovery on your local machine.")),Object(o.b)(b.a,{centered:!0,className:"rounded",defaultValue:"automatic",placeholder:"Install Qovery",select:!1,size:null,values:[{group:"Install",label:"Automatic",value:"automatic"},{group:"Install",label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"automatic",mdxType:"TabItem"},Object(o.b)(s.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("p",null,"Install Qovery CLI by running the following command:"),Object(o.b)(b.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"},{group:"Platforms",label:"Docker",value:"docker"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"linux",mdxType:"TabItem"},Object(o.b)(b.a,{centered:!0,className:"rounded",defaultValue:"universal",values:[{label:"*nix",value:"universal"},{label:"Arch Linux",value:"arch"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"universal",mdxType:"TabItem"},Object(o.b)("p",null,"To download and install Qovery CLI on any Linux distribution:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"$ curl -s https://get.qovery.com | bash\n"))),Object(o.b)(c.a,{value:"arch",mdxType:"TabItem"},Object(o.b)("p",null,"Qovery is part of ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://aur.archlinux.org/packages"}),"AUR")," packages, so you can install it with ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/Jguer/yay"}),"yay"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"$ yay qovery-cli\n"))),Object(o.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(o.b)("p",null,"Install the Qovery CLI on Linux manually by downloading the ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest release"),", and uncompress its content to a folder into your shell ",Object(o.b)("inlineCode",{parentName:"p"},"PATH"),".")))),Object(o.b)(c.a,{value:"macos",mdxType:"TabItem"},Object(o.b)(b.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Script",value:"script"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"homebrew",mdxType:"TabItem"},Object(o.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(o.b)(c.a,{value:"script",mdxType:"TabItem"},Object(o.b)("p",null,"To download and install Qovery CLI from the command line:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"$ curl -s https://get.qovery.com | bash\n"))),Object(o.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(o.b)("p",null,"Install the Qovery CLI on Mac OS manually by downloading the ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest release"),", and uncompress its content to a folder into your shell ",Object(o.b)("inlineCode",{parentName:"p"},"PATH"),".")))),Object(o.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(o.b)(b.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"scoop",mdxType:"TabItem"},Object(o.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(o.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(o.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest release"),", and uncompress its content to\n",Object(o.b)("inlineCode",{parentName:"p"},"C:\\Windows"),".")))),Object(o.b)(c.a,{value:"docker",mdxType:"TabItem"},Object(o.b)("p",null,"Install Docker on your local machine and run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"# Pull and Run the latest Qovery CLI\n$ docker run ghcr.io/qovery/qovery-cli:latest help\n")),Object(o.b)("p",null,"Change ",Object(o.b)("inlineCode",{parentName:"p"},"latest")," by the version you want to use. For example, to use the version 0.58.4, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"$ docker run ghcr.io/qovery/qovery-cli:0.58.4 help\n")),Object(o.b)("p",null,"Note: ",Object(o.b)("inlineCode",{parentName:"p"},"ghcr.io")," is the ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/pkgs/container/qovery-cli"}),"GitHub Container Registry"),".")))),Object(o.b)("li",null,Object(o.b)("p",null,"Authenticate with Qovery by running the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(o.b)(u.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"If you are using a headless (without GUI) environment, you can use the following command to sign up and sign in:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth --headless\n"))),Object(o.b)("p",null,"Your browser window with Qovery sign-up page will open. Follow the instructions to sign up and sign in.")),Object(o.b)("li",null,Object(o.b)("p",null,"Set Qovery context:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"qovery context set\n"))),Object(o.b)("li",null,Object(o.b)("p",null,"Install Qovery on your Azure AKS cluster:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"qovery cluster install\n")),Object(o.b)("p",null,"Respond to the prompts to install Qovery on your Azure AKS Kubernetes cluster."))))),Object(o.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(o.b)(s.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("p",null,"Install ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://helm.sh"}),"Helm")," command line tool.")),Object(o.b)("li",null,Object(o.b)("p",null,"Add Qovery Helm repository."),Object(o.b)(u.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,"Qovery Helm Chart is only available for users who have access to Qovery BYOK. ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://www.qovery.com/solutions/bring-your-own-kubernetes"}),"Request your access here"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"helm repo add qovery https://helm.qovery.com\nhelm repo update\n"))),Object(o.b)("li",null,Object(o.b)("p",null,"Login to the ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Qovery console"),", create a cluster of type ",Object(o.b)("inlineCode",{parentName:"p"},"Self-Managed"),". At the end of the flow you will be able to download the ",Object(o.b)("inlineCode",{parentName:"p"},"values.yaml")," file associated with this cluster.")),Object(o.b)("li",null,Object(o.b)("p",null,"Now you can customize your values.yaml file based on your need. Learn more about the configuration in the ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/getting-started/install-qovery/kubernetes/byok-config/"}),"Configuration page"),"."),Object(o.b)(u.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Make sure that all fields having value ",Object(o.b)("inlineCode",{parentName:"p"},"set-by-customer")," are filled.")),Object(o.b)("p",null,"Learn more about the configuration in the ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/getting-started/install-qovery/kubernetes/byok-config/"}),"Configuration page"),".")),Object(o.b)("li",null,Object(o.b)("p",null,"Install Qovery on your Kubernetes cluster."),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"helm upgrade --install --wait --atomic --create-namespace -n qovery -f <your-values-file.yaml> \\\n          --set services.certificates.cert-manager-configs.enabled=false \\\n          --set services.certificates.qovery-cert-manager-webhook.enabled=false \\\n          --set services.qovery.qovery-cluster-agent.enabled=false \\\n          --set services.qovery.qovery-engine.enabled=false \\\n          qovery qovery/qovery\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-n qovery"),": the namespace where Qovery and its dependencies will be installed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--set..."),": override (only for the first deployment time, if you want to use Cert-Manager) to let cert-manager install its CRDs"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-f your-values-file.yaml"),": the values file you've downloaded, overrided with the Qovery config and your custom config"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"qovery/qovery"),": name of the chart to deploy"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"qovery"),": name of the release")),Object(o.b)("p",null,"If you want to use Cert-Manager, you can remove the ",Object(o.b)("inlineCode",{parentName:"p"},"--set...")," for the future updates (or if already installed):"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"helm upgrade --install --create-namespace -n qovery -f <your-values-file.yaml> --wait --atomic qovery qovery/qovery\n"))))))),Object(o.b)("p",null,"That's it, you can now use Qovery on your Azure AKS cluster."),Object(o.b)("p",null,"Connect to the ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Qovery console")," to validate that Qovery is properly installed and start deploying your applications."),Object(o.b)("h2",{id:"whats-next"},"What's Next?"),Object(o.b)("p",null,"Now that you have Qovery installed on your Kubernetes cluster, you can check that Qovery is properly installed by following the ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/getting-started/install-qovery/kubernetes/validate-installation/"}),"Validate Installation")," guide."))}h.isMDXComponent=!0},444:function(e,t,a){"use strict";a(446);var n=a(0),l=a.n(n),r=a(443),o=a.n(r);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,r=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return l.a.createElement("div",{className:o()(a,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==r}),role:"alert"},!1!==r&&l.a.createElement("i",{className:o()("feather","icon-"+(r||s))}),t)}},452:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=(a(443),a(451)),o=a.n(r);a(133);t.a=function(e){var t=e.children,a=e.headingDepth,r=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,s={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},u="https://github.com/qovery/documentation/issues/new?"+o.a.stringify(s),b=Object(n.useState)(null),i=b[0],p=b[1];return l.a.createElement("div",{className:"steps steps--h"+a},t,!r&&!i&&l.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",l.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",l.a.createElement("a",{href:u,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==i&&l.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",l.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},457:function(e,t,a){"use strict";var n=a(1),l=(a(461),a(458),a(52),a(29),a(22),a(21),a(0)),r=a.n(l),o=a(465),c=a(443),s=a.n(c),u=a(451),b=a.n(u),i=a(464),p=37,d=39;function m(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,l=e.className,o=e.handleKeydown,c=e.style,u=e.values,b=e.selectedValue,i=e.tabRefs;return r.a.createElement("div",{className:a?"tabs--centered":null},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",l,{"tabs--block":t}),style:c},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===t,className:s()("tab-item",{"tab-item--active":b===t}),key:t,ref:function(e){return i.push(e)},onKeyDown:function(e){return o(i,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function y(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,l=e.size,c=e.values,s=c;if(s[0].group){var u=_.groupBy(s,"group");s=Object.keys(u).map((function(e){return{label:e,options:u[e]}}))}return r.a.createElement(o.a,{className:"react-select-container react-select--"+l,classNamePrefix:"react-select",options:s,isClearable:a,placeholder:t,value:c.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,o=e.groupId,c=e.label,s=e.placeholder,u=e.select,h=e.size,v=(e.style,e.values),O=e.urlKey,j=Object(i.a)(),g=j.tabGroupChoices,f=j.setTabGroupChoices,w=Object(l.useState)(a),N=w[0],q=w[1];if(null!=o){var T=g[o];null!=T&&T!==N&&q(T)}var k=function(e){q(e),null!=o&&f(o,e)},Q=[],x=function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(l.useEffect)((function(){if("undefined"!=typeof window&&window.location&&O){var e=b.a.parse(window.location.search);e[O]&&q(e[O])}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"margin-bottom--"+(h||"md")},c&&r.a.createElement("div",{className:"margin-vert--sm"},c),v.length>1&&(u?r.a.createElement(y,Object(n.a)({changeSelectedValue:k,handleKeydown:x,placeholder:s,selectedValue:N,size:h,tabRefs:Q},e)):r.a.createElement(m,Object(n.a)({changeSelectedValue:k,handleKeydown:x,selectedValue:N,tabRefs:Q},e)))),l.Children.toArray(t).filter((function(e){return e.props.value===N}))[0])}},460:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement(l.a.Fragment,null,e.children)}}}]);
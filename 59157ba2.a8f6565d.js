(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{267:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return l}));var r=o(1),n=o(9),a=(o(0),o(446)),i={last_modified_on:"2022-07-09",title:"FAQ",description:"Frequently Asked Questions"},s={id:"useful-resources/faq",title:"FAQ",description:"Frequently Asked Questions",source:"@site/docs/useful-resources/faq.md",permalink:"/docs/useful-resources/faq",sidebar:"docs",previous:{title:"GDPR",permalink:"/docs/security-and-compliance/gdpr"},next:{title:"Help and Support",permalink:"/docs/useful-resources/help-and-support"}},c=[{value:"What is the difference between a Project, an Application, and an Environment?",id:"what-is-the-difference-between-a-project-an-application-and-an-environment",children:[]},{value:"How does application build works?",id:"how-does-application-build-works",children:[]},{value:"How does Qovery manage databases?",id:"how-does-qovery-manage-databases",children:[]},{value:"Does Qovery replace Kubernetes?",id:"does-qovery-replace-kubernetes",children:[]},{value:"Does Qovery support mono repository?",id:"does-qovery-support-mono-repository",children:[]},{value:"Does Qovery support microservices?",id:"does-qovery-support-microservices",children:[]},{value:"What Git providers do you support?",id:"what-git-providers-do-you-support",children:[]},{value:"Do you support GitHub Enterprise or Gitlab Self-hosted?",id:"do-you-support-github-enterprise-or-gitlab-self-hosted",children:[]},{value:"Does Qovery support private Git repository?",id:"does-qovery-support-private-git-repository",children:[]},{value:"Which IP address does my cluster use to communicate externally over the Internet?",id:"which-ip-address-does-my-cluster-use-to-communicate-externally-over-the-internet",children:[]},{value:"If I have N custom domains under the same root domain, do I need to create N CNAME records, or just creating one for the root domain is enough ?",id:"if-i-have-n-custom-domains-under-the-same-root-domain-do-i-need-to-create-n-cname-records-or-just-creating-one-for-the-root-domain-is-enough-",children:[]},{value:"How do you support new Kubernetes version?",id:"how-do-you-support-new-kubernetes-version",children:[]},{value:"What do you do when a vulnerability is found?",id:"what-do-you-do-when-a-vulnerability-is-found",children:[]},{value:"Can I have access to my Kubernetes cluster?",id:"can-i-have-access-to-my-kubernetes-cluster",children:[]},{value:"Can I have access to my application with a shell?",id:"can-i-have-access-to-my-application-with-a-shell",children:[]},{value:"How application auto-scaling works?",id:"how-application-auto-scaling-works",children:[]},{value:"Why you should use Qovery?",id:"why-you-should-use-qovery",children:[{value:"The power of Kubernetes",id:"the-power-of-kubernetes",children:[]},{value:"Reliable infrastructure",id:"reliable-infrastructure",children:[]},{value:"Simple and Powerful",id:"simple-and-powerful",children:[]},{value:"Built for all developers",id:"built-for-all-developers",children:[]},{value:"Fully customizable for advanced business use cases",id:"fully-customizable-for-advanced-business-use-cases",children:[]}]},{value:"How Qovery works under the hood?",id:"how-qovery-works-under-the-hood",children:[]},{value:"How can I contact you?",id:"how-can-i-contact-you",children:[]}],u={rightToc:c};function l(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what-is-the-difference-between-a-project-an-application-and-an-environment"},"What is the difference between a Project, an Application, and an Environment?"),Object(a.b)("p",null,"A ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/project/"}),"project")," is the site that you're working on. Each project can contain multiple ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/"}),"applications")," and be deployed in multiple ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"environments"),". An environment is a standalone copy of your site, including apps, databases, storage, data, and all other services. By default, ",Object(a.b)("inlineCode",{parentName:"p"},"main")," branch is the production environment, while all other branches can be set up as identical copies of the prod environment for testing purposes."),Object(a.b)("h2",{id:"how-does-application-build-works"},"How does application build works?"),Object(a.b)("p",null,"Basically, Qovery deploys your application as a container. Check out the detailed explanation of what is going on behind the scene ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/getting-started/how-qovery-works/#application-and-database-deployment"}),"here")),Object(a.b)("h2",{id:"how-does-qovery-manage-databases"},"How does Qovery manage databases?"),Object(a.b)("p",null,"Qovery provides ",Object(a.b)("inlineCode",{parentName:"p"},"managed")," and ",Object(a.b)("inlineCode",{parentName:"p"},"container")," modes for your databases. Basically, ",Object(a.b)("inlineCode",{parentName:"p"},"managed")," mode relies on the managed database provided by the cloud provider. E.g. if you choose ",Object(a.b)("inlineCode",{parentName:"p"},"Postgres")," with the ",Object(a.b)("inlineCode",{parentName:"p"},"managed")," mode while your environment is running on AWS, then Qovery provides an ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://aws.amazon.com/rds"}),"AWS RDS")," instance. Please check out our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/database/"}),"database section")," for further details."),Object(a.b)("h2",{id:"does-qovery-replace-kubernetes"},"Does Qovery replace Kubernetes?"),Object(a.b)("p",null,"Behind the scene, Qovery uses ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/"}),"Kubernetes"),". Qovery extends Kubernetes to make it accessible to any developer teams.\nImportant: Qovery does not modify Kubernetes. It only deploys his services in a ",Object(a.b)("inlineCode",{parentName:"p"},"qovery")," Kubernetes namespace."),Object(a.b)("h2",{id:"does-qovery-support-mono-repository"},"Does Qovery support mono repository?"),Object(a.b)("p",null,"Yes, absolutely! Check out ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/advanced/monorepository/"}),"our monorepo guide"),"."),Object(a.b)("h2",{id:"does-qovery-support-microservices"},"Does Qovery support microservices?"),Object(a.b)("p",null,"Yes, absolutely! Check out ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/advanced/microservices/"}),"our microservices guide"),"."),Object(a.b)("h2",{id:"what-git-providers-do-you-support"},"What Git providers do you support?"),Object(a.b)("p",null,"GitHub, GitLab, BitBucket."),Object(a.b)("h2",{id:"do-you-support-github-enterprise-or-gitlab-self-hosted"},"Do you support GitHub Enterprise or Gitlab Self-hosted?"),Object(a.b)("p",null,"Not at the moment, but you can upvote for this feature in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://roadmap.qovery.com/"}),"our roadmap"),"."),Object(a.b)("h2",{id:"does-qovery-support-private-git-repository"},"Does Qovery support private Git repository?"),Object(a.b)("p",null,"Yes, absolutely!"),Object(a.b)("h2",{id:"which-ip-address-does-my-cluster-use-to-communicate-externally-over-the-internet"},"Which IP address does my cluster use to communicate externally over the Internet?"),Object(a.b)("p",null,"There isn't just one public cluster IP adress dedicated to external communication. However, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/clusters/#what-is-a-cluster"}),"worker nodes")," inside your cluster each have a public IP automatically attached to them. You can view those default public IPs in the details of your worker nodes (EC2 instances for AWS users) which belong to the node group in your cluster."),Object(a.b)("p",null,"For improved security and control, the ",Object(a.b)("inlineCode",{parentName:"p"},"Static IP")," feature allows you to ensure that outbound traffic from your cluster uses specific IP addresses. For more information on the ",Object(a.b)("inlineCode",{parentName:"p"},"Static IP")," feature and how to enable it at cluster creation, see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/clusters/#static-ip"}),"Static IP"),"."),Object(a.b)("h2",{id:"if-i-have-n-custom-domains-under-the-same-root-domain-do-i-need-to-create-n-cname-records-or-just-creating-one-for-the-root-domain-is-enough-"},"If I have N custom domains under the same root domain, do I need to create N CNAME records, or just creating one for the root domain is enough ?"),Object(a.b)("p",null,"You have to create N CNAME, one per custom domain"),Object(a.b)("h2",{id:"how-do-you-support-new-kubernetes-version"},"How do you support new Kubernetes version?"),Object(a.b)("p",null,"The Qovery team manages your Kubernetes cluster's upgrade, and you don't have to think about it. Upgrades from one minor Kubernetes version to another require a good amount of tests to make sure everything goes smoothly with zero interruptions for your app. This is why Qovery always provides 1 or 2 minor versions below the last one offered by the cloud provider. Our goal is to guarantee you the maximum uptime."),Object(a.b)("h2",{id:"what-do-you-do-when-a-vulnerability-is-found"},"What do you do when a vulnerability is found?"),Object(a.b)("p",null,"Security is our main concern. When a vulnerability is found, here are the actions that we take:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"We quickly identify how significant is the impact of the vulnerability."),Object(a.b)("li",{parentName:"ol"},"We look at how we can solve or mitigate the vulnerability."),Object(a.b)("li",{parentName:"ol"},"We transparently communicate with our customers on the vulnerability to help them take the right actions.")),Object(a.b)("h2",{id:"can-i-have-access-to-my-kubernetes-cluster"},"Can I have access to my Kubernetes cluster?"),Object(a.b)("p",null,"Absolutely, you can follow ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/tutorial/how-to-connect-to-your-eks-cluster-with-kubectl/"}),"this guide"),"."),Object(a.b)("h2",{id:"can-i-have-access-to-my-application-with-a-shell"},"Can I have access to my application with a shell?"),Object(a.b)("p",null,"Absolutely, check out our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/#shell"}),"CLI")," and the ",Object(a.b)("inlineCode",{parentName:"p"},"qovery shell")," command."),Object(a.b)("h2",{id:"how-application-auto-scaling-works"},"How application auto-scaling works?"),Object(a.b)("p",null,"Take a look at ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/#auto-scaling"}),"our application documentation"),"."),Object(a.b)("h2",{id:"why-you-should-use-qovery"},"Why you should use Qovery?"),Object(a.b)("h3",{id:"the-power-of-kubernetes"},"The power of Kubernetes"),Object(a.b)("p",null,"Under the hood, Qovery uses ",Object(a.b)("strong",{parentName:"p"},"containers")," and ",Object(a.b)("strong",{parentName:"p"},"Kubernetes")," to run applications. With us, your applications scale accordingly to your traffic and needs. We rely on major cloud providers to provide reliable infrastructure to make your applications highly available."),Object(a.b)("h3",{id:"reliable-infrastructure"},"Reliable infrastructure"),Object(a.b)("p",null,"What's more, we took on our shoulders the complexity of providing and managing other infrastructure requirements you need (like databases or message brokers), so you can focus merely on developing business features."),Object(a.b)("h3",{id:"simple-and-powerful"},"Simple and Powerful"),Object(a.b)("p",null,"With Qovery, the cloud is simple again. Get all the benefits of using cloud and Kubernetes without dealing with its complexity. You don't need to hire infrastructure experts - configuring continuous integration, deployment, databases, message brokers, storage, DNS, SSL/TLS, VPCs, and many others - we do it all for you. On Qovery, you can spin up a set of microservices, databases, and other cloud services in minutes with a single Git push!"),Object(a.b)("h3",{id:"built-for-all-developers"},"Built for all developers"),Object(a.b)("p",null,"Qovery is designed by developers for developers. Our goal is to make your life easier and allow you to move faster. Developer experience is at our heart. Building cloud-native applications was never that fast and simple!"),Object(a.b)("h3",{id:"fully-customizable-for-advanced-business-use-cases"},"Fully customizable for advanced business use cases"),Object(a.b)("p",null,"Create teams, split responsibilities, manage privileges, enforce company-wide rules, deploy to multiple clouds, plug in your own CI solutions. Qovery Business allows you to bring your organization to the next level with ease."),Object(a.b)("h2",{id:"how-qovery-works-under-the-hood"},"How Qovery works under the hood?"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/getting-started/how-qovery-works/"}),"Here")," is a detailed explanation on how Qovery works under the hood."),Object(a.b)("h2",{id:"how-can-i-contact-you"},"How can I contact you?"),Object(a.b)("p",null,"Feel free to join our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Discord server")," or contact us by email at hello (at) qovery.com."))}l.isMDXComponent=!0},446:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return h}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):s({},t,{},e)),o},d=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(o),b=r,h=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return o?n.a.createElement(h,s({ref:t},u,{components:o})):n.a.createElement(h,s({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);
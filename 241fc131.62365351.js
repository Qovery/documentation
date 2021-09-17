/*! For license information please see 241fc131.62365351.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(1),r=n(9),o=(n(0),n(359)),i=n(364),s=(n(363),{last_modified_on:"2021-09-17",$schema:"/.meta/.schemas/guides.json",title:"Terraform is Not the Golden Hammer",description:"Feedbacks about mixed usages (Cloud Providers, Kubernetes...)",author_github:"https://github.com/deimosfr",tags:["type: engineering","technology: terraform"],hide_pagination:!0}),l={categories:[{name:"engineering",title:"Engineering",description:"We share our engineering learning with all of you.",permalink:"/guides/engineering"}],coverLabel:"Terraform is Not the Golden Hammer",description:"Feedbacks about mixed usages (Cloud Providers, Kubernetes...)",permalink:"/guides/engineering/terraform-not-the-golden-hammer",readingTime:"9 min read",source:"@site/guides/engineering/terraform-not-the-golden-hammer.md",tags:[{label:"type: engineering",permalink:"/guides/tags/type-engineering"},{label:"technology: terraform",permalink:"/guides/tags/technology-terraform"}],title:"Terraform is Not the Golden Hammer",truncated:!1,prevItem:{title:"Staging environment",permalink:"/guides/advanced/staging-environment"},nextItem:{title:"URL Shortener API with Kotlin (Part 1/2)",permalink:"/guides/tutorial/url-shortener-api-with-kotlin"}},c=[{value:"How we used Terraform",id:"how-we-used-terraform",children:[{value:"HCL",id:"hcl",children:[]},{value:"GitOps and team usage",id:"gitops-and-team-usage",children:[]},{value:"tfstate",id:"tfstate",children:[]},{value:"Helm management",id:"helm-management",children:[]}]},{value:"Problems facing",id:"problems-facing",children:[{value:"Heterogeneous resources management",id:"heterogeneous-resources-management",children:[]},{value:"(Too) Strong dependencies",id:"too-strong-dependencies",children:[]},{value:"No automatic reconciliation",id:"no-automatic-reconciliation",children:[]},{value:"Automatic import",id:"automatic-import",children:[]}]},{value:"Advises and suggestion",id:"advises-and-suggestion",children:[{value:"Split",id:"split",children:[]},{value:"Outsource",id:"outsource",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],u={rightToc:c};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Terraform is probably the most used tool to deploy cloud services. It's a fantastic tool, easily usable, with descriptive language (DSL) called HCL, team-oriented, supporting tons of cloud providers, etc."),Object(o.b)("p",null,"On paper, it's an attractive solution. And it's easy to start delegating more and more responsibilities to Terraform, as it's like a swiss knife; it knows how to perform several kinds of actions against several varieties of technologies."),Object(o.b)("p",null,"Qovery is a platform to help developers to deploy their app on their cloud account in a few minutes (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.qovery.com/"}),"check it out"),"). Before deploying an app, Qovery needs to deploy a few services (cloud provider side) where the app code will be hosted. To do so, we decided to use Terraform. The main reasons are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Terraform is the industry standard to deploy cloud services."),Object(o.b)("li",{parentName:"ul"},"Qovery Engine is open source (",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Qovery/engine"}),"https://github.com/Qovery/engine"),"), and we wanted to use something that anyone could easily contribute to."),Object(o.b)("li",{parentName:"ul"},"Terraform is maintained by HashiCorp and by Cloud providers themself (trust of good quality and integration)")),Object(o.b)("p",null,"At the beginning of Qovery, we took shortcuts. We needed to go fast. Using Terraform as the golden hammer was our shortcut. Based on our past experiences, we knew the golden hammer didn't exist. We've seen many companies struggling when they start needing customization. In the end, you pay the price of using non-adapted tools!"),Object(o.b)("p",null,"So we were playing with the clock, as we knew it wouldn't fit in the mid/long run but did not precisely know when it would happen."),Object(o.b)("p",null,"This article is a return of experience, explaining where, when, and how you should use Terraform."),Object(o.b)("h2",{id:"how-we-used-terraform"},"How we used Terraform"),Object(o.b)("h3",{id:"hcl"},"HCL"),Object(o.b)("p",null,"First thing to understand is how Terraform works. It's a DSL as I mentionned earlier, the code looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-hcl"}),'resource "scaleway_k8s_cluster" "kubernetes_cluster" {\n  name    = var.kubernetes_cluster_name\n  version = var.scaleway_ks_version\n  cni     = "cilium"\n\n  autoscaler_config {\n    disable_scale_down = true\n    estimator = "binpacking"\n    scale_down_delay_after_add = "10m"\n    balance_similar_node_groups = true\n  }\n\n  auto_upgrade {\n    enable = true\n    maintenance_window_day = "any"\n    maintenance_window_start_hour = 3\n  }\n}\n')),Object(o.b)("p",null,"As you can see, it's easily readable and understandable. It supports AWS, DigitalOcean, Scaleway, and so many other cloud providers."),Object(o.b)("h3",{id:"gitops-and-team-usage"},"GitOps and team usage"),Object(o.b)("p",null,"You can add this kind of code in a git repository and work with your team members on the same codebase."),Object(o.b)("p",null,"When you run terraform against the Terraform code you've written, it will generate a tfstate file locally containing the information of what it has managed, keeping track of what it owns."),Object(o.b)("p",null,"Working with Terraform in a team with parallel deployments is not the default Terraform behavior. You will have to configure a remote backend (s3+dynamodb, for example) to store the tfstate file."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-hcl"}),'terraform {\n  backend "s3" {\n    access_key = xxx\n    secret_key = xxx\n    bucket = xxx\n    key =xxx.tfstate"\n    dynamodb_table = xxx\n    region = xxx\n  }\n}\n')),Object(o.b)("p",null,"You'll then have a shared lock mechanism to avoid more than one person applying a change to the same resources."),Object(o.b)("h3",{id:"tfstate"},"tfstate"),Object(o.b)("p",null,"When you run terraform, it first refreshes the content of the state file, comparing what is deployed and what is stored into the tfstate file. It allows Terraform only to perform change actions on what is different from the tfstate file. It's very efficient."),Object(o.b)("h3",{id:"helm-management"},"Helm management"),Object(o.b)("p",null,"Helm doesn't only know how to work with several cloud providers but also knows how to talk to Kubernetes, Helm...the list is...HUGE! As you can see on the provider list (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://registry.terraform.io/browse/providers"}),"https://registry.terraform.io/browse/providers"),"), there are +1.3k providers available!"),Object(o.b)("p",null,"So we were using it for Helm. Why? Because it's super useful to create something on a cloud provider (like an IAM account), get the results from Terraform, and directly inject them as Helm variables."),Object(o.b)("p",null,"To show how easy it is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-hcl"}),'# Create user and attach policy\n\nresource "aws_iam_user" "iam_eks_loki" {\n  name = "qovery-logs-${var.kubernetes_cluster_id}"\n  tags = local.tags_eks\n}\n\nresource "aws_iam_access_key" "iam_eks_loki" {\n  user    = aws_iam_user.iam_eks_loki.name\n}\n\nresource "aws_iam_policy" "loki_s3_policy" {\n  name = aws_iam_user.iam_eks_loki.name\n  description = "Policy for logs storage"\n\n  policy = <<POLICY\n{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": "s3:*",\n            "Resource": "*"\n        }\n    ]\n}\nPOLICY\n}\n\nresource "aws_iam_user_policy_attachment" "s3_loki_attachment" {\n  user       = aws_iam_user.iam_eks_loki.name\n  policy_arn = aws_iam_policy.loki_s3_policy.arn\n}\n\n# Deploy chart with user API credentials\n\nresource "helm_release" "loki" {\n  name = "loki"\n  chart = "common/charts/loki"\n  namespace = "logging"\n  create_namespace = true\n  atomic = true\n\n  set {\n    name = "config.storage_config.aws.access_key_id"\n    value = aws_iam_access_key.iam_eks_loki.id\n  }\n\n  set {\n    name = "config.storage_config.aws.secret_access_key"\n    value = aws_iam_access_key.iam_eks_loki.secret\n  }\n\n ...\n\n  depends_on = [\n    aws_iam_user.iam_eks_loki,\n    aws_iam_access_key.iam_eks_loki,\n    aws_s3_bucket.loki_bucket,\n    aws_iam_policy.loki_s3_policy,\n    aws_iam_user_policy_attachment.s3_loki_attachment,\n    aws_eks_cluster.eks_cluster,\n  ]\n}\n')),Object(o.b)("p",null,"And it supports the removal and upgrades for sure!"),Object(o.b)("h2",{id:"problems-facing"},"Problems facing"),Object(o.b)("p",null,"At this time, we had the golden hammer, we were super happy about what we achieved with the time invested. We were able to deploy on cloud providers (AWS/DigitalOcean), use Cloudflare, deploy with Helm and perform some operations with Kubernetes. Everything only with Terraform! So what could go wrong?"),Object(o.b)("h3",{id:"heterogeneous-resources-management"},"Heterogeneous resources management"),Object(o.b)("p",null,"The way Terraform manages resources is not homogeneous. Here are a few examples:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When you run Terraform against AWS on the subnets part, it will create (anytime you deploy) the missing subnets"),Object(o.b)("li",{parentName:"ul"},"For some resources like RDS or EKS, it won't check if the resource already exists or not. So if it's missing, nothing is going to happen as it's marked are deployed in the tfstate file"),Object(o.b)("li",{parentName:"ul"},"Same for Helm chart deployed, for example, they are marked as deployed, so no update will be performed on it until you change something")),Object(o.b)("p",null,"So until you experienced one of those cases, it's hard to know if a resource (which is not there) will be re-created or not."),Object(o.b)("h3",{id:"too-strong-dependencies"},"(Too) Strong dependencies"),Object(o.b)("p",null,"Let me give a frustrating example, let's say I want to deploy:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A Kubernetes cluster (EKS) on AWS"),Object(o.b)("li",{parentName:"ol"},"DNS name on Cloudflare"),Object(o.b)("li",{parentName:"ol"},"Helm charts on this EKS cluster")),Object(o.b)("p",null,"I specify dependencies in Terraform with this exact order. I run the \u201cterraform apply\u201d command to deploy this stack. A few min later, wowww it works, that is amazing, I'm super excited!"),Object(o.b)("p",null,"A few days later, I need more resources, so I update the number of worker nodes in EKS. I run once again the \u201cterraform apply\u201d command. But for some reason, Cloudflare API doesn't answer and I got completely stuck there without the possibility to update with Terraform this field because of linked dependencies."),Object(o.b)("p",null,"Same for Helm, I've multiplied the number of charts I wanted to deploy. If for some reason I have a problem with some, I may be unable to update values I wanted to update on others' charts, even if it shouldn't be that important."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"I just wanted a dependency order of deployment, not a so hard dependency between all of them for any kind of updates.")),Object(o.b)("p",null,"The link between all declared is strong, so strong that you may be blocked until the problem is resolved (by a third-party provider or a manual fix from you). ",Object(o.b)("strong",{parentName:"p"},"In case of issues, when you need to go fast, it can be a real issue, drastically slowing down the resolution of your problems.")),Object(o.b)("h3",{id:"no-automatic-reconciliation"},"No automatic reconciliation"),Object(o.b)("p",null,"Those who already used a configuration manager (Puppet, Ansible, Chef\u2026), are familiar with the automatic reconciliation. Just run it against your infrastructure, and you'll be sure about the end result if you have any doubts. You'll get what you've asked for!"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"On terraform it's different, because of the tfstate. All the deployed elements are stored in the tfstate, re-running terraform won't update resources that are supposed to be in a specific state but are not.")),Object(o.b)("p",null,"This is where the biggest behavior comes in with Terraform compared to configuration managers."),Object(o.b)("h3",{id:"automatic-import"},"Automatic import"),Object(o.b)("p",null,"When you deploy resources and something goes wrong (like an API returns a timeout failure, but in the end, you have your resource deployed), Terraform won't store the info in the state file as it shouldn't exist. Unfortunately, the resource exists and next time you will run \u201cterraform apply\u201d, you'll face a \u201cresource already exists\u201d message."),Object(o.b)("p",null,"There is, unfortunately, no way to automatically recover it automatically. You need to \u201cimport\u201d each resource one by one (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.terraform.io/docs/cli/commands/import.html"}),"https://www.terraform.io/docs/cli/commands/import.html"),")."),Object(o.b)("p",null,"This is not convenient at all if you have a team of dedicated Ops/DevOps/SRE managing it, who will fix it manually. But in the case your want it to be 100% automatic, it is a problem."),Object(o.b)("h2",{id:"advises-and-suggestion"},"Advises and suggestion"),Object(o.b)("h3",{id:"split"},"Split"),Object(o.b)("p",null,"If you want to let Terraform manage several kinds of different resources, I strongly advise to split into different state files and do not link them all together."),Object(o.b)("p",null,"This is not convenient at first because you're losing the strong link between all of them, but you can overcome this issue with data sources (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.terraform.io/docs/language/data-sources/index.html"}),"https://www.terraform.io/docs/language/data-sources/index.html"),")."),Object(o.b)("p",null,"You'll also need some tooling around it to manage the flow (in which order all of them have to run)."),Object(o.b)("h3",{id:"outsource"},"Outsource"),Object(o.b)("p",null,"This is the choice we've made at Qovery, we only kept the minimum useful to Terraform, so the Cloud part."),Object(o.b)("p",null,"Everything Helm/Kubernetes related are managed by our Engine. This has a lot of advantages (will talk about it in a dedicated post):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"more flexibility"),Object(o.b)("li",{parentName:"ul"},"restricting Terraform to what he's perfect at"),Object(o.b)("li",{parentName:"ul"},"linked resources are strong, and they are really strong cloud-only provider side"),Object(o.b)("li",{parentName:"ul"},"we better fine-grained manage helm lifecycle")),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"If today, someone is asking me: \u201cShould I use Terraform to deploy cloud providers infrastructures or services?\u201d. I would definitively say \u201cYES\u201d."),Object(o.b)("p",null,"But I'll mention that depending on how strong should be the automatization requested behind it, splitting or delegating some parts of what should be achieved. It has to come in the balance at a very early stage."),Object(o.b)(i.a,{to:"/guides/engineering/",mdxType:"Jump"},"Engineering"))}m.isMDXComponent=!0},357:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},358:function(e,t,n){"use strict";n(362);var a=n(0),r=n.n(a),o=n(357),i=n.n(o);n(131);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,o=e.icon,s=e.type,l=null;switch(s){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:i()(n,"alert","alert--"+s,{"alert--fill":a,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},m=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,h=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return n?r.a.createElement(h,s({ref:t},c,{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},360:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),i=n(39),s=n(365),l=n(19),c=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,u=n||l,m=Object(s.a)(u),d=Object(r.useRef)(!1),p=c.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!p&&m&&window.docusaurus.prefetch(u),function(){p&&t&&t.disconnect()}}),[u,p,m]),u&&m?o.a.createElement(i.b,Object(a.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(u),d.current=!0)},innerRef:function(e){var n,a;p&&e&&m&&(n=e,a=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:u})):o.a.createElement("a",Object(a.a)({},e,{href:u}))}},361:function(e,t,n){var a=n(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},362:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(367)}),n(74)("fill")},363:function(e,t,n){"use strict";n(361);var a=n(0),r=n.n(a),o=n(358);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},364:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(360),i=n(357),s=n.n(i);n(132);t.a=function(e){var t=e.children,n=e.className,a=e.badge,i=e.leftIcon,l=e.rightIcon,c=e.size,u=e.target,m=e.to,d=s()("jump-to","jump-to--"+c,n),p=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},i&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+i})),r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return u?r.a.createElement("a",{href:m,target:u,className:d},p):r.a.createElement(o.a,{to:m,className:d},p)}},365:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))},367:function(e,t,n){"use strict";var a=n(27),r=n(75),o=n(26);e.exports=function(e){for(var t=a(this),n=o(t.length),i=arguments.length,s=r(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,c=void 0===l?n:r(l,n);c>s;)t[s++]=e;return t}}}]);
/*! For license information please see c7bbfc36.f2b5352e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{287:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var o=n(1),a=n(9),r=(n(0),n(338)),i=n(341),c=n(345),l={last_modified_on:"2020-07-23",$schema:"/.meta/.schemas/guides.json",title:"Kubernetes - Network isolation with NetworkPolicy",description:"Learn how to configure network isolation with NetworkPolicy in Kubernetes",author_github:"https://github.com/deimosfr",tags:["type: engineering","technology: kubernetes"],hide_pagination:!0},s={categories:[{name:"engineering",title:"Engineering",description:"We share our engineering learning with all of you.",permalink:"/guides/engineering"}],coverLabel:"Kubernetes - Network isolation with NetworkPolicy",description:"Learn how to configure network isolation with NetworkPolicy in Kubernetes",permalink:"/guides/engineering/basic-network-isolation-in-kubernetes",readingTime:"4 min read",source:"@site/guides/engineering/basic-network-isolation-in-kubernetes.md",tags:[{label:"type: engineering",permalink:"/guides/tags/type-engineering"},{label:"technology: kubernetes",permalink:"/guides/tags/technology-kubernetes"}],title:"Kubernetes - Network isolation with NetworkPolicy",truncated:!1,prevItem:{title:"How to write a Dockerfile",permalink:"/guides/tutorial/how-to-write-a-dockerfile"},nextItem:{title:"Migrating application from Heroku to Qovery",permalink:"/guides/tutorial/migrate-webapp-from-heroku-to-qovery"}},p=[{value:"Kubernetes Networking plugin",id:"kubernetes-networking-plugin",children:[{value:"Installation",id:"installation",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Block all incoming traffic",id:"block-all-incoming-traffic",children:[]},{value:"Allow traffic between pods within the same namespace",id:"allow-traffic-between-pods-within-the-same-namespace",children:[]},{value:"Allow incoming traffic from outside",id:"allow-incoming-traffic-from-outside",children:[]},{value:"Block outgoing traffic",id:"block-outgoing-traffic",children:[]}]},{value:"Going further",id:"going-further",children:[{value:"Resources",id:"resources",children:[]}]}],u={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"As your number of deployed applications within Kubernetes grows, you may want to isolate them from a network point of view. By default, Kubernetes does not offer any network isolation, all pods of all your namespaces can talk to each other without any isolation, and even on network port that you have not defined. Yes, that's scary!"),Object(r.b)("p",null,"There are different approaches and tools to do network isolation; let's take a look at the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"}),"NetworkPolicy"),"."),Object(r.b)("h2",{id:"kubernetes-networking-plugin"},"Kubernetes Networking plugin"),Object(r.b)("p",null,"Kubernetes provides a resource called ",Object(r.b)("inlineCode",{parentName:"p"},"NetworkPolicy")," that allows the creation of rules to allow/deny network traffic, which works like a network firewall. By default using this resource doesn't do anything. To make it work, you need first to add a Kubernetes Networking plugin that implements it."),Object(r.b)("p",null,"Some Kubernetes cluster providers propose their implementation, like ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy#using_network_policy_enforcement"}),"GKS")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/aks/use-network-policies#create-an-aks-cluster-and-enable-network-policy"}),"AKS"),". On the other side, you can use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.projectcalico.org"}),"Calico")," like recommended by AWS with ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://eksworkshop.com/beginner/120_network-policies/calico/install_calico/"}),"EKS"),"."),Object(r.b)(c.a,{mdxType:"Assumptions"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You have installed the Kubernetes Networking Plugin (See below)."))),Object(r.b)("h3",{id:"installation"},"Installation"),Object(r.b)("p",null,"Here are the links to install the Kubernetes Networking plugin according to your Cloud provider."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Google Cloud Platform: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy#using_network_policy_enforcement"}),"installation guide")),Object(r.b)("li",{parentName:"ul"},"Azure: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/aks/use-network-policies#create-an-aks-cluster-and-enable-network-policy"}),"installation guide")),Object(r.b)("li",{parentName:"ul"},"Amazon Web Services: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://eksworkshop.com/beginner/120_network-policies/calico/install_calico"}),"installation guide"))),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Implementing Network Isolation is the same rule of thumb as configuring a firewall - block every inbound request and allow what you need."),Object(r.b)("h3",{id:"block-all-incoming-traffic"},"Block all incoming traffic"),Object(r.b)("p",null,"To\nIn example below, we will configure the production to be isolated from all other namespaces, but still allow any pods deployed within production namespace to talk to each other."),Object(r.b)("p",null,"First, let's create a namespace:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Production namespace"',title:'"Production','namespace"':!0}),"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: production\n  labels:\n    role: production\n")),Object(r.b)("p",null,"Then, blocking incoming traffic for this namespace looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Blocking all incoming traffic" {8-11}',title:'"Blocking',all:!0,incoming:!0,'traffic"':!0,"{8-11}":!0}),"#...\nkind: NetworkPolicy\napiVersion: networking.k8s.io/v1\nmetadata:\n  name: no-inbound-traffic\n  namespace: production\nspec:\n  policyTypes:\n  - Ingress\n  podSelector:\n    matchLabels: {}\n")),Object(r.b)("p",null,"The rule is:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"policyTypes=Ingress")," to select only the incoming traffic"),Object(r.b)("li",{parentName:"ul"},"an empty set in ",Object(r.b)("inlineCode",{parentName:"li"},"podSelector/matchLabels"),", to apply the rule to all pods within the namespace."),Object(r.b)("li",{parentName:"ul"},"no ",Object(r.b)("inlineCode",{parentName:"li"},"ingress")," rule have been defined, so everything is blocked")),Object(r.b)("h3",{id:"allow-traffic-between-pods-within-the-same-namespace"},"Allow traffic between pods within the same namespace"),Object(r.b)("p",null,"To allow any pods within the ",Object(r.b)("inlineCode",{parentName:"p"},"production")," namespace to communicate to each other, add a ",Object(r.b)("inlineCode",{parentName:"p"},"NetworkPolicy")," rule:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Add a NetworkPolicy rule to allow traffic between pods" {12-16}',title:'"Add',a:!0,NetworkPolicy:!0,rule:!0,to:!0,allow:!0,traffic:!0,between:!0,'pods"':!0,"{12-16}":!0}),"#...\nkind: NetworkPolicy\napiVersion: networking.k8s.io/v1\nmetadata:\n  name: allow-same-namespace-traffic\n  namespace: production\nspec:\n  policyTypes:\n  - Ingress\n  podSelector:\n    matchLabels: {}\n  ingress:\n  - from:\n    - namespaceSelector:\n        matchLabels:\n          role: production\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"ingress")," rules indicate that we want to allow all traffic from namespace with the label ",Object(r.b)("inlineCode",{parentName:"p"},"role=production"),"."),Object(r.b)("h3",{id:"allow-incoming-traffic-from-outside"},"Allow incoming traffic from outside"),Object(r.b)("p",null,"Let's now imagine that you have a web application listening on port 8000, to make it publicly accessible we need to add one more rule:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Allow incoming traffic from outside"',title:'"Allow',incoming:!0,traffic:!0,from:!0,'outside"':!0}),"#...\nkind: NetworkPolicy\napiVersion: networking.k8s.io/v1\nmetadata:\n  name: allow-port-8000\n  namespace: production\nspec:\n  policyTypes:\n  - Ingress\n  podSelector:\n    matchLabels:\n      app=web-server\n  ingress:\n  - ports:\n    - port: 8000\n")),Object(r.b)("p",null,"Instead of selecting all pods, I pick only those with label ",Object(r.b)("inlineCode",{parentName:"p"},"app=web-server")," of the ",Object(r.b)("inlineCode",{parentName:"p"},"productions")," namespace. Then the ",Object(r.b)("inlineCode",{parentName:"p"},"ingress:")," rule allows anybody to connect to the port 8000 of my web-server."),Object(r.b)("h3",{id:"block-outgoing-traffic"},"Block outgoing traffic"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"NetworkPolicy")," can also be used to prevent traffic from going out. For instance, we may not want an application to read the AWS metadata server information."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Block outgoing traffic to a specific IP address range" {10-22}',title:'"Block',outgoing:!0,traffic:!0,to:!0,a:!0,specific:!0,IP:!0,address:!0,'range"':!0,"{10-22}":!0}),"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: disable-aws-metadata\n  namespace: production\nspec:\n  policyTypes:\n  - Egress\n  podSelector:\n    matchLabels: {}\n  egress:\n  - to:\n    - ipBlock:\n        cidr: 0.0.0.0/0\n        except:\n          - 169.254.169.254/32\n")),Object(r.b)("h2",{id:"going-further"},"Going further"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"NetworkPolicy")," is useful for simple network traffic filtering, but not enough to have perfect control over pods communication. Filtering rules are made only with Pod and Namespace selectors. A person with bad intentions can still connect directly to the application port (here 8000) and bypass your ",Object(r.b)("inlineCode",{parentName:"p"},"Ingress")," resources and ",Object(r.b)("inlineCode",{parentName:"p"},"Loadbalancer")," setup once the network port is open."),Object(r.b)("p",null,"In a forthcoming post, we will see how we can have fine-grained filtering with a sidecar service called ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://istio.io/"}),"Istio"),"."),Object(r.b)("h3",{id:"resources"},"Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"}),"Kubernetes Network Policies")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.projectcalico.org/reference/resources/networkpolicy#content-main"}),"Calico Network Policies")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://eksworkshop.com/beginner/120_network-policies/calico/stars_policy_demo/apply_network_policies/"}),"Calico Network Policies - eksworkshop")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy"}),"GCP Network Policy"))),Object(r.b)(i.a,{to:"/guides/engineering/",mdxType:"Jump"},"Engineering"))}b.isMDXComponent=!0},337:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var i=a.apply(null,o);i&&e.push(i)}else if("object"===r)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||r;return n?a.a.createElement(d,c({ref:t},s,{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},339:function(e,t,n){"use strict";var o=n(1),a=n(0),r=n.n(a),i=n(39),c=n(342),l=n(19),s=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,p=n||l,u=Object(c.a)(p),b=Object(a.useRef)(!1),m=s.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!m&&u&&window.docusaurus.prefetch(p),function(){m&&t&&t.disconnect()}}),[p,m,u]),p&&u?r.a.createElement(i.b,Object(o.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(p),b.current=!0)},innerRef:function(e){var n,o;m&&e&&u&&(n=e,o=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),o())}))}))).observe(n))},to:p})):r.a.createElement("a",Object(o.a)({},e,{href:p}))}},340:function(e,t,n){"use strict";n(344);var o=n(0),a=n.n(o),r=n(337),i=n.n(r);n(133);t.a=function(e){var t=e.children,n=e.classNames,o=e.fill,r=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":o,"alert--icon":!1!==r}),role:"alert"},!1!==r&&a.a.createElement("i",{className:i()("feather","icon-"+(r||l))}),t)}},341:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(339),i=n(337),c=n.n(i);n(132);t.a=function(e){var t=e.children,n=e.className,o=e.badge,i=e.leftIcon,l=e.rightIcon,s=e.size,p=e.target,u=e.to,b=c()("jump-to","jump-to--"+s,n),m=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},i&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+i})),a.a.createElement("div",{className:"jump-to--main"},o?a.a.createElement("span",{className:"badge badge--primary badge--right"},o):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return p?a.a.createElement("a",{href:u,target:p,className:b},m):a.a.createElement(r.a,{to:u,className:b},m)}},342:function(e,t,n){"use strict";function o(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return o}))},343:function(e,t,n){var o=n(25).f,a=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in a||n(10)&&o(a,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},344:function(e,t,n){var o=n(12);o(o.P,"Array",{fill:n(347)}),n(75)("fill")},345:function(e,t,n){"use strict";n(343);var o=n(0),a=n.n(o),r=n(340);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},347:function(e,t,n){"use strict";var o=n(27),a=n(76),r=n(26);e.exports=function(e){for(var t=o(this),n=r(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,s=void 0===l?n:a(l,n);s>c;)t[c++]=e;return t}}}]);
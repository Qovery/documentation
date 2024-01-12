(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),i=(n(0),n(445)),o=n(457),l=n(462),c=(n(452),n(444),{last_modified_on:"2024-01-11",title:"Requirements",description:"Learn how to install and configure Qovery on your own Kubernetes cluster (BYOK) / Self-managed Kubernetes cluster"}),s={id:"getting-started/install-qovery/kubernetes/requirements",title:"Requirements",description:"Learn how to install and configure Qovery on your own Kubernetes cluster (BYOK) / Self-managed Kubernetes cluster",source:"@site/docs/getting-started/install-qovery/kubernetes/requirements.md",permalink:"/docs/getting-started/install-qovery/kubernetes/requirements",sidebar:"docs",previous:{title:"Quickstart",permalink:"/docs/getting-started/install-qovery/kubernetes/quickstart"},next:{title:"Configuration",permalink:"/docs/getting-started/install-qovery/kubernetes/byok-config"}},u=[{value:"Why Qovery needs a Container Registry?",id:"why-qovery-needs-a-container-registry",children:[]},{value:"\u26a0\ufe0f Temporary limitations",id:"\ufe0f-temporary-limitations",children:[{value:"Kubernetes hosting &amp; access",id:"kubernetes-hosting--access",children:[]},{value:"Container registry",id:"container-registry",children:[]}]}],b={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Qovery requires a Kubernetes cluster with the following requirements:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Kubernetes version 1.26 or higher"),Object(i.b)("li",{parentName:"ul"},"Helm version 3.0 or higher"),Object(i.b)("li",{parentName:"ul"},"from 1 CPU to 4 CPU depending on the third-party components you want to install"),Object(i.b)("li",{parentName:"ul"},"From 512 MB to 4 GB RAM depending on the third-party components you want to install"),Object(i.b)("li",{parentName:"ul"},"20 GB disk space"),Object(i.b)("li",{parentName:"ul"},"Being able to access to the Internet"),Object(i.b)("li",{parentName:"ul"},"A private registry")),Object(i.b)("h3",{id:"why-qovery-needs-a-container-registry"},"Why Qovery needs a Container Registry?"),Object(i.b)("p",null,"Qovery requires a private container registry to store built images and mirror containers in order to reduce potential images deletion by 3rd party, while you still need them (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/image-mirroring/"}),"more info here"),")."),Object(i.b)("h2",{id:"\ufe0f-temporary-limitations"},"\u26a0\ufe0f Temporary limitations"),Object(i.b)("p",null,"In our current state of Qovery BYOK development, we have some temporary limitations that will be removed within February 2024."),Object(i.b)("h3",{id:"kubernetes-hosting--access"},"Kubernetes hosting & access"),Object(i.b)("p",null,"You can run Qovery BYOK on any Kubernetes cluster running on:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"AWS"),Object(i.b)("li",{parentName:"ul"},"GCP"),Object(i.b)("li",{parentName:"ul"},"Scaleway")),Object(i.b)("p",null,"To access your Kubernetes cluster Qovery needs:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"your cloud provider credentials"),Object(i.b)("li",{parentName:"ul"},"the cluster Kubeconfig")),Object(i.b)("h3",{id:"container-registry"},"Container registry"),Object(i.b)("p",null,"As of now, we only support ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/ecr/"}),"AWS ECR")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.google.com/artifact-registry"}),"GCP GCR")," as Container Registries.  "),Object(i.b)("p",null,"Below you can find the installation step to make your cluster work with ECR or GCR"),Object(i.b)(o.a,{centered:!0,className:"rounded",defaultValue:"ecr",placeholder:"Select a container registry",select:!1,size:null,values:[{group:"Registry",label:"ECR",value:"ecr"},{group:"Registry",label:"GCR",value:"gcr"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"ecr",mdxType:"TabItem"},Object(i.b)("p",null,"Create an IAM user with the following policy, and generate an access key:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "Statement": [\n        {\n            "Action": [\n                "ecr:*"\n            ],\n            "Effect": "Allow",\n            "Resource": "*"\n        }\n    ],\n    "Version": "2012-10-17"\n}\n')),Object(i.b)("p",null,"Then, create a ",Object(i.b)("inlineCode",{parentName:"p"},"config.yaml")," file to configure the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:""}),"ECR Credentials Provider"),", where you should set the AWS credentials previously generated:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),'apiVersion: kubelet.config.k8s.io/v1\nkind: CredentialProviderConfig\nproviders:\n  - name: ecr-credential-provider\n    matchImages:\n      - "*.dkr.ecr.*.amazonaws.com"\n      - "*.dkr.ecr.*.amazonaws.com.cn"\n      - "*.dkr.ecr-fips.*.amazonaws.com"\n      - "*.dkr.ecr.us-iso-east-1.c2s.ic.gov"\n      - "*.dkr.ecr.us-isob-east-1.sc2s.sgov.gov"\n    defaultCacheDuration: "12h"\n    apiVersion: credentialprovider.kubelet.k8s.io/v1\n    env:\n      - name: AWS_ACCESS_KEY_ID\n        value: CHANGE_ME\n      - name: AWS_DEFAULT_REGION\n        value: CHANGE_ME\n      - name: AWS_SECRET_ACCESS_KEY\n        value: CHANGE_ME\n')),Object(i.b)("p",null,"Here we use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/blog/2022/12/22/kubelet-credential-providers/"}),"Kubelet Credential Provider")," to inject the AWS credentials into the pods. The ",Object(i.b)("inlineCode",{parentName:"p"},"config.yaml")," file is mounted into the Kubernetes nodes, and the ",Object(i.b)("inlineCode",{parentName:"p"},"ecr-credential-provider")," binary is also mounted into the nodes.")),Object(i.b)(l.a,{value:"gcr",mdxType:"TabItem"},Object(i.b)("p",null,"Work in progress"))))}d.isMDXComponent=!0},444:function(e,t,n){"use strict";n(446);var a=n(0),r=n.n(a),i=n(443),o=n.n(i);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,i=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:o()(n,"alert","alert--"+l,{"alert--fill":a,"alert--icon":!1!==i}),role:"alert"},!1!==i&&r.a.createElement("i",{className:o()("feather","icon-"+(i||c))}),t)}},452:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=(n(443),n(451)),o=n.n(i);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,i=e.hideFeedbackQuestion,l="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+l+" failed",body:"The tutorial on:\n\n"+l+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+o.a.stringify(c),u=Object(a.useState)(null),b=u[0],d=u[1];return r.a.createElement("div",{className:"steps steps--h"+n},t,!i&&!b&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return d("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==b&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},457:function(e,t,n){"use strict";var a=n(1),r=(n(463),n(458),n(52),n(29),n(22),n(21),n(0)),i=n.n(r),o=n(466),l=n(443),c=n.n(l),s=n(451),u=n.n(s),b=n(465),d=37,m=39;function p(e){var t=e.block,n=e.centered,a=e.changeSelectedValue,r=e.className,o=e.handleKeydown,l=e.style,s=e.values,u=e.selectedValue,b=e.tabRefs;return i.a.createElement("div",{className:n?"tabs--centered":null},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",r,{"tabs--block":t}),style:l},s.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:c()("tab-item",{"tab-item--active":u===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return o(b,e.target,e)},onFocus:function(){return a(t)},onClick:function(){return a(t)}},n)}))))}function h(e){var t=e.placeholder,n=e.selectedValue,a=e.changeSelectedValue,r=e.size,l=e.values,c=l;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return i.a.createElement(o.a,{className:"react-select-container react-select--"+r,classNamePrefix:"react-select",options:c,isClearable:n,placeholder:t,value:l.find((function(e){return e.value==n})),onChange:function(e){return a(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,n=e.defaultValue,o=e.groupId,l=e.label,c=e.placeholder,s=e.select,g=e.size,f=(e.style,e.values),y=e.urlKey,v=Object(b.a)(),O=v.tabGroupChoices,j=v.setTabGroupChoices,w=Object(r.useState)(n),k=w[0],N=w[1];if(null!=o){var C=O[o];null!=C&&C!==k&&N(C)}var E=function(e){N(e),null!=o&&j(o,e)},K=[],S=function(e,t,n){switch(n.keyCode){case m:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}};return Object(r.useEffect)((function(){if("undefined"!=typeof window&&window.location&&y){var e=u.a.parse(window.location.search);e[y]&&N(e[y])}}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"margin-bottom--"+(g||"md")},l&&i.a.createElement("div",{className:"margin-vert--sm"},l),f.length>1&&(s?i.a.createElement(h,Object(a.a)({changeSelectedValue:E,handleKeydown:S,placeholder:c,selectedValue:k,size:g,tabRefs:K},e)):i.a.createElement(p,Object(a.a)({changeSelectedValue:E,handleKeydown:S,selectedValue:k,tabRefs:K},e)))),r.Children.toArray(t).filter((function(e){return e.props.value===k}))[0])}},462:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement(r.a.Fragment,null,e.children)}}}]);
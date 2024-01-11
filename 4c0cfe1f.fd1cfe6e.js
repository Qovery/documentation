(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{247:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return h}));var a=n(1),r=n(9),l=(n(0),n(444)),i=n(456),o=n(461),c=n(451),s=n(443),u=n(448),b={last_modified_on:"2024-01-11",title:"Create Demo Cluster",description:"Learn how to create a Kubernetes cluster with k3d for demo purposes"},d={id:"getting-started/install-qovery/kubernetes/create-k8s-cluster",title:"Create Demo Cluster",description:"Learn how to create a Kubernetes cluster with k3d for demo purposes",source:"@site/docs/getting-started/install-qovery/kubernetes/create-k8s-cluster.md",permalink:"/docs/getting-started/install-qovery/kubernetes/create-k8s-cluster",sidebar:"docs",previous:{title:"Quickstart",permalink:"/docs/getting-started/install-qovery/kubernetes/quickstart"},next:{title:"Configuration",permalink:"/docs/getting-started/install-qovery/kubernetes/byok-config"}},p=[{value:"\u26a0\ufe0f Important temporary limitations",id:"\ufe0f-important-temporary-limitations",children:[{value:"Why Qovery needs a Container Registry?",id:"why-qovery-needs-a-container-registry",children:[]}]},{value:"Install and Run k3d",id:"install-and-run-k3d",children:[{value:"Choose a Container Registry",id:"choose-a-container-registry",children:[]},{value:"Install k3d",id:"install-k3d",children:[]},{value:"Check your cluster",id:"check-your-cluster",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],m={rightToc:p};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(s.a,{type:"warning",mdxType:"Alert"},Object(l.b)("p",null,"This setup is just for demo purposes. If you want to use Qovery in production, you should use a managed Kubernetes cluster or even k3d but with a better setup. Feel free to contact us on our ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"Community forum")," if you need help.")),Object(l.b)("p",null,"This page explains how to set up a local Kubernetes cluster with ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://k3d.io"}),"k3d"),"."),Object(l.b)(u.a,{mdxType:"Assumptions"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You have ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://helm.sh"}),"helm")," installed on your machine"))),Object(l.b)("h2",{id:"\ufe0f-important-temporary-limitations"},"\u26a0\ufe0f Important temporary limitations"),Object(l.b)("p",null,"In our current state of Qovery BYOK development, we have some hard requirements, like the need of a supported Container Registry (",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/ecr/"}),"AWS ECR")," or ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.google.com/artifact-registry"}),"GCP GCR"),"). This is a temporary limitation that will be removed within February 2024. However, you can run Qovery BYOK on any Kubernetes cluster (and not only k3d) if you have a AWS ECR or GCP GCR container registry."),Object(l.b)("p",null,"Non-exhaustive of possible setups:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"k3d + AWS ECR"),Object(l.b)("li",{parentName:"ul"},"k3d + GCP GCR"),Object(l.b)("li",{parentName:"ul"},"GCP GKE + GCP GCR"),Object(l.b)("li",{parentName:"ul"},"AWS EKS + AWS ECR"),Object(l.b)("li",{parentName:"ul"},"Azure AKS + AWS ECR or GCP GCR"),Object(l.b)("li",{parentName:"ul"},"Digital Ocean Kubernetes + AWS ECR or GCP GCR"),Object(l.b)("li",{parentName:"ul"},"Civo Kubernetes + AWS ECR or GCP GCR"),Object(l.b)("li",{parentName:"ul"},"Any Kubernetes cluster + AWS ECR or GCP GCR")),Object(l.b)("p",null,"As soon as we have a supported Container Registry, you will be able to use Qovery BYOK on any Kubernetes cluster."),Object(l.b)("h3",{id:"why-qovery-needs-a-container-registry"},"Why Qovery needs a Container Registry?"),Object(l.b)("p",null,"Qovery requires a private container registry to store built images and mirror containers in order to reduce potential images deletion by 3rd party, while you still need them (",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/deployment/image-mirroring/"}),"more info here"),")."),Object(l.b)("h2",{id:"install-and-run-k3d"},"Install and Run k3d"),Object(l.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(l.b)("ol",null,Object(l.b)("li",null,Object(l.b)("h3",{id:"choose-a-container-registry"},"Choose a Container Registry"),Object(l.b)(i.a,{centered:!0,className:"rounded",defaultValue:"ecr",placeholder:"Select a container registry",select:!1,size:null,values:[{group:"Registry",label:"ECR",value:"ecr"},{group:"Registry",label:"GCR",value:"gcr"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"ecr",mdxType:"TabItem"},Object(l.b)("p",null,"Create an IAM user with the following policy, and generate an access key:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "Statement": [\n        {\n            "Action": [\n                "ecr:*"\n            ],\n            "Effect": "Allow",\n            "Resource": "*"\n        }\n    ],\n    "Version": "2012-10-17"\n}\n')),Object(l.b)("p",null,"Then, create a ",Object(l.b)("inlineCode",{parentName:"p"},"config.yaml")," file to configure the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:""}),"ECR Credentials Provider"),", where you should set the AWS credentials previously generated:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),'apiVersion: kubelet.config.k8s.io/v1\nkind: CredentialProviderConfig\nproviders:\n  - name: ecr-credential-provider\n    matchImages:\n      - "*.dkr.ecr.*.amazonaws.com"\n      - "*.dkr.ecr.*.amazonaws.com.cn"\n      - "*.dkr.ecr-fips.*.amazonaws.com"\n      - "*.dkr.ecr.us-iso-east-1.c2s.ic.gov"\n      - "*.dkr.ecr.us-isob-east-1.sc2s.sgov.gov"\n    defaultCacheDuration: "12h"\n    apiVersion: credentialprovider.kubelet.k8s.io/v1\n    env:\n      - name: AWS_ACCESS_KEY_ID\n        value: CHANGE_ME\n      - name: AWS_DEFAULT_REGION\n        value: CHANGE_ME\n      - name: AWS_SECRET_ACCESS_KEY\n        value: CHANGE_ME\n')),Object(l.b)("p",null,"Here we use the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/blog/2022/12/22/kubelet-credential-providers/"}),"Kubelet Credential Provider")," to inject the AWS credentials into the pods. The ",Object(l.b)("inlineCode",{parentName:"p"},"config.yaml")," file is mounted into the Kubernetes nodes, and the ",Object(l.b)("inlineCode",{parentName:"p"},"ecr-credential-provider")," binary is also mounted into the nodes.")),Object(l.b)(o.a,{value:"gcr",mdxType:"TabItem"},Object(l.b)("p",null,"Work in progress")))),Object(l.b)("li",null,Object(l.b)("h3",{id:"install-k3d"},"Install k3d"),Object(l.b)(i.a,{centered:!0,className:"rounded",defaultValue:"ecr",placeholder:"Select a Container Registry",select:!1,size:null,values:[{group:"Registry",label:"ECR",value:"ecr"},{group:"Registry",label:"GCR",value:"gcr"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"ecr",mdxType:"TabItem"},Object(l.b)("p",null,"Create the ",Object(l.b)("inlineCode",{parentName:"p"},"registry_bin")," folder and ",Object(l.b)("inlineCode",{parentName:"p"},"ecr-credential-provider")," file for the ECR Credential Provider service:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p registry_bin\ntouch registry_bin/ecr-credential-provider\nchmod 755 registry_bin/ecr-credential-provider\n")),Object(l.b)("p",null,"Now we can run a local Kubernetes cluster (update the path to ",Object(l.b)("inlineCode",{parentName:"p"},"config.yaml")," file, and the Kubernetes ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.docker.com/r/rancher/k3s/tags"}),"image tag version"),"):"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'k3d cluster create --image rancher/k3s:v1.26.11-k3s2 --k3s-arg "--disable=traefik,metrics-server@server:0" \\\n-v $(pwd)/registry_bin:/var/lib/rancher/credentialprovider/bin@server:0  \\\n-v $(pwd)/config.yaml:/var/lib/rancher/credentialprovider/config.yaml@server:0\n')),Object(l.b)("p",null,"Now we need to install the ECR Credential Provider binary into the Kubernetes nodes. We will use a Kubernetes Job to do that:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: cloud-provider-repository-binary-builder\nspec:\n  backoffLimit: 0\n  template:\n    spec:\n      restartPolicy: Never\n      containers:\n      - name: ecr-credential-builder\n        image: alpine:3.18\n        command:\n          - /bin/sh\n          - -c\n          - |\n            apk add -U ca-certificates tar zstd tzdata go git\n            git clone https://github.com/kubernetes/cloud-provider-aws.git\n            cd cloud-provider-aws/cmd/ecr-credential-provider\n            CGO_ENABLED=0 go build -mod=readonly .\n            chmod 755 ecr-credential-provider\n            mkdir -p /mnt/host/var/lib/rancher/credentialprovider/bin/\n            cp ecr-credential-provider /mnt/host/var/lib/rancher/credentialprovider/bin/\n        volumeMounts:\n        - mountPath: /mnt/host\n          name: host\n      volumes:\n      - hostPath:\n          path: /\n          type: ""\n        name: host\n')),Object(l.b)("p",null,"You can now move on the Qovery Helm deployment.")),Object(l.b)(o.a,{value:"gcr",mdxType:"TabItem"},Object(l.b)("p",null,"Work in progress")))),Object(l.b)("li",null,Object(l.b)("h3",{id:"check-your-cluster"},"Check your cluster"),Object(l.b)(i.a,{centered:!0,className:"rounded",defaultValue:"ecr",placeholder:"Select a Container Registry",select:!1,size:null,values:[{group:"Registry",label:"ECR",value:"ecr"},{group:"Registry",label:"GCR",value:"gcr"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"ecr",mdxType:"TabItem"},Object(l.b)("p",null,"Run the following command to check that your cluster is ready with your ECR credentials:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"TODO\n"))),Object(l.b)(o.a,{value:"gcr",mdxType:"TabItem"},Object(l.b)("p",null,"Work in progress")))))),Object(l.b)("h2",{id:"next-steps"},"Next Steps"),Object(l.b)("p",null,"Congratulations! You have successfully created a Kubernetes cluster with k3d. You are now ready to install Qovery BYOK on your cluster. Next step: ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/install-qovery/kubernetes/quickstart/#install-qovery"}),"Install Qovery BYOK")))}h.isMDXComponent=!0},443:function(e,t,n){"use strict";n(445);var a=n(0),r=n.n(a),l=n(442),i=n.n(l);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,l=e.icon,o=e.type,c=null;switch(o){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:i()(n,"alert","alert--"+o,{"alert--fill":a,"alert--icon":!1!==l}),role:"alert"},!1!==l&&r.a.createElement("i",{className:i()("feather","icon-"+(l||c))}),t)}},447:function(e,t,n){var a=n(28).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},448:function(e,t,n){"use strict";n(447);var a=n(0),r=n.n(a),l=n(443);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(l.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},451:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=(n(442),n(450)),i=n.n(l);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,l=e.hideFeedbackQuestion,o="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+o+" failed",body:"The tutorial on:\n\n"+o+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(c),u=Object(a.useState)(null),b=u[0],d=u[1];return r.a.createElement("div",{className:"steps steps--h"+n},t,!l&&!b&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return d("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==b&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},456:function(e,t,n){"use strict";var a=n(1),r=(n(462),n(457),n(52),n(29),n(22),n(21),n(0)),l=n.n(r),i=n(465),o=n(442),c=n.n(o),s=n(450),u=n.n(s),b=n(464),d=37,p=39;function m(e){var t=e.block,n=e.centered,a=e.changeSelectedValue,r=e.className,i=e.handleKeydown,o=e.style,s=e.values,u=e.selectedValue,b=e.tabRefs;return l.a.createElement("div",{className:n?"tabs--centered":null},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",r,{"tabs--block":t}),style:o},s.map((function(e){var t=e.value,n=e.label;return l.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:c()("tab-item",{"tab-item--active":u===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return i(b,e.target,e)},onFocus:function(){return a(t)},onClick:function(){return a(t)}},n)}))))}function h(e){var t=e.placeholder,n=e.selectedValue,a=e.changeSelectedValue,r=e.size,o=e.values,c=o;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return l.a.createElement(i.a,{className:"react-select-container react-select--"+r,classNamePrefix:"react-select",options:c,isClearable:n,placeholder:t,value:o.find((function(e){return e.value==n})),onChange:function(e){return a(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,n=e.defaultValue,i=e.groupId,o=e.label,c=e.placeholder,s=e.select,g=e.size,y=(e.style,e.values),v=e.urlKey,f=Object(b.a)(),O=f.tabGroupChoices,j=f.setTabGroupChoices,k=Object(r.useState)(n),C=k[0],w=k[1];if(null!=i){var N=O[i];null!=N&&N!==C&&w(N)}var E=function(e){w(e),null!=i&&j(i,e)},R=[],T=function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}};return Object(r.useEffect)((function(){if("undefined"!=typeof window&&window.location&&v){var e=u.a.parse(window.location.search);e[v]&&w(e[v])}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"margin-bottom--"+(g||"md")},o&&l.a.createElement("div",{className:"margin-vert--sm"},o),y.length>1&&(s?l.a.createElement(h,Object(a.a)({changeSelectedValue:E,handleKeydown:T,placeholder:c,selectedValue:C,size:g,tabRefs:R},e)):l.a.createElement(m,Object(a.a)({changeSelectedValue:E,handleKeydown:T,selectedValue:C,tabRefs:R},e)))),r.Children.toArray(t).filter((function(e){return e.props.value===C}))[0])}},461:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement(r.a.Fragment,null,e.children)}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),i=(n(0),n(439)),o=n(438),l=n(445),c=(n(451),n(443)),s={last_modified_on:"2022-05-29",$schema:"/.meta/.schemas/guides.json",title:"(Beginner) Getting Started with Preview Environments on AWS",description:"Step-by-step guide to get started with the preview environment on AWS - for beginner",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","technology: qovery"],hide_pagination:!0},u={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"(Beginner) Getting Started with Preview Environments on AWS",description:"Step-by-step guide to get started with the preview environment on AWS - for beginner",permalink:"/guides/tutorial/getting-started-with-preview-environments-on-aws-for-beginners",readingTime:"6 min read",source:"@site/guides/tutorial/getting-started-with-preview-environments-on-aws-for-beginners.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"(Beginner) Getting Started with Preview Environments on AWS",truncated:!1,prevItem:{title:"(Advanced) Getting Started with Preview Environments on AWS",permalink:"/guides/tutorial/getting-started-with-preview-environments-on-aws-for-advanced-users"},nextItem:{title:"Blazingly fast Preview Environments for NextJS, NodeJS, and MongoDB on AWS",permalink:"/guides/tutorial/blazingly-fast-preview-environments-for-nextjs-nodejs-and-mongodb-on-aws"}},b=[{value:"Steps",id:"steps",children:[]},{value:"Create your Blueprint Environment",id:"create-your-blueprint-environment",children:[{value:"Enable Preview Environment",id:"enable-preview-environment",children:[]},{value:"Change your base branch",id:"change-your-base-branch",children:[]}]},{value:"Validate your Blueprint Environment",id:"validate-your-blueprint-environment",children:[]},{value:"Create a Preview Environment",id:"create-a-preview-environment",children:[]},{value:"Delete a Preview Environment",id:"delete-a-preview-environment",children:[]},{value:"Advanced",id:"advanced",children:[]},{value:"Wrapping up",id:"wrapping-up",children:[]}],m={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"It is critical to have testing and staging environments accurately reflect production, but achieving this can be a major operational hassle. Most engineering teams use a single staging environment which makes it hard for developers to test their changes in isolation; the alternative is for DevOps teams to spin up new testing or staging environments manually and tear them down after testing is done."),Object(i.b)("p",null,"Qovery\u2019s Preview Environments solve this problem by automatically creating a clone of your production environment (including applications, databases and configuration) on every pull request, so you can test your changes with confidence without affecting your production."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/preview-environment-on-aws-for-beginner/preview_env_flow_schema.jpg",alt:"Flow on how Qovery Preview Environment works"})),Object(i.b)("p",null,"Qovery keeps your preview environments up to date on every commit and automatically destroys them when the original pull request is merged or closed. You can also set up an expiry time to automatically clean up preview environments after a period of inactivity."),Object(i.b)("p",null,"Preview Environments can be helpful in a lot of cases:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Share your changes live in code reviews: no more Git diffs for visual changes!"),Object(i.b)("li",{parentName:"ul"},"Get shareable links for upcoming features and collaborate more effectively with internal and external stakeholders."),Object(i.b)("li",{parentName:"ul"},"Run CI tests against a high fidelity copy of your production environment before merging.")),Object(i.b)("p",null,"In this step-by-step guide you will learn how to get started using the Preview Environments on AWS with Qovery."),Object(i.b)(o.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"This guide also works with other cloud service providers supported by Qovery.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Please contact us via ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"our forum")," if you have any questions concerning the Preview Environments")),Object(i.b)(c.a,{name:"guide",mdxType:"Assumptions"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You have ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://start.qovery.com"}),"sign in on Qovery")),Object(i.b)("li",{parentName:"ul"},"You have ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/guides/tutorial/how-to-deploy-your-application-on-aws-in-30-minutes/"}),"installed Qovery on your AWS account")),Object(i.b)("li",{parentName:"ul"},"You have at least already ",Object(i.b)("strong",{parentName:"li"},"deployed successfully")," a first application"))),Object(i.b)("h2",{id:"steps"},"Steps"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#create-a-blueprint-environment"}),'Create a "Blueprint" environment')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#enable-deployment-environment"}),"Enable Deployment Environment feature")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#create-a-preview-environment"}),"Create a Preview Environment")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#delete-a-preview-environment"}),"Delete a Preview Environment")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#seed-your-database"}),"Seed your database")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#auto-stop-and-start-your-preview-environments"}),"Auto stop and start your Preview Environments")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#integrate-your-ci-platform"}),"Integrate your CI (Continuous Deployment) platform"))),Object(i.b)("h2",{id:"create-your-blueprint-environment"},"Create your Blueprint Environment"),Object(i.b)("p",null,"Even if not required, we recommend creating an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"environment"),' that will serve as a root to create your Preview Environments. The idea is to keep this environment as a template of a fully working environment. This environment should not be directly used. This is what we call "blueprint environment".'),Object(i.b)("p",null,"I assume you already have a working environment, so to create a blueprint environment you need to:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Go to your working environment"),Object(i.b)("li",{parentName:"ol"},'Click on "Actions" > "Clone"'),Object(i.b)("li",{parentName:"ol"},'Name your environment "blueprint"'),Object(i.b)("li",{parentName:"ol"},'Click on "Create"')),Object(i.b)("div",{class:"video-container"},Object(i.b)("p",{align:"center"},Object(i.b)("iframe",{src:"https://www.loom.com/embed/a282d6b832794671a3582550aa45f9ae",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(i.b)(o.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"We recommend using a different cluster than your production for your Preview Environments. We will see this in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/tutorial/getting-started-with-preview-environments-on-aws-for-advanced-users/"}),"(Advanced) Getting Started with Preview Environments on AWS"),".")),Object(i.b)("h3",{id:"enable-preview-environment"},"Enable Preview Environment"),Object(i.b)("p",null,"Now, you can go to turn on Preview Environments by:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Click on your ",Object(i.b)("inlineCode",{parentName:"li"},"Blueprint"),' environment "Settings".'),Object(i.b)("li",{parentName:"ol"},"Click on the ",Object(i.b)("inlineCode",{parentName:"li"},"Preview Env.")," tab"),Object(i.b)("li",{parentName:"ol"},"Turn on Preview Environment feature for all your applications by clicking on ",Object(i.b)("inlineCode",{parentName:"li"},"Activate preview environment for all apps"),".")),Object(i.b)("div",{class:"video-container"},Object(i.b)("p",{align:"center"},Object(i.b)("iframe",{src:"https://www.loom.com/embed/55b9d99a59524e1cb7875f7db7691fbe",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(i.b)("h3",{id:"change-your-base-branch"},"Change your base branch"),Object(i.b)("p",null,"Now that you have turned on the Preview Environment feature, you need to change the base branch from your applications inside your Blueprint Environment. Let's say, every new feature branch you create are coming from ",Object(i.b)("inlineCode",{parentName:"p"},"staging"),". Then you will need to change all your applications to target the ",Object(i.b)("inlineCode",{parentName:"p"},"staging")," branch."),Object(i.b)("div",{class:"video-container"},Object(i.b)("p",{align:"center"},Object(i.b)("iframe",{src:"https://www.loom.com/embed/67df458d340d484fa1e675cc20e36caf",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(i.b)("p",null,"Here is a flow example showing what happen when you create a new Pull Request from a ",Object(i.b)("inlineCode",{parentName:"p"},"feat/xxx")," branch that has been created from the base branch ",Object(i.b)("inlineCode",{parentName:"p"},"staging"),"."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/preview-environment-on-aws-for-beginner/preview_env_branching.jpg",alt:"Flow on how Qovery Preview Environment Branching works"})),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"A developer creates a git branch ",Object(i.b)("inlineCode",{parentName:"li"},"feat/xxx")," is created from ",Object(i.b)("inlineCode",{parentName:"li"},"staging"),"."),Object(i.b)("li",{parentName:"ol"},"A developer creates a Pull Request for ",Object(i.b)("inlineCode",{parentName:"li"},"feat/xxx"),"."),Object(i.b)("li",{parentName:"ol"},"Qovery creates a Preview Environment ",Object(i.b)("inlineCode",{parentName:"li"},"feat/xxx")," from the ",Object(i.b)("inlineCode",{parentName:"li"},"blueprint")," environment. ",Object(i.b)("strong",{parentName:"li"},"The frontend, backend, PostgreSQL and Redis instances are cloned!")),Object(i.b)("li",{parentName:"ol"},"The frontend app from the environment ",Object(i.b)("inlineCode",{parentName:"li"},"feat/xxx")," is accessible via a dedicated URL.")),Object(i.b)("h2",{id:"validate-your-blueprint-environment"},"Validate your Blueprint Environment"),Object(i.b)("p",null,"Before creating a Preview Environment, validate that your Blueprint environment works."),Object(i.b)("div",{class:"video-container"},Object(i.b)("p",{align:"center"},Object(i.b)("iframe",{src:"https://www.loom.com/embed/3dd4d9aee9ac44a9af0cb8eddee7735c",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(i.b)("p",null,"Once done, you need to:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'Stop your Blueprint environment by clicking on "Actions" > "Stop".'),Object(i.b)("li",{parentName:"ol"},'Turn off "auto-deploy" by clicking on "Settings" > "Deployment" > "Auto-deploy off" > "Save".')),Object(i.b)("div",{class:"video-container"},Object(i.b)("p",{align:"center"},Object(i.b)("iframe",{src:"https://www.loom.com/embed/36b0bb48346f40f6ac8569a7b8dbc5b3",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(i.b)("p",null,"We are now ready to try out our Preview Environment configuration."),Object(i.b)("h2",{id:"create-a-preview-environment"},"Create a Preview Environment"),Object(i.b)("p",null,"To create a Preview Environment, here are the steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Checkout your ",Object(i.b)("inlineCode",{parentName:"li"},"staging")," branch."),Object(i.b)("li",{parentName:"ol"},"Create a branch ",Object(i.b)("inlineCode",{parentName:"li"},"test_qovery_preview_environment")," and push it."),Object(i.b)("li",{parentName:"ol"},"Create a Pull Request/Merge Request.")),Object(i.b)(o.a,{type:"success",mdxType:"Alert"},Object(i.b)("p",null,"Qovery take care of cloning all your services and the configuration as well (Environment Variables and Secrets included).")),Object(i.b)("div",{class:"video-container"},Object(i.b)("p",{align:"center"},Object(i.b)("iframe",{src:"https://www.loom.com/embed/2266d0897c964635b37447ae9ef2acea",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(i.b)("p",null,"You must see a new environment appearing in your environment list on Qovery. Wait until it is fully deployed, then you will be able to connect to it. This environment is fully isolated from your base environment."),Object(i.b)("h2",{id:"delete-a-preview-environment"},"Delete a Preview Environment"),Object(i.b)("p",null,"To delete you need to merge ",Object(i.b)("inlineCode",{parentName:"p"},"test_qovery_preview_environment")," into ",Object(i.b)("inlineCode",{parentName:"p"},"staging"),". You also have the ability to delete it manually on Qovery."),Object(i.b)(o.a,{type:"warning",mdxType:"Alert"},Object(i.b)("p",null,"By merging into ",Object(i.b)("inlineCode",{parentName:"p"},"staging"),", Qovery will auto-redeploy the new version in your ",Object(i.b)("inlineCode",{parentName:"p"},"staging")," environment. Turn off ",Object(i.b)("inlineCode",{parentName:"p"},"auto-deploy")," from the ",Object(i.b)("inlineCode",{parentName:"p"},"staging")," environment settings if you want to manually deploy new version in staging.")),Object(i.b)("div",{class:"video-container"},Object(i.b)("p",{align:"center"},Object(i.b)("iframe",{src:"https://www.loom.com/embed/1feb31f4bbec4d54b0764dfa1271dd0d",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(i.b)("h2",{id:"advanced"},"Advanced"),Object(i.b)("p",null,"Eager to know how to go integrate Qovery Preview Environments with your CI and much more? Check out our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/tutorial/getting-started-with-preview-environments-on-aws-for-advanced-users/"}),"Advanced Preview Environment guide"),". In this advanced guide we cover the following topics:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Seed your Preview Environment database"),Object(i.b)("li",{parentName:"ul"},"Integrate your CI (Continuous Integration) platform"),Object(i.b)("li",{parentName:"ul"},"Auto-stop and start your Preview Environment"),Object(i.b)("li",{parentName:"ul"},"Set up a custom domain for your Preview Environment"),Object(i.b)("li",{parentName:"ul"},"Create a Preview Environment via Terraform")),Object(i.b)("h2",{id:"wrapping-up"},"Wrapping up"),Object(i.b)("p",null,"Congrats! You have set up your Preview Environments features. Feel free to check out our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"forum")," and open a thread if you have any question. In the next guide, we will go deeper configuration to integrate the Preview Environment with your existing products and workflow."),Object(i.b)(l.a,{to:"/guides/tutorial/getting-started-with-preview-environments-on-aws-for-advanced-users",mdxType:"Jump"},"Advanced guide for Preview Environments"))}d.isMDXComponent=!0},438:function(e,t,n){"use strict";n(441);var a=n(0),r=n.n(a),i=n(437),o=n.n(i);n(131);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,i=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:o()(n,"alert","alert--"+l,{"alert--fill":a,"alert--icon":!1!==i}),role:"alert"},!1!==i&&r.a.createElement("i",{className:o()("feather","icon-"+(i||c))}),t)}},440:function(e,t,n){"use strict";var a=n(1),r=n(0),i=n.n(r),o=n(39),l=n(446),c=n(19),s=n.n(c);t.a=function(e){var t,n=e.to,c=e.href,u=n||c,b=Object(l.a)(u),m=Object(r.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!d&&b&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,b]),u&&b?i.a.createElement(o.b,Object(a.a)({},e,{onMouseEnter:function(){m.current||(window.docusaurus.preload(u),m.current=!0)},innerRef:function(e){var n,a;d&&e&&b&&(n=e,a=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:u})):i.a.createElement("a",Object(a.a)({},e,{href:u}))}},442:function(e,t,n){var a=n(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},443:function(e,t,n){"use strict";n(442);var a=n(0),r=n.n(a),i=n(438);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(i.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},445:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(440),o=n(437),l=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.className,a=e.badge,o=e.leftIcon,c=e.rightIcon,s=e.size,u=e.target,b=e.to,m=l()("jump-to","jump-to--"+s,n),d=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},o&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+o})),r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return u?r.a.createElement("a",{href:b,target:u,className:m},d):r.a.createElement(i.a,{to:b,className:m},d)}},446:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))},451:function(e,t,n){"use strict";var a=n(1),r=(n(454),n(453),n(52),n(28),n(21),n(20),n(0)),i=n.n(r),o=n(457),l=n(437),c=n.n(l),s=n(447),u=n.n(s),b=n(456),m=37,d=39;function p(e){var t=e.block,n=e.centered,a=e.changeSelectedValue,r=e.className,o=e.handleKeydown,l=e.style,s=e.values,u=e.selectedValue,b=e.tabRefs;return i.a.createElement("div",{className:n?"tabs--centered":null},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",r,{"tabs--block":t}),style:l},s.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:c()("tab-item",{"tab-item--active":u===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return o(b,e.target,e)},onFocus:function(){return a(t)},onClick:function(){return a(t)}},n)}))))}function v(e){var t=e.placeholder,n=e.selectedValue,a=e.changeSelectedValue,r=e.size,l=e.values,c=l;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return i.a.createElement(o.a,{className:"react-select-container react-select--"+r,classNamePrefix:"react-select",options:c,isClearable:n,placeholder:t,value:l.find((function(e){return e.value==n})),onChange:function(e){return a(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,n=e.defaultValue,o=e.groupId,l=e.label,c=e.placeholder,s=e.select,f=e.size,h=(e.style,e.values),g=e.urlKey,w=Object(b.a)(),j=w.tabGroupChoices,y=w.setTabGroupChoices,O=Object(r.useState)(n),N=O[0],E=O[1];if(null!=o){var k=j[o];null!=k&&k!==N&&E(k)}var C=function(e){E(e),null!=o&&y(o,e)},P=[],S=function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case m:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}};return Object(r.useEffect)((function(){if("undefined"!=typeof window&&window.location&&g){var e=u.a.parse(window.location.search);e[g]&&E(e[g])}}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"margin-bottom--"+(f||"md")},l&&i.a.createElement("div",{className:"margin-vert--sm"},l),h.length>1&&(s?i.a.createElement(v,Object(a.a)({changeSelectedValue:C,handleKeydown:S,placeholder:c,selectedValue:N,size:f,tabRefs:P},e)):i.a.createElement(p,Object(a.a)({changeSelectedValue:C,handleKeydown:S,selectedValue:N,tabRefs:P},e)))),r.Children.toArray(t).filter((function(e){return e.props.value===N}))[0])}}}]);
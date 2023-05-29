/*! For license information please see c8223350.e640d9bf.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{383:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(9),o=(n(0),n(458)),i=n(467),c=n(457),l=n(462),u=(n(464),{last_modified_on:"2022-02-25",$schema:"/.meta/.schemas/guides.json",title:"Setup VPC peering on AWS with Qovery",description:"How to peer a Qovery VPC with an existing VPC on AWS",author_github:"https://github.com/l0ck3",tags:["type: tutorial","cloud_provider: aws"],hide_pagination:!0}),b={categories:[{name:"tutorial",title:"Tutorial",description:"Step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Setup VPC peering on AWS with Qovery",description:"How to peer a Qovery VPC with an existing VPC on AWS",permalink:"/guides/tutorial/aws-vpc-peering-with-qovery",readingTime:"6 min read",source:"@site/guides/tutorial/aws-vpc-peering-with-qovery.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"cloud_provider: aws",permalink:"/guides/tags/cloud-provider-aws"}],title:"Setup VPC peering on AWS with Qovery",truncated:!1,prevItem:{title:"Setting up Cloudflare and Custom Domain on Qovery",permalink:"/guides/tutorial/setting-up-cloudflare-and-custom-domain-on-qovery"},nextItem:{title:"Simplest way to deploy your Deno application with MongoDB database",permalink:"/guides/tutorial/simplest-way-to-deploy-deno-with-database"}},s=[{value:"Goal",id:"goal",children:[]}],p={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"While Qovery is all you need to deploy and run your applications in AWS, you might have existing resources in another VPC that you want to access from your Qovery applications.\nThis tutorial will show you how to set up VPC peering between the Qovery VPC and an existing one in your account."),Object(o.b)(l.a,{name:"guide",mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have an existing AWS VPC with a resource you need to access, like an RDS database"),Object(o.b)("li",{parentName:"ul"},"You have a ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://hub.qovery.com/guides/tutorial/how-to-deploy-your-application-on-aws-in-30-minutes"}),"Qovery cluster ready on your AWS account")))),Object(o.b)(c.a,{type:"warning",mdxType:"Alert"},"Make sure the CIDR blocks of your two VPCs don't overlap. AWS won't allow the peering connection otherwise.",Object(o.b)("br",null),Object(o.b)("br",null),"To match this requirement, you can customize the Qovery VPC CIDR at cluster creation:",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/aws-vpc-peering-with-qovery/custom-cidr.png",alt:"Customise Qovery CIDR"}))),Object(o.b)("h2",{id:"goal"},"Goal"),Object(o.b)("p",null,"In this tutorial, we will connect an existing VPC on our AWS accounts with the VPC of a Qovery managed cluster.\nWe should then be able to deploy an application using a PostgresSQL RDS instance in our existing VPC."),Object(o.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("h4",{id:"gather-the-necessary-information"},"Gather the necessary information"),Object(o.b)("p",null,"Before we begin, you will need to gather some information. It is recommended that you keep this information at hand in a file for convenience."),Object(o.b)("p",null,"At the end of this step 1, you should have those elements:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Content"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"VPC source CIDR")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"x.x.x.x/x")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"VPC source name")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"vpc-xxx")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"VPC destination CIDR")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"y.y.y.y/y")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"VPC destination name")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"vpc-yyy")))),Object(o.b)("p",null,"Keep in mind the following convention:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Existing VPC: your current VPC infrastructure (not managed by Qovery)"),Object(o.b)("li",{parentName:"ul"},"Qovery VPC: the VPC deployed and managed by Qovery")),Object(o.b)("p",null),Object(o.b)("h5",{id:"your-existing-vpc-id"},"Your existing VPC ID"),Object(o.b)("p",null,"To get your existing VPC ID in your AWS console, go to: ",Object(o.b)("inlineCode",{parentName:"p"},"VPC > Your VPCs"),", find the VPC you would like to use as a peering target, and copy its ID"),Object(o.b)("p",null,"You will be able to have those information:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Content"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"VPC destination CIDR")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"x.x.x.x/x")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"VPC destination name")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"vpc-xxx")))),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/aws-vpc-peering-with-qovery/vpc-console-1.png",alt:"AWS console VPC list"})),Object(o.b)("h5",{id:"the-qovery-vpc-id"},"The Qovery VPC ID"),Object(o.b)("p",null,"You can use the same method to get the Qovery VPC ID. It should be named ",Object(o.b)("inlineCode",{parentName:"p"},"qovery-eks-workers"),"."),Object(o.b)("p",null,"You will be able to have those information:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Content"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"VPC source CIDR")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"x.x.x.x/x")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"VPC source name")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"vpc-xxx")))),Object(o.b)("p",null)),Object(o.b)("li",null,Object(o.b)("h5",{id:"the-cidr-ranges-of-both-vpcs"},"The CIDR ranges of both VPCs"),Object(o.b)(c.a,{type:"warning",mdxType:"Alert"},"Make sure the CIDR blocks of your two VPCs don't overlap or you won't be able to create the peering connection."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/aws-vpc-peering-with-qovery/find-cidr.png",alt:"AWS console VPC CIDR ranges"}))),Object(o.b)("li",null,Object(o.b)("h4",{id:"create-a-peering-connection"},"Create a peering connection"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them privately.")),Object(o.b)("p",null,"In the AWS console, go to ",Object(o.b)("inlineCode",{parentName:"p"},"VPC > Peering connections")," and click on ",Object(o.b)("inlineCode",{parentName:"p"},"Create peering connection")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Give it a name"),Object(o.b)("li",{parentName:"ul"},"As a requester, select your Qovery VPC"),Object(o.b)("li",{parentName:"ul"},"As an accepter, select your existing VPC"),Object(o.b)("li",{parentName:"ul"},"Click on ",Object(o.b)("inlineCode",{parentName:"li"},"Create peering connection"))),Object(o.b)("br",null),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/aws-vpc-peering-with-qovery/peering-form.png",alt:"AWS create VPC peering form"}))),Object(o.b)("li",null,Object(o.b)("h4",{id:"accept-the-peering-request"},"Accept the peering request"),Object(o.b)("p",null,"Once created, the peering connection needs to be accepted.\nOn the peering connection view, click on ",Object(o.b)("inlineCode",{parentName:"p"},"Actions")," then ",Object(o.b)("inlineCode",{parentName:"p"},"Accept request")),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/aws-vpc-peering-with-qovery/accept-peering-request.png",alt:"AWS accept VPC peering request"})),Object(o.b)("p",null,"You should see your peering connection marked as ",Object(o.b)("inlineCode",{parentName:"p"},"Active")),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/aws-vpc-peering-with-qovery/peering-active.png",alt:"AWS VPC peering active"})),Object(o.b)(c.a,{type:"info",mdxType:"Alert"},Object(o.b)("b",null,"Take note of the peering connection ID. You will need it later."))),Object(o.b)("li",null,Object(o.b)("h4",{id:"update-existing-vpc-route-table"},"Update existing VPC route table"),Object(o.b)("p",null,"In the AWS console of your ",Object(o.b)("strong",{parentName:"p"},"non Qovery VPC"),", go to ",Object(o.b)("inlineCode",{parentName:"p"},"VPC > Route Tables"),".\nYou can filter the list using the IDs you noted at step 1 to find the routing table for your existing VPC."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Thanks Kevin M. for your contribution here \ud83d\ude0a")),Object(o.b)("p",null,"For your existing VPC edit the route table:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/aws-vpc-peering-with-qovery/existing-rt.png",alt:"AWS VPC Qovery Route Table"})),Object(o.b)("p",null,"Click on the ",Object(o.b)("inlineCode",{parentName:"p"},"Edit routes")," button then ",Object(o.b)("inlineCode",{parentName:"p"},"Add route"),"."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/aws-vpc-peering-with-qovery/existing-rt-add.png",alt:"AWS VPC Qovery Route Table add route"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"As a destination, enter the CIDR of your Qovery VPC"),Object(o.b)("li",{parentName:"ul"},"As a target, select the ",Object(o.b)("inlineCode",{parentName:"li"},"Peering connection")," you created earlier")),Object(o.b)("p",null,"Click ",Object(o.b)("inlineCode",{parentName:"p"},"Save changes"),"."),Object(o.b)(c.a,{type:"warning",mdxType:"Alert"},"Do not alter existing routes. Make sure you are adding a new one.")),Object(o.b)("li",null,Object(o.b)("h4",{id:"update-qovery-vpc-route-table"},"Update Qovery VPC route table"),Object(o.b)("p",null,"This part needs to be done through the Qovery console."),Object(o.b)(c.a,{type:"warning",mdxType:"Alert"},"Make sure you are adding a new route. Do not edit or remove existing routes to avoid service interruption."),Object(o.b)("p",null,"In the cluster settings, under the ",Object(o.b)("inlineCode",{parentName:"p"},"Network")," tab, click ",Object(o.b)("inlineCode",{parentName:"p"},"ADD ROUTE")),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/aws-vpc-peering-with-qovery/qovery-rt.png",alt:"AWS VPC Qovery Route Table add route"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"As a destination, enter the CIDR of your existing VPC"),Object(o.b)("li",{parentName:"ul"},"As a target, enter the ID of the peering connection you created earlier"),Object(o.b)("li",{parentName:"ul"},"You can put anything you want as a description.")),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/aws-vpc-peering-with-qovery/qovery-rt-added.png",alt:"AWS VPC Qovery Route Table add route"})),Object(o.b)(c.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,'You need to update your cluster to apply the configuration change. Click on the cluster ellipsis > "update".'))),Object(o.b)("li",null,Object(o.b)("h4",{id:"update-the-security-groups"},"Update the security groups"),Object(o.b)("p",null,"Our two VPCs are now connected, but we still need to update the security groups to allow communication between the Qovery applications and your existing resources."),Object(o.b)("p",null,"What rules to put on your security groups depends on what you are trying to achieve.\nIn our case, we would like to access an RDS instance from our Qovery applications."),Object(o.b)("p",null,"We will edit the RDS security group in our existing VPC to add an inbound rule allowing PostgreSQL traffic from our Qovery instances:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/aws-vpc-peering-with-qovery/pg-inbound-rule.png",alt:"AWS Security Group inbound rules"}))),Object(o.b)("li",null,Object(o.b)("h4",{id:"deploy-an-application"},"Deploy an application"),Object(o.b)("p",null,"You should now be able to deploy an application using the RDS PostgreSQL database on your Qovery cluster.\nRefer to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/getting-started/deploy-your-first-application/"}),"this guide")," if you need help deploying an application on Qovery.")))),Object(o.b)("p",null,"You can learn more about VPC peering on AWS here: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html"}),"https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html")))}d.isMDXComponent=!0},456:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},457:function(e,t,n){"use strict";n(459);var r=n(0),a=n.n(r),o=n(456),i=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},458:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||p[d]||o;return n?a.a.createElement(m,c({ref:t},u,{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},459:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(463)}),n(74)("fill")},460:function(e,t,n){var r=n(26).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},461:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(39),c=n(465),l=n(20),u=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,b=n||l,s=Object(c.a)(b),p=Object(a.useRef)(!1),d=u.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!d&&s&&window.docusaurus.prefetch(b),function(){d&&t&&t.disconnect()}}),[b,d,s]),b&&s?o.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(b),p.current=!0)},innerRef:function(e){var n,r;d&&e&&s&&(n=e,r=function(){window.docusaurus.prefetch(b)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:b})):o.a.createElement("a",Object(r.a)({},e,{href:b}))}},462:function(e,t,n){"use strict";n(460);var r=n(0),a=n.n(r),o=n(457);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},463:function(e,t,n){"use strict";var r=n(28),a=n(75),o=n(27);e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,u=void 0===l?n:a(l,n);u>c;)t[c++]=e;return t}},464:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(461),i=n(456),c=n.n(i);n(133);t.a=function(e){var t=e.children,n=e.className,r=e.badge,i=e.leftIcon,l=e.rightIcon,u=e.size,b=e.target,s=e.to,p=c()("jump-to","jump-to--"+u,n),d=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},i&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+i})),a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return b?a.a.createElement("a",{href:s,target:b,className:p},d):a.a.createElement(o.a,{to:s,className:p},d)}},465:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))},466:function(e,t,n){"use strict";var r=n(468),a=n(51);function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(a),o,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var a=e[r];if(void 0===a)return"";if(null===a)return o(r,t);if(Array.isArray(a)){var i=[];return a.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return o(r,t)+"="+o(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},467:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(456),n(466)),i=n.n(o);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},u="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(l),b=Object(r.useState)(null),s=b[0],p=b[1];return a.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!s&&a.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",a.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",a.a.createElement("a",{href:u,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==s&&a.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",a.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},468:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
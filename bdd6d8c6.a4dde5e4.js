/*! For license information please see bdd6d8c6.a4dde5e4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{357:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),o=(n(0),n(435)),c=n(444),i=(n(434),n(439)),s=(n(441),{last_modified_on:"2022-01-27",$schema:"/.meta/.schemas/guides.json",title:"How to create an RDS instance through the AWS console",description:"How to create an RDS instance through the AWS console.",author_github:"https://github.com/l0ck3",tags:["type: tutorial","cloud_provider: aws"],hide_pagination:!0}),l={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How to create an RDS instance through the AWS console",description:"How to create an RDS instance through the AWS console.",permalink:"/guides/tutorial/how-to-create-an-rds-instance-through-aws-console",readingTime:"4 min read",source:"@site/guides/tutorial/how-to-create-an-rds-instance-through-aws-console.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"cloud_provider: aws",permalink:"/guides/tags/cloud-provider-aws"}],title:"How to create an RDS instance through the AWS console",truncated:!1,prevItem:{title:"How to connect to your EKS cluster with kubectl",permalink:"/guides/tutorial/how-to-connect-to-your-eks-cluster-with-kubectl"},nextItem:{title:"How to deploy a full-stack application composed of Hasura, PostgreSQL and Angular",permalink:"/guides/tutorial/deploy-fullstack-application-composed-of-hasura-postgresql-angular"}},u=[{value:"Goal",id:"goal",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],b={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Qovery make it easy to create an RDS database on AWS with a few clicks. You might however want to create your own RDS instance in a separate VPC. For example in case you want to use the same instance with several Qovery clusters."),Object(o.b)(i.a,{name:"guide",mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have an AWS account."))),Object(o.b)("h2",{id:"goal"},"Goal"),Object(o.b)("p",null,"This tutorial will show you how to create an production-ready RDS PostgreSQL instance on AWS. "),Object(o.b)("p",null,"To connect your Qovery cluster(s) to the created RDS database, refer to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/tutorial/aws-vpc-peering-with-qovery/"}),"this tutorial")),Object(o.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("h4",{id:"create-rds-database"},"Create RDS database"),Object(o.b)("p",null,"Go to the AWS RDS console and click ",Object(o.b)("inlineCode",{parentName:"p"},"Create database")),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/how-to-create-an-rds-instance-through-aws-console/1.png",alt:"AWS RDS console"}))),Object(o.b)("li",null,Object(o.b)("h4",{id:"select-your-database-type"},"Select your database type"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We will need to create a dedicated VPC, so select ",Object(o.b)("inlineCode",{parentName:"li"},"Standard create"),"."),Object(o.b)("li",{parentName:"ul"},"Then chose your database type (we'll use PostgreSQL for our example) and the version."),Object(o.b)("li",{parentName:"ul"},"Since we're creating a production database, we'll select the ",Object(o.b)("inlineCode",{parentName:"li"},"Production")," template. You can pick ",Object(o.b)("inlineCode",{parentName:"li"},"Dev/Test")," template for non-production environments.")),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/how-to-create-an-rds-instance-through-aws-console/2.png",alt:"AWS RDS console"}))),Object(o.b)("li",null,Object(o.b)("h4",{id:"settings"},"Settings"),Object(o.b)("p",null,"Select a name for your RDS instance, here ",Object(o.b)("inlineCode",{parentName:"p"},"my-production-database"),", master username and password."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/how-to-create-an-rds-instance-through-aws-console/3.png",alt:"AWS RDS console"}))),Object(o.b)("li",null,Object(o.b)("h4",{id:"instance-class"},"Instance class"),Object(o.b)("p",null,"Pick an instance class that works for your needs.\nYou can refer to this document for more information about the different options: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html"}),"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html")),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/how-to-create-an-rds-instance-through-aws-console/4.png",alt:"AWS RDS console"}))),Object(o.b)("li",null,Object(o.b)("h4",{id:"storage"},"Storage"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"General Purpose SSD")," should be the right option for most cases.\nChose the allocated storage that fits the needs of your application. We also advise you to ",Object(o.b)("inlineCode",{parentName:"p"},"Enable storage autoscaling")," in case you need more storage over time. "),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/how-to-create-an-rds-instance-through-aws-console/5.png",alt:"AWS RDS console"}))),Object(o.b)("li",null,Object(o.b)("h4",{id:"availability--durability"},"Availability & durability"),Object(o.b)("p",null,"For a production setup you should ",Object(o.b)("inlineCode",{parentName:"p"},"Create a standby instance"),". For non-production usecase you can avoid it to reduce costs."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/how-to-create-an-rds-instance-through-aws-console/6.png",alt:"AWS RDS console"}))),Object(o.b)("li",null,Object(o.b)("h4",{id:"connectivity"},"Connectivity"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Since we want the database to live in it's own VPC, make sure to select the ",Object(o.b)("inlineCode",{parentName:"li"},"Create new VPC")," option."),Object(o.b)("li",{parentName:"ul"},"Also select ",Object(o.b)("inlineCode",{parentName:"li"},"Create new DB Subnet Group"),"."),Object(o.b)("li",{parentName:"ul"},"We advise you to disable ",Object(o.b)("inlineCode",{parentName:"li"},"Public access")," for security reason. We'll setup VPC peering in the next guide to allow access from your Qovery clusters through private networking."),Object(o.b)("li",{parentName:"ul"},"Finally chose ",Object(o.b)("inlineCode",{parentName:"li"},"Create new")," security group and give it a name.")),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/how-to-create-an-rds-instance-through-aws-console/7.png",alt:"AWS RDS console"}))),Object(o.b)("li",null,Object(o.b)("h4",{id:"database-authentication-and-estimated-costs"},"Database authentication and estimated costs"),Object(o.b)("p",null,"Chose ",Object(o.b)("inlineCode",{parentName:"p"},"Password authentication"),"."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/how-to-create-an-rds-instance-through-aws-console/8.png",alt:"AWS RDS console"})),Object(o.b)("p",null,"You can then click on ",Object(o.b)("inlineCode",{parentName:"p"},"Create database"))),Object(o.b)("li",null,Object(o.b)("h4",{id:"database-creation"},"Database creation"),Object(o.b)("p",null,"You should see your new RDS instance in the list of databases, with the ",Object(o.b)("inlineCode",{parentName:"p"},"Creating")," status."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/how-to-create-an-rds-instance-through-aws-console/9.png",alt:"AWS RDS console"}))),Object(o.b)("li",null,Object(o.b)("h4",{id:"name-your-rds-vpc"},"Name your RDS VPC"),Object(o.b)("p",null,"The VPC created for the new RDS database will be named ",Object(o.b)("inlineCode",{parentName:"p"},"-"),". For convenience you should rename it."),Object(o.b)("p",null,"Click on your database in the list, then on the VPC id. "),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/how-to-create-an-rds-instance-through-aws-console/10.png",alt:"AWS RDS console"})),Object(o.b)("p",null,"You will be redirected to the VPCs list, filtered on the VPC id. Click on the edit icon in the ",Object(o.b)("inlineCode",{parentName:"p"},"Name")," column, and give it a meaningful name."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/how-to-create-an-rds-instance-through-aws-console/11.png",alt:"AWS RDS console"})),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/how-to-create-an-rds-instance-through-aws-console/12.png",alt:"AWS RDS console"}))))),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"Your RDS database is ready. Now in order to access it from your Qovery cluster, we will need to setup VPC peering. You can find the procedure in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/tutorial/aws-vpc-peering-with-qovery/"}),"this tutorial")))}p.isMDXComponent=!0},433:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},434:function(e,t,n){"use strict";n(437);var a=n(0),r=n.n(a),o=n(433),c=n.n(o);n(131);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,o=e.icon,i=e.type,s=null;switch(i){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return r.a.createElement("div",{className:c()(n,"alert","alert--"+i,{"alert--fill":a,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:c()("feather","icon-"+(o||s))}),t)}},435:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return n?r.a.createElement(m,i({ref:t},l,{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},436:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),c=n(39),i=n(442),s=n(19),l=n.n(s);t.a=function(e){var t,n=e.to,s=e.href,u=n||s,b=Object(i.a)(u),p=Object(r.useRef)(!1),d=l.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!d&&b&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,b]),u&&b?o.a.createElement(c.b,Object(a.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(u),p.current=!0)},innerRef:function(e){var n,a;d&&e&&b&&(n=e,a=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:u})):o.a.createElement("a",Object(a.a)({},e,{href:u}))}},437:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(440)}),n(74)("fill")},438:function(e,t,n){var a=n(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},439:function(e,t,n){"use strict";n(438);var a=n(0),r=n.n(a),o=n(434);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},440:function(e,t,n){"use strict";var a=n(27),r=n(75),o=n(26);e.exports=function(e){for(var t=a(this),n=o(t.length),c=arguments.length,i=r(c>1?arguments[1]:void 0,n),s=c>2?arguments[2]:void 0,l=void 0===s?n:r(s,n);l>i;)t[i++]=e;return t}},441:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(436),c=n(433),i=n.n(c);n(132);t.a=function(e){var t=e.children,n=e.className,a=e.badge,c=e.leftIcon,s=e.rightIcon,l=e.size,u=e.target,b=e.to,p=i()("jump-to","jump-to--"+l,n),d=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},c&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+c})),r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return u?r.a.createElement("a",{href:b,target:u,className:p},d):r.a.createElement(o.a,{to:b,className:p},d)}},442:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))},443:function(e,t,n){"use strict";var a=n(445),r=n(51);function o(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,a){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=n):a[e]=n};case"bracket":return function(e,n,a){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],n):a[e]=[n]:a[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=r({arrayFormat:"none"},t)),a=Object.create(null);return"string"!=typeof e?a:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(r),o,a)})),Object.keys(a).sort().reduce((function(e,t){var n=a[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):a},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,a){return null===n?[o(t,e),"[",a,"]"].join(""):[o(t,e),"[",o(a,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(a){var r=e[a];if(void 0===r)return"";if(null===r)return o(a,t);if(Array.isArray(r)){var c=[];return r.slice().forEach((function(e){void 0!==e&&c.push(n(a,e,c.length))})),c.join("&")}return o(a,t)+"="+o(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},444:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=(n(433),n(443)),c=n.n(o);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,i="undefined"!=typeof window?window.location:null,s={title:"Tutorial on "+i+" failed",body:"The tutorial on:\n\n"+i+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},l="https://github.com/qovery/documentation/issues/new?"+c.a.stringify(s),u=Object(a.useState)(null),b=u[0],p=u[1];return r.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!b&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:l,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==b&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},445:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
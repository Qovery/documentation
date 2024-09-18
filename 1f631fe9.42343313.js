/*! For license information please see 1f631fe9.42343313.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),o=(n(0),n(457)),i=(n(464),n(461),n(456)),l={last_modified_on:"2024-09-18",$schema:"/.meta/.schemas/guides.json",title:"Minimize downtime while upgrading RDS instances",description:"Learn how to upgrade your RDS instance (PostgreSQL, MySql) minimizing your downtime with Qovery and Blue Green deployments",author_github:"https://github.com/acarranoqovery",tags:["type: guide","technology: qovery"]},c={categories:[{name:"advanced",title:"Advanced",description:"Go beyond the basics, become a Qovery pro, and extract the full potential of Qovery.",permalink:"/guides/advanced"}],coverLabel:"Minimize downtime while upgrading RDS instances",description:"Learn how to upgrade your RDS instance (PostgreSQL, MySql) minimizing your downtime with Qovery and Blue Green deployments",permalink:"/guides/advanced/upgrading-rds-instance",readingTime:"4 min read",source:"@site/guides/advanced/upgrading-rds-instance.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Minimize downtime while upgrading RDS instances",truncated:!1,prevItem:{title:"Migration",permalink:"/guides/advanced/migration"},nextItem:{title:"Monitor and reduce Kubernetes spend with Kubecost",permalink:"/guides/tutorial/monitor-and-reduce-kubernetes-spend-with-kubecost"}},s=[{value:"Activate the logical replication",id:"activate-the-logical-replication",children:[]},{value:"Enable logical replication for the &quot;Green&quot; database",id:"enable-logical-replication-for-the-green-database",children:[]},{value:"Launch the Blue/Green deployment",id:"launch-the-bluegreen-deployment",children:[{value:"Create the Blue/Green Deployment",id:"create-the-bluegreen-deployment",children:[]},{value:"Apply the switch over",id:"apply-the-switch-over",children:[]},{value:"Delete the blue/green deployment",id:"delete-the-bluegreen-deployment",children:[]}]},{value:"Align the configuration on Qovery",id:"align-the-configuration-on-qovery",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Managed RDS instances deployed with Qovery have by defualt a maintenance window configured, applying database updates only during the specifyied timeframe (see more ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/database/#applying-changes-to-a-managed-database"}),"information here"),")."),Object(o.b)("p",null,"During the maintenance window, a downtime has to be expected on your service since the upgrade might takes a few minutes to take effect."),Object(o.b)("p",null,"If this is not acceptable for your business, AWS allows you to deploy changes via the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html"}),"Blue/Green Deployments"),"."),Object(o.b)("p",null,'This basically allows you to create a copy of your database with the new configuration (called "Green group") and then switch over to the new database by removing the old instance ("Blue group").'),Object(o.b)("p",null,"Blue/Green deployments on RDS are not natively supported by Qovery but you can follow this guide to upgrade your RDS instances."),Object(o.b)("h1",{id:"how-to-configure"},"How to configure"),Object(o.b)("p",null,"To better explain the process, we will try to upgrade an RDS PostgreSQL instance from the version 14 to the version 15."),Object(o.b)("h2",{id:"activate-the-logical-replication"},"Activate the logical replication"),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"This part has to be done only once for each database. If you have already activated the logical replication, go to the next section.")),Object(o.b)("p",null,"Logical replication is necessary to use the RDS Blue/Green deployment feature."),Object(o.b)("p",null,"To enable the logical replication you have to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a Custom DB Parameter group. Make sure it targets your current engine type (PostgreSQL) and version (Parameter group family = postgres14), let's call it ",Object(o.b)("inlineCode",{parentName:"li"},"parameter-group-14"),". (Documentation ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.Creating.html"}),"here"),")"),Object(o.b)("li",{parentName:"ol"},"Edit the DB parameter group ",Object(o.b)("inlineCode",{parentName:"li"},"parameter-group-14")," and activate the logical replication by setting ",Object(o.b)("inlineCode",{parentName:"li"},"rds.logical_replication")," to ",Object(o.b)("inlineCode",{parentName:"li"},"1")," (Documentation ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_MultiAZDBCluster_LogicalRepl.html#multi-az-db-clusters-logical-replication"}),"here"),")"),Object(o.b)("li",{parentName:"ol"},"Associate the DB Parameter group ",Object(o.b)("inlineCode",{parentName:"li"},"parameter-group-14")," to your database. If you have read replicas, associate the parameter group to the replicas as well. (Documentation ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.Associating.html"}),"here"),")"),Object(o.b)("li",{parentName:"ol"},"Reboot your database to apply the changes or wait for the next maintenance window for applying these changes.")),Object(o.b)("h2",{id:"enable-logical-replication-for-the-green-database"},'Enable logical replication for the "Green" database'),Object(o.b)("p",null,'We will create a separate DB Parameter group for our "Green group" so that we will ensure that the  you won\'t have to do the previous step the next time.'),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a Custom DB Parameter group. Make sure it targets your ",Object(o.b)("strong",{parentName:"li"},"next")," engine type and version (Parameter group family), let's call it ",Object(o.b)("inlineCode",{parentName:"li"},"parameter-group-15")," Documentation ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.Creating.html"}),"here"),")"),Object(o.b)("li",{parentName:"ol"},"Edit the DB parameter group ",Object(o.b)("inlineCode",{parentName:"li"},"parameter-group-15")," and activate the logical replication by setting ",Object(o.b)("inlineCode",{parentName:"li"},"rds.logical_replication")," to ",Object(o.b)("inlineCode",{parentName:"li"},"1")," (Documentation ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_MultiAZDBCluster_LogicalRepl.html#multi-az-db-clusters-logical-replication"}),"here"),")")),Object(o.b)("h2",{id:"launch-the-bluegreen-deployment"},"Launch the Blue/Green deployment"),Object(o.b)("h3",{id:"create-the-bluegreen-deployment"},"Create the Blue/Green Deployment"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Go on the Database list on the AWS console, select the database and press the "Create new Blue/Green Deployment" button.'),Object(o.b)("li",{parentName:"ol"},"Define a name for the deployment (blue-green-upgrade), ensure you select the right engine version (PostgreSQL 15) and the right DB parameter group (parameter-group-15) and create the Blue/Green deployment."),Object(o.b)("li",{parentName:"ol"},"Wait for all the instances to be ",Object(o.b)("inlineCode",{parentName:"li"},"Available"),".")),Object(o.b)("p",null,"AWS Documentation ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments-creating.html"}),"here")),Object(o.b)("h3",{id:"apply-the-switch-over"},"Apply the switch over"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"From the Database list on the AWS console, select the Blue/Green deployment ",Object(o.b)("inlineCode",{parentName:"li"},"blue-green-upgrade")),Object(o.b)("li",{parentName:"ol"},'From the action list, select "Switch over"'),Object(o.b)("li",{parentName:"ol"},'Verify that everything is fine on the configuration and confirm the switch over. This will make the "Green group" the new production environment.')),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/blue-green-rds/switch-over.png",alt:"Switch over"})),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Wait for the switch over to be completed. ")),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/blue-green-rds/switch-done.png",alt:"Switch over completed"})),Object(o.b)("h3",{id:"delete-the-bluegreen-deployment"},"Delete the blue/green deployment"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"From the Database list on the AWS console, select the Blue/Green deployment ",Object(o.b)("inlineCode",{parentName:"li"},"blue-green-upgrade")),Object(o.b)("li",{parentName:"ol"},'From the action list, select "Delete"'),Object(o.b)("li",{parentName:"ol"},"Once completed, from the Database list on the AWS console, select the database in version 14 (note it should be renamed with a suffix ",Object(o.b)("inlineCode",{parentName:"li"},"old"),")"),Object(o.b)("li",{parentName:"ol"},'From the action list, select "Delete"'),Object(o.b)("li",{parentName:"ol"},"Wait for the delete operation to be completed before moving to the next step")),Object(o.b)("h2",{id:"align-the-configuration-on-qovery"},"Align the configuration on Qovery"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go on the Qovery console and align the database configuration by setting the version to ",Object(o.b)("inlineCode",{parentName:"li"},"15"))),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/blue-green-rds/update-version.png",alt:"Update the database version"})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Re-deploy your database.")))}p.isMDXComponent=!0},455:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},456:function(e,t,n){"use strict";n(458);var a=n(0),r=n.n(a),o=n(455),i=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,o=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:i()(n,"alert","alert--"+l,{"alert--fill":a,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:i()("feather","icon-"+(o||c))}),t)}},457:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,l({ref:t},s,{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},458:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(459)}),n(74)("fill")},459:function(e,t,n){"use strict";var a=n(27),r=n(75),o=n(26);e.exports=function(e){for(var t=a(this),n=o(t.length),i=arguments.length,l=r(i>1?arguments[1]:void 0,n),c=i>2?arguments[2]:void 0,s=void 0===c?n:r(c,n);s>l;)t[l++]=e;return t}},460:function(e,t,n){var a=n(28).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},461:function(e,t,n){"use strict";n(460);var a=n(0),r=n.n(a),o=n(456);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},463:function(e,t,n){"use strict";var a=n(467),r=n(51);function o(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,a){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=n):a[e]=n};case"bracket":return function(e,n,a){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],n):a[e]=[n]:a[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=r({arrayFormat:"none"},t)),a=Object.create(null);return"string"!=typeof e?a:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(r),o,a)})),Object.keys(a).sort().reduce((function(e,t){var n=a[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):a},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,a){return null===n?[o(t,e),"[",a,"]"].join(""):[o(t,e),"[",o(a,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(a){var r=e[a];if(void 0===r)return"";if(null===r)return o(a,t);if(Array.isArray(r)){var i=[];return r.slice().forEach((function(e){void 0!==e&&i.push(n(a,e,i.length))})),i.join("&")}return o(a,t)+"="+o(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},464:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=(n(455),n(463)),i=n.n(o);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,l="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+l+" failed",body:"The tutorial on:\n\n"+l+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(c),u=Object(a.useState)(null),p=u[0],b=u[1];return r.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!p&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},467:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
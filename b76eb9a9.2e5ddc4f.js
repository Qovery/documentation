/*! For license information please see b76eb9a9.2e5ddc4f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{302:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(9),o=(n(0),n(390)),i=n(394),c=n(399),l={last_modified_on:"2023-03-31",$schema:"/.meta/.schemas/guides.json",title:"Customizing Preview URL with Qovery CLI",description:"How to customize preview url with qovery cli",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","technology: qovery"],hide_pagination:!0},u={categories:[{name:"tutorial",title:"Tutorial",description:"Additional step-by-step resources to leverage even more Qovery",permalink:"/guides/tutorial"}],coverLabel:"Customizing Preview URL with Qovery CLI",description:"How to customize preview url with qovery cli",permalink:"/guides/tutorial/customizing-preview-url-with-qovery-cli",readingTime:"3 min read",source:"@site/guides/tutorial/customizing-preview-url-with-qovery-cli.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Customizing Preview URL with Qovery CLI",truncated:!1,prevItem:{title:"Creating API clients using OpenAPI Tools",permalink:"/guides/tutorial/generate-qovery-api-client"},nextItem:{title:"Deploy API Gateway",permalink:"/guides/advanced/deploy-api-gateway"}},s=[{value:"Wrapping up",id:"wrapping-up",children:[]}],p={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this quick guide, we will show you how to automatically customize your preview URL when a new environment has been created using the Qovery CLI. By following these steps, you can create a custom domain for your service and link it to your DNS provider."),Object(o.b)(i.a,{name:"guide",mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/using-qovery/interface/cli/"}),"Qovery CLI")," installed"),Object(o.b)("li",{parentName:"ul"},"Access to your DNS provider"))),Object(o.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("h4",{id:"create-a-custom-domain-for-your-service"},"Create a Custom Domain for Your Service"),Object(o.b)("p",null,"To create a custom domain for your service, run the following command in your terminal:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'# Get Pull Request ID from Qovery Environment Variables\n$ PR_ID=`qovery application env list -n "Backend" --show-values | grep "QOVERY_PROJECT_ID" | awk \'{print $10}\'`\n\n# Create a custom domain\n$ qovery application domain create -n "app name" --domain app-$PR_ID.domain.name\n')),Object(o.b)("p",null,"Replace ",Object(o.b)("inlineCode",{parentName:"p"},"app name")," with the name of your application and ",Object(o.b)("inlineCode",{parentName:"p"},"app.domain.name")," with your desired custom domain."),Object(o.b)("p",null,"User ",Object(o.b)("inlineCode",{parentName:"p"},"--organization"),", ",Object(o.b)("inlineCode",{parentName:"p"},"--project"),", ",Object(o.b)("inlineCode",{parentName:"p"},"--environment")," flags to specify the organization, project, and environment where you want to create the custom domain.")),Object(o.b)("li",null,Object(o.b)("h4",{id:"retrieve-the-validation-domain"},"Retrieve the Validation Domain"),Object(o.b)("p",null,"To get the validation domain required for the next step, run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'$ qovery application domain list -n "app name" | grep "app-$PR_ID.domain.name" | awk \'{print $7}\'\n')),Object(o.b)("p",null,"Replace ",Object(o.b)("inlineCode",{parentName:"p"},"app name")," and ",Object(o.b)("inlineCode",{parentName:"p"},"app.domain.name")," with the appropriate values. This command will output the validation domain.")),Object(o.b)("li",null,Object(o.b)("h4",{id:"create-a-cname-record-in-your-dns-provider"},"Create a CNAME Record in Your DNS Provider"),Object(o.b)("p",null,"Use the validation domain from the previous step to create a CNAME record in your DNS provider. The CNAME record should point to the validation domain."),Object(o.b)("p",null,"Example with Route53:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'$ aws cli route53 change-resource-record-sets --hosted-zone-id "hosted zone id" --change-batch \'{"Changes":[{"Action":"CREATE","ResourceRecordSet":{"Name":"app-$PR_ID.domain.name","Type":"CNAME","TTL":300,"ResourceRecords":[{"Value":"validation-domain"}]}}]}\'\n')),Object(o.b)("p",null,"Example with Cloudflare:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'$ curl -X POST "https://api.cloudflare.com/client/v4/zones/{zone_id}/dns_records" \\\n     -H "X-Auth-Email: {email}" \\\n     -H "X-Auth-Key: {key}" \\\n     -H "Content-Type: application/json" \\\n     --data \'{"type":"CNAME","name":"app-$PR_ID.domain.name","content":"validation-domain","ttl":1,"proxied":false}\'\n')),Object(o.b)("p",null,"The idea here is to create a CNAME record that points to the validation domain. The validation domain is a temporary domain that is used to validate the ownership of the custom domain.")),Object(o.b)("li",null,Object(o.b)("h4",{id:"redeploy-your-application"},"Redeploy your application"),Object(o.b)("p",null,"Once the DNS changes have propagated, redeploy your application to complete the process."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'$ qovery application redeploy -n "app name" -w\n')),Object(o.b)("p",null,"Your application should now be available at ",Object(o.b)("inlineCode",{parentName:"p"},"app-{PR ID}.domain.name"),".")))),Object(o.b)("h2",{id:"wrapping-up"},"Wrapping up"),Object(o.b)("p",null,"Congratulations! You have successfully customized your preview URL using the Qovery CLI. Now, whenever a new environment is created, the custom domain will be automatically configured. If you encounter any issues, please reach out to our support team on the Qovery forum."))}d.isMDXComponent=!0},388:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},389:function(e,t,n){"use strict";n(391);var r=n(0),a=n.n(r),o=n(388),i=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(b,c({ref:t},u,{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},391:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(392)}),n(74)("fill")},392:function(e,t,n){"use strict";var r=n(27),a=n(75),o=n(26);e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,u=void 0===l?n:a(l,n);u>c;)t[c++]=e;return t}},393:function(e,t,n){var r=n(28).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},394:function(e,t,n){"use strict";n(393);var r=n(0),a=n.n(r),o=n(389);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},398:function(e,t,n){"use strict";var r=n(400),a=n(51);function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(a),o,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var a=e[r];if(void 0===a)return"";if(null===a)return o(r,t);if(Array.isArray(a)){var i=[];return a.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return o(r,t)+"="+o(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},399:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(388),n(398)),i=n.n(o);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},u="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(l),s=Object(r.useState)(null),p=s[0],d=s[1];return a.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!p&&a.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",a.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return d("yes")}},"Yes"),"\xa0\xa0",a.a.createElement("a",{href:u,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&a.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",a.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},400:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
/*! For license information please see 9d3c5a68.324c0d99.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{319:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(446)),c=n(455),i={last_modified_on:"2021-07-02",title:"Object Storage",description:"Learn how to configure object storage with your applications"},s={id:"using-qovery/configuration/object-storage",title:"Object Storage",description:"Learn how to configure object storage with your applications",source:"@site/docs/using-qovery/configuration/object-storage.md",permalink:"/docs/using-qovery/configuration/object-storage",sidebar:"docs",previous:{title:"Environment Variable & Secrets",permalink:"/docs/using-qovery/configuration/environment-variable"},next:{title:"Deployment Rule",permalink:"/docs/using-qovery/configuration/deployment-rule"}},l=[{value:"Use cases",id:"use-cases",children:[{value:"\u2705 Good use cases",id:"-good-use-cases",children:[]},{value:"\u274c Bad use cases",id:"-bad-use-cases",children:[]}]},{value:"Pros &amp; Cons",id:"pros--cons",children:[{value:"Pros",id:"pros",children:[]},{value:"Cons",id:"cons",children:[]}]},{value:"Using Object Storage",id:"using-object-storage",children:[{value:"AWS",id:"aws",children:[]},{value:"Digital Ocean",id:"digital-ocean",children:[]},{value:"Scaleway",id:"scaleway",children:[]}]}],u={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The default filesystem for applications running on Qovery is ephemeral. Application data isn\u2019t persisted across deploys and restarts, which works just fine for most apps because they use managed databases to persist data.\nIf, however, your application needs persistent storage across restarts or needs to store large amounts of data that doesn't really fit well to be stored in databases, Object Storage might fit your needs."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples of applications"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Music streaming services like Spotify"),Object(o.b)("li",{parentName:"ul"},"Photo-heavy apps like Instagram, Facebook"),Object(o.b)("li",{parentName:"ul"},"Storing backups/archives over long periods")),Object(o.b)("h2",{id:"use-cases"},"Use cases"),Object(o.b)("h3",{id:"-good-use-cases"},"\u2705 Good use cases"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Storing large amounts of read-only data"),Object(o.b)("li",{parentName:"ul"},"High availability"),Object(o.b)("li",{parentName:"ul"},"High scalability"),Object(o.b)("li",{parentName:"ul"},"Unstructured data like music, photos, videos"),Object(o.b)("li",{parentName:"ul"},"Geographical distribution of data")),Object(o.b)("h3",{id:"-bad-use-cases"},"\u274c Bad use cases"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For I/O intensive applications (e.g. databases)"),Object(o.b)("li",{parentName:"ul"},"Frequent data updates"),Object(o.b)("li",{parentName:"ul"},"Temporary files"),Object(o.b)("li",{parentName:"ul"},"Transactional data")),Object(o.b)("h2",{id:"pros--cons"},"Pros & Cons"),Object(o.b)("h3",{id:"pros"},"Pros"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Reduce infrastructure costs of storing data"),Object(o.b)("li",{parentName:"ul"},"Reduce management time because of the easiness of scalability")),Object(o.b)("h3",{id:"cons"},"Cons"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Not suited for frequently changing data"),Object(o.b)("li",{parentName:"ul"},"Eventual consistency of data might be not enough for certain types of applications that require strong consistency")),Object(o.b)("h2",{id:"using-object-storage"},"Using Object Storage"),Object(o.b)("p",null,"Using Object Storage with Qovery is very simple. All you need to do is to set up a ",Object(o.b)("strong",{parentName:"p"},"bucket")," in the cloud provider of your choice\nand configure your application to use it using secrets or environment variables."),Object(o.b)("h3",{id:"aws"},"AWS"),Object(o.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("p",null,"Navigate to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://s3.console.aws.amazon.com/s3/home"}),"AWS S3 Console"))),Object(o.b)("li",null,Object(o.b)("p",null,"Click ",Object(o.b)("strong",{parentName:"p"},"Create bucket")," button"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/configuration/objectstorage/aws-1.png",alt:"Storage"}))),Object(o.b)("li",null,Object(o.b)("p",null,"Set up your bucket settings, like name, permissions, cloud region")),Object(o.b)("li",null,Object(o.b)("p",null,"Connect your application to your bucket (example using Node.js)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// Load dependencies\nconst aws = require('aws-sdk');\nconst express = require('express');\nconst multer = require('multer');\nconst multerS3 = require('multer-s3');\n\nconst app = express();\n\n// Set S3 endpoint to AWS S3 in correct region\nconst endpoint = new aws.Endpoint('s3.us-east-2.amazonaws.com');\nconst s3 = new aws.S3({\n  endpoint: endpoint\n});\n\n// Change bucket property to your Bucket name\nconst upload = multer({\n  storage: multerS3({\n    s3: s3,\n    bucket: 'your-bucket-here',\n    acl: 'public-read',\n    key: function (request, file, cb) {\n      console.log(file);\n      cb(null, file.originalname);\n    }\n  })\n}).array('upload', 1);\n")),Object(o.b)("p",null,"If your bucket access is secured, all you need to do is to set up those environment variables in your application:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"AWS_ACCESS_KEY_ID"),Object(o.b)("li",{parentName:"ul"},"AWS_SECRET_ACCESS_KEY")),Object(o.b)("p",null,"You can set up secrets in your application by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/getting-started/managing-environment-variables/"}),"following our guide"),".")))),Object(o.b)("h3",{id:"digital-ocean"},"Digital Ocean"),Object(o.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("p",null,"Navigate to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloud.digitalocean.com/projects"}),"DO Console"))),Object(o.b)("li",null,Object(o.b)("p",null,"Click ",Object(o.b)("strong",{parentName:"p"},"Create"),", and ",Object(o.b)("strong",{parentName:"p"},"Spaces")," button"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/configuration/objectstorage/do-1.png",alt:"Storage"}))),Object(o.b)("li",null,Object(o.b)("p",null,"Set up your bucket settings, like name, permissions, cloud region")),Object(o.b)("li",null,Object(o.b)("p",null,"Connect your application to your bucket (DO Spaces are AWS S3 compatible, this is why we use S3 client in the example):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// Load dependencies\nconst aws = require('aws-sdk');\nconst express = require('express');\nconst multer = require('multer');\nconst multerS3 = require('multer-s3');\n\nconst app = express();\n\n// Set S3 endpoint to DigitalOcean Spaces in correct region\nconst endpoint = new aws.Endpoint('nyc3.digitaloceanspaces.com');\nconst s3 = new aws.S3({\n  endpoint: endpoint\n});\n\n// Change bucket property to your Space name\nconst upload = multer({\n  storage: multerS3({\n    s3: s3,\n    bucket: 'your-space-here',\n    acl: 'public-read',\n    key: function (request, file, cb) {\n      console.log(file);\n      cb(null, file.originalname);\n    }\n  })\n}).array('upload', 1);\n")),Object(o.b)("p",null,"If your bucket is private, all you need to do is to set up those environment variables for your application:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"AWS_ACCESS_KEY_ID"),Object(o.b)("li",{parentName:"ul"},"AWS_SECRET_ACCESS_KEY")),Object(o.b)("p",null,"You can find your secrets in your Space configuration. You can set up secrets in your application by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/getting-started/managing-environment-variables/"}),"following our guide"),".")))),Object(o.b)("h3",{id:"scaleway"},"Scaleway"),Object(o.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("p",null,"Navigate to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.scaleway.com/object-storage/buckets"}),"Scaleway Console"))),Object(o.b)("li",null,Object(o.b)("p",null,"Click ",Object(o.b)("strong",{parentName:"p"},"Create"),", and ",Object(o.b)("strong",{parentName:"p"},"Spaces")," button"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/configuration/objectstorage/scaleway-1.png",alt:"Storage"}))),Object(o.b)("li",null,Object(o.b)("p",null,"Set up your bucket settings, like name, permissions, cloud region")),Object(o.b)("li",null,Object(o.b)("p",null,"Connect your application to your bucket (Scaleway Buckets are partly AWS S3 compatible, this is why we use S3 client in the example):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// Load dependencies\nconst aws = require('aws-sdk');\nconst express = require('express');\nconst multer = require('multer');\nconst multerS3 = require('multer-s3');\n\nconst app = express();\n\n// Set S3 endpoint to Scaleway Bucket in correct region\nconst endpoint = new aws.Endpoint('https://s3.fr-par.scw.cloud.');\nconst s3 = new aws.S3({\n  endpoint: endpoint\n});\n\n// Change bucket property to your Bucket name\nconst upload = multer({\n  storage: multerS3({\n    s3: s3,\n    bucket: 'your-bucket-here',\n    acl: 'public-read',\n    key: function (request, file, cb) {\n      console.log(file);\n      cb(null, file.originalname);\n    }\n  })\n}).array('upload', 1);\n")),Object(o.b)("p",null,"If your bucket is private, all you need to do is to set up those environment variables for your application:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"AWS_ACCESS_KEY_ID"),Object(o.b)("li",{parentName:"ul"},"AWS_SECRET_ACCESS_KEY")),Object(o.b)("p",null,"Follow ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.scaleway.com/en/docs/object-storage-with-s3cmd/#-Retrieving-your-Credentials"}),"Scaleway guide")," to get your credentials. You can set up secrets in your application by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/getting-started/managing-environment-variables/"}),"following our guide"),".")))))}b.isMDXComponent=!0},444:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(m,i({ref:t},l,{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},454:function(e,t,n){"use strict";var r=n(456),a=n(51);function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(a),o,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var a=e[r];if(void 0===a)return"";if(null===a)return o(r,t);if(Array.isArray(a)){var c=[];return a.slice().forEach((function(e){void 0!==e&&c.push(n(r,e,c.length))})),c.join("&")}return o(r,t)+"="+o(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},455:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(444),n(454)),c=n.n(o);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,i="undefined"!=typeof window?window.location:null,s={title:"Tutorial on "+i+" failed",body:"The tutorial on:\n\n"+i+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},l="https://github.com/qovery/documentation/issues/new?"+c.a.stringify(s),u=Object(r.useState)(null),b=u[0],p=u[1];return a.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!b&&a.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",a.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",a.a.createElement("a",{href:l,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==b&&a.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",a.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},456:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
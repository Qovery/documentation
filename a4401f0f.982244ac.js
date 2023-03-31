/*! For license information please see a4401f0f.982244ac.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{325:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(446)),i=n(450),c=n(455),l={last_modified_on:"2021-07-22",$schema:"/.meta/.schemas/guides.json",title:"Creating API clients using OpenAPI Tools",description:"How to quickly create a Qovery API client in your language",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial","technology: qovery"],hide_pagination:!0},s={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Creating API clients using OpenAPI Tools",description:"How to quickly create a Qovery API client in your language",permalink:"/guides/tutorial/generate-qovery-api-client",readingTime:"4 min read",source:"@site/guides/tutorial/generate-qovery-api-client.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Creating API clients using OpenAPI Tools",truncated:!1,prevItem:{title:"Create your Staging environment from your Production environment on AWS",permalink:"/guides/tutorial/create-your-staging-environment-from-your-production-environment-on-aws"},nextItem:{title:"Customizing Preview URL with Qovery CLI",permalink:"/guides/tutorial/customizing-preview-url-with-qovery-cli"}},u=[{value:"Integration",id:"integration",children:[{value:"Generating API client code",id:"generating-api-client-code",children:[]},{value:"Steps",id:"steps",children:[]},{value:"Under the hood",id:"under-the-hood",children:[]},{value:"Example",id:"example",children:[]}]},{value:"Summary",id:"summary",children:[]}],p={rightToc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"While releasing the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.qovery.com/blog/one-week-before-the-launch-of-qovery-v2-beta-whats-new#open-api"}),"latest major update of Qovery"),", we realized that we need to open our API to our users in order to make them able to\nbuild integrations and customizations they need in their development workflows. This month, we launched a BETA version of the Qovery V2 platform, and alongside this, we ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://api-doc.qovery.com/"}),"made our beta API open")," and ready to play with and experiment."),Object(o.b)("h2",{id:"integration"},"Integration"),Object(o.b)("p",null,"To integrate with the new API, one has a choice of reading the documentation and doing all the necessary plumbing by himself. However, at Qovery, we value developer experience, so we decided to make this process easier and more streamlined."),Object(o.b)("h3",{id:"generating-api-client-code"},"Generating API client code"),Object(o.b)("p",null,"Our API specification is made in a way that makes it very easy to generate API clients in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator#overview"}),"any of the many supported languages"),". We also prepared a script to make this process seamless - all you need to do is to clone our open API repository and run one command to generate the newest client version."),Object(o.b)("h3",{id:"steps"},"Steps"),Object(o.b)(i.a,{name:"guide",mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have installed ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node/NPM")),Object(o.b)("li",{parentName:"ul"},"You have installed ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/OpenAPITools/openapi-generator#17---npm"}),"Open API Generator")))),Object(o.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("h4",{id:"clone-the-repository"},"Clone the repository"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ git clone https://github.com/Qovery/qovery-openapi-spec.git\n$ cd qovery-openapi-spec\n"))),Object(o.b)("li",null,Object(o.b)("h4",{id:"generate-the-client-code"},"Generate the client code"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ QOVERY_CLIENT_LANGUAGE=go npm run generate\n")),Object(o.b)("p",null,"where: ",Object(o.b)("strong",{parentName:"p"},"$QOVERY_CLIENT_LANGUAGE")," is the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator#overview"}),"language of your choice"),".")),Object(o.b)("li",null,Object(o.b)("h4",{id:"list-the-generated-files"},"List the generated files"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ ls out/client\n")),Object(o.b)("p",null,"This folder contains all the files necessary to interact with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://api-doc.qovery.com/"}),"Qovery API"),", as well as its documentation. To use it in your project, you can create a repository to store the client files and then import them as a dependency in your project. This part is highly dependant on the language and technology you are using, so it's not covered in this post.")))),Object(o.b)("h3",{id:"under-the-hood"},"Under the hood"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"npm run generate -- $LANGUAGE")," command under the hood uses the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator"}),"open-api-generator")," and a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://swagger.io/specification/"}),"Open API specification")," created to define Qovery API.\nYou can see the specification after cloning ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-openapi-spec"}),"our open api repository")," and running ",Object(o.b)("inlineCode",{parentName:"p"},"npm run build")," in ",Object(o.b)("inlineCode",{parentName:"p"},"_build/openapi.yaml")," file."),Object(o.b)("p",null,"The clients are generated using the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github/OpenAPITools/openapi-generator"}),"open-api-generator")," and the specification file - ",Object(o.b)("inlineCode",{parentName:"p"},"_build/openapi.yaml"),"."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"As an example of generated API client, let's use the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli"}),"Qovery CLI"),". The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.qovery.com/docs/using-qovery/interface/cli/"}),"command-line interface")," of Qovery is using a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-client-go"}),"Go API Client")," that was generated following the steps from this article.\nAfter generating the client, we simply published the ",Object(o.b)("inlineCode",{parentName:"p"},"out/client")," folder as a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-client-go"}),"Git Repository")," and then simply imported the code in the CLI application as a dependency:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package utils\n\nimport (\n    "github.com/qovery/qovery-client-go"\n)\n')),Object(o.b)("p",null,"This allowed us to use the generated client code to interact with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://api-doc.qovery.com/"}),"Qovery API")," very easily:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'token, err := GetAccessToken()\nif err != nil {\n    return err\n}\n\nauth := context.WithValue(context.Background(), qovery.ContextAccessToken, string(token))\nclient := qovery.NewAPIClient(qovery.NewConfiguration())\n\norganizations, res, err := client.OrganizationMainCallsApi.ListOrganization(auth).Execute()\nif err != nil {\n    return err\n}\nif res.StatusCode >= 400 {\n    return errors.New("Received " + res.Status + " response while listing organizations. ")\n}\n')),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-openapi-spec.git"}),"Qovery Open API specification")," allows creating ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://api-doc.qovery.com/"}),"Qovery API")," stubs extremely quickly. At Qovery, we officially support only ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-client-go"}),"Golang Client"),", but if you use a different language, you can generate your own client in a matter of seconds following the steps of this article."))}b.isMDXComponent=!0},444:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},445:function(e,t,n){"use strict";n(449);var r=n(0),a=n.n(r),o=n(444),i=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(h,c({ref:t},s,{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},448:function(e,t,n){var r=n(26).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},449:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(451)}),n(74)("fill")},450:function(e,t,n){"use strict";n(448);var r=n(0),a=n.n(r),o=n(445);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},451:function(e,t,n){"use strict";var r=n(28),a=n(75),o=n(27);e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,s=void 0===l?n:a(l,n);s>c;)t[c++]=e;return t}},454:function(e,t,n){"use strict";var r=n(456),a=n(51);function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(a),o,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var a=e[r];if(void 0===a)return"";if(null===a)return o(r,t);if(Array.isArray(a)){var i=[];return a.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return o(r,t)+"="+o(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},455:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(444),n(454)),i=n.n(o);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(l),u=Object(r.useState)(null),p=u[0],b=u[1];return a.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!p&&a.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",a.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",a.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&a.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",a.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},456:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);
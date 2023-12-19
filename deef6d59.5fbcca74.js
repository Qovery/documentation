/*! For license information please see deef6d59.5fbcca74.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{389:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return p}));var o=t(1),a=t(9),n=(t(0),t(425)),i=t(424),c={last_modified_on:"2023-08-04",title:"Terraform",description:"Learn how to use Terraform with Qovery"},l={id:"using-qovery/integration/terraform",title:"Terraform",description:"Learn how to use Terraform with Qovery",source:"@site/docs/using-qovery/integration/terraform.md",permalink:"/docs/using-qovery/integration/terraform",sidebar:"docs",previous:{title:"Helm Repository",permalink:"/docs/using-qovery/integration/helm-repository"},next:{title:"Continuous Integration",permalink:"/docs/using-qovery/integration/continuous-integration"}},u=[{value:"Deploy Qovery with Terraform",id:"deploy-qovery-with-terraform",children:[{value:"Examples",id:"examples",children:[]},{value:"Terraform Exporter",id:"terraform-exporter",children:[]},{value:"Resources",id:"resources",children:[]}]},{value:"Deploy your Terraform code with Qovery",id:"deploy-your-terraform-code-with-qovery",children:[{value:"Examples",id:"examples-1",children:[]},{value:"Resources",id:"resources-1",children:[]}]},{value:"Do you need help?",id:"do-you-need-help",children:[]}],s={rightToc:u};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.terraform.io"}),"Terraform")," is an open-source infrastructure as code software (IaC) tool that provides a consistent CLI workflow to manage hundreds of cloud services. Terraform codifies cloud APIs into declarative configuration files."),Object(n.b)("p",null,"Terraform can be used in 2 context:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"#deploy-qovery-with-terraform"}),"Qovery can be controlled via Terraform"),". This allows you to automate the creation of your organization, project, clusters, applications and environments (and more)."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"#deploy-your-terraform-code-with-qovery"}),"Qovery can be used to deploy your Terraform code"),". This allows you to automate the deployment of your infrastructure.")),Object(n.b)("h2",{id:"deploy-qovery-with-terraform"},"Deploy Qovery with Terraform"),Object(n.b)("p",null,"Qovery integrates with Terraform to create a complete workflow with a strong developer and operations experience for the different teams from development to critical production applications. By integrating Terraform with Qovery, your team can quickly implement governance at scale while drastically improving the developer experience when deploying and managing applications."),Object(n.b)(i.a,{type:"info",mdxType:"Alert"},Object(n.b)("p",null,"Check out our Terraform Provider on ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://registry.terraform.io/providers/Qovery/qovery/latest/docs"}),"Terraform Registry")," and ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Qovery/terraform-provider-qovery"}),"GitHub"),".")),Object(n.b)("h3",{id:"examples"},"Examples"),Object(n.b)("p",null,"Check out our Terraform examples ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Qovery/terraform-examples"}),"here"),"."),Object(n.b)("h3",{id:"terraform-exporter"},"Terraform Exporter"),Object(n.b)("p",null,"Qovery allows you to export your environment as a Terraform Manifest. Check ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/#terraform-exporter"}),"the Terraform Exporter documentation")," to know more."),Object(n.b)("h3",{id:"resources"},"Resources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://registry.terraform.io/providers/Qovery/qovery/latest/docs"}),"Qovery Terraform Registry")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/Qovery/terraform-provider-qovery"}),"Qovery Terraform Provider source code")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/Qovery/terraform-examples"}),"Terraform Examples"))),Object(n.b)("h2",{id:"deploy-your-terraform-code-with-qovery"},"Deploy your Terraform code with Qovery"),Object(n.b)("p",null,"Qovery can deploy your Terraform code. It's very useful when you want to deploy your own cloud resources. For example, you can deploy your own databases, lambdas, brokers etc...\nTo do so, you need to use the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/lifecycle-job/"}),"Lifecycle Jobs")," feature."),Object(n.b)(i.a,{type:"info",mdxType:"Alert"},Object(n.b)("p",null,"Lifecycle Jobs can be used to deploy any kind of code. It's not limited to Terraform. It works with Serverless, Pulumi, Helm etc...")),Object(n.b)("h3",{id:"examples-1"},"Examples"),Object(n.b)("p",null,"Check out our Terraform examples ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Qovery/lifecycle-job-examples"}),"here"),"."),Object(n.b)("h3",{id:"resources-1"},"Resources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/lifecycle-job/"}),"Qovery Lifecycle Job Documentation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/Qovery/lifecycle-job-examples"}),"Qovery Lifecycle Job Examples")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/guides/tutorial/how-to-use-lifecycle-job-to-deploy-any-kind-of-resources/"}),"How to deploy MySQL RDS with Terraform and Lifecycle Jobs"))),Object(n.b)("h2",{id:"do-you-need-help"},"Do you need help?"),Object(n.b)("p",null,"Feel free to open a thread on our ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"Community Forum"),". We will be happy to help you."))}p.isMDXComponent=!0},423:function(e,r,t){var o;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var i=a.apply(null,o);i&&e.push(i)}else if("object"===n)for(var c in o)t.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(r,[]))||(e.exports=o)}()},424:function(e,r,t){"use strict";t(426);var o=t(0),a=t.n(o),n=t(423),i=t.n(n);t(132);r.a=function(e){var r=e.children,t=e.classNames,o=e.fill,n=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:i()(t,"alert","alert--"+c,{"alert--fill":o,"alert--icon":!1!==n}),role:"alert"},!1!==n&&a.a.createElement("i",{className:i()("feather","icon-"+(n||l))}),r)}},425:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var o=t(0),a=t.n(o);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},p=function(e){var r=s(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=Object(o.forwardRef)((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),b=o,m=p["".concat(i,".").concat(b)]||p[b]||f[b]||n;return t?a.a.createElement(m,c({ref:r},u,{components:t})):a.a.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=b;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<n;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},426:function(e,r,t){var o=t(12);o(o.P,"Array",{fill:t(427)}),t(74)("fill")},427:function(e,r,t){"use strict";var o=t(27),a=t(75),n=t(26);e.exports=function(e){for(var r=o(this),t=n(r.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,t),l=i>2?arguments[2]:void 0,u=void 0===l?t:a(l,t);u>c;)r[c++]=e;return r}}}]);
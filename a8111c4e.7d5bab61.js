/*! For license information please see a8111c4e.7d5bab61.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{324:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(1),o=t(9),a=(t(0),t(434)),i=t(433),c={last_modified_on:"2022-05-14",title:"Terraform",description:"How to use Terraform (IaC) to manage Qovery resources"},s={id:"devops/infrastructure-as-code/terraform",title:"Terraform",description:"How to use Terraform (IaC) to manage Qovery resources",source:"@site/docs/devops/infrastructure-as-code/terraform.md",permalink:"/docs/devops/infrastructure-as-code/terraform",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/devops/infrastructure-as-code/terraform.md",sidebar:"docs",previous:{title:"Infrastructure as Code",permalink:"/docs/devops/infrastructure-as-code"},next:{title:"Configuration",permalink:"/docs/devops/infrastructure-config"}},l=[],u={rightToc:l};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.terraform.io"}),"Terraform")," is an open-source infrastructure as code software (IaC) tool that provides a consistent CLI workflow to manage hundreds of cloud services. Terraform codifies cloud APIs into declarative configuration files."),Object(a.b)(i.a,{type:"success",mdxType:"Alert"},Object(a.b)("p",null,"Check out our Terraform Provider on ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://registry.terraform.io/providers/Qovery/qovery/latest/docs"}),"Terraform Registry")," and ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/terraform-provider-qovery"}),"GitHub"),".")),Object(a.b)("p",null,"Qovery integrates with Terraform to create a complete workflow with a strong developer and operations experience for the different teams from development to critical production applications. By integrating Terraform with Qovery, your team can quickly implement governance at scale while drastically improving the developer experience when deploying and managing applications."),Object(a.b)("p",null,"For Terraform 0.13 and later, please include this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-hcl",metastring:'title="main.tf"',title:'"main.tf"'}),'terraform {\n  required_providers {\n    qovery = {\n      source = "qovery/qovery"\n    }\n  }\n  required_version = ">= 0.13"\n}\n\n# Configure the Qovery provider\nprovider "qovery" {\n  token = "<your-qovery-token>"\n}\n\nresource "qovery_organization" "my_organization" {\n  name = "MyOrganization"\n  plan = "FREE"\n}\n\nresource "qovery_aws_credentials" "my_aws_creds" {\n  organization_id = qovery_organization.my_organization.id\n  name = "my_aws_creds"\n  access_key_id = "<your-aws-access-key-id>"\n  secret_access_key = "<your-aws-secret-access-key>"\n\n  depends_on = [\n    qovery_organization.my_organization\n  ]\n}\n\nresource "qovery_cluster" "my_cluster" {\n  organization_id = qovery_organization.my_organization.id\n  credentials_id = qovery_aws_credentials.my_aws_creds.id\n  name = "test_terraform_provider"\n  cloud_provider = "AWS"\n  region = "eu-west-3"\n  instance_type = "T3A_MEDIUM"\n  min_running_nodes = 3\n  max_running_nodes = 10\n\n  depends_on = [\n    qovery_organization.my_organization,\n    qovery_aws_credentials.my_aws_creds\n  ]\n}\n')),Object(a.b)("p",null,"Read our ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.qovery.com/blog/the-qovery-terraform-provider-is-available-now"}),"Qovery Terraform Provider announcement article")),Object(a.b)("p",null,"Resources:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://registry.terraform.io/providers/Qovery/qovery/latest/docs"}),"Qovery Terraform Registry")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Qovery/terraform-provider-qovery"}),"Qovery Terraform Provider source code"))))}p.isMDXComponent=!0},432:function(e,r,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var c in n)t.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(r,[]))||(e.exports=n)}()},433:function(e,r,t){"use strict";t(436);var n=t(0),o=t.n(n),a=t(432),i=t.n(a);t(131);r.a=function(e){var r=e.children,t=e.classNames,n=e.fill,a=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return o.a.createElement("div",{className:i()(t,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:i()("feather","icon-"+(a||s))}),r)}},434:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},p=function(e){var r=u(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=n,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return t?o.a.createElement(m,c({ref:r},l,{components:t})):o.a.createElement(m,c({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},436:function(e,r,t){var n=t(12);n(n.P,"Array",{fill:t(439)}),t(74)("fill")},439:function(e,r,t){"use strict";var n=t(27),o=t(75),a=t(25);e.exports=function(e){for(var r=n(this),t=a(r.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,t),s=i>2?arguments[2]:void 0,l=void 0===s?t:o(s,t);l>c;)r[c++]=e;return r}}}]);
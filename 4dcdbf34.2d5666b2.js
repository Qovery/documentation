/*! For license information please see 4dcdbf34.2d5666b2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{248:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return m}));var o=t(1),r=t(9),a=(t(0),t(452)),i=t(451),c={last_modified_on:"2023-04-19",title:"Jenkins",description:"Learn how to connect Jenkins to Qovery"},l={id:"using-qovery/integration/continuous-integration/jenkins",title:"Jenkins",description:"Learn how to connect Jenkins to Qovery",source:"@site/docs/using-qovery/integration/continuous-integration/jenkins.md",permalink:"/docs/using-qovery/integration/continuous-integration/jenkins",sidebar:"docs",previous:{title:"Circle CI",permalink:"/docs/using-qovery/integration/continuous-integration/circle-ci"},next:{title:"Monitoring",permalink:"/docs/using-qovery/integration/monitoring"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Jenkins Examples",id:"jenkins-examples",children:[]},{value:"Qovery CLI command examples",id:"qovery-cli-command-examples",children:[{value:"Deploy your application with a specific commit ID",id:"deploy-your-application-with-a-specific-commit-id",children:[]},{value:"Deploy your multiple applications with a different commit ID",id:"deploy-your-multiple-applications-with-a-different-commit-id",children:[]},{value:"Deploy your multiple applications with a specific commit ID (monorepo)",id:"deploy-your-multiple-applications-with-a-specific-commit-id-monorepo",children:[]},{value:"Create a Preview Environment for your Pull-Request",id:"create-a-preview-environment-for-your-pull-request",children:[]},{value:"Delete a Preview Environment",id:"delete-a-preview-environment",children:[]},{value:"Terraform",id:"terraform",children:[]},{value:"Any other examples?",id:"any-other-examples",children:[]}]}],u={rightToc:p};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Using Jenkins with Qovery is super powerful and gives you the ability to manage the way that you want to deploy your applications. As the possibility are endless, I will share with you a couple of examples that you can use. Feel free to adapt them to your need."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"Before using the examples below, you need to:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Install the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/interface/cli/"}),"Qovery CLI"),"."),Object(a.b)("li",{parentName:"ol"},"Generate an API token via ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/interface/cli/#generate-api-token"}),"the CLI")," or the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/organization/api-token/"}),"Console")," ."),Object(a.b)("li",{parentName:"ol"},"Set the environment variable ",Object(a.b)("inlineCode",{parentName:"li"},"QOVERY_CLI_ACCESS_TOKEN")," (",Object(a.b)("inlineCode",{parentName:"li"},"export QOVERY_CLI_ACCESS_TOKEN=your-api-token"),") with your API token."),Object(a.b)("li",{parentName:"ol"},"You have turned off the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/environment/#auto-deploy"}),"Qovery Auto Deployment")," for your environment that you want to deploy manually.")),Object(a.b)("h2",{id:"jenkins-examples"},"Jenkins Examples"),Object(a.b)("p",null,"Since Jenkins also provides a .yaml file to configure your pipeline. Refers to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/integration/continuous-integration/gitlab-ci/#gitlab-ci-examples"}),"GitLab CI")," and ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/integration/continuous-integration/github-actions/#github-actions-examples"}),"GitHub Actions")," examples to learn how to configure your pipeline with Qovery."),Object(a.b)("h2",{id:"qovery-cli-command-examples"},"Qovery CLI command examples"),Object(a.b)("h3",{id:"deploy-your-application-with-a-specific-commit-id"},"Deploy your application with a specific commit ID"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"qovery application deploy \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_environment_name> \\\n  --application <your_app_name> \\\n  --commit-id <your_commit_id> \\\n  --watch\n")),Object(a.b)(i.a,{type:"success",mdxType:"Alert"},Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"--watch")," is an optional parameter that will display the status of the deployment and return 0 if the deployment is successful or 1 if it fails.")),Object(a.b)("h3",{id:"deploy-your-multiple-applications-with-a-different-commit-id"},"Deploy your multiple applications with a different commit ID"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"# deploy the application 1 and wait for the deployment to be successful with the --watch argument\nqovery application deploy \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_environment_name> \\\n  --application <your_app_1_name> \\\n  --commit-id <your_commit_id> \\\n  --watch\n\n# deploy the application 2 and wait for the deployment to be successful with the --watch argument\nqovery application deploy \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_environment_name> \\\n  --application <your_app_2_name> \\\n  --commit-id <your_commit_id> \\\n  --watch\n")),Object(a.b)("p",null,"This is also applicable for the ",Object(a.b)("inlineCode",{parentName:"p"},"qovery container deploy"),", ",Object(a.b)("inlineCode",{parentName:"p"},"qovery lifecycle deploy"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"qovery cronjob deploy")," commands."),Object(a.b)("h3",{id:"deploy-your-multiple-applications-with-a-specific-commit-id-monorepo"},"Deploy your multiple applications with a specific commit ID (monorepo)"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'# deploy the application 1, 2 and 3 with the same commit ID and wait for the deployment to be successful with the --watch argument\nqovery application deploy \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_environment_name> \\\n  --applications "<app_1_name>, <app_2_name>, <app_3_name>" \\\n  --commit-id <your_commit_id> \\\n  --watch\n')),Object(a.b)("p",null,"This is also applicable for the ",Object(a.b)("inlineCode",{parentName:"p"},"qovery container deploy"),", ",Object(a.b)("inlineCode",{parentName:"p"},"qovery lifecycle deploy"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"qovery cronjob deploy")," commands."),Object(a.b)("h3",{id:"create-a-preview-environment-for-your-pull-request"},"Create a Preview Environment for your Pull-Request"),Object(a.b)("p",null,"Qovery integrates automatically with GitHub, GitLab and Bitbucket to create a Preview Environment for each Pull-Request. But in case you want to control the creation of the Preview Environment manually, you can use the following commands:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"# Clone your base environment\nqovery environment clone \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_environment_name> \\\n  --new-environment-name <your_new_environment_name>\n\n# Change your application branch to the Pull-Request branch\nqovery application update \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_new_environment_name> \\\n  --application <your_app_name> \\\n  --branch <your_pull_request_branch_name>\n\n# Deploy your new environment\nqovery environment deploy \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_new_environment_name> \\\n  --watch\n")),Object(a.b)("h3",{id:"delete-a-preview-environment"},"Delete a Preview Environment"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"qovery environment delete \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_preview_environment_name> \\\n  --watch\n")),Object(a.b)("h3",{id:"terraform"},"Terraform"),Object(a.b)("p",null,"Do you want to include Terraform in your CI? Check out our ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/integration/terraform/"}),"Terraform documentation"),"."),Object(a.b)("h3",{id:"any-other-examples"},"Any other examples?"),Object(a.b)("p",null,"Feel free to share your examples with us, and we'll be happy to share them with the community. Contact us on ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"our forum"),"."))}m.isMDXComponent=!0},450:function(e,n,t){var o;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var i=r.apply(null,o);i&&e.push(i)}else if("object"===a)for(var c in o)t.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(n,[]))||(e.exports=o)}()},451:function(e,n,t){"use strict";t(455);var o=t(0),r=t.n(o),a=t(450),i=t.n(a);t(132);n.a=function(e){var n=e.children,t=e.classNames,o=e.fill,a=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:i()(t,"alert","alert--"+c,{"alert--fill":o,"alert--icon":!1!==a}),role:"alert"},!1!==a&&r.a.createElement("i",{className:i()("feather","icon-"+(a||l))}),n)}},452:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),u=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},m=function(e){var n=u(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},y=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),y=o,b=m["".concat(i,".").concat(y)]||m[y]||s[y]||a;return t?r.a.createElement(b,c({ref:n},p,{components:t})):r.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},455:function(e,n,t){var o=t(12);o(o.P,"Array",{fill:t(457)}),t(74)("fill")},457:function(e,n,t){"use strict";var o=t(28),r=t(75),a=t(27);e.exports=function(e){for(var n=o(this),t=a(n.length),i=arguments.length,c=r(i>1?arguments[1]:void 0,t),l=i>2?arguments[2]:void 0,p=void 0===l?t:r(l,t);p>c;)n[c++]=e;return n}}}]);
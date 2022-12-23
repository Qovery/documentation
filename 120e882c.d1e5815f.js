/*! For license information please see 120e882c.d1e5815f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{174:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(1),o=t(9),a=(t(0),t(441)),i=t(440),c=t(445),l={last_modified_on:"2022-12-23",title:"GitLab CI",description:"Learn how to connect GitLab CI to Qovery"},p={id:"using-qovery/integration/continuous-integration/gitlab-ci",title:"GitLab CI",description:"Learn how to connect GitLab CI to Qovery",source:"@site/docs/using-qovery/integration/continuous-integration/gitlab-ci.md",permalink:"/docs/using-qovery/integration/continuous-integration/gitlab-ci",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/integration/continuous-integration/gitlab-ci.md",sidebar:"docs",previous:{title:"GitHub Actions",permalink:"/docs/using-qovery/integration/continuous-integration/github-actions"},next:{title:"Circle CI",permalink:"/docs/using-qovery/integration/continuous-integration/circle-ci"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"GitLab CI Examples",id:"gitlab-ci-examples",children:[{value:"Deploy a container application",id:"deploy-a-container-application",children:[]}]},{value:"Qovery CLI command examples",id:"qovery-cli-command-examples",children:[{value:"Deploy your application with a specific commit ID",id:"deploy-your-application-with-a-specific-commit-id",children:[]},{value:"Deploy your multiple applications with a specific commit ID (monorepo)",id:"deploy-your-multiple-applications-with-a-specific-commit-id-monorepo",children:[]},{value:"Deploy your container with a specific Tag",id:"deploy-your-container-with-a-specific-tag",children:[]},{value:"Create a Preview Environment for your Pull-Request",id:"create-a-preview-environment-for-your-pull-request",children:[]},{value:"Delete a Preview Environment",id:"delete-a-preview-environment",children:[]},{value:"Terraform",id:"terraform",children:[]},{value:"Any other examples?",id:"any-other-examples",children:[]}]}],m={rightToc:u};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Using Gitlab CI with Qovery is super powerful and gives you the ability to manage the way that you want to deploy your applications. As the possibility are endless, I will share with you a couple of examples that you can use. Feel free to adapt them to your need."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"Before using the examples below, you need to:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Install the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/using-qovery/interface/cli/"}),"Qovery CLI"),"."),Object(a.b)("li",{parentName:"ol"},"Generate an ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/using-qovery/interface/cli/#generate-api-token"}),"API token"),"."),Object(a.b)("li",{parentName:"ol"},"Set the environment variable ",Object(a.b)("inlineCode",{parentName:"li"},"QOVERY_CLI_ACCESS_TOKEN")," (",Object(a.b)("inlineCode",{parentName:"li"},"export QOVERY_CLI_ACCESS_TOKEN=your-api-token"),") with your API token."),Object(a.b)("li",{parentName:"ol"},"You have turned off the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/environment/#auto-deploy-environment"}),"Qovery Auto Deployment")," for your environment that you want to deploy manually.")),Object(a.b)("h2",{id:"gitlab-ci-examples"},"GitLab CI Examples"),Object(a.b)("h3",{id:"deploy-a-container-application"},"Deploy a container application"),Object(a.b)(c.a,{mdxType:"Assumptions"},Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You have ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/organization/#container-registry-management"}),"connected your Container Registry with Qovery"),"."),Object(a.b)("li",{parentName:"ul"},"You have a container application that you want to deploy on Qovery."),Object(a.b)("li",{parentName:"ul"},"You have set the ",Object(a.b)("inlineCode",{parentName:"li"},"QOVERY_CLI_ACCESS_TOKEN")," environment variable in your GitLab CI project."))),Object(a.b)("p",null,"This example will deploy a container application with Qovery from your GitLab CI pipeline. Feel free to adapt it to your need."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'}),"# 1. Build and Push image to a remote registry\n# 2. Deploy with Qovery\n\nstages:\n  - build-and-push\n  - deploy\n\nbuild-and-push-image:\n  stage: build-and-push\n  script:\n    - docker login -u $CI_REGISTRY_USER -p $CI_JOB_TOKEN $CI_REGISTRY\n    - docker build . --tag my-registry-group/your-app:$CI_COMMIT_SHORT_SHA\n    - docker push my-registry-group/your-app:$CI_COMMIT_SHORT_SHA\n\ndeploy-image-with-qovery:\n  stage: deploy\n  script:\n    - curl -s https://get.qovery.com | bash # Download and install Qovery CLI\n    - |\n      qovery application deploy \\\n        --organization <your_org_name> \\\n        --project <your_project_name> \\\n        --environment <your_environment_name> \\\n        --container <your_qovery_container_name> \\\n        --tag $CI_COMMIT_SHORT_SHA \\\n        --watch\n")),Object(a.b)("h2",{id:"qovery-cli-command-examples"},"Qovery CLI command examples"),Object(a.b)("h3",{id:"deploy-your-application-with-a-specific-commit-id"},"Deploy your application with a specific commit ID"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"qovery application deploy \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_environment_name> \\\n  --application <your_app_name> \\\n  --commit-id <your_commit_id> \\\n  --watch\n")),Object(a.b)(i.a,{type:"success",mdxType:"Alert"},Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"--watch")," is an optional parameter that will display the status of the deployment and return 0 if the deployment is successful or 1 if it fails.")),Object(a.b)("h3",{id:"deploy-your-multiple-applications-with-a-specific-commit-id-monorepo"},"Deploy your multiple applications with a specific commit ID (monorepo)"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# deploy the application 1 and wait for the deployment to be successful with the --watch argument\nqovery application deploy \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_environment_name> \\\n  --application <your_app_1_name> \\\n  --commit-id <your_commit_id> \\\n  --watch\n\n# deploy the application 2 and wait for the deployment to be successful with the --watch argument\nqovery application deploy \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_environment_name> \\\n  --application <your_app_2_name> \\\n  --commit-id <your_commit_id> \\\n  --watch\n")),Object(a.b)("h3",{id:"deploy-your-container-with-a-specific-tag"},"Deploy your container with a specific Tag"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"qovery application deploy \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_environment_name> \\\n  --container <your_container_name> \\\n  --tag <your_container_tag> \\\n  --watch\n")),Object(a.b)("h3",{id:"create-a-preview-environment-for-your-pull-request"},"Create a Preview Environment for your Pull-Request"),Object(a.b)("p",null,"Qovery integrates automatically with GitHub, GitLab and Bitbucket to create a Preview Environment for each Pull-Request. But in case you want to control the creation of the Preview Environment manually, you can use the following commands:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"# Clone your base environment\nqovery environment clone \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_environment_name> \\\n  --new-environment-name <your_new_environment_name>\n\n# Change your application branch to the Pull-Request branch\nqovery application update \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_new_environment_name> \\\n  --application <your_app_name> \\\n  --branch <your_pull_request_branch_name>\n\n# Deploy your new environment\nqovery environment deploy \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_new_environment_name> \\\n  --watch\n")),Object(a.b)("h3",{id:"delete-a-preview-environment"},"Delete a Preview Environment"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"qovery environment delete \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_preview_environment_name> \\\n  --watch\n")),Object(a.b)("h3",{id:"terraform"},"Terraform"),Object(a.b)("p",null,"Do you want to include Terraform in your CI? Check out our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/integration/terraform/"}),"Terraform documentation"),"."),Object(a.b)("h3",{id:"any-other-examples"},"Any other examples?"),Object(a.b)("p",null,"Feel free to share your examples with us, and we'll be happy to share them with the community. Contact us on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"our forum"),"."))}s.isMDXComponent=!0},439:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},440:function(e,n,t){"use strict";t(444);var r=t(0),o=t.n(r),a=t(439),i=t.n(a);t(132);n.a=function(e){var n=e.children,t=e.classNames,r=e.fill,a=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return o.a.createElement("div",{className:i()(t,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:i()("feather","icon-"+(a||l))}),n)}},441:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},m=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},y=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),y=r,b=m["".concat(i,".").concat(y)]||m[y]||s[y]||a;return t?o.a.createElement(b,c({ref:n},p,{components:t})):o.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=y;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},443:function(e,n,t){var r=t(26).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||t(10)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},444:function(e,n,t){var r=t(12);r(r.P,"Array",{fill:t(448)}),t(74)("fill")},445:function(e,n,t){"use strict";t(443);var r=t(0),o=t.n(r),a=t(440);n.a=function(e){var n=e.children,t=e.name;return o.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",t||"page"," assumes the following:"),n)}},448:function(e,n,t){"use strict";var r=t(28),o=t(75),a=t(27);e.exports=function(e){for(var n=r(this),t=a(n.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,t),l=i>2?arguments[2]:void 0,p=void 0===l?t:o(l,t);p>c;)n[c++]=e;return n}}}]);
/*! For license information please see 3a11bd48.afcde13a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{221:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return m}));var o=t(1),a=t(9),r=(t(0),t(452)),i=t(451),c=t(456),l={last_modified_on:"2023-04-19",title:"GitHub Actions",description:"Learn how to connect GitHub Actions to Qovery"},p={id:"using-qovery/integration/continuous-integration/github-actions",title:"GitHub Actions",description:"Learn how to connect GitHub Actions to Qovery",source:"@site/docs/using-qovery/integration/continuous-integration/github-actions.md",permalink:"/docs/using-qovery/integration/continuous-integration/github-actions",sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/docs/using-qovery/integration/continuous-integration"},next:{title:"GitLab CI",permalink:"/docs/using-qovery/integration/continuous-integration/gitlab-ci"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"GitHub Actions Examples",id:"github-actions-examples",children:[{value:"Deploy a container application",id:"deploy-a-container-application",children:[]}]},{value:"Qovery CLI command examples",id:"qovery-cli-command-examples",children:[{value:"Deploy your application with a specific commit ID",id:"deploy-your-application-with-a-specific-commit-id",children:[]},{value:"Deploy your multiple applications with a different commit ID",id:"deploy-your-multiple-applications-with-a-different-commit-id",children:[]},{value:"Deploy your multiple applications with a specific commit ID (monorepo)",id:"deploy-your-multiple-applications-with-a-specific-commit-id-monorepo",children:[]},{value:"Create a Preview Environment for your Pull-Request",id:"create-a-preview-environment-for-your-pull-request",children:[]},{value:"Delete a Preview Environment",id:"delete-a-preview-environment",children:[]},{value:"Terraform",id:"terraform",children:[]},{value:"Any other examples?",id:"any-other-examples",children:[]}]}],s={rightToc:u};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Using GitHub Actions with Qovery is super powerful and gives you the ability to manage the way that you want to deploy your applications. As the possibility are endless, I will share with you a couple of examples that you can use. Feel free to adapt them to your need."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"Before using the examples below, you need to:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install the ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/interface/cli/"}),"Qovery CLI"),"."),Object(r.b)("li",{parentName:"ol"},"Generate an API token via ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/interface/cli/#generate-api-token"}),"the CLI")," or the ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/organization/api-token/"}),"Console")," ."),Object(r.b)("li",{parentName:"ol"},"Set the environment variable ",Object(r.b)("inlineCode",{parentName:"li"},"QOVERY_CLI_ACCESS_TOKEN")," (",Object(r.b)("inlineCode",{parentName:"li"},"export QOVERY_CLI_ACCESS_TOKEN=your-api-token"),") with your API token."),Object(r.b)("li",{parentName:"ol"},"You have turned off the ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/environment/#auto-deploy"}),"Qovery Auto Deployment")," for your environment that you want to deploy manually.")),Object(r.b)("h2",{id:"github-actions-examples"},"GitHub Actions Examples"),Object(r.b)("h3",{id:"deploy-a-container-application"},"Deploy a container application"),Object(r.b)(c.a,{mdxType:"Assumptions"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You have ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/organization/container-registry/"}),"connected your Container Registry with Qovery"),"."),Object(r.b)("li",{parentName:"ul"},"You have a container application that you want to deploy on Qovery."),Object(r.b)("li",{parentName:"ul"},"You have set the ",Object(r.b)("inlineCode",{parentName:"li"},"QOVERY_CLI_ACCESS_TOKEN")," environment variable in your GitHub Actions project."))),Object(r.b)("p",null,"This example will deploy a container application with Qovery from your GitHub CI pipeline. Feel free to adapt it to your need."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".github/workflows/deploy-with-qovery.yml"',title:'".github/workflows/deploy-with-qovery.yml"'}),"# 1. Build and Push image to a remote registry\n# 2. Deploy with Qovery\n\nname: Publish Docker image and Deploy with Qovery\n\non:\n  release:\n    types: [published]\n\njobs:\n  deploy_with_qovery:\n    name: Push Docker image to Docker Hub and Deploy with Qovery\n    runs-on: ubuntu-latest\n    steps:\n      - name: Check out the repo\n        uses: actions/checkout@v3\n\n      - name: Log in to Docker Hub\n        uses: docker/login-action\n        with:\n          username: ${{ secrets.DOCKER_USERNAME }}\n          password: ${{ secrets.DOCKER_PASSWORD }}\n\n      - name: Extract metadata (tags, labels) for Docker\n        id: meta\n        uses: docker/metadata-action\n        with:\n          images: my-docker-hub-namespace/my-docker-hub-repository\n\n      - name: Build and push Docker image\n        uses: docker/build-push-action\n        with:\n          context: .\n          push: true\n          tags: ${{ steps.meta.outputs.tags }}\n          labels: ${{ steps.meta.outputs.labels }}\n\n      - name: Deploy with Qovery\n        uses: actions/checkout@v3\n        env:\n          QOVERY_CLI_ACCESS_TOKEN: ${{ secrets.QOVERY_CLI_ACCESS_TOKEN }}\n        shell: bash\n        run: |\n          # Download and install Qovery CLI\n          curl -s https://get.qovery.com | bash\n\n          qovery container deploy \\\n            --organization <your_org_name> \\\n            --project <your_project_name> \\\n            --environment <your_environment_name> \\\n            --container <your_qovery_container_name> \\\n            --tag ${{ github.sha }} \\\n            --watch\n")),Object(r.b)("h2",{id:"qovery-cli-command-examples"},"Qovery CLI command examples"),Object(r.b)("h3",{id:"deploy-your-application-with-a-specific-commit-id"},"Deploy your application with a specific commit ID"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"qovery application deploy \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_environment_name> \\\n  --application <your_app_name> \\\n  --commit-id <your_commit_id> \\\n  --watch\n")),Object(r.b)(i.a,{type:"success",mdxType:"Alert"},Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"--watch")," is an optional parameter that will display the status of the deployment and return 0 if the deployment is successful or 1 if it fails.")),Object(r.b)("h3",{id:"deploy-your-multiple-applications-with-a-different-commit-id"},"Deploy your multiple applications with a different commit ID"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"# deploy the application 1 and wait for the deployment to be successful with the --watch argument\nqovery application deploy \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_environment_name> \\\n  --application <your_app_1_name> \\\n  --commit-id <your_commit_id> \\\n  --watch\n\n# deploy the application 2 and wait for the deployment to be successful with the --watch argument\nqovery application deploy \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_environment_name> \\\n  --application <your_app_2_name> \\\n  --commit-id <your_commit_id> \\\n  --watch\n")),Object(r.b)("p",null,"This is also applicable for the ",Object(r.b)("inlineCode",{parentName:"p"},"qovery container deploy"),", ",Object(r.b)("inlineCode",{parentName:"p"},"qovery lifecycle deploy"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"qovery cronjob deploy")," commands."),Object(r.b)("h3",{id:"deploy-your-multiple-applications-with-a-specific-commit-id-monorepo"},"Deploy your multiple applications with a specific commit ID (monorepo)"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'# deploy the application 1, 2 and 3 with the same commit ID and wait for the deployment to be successful with the --watch argument\nqovery application deploy \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_environment_name> \\\n  --applications "<app_1_name>, <app_2_name>, <app_3_name>" \\\n  --commit-id <your_commit_id> \\\n  --watch\n')),Object(r.b)("p",null,"This is also applicable for the ",Object(r.b)("inlineCode",{parentName:"p"},"qovery container deploy"),", ",Object(r.b)("inlineCode",{parentName:"p"},"qovery lifecycle deploy"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"qovery cronjob deploy")," commands."),Object(r.b)("h3",{id:"create-a-preview-environment-for-your-pull-request"},"Create a Preview Environment for your Pull-Request"),Object(r.b)("p",null,"Qovery integrates automatically with GitHub, GitLab and Bitbucket to create a Preview Environment for each Pull-Request. But in case you want to control the creation of the Preview Environment manually, you can use the following commands:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"# Clone your base environment\nqovery environment clone \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_environment_name> \\\n  --new-environment-name <your_new_environment_name>\n\n# Change your application branch to the Pull-Request branch\nqovery application update \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_new_environment_name> \\\n  --application <your_app_name> \\\n  --branch <your_pull_request_branch_name>\n\n# Deploy your new environment\nqovery environment deploy \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_new_environment_name> \\\n  --watch\n")),Object(r.b)("h3",{id:"delete-a-preview-environment"},"Delete a Preview Environment"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"qovery environment delete \\\n  --organization <your_org_name> \\\n  --project <your_project_name> \\\n  --environment <your_preview_environment_name> \\\n  --watch\n")),Object(r.b)("h3",{id:"terraform"},"Terraform"),Object(r.b)("p",null,"Do you want to include Terraform in your CI? Check out our ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/integration/terraform/"}),"Terraform documentation"),"."),Object(r.b)("h3",{id:"any-other-examples"},"Any other examples?"),Object(r.b)("p",null,"Feel free to share your examples with us, and we'll be happy to share them with the community. Contact us on ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"our forum"),"."))}m.isMDXComponent=!0},450:function(e,n,t){var o;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var i=a.apply(null,o);i&&e.push(i)}else if("object"===r)for(var c in o)t.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(n,[]))||(e.exports=o)}()},451:function(e,n,t){"use strict";t(455);var o=t(0),a=t.n(o),r=t(450),i=t.n(r);t(132);n.a=function(e){var n=e.children,t=e.classNames,o=e.fill,r=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:i()(t,"alert","alert--"+c,{"alert--fill":o,"alert--icon":!1!==r}),role:"alert"},!1!==r&&a.a.createElement("i",{className:i()("feather","icon-"+(r||l))}),n)}},452:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},y=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),y=o,b=s["".concat(i,".").concat(y)]||s[y]||m[y]||r;return t?a.a.createElement(b,c({ref:n},p,{components:t})):a.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=y;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<r;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},454:function(e,n,t){var o=t(26).f,a=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in a||t(10)&&o(a,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},455:function(e,n,t){var o=t(12);o(o.P,"Array",{fill:t(457)}),t(74)("fill")},456:function(e,n,t){"use strict";t(454);var o=t(0),a=t.n(o),r=t(451);n.a=function(e){var n=e.children,t=e.name;return a.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",t||"page"," assumes the following:"),n)}},457:function(e,n,t){"use strict";var o=t(28),a=t(75),r=t(27);e.exports=function(e){for(var n=o(this),t=r(n.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,t),l=i>2?arguments[2]:void 0,p=void 0===l?t:a(l,t);p>c;)n[c++]=e;return n}}}]);
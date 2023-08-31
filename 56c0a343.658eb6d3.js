(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{244:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(9),r=(n(0),n(413)),i=n(412),l=(n(425),n(417)),s={last_modified_on:"2023-08-31",$schema:"/.meta/.schemas/guides.json",title:"Build E2E Testing Ephemeral Environments with GitHub Actions and Qovery",description:"Step-by-step guide to build e2e testing ephemeral environments with GitHub Actions and Qovery",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","technology: qovery"],hide_pagination:!0},c={categories:[{name:"tutorial",title:"Tutorial",description:"Additional step-by-step resources to leverage even more Qovery",permalink:"/guides/tutorial"}],coverLabel:"Build E2E Testing Ephemeral Environments with GitHub Actions and Qovery",description:"Step-by-step guide to build e2e testing ephemeral environments with GitHub Actions and Qovery",permalink:"/guides/tutorial/build-e2e-testing-ephemeral-environments",readingTime:"12 min read",source:"@site/guides/tutorial/build-e2e-testing-ephemeral-environments.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Build E2E Testing Ephemeral Environments with GitHub Actions and Qovery",truncated:!1,prevItem:{title:"Blazingly fast Preview Environments for NextJS, NodeJS, and MongoDB on AWS",permalink:"/guides/tutorial/blazingly-fast-preview-environments-for-nextjs-nodejs-and-mongodb-on-aws"},nextItem:{title:"Build on Top of Qovery",permalink:"/guides/advanced/build-on-top"}},b=[{value:"Why E2E Testing?",id:"why-e2e-testing",children:[]},{value:"The Importance of Ephemeral Environments",id:"the-importance-of-ephemeral-environments",children:[]},{value:"GitHub Actions and Qovery: A Perfect Match",id:"github-actions-and-qovery-a-perfect-match",children:[]},{value:"What You&#39;ll Learn",id:"what-youll-learn",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Tools",id:"tools",children:[]},{value:"7 Steps to build E2E testing ephemeral environments with GitHub Actions and Qovery",id:"7-steps-to-build-e2e-testing-ephemeral-environments-with-github-actions-and-qovery",children:[{value:"1. Prepare Qovery blueprint environment",id:"1-prepare-qovery-blueprint-environment",children:[]},{value:"2. Build and push container image",id:"2-build-and-push-container-image",children:[]},{value:"3. Create an Ephemeral Environment with GitHub Actions and Qovery",id:"3-create-an-ephemeral-environment-with-github-actions-and-qovery",children:[]},{value:"4. Run E2E tests with K6",id:"4-run-e2e-tests-with-k6",children:[]},{value:"5. Display test results in Pull Request",id:"5-display-test-results-in-pull-request",children:[]},{value:"6. Destroy Ephemeral Environment and clean up resources",id:"6-destroy-ephemeral-environment-and-clean-up-resources",children:[]}]},{value:"Wrapping up",id:"wrapping-up",children:[]}],u={rightToc:b};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Welcome to this comprehensive step-by-step guide on building End-to-End (E2E) testing ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.qovery.com/solutions/ephemeral-environments"}),"ephemeral environments")," using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/features/actions"}),"GitHub Actions")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.qovery.com"}),"Qovery"),". If you've been seeking ways to automate your testing processes, reduce operational overhead, and improve the efficiency of your development cycle, then you're in the right place."),Object(r.b)("h2",{id:"why-e2e-testing"},"Why E2E Testing?"),Object(r.b)("p",null,"End-to-End testing is a critical phase in the software development lifecycle. It validates that your application works cohesively from start to finish, mimicking real-world scenarios."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/e2e-with-github-actions-and-qovery/e2e-pyramid.png",alt:"E2E vs UI Tests vs Integation Tests vs Unit Tests - from SemaphoreCI"})),Object(r.b)("p",null,"While unit tests and integration tests offer valuable insights, they do not replicate how multiple components interact in a live production environment. E2E testing fills that gap and ensures that your application performs as expected when it goes live."),Object(r.b)("h2",{id:"the-importance-of-ephemeral-environments"},"The Importance of Ephemeral Environments"),Object(r.b)("p",null,"In the world of DevOps and CI/CD, ephemeral environments (aka ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.qovery.com/blog/why-preview-environments-are-the-new-thing-in-devops"}),"Preview Environments"),") serve as temporary, isolated setups where you can test your applications. These environments are increasingly vital in agile development frameworks where frequent changes are the norm. They can be provisioned quickly, teared down when no longer needed, and replicated easily. This means you can push your changes more rapidly into production with confidence."),Object(r.b)("h2",{id:"github-actions-and-qovery-a-perfect-match"},"GitHub Actions and Qovery: A Perfect Match"),Object(r.b)("p",null,"GitHub Actions offers a powerful platform for automating workflows, allowing you to build, test, and deploy your code right from GitHub. Qovery, on the other hand, simplifies the provisioning and management of cloud resources, making it incredibly straightforward to set up ephemeral environments. When used in tandem, these tools provide a seamless, automated pipeline for E2E testing."),Object(r.b)("h2",{id:"what-youll-learn"},"What You'll Learn"),Object(r.b)("p",null,"This guide is designed to walk you through the entire process of setting up an automated E2E testing pipeline. We'll start by setting up GitHub Actions, move on to configuring ephemeral environments with Qovery, and finally, integrate these components into a cohesive, automated testing solution."),Object(r.b)("p",null,"By the end of this guide, you'll have a fully operational E2E testing pipeline that will allow you to:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Automate your testing process"),Object(r.b)("li",{parentName:"ol"},"Quickly provision and de-provision environments"),Object(r.b)("li",{parentName:"ol"},"Integrate closely with your GitHub repository"),Object(r.b)("li",{parentName:"ol"},"Save both time and operational costs")),Object(r.b)("p",null,"So, whether you are a developer, a DevOps engineer, a QA specialist, an engineering manager, or even a CTO, this guide offers valuable insights for anyone involved in the software development process."),Object(r.b)("p",null,"Let's dive in!"),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)(l.a,{name:"guide",mdxType:"Assumptions"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You have ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://start.qovery.com"}),"sign in on Qovery")),Object(r.b)("li",{parentName:"ul"},"You have a GitHub account"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Contact us via ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://discuss.qovery.com/"}),"our forum")," if you have any questions concerning Qovery")),Object(r.b)("h2",{id:"tools"},"Tools"),Object(r.b)("p",null,"Here are the tools we will use in this guide:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.qovery.com"}),"Qovery")," for the infrastructure and the ephemeral environment"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/features/actions"}),"GitHub Actions")," for the CI/CD pipeline"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://k6.io/"}),"K6")," for the e2e tests")),Object(r.b)("h2",{id:"7-steps-to-build-e2e-testing-ephemeral-environments-with-github-actions-and-qovery"},"7 Steps to build E2E testing ephemeral environments with GitHub Actions and Qovery"),Object(r.b)("p",null,"Here is the big picture of what we will build:"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/e2e-with-github-actions-and-qovery/1.png",alt:"e2e testing Workflow with github actions and Qovery"})),Object(r.b)("p",null,"We will focus on the most important parts of the workflow - from label number 2 to 11. I assume that you already know GitHub and how to create a Pull Request :)"),Object(r.b)("p",null,"Let's go!"),Object(r.b)("h3",{id:"1-prepare-qovery-blueprint-environment"},"1. Prepare Qovery blueprint environment"),Object(r.b)("p",null,"If you are not already familiar with Qovery, I recommend you to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/what-is-qovery/"}),"What's Qovery"),". In this guide, we will use Qovery to provision our ephemeral environments composed of a Java application (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evoxmusic/todo-demo-app"}),"TODO app"),") and a PostgreSQL database. For this, we will create a blueprint environment that will be used as a template to create ephemeral environments."),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"You can skip this part if you already have an environment that you want to use as a base for your ephemeral environments.")),Object(r.b)("p",null,"Here are the steps I did to create my blueprint environment:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Connect to ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://console.qovery.com"}),"Qovery"),"."),Object(r.b)("li",{parentName:"ol"},"Create a new project."),Object(r.b)("li",{parentName:"ol"},"Create a new environment named ",Object(r.b)("inlineCode",{parentName:"li"},"blueprint"),"."),Object(r.b)("li",{parentName:"ol"},"Add a ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/guides/getting-started/create-a-database/"}),"PostgreSQL database")," inside your ",Object(r.b)("inlineCode",{parentName:"li"},"blueprint")," environment."),Object(r.b)("li",{parentName:"ol"},"Add a ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/application/#create-an-application"}),"TODO app")," by using my ECR container registry where I push my image from GitHub Actions (cf next step).")),Object(r.b)("p",null,"At the end of those steps, you should have something like this:"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/e2e-with-github-actions-and-qovery/2.png",alt:"Blueprint environment"})),Object(r.b)("p",null,"If you want to use my ",Object(r.b)("inlineCode",{parentName:"p"},"TODO app")," as an example, you need to properly configure the environment variables of the application. Here is a table with the environment variables you need to set:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Is Alias?"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Scope"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Comment"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"POSTGRES_DB_NAME")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes for ",Object(r.b)("inlineCode",{parentName:"td"},"QOVERY_POSTGRESQL_Z..._DEFAULT_DATABASE_NAME")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Service"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"N/A"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Database name")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"POSTGRES_HOST")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes for ",Object(r.b)("inlineCode",{parentName:"td"},"QOVERY_POSTGRESQL_Z..._HOST_INTERNAL")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Service"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"N/A"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Database host")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"POSTGRES_PORT")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes for ",Object(r.b)("inlineCode",{parentName:"td"},"QOVERY_POSTGRESQL_Z..._PORT")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Service"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"N/A"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Database port")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"POSTGRES_DATASOURCE_USERNAME")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes for ",Object(r.b)("inlineCode",{parentName:"td"},"QOVERY_POSTGRESQL_Z..._LOGIN")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Service"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"N/A"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Database login")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"POSTGRES_DATASOURCE_PASSWORD")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes for ",Object(r.b)("inlineCode",{parentName:"td"},"QOVERY_POSTGRESQL_Z..._PASSWORD")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Service"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"N/A"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Database password")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"QUARKUS_DATASOURCE_JDBC_URL")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Service"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"jdbc:postgresql://{{POSTGRES_HOST}}:{{POSTGRES_PORT}}/{{POSTGRES_DB_NAME}}"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Connection string to the PostgreSQL database")))),Object(r.b)("p",null,"You're good to go! Now, let's move on to the next step."),Object(r.b)("h3",{id:"2-build-and-push-container-image"},"2. Build and push container image"),Object(r.b)("p",null,"In this step, we will build and push the container image of our application to our ECR container registry. We will use GitHub Actions to do that."),Object(r.b)("p",null,"Create your GitHub Actions workflow inside ",Object(r.b)("inlineCode",{parentName:"p"},".github/workflows")," folder. I named mine ",Object(r.b)("inlineCode",{parentName:"p"},"build-and-push-image.yml"),". Here is the content of the file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"...\n  build-and-push-container:\n    runs-on: ubuntu-latest\n    needs: run-unit-tests\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v3\n\n      - name: Configure AWS credentials\n        uses: aws-actions/configure-aws-credentials@v2\n        with:\n          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}\n          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n          aws-region: eu-west-3\n\n      - name: Login to Amazon ECR\n        id: login-ecr\n        uses: aws-actions/amazon-ecr-login@v1\n        with:\n          mask-password: 'true'\n\n      - name: Build, Tag, and push image to Amazon ECR\n        env:\n          ECR_REGISTRY: 687975725498.dkr.ecr.eu-west-3.amazonaws.com\n          ECR_REPOSITORY: todo-app\n          IMAGE_TAG: ${{ github.sha }}\n        run: |\n          docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG .\n          docker tag $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG $ECR_REGISTRY/$ECR_REPOSITORY:latest\n          docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Find my complete file ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evoxmusic/todo-demo-app/blob/master/.github/workflows/build-and-push-image.yml"}),"here"))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID")," and ",Object(r.b)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY")," are stored as ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.github.com/en/actions/reference/encrypted-secrets"}),"GitHub secrets"),"."),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"The ECR registry is also connected to my Qovery account - so I can pull the pushed image from Qovery as well.")),Object(r.b)("h3",{id:"3-create-an-ephemeral-environment-with-github-actions-and-qovery"},"3. Create an Ephemeral Environment with GitHub Actions and Qovery"),Object(r.b)("p",null,"In this step, we will create an ephemeral environment with GitHub Actions and Qovery. We will use the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/"}),"Qovery CLI")," inside our GitHub Actions workflow to do that."),Object(r.b)("p",null,"Create your GitHub Actions workflow inside ",Object(r.b)("inlineCode",{parentName:"p"},".github/workflows")," folder. I named mine ",Object(r.b)("inlineCode",{parentName:"p"},"pull-request-run-e2e-tests.yml"),". Here is the content of the file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'...\njobs:\n  create-e2e-environment:\n    if: ${{ github.event.label.name == \'e2e\' }}\n    runs-on: ubuntu-latest\n    permissions:\n      pull-requests: write\n    steps:\n      - id: create-environment\n        name: Create and deploy Qovery E2E environment\n        env:\n          QOVERY_CLI_ACCESS_TOKEN: ${{ secrets.QOVERY_CLI_ACCESS_TOKEN }}\n        run: |\n          # Download and install Qovery CLI\n          curl -s https://get.qovery.com | bash\n\n          echo "Organization name: ${{ vars.QOVERY_ORGANIZATION_NAME }}"\n          echo "Project name: ${{ vars.QOVERY_PROJECT_NAME }}"\n          echo "Blueprint name: ${{ vars.QOVERY_BLUEPRINT_ENVIRONMENT_NAME }}"\n\n          new_environment_name="${GITHUB_HEAD_REF}"\n\n          echo "Let\'s clone \'${{ vars.QOVERY_BLUEPRINT_ENVIRONMENT_NAME }}\' environment into \'$new_environment_name\' environment"\n\n          qovery environment clone \\\n            --organization "${{ vars.QOVERY_ORGANIZATION_NAME }}" \\\n            --project "${{ vars.QOVERY_PROJECT_NAME }}" \\\n            --environment "${{ vars.QOVERY_BLUEPRINT_ENVIRONMENT_NAME }}" \\\n            --new-environment-name "$new_environment_name"\n\n          qovery container update \\\n            --organization "${{ vars.QOVERY_ORGANIZATION_NAME }}" \\\n            --project "${{ vars.QOVERY_PROJECT_NAME }}" \\\n            --environment "${{ vars.QOVERY_BLUEPRINT_ENVIRONMENT_NAME }}" \\\n            --container "${{ vars.QOVERY_APPLICATION_NAME }}" \\\n            --tag ${{ github.sha }}\n\n          qovery environment deploy \\\n            --organization "${{ vars.QOVERY_ORGANIZATION_NAME }}" \\\n            --project "${{ vars.QOVERY_PROJECT_NAME }}" \\\n            --environment "$new_environment_name" \\\n            -w\n\n          qovery_status_markdown_output=`qovery service list \\\n            --organization "${{ vars.QOVERY_ORGANIZATION_NAME }}" \\\n            --project "${{ vars.QOVERY_PROJECT_NAME }}" \\\n            --environment "$new_environment_name" \\\n            --markdown`\n\n          echo "QOVERY_STATUS_MARKDOWN_OUTPUT<<EOF" >> "$GITHUB_OUTPUT"\n          echo "$qovery_status_markdown_output" >> "$GITHUB_OUTPUT"\n          echo "EOF" >> "$GITHUB_OUTPUT"\n')),Object(r.b)("p",null,"Basically, we use the ",Object(r.b)("inlineCode",{parentName:"p"},"qovery environment clone")," command to clone our blueprint environment into a new environment. Then, we use the ",Object(r.b)("inlineCode",{parentName:"p"},"qovery container update")," command to update the container tag of our application. Finally, we use the ",Object(r.b)("inlineCode",{parentName:"p"},"qovery environment deploy")," command to deploy our application. The option ",Object(r.b)("inlineCode",{parentName:"p"},"-w")," is used to wait for the deployment to be completed. We also use the ",Object(r.b)("inlineCode",{parentName:"p"},"qovery service list")," command to get the status of our environment and store it in a GitHub output variable. This variable will be used in the next step to display the status of the environment in the Pull Request."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"...\n      - name: PR Comment with URL\n        uses: mshick/add-pr-comment@v2\n        with:\n          message-id: qovery-e2e-environment-status\n          message: |\n            ${{ steps.create-environment.outputs.QOVERY_STATUS_MARKDOWN_OUTPUT }}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Find my complete file ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evoxmusic/todo-demo-app/blob/master/.github/workflows/pull-request-run-e2e-tests.yml"}),"here"))),Object(r.b)("p",null,"You can see the result of this step in the Pull Request:"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/e2e-with-github-actions-and-qovery/3.png",alt:"Ephemeral environment status in Pull Request"})),Object(r.b)("h3",{id:"4-run-e2e-tests-with-k6"},"4. Run E2E tests with K6"),Object(r.b)("p",null,"In this step, we will run our E2E tests with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://k6.io"}),"K6"),". K6 is a modern load testing tool that allows you to write tests in JavaScript. It's a great tool to run E2E tests as well. Here is the script we will use:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import http from 'k6/http';\nimport {check, group, sleep, fail} from 'k6';\nimport {uuidv4} from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';\n\nconst api_host = `${__ENV.API_HOST}/api`;\nexport const options = {\n  stages: [\n    {duration: '5m', target: 100}, // traffic ramp-up from 1 to 100 users over 5 minutes.\n    //{ duration: '30m', target: 100 }, // stay at 100 users for 30 minutes\n    {duration: '1m', target: 50}, // ramp-down to 50 users\n  ]\n}\n\nexport function setup() {\n  // add some data\n  const params = {\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  };\n\n  for (let i = 0; i < 20; i++) {\n    const res = http.post(api_host, JSON.stringify({title: uuidv4()}), params);\n    check(res, {'item added': (r) => r.status === 201});\n  }\n}\n\nexport default function () {\n  http.get(api_host);\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The complete script is available ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evoxmusic/todo-demo-app/blob/master/e2e/e2e.js"}),"here"))),Object(r.b)("p",null,"We will use the ",Object(r.b)("inlineCode",{parentName:"p"},"setup")," function to add some data to our database. Then, we will use the ",Object(r.b)("inlineCode",{parentName:"p"},"default")," function to get the list of items from our API. We will use the ",Object(r.b)("inlineCode",{parentName:"p"},"options")," variable to define the number of users we want to simulate. In this example, we will simulate 100 users for 5 minutes. You can find more information about the ",Object(r.b)("inlineCode",{parentName:"p"},"options")," variable ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://k6.io/docs/using-k6/options"}),"here"),"."),Object(r.b)("p",null,"To run our E2E tests, we will use the ",Object(r.b)("inlineCode",{parentName:"p"},"k6 run")," command inside our GitHub Actions workflow. Here is the content of the file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'  run-e2e-tests:\n    if: ${{ github.event.label.name == \'e2e\' }}\n    runs-on: ubuntu-latest\n    needs: create-e2e-environment\n    permissions:\n      pull-requests: write\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v3\n\n      - id: run-e2e\n        name: Run E2E tests\n        env:\n          QOVERY_CLI_ACCESS_TOKEN: ${{ secrets.QOVERY_CLI_ACCESS_TOKEN }}\n        run: |\n          # Download and install Qovery CLI\n          curl -s https://get.qovery.com | bash\n\n          sudo gpg -k\n          sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69\n          echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list\n          sudo apt-get update\n          sudo apt-get install k6\n\n          new_environment_name="${GITHUB_HEAD_REF}"\n\n          api_domain=`qovery container domain list \\\n            --organization "${{ vars.QOVERY_ORGANIZATION_NAME }}" \\\n            --project "${{ vars.QOVERY_PROJECT_NAME }}" \\\n            --environment "$new_environment_name" \\\n            --container "${{ vars.QOVERY_APPLICATION_NAME }}" | grep "BUILT_IN_DOMAIN" | head -1 | awk \'{print $5}\' | sed -e \'s/\\x1b\\[[0-9;]*m//g\'`\n\n          echo "api_domain: $api_domain"\n\n          api_host="https://$api_domain"\n          echo "API_HOST: $api_host"\n\n          e2e_report=`k6 --no-color -q -e API_HOST=$api_host run e2e/e2e.js`\n\n          echo "E2E_REPORT<<EOF" >> $GITHUB_OUTPUT\n          echo "$e2e_report" >> $GITHUB_OUTPUT\n          echo "EOF" >> $GITHUB_OUTPUT\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The complete file is available ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evoxmusic/todo-demo-app/blob/master/.github/workflows/pull-request-run-e2e-tests.yml"}),"here"))),Object(r.b)("p",null,"We use the ",Object(r.b)("inlineCode",{parentName:"p"},"qovery container domain list")," command to get the domain of our application. Then, we use the ",Object(r.b)("inlineCode",{parentName:"p"},"k6")," command to run our E2E tests. We store the result of the tests in a GitHub output variable."),Object(r.b)(i.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"qovery container domain list")," command returns ANSI color codes. We use the ",Object(r.b)("inlineCode",{parentName:"p"},"sed -e 's/\\x1b\\[[0-9;]*m//g'")," command to remove them.")),Object(r.b)("h3",{id:"5-display-test-results-in-pull-request"},"5. Display test results in Pull Request"),Object(r.b)("p",null,"In this step, we will display the result of our E2E tests in the Pull Request. We will use the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#setting-an-output-parameter"}),"GitHub Actions output variables")," to do that. Here is the content of the file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"      - name: Display E2E Report\n        uses: mshick/add-pr-comment@v2\n        with:\n          message-id: e2e-report\n          message: |\n            E2E Tests Report\n\n            --\n\n            ```\n            ${{ steps.run-e2e.outputs.E2E_REPORT }}\n            ```\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The complete file is available ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evoxmusic/todo-demo-app/blob/master/.github/workflows/pull-request-run-e2e-tests.yml#L109C1-L120C16"}),"here"))),Object(r.b)("p",null,"You can see the result of this step in the Pull Request:"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/e2e-with-github-actions-and-qovery/4.png",alt:"E2E report in Pull Request"})),Object(r.b)("h3",{id:"6-destroy-ephemeral-environment-and-clean-up-resources"},"6. Destroy Ephemeral Environment and clean up resources"),Object(r.b)("p",null,"Now we will destroy the ephemeral environment and clean up the resources when the Pull Request is closed or merged. Here is the yaml:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'name: Destroy and clean up E2E Tests Environment\n\non:\n  pull_request:\n    types: [ closed ]\n\njobs:\n  delete-e2e-environment:\n    runs-on: ubuntu-latest\n    steps:\n      - id: delete-environment\n        name: Delete Qovery E2E environment\n        env:\n          QOVERY_CLI_ACCESS_TOKEN: ${{ secrets.QOVERY_CLI_ACCESS_TOKEN }}\n        run: |\n          # Download and install Qovery CLI\n          curl -s https://get.qovery.com | bash\n\n          echo "Organization name: ${{ vars.QOVERY_ORGANIZATION_NAME }}"\n          echo "Project name: ${{ vars.QOVERY_PROJECT_NAME }}"\n          echo "Blueprint name: ${{ vars.QOVERY_BLUEPRINT_ENVIRONMENT_NAME }}"\n\n          new_environment_name="${GITHUB_HEAD_REF}"\n\n          echo "Let\'s delete \'$new_environment_name\' environment and release its resources"\n\n          qovery environment delete \\\n            --organization "${{ vars.QOVERY_ORGANIZATION_NAME }}" \\\n            --project "${{ vars.QOVERY_PROJECT_NAME }}" \\\n            --environment "$new_environment_name" \\\n            -w\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The complete file is available ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evoxmusic/todo-demo-app/blob/master/.github/workflows/pull-request-destroy-e2e-environment.yml"}),"here"))),Object(r.b)("p",null,"We just use the ",Object(r.b)("inlineCode",{parentName:"p"},"qovery environment delete")," command to delete the ephemeral environment. The option ",Object(r.b)("inlineCode",{parentName:"p"},"-w")," is used to wait for the deletion to be completed. Qovery will automatically release the resources used by the environment."),Object(r.b)("h2",{id:"wrapping-up"},"Wrapping up"),Object(r.b)("p",null,"Congratulations! You've successfully built an automated E2E testing pipeline with GitHub Actions and Qovery. You can now run your tests in a fully isolated environment, provisioned and de-provisioned automatically, and integrated with your GitHub repository."),Object(r.b)("p",null,"Some resources:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://semaphoreci.com/blog/e2e-testing"}),"https://semaphoreci.com/blog/e2e-testing"))))}p.isMDXComponent=!0},412:function(e,t,n){"use strict";n(414);var a=n(0),o=n.n(a),r=n(411),i=n.n(r);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,r=e.icon,l=e.type,s=null;switch(l){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return o.a.createElement("div",{className:i()(n,"alert","alert--"+l,{"alert--fill":a,"alert--icon":!1!==r}),role:"alert"},!1!==r&&o.a.createElement("i",{className:i()("feather","icon-"+(r||s))}),t)}},416:function(e,t,n){var a=n(28).f,o=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in o||n(10)&&a(o,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},417:function(e,t,n){"use strict";n(416);var a=n(0),o=n.n(a),r=n(412);t.a=function(e){var t=e.children,n=e.name;return o.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},425:function(e,t,n){"use strict";var a=n(1),o=(n(430),n(427),n(52),n(29),n(22),n(21),n(0)),r=n.n(o),i=n(437),l=n(411),s=n.n(l),c=n(419),b=n.n(c),u=n(436),p=37,m=39;function d(e){var t=e.block,n=e.centered,a=e.changeSelectedValue,o=e.className,i=e.handleKeydown,l=e.style,c=e.values,b=e.selectedValue,u=e.tabRefs;return r.a.createElement("div",{className:n?"tabs--centered":null},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",o,{"tabs--block":t}),style:l},c.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===t,className:s()("tab-item",{"tab-item--active":b===t}),key:t,ref:function(e){return u.push(e)},onKeyDown:function(e){return i(u,e.target,e)},onFocus:function(){return a(t)},onClick:function(){return a(t)}},n)}))))}function h(e){var t=e.placeholder,n=e.selectedValue,a=e.changeSelectedValue,o=e.size,l=e.values,s=l;if(s[0].group){var c=_.groupBy(s,"group");s=Object.keys(c).map((function(e){return{label:e,options:c[e]}}))}return r.a.createElement(i.a,{className:"react-select-container react-select--"+o,classNamePrefix:"react-select",options:s,isClearable:n,placeholder:t,value:l.find((function(e){return e.value==n})),onChange:function(e){return a(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,n=e.defaultValue,i=e.groupId,l=e.label,s=e.placeholder,c=e.select,O=e.size,v=(e.style,e.values),g=e.urlKey,j=Object(u.a)(),E=j.tabGroupChoices,y=j.setTabGroupChoices,f=Object(o.useState)(n),N=f[0],w=f[1];if(null!=i){var _=E[i];null!=_&&_!==N&&w(_)}var T=function(e){w(e),null!=i&&y(i,e)},R=[],A=function(e,t,n){switch(n.keyCode){case m:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}};return Object(o.useEffect)((function(){if("undefined"!=typeof window&&window.location&&g){var e=b.a.parse(window.location.search);e[g]&&w(e[g])}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"margin-bottom--"+(O||"md")},l&&r.a.createElement("div",{className:"margin-vert--sm"},l),v.length>1&&(c?r.a.createElement(h,Object(a.a)({changeSelectedValue:T,handleKeydown:A,placeholder:s,selectedValue:N,size:O,tabRefs:R},e)):r.a.createElement(d,Object(a.a)({changeSelectedValue:T,handleKeydown:A,selectedValue:N,tabRefs:R},e)))),o.Children.toArray(t).filter((function(e){return e.props.value===N}))[0])}}}]);
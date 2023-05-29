/*! For license information please see 94a00d4e.1385c182.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{313:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(1),r=t(9),i=(t(0),t(458)),o=(t(457),t(462),t(464),{last_modified_on:"2022-04-22",$schema:"/.meta/.schemas/guides.json",title:"Blazingly fast Preview Environments for NextJS, NodeJS, and MongoDB on AWS",description:"Blazingly fast Preview Environments for NextJS, NodeJS, and MongoDB on AWS",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial","cloud_provider: aws"],hide_pagination:!0}),l={categories:[{name:"tutorial",title:"Tutorial",description:"Step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Blazingly fast Preview Environments for NextJS, NodeJS, and MongoDB on AWS",description:"Blazingly fast Preview Environments for NextJS, NodeJS, and MongoDB on AWS",permalink:"/guides/tutorial/blazingly-fast-preview-environments-for-nextjs-nodejs-and-mongodb-on-aws",readingTime:"10 min read",source:"@site/guides/tutorial/blazingly-fast-preview-environments-for-nextjs-nodejs-and-mongodb-on-aws.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"cloud_provider: aws",permalink:"/guides/tags/cloud-provider-aws"}],title:"Blazingly fast Preview Environments for NextJS, NodeJS, and MongoDB on AWS",truncated:!1,prevItem:{title:"Debugging",permalink:"/guides/getting-started/debugging"},nextItem:{title:"Configure your Amazon Web Services account",permalink:"/guides/cloud-provider/guide-amazon-web-services"}},s=[{value:"Qovery Deployment Platform",id:"qovery-deployment-platform",children:[]},{value:"Previ1ew Environments",id:"previ1ew-environments",children:[]},{value:"Preview environments benefits",id:"preview-environments-benefits",children:[]},{value:"Demo",id:"demo",children:[{value:"AWS Infrastructure",id:"aws-infrastructure",children:[]},{value:"Full Stack Application",id:"full-stack-application",children:[]},{value:"Frontend",id:"frontend",children:[]},{value:"Backend",id:"backend",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Enable Preview Environments",id:"enable-preview-environments",children:[]},{value:"Testing Preview Environments",id:"testing-preview-environments",children:[]},{value:"Preview Environment Explained",id:"preview-environment-explained",children:[]},{value:"Testing Preview Environments PT II",id:"testing-preview-environments-pt-ii",children:[]},{value:"Conclusion",id:"conclusion",children:[]}]}],c={rightToc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"qovery-deployment-platform"},"Qovery Deployment Platform"),Object(i.b)("p",null,"Have you ever dreamed of deploying your applications on the cloud without any hassle? Imagine a platform where all you need to do is to sign in with your AWS credentials, and automagically the platform does all the hard work of configuration of the cloud for you, and, on top of that, provides some extra features that do not exist out of the box anywhere else."),Object(i.b)("p",null,"Qovery is this platform - not only does it allow you to deploy your infrastructure and applications on your own cloud account, but also provides extra cool features, one of which we will see in this article."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Don't take our words for granted - 14000 developers from more than 100 countries use Qovery to deploy their apps on AWS.")),Object(i.b)("h3",{id:"previ1ew-environments"},"Previ1ew Environments"),Object(i.b)("p",null,"Imagine working on a new feature. You're dealing with a full-stack application - you have a frontend, backend, and a database. You introduce a change to your backend app - how do you test all of it? It would be great if there was a service that could deploy everything for you so you can test your changes quickly and in separation with all the components..."),Object(i.b)("p",null,"Qovery Preview Environments are designed to help you with exactly this."),Object(i.b)("p",null,"It not only deploys the app you changed but all other related applications and databases as well in the cloud so that you can test your new features and collaborate with reviewers of your code."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-preview-envs/1.png",alt:"AWS Preview Environments"})),Object(i.b)("p",null,"Preview environments feature is available on other platforms as well. Vercel and Netlify allows you to test your changes before merging code into production. It\u2019s perfect for single frontend applications, but the concept of Preview Environments on Qovery goes far beyond this."),Object(i.b)("p",null,"Qovery is able not only to create a preview environment for your frontend, but also for the backend and databases - the whole stack is supported. Running a set of backend microservices? No worries, Qovery got you covered. All services will be replicated in the new environment."),Object(i.b)("h3",{id:"preview-environments-benefits"},"Preview environments benefits"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Time-saving")," - You don't have to set up a fresh environment to test changes in isolation - Qovery does it all for you"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Productivity")," - Faster changes, quicker review, better feedback loop - the productivity and quality of your application increases dramatically"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Better tests")," - It's best to test apps in isolation, but it's almost impossible with a complicated stack if you have to prepare the testing environment manually - Qovery does it all \"automagically\" for you"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Independence")," - Each environment is completely separate, meaning more people can work flawlessly on the project, testing the changes they introduce in parallel, not blocking each other"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Deliver quickly")," - Faster feedback loop, independent developers, fewer bugs, meaning the product is delivered more quickly"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Reduce friction")," - Waiting for others to test your changes is frustrating - with preview envs everyone has his own testing environment")),Object(i.b)("h2",{id:"demo"},"Demo"),Object(i.b)("h3",{id:"aws-infrastructure"},"AWS Infrastructure"),Object(i.b)("p",null,"Before we start with the deployments, we need to have our AWS infrastructure ready and deployed. It can be done as simply as by providing credentials to your cloud account, you can see how to configure the credentials in this article - ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.qovery.com/docs/using-qovery/configuration/cloud-service-provider/amazon-web-services/"}),"https://hub.qovery.com/docs/using-qovery/configuration/cloud-service-provider/amazon-web-services/")),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-preview-envs/2.png",alt:"AWS Preview Environments"})),Object(i.b)("p",null,"The initial setup takes about 15 min, and your cluster is ready to host your applications."),Object(i.b)("h3",{id:"full-stack-application"},"Full Stack Application"),Object(i.b)("p",null,"In this example, we will use a Next.js frontend, Node.js backend, and MongoDB as a database. The app will display an image gallery with images fetched from the backend. Preview Environments feature will help us introduce a new change in the backend - moving away from a hardcoded POC list of images to a list fetched from our database."),Object(i.b)("h3",{id:"frontend"},"Frontend"),Object(i.b)("p",null,"Our simple image gallery will look like this"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-preview-envs/3.png",alt:"AWS Preview Environments"})),Object(i.b)("p",null,"To generate the application, we used ",Object(i.b)("inlineCode",{parentName:"p"},"npx create-next-app@latest"),", but the source code can be found here - ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pjeziorowski/gallery-demo/tree/master/frontend"}),"https://github.com/pjeziorowski/gallery-demo/tree/master/frontend")),Object(i.b)("p",null,"The main changes introduced to the generated application scaffolding are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Adding a ",Object(i.b)("inlineCode",{parentName:"li"},"Dockerfile"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-docker"}),"FROM node:alpine\n\nRUN mkdir -p /usr/src\nWORKDIR /usr/src\n\nCOPY . /usr/src\nRUN npm install\nRUN npm run build\n\nEXPOSE 3000\nCMD npm run start\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Adding a query to our backend (which we will be built soon in the next steps) that fetches a list of images to display in our gallery"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'function useImages() {\n  return useQuery("images", async () => {\n    const { data } = await axios.get(\n      `${apiRoot}/api/v1/images`\n    );\n    return data;\n  });\n}\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Plus, we adjusted the HTML and styling for the demo purpose of showing a list of images"))),Object(i.b)("h3",{id:"backend"},"Backend"),Object(i.b)("p",null,"Our backend is the main star of the demo. In its first version, the backend is displaying a hardcoded list of images. In the next step, we will gradually expand its capabilities. It will connect to a database and fetch the list from MongoDB instead. To make sure the changes are correct, we will use ",Object(i.b)("inlineCode",{parentName:"p"},"Preview Environment")," feature before merging the pull request to our production environment"),Object(i.b)("p",null,"The backend was generated using Express ",Object(i.b)("inlineCode",{parentName:"p"},"npx express-generator --no-view"),", and the source code can be found here - ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pjeziorowski/gallery-demo/tree/master/frontend"}),"https://github.com/pjeziorowski/gallery-demo/tree/master/backend")),Object(i.b)("p",null,"Changes that we introduced to the generated app scaffolding are the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Adding a Dockerfile"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-docker"}),'FROM node:16\n\nWORKDIR /usr/src/app\n\nCOPY package*.json ./\nRUN npm install\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "src/index.js" ]\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Creating a ",Object(i.b)("inlineCode",{parentName:"p"},"/api/v1/images")," endpoint that returns a hardcoded array of images"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"router.get('/images', (req, res) => {\n    res.json([\n      {\n        title: 'IMG_4985.HEIC',\n        size: '3.9 MB',\n        source:\n            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',\n      }\n  });\n});\n")),Object(i.b)("p",{parentName:"li"},"  In the next step we will improve the function to use a Mongo database instead."))),Object(i.b)("h3",{id:"deployment"},"Deployment"),Object(i.b)("p",null,"After creating a new project, let's now set up our ",Object(i.b)("inlineCode",{parentName:"p"},"production")," environment."),Object(i.b)("p",null,"First, let's deploy our frontend. Click ",Object(i.b)("inlineCode",{parentName:"p"},"Add my first application"),", select a correct repository, ",Object(i.b)("inlineCode",{parentName:"p"},"Docker")," as build mode and expose port ",Object(i.b)("inlineCode",{parentName:"p"},"3000"),". The application root path is ",Object(i.b)("inlineCode",{parentName:"p"},"/frontend"),"."),Object(i.b)("p",null,"Next step: add a ",Object(i.b)("inlineCode",{parentName:"p"},"MongoDB")," database - it will be used by our backend later on. You can do so by clicking on ",Object(i.b)("inlineCode",{parentName:"p"},"Add")," button in Qovery Console in Environment."),Object(i.b)("p",null,"Now let's deploy our backend. Click ",Object(i.b)("inlineCode",{parentName:"p"},"Add")," \u2192 ",Object(i.b)("inlineCode",{parentName:"p"},"Application"),", pick up ",Object(i.b)("inlineCode",{parentName:"p"},"/backend")," as application root path, ",Object(i.b)("inlineCode",{parentName:"p"},"8080")," port, and ",Object(i.b)("inlineCode",{parentName:"p"},"Docker")," build mode."),Object(i.b)("p",null,"For the future connection to DB, let's add an alias named ",Object(i.b)("inlineCode",{parentName:"p"},"DATABASE_URL")," that points to our Mongo database internal URL in our backend ",Object(i.b)("inlineCode",{parentName:"p"},"Environment Variable")," settings:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-preview-envs/4.png",alt:"AWS Preview Environments"})),Object(i.b)("p",null,"Additionally, let's create an alias called ",Object(i.b)("inlineCode",{parentName:"p"},"API_ROOT")," in our frontend application that points to our backend external URL:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-preview-envs/5.png",alt:"AWS Preview Environments"})),Object(i.b)("p",null,"This is it! Now we can deploy our production environment. After a few minutes, navigate to the frontend app, click on ",Object(i.b)("inlineCode",{parentName:"p"},"Open")," - you should be redirected to the image gallery"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-preview-envs/6.png",alt:"AWS Preview Environments"})),Object(i.b)("h3",{id:"enable-preview-environments"},"Enable Preview Environments"),Object(i.b)("p",null,"The next step to see the preview environment feature in action is to enable it for our backend application."),Object(i.b)("p",null,"To do so, navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"Environment")," \u2192 ",Object(i.b)("inlineCode",{parentName:"p"},"Settings")," \u2192 ",Object(i.b)("inlineCode",{parentName:"p"},"Preview Env")," and tick it for the backend app"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-preview-envs/7.png",alt:"AWS Preview Environments"})),Object(i.b)("p",null,"Great! The feature is enabled. To see it in action, let's edit our code in the backend app so that the list of images is fetched from the database instead."),Object(i.b)("h3",{id:"testing-preview-environments"},"Testing Preview Environments"),Object(i.b)("p",null,"Let's make a small update of our backend - let's connect to MongoDB and fetch images from there. Here are changes to the function we could introduce to make it happen:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const databaseUrl = process.env.DATABASE_URL\n    || 'mongodb://localhost:27017/test';\n\nconst imageSchema = new mongoose.Schema({\n  title: String,\n  size: String,\n  source: String\n});\n\nmongoose.connect(databaseUrl);\n\nrouter.get('/', (req, res) => {\n  imageSchema.find().then((data) => {\n    res.json(\n      data\n    )\n  });\n});\n")),Object(i.b)("p",null,"Let's now create a new branch in our repository and create a pull request to our production (master branch) environment. Preview Environments feature will spin up a new environment for us so that we can safely test changes we just introduced!"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-preview-envs/8.png",alt:"AWS Preview Environments"})),Object(i.b)("p",null,"Once the PR is created, an automatic comment has been dropped on our PR to let us know that the new preview environment has been created."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-preview-envs/14.png",alt:"AWS Preview Environments"})),Object(i.b)("p",null,"Now, when we display environments in our project, we will see that a new environment for the pull request is being deployed:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-preview-envs/9.png",alt:"AWS Preview Environments"})),Object(i.b)("p",null,"with all the resources we need! A database, backend, frontend - we can now test our changes in complete separation from the production without any manual setting up work:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-preview-envs/10.png",alt:"AWS Preview Environments"})),Object(i.b)("h3",{id:"preview-environment-explained"},"Preview Environment Explained"),Object(i.b)("p",null,"The Preview Environment feature can be enabled or disabled per app. It creates a complete copy of your environment so that you can test new changes from pull requests in separation. It deploys your databases, backend, and frontend applications to a  completely new environment once a pull request is opened. If you update your pull request, all new changes are also reflected in the new environment so that you can test them or fix problems during the review. What is great is that Qovery takes care of managing all environment variables for you as well, creates new aliases just as you had in your prod environment, so that everything is really tested separately and it all happens automagically. After the pull request is merged, Qovery automatically cleans up the preview environment to save your money."),Object(i.b)("h3",{id:"testing-preview-environments-pt-ii"},"Testing Preview Environments PT II"),Object(i.b)("p",null,"After a few minutes, your preview environment should be up and running. You can now navigate to the frontend app and click ",Object(i.b)("inlineCode",{parentName:"p"},"Open")," - in the image gallery, you will see an empty list because we don't yet have any images in the database."),Object(i.b)("p",null,"You can add a few images manually by connecting to your mongo instance via CLI. The credentials can be found in the database overview:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-preview-envs/11.png",alt:"AWS Preview Environments"})),Object(i.b)("p",null,"After connecting, let's add images by executing the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"db.createCollection(\"images\")\n\ndb.images.insert([\n        {\n          title: 'IMG_4985.HEIC',\n          size: '3.9 MB',\n          source:\n              'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',\n        },\n        {\n          title: 'IMG_4985.HEIC',\n          size: '3.9 MB',\n          source:\n              'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',\n        },\n        {\n          title: 'IMG_4985.HEIC',\n          size: '3.9 MB',\n          source:\n              'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',\n        }\n      ])\n")),Object(i.b)("p",null,"Now, after opening the frontend app in our preview environment, we will see all the images we put in the database! It looks like the feature is working well, so let's merge the PR:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-preview-envs/12.png",alt:"AWS Preview Environments"})),Object(i.b)("p",null,"What now happens is automatically after the PR merge, the preview environment is automatically cleaned up:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-preview-envs/13.png",alt:"AWS Preview Environments"})),Object(i.b)("p",null,"Great job! Thanks to Qovery Preview Environments, we managed to develop a new feature in a complete separation from our production, we tested it in a real environment deployed in the cloud, and we didn't have to spend any time preparing our environment for tests at all."),Object(i.b)("h3",{id:"conclusion"},"Conclusion"),Object(i.b)("p",null,"In the article, we quickly went through the process of creating a full-stack application with frontend, backend, and database. We enabled the Preview Environment feature to develop new features more quickly. We learned what the benefits of Preview Environments are, how to use them, and how to integrate them to day to day development workflow."))}p.isMDXComponent=!0},456:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},457:function(e,n,t){"use strict";t(459);var a=t(0),r=t.n(a),i=t(456),o=t.n(i);t(132);n.a=function(e){var n=e.children,t=e.classNames,a=e.fill,i=e.icon,l=e.type,s=null;switch(l){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return r.a.createElement("div",{className:o()(t,"alert","alert--"+l,{"alert--fill":a,"alert--icon":!1!==i}),role:"alert"},!1!==i&&r.a.createElement("i",{className:o()("feather","icon-"+(i||s))}),n)}},458:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},u=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return t?r.a.createElement(m,l({ref:n},c,{components:t})):r.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},459:function(e,n,t){var a=t(12);a(a.P,"Array",{fill:t(463)}),t(74)("fill")},460:function(e,n,t){var a=t(26).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||t(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},461:function(e,n,t){"use strict";var a=t(1),r=t(0),i=t.n(r),o=t(39),l=t(465),s=t(20),c=t.n(s);n.a=function(e){var n,t=e.to,s=e.href,p=t||s,u=Object(l.a)(p),d=Object(r.useRef)(!1),b=c.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!b&&u&&window.docusaurus.prefetch(p),function(){b&&n&&n.disconnect()}}),[p,b,u]),p&&u?i.a.createElement(o.b,Object(a.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(p),d.current=!0)},innerRef:function(e){var t,a;b&&e&&u&&(t=e,a=function(){window.docusaurus.prefetch(p)},(n=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())}))}))).observe(t))},to:p})):i.a.createElement("a",Object(a.a)({},e,{href:p}))}},462:function(e,n,t){"use strict";t(460);var a=t(0),r=t.n(a),i=t(457);n.a=function(e){var n=e.children,t=e.name;return r.a.createElement(i.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",t||"page"," assumes the following:"),n)}},463:function(e,n,t){"use strict";var a=t(28),r=t(75),i=t(27);e.exports=function(e){for(var n=a(this),t=i(n.length),o=arguments.length,l=r(o>1?arguments[1]:void 0,t),s=o>2?arguments[2]:void 0,c=void 0===s?t:r(s,t);c>l;)n[l++]=e;return n}},464:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(461),o=t(456),l=t.n(o);t(133);n.a=function(e){var n=e.children,t=e.className,a=e.badge,o=e.leftIcon,s=e.rightIcon,c=e.size,p=e.target,u=e.to,d=l()("jump-to","jump-to--"+c,t),b=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},o&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+o})),r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",n),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return p?r.a.createElement("a",{href:u,target:p,className:d},b):r.a.createElement(i.a,{to:u,className:d},b)}},465:function(e,n,t){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}t.d(n,"a",(function(){return a}))}}]);
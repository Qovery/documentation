/*! For license information please see 5b95bed2.24bc6a08.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{257:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(1),r=t(9),o=(t(0),t(427)),i=t(426),s=(t(433),t(431),{last_modified_on:"2022-01-06",$schema:"/.meta/.schemas/guides.json",title:"How to Build a Cloud Version of Your Open Source Software - A Case Study with AppWrite - Part 3",description:"Open-source eat the world. More and more great open-source projects are used. One standard method to make those products financially sustainable is to provide a managed version. Meaning, you can enjoy using their product without the hassle of managing the product updates, the backups, the security, and the scaling. This guide will attempt to explain how to build a cloud-managed version of an open-source project.",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial","technology: qovery"],hide_pagination:!0}),c={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How to Build a Cloud Version of Your Open Source Software - A Case Study with AppWrite - Part 3",description:"Open-source eat the world. More and more great open-source projects are used. One standard method to make those products financially sustainable is to provide a managed version. Meaning, you can enjoy using their product without the hassle of managing the product updates, the backups, the security, and the scaling. This guide will attempt to explain how to build a cloud-managed version of an open-source project.",permalink:"/guides/tutorial/how-to-build-a-cloud-version-of-your-open-source-software-part-3",readingTime:"9 min read",source:"@site/guides/tutorial/how-to-build-a-cloud-version-of-your-open-source-software-part-3.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"How to Build a Cloud Version of Your Open Source Software - A Case Study with AppWrite - Part 3",truncated:!1,prevItem:{title:"How to Build a Cloud Version of Your Open Source Software - A Case Study with AppWrite - Part 2",permalink:"/guides/tutorial/how-to-build-a-cloud-version-of-your-open-source-software-part-2"},nextItem:{title:"How to connect to a managed MongoDB instance on AWS",permalink:"/guides/tutorial/how-to-connect-to-a-managed-mongodb-instance-on-aws"}},l=[{value:"Bootstrapping Frontend",id:"bootstrapping-frontend",children:[]},{value:"Connecting Backend",id:"connecting-backend",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],u={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(i.a,{type:"warning",mdxType:"Alert"},"We assume you are familiar with the previous parts of the AppWrite Cloud series."),Object(o.b)("p",null,"In this part of the series, we will go through the process of adding a web user interface to our AppWrite Cloud platform. We\u2019ll use the Next.js framework to create the frontend application, connect it to our AppWrite Cloud GraphQL API and deploy the app on top of Qovery."),Object(o.b)("h2",{id:"bootstrapping-frontend"},"Bootstrapping Frontend"),Object(o.b)("p",null,"In the first step, let\u2019s create a scaffolding to our frontend application:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn create next-app --example with-tailwindcss frontend\n")),Object(o.b)("p",null,"We use ",Object(o.b)("inlineCode",{parentName:"p"},"Tailwind")," for styling, so the command above bootstraps a ",Object(o.b)("inlineCode",{parentName:"p"},"Next.js")," app with TailwindCSS already set up."),Object(o.b)("p",null,"After the scaffolding is created, create a new remote Git repository on Github, Gitlab or Bitbucket with the application code."),Object(o.b)("p",null,"For building and deploying the app on Qovery, we\u2019ll use Docker - to dockerize the application please add a ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," with the following content:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# Install dependencies only when needed\nFROM node:alpine AS deps\n# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.\nRUN apk add --no-cache libc6-compat\nWORKDIR /app\nCOPY package.json yarn.lock ./\nRUN yarn install --frozen-lockfile\n\n# Rebuild the source code only when needed\nFROM node:alpine AS builder\nWORKDIR /app\nCOPY . .\nCOPY --from=deps /app/node_modules ./node_modules\nRUN yarn build && yarn install --production --ignore-scripts --prefer-offline\n\n# Production image, copy all the files and run next\nFROM node:alpine AS runner\nWORKDIR /app\n\nENV NODE_ENV production\n\nRUN addgroup -g 1001 -S nodejs\nRUN adduser -S nextjs -u 1001\n\n# You only need to copy next.config.js if you are NOT using the default configuration\n# COPY --from=builder /app/next.config.js ./\nCOPY --from=builder /app/public ./public\nCOPY --from=builder --chown=nextjs:nodejs /app/.next ./.next\nCOPY --from=builder /app/node_modules ./node_modules\nCOPY --from=builder /app/package.json ./package.json\n\nUSER nextjs\n\nEXPOSE 3000\n\n# Next.js collects completely anonymous telemetry data about general usage.\n# Learn more here: https://nextjs.org/telemetry\n# Uncomment the following line in case you want to disable telemetry.\n# ENV NEXT_TELEMETRY_DISABLED 1\n\nCMD ["yarn", "start"]\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," will let Qovery know how to build and run the application. After the Dockerfile is created, add a new application in the AppWrite Cloud project on Qovery with port ",Object(o.b)("inlineCode",{parentName:"p"},"3000")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Docker")," build mode:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/appwrite-3/1.png",alt:"AppWrite Qovery Case Study"})),Object(o.b)("p",null,"In the next step let\u2019s add a ",Object(o.b)("inlineCode",{parentName:"p"},"APPWRITE_GRAPHQL_BACKEND")," env variable that we will, later on, use in our frontend. This variable will be an alias to the location of our Hasura application, so we can access its GraphQL API:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/appwrite-3/2.png",alt:"AppWrite Qovery Case Study"})),Object(o.b)("h2",{id:"connecting-backend"},"Connecting Backend"),Object(o.b)("p",null,"Now to quickly deploy the app and test the integration, let\u2019s replace the content of ",Object(o.b)("inlineCode",{parentName:"p"},"index.tsx")," with the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import { Disclosure, Menu, Transition } from \'@headlessui/react\';\nimport { BellIcon, MenuIcon, XIcon } from \'@heroicons/react/outline\';\nimport axios from \'axios\';\nimport { Fragment, useState } from \'react\';\nimport { useMutation } from \'react-query\';\n\nconst anonymous = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLXVzZXItaWQiOiI1IiwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoiYW5vbnltb3VzIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJhbm9ueW1vdXMiXX0sImV4cCI6MTY2NjA3NzAwNn0.Op7qVJAlMm3O2p1sSTMueuTUoUJls1K4pdmiusaz1R0"\n\nconst user = {\n  name: \'Tom Cook\',\n  email: \'tom@example.com\',\n  imageUrl:\n    \'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80\',\n};\nconst navigation = [{ name: \'Dashboard\', href: \'#\', current: true }];\nconst userNavigation = [\n  { name: \'Your Profile\', href: \'#\' },\n  { name: \'Settings\', href: \'#\' },\n  { name: \'Sign out\', href: \'#\' },\n];\n\nfunction classNames(...classes) {\n  return classes.filter(Boolean).join(\' \');\n}\n\nexport default function Dashboard() {\n  return (\n      <div className="min-h-full">\n        <div className="bg-gray-800 pb-32">\n          <Disclosure as="nav" className="bg-gray-800">\n            {({ open }) => (\n              <>\n                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">\n                  <div className="border-b border-gray-700">\n                    <div className="flex items-center justify-between h-16 px-4 sm:px-0">\n                      <div className="flex items-center">\n                        <div className="flex-shrink-0">\n                          <img\n                            className="h-8 w-8"\n                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"\n                            alt="Workflow"\n                          />\n                        </div>\n                        <div className="hidden md:block">\n                          <div className="ml-10 flex items-baseline space-x-4">\n                            {navigation.map((item) => (\n                              <a\n                                key={item.name}\n                                href={item.href}\n                                className={classNames(\n                                  item.current\n                                    ? \'bg-gray-900 text-white\'\n                                    : \'text-gray-300 hover:bg-gray-700 hover:text-white\',\n                                  \'px-3 py-2 rounded-md text-sm font-medium\'\n                                )}\n                                aria-current={item.current ? \'page\' : undefined}\n                              >\n                                {item.name}\n                              </a>\n                            ))}\n                          </div>\n                        </div>\n                      </div>\n                      <div className="hidden md:block">\n                        <div className="ml-4 flex items-center md:ml-6">\n                          <button\n                            type="button"\n                            className="bg-gray-800 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"\n                          >\n                            <span className="sr-only">View notifications</span>\n                            <BellIcon className="h-6 w-6" aria-hidden="true" />\n                          </button>\n\n                          {/* Profile dropdown */}\n                          <Menu as="div" className="ml-3 relative">\n                            <div>\n                              <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">\n                                <span className="sr-only">Open user menu</span>\n                                <img\n                                  className="h-8 w-8 rounded-full"\n                                  src={user.imageUrl}\n                                  alt=""\n                                />\n                              </Menu.Button>\n                            </div>\n                            <Transition\n                              as={Fragment}\n                              enter="transition ease-out duration-100"\n                              enterFrom="transform opacity-0 scale-95"\n                              enterTo="transform opacity-100 scale-100"\n                              leave="transition ease-in duration-75"\n                              leaveFrom="transform opacity-100 scale-100"\n                              leaveTo="transform opacity-0 scale-95"\n                            >\n                              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">\n                                {userNavigation.map((item) => (\n                                  <Menu.Item key={item.name}>\n                                    {({ active }) => (\n                                      <a\n                                        href={item.href}\n                                        className={classNames(\n                                          active ? \'bg-gray-100\' : \'\',\n                                          \'block px-4 py-2 text-sm text-gray-700\'\n                                        )}\n                                      >\n                                        {item.name}\n                                      </a>\n                                    )}\n                                  </Menu.Item>\n                                ))}\n                              </Menu.Items>\n                            </Transition>\n                          </Menu>\n                        </div>\n                      </div>\n                      <div className="-mr-2 flex md:hidden">\n                        {/* Mobile menu button */}\n                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">\n                          <span className="sr-only">Open main menu</span>\n                          {open ? (\n                            <XIcon\n                              className="block h-6 w-6"\n                              aria-hidden="true"\n                            />\n                          ) : (\n                            <MenuIcon\n                              className="block h-6 w-6"\n                              aria-hidden="true"\n                            />\n                          )}\n                        </Disclosure.Button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <Disclosure.Panel className="border-b border-gray-700 md:hidden">\n                  <div className="px-2 py-3 space-y-1 sm:px-3">\n                    {navigation.map((item) => (\n                      <Disclosure.Button\n                        key={item.name}\n                        as="a"\n                        href={item.href}\n                        className={classNames(\n                          item.current\n                            ? \'bg-gray-900 text-white\'\n                            : \'text-gray-300 hover:bg-gray-700 hover:text-white\',\n                          \'block px-3 py-2 rounded-md text-base font-medium\'\n                        )}\n                        aria-current={item.current ? \'page\' : undefined}\n                      >\n                        {item.name}\n                      </Disclosure.Button>\n                    ))}\n                  </div>\n                  <div className="pt-4 pb-3 border-t border-gray-700">\n                    <div className="flex items-center px-5">\n                      <div className="flex-shrink-0">\n                        <img\n                          className="h-10 w-10 rounded-full"\n                          src={user.imageUrl}\n                          alt=""\n                        />\n                      </div>\n                      <div className="ml-3">\n                        <div className="text-base font-medium leading-none text-white">\n                          {user.name}\n                        </div>\n                        <div className="text-sm font-medium leading-none text-gray-400">\n                          {user.email}\n                        </div>\n                      </div>\n                      <button\n                        type="button"\n                        className="ml-auto bg-gray-800 flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"\n                      >\n                        <span className="sr-only">View notifications</span>\n                        <BellIcon className="h-6 w-6" aria-hidden="true" />\n                      </button>\n                    </div>\n                    <div className="mt-3 px-2 space-y-1">\n                      {userNavigation.map((item) => (\n                        <Disclosure.Button\n                          key={item.name}\n                          as="a"\n                          href={item.href}\n                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"\n                        >\n                          {item.name}\n                        </Disclosure.Button>\n                      ))}\n                    </div>\n                  </div>\n                </Disclosure.Panel>\n              </>\n            )}\n          </Disclosure>\n          <header className="py-10">\n            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n              <h1 className="text-3xl font-bold text-white">Dashboard</h1>\n            </div>\n          </header>\n        </div>\n\n        <main className="-mt-32">\n          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">\n            <Signup />\n            <Signin />\n            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">\n              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />\n            </div>\n          </div>\n        </main>\n      </div>\n    </>\n  );\n}\n\nconst Signin = (email, password) => {\n  const mutation = useMutation((event) => {\n    event.preventDefault();\n    return axios({\n      url: graphqlApiEndpoint,\n      method: \'post\',\n      headers: { \'Authorization\': \'Bearer \' + anonymous },\n      data: {\n        query: `\n          query Singin {\n            Singin(email: "${email}", password: "${password}") {\n              accessToken\n              }\n            }\n          `,\n      },\n    })\n  });\n  return <button onClick={(event) => mutation.mutate(event)}>Login</button>;\n};\n\nconst Signup = (email, password) => {\n  const mutation = useMutation((event) => {\n    event.preventDefault();\n    return axios({\n      url: graphqlApiEndpoint,\n      method: \'post\',\n      headers: { \'Authorization\': \'Bearer \' + anonymous },\n      data: {\n        query: `\n          query Signup {\n            Signup(email: "${email}", password: "${password}") {\n              accessToken\n              }\n            }\n          `,\n      },\n    })\n  });\n  return <button onClick={(event) => mutation.mutate(event)}>Signup</button>;\n};\n')),Object(o.b)("p",null,"This makes the skeleton of our UI:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/appwrite-3/3.png",alt:"AppWrite Qovery Case Study"})),Object(o.b)("p",null,"Clicking on the signup will send a test signup request to our backend - click ",Object(o.b)("inlineCode",{parentName:"p"},"Signup")," and see the response with an access token in the network tab of your browser:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/appwrite-3/4.png",alt:"AppWrite Qovery Case Study"})),Object(o.b)("p",null,"To send the request, we use the following piece of code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"axios({\n  url: graphqlApiEndpoint,\n  method: 'post',\n  headers: { Authorization: 'Bearer ' + anonymous },\n  data: {\n    query: `\n      mutation {\n        Signup(input: {email: \"${email}\", password: \"${password}\"}) {\n          accessToken\n          }\n        }\n      `,\n  },\n}\n")),Object(o.b)("p",null,"We use ",Object(o.b)("inlineCode",{parentName:"p"},"axios")," HTTP library to send a ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," request to our ",Object(o.b)("inlineCode",{parentName:"p"},"graphqlApiEndpoint")," (that uses the value of the environment variable we set previously) to run a GraphQL mutation that creates a new user with a given email and password in our AppWrite Cloud backend. In the response, we receive an access token that we can use in the name of the user to interact with the API."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"anonymous")," token sent in the request is a way to interact with unauthenticated endpoints in the Hasura backend."),Object(o.b)("p",null,"In the next step let\u2019s take care of the list of user projects:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const { isLoading, error, data } = useQuery('projects', () => {\n    return axios({\n      url: graphqlApiEndpoint,\n      method: 'POST',\n      headers: { Authorization: 'Bearer ' + token },\n      data: {\n        query: `query Projects {\n        project {\n          id\n          name\n          url\n        }\n      }\n      `,\n      },\n    });\n  });\n")),Object(o.b)("p",null,"In the snippet above, we use ",Object(o.b)("inlineCode",{parentName:"p"},"ReactQuery")," to manage the server state (store the info about the project client-side) and axios for performing the HTTP request. In the headers, we send users\u2019 ",Object(o.b)("inlineCode",{parentName:"p"},"accessToken"),", and the payload allows us to specify data that we are interested in about projects we have access to."),Object(o.b)("p",null,"The response from the query contains info we can use to render the list of AppWrite projects managed by AppWriteCloud:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/appwrite-3/5.png",alt:"AppWrite Qovery Case Study"})),Object(o.b)("p",null,"Now, to display it, add the following piece of code into our dashboard component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'{appwriteProjects.map((project) => (\n<div\n  key={project.id}\n  className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"\n>\n  <div className="flex-1 min-w-0">\n    <a href="#" className="focus:outline-none">\n      <span\n        className="absolute inset-0"\n        aria-hidden="true"\n      />\n      <p className="text-sm font-medium text-gray-900">\n        {project.name}\n      </p>\n      <a\n        href={project.url}\n        className="text-sm text-gray-500 truncate hover:text-lg"\n      >\n        {project.url}\n      </a>\n    </a>\n  </div>\n</div>\n))}\n')),Object(o.b)("p",null,"This should allow us to display a list of user\u2019s projects in the dashboard like this:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/appwrite-3/6.png",alt:"AppWrite Qovery Case Study"})),Object(o.b)("p",null,"After improving the sign in form (see the whole code repository ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pjeziorowski/appwrite-ui"}),"here"),", the whole flow should now look like this:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/appwrite-3/7.gif",alt:"AppWrite Qovery Case Study"})),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"In this article, we bootstrapped a frontend application and added it to our app write cloud. We created the first version of our frontend that makes use of React, Next.js, ReactQuery and Tailwind. The UI is integrated with our backend GraphQL API that is deployed on Qovery and allows us to manage AppWrite projects deployed on AWS for AppWrite Cloud clients."))}p.isMDXComponent=!0},425:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var s in a)t.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},426:function(e,n,t){"use strict";t(429);var a=t(0),r=t.n(a),o=t(425),i=t.n(o);t(131);n.a=function(e){var n=e.children,t=e.classNames,a=e.fill,o=e.icon,s=e.type,c=null;switch(s){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:i()(t,"alert","alert--"+s,{"alert--fill":a,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:i()("feather","icon-"+(o||c))}),n)}},427:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},p=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?r.a.createElement(b,s({ref:n},l,{components:t})):r.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},428:function(e,n,t){"use strict";var a=t(1),r=t(0),o=t.n(r),i=t(39),s=t(432),c=t(19),l=t.n(c);n.a=function(e){var n,t=e.to,c=e.href,u=t||c,p=Object(s.a)(u),d=Object(r.useRef)(!1),m=l.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!m&&p&&window.docusaurus.prefetch(u),function(){m&&n&&n.disconnect()}}),[u,m,p]),u&&p?o.a.createElement(i.b,Object(a.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(u),d.current=!0)},innerRef:function(e){var t,a;m&&e&&p&&(t=e,a=function(){window.docusaurus.prefetch(u)},(n=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())}))}))).observe(t))},to:u})):o.a.createElement("a",Object(a.a)({},e,{href:u}))}},429:function(e,n,t){var a=t(12);a(a.P,"Array",{fill:t(434)}),t(74)("fill")},430:function(e,n,t){var a=t(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||t(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},431:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(428),i=t(425),s=t.n(i);t(132);n.a=function(e){var n=e.children,t=e.className,a=e.badge,i=e.leftIcon,c=e.rightIcon,l=e.size,u=e.target,p=e.to,d=s()("jump-to","jump-to--"+l,t),m=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},i&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+i})),r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",n),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return u?r.a.createElement("a",{href:p,target:u,className:d},m):r.a.createElement(o.a,{to:p,className:d},m)}},432:function(e,n,t){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}t.d(n,"a",(function(){return a}))},433:function(e,n,t){"use strict";t(430);var a=t(0),r=t.n(a),o=t(426);n.a=function(e){var n=e.children,t=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",t||"page"," assumes the following:"),n)}},434:function(e,n,t){"use strict";var a=t(27),r=t(75),o=t(26);e.exports=function(e){for(var n=a(this),t=o(n.length),i=arguments.length,s=r(i>1?arguments[1]:void 0,t),c=i>2?arguments[2]:void 0,l=void 0===c?t:r(c,t);l>s;)n[s++]=e;return n}}}]);
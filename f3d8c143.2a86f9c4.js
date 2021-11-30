/*! For license information please see f3d8c143.2a86f9c4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{389:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return u})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return p}));var n=o(1),r=o(9),a=(o(0),o(405)),i=o(404),l={last_modified_on:"2021-09-22",$schema:"/.meta/.schemas/guides.json",title:"Working with Git Submodules",description:"How to use Git Submodules on Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial","technology: qovery"],hide_pagination:!0},u={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Working with Git Submodules",description:"How to use Git Submodules on Qovery",permalink:"/guides/tutorial/working-with-git-submodules",readingTime:"2 min read",source:"@site/guides/tutorial/working-with-git-submodules.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Working with Git Submodules",truncated:!1,prevItem:{title:"Using Amazon SQS and Lambda on Qovery",permalink:"/guides/tutorial/aws-sqs-lambda-with-qovery"},nextItem:{title:"Zero to Hero - How to deploy your apps on AWS in 30 minutes",permalink:"/guides/tutorial/how-to-deploy-your-application-on-aws-in-30-minutes"}},s=[{value:"Example",id:"example",children:[]},{value:"Limitations",id:"limitations",children:[]}],c={rightToc:s};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Some applications use ",Object(a.b)("strong",{parentName:"p"},"Git Submodules")," to resolve their dependencies. Git submodules are a feature of the Git SCM that allow you to include the files of one Git repository into another.\nThis short guide will explain how to use Git Submodules on Qovery."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("p",null,"To include the ",Object(a.b)("strong",{parentName:"p"},"Foo")," source code into the ",Object(a.b)("strong",{parentName:"p"},"Bar")," project, use the following commands:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ cd ~/code/Bar\n\n$ git submodule add https://github.com/myusername/Foo somefolder/Foo\nCloning into 'somefolder/Foo'...\nremote: Counting objects: 26, done.\nremote: Compressing objects: 100% (17/17), done.\nremote: Total 26 (delta 8), reused 19 (delta 5)\nUnpacking objects: 100% (26/26), done.\n")),Object(a.b)("p",null,"This would create a new submodule called ",Object(a.b)("strong",{parentName:"p"},"Foo")," and place ",Object(a.b)("strong",{parentName:"p"},"Foo")," code into ",Object(a.b)("strong",{parentName:"p"},"somefolder/Foo")," directory of ",Object(a.b)("strong",{parentName:"p"},"Bar")," app."),Object(a.b)("p",null,"After a Git Submodule is added locally, you need to commit it to your app repository:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'$ git commit -am "adding a submodule"\n[master 314ef62] adding a submodule\n2 files changed, 4 insertions(+)\n')),Object(a.b)("p",null,"Committed submodule source code can be used by your application and is available in Qovery CI/CD build/deployment pipeline."),Object(a.b)("h3",{id:"limitations"},"Limitations"),Object(a.b)("h4",{id:"private-submodules"},"Private Submodules"),Object(a.b)("p",null,"Qovery does not have access to locally available credentials, so if you want to use some way of authentication, the only available\nway as of now is to use HTTP basic authentication URL scheme:"),Object(a.b)(i.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"Note the embedded credentials in the URL")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ git submodule add https://username:password@github.com/myusername/FooBar\n")),Object(a.b)("p",null,"This adds a private Git Submodule to the application while still allowing it to resolve in non-local environments."),Object(a.b)(i.a,{type:"warning",mdxType:"Alert"},Object(a.b)("p",null,"This solution is not recommended to be used by inexprienced users.\nSince the credentials are stored in plaintext in the ",Object(a.b)("inlineCode",{parentName:"p"},".git/submodules")," directory, you need to consider if it meets your security requirements.")),Object(a.b)("h4",{id:"ssh--git-protocol-submodules"},"SSH / Git protocol Submodules"),Object(a.b)("p",null,"At the moment, SSH or Git submodules are not supported. If you want to use a submodule, please make sure you use HTTPS (check the content of the ",Object(a.b)("inlineCode",{parentName:"p"},".git/submodules")," file)."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Not")," supported - SSH:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'[submodule "path/to/module"]\n    url = ssh://user/repo\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Not")," supported - Git:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'[submodule "path/to/module"]\n    url = git://github.com/torvalds/linux.git\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Supported")," - HTTPS:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'[submodule "path/to/module"]\n    url = https://github.com/myusername/FooBar\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Supported")," - HTTPS with embedded basic authentication:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'[submodule "path/to/module"]\n    url = https://username:password@github.com/myusername/FooBar\n')))}p.isMDXComponent=!0},403:function(e,t,o){var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===a)for(var l in n)o.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},404:function(e,t,o){"use strict";o(407);var n=o(0),r=o.n(n),a=o(403),i=o.n(a);o(131);t.a=function(e){var t=e.children,o=e.classNames,n=e.fill,a=e.icon,l=e.type,u=null;switch(l){case"danger":u="alert-triangle";break;case"success":u="check-circle";break;case"warning":u="alert-triangle";break;default:u="info"}return r.a.createElement("div",{className:i()(o,"alert","alert--"+l,{"alert--fill":n,"alert--icon":!1!==a}),role:"alert"},!1!==a&&r.a.createElement("i",{className:i()("feather","icon-"+(a||u))}),t)}},405:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return m}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l({},t,{},e)),o},p=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(o),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return o?r.a.createElement(m,l({ref:t},s,{components:o})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},407:function(e,t,o){var n=o(12);n(n.P,"Array",{fill:o(412)}),o(74)("fill")},412:function(e,t,o){"use strict";var n=o(27),r=o(75),a=o(26);e.exports=function(e){for(var t=n(this),o=a(t.length),i=arguments.length,l=r(i>1?arguments[1]:void 0,o),u=i>2?arguments[2]:void 0,s=void 0===u?o:r(u,o);s>l;)t[l++]=e;return t}}}]);
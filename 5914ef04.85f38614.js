(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{258:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(9),i=(n(0),n(434)),a={last_modified_on:"2022-02-24",title:"Qovery CI",description:"Learn how to configure the Qovery CI"},c={id:"using-qovery/integration/continuous-integration/qovery-ci",title:"Qovery CI",description:"Learn how to configure the Qovery CI",source:"@site/docs/using-qovery/integration/continuous-integration/qovery-ci.md",permalink:"/docs/using-qovery/integration/continuous-integration/qovery-ci",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/integration/continuous-integration/qovery-ci.md",sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/docs/using-qovery/integration/continuous-integration"},next:{title:"GitHub Actions",permalink:"/docs/using-qovery/integration/continuous-integration/github-actions"}},u=[{value:"Performance",id:"performance",children:[]},{value:"Instances",id:"instances",children:[]}],s={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Qovery CI use your regular Dockerfile to build and test your application."),Object(i.b)("h3",{id:"performance"},"Performance"),Object(i.b)("p",null,"You can tune the performance of your Qovery CI through the web interface. The main attributes that you can tune are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the number of ",Object(i.b)("strong",{parentName:"li"},"CPUs"),". Default: 1 CPU"),Object(i.b)("li",{parentName:"ul"},"the total ",Object(i.b)("strong",{parentName:"li"},"RAM"),". Default: 2 GB")),Object(i.b)("p",null,"Which is enough for most applications."),Object(i.b)("h3",{id:"instances"},"Instances"),Object(i.b)("p",null,'The number of Qovery CI instances is auto-scaled, depending on the number of tasks queued. The limit is to 50 Qovery CI instances per Kubernetes cluster. Each instance runs only a single "task" at the same time.'))}l.isMDXComponent=!0},434:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,y=p["".concat(a,".").concat(b)]||p[b]||f[b]||i;return n?o.a.createElement(y,c({ref:t},s,{components:n})):o.a.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
/*! For license information please see c4f5d8e4.dbababc6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{370:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(466),c=a(463),o=a(567);Object(l.a)("h2");t.default=function(){return r.a.createElement(c.a,{title:"Hub | Qovery Documentation, Guides, Tutorials",description:"Qovery is the simplest way to deploy your full-stack apps in the Cloud"},r.a.createElement("header",{className:"hero"},r.a.createElement("div",{className:"container container--fluid"},r.a.createElement("h1",null,"Qovery Hub Resources"),r.a.createElement(o.a,{buttonClass:"highlight",description:"Qovery is the simplest way to deploy your full-stack apps in the Cloud",center:!0,size:"lg"}))),r.a.createElement("main",null,r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"docs",className:"panel panel--link text--center"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-book"})),r.a.createElement("div",{className:"panel--title"},"Documentation"),r.a.createElement("div",{className:"panel--description"},"Read our product documentation"))),r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"guides",className:"panel panel--link text--center"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-layers"})),r.a.createElement("div",{className:"panel--title"},"Guides"),r.a.createElement("div",{className:"panel--description"},"Get started using Qovery smoothly"))),r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"guides/tutorial",className:"panel panel--link text--center"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-bookmark"})),r.a.createElement("div",{className:"panel--title"},"Tutorials"),r.a.createElement("div",{className:"panel--description"},"Check out our community tutorials"))))),r.a.createElement("div",{className:"container",style:{marginTop:"10px"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"https://discord.qovery.com",target:"_blank",className:"panel panel--link text--center"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-message-circle"})),r.a.createElement("div",{className:"panel--title"},"Discord"),r.a.createElement("div",{className:"panel--description"},"Join our community on Discord"))),r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"https://roadmap.qovery.com",target:"_blank",className:"panel panel--link text--center"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-flag"})),r.a.createElement("div",{className:"panel--title"},"Roadmap"),r.a.createElement("div",{className:"panel--description"},"Check out our public Roadmap"))),r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"https://discuss.qovery.com",target:"_blank",className:"panel panel--link text--center"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-message-circle"})),r.a.createElement("div",{className:"panel--title"},"Forum"),r.a.createElement("div",{className:"panel--description"},"Join our community on Discourse"))),r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"https://github.com/Qovery",target:"_blank",className:"panel panel--link text--center"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-github"})),r.a.createElement("div",{className:"panel--title"},"Github"),r.a.createElement("div",{className:"panel--description"},"Issues, code, and development"))))))))}},439:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},463:function(e,t,a){"use strict";a(473);var n=a(0),r=a.n(n),l=a(474),c=a(462),o=a(1),i=(a(464),a(465),a(475),a(442)),s=a(476),m=a(460),u=a.n(m),d=a(477),f=a.n(d),p=a(452),h=a(439),g=a.n(h),v=a(134),b=a.n(v),E=function(){return r.a.createElement("span",{className:g()(b.a.toggle,b.a.moon)})},y=function(){return r.a.createElement("span",{className:g()(b.a.toggle,b.a.sun)})},N=function(e){var t=Object(p.a)().isClient;return r.a.createElement(f.a,Object(o.a)({disabled:!t,icons:{checked:r.a.createElement(E,null),unchecked:r.a.createElement(y,null)}},e))};function w(){var e=Object(p.a)().siteConfig,t=(void 0===e?{}:e).customFields.metadata.latest_post,a=Date.parse(t.date),n=new Date,r=Math.abs(n-a),l=Math.ceil(r/864e5),c=null;return"undefined"!=typeof window&&(c=new Date(parseInt(window.localStorage.getItem("blogViewedAt")||"0"))),l<30&&(!c||c<a)?t:null}function k(){var e=Object(p.a)().siteConfig,t=(void 0===e?{}:e).customFields.metadata.latest_release,a=Date.parse(t.date),n=new Date,r=Math.abs(n-a),l=Math.ceil(r/864e5),c=null;return"undefined"!=typeof window&&(c=new Date(parseInt(window.localStorage.getItem("releaseViewedAt")||"0"))),l<30&&(!c||c<a)?t:null}var _=a(457),O=a(480),j=a(468),C=a(469),x=a(461),T=a(135),A=a.n(T);function S(e){var t=e.href,a=e.hideIcon,n=e.label,l=e.onClick,c=(e.position,e.right),s=e.to,m=function(e,t){var a={label:e};switch(e.toLowerCase()){case"blog":return w()&&(a.badge="new",a.badgeStyle="primary"),a;case"chat":return a.hideText=1==t,a.icon="message-circle",a;case"community":return a.hideText=1==t,a.icon="users",a;case"download":var n=k();return a.hideText=1==t,a.icon="download",n&&(a.badge="new",a.badgeStyle="primary"),a;case"github":return a.badge="",a.hideText=!0,a.icon="github",a;default:return a}}(n,c)||{},u=Object(_.a)(s),d="undefined"!=typeof window&&(window.location.pathname.includes("/tutorial")||window.location.pathname.includes("/engineering"))&&"/guides/"===u?"navbar__link":"navbar__link--active";return r.a.createElement(i.a,Object(o.a)({className:g()("navbar__item navbar__link",m.className),title:m.hideText?n:null,onClick:l},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:d,to:u}),!a&&m.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"feather icon-"+m.icon})," ",m.iconLabel),!m.hideText&&m.label,m.badge&&r.a.createElement("span",{className:g()("badge","badge--"+(m.badgeStyle||"secondary"))},m.badge))}var D=function(){var e,t=Object(p.a)(),a=t.siteConfig.themeConfig,l=a.navbar,c=(l=void 0===l?{}:l).title,m=l.links,d=void 0===m?[]:m,f=l.hideOnScroll,h=void 0!==f&&f,v=a.disableDarkMode,b=void 0!==v&&v,E=(t.isClient,Object(n.useState)(!1)),y=E[0],w=E[1],k=Object(n.useState)(!1),_=k[0],T=k[1],D=Object(x.a)(),L=D.isDarkTheme,I=D.setLightTheme,M=D.setDarkTheme,z=Object(O.a)(h),Q=z.navbarRef,q=z.isNavbarVisible,R=Object(C.a)(),G=R.logoLink,Z=R.logoLinkProps,B=R.logoImageUrl,F=R.logoAlt;Object(j.a)(y);var J=Object(n.useCallback)((function(){w(!0)}),[w]),P=Object(n.useCallback)((function(){w(!1)}),[w]),$=Object(n.useCallback)((function(e){return e.target.checked?M():I()}),[I,M]);return r.a.createElement("nav",{ref:Q,className:g()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":y},e[A.a.navbarHideable]=h,e[A.a.navbarHidden]=!q,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:J,onKeyDown:J},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(i.a,Object(o.a)({className:"navbar__brand",to:G},Z),null!=B&&r.a.createElement(u.a,{className:"navbar__logo",src:B,alt:F}),null!=c&&r.a.createElement("strong",{className:_?A.a.hideLogoText:""},c)),d.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(S,Object(o.a)({},e,{left:!0,key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},d.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(S,Object(o.a)({},e,{right:!0,key:t}))})),!b&&r.a.createElement(N,{className:A.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:L,onChange:$}),r.a.createElement(s.a,{handleSearchBarToggle:T,isSearchBarExpanded:_}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:P}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(i.a,Object(o.a)({className:"navbar__brand",onClick:P,to:G},Z),null!=B&&r.a.createElement(u.a,{className:"navbar__logo",src:B,alt:F}),null!=c&&r.a.createElement("strong",null,c)),!b&&y&&r.a.createElement(N,{"aria-label":"Dark mode toggle in sidebar",checked:L,onChange:$})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},d.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(S,Object(o.a)({className:"menu__link"},e,{hideIcon:!0,onClick:P})))})))))))},L=a(9),I=a(136),M=a.n(I);function z(e){var t=e.to,a=e.href,n=e.label,l=Object(L.a)(e,["to","href","label"]),c=Object(_.a)(t);return r.a.createElement(i.a,Object(o.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:c},l),n)}var Q=function(e){var t=e.url,a=e.alt;return r.a.createElement(u.a,{className:"footer__logo",alt:a,src:t})};var q=function(){var e=Object(p.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=Object(x.a)().isDarkTheme,l=a||{},c=l.copyright,o=l.links,i=void 0===o?[]:o,s=l.logo,m=void 0===s?{}:s,d=Object(_.a)(m.src);if(!a)return null;var f="/img/logo-light.svg";return n&&(f="/img/logo-dark.svg"),r.a.createElement("footer",{className:g()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(u.a,{className:"navbar__logo",src:f,alt:"Qovery",width:"150",height:"auto"})),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement("p",null,"Qovery is the Next-Gen DevOps Platform to Build and Scale Your Apps on AWS")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/qovery",target:"_blank"},r.a.createElement("i",{className:"feather icon-github",alt:"Qovery's Github Repo"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://www.linkedin.com/company/qovery/",target:"_blank"},r.a.createElement("i",{className:"feather icon-rss",alt:"Qovery's Linkedin"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://twitter.com/qovery_",target:"_blank"},r.a.createElement("i",{className:"feather icon-twitter",alt:"Qovery's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://discord.qovery.com",target:"_blank"},r.a.createElement("i",{className:"feather icon-message-circle",alt:"Qovery's Discord"})))),i.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(z,e))}))):null)}))),(m||c)&&r.a.createElement("div",{className:"text--center"},m&&m.src&&r.a.createElement("div",{className:"margin-bottom--sm"},m.href?r.a.createElement("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:M.a.footerLogoLink},r.a.createElement(Q,{alt:m.alt,url:d})):r.a.createElement(Q,{alt:m.alt,url:d})),r.a.createElement("small",null,c),r.a.createElement("br",null))))},R=a(478),G=a(479),Z=a(3);a(137);t.a=function(e){var t=Object(p.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,o=(a.tagline,a.title),i=a.themeConfig.image,s=a.url,m=e.children,u=e.title,d=e.noFooter,f=e.description,h=e.image,g=e.keywords,v=(e.permalink,e.version),b=u?u+" | "+o:o,E=h||i,y=s+Object(_.a)(E),N=Object(_.a)(n),w=Object(Z.h)(),k=w?"https://docs.qovery.com"+(w.pathname.endsWith("/")?w.pathname:w.pathname+"/"):null;return r.a.createElement(G.a,null,r.a.createElement(R.a,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),b&&r.a.createElement("title",null,b),b&&r.a.createElement("meta",{property:"og:title",content:b}),n&&r.a.createElement("link",{rel:"shortcut icon",href:N}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),v&&r.a.createElement("meta",{name:"docsearch:version",content:v}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),E&&r.a.createElement("meta",{property:"og:image",content:y}),E&&r.a.createElement("meta",{property:"twitter:image",content:y}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+b}),k&&r.a.createElement("meta",{property:"og:url",content:k}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),k&&r.a.createElement("link",{rel:"canonical",href:k})),r.a.createElement(l.a,null),r.a.createElement(D,null),r.a.createElement("div",{className:"main-wrapper"},m),!d&&r.a.createElement(q,null)))}},466:function(e,t,a){"use strict";var n=a(9),r=a(0),l=a.n(r),c=a(439),o=a.n(c),i=a(452),s=(a(138),a(139)),m=a.n(s);t.a=function(e){return function(t){var a,r=t.id,c=Object(n.a)(t,["id"]),s=Object(i.a)().siteConfig,u=(s=void 0===s?{}:s).themeConfig,d=(u=void 0===u?{}:u).navbar,f=(d=void 0===d?{}:d).hideOnScroll,p=void 0!==f&&f;return r?l.a.createElement(e,c,l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:o()("anchor",(a={},a[m.a.enhancedAnchor]=!p,a)),id:r}),l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#"),c.children):l.a.createElement(e,c)}}},470:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},493:function(e,t){var a,n,r=e.exports={};function l(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function o(e){if(a===setTimeout)return setTimeout(e,0);if((a===l||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:l}catch(e){a=l}try{n="function"==typeof clearTimeout?clearTimeout:c}catch(e){n=c}}();var i,s=[],m=!1,u=-1;function d(){m&&i&&(m=!1,i.length?s=i.concat(s):u=-1,s.length&&f())}function f(){if(!m){var e=o(d);m=!0;for(var t=s.length;t;){for(i=s,s=[];++u<t;)i&&i[u].run();u=-1,t=s.length}i=null,m=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===c||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];s.push(new p(e,t)),1!==s.length||m||o(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},559:function(e,t,a){var n=a(560)("jsonp");e.exports=function(e,t,a){"function"==typeof t&&(a=t,t={});t||(t={});var c,o,i=t.prefix||"__jp",s=t.name||i+r++,m=t.param||"callback",u=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;u&&(o=setTimeout((function(){p(),a&&a(new Error("Timeout"))}),u));function p(){c.parentNode&&c.parentNode.removeChild(c),window[s]=l,o&&clearTimeout(o)}return window[s]=function(e){n("jsonp got",e),p(),a&&a(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+m+"="+d(s)).replace("?&","?"),n('jsonp req "%s"',e),(c=document.createElement("script")).src=e,f.parentNode.insertBefore(c,f),function(){window[s]&&p()}};var r=0;function l(){}},560:function(e,t,a){(function(n){function r(){var e;try{e=t.storage.debug}catch(a){}return!e&&void 0!==n&&"env"in n&&(e=n.env.DEBUG),e}(t=e.exports=a(561)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var a=this.useColors;if(e[0]=(a?"%c":"")+this.namespace+(a?" %c":" ")+e[0]+(a?"%c ":" ")+"+"+t.humanize(this.diff),!a)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var r=0,l=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(l=r))})),e.splice(l,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(a){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())}).call(this,a(493))},561:function(e,t,a){var n;function r(e){function a(){if(a.enabled){var e=a,r=+new Date,l=r-(n||r);e.diff=l,e.prev=n,e.curr=r,n=r;for(var c=new Array(arguments.length),o=0;o<c.length;o++)c[o]=arguments[o];c[0]=t.coerce(c[0]),"string"!=typeof c[0]&&c.unshift("%O");var i=0;c[0]=c[0].replace(/%([a-zA-Z%])/g,(function(a,n){if("%%"===a)return a;i++;var r=t.formatters[n];if("function"==typeof r){var l=c[i];a=r.call(e,l),c.splice(i,1),i--}return a})),t.formatArgs.call(e,c);var s=a.log||t.log||console.log.bind(console);s.apply(e,c)}}return a.namespace=e,a.enabled=t.enabled(e),a.useColors=t.useColors(),a.color=function(e){var a,n=0;for(a in e)n=(n<<5)-n+e.charCodeAt(a),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(a),a}(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var a=("string"==typeof e?e:"").split(/[\s,]+/),n=a.length,r=0;r<n;r++)a[r]&&("-"===(e=a[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var a,n;for(a=0,n=t.skips.length;a<n;a++)if(t.skips[a].test(e))return!1;for(a=0,n=t.names.length;a<n;a++)if(t.names[a].test(e))return!0;return!1},t.humanize=a(562),t.names=[],t.skips=[],t.formatters={}},562:function(e,t){var a=1e3,n=6e4,r=60*n,l=24*r;function c(e,t,a){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+a:Math.ceil(e/t)+" "+a+"s"}e.exports=function(e,t){t=t||{};var o,i=typeof e;if("string"===i&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var c=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*c;case"days":case"day":case"d":return c*l;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===i&&!1===isNaN(e))return t.long?c(o=e,l,"day")||c(o,r,"hour")||c(o,n,"minute")||c(o,a,"second")||o+" ms":function(e){if(e>=l)return Math.round(e/l)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=a)return Math.round(e/a)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},563:function(e,t,a){"use strict";var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!n.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},567:function(e,t,a){"use strict";a(464),a(465);var n=a(0),r=a.n(n),l=a(439),c=a.n(l),o=(a(58),a(20),a(559)),i=a.n(o),s=a(563),m=function(e){return new Promise((function(t,a){return i()(e,{param:"c",timeout:3500},(function(e,n){e&&a(e),n&&t(n)}))}))},u=function(e){var t="";for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n="group["===a.substring(0,6)?a:a.toUpperCase();t=t.concat("&"+n+"="+e[a])}return t},d=function(e,t,a){var n=Object(s.validate)(e),r=encodeURIComponent(e);if(!n)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var l="https://qovery.us4.list-manage.com/subscribe/post-json?u=3c76e7a2087d5bc4020348c46&amp;id=63bd993879";arguments.length<3&&"string"==typeof t?l=t:"string"==typeof a&&(l=a);var c="&EMAIL="+r+u(t),o=""+l+c;return m(o)};a(151),t.a=function(e){var t,a=e.block,l=e.buttonClass,o=e.center,i=e.description,s=e.subscriptionEnabled,m=e.size,u=e.width,f=Object(n.useState)(""),p=f[0],h=f[1],g=Object(n.useState)(!1),v=g[0],b=g[1],E=Object(n.useState)(!1),y=E[0],N=E[1],w=Object(n.useState)("Could not subscribe :("),k=w[0],_=w[1];return r.a.createElement("div",{className:c()("mailing-list",(t={"mailing-list--block":a,"mailing-list--center":o},t["mailing-list--"+m]=m,t))},!1!==i&&r.a.createElement("div",{className:"mailing-list--description"},i),s&&!v&&r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),d(p).then((function(e){"success"===e.result?(b(!0),y&&N(!1)):(N(!0),e.msg.includes(p+" is already subscribed")?_("This email is already subscribed to the newsletter"):_("Could not subscribe :("))})).catch((function(e){N(!0)}))}(e)},className:c()("mailing-list--form")},r.a.createElement("input",{onChange:function(e){return h(e.target.value)},className:c()("input","input--"+m),name:"email",placeholder:"you@email.com",type:"email",style:{width:u}}),r.a.createElement("button",{className:c()("button","button--"+(l||"primary"),"button--"+m),type:"submit"},"Subscribe")),y&&r.a.createElement("span",{className:"badge badge--secondary"},k),r.a.createElement("div",{style:{textAlign:"center"}},s&&v&&r.a.createElement("span",{className:"badge badge--primary"},"Subscribed!")))}}}]);
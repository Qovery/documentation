/*! For license information please see 287.8d9fed1e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{439:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var o in n)t.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},463:function(e,a,t){"use strict";t(473);var n=t(0),r=t.n(n),l=t(474),c=t(462),o=t(1),i=(t(464),t(465),t(475),t(442)),s=t(476),m=t(460),u=t.n(m),d=t(477),b=t.n(d),g=t(452),h=t(439),v=t.n(h),f=t(134),E=t.n(f),p=function(){return r.a.createElement("span",{className:v()(E.a.toggle,E.a.moon)})},_=function(){return r.a.createElement("span",{className:v()(E.a.toggle,E.a.sun)})},k=function(e){var a=Object(g.a)().isClient;return r.a.createElement(b.a,Object(o.a)({disabled:!a,icons:{checked:r.a.createElement(p,null),unchecked:r.a.createElement(_,null)}},e))};function w(){var e=Object(g.a)().siteConfig,a=(void 0===e?{}:e).customFields.metadata.latest_post,t=Date.parse(a.date),n=new Date,r=Math.abs(n-t),l=Math.ceil(r/864e5),c=null;return"undefined"!=typeof window&&(c=new Date(parseInt(window.localStorage.getItem("blogViewedAt")||"0"))),l<30&&(!c||c<t)?a:null}function N(){var e=Object(g.a)().siteConfig,a=(void 0===e?{}:e).customFields.metadata.latest_release,t=Date.parse(a.date),n=new Date,r=Math.abs(n-t),l=Math.ceil(r/864e5),c=null;return"undefined"!=typeof window&&(c=new Date(parseInt(window.localStorage.getItem("releaseViewedAt")||"0"))),l<30&&(!c||c<t)?a:null}var y=t(457),O=t(480),j=t(468),C=t(469),x=t(461),D=t(135),T=t.n(D);function L(e){var a=e.href,t=e.hideIcon,n=e.label,l=e.onClick,c=(e.position,e.right),s=e.to,m=function(e,a){var t={label:e};switch(e.toLowerCase()){case"blog":return w()&&(t.badge="new",t.badgeStyle="primary"),t;case"chat":return t.hideText=1==a,t.icon="message-circle",t;case"community":return t.hideText=1==a,t.icon="users",t;case"download":var n=N();return t.hideText=1==a,t.icon="download",n&&(t.badge="new",t.badgeStyle="primary"),t;case"github":return t.badge="",t.hideText=!0,t.icon="github",t;default:return t}}(n,c)||{},u=Object(y.a)(s),d="undefined"!=typeof window&&(window.location.pathname.includes("/tutorial")||window.location.pathname.includes("/engineering"))&&"/guides/"===u?"navbar__link":"navbar__link--active";return r.a.createElement(i.a,Object(o.a)({className:v()("navbar__item navbar__link",m.className),title:m.hideText?n:null,onClick:l},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:d,to:u}),!t&&m.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"feather icon-"+m.icon})," ",m.iconLabel),!m.hideText&&m.label,m.badge&&r.a.createElement("span",{className:v()("badge","badge--"+(m.badgeStyle||"secondary"))},m.badge))}var S=function(){var e,a=Object(g.a)(),t=a.siteConfig.themeConfig,l=t.navbar,c=(l=void 0===l?{}:l).title,m=l.links,d=void 0===m?[]:m,b=l.hideOnScroll,h=void 0!==b&&b,f=t.disableDarkMode,E=void 0!==f&&f,p=(a.isClient,Object(n.useState)(!1)),_=p[0],w=p[1],N=Object(n.useState)(!1),y=N[0],D=N[1],S=Object(x.a)(),I=S.isDarkTheme,M=S.setLightTheme,A=S.setDarkTheme,q=Object(O.a)(h),F=q.navbarRef,P=q.isNavbarVisible,Q=Object(C.a)(),B=Q.logoLink,G=Q.logoLinkProps,V=Q.logoImageUrl,W=Q.logoAlt;Object(j.a)(_);var H=Object(n.useCallback)((function(){w(!0)}),[w]),R=Object(n.useCallback)((function(){w(!1)}),[w]),J=Object(n.useCallback)((function(e){return e.target.checked?A():M()}),[M,A]);return r.a.createElement("nav",{ref:F,className:v()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":_},e[T.a.navbarHideable]=h,e[T.a.navbarHidden]=!P,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:H,onKeyDown:H},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(i.a,Object(o.a)({className:"navbar__brand",to:B},G),null!=V&&r.a.createElement(u.a,{className:"navbar__logo",src:V,alt:W}),null!=c&&r.a.createElement("strong",{className:y?T.a.hideLogoText:""},c)),d.filter((function(e){return"right"!==e.position})).map((function(e,a){return r.a.createElement(L,Object(o.a)({},e,{left:!0,key:a}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},d.filter((function(e){return"right"===e.position})).map((function(e,a){return r.a.createElement(L,Object(o.a)({},e,{right:!0,key:a}))})),!E&&r.a.createElement(k,{className:T.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:I,onChange:J}),r.a.createElement(s.a,{handleSearchBarToggle:D,isSearchBarExpanded:y}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:R}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(i.a,Object(o.a)({className:"navbar__brand",onClick:R,to:B},G),null!=V&&r.a.createElement(u.a,{className:"navbar__logo",src:V,alt:W}),null!=c&&r.a.createElement("strong",null,c)),!E&&_&&r.a.createElement(k,{"aria-label":"Dark mode toggle in sidebar",checked:I,onChange:J})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},d.map((function(e,a){return r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(L,Object(o.a)({className:"menu__link"},e,{hideIcon:!0,onClick:R})))})))))))},I=t(9),M=t(136),A=t.n(M);function q(e){var a=e.to,t=e.href,n=e.label,l=Object(I.a)(e,["to","href","label"]),c=Object(y.a)(a);return r.a.createElement(i.a,Object(o.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},l),n)}var F=function(e){var a=e.url,t=e.alt;return r.a.createElement(u.a,{className:"footer__logo",alt:t,src:a})};var P=function(){var e=Object(g.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,n=Object(x.a)().isDarkTheme,l=t||{},c=l.copyright,o=l.links,i=void 0===o?[]:o,s=l.logo,m=void 0===s?{}:s,d=Object(y.a)(m.src);if(!t)return null;var b="/img/logo-light.svg";return n&&(b="/img/logo-dark.svg"),r.a.createElement("footer",{className:v()("footer",{"footer--dark":"dark"===t.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(u.a,{className:"navbar__logo",src:b,alt:"Qovery",width:"150",height:"auto"})),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement("p",null,"Qovery is the Next-Gen DevOps Platform to Build and Scale Your Apps on AWS")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/qovery",target:"_blank"},r.a.createElement("i",{className:"feather icon-github",alt:"Qovery's Github Repo"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://www.linkedin.com/company/qovery/",target:"_blank"},r.a.createElement("i",{className:"feather icon-rss",alt:"Qovery's Linkedin"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://twitter.com/qovery_",target:"_blank"},r.a.createElement("i",{className:"feather icon-twitter",alt:"Qovery's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://discord.qovery.com",target:"_blank"},r.a.createElement("i",{className:"feather icon-message-circle",alt:"Qovery's Discord"})))),i.map((function(e,a){return r.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?r.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(q,e))}))):null)}))),(m||c)&&r.a.createElement("div",{className:"text--center"},m&&m.src&&r.a.createElement("div",{className:"margin-bottom--sm"},m.href?r.a.createElement("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:A.a.footerLogoLink},r.a.createElement(F,{alt:m.alt,url:d})):r.a.createElement(F,{alt:m.alt,url:d})),r.a.createElement("small",null,c),r.a.createElement("br",null))))},Q=t(478),B=t(479),G=t(3);t(137);a.a=function(e){var a=Object(g.a)().siteConfig,t=void 0===a?{}:a,n=t.favicon,o=(t.tagline,t.title),i=t.themeConfig.image,s=t.url,m=e.children,u=e.title,d=e.noFooter,b=e.description,h=e.image,v=e.keywords,f=(e.permalink,e.version),E=u?u+" | "+o:o,p=h||i,_=s+Object(y.a)(p),k=Object(y.a)(n),w=Object(G.h)(),N=w?"https://docs.qovery.com"+(w.pathname.endsWith("/")?w.pathname:w.pathname+"/"):null;return r.a.createElement(B.a,null,r.a.createElement(Q.a,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),n&&r.a.createElement("link",{rel:"shortcut icon",href:k}),b&&r.a.createElement("meta",{name:"description",content:b}),b&&r.a.createElement("meta",{property:"og:description",content:b}),f&&r.a.createElement("meta",{name:"docsearch:version",content:f}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),p&&r.a.createElement("meta",{property:"og:image",content:_}),p&&r.a.createElement("meta",{property:"twitter:image",content:_}),p&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),N&&r.a.createElement("meta",{property:"og:url",content:N}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),N&&r.a.createElement("link",{rel:"canonical",href:N})),r.a.createElement(l.a,null),r.a.createElement(S,null),r.a.createElement("div",{className:"main-wrapper"},m),!d&&r.a.createElement(P,null)))}},470:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});a.a=r},569:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(463);a.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);
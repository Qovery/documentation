/*! For license information please see 83e9e333.dffa1a92.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{292:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(468),c=(t(293),t(457));a.default=function(){var e=Object(c.a)().siteConfig;return(void 0===e?{}:e).customFields.metadata.team,r.a.createElement(l.a,{title:"Contact",description:"Contact the Qovery and Timber.io team"},r.a.createElement("header",{className:"hero"},r.a.createElement("div",{className:"container container--fluid"},r.a.createElement("h1",null,"Contact"),r.a.createElement("div",{className:"hero--subtitle"},"Qovery is a ",r.a.createElement("a",{href:"https://timber.io"},"Timber.io")," open-source product. You can contact the Qovery & Timber team using any of the options below."))),r.a.createElement("main",null,r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"mailto:hi@timber.io",className:"panel panel--link text--center"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-mail"})),r.a.createElement("div",{className:"panel--title"},"hi@timber.io"),r.a.createElement("div",{className:"panel--description"},"Shoot us an email"))),r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"https://twitter.com/qoverydotdev",target:"_blank",className:"panel panel--link text--center"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-twitter"})),r.a.createElement("div",{className:"panel--title"},"@qoverydotdev"),r.a.createElement("div",{className:"panel--description"},"Tweet at us"))))))))}},444:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var i in n)t.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},468:function(e,a,t){"use strict";t(478);var n=t(0),r=t.n(n),l=t(479),c=t(465),i=t(1),o=(t(469),t(470),t(480),t(451)),s=t(481),m=t(461),d=t.n(m),u=t(482),b=t.n(u),v=t(457),h=t(444),g=t.n(h),E=t(135),f=t.n(E),p=function(){return r.a.createElement("span",{className:g()(f.a.toggle,f.a.moon)})},_=function(){return r.a.createElement("span",{className:g()(f.a.toggle,f.a.sun)})},N=function(e){var a=Object(v.a)().isClient;return r.a.createElement(b.a,Object(i.a)({disabled:!a,icons:{checked:r.a.createElement(p,null),unchecked:r.a.createElement(_,null)}},e))};function k(){var e=Object(v.a)().siteConfig,a=(void 0===e?{}:e).customFields.metadata.latest_post,t=Date.parse(a.date),n=new Date,r=Math.abs(n-t),l=Math.ceil(r/864e5),c=null;return"undefined"!=typeof window&&(c=new Date(parseInt(window.localStorage.getItem("blogViewedAt")||"0"))),l<30&&(!c||c<t)?a:null}function w(){var e=Object(v.a)().siteConfig,a=(void 0===e?{}:e).customFields.metadata.latest_release,t=Date.parse(a.date),n=new Date,r=Math.abs(n-t),l=Math.ceil(r/864e5),c=null;return"undefined"!=typeof window&&(c=new Date(parseInt(window.localStorage.getItem("releaseViewedAt")||"0"))),l<30&&(!c||c<t)?a:null}var y=t(460),j=t(485),O=t(473),C=t(474),x=t(462),T=t(136),D=t.n(T);function S(e){var a=e.href,t=e.hideIcon,n=e.label,l=e.onClick,c=(e.position,e.right),s=e.to,m=function(e,a){var t={label:e};switch(e.toLowerCase()){case"blog":return k()&&(t.badge="new",t.badgeStyle="primary"),t;case"chat":return t.hideText=1==a,t.icon="message-circle",t;case"community":return t.hideText=1==a,t.icon="users",t;case"download":var n=w();return t.hideText=1==a,t.icon="download",n&&(t.badge="new",t.badgeStyle="primary"),t;case"github":return t.badge="",t.hideText=!0,t.icon="github",t;default:return t}}(n,c)||{},d=Object(y.a)(s),u="undefined"!=typeof window&&(window.location.pathname.includes("/tutorial")||window.location.pathname.includes("/engineering"))&&"/guides/"===d?"navbar__link":"navbar__link--active";return r.a.createElement(o.a,Object(i.a)({className:g()("navbar__item navbar__link",m.className),title:m.hideText?n:null,onClick:l},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:u,to:d}),!t&&m.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"feather icon-"+m.icon})," ",m.iconLabel),!m.hideText&&m.label,m.badge&&r.a.createElement("span",{className:g()("badge","badge--"+(m.badgeStyle||"secondary"))},m.badge))}var I=function(){var e,a=Object(v.a)(),t=a.siteConfig.themeConfig,l=t.navbar,c=(l=void 0===l?{}:l).title,m=l.links,u=void 0===m?[]:m,b=l.hideOnScroll,h=void 0!==b&&b,E=t.disableDarkMode,f=void 0!==E&&E,p=(a.isClient,Object(n.useState)(!1)),_=p[0],k=p[1],w=Object(n.useState)(!1),y=w[0],T=w[1],I=Object(x.a)(),L=I.isDarkTheme,M=I.setLightTheme,Q=I.setDarkTheme,q=Object(j.a)(h),A=q.navbarRef,F=q.isNavbarVisible,H=Object(C.a)(),P=H.logoLink,V=H.logoLinkProps,B=H.logoImageUrl,G=H.logoAlt;Object(O.a)(_);var J=Object(n.useCallback)((function(){k(!0)}),[k]),R=Object(n.useCallback)((function(){k(!1)}),[k]),W=Object(n.useCallback)((function(e){return e.target.checked?Q():M()}),[M,Q]);return r.a.createElement("nav",{ref:A,className:g()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":_},e[D.a.navbarHideable]=h,e[D.a.navbarHidden]=!F,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:J,onKeyDown:J},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(o.a,Object(i.a)({className:"navbar__brand",to:P},V),null!=B&&r.a.createElement(d.a,{className:"navbar__logo",src:B,alt:G}),null!=c&&r.a.createElement("strong",{className:y?D.a.hideLogoText:""},c)),u.filter((function(e){return"right"!==e.position})).map((function(e,a){return r.a.createElement(S,Object(i.a)({},e,{left:!0,key:a}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},u.filter((function(e){return"right"===e.position})).map((function(e,a){return r.a.createElement(S,Object(i.a)({},e,{right:!0,key:a}))})),!f&&r.a.createElement(N,{className:D.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:L,onChange:W}),r.a.createElement(s.a,{handleSearchBarToggle:T,isSearchBarExpanded:y}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:R}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(o.a,Object(i.a)({className:"navbar__brand",onClick:R,to:P},V),null!=B&&r.a.createElement(d.a,{className:"navbar__logo",src:B,alt:G}),null!=c&&r.a.createElement("strong",null,c)),!f&&_&&r.a.createElement(N,{"aria-label":"Dark mode toggle in sidebar",checked:L,onChange:W})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},u.map((function(e,a){return r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(S,Object(i.a)({className:"menu__link"},e,{hideIcon:!0,onClick:R})))})))))))},L=t(9),M=t(137),Q=t.n(M);function q(e){var a=e.to,t=e.href,n=e.label,l=Object(L.a)(e,["to","href","label"]),c=Object(y.a)(a);return r.a.createElement(o.a,Object(i.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},l),n)}var A=function(e){var a=e.url,t=e.alt;return r.a.createElement(d.a,{className:"footer__logo",alt:t,src:a})};var F=function(){var e=Object(v.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,n=Object(x.a)().isDarkTheme,l=t||{},c=l.copyright,i=l.links,o=void 0===i?[]:i,s=l.logo,m=void 0===s?{}:s,u=Object(y.a)(m.src);if(!t)return null;var b="/img/logo-light.svg";return n&&(b="/img/logo-dark.svg"),r.a.createElement("footer",{className:g()("footer",{"footer--dark":"dark"===t.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(d.a,{className:"navbar__logo",src:b,alt:"Qovery",width:"150",height:"auto"})),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement("p",null,"Qovery is an Internal Developer Platform Helping 50.000+ Developers and Platform Engineers To Ship Faster.")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/qovery",target:"_blank"},r.a.createElement("i",{className:"feather icon-github",alt:"Qovery's Github Repo"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://www.linkedin.com/company/qovery/",target:"_blank"},r.a.createElement("i",{className:"feather icon-rss",alt:"Qovery's Linkedin"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://twitter.com/qovery_",target:"_blank"},r.a.createElement("i",{className:"feather icon-twitter",alt:"Qovery's Twitter"})))),o.map((function(e,a){return r.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?r.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(q,e))}))):null)}))),(m||c)&&r.a.createElement("div",{className:"text--center"},m&&m.src&&r.a.createElement("div",{className:"margin-bottom--sm"},m.href?r.a.createElement("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:Q.a.footerLogoLink},r.a.createElement(A,{alt:m.alt,url:u})):r.a.createElement(A,{alt:m.alt,url:u})),r.a.createElement("small",null,c),r.a.createElement("br",null))))},H=t(483),P=t(484),V=t(3);t(138);a.a=function(e){var a=Object(v.a)().siteConfig,t=void 0===a?{}:a,n=t.favicon,i=(t.tagline,t.title),o=t.themeConfig.image,s=t.url,m=e.children,d=e.title,u=e.noFooter,b=e.description,h=e.image,g=e.keywords,E=(e.permalink,e.version),f=d?d+" | "+i:i,p=h||o,_=s+Object(y.a)(p),N=Object(y.a)(n),k=Object(V.h)(),w=k?"https://docs.qovery.com"+(k.pathname.endsWith("/")?k.pathname:k.pathname+"/"):null;return r.a.createElement(P.a,null,r.a.createElement(H.a,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),f&&r.a.createElement("title",null,f),f&&r.a.createElement("meta",{property:"og:title",content:f}),n&&r.a.createElement("link",{rel:"shortcut icon",href:N}),b&&r.a.createElement("meta",{name:"description",content:b}),b&&r.a.createElement("meta",{property:"og:description",content:b}),E&&r.a.createElement("meta",{name:"docsearch:version",content:E}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),p&&r.a.createElement("meta",{property:"og:image",content:_}),p&&r.a.createElement("meta",{property:"twitter:image",content:_}),p&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+f}),w&&r.a.createElement("meta",{property:"og:url",content:w}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),w&&r.a.createElement("link",{rel:"canonical",href:w})),r.a.createElement(l.a,null),r.a.createElement(I,null),r.a.createElement("div",{className:"main-wrapper"},m),!u&&r.a.createElement(F,null)))}},475:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});a.a=r}}]);
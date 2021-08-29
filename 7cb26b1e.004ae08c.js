/*! For license information please see 7cb26b1e.004ae08c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{244:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return l})),o.d(t,"default",(function(){return p}));var n=o(1),r=o(9),a=(o(0),o(349)),i=o(348),s=(o(353),{last_modified_on:"2021-08-29",$schema:"/.meta/.schemas/guides.json",title:"How to migrate your PostHog self-hosted to PostHog Cloud",description:"This guide explains how to migrate your self-hosted PostHog instance to the Cloud version. PostHog is an open-source product analytics tool.",author_github:"https://github.com/evoxmusic",tags:["type: engineering","technology: posthog"],hide_pagination:!0}),c={categories:[{name:"engineering",title:"Engineering",description:"We share our engineering learning with all of you.",permalink:"/guides/engineering"}],coverLabel:"How to migrate your PostHog self-hosted to PostHog Cloud",description:"This guide explains how to migrate your self-hosted PostHog instance to the Cloud version. PostHog is an open-source product analytics tool.",permalink:"/guides/engineering/how-to-migrate-posthog-self-hosted-to-posthog-cloud",readingTime:"5 min read",source:"@site/guides/engineering/how-to-migrate-posthog-self-hosted-to-posthog-cloud.md",tags:[{label:"type: engineering",permalink:"/guides/tags/type-engineering"},{label:"technology: posthog",permalink:"/guides/tags/technology-posthog"}],title:"How to migrate your PostHog self-hosted to PostHog Cloud",truncated:!1,prevItem:{title:"How to deploy Strapi with PostgreSQL",permalink:"/guides/tutorial/how-to-deploy-strapi-with-postgresql"},nextItem:{title:"How to write a Dockerfile",permalink:"/guides/tutorial/how-to-write-a-dockerfile"}},l=[{value:"How to migrate",id:"how-to-migrate",children:[{value:"Before migrating",id:"before-migrating",children:[]}]},{value:"We can migrate now",id:"we-can-migrate-now",children:[]},{value:"Wrapping up",id:"wrapping-up",children:[]}],u={rightToc:l};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.posthog.com"}),"PostHog")," is an open-source product analytics tool that we use at Qovery to improve the developer experience. PostHog is similar to famous proprietary product analytics tools like Mixpanel, Heap, Amplitude."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you are not yet using it, give it a try with ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.qovery.com"}),"Qovery")," or PostHog Cloud version.")),Object(a.b)("p",null,"At Qovery, we were using PostHog self-hosted for 8 months in production. It was running nicely on Qovery (yes, we deployed PostHog with Qovery \ud83d\ude0e ",Object(a.b)("em",{parentName:"p"},"#eatYourOwnDogFood"),"), but we decided to move to the PostHog Cloud. Here are the two main reasons why we decided to make this move:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"To support the PostHog project"),": Because we love their product, keeping them by using their Cloud version makes complete sense to us."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Stay focus on our business"),": Using the self-hosted version of PostHog requires you to spend time to maintain it. Meaning, you have to handle the upgrade yourself and make sure the service is up and running all day long.")),Object(a.b)("h2",{id:"how-to-migrate"},"How to migrate"),Object(a.b)("p",null,"Looking at their documentation, there is no guide to migrate from PostHog self-hosted to their Cloud version. I asked them the procedure on Slack, and Paolo from the PostHog team responded that it should not be too complicated to transfer the data by fetching the data from the PostHog source and pushing them to the PostHog destination via the web API."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/posthog-migration/paolo-response-on-slack.png",alt:"Paolo responded on Slack"})),Object(a.b)("p",null,"So the idea was to make a Python script to fetch the data from our self-hosted PostHog instance and forward the data to the PostHog Cloud version."),Object(a.b)("p",null,"(Self-hosted PostHog) <--","[fetch event data via web API]","-- Python Script --","[send event data via web API]","--\x3e (PostHog Cloud)"),Object(a.b)("h3",{id:"before-migrating"},"Before migrating"),Object(a.b)("p",null,"As I know that we have more than one million events to send, I notified the PostHog support team that we are going to migrate our self-hosted version. Just in case they have to adjust their infrastructure. Who knows :) Paolo (once again, he is everywhere \ud83d\ude42) responded to me and was super proactive."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/posthog-migration/support-chat-1.png",alt:"Paolo responded on the support chat"})),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/posthog-migration/support-chat-2.png",alt:"Paolo responded on the support chat"})),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"I encourage you to always keep informed the support team of a service when you are about migrate. They can help you. It was the case here with PostHog support team.")),Object(a.b)("h2",{id:"we-can-migrate-now"},"We can migrate now"),Object(a.b)("p",null,"To migrate I made a simple Python 3.6+ script using no external dependencies. Only HTTP requests and that's it."),Object(a.b)(i.a,{type:"info",mdxType:"Alert"},"This script is compatible with Python 3.6+"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"#!/usr/bin/env python\nimport copy\nimport time\nimport uuid\nfrom urllib.parse import urlparse\n\nimport requests\n\n# Your source PostHog instance\nsource_posthog_scheme_and_host = 'https://posthog.your-domain.tld'\n\n# Generate a personal API key to read the data from your source PostHog instance\nsource_api_key = 'xxx'\n\n# Your project API key provided by PostHog in your project settings\ndest_project_api_key = 'xxx'\n\n\ndef is_valid(key: str, data: dict) -> bool:\n    \"\"\"\n    Helper function to check if the value is empty or none\n    :param key: data key to check\n    :param value: dict\n    :return: true if valid (not empty, None), false otherwise\n    \"\"\"\n    if key not in data or not data[key] or str(data[key]).strip().lower() == 'none':\n        return False\n\n    return True\n\n\ndef clean_source_data(results: [dict]) -> [dict]:\n    \"\"\"\n    Clean up data from PostHog source\n    Note: this function do not mutate `results`\n    :param results:\n    :return:\n    \"\"\"\n    _results = []\n    if not results:\n        return _results\n\n    distinct_id = 'distinct_id'\n\n    for result in results:\n        data = copy.deepcopy(result)\n        del data['id']\n\n        if not is_valid(distinct_id, data):\n            data[distinct_id] = str(uuid.uuid4())\n\n        if 'properties' in data:\n            properties = data['properties']\n            if not is_valid(distinct_id, properties):\n                # copy distinct_id value from the parent object\n                properties[distinct_id] = data[distinct_id]\n\n        _results.append(data)\n\n    return _results\n\n\ndef capture(data: [dict], count: int = 0):\n    \"\"\"\n    Function to send data to the dest PostHog instance\n    :param data:\n    :param count:\n    :return:\n    \"\"\"\n    res = requests.post('https://app.posthog.com/capture', json={'api_key': dest_project_api_key, 'batch': data},\n                        headers={'Content-type': 'application/json'})\n\n    if res.status_code != 200:\n        if count >= 100:\n            print('retry exceeded')\n            exit(1)\n        time.sleep(3)\n        print('Retry sending data (status code: {}) to dest PostHog with data {}'.format(res.status_code, data))\n        return capture(data, count + 1)\n\n    return res\n\n\ndef get_source_data() -> dict:\n    headers = {'Authorization': 'Bearer {}'.format(source_api_key)}\n\n    url = '{}/api/event'.format(source_posthog_scheme_and_host)\n\n    with open('posthog_completed_urls', 'a') as f:\n        while 1:\n            query = urlparse(url).query\n            if query:\n                # PostHog return weird next URL with tons of 'before' params\n                url = '{}/api/event?before={}'.format(source_posthog_scheme_and_host, query.split('=')[-1])\n\n            res = requests.get(url, headers=headers)\n            if res.status_code == 200:\n                j_res = res.json()\n                _data = clean_source_data(j_res['results'])\n\n                yield _data\n\n                f.write(url + '\\n')\n                url = j_res['next']\n            else:\n                print('Retry fetching events (status code: {}) from PostHog source with URL {}'.format(res.status_code, url))\n                time.sleep(3)\n\n\nif __name__ == '__main__':\n    for data in get_source_data():\n        capture(data)\n        print('{} lines migrated'.format(len(data)))\n\n    print('ok')\n")),Object(a.b)(i.a,{type:"warning",mdxType:"Alert"},"Before running the migration script, I strongly recommend making your apps sending the data to the PostHog Cloud instance before and wait that the old instance stop receiving new events."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Copy this script."),Object(a.b)("li",{parentName:"ol"},"Change the value of the variables ",Object(a.b)("inlineCode",{parentName:"li"},"source_posthog_scheme_and_host"),", ",Object(a.b)("inlineCode",{parentName:"li"},"source_api_key"),", ",Object(a.b)("inlineCode",{parentName:"li"},"dest_project_api_key")),Object(a.b)("li",{parentName:"ol"},"Run the script and wait until it is done \ud83d\udc4c")),Object(a.b)("h2",{id:"wrapping-up"},"Wrapping up"),Object(a.b)("p",null,"The migration goes smoothly and took 1 day because we had more than 1 million events. We are super excited to use PostHog Cloud. It is fast and efficient for improving the developer experience on Qovery. Any questions about our usage of PostHog? ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Join our Discord")," to chat about it."),Object(a.b)("p",null,"Resources:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.posthog.com"}),"PostHog"),": open source product analytics tool."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.qovery.com"}),"Qovery"),": the simplest way to deploy your apps on AWS.")))}p.isMDXComponent=!0},347:function(e,t,o){var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===a)for(var s in n)o.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},348:function(e,t,o){"use strict";o(352);var n=o(0),r=o.n(n),a=o(347),i=o.n(a);o(132);t.a=function(e){var t=e.children,o=e.classNames,n=e.fill,a=e.icon,s=e.type,c=null;switch(s){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:i()(o,"alert","alert--"+s,{"alert--fill":n,"alert--icon":!1!==a}),role:"alert"},!1!==a&&r.a.createElement("i",{className:i()("feather","icon-"+(a||c))}),t)}},349:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return h}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s({},t,{},e)),o},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(o),g=n,h=p["".concat(i,".").concat(g)]||p[g]||d[g]||a;return o?r.a.createElement(h,s({ref:t},l,{components:o})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}g.displayName="MDXCreateElement"},351:function(e,t,o){var n=o(25).f,r=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in r||o(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},352:function(e,t,o){var n=o(12);n(n.P,"Array",{fill:o(357)}),o(75)("fill")},353:function(e,t,o){"use strict";o(351);var n=o(0),r=o.n(n),a=o(348);t.a=function(e){var t=e.children,o=e.name;return r.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",o||"page"," assumes the following:"),t)}},357:function(e,t,o){"use strict";var n=o(27),r=o(76),a=o(26);e.exports=function(e){for(var t=n(this),o=a(t.length),i=arguments.length,s=r(i>1?arguments[1]:void 0,o),c=i>2?arguments[2]:void 0,l=void 0===c?o:r(c,o);l>s;)t[s++]=e;return t}}}]);
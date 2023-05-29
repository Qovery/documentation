/*! For license information please see ac2c90fd.17cca8d1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{291:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),o=(n(0),n(390)),s=n(389),i={last_modified_on:"2022-11-11",title:"Maintenance",description:"Maintainance and operation for your Qovery cluster and applications",sidebar_label:"hidden",hide_pagination:!0},c={id:"using-qovery/maintenance",title:"Maintenance",description:"Maintainance and operation for your Qovery cluster and applications",source:"@site/docs/using-qovery/maintenance.md",permalink:"/docs/using-qovery/maintenance",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Audit Logs",permalink:"/docs/using-qovery/audit-logs"},next:{title:"Security and Compliance",permalink:"/docs/security-and-compliance"}},l=[{value:"Kubernetes and components, patches, and upgrades",id:"kubernetes-and-components-patches-and-upgrades",children:[]},{value:"Managed services patches and upgrades",id:"managed-services-patches-and-upgrades",children:[]},{value:"Cloud providers&#39; limits",id:"cloud-providers-limits",children:[]},{value:"Rotating system credentials",id:"rotating-system-credentials",children:[{value:"Manual rotation",id:"manual-rotation",children:[]},{value:"Automatic rotation",id:"automatic-rotation",children:[]}]}],u={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This guide will provide inputs about maintenance with Qovery. Qovery provides automatic and silent updates as much as possible. With and without cloud providers."),Object(o.b)("h2",{id:"kubernetes-and-components-patches-and-upgrades"},"Kubernetes and components, patches, and upgrades"),Object(o.b)("p",null,"Qovery manages Kubernetes updates through the Cloud provider update mechanism and ensures full compatibility with all deployed infrastructure components (Nginx ingress, cert-manager, CNI, CSI, etc.) inside the Kubernetes cluster."),Object(o.b)(s.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"To avoid as maximum as possible small downtimes, Qovery is using the rolling update strategy for the Kubernetes cluster and components. This strategy is the default strategy for Kubernetes and is the most reliable one.\nYou may need to adapt some liveness and readiness probes for some long-running applications to avoid downtimes.")),Object(o.b)("p",null,"Security patches and minor updates are applied automatically and silently by the cloud provider. Kubernetes major updates are applied automatically by Qovery to ensure compatibility between every deployed components inside the cluster."),Object(o.b)(s.a,{type:"danger",mdxType:"Alert"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"While Qovery allows customers to access Kubernetes cluster and manually deploy resources, Qovery is not responsible for any issues that may occur on those deployed resources."),Object(o.b)("li",{parentName:"ol"},"Qovery support can be canceled by Qovery, if the customer is manually updating or upgrading the Kubernetes cluster or components managed by Qovery."))),Object(o.b)("h2",{id:"managed-services-patches-and-upgrades"},"Managed services patches and upgrades"),Object(o.b)("p",null,"By default, every managed service deployed by Qovery is configured with automatic patches and upgrades proposed by the cloud provider."),Object(o.b)("p",null,"Major version upgrades are up to the end user to decide when it's the right time to upgrade."),Object(o.b)("h2",{id:"cloud-providers-limits"},"Cloud providers' limits"),Object(o.b)("p",null,"Cloud providers are using quotas for various reasons. Some of them are to prevent abuse, some others are to prevent overloading the infrastructure, and others are to prevent an excessive bill."),Object(o.b)("p",null,"It occurs that some customers are reaching the limits of their cloud provider. In this case, Qovery gives the information in the infrastructure or applications logs."),Object(o.b)("p",null,"It is up to the customer to contact the Cloud provider via ticketing support to increase the limits."),Object(o.b)("h2",{id:"rotating-system-credentials"},"Rotating system credentials"),Object(o.b)("p",null,"Some customers want to rotate their system credentials because on legal requests, security requirements, or other reasons. Qovery provides makes it simple to rotate credentials."),Object(o.b)("p",null,"Here is the way we recommend to avoid any downtime on your cluster and for your application deployments. Open your AWS console and open the ",Object(o.b)("inlineCode",{parentName:"p"},"Qovery")," user in the IAM service."),Object(o.b)("p",{Valign:"center"},Object(o.b)("img",{src:"/img/configuration/maintenance/aws_iam_user_select.png",alt:"User select"})),Object(o.b)("p",null,"Click on the ",Object(o.b)("inlineCode",{parentName:"p"},"Security credentials")," tab, you will see one access key present:"),Object(o.b)("p",{Valign:"center"},Object(o.b)("img",{src:"/img/configuration/maintenance/aws_iam_access_key_list.png",alt:"User select"})),Object(o.b)("p",null,"For a single account, we can create up to two access keys. So we can create a new one, request a cluster deployment, wait for the deployment to be done, and then delete the old one."),Object(o.b)(s.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"This key is also used to connect to the Kubernetes cluster and make deployments. You may encounter deployment failures if the key is deleted before the deployment is done.\nWe advise your to wait 1h or 2h before deleting the old key.")),Object(o.b)("p",null,"You can now 2 ways to rotate your credentials, select the one you prefer:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Manual"),": you update manually credentials from the Qovery interface"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Automatic"),": you update automatically credentials with a script")),Object(o.b)("h3",{id:"manual-rotation"},"Manual rotation"),Object(o.b)("p",null,"You can update or rotate manually credentials on your AWS account this way:"),Object(o.b)("p",{Valign:"center"},Object(o.b)("img",{src:"/img/configuration/maintenance/aws_iam_create_access_key.png",alt:"User select"})),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("inlineCode",{parentName:"li"},"Create access key")," button"),Object(o.b)("li",{parentName:"ol"},"Save the ",Object(o.b)("inlineCode",{parentName:"li"},"access key")," and ",Object(o.b)("inlineCode",{parentName:"li"},"secret access Key")," in a safe place"),Object(o.b)("li",{parentName:"ol"},"Go to your Qovery dashboard to ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/clusters/#credentials"}),"update the credentials on Qovery console"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"Deploy")," the cluster once again to apply changes"),Object(o.b)("li",{parentName:"ol"},"Once the cluster is fully updated, wait 2h (to ensure all ongoing deployments are done)"),Object(o.b)("li",{parentName:"ol"},"Delete the old access key from the AWS console:")),Object(o.b)("p",{Valign:"center"},Object(o.b)("img",{src:"/img/configuration/maintenance/aws_iam_delete_access_key.png",alt:"User select"})),Object(o.b)(s.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"If you have a doubt about the old credentials deletion, you can simply deactivate the old ",Object(o.b)("inlineCode",{parentName:"p"},"access key")," for a while and delete it later.")),Object(o.b)("h3",{id:"automatic-rotation"},"Automatic rotation"),Object(o.b)("p",null,"Another way to do it more programmatically. Here is a script to perform those actions, adapt it to your needs if you need and add it to your "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\n\n############## VARIABLES AND INSTRUCTIONS ##############\n\n# Ensure you have jq and awscli installed\n\n# 1. Ensure your AWS environment variables are set: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html\n# 2. AWS username to perform the rotation\naws_iam_username="Qovery"\n# 3. Use qovery CLI to generate a dedicated token\nqovery_token="xxx"\n# 4. Organization ID can be retrieved inside the Qovery console URL, where your cluster is located\norganization_id="xxx"\n# 5. Get your credentials: curl -s -X GET -H "Content-type: application/json\' -H \'Authorization: Token $qovery_token" "https://api.qovery.com/organization/$organization_id/aws/credentials"\ncredentials_id="xxx"\n# 6. Name of the credentials to update\ncredentials_name="My organization credentials"\n# 7. Cluster ID can be retrieved inside the Qovery console URL, where your cluster is located\ncluster_id="xxx"\n# 8. Set the delay to wait before deleting the old key in seconds (do not go below 7200)\ndelay_before_delete_old_key=7200\n\n############## DO NOT EDIT ##############\n\nset -e\n\necho "[+] Ensure there is only one Access Key"\nold_aws_access_key=$(aws iam list-access-keys --user-name $aws_iam_username | jq -r \'.AccessKeyMetadata[].AccessKeyId\')\nif [ $(echo $old_aws_access_key | grep -c \' \') -ne 0 ]; then\n  echo "ERROR: more than one access key found, please delete the one not used by Qovery"\n  exit 1\nfi\nif [ "$old_aws_access_key" == "" ] ; then\n  echo "ERROR: no access key found, are you sure it\'s the correct user?"\n  exit 1\nfi\necho " -> Current (future old) key detected: $old_aws_access_key"\n\ncurrent_time=$(date +"%s")\nmax_time=$((current_time + delay_before_delete_old_key))\ncluster_status=""\n\necho "[+] Create a new Access Key"\nnew_aws_access_key_json=$(aws iam create-access-key --user-name $aws_iam_username)\nnew_aws_access_key=$(echo $new_aws_access_key_json | jq -r \'.AccessKey.AccessKeyId\')\nnew_aws_secret_key=$(echo $new_aws_access_key_json | jq -r \'.AccessKey.SecretAccessKey\')\necho " -> Successfully created a new access key: $new_aws_access_key"\n\necho "[+] Update Qovery credentials"\ncurl -s -X PUT -H "Content-type: application/json" -H "Authorization: Token $qovery_token" -d "{\\"name\\": \\"$credentials_name\\", \\"access_key\\": \\"$new_aws_access_key\\", \\"secret_key\\": \\"$new_aws_secret_key\\"}" "https://api.qovery.com/organization/$organization_id/aws/credentials/$credentials_id" 1>/dev/null\n\necho "[+] Deploy the cluster with the new credentials"\ncurl -s -X POST -H "Content-type: application/json" -H "Authorization: Token $qovery_token" "https://api.qovery.com/organization/$organization_id/cluster/$cluster_id/deploy" 1>/dev/null\n\necho "[+] Wait for the cluster deployment to be done"\nsleep 15\nwhile [ "$cluster_status" != "RUNNING" ]; do\n  sleep 60\n  cluster_status=$(curl -s -X GET -H "Content-type: application/json" -H "Authorization: Token $qovery_token" "https://api.qovery.com/organization/$organization_id/cluster/$cluster_id/status" | jq -r \'.status\')\n  echo " -> $(date "+%H:%M") Waiting for the cluster deployment to be done. Current status: $cluster_status..."\n  # Ensure the cluster is in a valid state\n  if [ "$cluster_status" != "DEPLOYMENT_QUEUED" ] && [ "$cluster_status" != "DEPLOYING" ] && [ "$cluster_status" != "DEPLOYED" ] && [ "$cluster_status" != "RUNNING" ]; then\n    echo "ERROR: the cluster does not have a correct status, please check cluster logs and fix the issue. Then delete the key $old_aws_access_key and retry"\n    exit 1\n  fi\n  if [ $(date +"%s") -gt $max_time ]; then\n    echo "ERROR: timeout reached, the cluster is not deployed yet, please check cluster logs and fix the cluster issue. Then delete the key $new_aws_access_key and retry"\n    exit 1\n  fi\ndone\n\necho "[+] Waiting up to 2h to ensure all ongoing deployments are done ($(date -d @$max_time))"\nwhile [ $(date +"%s") -lt $max_time ]; do\n  sleep 10\ndone\n\necho "[+] Delete the old Access Key"\naws iam delete-access-key --access-key-id $old_aws_access_key --user-name $aws_iam_username\n\necho "[+] Done"\n')),Object(o.b)("p",null,"You will see the following output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[+] Ensure there is only one Access Key\n -> Current (future old) key detected: xxx\n[+] Create a new Access Key\n -> Successfully created a new access key: yyy\n[+] Update Qovery credentials\n[+] Deploy the cluster with the new credentials\n[+] Wait for the cluster deployment to be done\n -> 15:04 Waiting for the cluster deployment to be done. Current status: DEPLOYING...\n -> 15:05 Waiting for the cluster deployment to be done. Current status: DEPLOYING...\n -> 15:06 Waiting for the cluster deployment to be done. Current status: DEPLOYING...\n -> 15:07 Waiting for the cluster deployment to be done. Current status: RUNNING...\n[+] Waiting up to 2h to ensure all ongoing deployments are done (Fri Nov 11 03:22:57 PM CET 2022)\n[+] Delete the old Access Key\n[+] Done\n")))}d.isMDXComponent=!0},388:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var s=r.apply(null,a);s&&e.push(s)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},389:function(e,t,n){"use strict";n(391);var a=n(0),r=n.n(a),o=n(388),s=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,o=e.icon,i=e.type,c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:s()(n,"alert","alert--"+i,{"alert--fill":a,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:s()("feather","icon-"+(o||c))}),t)}},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},y=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),y=a,m=d["".concat(s,".").concat(y)]||d[y]||p[y]||o;return n?r.a.createElement(m,i({ref:t},l,{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},391:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(392)}),n(74)("fill")},392:function(e,t,n){"use strict";var a=n(27),r=n(75),o=n(26);e.exports=function(e){for(var t=a(this),n=o(t.length),s=arguments.length,i=r(s>1?arguments[1]:void 0,n),c=s>2?arguments[2]:void 0,l=void 0===c?n:r(c,n);l>i;)t[i++]=e;return t}}}]);
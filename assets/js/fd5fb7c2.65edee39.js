"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4036],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6468:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},l=void 0,i={permalink:"/blog/2023/07/12/K8s/\u672c\u5730\u7f16\u8bd1K8s",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/K8s/2023-07-12-\u672c\u5730\u7f16\u8bd1K8s.md",source:"@site/blog/K8s/2023-07-12-\u672c\u5730\u7f16\u8bd1K8s.md",title:"\u672c\u5730\u7f16\u8bd1K8s",description:"\u672c\u6587\u6240\u793a\u7f16\u8bd1\u4e0e\u8c03\u8bd5\u73af\u5883\uff1a",date:"2023-07-12T00:00:00.000Z",formattedDate:"July 12, 2023",tags:[],readingTime:1.02,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Vagrant",permalink:"/blog/2023/07/13/\u6742\u8bb0/Vagrant"},nextItem:{title:"Go\u5bf9\u79f0\u52a0\u5bc6",permalink:"/blog/Go\u5bf9\u79f0\u52a0\u5bc6"}},s={authorsImageUrls:[]},u=[],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u6240\u793a\u7f16\u8bd1\u4e0e\u8c03\u8bd5\u73af\u5883\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf\uff1a"),(0,a.kt)("li",{parentName:"ul"},"Kubernetes\u7248\u672c\uff1a")),(0,a.kt)("h1",{id:"\u4f9d\u8d56\u5b89\u88c5"},"\u4f9d\u8d56\u5b89\u88c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go 1.20+\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"\u6ce8\u610f\u5f53\u524d\u8fd0\u884c Kubernetes \u7248\u672c\u6240\u9700\u7684 Go \u7248\u672c")),(0,a.kt)("li",{parentName:"ul"},"Docker\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu/"},"https://docs.docker.com/engine/install/ubuntu/")),(0,a.kt)("li",{parentName:"ul"},'Etcd\uff1ahack/install-etcd.sh \u5b89\u88c5\u540e\u6267\u884cexport PATH="/Users/junwen.zeng/go/src/kubernetes/third_party/etcd:${PATH}"'),(0,a.kt)("li",{parentName:"ul"},"rsync\uff1a\u6587\u4ef6\u540c\u6b65\u4e0e\u4f20\u8f93\u5de5\u5177\uff08",(0,a.kt)("a",{parentName:"li",href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FWayneD%2Frsync%2Fblob%2Fmaster%2FINSTALL.md"},"\u5b89\u88c5\u6307\u5357"),"\uff09"),(0,a.kt)("li",{parentName:"ul"},"cfssl\uff1asudo apt install golang-cfssl"),(0,a.kt)("li",{parentName:"ul"},"delve\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-delve/delve/tree/master/Documentation/installation#installation"},"Go \u8bed\u8a00\u8c03\u8bd5\u5de5\u5177"))),(0,a.kt)("p",null,"\u5b89\u88c5etcd hack/install-etcd.sh"),(0,a.kt)("p",null,"\u5728\u542f\u52a8\u524d etcd \u53ef\u80fd\u5df2\u7ecf\u542f\u52a8\u5e76\u5360\u7528\u7aef\u53e3\uff0c\u6267\u884c sudo service etcd stop \u505c\u6b62\u670d\u52a1"),(0,a.kt)("p",null,"\u542f\u52a8\u670d\u52a1 sudo ./hack/local-up-cluster.sh -O"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'dlv exec  /home/vagrant/go/src/kubernetes/_output/bin/kube-apiserver  --headless --listen=:12345 --api-version=2 --log --log-output=debugger,gdbwire,lldbout,debuglineerr,rpc,dap,fncall,minidump --log-dest=/tmp/deleve.log -- --authorization-mode=Node,RBAC  --cloud-provider= --cloud-config=   --v=3 --vmodule= --audit-policy-file=/tmp/local-up-cluster.sh.MnE0ok/kube-audit-policy-file --audit-log-path=/tmp/kube-apiserver-audit.log --authorization-webhook-config-file= --authentication-token-webhook-config-file= --cert-dir=/var/run/kubernetes --egress-selector-config-file=/tmp/local-up-cluster.sh.MnE0ok/kube_egress_selector_configuration.yaml --client-ca-file=/var/run/kubernetes/client-ca.crt --kubelet-client-certificate=/var/run/kubernetes/client-kube-apiserver.crt --kubelet-client-key=/var/run/kubernetes/client-kube-apiserver.key --service-account-key-file=/tmp/local-up-cluster.sh.MnE0ok/kube-serviceaccount.key --service-account-lookup=true --service-account-issuer=https://kubernetes.default.svc --service-account-jwks-uri=https://kubernetes.default.svc/openid/v1/jwks --service-account-signing-key-file=/tmp/local-up-cluster.sh.MnE0ok/kube-serviceaccount.key --enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,Priority,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction --disable-admission-plugins= --admission-control-config-file= --bind-address=0.0.0.0 --secure-port=6443 --tls-cert-file=/var/run/kubernetes/serving-kube-apiserver.crt --tls-private-key-file=/var/run/kubernetes/serving-kube-apiserver.key --storage-backend=etcd3 --storage-media-type=application/vnd.kubernetes.protobuf --etcd-servers=http://127.0.0.1:2379 --service-cluster-ip-range=10.0.0.0/24 --feature-gates=AllAlpha=false --external-hostname=localhost --requestheader-username-headers=X-Remote-User --requestheader-group-headers=X-Remote-Group --requestheader-extra-headers-prefix=X-Remote-Extra- --requestheader-client-ca-file=/var/run/kubernetes/request-header-ca.crt --requestheader-allowed-names=system:auth-proxy --proxy-client-cert-file=/var/run/kubernetes/client-auth-proxy.crt --proxy-client-key-file=/var/run/kubernetes/client-auth-proxy.key --cors-allowed-origins="/127.0.0.1(:[0-9]+)?$,/localhost(:[0-9]+)?$"\n')),(0,a.kt)("p",null,'\u6ce8\u610f\uff1a"/127.0.0.1(:',"[0-9]","+)?$,/localhost(:","[0-9]",'+)?$" \u8981\u52a0\u53cc\u5f15\u53f7\u3002',(0,a.kt)("inlineCode",{parentName:"p"},"dlv exec  /home/vagrant/go/src/kubernetes/_output/bin/kube-apiserver  --headless --listen=:12345 --api-version=2 --log --log-output=debugger,gdbwire,lldbout,debuglineerr,rpc,dap,fncall,minidump --log-dest=/tmp/deleve.log --")," \u4e3a dlv \u53c2\u6570\uff0c\u518d\u540e\u9762\u7684\u4e3a\u8c03\u8bd5\u7a0b\u5e8f\u7684\u53c2\u6570\u3002"))}d.isMDXComponent=!0}}]);
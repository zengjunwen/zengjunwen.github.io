"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9157],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),m=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=m(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=m(n),f=a,g=s["".concat(u,".").concat(f)]||s[f]||c[f]||o;return n?r.createElement(g,l(l({ref:e},p),{},{components:n})):r.createElement(g,l({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[s]="string"==typeof t?t:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},875:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={slug:"2023-08-21 ARTS",title:"2023-08-21 ARTS",authors:{name:"Jon",title:"\ud83d\ude0c",url:"https://github.com",image_url:"https://avatars.githubusercontent.com/u/21982782?s=96&v=4"},tags:["ARTS"]},l=void 0,i={permalink:"/blog/2023-08-21 ARTS",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/ARTS/2023-08-21.md",source:"@site/blog/ARTS/2023-08-21.md",title:"2023-08-21 ARTS",description:"A",date:"2023-08-21T00:00:00.000Z",formattedDate:"August 21, 2023",tags:[{label:"ARTS",permalink:"/blog/tags/arts"}],readingTime:5.01,hasTruncateMarker:!1,authors:[{name:"Jon",title:"\ud83d\ude0c",url:"https://github.com",image_url:"https://avatars.githubusercontent.com/u/21982782?s=96&v=4",imageURL:"https://avatars.githubusercontent.com/u/21982782?s=96&v=4"}],frontMatter:{slug:"2023-08-21 ARTS",title:"2023-08-21 ARTS",authors:{name:"Jon",title:"\ud83d\ude0c",url:"https://github.com",image_url:"https://avatars.githubusercontent.com/u/21982782?s=96&v=4",imageURL:"https://avatars.githubusercontent.com/u/21982782?s=96&v=4"},tags:["ARTS"]},prevItem:{title:"\u5b89\u88c5\u548c\u4f7f\u7528Vagrant",permalink:"/blog/\u5b89\u88c5\u548c\u4f7f\u7528Vagrant"},nextItem:{title:"2023-08-14 ARTS",permalink:"/blog/2023-08-14 ARTS"}},u={authorsImageUrls:[void 0]},m=[{value:"A",id:"a",level:3},{value:"R",id:"r",level:3},{value:"T",id:"t",level:3},{value:"S",id:"s",level:3}],p={toc:m},s="wrapper";function c(t){let{components:e,...o}=t;return(0,a.kt)(s,(0,r.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"a"},"A"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/binary-tree-maximum-path-sum/"},"124. \u4e8c\u53c9\u6811\u4e2d\u7684\u6700\u5927\u8def\u5f84\u548c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"/**\n * Definition for a binary tree node.\n * type TreeNode struct {\n *     Val int\n *     Left *TreeNode\n *     Right *TreeNode\n * }\n */\nfunc maxPathSum(root *TreeNode) int {\n    maxSum := math.MinInt32\n    dfs(root, &maxSum)\n\n    return maxSum\n}\n\nfunc dfs(root *TreeNode, maxSum *int) int {\n    if root == nil {\n        return 0\n    }\n\n    tempSum,maxSubPathSum := root.Val, root.Val\n\n    maxLeftNodeSum :=  dfs(root.Left, maxSum)\n    if maxLeftNodeSum > 0 {\n        tempSum += maxLeftNodeSum\n    }\n    maxRightNodeSum := dfs(root.Right, maxSum)\n    if maxRightNodeSum > 0 {\n        tempSum += maxRightNodeSum\n    }\n\n    if *maxSum < tempSum {\n        *maxSum = tempSum\n    }\n\n    maxSubPathSum += max(0, max(maxLeftNodeSum, maxRightNodeSum))\n\n    return maxSubPathSum\n}\n\nfunc max(a, b int) int {\n    if a > b {\n        return a\n    }\n\n    return b\n}\n")),(0,a.kt)("h3",{id:"r"},"R"),(0,a.kt)("p",null,"\u6700\u8fd1\u5728\u770b\u300aObservability Engineering\u300b\u82f1\u6587\u539f\u8457\uff0c\u5728\u8fd9\u90e8\u5206\u6211\u4eec\u7b80\u5355\u804a\u4e0b\u201cThe Mathematical Definition of Observability\u201d \u548c \u201cApplying Observability to Software Systems\u201d\u3002"),(0,a.kt)("p",null,"\u5b66\u8fc7\u300a\u73b0\u4ee3\u63a7\u5236\u7406\u8bba\u300b\u7684\u540c\u5b66\u5e94\u8be5\u5bf9\u80fd\u89c2\u6027\u6709\u57fa\u672c\u7684\u8ba4\u8bc6\u3002\u80fd\u89c2\u6027\u4e0e\u80fd\u63a7\u6027\u57281960\u5e74\u88ab\u5361\u5c14\u66fc\u63d0\u51fa\uff0c\u5b83\u662f\u6700\u4f18\u63a7\u5236\u548c\u6700\u4f18\u4f30\u8ba1\u7684\u8bbe\u8ba1\u57fa\u7840\u3002\u5728\u63a7\u5236\u7406\u8bba\u4e2d\uff0c\u80fd\u89c2\u6027\u7684\u6570\u5b66\u542b\u4e49\u5982\u4e0b\uff1a\u5982\u679c\u5bf9\u4e8e\u4efb\u610f\u7ed9\u5b9a\u7684\u8f93\u5165u\uff0c\u5728\u6709\u9650\u7684\u89c2\u6d4b\u65f6\u95f4\u8303\u56f4\u5185","[t0,tf]","\u671f\u95f4\u8f93\u51fay(t)\u80fd\u552f\u4e00\u5730\u786e\u5b9a\u7cfb\u7edf\u5728t0\u65f6\u523b\u7684\u72b6\u6001\uff0c\u5219\u79f0t0\u65f6\u7684\u7cfb\u7edf\u72b6\u6001\u80fd\u89c2\u6d4b\uff0c\u82e5\u7cfb\u7edf\u7684\u6bcf\u4e00\u4e2a\u72b6\u6001\u90fd\u662f\u80fd\u89c2\u6d4b\u7684\uff0c\u5219\u79f0\u7cfb\u7edf\u662f\u72b6\u6001\u5b8c\u5168\u80fd\u89c2\u6d4b\u7684\uff0c\u7b80\u79f0\u80fd\u89c2\u7684\u3002"),(0,a.kt)("p",null,"\u5982\u4f55\u5c06\u80fd\u89c2\u6027\u5e94\u7528\u5230\u8f6f\u4ef6\u7cfb\u7edf\u5462\uff1f\u6211\u4eec\u53ef\u4ece\u4ee5\u4e0b\u51e0\u4e2a\u95ee\u9898\u7740\u624b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7406\u89e3\u5e94\u7528\u7684\u5185\u90e8\u8fd0\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e86\u89e3\u5e94\u7528\u7a0b\u5e8f\u53ef\u80fd\u4f1a\u8fdb\u5165\u7684\u4efb\u4f55\u7cfb\u7edf\u72b6\u6001\uff0c\u5373\u4f7f\u662f\u4ece\u672a\u89c1\u8fc7\u5e76\u7684\u72b6\u6001\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5916\u90e8\u5de5\u5177\u6765\u89c2\u5bdf\u548c\u67e5\u8be2\u4e86\u89e3\u7cfb\u7edf\u7684\u5185\u90e8\u72b6\u6001\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7406\u89e3\u5185\u90e8\u72b6\u6001\u800c\u65e0\u9700\u53d1\u5e03\u4efb\u4f55\u65b0\u7684\u81ea\u5b9a\u4e49\u4ee3\u7801\u6765\u5904\u7406\u5b83(\u9700\u8981\u4e8b\u5148\u4e86\u89e3\u5b83)\u3002")),(0,a.kt)("h3",{id:"t"},"T"),(0,a.kt)("p",null,"Vagrant\u4f5c\u4e3a\u4e00\u6b3e\u7ba1\u7406\u865a\u62df\u673a\u5de5\u5177\uff0c\u80fd\u591f\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u642d\u5efa\u548c\u7ba1\u7406\u81ea\u5df1\u7684\u5f00\u53d1\u73af\u5883\u3002\n",(0,a.kt)("a",{parentName:"p",href:"https://zengjunwen.github.io/blog/%E5%AE%89%E8%A3%85%E5%92%8C%E4%BD%BF%E7%94%A8Vagrant"},"\u5b89\u88c5\u624b\u518c-Apple M2")),(0,a.kt)("h3",{id:"s"},"S"),(0,a.kt)("p",null,"\u4eca\u5929\u8bb2\u4e00\u4e9b\u548c\u7cfb\u7edf\u8bbe\u8ba1\u76f8\u5173\u7684\u4e00\u4e9b\u4e1c\u897f\uff0c\u540e\u9762\u4e5f\u4f1a\u5199\u4e00\u7cfb\u5217\u7cfb\u7edf\u8bbe\u8ba1\u7684\u6587\u7ae0\u3002\u7cfb\u7edf\u8bbe\u8ba1\uff0c\u4ece\u5b8f\u89c2\u89d2\u5ea6\u6765\u8bb2\uff0c\u6709\u4e00\u5957\u6210\u719f\u7684\u65b9\u6cd5\u8bba\uff0c\u5927\u5bb6\u5e94\u8be5\u90fd\u77e5\u9053\uff0c\u8fd9\u5957\u65b9\u6cd5\u8bba\u53eb\u7cfb\n\u7edf\u5de5\u7a0b\uff0c\u5f53\u7136\uff0c\u6211\u4eec\u4e0d\u4f1a\u4ece\u7cfb\u7edf\u5de5\u7a0b\u8fd9\u4e48\u4e13\u4e1a\u7684\u89d2\u5ea6\u6765\u804a\u7cfb\u7edf\u8bbe\u8ba1\uff0c\u76f8\u53cd\uff0c\u6211\u60f3\u7ed3\u5408\u5de5\u4f5c\u4e2d\u6700\u957f\u9047\u5230\u7684\u95ee\u9898\u6765\u804a\u4e00\u4e9b\u548c\u7cfb\u7edf\u8bbe\u8ba1\u76f8\u5173\u7684\u4e1c\u897f\u3002"),(0,a.kt)("p",null,"\u5728\u8f6f\u4ef6\u5f00\u53d1\u9886\u57df\uff0c\u5bf9\u4e1a\u52a1\u800c\u8a00\uff0c\u63d0\u4f9b\u4e00\u4e2a\u9ad8\u53ef\u9760\u7684\u7cfb\u7edf\u81f3\u5173\u91cd\u8981\u3002\u5982\u4f55\u8861\u91cf\u7cfb\u7edf\u7684\u53ef\u9760\u6027\uff1f\u901a\u8fc7\u67e5\u8be2\u76f8\u5173\u6587\u732e\uff0c\u5f88\u5c11\u6709\u4e00\u4e2a\u4e25\u683c\u7684\u6807\u51c6\u6765\u5b9a\u4e49\u8f6f\u4ef6\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u3002\u53cd\u800c\n\u4ece\u7406\u8bba\u7684\u89d2\u5ea6\u6765\uff0c\u901a\u8fc7\u62bd\u8c61\u7684\u6570\u5b66\u516c\u5f0f\u6765\u5b9a\u4e49\u7cfb\u7edf\u7684\u53ef\u9760\u6027\uff0c\u5728\u5f88\u591a\u8bba\u6587\u91cc\u90fd\u80fd\u67e5\u5230\u3002\u5bf9\u4e8e\u8f6f\u4ef6\u7cfb\u7edf\uff0c\u6211\u8ba4\u4e3a\u5982\u4e0b\u5b9a\u4e49\u7cfb\u7edf\u7684\u53ef\u9760\u6027\uff0c\u53ef\u80fd\u66f4\u901a\u4fd7\u6613\u61c2\uff1a\u201c\u8f6f\u4ef6\u7cfb\u7edf\u7684\u53ef\u9760\n\u6027\u8868\u793a\u7cfb\u7edf\u6b63\u5e38\u5904\u7406\u4efb\u52a1\u7684\u6982\u7387\u201d\u3002\u7cfb\u7edf\u6b63\u5e38\u8fd0\u884c\u7684\u6982\u7387\u8d8a\u9ad8\uff0c\u7cfb\u7edf\u8d8a\u53ef\u9760\u3002\u5f53\u7136\u8fd9\u4e2a\u8bf4\u6cd5\u5e76\u4e0d\u662f\u6ca1\u6709\u95ee\u9898\u3002\u91c7\u7528\u4ec0\u4e48\u624b\u6bb5\u8ba1\u7b97\u7cfb\u7edf\u7684\u53ef\u9760\u6027\u662f\u5f88\u503c\u5f97\u8ba8\u8bba\u7684\u4e00\u4e2a\u95ee\u9898\u3002\u5728\n\u4e0d\u540c\u573a\u666f\u4e0b\uff0c\u7cfb\u7edf\u6b63\u5e38\u5904\u7406\u4efb\u52a1\u7684\u6982\u7387\u53ef\u80fd\u662f\u4e0d\u540c\u7684\u3002\u6211\u4eec\u9700\u8981\u8003\u8651\u4e0d\u540c\u573a\u666f\u6765\u8861\u91cf\u7cfb\u7edf\u7684\u53ef\u9760\u6027\u3002\u6839\u636e\u8fd9\u4e9b\u7406\u89e3\uff0c\u6211\u4eec\u5f88\u5bb9\u7406\u89e3\u4e3a\u4ec0\u4e48\u7cfb\u7edf\u8981\u8bbe\u8ba1\u65f6\uff0c\u8981\u8003\u8651\u4ee5\u4e0b\u95ee\u9898\u4e86\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9ad8\u5e76\u53d1\uff0c\u4fdd\u8bc1\u5728 \u8bf7\u6c42\u91cf\u5267\u589e\u65f6\uff0c\u7cfb\u7edf\u4f9d\u7136\u6b63\u5e38\u8fd0\u884c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9ad8\u53ef\u7528\uff0c\u4e0d\u56e0\u4e3a\u67d0\u4e9b\u670d\u52a1\u8282\u70b9\u6302\u4e86\uff0c\u5bfc\u81f4\u7cfb\u7edf\u4e0d\u53ef\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8fc7\u8f7d\u4fdd\u62a4\uff0c\u4e0d\u56e0\u51fa\u4e4e\u610f\u6599\u7684\u6d41\u91cf\u5bfc\u81f4\u670d\u52a1\u4e0d\u53ef\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9694\u79bb\uff0c\u9632\u6b62\u95ee\u9898\u5728\u7cfb\u7edf\u6269\u6563\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7070\u5ea6\uff0c\u65b0\u529f\u80fd\u9010\u6e10\u4e0a\u7ebf\u3002")),(0,a.kt)("p",null,"\u597d\u4e86\uff0c\u4eca\u5929\u5c31\u804a\u5230\u8fd9\u91cc\u3002\u540e\u7eed\u6211\u4eec\u804a\u4e00\u804a\u7cfb\u7edf\u7684\u53ef\u89c2\u6d4b\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20230827204625000",src:n(2274).Z,width:"2150",height:"1875"})))}c.isMDXComponent=!0},2274:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/image-20230827204625000-8a5d157aed93e5ff499f45cd85c5c957.png"}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7306],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=o,g=p["".concat(i,".").concat(b)]||p[b]||m[b]||a;return r?n.createElement(g,u(u({ref:t},c),{},{components:r})):n.createElement(g,u({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,u[1]=s;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},9:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={slug:"Pod\u7684\u5b9e\u73b0\u539f\u7406",title:"Pod\u7684\u5b9e\u73b0\u539f\u7406",authors:{name:"Jon",title:"\ud83d\ude0c",url:"https://github.com",image_url:"https://avatars.githubusercontent.com/u/21982782?s=96&v=4"},tags:["Kubernets"]},u=void 0,s={permalink:"/blog/Pod\u7684\u5b9e\u73b0\u539f\u7406",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/K8s/2023-07-10-Pod\u7684\u5b9e\u73b0\u539f\u7406.md",source:"@site/blog/K8s/2023-07-10-Pod\u7684\u5b9e\u73b0\u539f\u7406.md",title:"Pod\u7684\u5b9e\u73b0\u539f\u7406",description:"Pod\u4e2d\u6258\u7ba1\u4e86\u4e00\u4e2a\u6216\u591a\u4e2a\u5bb9\u5668\u3002\u4ece\u201c\u89c4\u683c\u201d\u7684\u89d2\u5ea6\u6765\u770b\uff0cPod\u4ecb\u4e8e\u5bb9\u5668\u548cVM\u4e4b\u95f4\u2014\u2014\u5b83\u6bd4\u5bb9\u5668\u5927\uff0c\u53c8\u8fdc\u5c0f\u4e8eVM\u3002\u5728 Kubernets \u7684\u4e16\u754c\u4e2d\uff0cPod \u662f\u8fdb\u884c\u670d\u52a1\u90e8\u7f72\u7684\u57fa\u672c\u5355\u4f4d\uff0cPod \u90e8\u7f72\u64cd\u4f5c\u662f\u4e00\u4e2a\u539f\u5b50\u64cd\u4f5c\uff0c\u5373\u201c\u8981\u4e48\u5168\u90e8\u6210\u529f\uff0c\u8981\u4e48\u4ec0\u4e48\u90fd\u4e0d\u505a\u201d\uff08all-or-nothing\uff09\u3002",date:"2023-07-10T00:00:00.000Z",formattedDate:"July 10, 2023",tags:[{label:"Kubernets",permalink:"/blog/tags/kubernets"}],readingTime:2.85,hasTruncateMarker:!0,authors:[{name:"Jon",title:"\ud83d\ude0c",url:"https://github.com",image_url:"https://avatars.githubusercontent.com/u/21982782?s=96&v=4",imageURL:"https://avatars.githubusercontent.com/u/21982782?s=96&v=4"}],frontMatter:{slug:"Pod\u7684\u5b9e\u73b0\u539f\u7406",title:"Pod\u7684\u5b9e\u73b0\u539f\u7406",authors:{name:"Jon",title:"\ud83d\ude0c",url:"https://github.com",image_url:"https://avatars.githubusercontent.com/u/21982782?s=96&v=4",imageURL:"https://avatars.githubusercontent.com/u/21982782?s=96&v=4"},tags:["Kubernets"]},prevItem:{title:"Go\u5bf9\u79f0\u52a0\u5bc6",permalink:"/blog/Go\u5bf9\u79f0\u52a0\u5bc6"},nextItem:{title:"\u4e86\u89e3Kubernets\u5bf9\u8c61",permalink:"/blog/\u4e86\u89e3Kubernets\u5bf9\u8c61"}},i={authorsImageUrls:[void 0]},l=[],c={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pod\u4e2d\u6258\u7ba1\u4e86\u4e00\u4e2a\u6216\u591a\u4e2a\u5bb9\u5668\u3002\u4ece\u201c\u89c4\u683c\u201d\u7684\u89d2\u5ea6\u6765\u770b\uff0cPod\u4ecb\u4e8e\u5bb9\u5668\u548cVM\u4e4b\u95f4\u2014\u2014\u5b83\u6bd4\u5bb9\u5668\u5927\uff0c\u53c8\u8fdc\u5c0f\u4e8eVM\u3002\u5728 Kubernets \u7684\u4e16\u754c\u4e2d\uff0cPod \u662f\u8fdb\u884c\u670d\u52a1\u90e8\u7f72\u7684\u57fa\u672c\u5355\u4f4d\uff0cPod \u90e8\u7f72\u64cd\u4f5c\u662f\u4e00\u4e2a\u539f\u5b50\u64cd\u4f5c\uff0c\u5373\u201c\u8981\u4e48\u5168\u90e8\u6210\u529f\uff0c\u8981\u4e48\u4ec0\u4e48\u90fd\u4e0d\u505a\u201d\uff08all-or-nothing\uff09\u3002"))}m.isMDXComponent=!0}}]);
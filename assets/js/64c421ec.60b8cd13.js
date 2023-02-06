"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8527],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),v=a,f=u["".concat(c,".").concat(v)]||u[v]||m[v]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},32389:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"VAST v1.1.2",description:"VAST v1.1.2 - Compaction & Query Language Frontends",authors:"lava",date:new Date("2022-03-29T00:00:00.000Z"),tags:["release","compaction","query"]},i=void 0,l={permalink:"/blog/vast-v1.1.2",source:"@site/blog/vast-v1.1.2/index.md",title:"VAST v1.1.2",description:"VAST v1.1.2 - Compaction & Query Language Frontends",date:"2022-03-29T00:00:00.000Z",formattedDate:"March 29, 2022",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"compaction",permalink:"/blog/tags/compaction"},{label:"query",permalink:"/blog/tags/query"}],readingTime:.33,hasTruncateMarker:!0,authors:[{name:"Benno Evers",title:"Principal Engineer",url:"https://github.com/lava",email:"benno@tenzir.com",imageURL:"https://github.com/lava.png",key:"lava"}],frontMatter:{title:"VAST v1.1.2",description:"VAST v1.1.2 - Compaction & Query Language Frontends",authors:"lava",date:"2022-03-29T00:00:00.000Z",tags:["release","compaction","query"]},prevItem:{title:"VAST v2.0",permalink:"/blog/vast-v2.0"},nextItem:{title:"VAST v1.1.1",permalink:"/blog/vast-v1.1.1"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dear community, we are happy to announce the release of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/releases/tag/v1.1.2"},"VAST\nv1.1.2"),", the latest release\non the VAST v1.1 series. This release contains a fix for a race condition that\ncould lead to VAST eventually becoming unresponsive to queries in large\ndeployments."),(0,a.kt)("p",null,"Fixed a race condition that would cause queries to become stuck when an exporter\nwould time out during the meta index lookup.\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/pull/2165"},"#2165")))}m.isMDXComponent=!0}}]);
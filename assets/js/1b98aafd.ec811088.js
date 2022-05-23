"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6415],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,v=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77784:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={title:"VAST v1.1.2",description:"VAST v1.1.2 - Compaction & Query Language Frontends",authors:"lava",slug:"2022-03-29/vast-v1.1.2",tags:["release","compaction","query"]},l=void 0,u={permalink:"/blog/2022-03-29/vast-v1.1.2",source:"@site/blog/2022-03-29-vast-v1.1.2/README.md",title:"VAST v1.1.2",description:"VAST v1.1.2 - Compaction & Query Language Frontends",date:"2022-03-29T00:00:00.000Z",formattedDate:"March 29, 2022",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"compaction",permalink:"/blog/tags/compaction"},{label:"query",permalink:"/blog/tags/query"}],readingTime:.33,truncated:!0,authors:[{name:"Benno Evers",title:"Principal Engineer",url:"https://github.com/lava",email:"benno@tenzir.com",imageURL:"https://github.com/lava.png",key:"lava"}],frontMatter:{title:"VAST v1.1.2",description:"VAST v1.1.2 - Compaction & Query Language Frontends",authors:"lava",slug:"2022-03-29/vast-v1.1.2",tags:["release","compaction","query"]},prevItem:{title:"VAST v2.0",permalink:"/blog/2022-05-16/vast-v2.0"},nextItem:{title:"VAST v1.1.1",permalink:"/blog/2022-03-25/vast-v1.1.1"}},s={authorsImageUrls:[void 0]},p=[],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Dear community, we are happy to announce the release of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/releases/tag/v1.1.2"},"VAST\nv1.1.2"),", the latest release\non the VAST v1.1 series. This release contains a fix for a race condition that\ncould lead to VAST eventually becoming unresponsive to queries in large\ndeployments."),(0,o.kt)("p",null,"Fixed a race condition that would cause queries to become stuck when an exporter\nwould time out during the meta index lookup.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/pull/2165"},"#2165")))}f.isMDXComponent=!0}}]);
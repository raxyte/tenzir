"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2557],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58905:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>y,default:()=>k,frontMatter:()=>m,metadata:()=>b,toc:()=>w});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&l(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&l(e,r,t[r]);return e},u=(e,t)=>a(e,i(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={},y="write",b={unversionedId:"operators/sinks/write",id:"operators/sinks/write",title:"write",description:"The write operator is a short form of the to operator that allows",source:"@site/docs/operators/sinks/write.md",sourceDirName:"operators/sinks",slug:"/operators/sinks/write",permalink:"/docs/next/operators/sinks/write",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/operators/sinks/write.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"to",permalink:"/docs/next/operators/sinks/to"},next:{title:"User-Defined",permalink:"/docs/next/operators/user-defined"}},O={},w=[],v={toc:w},h="wrapper";function k(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(h,u(f(f({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"write"}),"write"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"write")," operator is a short form of the ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/next/operators/sinks/to"}),(0,n.kt)("inlineCode",{parentName:"a"},"to"))," operator that allows\nfor omitting the connector."),(0,n.kt)("p",null,"Please refer to the documentation of ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/next/operators/sinks/to"}),(0,n.kt)("inlineCode",{parentName:"a"},"to")),"."))}k.isMDXComponent=!0}}]);
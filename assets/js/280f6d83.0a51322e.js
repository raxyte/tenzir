"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||c;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14138:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>w,frontMatter:()=>m,metadata:()=>b,toc:()=>O});var n=r(3905),o=Object.defineProperty,c=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&l(e,r,t[r]);return e},f=(e,t)=>c(e,a(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={sidebar_custom_props:{connector:{saver:!0}}},v="stdout",b={unversionedId:"connectors/stdout",id:"version-v4.10/connectors/stdout",title:"stdout",description:"The stdout saver is a shorthand for file with argument -.",source:"@site/versioned_docs/version-v4.10/connectors/stdout.md",sourceDirName:"connectors",slug:"/connectors/stdout",permalink:"/v4.10/connectors/stdout",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.10/connectors/stdout.md",tags:[],version:"v4.10",frontMatter:{sidebar_custom_props:{connector:{saver:!0}}},sidebar:"docsSidebar",previous:{title:"stdin",permalink:"/v4.10/connectors/stdin"},next:{title:"tcp",permalink:"/v4.10/connectors/tcp"}},y={},O=[],g={toc:O},h="wrapper";function w(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(h,f(u(u({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"stdout"}),"stdout"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"stdout")," saver is a shorthand for ",(0,n.kt)("a",u({parentName:"p"},{href:"/v4.10/connectors/file"}),(0,n.kt)("inlineCode",{parentName:"a"},"file"))," with argument ",(0,n.kt)("inlineCode",{parentName:"p"},"-"),"."))}w.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67401],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>v,default:()=>w,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>a(e,s(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const m={},v="save",y={unversionedId:"understand/operators/sinks/save",id:"version-VAST v3.1/understand/operators/sinks/save",title:"save",description:"The save operator acquires raw bytes from a connector.",source:"@site/versioned_docs/version-VAST v3.1/understand/operators/sinks/save.md",sourceDirName:"understand/operators/sinks",slug:"/understand/operators/sinks/save",permalink:"/understand/operators/sinks/save",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-VAST v3.1/understand/operators/sinks/save.md",tags:[],version:"VAST v3.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Sinks",permalink:"/understand/operators/sinks/"},next:{title:"to",permalink:"/understand/operators/sinks/to"}},k={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;connector&gt;</code>",id:"connector",level:3},{value:"Examples",id:"examples",level:2}],h={toc:b},O="wrapper";function w(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(O,u(d(d({},h),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"save"}),"save"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"save")," operator acquires raw bytes from a ",(0,n.kt)("a",d({parentName:"p"},{href:"/understand/connectors/"}),"connector"),"."),(0,n.kt)("admonition",d({},{title:"Expert Operator",type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"save")," operator is a lower-level building block of the ",(0,n.kt)("a",d({parentName:"p"},{href:"/understand/operators/sinks/to"}),(0,n.kt)("inlineCode",{parentName:"a"},"to"))," and\n",(0,n.kt)("a",d({parentName:"p"},{href:"/understand/operators/sinks/write"}),(0,n.kt)("inlineCode",{parentName:"a"},"write"))," operators. Only use this if you need to operate on raw\nbytes.")),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"save <connector>\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"save")," operator operates on raw bytes."),(0,n.kt)("p",null,"Notably, it cannot be used after an operator that emits events, but rather only\nwith operators that emit bytes, e.g., ",(0,n.kt)("a",d({parentName:"p"},{href:"/understand/operators/transformations/print"}),(0,n.kt)("inlineCode",{parentName:"a"},"print"))," or\n",(0,n.kt)("a",d({parentName:"p"},{href:"/understand/operators/sources/load"}),(0,n.kt)("inlineCode",{parentName:"a"},"load")),"."),(0,n.kt)("h3",d({},{id:"connector"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<connector>")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",d({parentName:"p"},{href:"/understand/connectors/"}),"connector")," used to save bytes."),(0,n.kt)("p",null,"Some connectors have connector-specific options. Please refer to the\ndocumentation of the individual connectors for more information."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Write bytes to stdout:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"save stdin\n")),(0,n.kt)("p",null,"Write bytes to the file ",(0,n.kt)("inlineCode",{parentName:"p"},"path/to/eve.json"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"save file path/to/eve.json\n")))}w.isMDXComponent=!0}}]);
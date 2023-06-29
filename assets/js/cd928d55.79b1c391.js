"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52117],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77279:(e,t,r)=>{r.d(t,{ZP:()=>y});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>a(e,i(t)),m=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const d={toc:[]},v="wrapper";function y(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(v,u(f(f({},d),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("admonition",f({},{title:"Community Edition Plugin",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"This plugin is not open source. Give it a spin in our ",(0,n.kt)("a",f({parentName:"p"},{href:"https://tenzir.com/pricing"}),"Community\nEdition"),".")))}y.isMDXComponent=!0},17175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>w,contentTitle:()=>y,default:()=>h,frontMatter:()=>v,metadata:()=>b,toc:()=>O});var n=r(3905),o=r(77279),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&f(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&f(e,r,t[r]);return e},m=(e,t)=>i(e,l(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const v={},y="netflow",b={unversionedId:"formats/netflow",id:"version-Tenzir v4.0-rc1/formats/netflow",title:"netflow",description:"Reads NetFlow v5, v9, and IPFIX.",source:"@site/versioned_docs/version-Tenzir v4.0-rc1/formats/netflow.md",sourceDirName:"formats",slug:"/formats/netflow",permalink:"/formats/netflow",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0-rc1/formats/netflow.md",tags:[],version:"Tenzir v4.0-rc1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"json",permalink:"/formats/json"},next:{title:"parquet",permalink:"/formats/parquet"}},w={},O=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],k={toc:O},g="wrapper";function h(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(g,m(u(u({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"netflow"}),"netflow"),(0,n.kt)("p",null,"Reads NetFlow v5, v9, and IPFIX."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"netflow\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)(o.ZP,{mdxType:"CommunityEdition"}),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"https://en.wikipedia.org/wiki/NetFlow"}),"NetFlow")," is suite of protocols for\ncomputing and relaying flow-level statistics. An ",(0,n.kt)("em",{parentName:"p"},"exporter"),", such as a router or\nswitch, aggregates packets into flow records and sends them to a ",(0,n.kt)("em",{parentName:"p"},"collector"),"."),(0,n.kt)("p",null,"Tenzir supports NetFlow v5, v9, and IPFIX via ",(0,n.kt)("em",{parentName:"p"},"Flexible NetFlow"),". For IPFIX we\nsupport Private Enterprise Numbers 3054 (IXIA IxFlow) and 29305 (Bidirectional\nFlow Export). Please contact us if you require support for additional Private\nEnterprise Numbers."),(0,n.kt)("p",null,"The parser auto-detects the NetFlow version at runtime, so you don't have to\nprovide a specific version."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read a binary NetFlow file:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"from file /tmp/netflow.bin read netflow\n")),(0,n.kt)("p",null,"Become a NetFlow collector at port 9995:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"from udp -l :9995 read netflow\n")),(0,n.kt)("p",null,"Replay a ",(0,n.kt)("inlineCode",{parentName:"p"},"nfcapd")," file via ",(0,n.kt)("inlineCode",{parentName:"p"},"nfreplay")," into the above pipeline:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Exports all records to 127.0.0.1:9995\nnfreplay < path/to/capture.nfcapd\n")))}h.isMDXComponent=!0}}]);
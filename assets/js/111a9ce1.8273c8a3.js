"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46024],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(r),f=a,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},48400:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>g,frontMatter:()=>m,metadata:()=>h,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&u(e,r,t[r]);return e},d=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const m={},y="parquet",h={unversionedId:"understand/formats/parquet",id:"understand/formats/parquet",title:"parquet",description:"Reads events from a Parquet file. Writes events to a Parquet file.",source:"@site/docs/understand/formats/parquet.md",sourceDirName:"understand/formats",slug:"/understand/formats/parquet",permalink:"/docs/next/understand/formats/parquet",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/understand/formats/parquet.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"netflow",permalink:"/docs/next/understand/formats/netflow"},next:{title:"pcap",permalink:"/docs/next/understand/formats/pcap"}},v={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],k={toc:b},O="wrapper";function g(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(O,d(c(c({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"parquet"}),"parquet"),(0,n.kt)("p",null,"Reads events from a Parquet file. Writes events to a ",(0,n.kt)("a",c({parentName:"p"},{href:"https://parquet.apache.org/"}),"Parquet")," file."),(0,n.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"parquet\n")),(0,n.kt)("h2",c({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"parquet")," format provides both a parser and a printer for Parquet files."),(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"https://parquet.apache.org/"}),"Apache Parquet")," is a columnar storage format that a variety of data\ntools support."),(0,n.kt)("admonition",c({},{title:"MMAP Parsing",type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"When using the parser with the ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/next/understand/connectors/file"}),(0,n.kt)("inlineCode",{parentName:"a"},"file"))," connector, we\nrecommend passing the ",(0,n.kt)("inlineCode",{parentName:"p"},"--mmap")," option to ",(0,n.kt)("inlineCode",{parentName:"p"},"file")," to give the parser full control\nover the reads, which leads to better performance and memory usage.")),(0,n.kt)("p",null,"VAST writes Parquet files with Zstd compression enables. Our blog has a ",(0,n.kt)("a",c({parentName:"p"},{href:"../../../../blog/parquet-and-feather-writing-security-telemetry/"}),"post\nwith an in-depth analysis")," about the effect of Zstd\ncompression."),(0,n.kt)("h2",c({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read a Parquet file via the ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/next/understand/operators/sources/from"}),(0,n.kt)("inlineCode",{parentName:"a"},"from"))," operator:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"from file --mmap /tmp/data.prq read parquet\n")),(0,n.kt)("admonition",c({},{title:"Limitation",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"parquet")," parser currently supports only Parquet files written with VAST. We\nwill remove this limitation in the future.")))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61297],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),u=o,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},45768:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>g,frontMatter:()=>f,metadata:()=>h,toc:()=>k});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>a(e,p(t)),u=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_custom_props:{operator:{transformation:!0}}},v="compress",h={unversionedId:"operators/compress",id:"version-v4.10/operators/compress",title:"compress",description:"Compresses a stream of bytes.",source:"@site/versioned_docs/version-v4.10/operators/compress.md",sourceDirName:"operators",slug:"/operators/compress",permalink:"/v4.10/operators/compress",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.10/operators/compress.md",tags:[],version:"v4.10",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"chart",permalink:"/v4.10/operators/chart"},next:{title:"context",permalink:"/v4.10/operators/context"}},y={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--level=&lt;level&gt;</code>",id:"--levellevel",level:3},{value:"<code>&lt;codec&gt;</code>",id:"codec",level:3},{value:"Examples",id:"examples",level:2}],b={toc:k},O="wrapper";function g(e){var t=e,{components:r}=t,o=u(t,["components"]);return(0,n.kt)(O,m(d(d({},b),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"compress"}),"compress"),(0,n.kt)("p",null,"Compresses a stream of bytes."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"compress [--level=<level>] <codec>\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"compress")," operator compresses bytes in a pipeline incrementally with a\nknown codec."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"compress")," operator is invoked automatically as a part of ",(0,n.kt)("a",d({parentName:"p"},{href:"/v4.10/operators/to"}),(0,n.kt)("inlineCode",{parentName:"a"},"to")),"\nif the resulting file has a file extension indicating compression.\nThis behavior can be circumvented by using ",(0,n.kt)("a",d({parentName:"p"},{href:"/v4.10/operators/save"}),(0,n.kt)("inlineCode",{parentName:"a"},"save"))," directly."),(0,n.kt)("admonition",d({},{title:"Streaming Compression",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"The operator uses ",(0,n.kt)("a",d({parentName:"p"},{href:"https://arrow.apache.org/docs/cpp/api/utilities.html#compression"}),"Apache Arrow's compression\nutilities")," under the hood, and transparently supports\nall options that Apache Arrow supports for streaming compression."),(0,n.kt)("p",{parentName:"admonition"},"Besides the supported ",(0,n.kt)("inlineCode",{parentName:"p"},"brotli"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"bz2"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"gzip"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"lz4"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"zstd"),", Apache Arrow\nalso ships with codecs for ",(0,n.kt)("inlineCode",{parentName:"p"},"lzo"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"lz4_raw"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"lz4_hadoop")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"snappy"),", which\nonly support oneshot compression. Support for them is not currently implemented.")),(0,n.kt)("h3",d({},{id:"--levellevel"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--level=<level>")),(0,n.kt)("p",null,"The compression level to use. The supported values depend on the codec used. If\nomitted, the default level for the codec is used."),(0,n.kt)("h3",d({},{id:"codec"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<codec>")),(0,n.kt)("p",null,"An identifier of the codec to use. Currently supported are ",(0,n.kt)("inlineCode",{parentName:"p"},"brotli"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"bz2"),",\n",(0,n.kt)("inlineCode",{parentName:"p"},"gzip"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"lz4"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"zstd"),"."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Export all events in a Gzip-compressed NDJSON file:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"export\n| write json --compact-output\n| compress gzip\n| save file /tmp/backup.json.gz\n")),(0,n.kt)("p",null,"Recompress a Zstd-compressed file at a higher compression level:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"load file in.zst\n| decompress zstd\n| compress --level 18 zstd\n| save file out.zst\n")))}g.isMDXComponent=!0}}]);
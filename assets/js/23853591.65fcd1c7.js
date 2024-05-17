"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91417],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,u=m["".concat(s,".").concat(f)]||m[f]||d[f]||a;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},710:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>N,frontMatter:()=>u,metadata:()=>v,toc:()=>k});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const u={sidebar_custom_props:{operator:{source:!0}}},h="from",v={unversionedId:"operators/from",id:"version-v4.10/operators/from",title:"from",description:"Produces events by combining a connector and a format.",source:"@site/versioned_docs/version-v4.10/operators/from.md",sourceDirName:"operators",slug:"/operators/from",permalink:"/v4.10/operators/from",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.10/operators/from.md",tags:[],version:"v4.10",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"fluent-bit",permalink:"/v4.10/operators/fluent-bit"},next:{title:"hash",permalink:"/v4.10/operators/hash"}},y={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;connector&gt;</code>",id:"connector",level:3},{value:"<code>&lt;format&gt;</code>",id:"format",level:3},{value:"Examples",id:"examples",level:2}],b={toc:k},g="wrapper";function N(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(g,d(m(m({},b),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"from"}),"from"),(0,n.kt)("p",null,"Produces events by combining a ",(0,n.kt)("a",m({parentName:"p"},{href:"/v4.10/connectors"}),"connector")," and a ",(0,n.kt)("a",m({parentName:"p"},{href:"/v4.10/formats"}),"format"),"."),(0,n.kt)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"from <url> [read <format>]\nfrom <path> [read <format>]\nfrom <connector> [read <format>]\n")),(0,n.kt)("h2",m({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"from")," operator produces events at the beginning of a pipeline by bringing\ntogether a ",(0,n.kt)("a",m({parentName:"p"},{href:"/v4.10/connectors"}),"connector")," and a ",(0,n.kt)("a",m({parentName:"p"},{href:"/v4.10/formats"}),"format"),"."),(0,n.kt)("p",null,"If given something that looks like a path to a file, the connector can pick\nout a format automatically based on the file extension or the file name.\nThis enables a shorter syntax, e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"from https://example.com/file.yml"),"\nuses the ",(0,n.kt)("inlineCode",{parentName:"p"},"yaml")," format. All connectors also have a default format,\nwhich will be used if the format can't be determined by the path.\nFor most connectors, this default format is ",(0,n.kt)("inlineCode",{parentName:"p"},"json"),". So, for example,\n",(0,n.kt)("inlineCode",{parentName:"p"},"from stdin")," uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"json")," format."),(0,n.kt)("p",null,"Additionally, if a file extension indicating compression can be found,\n",(0,n.kt)("a",m({parentName:"p"},{href:"/v4.10/operators/decompress"}),(0,n.kt)("inlineCode",{parentName:"a"},"decompress"))," is automatically used.\nFor example, ",(0,n.kt)("inlineCode",{parentName:"p"},"from myfile.json.gz")," is automatically gzip-decompressed\nand parsed as json, i.e., ",(0,n.kt)("inlineCode",{parentName:"p"},"load myfile.json.gz | decompress gzip | read json"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"from")," operator is a pipeline under the hood. For most cases, it is equal to\n",(0,n.kt)("inlineCode",{parentName:"p"},"load <connector> | read <format>"),". However, for some combinations of\nconnectors and formats the underlying pipeline is a lot more complex. We\nrecommend always using ",(0,n.kt)("inlineCode",{parentName:"p"},"from ... read ...")," over the ",(0,n.kt)("a",m({parentName:"p"},{href:"/v4.10/operators/load"}),(0,n.kt)("inlineCode",{parentName:"a"},"load"))," and\n",(0,n.kt)("a",m({parentName:"p"},{href:"/v4.10/operators/read"}),(0,n.kt)("inlineCode",{parentName:"a"},"read"))," operators."),(0,n.kt)("h3",m({},{id:"connector"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<connector>")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",m({parentName:"p"},{href:"/v4.10/connectors"}),"connector")," used to load bytes."),(0,n.kt)("p",null,"Some connectors have connector-specific options. Please refer to the\ndocumentation of the individual connectors for more information."),(0,n.kt)("h3",m({},{id:"format"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<format>")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",m({parentName:"p"},{href:"/v4.10/formats"}),"format")," used to parse events from the loaded bytes."),(0,n.kt)("p",null,"Some formats have format-specific options. Please refer to the documentation of\nthe individual formats for more information."),(0,n.kt)("h2",m({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read bytes from stdin and parse them as JSON."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"from stdin read json\nfrom file stdin read json\nfrom file - read json\nfrom - read json\n")),(0,n.kt)("p",null,"Read bytes from the file ",(0,n.kt)("inlineCode",{parentName:"p"},"path/to/eve.json")," and parse them as Suricata.\nNote that the ",(0,n.kt)("inlineCode",{parentName:"p"},"file")," connector automatically assigns the Suricata parser for\n",(0,n.kt)("inlineCode",{parentName:"p"},"eve.json")," files when no other parser is specified.\nAlso, when directly passed a filesystem path, the ",(0,n.kt)("inlineCode",{parentName:"p"},"file")," connector is automatically used."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"from path/to/eve.json\nfrom file path/to/eve.json\nfrom file path/to/eve.json read suricata\n")),(0,n.kt)("p",null,"Read bytes from the URL ",(0,n.kt)("inlineCode",{parentName:"p"},"https://example.com/data.json")," over HTTPS and parse them as JSON.\nNote that when ",(0,n.kt)("inlineCode",{parentName:"p"},"from")," is passed a URL directly, the ",(0,n.kt)("inlineCode",{parentName:"p"},"https")," connector is automatically used."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"from https://example.com/data.json read json\nfrom https example.com/data.json read json\n")))}N.isMDXComponent=!0}}]);
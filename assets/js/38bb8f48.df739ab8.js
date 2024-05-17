"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85493],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33597:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>g,frontMatter:()=>f,metadata:()=>k,toc:()=>b});var n=r(3905),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>a(e,l(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_custom_props:{format:{parser:!0,printer:!0}}},v="lines",k={unversionedId:"formats/lines",id:"version-v4.10/formats/lines",title:"lines",description:"Parses and prints events as lines.",source:"@site/versioned_docs/version-v4.10/formats/lines.md",sourceDirName:"formats",slug:"/formats/lines",permalink:"/v4.10/formats/lines",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.10/formats/lines.md",tags:[],version:"v4.10",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"kv",permalink:"/v4.10/formats/kv"},next:{title:"parquet",permalink:"/v4.10/formats/parquet"}},y={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-s|--skip-empty</code> (Parser)",id:"-s--skip-empty-parser",level:3},{value:"Examples",id:"examples",level:2}],O={toc:b},h="wrapper";function g(e){var t=e,{components:r}=t,i=m(t,["components"]);return(0,n.kt)(h,d(u(u({},O),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"lines"}),"lines"),(0,n.kt)("p",null,"Parses and prints events as lines."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("p",null,"Parser:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"lines [-s|--skip-empty]\n")),(0,n.kt)("p",null,"Printer:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"lines\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"lines")," parser takes its input bytes and splits it at a newline character."),(0,n.kt)("p",null,"Newline characters include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"\\n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"\\r\\n"))),(0,n.kt)("p",null,"The resulting events have a single field called ",(0,n.kt)("inlineCode",{parentName:"p"},"line"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"lines")," printer is an alias to ",(0,n.kt)("inlineCode",{parentName:"p"},"ssv --no-header"),".\nEach event is printed on a new line, with fields separated by spaces,\nand nulls marked with dashes (",(0,n.kt)("inlineCode",{parentName:"p"},"-"),").\nUse the ",(0,n.kt)("inlineCode",{parentName:"p"},"put"),"-operator before the ",(0,n.kt)("inlineCode",{parentName:"p"},"lines")," printer to only print a single field."),(0,n.kt)("h3",u({},{id:"-s--skip-empty-parser"}),(0,n.kt)("inlineCode",{parentName:"h3"},"-s|--skip-empty")," (Parser)"),(0,n.kt)("p",null,"Ignores empty lines in the input."),(0,n.kt)("p",null,"Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read a text file line-by-line:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"from file /tmp/file.txt read lines\n")),(0,n.kt)("p",null,"Write the version number to stdout:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"version | put version | to - write lines\n")))}g.isMDXComponent=!0}}]);
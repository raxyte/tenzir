"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2654],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>g,frontMatter:()=>d,metadata:()=>y,toc:()=>h});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const d={},v="enumerate",y={unversionedId:"operators/transformations/enumerate",id:"version-Tenzir v4.0-rc7/operators/transformations/enumerate",title:"enumerate",description:"Prepend a column with row numbers.",source:"@site/versioned_docs/version-Tenzir v4.0-rc7/operators/transformations/enumerate.md",sourceDirName:"operators/transformations",slug:"/operators/transformations/enumerate",permalink:"/operators/transformations/enumerate",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0-rc7/operators/transformations/enumerate.md",tags:[],version:"Tenzir v4.0-rc7",frontMatter:{},sidebar:"docsSidebar",previous:{title:"drop",permalink:"/operators/transformations/drop"},next:{title:"extend",permalink:"/operators/transformations/extend"}},b={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;field&gt;</code>",id:"field",level:3},{value:"Examples",id:"examples",level:2}],w={toc:h},O="wrapper";function g(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(O,m(u(u({},w),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"enumerate"}),"enumerate"),(0,n.kt)("p",null,"Prepend a column with row numbers."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"enumerate [<field>]\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"enumerate")," operator prepends a new column with row numbers to the beginning\nof the input record."),(0,n.kt)("admonition",u({},{title:"Per-schema Counting",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},'The operator counts row numbers per schema. We plan to change this behavior with\na in the future once we have a modifer that toggles "per-schema-ness"\nexplicitly.')),(0,n.kt)("h3",u({},{id:"field"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<field>")),(0,n.kt)("p",null,"Sets the name of the output field."),(0,n.kt)("p",null,"Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"#")," to avoid conflicts with existing field names."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Enumerate the input by prepending row numbers:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"from file eve.json read suricata | select event_type | enumerate | write json\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{"#": 0, "event_type": "alert"}\n{"#": 0, "event_type": "flow"}\n{"#": 1, "event_type": "flow"}\n{"#": 0, "event_type": "http"}\n{"#": 1, "event_type": "alert"}\n{"#": 1, "event_type": "http"}\n{"#": 2, "event_type": "flow"}\n{"#": 0, "event_type": "fileinfo"}\n{"#": 3, "event_type": "flow"}\n{"#": 4, "event_type": "flow"}\n')),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"index")," as field name instead of the default:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"enumerate index\n")))}g.isMDXComponent=!0}}]);
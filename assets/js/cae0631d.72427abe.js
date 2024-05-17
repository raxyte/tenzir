"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75368],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26190:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>g,frontMatter:()=>m,metadata:()=>y,toc:()=>k});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>a(e,l(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={sidebar_custom_props:{operator:{transformation:!0}}},v="select",y={unversionedId:"operators/select",id:"version-v4.11/operators/select",title:"select",description:"Selects fields from the input.",source:"@site/versioned_docs/version-v4.11/operators/select.md",sourceDirName:"operators",slug:"/operators/select",permalink:"/v4.11/operators/select",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.11/operators/select.md",tags:[],version:"v4.11",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"save",permalink:"/v4.11/operators/save"},next:{title:"serve",permalink:"/v4.11/operators/serve"}},b={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;extractor&gt;...</code>",id:"extractor",level:3},{value:"Examples",id:"examples",level:2}],O={toc:k},h="wrapper";function g(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(h,u(d(d({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"select"}),"select"),(0,n.kt)("p",null,"Selects fields from the input."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"select <extractor>...\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"select")," operator keeps only the fields matching the provided extractors and\nremoves all other fields. It is the dual to ",(0,n.kt)("a",d({parentName:"p"},{href:"/v4.11/operators/drop"}),(0,n.kt)("inlineCode",{parentName:"a"},"drop")),"."),(0,n.kt)("p",null,"In relational algebra, ",(0,n.kt)("inlineCode",{parentName:"p"},"select")," performs a ",(0,n.kt)("em",{parentName:"p"},"projection")," of the provided\narguments."),(0,n.kt)("h3",d({},{id:"extractor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<extractor>...")),(0,n.kt)("p",null,"A comma-separated list of extractors that identify the fields to keep."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Only keep fields ",(0,n.kt)("inlineCode",{parentName:"p"},"foo")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"bar"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"select foo, bar\n")),(0,n.kt)("p",null,"Select all fields of type ",(0,n.kt)("inlineCode",{parentName:"p"},"ip"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"select :ip\n")))}g.isMDXComponent=!0}}]);
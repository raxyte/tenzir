"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38225],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=o,m=d["".concat(l,".").concat(u)]||d[u]||f[u]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},95462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>g,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>a(e,i(t)),u=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={sidebar_custom_props:{operator:{transformation:!0}}},v="set",y={unversionedId:"operators/set",id:"version-v4.15/operators/set",title:"set",description:"Upserts fields in events.",source:"@site/versioned_docs/version-v4.15/operators/set.md",sourceDirName:"operators",slug:"/operators/set",permalink:"/v4.15/operators/set",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.15/operators/set.md",tags:[],version:"v4.15",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"serve",permalink:"/v4.15/operators/serve"},next:{title:"shell",permalink:"/v4.15/operators/shell"}},b={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;field=operand&gt;</code>",id:"fieldoperand",level:3},{value:"Examples",id:"examples",level:3}],O={toc:h},k="wrapper";function g(e){var t=e,{components:r}=t,o=u(t,["components"]);return(0,n.kt)(k,f(d(d({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"set"}),"set"),(0,n.kt)("p",null,"Upserts fields in events."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"set <field=operand>...\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"set")," operator sets a list of fields to the given values. It overwrites old\nvalues of fields matching the ",(0,n.kt)("inlineCode",{parentName:"p"},"field")," expression, or creates new fields of a\ngiven name otherwise."),(0,n.kt)("h3",d({},{id:"fieldoperand"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<field=operand>")),(0,n.kt)("p",null,"The assignment consists of ",(0,n.kt)("inlineCode",{parentName:"p"},"field")," that describes the new field name and\n",(0,n.kt)("inlineCode",{parentName:"p"},"operand")," that defines the field value. If the field name already exists, the\noperator replaces the value of the field."),(0,n.kt)("h3",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Upsert new fields with fixed values:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),'set secret="xxx", ints=[1, 2, 3], strs=["a", "b", "c"]\n')),(0,n.kt)("p",null,"Move a column, replacing the old value with ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"set source=src_ip, src_ip=null\n")))}g.isMDXComponent=!0}}]);
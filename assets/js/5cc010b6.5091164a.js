"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79128],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},76779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>k,frontMatter:()=>h,metadata:()=>v,toc:()=>b});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const h={sidebar_custom_props:{operator:{transformation:!0}}},m="hash",v={unversionedId:"operators/hash",id:"version-v4.11/operators/hash",title:"hash",description:"Computes a SHA256 hash digest of a given field.",source:"@site/versioned_docs/version-v4.11/operators/hash.md",sourceDirName:"operators",slug:"/operators/hash",permalink:"/v4.11/operators/hash",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.11/operators/hash.md",tags:[],version:"v4.11",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"from",permalink:"/v4.11/operators/from"},next:{title:"head",permalink:"/v4.11/operators/head"}},y={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;-s|--salt&gt;=&lt;string&gt;</code>",id:"-s--saltstring",level:3},{value:"<code>&lt;field&gt;</code>",id:"field",level:3},{value:"Examples",id:"examples",level:2}],g={toc:b},O="wrapper";function k(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(O,u(d(d({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"hash"}),"hash"),(0,n.kt)("p",null,"Computes a SHA256 hash digest of a given field."),(0,n.kt)("admonition",d({},{title:"Deprecated",type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"This operator will soon be removed in favor of first-class support for functions\nthat can be used in a variety of different operators and contexts.")),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"hash [-s|--salt=<string>] <field>\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"hash")," operator calculates a hash digest of a given field."),(0,n.kt)("h3",d({},{id:"-s--saltstring"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<-s|--salt>=<string>")),(0,n.kt)("p",null,"A salt value for the hash."),(0,n.kt)("h3",d({},{id:"field"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<field>")),(0,n.kt)("p",null,"The field over which the hash is computed."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Hash all values of the field ",(0,n.kt)("inlineCode",{parentName:"p"},"username")," using the salt value ",(0,n.kt)("inlineCode",{parentName:"p"},'"xxx"')," and store\nthe digest in a new field ",(0,n.kt)("inlineCode",{parentName:"p"},"username_hashed"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),'hash --salt="B3IwnumKPEJDAA4u" username\n')))}k.isMDXComponent=!0}}]);
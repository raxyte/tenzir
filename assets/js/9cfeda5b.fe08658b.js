"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35553],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79215:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(67294),a=r(86010),o=r(22093),c=r(11128),i=r(55602),l=r(14699);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u({href:e,children:t}){return n.createElement(c.Z,{href:e,className:(0,a.Z)("card padding--lg",s.cardContainer)},t)}function p({href:e,icon:t,title:r,description:o}){return n.createElement(u,{href:e},n.createElement("h2",{className:(0,a.Z)("text--truncate",s.cardTitle),title:r},t," ",r),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",s.cardDescription),title:o},o))}function f({item:e}){var t;const r=(0,o.Wl)(e);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(t=e.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function m({item:e}){var t,r;const a=(0,i.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,o.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(p,{href:e.href,icon:a,title:e.label,description:null!=(r=e.description)?r:null==c?void 0:c.description})}function d({item:e}){switch(e.type){case"link":return n.createElement(m,{item:e});case"category":return n.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var g=Object.defineProperty,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&v(e,r,t[r]);if(y)for(var r of y(t))O.call(t,r)&&v(e,r,t[r]);return e};function w({className:e}){const t=(0,o.jA)();return n.createElement(j,{items:t.items,className:e})}function j(e){const{items:t,className:r}=e;if(!t)return n.createElement(w,h({},e));const c=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(d,{item:e})))))}},87990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>y,default:()=>j,frontMatter:()=>g,metadata:()=>b,toc:()=>v});var n=r(3905),a=r(79215),o=Object.defineProperty,c=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>c(e,i(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const g={},y="Language",b={unversionedId:"language",id:"language",title:"Language",description:"This section describes the Tenzir Query Language (TQL). We cover the",source:"@site/docs/language.md",sourceDirName:".",slug:"/language",permalink:"/docs/next/language",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/language.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Process Argus Flow Logs",permalink:"/docs/next/user-guides/process-argus-flow-logs"},next:{title:"Pipelines",permalink:"/docs/next/language/pipelines"}},O={},v=[],h={toc:v},w="wrapper";function j(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(w,m(f(f({},h),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"language"}),"Language"),(0,n.kt)("p",null,"This section describes the ",(0,n.kt)("strong",{parentName:"p"},"Tenzir Query Language (TQL)"),". We cover the\nfollowing topics:"),(0,n.kt)(a.Z,{mdxType:"DocCardList"}))}j.isMDXComponent=!0}}]);
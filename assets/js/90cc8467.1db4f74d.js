"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88747],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79215:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(67294),o=r(86010),i=r(22093),a=r(11128),c=r(55602),s=r(14699);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p({href:e,children:t}){return n.createElement(a.Z,{href:e,className:(0,o.Z)("card padding--lg",l.cardContainer)},t)}function u({href:e,icon:t,title:r,description:i}){return n.createElement(p,{href:e},n.createElement("h2",{className:(0,o.Z)("text--truncate",l.cardTitle),title:r},t," ",r),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",l.cardDescription),title:i},i))}function m({item:e}){var t;const r=(0,i.Wl)(e);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(t=e.description)?t:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t,r;const o=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(u,{href:e.href,icon:o,title:e.label,description:null!=(r=e.description)?r:null==a?void 0:a.description})}function d({item:e}){switch(e.type){case"link":return n.createElement(f,{item:e});case"category":return n.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var y=Object.defineProperty,b=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))O.call(t,r)&&v(e,r,t[r]);if(b)for(var r of b(t))h.call(t,r)&&v(e,r,t[r]);return e};function w({className:e}){const t=(0,i.jA)();return n.createElement(E,{items:t.items,className:e})}function E(e){const{items:t,className:r}=e;if(!t)return n.createElement(w,g({},e));const a=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(d,{item:e})))))}},72405:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>E,frontMatter:()=>y,metadata:()=>O,toc:()=>v});var n=r(3905),o=r(79215),i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>a(e,c(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const y={},b="Sinks",O={unversionedId:"operators/sinks/README",id:"operators/sinks/README",title:"Sinks",description:"Tenzir comes with the following sink operators, in alphabetical order:",source:"@site/docs/operators/sinks/README.md",sourceDirName:"operators/sinks",slug:"/operators/sinks/",permalink:"/docs/next/operators/sinks/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/operators/sinks/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"where",permalink:"/docs/next/operators/transformations/where"},next:{title:"import",permalink:"/docs/next/operators/sinks/import"}},h={},v=[],g={toc:v},w="wrapper";function E(e){var t=e,{components:r}=t,i=d(t,["components"]);return(0,n.kt)(w,f(m(m({},g),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"sinks"}),"Sinks"),(0,n.kt)("p",null,"Tenzir comes with the following sink operators, in alphabetical order:"),(0,n.kt)(o.Z,{mdxType:"DocCardList"}))}E.isMDXComponent=!0}}]);
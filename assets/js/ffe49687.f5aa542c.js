"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20702],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||c;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79215:(e,r,t)=>{t.d(r,{Z:()=>E});var n=t(67294),o=t(86010),c=t(22093),a=t(11128),i=t(55602),s=t(14699);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p({href:e,children:r}){return n.createElement(a.Z,{href:e,className:(0,o.Z)("card padding--lg",l.cardContainer)},r)}function u({href:e,icon:r,title:t,description:c}){return n.createElement(p,{href:e},n.createElement("h2",{className:(0,o.Z)("text--truncate",l.cardTitle),title:t},r," ",t),c&&n.createElement("p",{className:(0,o.Z)("text--truncate",l.cardDescription),title:c},c))}function f({item:e}){var r;const t=(0,c.Wl)(e);return t?n.createElement(u,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(r=e.description)?r:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function m({item:e}){var r,t;const o=(0,i.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,c.xz)(null!=(r=e.docId)?r:void 0);return n.createElement(u,{href:e.href,icon:o,title:e.label,description:null!=(t=e.description)?t:null==a?void 0:a.description})}function d({item:e}){switch(e.type){case"link":return n.createElement(m,{item:e});case"category":return n.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var y=Object.defineProperty,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,h=(e,r,t)=>r in e?y(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,g=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&h(e,t,r[t]);if(b)for(var t of b(r))O.call(r,t)&&h(e,t,r[t]);return e};function w({className:e}){const r=(0,c.jA)();return n.createElement(E,{items:r.items,className:e})}function E(e){const{items:r,className:t}=e;if(!r)return n.createElement(w,g({},e));const a=(0,c.MN)(r);return n.createElement("section",{className:(0,o.Z)("row",t)},a.map(((e,r)=>n.createElement("article",{key:r,className:"col col--6 margin-bottom--lg"},n.createElement(d,{item:e})))))}},22576:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>O,contentTitle:()=>b,default:()=>E,frontMatter:()=>y,metadata:()=>v,toc:()=>h});var n=t(3905),o=t(79215),c=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&u(e,t,r[t]);if(s)for(var t of s(r))p.call(r,t)&&u(e,t,r[t]);return e},m=(e,r)=>a(e,i(r)),d=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};const y={},b="Sources",v={unversionedId:"operators/sources/README",id:"version-Tenzir v4.0-rc1/operators/sources/README",title:"Sources",description:"Tenzir comes with the following source operators, in alphabetical order:",source:"@site/versioned_docs/version-Tenzir v4.0-rc1/operators/sources/README.md",sourceDirName:"operators/sources",slug:"/operators/sources/",permalink:"/operators/sources/",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0-rc1/operators/sources/README.md",tags:[],version:"Tenzir v4.0-rc1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Operators",permalink:"/operators"},next:{title:"export",permalink:"/operators/sources/export"}},O={},h=[],g={toc:h},w="wrapper";function E(e){var r=e,{components:t}=r,c=d(r,["components"]);return(0,n.kt)(w,m(f(f({},g),c),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"sources"}),"Sources"),(0,n.kt)("p",null,"Tenzir comes with the following source operators, in alphabetical order:"),(0,n.kt)(o.Z,{mdxType:"DocCardList"}))}E.isMDXComponent=!0}}]);
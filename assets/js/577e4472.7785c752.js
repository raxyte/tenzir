"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),a=n(86010),o=n(53438),i=n(39960),s=n(13919),c=n(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l.cardContainer)},n)}function d(e){let{href:t,icon:n,title:o,description:i}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:i},i))}function p(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:a?.description})}function m(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,e);const i=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(m,{item:e})))))}},80259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(52991);const i={},s="Frontends",c={unversionedId:"understand/query-language/frontends/README",id:"understand/query-language/frontends/README",title:"Frontends",description:"A query language frontend translates the textual representation of a query to",source:"@site/docs/understand/query-language/frontends/README.md",sourceDirName:"understand/query-language/frontends",slug:"/understand/query-language/frontends/",permalink:"/docs/understand/query-language/frontends/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/query-language/frontends/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"where",permalink:"/docs/understand/query-language/operators/where"},next:{title:"Sigma",permalink:"/docs/understand/query-language/frontends/sigma"}},l={},u=[],d={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frontends"},"Frontends"),(0,a.kt)("p",null,"A query language ",(0,a.kt)("em",{parentName:"p"},"frontend")," translates the textual representation of a query to\nVAST's internal representation."),(0,a.kt)("p",null,"Specifically, the frontend parses the string representation that you enter in a\nuser interface and translates it into an ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree"},"abstract syntax tree\n(AST)")," that\noperates on the semantic building blocks of the language, such as literals,\npredicates, extractors, and so on."),(0,a.kt)("p",null,"The frontend is customizable through the ",(0,a.kt)("a",{parentName:"p",href:"/docs/understand/architecture/plugins#query-language"},"query language\nplugin"),". For example, the ",(0,a.kt)("a",{parentName:"p",href:"frontends/sigma"},"Sigma"),"\nfrontend translates Sigma rules written in YAML to VAST queries. The\n",(0,a.kt)("a",{parentName:"p",href:"frontends/vastql"},"VASTQL")," plugin is the default frontend that implements the\nlanguage we designed for VAST."),(0,a.kt)("p",null,"VAST ships with the following frontends:"),(0,a.kt)(o.Z,{mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);
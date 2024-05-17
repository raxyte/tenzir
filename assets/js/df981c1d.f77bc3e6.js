"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48171],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77230:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var n=r(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>i(e,a(t)),m=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_custom_props:{operator:{source:!0}}},v="export",y={unversionedId:"operators/export",id:"version-v4.14/operators/export",title:"export",description:"Retrieves events from a Tenzir node. The dual to import.",source:"@site/versioned_docs/version-v4.14/operators/export.md",sourceDirName:"operators",slug:"/operators/export",permalink:"/operators/export",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.14/operators/export.md",tags:[],version:"v4.14",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"enumerate",permalink:"/operators/enumerate"},next:{title:"extend",permalink:"/operators/extend"}},h={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--live</code>",id:"--live",level:3},{value:"<code>--internal</code>",id:"--internal",level:3},{value:"<code>--low-priority</code>",id:"--low-priority",level:3},{value:"Examples",id:"examples",level:2}],k={toc:b},x="wrapper";function O(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(x,u(d(d({},k),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"export"}),"export"),(0,n.kt)("p",null,"Retrieves events from a Tenzir node. The dual to ",(0,n.kt)("a",d({parentName:"p"},{href:"/operators/import"}),(0,n.kt)("inlineCode",{parentName:"a"},"import")),"."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"export [--live] [--internal] [--low-priority]\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"export")," operator retrieves events from a Tenzir node."),(0,n.kt)("h3",d({},{id:"--live"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--live")),(0,n.kt)("p",null,"Work on all events that are imported with ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," operators in real-time\ninstead of on events persisted at a Tenzir node."),(0,n.kt)("h3",d({},{id:"--internal"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--internal")),(0,n.kt)("p",null,"Export internal events, such as metrics or diagnostics, instead. By default,\n",(0,n.kt)("inlineCode",{parentName:"p"},"export")," only returns events that were previously imported with ",(0,n.kt)("inlineCode",{parentName:"p"},"import"),". In\ncontrast, ",(0,n.kt)("inlineCode",{parentName:"p"},"export --internal")," exports internal events such as operator metrics."),(0,n.kt)("h3",d({},{id:"--low-priority"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--low-priority")),(0,n.kt)("p",null,"Treat this export with a lower priority, causing it to interfere less with\nregular priority exports at the cost of potentially running slower."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Expose all persisted events as JSON data."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"export | to stdout\n")),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/operators/where"}),"Apply a filter")," to all persisted events, then ",(0,n.kt)("a",d({parentName:"p"},{href:"/operators/head"}),"only expose the first\nten results"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"export | where 1.2.3.4 | head 10 | to stdout\n")))}O.isMDXComponent=!0}}]);
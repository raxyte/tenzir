"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>N,frontMatter:()=>f,metadata:()=>h,toc:()=>w});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>a(e,l(t)),d=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={sidebar_custom_props:{operator:{source:!0}}},k="show",h={unversionedId:"operators/show",id:"version-v4.13/operators/show",title:"show",description:"Returns information about a Tenzir node.",source:"@site/versioned_docs/version-v4.13/operators/show.md",sourceDirName:"operators",slug:"/operators/show",permalink:"/v4.13/operators/show",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.13/operators/show.md",tags:[],version:"v4.13",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"shell",permalink:"/v4.13/operators/shell"},next:{title:"sigma",permalink:"/v4.13/operators/sigma"}},v={},w=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;aspect&gt;</code>",id:"aspect",level:3},{value:"Examples",id:"examples",level:2}],b={toc:w},y="wrapper";function N(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(y,m(u(u({},b),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"show"}),"show"),(0,r.kt)("p",null,"Returns information about a Tenzir node."),(0,r.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"show [<aspect>]\n")),(0,r.kt)("h2",u({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," operator offers introspection capabilities to look at various\n",(0,r.kt)("em",{parentName:"p"},"aspects")," of a Tenzir node."),(0,r.kt)("h3",u({},{id:"aspect"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<aspect>")),(0,r.kt)("p",null,"Describes the part of Tenzir to look at."),(0,r.kt)("p",null,"Available aspects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config"),": shows all current configuration options."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connectors"),": shows all available ",(0,r.kt)("a",u({parentName:"li"},{href:"/v4.13/connectors"}),"connectors"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contexts"),": shows all available contexts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"formats"),": shows all available ",(0,r.kt)("a",u({parentName:"li"},{href:"/v4.13/formats"}),"formats"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"operators"),": shows all available ",(0,r.kt)("a",u({parentName:"li"},{href:"/v4.13/operators"}),"operators"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"partitions"),": shows all table partitions of a remote node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pipelines"),": shows all managed pipelines of a remote node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plugins"),": shows all loaded plugins.")),(0,r.kt)("p",null,"We also offer some additional aspects for experts that want to take a deeper\nlook at what's going on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"build"),": shows compile-time build information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dependencies"),": shows information about build-time dependencies."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fields"),": shows all fields of existing tables at a remote node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schemas")," shows all schema definitions for which data is stored at the node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"serves")," shows all pipelines with the ",(0,r.kt)("inlineCode",{parentName:"li"},"serve")," sink operator currently\navailable from the ",(0,r.kt)("inlineCode",{parentName:"li"},"/serve")," API endpoint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"types"),": shows all known types at a remote node.")),(0,r.kt)("p",null,"When no aspect is specified, all are shown."),(0,r.kt)("h2",u({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Show all available connectors and formats:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"show connectors\nshow formats\n")),(0,r.kt)("p",null,"Show all transformations:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"show operators | where transformation == true\n")),(0,r.kt)("p",null,"Show all fields and partitions at a node:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"show fields\nshow partitions\n")),(0,r.kt)("p",null,"Show all aspects of a node:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"show\n")))}N.isMDXComponent=!0}}]);
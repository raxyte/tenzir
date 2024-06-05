"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>O,frontMatter:()=>m,metadata:()=>g,toc:()=>h});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(a)for(var n of a(t))p.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>i(e,l(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={sidebar_custom_props:{operator:{transformation:!0}}},v="slice",g={unversionedId:"operators/slice",id:"version-v4.15/operators/slice",title:"slice",description:"Keep a range events within the half-closed interval [begin, end).",source:"@site/versioned_docs/version-v4.15/operators/slice.md",sourceDirName:"operators",slug:"/operators/slice",permalink:"/v4.15/operators/slice",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.15/operators/slice.md",tags:[],version:"v4.15",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"sigma",permalink:"/v4.15/operators/sigma"},next:{title:"sockets",permalink:"/v4.15/operators/sockets"}},b={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;begin&gt;</code>",id:"begin",level:3},{value:"<code>&lt;end&gt;</code>",id:"end",level:3},{value:"<code>&lt;stride&gt;</code>",id:"stride",level:3},{value:"Examples",id:"examples",level:2}],k={toc:h},y="wrapper";function O(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(y,u(d(d({},k),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"slice"}),"slice"),(0,r.kt)("p",null,"Keep a range events within the half-closed interval ",(0,r.kt)("inlineCode",{parentName:"p"},"[begin, end)"),"."),(0,r.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"slice [<begin>]:[<end>][:<stride>]\n")),(0,r.kt)("h2",d({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"slice")," operator selects a range of events from the input. The semantics of\nthe operator match Python's array slicing."),(0,r.kt)("h3",d({},{id:"begin"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<begin>")),(0,r.kt)("p",null,"An signed integer denoting the beginning (inclusive) of the range to keep. Use a\nnegative number to count from the end."),(0,r.kt)("h3",d({},{id:"end"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<end>")),(0,r.kt)("p",null,"An signed integer denoting the end (exclusive) of the range to keep. Use a\nnegative number to count from the end."),(0,r.kt)("h3",d({},{id:"stride"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<stride>")),(0,r.kt)("p",null,"An signed integer denoting the number of elements to advance before the next\nelement. Use a negative number to count from the end, effectively reversing the\nstream."),(0,r.kt)("h2",d({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Get the second 100 events:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"slice 100:200\n")),(0,r.kt)("p",null,"Get the last five events:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"slice -5:\n")),(0,r.kt)("p",null,"Skip the last ten events:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"slice :-10\n")),(0,r.kt)("p",null,"Return the last 50 events, except for the last 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"slice -50:-2\n")),(0,r.kt)("p",null,"Skip the first and the last event:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"slice 1:-1\n")),(0,r.kt)("p",null,"Return every second event starting from the tenth:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"slice 10::2\n")),(0,r.kt)("p",null,"Return all but the last five events in reverse order:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"slice :-5:-1\n")))}O.isMDXComponent=!0}}]);
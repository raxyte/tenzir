"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1214],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},66634:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>k,frontMatter:()=>m,metadata:()=>g,toc:()=>v});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},d=(e,t)=>o(e,l(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={},y="tail",g={unversionedId:"understand/language/operators/tail",id:"understand/language/operators/tail",title:"tail",description:"Limits the input to the last N results.",source:"@site/docs/understand/language/operators/tail.md",sourceDirName:"understand/language/operators",slug:"/understand/language/operators/tail",permalink:"/docs/next/understand/language/operators/tail",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/understand/language/operators/tail.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"summarize",permalink:"/docs/next/understand/language/operators/summarize"},next:{title:"taste",permalink:"/docs/next/understand/language/operators/taste"}},b={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Limit",id:"limit",level:3},{value:"Example",id:"example",level:2}],O={toc:v},h="wrapper";function k(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(h,d(c(c({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"tail"}),"tail"),(0,n.kt)("p",null,"Limits the input to the last N results."),(0,n.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"tail [LIMIT]\n")),(0,n.kt)("h3",c({},{id:"limit"}),"Limit"),(0,n.kt)("p",null,"An unsigned integer denoting how many events to keep. Defaults to 10."),(0,n.kt)("h2",c({},{id:"example"}),"Example"),(0,n.kt)("p",null,"Get the last ten results."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"tail\n")),(0,n.kt)("p",null,"Get the last five results."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"tail 5\n")))}k.isMDXComponent=!0}}]);
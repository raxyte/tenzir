"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47213],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return t?n.createElement(m,p(p({ref:r},c),{},{components:t})):n.createElement(m,p({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82345:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>k,contentTitle:()=>b,default:()=>w,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))s.call(r,t)&&c(e,t,r[t]);return e},f=(e,r)=>a(e,p(r)),d=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const m={sidebar_custom_props:{operator:{transformation:!0}}},b="buffer",y={unversionedId:"operators/buffer",id:"operators/buffer",title:"buffer",description:"An in-memory buffer to improve handling of data spikes in upstream operators.",source:"@site/docs/operators/buffer.md",sourceDirName:"operators",slug:"/operators/buffer",permalink:"/next/operators/buffer",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/buffer.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"batch",permalink:"/next/operators/batch"},next:{title:"build",permalink:"/next/operators/build"}},k={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;capacity&gt;</code>",id:"capacity",level:3},{value:"<code>--policy &lt;block|drop&gt;</code>",id:"--policy-blockdrop",level:3},{value:"Examples",id:"examples",level:2}],h={toc:v},O="wrapper";function w(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.kt)(O,f(u(u({},h),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"buffer"}),"buffer"),(0,n.kt)("p",null,"An in-memory buffer to improve handling of data spikes in upstream operators."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"buffer [<capacity>] [--policy <block|drop>]\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"buffer")," operator buffers up to the specified number of events in an\nin-memory buffer."),(0,n.kt)("p",null,"By default, operators in a pipeline run only when their downstream operators\nwant to receive input. This mechanism is called back pressure. The ",(0,n.kt)("inlineCode",{parentName:"p"},"buffer"),"\noperator effectively breaks back pressure by storing up to the specified number\nof events in memory, always requesting more input, which allows upstream\noperators to run uninterruptedly even in case the downstream operators of the\nbuffer are unable to keep up. This allows pipelines to handle data spikes more\neasily."),(0,n.kt)("h3",u({},{id:"capacity"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<capacity>")),(0,n.kt)("p",null,"The number of events that may be kept at most in the buffer."),(0,n.kt)("p",null,"Note that every operator already buffers up to 254Ki events before it starts\napplying back pressure. Smaller buffers may pessimize performance."),(0,n.kt)("h3",u({},{id:"--policy-blockdrop"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--policy <block|drop>")),(0,n.kt)("p",null,"Specifies what the operator does when the buffer runs full."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"drop"),": Drop events that do not fit into the buffer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"block"),": Use back pressure to slow down upstream operators.")),(0,n.kt)("p",null,"Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"block")," for pipelines visible on the overview page on\n",(0,n.kt)("a",u({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com"),", and to ",(0,n.kt)("inlineCode",{parentName:"p"},"drop")," otherwise."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Buffer up to 10M events in a buffer, dropping events if downstream cannot keep\nup."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"buffer 10M --policy drop\n")))}w.isMDXComponent=!0}}]);
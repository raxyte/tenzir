"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),u=o,m=c["".concat(l,".").concat(u)]||c[u]||f[u]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>O,frontMatter:()=>m,metadata:()=>y,toc:()=>k});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&d(e,n,t[n]);return e},f=(e,t)=>a(e,i(t)),u=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={sidebar_custom_props:{operator:{transformation:!0}}},v="extend",y={unversionedId:"operators/extend",id:"version-v4.12/operators/extend",title:"extend",description:"Appends fields to events.",source:"@site/versioned_docs/version-v4.12/operators/extend.md",sourceDirName:"operators",slug:"/operators/extend",permalink:"/v4.12/operators/extend",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.12/operators/extend.md",tags:[],version:"v4.12",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"export",permalink:"/v4.12/operators/export"},next:{title:"files",permalink:"/v4.12/operators/files"}},b={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;field=operand&gt;</code>",id:"fieldoperand",level:3},{value:"Examples",id:"examples",level:3}],h={toc:k},x="wrapper";function O(e){var t=e,{components:n}=t,o=u(t,["components"]);return(0,r.kt)(x,f(c(c({},h),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"extend"}),"extend"),(0,r.kt)("p",null,"Appends fields to events."),(0,r.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"extend <field=operand>...\n")),(0,r.kt)("h2",c({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"extend")," operator appends a specified list of fields to the input. All\nexisting fields remain intact."),(0,r.kt)("p",null,"The difference between ",(0,r.kt)("inlineCode",{parentName:"p"},"extend")," and ",(0,r.kt)("a",c({parentName:"p"},{href:"/v4.12/operators/put"}),(0,r.kt)("inlineCode",{parentName:"a"},"put"))," is that ",(0,r.kt)("inlineCode",{parentName:"p"},"put")," drops all\nfields not explicitly specified, whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"extend")," only appends fields."),(0,r.kt)("p",null,"The difference between ",(0,r.kt)("inlineCode",{parentName:"p"},"extend")," and ",(0,r.kt)("a",c({parentName:"p"},{href:"/v4.12/operators/replace"}),(0,r.kt)("inlineCode",{parentName:"a"},"replace"))," is that ",(0,r.kt)("inlineCode",{parentName:"p"},"replace"),"\noverwrites existing fields, whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"extend")," doesn't touch the input."),(0,r.kt)("p",null,"The difference between ",(0,r.kt)("inlineCode",{parentName:"p"},"extend")," and ",(0,r.kt)("a",c({parentName:"p"},{href:"/v4.12/operators/set"}),(0,r.kt)("inlineCode",{parentName:"a"},"set"))," is that ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," does not\nignore fields that do already exist in the data."),(0,r.kt)("h3",c({},{id:"fieldoperand"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<field=operand>")),(0,r.kt)("p",null,"The assignment consists of ",(0,r.kt)("inlineCode",{parentName:"p"},"field")," that describes the new field name and\n",(0,r.kt)("inlineCode",{parentName:"p"},"operand")," that defines the field value."),(0,r.kt)("h3",c({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Add new fields with fixed values:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),'extend secret="xxx", ints=[1, 2, 3], strs=["a", "b", "c"]\n')),(0,r.kt)("p",null,"Duplicate a column:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"extend source=src_ip\n")))}O.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18199],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),f=a,u=m["".concat(p,".").concat(f)]||m[f]||d[f]||o;return t?n.createElement(u,i(i({ref:r},c),{},{components:t})):n.createElement(u,i({ref:r},c))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},52711:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>k,contentTitle:()=>y,default:()=>O,frontMatter:()=>u,metadata:()=>v,toc:()=>h});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&c(e,t,r[t]);if(s)for(var t of s(r))l.call(r,t)&&c(e,t,r[t]);return e},d=(e,r)=>o(e,i(r)),f=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const u={},y="rename",v={unversionedId:"operators/transformations/rename",id:"version-Tenzir v4.0-rc1/operators/transformations/rename",title:"rename",description:"Renames fields and types.",source:"@site/versioned_docs/version-Tenzir v4.0-rc1/operators/transformations/rename.md",sourceDirName:"operators/transformations",slug:"/operators/transformations/rename",permalink:"/operators/transformations/rename",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0-rc1/operators/transformations/rename.md",tags:[],version:"Tenzir v4.0-rc1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"rare",permalink:"/operators/transformations/rare"},next:{title:"repeat",permalink:"/operators/transformations/repeat"}},k={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;name=extractor&gt;...</code>",id:"nameextractor",level:3},{value:"Examples",id:"examples",level:2}],b={toc:h},g="wrapper";function O(e){var r=e,{components:t}=r,a=f(r,["components"]);return(0,n.kt)(g,d(m(m({},b),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"rename"}),"rename"),(0,n.kt)("p",null,"Renames fields and types."),(0,n.kt)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"rename <name=extractor>...\n")),(0,n.kt)("h2",m({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"rename")," operator assigns new names to fields or types. Renaming only\nmodifies metadata and is therefore computationally inexpensive. The operator\nhandles nested field extractors as well, but cannot perform field reordering,\ne.g., by hoisting nested fields into the top level."),(0,n.kt)("p",null,"Renaming only takes place if the provided extractor on the right-hand side of\nthe assignment resolves to a field or type. Otherwise the assignment does\nnothing. If no extractors match, ",(0,n.kt)("inlineCode",{parentName:"p"},"rename")," degenerates to ",(0,n.kt)("a",m({parentName:"p"},{href:"/operators/transformations/pass"}),(0,n.kt)("inlineCode",{parentName:"a"},"pass")),"."),(0,n.kt)("h3",m({},{id:"nameextractor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<name=extractor>...")),(0,n.kt)("p",null,"An assignment of the form ",(0,n.kt)("inlineCode",{parentName:"p"},"name=extractor")," renames the field or type identified\nby ",(0,n.kt)("inlineCode",{parentName:"p"},"extractor")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,n.kt)("h2",m({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Rename events of type ",(0,n.kt)("inlineCode",{parentName:"p"},"suricata.flow")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"connection"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"rename connection=:suricata.flow\n")),(0,n.kt)("p",null,"Assign new names to the fields ",(0,n.kt)("inlineCode",{parentName:"p"},"src_ip")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"dest_ip"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"rename src=src_ip, dst=dest_ip\n")),(0,n.kt)("p",null,"Give the nested field ",(0,n.kt)("inlineCode",{parentName:"p"},"orig_h")," nested under the record ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," the name ",(0,n.kt)("inlineCode",{parentName:"p"},"src_ip"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"rename src=id.orig_h\n")),(0,n.kt)("p",null,"Same as above, but consider fields at any nesting hierarchy:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"rename src=orig_h\n")))}O.isMDXComponent=!0}}]);
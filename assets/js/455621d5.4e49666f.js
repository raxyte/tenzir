"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),f=o,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>O,frontMatter:()=>m,metadata:()=>v,toc:()=>k});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={sidebar_custom_props:{operator:{transformation:!0}}},b="unique",v={unversionedId:"operators/unique",id:"version-v4.10/operators/unique",title:"unique",description:"Removes adjacent duplicates.",source:"@site/versioned_docs/version-v4.10/operators/unique.md",sourceDirName:"operators",slug:"/operators/unique",permalink:"/v4.10/operators/unique",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.10/operators/unique.md",tags:[],version:"v4.10",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"unflatten",permalink:"/v4.10/operators/unflatten"},next:{title:"velociraptor",permalink:"/v4.10/operators/velociraptor"}},y={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],h={toc:k},g="wrapper";function O(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(g,d(c(c({},h),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"unique"}),"unique"),(0,r.kt)("p",null,"Removes adjacent duplicates."),(0,r.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"unique\n")),(0,r.kt)("h2",c({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"unique")," operator deduplicates adjacent values, similar to the Unix tool\n",(0,r.kt)("inlineCode",{parentName:"p"},"uniq"),"."),(0,r.kt)("p",null,"A frequent use case is ",(0,r.kt)("a",c({parentName:"p"},{href:"/v4.10/operators/select"}),"selecting a set of fields"),", ",(0,r.kt)("a",c({parentName:"p"},{href:"/v4.10/operators/sort"}),"sorting the\ninput"),", and then removing duplicates from the input."),(0,r.kt)("h2",c({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Consider the following data:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{"foo": 1, "bar": "a"}\n{"foo": 1, "bar": "a"}\n{"foo": 1, "bar": "a"}\n{"foo": 1, "bar": "b"}\n{"foo": null, "bar": "b"}\n{"bar": "b"}\n{"foo": null, "bar": "b"}\n{"foo": null, "bar": "b"}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"unique")," operator removes adjacent duplicates and produces the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{"foo": 1, "bar": "a"}\n{"foo": 1, "bar": "b"}\n{"foo": null, "bar": "b"}\n{"bar": "b"}\n{"foo": null, "bar": "b"}\n')),(0,r.kt)("p",null,"Note that the output still contains the event ",(0,r.kt)("inlineCode",{parentName:"p"},'{"foo": null, "bar": "b"}')," twice.\nThis is because ",(0,r.kt)("inlineCode",{parentName:"p"},"unique")," only removes ",(0,r.kt)("em",{parentName:"p"},"adjacent")," duplicates."),(0,r.kt)("p",null,"To remove ",(0,r.kt)("em",{parentName:"p"},"all")," duplicates (including non-adjacent ones), ",(0,r.kt)("a",c({parentName:"p"},{href:"/v4.10/operators/sort"}),(0,r.kt)("inlineCode",{parentName:"a"},"sort")),"\nthe input first such that duplicate values lay adjacent to each other. Unlike\ndeduplication via ",(0,r.kt)("inlineCode",{parentName:"p"},"unique"),", sorting is a blocking and operation and consumes\nthe entire input before producing outputs."))}O.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={},o="replace",i={unversionedId:"understand/query-language/operators/replace",id:"understand/query-language/operators/replace",title:"replace",description:"Replaces the fields matching the configured extractors with fixed values.",source:"@site/docs/understand/query-language/operators/replace.md",sourceDirName:"understand/query-language/operators",slug:"/understand/query-language/operators/replace",permalink:"/docs/understand/query-language/operators/replace",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/query-language/operators/replace.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"rename",permalink:"/docs/understand/query-language/operators/rename"},next:{title:"select",permalink:"/docs/understand/query-language/operators/select"}},p={},s=[{value:"Synopsis",id:"synopsis",level:2},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:3},{value:"YAML Syntax Example",id:"yaml-syntax-example",level:4}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"replace"},"replace"),(0,a.kt)("p",null,"Replaces the fields matching the configured extractors with fixed values."),(0,a.kt)("admonition",{title:"Experimental",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"We plan to merge the ",(0,a.kt)("inlineCode",{parentName:"p"},"extend")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"replace")," operators into a single ",(0,a.kt)("inlineCode",{parentName:"p"},"put"),"\noperator in the near future, removing the need for the ",(0,a.kt)("inlineCode",{parentName:"p"},"replace")," operator.")),(0,a.kt)("h2",{id:"synopsis"},"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"replace FIELDS=VALUE[, \u2026]\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("p",null,"The fields to replace with fixed values."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Replace all values of the field named ",(0,a.kt)("inlineCode",{parentName:"p"},"secret")," with the string value ",(0,a.kt)("inlineCode",{parentName:"p"},'"xxx"'),",\nall values of the field named ",(0,a.kt)("inlineCode",{parentName:"p"},"ints")," with the list of integers value ",(0,a.kt)("inlineCode",{parentName:"p"},"[1, 2,\n3]"),", and all values of the field named ",(0,a.kt)("inlineCode",{parentName:"p"},"strs")," with the list of strings value\n",(0,a.kt)("inlineCode",{parentName:"p"},'["a", "b", "c"]'),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'replace secret="xxx", ints=[1, 2, 3], strs=["a", "b", "c"]\n')),(0,a.kt)("h4",{id:"yaml-syntax-example"},"YAML Syntax Example"),(0,a.kt)("admonition",{title:"Deprecated",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The YAML syntax is deprecated since VAST v3.0, and will be removed in a future\nrelease. Please use the pipeline syntax instead.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"replace:\n  fields:\n    secret: xxx\n    ints:\n      - 1\n      - 2\n      - 3\n")))}u.isMDXComponent=!0}}]);
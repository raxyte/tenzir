"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81917],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(r),f=i,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||a;return r?t.createElement(m,o(o({ref:n},u),{},{components:r})):t.createElement(m,o({ref:n},u))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},73443:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>g,contentTitle:()=>b,default:()=>O,frontMatter:()=>m,metadata:()=>v,toc:()=>h});var t=r(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,n,r)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,c=(e,n)=>{for(var r in n||(n={}))s.call(n,r)&&u(e,r,n[r]);if(p)for(var r of p(n))l.call(n,r)&&u(e,r,n[r]);return e},d=(e,n)=>a(e,o(n)),f=(e,n)=>{var r={};for(var t in e)s.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&p)for(var t of p(e))n.indexOf(t)<0&&l.call(e,t)&&(r[t]=e[t]);return r};const m={sidebar_position:0},b="Run a pipeline",v={unversionedId:"user-guides/run-a-pipeline",id:"version-Tenzir v4.0-rc1/user-guides/run-a-pipeline",title:"Run a pipeline",description:"A pipeline is a chain of operators that begins with",source:"@site/versioned_docs/version-Tenzir v4.0-rc1/user-guides/run-a-pipeline.md",sourceDirName:"user-guides",slug:"/user-guides/run-a-pipeline",permalink:"/user-guides/run-a-pipeline",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0-rc1/user-guides/run-a-pipeline.md",tags:[],version:"Tenzir v4.0-rc1",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"User Guides",permalink:"/user-guides"},next:{title:"Reshape data",permalink:"/user-guides/reshape-data/"}},g={},h=[{value:"Run from file",id:"run-from-file",level:2}],y={toc:h},k="wrapper";function O(e){var n=e,{components:r}=n,i=f(n,["components"]);return(0,t.kt)(k,d(c(c({},y),i),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",c({},{id:"run-a-pipeline"}),"Run a pipeline"),(0,t.kt)("p",null,"A ",(0,t.kt)("a",c({parentName:"p"},{href:"/language/pipelines"}),"pipeline")," is a chain of operators that begins with\na ",(0,t.kt)("a",c({parentName:"p"},{href:"/operators/sources/"}),"source"),", optionally includes\n",(0,t.kt)("a",c({parentName:"p"},{href:"/operators/sinks/"}),"transformations")," in the middle, and ends in a\n",(0,t.kt)("a",c({parentName:"p"},{href:"/operators/sinks/"}),"sink"),". Use the ",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir")," executable to run a\npipeline:"),(0,t.kt)("pre",null,(0,t.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"tenzir 'version | write json'\n")),(0,t.kt)("p",null,"The ",(0,t.kt)("a",c({parentName:"p"},{href:"/operators/sources/version"}),(0,t.kt)("inlineCode",{parentName:"a"},"version"))," operator is a source that emits\na single event (the Tenzir versions) and the\n",(0,t.kt)("a",c({parentName:"p"},{href:"/operators/sinks/write"}),(0,t.kt)("inlineCode",{parentName:"a"},"write"))," operator a sink that takes a\n",(0,t.kt)("a",c({parentName:"p"},{href:"/formats"}),"format")," as argument. This invocation prints:"),(0,t.kt)("pre",null,(0,t.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{"version": "v3.1.0-377-ga790da3049-dirty", "plugins": [{"name": "parquet", "version": "bundled"}, {"name": "pcap", "version": "bundled"}, {"name": "sigma", "version": "bundled"}, {"name": "web", "version": "bundled"}]}\n')),(0,t.kt)("h2",c({},{id:"run-from-file"}),"Run from file"),(0,t.kt)("p",null,"Instead of passing the pipeline description to the ",(0,t.kt)("inlineCode",{parentName:"p"},"tenzir")," executable, you can\nalso load the definition from a file via ",(0,t.kt)("inlineCode",{parentName:"p"},"-f"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"tenzir -f pipeline.tql\n")),(0,t.kt)("p",null,"This will interpret the file contents as pipeline and run it."),(0,t.kt)("admonition",c({},{title:"Easy-Button Pipelines",type:"tip"}),(0,t.kt)("p",{parentName:"admonition"},"Want it managed? Head to ",(0,t.kt)("a",c({parentName:"p"},{href:"https://tenzir.com"}),"tenzir.com")," and sign up for the\nfree Community Edition to experience easy-button pipeline management from the\nbrowser.")))}O.isMDXComponent=!0}}]);
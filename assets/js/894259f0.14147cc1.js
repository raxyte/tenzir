"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=i,g=c["".concat(u,".").concat(m)]||c[m]||s[m]||o;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75414:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>O,frontMatter:()=>g,metadata:()=>b,toc:()=>h});var n=r(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&p(e,r,t[r]);return e},s=(e,t)=>o(e,a(t)),m=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const g={},f="Build the Docker image",b={unversionedId:"developer-guides/build-the-docker-image",id:"version-v4.16/developer-guides/build-the-docker-image",title:"Build the Docker image",description:"Our Dockerfile has two",source:"@site/versioned_docs/version-v4.16/developer-guides/build-the-docker-image.md",sourceDirName:"developer-guides",slug:"/developer-guides/build-the-docker-image",permalink:"/developer-guides/build-the-docker-image",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.16/developer-guides/build-the-docker-image.md",tags:[],version:"v4.16",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Build from source",permalink:"/developer-guides/build-from-source"},next:{title:"Write a Plugin",permalink:"/developer-guides/write-a-plugin"}},v={},h=[{value:"Build the production image",id:"build-the-production-image",level:2},{value:"Build the development image",id:"build-the-development-image",level:2}],y={toc:h},k="wrapper";function O(e){var t=e,{components:r}=t,i=m(t,["components"]);return(0,n.kt)(k,s(c(c({},y),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"build-the-docker-image"}),"Build the Docker image"),(0,n.kt)("p",null,"Our ",(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/tenzir/blob/main/Dockerfile"}),"Dockerfile")," has two\nstarting points: a ",(0,n.kt)("em",{parentName:"p"},"development")," and ",(0,n.kt)("em",{parentName:"p"},"production")," layer."),(0,n.kt)("p",null,"Before building the image, make sure to fetch all submodules:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"git clone --recursive https://github.com/tenzir/tenzir\ncd tenzir\ngit submodule update --init --recursive -- libtenzir plugins tenzir\n")),(0,n.kt)("h2",c({},{id:"build-the-production-image"}),"Build the production image"),(0,n.kt)("p",null,"The production image is optimized for size and security. This is the official\n",(0,n.kt)("inlineCode",{parentName:"p"},"tenzir/tenzir")," image. From the repository root, build it as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"docker build -t tenzir/tenzir .\n")),(0,n.kt)("h2",c({},{id:"build-the-development-image"}),"Build the development image"),(0,n.kt)("p",null,"The development image ",(0,n.kt)("inlineCode",{parentName:"p"},"tenzir/tenzir-dev")," contains all build-time dependencies\nof Tenzir. It runs with a ",(0,n.kt)("inlineCode",{parentName:"p"},"root")," user to allow for building custom images that\nbuild additional Tenzir plugins. By default, Tenzir loads all installed plugins\nin our images."),(0,n.kt)("p",null,"Build the development image by specifying it as ",(0,n.kt)("inlineCode",{parentName:"p"},"--target"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"docker build -t tenzir/tenzir-dev --target development .\n")))}O.isMDXComponent=!0}}]);
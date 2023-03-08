"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9451],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28078:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>w,frontMatter:()=>b,metadata:()=>f,toc:()=>k});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e},p=(e,t)=>o(e,i(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const b={sidebar_position:0},v="Download",f={unversionedId:"setup/download",id:"setup/download",title:"Download",description:"We provide various downloadable artifacts of VAST as output of our CD pipeline.",source:"@site/docs/setup/download.md",sourceDirName:"setup",slug:"/setup/download",permalink:"/docs/setup/download",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/setup/download.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Setup",permalink:"/docs/setup/"},next:{title:"Build",permalink:"/docs/setup/build"}},g={},k=[{value:"Packages",id:"packages",level:2},{value:"Generic Linux",id:"generic-linux",level:3},{value:"Debian",id:"debian",level:3},{value:"Nix",id:"nix",level:3},{value:"Images",id:"images",level:2},{value:"Docker",id:"docker",level:3},{value:"Source Code",id:"source-code",level:2},{value:"Git",id:"git",level:3},{value:"Archive",id:"archive",level:3}],h={toc:k},y="wrapper";function w(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(y,p(d(d({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"download"}),"Download"),(0,n.kt)("p",null,"We provide various downloadable artifacts of VAST as output of our CD pipeline."),(0,n.kt)("h2",d({},{id:"packages"}),"Packages"),(0,n.kt)("p",null,"Our pre-built VAST packages contain a statically linked binary, for the latest\nrelease and the current development version."),(0,n.kt)("h3",d({},{id:"generic-linux"}),"Generic Linux"),(0,n.kt)("div",{align:"center",class:"padding-bottom--md"},(0,n.kt)("a",{class:"button button--md button--primary margin-right--md",href:"/download/vast-linux-static.tar.gz"},"Static Build (Release)"),(0,n.kt)("a",{class:"button button--md button--info margin-left--md",href:"/download/vast-linux-static-latest.tar.gz"},"Static Build (Development)")),(0,n.kt)("h3",d({},{id:"debian"}),"Debian"),(0,n.kt)("div",{align:"center",class:"padding-bottom--md"},(0,n.kt)("a",{class:"button button--md button--primary margin-right--md",href:"/download/vast-linux-static.deb"},"Static Build (Release)"),(0,n.kt)("a",{class:"button button--md button--info margin-left--md",href:"/download/vast-linux-static-latest.deb"},"Static Build (Development)")),(0,n.kt)("p",null,"We also offer prebuilt statically linked binaries for every Git commit to the\n",(0,n.kt)("inlineCode",{parentName:"p"},"master")," branch."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),'version="$(git describe --abbrev=10 --long --dirty --match=\'v[0-9]*\')"\ncurl -fsSL "https://storage.googleapis.com/tenzir-public-data/vast-static-builds/vast-${version}-linux-static.tar.gz"\n')),(0,n.kt)("h3",d({},{id:"nix"}),"Nix"),(0,n.kt)("p",null,"Our repository contains a ",(0,n.kt)("inlineCode",{parentName:"p"},"flake.nix")," that provides a VAST as an app, you can\nuse ",(0,n.kt)("inlineCode",{parentName:"p"},'vast = "github:tenzir/vast/stable"')," as an input in your own flake or just\ntry it out with:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"nix run github:tenzir/vast/stable\n")),(0,n.kt)("h2",d({},{id:"images"}),"Images"),(0,n.kt)("p",null,"Our CI builds Docker images for the latest release and the current development\nversion."),(0,n.kt)("h3",d({},{id:"docker"}),"Docker"),(0,n.kt)("p",null,"You can download pre-built Docker images from\n",(0,n.kt)("a",d({parentName:"p"},{href:"https://hub.docker.com/repository/docker/tenzir/vast"}),"Docker Hub"),"."),(0,n.kt)("p",null,"Read our ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/setup/deploy/docker"}),"Docker instructions")," for more details on using Docker."),(0,n.kt)("h2",d({},{id:"source-code"}),"Source Code"),(0,n.kt)("p",null,"Get the source code by cloning our Git repository or downloading an archive."),(0,n.kt)("h3",d({},{id:"git"}),"Git"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"git")," to clone our repository hosted on GitHub:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"git clone --recursive https://github.com/tenzir/vast\n")),(0,n.kt)("p",null,"Check out the ",(0,n.kt)("inlineCode",{parentName:"p"},"stable")," branch to get the latest released version:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"cd vast\ngit checkout stable\n")),(0,n.kt)("h3",d({},{id:"archive"}),"Archive"),(0,n.kt)("p",null,"Download a zip Archive of the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/tenzir/vast/releases/latest"}),"latest release")," or the current\ndevelopment version:"),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{class:"button button--md button--primary margin-right--md",href:"/download/vast.zip"},"Source Code (Release)"),(0,n.kt)("a",{class:"button button--md button--info margin-left--md",href:"/download/vast-latest.zip"},"Source Code (Development)")))}w.isMDXComponent=!0}}]);
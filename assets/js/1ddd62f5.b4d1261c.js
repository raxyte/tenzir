"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86468],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=i,b=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return t?r.createElement(b,a(a({ref:n},p),{},{components:t})):r.createElement(b,a({ref:n},p))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81558:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>v,default:()=>O,frontMatter:()=>b,metadata:()=>f,toc:()=>y});var r=t(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(l)for(var t of l(n))u.call(n,t)&&p(e,t,n[t]);return e},d=(e,n)=>o(e,a(n)),m=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&u.call(e,r)&&(t[r]=e[r]);return t};const b={sidebar_position:3},v="Build Environment",f={unversionedId:"contribute/build-environment",id:"version-Tenzir v4.0-rc10/contribute/build-environment",title:"Build Environment",description:"Use Nix as Reproducible Development Environment",source:"@site/versioned_docs/version-Tenzir v4.0-rc10/contribute/build-environment.md",sourceDirName:"contribute",slug:"/contribute/build-environment",permalink:"/contribute/build-environment",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0-rc10/contribute/build-environment.md",tags:[],version:"Tenzir v4.0-rc10",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Contribute",permalink:"/contribute"},next:{title:"Changelog",permalink:"/contribute/changelog"}},k={},y=[{value:"Use Nix as Reproducible Development Environment",id:"use-nix-as-reproducible-development-environment",level:2},{value:"Static Builds",id:"static-builds",level:3}],h={toc:y},g="wrapper";function O(e){var n=e,{components:t}=n,i=m(n,["components"]);return(0,r.kt)(g,d(s(s({},h),i),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"build-environment"}),"Build Environment"),(0,r.kt)("h2",s({},{id:"use-nix-as-reproducible-development-environment"}),"Use Nix as Reproducible Development Environment"),(0,r.kt)("p",null,"The dependencies for a dynamic build can be fetched by running ",(0,r.kt)("inlineCode",{parentName:"p"},"nix develop"),"\nfrom the topmost directory in the source tree."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",s({parentName:"p"},{href:"https://direnv.net/"}),"direnv")," tool is able to automate this process, create an ",(0,r.kt)("inlineCode",{parentName:"p"},".envrc"),"\nwith the content:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"use flake\n")),(0,r.kt)("p",null,"and it will automatically add the dependencies to your shell environment when\nyou move into the source directory."),(0,r.kt)("p",null,"If you want to silence the messages about binary caches you can use a variation\nof ",(0,r.kt)("inlineCode",{parentName:"p"},".envrc")," that invokes ",(0,r.kt)("inlineCode",{parentName:"p"},"nix")," with a lower verbosity setting:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),'use_flake2() {\n  watch_file flake.nix\n  watch_file flake.lock\n  mkdir -p "$(direnv_layout_dir)"\n  eval "$(nix --quiet --quiet print-dev-env --profile "$(direnv_layout_dir)/flake-profile" "$@")"\n}\n\nuse_flake2\n')),(0,r.kt)("p",null,"The Tenzir repository comes with a set of CMake configure and build presets that\ncan be used in this environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nix-clang-debug")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nix-clang-redeb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nix-clang-release")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nix-gcc-debug")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nix-gcc-redeb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nix-gcc-release"))),(0,r.kt)("admonition",s({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"This build environment is currently only tested on Linux.")),(0,r.kt)("h3",s({},{id:"static-builds"}),"Static Builds"),(0,r.kt)("p",null,"Static binaries require a that the dependencies were built in static mode as\nwell. That means we need to use a different environment, you can enter it with"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-sh"}),"nix develop .#tenzir-static\n")),(0,r.kt)("p",null,"The CMake presets for that mode are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nix-gcc-static-debug")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nix-gcc-static-redeb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nix-gcc-static-release"))))}O.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10109],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,y=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29478:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>b,default:()=>h,frontMatter:()=>y,metadata:()=>m,toc:()=>O});var r=t(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&p(e,t,n[t]);if(c)for(var t of c(n))s.call(n,t)&&p(e,t,n[t]);return e},f=(e,n)=>i(e,a(n)),d=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const y={},b="Setup",m={unversionedId:"setup",id:"version-v4.12/setup",title:"Setup",description:"This section describes Tenzir from an operator perspective. We cover the",source:"@site/versioned_docs/version-v4.12/setup.md",sourceDirName:".",slug:"/setup",permalink:"/v4.12/setup",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.12/setup.md",tags:[],version:"v4.12",frontMatter:{}},v={},O=[],g={toc:O},w="wrapper";function h(e){var n=e,{components:t}=n,o=d(n,["components"]);return(0,r.kt)(w,f(u(u({},g),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"setup"}),"Setup"),(0,r.kt)("p",null,"This section describes Tenzir from an ",(0,r.kt)("strong",{parentName:"p"},"operator perspective"),". We cover the\ndifferent stages of the setup process to successfully run Tenzir. You have\nseveral options to enter the setup process, based on what intermediate step\nyou would like to begin with."),(0,r.kt)("mermaid",u({},{value:'flowchart LR\n  classDef action fill:#00a4f1,stroke:none,color:#eee\n  classDef artifact fill:#bdcfdb,stroke:none,color:#222\n  %% Actions\n  download(Download):::action\n  build(Build):::action\n  install(Install):::action\n  deploy(Deploy):::action\n  configure(Configure):::action\n  tune(Tune):::action\n  monitor(Monitor):::action\n  %% Artifacts\n  source([Source Code]):::artifact\n  binary([Binary]):::artifact\n  deployable([Package/Image]):::artifact\n  instance([Instance]):::artifact\n  %% Edges\n  download --\x3e source\n  download --\x3e binary\n  download --\x3e deployable\n  source --\x3e build\n  build --\x3e binary\n  binary --\x3e install\n  install --\x3e deployable\n  deployable --\x3e deploy\n  deploy --\x3e instance\n  instance <--\x3e configure\n  instance <--\x3e tune\n  instance <--\x3e monitor\n  %% Links\n  click download "setup/download" "Download Tenzir"\n  click build "setup/build" "Build Tenzir"\n  click install "setup/install" "Install Tenzir"\n  click deploy "setup/deploy" "Deploy Tenzir"\n  click configure "setup/configure" "Configure Tenzir"\n  click tune "setup/tune" "Tune Tenzir"\n  click monitor "setup/monitor" "Monitor Tenzir"'})))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9690],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:2},i="Execute Sigma Rules",s={unversionedId:"use/detect/execute-sigma-rules",id:"use/detect/execute-sigma-rules",title:"Execute Sigma Rules",description:"VAST can interpret Sigma rules as an",source:"@site/docs/use/detect/execute-sigma-rules.md",sourceDirName:"use/detect",slug:"/use/detect/execute-sigma-rules",permalink:"/docs/use/detect/execute-sigma-rules",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/use/detect/execute-sigma-rules.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Cloud matchers",permalink:"/docs/use/detect/cloud-matchers"},next:{title:"REST API",permalink:"/docs/use/integrate/rest-api/"}},c={},u=[],l={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"execute-sigma-rules"},"Execute Sigma Rules"),(0,a.kt)("p",null,"VAST can interpret ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SigmaHQ/sigma"},"Sigma rules")," as an\nalternative to a ",(0,a.kt)("a",{parentName:"p",href:"/docs/understand/query-language"},"VAST query"),". Simply\nprovide it on standard input to the ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vast export json < sigma-rule.yaml\n")),(0,a.kt)("p",null,"This requires that you built VAST with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/understand/query-language/frontends/sigma"},"Sigma\nfrontend"),"."),(0,a.kt)("admonition",{title:"Compatibility",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"VAST does not yet support all Sigma features. Please consult the ",(0,a.kt)("a",{parentName:"p",href:"/docs/understand/query-language/frontends/sigma#compatibility"},"compatbility\nsection")," in\nthe documentation for details.")))}m.isMDXComponent=!0}}]);
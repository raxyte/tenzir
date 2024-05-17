"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>g,frontMatter:()=>m,metadata:()=>v,toc:()=>h});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const m={sidebar_custom_props:{operator:{transformation:!0}}},y="unflatten",v={unversionedId:"operators/unflatten",id:"version-v4.10/operators/unflatten",title:"unflatten",description:"Unflattens data structures whose field names imply a nested structure.",source:"@site/versioned_docs/version-v4.10/operators/unflatten.md",sourceDirName:"operators",slug:"/operators/unflatten",permalink:"/v4.10/operators/unflatten",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.10/operators/unflatten.md",tags:[],version:"v4.10",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"top",permalink:"/v4.10/operators/top"},next:{title:"unique",permalink:"/v4.10/operators/unique"}},b={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;separator&gt;</code>",id:"separator",level:3},{value:"Examples",id:"examples",level:2}],k={toc:h},O="wrapper";function g(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(O,d(u(u({},k),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"unflatten"}),"unflatten"),(0,r.kt)("p",null,"Unflattens data structures whose field names imply a nested structure."),(0,r.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"unflatten [<separator>]\n")),(0,r.kt)("h2",u({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"unflatten")," operator creates nested records out of record entries whose\nnames include a separator, thus unflattening"),(0,r.kt)("admonition",u({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"unflatten")," uses a heuristic to determine the unflattened schema. Thus, the\nschema of a record that has been flattened using the ",(0,r.kt)("a",u({parentName:"p"},{href:"/v4.10/operators/flatten"}),(0,r.kt)("inlineCode",{parentName:"a"},"flatten"))," operator and\nunflattened afterwards may not be identical to the schema of the unmodified\nrecord.")),(0,r.kt)("h3",u({},{id:"separator"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<separator>")),(0,r.kt)("p",null,"The separator string to unflatten records with."),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"."),"."),(0,r.kt)("h2",u({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Consider the following data:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "src_ip": "147.32.84.165",\n  "src_port": 1141,\n  "dest_ip": "147.32.80.9",\n  "dest_port": 53,\n  "event_type": "dns",\n  "dns.type": "query",\n  "dns.id": 553,\n  "dns.rrname": "irc.freenode.net",\n  "dns.rrtype": "A",\n  "dns.tx_id": 0,\n  "dns.grouped.A": ["tenzir.com"]\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"unflatten")," operator recreates nested records from fields that contain the ",(0,r.kt)("inlineCode",{parentName:"p"},"."),"\nseparator:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "src_ip": "147.32.84.165",\n  "src_port": 1141,\n  "dest_ip": "147.32.80.9",\n  "dest_port": 53,\n  "event_type": "dns",\n  "dns": {\n    "type": "query",\n    "id": 553,\n    "rrname": "irc.freenode.net",\n    "rrtype": "A",\n    "tx_id": 0,\n    "grouped": {\n      "A": [\n        "tenzir.com"\n      ]\n    }\n  }\n}\n')))}g.isMDXComponent=!0}}]);
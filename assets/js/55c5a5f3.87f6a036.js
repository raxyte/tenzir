"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47770],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,d=c["".concat(l,".").concat(f)]||c[f]||u[f]||i;return r?n.createElement(d,s(s({ref:t},m),{},{components:r})):n.createElement(d,s({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},42830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>O,frontMatter:()=>d,metadata:()=>h,toc:()=>b});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&m(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&m(e,r,t[r]);return e},u=(e,t)=>i(e,s(t)),f=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const d={sidebar_custom_props:{operator:{transformation:!0}}},v="measure",h={unversionedId:"operators/measure",id:"version-v4.10/operators/measure",title:"measure",description:"Replaces the input with metrics describing the input.",source:"@site/versioned_docs/version-v4.10/operators/measure.md",sourceDirName:"operators",slug:"/operators/measure",permalink:"/v4.10/operators/measure",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.10/operators/measure.md",tags:[],version:"v4.10",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"lookup",permalink:"/v4.10/operators/lookup"},next:{title:"metrics",permalink:"/v4.10/operators/metrics"}},y={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--real-time</code>",id:"--real-time",level:3},{value:"<code>--cumulative</code>",id:"--cumulative",level:3},{value:"Examples",id:"examples",level:2}],g={toc:b},k="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(k,u(c(c({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"measure"}),"measure"),(0,n.kt)("p",null,"Replaces the input with metrics describing the input."),(0,n.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"measure [--real-time] [--cumulative]\n")),(0,n.kt)("h2",c({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"measure")," operator yields metrics for each received batch of events or bytes\nusing the following schema, respectively:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:'language-title="Events',metastring:'Metrics"','Metrics"':!0}),"type tenzir.metrics.events = record  {\n  timestamp: time,\n  schema: string,\n  schema_id: string,\n  events: uint64,\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:'language-title="Bytes',metastring:'Metrics"','Metrics"':!0}),"type tenzir.metrics.bytes = record  {\n  timestamp: time,\n  bytes: uint64,\n}\n")),(0,n.kt)("h3",c({},{id:"--real-time"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--real-time")),(0,n.kt)("p",null,"Emit metrics immediately with every batch, rather than buffering until the\nupstream operator stalls, i.e., is idle or waiting for further input."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"--real-time")," option is useful when inspect should emit data without\nlatency."),(0,n.kt)("h3",c({},{id:"--cumulative"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--cumulative")),(0,n.kt)("p",null,"Emit running totals for the ",(0,n.kt)("inlineCode",{parentName:"p"},"events")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"bytes")," fields rather than per-batch\nstatistics."),(0,n.kt)("h2",c({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Get the number of bytes read incrementally for a file:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json",metastring:'{0} title="load file path/to/file.feather | measure | write json"',"{0}":!0,title:'"load',file:!0,"path/to/file.feather":!0,"|":!0,measure:!0,write:!0,'json"':!0}),'{"timestamp": "2023-04-28T10:22:10.192322", "bytes": 16384}\n{"timestamp": "2023-04-28T10:22:10.223612", "bytes": 16384}\n{"timestamp": "2023-04-28T10:22:10.297169", "bytes": 16384}\n{"timestamp": "2023-04-28T10:22:10.387172", "bytes": 16384}\n{"timestamp": "2023-04-28T10:22:10.408171", "bytes": 8232}\n')),(0,n.kt)("p",null,"Get the number of events read incrementally from a file:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json",metastring:'{0} title="from file path/to/file.feather | measure | write json"',"{0}":!0,title:'"from',file:!0,"path/to/file.feather":!0,"|":!0,measure:!0,write:!0,'json"':!0}),'{"timestamp": "2023-04-28T10:26:45.159885", "events": 65536, "schema": "suricata.dns", "schema_id": "d49102998baae44a"}\n{"timestamp": "2023-04-28T10:26:45.812321", "events": 412, "schema": "suricata.dns", "schema_id": "d49102998baae44a"}\n')),(0,n.kt)("p",null,"Get the total number of events in a file, grouped by schema:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json",metastring:'{0} title="from file path/to/file.feather | measure | summarize events=sum(events) by schema"',"{0}":!0,title:'"from',file:!0,"path/to/file.feather":!0,"|":!0,measure:!0,summarize:!0,events:"sum(events)",by:!0,'schema"':!0}),'{"events": 65948, "schema": "suricata.dns"}\n')))}O.isMDXComponent=!0}}]);
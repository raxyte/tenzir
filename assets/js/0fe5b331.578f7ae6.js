"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85578],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},55633:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var n=r(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>o(e,a(t)),d=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_position:6},v="Collect metrics",b={unversionedId:"setup-guides/collect-metrics",id:"version-v4.12/setup-guides/collect-metrics",title:"Collect metrics",description:"Tenzir keeps track of metrics about node resource usage, pipeline state, and",source:"@site/versioned_docs/version-v4.12/setup-guides/collect-metrics.md",sourceDirName:"setup-guides",slug:"/setup-guides/collect-metrics",permalink:"/v4.12/setup-guides/collect-metrics",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.12/setup-guides/collect-metrics.md",tags:[],version:"v4.12",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Tune performance",permalink:"/v4.12/setup-guides/tune-performance/"},next:{title:"User Guides",permalink:"/v4.12/user-guides"}},g={},y=[{value:"Write metrics to a file",id:"write-metrics-to-a-file",level:2},{value:"Summarize metrics",id:"summarize-metrics",level:2}],h={toc:y},k="wrapper";function O(e){var t=e,{components:r}=t,i=d(t,["components"]);return(0,n.kt)(k,m(u(u({},h),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"collect-metrics"}),"Collect metrics"),(0,n.kt)("p",null,"Tenzir keeps track of metrics about node resource usage, pipeline state, and\nruntime performance."),(0,n.kt)("p",null,"Metrics are stored as internal events in the node's storage engine, allowing you\nto work with metrics just like regular data. Use the\n",(0,n.kt)("a",u({parentName:"p"},{href:"/v4.12/operators/metrics"}),(0,n.kt)("inlineCode",{parentName:"a"},"metrics"))," source operator to access the metrics. The\noperator documentation lists all available metrics in detail."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"metrics")," operator provides a ",(0,n.kt)("em",{parentName:"p"},"copy")," of existing metrics. You can use it\nmultiple time to reference the same metrics feed."),(0,n.kt)("h2",u({},{id:"write-metrics-to-a-file"}),"Write metrics to a file"),(0,n.kt)("p",null,"Export metrics continuously to a file via ",(0,n.kt)("inlineCode",{parentName:"p"},"metrics --live"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"metrics --live\n| to /var/log/tenzir/metrics.json --append write json --compact-output\n")),(0,n.kt)("p",null,"This attaches to incoming metrics feed and forward them as NDJSON automatically\nto a file. Without ",(0,n.kt)("inlineCode",{parentName:"p"},"--live"),", the ",(0,n.kt)("inlineCode",{parentName:"p"},"metrics")," operator returns the snapshot of all\nhistorical metrics."),(0,n.kt)("h2",u({},{id:"summarize-metrics"}),"Summarize metrics"),(0,n.kt)("p",null,"You can ",(0,n.kt)("a",u({parentName:"p"},{href:"/v4.12/user-guides/shape-data/"}),"shape")," metrics like ordinary data,\ne.g., write aggregations over metrics to compute runtime statistics suitable for\nreporting or dashboarding:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),'metrics\n| where #schema == "tenzir.metrics.operator" && sink == true\n| summarize runtime=sum(duration) by pipeline_id\n| sort runtime desc\n')),(0,n.kt)("p",null,"The above example computes the total runtime over all pipelines grouped by their\nunique ID."))}O.isMDXComponent=!0}}]);
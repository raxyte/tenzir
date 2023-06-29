"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16252],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>N});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),s=m(n),u=r,N=s["".concat(p,".").concat(u)]||s[u]||k[u]||l;return n?a.createElement(N,i(i({ref:e},o),{},{components:n})):a.createElement(N,i({ref:e},o))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[s]="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88184:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>g,default:()=>v,frontMatter:()=>N,metadata:()=>c,toc:()=>b});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,o=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&o(t,n,e[n]);if(d)for(var n of d(e))m.call(e,n)&&o(t,n,e[n]);return t},k=(t,e)=>l(t,i(e)),u=(t,e)=>{var n={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&d)for(var a of d(t))e.indexOf(a)<0&&m.call(t,a)&&(n[a]=t[a]);return n};const N={},g="Metrics",c={unversionedId:"metrics",id:"version-Tenzir v4.0-rc1/metrics",title:"Metrics",description:"Tenzir collects various metrics during execution. This reference describes what",source:"@site/versioned_docs/version-Tenzir v4.0-rc1/metrics.md",sourceDirName:".",slug:"/metrics",permalink:"/metrics",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0-rc1/metrics.md",tags:[],version:"Tenzir v4.0-rc1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Taxonomies",permalink:"/data-model/taxonomies"},next:{title:"Command Line",permalink:"/command-line"}},h={},b=[{value:"Reference",id:"reference",level:2}],y={toc:b},f="wrapper";function v(t){var e=t,{components:n}=e,r=u(e,["components"]);return(0,a.kt)(f,k(s(s({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"metrics"}),"Metrics"),(0,a.kt)("p",null,"Tenzir collects various metrics during execution. This reference describes what\nmetrics are available and what they mean. We describe how to ",(0,a.kt)("a",s({parentName:"p"},{href:"/setup-guides/collect-metrics"}),"collect\nmetrics")," in the corresponding user guide."),(0,a.kt)("p",null,"For the reference table below, these symbols indicate presense of additional\nmetadata:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"right"}),"Symbol"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Key"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"\ud83d\udd0e"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"query")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"A UUID to identify the query.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"\ud83e\udeaa"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"issuer")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"A human-readable identifier of the query issuer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"\ud83d\udcbd"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"partition-type")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),'One of "active" or "passive".')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"#\ufe0f\u20e3"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"partition-version")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The internal partition version.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"\ud83d\udcbe"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"store-type")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),'One of "parquet", "feather" or "segment-store".')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"\ud83d\uddc2\ufe0f"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"schema")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The schema name.")))),(0,a.kt)("p",null,"For all keys that show throughput rates in #events/second, e.g.,\n",(0,a.kt)("inlineCode",{parentName:"p"},"<component>.rate"),", the keys ",(0,a.kt)("inlineCode",{parentName:"p"},"<component>.events")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<component>.duration")," are\ndividend and divisor, respectively. They are not listed explicitly in the below\ntable."),(0,a.kt)("p",null,"Generally, counts are reset after a component sends out a telemetry report.\nE.g., the total number of invalid lines the JSON parser encountered is reflected\nby the sum of all ",(0,a.kt)("inlineCode",{parentName:"p"},"json-reader.invalid-line")," events."),(0,a.kt)("h2",s({},{id:"reference"}),"Reference"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"right"}),"Key"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Unit"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Metadata"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"accountant.startup")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The first event in the lifetime of Tenzir."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"constant ",(0,a.kt)("inlineCode",{parentName:"td"},"0")),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"accountant.shutdown")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The last event in the lifetime of Tenzir."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"constant ",(0,a.kt)("inlineCode",{parentName:"td"},"0")),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"archive.rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rate of events processed by the archive component."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events/second"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"arrow-writer.rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rate of events processed by the Arrow sink."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events/second"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"ascii-writer.rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rate of events processed by the ascii sink."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events/second"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"csv-reader.rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rate of events processed by the CSV source."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events/second"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"csv-writer.rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rate of events processed by the CSV sink."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events/second"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"importer.rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rate of events processed by the importer component."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events/second"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"index.memory-usage")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rough estimate of memory used by the index"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#bytes"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"ingest.rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The ingest rate keyed by the schema name."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events/second"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ud83d\uddc2\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"ingest-total.rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The total ingest rate of all schemas."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events/second"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"json-reader.invalid-line")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of invalid NDJSON lines."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"json-reader.rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rate of events processed by the JSON source."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events/second"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"json-reader.unknown-layout")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number if NDJSON lines with an unknown layout."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#event"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"json-writer.rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rate of events processed by the JSON sink."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events/second"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"catalog.lookup.candidates")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of candidate partitions considered for a query."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#partitions"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ud83d\udd0e\ud83e\udeaa")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"catalog.lookup.runtime")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The duration of a query evaluation in the catalog."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#milliseconds"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ud83d\udd0e\ud83e\udeaa")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"catalog.lookup.hits")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of results of a query in the catalog."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ud83d\udd0e\ud83e\udeaa")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"catalog.memory-usage")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rough estimate of memory used by the catalog"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#bytes"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"catalog.num-partitions")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of partitions registered in the catalog per schema."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#partitions"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ud83d\uddc2\ufe0f#\ufe0f\u20e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"catalog.num-events")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of events registered in the catalog per schema."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ud83d\uddc2\ufe0f#\ufe0f\u20e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"catalog.num-partitions-total")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The sum of all partitions registered in the catalog."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#partitions"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"catalog.num-events-total")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The sum of all events registered in the catalog."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"node_throughput.rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rate of events processed by the node component."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events/second"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"null-writer.rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rate of events processed by the null sink."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events/second"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"partition.events-written")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of events written in one partition."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ud83d\uddc2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"partition.lookup.runtime")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The duration of a query evaluation in one partition."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#milliseconds"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ud83d\udd0e\ud83e\udeaa\ud83d\udcbd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"partition.lookup.hits")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of results of a query in one partition."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ud83d\udd0e\ud83e\udeaa\ud83d\udcbd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"pcap-reader.discard-rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rate of packets discarded."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events-dropped/#events-received"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"pcap-reader.discard")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of packets discarded by the reader."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"pcap-reader.drop-rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rate of packets dropped."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events-dropped/#events-received"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"pcap-reader.drop")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of packets dropped by the reader."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"pcap-reader.ifdrop")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of packets dropped by the network interface."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"pcap-reader.rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rate of events processed by the PCAP source."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events/second"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"pcap-reader.recv")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of packets received."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"pcap-writer.rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rate of events processed by the PCAP sink."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events/second"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"rebuilder.partitions.remaining")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of partitions scheduled for rebuilding."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#partitions"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"rebuilder.partitions.rebuilding")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of partitions currently being rebuilt."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#partitions"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"rebuilder.partitions.completed")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of partitions rebuilt in the current run."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#partitions"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"scheduler.backlog.custom")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of custom priority queries in the backlog."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#queries"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"scheduler.backlog.low")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of low priority queries in the backlog."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#queries"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"scheduler.backlog.normal")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of normal priority queries in the backlog."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#queries"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"scheduler.backlog.high")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of high priority queries in the backlog."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#queries"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"scheduler.partition.current-lookups")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of partition lookups that are currently running."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#workers"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"scheduler.partition.lookups")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Query lookups executed on individual partitions."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#partition-lookups"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"scheduler.partition.materializations")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Partitions loaded from disk."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#partitions"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"scheduler.partition.pending")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of queued partitions."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#partitions"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"scheduler.partition.remaining-capacity")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of partition lookups that could be scheduled immediately."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#workers"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"scheduler.partition.scheduled")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of scheduled partitions."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#partitions"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"active-store.lookup.runtime")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of results of a query in an active store."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ud83d\udd0e\ud83e\udeaa\ud83d\udcbe")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"active-store.lookup.hits")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of results of a query in an active store."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ud83d\udd0e\ud83e\udeaa\ud83d\udcbe")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"passive-store.lookup.runtime")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of results of a query in a passive store."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ud83d\udd0e\ud83e\udeaa\ud83d\udcbe")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"passive-store.lookup.hits")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of results of a query in a passive store."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ud83d\udd0e\ud83e\udeaa\ud83d\udcbe")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"passive-store.init.runtime")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Time until the store is ready serve queries."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"nanoseconds"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\ud83d\udcbe")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"posix-filesystem.checks.failed")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of failed file checks since process start."),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"posix-filesystem.checks.successful")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of successful file checks since process start."),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"posix-filesystem.erases.bytes")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of bytes erased since process start."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#bytes"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"posix-filesystem.erases.failed")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of failed file erasures since process start."),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"posix-filesystem.erases.successful")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of successful file erasures since process start."),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"posix-filesystem.mmaps.bytes")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of bytes memory-mapped since process start."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#bytes"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"posix-filesystem.mmaps.failed")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of failed file memory-maps since process start."),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"posix-filesystem.mmaps.successful")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of successful file memory-maps since process start."),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"posix-filesystem.moves.failed")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of failed file moves since process start."),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"posix-filesystem.moves.successful")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of successful file moves since process start."),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"posix-filesystem.reads.bytes")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of bytes read since process start."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#bytes"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"posix-filesystem.reads.failed")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of success file reads since process start."),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"posix-filesystem.reads.successful")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of success file reads since process start."),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"posix-filesystem.writes.bytes")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of bytes written since process start."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#bytes"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"posix-filesystem.writes.failed")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of failed file writes since process start."),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"posix-filesystem.writes.successful")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The number of successful file writes since process start."),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"source.start")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Timepoint when the source started."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"nanoseconds since epoch"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"source.stop")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Timepoint when the source stopped."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"nanoseconds since epoch"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"syslog-reader.rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rate of events processed by the syslog source."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events/second"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"test-reader.rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rate of events processed by the test source."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events/second"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("inlineCode",{parentName:"td"},"zeek-reader.rate")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The rate of events processed by the Zeek source."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"#events/second"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))))))}v.isMDXComponent=!0}}]);
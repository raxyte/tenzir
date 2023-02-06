"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9378],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11805:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={description:"Comma-separated values"},s="CSV",p={unversionedId:"understand/formats/csv",id:"understand/formats/csv",title:"CSV",description:"Comma-separated values",source:"@site/docs/understand/formats/csv.md",sourceDirName:"understand/formats",slug:"/understand/formats/csv",permalink:"/docs/understand/formats/csv",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/formats/csv.md",tags:[],version:"current",frontMatter:{description:"Comma-separated values"},sidebar:"docsSidebar",previous:{title:"CEF",permalink:"/docs/understand/formats/cef"},next:{title:"JSON",permalink:"/docs/understand/formats/json"}},i={},c=[{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2}],l={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"csv"},"CSV"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"csv")," format represents ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Comma-separated_values"},"comma-separated values\n(CSV)")," data in tabular\nform. The first line in a CSV file is the header that describes the field names.\nThe remaining lines contain concrete values. One line corresponds to one event,\nminus the header."),(0,a.kt)("h2",{id:"input"},"Input"),(0,a.kt)("p",null,"To read CSV data, consider this piece of data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"ip,sn,str,rec.a,rec.b\n1.2.3.4,10.0.0.0/8,foo bar,-4.2,/foo|bar/\n")),(0,a.kt)("p",null,"As with ",(0,a.kt)("a",{parentName:"p",href:"json"},"JSON"),", CSV still requires explicit ",(0,a.kt)("a",{parentName:"p",href:"/docs/use/ingest/#map-events-to-schemas"},"selection of a\nschema")," via ",(0,a.kt)("inlineCode",{parentName:"p"},"--type")," to understand the\nfield types corresponding the the column headers. Here's the corresponding\nschema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"title=test.schema",title:"test.schema"},"type test = record{\n  ip: ip,\n  sn: subnet,\n  str: string,\n  rec: record{\n    a: double,\n    b: pattern\n  }\n}\n")),(0,a.kt)("p",null,"You can now ingest the CSV input as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vast import -s test.schema csv < file.csv\n")),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"To render data as CSV, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"export csv")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vast export csv 1.2.3.4 '#type == /suricata.*/'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},'type,timestamp,flow_id,pcap_cnt,vlan,in_iface,src_ip,src_port,dest_ip,dest_port,proto,event_type,community_id,http.hostname,http.url,http.http_port,http.http_user_agent,http.http_content_type,http.http_method,http.http_refer,http.protocol,http.status,http.redirect,http.length,tx_id\nsuricata.http,2011-08-12T13:00:36.378914,269421754201300,22569,,,147.32.84.165,1027,74.125.232.202,80,"TCP","http",,"cr-tools.clients.google.com","/service/check2?appid=%7B430FD4D0-B729-4F61-AA34-91526481799D%7D&appversion=1.3.21.65&applang=&machine=0&version=1.3.21.65&osversion=5.1&servicepack=Service%20Pack%202",,"Google Update/1.3.21.65;winhttp",,"GET",,"HTTP/1.1",,,0,0\ntype,timestamp,flow_id,pcap_cnt,vlan,in_iface,src_ip,src_port,dest_ip,dest_port,proto,event_type,community_id,flow.pkts_toserver,flow.pkts_toclient,flow.bytes_toserver,flow.bytes_toclient,flow.start,flow.end,flow.age,flow.state,flow.reason,flow.alerted,app_proto\nsuricata.flow,2011-08-14T05:38:53.914038,929669869939483,,,,147.32.84.165,138,147.32.84.255,138,"UDP","flow",,2,0,486,0,2011-08-12T12:53:47.928539,2011-08-12T12:53:47.928552,0,"new","timeout",F,"failed"\n')),(0,a.kt)("p",null,"As with any variable-schema text output, it is complicated to interleave results\nfrom different schemas. If VAST encouters a schema that differs from the\npreviously rendered one, it appends a new CSV header."),(0,a.kt)("p",null,"Nested records have dot-separated field names."))}u.isMDXComponent=!0}}]);
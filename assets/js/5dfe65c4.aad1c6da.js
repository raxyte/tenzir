"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={description:"Line-delimited JSON"},s="JSON",i={unversionedId:"understand/formats/json",id:"understand/formats/json",title:"JSON",description:"Line-delimited JSON",source:"@site/docs/understand/formats/json.md",sourceDirName:"understand/formats",slug:"/understand/formats/json",permalink:"/docs/understand/formats/json",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/formats/json.md",tags:[],version:"current",frontMatter:{description:"Line-delimited JSON"},sidebar:"docsSidebar",previous:{title:"CSV",permalink:"/docs/understand/formats/csv"},next:{title:"NetFlow",permalink:"/docs/understand/formats/netflow"}},p={},l=[{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Flatten records",id:"flatten-records",level:3},{value:"Omit null fields",id:"omit-null-fields",level:3},{value:"Omitting empty fields",id:"omitting-empty-fields",level:3},{value:"Render durations as fractional seconds",id:"render-durations-as-fractional-seconds",level:3}],d={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"json"},"JSON"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," format in VAST represents ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON_streaming#Line-delimited_JSON"},"line-delimited\nJSON")," objects\naccording to a specified schema. That is, one line corresponds to one event. The\nobject field names correspond to record field names."),(0,o.kt)("p",null,"JSON can express only a subset ",(0,o.kt)("a",{parentName:"p",href:"/docs/understand/data-model/type-system"},"VAST's type\nsystem"),". For example, VAST has\nfirst-class support for IP addresses but they are strings in JSON. To get the\nmost out of your data and retain domain semantics, ",(0,o.kt)("a",{parentName:"p",href:"/docs/use/ingest#provide-a-schema-for-unknown-types"},"define a schema for your\nJSON objects"),"."),(0,o.kt)("h2",{id:"input"},"Input"),(0,o.kt)("p",null,"Consider the this example JSON file ",(0,o.kt)("inlineCode",{parentName:"p"},"data.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"ts":"2011-08-15T03:36:16.748830Z","uid":"CKmcUPexVMCAAkl6h","id.orig_h":"210.87.254.81","id.orig_p":3,"id.resp_h":"147.32.84.165","id.resp_p":1,"proto":"icmp","conn_state":"OTH","missed_bytes":0,"orig_pkts":1,"orig_ip_bytes":56,"resp_pkts":0,"resp_ip_bytes":0,"tunnel_parents":[]}\n{"ts":"2011-08-15T03:37:11.992151Z","uid":"CTluup1eVngpaS6e2i","id.orig_h":"147.32.84.165","id.orig_p":3923,"id.resp_h":"218.108.143.87","id.resp_p":22,"proto":"tcp","duration":3.006088,"orig_bytes":0,"resp_bytes":0,"conn_state":"S0","missed_bytes":0,"history":"S","orig_pkts":4,"orig_ip_bytes":192,"resp_pkts":0,"resp_ip_bytes":0,"tunnel_parents":[]}\n{"ts":"2011-08-15T03:37:12.593013Z","uid":"C4KKBn3pbBOEm8XWOk","id.orig_h":"147.32.84.165","id.orig_p":3924,"id.resp_h":"218.108.189.111","id.resp_p":22,"proto":"tcp","duration":3.005948,"orig_bytes":0,"resp_bytes":0,"conn_state":"S0","missed_bytes":0,"history":"S","orig_pkts":4,"orig_ip_bytes":192,"resp_pkts":0,"resp_ip_bytes":0,"tunnel_parents":[]}\n')),(0,o.kt)("p",null,"Import this file by specifying the schema ",(0,o.kt)("inlineCode",{parentName:"p"},"zeek.conn")," that ships with VAST:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vast import --type=zeek.conn json < data.json\n")),(0,o.kt)("p",null,"Passing a schema type via ",(0,o.kt)("inlineCode",{parentName:"p"},"--type")," is necessary because the NDJSON objects are\njust a collection of fields. VAST cannot know how to name the corresponding\nrecord without an external hint. See the section on ",(0,o.kt)("a",{parentName:"p",href:"/docs/use/ingest#map-events-to-schemas"},"mapping events to\nschemas")," for details."),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," format to render a query result as JSON:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vast export json 'dest_ip in 147.32.84.0/24 || http_user_agent == /Google Update.*/' | jq\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2011-08-14T05:38:53.914038",\n  "flow_id": 929669869939483,\n  "pcap_cnt": null,\n  "vlan": null,\n  "in_iface": null,\n  "src_ip": "147.32.84.165",\n  "src_port": 138,\n  "dest_ip": "147.32.84.255",\n  "dest_port": 138,\n  "proto": "UDP",\n  "event_type": "flow",\n  "community_id": null,\n  "flow": {\n    "pkts_toserver": 2,\n    "pkts_toclient": 0,\n    "bytes_toserver": 486,\n    "bytes_toclient": 0,\n    "start": "2011-08-12T12:53:47.928539",\n    "end": "2011-08-12T12:53:47.928552",\n    "age": 0,\n    "state": "new",\n    "reason": "timeout",\n    "alerted": false\n  },\n  "app_proto": "failed"\n}\n{\n  "timestamp": "2011-08-12T13:00:36.378914",\n  "flow_id": 269421754201300,\n  "pcap_cnt": 22569,\n  "vlan": null,\n  "in_iface": null,\n  "src_ip": "147.32.84.165",\n  "src_port": 1027,\n  "dest_ip": "74.125.232.202",\n  "dest_port": 80,\n  "proto": "TCP",\n  "event_type": "http",\n  "community_id": null,\n  "http": {\n    "hostname": "cr-tools.clients.google.com",\n    "url": "/service/check2?appid=%7B430FD4D0-B729-4F61-AA34-91526481799D%7D&appversion=1.3.21.65&applang=&machine=0&version=1.3.21.65&osversion=5.1&servicepack=Service%20Pack%202",\n    "http_port": null,\n    "http_user_agent": "Google Update/1.3.21.65;winhttp",\n    "http_content_type": null,\n    "http_method": "GET",\n    "http_refer": null,\n    "protocol": "HTTP/1.1",\n    "status": null,\n    "redirect": null,\n    "length": 0\n  },\n  "tx_id": 0\n}\n')),(0,o.kt)("h3",{id:"flatten-records"},"Flatten records"),(0,o.kt)("p",null,"Providing ",(0,o.kt)("inlineCode",{parentName:"p"},"--flatten")," embeds nested records:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vast export json --flatten '#type == /.*flow/' | jq\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2011-08-14T05:38:53.914038",\n  "flow_id": 929669869939483,\n  "pcap_cnt": null,\n  "vlan": null,\n  "in_iface": null,\n  "src_ip": "147.32.84.165",\n  "src_port": 138,\n  "dest_ip": "147.32.84.255",\n  "dest_port": 138,\n  "proto": "UDP",\n  "event_type": "flow",\n  "community_id": null,\n  "flow.pkts_toserver": 2,\n  "flow.pkts_toclient": 0,\n  "flow.bytes_toserver": 486,\n  "flow.bytes_toclient": 0,\n  "flow.start": "2011-08-12T12:53:47.928539",\n  "flow.end": "2011-08-12T12:53:47.928552",\n  "flow.age": 0,\n  "flow.state": "new",\n  "flow.reason": "timeout",\n  "flow.alerted": false,\n  "app_proto": "failed"\n}\n')),(0,o.kt)("p",null,"Note how the nested ",(0,o.kt)("inlineCode",{parentName:"p"},"flow")," record of the first output is now flattened in the\n(single) top-level record."),(0,o.kt)("h3",{id:"omit-null-fields"},"Omit null fields"),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"--omit-nulls")," to skip fields that are not set, i.e., would render as ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"\nin JSON:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vast export json --omit-null '#type == /.*flow/' | jq\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp": "2011-08-12T13:00:36.378914",\n  "flow_id": 269421754201300,\n  "pcap_cnt": 22569,\n  "src_ip": "147.32.84.165",\n  "src_port": 1027,\n  "dest_ip": "74.125.232.202",\n  "dest_port": 80,\n  "proto": "TCP",\n  "event_type": "http",\n  "http": {\n    "hostname": "cr-tools.clients.google.com",\n    "url": "/service/check2?appid=%7B430FD4D0-B729-4F61-AA34-91526481799D%7D&appversion=1.3.21.65&applang=&machine=0&version=1.3.21.65&osversion=5.1&servicepack=Service%20Pack%202",\n    "http_user_agent": "Google Update/1.3.21.65;winhttp",\n    "http_method": "GET",\n    "protocol": "HTTP/1.1",\n    "length": 0\n  },\n  "tx_id": 0\n}\n')),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"pcap_cnt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"vlan"),", and other fields do not appear in the output,\nalthough have existed in the query result above."),(0,o.kt)("h3",{id:"omitting-empty-fields"},"Omitting empty fields"),(0,o.kt)("p",null,"The options ",(0,o.kt)("inlineCode",{parentName:"p"},"--omit-empty-records"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--omit-empty-lists"),", and\n",(0,o.kt)("inlineCode",{parentName:"p"},"--omit-empty-maps")," cause empty records, lists, and maps to be hidden from the\noutput respectively."),(0,o.kt)("p",null,"For example, consider this JSON object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "foo": [],\n  "bar": [\n    null\n  ],\n  "baz": {\n    "qux": {},\n    "quux": null\n  }\n}\n')),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"--omit-empty-records"),", this same record will display like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "foo": [],\n  "bar": [\n    null\n  ],\n  "baz": {\n    "quux": null\n  }\n}\n')),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"--omit-empty-lists"),", this same record will display like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bar": [\n    null\n  ],\n  "baz": {\n    "qux": {},\n    "quux": null\n  }\n}\n')),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"--omit-empty-records")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--omit-nulls"),", this same record will display\nlike this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bar": []\n}\n')),(0,o.kt)("p",null,"::tip Shorthand Syntax\nThe option ",(0,o.kt)("inlineCode",{parentName:"p"},"--omit-empty")," is short for ",(0,o.kt)("inlineCode",{parentName:"p"},"--omit-nulls --omit-empty-records\n--omit-empty-lists --omit-empty-maps"),".\n:::"),(0,o.kt)("h3",{id:"render-durations-as-fractional-seconds"},"Render durations as fractional seconds"),(0,o.kt)("p",null,"For use cases that involve arithmetic on time durations after VAST provided the\ndata, the default representation of duration types as string with an SI suffix\nis not convenient, e.g., rendering them as ",(0,o.kt)("inlineCode",{parentName:"p"},'"42 secs"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'"1.5d"')," would require\nadditional parsing."),(0,o.kt)("p",null,"For such cases, printing durations as fractional seconds (like a UNIX timestamp)\ncan come in handy. Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"--numeric-durations")," to the JSON export to perform this\ntransformation."))}u.isMDXComponent=!0}}]);
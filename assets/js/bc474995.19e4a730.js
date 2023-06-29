"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>x,frontMatter:()=>h,metadata:()=>y,toc:()=>v});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&l.call(e,a)&&(n[a]=e[a]);return n};const h={},f="Export",y={unversionedId:"use/export/README",id:"version-VAST v3.1/use/export/README",title:"Export",description:"Querying data from VAST (aka exporting) involves spinning up a VAST client",source:"@site/versioned_docs/version-VAST v3.1/use/export/README.md",sourceDirName:"use/export",slug:"/use/export/",permalink:"/VAST v3.1/use/export/",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-VAST v3.1/use/export/README.md",tags:[],version:"VAST v3.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Import",permalink:"/VAST v3.1/use/import/"},next:{title:"Transform",permalink:"/VAST v3.1/use/transform/"}},k={},v=[{value:"Decide what to query",id:"decide-what-to-query",level:2},{value:"Begin with an expression",id:"begin-with-an-expression",level:2},{value:"Apply a pipeline",id:"apply-a-pipeline",level:2},{value:"Choose an export format",id:"choose-an-export-format",level:2}],g={toc:v},w="wrapper";function x(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(w,d(c(c({},g),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",c({},{id:"export"}),"Export"),(0,a.kt)("p",null,"Querying data from VAST (aka ",(0,a.kt)("em",{parentName:"p"},"exporting"),") involves spinning up a VAST client\nthat executes a query expression. In the following, we assume that you ",(0,a.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/use/run/"}),"set up a\nserver")," listening at ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:5158"),"."),(0,a.kt)("p",null,"To run a query, you need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"know what to look for"),(0,a.kt)("li",{parentName:"ol"},"express what you want"),(0,a.kt)("li",{parentName:"ol"},"decide in what format to show the result")),(0,a.kt)("p",null,"Let's go through each of these steps."),(0,a.kt)("h2",c({},{id:"decide-what-to-query"}),"Decide what to query"),(0,a.kt)("p",null,"To figure out what you can query, VAST offers\n",(0,a.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/use/introspect/"}),"introspection")," via the ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," command."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"show schemas")," to display the schema of all types:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"vast show schemas --yaml\n")),(0,a.kt)("p",null,"In case you ingested ",(0,a.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/understand/formats/suricata"}),"Suricata")," data, this\nmay print:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"- suricata.flow:\n    record:\n      - timestamp:\n          timestamp: time\n      - flow_id:\n          type: uint64\n          attributes:\n            index: hash\n      - pcap_cnt: uint64\n      - vlan:\n          list: uint64\n      - in_iface: string\n      - src_ip: ip\n      - src_port:\n          port: uint64\n      - dest_ip: ip\n      - dest_port:\n          port: uint64\n      - proto: string\n      - event_type: string\n      - community_id:\n          type: string\n          attributes:\n            index: hash\n      - flow:\n          suricata.component.flow:\n            record:\n              - pkts_toserver: uint64\n              - pkts_toclient: uint64\n              - bytes_toserver: uint64\n              - bytes_toclient: uint64\n              - start: time\n              - end: time\n              - age: uint64\n              - state: string\n              - reason: string\n              - alerted: bool\n      - app_proto: string\n- suricata.http:\n    record:\n      - timestamp:\n          timestamp: time\n      - flow_id:\n          type: uint64\n          attributes:\n            index: hash\n      - pcap_cnt: uint64\n      - vlan:\n          list: uint64\n      - in_iface: string\n      - src_ip: ip\n      - src_port:\n          port: uint64\n      - dest_ip: ip\n      - dest_port:\n          port: uint64\n      - proto: string\n      - event_type: string\n      - community_id:\n          type: string\n          attributes:\n            index: hash\n      - http:\n          record:\n            - hostname: string\n            - url: string\n            - http_port:\n                port: uint64\n            - http_user_agent: string\n            - http_content_type: string\n            - http_method: string\n            - http_refer: string\n            - protocol: string\n            - status: uint64\n            - redirect: string\n            - length: uint64\n      - tx_id:\n          type: uint64\n          attributes:\n            index: hash\n")),(0,a.kt)("p",null,"The next section discusses how you can refer to various elements of this type\nschema."),(0,a.kt)("h2",c({},{id:"begin-with-an-expression"}),"Begin with an expression"),(0,a.kt)("p",null,"We designed the ",(0,a.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/understand/"}),"VAST language")," to make it\neasy to reference the data schema and put constraints on it. Specifically,\nVAST's ",(0,a.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/understand/expressions"}),"expression language")," has the\nconcept of ",(0,a.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/understand/expressions#extractors"}),"extractors"),"\nthat refer to various parts of the event structure. For example, you can query\nthe above schemas with a ",(0,a.kt)("em",{parentName:"p"},"meta extractor")," to select a specific set of event\ntypes:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-c"}),"#type == /suricata.(http|flow)/\n")),(0,a.kt)("p",null,"This predicate restricts a query to the event types ",(0,a.kt)("inlineCode",{parentName:"p"},"suricata.flow")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"suricata.http"),". You can think of the meta extractor as operating on the table\nheader, whereas ",(0,a.kt)("em",{parentName:"p"},"field extractors")," operate on the table body instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-c"}),'hostname == "evil.com" || dest_ip in 10.0.0.0/8\n')),(0,a.kt)("p",null,"This expression has two predicates with field extractors. The first field\nextractor ",(0,a.kt)("inlineCode",{parentName:"p"},"hostname")," is in fact a suffix of the fully-qualified field\n",(0,a.kt)("inlineCode",{parentName:"p"},"suricata.http.hostname"),". Because it's often inconvenient to write down the\ncomplete field name, you can write just ",(0,a.kt)("inlineCode",{parentName:"p"},"hostname")," instead. Of there exist\nmultiple fields that qualify, VAST builds the logical OR (a ",(0,a.kt)("em",{parentName:"p"},"disjunction"),") of\nall fields. This may unfold as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-c"}),'suricata.http.hostname == "evil.com" || myevent.hostname == "evil.com" || ...\n')),(0,a.kt)("p",null,'So at the end it\'s up to you: if you want to be fast and can live with\npotentially cross-firing other matches, then you can go with the "short and\nsweet" style of writing your query. If you need exact answers, you can always\nwrite out the entire field.'),(0,a.kt)("p",null,"Looking at the other side of the field name, we have its type. This is where\n",(0,a.kt)("em",{parentName:"p"},"type extractors")," come into play. In you don't know the field name you are\nlooking for, we still want that you can write queries effectively. Taking the\nabove query as an example, you can also write:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-c"}),':string == "evil.com" || :ip in 10.0.0.0/8\n')),(0,a.kt)("p",null,"In fact, both predicates in this expression are what we call ",(0,a.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/understand/expressions#value-predicates"}),"value\npredicates"),", making\nit possible to shorten this expression to:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-c"}),'"evil.com" || 10.0.0.0/8\n')),(0,a.kt)("p",null,"Using type extractors (and thereby value predicates) hinges on having\na powerful type system. If you only have strings and numbers, this is not\nhelping much. VAST's ",(0,a.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/understand/data-model/type-system"}),"type system"),"\nsupports ",(0,a.kt)("em",{parentName:"p"},"aliases"),", e.g., you can define an alias called ",(0,a.kt)("inlineCode",{parentName:"p"},"port")," that points to a\n",(0,a.kt)("inlineCode",{parentName:"p"},"uint64"),". Then you'd write a query only over ports:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-c"}),":port != 443\n")),(0,a.kt)("p",null,"As above, this predicate would apply to all fields of type ",(0,a.kt)("inlineCode",{parentName:"p"},"port"),"\u2014independent of\ntheir name."),(0,a.kt)("p",null,"To summarize, we have now seen three ways to query data, all based on\ninformation that is intrinsic to the data. There's another way to write queries\nusing extrinsic information: ",(0,a.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/understand/data-model/taxonomies"}),"event taxonomies"),", which define\n",(0,a.kt)("em",{parentName:"p"},"concepts")," and ",(0,a.kt)("em",{parentName:"p"},"models"),". Concepts are basically field mappings that VAST\nresolves prior to query execution, whereas models define a tuple over concepts,\ne.g., to represent common structures like a network connection 4-tuple. A\nconcept query looks syntactically identical to field extractor query. For\nexample:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-c"}),"net.src.ip !in 192.168.0.0/16\n")),(0,a.kt)("p",null,"VAST resolves the concept ",(0,a.kt)("inlineCode",{parentName:"p"},"net.src.ip")," to all fieldnames that this concept has\nbeen defined with. We defer to the ",(0,a.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/understand/data-model/taxonomies"}),"taxonomy documentation")," for a\nmore detailed discussion."),(0,a.kt)("h2",c({},{id:"apply-a-pipeline"}),"Apply a pipeline"),(0,a.kt)("p",null,"After providing a filter expression, you can optionally continue with a\n",(0,a.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/understand/pipelines"}),"pipeline"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"src_ip == 192.168.1.104\n| select timestamp, flow_id, src_ip, dest_ip, src_port\n| drop timestamp\n")),(0,a.kt)("h2",c({},{id:"choose-an-export-format"}),"Choose an export format"),(0,a.kt)("p",null,"After your have written your query expression, the final step is selecting how\nyou'd like the result to be served. The ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," command spins up a VAST client\nthat connects to a server where the query runs, and receives the results back to\nthen render them on standard output:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"vast export [options] <format> [options] [expr]\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/understand/formats/"}),"format")," defines how VAST renders the\nquery results. Text formats include ",(0,a.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/understand/formats/json"}),"JSON"),",\n",(0,a.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/understand/formats/csv"}),"CSV"),", or tool-specific data encodings like\n",(0,a.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/understand/formats/zeek"}),"Zeek"),".\n",(0,a.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/understand/formats/pcap"}),"PCAP")," is an example for a binary format."),(0,a.kt)("p",null,"For example, to run query that exports the results as JSON, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"vast export json net.src.ip in 10.0.0.0/8\n")))}x.isMDXComponent=!0}}]);
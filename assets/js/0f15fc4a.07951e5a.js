"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},l),{},{components:n})):a.createElement(k,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52894:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Missing Documentation",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This part of the documentation is not yet written. Stay tuned.")))}i.isMDXComponent=!0},2486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905)),o=n(52894);const i={},p="Query",s={unversionedId:"use/query/README",id:"use/query/README",title:"Query",description:"Choose an export format",source:"@site/docs/use/query/README.md",sourceDirName:"use/query",slug:"/use/query/",permalink:"/docs/use/query/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/use/query/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Ingest",permalink:"/docs/use/ingest/"},next:{title:"Transform",permalink:"/docs/use/transform/"}},c={},l=[{value:"Choose an export format",id:"choose-an-export-format",level:2},{value:"Zeek",id:"zeek",level:3},{value:"Broker",id:"broker",level:4},{value:"Arrow",id:"arrow",level:3},{value:"PCAP",id:"pcap",level:3},{value:"Extract packets in a specific time range",id:"extract-packets-in-a-specific-time-range",level:4},{value:"Extract packets matching IPs and ports",id:"extract-packets-matching-ips-and-ports",level:4},{value:"Extract packets matching VLAN IDs",id:"extract-packets-matching-vlan-ids",level:4},{value:"Extract packet matching a Community ID",id:"extract-packet-matching-a-community-id",level:4}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"query"},"Query"),(0,r.kt)(o.ZP,{mdxType:"MissingDocumentation"}),(0,r.kt)("h2",{id:"choose-an-export-format"},"Choose an export format"),(0,r.kt)(o.ZP,{mdxType:"MissingDocumentation"}),(0,r.kt)("h3",{id:"zeek"},"Zeek"),(0,r.kt)(o.ZP,{mdxType:"MissingDocumentation"}),(0,r.kt)("h4",{id:"broker"},"Broker"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"broker")," export command sends query results to Zeek via the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeek/broker"},"Broker")," communication library."),(0,r.kt)("p",null,"Broker provides a topic-based publish-subscribe communication layer and\nstandardized data model to interact with the Zeek ecosystem. Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"broker"),"\nwriter, VAST can send query results to a Zeek instance. This allows you to write\nZeek scripts incorporate knowledge from the past that is no longer in Zeek\nmemory, e.g., when writing detectors for longitudinal attacks."),(0,r.kt)("p",null,"To export a query into a Zeek instance, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"broker")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Spawn a Broker endpoint, connect to localhost:9999/tcp, and publish\n# to the topic `vast/data` to send result events to Zeek.\nvast export broker <expression>\n")),(0,r.kt)("p",null,"To handle the data in Zeek, your script must write a handler for the following\nevent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zeek"},"event VAST::data(layout: string, data: any)\n  {\n  print layout, data; // dispatch\n  }\n")),(0,r.kt)("p",null,"The event argument ",(0,r.kt)("inlineCode",{parentName:"p"},"layout")," is the name of the event in the VAST table slice.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," argument a vector of Broker data values representing the event."),(0,r.kt)("p",null,"By default, VAST automatically publishes a Zeek event ",(0,r.kt)("inlineCode",{parentName:"p"},"VAST::data")," to the topic\n",(0,r.kt)("inlineCode",{parentName:"p"},"vast/data/"),". Use ",(0,r.kt)("inlineCode",{parentName:"p"},"--event")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--topic")," to set these options to different\nvalues."),(0,r.kt)("h3",{id:"arrow"},"Arrow"),(0,r.kt)("p",null,"VAST supports ",(0,r.kt)("a",{parentName:"p",href:"/docs/use/ingest#arrow"},"reading")," and writing data in the ",(0,r.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/format/Columnar.html#serialization-and-interprocess-communication-ipc"},(0,r.kt)("inlineCode",{parentName:"a"},"Arrow\nIPC"))," columnar format, suitable for efficient handling of large data\nsets. For example, VAST's ",(0,r.kt)("a",{parentName:"p",href:"/docs/use/integrate/python"},"Python bindings")," use this\nformat for high-bandwidth data exchange."),(0,r.kt)("p",null,"Since Arrow IPC is self-contained and includes the full schema, you can use it\nto transfer data between VAST nodes, even if the target node is not aware of the\nunderlying schema."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"VAST makes use of Arrow\n",(0,r.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/format/Columnar.html#extension-types"},"extension types"),"\nto properly describe domain-specific concepts like IP addresses or subnets. The\n",(0,r.kt)("a",{parentName:"p",href:"/docs/use/integrate/python"},"Python bindings")," come with the required tooling, so\nyou can work with native types instead of relying on generic string or number\nrepresentations.")),(0,r.kt)("h3",{id:"pcap"},"PCAP"),(0,r.kt)("p",null,"VAST supports ",(0,r.kt)("a",{parentName:"p",href:"/docs/use/ingest#pcap"},"reading")," and writing\n",(0,r.kt)("a",{parentName:"p",href:"http://www.tcpdump.org"},"PCAP")," traces via ",(0,r.kt)("inlineCode",{parentName:"p"},"libpcap"),". On the write path, VAST can\nwrite packets to a trace file."),(0,r.kt)("admonition",{title:"Writing PCAP traces",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"VAST can only write PCAP traces for events of type ",(0,r.kt)("inlineCode",{parentName:"p"},"pcap.packet"),". To avoid\nbogus trace file files, VAST automatically appends ",(0,r.kt)("inlineCode",{parentName:"p"},'#type == "pcap.packet"')," to\nevery query expression.")),(0,r.kt)("p",null,"Below are some examples queries the generate PCAP traces. In principle, you can\nalso use other output formats aside from ",(0,r.kt)("inlineCode",{parentName:"p"},"pcap"),". These will render the binary\nPCAP packet representation in the ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," field."),(0,r.kt)("h4",{id:"extract-packets-in-a-specific-time-range"},"Extract packets in a specific time range"),(0,r.kt)("p",null,"VAST uses the timestamp from the PCAP header to determine the event time for a\ngiven packet. To query all packets from the last 5 minutes, leverage the ",(0,r.kt)("inlineCode",{parentName:"p"},"time"),"\nfield:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vast export pcap 'pcap.packet.time > 5 mins ago' | tcpdump -r - -nl\n")),(0,r.kt)("h4",{id:"extract-packets-matching-ips-and-ports"},"Extract packets matching IPs and ports"),(0,r.kt)("p",null,"To extract packets matching a combination of the connection 4-tuple, you can\nuse the ",(0,r.kt)("inlineCode",{parentName:"p"},"src"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dst"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sport"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"dport")," fields. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vast export pcap '6.6.6.6 && dport == 42000' | tcpdump -r - -nl\n")),(0,r.kt)("h4",{id:"extract-packets-matching-vlan-ids"},"Extract packets matching VLAN IDs"),(0,r.kt)("p",null,"VAST extracts outer and inner VLAN IDs from 802.1Q headers. You can query VLAN\nIDs using ",(0,r.kt)("inlineCode",{parentName:"p"},"vlan.outer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"vlan.inner"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vast export pcap 'vlan.outer > 0 || vlan.inner in [1, 2, 3]' | tcpdump -r - -nl\n")),(0,r.kt)("p",null,"Special IDs include ",(0,r.kt)("inlineCode",{parentName:"p"},"0x000")," (frame does not carry a VLAN ID) and ",(0,r.kt)("inlineCode",{parentName:"p"},"0xFFF"),"\n(reserved value; sometimes wildcard match). If you would like to check the\npresence of a header, check whether it null, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"vlan.outer != nil"),"."),(0,r.kt)("h4",{id:"extract-packet-matching-a-community-id"},"Extract packet matching a Community ID"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"community_id")," field to query all packets belonging to a single flow\nidentified by a Community ID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vast export pcap 'community_id == \"1:wCb3OG7yAFWelaUydu0D+125CLM=\"' |\n  tcpdump -r - -nl\n")))}u.isMDXComponent=!0}}]);
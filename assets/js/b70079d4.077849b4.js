"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>v,frontMatter:()=>f,metadata:()=>k,toc:()=>w});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>o(e,i(t)),d=(e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const f={},h="pcap",k={unversionedId:"formats/pcap",id:"formats/pcap",title:"pcap",description:"Reads and writes raw network packets in libpcap format.",source:"@site/docs/formats/pcap.md",sourceDirName:"formats",slug:"/formats/pcap",permalink:"/next/formats/pcap",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/formats/pcap.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"parquet",permalink:"/next/formats/parquet"},next:{title:"ssv",permalink:"/next/formats/ssv"}},y={},w=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"VLAN Tags",id:"vlan-tags",level:3},{value:"Flow Management",id:"flow-management",level:3},{value:"<code>--disable-community-id</code>",id:"--disable-community-id",level:3},{value:"<code>-c|--cutoff=&lt;uint64&gt;</code>",id:"-c--cutoffuint64",level:3},{value:"<code>-m|--max-flows=&lt;int&gt;</code>",id:"-m--max-flowsint",level:3},{value:"<code>-a|--max-flow-age=&lt;duration&gt;</code>",id:"-a--max-flow-ageduration",level:3},{value:"<code>-e|--flow-expiry=&lt;duration&gt;</code>",id:"-e--flow-expiryduration",level:3},{value:"Examples",id:"examples",level:2}],b={toc:w},g="wrapper";function v(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,a.kt)(g,u(m(m({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"pcap"}),"pcap"),(0,a.kt)("p",null,"Reads and writes raw network packets in libpcap format."),(0,a.kt)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,a.kt)("p",null,"Parser:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"pcap [--disable-community-id] \n     [-c|--cutoff=<uint64t>] [-m|--max-flows=<uint64t>]\n     [-a|--max-flow-age=<duration>] [-e|--flow-expiry=<uint64t>]\n")),(0,a.kt)("p",null,"Printer:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"pcap\n")),(0,a.kt)("h2",m({},{id:"description"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pcap")," parser converts raw bytes representing libpcap packets into events,\nand the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcap")," printer generates libpcap streams from events."),(0,a.kt)("p",null,"The format abstracts away the concrete packet representation. Currently, the\nonly supported representation is ",(0,a.kt)("a",m({parentName:"p"},{href:"http://www.tcpdump.org"}),"PCAP"),". The concrete\nrepresentation is an attribute to the ",(0,a.kt)("inlineCode",{parentName:"p"},"payload")," field in the packet schema\noutlined below:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"pcap.packet:\n  record:\n    - time:\n        timestamp: time\n    - src: ip\n    - dst: ip\n    - sport:\n        port: uint64\n    - dport:\n        port: uint64\n    - vlan:\n        record:\n          - outer: uint64\n          - inner: uint64\n    - community_id:\n        type: string\n        attributes:\n          index: hash\n    - payload:\n        type: string\n        attributes:\n          format: pcap\n          skip: ~\n")),(0,a.kt)("p",null,"The default loader for the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcap")," parser is ",(0,a.kt)("a",m({parentName:"p"},{href:"/next/connectors/stdin"}),(0,a.kt)("inlineCode",{parentName:"a"},"stdin")),"."),(0,a.kt)("p",null,"The default saver for the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcap")," printer is ",(0,a.kt)("a",m({parentName:"p"},{href:"/next/connectors/stdout"}),(0,a.kt)("inlineCode",{parentName:"a"},"stdout")),"."),(0,a.kt)("h3",m({},{id:"vlan-tags"}),"VLAN Tags"),(0,a.kt)("p",null,"While decapsulating packets, Tenzir extracts\n",(0,a.kt)("a",m({parentName:"p"},{href:"https://en.wikipedia.org/wiki/IEEE_802.1Q"}),"802.1Q")," VLAN tags into the nested\n",(0,a.kt)("inlineCode",{parentName:"p"},"vlan")," record, consisting of an ",(0,a.kt)("inlineCode",{parentName:"p"},"outer")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"inner")," field for the respective\ntags. The value of the VLAN tag corresponds to the 12-bit VLAN identifier (VID).\nSpecial values include ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," (frame does not carry a VLAN ID) and ",(0,a.kt)("inlineCode",{parentName:"p"},"0xFFF"),"\n(reserved value; sometimes wildcard match)."),(0,a.kt)("h3",m({},{id:"flow-management"}),"Flow Management"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pcap"),' format has a few tuning knows for controlling the amount of data\nto keep per flow. Naive approaches, such as sampling or using a "snapshot"\n(',(0,a.kt)("inlineCode",{parentName:"p"},"tcpdump -s"),") make analysis that requires flow reassembly impractical due to\nincomplete byte streams. Inspired by the ",(0,a.kt)("a",m({parentName:"p"},{href:"http://www.icir.org/vern/papers/time-machine-sigcomm08.pdf"}),"Time Machine"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcap"),"\nformat supports recording only the first ",(0,a.kt)("em",{parentName:"p"},"N")," bytes of a connection (the\n",(0,a.kt)("em",{parentName:"p"},"cutoff"),") and skipping the bulk of the flow data. This allows for recording most\nconnections in their entirety while achieving a large space reduction by\nforgoing the heavy tail of the traffic distribution."),(0,a.kt)("p",null,"In addition to cutoff configuration, the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcap")," parser has other knobs\nto tune management of the flow table managmenet that keeps the per-flow state.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"--max-flows"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"-m")," option specifies an upper bound on the flow table size in\nnumber of connections. After a certain amount of inactivity of a flow,\nthe corresponding state expires. The option ",(0,a.kt)("inlineCode",{parentName:"p"},"--max-flow-age"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"-a")," controls this\ntimeout value. Finally, the frequency of when the flow table expires entries\ncan be controlled via ",(0,a.kt)("inlineCode",{parentName:"p"},"--flow-expiry"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"-e"),"."),(0,a.kt)("h3",m({},{id:"--disable-community-id"}),(0,a.kt)("inlineCode",{parentName:"h3"},"--disable-community-id")),(0,a.kt)("p",null,"Disables computation of the per-packet ",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/corelight/community-id-spec"}),"Community\nID"),"."),(0,a.kt)("p",null,"By default, Tenzir populates the ",(0,a.kt)("inlineCode",{parentName:"p"},"community_id")," field in the packet schema with\na string representation of the Community ID, e.g.,\n",(0,a.kt)("inlineCode",{parentName:"p"},"1:wCb3OG7yAFWelaUydu0D+125CLM="),". Use ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-community-id")," to disable\ncomputation of the Community ID, e.g., to save resources."),(0,a.kt)("h3",m({},{id:"-c--cutoffuint64"}),(0,a.kt)("inlineCode",{parentName:"h3"},"-c|--cutoff=<uint64>")),(0,a.kt)("p",null,"Sets the cutoff in number of bytes per TCP byte stream."),(0,a.kt)("p",null,"For example, to only record the first 1,024 bytes of every connection, pass\n",(0,a.kt)("inlineCode",{parentName:"p"},"--cutoff=1024")," as option to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcap")," parser. Note that the cut-off is\n",(0,a.kt)("em",{parentName:"p"},"bi-directional"),", i.e., it applies to both the originator and responder TCP\nstreams and flows get evicted only after both sides have reached their cutoff\nvalue."),(0,a.kt)("h3",m({},{id:"-m--max-flowsint"}),(0,a.kt)("inlineCode",{parentName:"h3"},"-m|--max-flows=<int>")),(0,a.kt)("p",null,"Sets an upper bound on the flow table size where ",(0,a.kt)("inlineCode",{parentName:"p"},"<int>")," represents the maximum\nnumber of flows."),(0,a.kt)("p",null,"After the flow table exceeds its maximum size, the parser evicts random flows to\nmake room for the new flows. Increasing this value may reduce such evictions, at\nthe cost of a higher memory footprint."),(0,a.kt)("p",null,"Defaults to 1,048,576 (1Mi)."),(0,a.kt)("h3",m({},{id:"-a--max-flow-ageduration"}),(0,a.kt)("inlineCode",{parentName:"h3"},"-a|--max-flow-age=<duration>")),(0,a.kt)("p",null,"The flow table removes entries after a certain amount of inactivity, i.e., when\na given flow no longer sees any new packets."),(0,a.kt)("p",null,"Increasing this value keeps flows for a longer period of time in the flow table,\nwhich can benefit when computing the flow cutoff, but comes at a cost of a\nhigher memory footprint."),(0,a.kt)("p",null,"Defaults to 60 seconds."),(0,a.kt)("h3",m({},{id:"-e--flow-expiryduration"}),(0,a.kt)("inlineCode",{parentName:"h3"},"-e|--flow-expiry=<duration>")),(0,a.kt)("p",null,"Controls the frequency of flow table expirations."),(0,a.kt)("p",null,"Increasing this value reduces pressure on the flow table, at the cost of\na potentially larger memory footprint."),(0,a.kt)("p",null,"Defaults to 10 seconds."),(0,a.kt)("h2",m({},{id:"examples"}),"Examples"),(0,a.kt)("p",null,"Read packets from a PCAP file:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"from file /tmp/trace.pcap read pcap\n")),(0,a.kt)("p",null,"Filter a PCAP trace with Tenzir:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"tcpdump -r trace.pcap -w - |\n  tenzir 'read pcap | where tenzir.packet.time > 5 mins ago | write pcap' |\n  tcpdump -r - -nl\n")),(0,a.kt)("p",null,"Extract packets as JSON that have the address 6.6.6.6 as source or destination,\nand destination port 5158:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"read pcap | where 6.6.6.6 && dport == 5158 | write json\n")),(0,a.kt)("p",null,"Query VLAN IDs using ",(0,a.kt)("inlineCode",{parentName:"p"},"vlan.outer")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"vlan.inner"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"read pcap | where vlan.outer > 0 || vlan.inner in [1, 2, 3]\n")),(0,a.kt)("p",null,"Filter packets by Community ID:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),'read pcap \n| where community_id == "1:wCb3OG7yAFWelaUydu0D+125CLM=" \n| write pcap\n')))}v.isMDXComponent=!0}}]);
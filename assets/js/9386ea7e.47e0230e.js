"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4938],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57594:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>o(e,p(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_custom_props:{operator:{transformation:!0}}},v="decapsulate",y={unversionedId:"operators/decapsulate",id:"version-v4.10/operators/decapsulate",title:"decapsulate",description:"Decapsulates packet data at link, network, and transport layer.",source:"@site/versioned_docs/version-v4.10/operators/decapsulate.md",sourceDirName:"operators",slug:"/operators/decapsulate",permalink:"/v4.10/operators/decapsulate",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.10/operators/decapsulate.md",tags:[],version:"v4.10",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"context",permalink:"/v4.10/operators/context"},next:{title:"decompress",permalink:"/v4.10/operators/decompress"}},k={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"VLAN Tags",id:"vlan-tags",level:3},{value:"Examples",id:"examples",level:2}],h={toc:b},g="wrapper";function O(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(g,u(d(d({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"decapsulate"}),"decapsulate"),(0,n.kt)("p",null,"Decapsulates packet data at link, network, and transport layer."),(0,n.kt)("admonition",d({},{title:"Deprecated",type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"This operator will soon be removed in favor of first-class support for functions\nthat can be used in a variety of different operators and contexts.")),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"decapsulate\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"decapsulate")," operator proceses events of type ",(0,n.kt)("inlineCode",{parentName:"p"},"pcap.packet")," and\ndecapsulates the packet payload by extracting fields at the link, network, and\ntransport layer. The aim is not completeness, but rather exposing commonly used\nfield for analytics."),(0,n.kt)("p",null,"The operator only processes events of type ",(0,n.kt)("inlineCode",{parentName:"p"},"pcap.packet")," and emits events of\ntype ",(0,n.kt)("inlineCode",{parentName:"p"},"tenzir.packet"),"."),(0,n.kt)("h3",d({},{id:"vlan-tags"}),"VLAN Tags"),(0,n.kt)("p",null,"While decapsulating packets, ",(0,n.kt)("inlineCode",{parentName:"p"},"decapsulate")," extracts\n",(0,n.kt)("a",d({parentName:"p"},{href:"https://en.wikipedia.org/wiki/IEEE_802.1Q"}),"802.1Q")," VLAN tags into the nested\n",(0,n.kt)("inlineCode",{parentName:"p"},"vlan")," record, consisting of an ",(0,n.kt)("inlineCode",{parentName:"p"},"outer")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"inner")," field for the respective\ntags. The value of the VLAN tag corresponds to the 12-bit VLAN identifier (VID).\nSpecial values include ",(0,n.kt)("inlineCode",{parentName:"p"},"0")," (frame does not carry a VLAN ID) and ",(0,n.kt)("inlineCode",{parentName:"p"},"0xFFF"),"\n(reserved value; sometimes wildcard match)."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Decapsulate packets from a PCAP file:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"from file /tmp/trace.pcap read pcap\n| decapsulate\n")),(0,n.kt)("p",null,"Extract packets as JSON that have the address 6.6.6.6 as source or destination,\nand destination port 5158:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"read pcap\n| decapsulate\n| where 6.6.6.6 && dport == 5158\n| write json\n")),(0,n.kt)("p",null,"Query VLAN IDs using ",(0,n.kt)("inlineCode",{parentName:"p"},"vlan.outer")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"vlan.inner"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"read pcap\n| decapsulate\n| where vlan.outer > 0 || vlan.inner in [1, 2, 3]\n")),(0,n.kt)("p",null,"Filter packets by ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/corelight/community-id-spec"}),"Community\nID"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),'read pcap\n| decapsulate\n| where community_id == "1:wCb3OG7yAFWelaUydu0D+125CLM="\n')))}O.isMDXComponent=!0}}]);
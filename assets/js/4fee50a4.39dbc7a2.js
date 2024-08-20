"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=o,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>w,frontMatter:()=>m,metadata:()=>v,toc:()=>y});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={},h="Deduplicate events",v={unversionedId:"usage/deduplicate-events",id:"usage/deduplicate-events",title:"Deduplicate events",description:"The deduplicate provides is a powerful",source:"@site/docs/usage/deduplicate-events.md",sourceDirName:"usage",slug:"/usage/deduplicate-events",permalink:"/next/usage/deduplicate-events",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/usage/deduplicate-events.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Enrich with Network Inventory",permalink:"/next/usage/enrich-with-network-inventory/"},next:{title:"Integrations",permalink:"/next/integrations"}},k={},y=[{value:"Analyze unique host pairs",id:"analyze-unique-host-pairs",level:2},{value:"Remove duplicate alerts",id:"remove-duplicate-alerts",level:2},{value:"Produce a finite amount of retro lookups",id:"produce-a-finite-amount-of-retro-lookups",level:2}],g={toc:y},b="wrapper";function w(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(b,d(c(c({},g),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"deduplicate-events"}),"Deduplicate events"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",c({parentName:"p"},{href:"/next/operators/deduplicate"}),(0,r.kt)("inlineCode",{parentName:"a"},"deduplicate"))," provides is a powerful\nmechanism to remove duplicate events in a pipeline."),(0,r.kt)("p",null,"There are numerous use cases for deduplication, such as reducing noise,\noptimizing costs and make threat detection and response more efficent. Read our\n",(0,r.kt)("a",c({parentName:"p"},{href:"/blog/reduce-cost-and-noise-with-deduplication"}),"blog post")," for high-level\ndiscussion."),(0,r.kt)("h2",c({},{id:"analyze-unique-host-pairs"}),"Analyze unique host pairs"),(0,r.kt)("p",null,"Let's say you're investigating an incident and would like get a better of\npicture of what entities are involved in the communication. To this end, you\nwould like to extract all unique host pairs to identify who communicated with\nwhom."),(0,r.kt)("p",null,"Here's how this looks like with Zeek data:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),'export\n| where #schema == "zeek.conn"\n| deduplicate id.orig_h, id.resp_h\n')),(0,r.kt)("p",null,"Providing ",(0,r.kt)("inlineCode",{parentName:"p"},"id.orig_h")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"id.resp_h")," to the operator restricts the output to\nall unique host pairs. Note that flipped connections occur twice here, i.e., A \u2192\nB as well as B \u2192 A are present."),(0,r.kt)("h2",c({},{id:"remove-duplicate-alerts"}),"Remove duplicate alerts"),(0,r.kt)("p",null,"Are you're overloaded with alerts, like every analyst? Let's remove some noise\nfrom our alerts."),(0,r.kt)("p",null,"First, let's check what our alert dataset looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),'export\n| where #schema == "suricata.alert"\n| top alert.signature\n| head 5\n')),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "alert.signature": "ET MALWARE Cobalt Strike Beacon Observed",\n  "count": 117369\n}\n{\n  "alert.signature": "SURICATA STREAM ESTABLISHED packet out of window",\n  "count": 103198\n}\n{\n  "alert.signature": "SURICATA STREAM Packet with invalid ack",\n  "count": 21960\n}\n{\n  "alert.signature": "SURICATA STREAM ESTABLISHED invalid ack",\n  "count": 21920\n}\n{\n  "alert.signature": "ET JA3 Hash - [Abuse.ch] Possible Dridex",\n  "count": 16870\n}\n')),(0,r.kt)("p",null,"Hundreds of thousands of alerts! Maybe I'm just interested in one per hour per\nhost affected host pair? Here's the pipeline for this:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),'from /tmp/eve.json --follow\n| where #schema == "suricata.alert"\n| deduplicate src_ip, dest_ip, alert.signature --timeout 1 hour\n| import\n')),(0,r.kt)("h2",c({},{id:"produce-a-finite-amount-of-retro-lookups"}),"Produce a finite amount of retro lookups"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",c({parentName:"p"},{href:"/next/operators/lookup"}),(0,r.kt)("inlineCode",{parentName:"a"},"lookup"))," operator offers automated live and retro\nmatching. For every context update, it generates a point query to locate events\nwith the given value. For frequent data points, e.g., the IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),",\nthis can create a massive amount of retro hits."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"deduplicate")," operator can avoid potential overload and reduce retro matches\nto a constant number of hits. For example, to receive at most 100 hits from a\nretrospective lookup, use this pipeline:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"lookup --retro feodo --field dest_ip\n| deduplicate --limit 100 feodo.value\n")))}w.isMDXComponent=!0}}]);
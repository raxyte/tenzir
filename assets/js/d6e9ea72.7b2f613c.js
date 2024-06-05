"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17006],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return o?n.createElement(f,i(i({ref:t},p),{},{components:o})):n.createElement(f,i({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},16957:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>k,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var n=o(3905),r=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,o)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,u=(e,t)=>{for(var o in t||(t={}))s.call(t,o)&&p(e,o,t[o]);if(l)for(var o of l(t))c.call(t,o)&&p(e,o,t[o]);return e},d=(e,t)=>a(e,i(t)),m=(e,t)=>{var o={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(o[n]=e[n]);return o};const f={},h="Troubleshooting",y={unversionedId:"troubleshooting",id:"version-v4.16/troubleshooting",title:"Troubleshooting",description:"Sometimes things go wrong. Oh no :-(. This page provides guidance on what to do",source:"@site/versioned_docs/version-v4.16/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/troubleshooting",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.16/troubleshooting.md",tags:[],version:"v4.16",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Zeek",permalink:"/integrations/zeek"},next:{title:"FAQs",permalink:"/faqs"}},v={},b=[{value:"Connectivity",id:"connectivity",level:2},{value:"A node does not connect to the platform",id:"a-node-does-not-connect-to-the-platform",level:3},{value:"A node fails to connect with <code>system_error: failed to resolve</code>",id:"a-node-fails-to-connect-with-system_error-failed-to-resolve",level:3}],g={toc:b},w="wrapper";function k(e){var t=e,{components:o}=t,r=m(t,["components"]);return(0,n.kt)(w,d(u(u({},g),r),{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"troubleshooting"}),"Troubleshooting"),(0,n.kt)("p",null,"Sometimes things go wrong. Oh no :-(. This page provides guidance on what to do\nin error scenarios we've encountered."),(0,n.kt)("admonition",u({},{title:"Get help!",type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"Need someone to talk to? Swing by our ",(0,n.kt)("a",u({parentName:"p"},{href:"/discord"}),"Discord")," channel where the\nTenzir team and the community hang out to help each other. Alternatively, send\nus an email at ",(0,n.kt)("a",u({parentName:"p"},{href:"mailto:support@tenzir.com."}),"support@tenzir.com.")," We'll help you out as soon as possible.")),(0,n.kt)("h2",u({},{id:"connectivity"}),"Connectivity"),(0,n.kt)("h3",u({},{id:"a-node-does-not-connect-to-the-platform"}),"A node does not connect to the platform"),(0,n.kt)("p",null,"After you've followed the instructions to ",(0,n.kt)("a",u({parentName:"p"},{href:"/setup-guides/deploy-a-node"}),"deploy a\nnode"),", the node does not show up in the platform."),(0,n.kt)("p",null,"Here's what you can do:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Ensure that your firewall allows outbound 443/TCP traffic."),(0,n.kt)("li",{parentName:"ol"},"Start the node manually on the command line via ",(0,n.kt)("inlineCode",{parentName:"li"},"tenzir-node")," and observe the\noutput. In case you see a warning or an error, share it with us.")),(0,n.kt)("h3",u({},{id:"a-node-fails-to-connect-with-system_error-failed-to-resolve"}),"A node fails to connect with ",(0,n.kt)("inlineCode",{parentName:"h3"},"system_error: failed to resolve")),(0,n.kt)("p",null,"You may see this error message when a node attempts to connect to the platform:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"platform-client failed to connect: !! system_error: failed to connect: !! system_error: failed to resolve; will retry in 2m\n")),(0,n.kt)("p",null,"This can happen when additional name servers for custom domains are configured\nin your ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf"),". This is commonly referred to as ",(0,n.kt)("a",u({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Split-horizon_DNS"}),"Split\nDNS"),". The name resolution\nalgorithm in our official Linux binaries does not support such a setup natively.\nA split DNS setup is best implemented by using a local caching nameserver such\nas ",(0,n.kt)("a",u({parentName:"p"},{href:"https://thekelleys.org.uk/dnsmasq/doc.html"}),"dnsmasq")," or\n",(0,n.kt)("a",u({parentName:"p"},{href:"https://systemd.io/RESOLVED-VPNS/"}),"systemd-resolved"),"."))}k.isMDXComponent=!0}}]);
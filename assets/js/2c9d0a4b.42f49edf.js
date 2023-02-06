"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2730],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(a),p=i,m=h["".concat(c,".").concat(p)]||h[p]||u[p]||o;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},99599:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const o={sidebar_position:2},r="Vision",s={unversionedId:"about/vision",id:"about/vision",title:"Vision",description:"At Tenzir, our vision is an open ecosystem of interoperable security solutions.",source:"@site/docs/about/vision.md",sourceDirName:"about",slug:"/about/vision",permalink:"/docs/about/vision",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/about/vision.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Target Audience",permalink:"/docs/about/target-audience"},next:{title:"Use Cases",permalink:"/docs/about/use-cases/"}},c={},l=[{value:"The SOC Architecture Maze",id:"the-soc-architecture-maze",level:2},{value:"Security Data Fabric",id:"security-data-fabric",level:2}],d={toc:l},h="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(h,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vision"},"Vision"),(0,i.kt)("p",null,'At Tenzir, our vision is an open ecosystem of interoperable security solutions.\nOur goal is to break up security silos by decomposing monolith systems into\nmodular building blocks that can be flexibly recomposed with a best-of-breed\nmindset. We call this "sustainable cybersecurity architecture" because it lays\nthe foundation for accommodating future requirements in the ever-changing shape\nof organizations.'),(0,i.kt)("p",null,"To achive this vision, we are building VAST as a modular building block for a\ndata-first security operations architecture. We are fully committed to open,\nstandardized interfaces at the core that prevent vendor lock-in, both for\nsecurity content (e.g., the ",(0,i.kt)("a",{parentName:"p",href:"https://www.oasis-open.org/"},"OASIS")," standards ",(0,i.kt)("a",{parentName:"p",href:"https://oasis-open.github.io/cti-documentation/stix/intro.html"},"STIX"),",\n",(0,i.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/cacao/security-playbooks/v1.1/security-playbooks-v1.1.html"},"CACAO"),") and structured event data (e.g., ",(0,i.kt)("a",{parentName:"p",href:"https://arrow.apache.org"},"Apache Arrow"),")."),(0,i.kt)("p",null,"Our conviction is that this fundamentally different approach to security\noperations center (SOC) architecture is long overdue. Conceptually, we need to\nshift away from point-to-point product integrations built on top of narrow\ncustom APIs to an open ",(0,i.kt)("em",{parentName:"p"},"security data fabric")," as the central driver of\nevent-drien use cases. This fabric abstracts away the complexity of the\ninfrastructure and provides connectivity from cloud to distal on-premise\nlocations, as well as modular functions that can easily be composed into use\ncases in the detection and response realm. Authorized parties join this fabric\nto announce their capabilities using and app framework, wrapping functionality\nwith flexible adapters when needed. Based on a common ontological definition of\nrelationships between the connected parties and their subordinate functions and\ncapabilitis, operators merely have to connect applications to the fabric to\nyield an autonomously acting system."),(0,i.kt)("p",null,"The diagram below illustrates the core idea of this architectural shift, away\nfrom point-to-point towards one-to-many integrations:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Security Data Fabric",src:a(99142).Z+"#gh-light-mode-only",width:"5120",height:"1240"}),"\n",(0,i.kt)("img",{alt:"Security Data Fabric",src:a(13813).Z+"#gh-dark-mode-only",width:"5120",height:"1240"})),(0,i.kt)("p",null,"The network of VAST nodes forms the fabric where communication takes place over\na pluggable messaging ",(0,i.kt)("em",{parentName:"p"},"backbone"),", such as Kafka, RabbitMQ, or MQTT. In this\narchitecture, VAST assumes a mediator function, with a backbone-facing and\nlocal-facing side. On the backbone, VAST implements the security domain\nknowledge and analytical processing power to enable composable use cases, such\nas routing security content to detection engines, or executing security on top\nof the available telemetry. On the local side, VAST bi-directionally integrates\nsecurity tools, infusing them with relevant data from the fabric and exposing\ntheir data and services to the fabric for other tools."),(0,i.kt)("p",null,"The primary communication pattern of the fabric is publish-subscribe, wrapping\nrequest-response-style communication where appropriate. An example scenario\nlooks as follows: a network sensor publishes structured events to the fabric. A\ndetector subscribes to this data stream and publishes alerts back to the fabric\non another stream. A triaging engine subscribes to alerts and requests\nvulnerability information to create prioritized incidents in a case management\ntool."),(0,i.kt)("admonition",{title:"OpenDXL Comparison",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.opendxl.com/"},"OpenDXL")," might appear similar in many ways. The key\ndifference is that we do not want to prescribe MQTT as fixed backbone. While\nthis may work for some scenarios, in many it does not. ",(0,i.kt)("a",{parentName:"p",href:"https://www.intel.com.au/content/www/au/en/it-management/intel-it-best-practices/modern-scalable-cyber-intelligence-platform-kafka.html"},"Large SOCs often use\nKafka")," as their high-bandwidth messaging backbone, and every public\ncloud has its own streaming and event hub implementations. In addition, we do\nnot want to burden operators with rolling out ",(0,i.kt)("em",{parentName:"p"},"another")," message bus that\nabstracts the infrastructure complexity. Our position is ",(0,i.kt)("em",{parentName:"p"},"bring your own bus"),".\nVAST uses what is available."),(0,i.kt)("p",{parentName:"admonition"},"We demonstrated the concept of a pluggable backbone in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tenzir/threatbus"},"Threat\nBus"),", which onboards data to the fabric by\nconverting it to STIX and then routing it via the backbone.")),(0,i.kt)("p",null,"Now that you know our vision, let us level-set where we are today and describe\nour chartered course to make our vision real."),(0,i.kt)("h2",{id:"the-soc-architecture-maze"},"The SOC Architecture Maze"),(0,i.kt)("p",null,"Today's SOC architecture is product-centric: SIEM harbors all data, SOAR\nexecutes workflows and calls APIs, TIP manages security content, EDR raises\nalerts from the endpoint, NDR from the network, and CDR from the cloud\u2014all\nserved with metadata where possible. When combined, voil\xe0 XDR:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Traditional SOC Architecture",src:a(78043).Z+"#gh-light-mode-only",width:"1773",height:"1160"}),"\n",(0,i.kt)("img",{alt:"Traditional SOC Architecture",src:a(71406).Z+"#gh-dark-mode-only",width:"1773",height:"1160"})),(0,i.kt)("admonition",{title:"General Issues",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"There are several general issues with this approach:"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Data Silos"),': many security products (especially SaaS) sit in the\npath of the data and capture activity telemetry in their own backend from\nwhere they drive analytics. However, you can often only see the distilled\nreports without having full access to their own data. Pre-canned analytics\nallow for some processing in a vendor-specific toolchain, and an "open" API\nmay allow for selective, low-bandwidth access. But since egress is expensive,\nvendors are incentivised to shield this data from you. A classical silo.'),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Vendor Lock-in"),": after stitching together dozens of different tools,\nyou are finally in business, assuming that the strategic alliances programs\nbetween the vendors exactly implement your use cases. If not? Then you are at\nthe mercy of your vendors. But even when you've settled with the existing\nintegrations, SOC technology constantly evolves. You will want to integrate\nthe next best-in-class solution, and hopefully it plays nicely with the\nexisting ones. So how to avoid this gambling? There is always the big-vendor\nmonolith security stack: the integrated solution for all your needs. Some\ncan live with a fully externally dictated roadmap and cost ratchet, others\nswitch from the frying pan to the fire."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Compliance"),": public cloud solutions may support choice of geographic\nregion for data storage, to meet coarse data residency requirements. This is\na good start. For on-prem products there appears full control, but is it\nreally enough for achieving compliance? How to guarantee that minimum/maximum\nretention spans are properly enforced? Is data anonymized, pseudonymized, and\nencrypted at the needed level of granularity? If the vendor doesn't provide\nsufficient controls, a roadblock lies ahead.")),(0,i.kt)("p",{parentName:"admonition"},"Aside from these general issues, there are also more specific ones with the\nabove architecture. This concerns ",(0,i.kt)("a",{parentName:"p",href:"/docs/about/target-audience"},"advanced security\nteams")," that strive for full control over their\ndetections. These teams operate with a data-first mindset and bring their own\ntools for analytics. The SIEM functionality rarely suffices to perform the\ndesired analysis, and needs to be ETL'ed into a dedicated analytics workbench,\ne.g., Spark, Hadoop, or Snowflake. This happens typically with recurring\nover-night jobs, on demand when something is missing, or fully upstream of the\nSIEM by putting an analytics-capable system in the path of the data. But since\nSIEM has all the parsers to onboard data sources, this now requires\nre-implementing data acquisition partially. Few SOCs have the required data\nengineering inhouse to scale this, which leads to buying a ",(0,i.kt)("em",{parentName:"p"},"second")," SIEM-ish\nsystem capable of the analytics."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/docs/about/use-cases/siem-offloading"},"SIEM Offloading")," is a valid use\ncase, but it's duct tape from an architectural perspective.")),(0,i.kt)("h2",{id:"security-data-fabric"},"Security Data Fabric"),(0,i.kt)("p",null,"We envision an alternative architecture to overcome these issues: a ",(0,i.kt)("strong",{parentName:"p"},"security\ndata fabric")," with analytical processing capabilities ",(0,i.kt)("em",{parentName:"p"},"built in"),". In other\nwords, we decouple security data acquisition and content execution from any\nproduct and make it a modular function of the fabric nodes."),(0,i.kt)("p",null,"The diagram below outlines the abstraction of the fabric:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Modern SOC Architecture",src:a(33234).Z+"#gh-light-mode-only",width:"1655",height:"1560"}),"\n",(0,i.kt)("img",{alt:"Modern SOC Architecture",src:a(4433).Z+"#gh-dark-mode-only",width:"1655",height:"1560"})),(0,i.kt)("admonition",{title:"Key Benefits",type:"tip"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Standardized data access"),": unified access to security content, event logs,\nand other high-volume telemetry (e.g., network traffic) streamlines workflows\nacross the board. Triaging accuracy and hunting efficiency increases because\ncontextualization becomes easier. End-to-end detection engineering becomes\nfaster because feature extraction, model validation, and generation of\nsecurity-content uses a single data interface. Response becomes more targeted\nand possible to automate when more data for decision support is present."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Improved collaboration"),": given the drastic talent shortage, productivity\nin the SOC is key. In particular, this means efficient collaboration between\nthe ",(0,i.kt)("a",{parentName:"li",href:"/docs/about/target-audience"},"central roles"),". When SOC Analyst,\nDetection Engineer, and Data Scientist can work with the same interface,\ntheir throughput improves across the board, reducing friction and improving\nall central MTT* metrics, e.g.,\nmean-time-to-{triage,detect,investigate,respond}."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Sustainable architecture"),": when the fabric facilitates the use cases,\nonboarding new security tools becomes a matter of telling the fabric how to\nexpose itself. XDR is no longer a product but an outcome. Likewise, SIEM is a\nprocess rather than a monolith data silo. The byproduct of this indirection\nis ",(0,i.kt)("em",{parentName:"li"},"linear")," incremental deployability rather than quadratic overhead,\nmeaning, you only have to onboard a tool once to the fabric, and then all\nothers can interact with it. This also makes for easier benchmarking of\nsecurity tools under evaluation by feeding both the same data feed.\nFor example, determining which tools have the lowest false-postive rate can\ngreately inform your investment decision. It also simplifies switching from a\nlegacy tool to a new one, as the new one can run ramp up in parallel before\nturning off the old one. Now we're back to best-of-breed with full control."))),(0,i.kt)("admonition",{title:"Security Data Lake",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Related is the concept of a ",(0,i.kt)("strong",{parentName:"p"},"security data lake"),". The difference is that the\nfabric goes beyond analytic processing of security data and enables use cases\nacross tools by providing a standardized communication medium. The fabric may\nleverage one or more lakes, but the primary focus is on providing unified access\nto federated security services.")))}u.isMDXComponent=!0},4433:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/modern-approach.dark-2b3c30dbdf900d9890e7bc773d3bb44b.png"},33234:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/modern-approach.light-d3164ba1e74a804bb9c39c338ae80c9d.png"},13813:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/security-data-fabric.dark-f77c7528f3a3fe6235596f5706ae7473.png"},99142:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/security-data-fabric.light-599e88822769250c68c949125e976130.png"},71406:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/traditional.dark-7bd412a66bc25b9d2dbefcebc65c5b05.png"},78043:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/traditional.light-b70efb9c260d4b0b09b7b2420c59a0ef.png"}}]);
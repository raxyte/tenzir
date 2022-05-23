(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5781],{59334:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(93456),s=["components"],l={},d="Get Started",c={unversionedId:"get-started/README",id:"get-started/README",title:"Get Started",description:"VAST is an embeddable security telemetry engine for structured event data.",source:"@site/docs/get-started/README.md",sourceDirName:"get-started",slug:"/get-started/",permalink:"/docs/get-started/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/docs/docs/get-started/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",next:{title:"Quick Start Guide",permalink:"/docs/get-started/quick-start-guide"}},p={},u=[{value:"Why VAST?",id:"why-vast",level:2},{value:"VAST vs. SIEM",id:"vast-vs-siem",level:3},{value:"VAST vs. Data Warehouses",id:"vast-vs-data-warehouses",level:3}],h={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-started"},"Get Started"),(0,i.kt)("p",null,"VAST is an embeddable security telemetry engine for structured event data.\nTailor-made for security operations, VAST is the foundation for many data-driven\ndetection and response uses cases, such as operationalizing threat intelligence,\nthreat hunting, event contextualization, and advanced detection engineering."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Wanna give it a try?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/get-started/quick-start-guide"},"quick start guide")," shows you how to\nget up and running and gives a quick tour of the key use cases."))),(0,i.kt)("p",null,"The documentation walks through the following phases of the user journey:"),(0,i.kt)(o.Mermaid,{config:{},chart:'flowchart LR\n  classDef action fill:#00a4f1,stroke:none,color:#eee\n  %% Actions\n  setup(Setup):::action\n  use(Use):::action\n  learn(Learn):::action\n  develop(Develop):::action\n  %% Edges\n  setup --\x3e use --\x3e learn --\x3e develop\n  %% Links\n  click setup "/docs/setup-vast/" "Setup VAST"\n  click use "/docs/use-vast/" "Use VAST"\n  click learn "/docs/learn-vast/" "Learn VAST"\n  click develop "/docs/develop-vast/" "Develop VAST"',mdxType:"Mermaid"}),(0,i.kt)("p",null,"In detail:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/setup-vast"},"Setup VAST")," describes how you can download, install, and\nconfigure VAST in a variety of environments.\n\ud83d\udc49 ",(0,i.kt)("em",{parentName:"li"},"Start here if you want to deploy VAST.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/use-vast"},"Use VAST")," explains how to work with VAST, e.g., ingesting\ndata, running queries, matching threat intelligence, or integrating it with\nother security tools.\n\ud83d\udc49 ",(0,i.kt)("em",{parentName:"li"},"Go here if you have a running VAST, and want to explore what you can do\nwith it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/understand-vast"},"Understand VAST")," describes the system design goals\nand architecture, e.g., the actor model as concurrency and distribution\nlayer, separation of read/write path, and core components like the catalog\nthat provides light-weight indexing and manages schema meta data.\n\ud83d\udc49 ",(0,i.kt)("em",{parentName:"li"},"Read here if you want to know why VAST is built the way it is.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/develop-vast"},"Develop VAST")," provides developer-oriented resources to\ncustomize VAST, e.g., write own plugins or enhance the source code.\n\ud83d\udc49 ",(0,i.kt)("em",{parentName:"li"},"Look here if you are ready to get your hands dirty and write code."))),(0,i.kt)("p",null,"If you're unsure whether VAST is the right tool for your use case, keep reading\ndown below."),(0,i.kt)("h2",{id:"why-vast"},"Why VAST?"),(0,i.kt)("p",null,"VAST fills a gap when you need a highly embeddable database for security\ndata that powers detection and response use cases. The following graphic\nillustrates the placement of VAST in the spectrum of ",(0,i.kt)("em",{parentName:"p"},"Observability")," \u21d4\n",(0,i.kt)("em",{parentName:"p"},"Security")," and ",(0,i.kt)("em",{parentName:"p"},"Open Platform")," \u21d4 ",(0,i.kt)("em",{parentName:"p"},"Data Silo"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VAST Spectra",src:a(70140).Z,width:"1906",height:"1386"})),(0,i.kt)("p",null,"We compare VAST to SIEM and data warehouses next, but skip a comparison with\nmetrics services that we deem out of scope."),(0,i.kt)("h3",{id:"vast-vs-siem"},"VAST vs. SIEM"),(0,i.kt)("p",null,"VAST ",(0,i.kt)("em",{parentName:"p"},"complements")," a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Security_information_and_event_management"},"SIEM")," nicely with the following use cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Offloading"),": route the high-volume telemetry to VAST that would otherwise\noverload your SIEM or be cost-prohibitive to ingest. By keeping the bulk of\nthe data in VAST, you remove bottlenecks and can selectively forward the\nactivity that matters to your SIEM.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Compliance"),": VAST has fine-grained retention span configuration to meet\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/General_Data_Protection_Regulation"},"GDPR")," and\nother regulatory requirements. When storage capacity needs careful management,\nVAST's ",(0,i.kt)("em",{parentName:"p"},"compaction")," feature allows for weighted ageing of your data, so that\nyou can specify relative importance of event types. Powerful ",(0,i.kt)("em",{parentName:"p"},"transforms"),"\nallow you to anonymize, pseudonymize, or encrypt specific fields\u2014either to\nsanitize ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Personal_data"},"PII data")," on import, or\nad-hoc on export when data leaves VAST.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Data Science"),": The majority of SIEMs provide an API-only, low-bandwidth\naccess path to your security data. VAST is an ",(0,i.kt)("a",{parentName:"p",href:"https://arrow.apache.org"},"Arrow"),"-native engine\nthat offers unfettered high-bandwidth access so that you can bring your own\nworkloads, with your own tools, e.g., to run iterative clustering algorithms\nor complex feature extraction in conjunction with machine learning."))),(0,i.kt)("p",null,"Unlike a heavy-weight legacy SIEM, VAST is highly embeddable so that you can\nrun it everywhere: containerized in the public cloud, on bare-metal appliances\ndeep in the network, or at the edge."),(0,i.kt)("h3",{id:"vast-vs-data-warehouses"},"VAST vs. Data Warehouses"),(0,i.kt)("p",null,"Data warehouses,\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Online_analytical_processing"},"OLAP")," engines, and\ntime series databases seem like an appealing choice for immutable structured\ndata. They offer sufficient ingest bandwidth, perform well on group-by and\naggregation queries, come frequently with advanced operations like joins, and\noften scale out well."),(0,i.kt)("p",null,"However, as a cornerstone for security operations, they fall short in supporting\nthe following relevant use cases where VAST has the edge:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Data Onboarding"),": it takes considerable effort to write and maintain\nschemas for the tables of the respective data sources. Since VAST is\npurpose-built for security data, integrations for key data sources and data\ncarriers exist out of the box.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Rich Typing"),": modeling security event data with a\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Commercial_off-the-shelf"},"COTS")," database often\nreduces the values to strings or integers, as opposed to retaining\ndomain-specific semantics, such as IP addresses or port numbers. VAST offers a\nrich type system that can retain such semantics, supporting both\n",(0,i.kt)("em",{parentName:"p"},"schema-on-read")," (taxonomies) and ",(0,i.kt)("em",{parentName:"p"},"schema-on-write")," (transforms).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Fast Search"),": typical query patterns are (1) automatically triggered point\nqueries for tactical threat intelligence, arriving at a high rate and often in\nbulk, of which the majority are true negatives, (2) group-by and aggregations\nwhen hunting for threats, or when performing threshold-based detections."))),(0,i.kt)("p",null,"Bottom line: data warehouses may be well-suited for raw data processing, but\na data backbone for security operations has a lot more domain-specific\ndemands. The required heavy lifting to bridge this gap is cost and time\nprohibitive for any security operations center. This is why we built VAST."))}m.isMDXComponent=!0},11748:function(e,t,a){var n={"./locale":89234,"./locale.js":89234};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=11748},70140:function(e,t,a){"use strict";t.Z=a.p+"assets/images/ecosystem-e3ba3399f0a13559f66c7e5794436934.png"}}]);
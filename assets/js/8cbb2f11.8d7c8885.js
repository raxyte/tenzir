"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[868],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65456:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={sidebar_position:5},l="Tune",c={unversionedId:"setup-vast/tune",id:"setup-vast/tune",title:"Tune",description:"This section describes tuning knobs that have a notable effect on system",source:"@site/docs/setup-vast/tune.md",sourceDirName:"setup-vast",slug:"/setup-vast/tune",permalink:"/docs/setup-vast/tune",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/docs/docs/setup-vast/tune.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Configure",permalink:"/docs/setup-vast/configure"},next:{title:"Understand VAST",permalink:"/docs/understand-vast/"}},p={},d=[{value:"Batching: Table Slices",id:"batching-table-slices",level:2},{value:"Size",id:"size",level:3},{value:"Import Timeout",id:"import-timeout",level:3},{value:"Memory usage and caching",id:"memory-usage-and-caching",level:2},{value:"Caching",id:"caching",level:3},{value:"Catalog",id:"catalog",level:3},{value:"Tune sketch parameters",id:"tune-sketch-parameters",level:3},{value:"Example",id:"example",level:4},{value:"Shutdown",id:"shutdown",level:2},{value:"Logging",id:"logging",level:2}],u={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tune"},"Tune"),(0,o.kt)("p",null,"This section describes tuning knobs that have a notable effect on system\nperformance."),(0,o.kt)("h2",{id:"batching-table-slices"},"Batching: Table Slices"),(0,o.kt)("p",null,"VAST processes events in batches. Because the structured data has the shape of a\ntable, we call these batches ",(0,o.kt)("em",{parentName:"p"},"table slices"),". The following options control their\nshape and behavior."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Implementation Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Table slices are implemented as ",(0,o.kt)("em",{parentName:"p"},"Record Batches")," in Apache Arrow."))),(0,o.kt)("h3",{id:"size"},"Size"),(0,o.kt)("p",null,"Most components in VAST operate on table slices, which makes the table slice\nsize a fundamental tuning knob on the spectrum of throughput and latency. Small\ntable slices allow for shorter processing times, resulting in more scheduler\ncontext switches and a more balanced workload. But the increased pressure on the\nscheduler comes at the cost of throughput. Conversely, a large table slice size\ncreates more work for each actor invocation and makes them yield less frequently\nto the scheduler. As a result, other actors scheduled on the same thread may\nhave to wait a little longer."),(0,o.kt)("p",null,"The option ",(0,o.kt)("inlineCode",{parentName:"p"},"vast.import.batch-size")," sets an upper bound for the number of events\nper table slice."),(0,o.kt)("p",null,"The option merely controls number of events per table slice, but not\nnecessarily the number of events until a component forwards a batch to the next\nstage in a stream. The CAF streaming framework uses a credit-based flow-control\nmechanism to determine buffering of tables slices."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Setting ",(0,o.kt)("inlineCode",{parentName:"p"},"vast.import.batch-size")," to 0 causes the table slice size to be\nunbounded and leaves it to other parameters to determine the actual table slice\nsize."))),(0,o.kt)("h3",{id:"import-timeout"},"Import Timeout"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"vast.import.batch-timeout")," option sets a timeout for forwarding buffered\ntable slices to the remote VAST node. If the timeout fires before a table slice\nreaches ",(0,o.kt)("inlineCode",{parentName:"p"},"vast.import.batch-size"),", then the table slice will contain fewer events\nand ship immediately."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"vast.import.read-timeout")," option determines how long a call to read data\nfrom the input will block. After the read timeout elapses, VAST tries again at a\nlater."),(0,o.kt)("h2",{id:"memory-usage-and-caching"},"Memory usage and caching"),(0,o.kt)("p",null,"The amount of memory that a VAST server process is allowed to use can currently\nnot be configured directly as a configuration file option. Instead of such a\ndirect tuning knob, the memory usage can be influenced through the configuration\nof the caching, catalog and disk monitor features."),(0,o.kt)("h3",{id:"caching"},"Caching"),(0,o.kt)("p",null,"VAST groups table slices with the same schema in a ",(0,o.kt)("em",{parentName:"p"},"partition"),". When building a\npartition, the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"max-partition-size")," sets an upper bound on the number\nof records in a partition, across all table slices. The parameter\n",(0,o.kt)("inlineCode",{parentName:"p"},"active-partition-timeout")," provides a time-based upper bound: once reached, VAST\nconsiders the partition as complete, regardless of the number of records."),(0,o.kt)("p",null,"A LRU cache of partitions accelerates queries to recently used partitions. The\nparameter ",(0,o.kt)("inlineCode",{parentName:"p"},"max-resident-partitions")," controls the number of partitions in the LRU\ncache."),(0,o.kt)("h3",{id:"catalog"},"Catalog"),(0,o.kt)("p",null,"The catalog manages partition meta data and is responsible for deciding whether\na partition qualifies for a certain query. It does so by maintaining ",(0,o.kt)("em",{parentName:"p"},"sketch"),"\ndata structures (e.g., Bloom filters, summary statistics) for each partition.\nSketches are highly space-efficient at the cost of being probabilistic and\nyielding false positives."),(0,o.kt)("p",null,"Due to this characteristic sketches can grow sub-linear, doubling the number of\nevents in a sketch does not lead to a doubling of the memory requirement.\nBecause the catalog must be traversed in full for a given query it needs to be\nmaintained in active memory to provide high responsiveness."),(0,o.kt)("p",null,"As a consequence, the overall amount of data in a VAST instance and the\n",(0,o.kt)("inlineCode",{parentName:"p"},"max-partition-size")," determine the memory requirements of the catalog. The\noption ",(0,o.kt)("inlineCode",{parentName:"p"},"max-partition-size")," is inversely linked to the number of sketches in the\ncatalog. That means increasing the ",(0,o.kt)("inlineCode",{parentName:"p"},"max-partition-size")," is an effective method\nto reduce the memory requirements for the catalog."),(0,o.kt)("h3",{id:"tune-sketch-parameters"},"Tune sketch parameters"),(0,o.kt)("p",null,"A false positive can have substantial impact on the query latency by\nmaterializing irrelevant partitions, which involves unnecessary I/O. Based on\nthe cost of I/O, this penalty may be substantial. Conversely, reducing the false\npositive rate increases the memory consumption, leading to a higher resident set\nsize and larger RAM requirements."),(0,o.kt)("p",null,"You can control this space-time trade-off in the configuration section\n",(0,o.kt)("inlineCode",{parentName:"p"},"vast.index")," by specifying index ",(0,o.kt)("em",{parentName:"p"},"rules"),". Each rule corresponds to one sketch\nand consists of the following components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"targets"),": a list of extractors to describe the set of fields whose values to\nadd to the sketch."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fp-rate"),": an optional value to control the false-positive rate of the sketch.")),(0,o.kt)("p",null,"VAST does not create field-level sketches unless a dedicated rule with a\nmatching target configuration exists."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"vast:\n  index:\n    rules:\n      - targets:\n          # field synopses: need to specify fully qualified field name\n          - suricata.http.http.url\n        fp-rate: 0.005\n      - targets:\n          - :addr\n        fp-rate: 0.1\n")),(0,o.kt)("p",null,"This configuration includes two rules (= two sketches), where the first rule\nincludes a field extractor and the second a type extractor. The first rule\napplies to a single field, ",(0,o.kt)("inlineCode",{parentName:"p"},"suricata.http.http.url"),", and has false-positive rate\nof 0.5%. The second rule creates one sketch for all fields of type ",(0,o.kt)("inlineCode",{parentName:"p"},"addr")," that\nhas a false-positive rate of 10%."),(0,o.kt)("h2",{id:"shutdown"},"Shutdown"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"stop")," command gracefully brings down a VAST server that has been started\nwith the ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," command."),(0,o.kt)("p",null,"It is also possible to send a signal ",(0,o.kt)("inlineCode",{parentName:"p"},"SIGINT(2)")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"vast")," process instead\nof using ",(0,o.kt)("inlineCode",{parentName:"p"},"vast stop"),", but in only works on the same machine that runs the\nserver process. We recommend using ",(0,o.kt)("inlineCode",{parentName:"p"},"vast stop"),", as it also works over the wire."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"stop")," command blocks until the server process has terminated, and returns\na zero exit code upon success, making it suitable for use in launch system\nscripts."),(0,o.kt)("p",null,"The configuration option ",(0,o.kt)("inlineCode",{parentName:"p"},"vast.shutdown-grace-period")," sets the time to wait\nuntil component shutdown finishes cleanly before inducing a hard kill."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The server waits for ongoing import processes to terminate before shutting down\nitself. In case an import process is hanging, you can always terminate the\nhanging process manually to shutdown the server."))),(0,o.kt)("h2",{id:"logging"},"Logging"),(0,o.kt)("p",null,"The VAST server writes log files into a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"server.log")," in the database\ndirectory by default. Set the option ",(0,o.kt)("inlineCode",{parentName:"p"},"vast.log-file")," to change the location of\nthe log file."),(0,o.kt)("p",null,"VAST client processes do not write logs by default. Set the option\n",(0,o.kt)("inlineCode",{parentName:"p"},"vast.client-log-file")," to enable logging. Note that relative paths are\ninterpreted relative to the current working directory of the client process."),(0,o.kt)("p",null,"Server log files rotate automatically after 10 MiB. The option\n",(0,o.kt)("inlineCode",{parentName:"p"},"vast.disable-log-rotation")," allows for disabling log rotation entirely, and the\noption ",(0,o.kt)("inlineCode",{parentName:"p"},"vast.log-rotation-threshold")," sets the size limit when a log file should\nbe rotated."),(0,o.kt)("p",null,"VAST processes log messages in a dedicated thread, which by default buffers up\nto 1M messages for servers, and 100 for clients. The option\n",(0,o.kt)("inlineCode",{parentName:"p"},"vast.log-queue-size")," controls this setting."))}h.isMDXComponent=!0}}]);
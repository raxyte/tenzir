"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18994],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>w,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e},g=(e,t)=>o(e,i(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={},f="Graylog",y={unversionedId:"integrations/graylog",id:"version-v4.11/integrations/graylog",title:"Graylog",description:"Graylog is a log management solution based on top of",source:"@site/versioned_docs/version-v4.11/integrations/graylog.md",sourceDirName:"integrations",slug:"/integrations/graylog",permalink:"/v4.11/integrations/graylog",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.11/integrations/graylog.md",tags:[],version:"v4.11",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Integrations",permalink:"/v4.11/integrations"},next:{title:"Splunk",permalink:"/v4.11/integrations/splunk"}},h={},v=[{value:"Receive data from Graylog",id:"receive-data-from-graylog",level:2},{value:"Configure a GELF TCP output",id:"configure-a-gelf-tcp-output",level:3},{value:"Create a Graylog stream",id:"create-a-graylog-stream",level:3},{value:"Test the connection with a Tenzir pipeline",id:"test-the-connection-with-a-tenzir-pipeline",level:3}],k={toc:v},b="wrapper";function w(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(b,g(c(c({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"graylog"}),"Graylog"),(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"https://graylog.org/"}),"Graylog")," is a log management solution based on top of\nElasticsearch."),(0,n.kt)("p",null,"Use Tenzir to process data from Graylog."),(0,n.kt)("p",null,"In Graylog, data goes through three key stages:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Inputs"),": This stage involves data ingestion, where Graylog receives data\nfrom various sources. Inputs support multiple protocols like TCP, UDP, and\nHTTP. They normalize incoming data into the unified ",(0,n.kt)("a",c({parentName:"li"},{href:"/v4.11/formats/gelf"}),"Graylog Extended Log\nFormat (GELF)"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Streams"),": Once onboarded, streams route the data internally. Here,\nit can be filtered, parsed, and enriched. The stream processing stage\nleverages extractors and pipeline rules for data manipulation, before\nindexing the data in Elasticsearch for storage."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Outputs"),": For exporting data, Graylog utilizes alerts, dashboards, and its\nREST API. Additionally, Graylog can forward data to external systems or tools\nvia streams.")),(0,n.kt)("h2",c({},{id:"receive-data-from-graylog"}),"Receive data from Graylog"),(0,n.kt)("p",null,"To receive data from Graylog with a Tenzir pipeline, you need to configure a new\noutput and setup a stream that sends data to that output. The example below\nassumes that Graylog sends data in GELF to a TCP endpoint that listens on\n1.2.3.4 at port 5678."),(0,n.kt)("h3",c({},{id:"configure-a-gelf-tcp-output"}),"Configure a GELF TCP output"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to ",(0,n.kt)("em",{parentName:"li"},"System/Outputs")," in Graylog's web interface."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("em",{parentName:"li"},"Manage Outputs"),"."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("inlineCode",{parentName:"li"},"GELF TCP")," as the output type."),(0,n.kt)("li",{parentName:"ol"},"Configure the output settings:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Specify the target server's address in the ",(0,n.kt)("inlineCode",{parentName:"li"},"host")," field (e.g., 1.2.3.4)."),(0,n.kt)("li",{parentName:"ul"},"Enter the port number for the TCP connection (e.g., 5678)."),(0,n.kt)("li",{parentName:"ul"},"Optionally adjust other settings like reconnect delay, queue size, and send\nbuffer size."))),(0,n.kt)("li",{parentName:"ol"},"Save the configuration.")),(0,n.kt)("p",null,"Now Graylog will forward messages in GELF format to the specified TCP endpoint."),(0,n.kt)("h3",c({},{id:"create-a-graylog-stream"}),"Create a Graylog stream"),(0,n.kt)("p",null,"The newly created output still needs to be connected to a stream to produce\ndata. For example, to route all incoming traffic in Graylog to an output:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("em",{parentName:"li"},"Streams")," in the Graylog web interface."),(0,n.kt)("li",{parentName:"ol"},"Create a new stream or edit an existing one."),(0,n.kt)("li",{parentName:"ol"},"In the stream's settings, configure it to match all incoming messages. You\ncan do this by setting up a rule that matches all messages or by leaving the\nrules empty."),(0,n.kt)("li",{parentName:"ol"},"Once the stream is configured, go to the ",(0,n.kt)("em",{parentName:"li"},"Outputs")," tab in the stream's\nsettings."),(0,n.kt)("li",{parentName:"ol"},"Add the previously configured GELF TCP output to this stream.")),(0,n.kt)("p",null,"This setup will direct all messages that arrive in Graylog to the specified\noutput. Adapt your filters for more fine-grained forwarding."),(0,n.kt)("h3",c({},{id:"test-the-connection-with-a-tenzir-pipeline"}),"Test the connection with a Tenzir pipeline"),(0,n.kt)("p",null,"Now that Graylog is configured, you can test that data is flowing using the\nfollowing Tenzir pipeline:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"from tcp://1.2.3.4:5678 read gelf\n")),(0,n.kt)("p",null,"This pipelines opens a listening socket at IP address 1.2.3.4 at port 5678 via\nthe ",(0,n.kt)("a",c({parentName:"p"},{href:"/v4.11/connectors/tcp"}),"tcp")," loader, and then reads a stream of GELF messages\nusing the ",(0,n.kt)("a",c({parentName:"p"},{href:"/v4.11/formats/gelf"}),"gelf")," parser. Graylog will connect to this\nsocket, based on the reconnect interval that you configured in the output (by\ndefault 500ms)."),(0,n.kt)("p",null,"Now that data is flowing, you can decide what to do with the Graylog data, e.g.,\ningest data into a running Tenzir node by appending\n",(0,n.kt)("a",c({parentName:"p"},{href:"/v4.11/operators/import"}),"import"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"from tcp://1.2.3.4:5678 read gelf\n| import\n")))}w.isMDXComponent=!0}}]);
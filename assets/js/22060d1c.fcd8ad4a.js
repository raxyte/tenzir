"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),k=a,m=c["".concat(l,".").concat(k)]||c[k]||h[k]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},69215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>N,frontMatter:()=>m,metadata:()=>g,toc:()=>f});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&u(e,n,t[n]);return e},h=(e,t)=>i(e,o(t)),k=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={},d="Zeek Plugin",g={unversionedId:"use/integrate/threatbus/understand/plugins/apps/zeek",id:"version-VAST v3.0/use/integrate/threatbus/understand/plugins/apps/zeek",title:"Zeek Plugin",description:"The Threat Bus Zeek plugin enables communication with the",source:"@site/versioned_docs/version-VAST v3.0/use/integrate/threatbus/understand/plugins/apps/zeek.md",sourceDirName:"use/integrate/threatbus/understand/plugins/apps",slug:"/use/integrate/threatbus/understand/plugins/apps/zeek",permalink:"/VAST v3.0/use/integrate/threatbus/understand/plugins/apps/zeek",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-VAST v3.0/use/integrate/threatbus/understand/plugins/apps/zeek.md",tags:[],version:"VAST v3.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"MISP Plugin",permalink:"/VAST v3.0/use/integrate/threatbus/understand/plugins/apps/misp"},next:{title:"ZeroMQ App Plugin",permalink:"/VAST v3.0/use/integrate/threatbus/understand/plugins/apps/zmq"}},b={},f=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Threat Bus Zeek Script",id:"threat-bus-zeek-script",level:2}],y={toc:f},v="wrapper";function N(e){var t=e,{components:n}=t,a=k(t,["components"]);return(0,r.kt)(v,h(c(c({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"zeek-plugin"}),"Zeek Plugin"),(0,r.kt)("p",null,"The Threat Bus Zeek plugin enables communication with the\n",(0,r.kt)("a",c({parentName:"p"},{href:"https://zeek.org/"}),"Zeek"),' network monitor. The plugin handles all communication\nwith Zeek via the "Zeek Messaging Library"\n',(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/zeek/broker"}),"Broker"),"."),(0,r.kt)("p",null,"The Zeek plugin converts IoCs from the STIX-2 Indicator format to Broker events\nand forwards them to subscribed Zeek instances. The conversion happens on a\nbest-effort basis. When Zeek instances encounter an indicator match, they\nsend a Broker message to the Threat Bus Zeek plugin that converts it to a\nvalid STIX-2 Sighting."),(0,r.kt)("admonition",c({},{title:"Lossy Conversion",type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.zeek.org/en/current/frameworks/intel.html"}),"Zeek Intel Framework"),"\nonly supports point-indicators, i.e., IoCs with only a single value like an IP\naddress or domain name. The STIX-2 standard can express more complex, compound\nIoCs","\u2014","these cannot be expressed with Zeek intelligence items.")),(0,r.kt)("p",null,"The plugin makes the following deployment assumptions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Zeek instances that subscribe via the plugin's Broker endpoint must use the\n",(0,r.kt)("a",c({parentName:"li"},{href:"#threat-bus-zeek-script"}),"threatbus.zeek")," script."),(0,r.kt)("li",{parentName:"ol"},"Subscribing Zeek instances have the\n",(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.zeek.org/en/current/frameworks/intel.html"}),"Intelligence Framework"),"\nloaded and enabled so they can match IoCs.")),(0,r.kt)("h2",c({},{id:"installation"}),"Installation"),(0,r.kt)("p",null,"The plugin uses the\n",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.zeek.org/projects/broker/en/stable/python.html"}),"Broker python bindings"),"\nfor native interaction with Zeek. Broker and the Python bindings need to be\ninstalled on the Threat Bus host system to use this plugin. Please consult\n",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.zeek.org/projects/broker/en/current/python.html#installation-in-a-virtual-environment"}),"the official Broker documentation"),"\nfor installation instructions."),(0,r.kt)("admonition",c({},{title:"Zeek/Broker Compatibility",type:"warning"}),(0,r.kt)("p",{parentName:"admonition"},"If you install Zeek and Broker manually, you must ensure\nthat the installed versions are compatible with each other. Version\nincompatibilities can lead to silent errors."),(0,r.kt)("p",{parentName:"admonition"},"Check the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/zeek/broker/releases"}),"Broker releases")," page on\nGitHub for compatibility with Zeek.")),(0,r.kt)("p",null,"Once the prerequisites are met, install the Zeek plugin via pip."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"pip install threatbus-zeek\n")),(0,r.kt)("h2",c({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"The plugin starts a listening Broker endpoint. The endpoint characteristics for\nlistening can be configure as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),'...\nplugins:\n  apps:\n    zeek:\n      host: "127.0.0.1"\n      port: 47761\n      module_namespace: Tenzir\n...\n')),(0,r.kt)("p",null,"The last parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"module_namespace: Tenzir")," is required for Zeek's messaging\nlibrary ",(0,r.kt)("inlineCode",{parentName:"p"},"Broker"),". This namespace is set in the\n",(0,r.kt)("a",c({parentName:"p"},{href:"#threat-bus-zeek-script"}),"threatbus.zeek")," script."),(0,r.kt)("h2",c({},{id:"threat-bus-zeek-script"}),"Threat Bus Zeek Script"),(0,r.kt)("p",null,"Threat Bus is a pub/sub broker for security content. Applications like Zeek have\nto register themselves at the bus. Zeek cannot communicate with Threat Bus out\nof the box, so we provide a Zeek script\n",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/threatbus/blob/master/apps/zeek/threatbus.zeek"}),(0,r.kt)("inlineCode",{parentName:"a"},"threatbus.zeek")),"\nin the Threat Bus GitHub repository."),(0,r.kt)("p",null,"The script equips Zeek with the capability to communicate with Threat Bus, including\nthe un/subscription management and the conversion logic between Broker events\nand indicators & sightings. The script installs an event hook in Zeek that\ntriggers on intelligence matches. Should these matches be related to IoCs that\noriginate from Threat Bus, a proper sighting is generated and sent back."),(0,r.kt)("p",null,"Users can configure the script via CLI options. See the following list of all\navailable options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Option Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Default Value"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"broker_host"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),'"127.0.0.1"'),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"IP address of the Threat Bus host running the Zeek plugin. For the plugin's configuration see the Threat Bus ",(0,r.kt)("inlineCode",{parentName:"td"},"config.yaml")," file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"broker_port"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"47761/tcp"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Port of the Zeek plugin's Broker endpoint. For the plugin's configuration see the Threat Bus ",(0,r.kt)("inlineCode",{parentName:"td"},"config.yaml")," file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"report_sightings"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"T"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Toggle to report back sightings to Threat Bus.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"noisy_intel_threshold"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"100"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),'The number of matches per second an indicator must exceed before we report it as "noisy".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"log_operations"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"T"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Toggle to enable/disable logging.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"intel_topic"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),'"stix2/indicator"'),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The Threat Bus topic to subscribe for IoC updates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"sighting_topic"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),'"stix2/sighting"'),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The Threat Bus topic to report sightings to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"management_topic"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),'"threatbus/manage"'),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"A Broker topic, used for internal negotiations between Zeek instances and the Threat Bus Zeek plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"snapshot_intel"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"0 sec"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"User-defined interval to request a snapshot of historic indicators.")))),(0,r.kt)("p",null,"To set options of the Zeek script via CLI invoke it as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'zeek -i <INTERFACE> -C ./apps/zeek/threatbus.zeek "Tenzir::snapshot_intel=30 days"\n')))}N.isMDXComponent=!0}}]);
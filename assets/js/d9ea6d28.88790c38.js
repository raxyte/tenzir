"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34033],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),c=i,d=h["".concat(s,".").concat(c)]||h[c]||m[c]||r;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>N,frontMatter:()=>d,metadata:()=>f,toc:()=>b});var a=n(3905),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e},m=(e,t)=>r(e,o(t)),c=(e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const d={},k="MISP Plugin",f={unversionedId:"use/integrate/threatbus/understand/plugins/apps/misp",id:"version-VAST v3.1/use/integrate/threatbus/understand/plugins/apps/misp",title:"MISP Plugin",description:"The Threat Bus MISP plugin enables communication with the",source:"@site/versioned_docs/version-VAST v3.1/use/integrate/threatbus/understand/plugins/apps/misp.md",sourceDirName:"use/integrate/threatbus/understand/plugins/apps",slug:"/use/integrate/threatbus/understand/plugins/apps/misp",permalink:"/use/integrate/threatbus/understand/plugins/apps/misp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-VAST v3.1/use/integrate/threatbus/understand/plugins/apps/misp.md",tags:[],version:"VAST v3.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Plugins",permalink:"/use/integrate/threatbus/understand/plugins/"},next:{title:"Zeek Plugin",permalink:"/use/integrate/threatbus/understand/plugins/apps/zeek"}},g={},b=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Filter",id:"filter",level:3},{value:"Organizations",id:"organizations",level:4},{value:"Types",id:"types",level:4},{value:"Tags",id:"tags",level:4},{value:"Examples:",id:"examples",level:4},{value:"Development Setup",id:"development-setup",level:2},{value:"Dockerized Kafka",id:"dockerized-kafka",level:3},{value:"Local MISP using VirtualBox",id:"local-misp-using-virtualbox",level:3},{value:"Installation via VirtualBox",id:"installation-via-virtualbox",level:4},{value:"Configuration for usage with Threat Bus",id:"configuration-for-usage-with-threat-bus",level:4}],v={toc:b},y="wrapper";function N(e){var t=e,{components:n}=t,i=c(t,["components"]);return(0,a.kt)(y,m(h(h({},v),i),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",h({},{id:"misp-plugin"}),"MISP Plugin"),(0,a.kt)("p",null,"The Threat Bus MISP plugin enables communication with the\n",(0,a.kt)("a",h({parentName:"p"},{href:"https://www.misp-project.org/"}),"MISP")," Open Source Threat Intelligence Platform.\nThe plugin handles all communication with MISP. It uses either\n",(0,a.kt)("a",h({parentName:"p"},{href:"https://zeromq.org/"}),"ZeroMQ")," or ",(0,a.kt)("a",h({parentName:"p"},{href:"https://kafka.apache.org/"}),"Kafka")," for\nreceiving new indicators data and reports back sightings to MISP via REST API\ncalls."),(0,a.kt)("admonition",h({},{title:"MISP Module",type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"The Threat Bus MISP plugin in its current form violates the pub/sub architecture\nof Threat Bus. That is because the plugin subscribes a listener to MISP's\nZeroMQ / Kafka stream, rather than having MISP subscribe itself to Threat Bus.\nThis shortcoming will be addressed with a MISP module in the future.")),(0,a.kt)("p",null,"The plugin makes the following deployment assumptions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Indicators of compromise (IoCs) are stored in MISP as ",(0,a.kt)("em",{parentName:"li"},"attributes"),"."),(0,a.kt)("li",{parentName:"ol"},"Either ZeroMQ or Kafka is enabled in MISP for attribute publishing."),(0,a.kt)("li",{parentName:"ol"},"The MISP REST API is enabled and an API key is available.")),(0,a.kt)("p",null,"The plugin receives MISP attribute (IoC) updates from MISP, parses them to a\nvalid ",(0,a.kt)("a",h({parentName:"p"},{href:"https://oasis-open.github.io/cti-documentation/stix/intro.html"}),"STIX-2"),"\nIndicator, and publishes the parsed IoCs on the ",(0,a.kt)("inlineCode",{parentName:"p"},"stix2/indicator")," topic. Other\napps that connect to Threat Bus, like ",(0,a.kt)("a",h({parentName:"p"},{href:"zeek"}),"Zeek")," or\n",(0,a.kt)("a",h({parentName:"p"},{href:"https://github.com/tenzir/vast"}),"VAST")," can consume those indicators by\nsubscribing to that Threat Bus topic."),(0,a.kt)("p",null,"Vice versa, the MISP plugin subscribes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"stix2/sighting")," topic and\nconverts STIX-2 Sightings to MISP sightings. It reports back these sightings to\nthe MISP platform using ",(0,a.kt)("a",h({parentName:"p"},{href:"https://github.com/MISP/PyMISP"}),"PyMISP")," to query the\nMISP REST API."),(0,a.kt)("h2",h({},{id:"installation"}),"Installation"),(0,a.kt)("p",null,"The plugin receives IoC updates from MISP either via ZeroMQ or Kafka. When using\nKafka, you have to install ",(0,a.kt)("inlineCode",{parentName:"p"},"librdkafka")," for the host system that runs Threat\nBus. See the\n",(0,a.kt)("a",h({parentName:"p"},{href:"https://github.com/confluentinc/confluent-kafka-python#prerequisites"}),"prerequisites"),"\nsection of the ",(0,a.kt)("inlineCode",{parentName:"p"},"confluent-kafka")," Python client for more details."),(0,a.kt)("p",null,"Once the prerequisites are met, install the MISP plugin via pip. You can select\n",(0,a.kt)("em",{parentName:"p"},"optional dependencies")," during installation for running either with Kafka or\nZeroMQ. Both options are available as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"pip install threatbus-misp[zmq]\npip install threatbus-misp[kafka]\n")),(0,a.kt)("p",null,"If neither of these dependencies is installed (i.e., you installed\n",(0,a.kt)("inlineCode",{parentName:"p"},"threatbus-misp")," without the ",(0,a.kt)("inlineCode",{parentName:"p"},"[...]")," suffix for optional deps), the plugin\nthrows an error and exits immediately."),(0,a.kt)("h2",h({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"The plugin can either use ZeroMQ or Kafka to retrieve indicators from MISP. It\nuses the MISP REST API to report back sightings of indicators."),(0,a.kt)("p",null,"ZeroMQ and Kafka are mutually exclusive, such that Threat Bus does not receive\nall attribute updates twice. See below for an example configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-yaml"}),'...\nplugins:\n  misp:\n    api:\n      host: https://localhost\n      ssl: false\n      key: <MISP_API_KEY>\n    filter: # filter are optional. you can omit the entire section.\n      - orgs: # creator org IDs must be strings: https://github.com/MISP/PyMISP/blob/main/pymisp/data/schema.json\n          - "1"\n          - "25"\n        tags:\n          - "TLP:AMBER"\n          - "TLP:RED"\n        types: # MISP attribute types https://github.com/MISP/misp-objects/blob/main/schema_objects.json\n          - ip-src\n          - ip-dst\n          - hostname\n          - domain\n          - url\n      - orgs:\n        - "2"\n    zmq:\n      host: localhost\n      port: 50000\n    #kafka:\n    #  topics:\n    #  - misp_attribute\n    #  poll_interval: 1.0\n    #  # All config entries are passed as-is to librdkafka\n    #  # https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md\n    #  config:\n    #    bootstrap.servers: "localhost:9092"\n    #    group.id: "threatbus"\n    #    auto.offset.reset: "earliest"\n...\n')),(0,a.kt)("admonition",h({},{title:"Kafka Fine-tuning",type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"The MISP plugin forwards all settings from the ",(0,a.kt)("inlineCode",{parentName:"p"},"kafka.config")," section of the\nconfiguration file directly to the Kafka client. The used Python consumer is\n",(0,a.kt)("a",h({parentName:"p"},{href:"https://docs.confluent.io/current/clients/confluent-kafka-python/#pythonclient-consumer"}),"confluent-kafka.Consumer"),".\nFor a list of all config options please see the official\n",(0,a.kt)("a",h({parentName:"p"},{href:"https://docs.confluent.io/current/clients/confluent-kafka-python/#pythonclient-configuration"}),"Kafka Client Configuration"),"\ndocs.")),(0,a.kt)("h3",h({},{id:"filter"}),"Filter"),(0,a.kt)("p",null,"The plugin can be configured with a list of filters. Every filter describes a\nwhitelist for MISP attributes (IoCs). The MISP plugin will only forward IoCs to\nThreat Bus if the whitelisted properties are present."),(0,a.kt)("p",null,"A filter consists of three sub-whitelists for creator organizations, types, and\ntags. To pass through the filter, an attribute must provide at least one of the\nwhitelisted properties of each of the whitelists. More precisely, entries of\neach whitelist are linked by an ",(0,a.kt)("inlineCode",{parentName:"p"},'"or"'),"-function, the whitelists themselves are\nlinked by an ",(0,a.kt)("inlineCode",{parentName:"p"},'"and"'),"-function, as follows:\n",(0,a.kt)("inlineCode",{parentName:"p"},"(org_1 OR org_2) AND (type_1 OR type_2) AND (tag_1 OR tag_2)"),"."),(0,a.kt)("p",null,"The MISP plugin always assumes that the ",(0,a.kt)("em",{parentName:"p"},"absence of a whitelist means that\neverything is whitelisted"),". For example, when the entire ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," section is\nomitted from the config, then all attributes are forwarded and nothing is\nfiltered. More examples follow below."),(0,a.kt)("h4",h({},{id:"organizations"}),"Organizations"),(0,a.kt)("p",null,"Organizations are whitelisted by their ID, which is a\n",(0,a.kt)("a",h({parentName:"p"},{href:"https://github.com/MISP/PyMISP/blob/main/pymisp/data/schema.json"}),"string"),". Only\nthose MISP attributes that come from any of the whitelisted organizations will\nbe forwarded to Threat Bus."),(0,a.kt)("h4",h({},{id:"types"}),"Types"),(0,a.kt)("p",null,"Types can be whitelisted by specifying MISP\n",(0,a.kt)("a",h({parentName:"p"},{href:"https://github.com/MISP/misp-objects/blob/main/schema_objects.json"}),"attribute types"),".\nOnly those attributes that are instances of a whitelisted type will be forwarded\nto Threat Bus."),(0,a.kt)("h4",h({},{id:"tags"}),"Tags"),(0,a.kt)("p",null,"MISP Attributes can be tagged with arbitrary strings. The tag whitelist respects\ntag ",(0,a.kt)("em",{parentName:"p"},"names"),". Only those attributes that have at least one of the whitelisted\ntags will be forwarded to Threat Bus."),(0,a.kt)("h4",h({},{id:"examples"}),"Examples:"),(0,a.kt)("p",null,"This section provides some simple configuration examples to illustrate how\nwhitelist filtering works."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Forward all IoCs from the organizations ",(0,a.kt)("inlineCode",{parentName:"li"},'"1"')," and ",(0,a.kt)("inlineCode",{parentName:"li"},'"25"'))),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-yaml"}),'- orgs:\n  - "1"\n  - "25"\n')),(0,a.kt)("ol",h({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Forward only IoCs of the ",(0,a.kt)("inlineCode",{parentName:"li"},"domain"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"url"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"uri")," type, but only if they\ncome from the organization ",(0,a.kt)("inlineCode",{parentName:"li"},'"1"')," or ",(0,a.kt)("inlineCode",{parentName:"li"},'"25"'),".")),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-yaml"}),'- orgs:\n  - "1"\n  - "25"\n- types:\n  - domain\n  - url\n  - uri\n')),(0,a.kt)("ol",h({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"Forward only IoCs that are tagged with ",(0,a.kt)("inlineCode",{parentName:"li"},"TLP:RED")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"TLP:AMBER"),", but only of\ntype ",(0,a.kt)("inlineCode",{parentName:"li"},'"src-ip"'),":")),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-yaml"}),'- tags:\n  - "TLP:RED"\n  - "TLP:AMBER"\n- types:\n  - src-ip\n')),(0,a.kt)("h2",h({},{id:"development-setup"}),"Development Setup"),(0,a.kt)("p",null,"The following guides describe how to set up a local, dockerized instance of\nKafka and how to setup a VirtualBox running MISP for developing."),(0,a.kt)("h3",h({},{id:"dockerized-kafka"}),"Dockerized Kafka"),(0,a.kt)("p",null,"For a simple, working Kafka Docker setup use the\n",(0,a.kt)("a",h({parentName:"p"},{href:"https://github.com/confluentinc/cp-docker-images/blob/5.3.1-post/examples/kafka-single-node/docker-compose.yml"}),"single node example"),"\nfrom ",(0,a.kt)("inlineCode",{parentName:"p"},"confluentinc/cp-docker-images"),"."),(0,a.kt)("p",null,"Store the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," and modify the Kafka environment variables such\nthat the Docker host (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"172.17.0.1")," on Linux) of your Docker machine is\nadvertised as Kafka listener:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-yaml"}),"zookeeper:\n  ...\nkafka:\n  ...\n  environment:\n    KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:29092,PLAINTEXT_HOST://172.17.0.1:9092   # <-- That is the IP of your Docker host\n    KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT\n  ...\n")),(0,a.kt)("p",null,"Check out ",(0,a.kt)("a",h({parentName:"p"},{href:"https://rmoff.net/2018/08/02/kafka-listeners-explained/"}),"this article"),"\nfor details about Kafka listeners."),(0,a.kt)("p",null,"Then start the compose setup via ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose up -d"),"."),(0,a.kt)("p",null,"To test the setup, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"tests/utils/kafka_receiver.py")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"tests/utils/kafka_sender.py")," scripts in the Threat Bus\n",(0,a.kt)("a",h({parentName:"p"},{href:"https://github.com/tenzir/threatbus"}),"repository"),"."),(0,a.kt)("h3",h({},{id:"local-misp-using-virtualbox"}),"Local MISP using VirtualBox"),(0,a.kt)("p",null,"This guide walks you through setting up MISP using a pre-configured VirtualBox\nVM and then configuring MISP to export Attribute (IoC) updates to Threat Bus."),(0,a.kt)("h4",h({},{id:"installation-via-virtualbox"}),"Installation via VirtualBox"),(0,a.kt)("p",null,"Use the officially maintained\n",(0,a.kt)("a",h({parentName:"p"},{href:"https://www.circl.lu/misp-images/_archive/"}),"Virtual Images")," for MISP.\nDownload the latest ",(0,a.kt)("inlineCode",{parentName:"p"},".ova")," image file and load it in a VirtualBox client. Ensure\nthe following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The VM has enough working memory (e.g., 3 GiB of RAM)"),(0,a.kt)("li",{parentName:"ul"},"The VM exposes ports 8443 (web interface) and 50000 (ZMQ)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use VirtualBox port-forwarding when NATting"),(0,a.kt)("li",{parentName:"ul"},"Use VirtualBox bridge-mode & SSH into the VM using SSH port-forwarding")))),(0,a.kt)("p",null,"Here are the above steps as pure CLI instructions for running MISP in headless\nmode (i.e., without a graphical VirtualBox interface)."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{}),'curl -fL -o misp-2.4.138.ova https://www.circl.lu/misp-images/latest/MISP_v2.4.138@28ccbc9.ova\nvboxmanage import misp-2.4.138.ova --vsys 0 --vmname misp --memory 3072 --cpus 1 --eula accept\nvboxmanage modifyvm misp --nic1 nat\nvboxmanage modifyvm misp --natpf1 "zmq,tcp,,50000,,50000"\nvboxmanage list -l misp\n')),(0,a.kt)("p",null,"You can then start and stop VM using the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{}),"vboxmanage startvm misp --type headless\nvboxmanage controlvm misp poweroff\n")),(0,a.kt)("h4",h({},{id:"configuration-for-usage-with-threat-bus"}),"Configuration for usage with Threat Bus"),(0,a.kt)("p",null,"For Threat Bus to receive attribute (IoC) updates from MISP, you must either\nenable Kafka or ZMQ export in the MISP VM. If you chose to go with Kafka, you\nneed to install ",(0,a.kt)("inlineCode",{parentName:"p"},"librdkafka")," first inside the VM, then make it known to PHP."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Install Kafka inside VM")),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-sh"}),'ssh misp@<MISP_VM_IP> # enter your configured password to pop an interactive shell inside the VM\nsudo apt-get update\nsudo apt-get install software-properties-common\nsudo apt-get install librdkafka-dev\n\n# see https://misp.github.io/MISP/INSTALL.ubuntu1804/#misp-has-a-feature-for-publishing-events-to-kafka-to-enable-it-simply-run-the-following-commands\nsudo pecl channel-update pecl.php.net\nsudo pecl install rdkafka\necho "extension=rdkafka.so" | sudo tee /etc/php/7.2/mods-available/rdkafka.ini\nsudo phpenmod rdkafka\nsudo service apache2 restart\nexit\n')),(0,a.kt)("p",null,"Once Kafka is installed, you can go ahead and enable it in the MISP web-view."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Enable Kafka export in the MISP web-view")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Visit https://localhost:8443"),(0,a.kt)("li",{parentName:"ul"},"login with your configured credentials"),(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Administration")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Server Settings & Maintenance")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Plugin settings Tab")),(0,a.kt)("li",{parentName:"ul"},"Set the following entries",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Plugin.Kafka_enable")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Plugin.Kafka_brokers")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"172.17.0.1:9092"),"    <- In this example, 172.17.0.1 is the Docker host as configured in the Dockerized Kafka setup above, reachable from other Docker networks. The port is reachable when the Kafka Docker setup binds to it globally."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Plugin.Kafka_attribute_notifications_enable")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Plugin.Kafka_attribute_notifications_topic")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"misp_attribute")," <- The topic goes into the threatbus ",(0,a.kt)("inlineCode",{parentName:"li"},"config.yaml"))))),(0,a.kt)("p",null,"You can use ZeroMQ to export IoCs from MISP as light weight alternative to\nrunning Kafka. It does not require any extra installations, except enabling the\nfeature in the MISP web-view."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Enable the ZMQ plugin in the MISP web-view")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Visit https://localhost:8443"),(0,a.kt)("li",{parentName:"ul"},"login with your configured credentials"),(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Administration")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Server Settings & Maintenance")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Diagnostics Tab")),(0,a.kt)("li",{parentName:"ul"},"Find the ZeroMQ plugin section and enable it"),(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Administration")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Server Settings & Maintenance")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Plugin settings Tab")),(0,a.kt)("li",{parentName:"ul"},"Set the entry ",(0,a.kt)("inlineCode",{parentName:"li"},"Plugin.ZeroMQ_attribute_notifications_enable")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"))))}N.isMDXComponent=!0}}]);
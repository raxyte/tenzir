"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55174],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||s;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75882:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>y,default:()=>w,frontMatter:()=>f,metadata:()=>h,toc:()=>k});var a=t(3905),r=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&c(e,t,n[t]);if(i)for(var t of i(n))l.call(n,t)&&c(e,t,n[t]);return e},m=(e,n)=>s(e,o(n)),d=(e,n)=>{var t={};for(var a in e)p.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))n.indexOf(a)<0&&l.call(e,a)&&(t[a]=e[a]);return t};const f={},y="Introspect",h={unversionedId:"use/introspect/README",id:"version-VAST v3.1/use/introspect/README",title:"Introspect",description:"With introspection we mean the ability of to inspect the current system state.",source:"@site/versioned_docs/version-VAST v3.1/use/introspect/README.md",sourceDirName:"use/introspect",slug:"/use/introspect/",permalink:"/use/introspect/",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-VAST v3.1/use/introspect/README.md",tags:[],version:"VAST v3.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Transform",permalink:"/use/transform/"},next:{title:"Match Threat Intelligence",permalink:"/use/detect/match-threat-intel"}},v={},k=[{value:"Inspect the status of a VAST node",id:"inspect-the-status-of-a-vast-node",level:2},{value:"Describe event schemas and taxonomies",id:"describe-event-schemas-and-taxonomies",level:2},{value:"Describe event fields and types",id:"describe-event-fields-and-types",level:3},{value:"Describe concepts and models",id:"describe-concepts-and-models",level:3}],b={toc:k},g="wrapper";function w(e){var n=e,{components:t}=n,r=d(n,["components"]);return(0,a.kt)(g,m(u(u({},b),r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"introspect"}),"Introspect"),(0,a.kt)("p",null,"With ",(0,a.kt)("em",{parentName:"p"},"introspection")," we mean the ability of to inspect the current system state.\nThis concerns both health and status metrics of VAST, as well as higher-level\nmetadata, such as event schemas and ",(0,a.kt)("a",u({parentName:"p"},{href:"/understand/data-model/taxonomies"}),"taxonomies")," (concepts and\nmodels)."),(0,a.kt)("h2",u({},{id:"inspect-the-status-of-a-vast-node"}),"Inspect the status of a VAST node"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," command displays a variety of system information. Without any\narguments, it provides a high-level overview in JSON output:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"vast status\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "catalog": {\n    "memory-usage": 1512,\n    "num-events": 2,\n    "num-partitions": 2,\n    "schemas": {\n      "suricata.alert": {\n        "import-time": {\n          "max": "2023-01-11T15:14:59.921171",\n          "min": "2023-01-11T15:14:59.921171"\n        },\n        "num-events": 1,\n        "num-partitions": 1\n      },\n      "suricata.dns": {\n        "import-time": {\n          "max": "2023-01-11T15:14:59.920248",\n          "min": "2023-01-11T15:14:59.920248"\n        },\n        "num-events": 1,\n        "num-partitions": 1\n      }\n    }\n  },\n  "disk-monitor": {\n    "disk-monitor": {\n      "blacklist-size": 0\n    }\n  },\n  "filesystem": {\n    "type": "POSIX"\n  },\n  "importer": {\n    "transformer": {\n      "pipelines": []\n    }\n  },\n  "index": {\n    "memory-usage": 0\n  },\n  "system": {\n    "current-memory-usage": 499281920,\n    "database-path": "/var/lib/vast",\n    "in-memory-table-slices": 2,\n    "peak-memory-usage": 499281920\n  },\n  "version": {\n    "Apache Arrow": "10.0.1",\n    "Build Configuration": {\n      "Address Sanitizer": true,\n      "Assertions": true,\n      "Tree Hash": "54256390cff0a8ed63218140c35b54f3",\n      "Type": "Debug",\n      "Undefined Behavior Sanitizer": false\n    },\n    "CAF": "0.18.6",\n    "VAST": "v2.4.0-583-gade8a85ac4-dirty",\n    "plugins": {\n      "cef": "v0.1.0-g314fcdd30c",\n      "parquet": "v1.0.0-g314fcdd30c",\n      "pcap": "v1.1.0-g314fcdd30c",\n      "sigma": "v1.1.0-g2b0cf481e4",\n      "web": "v1.0.0-g0bcf9abed8"\n    }\n  }\n}\n')),(0,a.kt)("p",null,'The returned top-level JSON object has one key per component, plus the two\n"global" keys ',(0,a.kt)("inlineCode",{parentName:"p"},"system")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"version"),"."),(0,a.kt)("p",null,"There exist two variations that add more detailed output:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"vast status --detailed")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"vast status --debug"))),(0,a.kt)("p",null,"Both variations fill in more output in the respective component sections."),(0,a.kt)("h2",u({},{id:"describe-event-schemas-and-taxonomies"}),"Describe event schemas and taxonomies"),(0,a.kt)("p",null,'When you want to know "what\'s in my VAST node?" so that you can write queries,\nuse the ',(0,a.kt)("inlineCode",{parentName:"p"},"show")," command. If you're familiar with SQL databases, such as\n",(0,a.kt)("a",u({parentName:"p"},{href:"https://duckdb.org/docs/guides/meta/list_tables"}),"DuckDB"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," equivalent\nwould be ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW TABLES")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"DESCRIBE"),"."),(0,a.kt)("p",null,"You can invoke the ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," command with three positional arguments:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"vast show concepts")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"vast show models")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"vast show schemas"))),(0,a.kt)("p",null,"Options (1) and (2) show taxonomy details about concepts and models, and (3)\ndisplays all known types, both from statically specified schemas in\nconfiguration files as well as dynamically generated schemas at runtime."),(0,a.kt)("h3",u({},{id:"describe-event-fields-and-types"}),"Describe event fields and types"),(0,a.kt)("p",null,"The default output is JSON for easy post-processing. You can also pass ",(0,a.kt)("inlineCode",{parentName:"p"},"--yaml"),"\nfor a more human-readable structure after any of the positional arguments. For\nexample:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"vast show schemas --yaml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"- suricata.flow:\n    record:\n      - timestamp:\n          timestamp: time\n      - flow_id:\n          type: uint64\n          attributes:\n            index: hash\n      - pcap_cnt: uint64\n      - vlan:\n          list: uint64\n      - in_iface: string\n      - src_ip: ip\n      - src_port:\n          port: uint64\n      - dest_ip: ip\n      - dest_port:\n          port: uint64\n      - proto: string\n      - event_type: string\n      - community_id:\n          type: string\n          attributes:\n            index: hash\n      - flow:\n          suricata.component.flow:\n            record:\n              - pkts_toserver: uint64\n              - pkts_toclient: uint64\n              - bytes_toserver: uint64\n              - bytes_toclient: uint64\n              - start: time\n              - end: time\n              - age: uint64\n              - state: string\n              - reason: string\n              - alerted: bool\n      - app_proto: string\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"JSON equivalent of the above YAML output"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "suricata.flow": {\n      "record": [\n        {\n          "timestamp": {\n            "timestamp": "time"\n          }\n        },\n        {\n          "flow_id": {\n            "type": "uint64",\n            "attributes": {\n              "index": "hash"\n            }\n          }\n        },\n        {\n          "pcap_cnt": "uint64"\n        },\n        {\n          "vlan": {\n            "list": "uint64"\n          }\n        },\n        {\n          "in_iface": "string"\n        },\n        {\n          "src_ip": "ip"\n        },\n        {\n          "src_port": {\n            "port": "uint64"\n          }\n        },\n        {\n          "dest_ip": "ip"\n        },\n        {\n          "dest_port": {\n            "port": "uint64"\n          }\n        },\n        {\n          "proto": "string"\n        },\n        {\n          "event_type": "string"\n        },\n        {\n          "community_id": {\n            "type": "string",\n            "attributes": {\n              "index": "hash"\n            }\n          }\n        },\n        {\n          "flow": {\n            "suricata.component.flow": {\n              "record": [\n                {\n                  "pkts_toserver": "uint64"\n                },\n                {\n                  "pkts_toclient": "uint64"\n                },\n                {\n                  "bytes_toserver": "uint64"\n                },\n                {\n                  "bytes_toclient": "uint64"\n                },\n                {\n                  "start": "time"\n                },\n                {\n                  "end": "time"\n                },\n                {\n                  "age": "uint64"\n                },\n                {\n                  "state": "string"\n                },\n                {\n                  "reason": "string"\n                },\n                {\n                  "alerted": "bool"\n                }\n              ]\n            }\n          }\n        },\n        {\n          "app_proto": "string"\n        }\n      ]\n    }\n  }\n]\n'))),(0,a.kt)("p",null,"Semantically, ",(0,a.kt)("inlineCode",{parentName:"p"},"vast show schemas")," is to VAST data what ",(0,a.kt)("a",u({parentName:"p"},{href:"https://json-schema.org/"}),"JSON\nSchema")," is to JSON. In VAST's ",(0,a.kt)("a",u({parentName:"p"},{href:"/understand/data-model/type-system"}),"type\nsystem")," value constraints (e.g.,\nminimum value, maximum string length) correspond to type attributes, which are\nfree-form key-value pairs. To date, VAST does not actively support enforcing\ntype constraints via attributes, but will rely on this mechanism for this\npurpose in the future."),(0,a.kt)("h3",u({},{id:"describe-concepts-and-models"}),"Describe concepts and models"),(0,a.kt)("p",null,"The other two arguments to ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," commands display data-independent\n",(0,a.kt)("a",u({parentName:"p"},{href:"/understand/data-model/taxonomies"}),"taxonomy")," configuration."),(0,a.kt)("p",null,"For example, you can display all concepts as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"vast show concepts --yaml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"- concept:\n    name: net.app\n    description: The application-layer protocol of a connection\n    fields:\n      - suricata.alert.alert.app_proto\n      - suricata.dcerpc.event_type\n      - suricata.dhcp.event_type\n      - suricata.dns.event_type\n      - suricata.ftp.event_type\n      - suricata.ftp_data.event_type\n      - suricata.http.event_type\n      - suricata.fileinfo.app_proto\n      - suricata.flow.app_proto\n      - suricata.ikev2.app_proto\n      - suricata.krb5.event_type\n      - suricata.mqtt.event_type\n      - suricata.netflow.app_proto\n      - suricata.nfs.app_proto\n      - suricata.rdp.app_proto\n      - suricata.rfb.app_proto\n      - suricata.sip.app_proto\n      - suricata.smb.event_type\n      - suricata.ssh.event_type\n      - suricata.smtp.event_type\n      - suricata.snmp.event_type\n      - suricata.tftp.event_type\n      - suricata.tls.event_type\n      - sysmon.NetworkConnection.SourcePortName\n      - sysmon.NetworkConnection.DestinationPortName\n      - zeek.conn.service\n    concepts:\n      []\n")),(0,a.kt)("p",null,"Similarly, you can display all models with:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"vast show models --yaml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),'- model:\n    name: net.connection\n    description: ""\n    definition:\n      - net.src.ip\n      - net.src.port\n      - net.dst.ip\n      - net.dst.port\n      - net.proto\n')))}w.isMDXComponent=!0}}]);
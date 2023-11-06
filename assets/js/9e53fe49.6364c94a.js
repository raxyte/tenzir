"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(n),c=r,k=s["".concat(o,".").concat(c)]||s[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},77584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>v,frontMatter:()=>k,metadata:()=>N,toc:()=>h});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))d.call(t,n)&&m(e,n,t[n]);return e},u=(e,t)=>i(e,l(t)),c=(e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n};const k={sidebar_position:0},g="Build from source",N={unversionedId:"developer-guides/build-from-source",id:"version-Tenzir v4.4/developer-guides/build-from-source",title:"Build from source",description:"Tenzir uses CMake as build system. Aside from a modern C++20",source:"@site/versioned_docs/version-Tenzir v4.4/developer-guides/build-from-source.md",sourceDirName:"developer-guides",slug:"/developer-guides/build-from-source",permalink:"/developer-guides/build-from-source",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.4/developer-guides/build-from-source.md",tags:[],version:"Tenzir v4.4",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Developer Guides",permalink:"/developer-guides"},next:{title:"Build the Docker image",permalink:"/developer-guides/build-the-docker-image"}},b={},h=[{value:"Dependencies",id:"dependencies",level:2},{value:"Compile",id:"compile",level:2},{value:"Test",id:"test",level:2},{value:"Install",id:"install",level:2},{value:"Clean",id:"clean",level:2}],f={toc:h},y="wrapper";function v(e){var t=e,{components:n}=t,r=c(t,["components"]);return(0,a.kt)(y,u(s(s({},f),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"build-from-source"}),"Build from source"),(0,a.kt)("p",null,"Tenzir uses ",(0,a.kt)("a",s({parentName:"p"},{href:"https://cmake.org"}),"CMake")," as build system. Aside from a modern C++20\ncompiler, you need to ensure availability of the dependencies in the table\nbelow."),(0,a.kt)("admonition",s({},{title:"Deterministic Builds via Nix",type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"We provide a Nix flake to setup an environment in which all dependencies are\navailable. Run ",(0,a.kt)("inlineCode",{parentName:"p"},"nix develop")," inside the main source directory. You can also\ndelegate the entire build process to Nix by invoking ",(0,a.kt)("inlineCode",{parentName:"p"},"nix build"),", but be aware\nthat this method does not support incremental\nbuilds.")),(0,a.kt)("h2",s({},{id:"dependencies"}),"Dependencies"),(0,a.kt)("p",null,"Every ",(0,a.kt)("a",s({parentName:"p"},{href:"https://github.com/tenzir/tenzir/releases"}),"release")," of Tenzir includes an\n",(0,a.kt)("a",s({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Software_bill_of_materials"}),"SBOM")," in\n",(0,a.kt)("a",s({parentName:"p"},{href:"https://spdx.dev"}),"SPDX")," format that lists all dependencies and their versions."),(0,a.kt)("div",{align:"center",class:"padding-bottom--md"},(0,a.kt)("a",{class:"button button--md button--primary margin-right--md",href:"https://github.com/tenzir/tenzir/releases/latest/download/tenzir.spdx.json"},"Latest SBOM")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Required"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Dependency"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Version"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2713"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"C++ Compiler"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"C++20 required"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Tenzir is tested to compile with GCC >= 12.0 and Clang >= 15.0.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2713"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://cmake.org"}),"CMake")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),">= 3.19"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Cross-platform tool for building, testing and packaging software.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2713"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://github.com/actor-framework/actor-framework"}),"CAF")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),">= 0.18.7"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Implementation of the actor model in C++. (Bundled as submodule.)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2713"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://www.openssl.org"}),"OpenSSL")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Utilities for secure networking and cryptography.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2713"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://google.github.io/flatbuffers/"}),"FlatBuffers")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),">= 1.12.0"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Memory-efficient cross-platform serialization library.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2713"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://www.boost.org"}),"Boost")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),">= 1.81.0"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required as a general utility library.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2713"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://arrow.apache.org"}),"Apache Arrow")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),">= 13.0.0"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required for in-memory data representation. Must be built with Compute, Filesystem, S3, Zstd and Parquet enabled. For the ",(0,a.kt)("inlineCode",{parentName:"td"},"gcs")," plugin, GCS needs to be enabled.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2713"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://github.com/google/re2"}),"re2")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required for regular expressione evaluation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2713"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://github.com/jbeder/yaml-cpp"}),"yaml-cpp")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),">= 0.6.2"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required for reading YAML configuration files.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2713"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://github.com/simdjson/simdjson"}),"simdjson")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),">= 3.1.0"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required for high-performance JSON parsing. (Bundled as submodule.)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2713"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://github.com/gabime/spdlog"}),"spdlog")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),">= 1.5"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required for logging.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2713"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://fmt.dev"}),"fmt")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),">= 8.1.1"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required for formatted text output.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2713"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://github.com/Cyan4973/xxHash"}),"xxHash")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),">= 0.8.0"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required for computing fast hash digests.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2713"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://github.com/Tessil/robin-map"}),"robin-map")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),">= 0.6.3"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Fast hash map and hash set using robin hood hashing. (Bundled as subtree.)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2713"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://github.com/FastFloat/fast_float"}),"fast_float")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),">= 3.2.0"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required for parsing floating point numbers. (Bundled as submodule.)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://www.tcpdump.org"}),"libpcap")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required for building the ",(0,a.kt)("inlineCode",{parentName:"td"},"pcap")," plugin.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://github.com/confluentinc/librdkafka"}),"librdkafka")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required for building the ",(0,a.kt)("inlineCode",{parentName:"td"},"kafka")," plugin.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://github.com/nodejs/http-parser"}),"http-parser")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required for building the ",(0,a.kt)("inlineCode",{parentName:"td"},"web")," plugin.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://github.com/zeromq/cppzmq"}),"cppzmq")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required for building the ",(0,a.kt)("inlineCode",{parentName:"td"},"zmq")," plugin.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://protobuf.dev"}),"Protocol Buffers")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),">= 1.4.1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://grpci.io"}),"gRPC")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),">= 1.51")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://github.com/alanxz/rabbitmq-c"}),"rabbitmq-c")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required for building the ",(0,a.kt)("inlineCode",{parentName:"td"},"rabbitmq")," plugin.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://yara.readthedocs.io/"}),"yara")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),">= 4.4.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://python-poetry.org"}),"poetry")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required for building the Python bindings.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"http://www.doxygen.org"}),"Doxygen")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required to build documentation for libtenzir.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://github.com/jgm/pandoc"}),"Pandoc")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required to build the manpage for Tenzir.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://www.gnu.org/software/bash/"}),"bash")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),">= 4.0.0"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required to run the functional tests.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),(0,a.kt)("a",s({parentName:"td"},{href:"https://bats-core.readthedocs.io"}),"bats")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),">= 1.8.0"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Required to run the functional tests.")))),(0,a.kt)("p",null,"The minimum specified versions reflect those versions that we use in CI and\nmanual testing. Older versions may still work in select cases."),(0,a.kt)("admonition",s({},{title:"macOS",type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"On macOS, we recommend using the latest Clang from the Homebrew ",(0,a.kt)("inlineCode",{parentName:"p"},"llvm")," package\nwith the following settings:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'export PATH="$(brew --prefix llvm)/bin:${PATH}"\nexport CC="$(brew --prefix llvm)/bin/clang"\nexport CXX="$(brew --prefix llvm)/bin/clang++"\nexport LDFLAGS="-Wl,-rpath,$(brew --prefix llvm) ${LDFLAGS}"\nexport CPPFLAGS="-isystem $(brew --prefix llvm)/include ${CPPFLAGS}"\nexport CXXFLAGS="-isystem $(brew --prefix llvm)/include/c++/v1 ${CXXFLAGS}"\n')),(0,a.kt)("p",{parentName:"admonition"},"Installing via CMake on macOS configures a ",(0,a.kt)("a",s({parentName:"p"},{href:"https://www.launchd.info"}),"launchd"),"\nagent to ",(0,a.kt)("inlineCode",{parentName:"p"},"~/Library/LaunchAgents/com.tenzir.tenzir.plist"),". Use ",(0,a.kt)("inlineCode",{parentName:"p"},"launchctl")," to\nspawn a node at login:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# To unload the agent, replace 'load' with 'unload'.\nlaunchctl load -w ~/Library/LaunchAgents/com.tenzir.tenzir.plist\n"))),(0,a.kt)("h2",s({},{id:"compile"}),"Compile"),(0,a.kt)("p",null,"Building Tenzir involves the following steps:"),(0,a.kt)("p",null,"Clone the repository recursively:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/tenzir/tenzir\ncd tenzir\ngit submodule update --init --recursive -- libtenzir plugins\n")),(0,a.kt)("p",null,"Configure the build with CMake. For faster builds, we recommend passing\n",(0,a.kt)("inlineCode",{parentName:"p"},"-G Ninja")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"cmake"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'cmake -B build\n# CMake defaults to a "Debug" build. When performance matters, use "Release"\ncmake -B build -DCMAKE_BUILD_TYPE=Release  \n')),(0,a.kt)("p",null,"Optionally, you can use the CMake TUI to visually configure the build:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"ccmake build\n")),(0,a.kt)("p",null,"The source tree also contains a set of CMake presets that combine various\nconfiguration options into curated build flavors. You can list them with:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"cmake --list-presets\n")),(0,a.kt)("p",null,"Build the executable:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"cmake --build build --target all\n")),(0,a.kt)("h2",s({},{id:"test"}),"Test"),(0,a.kt)("p",null,"After you have built the executable, run the unit and integration tests to\nverify that your build works as expected:"),(0,a.kt)("p",null,"Run component-level unit tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"ctest --test-dir build\n")),(0,a.kt)("p",null,'Run the "black box" functional tests:'),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"cmake --build build --target functional-test\n")),(0,a.kt)("p",null,"Run end-to-end integration tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"cmake --build build --target integration\n")),(0,a.kt)("h2",s({},{id:"install"}),"Install"),(0,a.kt)("p",null,"Install Tenzir system-wide:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"cmake --install build\n")),(0,a.kt)("p",null,"If you prefer to install into a custom install prefix, install with ",(0,a.kt)("inlineCode",{parentName:"p"},"--prefix\n/path/to/install/prefix"),"."),(0,a.kt)("p",null,"To remove debug symbols from the installed binaries and libraries, pass\n",(0,a.kt)("inlineCode",{parentName:"p"},"--strip"),"."),(0,a.kt)("p",null,"To install only files relevant for running Tenzir and not for plugin development\npass ",(0,a.kt)("inlineCode",{parentName:"p"},"--component Runtime"),"."),(0,a.kt)("h2",s({},{id:"clean"}),"Clean"),(0,a.kt)("p",null,"In case you want to make changes to your build environment, we recommend\ndeleting the build tree entirely:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"rm -rf build\n")),(0,a.kt)("p",null,"This avoids subtle configuration glitches of transitive dependencies. For\nexample, CMake doesn't disable assertions when switching from a ",(0,a.kt)("inlineCode",{parentName:"p"},"Debug")," to\na ",(0,a.kt)("inlineCode",{parentName:"p"},"Release")," build, but would do so when starting with a fresh build of type\n",(0,a.kt)("inlineCode",{parentName:"p"},"Release"),"."))}v.isMDXComponent=!0}}]);
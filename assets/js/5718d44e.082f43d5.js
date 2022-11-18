"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8653],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return r?o.createElement(k,i(i({ref:t},c),{},{components:r})):o.createElement(k,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:1},i="Docker Compose",s={unversionedId:"setup/deploy/docker-compose",id:"setup/deploy/docker-compose",title:"Docker Compose",description:"We offer a range of Docker Compose files for quickly getting up and running with",source:"@site/docs/setup/deploy/docker-compose.md",sourceDirName:"setup/deploy",slug:"/setup/deploy/docker-compose",permalink:"/docs/setup/deploy/docker-compose",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/setup/deploy/docker-compose.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Docker",permalink:"/docs/setup/deploy/docker"},next:{title:"AWS",permalink:"/docs/setup/deploy/aws"}},l={},p=[{value:"Quick Start with Docker Compose",id:"quick-start-with-docker-compose",level:2},{value:"Override Files",id:"override-files",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"docker-compose"},"Docker Compose"),(0,n.kt)("p",null,"We offer a range of Docker Compose files for quickly getting up and running with\nVAST. All mentioned files are in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/docker"},(0,n.kt)("inlineCode",{parentName:"a"},"docker"))," directory of\nthe VAST repository, and require having the repository checked out locally."),(0,n.kt)("admonition",{title:"Docker Compose V2 CLI",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"All examples shown use the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/#compose-v2-and-the-new-docker-compose-command"},"Docker Compose V2 CLI"),". If\nusing ",(0,n.kt)("inlineCode",{parentName:"p"},"docker compose")," (with a space) does not work for you, try using\n",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose")," instead\u2014although we don't test it explicitly, most commands\nshould work that way as well.")),(0,n.kt)("h2",{id:"quick-start-with-docker-compose"},"Quick Start with Docker Compose"),(0,n.kt)("p",null,"To get up and running with VAST in Docker Compose, simply run ",(0,n.kt)("inlineCode",{parentName:"p"},"docker compose\nup")," from the ",(0,n.kt)("inlineCode",{parentName:"p"},"docker/vast")," directory, which fetches the latest version of VAST\nfrom Docker Hub."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"docker compose run")," command makes interacting with VAST inside Docker\nCompose easy:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Run `vast status` in the Docker Compose network.\ndocker compose run vast status\n\n# Import a Suricata Eve JSON file in the Docker Compose network.\n# NOTE: When piping to stdin, passing --no-TTY is required.\ndocker compose run --no-TTY vast import suricata < path/to/eve.json\n\n# Run a query against VAST.\n# NOTE: For commands that check whether input exists on stdin, passing\n# --interactive=false is required. This is a bug in Docker Compose.\ndocker compose run --interactive=false vast export json '#type == \"suricata.alert\"'\n")),(0,n.kt)("p",null,"The Docker Compose network by default exposes VAST on port 42000, allowing for\nusers to connect to it from outside, e.g., with a local VAST binary."),(0,n.kt)("h2",{id:"override-files"},"Override Files"),(0,n.kt)("p",null,"VAST's integrations with other services are opt-in, i.e., not loaded by default.\nTo opt into loading another service, specify its override file when starting\nDocker Compose:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Load both VAST and Zeek, and the import that sits between the two.\n# NOTE: The override file for Zeek does not exist yet, but we plan to add it in\n# the near future.\ndocker compose -f docker/vast/docker-compose.yaml \\\n               -f docker/zeek/docker-compose.yaml \\\n               -f docker/zeek/docker-compose.vast-import.yaml \\\n               up\n")),(0,n.kt)("p",null,"We currently have the following override files:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"File"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"docker/vast/docker-compose.yaml"),(0,n.kt)("td",{parentName:"tr",align:null},"The ",(0,n.kt)("inlineCode",{parentName:"td"},"vast")," service that starts up a VAST server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"docker/vast/docker-compose.volume.yaml"),(0,n.kt)("td",{parentName:"tr",align:null},"Add persistent storage to VAST.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"docker/vast/docker-compose.web.yaml"),(0,n.kt)("td",{parentName:"tr",align:null},"Expose the VAST web server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"docker/vast/docker-compose.build.yaml"),(0,n.kt)("td",{parentName:"tr",align:null},"Force VAST to be built from source.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"docker/quarto/docker-compose.yaml"),(0,n.kt)("td",{parentName:"tr",align:null},"Build the Quarto image and run Bash inside.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"docker/quarto/docker-compose.bind.yaml"),(0,n.kt)("td",{parentName:"tr",align:null},"Bind mound the VAST respository.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"docker/quarto/docker-compose.vast.yaml"),(0,n.kt)("td",{parentName:"tr",align:null},"Apply settings to connect to the VAST service.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"docker/thehive/docker-compose.yaml"),(0,n.kt)("td",{parentName:"tr",align:null},"Start TheHive/Cortex with a basic initial setup.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"docker/thehive/docker-compose.vast.yaml"),(0,n.kt)("td",{parentName:"tr",align:null},"Integrate the Analyzer with the VAST service.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"docker/thehive/docker-compose.app.yaml"),(0,n.kt)("td",{parentName:"tr",align:null},"Start an integration app for Suricata alerts.")))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,v=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(v,s(s({ref:t},u),{},{components:n})):r.createElement(v,s({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>O,frontMatter:()=>v,metadata:()=>y,toc:()=>f});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>i(e,s(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const v={},b="Linux",y={unversionedId:"setup/install/linux",id:"version-VAST v3.1/setup/install/linux",title:"Linux",description:"Use our pre-built build packages or [build from",source:"@site/versioned_docs/version-VAST v3.1/setup/install/linux.md",sourceDirName:"setup/install",slug:"/setup/install/linux",permalink:"/VAST v3.1/setup/install/linux",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-VAST v3.1/setup/install/linux.md",tags:[],version:"VAST v3.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Install",permalink:"/VAST v3.1/setup/install/"},next:{title:"macOS",permalink:"/VAST v3.1/setup/install/macos"}},h={},f=[{value:"systemd",id:"systemd",level:2},{value:"Prepare the host system",id:"prepare-the-host-system",level:3},{value:"Configure the unit",id:"configure-the-unit",level:3},{value:"Distribution Support",id:"distribution-support",level:2},{value:"Debian",id:"debian",level:3}],g={toc:f},k="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(k,d(c(c({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"linux"}),"Linux"),(0,r.kt)("p",null,"Use our ",(0,r.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/setup/download#packages"}),"pre-built build packages")," or ",(0,r.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/setup/build"}),"build from\nsource")," to install VAST on any Linux distribution. This package is\nrelocatable, which means you can extract it in any filesystem location and it\nwill work."),(0,r.kt)("p",null,"To deploy VAST as system service, you can use our ",(0,r.kt)("a",c({parentName:"p"},{href:"#systemd"}),"systemd\nconfiguration"),"."),(0,r.kt)("h2",c({},{id:"systemd"}),"systemd"),(0,r.kt)("p",null,"The VAST package bundles a systemd service unit under\n",(0,r.kt)("inlineCode",{parentName:"p"},"<extraction_path>/lib/systemd/system/vast.service"),". The service is sandboxed\nand runs with limited privileges."),(0,r.kt)("h3",c({},{id:"prepare-the-host-system"}),"Prepare the host system"),(0,r.kt)("p",null,"Please note that all subsequent commands require ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," privileges. The service\nrequires a user and group called ",(0,r.kt)("inlineCode",{parentName:"p"},"vast"),". You can create them as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"useradd --system --user-group vast\n")),(0,r.kt)("p",null,"Make sure that you don't grant any special rights to this user, e.g., do not\nenable ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo")," or other privileged commands. Once the user exists, you should\ncreate the directory for VAST's persistent data and change the permissions such\nthat it is owned by the new ",(0,r.kt)("inlineCode",{parentName:"p"},"vast")," user:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"mkdir -p /var/lib/vast\nchown -R vast:vast /var/lib/vast\n")),(0,r.kt)("h3",c({},{id:"configure-the-unit"}),"Configure the unit"),(0,r.kt)("p",null,"Before you begin, find the lines beginning with ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecStart=")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecStop=")," at\nthe very bottom of the ",(0,r.kt)("inlineCode",{parentName:"p"},"[Service]")," section in the unit file. Depending on your\ninstallation path you might need to change the location of the ",(0,r.kt)("inlineCode",{parentName:"p"},"vast")," binary."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-config"}),"ExecStart=/path/to/vast start\n")),(0,r.kt)("p",null,"In case your VAST deployment needs elevated privileges, e.g., to capture\npackets, you can provide them as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-ini"}),"CapabilityBoundingSet=CAP_NET_RAW\nAmbientCapabilities=CAP_NET_RAW\n")),(0,r.kt)("p",null,"Then link the unit file to your systemd search path:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"systemctl link vast.service\n")),(0,r.kt)("p",null,"To have the service start up automatically on system boot, ",(0,r.kt)("inlineCode",{parentName:"p"},"enable")," it via\n",(0,r.kt)("inlineCode",{parentName:"p"},"systemd"),". Otherwise, just ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," it to run it immediately."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"systemctl enable vast\nsystemctl start vast\n")),(0,r.kt)("h2",c({},{id:"distribution-support"}),"Distribution Support"),(0,r.kt)("h3",c({},{id:"debian"}),"Debian"),(0,r.kt)("p",null,"We provide ",(0,r.kt)("a",c({parentName:"p"},{href:"/VAST%20v3.1/setup/download#debian"}),"pre-built packages")," for Debian and\nDebian-derived distributions. After downloading, install VAST using ",(0,r.kt)("inlineCode",{parentName:"p"},"dpkg"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"dpkg -i vast-${version}_amd64.deb\n")),(0,r.kt)("p",null,"The Debian package automatically creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"vast")," system user and installs\nthe systemd server service."),(0,r.kt)("admonition",c({},{title:"Community contributions wanted!",type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"We are striving to bring VAST into the package managers of all major Linux\ndistributions. Unfortunately we can do so only at a best-effort basis, but\nwe much appreciate community contributions.")))}O.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,d=c["".concat(l,".").concat(m)]||c[m]||h[m]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>T,frontMatter:()=>d,metadata:()=>g,toc:()=>b});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&u(e,n,t[n]);return e},h=(e,t)=>i(e,o(t)),m=(e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const d={sidebar_position:2},f="Deploy",g={unversionedId:"use/integrate/threatbus/deploy",id:"version-VAST v3.1/use/integrate/threatbus/deploy",title:"Deploy",description:"This section explains how to run Threat Bus.",source:"@site/versioned_docs/version-VAST v3.1/use/integrate/threatbus/deploy.md",sourceDirName:"use/integrate/threatbus",slug:"/use/integrate/threatbus/deploy",permalink:"/VAST v3.1/use/integrate/threatbus/deploy",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-VAST v3.1/use/integrate/threatbus/deploy.md",tags:[],version:"VAST v3.1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Configure",permalink:"/VAST v3.1/use/integrate/threatbus/configure"},next:{title:"Use",permalink:"/VAST v3.1/use/integrate/threatbus/use"}},y={},b=[{value:"systemd",id:"systemd",level:2},{value:"Docker",id:"docker",level:2}],k={toc:b},v="wrapper";function T(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(v,h(c(c({},k),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",c({},{id:"deploy"}),"Deploy"),(0,a.kt)("p",null,"This section explains how to run Threat Bus."),(0,a.kt)("h2",c({},{id:"systemd"}),"systemd"),(0,a.kt)("p",null,"We provide ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," service units to run\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://pypi.org/project/threatbus/"}),"Threat Bus")," and\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://pypi.org/project/vast-threatbus/"}),"VAST Threat Bus")," as\nsystem services. The services are sandboxed and run with limited privileges."),(0,a.kt)("p",null,"The systemd units declare a private user. Hence, all logs go to\n",(0,a.kt)("inlineCode",{parentName:"p"},"/var/log/private")," by default. The following section explains how to configure\nfile-logging for Threat Bus and VAST Threat Bus. Skip the following\ninstructions if you configure your applications to use console-logging."),(0,a.kt)("p",null,"Find the ",(0,a.kt)("inlineCode",{parentName:"p"},"logging")," config section at the top of your Threat Bus or VAST Threat\nBus configuration file and change it to use the private log directory:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/var/log/private/threatbus/threatbus.log")," (Threat Bus)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/var/log/private/vast-threatbus/vast-threatbus.log")," (VAST Threat Bus)")),(0,a.kt)("p",null,"See the following YAML snippet for a configuration example."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"logging:\n  console: false\n  console_verbosity: INFO\n  file: true\n  file_verbosity: DEBUG\n  filename: /var/log/private/threatbus/threatbus.log\n")),(0,a.kt)("p",null,"Before you begin, find the line beginning with ",(0,a.kt)("inlineCode",{parentName:"p"},"ExecStart=")," at the very bottom\nof the ",(0,a.kt)("inlineCode",{parentName:"p"},"[Service]")," section in the unit file. Depending on your installation path\nyou might need to change the location of the ",(0,a.kt)("inlineCode",{parentName:"p"},"threatbus")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"vast-threatbus"),"\nexecutable packages and configuration files. Similarly, you need to change the\nenvironmentvariables ",(0,a.kt)("inlineCode",{parentName:"p"},"THREATBUSDIR")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"VAST_THREATBUSDIR")," according to your\ninstallation paths."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Threat Bus"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'Environment="THREATBUSDIR=/installation/path"\nExecStart=/installation/path/threatbus --config=/installation/path/threatbus/config.yaml\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"VAST Threat Bus"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'Environment="VAST_THREATBUSDIR=/installation/path"\nExecStart=/installation/path/vast-threatbus --config=/installation/path/vast-threatbus/config.yaml\n')))),(0,a.kt)("p",null,"Then copy (or symlink) the unit file to ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'systemctl link "$PWD/threatbus.service"\nsystemctl link "$PWD/vast-threatbus.service"\n')),(0,a.kt)("p",null,"To have the services start up automatically with system boot, you can ",(0,a.kt)("inlineCode",{parentName:"p"},"enable"),"\nthem via ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd"),". Otherwise, just ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," it to run it immediately."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"systemctl enable threatbus\nsystemctl start threatbus\nsystemctl enable vast-threatbus\nsystemctl start vast-threatbus\n")),(0,a.kt)("h2",c({},{id:"docker"}),"Docker"),(0,a.kt)("p",null,"Threat Bus ships as pre-built ",(0,a.kt)("a",c({parentName:"p"},{href:"https://hub.docker.com/r/tenzir/threatbus"}),"Docker\nimage"),". It can be used without any\nmodifications to the host system. The Threat Bus executable is used as the\nentry-point of the container. You can transparently pass all command line\noptions of Threat Bus to the container."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"docker pull tenzir/threatbus:latest\ndocker run tenzir/threatbus:latest --help\n")),(0,a.kt)("p",null,"The pre-built image comes with all required dependencies and all existing\nplugins pre-installed. Threat Bus requires a config file to operate. That file\nhas to be made available inside the container, for example via mounting it."),(0,a.kt)("p",null,"The working directory inside the container is ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/tenzir/threatbus"),". To mount\na local file named ",(0,a.kt)("inlineCode",{parentName:"p"},"my-custom-config.yaml")," from the current directory into the\ncontainer, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--volume")," (",(0,a.kt)("inlineCode",{parentName:"p"},"-v"),") flag."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"docker run -v $PWD/my-custom-config.yaml:/opt/tenzir/threatbus/my-custom-config.yaml tenzir/threatbus:latest -c my-custom-config.yaml\n")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",c({parentName:"p"},{href:"configure"}),"configuration section")," to get started with a custom config\nfile or refer to the detailed ",(0,a.kt)("a",c({parentName:"p"},{href:"understand/plugins"}),"plugin\ndocumentation")," for fine tuning."),(0,a.kt)("p",null,"Depending on the installed plugins, Threat Bus binds ports to the host system.\nThe used ports are defined in your configuration file. When running Threat\nBus inside a container, the container needs to bind those ports to the host\nsystem. Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--port")," (",(0,a.kt)("inlineCode",{parentName:"p"},"-p"),") flag repeatedly for all ports you need to bind."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"docker run -p 47661:47661 -p 12345:12345 -v $PWD/config.yaml:/opt/tenzir/threatbus/config.yaml tenzir/threatbus:latest -c config.yaml\n")))}T.isMDXComponent=!0}}]);
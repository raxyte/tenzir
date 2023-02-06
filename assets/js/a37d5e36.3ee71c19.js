"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1339],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(t),f=o,d=g["".concat(s,".").concat(f)]||g[f]||c[f]||a;return t?i.createElement(d,r(r({ref:n},p),{},{components:t})):i.createElement(d,r({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<a;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5005:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=t(87462),o=(t(67294),t(3905));const a={sidebar_position:1},r="Configure",l={unversionedId:"use/integrate/threatbus/configure",id:"use/integrate/threatbus/configure",title:"Configure",description:"Threat Bus uses a configuration file that contains both global and",source:"@site/docs/use/integrate/threatbus/configure.md",sourceDirName:"use/integrate/threatbus",slug:"/use/integrate/threatbus/configure",permalink:"/docs/use/integrate/threatbus/configure",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/use/integrate/threatbus/configure.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Install",permalink:"/docs/use/integrate/threatbus/install"},next:{title:"Deploy",permalink:"/docs/use/integrate/threatbus/deploy"}},s={},u=[{value:"Config File",id:"config-file",level:2},{value:"Logging Configuration",id:"logging-configuration",level:3},{value:"Plugin Configuration",id:"plugin-configuration",level:3},{value:"Disabling of Installed Plugins",id:"disabling-of-installed-plugins",level:4}],p={toc:u},g="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(g,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure"},"Configure"),(0,o.kt)("p",null,"Threat Bus uses a configuration file that contains both global and\nplugin-specific settings. This section discusses the general layout of the file\nand options you can configure."),(0,o.kt)("h2",{id:"config-file"},"Config File"),(0,o.kt)("p",null,"Threat Bus' configuration file is formatted in YAML and consists of two sections,\n",(0,o.kt)("inlineCode",{parentName:"p"},"logging")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins"),". The following example explains the general structure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'logging:\n  console: true\n  console_verbosity: DEBUG\n  file: false\n  file_verbosity: DEBUG\n  filename: threatbus.log\n\nplugins:\n  backbones:\n    inmem:\n  apps:\n    zeek:\n      host: "127.0.0.1"\n      port: 47761\n      module_namespace: Tenzir\n')),(0,o.kt)("p",null,"For a comprehensive list of available options, see the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml.example")," file\nthat is shipped together with Threat Bus."),(0,o.kt)("h3",{id:"logging-configuration"},"Logging Configuration"),(0,o.kt)("p",null,"Logging is configured globally. The main application forwards the logging\nsettings to all installed plugins. Threat Bus supports colored console logs and\nfile logging. File and console logging are independent."),(0,o.kt)("h3",{id:"plugin-configuration"},"Plugin Configuration"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," section contains all plugin specific configuration settings. The\nsection differentiates ",(0,o.kt)("inlineCode",{parentName:"p"},"backbones")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"apps"),", depending on the\nplugin type."),(0,o.kt)("p",null,"Plugin configuration is managed via the plugin name. For example, the plugin\n",(0,o.kt)("inlineCode",{parentName:"p"},"threatbus-zeek")," has the name ",(0,o.kt)("inlineCode",{parentName:"p"},"zeek")," and is an ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," plugin. Thus it is\nconfigured in a section called ",(0,o.kt)("inlineCode",{parentName:"p"},"zeek"),", below the ",(0,o.kt)("inlineCode",{parentName:"p"},"apps")," section in the config."),(0,o.kt)("p",null,"The options that can be configured per plugin are defined by the plugin itself.\nCheck the ",(0,o.kt)("a",{parentName:"p",href:"understand/plugins"},"plugin documentation")," for details on the\nindividual plugins."),(0,o.kt)("h4",{id:"disabling-of-installed-plugins"},"Disabling of Installed Plugins"),(0,o.kt)("p",null,"Threat Bus automatically becomes aware of all plugins that are installed on the\nsame host system or virtual environment. However, plugins must have a non-empty\nsection in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml"),' to get loaded. You can "disable" any installed\nplugin simply by not putting it into the config file.'))}c.isMDXComponent=!0}}]);
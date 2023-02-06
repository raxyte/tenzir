"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3042],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=i,f=m["".concat(l,".").concat(c)]||m[c]||u[c]||a;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52894:(e,t,n)=>{n.d(t,{ZP:()=>s});var o=n(87462),i=(n(67294),n(3905));const a={toc:[]},r="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(r,(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Missing Documentation",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This part of the documentation is not yet written. Stay tuned.")))}s.isMDXComponent=!0},760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905)),a=n(52894);const r={"sidebar-position":1},s="Modules",l={unversionedId:"understand/data-model/modules",id:"understand/data-model/modules",title:"Modules",description:"Type Definition Rules",source:"@site/docs/understand/data-model/modules.md",sourceDirName:"understand/data-model",slug:"/understand/data-model/modules",permalink:"/docs/understand/data-model/modules",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/data-model/modules.md",tags:[],version:"current",frontMatter:{"sidebar-position":1},sidebar:"docsSidebar",previous:{title:"Type System",permalink:"/docs/understand/data-model/type-system"},next:{title:"Taxonomies",permalink:"/docs/understand/data-model/taxonomies"}},d={},p=[{value:"Type Definition Rules",id:"type-definition-rules",level:2},{value:"Module Directory Lookup",id:"module-directory-lookup",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"modules"},"Modules"),(0,i.kt)(a.ZP,{mdxType:"MissingDocumentation"}),(0,i.kt)("h2",{id:"type-definition-rules"},"Type Definition Rules"),(0,i.kt)("p",null,"All defined type names and aliases share one ",(0,i.kt)("em",{parentName:"p"},"global")," identifier namespace.\nIntroducing a new type definition or alias adds a symbol to this namespace. The\nfollowing rules exist to make manipulation of the namespace manageable:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"VAST processes all directories of the ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.module-dirs")," option ",(0,i.kt)("em",{parentName:"p"},"in order"),",\ncreating a union of all type definitions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Within")," a specified module directory, all type definitions must be unique,\ni.e., no types can have the same name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Across")," directories, later definitions can override existing ones from\nprevious directories. This allows users to adapt existing types by providing\nan alternate definition in a separate module directory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Resolving aliases to custom types follows a 2-phase lookup, which makes it\npossible to use a custom type and define it afterwards in the module file.\nThe 2-phase lookup only works within a module directory."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"VAST processes all directories ",(0,i.kt)("em",{parentName:"p"},"recursively"),". This means you are free to split\nthe content over a directory structure of your choice.")),(0,i.kt)("h2",{id:"module-directory-lookup"},"Module Directory Lookup"),(0,i.kt)("p",null,"VAST ships with modules containing type definitions and aliases for common\nformats, such as Zeek or Suricata logs. Pre-installed modules reside in\n",(0,i.kt)("inlineCode",{parentName:"p"},"<datadir>/vast/modules"),", and additional search paths for user-provided modules\ncan be set in the configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.yaml")," by adjusting the\n",(0,i.kt)("inlineCode",{parentName:"p"},"vast.module-dirs")," option."),(0,i.kt)("p",null,"VAST looks at module directories in the following order:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"<datadir>/vast/module")," for system-wide module files bundled with VAST,\nwhere ",(0,i.kt)("inlineCode",{parentName:"p"},"<datadir>")," is the platform-specific directory for data files, e.g.,\n",(0,i.kt)("inlineCode",{parentName:"p"},"<install-prefix>/share"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"<sysconfdir>/vast/modules")," for system-wide configuration, where\n",(0,i.kt)("inlineCode",{parentName:"p"},"<sysconfdir>")," is the platform-specific directory for configuration files,\ne.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"<install-prefix>/etc"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"~/.config/vast/modules")," for user-specific configuration. VAST respects the\nXDG base directory specification and its environment variables.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"An ordered, comma-separated list of directories passed using\n",(0,i.kt)("inlineCode",{parentName:"p"},"--module-dirs=path/to/modules")," on the command line. This corresponds to the\noption ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.module-dirs"),"."))),(0,i.kt)("admonition",{title:"Changing VAST modules",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"We recommend to avoid making changes to module files in\n",(0,i.kt)("inlineCode",{parentName:"p"},"<datadir>/vast/modules"),", as this can break updates to VAST. If you need to make\nadaptations of builtin types, you can modify them in your own module directory\nwith the help of record type operations.")))}c.isMDXComponent=!0}}]);
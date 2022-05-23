"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9937],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=i,f=c["".concat(d,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58714:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={},d="Modules",l={unversionedId:"understand-vast/data-model/modules",id:"understand-vast/data-model/modules",title:"Modules",description:"Coming soon!",source:"@site/docs/understand-vast/data-model/modules.md",sourceDirName:"understand-vast/data-model",slug:"/understand-vast/data-model/modules",permalink:"/docs/understand-vast/data-model/modules",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/docs/docs/understand-vast/data-model/modules.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Concepts",permalink:"/docs/understand-vast/data-model/concepts"},next:{title:"Types",permalink:"/docs/understand-vast/data-model/types"}},p={},m=[{value:"Type Definition Rules",id:"type-definition-rules",level:2},{value:"Module Directory Lookup",id:"module-directory-lookup",level:2}],c={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modules"},"Modules"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Text Missing")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Coming soon!"))),(0,o.kt)("h2",{id:"type-definition-rules"},"Type Definition Rules"),(0,o.kt)("p",null,"All defined type names and aliases share one ",(0,o.kt)("em",{parentName:"p"},"global")," identifier namespace.\nIntroducing a new type definition or alias adds a symbol to this namespace. The\nfollowing rules exist to make manipulation of the namespace manageable:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"VAST processes all directories of the ",(0,o.kt)("inlineCode",{parentName:"p"},"vast.module-dirs")," option ",(0,o.kt)("em",{parentName:"p"},"in order"),",\ncreating a union of all type definitions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Within")," a specified module directory, all type definitions must be unique,\ni.e., no types can have the same name.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Across")," directories, later definitions can override existing ones from\nprevious directories. This allows users to adapt existing types by providing\nan alternate definition in a separate module directory.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Resolving aliases to custom types follows a 2-phase lookup, which makes it\npossible to use a custom type and define it afterwards in the module file.\nThe 2-phase lookup only works within a module directory."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"VAST processes all directories ",(0,o.kt)("em",{parentName:"p"},"recursively"),". This means you are free to split\nthe content over a directory structure of your choice."))),(0,o.kt)("h2",{id:"module-directory-lookup"},"Module Directory Lookup"),(0,o.kt)("p",null,"VAST ships with modules containing type definitions and aliases for common\nformats, such as Zeek or Suricata logs. Pre-installed modules reside in\n",(0,o.kt)("inlineCode",{parentName:"p"},"<datadir>/vast/modules"),", and additional search paths for user-provided modules\ncan be set in the configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"vast.yaml")," by adjusting the\n",(0,o.kt)("inlineCode",{parentName:"p"},"vast.module-dirs")," option."),(0,o.kt)("p",null,"VAST looks at module directories in the following order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<datadir>/vast/module")," for system-wide module files bundled with VAST,\nwhere ",(0,o.kt)("inlineCode",{parentName:"p"},"<datadir>")," is the platform-specific directory for data files, e.g.,\n",(0,o.kt)("inlineCode",{parentName:"p"},"<install-prefix>/share"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<sysconfdir>/vast/modules")," for system-wide configuration, where\n",(0,o.kt)("inlineCode",{parentName:"p"},"<sysconfdir>")," is the platform-specific directory for configuration files,\ne.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"<install-prefix>/etc"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"~/.config/vast/modules")," for user-specific configuration. VAST respects the\nXDG base directory specification and its environment variables.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"An ordered, comma-separated list of directories passed using\n",(0,o.kt)("inlineCode",{parentName:"p"},"--module-dirs=path/to/modules")," on the command line. This corresponds to the\noption ",(0,o.kt)("inlineCode",{parentName:"p"},"vast.module-dirs"),"."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Changing VAST modules")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We recommend to avoid making changes to module files in\n",(0,o.kt)("inlineCode",{parentName:"p"},"<datadir>/vast/modules"),", as this can break updates to VAST. If you need to make\nadaptations of builtin types, you can modify them in your own module directory\nwith the help of record type operations."))))}u.isMDXComponent=!0}}]);
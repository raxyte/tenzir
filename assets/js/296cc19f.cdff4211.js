"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=d(n),k=r,c=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(c,o(o({ref:t},m),{},{components:n})):a.createElement(c,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},37054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>N,default:()=>b,frontMatter:()=>c,metadata:()=>f,toc:()=>g});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))d.call(t,n)&&m(e,n,t[n]);return e},u=(e,t)=>l(e,o(t)),k=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n};const c={sidebar_position:5},N="Operator Modifiers",f={unversionedId:"language/operator-modifiers",id:"version-v4.14/language/operator-modifiers",title:"Operator Modifiers",description:"Operator modifiers are keywords that may occur before an operator.",source:"@site/versioned_docs/version-v4.14/language/operator-modifiers.md",sourceDirName:"language",slug:"/language/operator-modifiers",permalink:"/language/operator-modifiers",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.14/language/operator-modifiers.md",tags:[],version:"v4.14",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"User-Defined Operators",permalink:"/language/user-defined-operators"},next:{title:"Operators",permalink:"/operators"}},h={},g=[{value:"Scheduled Executions",id:"scheduled-executions",level:2},{value:"<code>every</code>",id:"every",level:3},{value:"Example",id:"example",level:4},{value:"<code>cron</code>",id:"cron",level:3},{value:"Example:",id:"example-1",level:4},{value:"Unordered Execution",id:"unordered-execution",level:2},{value:"Location Overrides",id:"location-overrides",level:2}],y={toc:g},v="wrapper";function b(e){var t=e,{components:n}=t,r=k(t,["components"]);return(0,a.kt)(v,u(s(s({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"operator-modifiers"}),"Operator Modifiers"),(0,a.kt)("p",null,"Operator modifiers are keywords that may occur before an operator."),(0,a.kt)("h2",s({},{id:"scheduled-executions"}),"Scheduled Executions"),(0,a.kt)("h3",s({},{id:"every"}),(0,a.kt)("inlineCode",{parentName:"h3"},"every")),(0,a.kt)("p",null,"The special keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"every")," enables scheduled execution of an operator at a\nfixed interval."),(0,a.kt)("p",null,"Use the operator modifier like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),"every <interval> <operator> [<args...>]\n")),(0,a.kt)("h4",s({},{id:"example"}),"Example"),(0,a.kt)("p",null,"For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," prints the version number exactly once, but ",(0,a.kt)("inlineCode",{parentName:"p"},"every 1s\nversion")," prints the version number once every second."),(0,a.kt)("h3",s({},{id:"cron"}),(0,a.kt)("inlineCode",{parentName:"h3"},"cron")),(0,a.kt)("p",null,"The special keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"cron")," enables scheduled execution of an operator according\nto a ",(0,a.kt)("a",s({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Cron"}),"cron expression"),"."),(0,a.kt)("p",null,"Use the operator modifier like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'cron "<cron expression>" <operator> [<args...>]\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note that the ",(0,a.kt)("inlineCode",{parentName:"strong"},"<cron expression>")," must be enclosed in quotes.")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"<cron expression>"),"  has the form"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),"<seconds> <minutes> <hours> <days of month> <months> <days of week>\n")),(0,a.kt)("p",null,"where the 6 fields are separated by a space."),(0,a.kt)("p",null,"The field values can be as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Value range*"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Special characters"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Alternative Literals"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"seconds"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"0-59"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"*")," ",(0,a.kt)("inlineCode",{parentName:"td"},",")," ",(0,a.kt)("inlineCode",{parentName:"td"},"-")),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"minutes"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"0-59"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"*")," ",(0,a.kt)("inlineCode",{parentName:"td"},",")," ",(0,a.kt)("inlineCode",{parentName:"td"},"-")),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"hours"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"0-23"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"*")," ",(0,a.kt)("inlineCode",{parentName:"td"},",")," ",(0,a.kt)("inlineCode",{parentName:"td"},"-")),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"days of"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"1-31"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"*")," ",(0,a.kt)("inlineCode",{parentName:"td"},",")," ",(0,a.kt)("inlineCode",{parentName:"td"},"-")," ",(0,a.kt)("inlineCode",{parentName:"td"},"?")," ",(0,a.kt)("inlineCode",{parentName:"td"},"L")," ",(0,a.kt)("inlineCode",{parentName:"td"},"W")),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"months"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"1-12"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"*")," ",(0,a.kt)("inlineCode",{parentName:"td"},",")," ",(0,a.kt)("inlineCode",{parentName:"td"},"-")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"JAN")," ... ",(0,a.kt)("inlineCode",{parentName:"td"},"DEC"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"days of week"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"0-6"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"*")," ",(0,a.kt)("inlineCode",{parentName:"td"},",")," ",(0,a.kt)("inlineCode",{parentName:"td"},"-")," ",(0,a.kt)("inlineCode",{parentName:"td"},"?")," ",(0,a.kt)("inlineCode",{parentName:"td"},"L")," ",(0,a.kt)("inlineCode",{parentName:"td"},"#")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"SUN")," ... ",(0,a.kt)("inlineCode",{parentName:"td"},"SAT"))))),(0,a.kt)("p",null,"The special characters have the following meaning:"),(0,a.kt)("p",null,"*"," - As described on Wikipedia ",(0,a.kt)("a",s({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Cron"}),"Cron")),(0,a.kt)("p",null,"The special characters have the following meaning:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Special character"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Meaning"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"*")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"all values"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"selects all values within a field")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"?")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"no specific value"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"specify one field and leave the other unspecified")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"-")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"range"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"specify ranges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},",")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"comma"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"specify additional values")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"slash"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"specify increments")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"L")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"last"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"last day of the month or last day of the week")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"W")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"weekday"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"the weekday nearest to the given day")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"nth"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"specify the Nth day of the month")))),(0,a.kt)("h4",s({},{id:"example-1"}),"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),'cron "* */10 * * * MON-FRI" from https://example.org/api\n')),(0,a.kt)("p",null,"would pull an endpoint on every 10th minute, monday through friday."),(0,a.kt)("h2",s({},{id:"unordered-execution"}),"Unordered Execution"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"unordered")," modifier tells an operator that it may return results out of\norder. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"unordered read json")," may be faster than ",(0,a.kt)("inlineCode",{parentName:"p"},"read json"),", as it\nallows the JSON parser to read events out of order."),(0,a.kt)("p",null,"By default, operators infer ordering requirements from the next operator. For\nexample, in ",(0,a.kt)("inlineCode",{parentName:"p"},"read json | sort"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"sort")," operator already lets ",(0,a.kt)("inlineCode",{parentName:"p"},"read json"),"\nknow that it may return results out of order."),(0,a.kt)("h2",s({},{id:"location-overrides"}),"Location Overrides"),(0,a.kt)("p",null,"Pipelines run across multiple processes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The local ",(0,a.kt)("inlineCode",{parentName:"li"},"tenzir")," process, and"),(0,a.kt)("li",{parentName:"ul"},"the remote ",(0,a.kt)("inlineCode",{parentName:"li"},"tenzir-node")," processes (commonly referred to as ",(0,a.kt)("em",{parentName:"li"},"nodes"),").")),(0,a.kt)("p",null,"Some pipeline operators prefer running either local or remote. For example, the\n",(0,a.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," operators run locally, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"serve")," operator runs remotely by\ndefault. Operators that do not have a preferred location use the location of the\nprevious operator."),(0,a.kt)("p",null,"The special keywords ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"remote")," allow for specifying the location of\nan operator explicitly. They may occur before any operator. For example, the\npipeline ",(0,a.kt)("inlineCode",{parentName:"p"},"read json | remote pass | write json")," reads JSON from stdin locally,\ntransfers it to a remote node to do nothing with the data, and\nthen transfers it back to write JSON to stdout locally."),(0,a.kt)("p",null,"Use the operator modifier like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),"local  <operator> [<args...>]\nremote <operator> [<args...>]\n")),(0,a.kt)("p",null,"There are generally two scenarios in which you may want to use location\noverrides:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Move compute-heavy operators to a separate machine: Operators like\n",(0,a.kt)("inlineCode",{parentName:"p"},"summarize")," may require a lot of resources. When collecting events from an\nedge node, you may want to instead use ",(0,a.kt)("inlineCode",{parentName:"p"},"remote summarize")," to run the\ncomputation on the compute-heavy machine.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change local operators to run remotely, to allow for reading a file from a\nremote host, e,g., ",(0,a.kt)("inlineCode",{parentName:"p"},"remote from file /tmp/suricata.sock read suricata"),".\nBecause such an operation allows for remotely reading files or executing\npotentially unwanted operators, you can disable such overrides by setting the\nfollowing configuration option:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",s({parentName:"pre"},{className:"language-yaml",metastring:'{0} title="tenzir.yaml"',"{0}":!0,title:'"tenzir.yaml"'}),"tenzir:\n  no-location-overrides: true\n")),(0,a.kt)("p",{parentName:"li"},"If you want more fine-grained control about which operators, operator\nmodifiers, formats, and connectors are available, you can selectively disable\nthem in the configuration:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",s({parentName:"pre"},{className:"language-yaml",metastring:'{0} title="tenzir.yaml"',"{0}":!0,title:'"tenzir.yaml"'}),"tenzir:\n  disable-plugins:\n    - shell\n    - remote\n")))))}b.isMDXComponent=!0}}]);
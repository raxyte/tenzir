"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67090],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,f=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>y,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&d(e,n,t[n]);return e},m=(e,t)=>i(e,l(t)),u=(e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={},k="xsv",v={unversionedId:"formats/xsv",id:"formats/xsv",title:"xsv",description:"Reads and writes lines with separated values.",source:"@site/docs/formats/xsv.md",sourceDirName:"formats",slug:"/formats/xsv",permalink:"/docs/next/formats/xsv",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/formats/xsv.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"tsv",permalink:"/docs/next/formats/tsv"},next:{title:"zeek-json",permalink:"/docs/next/formats/zeek-json"}},h={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;field-sep&gt;</code>",id:"field-sep",level:3},{value:"<code>&lt;list-sep&gt;</code>",id:"list-sep",level:3},{value:"<code>&lt;null-value&gt;</code>",id:"null-value",level:3},{value:"Examples",id:"examples",level:2}],N={toc:b},g="wrapper";function y(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(g,m(c(c({},N),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"xsv"}),"xsv"),(0,r.kt)("p",null,"Reads and writes lines with separated values."),(0,r.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"csv\nssv\ntsv\nxsv <field-sep> <list-sep> <null-value>\n")),(0,r.kt)("h2",c({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"xsv")," format is a generalization of ",(0,r.kt)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Comma-separated_values"}),"comma-separated values (CSV)")," data\nin tabular form with a more flexible separator specification supporting tabs,\ncommas, and spaces. The first line in an XSV file is the header that describes\nthe field names. The remaining lines contain concrete values. One line\ncorresponds to one event, minus the header."),(0,r.kt)("p",null,"The following table juxtaposes the available XSV configurations:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Format"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Field Separator"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"List Separator"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Null Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/next/formats/csv"}),(0,r.kt)("inlineCode",{parentName:"a"},"csv"))),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},",")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},";")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/next/formats/ssv"}),(0,r.kt)("inlineCode",{parentName:"a"},"ssv"))),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"<space>")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},",")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"-"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/next/formats/tsv"}),(0,r.kt)("inlineCode",{parentName:"a"},"tsv"))),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"\\t")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},",")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"-"))))),(0,r.kt)("p",null,"Like the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/next/formats/json"}),(0,r.kt)("inlineCode",{parentName:"a"},"json"))," parser, the XSV parser infers types automatically.\nConsider this piece of CSV data:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-csv"}),"ip,sn,str,rec.a,rec.b\n1.2.3.4,10.0.0.0/8,foo bar,-4.2,/foo|bar/\n")),(0,r.kt)("p",null,"Here's the schema that the parser infers from the above data:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml",metastring:"title=test.schema",title:"test.schema"}),"record:\n  - ip: ip\n  - sn: subnet\n  - str: string\n  - record:\n    - a: double\n    - b: pattern\n")),(0,r.kt)("p",null,"Note that nested records have dot-separated field names."),(0,r.kt)("p",null,"The default loader for the ",(0,r.kt)("inlineCode",{parentName:"p"},"xsv")," parser is ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/next/connectors/stdin"}),(0,r.kt)("inlineCode",{parentName:"a"},"stdin")),"."),(0,r.kt)("p",null,"The default saver for the ",(0,r.kt)("inlineCode",{parentName:"p"},"xsv")," printer is ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/next/connectors/stdout"}),(0,r.kt)("inlineCode",{parentName:"a"},"stdout")),"."),(0,r.kt)("h3",c({},{id:"field-sep"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<field-sep>")),(0,r.kt)("p",null,"Specifies the string that separates fields."),(0,r.kt)("h3",c({},{id:"list-sep"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<list-sep>")),(0,r.kt)("p",null,"Specifies the string that separates list elements ",(0,r.kt)("em",{parentName:"p"},"within")," a field."),(0,r.kt)("h3",c({},{id:"null-value"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<null-value>")),(0,r.kt)("p",null,"Specifies the string that denotes an absent value."),(0,r.kt)("h2",c({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Read CSV from stdin:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"read csv from stdin\n")),(0,r.kt)("p",null,"Write a multi-schema stream of events to a directory in TSV format, with one\nfile per unique schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"write tsv to directory /tmp/result\n")))}y.isMDXComponent=!0}}]);
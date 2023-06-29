"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>N,frontMatter:()=>h,metadata:()=>k,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>o(e,s(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const h={},f="shell",k={unversionedId:"operators/transformations/shell",id:"version-Tenzir v4.0-rc1/operators/transformations/shell",title:"shell",description:"Executes a system command and hooks its raw stdin and stdout into the pipeline.",source:"@site/versioned_docs/version-Tenzir v4.0-rc1/operators/transformations/shell.md",sourceDirName:"operators/transformations",slug:"/operators/transformations/shell",permalink:"/operators/transformations/shell",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0-rc1/operators/transformations/shell.md",tags:[],version:"Tenzir v4.0-rc1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"select",permalink:"/operators/transformations/select"},next:{title:"sigma",permalink:"/operators/transformations/sigma"}},g={},y=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;command&gt;</code>",id:"command",level:3},{value:"Examples",id:"examples",level:2}],v={toc:y},b="wrapper";function N(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(b,d(u(u({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"shell"}),"shell"),(0,r.kt)("p",null,"Executes a system command and hooks its raw stdin and stdout into the pipeline."),(0,r.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"shell <command>\n")),(0,r.kt)("h2",u({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"shell")," operator forks the process and executes the provided command.\nThereafter, it connects the child's stdin to the operator's input, and the\nchild's stdout to the operator's output. When ",(0,r.kt)("inlineCode",{parentName:"p"},"shell")," receive new bytes as\ninput, it writes them to the child's standard input. In parallel, ",(0,r.kt)("inlineCode",{parentName:"p"},"shell"),"\nattempts to read from the child's stdout and copies new bytes into the operator\noutput."),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("a",u({parentName:"p"},{href:"/operators/sources/shell"}),(0,r.kt)("inlineCode",{parentName:"a"},"shell")," as source operator")," if you want\nto ignore stdin."),(0,r.kt)("h3",u({},{id:"command"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<command>")),(0,r.kt)("p",null,"The command to execute and hook into the pipeline processing."),(0,r.kt)("p",null,"The value of ",(0,r.kt)("inlineCode",{parentName:"p"},"command")," is a single string. If you would like to pass a command\nline as you would on the shell, use single or double quotes for escaping, e.g.,\n",(0,r.kt)("inlineCode",{parentName:"p"},"shell 'jq -C'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},'shell "jq -C"'),"."),(0,r.kt)("h2",u({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Consider the use case of converting CSV to JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"tenzir 'read csv | write json' | jq -C\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"write json")," operator produces NDJSON. Piping this output to ",(0,r.kt)("inlineCode",{parentName:"p"},"jq")," generates a\ncolored, tree-structured variation that is (arguably) easier to read. Using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"shell"),' operator, you can integrate Unix tools that rely on\nstdin/stdout for input/output as "native" operators that process raw bytes. For\nexample, in this pipeline:'),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"print json | save stdout\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",u({parentName:"p"},{href:"/operators/transformations/print"}),(0,r.kt)("inlineCode",{parentName:"a"},"print"))," operator produces raw bytes and\n",(0,r.kt)("a",u({parentName:"p"},{href:"/operators/sinks/save"}),(0,r.kt)("inlineCode",{parentName:"a"},"save"))," accepts raw bytes. The ",(0,r.kt)("inlineCode",{parentName:"p"},"shell")," operator therefore\nfits right in the middle:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),'print json | shell "jq -C" | save stdout\n')),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",u({parentName:"p"},{href:"/operators/user-defined"}),"user-defined operators"),", we can expose this\n(potentially verbose) post-processing more succinctly in the pipeline language:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml",metastring:'{0} title="tenzir.yaml"',"{0}":!0,title:'"tenzir.yaml"'}),'tenzir:\n  operators:\n    jsonize: >\n      print json | shell "jq -C" | save stdout\n')),(0,r.kt)("p",null,"Now you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonize")," as a custom operator in a pipeline:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"tenzir 'read csv | where field > 42 | jsonize' < file.csv\n")),(0,r.kt)("p",null,"This mechanism allows for wrapping also more complex invocation of tools.\n",(0,r.kt)("a",u({parentName:"p"},{href:"https://zeek.org"}),"Zeek"),", for example, converts packets into structured network\nlogs. Tenzir already has support for consuming Zeek output with the formats\n",(0,r.kt)("a",u({parentName:"p"},{href:"/formats/zeek-json"}),(0,r.kt)("inlineCode",{parentName:"a"},"zeek-json"))," and\n",(0,r.kt)("a",u({parentName:"p"},{href:"/formats/zeek-tsv"}),(0,r.kt)("inlineCode",{parentName:"a"},"zeek-tsv")),". But that requires attaching yourself\ndownstream of a Zeek instance. Sometimes you want instant Zeek analytics given a\nPCAP trace."),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"shell")," operator, you can script a Zeek invocation and readily\npost-process the output with a rich set of operators, to filter, reshape,\nenrich, or route the logs as structured data. Let's define a ",(0,r.kt)("inlineCode",{parentName:"p"},"zeek")," operator for\nthat:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml",metastring:'{0} title="tenzir.yaml"',"{0}":!0,title:'"tenzir.yaml"'}),'tenzir:\n  operators:\n    zeek: >\n      shell "zeek -r - LogAscii::output_to_stdout=T\n             JSONStreaming::disable_default_logs=T\n             JSONStreaming::enable_log_rotation=F\n             json-streaming-logs"\n      | parse zeek-json\n')),(0,r.kt)("p",null,"Processing a PCAP trace now is a matter of calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"zeek")," operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"gunzip -c example.pcap.gz |\n  tenzir 'zeek | select id.orig_h, id.orig_p, id.resp_h | head 3'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{"id": {"orig_h": null, "resp_h": null, "resp_p": null}}\n{"id": {"orig_h": "192.168.168.100", "resp_h": "83.135.95.78", "resp_p": 0}}\n{"id": {"orig_h": "192.168.168.100", "resp_h": "83.135.95.78", "resp_p": 22}}\n')),(0,r.kt)("p",null,"NB: because ",(0,r.kt)("inlineCode",{parentName:"p"},"zeek")," (= ",(0,r.kt)("inlineCode",{parentName:"p"},"shell"),") reads bytes, we can drop the implicit ",(0,r.kt)("inlineCode",{parentName:"p"},"load\nstdin")," source operator in this pipeline."))}N.isMDXComponent=!0}}]);
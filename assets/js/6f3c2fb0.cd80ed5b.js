"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>N,frontMatter:()=>h,metadata:()=>y,toc:()=>k});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>i(e,a(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const h={sidebar_custom_props:{operator:{transformation:!0}}},f="python",y={unversionedId:"operators/python",id:"version-v4.10/operators/python",title:"python",description:"Executes Python code against each event of the input.",source:"@site/versioned_docs/version-v4.10/operators/python.md",sourceDirName:"operators",slug:"/operators/python",permalink:"/v4.10/operators/python",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.10/operators/python.md",tags:[],version:"v4.10",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"put",permalink:"/v4.10/operators/put"},next:{title:"rare",permalink:"/v4.10/operators/rare"}},v={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--requirements &lt;string&gt;</code>",id:"--requirements-string",level:3},{value:"<code>&lt;code&gt;</code>",id:"code",level:3},{value:"<code>--file &lt;path&gt;</code>",id:"--file-path",level:3},{value:"Examples",id:"examples",level:2}],b={toc:k},g="wrapper";function N(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(g,u(c(c({},b),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"python"}),"python"),(0,r.kt)("p",null,"Executes Python code against each event of the input."),(0,r.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"python [--requirements <string>] <code>\npython [--requirements <string>] --file <path>\n")),(0,r.kt)("admonition",c({},{title:"Requirements",type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"A Python 3 (>=3.10) interpreter must be present in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," environment\nvariable of the ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir-node")," process.")),(0,r.kt)("h2",c({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"python")," operator executes user-provided Python code against each event of\nthe input."),(0,r.kt)("p",null,"By default, the Tenzir node executing the pipeline creates a virtual environment\ninto which the ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir")," Python package is installed. This behavior can be turned\noff in the node configuration using the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin.python.create-venvs")," boolean\noption."),(0,r.kt)("admonition",c({},{title:"Performance",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"python")," operator implementation applies the provided Python code to each\ninput row one bw one. We use\n",(0,r.kt)("a",c({parentName:"p"},{href:"https://arrow.apache.org/docs/python/index.html"}),"PyArrow")," to convert the input\nvalues to native Python data types and back to the Tenzir data model after the\ntransformation.")),(0,r.kt)("h3",c({},{id:"--requirements-string"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--requirements <string>")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--requirements")," flag can be used to pass additional package dependencies in\nthe pip format. When it is used, the argument is passed on to ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install")," in a\ndedicated virtual environment."),(0,r.kt)("h3",c({},{id:"code"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<code>")),(0,r.kt)("p",null,"The provided Python code describes an event-for-event transformation, i.e., it\nis executed once for each input event and produces exactly output event."),(0,r.kt)("p",null,"An implicitly defined ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," variable represents the event. Modify it to alter\nthe output of the operator. Fields of the event can be accessed with the dot\nnotation. For example, if the input event contains fields ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," then the\nPython code can access and modify them using ",(0,r.kt)("inlineCode",{parentName:"p"},"self.a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"self.b"),". Similarly,\nnew fields are added by assigning to ",(0,r.kt)("inlineCode",{parentName:"p"},"self.fieldname")," and existing fields can be\nremoved by deleting them from ",(0,r.kt)("inlineCode",{parentName:"p"},"self"),". When new fields are added, it is required\nthat the new field has the same type for every row of the event."),(0,r.kt)("h3",c({},{id:"--file-path"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--file <path>")),(0,r.kt)("p",null,"Instead of providing the code inline, the ",(0,r.kt)("inlineCode",{parentName:"p"},"--file")," option allows for passing\na path to a file containing the code the operator executes per event."),(0,r.kt)("h2",c({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Insert or modify the field ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," and set it to ",(0,r.kt)("inlineCode",{parentName:"p"},'"hello, world"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"python 'self.x = \"hello, world\"'\n")),(0,r.kt)("p",null,"Clear the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," to remove the implicit input values from the\noutput:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"python '\n  self.clear()\n  self.x = 23\n'\n")),(0,r.kt)("p",null,"Define a new field ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," as the square root of the field ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),", and remove ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," from\nthe output:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"python '\n  import math\n  self.x = math.sqrt(self.y)\n  del self.y\n'\n")),(0,r.kt)("p",null,"Make use of third party packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),'python --requirements "requests=^2.30" \'\n  import requests\n  requests.post("http://imaginary.api/receive", data=self)\n\'\n')))}N.isMDXComponent=!0}}]);
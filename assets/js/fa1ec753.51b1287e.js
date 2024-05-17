"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77047],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>h});var r=n(3905),o=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>s(e,a(t)),d=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={sidebar_custom_props:{connector:{loader:!0,saver:!0}}},v="sqs",y={unversionedId:"connectors/sqs",id:"version-v4.14/connectors/sqs",title:"sqs",description:"Loads bytes from and saves bytes to Amazon SQS queues.",source:"@site/versioned_docs/version-v4.14/connectors/sqs.md",sourceDirName:"connectors",slug:"/connectors/sqs",permalink:"/connectors/sqs",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.14/connectors/sqs.md",tags:[],version:"v4.14",frontMatter:{sidebar_custom_props:{connector:{loader:!0,saver:!0}}},sidebar:"docsSidebar",previous:{title:"s3",permalink:"/connectors/s3"},next:{title:"stdin",permalink:"/connectors/stdin"}},b={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;queue&gt;</code>",id:"queue",level:3},{value:"<code>--poll-time &lt;duration&gt;</code>",id:"--poll-time-duration",level:3},{value:"Examples",id:"examples",level:2}],k={toc:h},g="wrapper";function O(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(g,m(u(u({},k),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"sqs"}),"sqs"),(0,r.kt)("p",null,"Loads bytes from and saves bytes to ",(0,r.kt)("a",u({parentName:"p"},{href:"https://docs.aws.amazon.com/sqs/"}),"Amazon SQS")," queues."),(0,r.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"sqs [--poll-time <duration>] <queue>\n")),(0,r.kt)("h2",u({},{id:"description"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"https://docs.aws.amazon.com/sqs/"}),"Amazon Simple Queue Service (Amazon SQS)")," is a fully managed message\nqueuing service to decouple and scale microservices, distributed systems, and\nserverless applications. The ",(0,r.kt)("inlineCode",{parentName:"p"},"sqs")," loader reads bytes from messages of an\nSQS queue. The ",(0,r.kt)("inlineCode",{parentName:"p"},"sqs")," saver writes bytes as messages into an SQS queue."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sqs")," connector uses long polling, which helps reduce your cost of using SQS\nby reducing the number of empty responses when there are no messages available\nto return in reply to a message request. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--poll-time")," option to adjust\nthe timeout."),(0,r.kt)("h3",u({},{id:"queue"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<queue>")),(0,r.kt)("p",null,"The name of the queue to use."),(0,r.kt)("h3",u({},{id:"--poll-time-duration"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--poll-time <duration>")),(0,r.kt)("p",null,"The long polling timeout per request."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<duration>")," value must be between 1 and 20 seconds."),(0,r.kt)("p",null,"Defaults to 10s."),(0,r.kt)("h2",u({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Read JSON messages from the SQS queue ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"from sqs://tenzir\n")),(0,r.kt)("p",null,"Read JSON messages with a 20-second long poll timeout:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"from sqs://tenzir --poll-time 20s\n")),(0,r.kt)("p",null,"Write the Tenzir version 10 times, ",(0,r.kt)("a",u({parentName:"p"},{href:"/operators/enumerate"}),"enumerated"),", to\nqueue ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"version\n| repeat 10\n| enumerate\n| to sqs://tenzir\n")))}O.isMDXComponent=!0}}]);
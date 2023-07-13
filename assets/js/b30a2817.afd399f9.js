"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55336],{3905:(M,D,w)=>{w.d(D,{Zo:()=>T,kt:()=>I});var A=w(67294);function c(M,D,w){return D in M?Object.defineProperty(M,D,{value:w,enumerable:!0,configurable:!0,writable:!0}):M[D]=w,M}function e(M,D){var w=Object.keys(M);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(M);D&&(A=A.filter((function(D){return Object.getOwnPropertyDescriptor(M,D).enumerable}))),w.push.apply(w,A)}return w}function N(M){for(var D=1;D<arguments.length;D++){var w=null!=arguments[D]?arguments[D]:{};D%2?e(Object(w),!0).forEach((function(D){c(M,D,w[D])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(w)):e(Object(w)).forEach((function(D){Object.defineProperty(M,D,Object.getOwnPropertyDescriptor(w,D))}))}return M}function t(M,D){if(null==M)return{};var w,A,c=function(M,D){if(null==M)return{};var w,A,c={},e=Object.keys(M);for(A=0;A<e.length;A++)w=e[A],D.indexOf(w)>=0||(c[w]=M[w]);return c}(M,D);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(M);for(A=0;A<e.length;A++)w=e[A],D.indexOf(w)>=0||Object.prototype.propertyIsEnumerable.call(M,w)&&(c[w]=M[w])}return c}var L=A.createContext({}),x=function(M){var D=A.useContext(L),w=D;return M&&(w="function"==typeof M?M(D):N(N({},D),M)),w},T=function(M){var D=x(M.components);return A.createElement(L.Provider,{value:D},M.children)},j="mdxType",i={inlineCode:"code",wrapper:function(M){var D=M.children;return A.createElement(A.Fragment,{},D)}},u=A.forwardRef((function(M,D){var w=M.components,c=M.mdxType,e=M.originalType,L=M.parentName,T=t(M,["components","mdxType","originalType","parentName"]),j=x(w),u=c,I=j["".concat(L,".").concat(u)]||j[u]||i[u]||e;return w?A.createElement(I,N(N({ref:D},T),{},{components:w})):A.createElement(I,N({ref:D},T))}));function I(M,D){var w=arguments,c=D&&D.mdxType;if("string"==typeof M||c){var e=w.length,N=new Array(e);N[0]=u;var t={};for(var L in D)hasOwnProperty.call(D,L)&&(t[L]=D[L]);t.originalType=M,t[j]="string"==typeof M?M:c,N[1]=t;for(var x=2;x<e;x++)N[x]=w[x];return A.createElement.apply(null,N)}return A.createElement.apply(null,w)}u.displayName="MDXCreateElement"},66435:(M,D,w)=>{w.r(D),w.d(D,{assets:()=>y,contentTitle:()=>z,default:()=>l,frontMatter:()=>I,metadata:()=>g,toc:()=>n});var A=w(3905),c=Object.defineProperty,e=Object.defineProperties,N=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,T=(M,D,w)=>D in M?c(M,D,{enumerable:!0,configurable:!0,writable:!0,value:w}):M[D]=w,j=(M,D)=>{for(var w in D||(D={}))L.call(D,w)&&T(M,w,D[w]);if(t)for(var w of t(D))x.call(D,w)&&T(M,w,D[w]);return M},i=(M,D)=>e(M,N(D)),u=(M,D)=>{var w={};for(var A in M)L.call(M,A)&&D.indexOf(A)<0&&(w[A]=M[A]);if(null!=M&&t)for(var A of t(M))D.indexOf(A)<0&&x.call(M,A)&&(w[A]=M[A]);return w};const I={title:"Zeek and Ye Shall Pipe",authors:"mavam",date:new Date("2023-07-13T00:00:00.000Z"),tags:["zeek","logs","json","pipelines"],comments:!0},z="Zeek and Ye Shall Pipe",g={permalink:"/blog/zeek-and-ye-shall-pipe",source:"@site/blog/zeek-and-ye-shall-pipe/index.md",title:"Zeek and Ye Shall Pipe",description:"Zeek turns packets into structured logs. By default, Zeek",date:"2023-07-13T00:00:00.000Z",formattedDate:"July 13, 2023",tags:[{label:"zeek",permalink:"/blog/tags/zeek"},{label:"logs",permalink:"/blog/tags/logs"},{label:"json",permalink:"/blog/tags/json"},{label:"pipelines",permalink:"/blog/tags/pipelines"}],readingTime:2.46,hasTruncateMarker:!0,authors:[{name:"Matthias Vallentin",title:"Co-Founder & CEO",url:"https://github.com/mavam",email:"matthias@tenzir.com",imageURL:"https://github.com/mavam.png",key:"mavam"}],frontMatter:{title:"Zeek and Ye Shall Pipe",authors:"mavam",date:"2023-07-13T00:00:00.000Z",tags:["zeek","logs","json","pipelines"],comments:!0},nextItem:{title:"Mobilizing Zeek Logs",permalink:"/blog/mobilizing-zeek-logs"}},y={authorsImageUrls:[void 0]},n=[],r={toc:n},a="wrapper";function l(M){var D=M,{components:w}=D,c=u(D,["components"]);return(0,A.kt)(a,i(j(j({},r),c),{components:w,mdxType:"MDXLayout"}),(0,A.kt)("p",null,(0,A.kt)("a",j({parentName:"p"},{href:"https://zeek.org"}),"Zeek")," turns packets into structured logs. By default, Zeek\ngenerates one file per log type and per rotation timeframe. If you don't want to\nwrangle files and directly process the output, this short blog post is for you."),(0,A.kt)("p",null,(0,A.kt)("figure",j({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,A.kt)("svg",j({parentName:"figure"},{viewBox:"0 0 4500 340.278",role:"img","aria-hidden":"true"}),(0,A.kt)("symbol",j({parentName:"svg"},{id:"image-5863f0cbbaf88c6609323df7296d0f11497e91b12f3ab6109c47e4f66d7bf271494d2c77e7fcb30fb2083ecd3bf10178"}),(0,A.kt)("image",j({parentName:"symbol"},{width:"100%",height:"100%",href:"data:image/svg+xml;base64,PHN2ZyB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaWQ9InN2ZzIiIHdpZHRoPSIxNDQiIGhlaWdodD0iNDcuMTA2NjY3IiB2aWV3Qm94PSIwIDAgMTQ0IDQ3LjEwNjY2NyIgc29kaXBvZGk6ZG9jbmFtZT0iemVla19ibGFja19ob3Jpem9udGFsLmVwcyI+CiAgPGRlZnMgaWQ9ImRlZnM2Ii8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldyBpZD0ibmFtZWR2aWV3NCIgcGFnZWNvbG9yPSIjZmZmZmZmIiBib3JkZXJjb2xvcj0iIzAwMDAwMCIgYm9yZGVyb3BhY2l0eT0iMC4yNSIgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSIvPgogIDxnIGlkPSJnOCIgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgaW5rc2NhcGU6bGFiZWw9Imlua19leHRfWFhYWFhYIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjMzMzMzMzMsMCwwLC0xLjMzMzMzMzMsMCw0Ny4xMDY2NjcpIj4KICAgIDxnIGlkPSJnMTAiIHRyYW5zZm9ybT0ic2NhbGUoMC4xKSI+CiAgICAgIDxwYXRoIGQ9Im0gMjM0Ljc5NywxNjUuOTIyIGMgLTEuNjkyLDEuNjAxIC00LjE4NCwyLjA1MSAtNi4zMjgsMS4xMjUgLTIuMTQxLC0wLjkzIC0zLjUyOCwtMy4wMjcgLTMuNTI4LC01LjM2MyBsIDQuNjY4LC0zOC45NTQgLTE1Ljc2MSwxLjUyNCBjIC0wLjEyNSwwIC0wLjIzNSwwLjA2NiAtMC4zNTIsMC4wNjYgSCAxMjUuNDMgbCA5MS43MTEsMTA3LjUgYyAyLjA3LDIuNDM0IDIuNTM5LDUuODQgMS4xOTksOC43NDMgLTEuMzM2LDIuODkgLTQuMjM4LDQuNzQ2IC03LjQyMiw0Ljc0NiBIIDExMCBjIC0wLjEzNywwIC0wLjI1NCwtMC4wNzEgLTAuMzk4LC0wLjA3OSBsIC0yMS4zNzE1LC0yLjM2MyBjIC0zLjIzMDUsMCAtNS44MzYsLTIuNjA5IC01LjgzNiwtNS44NCBsIDQuNjY0MSwtMzEuODY3IC03Mi42NjQxLDY0LjI3IDcyLjE4NzUsNjMuODE2IDAuNjc1OCwwLjYzNyAtNC42Nzk3LC0zMS44NzUgYyAwLC0zLjIyMyAyLjYxNzIsLTUuODQgNS44Mzk5LC01Ljg0IGggMjAzLjg3OSBsIC0yMS4wMDgsLTI2LjIzIGMgLTIuMDE5LC0yLjUxMiAtMS42MDksLTYuMTkyIDAuOTA2LC04LjIwNCAxLjA3NSwtMC44NzEgMi4zNjgsLTEuMjg5IDMuNjQ1LC0xLjI4OSAxLjcxMSwwIDMuNDA2LDAuNzUgNC41NTgsMi4xOTYgbCAyOC42MTgsMzUuNzE0IGMgMS40MDYsMS43NTggMS42NzUsNC4xNjEgMC43MTEsNi4xOCAtMC45NzcsMi4wMjQgLTMuMDI4LDMuMzEzIC01LjI3NCwzLjMxMyBIIDk0LjI2OTUgbCA0LjY2NDEsMzkuNTkgYyAwLDIuMzMyIC0xLjM4NjcsNC40NDEgLTMuNTIzNCw1LjM3MSAtMi4xNDg1LDAuOTE4IC00LjYzNjgsMC40NjggLTYuMzI4MiwtMS4xMjUgTCAyLjAxOTUzLDI3My44MDUgQyAyLDI3My43OTMgMiwyNzMuNzczIDEuOTgwNDcsMjczLjc1NCAxLjg2MzI4LDI3My42NDggMS43MDcwMywyNzMuNjA5IDEuNjAxNTYsMjczLjQ4IC0wLjYyNSwyNzEuMTQ4IC0wLjUxOTUzMSwyNjcuNDQ1IDEuODI0MjIsMjY1LjIzIEwgODguODg2NywxODcuMzU5IGMgMS42OTkyLC0xLjYwMSA0LjE3OTcsLTIuMDUgNi4zMjgxLC0xLjEyNSAyLjE0ODUsMC45MTggMy41MzUyLDMuMDI4IDMuNTM1Miw1LjM2NCBsIC00LjY3NTgsMzguOTUzIDE1LjMzOTgsLTEuNDg1IGMgMC4yMDMsLTAuMDA3IDAuMzgzLC0wLjExNyAwLjU4NiwtMC4xMTcgaCA4My4xODQgbCAtOTEuNzA3LC0xMDcuNSBjIC0yLjA3MDcsLTIuNDI5IC0yLjU0MzQsLTUuODQgLTEuMjA0LC04LjczOCAxLjMzNiwtMi44OTEgNC4yMzksLTQuNzQ2IDcuNDIyLC00Ljc0NiBoIDEwNS44MDEgYyAwLjA3OCwwIDAuMTQ5LDAuMDM5IDAuMjI3LDAuMDQ3IHYgLTAuMDA4IGwgMjEuNzI2LDIuNDAyIGMgMy4yMzUsMCA1Ljg1MiwyLjYxNyA1Ljg1Miw1Ljg0OCBsIC00LjY4LDMxLjg2NyA3Mi42NjQsLTY0LjI2OTQgLTcyLjE4MywtNjMuODE2NCAtMC42NjQsLTAuNjM2OCA0LjY2NywzMS44NzUgYyAwLDMuMjIyNyAtMi42MjEsNS44Mzk5IC01LjgzOSw1LjgzOTkgSCAzMS4zOTg0IGwgMjEuMDAzOSwyNi4yMjI2IGMgMi4wMTE4LDIuNTE5NiAxLjYxMzMsNi4xOTkzIC0wLjkxMDEsOC4yMTEgLTEuMDgyLDAuODcxMSAtMi4zNTk0LDEuMjgxMiAtMy42NDg0LDEuMjgxMiAtMS43MTEsMCAtMy40MTAyLC0wLjc0MjIgLTQuNTYyNSwtMi4xODc1IEwgMTQuNjY4LDU0LjkyNTggYyAtMS40MDYzLC0xLjc1NzggLTEuNjc5NywtNC4xNjAyIC0wLjcwMzIsLTYuMTc5NyAwLjk2NDksLTIuMDMxMyAzLjAxNTcsLTMuMzEyNSA1LjI2MTgsLTMuMzEyNSBIIDIyOS40MjYgbCAtNC42OCwtMzkuNTg5ODUgYyAwLC0yLjMzMjAzIDEuMzg3LC00LjQ0MTQxIDMuNTM1LC01LjM3MTA5NCAyLjE0OSwtMC45MTc5NjkgNC42MjksLTAuNDY4NzQ5NzUgNi4zMjEsMS4xMjUwMDQgbCA4Ny4wNyw3Ny44NzExNCBjIDAuMDA4LDAuMDE5NSAwLjAwOCwwLjAzOSAwLjAyNywwLjA0NjggMC4xMTcsMC4xMTcyIDAuMjc0LDAuMTU2MyAwLjM5MSwwLjI4NTIgMi4yMTksMi4zMzIgMi4xMDksNi4wMzUxIC0wLjIzNSw4LjI1IGwgLTg3LjA1OCw3Ny44NzEyIiBzdHlsZT0iZmlsbDojMTEwYjA5O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiBpZD0icGF0aDEyIi8+CiAgICAgIDxwYXRoIGQ9Ik0gNTIwLjk5NiwxMDUuMDk0IEggNDA0LjE2IGwgMTE4LjgyOCwxNDEuNTIzIGMgMiwyLjM0NCAzLjAwOCw0LjM0NCAzLjAwOCw3LjAyIHYgMC4zMjQgYyAwLDMuMzQgLTMuNjYsNi42OCAtNy42NzYsNi42OCBIIDM5MC40NjkgYyAtMy45OTIsMCAtNy4zMzIsLTMuMzQgLTcuMzMyLC03LjM0NCAwLC00LjAwNCAzLjM0LC03LjM0NCA3LjMzMiwtNy4zNDQgSCA1MDIuNjM3IEwgMzgzLjgwMSwxMDQuNDMgYyAtMi4wMDQsLTIuMzQ0IC0zLjAwOCwtNC4zNDggLTMuMDA4LC03LjAxMiB2IC0wLjMzMjEgYyAwLC0zLjMzOTggMy42OCwtNi42Nzk2IDcuNjg0LC02LjY3OTYgaCAxMzIuNTE5IGMgMy45OTIsMCA3LjMzMiwzLjMzOTggNy4zMzIsNy4zNDM3IDAsNC4wMDQgLTMuMzQsNy4zNDQgLTcuMzMyLDcuMzQ0IiBzdHlsZT0iZmlsbDojMTEwYjA5O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiBpZD0icGF0aDE0Ii8+CiAgICAgIDxwYXRoIGQ9Im0gNTY2Ljk4LDE4My41MzEgYyAzLjAwOCwzNy43MjMgMjkuMDQzLDY2LjA5NCA2Mi43NjYsNjYuMDk0IDM5LjA0MywwIDU4LjczOCwtMzEuNzExIDYxLjA4MiwtNjYuMDk0IHogbSA2My40Myw4MS4xMTQgYyAtNDYuMDYyLDAgLTgwLjc4MSwtMzkuMzg3IC04MC43ODEsLTg4Ljc5IHYgLTAuNjY0IGMgMCwtNTMuMDc4IDM4LjcyMywtODguNzg4NyA4My40NTcsLTg4Ljc4ODcgMzAuNzAzLDAgNDkuNzI3LDExLjAxNTcgNjYuNDE4LDI3LjcwMjcgMiwyLjAwNCAyLjY3Niw0LjAwNCAyLjY3Niw1LjY3NiAwLDQuMzM2IC0zLjY4NCw3LjY3NiAtOC4wMiw3LjY3NiAtMi4zMzYsMCAtNC4wMDQsLTAuOTk2IC01LjM0NCwtMi4zMzYgLTEzLjY3OSwtMTMuMzQ4IC0zMC43MDMsLTIzLjM2NyAtNTUuMDY2LC0yMy4zNjcgLTMzLjM3OSwwIC02My43NjIsMjQuNzA3IC02Ni43Nyw2Ny4wOSBoIDEzMy41MjggYyA0LjAwNCwwIDguMDA4LDMuNjcyIDguMDA4LDcuNjgzIDAsNDguNzMxIC0zMC4zNzEsODguMTE4IC03OC4xMDYsODguMTE4IiBzdHlsZT0iZmlsbDojMTEwYjA5O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIiBpZD0icGF0aDE2Ii8+CiAgICAgIDxwYXRoIGQ9Im0gNzYxLjkyNiwxODMuNTMxIGMgMy4wMDgsMzcuNzIzIDI5LjA0Myw2Ni4wOTQgNjIuNzYyLDY2LjA5NCAzOS4wNDIsMCA1OC43NDIsLTMxLjcxMSA2MS4wODIsLTY2LjA5NCB6IG0gNjMuNDI2LDgxLjExNCBjIC00Ni4wNjcsMCAtODAuNzgyLC0zOS4zODcgLTgwLjc4MiwtODguNzkgdiAtMC42NjQgYyAwLC01My4wNzggMzguNzExLC04OC43ODg3IDgzLjQ1LC04OC43ODg3IDMwLjcwMywwIDQ5LjczNCwxMS4wMTU3IDY2LjQyMSwyNy43MDI3IDIuMDA0LDIuMDA0IDIuNjc2LDQuMDA0IDIuNjc2LDUuNjc2IDAsNC4zMzYgLTMuNjc5LDcuNjc2IC04LjAxNSw3LjY3NiAtMi4zMzIsMCAtNC4wMDQsLTAuOTk2IC01LjM0LC0yLjMzNiAtMTMuNjg0LC0xMy4zNDggLTMwLjcwMywtMjMuMzY3IC01NS4wNzgsLTIzLjM2NyAtMzMuMzcxLDAgLTYzLjc1LDI0LjcwNyAtNjYuNzU4LDY3LjA5IGggMTMzLjUyMyBjIDQuMDA0LDAgNy45OTYsMy42NzIgNy45OTYsNy42ODMgMCw0OC43MzEgLTMwLjM3MSw4OC4xMTggLTc4LjA5Myw4OC4xMTgiIHN0eWxlPSJmaWxsOiMxMTBiMDk7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiIGlkPSJwYXRoMTgiLz4KICAgICAgPHBhdGggZD0ibSAxMDc3LjY3LDEwMi43NTggLTY2Ljc2LDgyLjQ0MSA2Mi40MSw2My40MyBjIDIsMiAyLjY4LDMuMzQgMi42OCw1LjY2NCAwLDQuMzQ0IC0zLjM0LDcuNjg0IC03LjY4LDcuNjg0IC0yLjM0LDAgLTQuMDEsLTAuNjcyIC01LjY4LC0yLjMzMiBMIDk1OC4xNjQsMTUxLjQ4OCB2IDE0OS4zMTcgYyAwLDQuNjc5IC0zLjY3Miw4LjM1MSAtOC4zNCw4LjM1MSAtNC42NzksMCAtOC4wMTUsLTMuNjcyIC04LjAxNSwtOC4zNTEgViA5Ny40MTggYyAwLC01LjAxMTcgMy42NzEsLTguMzUxNiA4LjM0NywtOC4zNTE2IDQuNjY4LDAgOC4wMDgsMy4zMzk5IDguMDA4LDguMzUxNiB2IDM0LjM3NSBsIDQxLjM4Nyw0MS43MjcgNjUuNDI5LC04MC43ODE3IGMgMi4zMywtMi42NjQxIDQsLTMuNjcxOSA3LjAxLC0zLjY3MTkgNC42NywwIDguMDEsMy4wMDc4IDguMDEsNy42ODc1IDAsMi4zMzIgLTAuNjYsNC4wMDQxIC0yLjMzLDYuMDA0MSIgc3R5bGU9ImZpbGw6IzExMGIwOTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgaWQ9InBhdGgyMCIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+"}))),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nL1Z23bqSJJ9r684y/NY3ad0XHUwMDA1VPOEXHUwMDExxjpNXG5jwLaY1Vx1MDAwZpLAsiRuy1x1MDAxMujSU58y3zD/1F/SO1wiJcCuU7Vq1poun+WDlcpLROTeO1wik3/88OXLTV5cdTAwMWTWNz9/uVmXob+JV+9+cfNcdTAwMTdqP63fs3i/wyuNn7P98T3knm95fsh+/ukn/3D4elx1MDAxOfU13G/lyPVmvV3v8lxmff9cdTAwMGLPX778g//Hm3hF41x1MDAwM7+8N6cv/frhr7fdcDp9UHrpI1x1MDAwZuVOrUH5uswvrSWa/qp3XGbl3FJRi9a5NFx1MDAxNPEqf0OjYfQujW/rOHrLyVx1MDAwYsv82lV6WlfXzJ6hd61zXHUwMDE3f1x1MDAxN21oxcugLH/fp+vBfrN/J0v+Q+GfizGBXHUwMDFmptH7/rhbXfr45qr3+nrp81x1MDAxYW82s7zayJD54dvxfX3zaYXnxmLtU/t5XFy2R3Avo7Bk9LZbZ1x1MDAxNFr13Lo/+GGcUzhU5eJcdTAwMDPZd3BWvFx1MDAwYn+/WPXub9dcdTAwMGVtw+642VxcT7xbNVx1MDAxM394ka3X1Fk3urqldM/NV+DQ1M+t7n7HQFF7itLrdvTepUec2UBHznO++ptsfVx0KVkwvCDng1x1MDAxNcfDypeD1E7PUoyu1rWsnnF+v4l36ecxm32YfmdcdTAwMWRGXHUwMDE1XCL7z//53y/HXHUwMDAzwr32t1/+W77E52pf7GTj1U7ud/ksrsklzeh8NTTd7KiK0etYPe1Dpzt/XHUwMDFib2hcdTAwMWb0XHUwMDBmy/U3cUShulx04dv6/eY6XnlcZv6cO+T7wzXIsjVcdTAwMWPjZfXeV+X6p3PuXHUwMDE1Yl1cdTAwMWa93n+9qfv3OIp3/mb+f3eZ1r1vmaN+1a428I5cdTAwMTDk4rdcci2/+uUvXHUwMDFmmd6SON760frmO7jpdIzfxI2uaabVMXTzXHUwMDBm4EZKSrHaO6l1eFxc9V/uulx1MDAwZnZiXHUwMDFllHjxXHUwMDFiXFz8xKmPTFT/XHJM/LW+sJipve6FUFLMjN+UoPzd32VcdTAwMDf/XHUwMDFkXGL6fVx1MDAxOXp99S3jytBWXHUwMDE0Le07mqgrylete/3zmfhaT9H0jq5f1PL/R1c+0/1qql+T3bJcZs28xuZcdTAwMWYle5b7+THj7fNP69VcdTAwMDdASGtvzF5Hf1XCIPBfe72w01EsXdNXr1i0s1JeVdWwumtLXHJU7VX3XHUwMDAz0N5cbo3u2njtdFbd4FXr4r2x0sJud919XHJcdTAwMDNdeVxyNKWnr8OVXHUwMDFlvKqK2u1dXHUwMDAxXHJMX59zXCL9nIGDP5u//i7ZhP85IDfIsTM4QeMkt25O8bq4/e7G08/NXHUwMDBmXHJcdTAwMTfZxewy7N/u589cdTAwMTfyb+Pten4tXHUwMDAwP2Wn6Mdyu7n5RNs/L/iAlL94XHUwMDFj06L0589cdTAwMWbM+k+SWujRw72rLatbI3guj2F9OFx1MDAwNNu89rS7YjlXYv/+UVx07f1prK/0VWVe3s3MU7hcck/B9i5fvriF9+xuwsq6eu9E65GaXHUwMDA1O9FcdDUr9V9uT8tRajnbN2V13++MK6tcdTAwMGW0x0M4wruZWVx1MDAwN/pT5WlP20D/tsPcx+XL9PR49zhcdTAwMWPrLsZtXG7qO573j8v7x9SJW1t/ZZ8uKmmXSPqFXHUwMDE4WPVqXHUwMDFixs79W1x1MDAxZYzMerKDn394zHJcdTAwMTPu3EOgXHUwMDE5lpNcZo9cdTAwMDL++M9Ty+E5XHUwMDFjvF9cdTAwMWRgy/5h5pSuPY2d0dvGf17tV7ZcdTAwMTK7dnhcdTAwMTTzvuYmnlx1MDAwZVs1//lJn24tXHUwMDAzfVx1MDAwYsfuR2I+VVx1MDAxY3uqj5NhgT6aWznRVYw6y5GVcFxcXHUwMDEx//X2aeOrVlx1MDAxY4zuXHUwMDEyfO5cdTAwMTGfw3prXHUwMDFkV6O7bLx9KsLK+XFcdTAwMTD3o4fR42a5XHUwMDEz0sYt/605cU++u7/EcLI134Lnp3S13WxW1e1hXHR7ea3nR7bTXHUwMDFkwJbR3W757J6CkVXB5mS5lf/gS4z10+XLtyTQylOYKLFTI2Y2xc2JvK1VLUdPVaDfvnnaRlnDfjEwKpdjZ76HmvtcdTAwMTaOXHUwMDE2wMPbaYU+S+2p9kd3aaCHiDFiOtpcdTAwMWN9XHUwMDFkXHUwMDExebndTHb8/lx1MDAxNJLfL48mxW6c9L/XJ/FH+NWAn631XHUwMDE2buH/536IR6jlXHUwMDE3m7VpubTvUuzp6SHaR45d7tA/fZh9201cdTAwMDZcdTAwMWZtXerfTquX21x1MDAxY7Hb4H3mvWw2QMeHPtibePlcXCDuWFO1Nuv7x9fnuzePflx1MDAxMTMl3N5cdTAwMWRDbVx0jCnoo76t7rGHg6hcdTAwMWMnom7+ZWJQXHUwMDE044HyuU1xK6NcdTAwMTQ2MJKEXHUwMDA3JzH+5lxm+lx1MDAxZuxcdTAwMDXOgMXHyns26yXiXHUwMDFmIOZkVzBa7Fx1MDAxMfvybzOJj2ZcXOG9PO6dXHUwMDExYUSJRFwilHFcdTAwMTKablWUbrI4TuZO5YxENJ5cdTAwMGaPbpJWY5s++6UzUNBvaLiDosJcdTAwMWWoYtbP3dioRVx1MDAxMmViXHUwMDA2+5JcdTAwMDXGOMD8tIRcdTAwMGbYp7TGmHqcLKrJoMhFZVx1MDAxNFwiXHTRR1x1MDAxY925Y6CPXG4/NVHdZuBcdTAwMDHW8KitnlxmXGbTnU9pfbxcdTAwMGY1MStKmsNcdTAwMWTcJlx1MDAwZc87XHUwMDA0lopC/u3U9Dfs0dy4n8PXXHUwMDFhcyNmXHUwMDA2cSqaXHL6ZNfRtUVcdTAwMTRcZvom7NTFfJghXuDdXCLyqj75oo9th/qAj/icXHUwMDBic2wjXHUwMDBl9jRcIr8m8zSDTTrNQTHBnmjUf2KneJ5cdTAwMWVcdTAwMTE/Y0z211NccjZh3mkl4oJiqrjxrePYw1JcXGyvXHUwMDEx59Z21aW4kK31MFwiXVx1MDAxM3VqyNj19clcZnFcdTAwMTkoXHUwMDE1bKjxXkV71cQrkXF1amEv4Cv2YWZcdTAwMTii9jKKP/bKdDi2Ue3GXHUwMDA1v0Ps2lx1MDAxOCuIZy7qIeyHLsFeXHUwMDExXHUwMDFiwFx1MDAxNfbM9mCzozt2WPE+14vMTVx1MDAwNPpccjXoXHUwMDE1xobqhPCZePBcdTAwMDFrXHUwMDBlMK5OddozQWvUXHUwMDFjT8Iv2VZcdI6tV7q1XHUwMDAzu2Q8pZ2pKfc+UpxRXHUwMDA0/PXRP7r2XHUwMDE3Wlx1MDAxMpEvXHUwMDFh+SixXGJcXNlDU8ZgUVxu2uuZoVx0O0U/XHUwMDBmmEsrsnFcdTAwMDK9RVx1MDAxZlx1MDAwM+Ncblx1MDAxN3tPcXRnXHUwMDFjY4NiXGZfazehubGPSWQ6NrCYTFXJOceYzGhMWFxuwlx1MDAxN72zMVx1MDAxZvlcdTAwMGXf4K/qzoH1mDDhXHUwMDExnoBr2EBtNTBWXHUwMDBmXHUwMDE1slx1MDAxNXYp4CpxQkd/etY4luChm8CGgcSgS/NcZlx1MDAxOLOmW4c0L/gxZX5cYlx1MDAxYvzA+tinWu6lXHUwMDAzTS5cdTAwMTAnUWL/gamU9kqbzFx1MDAxN2RcdTAwMDf+hjbYwHWdXHUwMDAyv6ncXHUwMDA3YFx1MDAxNFitXHUwMDFjqSdcdTAwMDb2j2xQ0K/lYI05iYM6cZn8cu1IXHUwMDFkc1x1MDAxY4eG5LvH8Vx1MDAxMjQuiVwijnXtXHUwMDE4wHfecn4+YFx1MDAwZSEmi1x1MDAxYWtcIo9ij+1FNKX9l8/6ZI64xEXl1li3XHUwMDBla3BcdTAwMDJrRFx1MDAwNXJkXHUwMDA2TYBfoSr3K9Jo/mZcdTAwMWN84vjpwlx1MDAwZVx1MDAwYlE141x0340muXOvXHUwMDE5PzUkpzzSXHUwMDA29Fx1MDAxYpJcdTAwMGU1bVx1MDAwYrZNUHtcdTAwMTJiT6cqr287ikigXHUwMDE1iacyzoZFNLEjtEdcdTAwMWFp4YTyd70wmz1FrKGFXHUwMDFjS69AvEhcdTAwMGLhV5hJbFx1MDAwMlx1MDAxZlJcdTAwMGJL2Yc0iuIyVCbMUcNcdTAwMTSEhcpQMWfFe4s9ZozNhYrYsFx1MDAxNjJPZdx1xlpccntgO+yl9zVixtilfWK7kFeFLTLWXHUwMDBlu69cdTAwMTNcdTAwMDcwppZcdTAwMWEyLF3CQbIwSFx1MDAwNyhcdTAwMGaIeVx1MDAxOPmDvlx1MDAwMTtK4iOwk09ovrpPPEaOQXxmrC+si3iWmmI7pmxbKKKenvkseYRYMOdCaHefc1x1MDAxN69cdTAwMTdcdTAwMWJcdTAwMDbmJt5UwGVGWslcdTAwMWFJa9hcdTAwMGXFstXIPfwrWFx1MDAxYoBNxi7p34A42Kd9NFx0k/DT5GdwQT5Pdefei1x1MDAxYd9ccmdUQEvIXHUwMDE3R5N63uc8XHUwMDA2X7E+6yRpXHUwMDBlxVrqUnV+Zi2aXFxiT9xjLKJPq4+kM1xy58hvqZHAZN5qpCu53PQlvVx1MDAxNNqk5WZVfNRI2n9oJOkozVx1MDAwZruzVlx1MDAxYlvtnsxcbvlcdD4jj9F42n+l9Vx1MDAxMz5Tn1xuuKswl8a+koaAu+z/fGhcIidcdTAwMTJeS6ojWG/mnJMpN2Ovh5TXKvSX+2hHXHUwMDE1c98m/WO7kEuhMzZrpdRcXMnJj21tTlx1MDAxZPB7XHUwMDA1ubWS+Fx1MDAwYolfnCPB04p1mGywQ5W4JuZNzrdcdTAwMTeIUVqRVnpcdTAwMTXPR/pZS1x1MDAxZUFcdTAwMTfqqKlFuEbJpY72K+lcdTAwMDd0gfNcdTAwMGLlXHUwMDAwek/YSWFj2vCS9JLyXHUwMDBiaVx1MDAwNWGZNZW4SZxn7b60ka461YTWT1jfOcdx7cK6XHUwMDFhmeBym+MqrtGQu0hLwDld4nmqUP3T8rqpcVx1MDAxMJ++6Vx1MDAwZVx1MDAxYT2Q+chke5OU+IH9TyVmbFx1MDAwZlx1MDAxOJmanG9YT4ZtbYWcyHw1UFx1MDAwYlx1MDAxNoiDjk/KaSXXRbbkgORcdTAwMDX2fcZcdTAwMWMqZL4mnPBzRbVcdTAwMDc+WctcdTAwMWI9yJrPSnIrVHiO+Vx1MDAwMnVcdTAwMDaNXHUwMDExpuD6yjGQL1xiX8BLSrlcbrUpP5eUg13CXb0or2oyysEqYXU8R2xQL8KW1uZcbvVwvbrfZHS2WW43WWDvXHUwMDEzYKjwoO1cdTAwMTNteVxiRkV+OT/sy7Yt3D1hzOFcdTAwMThoZlx1MDAwN+eP00R3UVdb703bXHUwMDA28/JZXHUwMDA251x1MDAwNcW3aZ3e9+veVIngXHUwMDBmYVx1MDAwNVx1MDAxYyngw1x1MDAwMnFLXHUwMDE1Z1x1MDAxOEXQXHLSdo15RlxcSlwiql+RXHUwMDFih5wzJc9IQ4SCPa2bOCufnsnnivSJalLK62fe1zLHXHUwMDAz+1x1MDAxNDfSiNwlXtXtM+FcdTAwMTBx55ybSk5Uhjnhupb71lx1MDAxMvPtXFwh5/kx155sQyGx2C+kPUK5eqczbqkuxDzIhaQtqiC9XHUwMDAwTpmXlD+SqKC6W1DNiLrXkzpFXHUwMDE4lLyqcXblOo99JZ7UlKtl7dI35HqovXHulZggrlxmr+pDzmWkzcwv8lx1MDAxYrWkzFxy0GL00ShcdTAwMDdSneVTXHJfSz1r9LyNRevLeb42NtI3QfmQalx1MDAxZeZOXHUwMDEzr6z1+1x1MDAxYzfO8/Dnz8Gk8puY3Fx1MDAxMiY9+I0zgE25hWpcdTAwMDWOWVx1MDAxYmfU3dDaXHUwMDA0MUhSyn+ot6g/a4uG/dFcdTAwMTlTiSexXGZcZlx1MDAxMddcdTAwMDWdN+xFk59l7U+64dhcdTAwMWXVx1xcy53H3O+jYIa5SMerwmDtmTN2c2hcdTAwMTP6eJQjiNOkvYY8S6Ssf9hng2pb5EJgJKL1zDY/07lD1itYizFcdTAwMTJS7UN9KsqhVHdB56FtXFybKFKreVx1MDAwZVx1MDAwM/lcdTAwMDKYpFx1MDAxYVx1MDAxY3HA2tB2yvGoXHUwMDAxhmWj61x1MDAxMdlcdTAwMGZ+ct3IOVx1MDAwMedMyVHmQMX1XHUwMDE0n8k+PKvyk3g55XOdxLRHZ1xcvXmXT1xiP/HlWWqfJ7k4aDlBNXOqydxNPCvafpS7asYyxUpikOrSms9cdTAwMDFcXLs5Ndd+XHUwMDE04znpkEdnXHUwMDE4xIXOKnxepvc0ns6NtDfYZ6pbp1xct1GbS3tfXHUwMDE1XHUwMDFh5Vx1MDAwNpyjqJ6qXHUwMDE5P1x059TGb8JB1ORcdNJcdTAwMWbS/PaZeVczX3gvRNnYSGfPjPZHyDNcdTAwMDHqMr6LuLT9ObzRfpc3NWFcdTAwMTk1REx1O+festFcbj5LijokzMA/p+VcdTAwMDTFrKBaXHUwMDBlscQ7wvWZS8iXyLE2a4wqz/6st83ZXHUwMDEw/MD7XHS3tWNuO85cYnYkdGak+pPudZrcXGYtprXo/EWYmfB5Mqr4roNqOju88CluuZBGq/hcXE+2uqmSP1RcdTAwMGbRuYA4THX3hDlcdTAwMDf+2aTbfJa9alx1MDAxM7JGYlxyQFx1MDAxZFxyXHJcdTAwMDBcdTAwMGVKPmPPXHUwMDE3eE/2Tys+XHUwMDFikbbYdP6nulx0mGk++U4kXHQ15siH51x1MDAwNX82XHUwMDFh22CdcWVKPIXEXHUwMDA3gzk6+8xcdTAwMWbnd/nT1lfcn+fknFAyJ2Seaf3KoYfgXHUwMDE032Wo7ozj84FT4DXeh6XULY/PmvCNzlx1MDAxZVx1MDAwNXOOtKOGPtpcdTAwMWXlLJPvJJhzi4rvWlx1MDAxYb9Zezj3gPucr53zM+Vv4I70TaHYXHUwMDBivs8hXHUwMDFi6WxdXHUwMDE4zJk52Vx1MDAxZFI8TNLWpi127l1l/Vxc0r3i1n8us0mMmnV+XHUwMDFiQ4+7zKeBer7/nCTDtq1aYcxka56C3WFcdTAwMTNue91Qf6xcdTAwMDItl23bRdzcXHIyT2idcd3cXHUwMDFiXHUwMDBl6C749m1cdTAwMDU/+d531qdzXHUwMDFm71x1MDAwZjS14DzCtlx1MDAxMjZon4FVqmtnnGPo/qjJXHUwMDBmXHUwMDE0XHUwMDFi7GPMemq0tY3gXHUwMDFhhrVV41qEtbWtXHUwMDE3sLdNjpd3ZZ5x9Vxcyfd9ea/GeaQvdYpxwfeDsu6Ob4Vjp8TNks5bwHJJd1x1MDAwMKidgEeqsYEx5Fx1MDAwNVlzTVx1MDAxOZONtuM8R7Wp4PvLXHTp2+Dy3NxpSZ5cdTAwMGWYI1mD6epcbstyXHUwMDFjzk1PMbjPZ57ozFGue7C2xFxi50K6RyiBZYNzQ3VcdTAwMWWvne894TOvR1rFNVxmzoFnbW7Hk290Vyt0d8b3efJepypcdTAwMTQ+gyWUXHUwMDA3XHUwMDE3fFZcdTAwMWZfcrHenFx1MDAwYmvmSnPX5zDn2K9cdTAwMTJnXHUwMDAzrtXGbXzm8kzC95RswzCTOko5Wz5LvONcdTAwMWNcdTAwMDfut2eBJs+39VbZ7CfVKMxcdTAwMWb67lx1MDAwNFx1MDAxODWD0Vx1MDAwMprNOaDjQMPEyIFcdTAwMGXnjP3xs0XfIVx1MDAxZFb3aUe0bS/f1IDu17fWcb19qoI6R775dvI12bY8fyfDmK7EoLnPJ5xcdTAwMGasnbzbL05L4P9Bfq/z4+WrsfB9ffm+tddRu6apmWrn/EXkLz/88i9cdFx1MDAxMVW6In0=",(0,A.kt)("defs",{parentName:"svg"},(0,A.kt)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}')),(0,A.kt)("text",j({parentName:"svg"},{x:"2240",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"246.424",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(10 10)"}),"\u276f upstream |       | downstream"),(0,A.kt)("use",j({parentName:"svg"},{width:"920",height:"300",href:"#image-5863f0cbbaf88c6609323df7296d0f11497e91b12f3ab6109c47e4f66d7bf271494d2c77e7fcb30fb2083ecd3bf10178",transform:"translate(1773 30)"}))))))}l.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32963],{3905:(M,D,A)=>{A.d(D,{Zo:()=>L,kt:()=>n});var w=A(67294);function T(M,D,A){return D in M?Object.defineProperty(M,D,{value:A,enumerable:!0,configurable:!0,writable:!0}):M[D]=A,M}function e(M,D){var A=Object.keys(M);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(M);D&&(w=w.filter((function(D){return Object.getOwnPropertyDescriptor(M,D).enumerable}))),A.push.apply(A,w)}return A}function t(M){for(var D=1;D<arguments.length;D++){var A=null!=arguments[D]?arguments[D]:{};D%2?e(Object(A),!0).forEach((function(D){T(M,D,A[D])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(A)):e(Object(A)).forEach((function(D){Object.defineProperty(M,D,Object.getOwnPropertyDescriptor(A,D))}))}return M}function x(M,D){if(null==M)return{};var A,w,T=function(M,D){if(null==M)return{};var A,w,T={},e=Object.keys(M);for(w=0;w<e.length;w++)A=e[w],D.indexOf(A)>=0||(T[A]=M[A]);return T}(M,D);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(M);for(w=0;w<e.length;w++)A=e[w],D.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(M,A)&&(T[A]=M[A])}return T}var c=w.createContext({}),i=function(M){var D=w.useContext(c),A=D;return M&&(A="function"==typeof M?M(D):t(t({},D),M)),A},L=function(M){var D=i(M.components);return w.createElement(c.Provider,{value:D},M.children)},m="mdxType",a={inlineCode:"code",wrapper:function(M){var D=M.children;return w.createElement(w.Fragment,{},D)}},N=w.forwardRef((function(M,D){var A=M.components,T=M.mdxType,e=M.originalType,c=M.parentName,L=x(M,["components","mdxType","originalType","parentName"]),m=i(A),N=T,n=m["".concat(c,".").concat(N)]||m[N]||a[N]||e;return A?w.createElement(n,t(t({ref:D},L),{},{components:A})):w.createElement(n,t({ref:D},L))}));function n(M,D){var A=arguments,T=D&&D.mdxType;if("string"==typeof M||T){var e=A.length,t=new Array(e);t[0]=N;var x={};for(var c in D)hasOwnProperty.call(D,c)&&(x[c]=D[c]);x.originalType=M,x[m]="string"==typeof M?M:T,t[1]=x;for(var i=2;i<e;i++)t[i]=A[i];return w.createElement.apply(null,t)}return w.createElement.apply(null,A)}N.displayName="MDXCreateElement"},72140:(M,D,A)=>{A.r(D),A.d(D,{assets:()=>O,contentTitle:()=>j,default:()=>g,frontMatter:()=>n,metadata:()=>r,toc:()=>u});var w=A(3905),T=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,L=(M,D,A)=>D in M?T(M,D,{enumerable:!0,configurable:!0,writable:!0,value:A}):M[D]=A,m=(M,D)=>{for(var A in D||(D={}))c.call(D,A)&&L(M,A,D[A]);if(x)for(var A of x(D))i.call(D,A)&&L(M,A,D[A]);return M},a=(M,D)=>e(M,t(D)),N=(M,D)=>{var A={};for(var w in M)c.call(M,w)&&D.indexOf(w)<0&&(A[w]=M[w]);if(null!=M&&x)for(var w of x(M))D.indexOf(w)<0&&i.call(M,w)&&(A[w]=M[w]);return A};const n={title:"Tenzir v4.18",authors:["dominiklohmann"],date:new Date("2024-07-11T00:00:00.000Z"),tags:["release","health-metrics","tql2"],comments:!0},j=void 0,r={permalink:"/blog/tenzir-v4.18",source:"@site/blog/tenzir-v4.18/index.md",title:"Tenzir v4.18",description:"Monitoring Tenzir nodes is easier than before with [Tenzir",date:"2024-07-11T00:00:00.000Z",formattedDate:"July 11, 2024",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"health-metrics",permalink:"/blog/tags/health-metrics"},{label:"tql2",permalink:"/blog/tags/tql-2"}],readingTime:2.7,hasTruncateMarker:!0,authors:[{name:"Dominik Lohmann",title:"Engineering Manager",url:"https://github.com/dominiklohmann",email:"dominik@tenzir.com",imageURL:"https://github.com/dominiklohmann.png",key:"dominiklohmann"}],frontMatter:{title:"Tenzir v4.18",authors:["dominiklohmann"],date:"2024-07-11T00:00:00.000Z",tags:["release","health-metrics","tql2"],comments:!0},nextItem:{title:"Tenzir v4.17",permalink:"/blog/tenzir-v4.17"}},O={authorsImageUrls:[void 0]},u=[],d={toc:u},l="wrapper";function g(M){var D=M,{components:A}=D,T=N(D,["components"]);return(0,w.kt)(l,a(m(m({},d),T),{components:A,mdxType:"MDXLayout"}),(0,w.kt)("p",null,"Monitoring Tenzir nodes is easier than before with ",(0,w.kt)("a",m({parentName:"p"},{href:"https://github.com/tenzir/tenzir/releases/tag/v4.18.0"}),"Tenzir\nv4.18")," and its new health metrics."),(0,w.kt)("p",null,(0,w.kt)("figure",m({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,w.kt)("svg",m({parentName:"figure"},{viewBox:"0 0 890.887 180",role:"img","aria-hidden":"true"}),(0,w.kt)("symbol",m({parentName:"svg"},{id:"image-b1a18d6d62a27ac0052c1be0ed2a15d664a8b87b8160b2ee5e70362278fbc8a3dc45778d18dc1d1d4b86e42f1065f259"}),(0,w.kt)("image",m({parentName:"symbol"},{width:"100%",height:"100%",href:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDBwdCIgaGVpZ2h0PSIxMDBwdCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+CiA8Zz4KICA8cGF0aCBkPSJtNTUuMzAxIDcyLTQuNS0xLjg5ODRjMC4xMDE1Ni0wLjgwMDc4IDAuMTAxNTYtMS42MDE2IDAuMTAxNTYtMi4zOTg0IDAtMC44MDA3OC0wLjEwMTU2LTEuNjAxNi0wLjEwMTU2LTIuMzk4NGw0LjUtMS44OTg0YzAuNS0wLjE5OTIyIDAuODAwNzgtMC44MDA3OCAwLjYwMTU2LTEuMzk4NGwtMS44MDA4LTUuNWMtMC4xOTkyMi0wLjUtMC42OTkyMi0wLjg5ODQ0LTEuMzAwOC0wLjY5OTIybC00LjY5OTIgMS4xOTE0Yy0wLjgwMDc4LTEuMzk4NC0xLjY5OTItMi42OTkyLTIuODAwOC0zLjg5ODRsMi42MDE2LTQuMTk5MmMwLjMwMDc4LTAuNSAwLjE5OTIyLTEuMTAxNi0wLjMwMDc4LTEuNWwtNC42OTkyLTMuMzk4NGMtMC41LTAuMzAwNzgtMS4xMDE2LTAuMzAwNzgtMS41IDAuMTk5MjJsLTMuMjAzMSAzLjc5NjljLTEuMzk4NC0wLjY5OTIyLTMtMS4xOTkyLTQuNjAxNi0xLjVsLTAuMzk4NDQtNC44OTg0YzAtMC42MDE1Ni0wLjUtMS0xLjEwMTYtMWgtNS44MDA4Yy0wLjYwMTU2IDAtMS4xMDE2IDAuMzk4NDQtMS4xMDE2IDFsLTAuMzk4NDQgNC44OTg0Yy0xLjYwMTYgMC4zMDA3OC0zLjEwMTYgMC44MDA3OC00LjYwMTYgMS41bC0zLjE5OTItMy42OTkyYy0wLjM5ODQ0LTAuMzk4NDQtMS0wLjUtMS41LTAuMTk5MjJsLTQuNDk2MSAzLjM5ODRjLTAuNSAwLjMwMDc4LTAuNjAxNTYgMS0wLjMwMDc4IDEuNWwyLjYwMTYgNC4xOTkyYy0xLjEwMTYgMS4xOTkyLTIgMi41LTIuODAwOCAzLjg5ODRsLTQuODAwOC0xLjEwMTZjLTAuNjAxNTYtMC4xMDE1Ni0xLjEwMTYgMC4xOTkyMi0xLjMwMDggMC42OTkyMmwtMS44MDA4IDUuNWMtMC4xOTkyMiAwLjUgMC4xMDE1NiAxLjEwMTYgMC42MDE1NiAxLjM5ODRsNC41IDEuODk4NGMtMC4xMDE1NiAwLjgwMDc4LTAuMTAxNTYgMS42MDE2LTAuMTAxNTYgMi4zOTg0IDAgMC44MDA3OCAwLjEwMTU2IDEuNjAxNiAwLjEwMTU2IDIuMzk4NGwtNC41IDEuNzEwOWMtMC41IDAuMTk5MjItMC44MDA3OCAwLjgwMDc4LTAuNjAxNTYgMS4zOTg0bDEuODAwOCA1LjVjMC4xOTkyMiAwLjUgMC42OTkyMiAwLjg5ODQ0IDEuMzAwOCAwLjY5OTIybDQuODAwOC0xLjEwMTZjMC44MDA3OCAxLjM5ODQgMS42OTkyIDIuNjk5MiAyLjgwMDggMy44OTg0bC0yLjYwMTYgNC4xOTkyYy0wLjMwMDc4IDAuNDA2MjUtMC4xOTkyMiAxLjAwNzggMC4zMDA3OCAxLjQwNjJsNC42OTkyIDMuMzk4NGMwLjUgMC4zMDA3OCAxLjEwMTYgMC4zMDA3OCAxLjUtMC4xOTkyMmwzLjE5OTItMy42OTkyYzEuMzk4NCAwLjY5OTIyIDMgMS4xOTkyIDQuNjAxNiAxLjVsMC4zOTg0NCA0Ljg5ODRjMCAwLjYwMTU2IDAuNSAxIDEuMTAxNiAxaDUuODAwOGMwLjYwMTU2IDAgMS4xMDE2LTAuMzk4NDQgMS4xMDE2LTFsMC4zOTg0NC00Ljg5ODRjMS42MDE2LTAuMzAwNzggMy4xMDE2LTAuODAwNzggNC42MDE2LTEuNWwzLjE5OTIgMy42OTkyYzAuMzk4NDQgMC4zOTg0NCAxIDAuNSAxLjUgMC4xOTkyMmw0LjY5OTItMy4zOTg0YzAuNS0wLjMwMDc4IDAuNjAxNTYtMSAwLjMwMDc4LTEuNWwtMi42MDE2LTQuMTk5MmMxLjEwMTYtMS4xOTkyIDItMi41IDIuODAwOC0zLjg5ODRsNC44MDA4IDEuMTAxNmMwLjYwMTU2IDAuMTAxNTYgMS4xMDE2LTAuMTk5MjIgMS4zMDA4LTAuNjk5MjJsMS44MDA4LTUuNWMtMC4xMDE1Ni0wLjUwMzkxLTAuMzA0NjktMS4xMDU1LTAuOTAyMzQtMS4zMDQ3em0tMjYgNy4xOTkyYy02LjMwMDggMC0xMS41LTUuMTAxNi0xMS41LTExLjUgMC02LjM5ODQgNS4xMDE2LTExLjUgMTEuNS0xMS41IDYuMzk4NCAwIDExLjUgNS4xMDE2IDExLjUgMTEuNSAwIDYuNDAyMy01LjE5OTIgMTEuNS0xMS41IDExLjV6Ii8+CiAgPHBhdGggZD0ibTY0LjgwMSA0Ny44MDEgMC4zMDA3OCA0LjMwMDhjMCAwLjUgMC41IDAuODk4NDQgMSAwLjg5ODQ0aDUuMTAxNmMwLjUgMCAwLjg5ODQ0LTAuMzk4NDQgMS0wLjg5ODQ0bDAuMzAwNzgtNC4zMDA4YzEuMzk4NC0wLjMwMDc4IDIuNjk5Mi0wLjY5OTIyIDQtMS4zMDA4bDIuODAwOCAzLjMwMDhjMC4zMDA3OCAwLjM5ODQ0IDAuODk4NDQgMC41IDEuMzAwOCAwLjE5OTIybDQuMTAxNi0zYzAuMzk4NDQtMC4zMDA3OCAwLjUtMC44OTg0NCAwLjMwMDc4LTEuMzAwOGwtMi4zMDA4LTMuNjk5MmMwLjg5ODQ0LTEgMS44MDA4LTIuMTk5MiAyLjUtMy4zOTg0bDQuMTk5MiAxYzAuNSAwLjEwMTU2IDEtMC4xOTkyMiAxLjEwMTYtMC42MDE1NmwxLjYwMTYtNC44OTg0YzAuMTk5MjItMC41LTAuMTAxNTYtMS0wLjYwMTU2LTEuMTk5MmwtNC0xLjYwMTZjMC4xMDE1Ni0wLjY5OTIyIDAuMTAxNTYtMS4zOTg0IDAuMTAxNTYtMi4xMDE2IDAtMC42OTkyMiAwLTEuMzk4NC0wLjEwMTU2LTIuMTAxNmw0LTEuNjAxNmMwLjUtMC4xOTkyMiAwLjY5OTIyLTAuNjk5MjIgMC42MDE1Ni0xLjE5OTJsLTEuNjAxNi00Ljg5ODRjLTAuMTk5MjItMC41LTAuNjk5MjItMC44MDA3OC0xLjEwMTYtMC42MDE1NmwtNC4xOTkyIDFjLTAuNjk5MjItMS4xOTkyLTEuNS0yLjM5ODQtMi41LTMuMzk4NGwyLjE5OTItMy42OTkyYzAuMzAwNzgtMC4zOTg0NCAwLjE5OTIyLTEtMC4zMDA3OC0xLjMwMDhsLTQuMTAxNi0zYy0wLjM5ODQ0LTAuMzAwNzgtMS0wLjE5OTIyLTEuMzAwOCAwLjE5OTIybC0yLjgwMDggMy4zMDA4Yy0xLjMwMDgtMC42MDE1Ni0yLjYwMTYtMS00LTEuMzAwOGwtMC4yMDMxMi00LjU5NzdjMC0wLjUtMC41LTAuODk4NDQtMS0wLjg5ODQ0aC01LjEwMTZjLTAuNSAwLTAuODk4NDQgMC4zOTg0NC0xIDAuODk4NDRsLTAuMzAwNzggNC4zMDA4Yy0xLjM5ODQgMC4zMDA3OC0yLjY5OTIgMC42OTkyMi00IDEuMzAwOGwtMi43OTY5LTMuMzAwOGMtMC4zMDA3OC0wLjM5ODQ0LTAuODk4NDQtMC41LTEuMzAwOC0wLjE5OTIybC00LjEwMTYgM2MtMC4zOTg0NCAwLjMwMDc4LTAuNSAwLjg5ODQ0LTAuMzAwNzggMS4zMDA4bDIuMzAwOCAzLjY5OTJjLTAuODk4NDQgMS0xLjgwMDggMi4xOTkyLTIuNSAzLjM5ODRsLTQuMTk5Mi0xYy0wLjUtMC4xMDE1Ni0xIDAuMTk5MjItMS4xMDE2IDAuNjAxNTZsLTEuNjAxNiA0Ljg5ODRjLTAuMTk5MjIgMC41IDAuMTAxNTYgMSAwLjYwMTU2IDEuMTk5Mmw0IDEuNjAxNmMtMC4xMDE1NiAwLjY5OTIyLTAuMTAxNTYgMS4zOTg0LTAuMTAxNTYgMi4xMDE2IDAgMC42OTkyMiAwIDEuMzk4NCAwLjEwMTU2IDIuMTAxNmwtNCAxLjYwMTZjLTAuNTk3NjYgMC4zOTQ1My0wLjc5Njg4IDAuODk0NTMtMC42OTUzMSAxLjM5NDVsMS42MDE2IDQuODk4NGMwLjE5OTIyIDAuNSAwLjY5OTIyIDAuODAwNzggMS4xMDE2IDAuNjAxNTZsNC4xOTkyLTFjMC42OTkyMiAxLjE5OTIgMS41IDIuMzk4NCAyLjUgMy4zOTg0bC0yLjMwMDggMy42OTkyYy0wLjMwMDc4IDAuMzk4NDQtMC4xOTkyMiAxIDAuMzAwNzggMS4zMDA4bDQuMTAxNiAzYzAuMzk4NDQgMC4zMDA3OCAxIDAuMTk5MjIgMS4zMDA4LTAuMTk5MjJsMi44MDA4LTMuMzAwOGMxLjI5MyAwLjYwMTU2IDIuNjkxNCAxLjEwMTYgNC4wOTM4IDEuNDAyM3ptMy44MDA4LTI4LjkwMmM1LjYwMTYgMCAxMC4xMDIgNC41IDEwLjEwMiAxMC4xMDJzLTQuNSAxMC4xMDItMTAuMTAyIDEwLjEwMmMtNS42MDE2IDAtMTAuMTAyLTQuNS0xMC4xMDItMTAuMTAyczQuNjAxNi0xMC4xMDIgMTAuMTAyLTEwLjEwMnoiLz4KICA8cGF0aCBkPSJtOTcgNzcuMTk5LTMuMTk5Mi0xLjMwMDhjMC4xMDE1Ni0wLjYwMTU2IDAuMTAxNTYtMS4xMDE2IDAuMTAxNTYtMS42OTkyIDAtMC42MDE1NiAwLTEuMTk5Mi0wLjEwMTU2LTEuNjk5MmwzLjE5OTItMS4zMDA4YzAuMzk4NDQtMC4xOTkyMiAwLjYwMTU2LTAuNjAxNTYgMC4zOTg0NC0xbC0xLjMwMDgtMy44OTg0Yy0wLjEwMTU2LTAuMzk4NDQtMC41LTAuNjAxNTYtMC44OTg0NC0wLjVsLTMuMzk4NCAwLjgwMDc4Yy0wLjYwMTU2LTEtMS4xOTkyLTEuODk4NC0yLTIuODAwOGwxLjgwMDgtM2MwLjE5OTIyLTAuMzk4NDQgMC4xMDE1Ni0wLjgwMDc4LTAuMTk5MjItMWwtMy4zOTg0LTIuMzk4NGMtMC4zMDA3OC0wLjE5OTIyLTAuODAwNzgtMC4xOTkyMi0xLjEwMTYgMC4xMDE1NmwtMi4xMDE2IDIuNDk2MWMtMS0wLjUtMi4xMDE2LTAuODAwNzgtMy4zMDA4LTEuMTAxNmwtMC4zMDA3OC0zLjVjMC0wLjM5ODQ0LTAuMzk4NDQtMC42OTkyMi0wLjgwMDc4LTAuNjk5MjJoLTQuMTAxNmMtMC4zOTg0NCAwLTAuODAwNzggMC4zMDA3OC0wLjgwMDc4IDAuNjk5MjJsLTAuMjk2ODggMy42MDE2Yy0xLjA5NzcgMC4xOTkyMi0yLjE5OTIgMC42MDE1Ni0zLjE5OTIgMWwtMi4zMDA4LTIuNjk5MmMtMC4zMDA3OC0wLjMwMDc4LTAuNjk5MjItMC4zOTg0NC0xLjEwMTYtMC4xMDE1NmwtMy4zOTg0IDIuMzk4NGMtMC4zMDA3OCAwLjE5OTIyLTAuMzk4NDQgMC42OTkyMi0wLjE5OTIyIDFsMS44MDA4IDNjLTAuODAwNzggMC44MDA3OC0xLjM5ODQgMS44MDA4LTIgMi44MDA4bC0zLjM5ODQtMC44MDA3OGMtMC4zOTg0NC0wLjEwMTU2LTAuODAwNzggMC4xMDE1Ni0wLjg5ODQ0IDAuNWwtMS4zMDA4IDMuODk4NGMtMC4xMDE1NiAwLjM5ODQ0IDAuMTAxNTYgMC44MDA3OCAwLjM5ODQ0IDFsMy4xOTkyIDEuMzAwOGMtMC4xMDE1NiAwLjYwMTU2LTAuMTAxNTYgMS4xMDE2LTAuMTAxNTYgMS42OTkyIDAgMC42MDE1NiAwIDEuMTk5MiAwLjEwMTU2IDEuNjk5MmwtMy4xOTkyIDEuMzAwOGMtMC4zOTg0NCAwLjE5OTIyLTAuNjAxNTYgMC42MDE1Ni0wLjM5ODQ0IDFsMS4zMDA4IDMuODk4NGMwLjEwMTU2IDAuMzk4NDQgMC41IDAuNjAxNTYgMC44OTg0NCAwLjVsMy4zOTg0LTAuODAwNzhjMC42MDE1NiAxIDEuMTk5MiAxLjg5ODQgMiAyLjgwMDhsLTEuODAwOCAzYy0wLjE5OTIyIDAuMzk4NDQtMC4xMDE1NiAwLjgwMDc4IDAuMTk5MjIgMWwzLjM5ODQgMi4zOTg0YzAuMzAwNzggMC4xOTkyMiAwLjgwMDc4IDAuMTk5MjIgMS4xMDE2LTAuMTAxNTZsMi4zMDA4LTIuNjk5MmMxIDAuNSAyLjEwMTYgMC44MDA3OCAzLjMwMDggMS4xMDE2bDAuMzAwNzggMy41YzAgMC4zOTg0NCAwLjM5ODQ0IDAuNjk5MjIgMC44MDA3OCAwLjY5OTIyaDQuMTAxNmMwLjM5ODQ0IDAgMC44MDA3OC0wLjMwMDc4IDAuODAwNzgtMC42OTkyMmwwLjMwMDc4LTMuNWMxLjEwMTYtMC4xOTkyMiAyLjE5OTItMC42MDE1NiAzLjMwMDgtMS4xMDE2bDIuMDkzOCAzLjAwNzhjMC4zMDA3OCAwLjMwMDc4IDAuNjk5MjIgMC4zOTg0NCAxLjEwMTYgMC4xMDE1NmwzLjM5ODQtMi4zOTg0YzAuMzAwNzgtMC4xOTkyMiAwLjM5ODQ0LTAuNjk5MjIgMC4xOTkyMi0xbC0xLjgwMDgtM2MwLjgwMDc4LTAuODAwNzggMS4zOTg0LTEuODAwOCAyLTIuODAwOGwzLjM5ODQgMC44MDA3OGMwLjM5ODQ0IDAuMTAxNTYgMC44MDA3OC0wLjEwMTU2IDAuODk4NDQtMC41bDEuMzAwOC0zLjg5ODRjMC4xMDU0Ny0wLjUwMzkxLTAuMDk3NjU2LTAuOTA2MjUtMC40OTYwOS0xLjEwNTV6bS0xOC42MDIgNS4xOTkyYy00LjUgMC04LjE5OTItMy42OTkyLTguMTk5Mi04LjE5OTJzMy42OTkyLTguMTk5MiA4LjE5OTItOC4xOTkyIDguMTk5MiAzLjY5OTIgOC4xOTkyIDguMTk5MmMwLjAwMzkwNiA0LjUtMy42OTkyIDguMTk5Mi04LjE5OTIgOC4xOTkyeiIvPgogPC9nPgo8L3N2Zz4="}))),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1cXGlz20iS/d6/QqH5OG12oapw9cZuXHUwMDA0RUo2bVx1MDAxMTpISS3tTnSAJFx1MDAwNIHiZVx1MDAxMlx1MDAxMlx0zvq/b1x1MDAxZKiqXHUwMDA0XGLSkizZ7o32dIylQp1Z+V6+TKD737/s7e2n2Sza/31vP1r1w1EymIfL/V95+2M0XyTTXHR7hMXvi+nDvC963qXpbPH7b7+Fs1nNjKr1p2M5Mlx1MDAxYUXjaJIuWN//Zr/v7f1b/D9Ya1x1MDAxZfXTcFx1MDAxMo9cIjFAPDLLXHUwMDExq9xcdTAwMThMJ2Jli9hcdTAwMWV1fGLbukcyXHUwMDE5RCs+ZYjMXFzJosn2kEZcdTAwMDP24DZcdTAwMWMtXCLzhDftn2R/eOd97E1mh/Tgyok7s9b1kVx1MDAxOX6bjEadNFx1MDAxYsnDhv27hznY6FwinU/vo6tkkN7xLZXa9bjFlJnFjJpPXHUwMDFm4rtJtFhcdTAwMTTGTGdhP0kz3oaQbpWW+X3PtPBcdTAwMTNcdTAwMTJqfucjqIdKazemo+mcr/1cdTAwMGYr4v8zq/fC/n3MtjBcdTAwMTnoPuk8nCxm4ZxdlOm3VKdcdTAwMDK7uYuS+C7lXHUwMDBigvVcImFby3PZP1x1MDAxNPnmRHyVWWsg7v5fxqLzcFx1MDAxY7X4kMnDaFx1MDAwNI0yXHUwMDE55EZRPmK8hOQtX8wxeP/DsndBXHUwMDBmK3hZXHUwMDFhrczZwPUjRFwibzK+7H1y66tPXHUwMDFm2n+8azbW+7rfl1+rp5WD7ePjjmstP39+XFyOL07OXHUwMDFlWn16RYqrqPXD+Xy6XHUwMDA08+Y/XHUwMDE5szzMXHUwMDA2ofRSy8XIQchHXHUwMDFlso2ZR8nkvmyz0bR/b1x1MDAxY/tcdTAwMTew4VxylFx1MDAxNc5cdTAwMGZcdTAwMDFGt1x1MDAwMsyjxLNcdTAwMWTbsypcdTAwMDBmPVx1MDAxZGDVXHUwMDE2/tlcdTAwMDFmo1x1MDAxYWGXQCxcdTAwMGK7PvbdXCLc/LeDm+vX2Io+cV1KLYpcdTAwMWO8XHQ+XFxcdTAwMDE+23dtXHUwMDE3Oa9cdTAwMDC+woNccpTtdFhEXFzrXHUwMDE5XHUwMDBla3Y1naSdZC28zim0XHUwMDFlheNklFx1MDAxNa5ReDIn7lk0XHUwMDBm0+l8sV94VFx1MDAxZiUxd+z9PttyNC/4fJqwXHUwMDAwpTuMk8FcdTAwMDBGnT5bL0wm0bz1lMAwnSdxMlx0R93t21x0XHUwMDFm0ul5tJBcdTAwMDdL51x1MDAwZlx1MDAxMbRN9EFdp1XD9k7s7o6QuNyoXHUwMDAxTF1cdTAwMWJj7Fx1MDAxYd81+MVPx29wZc3TXlx1MDAxNEbjZpNcdTAwMDRB+8MkXGY+/fT4LVx1MDAwNUibflx1MDAxM2L/cXtcdTAwMWL1ff/FwZG4NvIsSo1W+SvERvtcdTAwMDGvmkefXXxxdnqdRDej+PHq+qmxsbO6p8Ra+yct686Jur3z7J2fvFps9H2Hvn1stLdCi21cdTAwMDAhXHUwMDA2sCpskadjq9rCPzu2XFy7ZiGKLN9ybER85Fx1MDAxNKFmv11wxH7N9S3fsVx1MDAxY8f3MdOb9ib6KqIjXHUwMDBijLZFXHUwMDFj4n47/P4q0bF+2nqjuPiVeFCOi4WNvFZE5L2rXHUwMDEw6+6ALLUsipnDVkGWPlx1MDAxZLLZ6MpLoj87h+lcdTAwMDP92Fx1MDAxZD+u++ODdz87ZF2EasxcdTAwMGZ931wilOWKIFx1MDAwZeXZY1xyUfacZdSeg1xci5Y2Zlx1MDAwMIzEn92xMvKjfnRbXHUwMDExK3FpXHUwMDEzflXorCGLWMgnjkdty1x1MDAwMVx1MDAwZa/A7LjIJYRg8iPBTFx1MDAxMUFcdTAwMDQ671PBvEjDeXrAPC+ZxOUh0WSw5ckoXFykjel4nKRsXHUwMDFip9NkkpZ7iHnrPJDeReHGodnMW5/N+HRFlWB+2jOOJH7RP//r16/3pl/tbpX90i+OLzvDV+fb6mL8XHUwMDBmLs1H6XP3Z/IrcdjidMhyrWfZXHUwMDA3mOdcdTAwMTf4d5n1JPE4N1Hw0W98WIeXXHUwMDA3tkNv71x1MDAxN1x1MDAwN95cdTAwMTng+EoxI8CPSc2y3EK0zLNYdjjfge1cbqu2XUOY+LaDfc/DnoV3XHUwMDA32k3Wea3I/6P59FncYlx1MDAwMopdWK2acFx1MDAxNKEh23ds23ZcZp+YgGahjVZcdTAwMWTQmFx1MDAwM9vM7TBcYmhbY1eZ3FxuXHUwMDFi2aA313FcdTAwMTB5XHUwMDExvSn5MY7SedJcdTAwMDe58LNFzNP1SjqdbVx1MDAxMyuFLZeVycZcdTAwMWW/VZ1InI47R5P34aPf71x1MDAxY1x1MDAwN1x1MDAxMfHWd83TT7ebOE3GYVx1MDAxY1x1MDAxNYFqY6dGXHUwMDE4yWxcdTAwMDDVQbWi2FUw9ZxaXHUwMDA1MFx1MDAwYq1fhWYl7P6fw9N5OjxdXHUwMDBmO1x1MDAxZVx1MDAwMcxcdTAwMGbQXHRcdTAwMTRMXHUwMDE5nI7HUiPPcV5cdTAwMDLOLem6dK9L+3bxLpwvz6/CXHUwMDBlufaDsJs8XHUwMDE4hV1wsVx1MDAxN+TV2PVcdTAwMTCGbv9cZl2TPizEbYaP0aDgIfIq9ntWaHlcdTAwMDNn4OBcdTAwMTC7YVx1MDAxZiFcdTAwMWL3rV6Eolx1MDAwMVx1MDAwZS174Dg09Hqe2/NYKO3hKLIjXHUwMDE3XHUwMDExXHUwMDA3sy3d9vpeSFx1MDAwNn1qu643YJP0rYE1oD3PiSi+tVh2d4ttUJ1ZMHqIXG6GXHUwMDA0cVvF6F2xdndhv2TgXHUwMDAyhplMqHEpwFwiZ1x1MDAxMcQ2smqeR1x1MDAxY1x1MDAxNzNcdTAwMDGLXbKBZcepeVx1MDAwNCNSXHUwMDE5a/9cdTAwMGW1W7HsVmN5s06G85YvZYhbnsfMXHUwMDBls3PwvpNuXHUwMDBmwFx1MDAxZWU+7Fx1MDAxM+K/XHUwMDA047tQaFx1MDAxMVx1MDAxZj+nuvU2Wr7CIUvjNlxi5Yl5islywC3lb4qfUnxcdTAwMTfKoS/ohmlwn1pcZleE8Fx1MDAxMlx1MDAwZstfQac4nPFwqFx1MDAwMbnhXHUwMDAw2zOuZ+VTXGZPicTlXHUwMDBlTtldXHUwMDEw3ckpNov/XHUwMDFlcT1KbJv6fil9t22/5riEOY9jI4Q9w9+aWuxcdTAwMWHzKTbUtlxc5Nm2cWkj5u2ay1x1MDAxMlx1MDAwNebMbFxu5NqgXHUwMDA28DfjyFvUjON/M+Nw+3o+y1x1MDAxYytcdTAwMTiHbLZcdTAwMWHJb/m+x4aZXHUwMDFlr8U4XHUwMDFl845cdTAwMWbPONv8lP95t+mi34OJdpc7XHUwMDBiTGR7rms5LqNcdTAwMWFCLbb/XHImsso4/qGEtFtJ7lwiJFx1MDAwN5OaW5Y3XHUwMDA2Vpp2aFxy2citrlx1MDAxZfytaLbyS/2b+YViXHUwMDA387czlSVcdTAwMDW6/ZNcdTAwMGZcdTAwMTdjXHUwMDE2Klx1MDAwYt9UvVJJwWdxXHS96PXH6zLMpkuWxr1cdTAwMWST7C5cZlx1MDAwMCZ5x0RcckvDXHUwMDEwZtLLXCKeyzhcdTAwMDODbppLXHUwMDE4gXBx9oNI5ElfJzhoq69R4vmU2qCOb1x1MDAxMHDw9PcxnbP6J//wkzutfz6Px9514rl/9n5cdTAwMWVcbnji93v47d6ZPvFcdTAwMTNcdTAwMDXsWZRJae9cdTAwMTVeq3zHT1x1MDAxNG78VuNg8PiQOO+niFxcL1uuPzl76idcbuH95+P17ShYdj95q/HROlv+eXz3ep/v2d6zaqg7QbbtXHUwMDEzXHUwMDA18Fx1MDAwMcKGVkS25VNMq76PbTxcdTAwMWRf1Vx1MDAxNv7Z8eVcdTAwMTBOoYjLSJ/JrXJBlbxcdTAwMWTcbMKyZt93bG9bLWfzXHUwMDAzXHUwMDA1z2U5LPboXHUwMDBmfaX5fb9P6GSLNFx1MDAxYb/RJ1xuX4lcdOVcdTAwMTdcdTAwMDHlvbzOe4Dd7LI737dqXHUwMDBlcSre2FHCkoySQ4P6IXJcdTAwMWPXoVx1MDAxZVNcZox9nE3PI16NhV3HodTHlsMykL81+DZccv7x26uKLlx1MDAxMzjEczbf4PGbsLZ+qIJZ6khsXHUwMDA3o5ck+V9cdTAwMTHh7NLxTyDCt3kq/7Pho99Dmu8mjKI0d2z+Xa3Di8ae7zhcdTAwMTXK3KD3XHUwMDA3SXNJQPNJ4/4wSe7uSeM8XHUwMDE5XHUwMDFjOas+vv/jKVx1MDAxZlxmeJ5XY6mFw1x1MDAxNLrrOo5naEK+jaQ1YmNepfGISzD4oEpRXHUwMDExwbhGXHT2XHUwMDFjXHUwMDA3eTb1XFyTcGoqcrxcdTAwMWH/tp7FPYvlm1x1MDAxOPxbI69CRVx1MDAxYlx1MDAxZuz+RWno4lx1MDAxOd9cdTAwMTHYLnYpcqyNl5JcItvaKlx1MDAxNInvIV5ze8lbjJ10Y9mUoeBF7zFKn1x1MDAxMeyFs+R/Jv+7x9x/XHUwMDFl7aXJOGJoXHUwMDE5z/b+a8/aXHUwMDFihNleXHUwMDE4T/njdDrbm4UpXGKyUJp4Nd+1ie0z9LLw6Vx1MDAwMbctSFx1MDAxNVLYhFZcdTAwMWOj6DbdIUi+8Vx1MDAxYoRcdTAwMTdcdTAwMWbw6VJFXHUwMDEyxS85fe6Hs1knZdelSXH/MYmWXHUwMDA3lUjifzjRXGKaXHUwMDExL3RNKHz7t7qGtZnsXHUwMDFiR134/cRvi8f4n6vxXGKkM9/5VTNz+fDi/Jgvyn/8vbCt/+iFi8ihv55+XGLwTXZAe1erh/5cdTAwMWEl4Ydz1G9OXHUwMDFmj8mAXGYym7Qz+7E/7j+2h/Vlu+GvXHUwMDA3437S+jCY3Xw4n552Wqt282A5aLTi8P3l7Fx1MDAwNt8h2DZcdTAwMThfZn08euxcclHS7tBVKznA4dUlOVx1MDAxYvuU9Vu2mvW43a2zv1x1MDAwZtncrX82krp3s6afWo26139/hMLGwf1p52NcdTAwMWF0L1x1MDAxZdrr+qrV7GfH3bOHoINWx8PYPmmeXHUwMDBm21xyytY7tIJcdTAwMDQtWduy3exTNu9cdTAwMDObd1x1MDAxNXSvU7YuZs9xoS2h65NujFhbysbTdrNOTlx1MDAxYXw820f3XHUwMDAyXHUwMDFmd1x1MDAwZlx1MDAxZoIh65vAtlx1MDAxNtvDPVxy3i/R8fCCz0v5XHUwMDFj1+s631x1MDAwZu9nn3RbXHUwMDE5X+ekWV9cdTAwMDbrXHUwMDE4zF1nz6/13Pk8Ylx1MDAwZfacXHUwMDFls/NcdTAwMDVXbd5/ddK9z9pi3Vx1MDAwYv47Nr/z854hOb6+lPu9XHUwMDE2a/ZcdTAwMWFcYuU/x9zOJ91DdJ1cdTAwMTl76DVcdTAwMWLcbqJcdTAwMWa3gZibn4vvl823zm264M+4zbit2917uz1us7na+Vxc/Lx1fV4xd1fZqq3XXHUwMDBirpZp0FBrtPMzizNafFx1MDAwZX5cdTAwMDZho464P1xcarPkfbG1h1x1MDAxZlx1MDAxN2L8sL5ud+psj307XHUwMDE4jobgTNpcdTAwMGWsXyrPfy/9RN4hO/PlQs7P+jfP+L7U3Vx0XHUwMDFiXHUwMDFi/+H3yvvzO2d+clx1MDAxNadBfkfSnvJcdTAwMGWF3+T7XHUwMDE2+8znNW1HcL1Yr5dcdPvzuWO27jr3u3W+XlxmfFx1MDAxMel+zFx1MDAxNj3ZR95bJm0q99POfVx1MDAwMu5BnSO3s7Yhs0fzXHUwMDFlS1x1MDAxYrZcdTAwMDV2zF2Cu1x1MDAxZFxujMRynnaOJ3GfmdpTkPupPM+h2mdud+aDXHRfW/lVXftcdTAwMTXfQ+5r+bibIVgzXHUwMDA1WF5cdTAwMDGbKEys5H7iWONibDDUapYxxM91XHUwMDExmznrcE5s2oQtXHUwMDE27ExcdTAwMTY/50lT+6lcdTAwMWFcdTAwMDdwpDkkVrxSaDO8XHUwMDEyXHUwMDE3sX+Y+43iXHUwMDE12KZ5JVV7XGLWh8tcdTAwMTN5XHUwMDE2gINWiU/iijuT6/fEOYTtLeb7w1xum2Dzu+RcdTAwMTW+ruSVuuGV5uZ9gT3ktjtcdTAwMTO24PPxs1x1MDAwNEO216Seyf2xu8qk7zNcdTAwMWau8lx1MDAxZuBj7Fx1MDAxY806bkveU/tla1xiTlx1MDAwMHjhbWfLgPm04pdWU/OLOlx1MDAxZuh7WMJcdTAwMWJvXHUwMDAza4yXm9haK24xtmBraFx1MDAxZm81XHUwMDE1t9RcdTAwMDW38Ln5XHUwMDE5WX9k4lJcdTAwMWTyXHUwMDA1x9lK2Lgrx4XMX4VtxZ51v7jIh5I/TNtcdTAwMTFYXHUwMDBimbWgL65ze2VmnjxcdTAwMWVxu+f9XHUwMDA0ntW5Y3NusKY500rtX+Ept1x1MDAxYtKxJJN9TSxcdTAwMDR3qrBd4Fx1MDAxOVx1MDAxOVx1MDAxZirijOFebWtcdTAwMTGrLO5b5ThcdTAwMTU0XHUwMDE09nO7jlx1MDAwYraEWDU2lVhcdTAwMTJYkbG3Ln2W+VNVPFx1MDAwNrFhyWyzym2M2Jic7y9cdTAwMDTPnnTrWXstYlx1MDAwMJv3jERjlLaHzNcz7evY8Fx1MDAxN1pJfr5QsTP//TC3segrsFx1MDAxNei958+47Tqyf6t5rf2U2UA8XHUwMDBmdFxmgv3582uOr6ydIUvfe2Eu3v/SaSVcdTAwMWXXYfHph4O7wfs4vmmipNe9Rlx1MDAwMs9cdTAwMWR27ozb6Fx1MDAxMOJcdMlz3eU+L3zEkjpI+a/hXHUwMDE57vfmrnhf86zo80bz9JpGXHUwMDFiXHUwMDA0cl1qMFxu/U3xXHUwMDBmXHUwMDAyuFV3Uqe9JoxJas/6XHUwMDFjOp5cdTAwMTb2nnOy4cZDzY353a1cdTAwMDFu0uJ8gmdojqOC/4v53lx1MDAwYlxm5H7YlntcdTAwMTd20VovNj7Zkr4ruPVCY07uQ7SvJP5cbvGmxKU5tlT8XHUwMDFiL5VcdTAwMWWBmlxixlx1MDAxYlx1MDAwYsS3XFxbXHUwMDAwXHUwMDFkKzDL45bSNTclPX6tNTHQ4ypGQj2utFRaiE1cdTAwMDWNXHUwMDA3dLjwnyXSOl36Uin2K02o8N1cdTAwMDJxX8Qz9pzrXCKt9TWfXHUwMDAyntA2yOeA+UKVPVNcdTAwMTXbmFx1MDAwNlx1MDAxY1x1MDAxNsZpfSQwl+W+lkqtpOJcdTAwMTfXWOVYXHUwMDA0dLHhZKi/gc8pjXS3kJya++eGVlQ6XHUwMDFiLVx1MDAwYjq+7ONcImbrOL7OdbDSYVA7q9jO50RcdTAwMDX/btCs3Wyv2sK+XHUwMDE3drBcdTAwMWUwXHUwMDFm0fmN5M4m1K45TzRcdTAwMDRPXHUwMDE5jcj9ulvApYqDK4PX81x1MDAwNYyBmivknqVWMbbKdM5k8iyjgyQ2yUn32pb3I2I1tHXBpvpcZuJMMEc7XHUwMDA0OVquRXC7dJfl3Cou31VcZjksv6e13P/HYcEuMjeWd5ZoTc7nVbp/oeMtw4H0jYuC9i5oTpDnyFh+XHUwMDAzMFOvwozmf1x1MDAxM3+hXHUwMDE20ryBtFx1MDAxZVx1MDAxZZf1tsEuiOHCXiW9rfZW0LTyXHUwMDBllX5cdTAwMDM6W/JGXHUwMDFhXGJccnhtfKt7T4Lhde5TZ1Zb2ITnmTHNfVx1MDAwYlx1MDAwNd12zk1cdTAwMTc8XHUwMDBmXHUwMDE1/lx1MDAxNDQvXHUwMDE3pr5wpnKHQi1A3ud1uTZcdTAwMTBX2VVxXHUwMDA303lDcJ6VjtdcdTAwMWSpg/KzZVwifqo4IPy5rbCKq/Q1iFE6JrSaVT6muKO+LmtCpaGBj1x1MDAxNLSUyjfZ3VBcdTAwMTXXcuywc7Tsdlx1MDAwNn1BxOtVXHUwMDAwdDqzwfKk25Y5J9crZMa5UMVAejy8X7JcdTAwMThpmTy6vpK+04rz/EneeaLaP65lzUj3S9vShzLdl/lfYOpE+rmqNZXH9demtqDWNmPyOSfT5LiilnXS7cfBui/sJGyT41x1MDAxMOhcdTAwMTFcdTAwMTg/y1q2WHdcdTAwMDA1Llx1MDAxOXNgPSOPn12lh2BtS+DP5D1cdTAwMWSlqSp9XHUwMDA0xHyQa1x1MDAwMv7tNUBMyHStXHUwMDAzrFmY1yrl/Lk+4v0vXHUwMDE3Olx1MDAxNoJcdTAwMWNcdTAwMTfWXkS8XHUwMDAzsVRgjvu+qje8Xyr+S1x1MDAxOc+C+Fbw442aYSHm89wkU3yj8vMy95t5Qb1cdTAwMGbUKkz9QmlcdTAwMDPDVy1Zi+E5hqrXJFx1MDAxYvlaqmKurrGNl3BcdTAwMGZrmdtvqVx1MDAwM1x1MDAxNWuHoFYg8DnV+mBcXIpFIF8snjdcdTAwMDY5naopsfWG9/gk51x1MDAxY75/XHUwMDE5a+sszvdh7SbTXHUwMDFjZjSDyT+voFx1MDAwZW4pXHUwMDFkXFyOtaUztFLog0CLXHUwMDE5e2dKa1bdYX2bb1x1MDAwMLspXHUwMDFlP9K5YatcdTAwMTlcZks2XHUwMDAyelDXQ1x1MDAxNF/Filx1MDAwN2Vcci/XfGrMe2j7XCJewPzQV3V+XCLy51x1MDAxY7e8/lFdtzL5jI6ZhVx1MDAxYZJ6zs6XKd16XGK1XHUwMDBljMlcdTAwMDbLlXm1qYvlXFxcdTAwMDTrbEtcdTAwMWT3XHUwMDBitS/NRemW9Sv0boGDQO1cdTAwMTacZdMuYM3CXVugRlx1MDAxMVx1MDAxN3O1y4XhXHUwMDAwdVx1MDAxZoKfde1cdTAwMTCcKX9cdTAwMWbB5tS1r7uF5Cep1XI+NPlcdTAwMTDg2XKdsVx1MDAxMFtFnSb3q8TUWXTMLvB0xfiNO7pZVGBN1XiyzVq0ypWNZulBzZBRi+0nLt6V8TuQe8F3IcJcdTAwMGVhU3NcdTAwMTBcdTAwMWNcdTAwMDMxVdAvgGdV/Vx1MDAxN/BCm9dsXG48kNvF5FTm7tY6XukzMY5o3q/lefVdw9pAif9ahVx1MDAxYVlcdTAwMDXfr0GOV763Unw1/Fxy5taxRMZXXHUwMDE401xmn1x1MDAwMz2Z+6r2OVx1MDAxOFx1MDAxM9cg/1Hc81x1MDAxNX5AXHUwMDA1zMD8pqfrIbpcdTAwMTaX65ZcdTAwMGJcdTAwMTRkpVpZk2vrnNO6ur6LWF61PMnftVx1MDAwNN1Lp8d+Plx1MDAxMffTXHUwMDEyNaxcXL+ivFx1MDAxZUbLefFxN1baJn/2cb35rK7Hnei8XFw/W6v8b+OZ8Mc6P8NS5jhcdTAwMTd6XTNe70mPj5LW42k8jU9cdTAwMWL+hP3tXHUwMDFkk1x1MDAwMN+s6X+C1+/zqPSfM6CWXHUwMDBm/92DcJGe8/fu0eNmL/2a/MsvX/5cdTAwMGa3l72jIn0=",(0,w.kt)("defs",{parentName:"svg"},(0,w.kt)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}@font-face{font-family:"Assistant";src:url(https://app.excalidraw.com//dist/excalidraw-assets/Assistant-Regular.woff2)}')),(0,w.kt)("path",m({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",d:"M20 70c30.8-2.4 61.44-.03 80 0m-80 0c22.41.58 42.15-.59 80 0m0 0c7.7 1.21 8.64 2.69 10 10m-10-10c8.9 1.26 10 4.81 10 10m0 0c.13 6.86 2.05 12.85 0 20m0-20c.2 7.87-.01 16.09 0 20m0 0c.59 7.78-2.79 9.9-10 10m10-10c.36 7.46-1.81 9.33-10 10m0 0c-25.25 1.3-48.88-1.23-80 0m80 0c-26.77-.27-52.29-.24-80 0m0 0c-7.24-.58-8.42-4.86-10-10m10 10c-8.35.23-9.68-2.79-10-10m0 0c-1.77-4.27-.49-9.46 0-20m0 20c1.04-6.28-.37-11.62 0-20m0 0c-1.34-4.95 4.07-11.51 10-10M10 80c1.76-4.55 5.38-9.57 10-10"})),(0,w.kt)("text",m({parentName:"svg"},{x:"39.64",y:"14.016",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(20.36 80)"}),"Operators"),(0,w.kt)("g",m({parentName:"svg"},{strokeLineCap:"round"}),(0,w.kt)("path",m({parentName:"g"},{fill:"none",stroke:"#ffec99",strokeWidth:".5",d:"M12.66 132.31s0 0 0 0m0 0s0 0 0 0m-2.23 8.67c3.79-3.13 5.93-6.81 9.84-11.32m-9.84 11.32c3.19-4.3 6.13-8.15 9.84-11.32m-9.44 16.96c5.41-5.34 8.18-12.26 12.46-14.34m-12.46 14.34c3.95-5.17 9.18-10.46 12.46-14.34m-12.07 19.98c4.32-6.23 7.83-9.91 17.06-19.62m-17.06 19.62c3.13-4.34 6.38-8.2 17.06-19.62m-17.32 26.02c7.8-11.14 19.15-18.99 22.31-25.66m-22.31 25.66c5.7-5.78 9.93-11.69 22.31-25.66M10.7 165.06c10.24-10.38 19.42-24.4 28.21-32.46M10.7 165.06c10.04-12.98 21.07-24.32 28.21-32.46m-25.19 35.08c11.68-14.48 22.87-27.15 30.18-34.71m-30.18 34.71c9.99-10.41 18.12-20.84 30.18-34.71m-27.16 37.34c9.28-11.37 20.56-23.54 32.8-37.74m-32.8 37.74c9.21-9.88 17.08-20.24 32.8-37.74m-27.82 38.1c8.5-9.24 14.81-16.61 32.81-37.74m-32.81 37.74c12.09-13.96 24.74-26.3 32.81-37.74m-27.16 37.34c10.54-9.8 18.87-22.02 32.8-37.73m-32.8 37.73c8.26-11.16 17.17-19.3 32.8-37.73m-27.82 38.09c12.91-14.17 26.67-28.53 32.81-37.73m-32.81 37.73c10.82-13.69 24.53-27.81 32.81-37.73M38 170.24c7.52-8.72 12.78-14.36 32.14-36.98M38 170.24c8.31-8.62 16.19-19.4 32.14-36.98M42.98 170.6c11.19-14.64 24.59-28.34 32.81-37.74M42.98 170.6c8.29-7.65 15.24-17.29 32.81-37.74M48.63 170.2c12.39-12.66 24.36-27.34 32.14-36.98M48.63 170.2c11.79-14.64 25.23-29.12 32.14-36.98m-27.16 37.34c5.79-9.19 16.44-15.3 32.81-37.73m-32.81 37.73c8.82-8.41 17.16-17.52 32.81-37.73M58.6 170.92c5.78-8.75 16.09-17.95 32.8-37.73m-32.8 37.73c8.37-9.2 17.47-20.31 32.8-37.73m-27.16 37.34c10.56-8.88 15.65-20.16 32.81-37.74m-32.81 37.74c8.37-10.71 17.94-20.72 32.81-37.74m-27.82 38.1c6.31-8.74 13.52-17.68 32.8-37.74m-32.8 37.74c6.55-7.98 15.91-17.73 32.8-37.74m-27.16 37.34c8.27-5.64 11.66-14.91 32.15-36.98m-32.15 36.98c13.16-14.28 25.8-27.49 32.15-36.98m-27.16 37.34c9.91-7.38 16.53-19.63 30.18-34.71m-30.18 34.71c8.4-9.21 18.58-19.96 30.18-34.71M85.5 170.46c6.87-8.27 16.03-19.74 24.28-27.93M85.5 170.46c7.97-9.87 16.12-18.37 24.28-27.93m-19.29 28.29c5.5-9.1 13.23-17.58 19.68-22.64m-19.68 22.64c5.48-6.43 11.16-12.35 19.68-22.64m-14.69 23c2.91-5.36 4.52-7.62 14.43-16.6m-14.43 16.6c3.07-4.77 7.23-8.62 14.43-16.6m-8.79 16.2c2.26-2.12 4.83-6.06 9.19-10.56m-9.19 10.56c1.44-2.18 3.6-4.81 9.19-10.56"})),(0,w.kt)("path",m({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M20 130c17.62 1.3 35.54 1.37 80 0m-80 0c26.26-1.11 52.56-.41 80 0m0 0c5.13 1.18 11.62 2.09 10 10m-10-10c8.8.03 9.94 2.41 10 10m0 0c.55 8-1.53 12.69 0 20m0-20c-.58 5.63.63 9.9 0 20m0 0c-.99 6.75-1.44 8.15-10 10m10-10c1.12 7.33-4.68 10.91-10 10m0 0c-24.97-.83-53.79 1.21-80 0m80 0c-17.56-1.38-34.89-1.34-80 0m0 0c-5.37-.3-10.66-3.21-10-10m10 10c-6.03-2.23-12.16-5.22-10-10m0 0c1.47-6.26 1.08-11.57 0-20m0 20c-.5-4.63-.31-7.07 0-20m0 0c.93-8.02 1.94-8.97 10-10m-10 10c1.39-8.23 2.59-7.77 10-10"}))),(0,w.kt)("text",m({parentName:"svg"},{x:"14.896",y:"14.016",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(45.104 140)"}),"API"),(0,w.kt)("g",m({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,w.kt)("path",m({parentName:"g"},{fill:"none",stroke:"#e9ecef",strokeWidth:".5",d:"M370.173 70.042s0 0 0 0m0 0s0 0 0 0m-.26 6.4c.77-1.95 3.01-3.93 5.25-6.04m-5.25 6.04c1.65-2.38 3.92-4.18 5.25-6.04m-4.86 11.68c3.72-1.91 5.78-8.43 10.5-12.07m-10.5 12.07c2.7-3.35 6.53-7.46 10.5-12.07m-10.76 18.47c6.97-6 8.64-11.84 15.75-18.11m-15.75 18.11c7.1-6.88 13.29-14.91 15.75-18.11m-15.35 23.75c4.87-5.37 13.02-13.07 20.99-24.15m-20.99 24.15c7.24-6.66 13.08-15.54 20.99-24.15m-21.26 30.55c8.22-9.84 21.15-20.48 26.25-30.19m-26.25 30.19c8.44-9.99 18.54-20.61 26.25-30.19m-26.51 36.59c10.87-10.91 18.04-22.6 32.15-36.98m-32.15 36.98c8.85-9.66 17.6-21.37 32.15-36.98m-30.44 41.11c11.99-17.49 27.95-30.13 35.43-40.75m-35.43 40.75c12.29-15.15 24.58-29.63 35.43-40.75m-30.44 41.11c12.82-13.64 24.83-27.12 36.08-41.51m-36.08 41.51c13.08-15.7 28.21-30.46 36.08-41.51m-30.44 41.12c8.75-6.88 13.18-16.1 35.43-40.76m-35.43 40.76c9.49-9.87 17.61-20.93 35.43-40.76m-30.44 41.12c10.76-10.37 18.87-21.56 36.08-41.51m-36.08 41.51c14.24-16.69 29.33-31.48 36.08-41.51m-30.44 41.11c6.09-10.27 16.3-18.42 35.43-40.75m-35.43 40.75c14.43-16.2 28.61-30.97 35.43-40.75m-30.44 41.11c10.7-13.56 22.25-24.95 36.08-41.51m-36.08 41.51c14.23-15.71 26.84-31.2 36.08-41.51m-30.44 41.12c10.83-10.09 20.75-24.6 35.43-40.76m-35.43 40.76c13.67-16.7 27.73-33.27 35.43-40.76m-30.44 41.12c8.39-11.62 18.8-21.95 36.08-41.51m-36.08 41.51c10.31-12.01 20.01-23.94 36.08-41.51m-30.44 41.11c8.54-7.49 14.53-18.6 35.43-40.75m-35.43 40.75c9.11-9.54 17.64-20.08 35.43-40.75m-30.44 41.11c7.69-10.3 14.9-18.79 36.08-41.51m-36.08 41.51c9.23-9.82 17.61-20.14 36.08-41.51m-30.44 41.12c12.45-15.09 24.89-29.84 35.43-40.76m-35.43 40.76c7.95-8.62 15.93-16.34 35.43-40.76m-30.44 41.12c11.5-14.75 27.58-32.74 36.08-41.51m-36.08 41.51c12.2-12.08 24.02-25.61 36.08-41.51m-30.44 41.11c12.54-12.96 20.38-24.43 35.43-40.75m-35.43 40.75c9.85-9.71 18.6-21.52 35.43-40.75m-30.44 41.11c8.88-14.14 20.52-26.83 32.8-37.73m-32.8 37.73c12.25-14 25.79-27.53 32.8-37.73m-27.82 38.09c6.16-9.49 15.37-17.57 30.84-35.47m-30.84 35.47c7.66-8.56 15.11-18.43 30.84-35.47m-25.19 35.08c12.3-12.08 23.33-24.57 28.21-32.45m-28.21 32.45c10.91-11.96 22.2-25.36 28.21-32.45m-23.23 32.81c7.61-7.61 13.29-15.23 26.25-30.19m-26.25 30.19c6.52-6.9 11.99-11.86 26.25-30.19m-20.6 29.8c9.15-9.07 15.38-18.78 22.96-26.42m-22.96 26.42c7.56-9.48 15.57-18.97 22.96-26.42m-17.98 26.78c6.91-4.47 9.84-13.24 21-24.16m-21 24.16c4.51-4.59 9.07-11.1 21-24.16"})),(0,w.kt)("path",m({parentName:"g"},{fill:"none",stroke:"#000",d:"M370.173 70.042c.67 14.42-.6 26.1 0 40m0-40c.65 8.33-.61 18.49 0 40m0 0c31.54.51 62.39.1 100.17.01m-100.17-.01c26.41.87 54.42 1.01 100.17.01m0 0c2.47-4.17 8.01-9.36 20-20m-20 20c6.6-6.29 10.75-11.63 20-20m0 0c-6.34-3.05-7.65-7.47-20-20m20 20c-5.77-6.5-12.41-12.75-20-20m0 0c-36.13 1.59-73.11-.35-100.17-.01m100.17.01c-20.93.52-43.76-.11-100.17-.01m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,w.kt)("text",m({parentName:"svg"},{x:"27.512",y:"14.016",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(393.117 80.18)"}),"metrics"),(0,w.kt)("use",m({parentName:"svg"},{width:"87",height:"87",href:"#image-b1a18d6d62a27ac0052c1be0ed2a15d664a8b87b8160b2ee5e70362278fbc8a3dc45778d18dc1d1d4b86e42f1065f259",transform:"translate(196.305 50.219)"})),(0,w.kt)("g",m({parentName:"svg"},{strokeLineCap:"round"}),(0,w.kt)("path",m({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M119.07 92.714c11.22-.35 55.67-1.86 66.52-1.95m-67.5 1.34c11.1-.32 55.44-.65 66.87-.4"})),(0,w.kt)("path",m({parentName:"g"},{fill:"#1e1e1e",fillRule:"evenodd",strokeWidth:"0",d:"m184.67 93.274-14.35 2.76 2.86-12.1 12.77 8.19"})),(0,w.kt)("path",m({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M184.96 91.704c-3.16 2.81-9.84 3.01-13.63 6.27m13.63-6.27c-5.04 2.07-8.35 3.96-13.63 6.27m0 0c.26-5.2-.6-10.7.07-12.67m-.07 12.67c.53-4.2.65-9.86.07-12.67m0 0c4.47 1.51 8.58 4.17 13.56 6.4m-13.56-6.4c3.9 1.2 6.84 2.88 13.56 6.4m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,w.kt)("g",m({parentName:"svg"},{strokeLineCap:"round"}),(0,w.kt)("path",m({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M120.664 148.943c10.86-4.28 54.97-20.25 65.79-24.46m-67.05 26.69c10.63-4.67 55.39-24.13 66.23-28.51"})),(0,w.kt)("path",m({parentName:"g"},{fill:"#1e1e1e",fillRule:"evenodd",strokeWidth:"0",d:"m186.294 123.413-10.41 10.14-6.46-12.7 15.89 2.68"})),(0,w.kt)("path",m({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M185.634 122.663c-4.73 4.63-6.97 7.8-10.06 11.13m10.06-11.13c-3.32 2.65-6.05 5.56-10.06 11.13m0 0c-2.42-4.24-4.34-7.76-4.93-11.68m4.93 11.68c-1.43-3.77-3.3-6.86-4.93-11.68m0 0c2.04.16 6.64-.64 14.99.55m-14.99-.55c3.32-.19 6.45.67 14.99.55m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,w.kt)("g",m({parentName:"svg"},{strokeLineCap:"round"}),(0,w.kt)("path",m({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M293.04 90.11c10.69.35 53.33 1.2 64.03 1.03m-62.2-2.02c11.15.14 54.31.36 64.52.49"})),(0,w.kt)("path",m({parentName:"g"},{fill:"#1e1e1e",fillRule:"evenodd",strokeWidth:"0",d:"m361.14 91.47-15.38 3.77-1.24-11.63 13.81 5.91"})),(0,w.kt)("path",m({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M359.39 89.61c-3.07.45-4.94 2.06-13.65 6.23m13.65-6.23c-2.37 1.06-5.8 2.62-13.65 6.23m0 0c-.36-4.88-.87-9.63.11-12.68m-.11 12.68c-.3-2.49-.14-5.81.11-12.68m0 0c3.28 1.08 6.47 2.59 13.54 6.45m-13.54-6.45c4.99 2.61 10.53 5.21 13.54 6.45m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,w.kt)("path",m({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",d:"M20 10c23.69-1.69 49.9-.99 80 0m-80 0c26.45-1.34 53.8-.65 80 0m0 0c5.1-.51 11.81 5.23 10 10m-10-10c6.98-2.14 10.2 2.68 10 10m0 0c-1.26 6.34.04 16.55 0 20m0-20c.57 8.4.38 15.59 0 20m0 0c.79 4.8-5.33 9.77-10 10m10-10c-.26 8.41-1.17 9.57-10 10m0 0c-23.63 1.31-47.56 1.32-80 0m80 0c-18.07.06-35.13.87-80 0m0 0c-6.63-1.47-9.85-3.1-10-10m10 10c-5.7-.11-8.29-3.71-10-10m0 0c-.65-5.36-1.53-7.08 0-20m0 20c-.64-7.8-.01-13.56 0-20m0 0c1.29-4.89 3.11-11.36 10-10M10 20c-.59-4.51 2.87-11.97 10-10"})),(0,w.kt)("text",m({parentName:"svg"},{x:"26.92",y:"14.016",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(33.08 20)"}),"System"),(0,w.kt)("g",m({parentName:"svg"},{strokeLineCap:"round"}),(0,w.kt)("path",m({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M122.657 32.5c11.09 6.41 55.18 33.08 66.15 39.43m-67.08-37.39c10.98 6.03 55.64 29.24 66.72 35.38"})),(0,w.kt)("path",m({parentName:"g"},{fill:"#1e1e1e",fillRule:"evenodd",strokeWidth:"0",d:"m188.417 70.62-13.83-.22 5.15-12.3 7.75 12.76"})),(0,w.kt)("path",m({parentName:"g"},{fill:"none",stroke:"#1e1e1e",d:"M188.447 69.92c-6.61 1.22-10.24.58-14.98-.82m14.98.82c-3.65.5-5.66 0-14.98-.82m0 0c1.1-1.97 2.54-4.74 5.98-11.18m-5.98 11.18c1.41-2.58 2.37-4.38 5.98-11.18m0 0c3.04 2.3 4.07 4.84 9 12m-9-12c2.01 3.3 4.69 5.14 9 12m0 0s0 0 0 0m0 0s0 0 0 0"}))),(0,w.kt)("text",m({parentName:"svg"},{y:"18.323",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"18.975",style:{whiteSpace:"pre"},transform:"translate(558.454 54.353)"}),"metrics api"),(0,w.kt)("text",m({parentName:"svg"},{y:"41.094",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"18.975",style:{whiteSpace:"pre"},transform:"translate(558.454 54.353)"}),"| where timestamp > 1 day ago"),(0,w.kt)("text",m({parentName:"svg"},{y:"63.864",fill:"#1e1e1e",dominantBaseline:"alphabetic",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"18.975",style:{whiteSpace:"pre"},transform:"translate(558.454 54.353)"}),"| top path")))))}g.isMDXComponent=!0}}]);
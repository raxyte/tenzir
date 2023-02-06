"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[851],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={},o="AWS",c={unversionedId:"understand/architecture/cloud/aws",id:"understand/architecture/cloud/aws",title:"AWS",description:"Architecture Choices",source:"@site/docs/understand/architecture/cloud/aws.md",sourceDirName:"understand/architecture/cloud",slug:"/understand/architecture/cloud/aws",permalink:"/docs/understand/architecture/cloud/aws",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/architecture/cloud/aws.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Plugins",permalink:"/docs/understand/architecture/plugins"},next:{title:"Type System",permalink:"/docs/understand/data-model/type-system"}},s={},l=[{value:"Architecture Choices",id:"architecture-choices",level:2},{value:"VPC Infrastructure",id:"vpc-infrastructure",level:2},{value:"Images and Registries",id:"images-and-registries",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aws"},"AWS"),(0,a.kt)("h2",{id:"architecture-choices"},"Architecture Choices"),(0,a.kt)("p",null,"The AWS architecture builds on serverless principles to deliver a scalable\ncloud-native deployment option. To combine continuously running services with\ndynamic ad-hoc tasks, we use Lambda and Fargate as building blocks for on-demand\nquery capacity while continuously ingesting data."),(0,a.kt)("p",null,"Specifically, we embed the long-running VAST server in a Fargate task\ndefinition, which allows for flexible resource allocation based on compute\nresource needs. VAST mounts EFS storage for maximum flexibility and\npay-as-you-go scaling. The VAST client performs short-running ad-hoc tasks, like\ningesting a file or running query. We map such actions to Lambda functions."),(0,a.kt)("h2",{id:"vpc-infrastructure"},"VPC Infrastructure"),(0,a.kt)("p",null,"The provided Terraform script creates the following architecture within a given\nVPC:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7913347/177141492-b99cce77-3c10-4740-bbdc-4fc2f43b8abc.png",alt:"VAST VPC Architecture"})),(0,a.kt)("p",null,"The assumption is that the VPC has an Internet Gateway attached. Given a CIDR\nblock within this VPC, Terraform creates two subnets:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"VAST Subnet"),": a private subnet where the VAST nodes and other security\ntools run."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Gateway Subnet"),": a public subnet to talk to other AWS services and the\nInternet")),(0,a.kt)("p",null,"To resolve the IP address of the VAST server and other appliances, we use AWS\nCloud Map as a service discovery provider."),(0,a.kt)("h2",{id:"images-and-registries"},"Images and Registries"),(0,a.kt)("p",null,"Both Lambda and Fargate deploy VAST as a Docker image. They use the official\n",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/tenzir/vast"},"tenzir/vast")," image with extra layers\ncontaining tooling such as:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Image"),(0,a.kt)("th",{parentName:"tr",align:null},"Tooling"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Lambda only"),(0,a.kt)("td",{parentName:"tr",align:null},"the Lambda Runtime Interface")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Lambda only"),(0,a.kt)("td",{parentName:"tr",align:null},"the AWS and other CLI tools (jq...)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Lambda & Fargate"),(0,a.kt)("td",{parentName:"tr",align:null},"AWS specific schemas and concepts")))),(0,a.kt)("p",null,"For that reason, our toolchain builds a Lambda and a Fargate specific image\nlocally and pushes it to a private ECR repository."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7913347/174258069-695b358b-30d0-4599-b0eb-53f0acf04a41.png",alt:"Docker Workflow"})))}p.isMDXComponent=!0}}]);
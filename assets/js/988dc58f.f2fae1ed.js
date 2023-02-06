"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3700],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=i(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58913:(e,t,r)=>{r.d(t,{ZP:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={toc:[]},l="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Commercial Plugin",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This feature is available as commercial ",(0,a.kt)("a",{parentName:"p",href:"/docs/understand/architecture/plugins"},"plugin")," that runs on top\nopen-source VAST. Please ",(0,a.kt)("a",{parentName:"p",href:"https://tenzir.com/contact-us"},"contact us")," if you'd like to try it out.")))}p.isMDXComponent=!0},71274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),o=r(58913);const l={sidebar_position:3},p="AWS with Pro version",s={unversionedId:"setup/deploy/aws-pro",id:"setup/deploy/aws-pro",title:"AWS with Pro version",description:"Before running VAST Pro on AWS, you should refer to the [deployment",source:"@site/docs/setup/deploy/aws-pro.md",sourceDirName:"setup/deploy",slug:"/setup/deploy/aws-pro",permalink:"/docs/setup/deploy/aws-pro",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/setup/deploy/aws-pro.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"AWS",permalink:"/docs/setup/deploy/aws"},next:{title:"Tune",permalink:"/docs/setup/tune"}},i={},u=[],c={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aws-with-pro-version"},"AWS with Pro version"),(0,a.kt)(o.ZP,{mdxType:"CommercialPlugin"}),(0,a.kt)("p",null,"Before running VAST Pro on AWS, you should refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/setup/deploy/aws"},"deployment\nguide")," of the base stack."),(0,a.kt)("p",null,"To enable the use of Commercial features such as matchers you need to use the\nVAST Pro image:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set up the version you plan to use and the activate the ",(0,a.kt)("inlineCode",{parentName:"li"},"pro")," plugins in\nthe ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"VAST_CLOUD_PLUGINS=pro\nVAST_VERSION=latest\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Authenticate and download the Pro image from Tenzir's private repository:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./vast-cloud pro.login pro.pull-image\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure the deployment as explained in the ",(0,a.kt)("a",{parentName:"li",href:"/docs/setup/deploy/aws"},"deployment\nguide"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"VAST_PEERED_VPC_ID=vpc-059a7ec8aac174fc9\nVAST_CIDR=172.31.48.0/24\nVAST_AWS_REGION=eu-north-1\nVAST_IMAGE=tenzir/vast-pro\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(Re)Deploy the vast server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./vast-cloud deploy -a\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verify that you are running VAST Pro (commercial features such as ",(0,a.kt)("inlineCode",{parentName:"li"},"matcher"),"\nshould appear in the ",(0,a.kt)("inlineCode",{parentName:"li"},"plugins")," list of the response)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'./vast-cloud run-lambda -c "vast version"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start (or restart) the VAST server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./vast-cloud [re]start-vast-server\n")),(0,a.kt)("p",null,"You can now use commercial features such as\n",(0,a.kt)("a",{parentName:"p",href:"/docs/use/detect/cloud-matchers"},"matchers")," in the Cloud!"))}m.isMDXComponent=!0}}]);
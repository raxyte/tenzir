"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=i,f=d["".concat(s,".").concat(b)]||d[b]||u[b]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},35648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>_,frontMatter:()=>f,metadata:()=>h,toc:()=>v});var n=r(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>a(e,o(t)),b=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_position:3},m="Ansible",h={unversionedId:"setup-guides/deploy/ansible",id:"version-Tenzir v4.0-rc1/setup-guides/deploy/ansible",title:"Ansible",description:"The Ansible role for Tenzir allows for easy integration of Tenzir into",source:"@site/versioned_docs/version-Tenzir v4.0-rc1/setup-guides/deploy/ansible.md",sourceDirName:"setup-guides/deploy",slug:"/setup-guides/deploy/ansible",permalink:"/setup-guides/deploy/ansible",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0-rc1/setup-guides/deploy/ansible.md",tags:[],version:"Tenzir v4.0-rc1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Docker Compose",permalink:"/setup-guides/deploy/docker-compose"},next:{title:"systemd",permalink:"/setup-guides/deploy/systemd"}},y={},v=[{value:"Example",id:"example",level:2},{value:"Variables",id:"variables",level:2},{value:"<code>config_file</code> (required)",id:"config_file-required",level:3},{value:"<code>read_write_paths</code>",id:"read_write_paths",level:3},{value:"<code>tenzir_archive</code>",id:"tenzir_archive",level:3},{value:"<code>tenzir_debian_package</code>",id:"tenzir_debian_package",level:3}],g={toc:v},k="wrapper";function _(e){var t=e,{components:r}=t,i=b(t,["components"]);return(0,n.kt)(k,u(d(d({},g),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"ansible"}),"Ansible"),(0,n.kt)("p",null,"The Ansible role for Tenzir allows for easy integration of Tenzir into\nexisting Ansible setups. The role uses either the Tenzir Debian package or\nthe tarball installation method depending on which is appropriate for the\ntarget environment. The role definition is in the\n",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/tenzir/tenzir/tree/main/ansible/roles/tenzir"}),(0,n.kt)("inlineCode",{parentName:"a"},"ansible/roles/tenzir"))," directory of the Tenzir\nrepository. You need a local copy of this directory so you can use it in your\nplaybook."),(0,n.kt)("h2",d({},{id:"example"}),"Example"),(0,n.kt)("p",null,"This example playbook shows how to run a Tenzir service on the machine\n",(0,n.kt)("inlineCode",{parentName:"p"},"example_tenzir_server"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"- name: Deploy Tenzir\n  become: true\n  hosts: example_tenzir_server\n  remote_user: example_ansible_user\n  roles:\n    - role: tenzir\n      vars:\n        config_file: ./tenzir.yaml\n        read_write_paths: [ /tmp ]\n        tenzir_archive: ./tenzir.tar.gz\n        tenzir_debian_package: ./tenzir.deb\n")),(0,n.kt)("h2",d({},{id:"variables"}),"Variables"),(0,n.kt)("h3",d({},{id:"config_file-required"}),(0,n.kt)("inlineCode",{parentName:"h3"},"config_file")," (required)"),(0,n.kt)("p",null,"A path to a ",(0,n.kt)("a",d({parentName:"p"},{href:"/configuration"}),(0,n.kt)("inlineCode",{parentName:"a"},"tenzir.yaml"))," relative to the playbook."),(0,n.kt)("h3",d({},{id:"read_write_paths"}),(0,n.kt)("inlineCode",{parentName:"h3"},"read_write_paths")),(0,n.kt)("p",null,"A list of paths that Tenzir shall be granted access to in addition to its own\nstate and log directories."),(0,n.kt)("h3",d({},{id:"tenzir_archive"}),(0,n.kt)("inlineCode",{parentName:"h3"},"tenzir_archive")),(0,n.kt)("p",null,"A tarball of Tenzir structured like those that can be downloaded from the\n",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/tenzir/tenzir/releases"}),"GitHub Releases Page"),". This is used\nfor target distributions that are not based on the ",(0,n.kt)("inlineCode",{parentName:"p"},"apt")," package manager."),(0,n.kt)("h3",d({},{id:"tenzir_debian_package"}),(0,n.kt)("inlineCode",{parentName:"h3"},"tenzir_debian_package")),(0,n.kt)("p",null,"A Debian package (",(0,n.kt)("inlineCode",{parentName:"p"},".deb"),"). This package is used for Debian and Debian based\nLinux distributions."))}_.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55040],{15696:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>g,default:()=>O,frontMatter:()=>h,metadata:()=>k,toc:()=>v});var r=t(3905),i=t(14637),o=t(82945),a=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,b=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&u(e,t,n[t]);if(l)for(var t of l(n))d.call(n,t)&&u(e,t,n[t]);return e},m=(e,n)=>s(e,c(n)),f=(e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&d.call(e,r)&&(t[r]=e[r]);return t};const h={},g="GitHub",k={unversionedId:"contribute/github",id:"version-Tenzir v4.3/contribute/github",title:"GitHub",description:"This page documents workflows concerning developer-facing GitHub infrastructure.",source:"@site/versioned_docs/version-Tenzir v4.3/contribute/github.md",sourceDirName:"contribute",slug:"/contribute/github",permalink:"/Tenzir v4.3/contribute/github",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.3/contribute/github.md",tags:[],version:"Tenzir v4.3",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Notebooks",permalink:"/Tenzir v4.3/contribute/notebooks"},next:{title:"Architecture",permalink:"/Tenzir v4.3/architecture"}},y={},v=[{value:"Synchronize issue labels",id:"synchronize-issue-labels",level:2}],T={toc:v},z="wrapper";function O(e){var n=e,{components:t}=n,a=f(n,["components"]);return(0,r.kt)(z,m(b(b({},T),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",b({},{id:"github"}),"GitHub"),(0,r.kt)("p",null,"This page documents workflows concerning developer-facing GitHub infrastructure."),(0,r.kt)("h2",b({},{id:"synchronize-issue-labels"}),"Synchronize issue labels"),(0,r.kt)("p",null,"To ensure that ",(0,r.kt)("a",b({parentName:"p"},{href:"https://github.com/tenzir/tenzir/labels"}),"issue and pull request\nlabels")," are consistent within and\nacross several of our repositories, we use ",(0,r.kt)("a",b({parentName:"p"},{href:"https://github.com/Financial-Times/github-label-sync"}),"GitHub Label\nSync"),"."),(0,r.kt)("p",null,"To synchronize the labels, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-bash"}),"github-label-sync --access-token TOKEN --labels labels.yml REPO\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TOKEN")," is a personal GitHub Access Token and ",(0,r.kt)("inlineCode",{parentName:"p"},"REPO")," the GitHub repository,\ne.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir/tenzir"),". The labels configuration\n",(0,r.kt)("a",b({parentName:"p"},{href:"https://github.com/tenzir/tenzir/blob/main/.github/labels.yml"}),(0,r.kt)("inlineCode",{parentName:"a"},"labels.yml"))," is\npart of this repository and has the following contents:"),(0,r.kt)(i.Z,{language:"yaml",mdxType:"CodeBlock"},o.Z))}O.isMDXComponent=!0},82945:(e,n,t)=>{t.d(n,{Z:()=>r});const r="# This file contains the configuration for GitHub Label Sync.\n#\n# Usage:\n#\n#    github-label-sync --access-token TOKEN --labels labels.yaml REPO\n#\n# Where TOKEN is a GitHub Access Token and REPO the repository name to apply\n# this configuration file to, e.g., tenzir/tenzir.\n#\n# For details, see:\n# https://github.com/Financial-Times/github-label-sync\n\n# Status\n- name: blocked\n  color: dddddd\n  description: Blocked by an (external) issue\n# Type of work\n- name: bug\n  color: fbca04\n  description: Incorrect behavior\n- name: feature\n  color: fbca04\n  description: New functionality\n- name: improvement\n  color: fbca04\n  description: An incremental enhancement of an existing feature\n- name: maintenance\n  color: fbca04\n  description: Tasks for keeping up the infrastructure\n- name: performance\n  color: fbca04\n  description: Improvements or regressions of performance\n- name: refactoring\n  color: fbca04\n  description: Restructuring of existing code\n# Code base part\n- name: ci\n  color: 0366d6\n  description: Continuous integration and delivery\n- name: dependencies\n  color: 0366d6\n  description: Update of dependent software\n- name: docs\n  color: 0366d6\n  description: Documentation and blog\n- name: packaging\n  color: 0366d6\n  description: Relating to the build scaffold\n- name: rfc\n  color: 0366d6\n  description: A Request For Comments (RFC)\n# Functionality\n- name: app\n  color: d93f0b\n  description: Our app at app.tenzir.com\n- name: platform\n  color: d93f0b\n  description: The infra behind app.tenzir.com\n- name: engine\n  color: d93f0b\n  description: Core pipeline and storage engine\n- name: connector\n  color: d93f0b\n  description: Loader and saver\n- name: format\n  color: d93f0b\n  description: Parser and printer\n- name: operator\n  color: d93f0b\n  description: Source, transformation, and sink\n- name: language\n  color: d93f0b\n  description: Tenzir Query Language (TQL)\n- name: integration\n  color: d93f0b\n  description: Integration with third-party tools\n"}}]);
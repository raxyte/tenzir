"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2506],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>k});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(o),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return o?n.createElement(k,i(i({ref:t},u),{},{components:o})):n.createElement(k,i({ref:t},u))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},69477:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>f,contentTitle:()=>b,default:()=>v,frontMatter:()=>k,metadata:()=>h,toc:()=>g});var n=o(3905),a=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,o)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&u(e,o,t[o]);if(l)for(var o of l(t))s.call(t,o)&&u(e,o,t[o]);return e},d=(e,t)=>r(e,i(t)),m=(e,t)=>{var o={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(o[n]=e[n]);return o};const k={sidebar_position:6},b="Notebooks",h={unversionedId:"contribute/notebooks",id:"version-VAST v3.0/contribute/notebooks",title:"Notebooks",description:"We use Quarto notebooks as vehicle for self-contained",source:"@site/versioned_docs/version-VAST v3.0/contribute/notebooks.md",sourceDirName:"contribute",slug:"/contribute/notebooks",permalink:"/VAST v3.0/contribute/notebooks",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-VAST v3.0/contribute/notebooks.md",tags:[],version:"VAST v3.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Documentation",permalink:"/VAST v3.0/contribute/documentation"},next:{title:"Develop",permalink:"/VAST v3.0/develop/"}},f={},g=[{value:"Run the notebooks",id:"run-the-notebooks",level:2},{value:"Run within Docker",id:"run-within-docker",level:2},{value:"Add a notebook",id:"add-a-notebook",level:2},{value:"Create an example notebook",id:"create-an-example-notebook",level:3},{value:"Create a documentation page",id:"create-a-documentation-page",level:3},{value:"Create a blog post",id:"create-a-blog-post",level:3}],y={toc:g},N="wrapper";function v(e){var t=e,{components:o}=t,a=m(t,["components"]);return(0,n.kt)(N,d(c(c({},y),a),{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"notebooks"}),"Notebooks"),(0,n.kt)("p",null,"We use ",(0,n.kt)("a",c({parentName:"p"},{href:"https://quarto.org/"}),"Quarto notebooks")," as vehicle for self-contained\nguides that illustrate how to use VAST."),(0,n.kt)("p",null,"Quarto notebooks have the file extension ",(0,n.kt)("inlineCode",{parentName:"p"},".qmd")," and manifest in various places\nacross the repository:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"examples/notebooks"),": various example notebooks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"web/blog"),": blog posts written as notebook"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"web/docs"),": documnetation written as notebook")),(0,n.kt)("h2",c({},{id:"run-the-notebooks"}),"Run the notebooks"),(0,n.kt)("p",null,"We leverage Quarto as notebook frontend so that we can run multiple engines,\neach of which rely on different kernels. As we use a mix of Bash, Python, and R,\nyou need the following dependencies to run the notebooks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://quarto.org/docs/get-started/"}),"Quarto")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://python-poetry.org/"}),"Poetry")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.r-project.org/"}),"R"))),(0,n.kt)("p",null,"To render a notebook, run:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"quarto render notebook.qmd\n")),(0,n.kt)("p",null,"Since the ",(0,n.kt)("inlineCode",{parentName:"p"},"web")," directory is a Quarto\n",(0,n.kt)("a",c({parentName:"p"},{href:"https://quarto.org/docs/projects/quarto-projects.html"}),"project"),", it suffices\nthere to run ",(0,n.kt)("inlineCode",{parentName:"p"},"quarto render")," to generate all contained notebooks."),(0,n.kt)("h2",c({},{id:"run-within-docker"}),"Run within Docker"),(0,n.kt)("p",null,"We also provide a Docker container to enable a reproducible execution of\nnotebooks. The container builds on top of the VAST container and adds Quarto,\nincluding all Python and R dependencies. This makes it easy to demonstrate VAST\nfeatures within a Quarto notebook."),(0,n.kt)("p",null,"Other services can be added to the context of the Quarto notebook execution by\nextending the Docker Compose setup with ",(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/vast/tree/main/docker/"}),"extra\noverlays"),"."),(0,n.kt)("p",null,"The website build harness uses this Docker Compose environment to run Quarto\nnotebooks that represent more elaborate user guides or blog posts that. For\nexample, running ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn build")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"/web")," compiles the website only after having\nexecuted all notebooks via the Docker Compose environment. Similarly, the\n",(0,n.kt)("inlineCode",{parentName:"p"},"/examples/notebooks")," directory contains example notebooks that leverage this\nenvironment."),(0,n.kt)("p",null,"To get a shell in this Docker Compose environment, run the following in\n",(0,n.kt)("inlineCode",{parentName:"p"},"/examples/notebooks")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"/web"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"make docker TARGET=bash\n")),(0,n.kt)("h2",c({},{id:"add-a-notebook"}),"Add a notebook"),(0,n.kt)("p",null,"The Quarto syntax is a combinatiohn of\n",(0,n.kt)("a",c({parentName:"p"},{href:"https://quarto.org/docs/authoring/markdown-basics.html"}),"Markdown")," and supports\nexpressing computations in\n",(0,n.kt)("a",c({parentName:"p"},{href:"https://quarto.org/docs/computations/python.html"}),"Python"),",\n",(0,n.kt)("a",c({parentName:"p"},{href:"https://quarto.org/docs/computations/r.html"}),"R"),", and others. Various ",(0,n.kt)("a",c({parentName:"p"},{href:"https://quarto.org/docs/computations/execution-options.html"}),"execution\noptions"),"\nin the YAML frontmatter offer customization on how to run the code."),(0,n.kt)("p",null,"We chose Quarto as lingua franca for notebooks in this repository, because it\nrepresents a language-agnostic framework with an easy-to-use Markdown syntax."),(0,n.kt)("h3",c({},{id:"create-an-example-notebook"}),"Create an example notebook"),(0,n.kt)("p",null,"Adding an example notebook to the repository involves the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new directory in ",(0,n.kt)("inlineCode",{parentName:"p"},"examples/notebooks")," that includes your notebook.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add Python dependencies to ",(0,n.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," file for Poetry.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"quarto preview")," or other subcommands to work with your notebook."))),(0,n.kt)("h3",c({},{id:"create-a-documentation-page"}),"Create a documentation page"),(0,n.kt)("p",null,"You can use Quarto to write a VAST tutorial or guide in the form as a notebook.\nTake a look at the directory ",(0,n.kt)("inlineCode",{parentName:"p"},"/docs/try")," for examples."),(0,n.kt)("p",null,"Adding a new documentation page involves the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Browse in ",(0,n.kt)("inlineCode",{parentName:"p"},"web/docs")," to the location where you want to add a new page\n",(0,n.kt)("inlineCode",{parentName:"p"},"web/blog"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the directory of your choice, create a file ",(0,n.kt)("inlineCode",{parentName:"p"},"new-page.qmd"),". This is the\nblog post.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the frontmatter as usual to adjust ordering or perform cosmetic tweaks:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",c({parentName:"pre"},{className:"language-markdown"}),"---\nsidebar_position: 42\n---\n\n# My New Guide\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Write your notebook add Python dependencies into ",(0,n.kt)("inlineCode",{parentName:"p"},"web/pyproject.toml"),"\nand R depdencies into ",(0,n.kt)("inlineCode",{parentName:"p"},"web/DESCRIPTION"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn start")," and inspect your page locally."))),(0,n.kt)("h3",c({},{id:"create-a-blog-post"}),"Create a blog post"),(0,n.kt)("p",null,"Quarto makes it easy to write an entire blog post as a notebook. Take a look at\nthe directory ",(0,n.kt)("inlineCode",{parentName:"p"},"/web/blog/a-git-retrospective")," for an example."),(0,n.kt)("p",null,"Writing a new blog post involves the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new directory in ",(0,n.kt)("inlineCode",{parentName:"p"},"web/blog")," that represents your blog post slug,\ne.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"web/blog/my-blog-post"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In that directory, create a file ",(0,n.kt)("inlineCode",{parentName:"p"},"index.qmd"),". This is the blog post.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add a frontmatter with blog post meta data, e.g.,:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",c({parentName:"pre"},{className:"language-markdown"}),"---\ntitle: My New Blog Post\nauthors: mavam\ndate: 2042-01-01\ntags: [quarto, notebooks, engineering, open-source]\n---\n\n# My Blog Post\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Write your blog post and add Python dependencies into ",(0,n.kt)("inlineCode",{parentName:"p"},"web/pyproject.toml"),"\nand R depdencies into ",(0,n.kt)("inlineCode",{parentName:"p"},"web/DESCRIPTION"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn start")," and inspect the blog post locally."))))}v.isMDXComponent=!0}}]);
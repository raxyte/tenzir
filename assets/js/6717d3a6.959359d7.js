"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30052],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=s(t),g=a,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||l;return t?i.createElement(m,o(o({ref:n},u),{},{components:t})):i.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=g;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r[c]="string"==typeof e?e:a,o[1]=r;for(var s=2;s<l;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},67779:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>h,default:()=>N,frontMatter:()=>m,metadata:()=>f,toc:()=>y});var i=t(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&u(e,t,n[t]);if(r)for(var t of r(n))s.call(n,t)&&u(e,t,n[t]);return e},d=(e,n)=>l(e,o(n)),g=(e,n)=>{var t={};for(var i in e)p.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&r)for(var i of r(e))n.indexOf(i)<0&&s.call(e,i)&&(t[i]=e[i]);return t};const m={},h="Write a Plugin",f={unversionedId:"developer-guides/write-a-plugin",id:"version-Tenzir v4.4/developer-guides/write-a-plugin",title:"Write a Plugin",description:"Implementing a new plugin requires the following steps:",source:"@site/versioned_docs/version-Tenzir v4.4/developer-guides/write-a-plugin.md",sourceDirName:"developer-guides",slug:"/developer-guides/write-a-plugin",permalink:"/developer-guides/write-a-plugin",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.4/developer-guides/write-a-plugin.md",tags:[],version:"Tenzir v4.4",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Build the Docker image",permalink:"/developer-guides/build-the-docker-image"},next:{title:"Why Tenzir",permalink:"/why-tenzir"}},k={},y=[{value:"Setup the scaffolding",id:"setup-the-scaffolding",level:2},{value:"Choose a plugin type",id:"choose-a-plugin-type",level:2},{value:"Implement the plugin interface",id:"implement-the-plugin-interface",level:2},{value:"Process configuration options",id:"process-configuration-options",level:2},{value:"Compile the source code",id:"compile-the-source-code",level:2},{value:"Building alongside Tenzir",id:"building-alongside-tenzir",level:3},{value:"Building against an installed Tenzir",id:"building-against-an-installed-tenzir",level:3},{value:"Add unit and integration tests",id:"add-unit-and-integration-tests",level:2},{value:"Unit tests",id:"unit-tests",level:3},{value:"Integration tests",id:"integration-tests",level:3},{value:"Package it",id:"package-it",level:2}],b={toc:y},v="wrapper";function N(e){var n=e,{components:t}=n,a=g(n,["components"]);return(0,i.kt)(v,d(c(c({},b),a),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",c({},{id:"write-a-plugin"}),"Write a Plugin"),(0,i.kt)("p",null,"Implementing a new plugin requires the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#setup-the-scaffolding"}),"Setup the scaffolding")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#choose-a-plugin-type"}),"Choose a plugin type")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#implement-the-plugin-interface"}),"Implement the plugin interface")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#process-configuration-options"}),"Process configuration options")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#compile-the-source-code"}),"Compile the source code")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#add-unit-and-integration-tests"}),"Add unit and integration tests")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#package-it"}),"Package it"))),(0,i.kt)("p",null,"Next, we'll discuss each step in more detail."),(0,i.kt)("h2",c({},{id:"setup-the-scaffolding"}),"Setup the scaffolding"),(0,i.kt)("p",null,"The scaffolding of a plugin includes the CMake glue that makes it possible to\nuse as static or dynamic plugin."),(0,i.kt)("p",null,"Pass ",(0,i.kt)("inlineCode",{parentName:"p"},"-DTENZIR_ENABLE_STATIC_PLUGINS:BOOL=ON")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"cmake")," to build plugins\nalongside Tenzir as static plugins. This option is always on for static binary\nbuilds."),(0,i.kt)("p",null,"Tenzir ships with an example plugin that showcases how a typical scaffold looks\nlike. Have a look at the the ",(0,i.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/tenzir/tree/main/examples/plugins"}),"example\nplugins")," directory,\nand an ",(0,i.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/tenzir/blob/main/examples/plugins/analyzer/CMakeLists.txt"}),"example ",(0,i.kt)("inlineCode",{parentName:"a"},"CMakeLists.txt")," file for\nplugins"),"."),(0,i.kt)("p",null,"We highly urge calling the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"TenzirRegisterPlugin")," CMake in your plugin's\n",(0,i.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt")," file instead of handrolling your CMake build scaffolding\ncode. This ensures that your plugin always uses the recommended defaults.\nNon-static installations of Tenzir contain the ",(0,i.kt)("inlineCode",{parentName:"p"},"TenzirRegisterPlugin.cmake"),"\nmodules."),(0,i.kt)("p",null,"The typical structure of a plugin directory includes the following\nfiles/directories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"README.md"),": An overview of the plugin and how to use it.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md"),": A trail of user-facing changes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"schema/"),": new schemas that ship with this plugin.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"<plugin>.yaml.example"),": the configuration knobs of the plugin. We comment out\nall options by default so that the file serves as reference. Users can\nuncomment specific settings they would like to adapt."),(0,i.kt)("p",{parentName:"li"},"The CMake build scaffolding installs all of the above files/directories, if\npresent."))),(0,i.kt)("h2",c({},{id:"choose-a-plugin-type"}),"Choose a plugin type"),(0,i.kt)("p",null,"Tenzir offers ",(0,i.kt)("a",c({parentName:"p"},{href:"/architecture/plugins#plugin-types"}),"a variety of customization\npoints"),", each of which defines its\nown API by inheriting from the plugin base class ",(0,i.kt)("inlineCode",{parentName:"p"},"tenzir::plugin"),". When writing\na new plugin, you can choose a subset of available types by inheriting from the\nrespective plugin classes."),(0,i.kt)("admonition",c({},{title:"Dreaded Diamond",type:"caution"}),(0,i.kt)("p",{parentName:"admonition"},"To avoid common issues with multiple inheritance, all intermediate plugin\nclasses that inherit from ",(0,i.kt)("inlineCode",{parentName:"p"},"tenzir::plugin")," use ",(0,i.kt)("em",{parentName:"p"},"virtual inheritance")," to avoid\nissues with the ",(0,i.kt)("a",c({parentName:"p"},{href:"https://isocpp.org/wiki/faq/multiple-inheritance#mi-diamond"}),"dreaded\ndiamond"),".")),(0,i.kt)("p",null,"Please also consult the ",(0,i.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/tenzir/tree/main/examples/plugins/analyzer"}),"example-analyzer\nplugin"),"\nfor a complete end-to-end code example."),(0,i.kt)("h2",c({},{id:"implement-the-plugin-interface"}),"Implement the plugin interface"),(0,i.kt)("p",null,"After having the necessary CMake in place, you can now derive from one or more\nplugin base classes to define your own plugin. Based on the chosen plugin\ntypes, you must override one or more virtual functions with an implementation\nof your own."),(0,i.kt)("p",null,"The basic anatomy of a plugin class looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"class example_plugin final : public virtual analyzer_plugin,\n                             public virtual command_plugin {\npublic:\n  /// Loading logic.\n  example_plugin();\n\n  /// Teardown logic.\n  ~example_plugin() override;\n\n  /// Initializes a plugin with its respective entries from the YAML config\n  /// file, i.e., `plugin.<NAME>`.\n  /// @param plugin_config The relevant subsection of the configuration.\n  /// @param global_config The entire Tenzir configuration for potential access\n  /// to global options.\n  caf::error initialize(const record& plugin_config,\n                        const record& global_config) override;\n\n  /// Returns the unique name of the plugin.\n  std::string name() const override;\n\n  // TODO: override pure virtual functions from the base classes.\n  // ...\n};\n")),(0,i.kt)("p",null,"The plugin constructor should only perform minimal actions to instantiate a\nwell-defined plugin instance. In particular, it should not throw or perform any\noperations that may potentially fail. For the actual plugin ramp up, please use\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize")," function that processes the user configuration. The purpose of\nthe destructor is to free any used resources owned by the plugin."),(0,i.kt)("p",null,"Each plugin must have a unique name. This returned string should consicely\nidentify the plugin internally."),(0,i.kt)("p",null,"Please consult the documentation specific to each plugin type above to figure\nout what virtual function need overriding. In the above example, we have a\n",(0,i.kt)("inlineCode",{parentName:"p"},"command_plugin")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"analyzer_plugin"),". This requires implementing the\nfollowing two interfaces:"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"analyzer_plugin_actor make_analyzer(\n  node_actor::stateful_pointer<node_state> node) const override;\n\nstd::pair<std::unique_ptr<command>, command::factory>\nmake_command() const override;\n")),(0,i.kt)("p",null,"After completing the implementation, you must now register the plugin. For\nexample, to register the ",(0,i.kt)("inlineCode",{parentName:"p"},"example")," plugin, include the following line after the\nplugin class definition:"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"// This line must not be in a namespace.\nTENZIR_REGISTER_PLUGIN(tenzir::plugins::example_plugin)\n")),(0,i.kt)("admonition",c({},{title:"Registering Type IDs",type:"tip"}),(0,i.kt)("p",{parentName:"admonition"},"The example plugin also shows how to register additional type IDs with the actor\nsystem configuration, which is a requirement for sending custom types from the\nplugin between actors. For more information, please refer to the CAF\ndocumentation page ",(0,i.kt)("a",c({parentName:"p"},{href:"https://actor-framework.readthedocs.io/en/stable/ConfiguringActorApplications.html#adding-custom-message-types"}),"Configuring Actor Applications: Adding Custom Message\nTypes"),".")),(0,i.kt)("h2",c({},{id:"process-configuration-options"}),"Process configuration options"),(0,i.kt)("p",null,"To configure a plugin at runtime, Tenzir first looks whether the YAML\nconfiguration contains a key with the plugin name under the top-level key\n",(0,i.kt)("inlineCode",{parentName:"p"},"plugins"),". Consider our example plugin with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"plugins:\n  example:\n    option: 42\n")),(0,i.kt)("p",null,"Here, the plugin receives the record ",(0,i.kt)("inlineCode",{parentName:"p"},"{option: 42}")," at load time. A plugin can\nprocess the configuration snippet by overriding the following function of\n",(0,i.kt)("inlineCode",{parentName:"p"},"tenzir::plugin"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{}),"caf::error initialize(const record& plugin_config,\n                      const record& global_config) override;\n")),(0,i.kt)("p",null,"Tenzir expects the plugin to be fully operational after calling ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize"),".\nSubsequent calls to the implemented customization points must have a\nwell-defined behavior."),(0,i.kt)("h2",c({},{id:"compile-the-source-code"}),"Compile the source code"),(0,i.kt)("h3",c({},{id:"building-alongside-tenzir"}),"Building alongside Tenzir"),(0,i.kt)("p",null,"When configuring the Tenzir build, you need to tell CMake the path to the plugin\nsource directory. The CMake variable ",(0,i.kt)("inlineCode",{parentName:"p"},"TENZIR_PLUGINS")," holds a comma-separated\nlist of paths to plugin directories."),(0,i.kt)("p",null,"To test that Tenzir loads the plugin properly, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"tenzir\n--plugins=example version")," and look into the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins"),". A key-value pair with\nyour plugin name and version should exist in the output."),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("a",c({parentName:"p"},{href:"/command-line#load-plugins"}),"plugin loading")," section of\nthe documentation to find out how to explicitly de-/activate plugins."),(0,i.kt)("h3",c({},{id:"building-against-an-installed-tenzir"}),"Building against an installed Tenzir"),(0,i.kt)("p",null,"It is also possible to build plugins against an installed Tenzir. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"TenzirRegisterPlugin")," CMake function contains the required scaffolding to set\nup ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"integration")," targets that mimic Tenzir's targets. Here's how you\ncan use it:"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# Configure the build. Requires Tenzir to be installed in the CMake Module Path.\ncmake -S path/to/plugin -B build\n# Optionally you can manually specify a non-standard Tenzir install root:\n#   TENZIR_DIR=/opt/tenzir cmake -S path/to/plugin -B build\ncmake --build build\n# Run plugin-specific unit tests.\nctest --test-dir build\n# Install to where Tenzir is also installed.\ncmake --install build\n# Optionally you can manually specify a non-standard Tenzir install root:\n#   cmake --install build --prefix /opt/tenzir\n# Run plugin-specific integration tests against the installed Tenzir.\ncmake --build build --target integration\n")),(0,i.kt)("h2",c({},{id:"add-unit-and-integration-tests"}),"Add unit and integration tests"),(0,i.kt)("p",null,"Tenzir comes with unit and integration tests. So does a robust plugin\nimplementation. We now look at how you can hook into the testing frameworks."),(0,i.kt)("h3",c({},{id:"unit-tests"}),"Unit tests"),(0,i.kt)("p",null,"Every plugin ideally comes with unit tests. The ",(0,i.kt)("inlineCode",{parentName:"p"},"TenzirRegisterPlugin")," CMake\nfunction takes an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST_SOURCES")," argument that creates a test binary\n",(0,i.kt)("inlineCode",{parentName:"p"},"<plugin>-test")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"<plugin>")," being the plugin name. The test binary links\nagainst the ",(0,i.kt)("inlineCode",{parentName:"p"},"tenzir::test")," target. ou can find the test binary in ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," within\nyour build directory."),(0,i.kt)("p",null,"To execute registered unit tests, you can also simply run the test binary\n",(0,i.kt)("inlineCode",{parentName:"p"},"<plugin>-test"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"<plugin>")," is the name of your plugin. The build target\n",(0,i.kt)("inlineCode",{parentName:"p"},"test")," sequentially runs tests for all plugins and Tenzir itself."),(0,i.kt)("h3",c({},{id:"integration-tests"}),"Integration tests"),(0,i.kt)("p",null,"Every plugin ideally comes with integration tests as well. Our convention is\nthat integration tests reside in an ",(0,i.kt)("inlineCode",{parentName:"p"},"integration")," subdirectory. If you add a\nfile called ",(0,i.kt)("inlineCode",{parentName:"p"},"integration/tests.yaml"),", Tenzir runs them alongside the regular\nintegration tests. Please refer to the example plugin directory for more\ndetails."),(0,i.kt)("p",null,"Note that plugins may affect the overall behavior of Tenzir. Therefore we\nrecommend to to run all integrations regularly by running the build target\n",(0,i.kt)("inlineCode",{parentName:"p"},"integration"),"."),(0,i.kt)("p",null,"To execute plugin-specific integration tests only, run the build target\n",(0,i.kt)("inlineCode",{parentName:"p"},"<plugin>-integration"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"<plugin>")," is the name of your plugin."),(0,i.kt)("h2",c({},{id:"package-it"}),"Package it"),(0,i.kt)("p",null,"If you plan to publish your plugin, you may want to create a GitHub repository.\nPlease let us know if you do so, we can then link to community plugins from the\ndocumentation."),(0,i.kt)("admonition",c({},{title:"Contribute Upstream",type:"tip"}),(0,i.kt)("p",{parentName:"admonition"},"If you think your plugin provides key functionality beneficial to all Tenzir\nusers, feel free to ",(0,i.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/tenzir/pulls"}),"submit a pull\nrequest")," to the main repository. But\nplease consider swinging by our ",(0,i.kt)("a",c({parentName:"p"},{href:"/discord"}),"community chat")," or\nstarting a ",(0,i.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/tenzir/discussions"}),"GitHub Discussion")," to\nensure that your contribution becomes a fruitful addition. \ud83d\ude4f")))}N.isMDXComponent=!0}}]);
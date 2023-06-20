"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),g=a,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||o;return n?i.createElement(m,l(l({ref:t},u),{},{components:n})):i.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:a,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},91979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>N,frontMatter:()=>m,metadata:()=>f,toc:()=>y});var i=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(r)for(var n of r(t))p.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>o(e,l(t)),g=(e,t)=>{var n={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&r)for(var i of r(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n};const m={},h="Write a Plugin",f={unversionedId:"develop/guides/write-a-plugin",id:"version-VAST v3.1/develop/guides/write-a-plugin",title:"Write a Plugin",description:"Implementing a new plugin requires the following steps:",source:"@site/versioned_docs/version-VAST v3.1/develop/guides/write-a-plugin.md",sourceDirName:"develop/guides",slug:"/develop/guides/write-a-plugin",permalink:"/develop/guides/write-a-plugin",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-VAST v3.1/develop/guides/write-a-plugin.md",tags:[],version:"VAST v3.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Guides",permalink:"/develop/guides/"}},k={},y=[{value:"Setup the scaffolding",id:"setup-the-scaffolding",level:2},{value:"Choose a plugin type",id:"choose-a-plugin-type",level:2},{value:"Implement the plugin interface",id:"implement-the-plugin-interface",level:2},{value:"Process configuration options",id:"process-configuration-options",level:2},{value:"Compile the source code",id:"compile-the-source-code",level:2},{value:"Building alongside VAST",id:"building-alongside-vast",level:3},{value:"Building against an installed VAST",id:"building-against-an-installed-vast",level:3},{value:"Add unit and integration tests",id:"add-unit-and-integration-tests",level:2},{value:"Unit tests",id:"unit-tests",level:3},{value:"Integration tests",id:"integration-tests",level:3},{value:"Package it",id:"package-it",level:2}],v={toc:y},b="wrapper";function N(e){var t=e,{components:n}=t,a=g(t,["components"]);return(0,i.kt)(b,d(c(c({},v),a),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",c({},{id:"write-a-plugin"}),"Write a Plugin"),(0,i.kt)("p",null,"Implementing a new plugin requires the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#setup-the-scaffolding"}),"Setup the scaffolding")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#choose-a-plugin-type"}),"Choose a plugin type")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#implement-the-plugin-interface"}),"Implement the plugin interface")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#process-configuration-options"}),"Process configuration options")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#compile-the-source-code"}),"Compile the source code")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#add-unit-and-integration-tests"}),"Add unit and integration tests")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",c({parentName:"li"},{href:"#package-it"}),"Package it"))),(0,i.kt)("p",null,"Next, we'll discuss each step in more detail."),(0,i.kt)("h2",c({},{id:"setup-the-scaffolding"}),"Setup the scaffolding"),(0,i.kt)("p",null,"The scaffolding of a plugin includes the CMake glue that makes it possible to\nuse as static or dynamic plugin."),(0,i.kt)("p",null,"Pass ",(0,i.kt)("inlineCode",{parentName:"p"},"-DVAST_ENABLE_STATIC_PLUGINS:BOOL=ON")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"cmake")," to build plugins\nalongside VAST as static plugins. This option is always on for static binary\nbuilds."),(0,i.kt)("p",null,"VAST ships with an example plugin that showcases how a typical scaffold looks\nlike. Have a look at the the ",(0,i.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/vast/tree/main/examples/plugins"}),"example\nplugins")," directory,\nand an ",(0,i.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/vast/blob/main/examples/plugins/analyzer/CMakeLists.txt"}),"example ",(0,i.kt)("inlineCode",{parentName:"a"},"CMakeLists.txt")," file for\nplugins"),"."),(0,i.kt)("p",null,"We highly urge calling the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"VASTRegisterPlugin")," CMake in your plugin's\n",(0,i.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt")," file instead of handrolling your CMake build scaffolding\ncode. This ensures that your plugin always uses the recommended defaults.\nNon-static installations of VAST contain the ",(0,i.kt)("inlineCode",{parentName:"p"},"VASTRegisterPlugin.cmake")," modules."),(0,i.kt)("p",null,"The typical structure of a plugin directory includes the following\nfiles/directories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"README.md"),": An overview of the plugin and how to use it.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md"),": A trail of user-facing changes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"schema/"),": new schemas that ship with this plugin.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"<plugin>.yaml.example"),": the configuration knobs of the plugin. We comment out\nall options by default so that the file serves as reference. Users can\nuncomment specific settings they would like to adapt."),(0,i.kt)("p",{parentName:"li"},"The CMake build scaffolding installs all of the above files/directories, if\npresent."))),(0,i.kt)("h2",c({},{id:"choose-a-plugin-type"}),"Choose a plugin type"),(0,i.kt)("p",null,"VAST offers ",(0,i.kt)("a",c({parentName:"p"},{href:"/develop/architecture/plugins#plugin-types"}),"a variety of customization\npoints"),", each of which defines its own\nAPI by inheriting from the plugin base class ",(0,i.kt)("inlineCode",{parentName:"p"},"vast::plugin"),". When writing a new\nplugin, you can choose a subset of available types by inheriting from the\nrespective plugin classes."),(0,i.kt)("admonition",c({},{title:"Dreaded Diamond",type:"caution"}),(0,i.kt)("p",{parentName:"admonition"},"To avoid common issues with multiple inheritance, all intermediate plugin\nclasses that inherit from ",(0,i.kt)("inlineCode",{parentName:"p"},"vast::plugin")," use ",(0,i.kt)("em",{parentName:"p"},"virtual inheritance")," to avoid\nissues with the ",(0,i.kt)("a",c({parentName:"p"},{href:"https://isocpp.org/wiki/faq/multiple-inheritance#mi-diamond"}),"dreaded\ndiamond"),".")),(0,i.kt)("p",null,"Please also consult the ",(0,i.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/vast/tree/main/examples/plugins/analyzer"}),"example-analyzer\nplugin"),"\nfor a complete end-to-end code example."),(0,i.kt)("h2",c({},{id:"implement-the-plugin-interface"}),"Implement the plugin interface"),(0,i.kt)("p",null,"After having the necessary CMake in place, you can now derive from one or more\nplugin base classes to define your own plugin. Based on the chosen plugin\ntypes, you must override one or more virtual functions with an implementation\nof your own."),(0,i.kt)("p",null,"The basic anatomy of a plugin class looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"class example_plugin final : public virtual analyzer_plugin,\n                             public virtual command_plugin {\npublic:\n  /// Loading logic.\n  example_plugin();\n\n  /// Teardown logic.\n  ~example_plugin() override;\n\n  /// Initializes a plugin with its respective entries from the YAML config\n  /// file, i.e., `plugin.<NAME>`.\n  /// @param plugin_config The relevant subsection of the configuration.\n  /// @param global_config The entire VAST configuration for potential access to\n  /// global options.\n  caf::error initialize(const record& plugin_config,\n                        const record& global_config) override;\n\n  /// Returns the unique name of the plugin.\n  std::string name() const override;\n\n  // TODO: override pure virtual functions from the base classes.\n  // ...\n};\n")),(0,i.kt)("p",null,"The plugin constructor should only perform minimal actions to instantiate a\nwell-defined plugin instance. In particular, it should not throw or perform any\noperations that may potentially fail. For the actual plugin ramp up, please use\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize")," function that processes the user configuration. The purpose of\nthe destructor is to free any used resources owned by the plugin."),(0,i.kt)("p",null,"Each plugin must have a unique name. This returned string should consicely\nidentify the plugin internally."),(0,i.kt)("p",null,"Please consult the documentation specific to each plugin type above to figure\nout what virtual function need overriding. In the above example, we have a\n",(0,i.kt)("inlineCode",{parentName:"p"},"command_plugin")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"analyzer_plugin"),". This requires implementing the\nfollowing two interfaces:"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"analyzer_plugin_actor make_analyzer(\n  node_actor::stateful_pointer<node_state> node) const override;\n\nstd::pair<std::unique_ptr<command>, command::factory>\nmake_command() const override;\n")),(0,i.kt)("p",null,"After completing the implementation, you must now register the plugin. For\nexample, to register the ",(0,i.kt)("inlineCode",{parentName:"p"},"example")," plugin, include the following line after the\nplugin class definition:"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-cpp"}),"// This line must not be in a namespace.\nVAST_REGISTER_PLUGIN(vast::plugins::example_plugin)\n")),(0,i.kt)("admonition",c({},{title:"Registering Type IDs",type:"tip"}),(0,i.kt)("p",{parentName:"admonition"},"The example plugin also shows how to register additional type IDs with the actor\nsystem configuration, which is a requirement for sending custom types from the\nplugin between actors. For more information, please refer to the CAF\ndocumentation page ",(0,i.kt)("a",c({parentName:"p"},{href:"https://actor-framework.readthedocs.io/en/stable/ConfiguringActorApplications.html#adding-custom-message-types"}),"Configuring Actor Applications: Adding Custom Message\nTypes"),".")),(0,i.kt)("h2",c({},{id:"process-configuration-options"}),"Process configuration options"),(0,i.kt)("p",null,"To configure a plugin at runtime, VAST first looks whether the YAML\nconfiguration contains a key with the plugin name under the top-level key\n",(0,i.kt)("inlineCode",{parentName:"p"},"plugins"),". Consider our example plugin with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"plugins:\n  example:\n    option: 42\n")),(0,i.kt)("p",null,"Here, the plugin receives the record ",(0,i.kt)("inlineCode",{parentName:"p"},"{option: 42}")," at load time. A plugin can\nprocess the configuration snippet by overriding the following function of\n",(0,i.kt)("inlineCode",{parentName:"p"},"vast::plugin"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{}),"caf::error initialize(const record& plugin_config,\n                      const record& global_config) override;\n")),(0,i.kt)("p",null,"VAST expects the plugin to be fully operational after calling ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize"),".\nSubsequent calls to the implemented customization points must have a\nwell-defined behavior."),(0,i.kt)("h2",c({},{id:"compile-the-source-code"}),"Compile the source code"),(0,i.kt)("h3",c({},{id:"building-alongside-vast"}),"Building alongside VAST"),(0,i.kt)("p",null,"When configuring the VAST build, you need to tell CMake the path to the plugin\nsource directory. The CMake variable ",(0,i.kt)("inlineCode",{parentName:"p"},"VAST_PLUGINS")," holds a comma-separated\nlist of paths to plugin directories."),(0,i.kt)("p",null,"To test that VAST loads the plugin properly, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"vast\n--plugins=example version")," and look into the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins"),". A key-value pair with\nyour plugin name and version should exist in the output."),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("a",c({parentName:"p"},{href:"/setup/configure#load-plugins"}),"plugin loading")," section of\nthe documentation to find out how to explicitly de-/activate plugins."),(0,i.kt)("h3",c({},{id:"building-against-an-installed-vast"}),"Building against an installed VAST"),(0,i.kt)("p",null,"It is also possible to build plugins against an installed VAST. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"VASTRegisterPlugin")," CMake function contains the required scaffolding to set up\n",(0,i.kt)("inlineCode",{parentName:"p"},"test")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"integration")," targets that mimic VAST's targets. Here's how you can\nuse it:"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# Configure the build. Requires VAST to be installed in the CMake Module Path.\ncmake -S path/to/plugin -B build\n# Optionally you can manually specify a non-standard VAST install root:\n#   VAST_DIR=/opt/vast cmake -S path/to/plugin -B build\ncmake --build build\n# Run plugin-specific unit tests.\nctest --test-dir build\n# Install to where VAST is also installed.\ncmake --install build\n# Optionally you can manually specify a non-standard VAST install root:\n#   cmake --install build --prefix /opt/vast\n# Run plugin-specific integration tests against the installed VAST.\ncmake --build build --target integration\n")),(0,i.kt)("h2",c({},{id:"add-unit-and-integration-tests"}),"Add unit and integration tests"),(0,i.kt)("p",null,"VAST comes with unit and integration tests. So does a robust plugin\nimplementation. We now look at how you can hook into the testing frameworks."),(0,i.kt)("h3",c({},{id:"unit-tests"}),"Unit tests"),(0,i.kt)("p",null,"Every plugin ideally comes with unit tests. The ",(0,i.kt)("inlineCode",{parentName:"p"},"VASTRegisterPlugin")," CMake\nfunction takes an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST_SOURCES")," argument that creates a test binary\n",(0,i.kt)("inlineCode",{parentName:"p"},"<plugin>-test")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"<plugin>")," being the plugin name. The test binary links\nagainst the ",(0,i.kt)("inlineCode",{parentName:"p"},"vast::test")," target. ou can find the test binary in ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," within\nyour build directory."),(0,i.kt)("p",null,"To execute registered unit tests, you can also simply run the test binary\n",(0,i.kt)("inlineCode",{parentName:"p"},"<plugin>-test"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"<plugin>")," is the name of your plugin. The build target\n",(0,i.kt)("inlineCode",{parentName:"p"},"test")," sequentially runs tests for all plugins and VAST itself."),(0,i.kt)("h3",c({},{id:"integration-tests"}),"Integration tests"),(0,i.kt)("p",null,"Every plugin ideally comes with integration tests as well. Our convention is\nthat integration tests reside in an ",(0,i.kt)("inlineCode",{parentName:"p"},"integration")," subdirectory. If you add a\nfile called ",(0,i.kt)("inlineCode",{parentName:"p"},"integration/tests.yaml"),", VAST runs them alongside the regular\nintegration tests. Please refer to the example plugin directory for more\ndetails."),(0,i.kt)("p",null,"Note that plugins may affect the overall behavior of VAST. Therefore we\nrecommend to to run all integrations regularly by running the build target\n",(0,i.kt)("inlineCode",{parentName:"p"},"integration"),"."),(0,i.kt)("p",null,"To execute plugin-specific integration tests only, run the build target\n",(0,i.kt)("inlineCode",{parentName:"p"},"<plugin>-integration"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"<plugin>")," is the name of your plugin."),(0,i.kt)("h2",c({},{id:"package-it"}),"Package it"),(0,i.kt)("p",null,"If you plan to publish your plugin, you may want to create a GitHub repository.\nPlease let us know if you do so, we can then link to community plugins from the\ndocumentation."),(0,i.kt)("admonition",c({},{title:"Contribute Upstream",type:"tip"}),(0,i.kt)("p",{parentName:"admonition"},"If you think your plugin provides key functionality beneficial to all VAST\nusers, feel free to ",(0,i.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/vast/pulls"}),"submit a pull\nrequest")," to the main repository. But\nplease consider swinging by our ",(0,i.kt)("a",c({parentName:"p"},{href:"/discord"}),"community chat")," or\nstarting a ",(0,i.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/vast/discussions"}),"GitHub Discussion")," to\nensure that your contribution becomes a fruitful addition. \ud83d\ude4f")))}N.isMDXComponent=!0}}]);
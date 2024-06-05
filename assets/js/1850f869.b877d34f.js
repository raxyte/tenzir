"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||a;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>N,frontMatter:()=>m,metadata:()=>v,toc:()=>g});var i=n(3905),r=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e},h=(e,t)=>a(e,o(t)),u=(e,t)=>{var n={};for(var i in e)l.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&s)for(var i of s(e))t.indexOf(i)<0&&c.call(e,i)&&(n[i]=e[i]);return n};const m={sidebar_custom_props:{connector:{saver:!0}}},f="email",v={unversionedId:"connectors/email",id:"version-v4.15/connectors/email",title:"email",description:"Emails pipeline data through a SMTP server.",source:"@site/versioned_docs/version-v4.15/connectors/email.md",sourceDirName:"connectors",slug:"/connectors/email",permalink:"/v4.15/connectors/email",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.15/connectors/email.md",tags:[],version:"v4.15",frontMatter:{sidebar_custom_props:{connector:{saver:!0}}},sidebar:"docsSidebar",previous:{title:"directory",permalink:"/v4.15/connectors/directory"},next:{title:"file",permalink:"/v4.15/connectors/file"}},k={},g=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;recipient&gt;</code>",id:"recipient",level:3},{value:"<code>-e|--endpoint</code>",id:"-e--endpoint",level:3},{value:"<code>-f|--from &lt;email&gt;</code>",id:"-f--from-email",level:3},{value:"<code>-s|--subject &lt;string&gt;</code>",id:"-s--subject-string",level:3},{value:"<code>-u|--username &lt;string&gt;</code>",id:"-u--username-string",level:3},{value:"<code>-p|--password &lt;string&gt;</code>",id:"-p--password-string",level:3},{value:"<code>-i|--authzid &lt;string&gt;</code>",id:"-i--authzid-string",level:3},{value:"<code>-a|--authorization &lt;string&gt;</code>",id:"-a--authorization-string",level:3},{value:"<code>-P|--skip-peer-verification</code>",id:"-p--skip-peer-verification",level:3},{value:"<code>-H|--skip-hostname-verification</code>",id:"-h--skip-hostname-verification",level:3},{value:"<code>-m|--mime</code>",id:"-m--mime",level:3},{value:"<code>-v|--verbose</code>",id:"-v--verbose",level:3},{value:"Examples",id:"examples",level:2}],y={toc:g},b="wrapper";function N(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,i.kt)(b,h(d(d({},y),r),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",d({},{id:"email"}),"email"),(0,i.kt)("p",null,"Emails pipeline data through a SMTP server."),(0,i.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{}),"email [-e|--endpoint] [-f|--from <email>] [-s|--subject <string>]\n      [-u|--username <string>] [-p|--password <string>]\n      [-i|--authzid <string>] [-a|--authorization <string>]\n      [-P|--skip-peer-verification] [-H|--skip-hostname-verification]\n      [-m|--mime] [-v|--verbose]\n      <recipient>\n")),(0,i.kt)("h2",d({},{id:"description"}),"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," saver establish a SMTP(S) connection to a mail server and sends\nbytes as email body."),(0,i.kt)("p",null,"The default printer for the ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," saver is ",(0,i.kt)("a",d({parentName:"p"},{href:"/v4.15/formats/json"}),(0,i.kt)("inlineCode",{parentName:"a"},"json")),"."),(0,i.kt)("h3",d({},{id:"recipient"}),(0,i.kt)("inlineCode",{parentName:"h3"},"<recipient>")),(0,i.kt)("p",null,"The recipient of the mail."),(0,i.kt)("p",null,"The expected format is either ",(0,i.kt)("inlineCode",{parentName:"p"},"Name <user@example.org>")," with the email in angle\nbrackets, or a plain email adress, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"user@example.org"),"."),(0,i.kt)("h3",d({},{id:"-e--endpoint"}),(0,i.kt)("inlineCode",{parentName:"h3"},"-e|--endpoint")),(0,i.kt)("p",null,"The endpoint of the mail server."),(0,i.kt)("p",null,"To choose between SMTP and SMTPS, provide a URL with with the corresponding\nscheme. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"smtp://127.0.0.1:25")," will establish an unencrypted\nconnection, whereas ",(0,i.kt)("inlineCode",{parentName:"p"},"smtps://127.0.0.1:25")," an encrypted one. If you specify a\nserver without a schema, the protocol defaults to SMTPS."),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"smtp://localhost:25"),"."),(0,i.kt)("h3",d({},{id:"-f--from-email"}),(0,i.kt)("inlineCode",{parentName:"h3"},"-f|--from <email>")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"From")," header."),(0,i.kt)("p",null,"If you do not specify this parameter, an empty address is sent to the SMTP\nserver which might cause the email to be rejected."),(0,i.kt)("h3",d({},{id:"-s--subject-string"}),(0,i.kt)("inlineCode",{parentName:"h3"},"-s|--subject <string>")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Subject")," header."),(0,i.kt)("h3",d({},{id:"-u--username-string"}),(0,i.kt)("inlineCode",{parentName:"h3"},"-u|--username <string>")),(0,i.kt)("p",null,"The username in an authenticated SMTP connection."),(0,i.kt)("h3",d({},{id:"-p--password-string"}),(0,i.kt)("inlineCode",{parentName:"h3"},"-p|--password <string>")),(0,i.kt)("p",null,"The password in an authenticated SMTP connection."),(0,i.kt)("h3",d({},{id:"-i--authzid-string"}),(0,i.kt)("inlineCode",{parentName:"h3"},"-i|--authzid <string>")),(0,i.kt)("p",null,"The authorization identity in an authenticated SMTP connection."),(0,i.kt)("p",null,"This option is only applicable to the PLAIN SASL authentication mechanism where\nit is optional. When not specified only the authentication identity (",(0,i.kt)("inlineCode",{parentName:"p"},"authcid"),")\nas specified by the username is sent to the server, along with the password. The\nserver derives an ",(0,i.kt)("inlineCode",{parentName:"p"},"authzid")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"authcid")," when not provided, which it then\nuses internally. When the ",(0,i.kt)("inlineCode",{parentName:"p"},"authzid")," is specified it can be used to access\nanother user's inbox, that the user has been granted access to, or a shared\nmailbox."),(0,i.kt)("h3",d({},{id:"-a--authorization-string"}),(0,i.kt)("inlineCode",{parentName:"h3"},"-a|--authorization <string>")),(0,i.kt)("p",null,"The authorization options for an authenticated SMTP connection."),(0,i.kt)("p",null,"This login option defines the preferred authentication mechanism, e.g.,\n",(0,i.kt)("inlineCode",{parentName:"p"},"AUTH=PLAIN"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AUTH=LOGIN"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"AUTH=*"),"."),(0,i.kt)("h3",d({},{id:"-p--skip-peer-verification"}),(0,i.kt)("inlineCode",{parentName:"h3"},"-P|--skip-peer-verification")),(0,i.kt)("p",null,"Skips certificate verification."),(0,i.kt)("p",null,"By default, an SMTPS connection verifies the authenticity of the peer's\ncertificate. During connection negotiation, the server sends a certificate\nindicating its identity. We verify whether the certificate is authentic,\ni.e., that you can trust that the server is who the certificate says it is."),(0,i.kt)("p",null,"Providing this flag disables loading of the CA certificates and verification of\nthe peer certificate."),(0,i.kt)("h3",d({},{id:"-h--skip-hostname-verification"}),(0,i.kt)("inlineCode",{parentName:"h3"},"-H|--skip-hostname-verification")),(0,i.kt)("p",null,"Ignores verification of the server name in the certificate."),(0,i.kt)("p",null,"When negotiating TLS and SSL connections, the server sends a certificate\nindicating its identity. By default, that certificate must indicate that the\nserver is the server to which you meant to connect, or the connection fails.\nThat is, the server has to have the same name in the certificate as is in the\nURL you operate against. We consider the server the intended one when the\n",(0,i.kt)("em",{parentName:"p"},"Common Name")," field or a ",(0,i.kt)("em",{parentName:"p"},"Subject Alternate Name")," field in the certificate\nmatches the hostname in the URL."),(0,i.kt)("p",null,"Providing this flag skips this check, but it makes the connection insecure."),(0,i.kt)("h3",d({},{id:"-m--mime"}),(0,i.kt)("inlineCode",{parentName:"h3"},"-m|--mime")),(0,i.kt)("p",null,"Wraps the chunk into a MIME part."),(0,i.kt)("p",null,"The saver takes the uses the metadata of the byte chunk for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type"),"\nMIME header."),(0,i.kt)("h3",d({},{id:"-v--verbose"}),(0,i.kt)("inlineCode",{parentName:"h3"},"-v|--verbose")),(0,i.kt)("p",null,"Enables verbose output on stderr."),(0,i.kt)("p",null,"This option is helpful for debugging on the command line."),(0,i.kt)("h2",d({},{id:"examples"}),"Examples"),(0,i.kt)("p",null,"Send the Tenzir version string as CSV to ",(0,i.kt)("inlineCode",{parentName:"p"},"user@example.org"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{}),"version\n| write csv\n| save email user@example.org\n")),(0,i.kt)("p",null,"Send the email body as MIME part:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{}),"version\n| write json\n| save email --mime user@example.org\n")),(0,i.kt)("p",null,"This may result in the following email body:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{}),'--------------------------s89ecto6c12ILX7893YOEf\nContent-Type: application/json\nContent-Transfer-Encoding: quoted-printable\n\n{\n  "version": "4.10.4+ge0a060567b-dirty",\n  "build": "ge0a060567b-dirty",\n  "major": 4,\n  "minor": 10,\n  "patch": 4\n}\n\n--------------------------s89ecto6c12ILX7893YOEf--\n')))}N.isMDXComponent=!0}}]);
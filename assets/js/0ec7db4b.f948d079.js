"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[9910],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8448:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},7358:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(2713);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",c="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,a=e.block,u=e.defaultValue,s=e.values,p=e.groupId,m=e.className,f=r.Children.toArray(e.children),d=null!=s?s:f.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=u?u:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,v=o(),h=v.tabGroupChoices,b=v.setTabGroupChoices,y=(0,r.useState)(g),k=y[0],w=y[1],N=[];if(null!=p){var x=h[p];null!=x&&x!==k&&d.some((function(e){return e.value===x}))&&w(x)}var O=function(e){var t=e.currentTarget,n=N.indexOf(t),r=d[n].value;w(r),null!=p&&(b(p,r),setTimeout((function(){var e,n,r,a,o,i,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:P,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,r.cloneElement)(f.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},2713:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},5077:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=n(7358),l=n(8448),c=["components"],u={id:"merge",title:"Merge"},s=void 0,p={unversionedId:"merge",id:"version-6.x/merge",isDocsHomePage:!1,title:"Merge",description:"Gotenberg provides the endpoint /merge for merging PDFs.",source:"@site/versioned_docs/version-6.x/merge.mdx",sourceDirName:".",slug:"/merge",permalink:"/docs/6.x/merge",editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/versioned_docs/version-6.x/merge.mdx",tags:[],version:"6.x",frontMatter:{id:"merge",title:"Merge"},sidebar:"version-6.x",previous:{title:"Office",permalink:"/docs/6.x/office"},next:{title:"Timeout",permalink:"/docs/6.x/timeout"}},m=[{value:"Basic",id:"basic",children:[]}],f={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Gotenberg provides the endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"/merge")," for merging PDFs."),(0,o.kt)("p",null,"It accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," requests with a ",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," Content-Type."),(0,o.kt)("h2",{id:"basic"},"Basic"),(0,o.kt)("p",null,"Nothing fancy here: you may send one or more PDF files and the API\nwill merge them and return the resulting PDF file."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Gotenberg merges the PDF files alphabetically."))),(0,o.kt)(i.Z,{defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"Go",value:"go"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request POST \\\n     --url http://localhost:3000/merge \\\n     --header 'Content-Type: multipart/form-data' \\\n     --form files=@file.pdf \\\n     --form files=@file2.pdf \\\n     -o result.pdf\n"))),(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/thecodingmachine/gotenberg-go-client/v7"\n\nc := &gotenberg.Client{Hostname: "http://localhost:3000"}\npdf, _ := gotenberg.NewDocumentFromPath("file.pdf", "/path/to/file")\npdf2, _ := gotenberg.NewDocumentFromPath("file2.pdf", "/path/to/file")\nreq := gotenberg.NewMergeRequest(pdf, pdf2)\ndest := "result.pdf"\nc.Store(req, dest)\n'))),(0,o.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\Gotenberg\\Client;\nuse TheCodingMachine\\Gotenberg\\DocumentFactory;\nuse TheCodingMachine\\Gotenberg\\MergeRequest;\n\n$client = new Client('http://localhost:3000', new \\Http\\Adapter\\Guzzle6\\Client());\n$files = [\n    DocumentFactory::makeFromPath('file.pdf', '/path/to/file'),\n    DocumentFactory::makeFromPath('file2.pdf', '/path/to/file'),\n];\n$request = new MergeRequest($files);\n$dest = 'result.pdf';\n$client->store($request, $dest);\n")))))}d.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);
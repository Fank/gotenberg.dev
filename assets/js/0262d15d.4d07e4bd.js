"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[5681],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8448:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},7358:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(2713);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,r=e.block,u=e.defaultValue,m=e.values,p=e.groupId,c=e.className,d=a.Children.toArray(e.children),h=null!=m?m:d.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=u?u:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,f=o(),k=f.tabGroupChoices,b=f.setTabGroupChoices,v=(0,a.useState)(g),N=v[0],y=v[1],T=[];if(null!=p){var C=k[p];null!=C&&C!==N&&h.some((function(e){return e.value===C}))&&y(C)}var x=function(e){var t=e.currentTarget,n=T.indexOf(t),a=h[n].value;y(a),null!=p&&(b(p,a),setTimeout((function(){var e,n,a,r,o,l,i,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,l=window,i=l.innerHeight,u=l.innerWidth,n>=0&&o<=u&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},w=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.target)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.target)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},c)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":N===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:w,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},2713:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},8327:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),l=n(7358),i=n(8448),s=["components"],u={id:"html",title:"HTML"},m=void 0,p={unversionedId:"html",id:"version-6.x/html",isDocsHomePage:!1,title:"HTML",description:"Gotenberg provides the endpoint /convert/html for HTML conversions.",source:"@site/versioned_docs/version-6.x/html.mdx",sourceDirName:".",slug:"/html",permalink:"/docs/6.x/html",editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/versioned_docs/version-6.x/html.mdx",tags:[],version:"6.x",frontMatter:{id:"html",title:"HTML"},sidebar:"version-6.x",previous:{title:"Environment Variables",permalink:"/docs/6.x/environment_variables"},next:{title:"URL",permalink:"/docs/6.x/url"}},c=[{value:"Basic",id:"basic",children:[]},{value:"Header and footer",id:"header-and-footer",children:[]},{value:"Assets",id:"assets",children:[]},{value:"Paper size, margins, orientation, scaling",id:"paper-size-margins-orientation-scaling",children:[]},{value:"Page ranges",id:"page-ranges",children:[]},{value:"Wait delay",id:"wait-delay",children:[]},{value:"Rpcc buffer size",id:"rpcc-buffer-size",children:[]}],d={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Gotenberg provides the endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"/convert/html")," for HTML conversions."),(0,o.kt)("p",null,"It accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," requests with a ",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," Content-Type."),(0,o.kt)("h2",{id:"basic"},"Basic"),(0,o.kt)("p",null,"The only requirement is to send a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html"),": it is the file\nwhich will be converted to PDF."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <title>My PDF</title>\n  </head>\n  <body>\n    <h1>Hello world!</h1>\n  </body>\n</html>\n')),(0,o.kt)(l.Z,{defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"Go",value:"go"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request POST \\\n     --url http://localhost:3000/convert/html \\\n     --header 'Content-Type: multipart/form-data' \\\n     --form files=@index.html \\\n     -o result.pdf\n"))),(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/thecodingmachine/gotenberg-go-client/v7"\n\nc := &gotenberg.Client{Hostname: "http://localhost:3000"}\nindex, _ := gotenberg.NewDocumentFromPath("index.html", "/path/to/file")\nreq := gotenberg.NewHTMLRequest(index)\ndest := "result.pdf"\nc.Store(req, dest)\n'))),(0,o.kt)(i.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\Gotenberg\\Client;\nuse TheCodingMachine\\Gotenberg\\DocumentFactory;\nuse TheCodingMachine\\Gotenberg\\HTMLRequest;\n\n$client = new Client('http://localhost:3000', new \\Http\\Adapter\\Guzzle6\\Client());\n$index = DocumentFactory::makeFromPath('index.html', '/path/to/file');\n$request = new HTMLRequest($index);\n$dest = 'result.pdf';\n$client->store($request, $dest);\n")))),(0,o.kt)("h2",{id:"header-and-footer"},"Header and footer"),(0,o.kt)("p",null,"You may also add a header and/or a footer in the resulting PDF.\nRespectively, a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"header.html")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"footer.html"),"."),(0,o.kt)("p",null,"Each of them ",(0,o.kt)("strong",{parentName:"p"},"has to be a complete HTML document"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <style>\n      body {\n        font-size: 8rem;\n        margin: 4rem auto;\n      }\n    </style>\n  </head>\n  <body>\n    <p><span class="pageNumber"></span> of <span class="totalPages"></span></p>\n  </body>\n</html>\n')),(0,o.kt)("p",null,"The following classes allow you to inject printing values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"date"),": formatted print date"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"title"),": document title"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pageNumber"),": current page number"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"totalPage"),": total pages in the document")),(0,o.kt)("p",null,"There are some limitations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JavaScript is not executed"),(0,o.kt)("li",{parentName:"ul"},"external resources are not loaded"),(0,o.kt)("li",{parentName:"ul"},"the CSS properties are independant of the ones used in the ",(0,o.kt)("inlineCode",{parentName:"li"},"index.html")," file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"footer.html")," CSS properties override the ones from ",(0,o.kt)("inlineCode",{parentName:"li"},"header.html")),(0,o.kt)("li",{parentName:"ul"},"only fonts installed in the Docker image are loaded (see the ",(0,o.kt)("a",{parentName:"li",href:"fonts"},"fonts section"),")"),(0,o.kt)("li",{parentName:"ul"},"images only work using a ",(0,o.kt)("inlineCode",{parentName:"li"},"base64")," encoded source (",(0,o.kt)("inlineCode",{parentName:"li"},'<img src="data:image/png;base64, iVBORw0K... />'),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"background-color")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"color")," CSS properties require an additional ",(0,o.kt)("inlineCode",{parentName:"li"},"-webkit-print-color-adjust: exact")," CSS property in order to work")),(0,o.kt)(l.Z,{defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"Go",value:"go"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request POST \\\n     --url http://localhost:3000/convert/html \\\n     --header 'Content-Type: multipart/form-data' \\\n     --form files=@index.html \\\n     --form files=@header.html \\\n     --form files=@footer.html \\\n     -o result.pdf\n"))),(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/thecodingmachine/gotenberg-go-client/v7"\n\nc := &gotenberg.Client{Hostname: "http://localhost:3000"}\nindex, _ := gotenberg.NewDocumentFromPath("index.html", "/path/to/file")\nheader, _ := gotenberg.NewDocumentFromPath("header.html", "/path/to/file")\nfooter, _ := gotenberg.NewDocumentFromPath("footer.html", "/path/to/file")\nreq := gotenberg.NewHTMLRequest(index)\nreq.Header(header)\nreq.Footer(footer)\ndest := "result.pdf"\nc.Store(req, dest)\n'))),(0,o.kt)(i.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\Gotenberg\\Client;\nuse TheCodingMachine\\Gotenberg\\DocumentFactory;\nuse TheCodingMachine\\Gotenberg\\HTMLRequest;\n\n$client = new Client('http://localhost:3000', new \\Http\\Adapter\\Guzzle6\\Client());\n$index = DocumentFactory::makeFromPath('index.html', '/path/to/file');\n$header = DocumentFactory::makeFromPath('header.html', '/path/to/file');\n$footer = DocumentFactory::makeFromPath('footer.html', '/path/to/file');\n$request = new HTMLRequest($index);\n$request->setHeader($header);\n$request->setFooter($footer);\n$dest = 'result.pdf';\n$client->store($request, $dest);\n")))),(0,o.kt)("h2",{id:"assets"},"Assets"),(0,o.kt)("p",null,"You may also send additional files. For instance: images, fonts, stylesheets and so on."),(0,o.kt)("p",null,"The only requirement is to make sure that their paths\nare on the same level as the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file."),(0,o.kt)("p",null,"In other words, this will work:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <title>My PDF</title>\n  </head>\n  <body>\n    <h1>Hello world!</h1>\n    <img src="img.png" />\n  </body>\n</html>\n')),(0,o.kt)("p",null,"But this won't:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <title>My PDF</title>\n  </head>\n  <body>\n    <h1>Hello world!</h1>\n    <img src="/foo/img.png" />\n  </body>\n</html>\n')),(0,o.kt)("p",null,"You may also use ",(0,o.kt)("em",{parentName:"p"},"remote")," paths for Google fonts, images and so on."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want to install fonts directly in the Gotenberg Docker image,\nsee to the ",(0,o.kt)("a",{parentName:"p",href:"fonts"},"fonts section"),"."))),(0,o.kt)(l.Z,{defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"Go",value:"go"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request POST \\\n     --url http://localhost:3000/convert/html \\\n     --header 'Content-Type: multipart/form-data' \\\n     --form files=@index.html \\\n     --form files=@style.css \\\n     --form files=@img.png \\\n     --form files=@font.woff \\\n     -o result.pdf\n"))),(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/thecodingmachine/gotenberg-go-client/v7"\n\nc := &gotenberg.Client{Hostname: "http://localhost:3000"}\nindex, _ := gotenberg.NewDocumentFromPath("index.html", "/path/to/file")\nstyle, _ := gotenberg.NewDocumentFromPath("style.css", "/path/to/file")\nimg, _ := gotenberg.NewDocumentFromPath("img.png", "/path/to/file")\nfont, _ := gotenberg.NewDocumentFromPath("font.woff", "/path/to/file")\nreq := gotenberg.NewHTMLRequest(index)\nreq.Assets(style, img, font)\ndest := "result.pdf"\nc.Store(req, dest)\n'))),(0,o.kt)(i.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\Gotenberg\\Client;\nuse TheCodingMachine\\Gotenberg\\DocumentFactory;\nuse TheCodingMachine\\Gotenberg\\HTMLRequest;\n\n$client = new Client('http://localhost:3000', new \\Http\\Adapter\\Guzzle6\\Client());\n$index = DocumentFactory::makeFromPath('index.html', '/path/to/file');\n$assets = [\n    DocumentFactory::makeFromPath('style.css', '/path/to/file'),\n    DocumentFactory::makeFromPath('img.png', '/path/to/file'),\n    DocumentFactory::makeFromPath('font.woff', '/path/to/file'),\n];\n$request = new HTMLRequest($index);\n$request->setAssets($assets);\n$dest = 'result.pdf';\n$client->store($request, $dest);\n")))),(0,o.kt)("h2",{id:"paper-size-margins-orientation-scaling"},"Paper size, margins, orientation, scaling"),(0,o.kt)("p",null,"You may also customize the resulting PDF format."),(0,o.kt)("p",null,"By default, it will be rendered with ",(0,o.kt)("inlineCode",{parentName:"p"},"A4")," size, ",(0,o.kt)("inlineCode",{parentName:"p"},"1 inch")," margins and ",(0,o.kt)("inlineCode",{parentName:"p"},"portrait")," orientation and 100% (",(0,o.kt)("inlineCode",{parentName:"p"},"1.0"),") page scale."),(0,o.kt)("p",null,"::caution"),(0,o.kt)("p",null,"Paper size and margins have to be provided in ",(0,o.kt)("inlineCode",{parentName:"p"},"inches"),". Same for margins."),(0,o.kt)("p",null,":::"),(0,o.kt)(l.Z,{defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"Go",value:"go"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request POST \\\n     --url http://localhost:3000/convert/html \\\n     --header 'Content-Type: multipart/form-data' \\\n     --form files=@index.html \\\n     --form files=@style.css \\\n     --form files=@img.png \\\n     --form files=@font.woff \\\n     -o result.pdf\n"))),(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/thecodingmachine/gotenberg-go-client/v7"\n\nc := &gotenberg.Client{Hostname: "http://localhost:3000"}\nindex, _ := gotenberg.NewDocumentFromPath("index.html", "/path/to/file")\nreq := gotenberg.NewHTMLRequest(index)\nreq.PaperSize(gotenberg.A4)\nreq.Margins(gotenberg.NoMargins)\nreq.Landscape(true)\nreq.Scale(0.75)\ndest := "result.pdf"\nc.Store(req, dest)\n'))),(0,o.kt)(i.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\Gotenberg\\Client;\nuse TheCodingMachine\\Gotenberg\\DocumentFactory;\nuse TheCodingMachine\\Gotenberg\\HTMLRequest;\nuse TheCodingMachine\\Gotenberg\\Request;\n\n$client = new Client('http://localhost:3000', new \\Http\\Adapter\\Guzzle6\\Client());\n$index = DocumentFactory::makeFromPath('index.html', '/path/to/file');\n$request = new HTMLRequest($index);\n$request->setPaperSize(Request::A4);\n$request->setMargins(Request::NO_MARGINS);\n$request->setLandscape(true);\n$request->setScale(0.75);\n$dest = 'result.pdf';\n$client->store($request, $dest);\n")))),(0,o.kt)("h2",{id:"page-ranges"},"Page ranges"),(0,o.kt)("p",null,"You may specify the page ranges to convert."),(0,o.kt)("p",null,"The format is the same as the one from the print options\nof Google Chrome, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"1-5,8,11-13"),"."),(0,o.kt)(l.Z,{defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"Go",value:"go"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request POST \\\n     --url http://localhost:3000/convert/html \\\n     --header 'Content-Type: multipart/form-data' \\\n     --form files=@index.html \\\n     --form pageRanges='1-3,5' \\\n     -o result.pdf\n"))),(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/thecodingmachine/gotenberg-go-client/v7"\n\nc := &gotenberg.Client{Hostname: "http://localhost:3000"}\nindex, _ := gotenberg.NewDocumentFromPath("index.html", "/path/to/file")\nreq := gotenberg.NewHTMLRequest(index)\nreq.PageRanges("1-3,5")\ndest := "result.pdf"\nc.Store(req, dest)\n'))),(0,o.kt)(i.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\Gotenberg\\Client;\nuse TheCodingMachine\\Gotenberg\\DocumentFactory;\nuse TheCodingMachine\\Gotenberg\\HTMLRequest;\nuse TheCodingMachine\\Gotenberg\\Request;\n\n$client = new Client('http://localhost:3000', new \\Http\\Adapter\\Guzzle6\\Client());\n$index = DocumentFactory::makeFromPath('index.html', '/path/to/file');\n$request = new HTMLRequest($index);\n$request->setPageRanges('1-3,5');\n$dest = 'result.pdf';\n$client->store($request, $dest);\n")))),(0,o.kt)("h2",{id:"wait-delay"},"Wait delay"),(0,o.kt)("p",null,"In some cases, you may want to wait a certain amount of time to make sure the\npage you're trying to generate is fully rendered. For instance, if your page relies\na lot on JavaScript for rendering."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The wait delay is a duration in ",(0,o.kt)("strong",{parentName:"p"},"seconds")," (e.g ",(0,o.kt)("inlineCode",{parentName:"p"},"2.5")," for 2.5 seconds)."))),(0,o.kt)(l.Z,{defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"Go",value:"go"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request POST \\\n     --url http://localhost:3000/convert/html \\\n     --header 'Content-Type: multipart/form-data' \\\n     --form files=@index.html \\\n     --form waitDelay=5.5 \\\n     -o result.pdf\n"))),(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/thecodingmachine/gotenberg-go-client/v7"\n\nc := &gotenberg.Client{Hostname: "http://localhost:3000"}\nindex, _ := gotenberg.NewDocumentFromPath("index.html", "/path/to/file")\nreq := gotenberg.NewHTMLRequest(index)\nreq.WaitDelay(5.5)\ndest := "result.pdf"\nc.Store(req, dest)\n'))),(0,o.kt)(i.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\Gotenberg\\Client;\nuse TheCodingMachine\\Gotenberg\\DocumentFactory;\nuse TheCodingMachine\\Gotenberg\\HTMLRequest;\nuse TheCodingMachine\\Gotenberg\\Request;\n\n$client = new Client('http://localhost:3000', new \\Http\\Adapter\\Guzzle6\\Client());\n$index = DocumentFactory::makeFromPath('index.html', '/path/to/file');\n$request = new HTMLRequest($index);\n$request->setWaitDelay(5.5);\n$dest = 'result.pdf';\n$client->store($request, $dest);\n")))),(0,o.kt)("h2",{id:"rpcc-buffer-size"},"Rpcc buffer size"),(0,o.kt)("p",null,"The API might return a ",(0,o.kt)("inlineCode",{parentName:"p"},"400")," HTTP code with the message ",(0,o.kt)("inlineCode",{parentName:"p"},"increase the Google Chrome rpcc buffer size"),"."),(0,o.kt)("p",null,"If so, you may increase this buffer size with a form field named ",(0,o.kt)("inlineCode",{parentName:"p"},"googleChromeRpccBufferSize"),"."),(0,o.kt)("p",null,"It takes an int as value (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"1048576")," for 1 MB).\nThe hard limit is 100 MB and is defined by Google Chrome itself."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You may also define this value globally: see the ",(0,o.kt)("a",{parentName:"p",href:"environment_variables#default-google-chrome-rpcc-buffer-size"},"environment variables")," section."))),(0,o.kt)(l.Z,{defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"Go",value:"go"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request POST \\\n     --url http://localhost:3000/convert/html \\\n     --header 'Content-Type: multipart/form-data' \\\n     --form files=@index.html \\\n     --form googleChromeRpccBufferSize=1048576 \\\n     -o result.pdf\n"))),(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/thecodingmachine/gotenberg-go-client/v7"\n\nc := &gotenberg.Client{Hostname: "http://localhost:3000"}\nindex, _ := gotenberg.NewDocumentFromPath("index.html", "/path/to/file")\nreq := gotenberg.NewHTMLRequest(index)\nreq.GoogleChromeRpccBufferSize(1048576)\ndest := "result.pdf"\nc.Store(req, dest)\n'))),(0,o.kt)(i.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\Gotenberg\\Client;\nuse TheCodingMachine\\Gotenberg\\DocumentFactory;\nuse TheCodingMachine\\Gotenberg\\HTMLRequest;\nuse TheCodingMachine\\Gotenberg\\Request;\n\n$client = new Client('http://localhost:3000', new \\Http\\Adapter\\Guzzle6\\Client());\n$index = DocumentFactory::makeFromPath('index.html', '/path/to/file');\n$request = new HTMLRequest($index);\n$request->setGoogleChromeRpccBufferSize(1048576);\n$dest = 'result.pdf';\n$client->store($request, $dest);\n")))))}h.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);
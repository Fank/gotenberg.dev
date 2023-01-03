"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[127],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,h=d["".concat(m,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),o=n(6010),i=n(1048),l=n(3609),m=n(1943),p=n(2957);const s="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:i,values:d,groupId:c,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,m.U)(),[v,T]=(0,r.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=c){const e=b[c];null!=e&&e!==v&&k.some((t=>t.value===e))&&T(e)}const P=e=>{const t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==v&&(w(t),T(a),null!=c&&y(c,String(a)))},x=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},h)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>C.push(e),onKeyDown:x,onClick:P},i,{className:(0,o.Z)("tabs__item",u,i?.className,{"tabs__item--active":v===t})}),n??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function c(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},8108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(4137)),o=n(4259),i=n(425);const l={id:"chromium",title:"Chromium"},m=void 0,p={unversionedId:"modules/chromium",id:"modules/chromium",title:"Chromium",description:"The Chromium module interacts with the Chromium browser to convert HTML documents to PDF.",source:"@site/docs/modules/chromium.mdx",sourceDirName:"modules",slug:"/modules/chromium",permalink:"/docs/modules/chromium",draft:!1,editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/docs/modules/chromium.mdx",tags:[],version:"current",frontMatter:{id:"chromium",title:"Chromium"},sidebar:"version-7.x",previous:{title:"API",permalink:"/docs/modules/api"},next:{title:"LibreOffice",permalink:"/docs/modules/libreoffice"}},s={},u=[{value:"Properties",id:"properties",level:2},{value:"Routes",id:"routes",level:2},{value:"URL",id:"url",level:3},{value:"HTML",id:"html",level:3},{value:"Markdown",id:"markdown",level:3},{value:"Metric",id:"metric",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"PDF files size too large",id:"pdf-files-size-too-large",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Chromium module interacts with the Chromium browser to convert HTML documents to PDF."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It starts a dedicated Chromium instance for each request.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"amd64")," Docker image uses Google Chrome stable, while other architectures use an earlier version of Chromium."),(0,r.kt)("p",{parentName:"admonition"},"Until Google or Debian packages' managers provide a more up-to-date version of Chromium for ",(0,r.kt)("inlineCode",{parentName:"p"},"arm64"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"armhf"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"i386"),"\nplatforms, the Docker images will differ, alas.")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)(o.Z,{defaultValue:"security",values:[{label:"Security",value:"security"},{label:"Incognito",value:"incognito"},{label:"Network",value:"network"},{label:"JavaScript",value:"javascript"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"security",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'--chromium-allow-file-access-from-files bool    Allow file:// URIs to read other file:// URIs\n--chromium-allow-insecure-localhost     bool    Ignore TLS/SSL errors on localhost\n--chromium-allow-list                   string  Set the allowed URLs for Chromium using a regular expression\n--chromium-deny-list                    string  Set the denied URLs for Chromium using a regular expression (default "^file:///[^tmp].*")\n--chromium-ignore-certificate-errors    bool    Ignore the certificate errors\n--chromium-disable-web-security         bool    Don\'t enforce the same-origin policy\n'))),(0,r.kt)(i.Z,{value:"incognito",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--chromium-incognito bool  Start Chromium with incognito mode\n"))),(0,r.kt)(i.Z,{value:"network",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--chromium-host-resolver-rules string  Set custom mappings to the host resolver\n--chromium-proxy-server        string  Set the outbound proxy server; this switch only affects HTTP and HTTPS requests\n"))),(0,r.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--chromium-disable-javascript bool  Disable JavaScript\n"))),(0,r.kt)(i.Z,{value:"disable",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--chromium-disable-routes bool  Disable the routes\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"--chromium-user-agent")," property is deprecated. Prefer the ",(0,r.kt)("inlineCode",{parentName:"p"},"userAgent")," form field instead.")),(0,r.kt)("h2",{id:"routes"},"Routes"),(0,r.kt)("p",null,"Each route accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," requests."),(0,r.kt)("p",null,"They share the following form fields:"),(0,r.kt)(o.Z,{defaultValue:"page_props",values:[{label:"Page Properties",value:"page_props"},{label:"Header & Footer",value:"header_footer"},{label:"Wait",value:"wait"},{label:"HTTP Headers",value:"http_headers"},{label:"JavaScript",value:"javascript"},{label:"CSS",value:"css"},{label:"PDF Format",value:"pdf_format"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"page_props",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"paperWidth        float   Paper width, in inches (default 8.5)\npaperHeight       float   Paper height, in inches (default 11)\nmarginTop         float   Top margin, in inches (default 0.39)\nmarginBottom      float   Bottom margin, in inches (default 0.39)\nmarginLeft        float   Left margin, in inches (default 0.39)\nmarginRight       float   Right margin, in inches (default 0.39)\npreferCssPageSize bool    Define whether to prefer page size as defined by CSS (default false)\nprintBackground   bool    Print the background graphics (default false)\nomitBackground    bool    Hide the default white background and allow generating PDFs with transparency (default false)\nlandscape         bool    Set the paper orientation to landscape (default false)\nscale             float   The scale of the page rendering (default 1.0)\nnativePageRanges  string  Page ranges to print, e.g., '1-5, 8, 11-13' - empty means all pages\n")),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4-14}","{4-14}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--form 'url=\"https://my.url\"' \\\n--form 'paperWidth=\"8.27\"' \\\n--form 'paperHeight=\"11.7\"' \\\n--form 'marginTop=\"1\"' \\\n--form 'marginBottom=\"1\"' \\\n--form 'marginLeft=\"1\"' \\\n--form 'marginRight=\"1\"' \\\n--form 'preferCssPageSize=\"false\"' \\\n--form 'printBackground=\"true\"' \\\n--form 'omitBackground=\"true\"' \\\n--form 'landscape=\"true\"' \\\n--form 'scale=\"2.0\"' \\\n--form 'nativePageRanges=\"1-5\"' \\\n-o my.pdf\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Examples of paper size (width x height):"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Letter")," - 8.5 x 11 (default)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Legal")," - 8.5 x 14"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tabloid")," - 11 x 17"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Ledger")," - 17 x 11"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"A0")," - 33.1 x 46.8"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"A1")," - 23.4 x 33.1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"A2")," - 16.54 x 23.4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"A3")," - 11.7 x 16.54"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"A4")," - 8.27 x 11.7"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"A5")," - 5.83 x 8.27"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"A6")," - 4.13 x 5.83"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The rules regarding the ",(0,r.kt)("inlineCode",{parentName:"p"},"printBackground")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"omitBackground")," form fields are the following:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"printBackground")," is set to ",(0,r.kt)("em",{parentName:"li"},"false"),", no background is printed."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"printBackground")," is set to ",(0,r.kt)("em",{parentName:"li"},"true"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the HTML document has a background, that background is used."),(0,r.kt)("li",{parentName:"ul"},"If not:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"omitBackground")," is set to ",(0,r.kt)("em",{parentName:"li"},"true"),", the default background is transparent."),(0,r.kt)("li",{parentName:"ul"},"If not, the default white background is used.")))))))),(0,r.kt)(i.Z,{value:"header_footer",mdxType:"TabItem"},(0,r.kt)("p",null,"Each route accepts files named ",(0,r.kt)("inlineCode",{parentName:"p"},"header.html")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"footer.html"),"."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4-7}","{4-7}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--form 'url=\"https://my.url\"' \\\n--form 'files=@\"/path/to/header.html\"' \\\n--form 'files=@\"/path/to/footer.html\"' \\\n--form 'marginTop=\"1\"' \\\n--form 'marginBottom=\"1\"' \\\n-o my.pdf\n")),(0,r.kt)("p",null,"Each of them has to be a ",(0,r.kt)("strong",{parentName:"p"},"complete HTML document"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n<head>\n    <style>\n    body {\n        font-size: 8rem;\n        margin: 4rem auto;\n    }\n    </style>\n</head>\n<body>\n<p><span class="pageNumber"></span> of <span class="totalPages"></span></p>\n</body>\n</html>\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The following classes allow you to inject printing values:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"date")," - formatted print date."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"title")," - document title."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")," - document location."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pageNumber")," - current page number."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"totalPages")," - total pages in the document."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure that:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Margins top and bottom are large enough (",(0,r.kt)("inlineCode",{parentName:"li"},"marginTop")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"marginBottom")," form fields)."),(0,r.kt)("li",{parentName:"ol"},"The font size is big enough."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"There are some limitations:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"No JavaScript."),(0,r.kt)("li",{parentName:"ul"},"The CSS properties are independent of the ones from the HTML document."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"footer.html")," CSS properties override the ones from ",(0,r.kt)("inlineCode",{parentName:"li"},"header.html"),"."),(0,r.kt)("li",{parentName:"ul"},"Only fonts installed in the Docker image are loaded - see the ",(0,r.kt)("a",{parentName:"li",href:"../customize/fonts"},"Fonts")," chapter."),(0,r.kt)("li",{parentName:"ul"},"Images only work using a base64 encoded source - i.e., ",(0,r.kt)("inlineCode",{parentName:"li"},"data:image/png;base64, iVBORw0K..."),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"background-color")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"color")," CSS properties require an additional ",(0,r.kt)("inlineCode",{parentName:"li"},"-webkit-print-color-adjust: exact")," CSS property in order to work."),(0,r.kt)("li",{parentName:"ul"},"Assets are not loaded (i.e., CSS files, scripts, fonts, etc.)."),(0,r.kt)("li",{parentName:"ul"},"Background form fields do not apply.")))),(0,r.kt)(i.Z,{value:"wait",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"waitDelay          duration  Duration to wait when loading an HTML document before converting it to PDF\nwaitForExpression  string    The JavaScript expression to wait before converting an HTML document to PDF until it returns true\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"waitDelay")),(0,r.kt)("p",null,"When the page relies on JavaScript for rendering, and you don't have access to the page's code, you may want to wait a\ncertain amount of time to make sure Chromium has fully rendered the page you're trying to generate."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4}","{4}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--form 'url=\"https://my.url\"' \\\n--form 'waitDelay=\"5s\"' \\\n-o my.pdf\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"waitForExpression")),(0,r.kt)("p",null,"You may also wait until a given JavaScript expression returns true."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Somewhere in the HTML document.\nawait promises()\nwindow.status = 'ready'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4}","{4}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--form 'url=\"https://my.url\"' \\\n--form 'waitForExpression=\"window.status === '\\''ready'\\''\"' \\\n-o my.pdf\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Prefer this option over ",(0,r.kt)("inlineCode",{parentName:"p"},"waitDelay"),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The form field ",(0,r.kt)("inlineCode",{parentName:"p"},"waitWindowStatus")," is deprecated in favor of ",(0,r.kt)("inlineCode",{parentName:"p"},"waitForExpression"),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"These form fields do not work if JavaScript is disabled via ",(0,r.kt)("inlineCode",{parentName:"p"},"--chromium-disable-javascript"),"."))),(0,r.kt)(i.Z,{value:"http_headers",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"userAgent        string  Override the default User-Agent header\nextraHttpHeaders string  HTTP headers to send by Chromium while loading the HTML document (JSON format)\n")),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4-5}","{4-5}":!0},'curl \\\n--request POST \'http://localhost:3000/forms/chromium/convert/url\' \\\n--form \'url="https://my.url"\' \\\n--form \'userAgent="Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"\' \\\n--form \'extraHttpHeaders="{\\"MyHeader\\": \\"MyValue\\"}"\' \\\n-o my.pdf\n'))),(0,r.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"failOnConsoleExceptions bool  Return a 409 Conflict response if there are exceptions in the Chromium console (default false)\n")),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4}","{4}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/html' \\\n--form 'files=@\"/path/to/index.html\"' \\\n--form 'failOnConsoleExceptions=\"true\"'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Status: 409 Conflict\nContent-Type: text/plain; charset=UTF-8\nGotenberg-Trace: {trace}\n\nBody:\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Chromium console exceptions:\n\nexception "Uncaught" (17:10): Error: Exception 1\nat file:///tmp/db09d2c8-31e3-4058-9923-c2705350f2b3/index.html:18:11;\nexception "Uncaught" (20:10): Error: Exception 2\nat file:///tmp/db09d2c8-31e3-4058-9923-c2705350f2b3/index.html:21:11:\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This form field does not work if JavaScript is disabled via ",(0,r.kt)("inlineCode",{parentName:"p"},"--chromium-disable-javascript"),"."))),(0,r.kt)(i.Z,{value:"css",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'emulatedMediaType string  The media type to emulate, either "screen" or "print" - empty means "print"\n')),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4}","{4}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--form 'url=\"https://my.url\"' \\\n--form 'emulatedMediaType=\"screen\"' \\\n-o my.pdf\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'Some websites have dedicated CSS rules for print. Using "screen" allows you to force the "standard" CSS rules.'))),(0,r.kt)(i.Z,{value:"pdf_format",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pdfFormat string  The PDF format of the resulting PDF\n")),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4}","{4}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--form 'url=\"https://my.url\"' \\\n--form 'pdfFormat=\"PDF/A-1a\"' \\\n-o my.pdf\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"After a Chromium conversion, the PDF engines will convert the resulting PDF to a specific format."),(0,r.kt)("p",{parentName:"admonition"},"Check the available PDF formats:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pdf-engines#pdftk"},"PDFtk")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pdf-engines#pdfcpu"},"PDFcpu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pdf-engines#qpdf"},"QPDF")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pdf-engines#UNO"},"UNO")))))),(0,r.kt)("h3",{id:"url"},"URL"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /forms/chromium/convert/url")),(0,r.kt)("p",null,"This route accepts a form field ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," with the URL of the page you want to convert to PDF."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{3}","{3}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--form 'url=\"https://my.url\"' \\\n--form 'marginTop=\"0\"' \\\n--form 'marginBottom=\"0\"' \\\n--form 'marginLeft=\"0\"' \\\n--form 'marginRight=\"0\"' \\\n-o my.pdf\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When converting a website to PDF, you should remove all margins. If not, the resulting PDF might not contain all\ncontent from the page.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The form fields ",(0,r.kt)("inlineCode",{parentName:"p"},"extraLinkTags")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"extraScriptTags")," (JSON format) allows you to add ",(0,r.kt)("inlineCode",{parentName:"p"},"<link>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," HTML elements\nwith remote paths."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4-8}","{4-8}":!0},'curl \\\n--request POST \'http://localhost:3000/forms/chromium/convert/url\' \\\n--form \'url="https://my.url"\' \\\n--form \'extraLinkTags="[{\\"href\\":\\"https://my.cdn.css\\"}]"\' \\\n--form \'extraScriptTags="[{\\"src\\":\\"https://my.cdn.js\\"}]"\' \\\n-o my.pdf\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For ",(0,r.kt)("inlineCode",{parentName:"p"},"<link>")," HTML elements, only the ",(0,r.kt)("inlineCode",{parentName:"p"},"href")," attribute is available.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," HTML elements, only the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," attribute is available.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," HTML elements are not added if JavaScript is disabled via ",(0,r.kt)("inlineCode",{parentName:"p"},"--chromium-disable-javascript"),".")),(0,r.kt)("h3",{id:"html"},"HTML"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /forms/chromium/convert/html")),(0,r.kt)("p",null,"This route accepts a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),"."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <title>My PDF</title>\n  </head>\n  <body>\n    <h1>Hello world!</h1>\n  </body>\n</html>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{3}","{3}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/html' \\\n--form 'files=@\"/path/to/index.html\"' \\\n-o my.pdf\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"You may also send additional files, like images, fonts, stylesheets, and so on."),(0,r.kt)("p",null,"The only requirement is that their paths in the ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," file are on the root level."),(0,r.kt)("p",null,"For instance, this will work:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"{9}","{9}":!0},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <title>My PDF</title>\n  </head>\n  <body>\n    <h1>Hello world!</h1>\n    <img src="img.png" />\n  </body>\n</html>\n')),(0,r.kt)("p",null,"But this won't:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"{9}","{9}":!0},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <title>My PDF</title>\n  </head>\n  <body>\n    <h1>Hello world!</h1>\n    <img src="/foo/img.png" />\n  </body>\n</html>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4-6}","{4-6}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/html' \\\n--form 'files=@\"/path/to/index.html\"' \\\n--form 'files=@\"/path/to/style.css\"' \\\n--form 'files=@\"/path/to/img.png\"' \\\n--form 'files=@\"/path/to/font.woff\"' \\\n-o my.pdf\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Remote paths for images, fonts (e.g., ",(0,r.kt)("a",{parentName:"p",href:"https://fonts.google.com/"},"Google Fonts"),"), etc., works too.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"../customize/fonts"},"Fonts")," chapter if you want to install fonts in the Docker image.")),(0,r.kt)("h3",{id:"markdown"},"Markdown"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /forms/chromium/convert/markdown")),(0,r.kt)("p",null,"This route accepts a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," plus markdown files."),(0,r.kt)("p",null,"It works like the ",(0,r.kt)("a",{parentName:"p",href:"#html"},"HTML")," route but with access to a Go template function ",(0,r.kt)("inlineCode",{parentName:"p"},"toHTML"),". It converts a\nmarkdown file's content to HTML."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"{8}","{8}":!0},'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>My PDF</title>\n  </head>\n  <body>\n    {{ toHTML "file.md" }}\n  </body>\n</html>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4}","{4}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/markdown' \\\n--form 'files=@\"/path/to/index.html\"' \\\n--form 'files=@\"/path/to/file.md\"' \\\n-o my.pdf\n")),(0,r.kt)("h2",{id:"metric"},"Metric"),(0,r.kt)("p",null,"The Chromium module exposes the following metric:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{namespace}_chromium_active_instances_count")," - current number of active Chromium instances.")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"Prometheus"},"Prometheus")," for more details."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"pdf-files-size-too-large"},"PDF files size too large"),(0,r.kt)("p",null,"Using webfonts significantly increases the PDF file size. When using a custom font, see the\n",(0,r.kt)("a",{parentName:"p",href:"../customize/fonts"},"Fonts")," chapter on how to install them in the Docker container instead.\nSee issue ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gotenberg/gotenberg/issues/521"},"#521")," for more details."))}c.isMDXComponent=!0}}]);
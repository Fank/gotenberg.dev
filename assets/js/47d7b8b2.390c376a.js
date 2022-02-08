"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[925],{4137:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||l;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8448:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5529:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),r=a(7294),l=a(1048),o=a(9623),i=a(6010),s="tabItem_LplD";function u(e){var t,a,l,u=e.lazy,d=e.block,p=e.defaultValue,m=e.values,c=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(k,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),N=b.tabGroupChoices,y=b.setTabGroupChoices,w=(0,r.useState)(g),T=w[0],C=w[1],O=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var P=N[c];null!=P&&P!==T&&k.some((function(e){return e.value===P}))&&C(P)}var I=function(e){var t=e.currentTarget,a=O.indexOf(t),n=k[a].value;n!==T&&(x(t),C(n),null!=c&&y(c,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;a=O[r]||O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},k.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:E,onFocus:I,onClick:I},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,l.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},6071:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var n=a(7462),r=a(3366),l=(a(7294),a(4137)),o=a(5529),i=a(8448),s=["components"],u={id:"api",title:"API"},d=void 0,p={unversionedId:"modules/api",id:"modules/api",title:"API",description:"The API module is an HTTP/1 and HTTP/2 (H2C) server. Other modules may add routes, middlewares, and health checks.",source:"@site/docs/modules/api.mdx",sourceDirName:"modules",slug:"/modules/api",permalink:"/docs/modules/api",editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/docs/modules/api.mdx",tags:[],version:"current",frontMatter:{id:"api",title:"API"},sidebar:"version-7.x",previous:{title:"Cloud Run",permalink:"/docs/get-started/cloud-run"},next:{title:"Chromium",permalink:"/docs/modules/chromium"}},m=[{value:"Properties",id:"properties",children:[],level:2},{value:"Routes",id:"routes",children:[{value:"Health",id:"health",children:[],level:3},{value:"Modules",id:"modules",children:[{value:"multipart/form-data",id:"multipartform-data",children:[],level:4},{value:"Other routes",id:"other-routes",children:[],level:4}],level:3}],level:2},{value:"Middlewares",id:"middlewares",children:[{value:'Trace <span class="badge badge--secondary">all routes</span>',id:"trace-all-routes",children:[],level:3},{value:'Timeout <span class="badge badge--secondary">all routes</span>',id:"timeout-all-routes",children:[],level:3},{value:'Output Filename <span class="badge badge--secondary">multipart</span>',id:"output-filename-multipart",children:[],level:3},{value:"Modules",id:"modules-1",children:[],level:3}],level:2}],c={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The API module is an HTTP/1 and HTTP/2 (H2C) server. Other modules may add routes, middlewares, and health checks."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)(o.Z,{defaultValue:"port",values:[{label:"Port",value:"port"},{label:"Timeout",value:"timeout"},{label:"Root path",value:"root_path"},{label:"Trace",value:"trace"},{label:"Health",value:"health"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"port",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--api-port          int     Set the port on which the API should listen (default 3000)\n--api-port-from-env string  Set the environment variable with the port on which the API should listen - override the default port\n"))),(0,l.kt)(i.Z,{value:"timeout",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--api-timeout duration  Set the time limit for requests (default 30s)\n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The properties ",(0,l.kt)("inlineCode",{parentName:"p"},"--api-read-timeout"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--api-process-timeout")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"--api-write-timeout")," are deprecated in favor of\n",(0,l.kt)("inlineCode",{parentName:"p"},"--api-timeout"),".")))),(0,l.kt)(i.Z,{value:"root_path",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'--api-root-path string  Set the root path of the API - for service discovery via URL paths (default "/")\n'))),(0,l.kt)(i.Z,{value:"trace",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'--api-trace-header string  Set the header name to use for identifying requests (default "Gotenberg-Trace")\n'))),(0,l.kt)(i.Z,{value:"health",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--api-disable-health-check-logging bool  Disable health check logging\n")))),(0,l.kt)("h2",{id:"routes"},"Routes"),(0,l.kt)("h3",{id:"health"},"Health"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET /health")),(0,l.kt)(o.Z,{defaultValue:"success",values:[{label:"Success",value:"success"},{label:"Error",value:"error"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"success",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Status: 200 OK\n\nContent-Type: application/json\nGotenberg-Trace: {trace}\n\nBody:\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "up",\n    "details": {\n        "moduleX": {\n            "status": "up",\n            "timestamp": "2021-07-01T08:05:14.603364Z"\n        },\n        "moduleY": {\n            "status": "up",\n            "timestamp": "2021-07-01T08:05:14.603364Z"\n        },\n    }\n}\n'))),(0,l.kt)(i.Z,{value:"error",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Status: 503 Service Unavailable\n\nContent-Type: application/json\nGotenberg-Trace: {trace}\n\nBody:\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "down",\n    "details": {\n        "moduleX": {\n            "status": "up",\n            "timestamp": "2021-07-01T08:05:14.603364Z"\n        },\n        "moduleY": {\n            "status": "down",\n            "timestamp": "2021-07-01T08:05:14.603364Z",\n            "error": "An health check error"\n        },\n    }\n}\n')))),(0,l.kt)("p",null,"Currently, only the following module provides a health check:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"libreoffice#health-check"},"LibreOffice"))),(0,l.kt)("h3",{id:"modules"},"Modules"),(0,l.kt)("h4",{id:"multipartform-data"},"multipart/form-data"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"METHOD /forms/{module}/{handler}")),(0,l.kt)("p",null,"The following modules provide ",(0,l.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," routes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"chromium"},"Chromium")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"libreoffice"},"LibreOffice")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"pdf-engines"},"PDF Engines"))),(0,l.kt)(o.Z,{defaultValue:"success",values:[{label:"Success",value:"success"},{label:"Error",value:"error"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"success",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Status: 200 OK\n\nContent-Disposition: attachement; filename={output-filename.ext}\nContent-Type: {content-type}\nContent-Length: {content-length}\nGotenberg-Trace: {trace}\n\nBody: {output-file}\n"))),(0,l.kt)(i.Z,{value:"error",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Status: {status}\n\nContent-Type: text/plain; charset=UTF-8\nGotenberg-Trace: {trace}\n\nBody: {error}\n")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"other-routes"},"Other routes"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"METHOD /{module}/{handler}")),(0,l.kt)("p",null,"Currently, only the following module provides a non-",(0,l.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," route:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"prometheus"},"Prometheus"))),(0,l.kt)("h2",{id:"middlewares"},"Middlewares"),(0,l.kt)("h3",{id:"trace-all-routes"},"Trace ",(0,l.kt)("span",{class:"badge badge--secondary"},"all routes")),(0,l.kt)("p",null,"The trace, or request ID, identifies a request in the logs."),(0,l.kt)("p",null,"By default, the API generates a ",(0,l.kt)("em",{parentName:"p"},"UUID")," trace for each request. However, you may also specify the trace per request,\nthanks to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Gotenberg-Trace")," header."),(0,l.kt)("p",null,"For instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{3}","{3}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--header 'Gotenberg-Trace: debug' \\\n--form 'url=\"https://my.url\"' \\\n-o my.pdf\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The API adds a header ",(0,l.kt)("inlineCode",{parentName:"p"},"Gotenberg-Trace")," to each response. If you're using the webhook feature, it also adds the header\nto each request to your callbacks."))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You may customize the trace header thanks to the ",(0,l.kt)("inlineCode",{parentName:"p"},"--api-trace-header")," property."))),(0,l.kt)("h3",{id:"timeout-all-routes"},"Timeout ",(0,l.kt)("span",{class:"badge badge--secondary"},"all routes")),(0,l.kt)("p",null,"The API returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"503 Service Unavailable")," response if a request fails to finish before a given duration."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You may customize the time limit thanks to the ",(0,l.kt)("inlineCode",{parentName:"p"},"--api-timeout")," property."))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The API will close the socket if it fails to read the request body before the time limit. It will also close the socket\nif the API fails to write the response after a duration equal to two times the time limit. However, this scenario is\nunlikely."))),(0,l.kt)("h3",{id:"output-filename-multipart"},"Output Filename ",(0,l.kt)("span",{class:"badge badge--secondary"},"multipart")),(0,l.kt)("p",null,"By default, the API generates a ",(0,l.kt)("em",{parentName:"p"},"UUID")," filename. However, you may also specify the filename per request, thanks to\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"Gotenberg-Output-Filename")," header."),(0,l.kt)("p",null,"For instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{3}","{3}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--header 'Gotenberg-Output-Filename: result' \\\n--form 'url=\"https://my.url\"' \\\n-O -J\n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The API adds the file extension automatically; you don't have to set it."))),(0,l.kt)("h3",{id:"modules-1"},"Modules"),(0,l.kt)("p",null,"Currently, only the following module provides a middleware:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"webhook"},"Webhook"))))}h.isMDXComponent=!0}}]);
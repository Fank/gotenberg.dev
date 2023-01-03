"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[895],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||r;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(7294),a=n(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,l),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(7462),a=n(7294),r=n(6010),l=n(1048),i=n(3609),u=n(1943),s=n(2957);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:l,values:m,groupId:d,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??b.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),k=(0,i.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===l?l:l??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:T}=(0,u.U)(),[y,w]=(0,a.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=d){const e=v[d];null!=e&&e!==y&&g.some((t=>t.value===e))&&w(e)}const N=e=>{const t=e.currentTarget,n=x.indexOf(t),o=g[n].value;o!==y&&(C(t),w(o),null!=d&&T(d,String(o)))},P=e=>{let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},h)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>x.push(e),onKeyDown:P,onClick:N},l,{className:(0,r.Z)("tabs__item",c,l?.className,{"tabs__item--active":y===t})}),n??t)}))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,(0,o.Z)({key:String(t)},e))}},8148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(4137)),r=n(4259),l=n(425);const i={id:"webhook",title:"Webhook"},u=void 0,s={unversionedId:"webhook",id:"version-6.x/webhook",title:"Webhook",description:"All endpoints accept a form field named webhookURL.",source:"@site/versioned_docs/version-6.x/webhook.mdx",sourceDirName:".",slug:"/webhook",permalink:"/docs/6.x/webhook",draft:!1,editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/versioned_docs/version-6.x/webhook.mdx",tags:[],version:"6.x",frontMatter:{id:"webhook",title:"Webhook"},sidebar:"version-6.x",previous:{title:"Timeout",permalink:"/docs/6.x/timeout"},next:{title:"Result Filename",permalink:"/docs/6.x/result_filename"}},p={},c=[{value:"Examples",id:"examples",level:2},{value:"Timeout",id:"timeout",level:2},{value:"Custom HTTP headers",id:"custom-http-headers",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All endpoints accept a form field named ",(0,a.kt)("inlineCode",{parentName:"p"},"webhookURL"),"."),(0,a.kt)("p",null,"If provided, the API will send the resulting PDF file in a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request with the ",(0,a.kt)("inlineCode",{parentName:"p"},"application/pdf")," Content-Type\nto given URL."),(0,a.kt)("p",null,"By doing so, your requests to the API will be over before the conversions are actually done!"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(r.Z,{defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"Go",value:"go"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"curl",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request POST \\\n     --url http://localhost:3000/convert/html \\\n     --header 'Content-Type: multipart/form-data' \\\n     --form files=@index.html \\\n     --form webhookURL='http://myapp.com/webhook/'\n"))),(0,a.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"use TheCodingMachine\\Gotenberg\\Client;\nuse TheCodingMachine\\Gotenberg\\DocumentFactory;\nuse TheCodingMachine\\Gotenberg\\HTMLRequest;\n\n$client = new Client('http://localhost:3000', new \\Http\\Adapter\\Guzzle6\\Client());\n$index = DocumentFactory::makeFromPath('index.html', '/path/to/file');\n$request = new HTMLRequest($index);\n$request->setWebhookURL('http://myapp.com/webhook/');\n$resp = $client->post($request);\n"))),(0,a.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\Gotenberg\\Client;\nuse TheCodingMachine\\Gotenberg\\DocumentFactory;\nuse TheCodingMachine\\Gotenberg\\HTMLRequest;\n\n$client = new Client('http://localhost:3000', new \\Http\\Adapter\\Guzzle6\\Client());\n$index = DocumentFactory::makeFromPath('index.html', '/path/to/file');\n$request = new HTMLRequest($index);\n$request->setWebhookURL('http://myapp.com/webhook/');\n$resp = $client->post($request);\n")))),(0,a.kt)("h2",{id:"timeout"},"Timeout"),(0,a.kt)("p",null,"If a ",(0,a.kt)("inlineCode",{parentName:"p"},"webhookURL")," is provided, you may also send a form field named ",(0,a.kt)("inlineCode",{parentName:"p"},"webhookURLTimeout"),"."),(0,a.kt)("p",null,"The API will wait the given ",(0,a.kt)("strong",{parentName:"p"},"seconds")," before it considers the sending of the resulting PDF to be unsucessful."),(0,a.kt)("p",null,"It takes a float as value (e.g ",(0,a.kt)("inlineCode",{parentName:"p"},"2.5")," for 2.5 seconds)."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You may also define this value globally: see the ",(0,a.kt)("a",{parentName:"p",href:"environment_variables#default-webhook-url-timeout"},"environment variables")," section.")),(0,a.kt)(r.Z,{defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"Go",value:"go"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"curl",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request POST \\\n     --url http://localhost:3000/convert/html \\\n     --header 'Content-Type: multipart/form-data' \\\n     --form files=@index.html \\\n     --form webhookURL='http://myapp.com/webhook/' \\\n     --form webhookURLTimeout=2.5\n"))),(0,a.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/thecodingmachine/gotenberg-go-client/v7"\n\nc := &gotenberg.Client{Hostname: "http://localhost:3000"}\nindex, _ := gotenberg.NewDocumentFromPath("index.html", "/path/to/file")\nreq := gotenberg.NewHTMLRequest(index)\nreq.WebhookURL("http://myapp.com/webhook/")\nreq.WebhookURLTimeout(2.5)\nresp, _ := c.Post(req)\n'))),(0,a.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\Gotenberg\\Client;\nuse TheCodingMachine\\Gotenberg\\DocumentFactory;\nuse TheCodingMachine\\Gotenberg\\HTMLRequest;\n\n$client = new Client('http://localhost:3000', new \\Http\\Adapter\\Guzzle6\\Client());\n$index = DocumentFactory::makeFromPath('index.html', '/path/to/file');\n$request = new HTMLRequest($index);\n$request->setWebhookURL('http://myapp.com/webhook/');\n$request->setWebhookURLTimeout(2.5);\n$resp = $client->post($request);\n")))),(0,a.kt)("h2",{id:"custom-http-headers"},"Custom HTTP headers"),(0,a.kt)("p",null,"You may send your own HTTP headers to the ",(0,a.kt)("inlineCode",{parentName:"p"},"webhookURL"),"."),(0,a.kt)("p",null,"For instance, by adding the HTTP header ",(0,a.kt)("inlineCode",{parentName:"p"},"Gotenberg-Webhookurl-Your-Header")," to your request,\nthe API will send a request to the ",(0,a.kt)("inlineCode",{parentName:"p"},"webhookURL")," with the HTTP header ",(0,a.kt)("inlineCode",{parentName:"p"},"Your-Header"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The API uses a canonical format for the HTTP headers:\nit transforms the first\nletter and any letter following a hyphen to upper case;\nthe rest are converted to lowercase. For example, the\ncanonical key for ",(0,a.kt)("inlineCode",{parentName:"p"},"accept-encoding")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"Accept-Encoding"),".")),(0,a.kt)(r.Z,{defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"Go",value:"go"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"curl",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request POST \\\n     --url http://localhost:3000/convert/html \\\n    --header 'Content-Type: multipart/form-data' \\\n    --header 'Gotenberg-Webhookurl-Your-Header: Foo' \\\n     --form files=@index.html \\\n     --form webhookURL='http://myapp.com/webhook/'\n"))),(0,a.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/thecodingmachine/gotenberg-go-client/v7"\n\nc := &gotenberg.Client{Hostname: "http://localhost:3000"}\nindex, _ := gotenberg.NewDocumentFromPath("index.html", "/path/to/file")\nreq := gotenberg.NewHTMLRequest(index)\nreq.WebhookURL("http://myapp.com/webhook/")\nreq.AddWebhookURLHTTPHeader("Your-Header", "Foo")\nresp, _ := c.Post(req)\n'))),(0,a.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\Gotenberg\\Client;\nuse TheCodingMachine\\Gotenberg\\DocumentFactory;\nuse TheCodingMachine\\Gotenberg\\HTMLRequest;\n\n$client = new Client('http://localhost:3000', new \\Http\\Adapter\\Guzzle6\\Client());\n$index = DocumentFactory::makeFromPath('index.html', '/path/to/file');\n$request = new HTMLRequest($index);\n$request->setWebhookURL('http://myapp.com/webhook/');\n$request->addWebhookURLHTTPHeader('Your-Header', 'Foo');\n$resp = $client->post($request);\n")))))}d.isMDXComponent=!0}}]);
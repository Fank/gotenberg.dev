"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[195],{425:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,o),hidden:a},t)}},4259:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(7462),n=a(7294),r=a(6010),o=a(1048),s=a(3609),c=a(1943),m=a(2957);const i="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:o,values:d,groupId:h,className:p}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??b.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),g=(0,s.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const E=null===o?o:o??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==E&&!f.some((e=>e.value===E)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${E}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,c.U)(),[y,k]=(0,n.useState)(E),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,m.o5)();if(null!=h){const e=v[h];null!=e&&e!==y&&f.some((t=>t.value===e))&&k(e)}const Z=e=>{const t=e.currentTarget,a=w.indexOf(t),l=f[a].value;l!==y&&(T(t),k(l),null!=h&&N(h,String(l)))},_=e=>{let t=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",i)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},p)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>w.push(e),onKeyDown:_,onClick:Z},o,{className:(0,r.Z)("tabs__item",u,o?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,n.cloneElement)(b.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function h(e){const t=(0,o.Z)();return n.createElement(d,(0,l.Z)({key:String(t)},e))}},4980:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var l=a(7294),n=a(1154),r=a(9962);const o="hero_VsTY",s="getStartedButton_G3xV",c="githubIcon_ACNJ",m="githubButtonText_fonQ",i="logo_A_gj";var u=a(6010),d=a(3699),h=a(9524);function p(){return l.createElement("header",{className:o},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--6"},l.createElement("h1",null,"A Docker-powered stateless API ",l.createElement("br",null),l.createElement("span",{className:"highlight"},"for PDF files")),l.createElement(d.Z,{className:(0,u.Z)("button button--primary button--lg",s),to:"/docs/get-started/live-demo"},"Get Started"),l.createElement(d.Z,{className:"button button--secondary button--lg",to:"https://github.com/gotenberg/gotenberg"},l.createElement("img",{className:c,src:(0,h.Z)("/img/github.svg"),alt:"GitHub Logo"})," ",l.createElement("span",{className:m},"GitHub")),l.createElement("p",{className:"padding-top--md"},"Available on ",l.createElement("strong",null,"amd64"),", ",l.createElement("strong",null,"arm64"),","," ",l.createElement("strong",null,"armhf"),", and ",l.createElement("strong",null,"i386")," architectures")),l.createElement("div",{className:"col col--6"},l.createElement("img",{className:i,src:(0,h.Z)("/img/logo_jed.png"),alt:"Gotenberg Hero Logo"})))))}const b="section_X9Ku",f="text_dS2w";function g(){return l.createElement("section",{className:b},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col"},l.createElement("div",{className:f},l.createElement("strong",null,"30+ million")," pulls from Docker Hub \u2764\ufe0f")))))}var E=a(4259),v=a(425),N=a(9319);const y="section_s6uU",k="darker_YYo3",w="paddingTopLg_w2m2",T="wantMore_dJVm",Z=[{label:"Chromium",value:"chromium",content:l.createElement(N.Z,{className:"bash",children:"\ncurl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--form 'url=\"https://my.url\"' \\\n--form 'landscape=\"true\"' \\\n--form 'marginTop=\"1\"' \\\n--form 'marginBottom=\"1\"' \\\n-o my.pdf\n"})},{label:"LibreOffice",value:"libreoffice",content:l.createElement(N.Z,{className:"bash",children:"\ncurl \\\n--request POST 'http://localhost:3000/forms/libreoffice/convert' \\\n--form 'files=@\"/path/to/file.docx\"' \\\n--form 'files=@\"/path/to/file.xlsx\"' \\\n--form 'merge=\"true\"' \\\n--form 'pdfFormat=\"PDF/A-1a\"' \\\n-o my.pdf\n"})},{label:"PDF Engines",value:"pdfengines",content:l.createElement(N.Z,{className:"bash",children:"\ncurl \\\n--request POST 'http://localhost:3000/forms/pdfengines/merge' \\\n--form 'files=@\"/path/to/file1.pdf\"' \\\n--form 'files=@\"/path/to/file2.pdf\"' \\\n--form 'files=@\"/path/to/file3.pdf\"' \\\n--form 'files=@\"/path/to/file4.pdf\"' \\\n-o my.pdf\n"})},{label:"...",value:"more",content:l.createElement("div",{className:"text--center"},l.createElement("p",{className:"padding-top--lg padding-bottom--md"},"The API provides many more options and documents to convert \ud83d\ude80"),l.createElement(d.Z,{className:"button button--secondary button--lg margin-bottom--lg",to:"/docs/modules/api"},"Learn More"))}];function _(){return l.createElement("span",null,l.createElement("section",{className:y},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--6"},l.createElement(E.Z,{defaultValue:"chromium",values:Z},Z.map(((e,t)=>l.createElement(v.Z,{key:t,value:e.value},e.content))))),l.createElement("div",{className:"col col--6"},l.createElement("h2",null,"Convert, merge ",l.createElement("span",{className:"highlight"},"and more!")),l.createElement("p",null,"Gotenberg provides a developer-friendly API to interact with powerful tools like Chromium and LibreOffice for converting numerous document formats (HTML, Markdown, Word, Excel, etc.) into PDF files, and more!"),l.createElement("p",null,"Thanks to Docker, you don't have to install each tool in your environments; drop the Docker image in your stack, and you're good to go!")))))," ",l.createElement("section",{className:(0,u.Z)(y,k)},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col"},l.createElement("h2",null,l.createElement("span",{className:"highlight"},"Asynchronous")," workflow"))),l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--6"},l.createElement("p",{className:w},"The webhook feature allows you to upload the output file to the destination of your choice."),l.createElement("p",null,"There are many options to fit your requirements, from the custom HTTP headers sent to your webhook to the HTTP method used to call it.")),l.createElement("div",{className:"col col--6"},l.createElement(N.Z,{className:"bash",children:"\ncurl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--header 'Gotenberg-Webhook-Extra-Http-Headers: {\"MyHeader\": \"MyValue\"}' \\\n--header 'Gotenberg-Webhook-Url: https://my.webhook.url' \\\n--header 'Gotenberg-Webhook-Method: PUT' \\\n--header 'Gotenberg-Webhook-Error-Url: https://my.webhook.error.url' \\\n--header 'Gotenberg-Webhook-Error-Method: POST' \\\n--form 'url=\"https://my.url\"'\n"})))))," ",l.createElement("section",{className:y},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col"},l.createElement("h2",null,"A modular ",l.createElement("span",{className:"highlight"},"platform")))),l.createElement("div",{className:"row"},l.createElement("div",{className:"col"},l.createElement("div",{className:"text--center"},l.createElement("p",null,"Gotenberg is a platform composed of modules; each module has properties you may customize to your flavor."),l.createElement(N.Z,{children:"\ndocker run --rm -p 80:80 gotenberg/gotenberg:7 gotenberg --api-port=80 --api-process-timeout=10s --libreoffice-disable-routes --log-level=debug\n"})))),l.createElement("div",{className:"row"},l.createElement("div",{className:"col"},l.createElement("div",{className:"text--center"},l.createElement("p",{className:T},"\ud83d\ude80"," ",l.createElement("span",{className:"highlight"},l.createElement("b",null,"More customizations?"))," ","Build your own Docker image by adding new tools and create modules that provide new routes to the API."),l.createElement(d.Z,{className:"button button--secondary button--lg",to:"https://pkg.go.dev/github.com/gotenberg/gotenberg/v7"},"Go Reference")))))))}function P(){const{siteConfig:e}=(0,r.Z)();return l.createElement(n.Z,{title:e.title,description:e.tagLine},l.createElement(p,null),l.createElement("main",null,l.createElement(g,null),l.createElement(_,null)))}}}]);
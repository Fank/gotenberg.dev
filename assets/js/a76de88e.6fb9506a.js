"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[624],{3753:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(5893),t=n(1151);const o={id:"troubleshooting",title:"Troubleshooting"},s=void 0,l={id:"troubleshooting",title:"Troubleshooting",description:"This page comprises a selection of frequently encountered problems and their corresponding solutions associated with",source:"@site/docs/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/docs/troubleshooting.mdx",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"version-8.x",previous:{title:"Configuration",permalink:"/docs/configuration"}},a={},c=[{value:"Chromium",id:"chromium",level:2},{value:"Oversized PDF Files",id:"oversized-pdf-files",level:3},{value:"Trouble Starting",id:"trouble-starting",level:3},{value:"Printing Failed (-32000)",id:"printing-failed--32000",level:3},{value:"Dealing with Timeouts",id:"timeouts-chromium",level:3},{value:"LibreOffice",id:"libreoffice",level:2},{value:"PDF/A-1a",id:"pdfa-1a",level:3},{value:"Internal Server Error",id:"internal-server-error",level:3},{value:"Trouble Starting",id:"trouble-starting-1",level:3},{value:"Dealing with Timeouts",id:"timeouts-libreoffice",level:3}];function d(e){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"This page comprises a selection of frequently encountered problems and their corresponding solutions associated with\nGotenberg. Given the wide array of tools integrated within Gotenberg, it can sometimes be challenging to pinpoint the\nroot of an issue."}),"\n",(0,r.jsx)(i.p,{children:"However, should you encounter an issue not addressed here, kindly take the following steps:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["Verify whether your issue has already been discussed or identified within the ",(0,r.jsx)(i.a,{href:"https://github.com/gotenberg/gotenberg/issues",children:"GitHub issues"}),"\nor the ",(0,r.jsx)(i.a,{href:"https://github.com/gotenberg/gotenberg/discussions",children:"GitHub discussions"}),"."]}),"\n",(0,r.jsx)(i.li,{children:"If it hasn't been addressed, feel free to open a new issue or initiate a discussion, based on the nature of your\npredicament."}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"chromium",children:"Chromium"}),"\n",(0,r.jsxs)(i.p,{children:["Gotenberg internally employs the same protocol as ",(0,r.jsx)(i.a,{href:"https://pptr.dev/",children:"Puppeteer"}),' for communication with Chromium.\nTherefore, it may be useful to include "puppeteer" as a keyword when searching for solutions to your issue. More often\nthan not, you\'re likely to find an answer to your problem.']}),"\n",(0,r.jsx)(i.h3,{id:"oversized-pdf-files",children:"Oversized PDF Files"}),"\n",(0,r.jsxs)(i.p,{children:["The usage of webfonts tends to considerably enlarge the PDF file size. If you wish to use a custom font, please refer\nto the ",(0,r.jsx)(i.a,{href:"configuration#fonts",children:"fonts configuration section"})," to learn how to install them directly into the Docker container."]}),"\n",(0,r.jsxs)(i.p,{children:["For additional details, see issue ",(0,r.jsx)(i.a,{href:"https://github.com/gotenberg/gotenberg/issues/521",children:"#521"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"trouble-starting",children:"Trouble Starting"}),"\n",(0,r.jsx)(i.p,{children:"Startup failures can happen due to several factors. Here are some known solutions:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Increase the start timeout. See the ",(0,r.jsx)(i.a,{href:"configuration#chromium",children:"Chromium module configuration"})," for guidance."]}),"\n",(0,r.jsxs)(i.li,{children:["If you're using macOS, consider disabling the ",(0,r.jsx)(i.em,{children:"Use Virtualization Framework"})," feature. For additional details, see issue\n",(0,r.jsx)(i.a,{href:"https://github.com/gotenberg/gotenberg/issues/792",children:"#792"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"printing-failed--32000",children:"Printing Failed (-32000)"}),"\n",(0,r.jsx)(i.p,{children:"When converting large documents, this error may appear in your logs. Increasing Gotenberg's memory allocation is a\ncommonly suggested solution."}),"\n",(0,r.jsxs)(i.p,{children:["For additional details, refer to issue ",(0,r.jsx)(i.a,{href:"https://github.com/gotenberg/gotenberg/issues/788",children:"#788"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"timeouts-chromium",children:"Dealing with Timeouts"}),"\n",(0,r.jsxs)(i.p,{children:["If you are experiencing timeouts (i.e., ",(0,r.jsx)(i.em,{children:"503 Service Unavailable"}),"), consider the following steps to troubleshoot your issue:"]}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Assess whether your Gotenberg instance is overloaded. If this is the case, consider increasing the number of instances."}),"\n",(0,r.jsx)(i.li,{children:"Ensure that the page you are attempting to convert doesn't require resources inaccessible from the Gotenberg instance."}),"\n",(0,r.jsxs)(i.li,{children:["Consider increasing the API timeout. See the ",(0,r.jsx)(i.a,{href:"configuration#api",children:"API module configuration"})," for guidance."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"libreoffice",children:"LibreOffice"}),"\n",(0,r.jsx)(i.h3,{id:"pdfa-1a",children:"PDF/A-1a"}),"\n",(0,r.jsxs)(i.p,{children:["Beginning with version 7.6, LibreOffice has discontinued support for ",(0,r.jsx)(i.code,{children:"PDF/A-1a"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["Previously, LibreOffice claimed to generate ",(0,r.jsx)(i.code,{children:"PDF/A-1a"})," files, a claim that held true for straightforward documents.\nHowever, in many instances, the software was actually producing ",(0,r.jsx)(i.code,{children:"PDF/A-1b"})," files."]}),"\n",(0,r.jsxs)(i.p,{children:["Due to specific metadata, some validators incorrectly identified these documents as compliant with ",(0,r.jsx)(i.code,{children:"PDF/A-1a"})," standards,\ndespite this not being the case."]}),"\n",(0,r.jsxs)(i.p,{children:["For additional details, refer to this LibreOffice ",(0,r.jsx)(i.a,{href:"https://git.libreoffice.org/core/+/c4b12d06698402984b3ffdbd2c139f261fa35ca1%5E%21",children:"commit"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"internal-server-error",children:"Internal Server Error"}),"\n",(0,r.jsxs)(i.p,{children:["If you consistently encounter a ",(0,r.jsx)(i.em,{children:"500 Internal Server Error"})," while attempting to convert an Office document, a common\nsolution is to boost the memory and CPU resources allocated to Gotenberg."]}),"\n",(0,r.jsxs)(i.p,{children:["For additional details, refer to issue ",(0,r.jsx)(i.a,{href:"https://github.com/gotenberg/gotenberg/issues/465",children:"#465"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"trouble-starting-1",children:"Trouble Starting"}),"\n",(0,r.jsx)(i.p,{children:"Startup failures can happen due to several factors. Here are some known solutions:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Increase the start timeout. See the ",(0,r.jsx)(i.a,{href:"configuration#libreoffice",children:"LibreOffice module configuration"})," for guidance."]}),"\n",(0,r.jsxs)(i.li,{children:["For Debian users, it's recommended to use a current version of the distribution. For more information, refer to issue ",(0,r.jsx)(i.a,{href:"https://github.com/gotenberg/gotenberg/issues/794",children:"#794"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Users of Synology and Paperless-ngx should consult ",(0,r.jsx)(i.a,{href:"https://github.com/gotenberg/gotenberg/issues/763#issuecomment-1890472047",children:"this comment"}),"\nfor a proven configuration setup."]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"timeouts-libreoffice",children:"Dealing with Timeouts"}),"\n",(0,r.jsxs)(i.p,{children:["If you are experiencing timeouts (i.e., ",(0,r.jsx)(i.em,{children:"503 Service Unavailable"}),"), consider the following steps to resolve your issue:"]}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Check if your Gotenberg instance is overloaded. If so, consider increasing the number of instances or enhancing the\nmemory and CPU resources allocated to Gotenberg."}),"\n",(0,r.jsxs)(i.li,{children:["Consider increasing the API timeout. Refer to the ",(0,r.jsx)(i.a,{href:"configuration#api",children:"API module configuration"})," for guidance."]}),"\n",(0,r.jsxs)(i.li,{children:["Consider increasing the LibreOffice instance startup timeout. Refer to the\n",(0,r.jsx)(i.a,{href:"configuration#libreoffice",children:"LibreOffice module configuration"})," for guidance."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>s});var r=n(7294);const t={},o=r.createContext(t);function s(e){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[368],{8199:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var a=n(7294),o=n(6905),i=n(9488),s=n(3702),r=n(8259),c=n(4432),l=n(7325),d=n(2957),u=n(3266);const m={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var b=n(5893);function p(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:s,cancelScroll:r}=(0,d.Ct)();return(0,d.RF)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:a>=s?(r(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.S)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,b.jsx)("button",{"aria-label":(0,l.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",s.k.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var h=n(8986),x=n(6550),f=n(3488),j=n(107),v=n(6811);function k(e){return(0,b.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const _={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function C(e){let{onClick:t}=e;return(0,b.jsx)("button",{type:"button",title:(0,l.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,l.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",_.collapseSidebarButton),onClick:t,children:(0,b.jsx)(k,{className:_.collapseSidebarButtonIcon})})}var g=n(5830),S=n(3768);const I=Symbol("EmptyContext"),N=a.createContext(I);function T(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,b.jsx)(N.Provider,{value:i,children:t})}var B=n(4639),L=n(9003),Z=n(4791),y=n(1048);function A(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,b.jsx)("button",{"aria-label":t?(0,l.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,l.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:a})}function E(e){let{item:t,onItemClick:n,activePath:i,level:c,index:l,...d}=e;const{items:u,label:m,collapsible:p,className:h,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,j.L)(),v=function(e){const t=(0,y.Z)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,r.LM)(e):void 0),[e,t])}(t),k=(0,r._F)(t,i),_=(0,L.Mg)(x,i),{collapsed:C,setCollapsed:g}=(0,B.u)({initialState:()=>!!p&&(!k&&t.collapsed)}),{expandedItem:T,setExpandedItem:E}=function(){const e=(0,a.useContext)(N);if(e===I)throw new S.i6("DocSidebarItemsExpandedStateProvider");return e}(),w=function(e){void 0===e&&(e=!C),E(e?null:l),g(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,S.D9)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:k,collapsed:C,updateCollapsed:w}),(0,a.useEffect)((()=>{p&&null!=T&&T!==l&&f&&g(!0)}),[p,T,l,g,f]),(0,b.jsxs)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemCategory,s.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":C},h),children:[(0,b.jsxs)("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_}),children:[(0,b.jsx)(Z.Z,{className:(0,o.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!x&&p,"menu__link--active":k}),onClick:p?e=>{n?.(t),x?w(!1):(e.preventDefault(),w())}:()=>{n?.(t)},"aria-current":_?"page":void 0,role:p&&!x?"button":void 0,"aria-expanded":p&&!x?!C:void 0,href:p?v??"#":v,...d,children:m}),x&&p&&(0,b.jsx)(A,{collapsed:C,categoryLabel:m,onClick:e=>{e.preventDefault(),w()}})]}),(0,b.jsx)(B.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C,children:(0,b.jsx)(V,{items:u,tabIndex:C?-1:0,onItemClick:n,activePath:i,level:c+1})})]})}var w=n(2735),H=n(4082);const W={menuExternalLink:"menuExternalLink_NmtK"};function F(e){let{item:t,onItemClick:n,activePath:a,level:i,index:c,...l}=e;const{href:d,label:u,className:m,autoAddBaseUrl:p}=t,h=(0,r._F)(t,a),x=(0,w.Z)(d);return(0,b.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),children:(0,b.jsxs)(Z.Z,{className:(0,o.Z)("menu__link",!x&&W.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...l,children:[u,!x&&(0,b.jsx)(H.Z,{})]})},u)}const M={menuHtmlItem:"menuHtmlItem_M9Kj"};function R(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:r,className:c}=t;return(0,b.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(n),r&&[M.menuHtmlItem,"menu__list-item"],c),dangerouslySetInnerHTML:{__html:i}},a)}function P(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,b.jsx)(E,{item:t,...n});case"html":return(0,b.jsx)(R,{item:t,...n});default:return(0,b.jsx)(F,{item:t,...n})}}function D(e){let{items:t,...n}=e;const a=(0,r.f)(t,n.activePath);return(0,b.jsx)(T,{children:a.map(((e,t)=>(0,b.jsx)(P,{item:e,index:t,...n},t)))})}const V=(0,a.memo)(D),U={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function K(e){let{path:t,sidebar:n,className:i}=e;const r=function(){const{isActive:e}=(0,g.nT)(),[t,n]=(0,a.useState)(e);return(0,d.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,b.jsx)("nav",{"aria-label":(0,l.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",U.menu,r&&U.menuWithAnnouncementBar,i),children:(0,b.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(V,{items:n,activePath:t,level:1})})})}const Y="sidebar_njMd",z="sidebarWithHideableNavbar_wUlq",G="sidebarHidden_VK0M",O="sidebarLogo_isFc";function Q(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:r}}}=(0,j.L)();return(0,b.jsxs)("div",{className:(0,o.Z)(Y,s&&z,i&&G),children:[s&&(0,b.jsx)(v.Z,{tabIndex:-1,className:O}),(0,b.jsx)(K,{path:t,sidebar:n}),r&&(0,b.jsx)(C,{onClick:a})]})}const q=a.memo(Q);var J=n(3086),X=n(735);const $=e=>{let{sidebar:t,path:n}=e;const a=(0,X.e)();return(0,b.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(V,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ee(e){return(0,b.jsx)(J.Zo,{component:$,props:e})}const te=a.memo(ee);function ne(e){const t=(0,f.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,b.jsxs)(b.Fragment,{children:[n&&(0,b.jsx)(q,{...e}),a&&(0,b.jsx)(te,{...e})]})}const ae={roomForCarbon:"roomForCarbon_E11s",carbonWrapper:"carbonWrapper_TZTl"};function oe(e){const t=a.useRef(),n=(0,f.i)(),{pathname:o}=(0,x.TH)();return a.useEffect((()=>{if("desktop"!==n)return;const e=function(e,t){void 0===t&&(t={});const n=document.createElement("script");return n.async=!0,Object.keys(t).forEach((e=>n.setAttribute(e,t[e]))),n.src=e,n}("//cdn.carbonads.com/carbon.js?serve=CWYI4KQL&placement=gotenbergdev",{type:"text/javascript",id:"_carbonads_js"}),a=t.current;a.classList.remove(ae.roomForCarbon);const o=document.createElement("div");return o.classList.add(ae.carbonWrapper),o.appendChild(e),a.firstChild.insertBefore(o,null),()=>{a.classList.add(ae.roomForCarbon),o.parentElement.removeChild(o)}}),[o,n]),(0,b.jsx)("span",{ref:t,className:ae.roomForCarbon,children:(0,b.jsx)(ne,{...e})})}const ie={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function se(e){let{toggleSidebar:t}=e;return(0,b.jsx)("div",{className:ie.expandButton,title:(0,l.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,l.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,b.jsx)(k,{className:ie.expandButtonIcon})})}const re={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function ce(e){let{children:t}=e;const n=(0,c.V)();return(0,b.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function le(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:r}=(0,x.TH)(),[c,l]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&l(!1),!c&&(0,h.n)()&&l(!0),i((e=>!e))}),[i,c]);return(0,b.jsx)("aside",{className:(0,o.Z)(s.k.docs.docSidebarContainer,re.docSidebarContainer,n&&re.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(re.docSidebarContainer)&&n&&l(!0)},children:(0,b.jsx)(ce,{children:(0,b.jsxs)("div",{className:(0,o.Z)(re.sidebarViewport,c&&re.sidebarViewportHidden),children:[(0,b.jsx)(oe,{sidebar:t,path:r,onCollapse:d,isHidden:c}),c&&(0,b.jsx)(se,{toggleSidebar:d})]})})})}const de={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function ue(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,c.V)();return(0,b.jsx)("main",{className:(0,o.Z)(de.docMainContainer,(t||!a)&&de.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",de.docItemWrapper,t&&de.docItemWrapperEnhanced),children:n})})}const me={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function be(e){let{children:t}=e;const n=(0,c.V)(),[o,i]=(0,a.useState)(!1);return(0,b.jsxs)("div",{className:me.docsWrapper,children:[(0,b.jsx)(p,{}),(0,b.jsxs)("div",{className:me.docRoot,children:[n&&(0,b.jsx)(le,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,b.jsx)(ue,{hiddenSidebarContainer:o,children:t})]})]})}var pe=n(5737);function he(e){const t=(0,r.SN)(e);if(!t)return(0,b.jsx)(pe.Z,{});const{docElement:n,sidebarName:a,sidebarItems:l}=t;return(0,b.jsx)(i.FG,{className:(0,o.Z)(s.k.page.docsDocPage),children:(0,b.jsx)(c.b,{name:a,items:l,children:(0,b.jsx)(be,{children:n})})})}},5737:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var a=n(6905),o=n(7325),i=n(3899),s=n(5893);function r(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.Z)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.Z,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);
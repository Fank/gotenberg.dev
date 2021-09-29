"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[1980],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9793:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],c={id:"ownership",title:"Ownership"},u=void 0,p={unversionedId:"customize/ownership",id:"customize/ownership",isDocsHomePage:!1,title:"Ownership",description:"By default, the Docker image uses a dedicated non-root user called gotenberg with uid and gid 1001.",source:"@site/docs/customize/ownership.md",sourceDirName:"customize",slug:"/customize/ownership",permalink:"/docs/customize/ownership",editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/docs/customize/ownership.md",tags:[],version:"current",frontMatter:{id:"ownership",title:"Ownership"},sidebar:"version-7.x",previous:{title:"More",permalink:"/docs/modules/more"},next:{title:"Fonts",permalink:"/docs/customize/fonts"}},s=[],l={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default, the Docker image uses a dedicated non-root user called ",(0,i.kt)("inlineCode",{parentName:"p"},"gotenberg")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"uid")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"gid")," ",(0,i.kt)("strong",{parentName:"p"},"1001"),"."),(0,i.kt)("p",null,"If you want to change these identifiers, you will have to build a Docker image."),(0,i.kt)("p",null,"For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-docker"},"FROM gotenberg/gotenberg:7\n\nUSER root\n\nRUN usermod -u {uid} -g {gid} gotenberg\n\nUSER gotenberg\n")))}d.isMDXComponent=!0}}]);
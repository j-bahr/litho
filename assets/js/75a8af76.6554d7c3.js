(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{122:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return s}));var i=t(3),a=t(7),o=(t(0),t(182)),c=t(38),r={id:"enabling-reconciliation",title:"Enabling Reconciliation"},l={unversionedId:"deep-dive/reconciliation/enabling-reconciliation",id:"deep-dive/reconciliation/enabling-reconciliation",isDocsHomePage:!1,title:"Enabling Reconciliation",description:"Reconciliation is enabled by default.",source:"@site/../docs/deep-dive/reconciliation/enabling-reconciliation.mdx",slug:"/deep-dive/reconciliation/enabling-reconciliation",permalink:"/docs/deep-dive/reconciliation/enabling-reconciliation",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/deep-dive/reconciliation/enabling-reconciliation.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Introduction",permalink:"/docs/deep-dive/reconciliation"},next:{title:"Incremental Mount",permalink:"/docs/deep-dive/incremental-mount"}},b=[{value:"ComponentTree",id:"componenttree",children:[]},{value:"RecyclerCollectionComponent",id:"recyclercollectioncomponent",children:[]},{value:"Sections",id:"sections",children:[]}],p={toc:b};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Reconciliation is enabled by default."))),Object(o.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"It has been explicitly disabled throughout fbsource because reconciliation skips some lifecycle calls which some components may have (incorrectly) come to rely on. So, please remove the usages of the following deprecated APIs in your surface before proceeding.")))),Object(o.b)(c.OssOnly,{mdxType:"OssOnly"},Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Please remove the usages of the following deprecated APIs in your surface before proceeding.")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"// Remove usages of\nLithoView#create(Context, Component, boolean): LithoView\nLithoView#create(ComponentContext, Component, boolean): LithoView\nLithoView#setComponentWithoutReconciliation(Component): void\nLithoView#setComponentAsyncWithoutReconciliation(Component): void\n\n// Instead use\nLithoView#create(Context, Component): LithoView\nLithoView#create(ComponentContext, Component): LithoView\nLithoView#setComponent(Component): void\nLithoView#setComponentAsync(Component): void\n")),Object(o.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Please remove the usages of the prop ",Object(o.b)("inlineCode",{parentName:"p"},"isReconciliationEnabled")," from the following components in your surface before proceeding:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"FBInfiniteHScroll")))))),Object(o.b)("h3",{id:"componenttree"},"ComponentTree"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ComponentTree")," builder exposes an API to enable or disable reconciliation."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"ComponentTree.create(context)\n  .isReconciliationEnabled(true)\n  .build();\n")),Object(o.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(o.b)("p",null,"Example integrations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://fburl.com/diffusion/azpz7q8u"},"Feed")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://fburl.com/diffusion/xv0puz80"},"Story Viewer")))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In this integration the config is not passed into any Sections within the component\nhierarchy. It needs to be explicitly set in the Sections (see below). There are plans to enable\npropagation over the Section boundary in future milestones.**"))),Object(o.b)("h3",{id:"recyclercollectioncomponent"},"RecyclerCollectionComponent"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"RecyclerBinderConfiguration")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"RecyclerBinder")," builders both expose an API to enable or\ndisable reconciliation."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"RecyclerBinderConfiguration.create()\n  .isReconciliationEnabled(false)\n  .build();\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"new RecyclerBinder.Builder()\n  .isReconciliationEnabled(true)\n  .build(context);\n")),Object(o.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(o.b)("p",null,"Example integrations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://fburl.com/diffusion/l10jx2ys"},"Notifications Tab")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://fburl.com/diffusion/ld30lvlm"},"Watch Tab")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://fburl.com/diffusion/tp4j1arg"},"Profile Tab")))),Object(o.b)("h3",{id:"sections"},"Sections"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ComponentRenderInfo")," builder exposes an API to enable or disable reconciliation for individual\nSections in a ",Object(o.b)("inlineCode",{parentName:"p"},"GroupSectionSpec"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"ComponentRenderInfo.create()\n  .component(component)\n  .customAttribute(ComponentRenderInfo.RECONCILIATION_ENABLED, false)\n  .build();\n")),Object(o.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(o.b)("p",null,"Example integrations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://fburl.com/diffusion/2h1npnoj"},"PaginatedStoriesHScrollSectionSpec")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://fburl.com/diffusion/jhsnym17"},"StoriesHScrollSectionSpec")))))}s.isMDXComponent=!0},182:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var i=t(0),a=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),p=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=i,u=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return t?a.a.createElement(u,r(r({ref:n},b),{},{components:t})):a.a.createElement(u,r({ref:n},b))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=m;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,c[1]=r;for(var b=2;b<o;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
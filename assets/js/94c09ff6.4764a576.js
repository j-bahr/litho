(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(3),i=n(7),r=(n(0),n(182)),a=(n(38),{id:"reconciliation",title:"Introduction"}),c={unversionedId:"deep-dive/reconciliation",id:"deep-dive/reconciliation",isDocsHomePage:!1,title:"Introduction",description:"Reconciliation is an implementation detail in Litho\u2019s layout calculation process. Instead of",source:"@site/../docs/deep-dive/reconciliation.mdx",slug:"/deep-dive/reconciliation",permalink:"/docs/deep-dive/reconciliation",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/deep-dive/reconciliation.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Coding Style",permalink:"/docs/best-practices/coding-style"},next:{title:"Enabling Reconciliation",permalink:"/docs/deep-dive/reconciliation/enabling-reconciliation"}},l=[{value:"Tradeoffs",id:"tradeoffs",children:[]}],s={toc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Reconciliation is an implementation detail in Litho\u2019s layout calculation process. Instead of\nrecreating the entire layout tree for every update reconciliation enables Litho to clone the\nunmodified subtrees and only recreate the subtree which has changed."),Object(r.b)("p",null,"When using Litho, the component hierarchy is determined by what is returned by the\n",Object(r.b)("inlineCode",{parentName:"p"},"OnCreateLayout")," method. On the next state or prop update, the ",Object(r.b)("inlineCode",{parentName:"p"},"OnCreateLayout")," may return a different\ntree of components. Litho uses reconciliation to figure out which components should be re-created\nand which can be re-used (read cloned)."),Object(r.b)("p",null,"In essence, this means Litho will not call (most) lifecycle methods of components which were\nunaffected by the update. Reconciliation doubles down on the requirement that component specs must\nbe immutable and should not rely on side effects to achieve any desired behaviour."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"As of December 2020 reconciliation is only implemented for state updates."))),Object(r.b)("h2",{id:"tradeoffs"},"Tradeoffs"),Object(r.b)("p",null,"It is important to remember that the reconciliation algorithm is an implementation detail. Litho\ncould re-create the whole hierarchy on every action; the end result would be the same. Just to be\nclear, re-creation in this context means calling ",Object(r.b)("inlineCode",{parentName:"p"},"OnCreateLayout")," for the modified component, it\ndoesn\u2019t mean Litho will unmount and remount them. Litho will only mount and unmount items will\nwhich have changed."),Object(r.b)("p",null,"In order to reconcile changes, Litho keeps the previous component hierarchy in memory. This\nincreases memory usage and can potentially increase OOMs."))}d.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,b=p["".concat(a,".").concat(m)]||p[m]||u[m]||r;return n?i.a.createElement(b,c(c({ref:t},s),{},{components:n})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
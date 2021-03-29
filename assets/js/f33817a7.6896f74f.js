(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{171:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(3),i=t(7),a=(t(0),t(182)),c=t(183),o={id:"api-overview",title:"API \ud83d\udcc4: annotations, events and lifecycles"},s={unversionedId:"sections/api-overview",id:"sections/api-overview",isDocsHomePage:!1,title:"API \ud83d\udcc4: annotations, events and lifecycles",description:"T79180601",source:"@site/../docs/sections/api-overview.mdx",slug:"/sections/api-overview",permalink:"/docs/sections/api-overview",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/sections/api-overview.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Nested scrolling and measurement",permalink:"/docs/sections/hscrolls"},next:{title:"Advanced: Prefetch and pagination",permalink:"/docs/sections/working-ranges"}},l=[{value:"Sections",id:"sections",children:[{value:"DataDiffSection",id:"datadiffsection",children:[]},{value:"GroupSection",id:"groupsection",children:[]}]},{value:"Ranges",id:"ranges",children:[]},{value:"Services",id:"services",children:[]},{value:"Sections",id:"sections-1",children:[{value:"GroupSection",id:"groupsection-1",children:[]}]}],p={toc:l};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"UNDER CONSTRUCTION")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"T79180601"))),Object(a.b)("h1",{id:"annotations-and-events"},"Annotations and Events"),Object(a.b)("h2",{id:"sections"},"Sections"),Object(a.b)("h3",{id:"datadiffsection"},"DataDiffSection"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@OnEvent(RenderEvent.class)")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@OnEvent(OnCheckIsSameItemEvent.class)")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@OnEvent(OnCheckIsSameContentEvent.class)")),Object(a.b)("h3",{id:"groupsection"},"GroupSection"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@OnCreateChildren")),Object(a.b)("h2",{id:"ranges"},"Ranges"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/WorkingRange.html"},Object(a.b)("inlineCode",{parentName:"a"},"WorkingRange"))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@OnRegisterRanges")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'@OnEnteredRange(name = "<name>")')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'@OnExitedRange(name = "<name>")')),Object(a.b)("h2",{id:"services"},"Services"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@OnCreateService")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@OnBindService")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@OnUnbindService")),Object(a.b)("h1",{id:"lifecycles"},"Lifecycles"),Object(a.b)("h2",{id:"sections-1"},"Sections"),Object(a.b)("h3",{id:"groupsection-1"},"GroupSection"),Object(a.b)("img",{src:Object(c.a)("/images/flow-chart-v0.24.0-group-section-spec.svg"),alt:"GroupSection Spec lifecycle flowchart",className:"white-background"}))}b.isMDXComponent=!0},182:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return v}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(t),u=r,v=b["".concat(c,".").concat(u)]||b[u]||d[u]||a;return t?i.a.createElement(v,o(o({ref:n},l),{},{components:t})):i.a.createElement(v,o({ref:n},l))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<a;l++)c[l]=t[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},183:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return c}));var r=t(10),i=t(184);function a(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,c=a.forcePrependBaseUrl,o=void 0!==c&&c,s=a.absolute,l=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if(Object(i.b)(t))return t;if(o)return n+t;var p=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+p:p}(a,t,e,n)}}}function c(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},184:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}))}}]);
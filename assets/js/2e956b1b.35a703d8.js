"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3495],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){return function(t){var n=d(t.components);return r.createElement(e,i({},t,{components:n}))}},d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(a,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,c(c({ref:t},l),{},{components:n})):r.createElement(h,c({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},13919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>o})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>i,default:()=>a});var r=n(52263),o=n(13919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},63557:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>d,default:()=>u});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=n(44996),c=["components"],s={id:"recycling",title:"Recycling"},l=void 0,p={unversionedId:"recycling",id:"recycling",isDocsHomePage:!1,title:"Recycling",description:"Device screens typically refresh at a rate of 60 frames per second. To provide smooth performances, an app needs to be able to render changes to our UI continuously every 16ms. Failing to respect this time constraint leads to dropped frames and poor user experience.",source:"@site/../docs/recycling.mdx",sourceDirName:".",slug:"/recycling",permalink:"/docs/recycling",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/recycling.mdx",tags:[],version:"current",frontMatter:{id:"recycling",title:"Recycling"}},d=[{value:"Incremental recycling with Litho",id:"incremental-recycling-with-litho",children:[],level:2}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Device screens typically refresh at a rate of 60 frames per second. To provide smooth performances, an app needs to be able to render changes to our UI continuously every 16ms. Failing to respect this time constraint leads to dropped frames and poor user experience.\nAs UIs become increasingly sophisticated, it gets harder to complete all the rendering work within this time frame. This proves to be especially challenging with dynamic scrolling surfaces, as new pieces of UI are constantly being introduced on screen.",(0,i.mdx)("br",{parentName:"p"}),"\n","Android solves this problem this with ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/layout/recyclerview.html"},"RecyclerView"),", a dynamic UI container that is able to display elements from large data sets by creating only enough views to fill the screen and then recycling and reusing them as the UI scrolls."),(0,i.mdx)("video",{loop:"true",autoplay:"true",class:"video"},(0,i.mdx)("source",{type:"video/mp4",src:(0,a.default)("/videos/recycler_view.mp4")}),(0,i.mdx)("p",null,"Your browser does not support the video element.")),(0,i.mdx)("p",null,"RecyclerView supports the idea of displaying heterogeneous content. To do so, it keeps views in different pools depending on their type.\nWhile this concept works pretty well in simple cases, it can prove to be problematic for UIs with many different view types.\nIn a scenario with many view types, there is a bigger chance that the view coming in the viewport following a scrolling event is a view that the RecyclerView is displaying for the first time.\nIf that happens, RecyclerView has to allocate a new view. The allocation will happen in the same 16ms slot in which RecyclerView also has to bind, measure and layout the newly visible view."),(0,i.mdx)("video",{loop:"true",autoplay:"true",class:"video"},(0,i.mdx)("source",{type:"video/mp4",src:(0,a.default)("/videos/multiple_view_types.mp4")}),(0,i.mdx)("p",null,"Your browser does not support the video element.")),(0,i.mdx)("h2",{id:"incremental-recycling-with-litho"},"Incremental recycling with Litho"),(0,i.mdx)("p",null,"We wanted to have a more scalable and efficient recycling system for Litho and at the same time we wanted to remove the complexity of view types from our API.",(0,i.mdx)("br",{parentName:"p"}),"\n","In Litho the representation of a layout is completely disjointed from the Views and Drawables that will be used to render that layout on screen. This means that by the time we need to put a new View of the RecyclerView on screen, we already know what the content of that item will be and exactly its position relative to the rest of the UI.",(0,i.mdx)("br",{parentName:"p"}),"\n","This allows Litho to completely move away from the concept of View types. Rather than re-using the entire View that represents an item in the RecyclerView we can incrementally use building blocks such at ",(0,i.mdx)("inlineCode",{parentName:"p"},"Text")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"Image")," while the RecyclerView scrolls.",(0,i.mdx)("br",{parentName:"p"}),"\n","This is not possible with traditional Android Views since the layout computation operates on the complete view tree and by the time we know the positions of all Views in a row everything has already been instatiated."),(0,i.mdx)("video",{loop:"true",autoplay:"true",class:"video"},(0,i.mdx)("source",{type:"video/mp4",src:(0,a.default)("/videos/incremental_recycling.mp4")}),(0,i.mdx)("p",null,"Your browser does not support the video element.")),(0,i.mdx)("p",null,"Being able to recycle individual primitive items as ",(0,i.mdx)("inlineCode",{parentName:"p"},"Text")," increases greatly the memory efficiency of an App as now you can recycle any piece of text in your list for any other piece of text.",(0,i.mdx)("br",{parentName:"p"}),"\n","On top of that, since we compute the layout ahead of time, we know exactly at which point a new items needs to become visible, this means that rather than binding and drawing a big view tree in one frame, we can use each frame to introduce a much lower number of primitive items on screen."))}u.isMDXComponent=!0}}]);
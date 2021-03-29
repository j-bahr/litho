(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(182)),o=n(183),s={id:"transition-all-layout",title:"Animating All Layout"},l={unversionedId:"animations/transition-all-layout",id:"animations/transition-all-layout",isDocsHomePage:!1,title:"Animating All Layout",description:"Transition.allLayout() allows easily animating all layout changes, without having to assign transitionKeys to all Components",source:"@site/../docs/animations/transition-all-layout.mdx",slug:"/animations/transition-all-layout",permalink:"/docs/animations/transition-all-layout",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/animations/transition-all-layout.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Types of Transitions",permalink:"/docs/animations/transition-types"},next:{title:"Customizing Transitions",permalink:"/docs/animations/transition-choreography"}},c=[],p={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Transition.html#allLayout--"},Object(i.b)("inlineCode",{parentName:"a"},"Transition.allLayout()"))," allows easily animating all layout changes, without having to assign ",Object(i.b)("inlineCode",{parentName:"p"},"transitionKey"),"s to all ",Object(i.b)("inlineCode",{parentName:"p"},"Component"),"s"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"@OnCreateTransition\nstatic Transition onCreateTransition(ComponentContext c) {\n  return Transition.allLayout().animator(ANIMATOR);\n}\n")),Object(i.b)("p",null,"Note, that ",Object(i.b)("inlineCode",{parentName:"p"},"Transition.allLayout()"),":"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Targets ",Object(i.b)("inlineCode",{parentName:"li"},"AnimatedProperty.X"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Y"),", ",Object(i.b)("inlineCode",{parentName:"li"},"HEIGHT")," and ",Object(i.b)("inlineCode",{parentName:"li"},"WIDTH")," of all ",Object(i.b)("inlineCode",{parentName:"li"},"Component"),"s present in layout tree."),Object(i.b)("li",{parentName:"ol"},"Could be used to define transitions of ",Object(i.b)("a",{parentName:"li",href:"/docs/animations/transition-types#change-transitions"},Object(i.b)("em",{parentName:"a"},"change")," type")," only. For defining ",Object(i.b)("a",{parentName:"li",href:"/docs/animations/transition-types#appear-transitions"},Object(i.b)("em",{parentName:"a"},"appearing"))," and ",Object(i.b)("a",{parentName:"li",href:"/docs/animations/transition-types#disappear-transitions"},Object(i.b)("em",{parentName:"a"},"disappearing"))," transitions, ",Object(i.b)("inlineCode",{parentName:"li"},"transitionKey"),"s still need to be assigned."),Object(i.b)("li",{parentName:"ol"},"Could be used as a part of more ",Object(i.b)("a",{parentName:"li",href:"/docs/animations/transition-choreography"},"complex choreography"),".")),Object(i.b)("p",null,"The following example can be found in ",Object(i.b)("inlineCode",{parentName:"p"},"Litho Sample App"),"->",Object(i.b)("inlineCode",{parentName:"p"},"API Demos"),"->",Object(i.b)("inlineCode",{parentName:"p"},"Animated Badge")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java",metastring:"file=../../sample/src/main/java/com/facebook/samples/litho/animations/animatedbadge/AnimatedBadgeSpec.java start=start end=end",file:"../../sample/src/main/java/com/facebook/samples/litho/animations/animatedbadge/AnimatedBadgeSpec.java",start:"start",end:"end"},"@OnCreateTransition\nstatic Transition onCreateTransition(ComponentContext c) {\n  return Transition.parallel(\n      Transition.allLayout().animator(ANIMATOR),\n      Transition.create(Transition.TransitionKeyType.GLOBAL, TRANSITION_KEY_TEXT)\n          .animate(AnimatedProperties.WIDTH)\n          .appearFrom(0f)\n          .disappearTo(0f)\n          .animator(ANIMATOR),\n      Transition.create(Transition.TransitionKeyType.GLOBAL, TRANSITION_KEY_TEXT)\n          .animate(AnimatedProperties.ALPHA)\n          .appearFrom(0f)\n          .disappearTo(0f)\n          .animator(ANIMATOR));\n}\n")),Object(i.b)("video",{loop:"true",autoplay:"true",class:"video",width:"100%",height:"500px"},Object(i.b)("source",{type:"video/webm",src:Object(o.a)("/videos/transitions/alllayout.webm")}),Object(i.b)("p",null,"Your browser does not support the video element.")))}u.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||i;return n?r.a.createElement(d,s(s({ref:t},c),{},{components:n})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},183:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(10),r=n(184);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,s=void 0!==o&&o,l=i.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+p:p}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},184:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))}}]);
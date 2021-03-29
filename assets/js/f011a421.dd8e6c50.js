(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(182)),o=n(183),p={id:"transition-types",title:"Types of Transitions"},l={unversionedId:"animations/transition-types",id:"animations/transition-types",isDocsHomePage:!1,title:"Types of Transitions",description:"Litho APIs allow you to create animated transitions between two consecutive states of the UI - LayoutStates. We'll be addressing these states as before and after respectively.",source:"@site/../docs/animations/transition-types.mdx",slug:"/animations/transition-types",permalink:"/docs/animations/transition-types",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/animations/transition-types.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Animation basics",permalink:"/docs/animations/transition-basics"},next:{title:"Animating All Layout",permalink:"/docs/animations/transition-all-layout"}},s=[{value:"Change Transitions",id:"change-transitions",children:[]},{value:"Appear Transitions",id:"appear-transitions",children:[]},{value:"Disappear Transitions",id:"disappear-transitions",children:[]}],c={toc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Litho APIs allow you to create animated transitions between two consecutive states of the UI - ",Object(r.b)("inlineCode",{parentName:"p"},"LayoutStates"),". We'll be addressing these states as ",Object(r.b)("em",{parentName:"p"},"before")," and ",Object(r.b)("em",{parentName:"p"},"after")," respectively."),Object(r.b)("p",null,"When defining transitions you need to indicate to the framework what ",Object(r.b)("inlineCode",{parentName:"p"},"Component"),"/",Object(r.b)("inlineCode",{parentName:"p"},"AnimatedProperty")," pairs you want it to animate. Based on presence of the ",Object(r.b)("inlineCode",{parentName:"p"},"Component")," in ",Object(r.b)("em",{parentName:"p"},"before")," and ",Object(r.b)("em",{parentName:"p"},"after")," states we can define 3 types of transitions: ",Object(r.b)("em",{parentName:"p"},"changing"),", ",Object(r.b)("em",{parentName:"p"},"appearing")," and ",Object(r.b)("em",{parentName:"p"},"disappearing"),"."),Object(r.b)("h3",{id:"change-transitions"},"Change Transitions"),Object(r.b)("p",null,"A transition where the target ",Object(r.b)("inlineCode",{parentName:"p"},"Component")," is present in both ",Object(r.b)("em",{parentName:"p"},"before")," and ",Object(r.b)("em",{parentName:"p"},"after")," layouts is called a ",Object(r.b)("em",{parentName:"p"},"change")," transition."),Object(r.b)("p",null,"The sample from the ",Object(r.b)("a",{parentName:"p",href:"/docs/animations/transition-basics"},"Basics section")," features a ",Object(r.b)("em",{parentName:"p"},"change")," transition, since the ",Object(r.b)("inlineCode",{parentName:"p"},'"square"')," ",Object(r.b)("inlineCode",{parentName:"p"},"Component")," is always present in the layout, but it changes its position - ",Object(r.b)("inlineCode",{parentName:"p"},"X")," property."),Object(r.b)("video",{loop:"true",autoplay:"true",class:"video",width:"100%",height:"500px"},Object(r.b)("source",{type:"video/webm",src:Object(o.a)("/videos/transitions/basics2.webm")}),Object(r.b)("p",null,"Your browser does not support the video element.")),Object(r.b)("p",null,"It is the simplest type from a user's perspective, so following is the explanation of how change type transitions work internally."),Object(r.b)("p",null,"Let's say, layout ",Object(r.b)("em",{parentName:"p"},"A")," (",Object(r.b)("em",{parentName:"p"},"before"),") is mounted (rendered on the screen) and we have a blueprint of the layout ",Object(r.b)("em",{parentName:"p"},"B")," (",Object(r.b)("em",{parentName:"p"},"after"),"), which the framework is ready to render. The transition is defined for a  ",Object(r.b)("inlineCode",{parentName:"p"},"AnimatedProperty.P")," of a ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentC"),", where ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentC")," is present in both layouts."),Object(r.b)("p",null,"The framework needs to do the following steps in order to run ",Object(r.b)("em",{parentName:"p"},"change")," animations:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Pick the current value of the ",Object(r.b)("inlineCode",{parentName:"li"},"AnimatedProperty.P")," from the mounted UI element (normally, a ",Object(r.b)("inlineCode",{parentName:"li"},"View"),") that represents ",Object(r.b)("inlineCode",{parentName:"li"},"ComponentC")," on the screen \u2014 this is going to be the ",Object(r.b)("em",{parentName:"li"},"start")," value for animation."),Object(r.b)("li",{parentName:"ol"},"Pick the animation ",Object(r.b)("em",{parentName:"li"},"end")," value of ",Object(r.b)("inlineCode",{parentName:"li"},"AnimatedProperty.P")," from the blueprint of layout ",Object(r.b)("em",{parentName:"li"},"B"),"."),Object(r.b)("li",{parentName:"ol"},"When the layout ",Object(r.b)("em",{parentName:"li"},"B")," is mounted to the screen, we do not apply the new value of ",Object(r.b)("inlineCode",{parentName:"li"},"P")," right away, as we normally would, instead, we keep the previous value in place, but subscribe to the ",Object(r.b)("a",{parentName:"li",href:"pathname:///javadoc/com/facebook/litho/choreographercompat/ChoreographerCompat.html"},Object(r.b)("inlineCode",{parentName:"a"},"Choreographer")),", and start changing the value of ",Object(r.b)("inlineCode",{parentName:"li"},"P")," for the new mounted UI element on every frame until it reaches the end value.")),Object(r.b)("p",null,"This is how the returned trees look like on both layout passes, ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentC")," is present in both trees.\nBefore"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"Column.create(c)\n    .child(\n        SolidColor.create(c) // -> ComponentC\n            .color(YELLOW)\n            .widthDip(80)\n            .heightDip(80)\n            .transitionKey(SQUARE_KEY))\n    .alignItems(YogaAlign.FLEX_START) // AnimatedProperty.X aligned to start\n    .build();\n")),Object(r.b)("p",null,"After"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"Column.create(c)\n    .child(\n        SolidColor.create(c) // -> ComponentC\n            .color(YELLOW)\n            .widthDip(80)\n            .heightDip(80)\n            .transitionKey(SQUARE_KEY))\n    .alignItems(YogaAlign.FLEX_END) // AnimatedProperty.X aligned to end\n    .build();\n")),Object(r.b)("h3",{id:"appear-transitions"},"Appear Transitions"),Object(r.b)("p",null,"In certain situations you may want to animate how a certain UI element appears on screen."),Object(r.b)("p",null,"In this case, we are dealing with an ",Object(r.b)("em",{parentName:"p"},"Appearing")," transition: a ",Object(r.b)("inlineCode",{parentName:"p"},"Component")," is present in the ",Object(r.b)("em",{parentName:"p"},"after")," ",Object(r.b)("inlineCode",{parentName:"p"},"LayoutState"),", but wasn't seen in the ",Object(r.b)("em",{parentName:"p"},"before")," ",Object(r.b)("inlineCode",{parentName:"p"},"LayoutState"),". In order to run transitions we need ",Object(r.b)("em",{parentName:"p"},"start")," and ",Object(r.b)("em",{parentName:"p"},"end")," values of the ",Object(r.b)("inlineCode",{parentName:"p"},"AnimatedProperty"),", while the framework, obviously, can only get the latter from the layout, thus it is the responsibility of the user to supply the ",Object(r.b)("em",{parentName:"p"},"start")," value. You can do this using ",Object(r.b)("inlineCode",{parentName:"p"},".appearFrom()")," (",Object(r.b)("em",{parentName:"p"},"lines 28, 30"),") method when building a ",Object(r.b)("inlineCode",{parentName:"p"},"Transition"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java",metastring:"file=../../sample/src/main/java/com/facebook/samples/litho/animations/docs/AppearTransitionComponentSpec.java start=start end=end",file:"../../sample/src/main/java/com/facebook/samples/litho/animations/docs/AppearTransitionComponentSpec.java",start:"start",end:"end"},'@LayoutSpec\npublic class AppearTransitionComponentSpec {\n\n  private static final String SQUARE_KEY = "square";\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State boolean shown) {\n    Component child;\n    if (shown) {\n      child =\n          SolidColor.create(c)\n              .color(YELLOW)\n              .widthDip(80)\n              .heightDip(80)\n              .transitionKey(SQUARE_KEY)\n              .build();\n    } else {\n      child = null;\n    }\n\n    return Column.create(c)\n        .heightPercent(100)\n        .child(child)\n        .clickHandler(AppearTransitionComponent.onClickEvent(c))\n        .alignItems(YogaAlign.FLEX_END)\n        .build();\n  }\n\n  @OnCreateTransition\n  static Transition onCreateTransition(ComponentContext c) {\n    return Transition.create(SQUARE_KEY)\n        .animate(AnimatedProperties.X)\n        .appearFrom(0f)\n        .animate(AnimatedProperties.ALPHA)\n        .appearFrom(0f);\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickEvent(ComponentContext c, @FromEvent View view) {\n    AppearTransitionComponent.onUpdateState(c);\n  }\n\n  @OnUpdateState\n  static void onUpdateState(StateValue<Boolean> shown) {\n    shown.set(!shown.get());\n  }\n}\n')),Object(r.b)("video",{loop:"true",autoplay:"true",class:"video",width:"100%",height:"500px"},Object(r.b)("source",{type:"video/webm",src:Object(o.a)("/videos/transitions/appear.webm")}),Object(r.b)("p",null,"Your browser does not support the video element.")),Object(r.b)("p",null,"Here's how the framework handles these transitions internally:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Pick the ",Object(r.b)("inlineCode",{parentName:"li"},"appearFrom")," value of the ",Object(r.b)("inlineCode",{parentName:"li"},"AnimatedProperty.P")," from ",Object(r.b)("inlineCode",{parentName:"li"},"Transition")," object - this is going to be the ",Object(r.b)("em",{parentName:"li"},"start")," value for the animation."),Object(r.b)("li",{parentName:"ol"},"As before, pick the animation ",Object(r.b)("em",{parentName:"li"},"end")," value of ",Object(r.b)("inlineCode",{parentName:"li"},"AnimatedProperty.P")," from the blueprint of layout ",Object(r.b)("em",{parentName:"li"},"B"),"."),Object(r.b)("li",{parentName:"ol"},"When the layout ",Object(r.b)("em",{parentName:"li"},"B")," is mounted to the screen, instead of applying the ",Object(r.b)("em",{parentName:"li"},"end")," value from that layout to the mounted item immediately, we set the user-provided ",Object(r.b)("em",{parentName:"li"},"appearFrom")," value and drive that to the ",Object(r.b)("em",{parentName:"li"},"end")," value from the layout.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ComponentC")," is only present in the ",Object(r.b)("em",{parentName:"p"},"after")," tree.\nBefore"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"child = null;\n\nColumn.create(c)\n    .child(child) // ComponentC is null here\n    .alignItems(YogaAlign.FLEX_END)\n    .build();\n")),Object(r.b)("p",null,"After"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"child = SolidColor.create(c)\n    .color(YELLOW)\n    .widthDip(80)\n    .heightDip(80)\n    .transitionKey(SQUARE_KEY);\n\nColumn.create(c)\n    .child(child) // ComponentC is present and will be animated.\n    .alignItems(YogaAlign.FLEX_END)\n    .build();\n")),Object(r.b)("h3",{id:"disappear-transitions"},"Disappear Transitions"),Object(r.b)("p",null,"The opposite of ",Object(r.b)("em",{parentName:"p"},"Appearing")," type of transitions is ",Object(r.b)("em",{parentName:"p"},"Disappearing"),": when the ",Object(r.b)("inlineCode",{parentName:"p"},"Component")," is present in ",Object(r.b)("em",{parentName:"p"},"before")," layout, but is gone in the ",Object(r.b)("em",{parentName:"p"},"after")," layout. Following the same logic as before, now the responsibility of providing the ",Object(r.b)("em",{parentName:"p"},"end")," value falls on the user, which is done by using ",Object(r.b)("inlineCode",{parentName:"p"},".disappearTo()")," (",Object(r.b)("em",{parentName:"p"},"lines 8, 10"),")."),Object(r.b)("p",null,"Here is how we could add the disappearing animation to our sample:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@OnCreateTransition\nstatic Transition onCreateTransition(ComponentContext c) {\n  return Transition.create(SQUARE_KEY)\n      .animate(AnimatedProperties.X)\n      .appearFrom(0f)\n      .animate(AnimatedProperties.ALPHA)\n      .appearFrom(0f)\n      .disappearTo(0f)\n      .animate(AnimatedProperties.SCALE)\n      .disappearTo(0.5f);\n}\n")),Object(r.b)("video",{loop:"true",autoplay:"true",class:"video",width:"100%",height:"500px"},Object(r.b)("source",{type:"video/webm",src:"/videos/transitions/disappear.webm"}),Object(r.b)("p",null,"Your browser does not support the video element.")),Object(r.b)("p",null,"Under the hood, in order to run a disappearing animation, the framework follows this algorithm:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Pick up the ",Object(r.b)("em",{parentName:"li"},"start")," value from the mounted UI element that represents the ",Object(r.b)("inlineCode",{parentName:"li"},"Component")),Object(r.b)("li",{parentName:"ol"},"Retrieve the ",Object(r.b)("em",{parentName:"li"},"end")," from the user-provided ",Object(r.b)("inlineCode",{parentName:"li"},"disappearTo")," value of transition definition."),Object(r.b)("li",{parentName:"ol"},"Render the ",Object(r.b)("em",{parentName:"li"},"after")," layout, but instead of removing the UI element from screen right away, drive the value of ",Object(r.b)("inlineCode",{parentName:"li"},"AnimatedProperty")," to the ",Object(r.b)("em",{parentName:"li"},"end"),", and only then remove the UI element.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ComponentC")," is only present in the ",Object(r.b)("em",{parentName:"p"},"before")," tree.\nAfter"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"child = SolidColor.create(c)\n    .color(YELLOW)\n    .widthDip(80)\n    .heightDip(80)\n    .transitionKey(SQUARE_KEY);\n\nColumn.create(c)\n    .child(child) // ComponentC is present and will be animated.\n    .alignItems(YogaAlign.FLEX_END)\n    .build();\n")),Object(r.b)("p",null,"Before"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"child = null;\n\nColumn.create(c)\n    .child(child) // ComponentC is null here\n    .alignItems(YogaAlign.FLEX_END)\n    .build();\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"It is important to understand that once the layout has been mounted (on step 3) a disappearing ",Object(r.b)("inlineCode",{parentName:"p"},"Component")," isn't a part of layout tree anymore. However the drawing order of all the UI element is defined by the layout tree. Hence the UI element for the disappearing ",Object(r.b)("inlineCode",{parentName:"p"},"Component")," will be drawn the last. In some rare cases (normally involving cross-fading elements), this may result in the rendering being different from what you would expect. In such cases, a change animation should be used instead."))))}b.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),c=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=c(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=c(n),d=a,u=b["".concat(o,".").concat(d)]||b[d]||m[d]||r;return n?i.a.createElement(u,p(p({ref:t},s),{},{components:n})):i.a.createElement(u,p({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},183:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(10),i=n(184);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,p=void 0!==o&&o,l=r.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(p)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+c:c}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},184:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))}}]);
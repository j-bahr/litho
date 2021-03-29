(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return m}));var o=n(3),a=n(7),r=(n(0),n(182)),s=n(183),i={id:"prop-matching",title:"Matching @Prop"},c={unversionedId:"testing/prop-matching",id:"testing/prop-matching",isDocsHomePage:!1,title:"Matching @Prop",description:"Checkout the getting started section to setup the test environment correctly.",source:"@site/../docs/testing/prop-matching.mdx",slug:"/testing/prop-matching",permalink:"/docs/testing/prop-matching",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/testing/prop-matching.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Sub-Component Testing",permalink:"/docs/testing/subcomponent-testing"},next:{title:"Matching @TreeProp",permalink:"/docs/testing/testing-treeprops"}},p=[{value:"Complex Components",id:"complex-components",children:[{value:"Testing complex components",id:"testing-complex-components",children:[]}]},{value:"Props Matching with <code>@TestSpec</code>",id:"props-matching-with-testspec",children:[{value:"Using <code>@TestSpec</code>",id:"using-testspec",children:[]},{value:"Advanced Matchers",id:"advanced-matchers",children:[]},{value:"Matching Matchers",id:"matching-matchers",children:[]}]},{value:"A Note on Buck",id:"a-note-on-buck",children:[]},{value:"TL;DR",id:"tldr",children:[]}],l={toc:p};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Checkout the ",Object(r.b)("a",{parentName:"p",href:"unit-testing"},"getting started")," section to setup the test environment correctly."))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Checkout the ",Object(r.b)("a",{parentName:"p",href:"subcomponent-testing"},Object(r.b)("strong",{parentName:"a"},"sub-component testing"))," section before diving into\nprop matching."))),Object(r.b)("p",null,"In this article, we will drill a bit deeper and explore TestSpecs as a way to test individual\nprops of those components, even if we don't know all of them."),Object(r.b)("h2",{id:"complex-components"},"Complex Components"),Object(r.b)("p",null,"Composability is one of the big strengths Litho has to offer. It allows you to\nencapsulate your logic in small components and compose them together\neffortlessly into larger ones. But despite all good efforts, sometimes there is\nno clear dividing line and your component may grow beyond its original scope."),Object(r.b)("p",null,"Having more complex components shouldn't prevent you from using them\nconfidently. That's why we have a set of powerful APIs to test your components\nno matter the size."),Object(r.b)("p",null,"For this example, let's consider this LayoutSpec:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec\npublic class ComplexComponentSpec {\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @Prop StoryProps<ComplexAttachment> storyProps,\n      @Prop ImageRequest imageRequest,\n      @Prop DraweeController draweeController,\n      @Prop String title,\n      @Prop(resType = ResType.DIMEN_TEXT) int titleTextSize,\n      @Prop int visiblePhotoCount,\n      @Prop(optional = true) Artist favoriteArtist,\n      @Prop(optional = true) boolean shouldHavePuppies) {\n    return Row.create(c).build();\n  }\n}\n")),Object(r.b)("h3",{id:"testing-complex-components"},"Testing complex components"),Object(r.b)("p",null,"When we look at the props of our ",Object(r.b)("inlineCode",{parentName:"p"},"ComplexComponent"),", we see a lot of opaque\nobjects that we may have trouble getting ahold of for our tests. ",Object(r.b)("inlineCode",{parentName:"p"},"StoryProps"),"\nmight be something we obtain through some dependency injection mechanism. A\n",Object(r.b)("inlineCode",{parentName:"p"},"DraweeController")," is an implementation detail we shouldn't have to worry about\nfor ensuring that the component tree has the right shape."),Object(r.b)("p",null,"However, if you remember the ",Object(r.b)("inlineCode",{parentName:"p"},"SubComponent.of")," API, we need to specify all\nnon-optional props for it to succeed. Let's see what this would look like:"),Object(r.b)("img",{src:Object(s.a)("/images/complex-component-0.svg"),align:"right",width:"200px",className:"white-background"}),Object(r.b)("br",null),Object(r.b)("p",null,"As always, we create a standard JUnit test suite and run it with a\n",Object(r.b)("inlineCode",{parentName:"p"},"RobolectricTestRunner"),"-compatible implementation like ",Object(r.b)("inlineCode",{parentName:"p"},"LithoTestRunner"),"."),Object(r.b)("p",null,"For the purpose of this article, we assume that we have a ",Object(r.b)("inlineCode",{parentName:"p"},"FeedItemComponent"),"\nthat contains our ",Object(r.b)("inlineCode",{parentName:"p"},"ComplexComponent"),". The ",Object(r.b)("inlineCode",{parentName:"p"},"FeedItemComponent")," contains the logic\nfor populating our complex props which we want to verify."),Object(r.b)("br",{clear:"right"}),Object(r.b)("br",null),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void testComplexSubComponent() {\n  final ComponentContext c = mLithoViewRule.getContext();\n  final Component<FeedItemComponent> component = makeComponent("Two Brothers");\n\n  assertThat(c, component)\n    .has(\n      subComponentWith(\n        c, legacySubComponent(SubComponent.of(\n          // ERROR: This fails at runtime as we haven\'t provided all\n          // required parameters.\n          ComplexComponent.create(c)\n            .title("Two Brothers")\n            .build()))));\n}\n\n')),Object(r.b)("p",null,"Sadly, this test fails with this error message:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"java.lang.IllegalStateException: The following props are not marked as optional\nand were not supplied: [storyProps, imageRequest, draweeController,\ntitleTextSize, visiblePhotoCount]\n")),Object(r.b)("p",null,"But what if we can't provide these props in our tests? Or if we don't\nwant to test implementation details like the image loading controller?"),Object(r.b)("p",null,"We could simply choose not to test any props at all and decide to verify only\nthe presence of our component."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void testComplexSpecIsPresent() {\n  final ComponentContext c = mLithoViewRule.getContext();\n  final Component<FeedItemComponent> component = makeComponent("Rixty Minutes");\n\n  assertThat(c, component)\n    .has(\n      subComponentWith(\n        c, typeIs(ComplexComponent.class)));\n}\n')),Object(r.b)("p",null,"Clearly, having this test is better than nothing. In the same way that\nhaving some Starbucks coffee after a cross-Atlantic flight is better than no\ncoffee at all ... but I digress."),Object(r.b)("p",null,"What if there was a way to match just ",Object(r.b)("em",{parentName:"p"},"some")," of our props?"),Object(r.b)("h2",{id:"props-matching-with-testspec"},"Props Matching with ",Object(r.b)("inlineCode",{parentName:"h2"},"@TestSpec")),Object(r.b)("p",null,"TestSpecs allow you to match against exactly those props that you choose to\ntest. Just as LayoutSpecs and MountSpecs, TestSpecs make use of the powerful\nannotation processing mechanism Java offers and generate code for you."),Object(r.b)("p",null,"We start by creating a new class as part of our testing project and link to the\noriginal spec we want to generate our TestSpec for."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@TestSpec(ComplexComponentSpec.class)\npublic interface TestComplexComponentSpec {}\n")),Object(r.b)("p",null,"There are a few things to note here:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The class you reference in ",Object(r.b)("inlineCode",{parentName:"li"},"@TestSpec")," must be a LayoutSpec or MountSpec."),Object(r.b)("li",{parentName:"ul"},"You must link to the Spec and not the generated component, e.g.\n",Object(r.b)("inlineCode",{parentName:"li"},"ComplexComponentSpec.class")," not ",Object(r.b)("inlineCode",{parentName:"li"},"ComplexComponent.class"),"."),Object(r.b)("li",{parentName:"ul"},"In contrast to other specs, TestSpecs are generated from an interface, not a\nclass."),Object(r.b)("li",{parentName:"ul"},"The interface must be empty, i.e. cannot have any members."),Object(r.b)("li",{parentName:"ul"},"By convention, you prefix your TestSpec with ",Object(r.b)("inlineCode",{parentName:"li"},"Test"),", followed by the original\nspec name.")),Object(r.b)("p",null,"And that's it. Those two lines are enough to generate us a powerful matcher that\nwe can use in our tests."),Object(r.b)("h3",{id:"using-testspec"},"Using ",Object(r.b)("inlineCode",{parentName:"h3"},"@TestSpec")),Object(r.b)("p",null,"Now that we have our TestSpec generated, let's put it into use. Where normal\ncomponents have a ",Object(r.b)("inlineCode",{parentName:"p"},"create")," function, test specs come with a ",Object(r.b)("inlineCode",{parentName:"p"},"matcher")," function.\nIt does take the same props as the underlying component but, and this won't come\nas a surprise, allows omitting non-optional props."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void testComplexTestSpecProps() {\n  final ComponentContext c = mLithoViewRule.getContext();\n  final Component<FeedItemComponent> component = makeComponent("Two Brothers");\n\n  assertThat(c, component)\n    .has(\n      subComponentWith(\n        c, TestComplexComponent.matcher(c)\n          .shouldHavePuppies(false)\n          .build()));\n}\n')),Object(r.b)("p",null,"Obviously, this outrageous omission of puppies couldn't possibly pass the test\nrun and will fail with a helpful error message:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'java.lang.AssertionError:\nExpecting:\n <FeedItemComponent{0, 0 - 100, 100}\n  ComplexComponent{0, 0 - 100, 0}\n  Column{0, 0 - 100, 50}\n    FeedImageComponent{0, 0 - 100, 50}\n      RecyclerCollectionComponent{0, 0 - 100, 50}\n        Recycler{0, 0 - 100, 0}\n    TitleComponent{4, 46 - 16, 46}\n      Text{4, 46 - 16, 46 text="Some Name"}\n    ActionsComponent{60, 4 - 96, 40}\n      FavouriteButton{2, 2 - 34, 34 [clickable]}\n  FooterComponent{0, 50 - 100, 66}\n    Text{8, 8 - 92, 8 text="Two Brothers"}>\nto have:\n <sub component with <Sub-component of type <ComplexComponent> with\n prop <shouldHavePuppies> is <false> (doesn\'t match true)>>\n')),Object(r.b)("p",null,"Here we can see a brief overview of the hierarchy we were matching against and\nthe matcher that failed."),Object(r.b)("h3",{id:"advanced-matchers"},"Advanced Matchers"),Object(r.b)("p",null,"But wait, there's more! Instead of just matching against partial props, you can\nalso provide hamcrest matchers in any place that accepts concrete values. For\nprops that take resource types, you can make use of all the same matchers you\nfind in regular components."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'@Test\npublic void testComplexTestSpecAdvancedProps() {\n  final ComponentContext c = mLithoViewRule.getContext();\n  final Component<FeedItemComponent> component =\n      makeComponent("Rixty Minutes");\n\n  assertThat(c, component)\n    .has(\n      subComponentWith(\n        c, TestComplexComponent.matcher(c)\n          // titleTextSizeDip, Sp etc. work too!\n          .titleTextSizeRes(R.dimen.notification_subtext_size)\n          .title(containsString("Minutes"))\n          .build()));\n}\n')),Object(r.b)("h3",{id:"matching-matchers"},"Matching Matchers"),Object(r.b)("p",null,"There is one type of prop that requires some special treatment: components.\nWhile we could just match against child components via normal equality (and\nthere is indeed support for this), it is not particularly helpful. We rarely\nknow what exact instance of a component is passed down to the props and we face\nmany of the same problems we discussed before: The props of the Component may\nnot be known in full or perhaps we don't want to provide them all."),Object(r.b)("img",{src:Object(s.a)("/images/complex-component-0.svg"),align:"right",width:"200px",className:"white-background"}),Object(r.b)("p",null,"The solution to this is obvious: We match matchers! For any prop that takes a\nComponent, the TestSpec generates a matcher that takes another matcher. This\nallows for ",Object(r.b)("strong",{parentName:"p"},"declarative matching against entire trees of components"),"."),Object(r.b)("p",null,"For our example, let's suppose that our ",Object(r.b)("inlineCode",{parentName:"p"},"FeedItemComponent")," wraps the\n",Object(r.b)("inlineCode",{parentName:"p"},"ComplexComponent")," in a ",Object(r.b)("inlineCode",{parentName:"p"},"Card"),"."),Object(r.b)("br",{clear:"right"}),Object(r.b)("br",null),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void testComplexTestSpecProps() {\n  final ComponentContext c = mLithoViewRule.getContext();\n  final Component<FeedItemComponent> component = makeComponent("Ricksy Business");\n\n  assertThat(c, component)\n    .has(\n      subComponentWith(\n        c, TestCard.matcher(c)\n          .content(TestComplexComponent.matcher(c)\n            .title(endsWith("Business"))\n            .build())\n          .build()));\n}\n')),Object(r.b)("p",null,"Notice the ",Object(r.b)("inlineCode",{parentName:"p"},"TestCard")," we use to declare our hierarchy here. The ",Object(r.b)("inlineCode",{parentName:"p"},"litho-testing"),"\npackage comes with TestSpecs for all standard Litho widgets."),Object(r.b)("h2",{id:"a-note-on-buck"},"A Note on Buck"),Object(r.b)("p",null,"If you use gradle, this should Just Work\u2122 and shouldn't require any additional\nsetup."),Object(r.b)("p",null,"With Buck or Blaze/Bazel, however, you may need some additional configuration\nfor the annotation processing step to work."),Object(r.b)("p",null,"In order to save you copy-pasting boilerplate all over your project, it is\nrecommended keep a rule definition like this in a well-known place\n(e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"//tools/build_defs/android/litho_testspec.bzl"),"). You would obviously have to adjust\nthe library paths to the corresponding targets in your code base."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'"""Provides macros for working with litho testspec."""\n\ndef litho_testspec(\n  name,\n  deps=None,\n  annotation_processors=None,\n  annotation_processor_deps=None,\n  **kwargs\n):\n  """Litho testspec."""\n  deps = deps or []\n  annotation_processors = annotation_processors or []\n  annotation_processor_deps = annotation_processor_deps or []\n\n  deps.extend(\n    [\n      "//java/com/facebook/litho:litho",\n      "//third-party/android/androidx:support-v4",\n      "//libraries/components/litho-testing/src/main/java/com/facebook/litho/testing:testing",\n      "//libraries/components/litho-testing/src/main/java/com/facebook/litho/testing/assertj:assertj",\n      "//third-party/java/jsr-305:jsr-305",\n      "//third-party/java/hamcrest:hamcrest",\n      "//third-party/java/hamcrest:hamcrest-library",\n    ]\n  )\n\n  annotation_processor_deps.extend(\n    [\n      "//libraries/components/litho-processor/src/main/java/com/facebook/litho/specmodels/processor:processor-lib"\n    ]\n  )\n\n  annotation_processors.extend(\n    [\n      "com.facebook.litho.specmodels.processor.testing.ComponentsTestingProcessor",\n    ]\n  )\n\n  return android_library(\n    name,\n    deps=deps,\n    annotation_processors=annotation_processors,\n    annotation_processor_deps=annotation_processor_deps,\n    **kwargs\n  )\n')),Object(r.b)("p",null,"In the definitions for your test suite, you can then create a separate target\nfor your test specs:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'load("//buck_imports:litho_testspec.bzl", "litho_testspec")\n\nlitho_testspec(\n  name = "testspecs",\n  srcs = glob(["*Spec.java"]),\n  deps = [\n    "//my/library/dependencies",\n    # ...\n  ],\n)\n\nrobolectric_test(\n  name = "test",\n  srcs = glob(["*Test.java*"]),\n  deps = [\n    ":testspecs",\n    # ...\n  ]\n)\n')),Object(r.b)("p",null,"This ensures that test specs are processed by the dedicated\n",Object(r.b)("inlineCode",{parentName:"p"},"ComponentsTestingProcessor"),"."),Object(r.b)("h2",{id:"tldr"},"TL;DR"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 1")),Object(r.b)("p",null,"Create a TestSpec for your LayoutSpec or MountSpec."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@TestSpec(MyLayoutSpec.class)\npublic interface TestMyLayoutSpec {}\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 2")),Object(r.b)("p",null,"Use the generated test matcher in your suite."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void testComplexTestSpecAdvancedProps() {\n  final ComponentContext c = mLithoViewRule.getContext();\n  final Component<MyWrapperComponent> component = ...;\n\n  assertThat(c, component)\n    .has(\n      subComponentWith(\n        c, TestMyLayout.matcher(c)\n          .titleTextSizeRes(R.dimen.notification_subtext_size)\n          .title(containsString("Minutes"))\n          .child(TestChildComponent.matcher(c).size(greaterThan(5)).build())\n          .build()));\n}\n')))}m.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||b[u]||r;return n?a.a.createElement(h,i(i({ref:t},p),{},{components:n})):a.a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},183:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var o=n(10),a=n(184);function r(){var e=Object(o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var r=void 0===o?{}:o,s=r.forcePrependBaseUrl,i=void 0!==s&&s,c=r.absolute,p=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+l:l}(r,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},184:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}))}}]);
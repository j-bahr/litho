(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),a=(n(0),n(182)),c={id:"glossary",title:"Glossary"},i={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"Glossary",description:"Spec? Prop? State? Tree? What do all of these terms mean when it comes to Litho and Section Components?",source:"@site/../docs/glossary.md",slug:"/glossary",permalink:"/docs/glossary",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/glossary.md",version:"current"},s=[{value:"Component",id:"component",children:[]},{value:"Spec",id:"spec",children:[]},{value:"@Prop",id:"prop",children:[]},{value:"@State",id:"state",children:[]},{value:"@LayoutSpec",id:"layoutspec",children:[]},{value:"@MountSpec",id:"mountspec",children:[]},{value:"@GroupSectionSpec",id:"groupsectionspec",children:[]},{value:"@DiffSectionSpec",id:"diffsectionspec",children:[]},{value:"ChangeSet",id:"changeset",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Spec? Prop? State? Tree? What do all of these terms mean when it comes to Litho and Section Components?"),Object(a.b)("h2",{id:"component"},"Component"),Object(a.b)("p",null,"A single logical unit describing a piece of UI.  Components are either comprised of other components or contain logic to draw an Android View or Android Drawable on screen. Section Components components are sometimes referred to Sections."),Object(a.b)("h2",{id:"spec"},"Spec"),Object(a.b)("p",null,"Spec classes (files that end in Spec.java) are classes you write to ",Object(a.b)("em",{parentName:"p"},"specify")," the behavior of a custom component.  You can think of spec classes as a collection of functions that the framework will call to interact with your component."),Object(a.b)("p",null,"Litho and Section Components' code-generation framework reads your spec to auto-generate code specific to each spec."),Object(a.b)("h2",{id:"prop"},"@Prop"),Object(a.b)("p",null,"An annotation added to function parameters in your Spec class to describe ",Object(a.b)("strong",{parentName:"p"},"immutable")," values that will be passed into the component during creation. Props can represent values that can be changed from outside the framework.  You can update a prop value from outside the framework calling ",Object(a.b)("inlineCode",{parentName:"p"},"LithoView#setComponent(Component)")," or ",Object(a.b)("inlineCode",{parentName:"p"},"ComponentTree#setRoot(Component)"),"."),Object(a.b)("p",null,"When a new component is set, the framework will compare the new props with previous props and, if they differ, update that component. This behavior recurses down the component hierarchy until every component in the tree has had the chance to update."),Object(a.b)("h2",{id:"state"},"@State"),Object(a.b)("p",null,"An annotation added to function parameters in your Spec class to describe ",Object(a.b)("strong",{parentName:"p"},"immutable")," values that are stored ",Object(a.b)("em",{parentName:"p"},"inside this component")," and ",Object(a.b)("em",{parentName:"p"},"only matter for this component and its children"),"."),Object(a.b)("p",null,"State values are initially set in a function annotated with @OnCreateInitialState and should only be updated by functions annotated with @UpdateState. Whenever a state update is made, the framework will update that component and recurse down its children until every component in the sub-tree has had the chance to update."),Object(a.b)("h2",{id:"layoutspec"},"@LayoutSpec"),Object(a.b)("p",null,'A Litho Annotation added to a spec class that tells the framework "This component is comprised of other components arranged in a specific layout". The majority of specs you write will be LayoutSpecs.'),Object(a.b)("h2",{id:"mountspec"},"@MountSpec"),Object(a.b)("p",null,'A Litho Annotation added to a spec class that tells the framework "This component describes an Android View or Drawable to be drawn on screen". This is the escape hatch from Litho into traditional Android rendering.'),Object(a.b)("h2",{id:"groupsectionspec"},"@GroupSectionSpec"),Object(a.b)("p",null,"The equivalent of @LayoutSpec for Section Components"),Object(a.b)("h2",{id:"diffsectionspec"},"@DiffSectionSpec"),Object(a.b)("p",null,'The equivalent of @MountSpec for Section Components. This annotation tells the\nframework "This component will produce a changeset for changing the items in a\nrecycler view".'),Object(a.b)("h2",{id:"changeset"},"ChangeSet"),Object(a.b)("p",null,'A list of insert / update / delete / move "commands" that describe how to update\nthe underlying recycler view.'))}l.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);
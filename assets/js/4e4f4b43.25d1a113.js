"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9519],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>x,useMDXComponents:()=>c,withMDXComponents:()=>p});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){return function(t){var n=c(t.components);return o.createElement(e,i({},t,{components:n}))}},c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(r,".").concat(d)]||p[d]||u[d]||i;return n?o.createElement(h,l(l({ref:t},s),{},{components:n})):o.createElement(h,l({ref:t},s))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},72649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=n(83117),a=n(80102),i=(n(67294),n(3905)),r=["components"],l={id:"first-components",title:"Components and Props"},m=void 0,s={unversionedId:"tutorial/first-components",id:"tutorial/first-components",title:"Components and Props",description:"In this section of the tutorial, you'll learn the basic Litho building blocks then create your first component that uses props.",source:"@site/../docs/tutorial/first-components.md",sourceDirName:"tutorial",slug:"/tutorial/first-components",permalink:"/docs/tutorial/first-components",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/tutorial/first-components.md",tags:[],version:"current",frontMatter:{id:"first-components",title:"Components and Props"},sidebar:"mainSidebar",previous:{title:"Setting up the Project",permalink:"/docs/tutorial/project-setup"},next:{title:"Introducing Layout",permalink:"/docs/tutorial/introducing-layout"}},p={},c=[{value:"Basic Litho building blocks",id:"basic-litho-building-blocks",level:2},{value:"Key Points in MyActivity.kt",id:"key-points-in-myactivitykt",level:3},{value:"Create your first component",id:"create-your-first-component",level:2},{value:"Key Points in HelloComponent.kt",id:"key-points-in-hellocomponentkt",level:3},{value:"Use you first component",id:"use-you-first-component",level:3},{value:"What next?",id:"what-next",level:2}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.mdx)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"In this section of the tutorial, you'll learn the basic Litho building blocks then create your first component that uses ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/props"},"props"),"."),(0,i.mdx)("h2",{id:"basic-litho-building-blocks"},"Basic Litho building blocks"),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Basic Terminology")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("ul",{parentName:"div"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Component")," - all user-interactable elements in the UI (such as buttons, checkboxes, scrollbars, lists, menus, and text fields) that you see in the application are components. To be used, a component must be placed in a container.  For more information, see the ",(0,i.mdx)("a",{parentName:"li",href:"/docs/mainconcepts/components-basics"},"Components")," page in the 'Main Concepts' section."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Container component")," - arranges groups of components in a ",(0,i.mdx)("a",{parentName:"li",href:"/docs/tutorial/introducing-layout"},"layout"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Prop")," - an item of data that cannot be changed (making it 'immutable') during the associated component's lifecycle. For more information, see the ",(0,i.mdx)("a",{parentName:"li",href:"/docs/mainconcepts/props"},"Types of Props")," page in the 'Main Concepts' section.")))),(0,i.mdx)("p",null,'To display the classic "Hello, World!" text on the screen with Litho, you need to integrate the Litho component hierarchy into your View hierarchy.\nTo illustrate this, the "Hello, World" code (',(0,i.mdx)("inlineCode",{parentName:"p"},"MyActivity.kt"),"), from the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/tutorial/project-setup"},"Setting up the Project")," section of the tutorial, is shown below:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/MyActivity.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/MyActivity.kt",start:"start_example",end:"end_example"},'import android.os.Bundle\nimport androidx.appcompat.app.AppCompatActivity\nimport com.facebook.litho.Component\nimport com.facebook.litho.ComponentScope\nimport com.facebook.litho.KComponent\nimport com.facebook.litho.LithoView\nimport com.facebook.litho.dp\nimport com.facebook.litho.kotlin.widget.Text\n\nclass MyActivity : AppCompatActivity() {\n\n  override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n\n    val lithoView = LithoView.create(this /* context */, MyComponent())\n    setContentView(lithoView)\n  }\n}\n\nclass MyComponent() : KComponent() {\n  override fun ComponentScope.render(): Component = Text(text = "Hello, World!", textSize = 50.dp)\n}\n')),(0,i.mdx)("h3",{id:"key-points-in-myactivitykt"},"Key Points in MyActivity.kt"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"LithoView")," - a hierarchy of Litho components is rendered using a LithoView."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"val")," - holds an immutable object that cannot be changed during the lifecycle of the component."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Text(...)")," - the 'Text' component (this is how you create an instance of a component (both built-in and those you define yourself)."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Text(...)")," - assigns values to the props ",(0,i.mdx)("inlineCode",{parentName:"li"},"text")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"textsize"),".")),(0,i.mdx)("h2",{id:"create-your-first-component"},"Create your first component"),(0,i.mdx)("p",null,"Previously, you used a built-in ",(0,i.mdx)("inlineCode",{parentName:"p"},"Text")," component. Now, you'll define your own using the following 'HelloComponent.kt' code. As with the above, your 'first' component can also declare ",(0,i.mdx)("strong",{parentName:"p"},"props"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/HelloComponent.kt start=start_simple_example end=end_simple_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/HelloComponent.kt",start:"start_simple_example",end:"end_simple_example"},'class HelloComponent(private val name: String) : KComponent() {\n\n  override fun ComponentScope.render(): Component? {\n    return Text(text = "Hello $name!")\n  }\n}\n')),(0,i.mdx)("h3",{id:"key-points-in-hellocomponentkt"},"Key Points in HelloComponent.kt"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"KComponent")," - a class needed to extend in order to create components."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"name")," - a ",(0,i.mdx)("inlineCode",{parentName:"li"},"String")," prop named ",(0,i.mdx)("inlineCode",{parentName:"li"},"name"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"render")," - function override that returns what your component should render."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Text(...)")," - returns an instance of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Text")," component with its ",(0,i.mdx)("inlineCode",{parentName:"li"},"text")," prop set to the String \"Hello $name'.")),(0,i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Lots of code autocompletion and class templates can be found in the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/devtools/android-studio-plugin"},"Litho Android Studio plugin"),"!"))),(0,i.mdx)("h3",{id:"use-you-first-component"},"Use you first component"),(0,i.mdx)("p",null,'To use your component, just replace the Text component in the "Hello, World!" example with an instance of your ',(0,i.mdx)("inlineCode",{parentName:"p"},"HelloComponent"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/FirstComponentActivity.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/FirstComponentActivity.kt",start:"start_example",end:"end_example"},'setContentView(LithoView.create(this, HelloComponent(name = "Linda")))\n')),(0,i.mdx)("h2",{id:"what-next"},"What next?"),(0,i.mdx)("p",null,"The next section of the tutorial ",(0,i.mdx)("a",{parentName:"p",href:"/docs/tutorial/introducing-layout"},"Introducing Layout")," helps you become familiar with building layouts using Flexbox."),(0,i.mdx)("p",null,"For more information, see the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/components-basics"},"Components")," and ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/props"},"Props")," pages of the 'Main Concepts' section."))}u.isMDXComponent=!0}}]);
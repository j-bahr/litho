"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8463],{3905:(e,t,i)=>{i.r(t),i.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>v,useMDXComponents:()=>d,withMDXComponents:()=>p});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r.apply(this,arguments)}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),p=function(e){return function(t){var i=d(t.components);return n.createElement(e,r({},t,{components:i}))}},d=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},m=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},y="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(i),m=a,y=p["".concat(o,".").concat(m)]||p[m]||b[m]||r;return i?n.createElement(y,l(l({ref:t},c),{},{components:i})):n.createElement(y,l({ref:t},c))}));function v(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[y]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},31184:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=i(87462),a=i(63366),r=(i(67294),i(3905)),o=["components"],l={id:"accessibility",title:"Accessibility"},s=void 0,c={unversionedId:"accessibility/accessibility",id:"accessibility/accessibility",title:"Accessibility",description:"Why Accessibility is important",source:"@site/../docs/accessibility/accessibility.mdx",sourceDirName:"accessibility",slug:"/accessibility/",permalink:"/docs/accessibility/",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/accessibility/accessibility.mdx",tags:[],version:"current",frontMatter:{id:"accessibility",title:"Accessibility"},sidebar:"mainSidebar",previous:{title:"Handling Visibility",permalink:"/docs/mainconcepts/coordinate-state-actions/visibility-handling"},next:{title:"Getting Started",permalink:"/docs/kotlin/testing-getting-started"}},p={},d=[{value:"Why Accessibility is important",id:"why-accessibility-is-important",level:2},{value:"Implementing Accessibility features",id:"implementing-accessibility-features",level:2},{value:"Supported Accessibility properties and events",id:"supported-accessibility-properties-and-events",level:2}],m={toc:d},y="wrapper";function b(e){var t=e.components,i=(0,a.Z)(e,o);return(0,r.mdx)(y,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"why-accessibility-is-important"},"Why Accessibility is important"),(0,r.mdx)("p",null,"The fundamental purpose of an interface is to provide people with access to information: accessibility is the foundation of an interface. All people experience limitations in their abilities, whether it's temporary, situational or permanent. The aim of accessibility is to remove any obstacles that reduce the experience of using, understanding, and navigating your interface."),(0,r.mdx)("p",null,"This page provides details of the Litho components, methods, nodes, events, and headings available to ensure your interface provides the 'full experience' promoted by Meta."),(0,r.mdx)("admonition",{type:"info"},(0,r.mdx)("p",{parentName:"admonition"},"For information on how Meta is committed to creating a full UI experience for ",(0,r.mdx)("strong",{parentName:"p"},"all")," people, see the ",(0,r.mdx)("a",{parentName:"p",href:"https://en-gb.facebook.com/accessibility/"},"Meta Accessibility")," site.")),(0,r.mdx)("h2",{id:"implementing-accessibility-features"},"Implementing Accessibility features"),(0,r.mdx)("p",null,"Accessibility properties and events for components can be implemented by adding them to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Style")," object."),(0,r.mdx)("p",null,"Following is an example of how to combine a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Style"),", that was passed to a Primitive Component, with a newly created ",(0,r.mdx)("inlineCode",{parentName:"p"},"Style")," object that implements accessibility properties and events and will be returned on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"LithoPrimitive")," object from the ",(0,r.mdx)("inlineCode",{parentName:"p"},"render()")," method:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/primitives/SimpleImageViewWithAccessibilityPrimitiveComponent.kt start=start_simple_primitive_component_with_a11y_example end=end_simple_primitive_component_with_a11y_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/primitives/SimpleImageViewWithAccessibilityPrimitiveComponent.kt",start:"start_simple_primitive_component_with_a11y_example",end:"end_simple_primitive_component_with_a11y_example"},'class SimpleImageViewWithAccessibilityPrimitiveComponent(private val style: Style? = null) :\n    PrimitiveComponent() {\n  override fun PrimitiveComponentScope.render(): LithoPrimitive {\n    val a11y =\n        Style.accessibilityRole(AccessibilityRole.IMAGE)\n            .accessibilityRoleDescription("Image View")\n            .importantForAccessibility(ImportantForAccessibility.YES)\n            .onInitializeAccessibilityNodeInfo {\n              it.superDelegate.onInitializeAccessibilityNodeInfo(it.host, it.info)\n              it.info.addAction(\n                  AccessibilityNodeInfoCompat.AccessibilityActionCompat(\n                      AccessibilityNodeInfoCompat.ACTION_CLICK, "actionDescriptionText"))\n            }\n\n    return LithoPrimitive(primitive = SimpleImageViewPrimitive, style = a11y + style)\n  }\n}\n')),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"In the above example, the returned ",(0,r.mdx)("inlineCode",{parentName:"p"},"LithoPrimitive")," object includes ",(0,r.mdx)("inlineCode",{parentName:"p"},"a11y"),". This is a reference to the ",(0,r.mdx)("a",{parentName:"p",href:"https://www.a11yproject.com/"},"A11Y Project"),', which A11Y describes as a "',(0,r.mdx)("em",{parentName:"p"},"a community-driven effort to make digital accessibility easier."),'"')),(0,r.mdx)("h2",{id:"supported-accessibility-properties-and-events"},"Supported Accessibility properties and events"),(0,r.mdx)("p",null,"The following list provides the supported properties of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Style")," object:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Style.accessibilityHeading"),(0,r.mdx)("li",{parentName:"ul"},"Style.accessibilityRole"),(0,r.mdx)("li",{parentName:"ul"},"Style.accessibilityRoleDescription"),(0,r.mdx)("li",{parentName:"ul"},"Style.contentDescription"),(0,r.mdx)("li",{parentName:"ul"},"Style.importantForAccessibility")),(0,r.mdx)("p",null,"The following table provides the supported events of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Style")," object:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Event"),(0,r.mdx)("th",{parentName:"tr",align:null},"AccessibilityDelegate method"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Style.onInitializeAccessibilityEvent"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{href:"https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#onInitializeAccessibilityEvent(android.view.View, android.view.accessibility.AccessibilityEvent)"},"onInitializeAccessibilityEvent"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Style.onInitializeAccessibilityNodeInfo"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{href:"https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#onInitializeAccessibilityNodeInfo(android.view.View, android.support.v4.view.accessibility.AccessibilityNodeInfoCompat)"},"onInitializeAccessibilityNodeInfo"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Style.onPopulateAccessibilityNode"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{href:"https://fburl.com/onpopulateaccessibilitynode"},"Populate an accessibility node with information about the component"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Style.onPopulateAccessibilityEvent"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{href:"https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#onPopulateAccessibilityEvent(android.view.View, android.view.accessibility.AccessibilityEvent)"},"onPopulateAccessibilityEvent"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Style.onRequestSendAccessibilityEvent"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{href:"https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#onRequestSendAccessibilityEvent(android.view.ViewGroup, android.view.View, android.view.accessibility.AccessibilityEvent)"},"onRequestSendAccessibilityEvent"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Style.performAccessibilityAction"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{href:"https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#performAccessibilityAction(android.view.View, int, android.os.Bundle)"},"performAccessibilityAction"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Style.sendAccessibilityEvent"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{href:"https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#sendAccessibilityEvent(android.view.View, int)"},"sendAccessibilityEvent"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Style.sendAccessibilityEventUnchecked"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{href:"https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#sendAccessibilityEventUnchecked(android.view.View, android.view.accessibility.AccessibilityEvent)"},"sendAccessibilityEventUnchecked"))))))}b.isMDXComponent=!0}}]);
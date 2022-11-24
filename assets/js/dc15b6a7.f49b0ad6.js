"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6096],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>s});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),s=function(e){return function(n){var t=c(n.components);return o.createElement(e,i({},n,{components:t}))}},c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),s=c(t),u=a,h=s["".concat(r,".").concat(u)]||s[u]||d[u]||i;return t?o.createElement(h,l(l({ref:n},p),{},{components:t})):o.createElement(h,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=h;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},20082:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>m,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=t(83117),a=t(80102),i=(t(67294),t(3905)),r=["components"],l={id:"mountable",title:"Lifecycle of a SimpleMountable"},m=void 0,p={unversionedId:"mountablecomponents/mountable",id:"mountablecomponents/mountable",title:"Lifecycle of a SimpleMountable",description:"A Mountable represents a reusable unit responsible for hosting the logic to create, measure, and mount the content that the mountable component will render.",source:"@site/../docs/mountablecomponents/mountable.mdx",sourceDirName:"mountablecomponents",slug:"/mountablecomponents/mountable",permalink:"/docs/mountablecomponents/mountable",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mountablecomponents/mountable.mdx",tags:[],version:"current",frontMatter:{id:"mountable",title:"Lifecycle of a SimpleMountable"}},s={},c=[{value:"Lifecycle of a SimpleMountable",id:"lifecycle-of-a-simplemountable",level:2},{value:"Creation of a SimpleMountable",id:"creation-of-a-simplemountable",level:3},{value:"Content size measurement",id:"content-size-measurement",level:3},{value:"Content creation",id:"content-creation",level:3},{value:"Mounting and unmounting content properties",id:"mounting-and-unmounting-content-properties",level:3}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.mdx)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"A ",(0,i.mdx)("inlineCode",{parentName:"p"},"Mountable")," represents a reusable unit responsible for hosting the logic to create, measure, and mount the content that the mountable component will render."),(0,i.mdx)("p",null,"As illustrated in the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/mountable-component#creating-a-mountable-component"},"Creating a Mountable Component")," page, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"MountableComponent.render()")," method should return a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Mountable")," implementation and any ",(0,i.mdx)("inlineCode",{parentName:"p"},"Style")," object to be applied to the component on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"MountableRenderResult")," object."),(0,i.mdx)("p",null,"This page provides an overview of a ",(0,i.mdx)("inlineCode",{parentName:"p"},"SimpleMountable"),": a simplified version of a Mountable that can be extended to provide a bespoke implementation."),(0,i.mdx)("h2",{id:"lifecycle-of-a-simplemountable"},"Lifecycle of a SimpleMountable"),(0,i.mdx)("p",null,"A SimpleMountable has four important stages in its lifecycle, which occur in the following order:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("a",{parentName:"li",href:"#creation-of-a-mountable"},"Creation")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("a",{parentName:"li",href:"#content-size-measurement"},"Content size measurement")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("a",{parentName:"li",href:"#content-creation"},"Content creation")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("a",{parentName:"li",href:"#mounting-and-unmounting-content-properties"},"Mounting and unmounting content properties"))),(0,i.mdx)("p",null,"Each of these stages is detailed in the following sub-sections."),(0,i.mdx)("h3",{id:"creation-of-a-simplemountable"},"Creation of a SimpleMountable"),(0,i.mdx)("p",null,"In order to create a SimpleMountable, write a class that extends the ",(0,i.mdx)("a",{parentName:"p",href:"https://fburl.com/simplemountable"},"SimpleMountable")," abstract class."),(0,i.mdx)("p",null,"The following example provides an implementation of ",(0,i.mdx)("inlineCode",{parentName:"p"},"SimpleMountable")," with an ",(0,i.mdx)("inlineCode",{parentName:"p"},"ImageView")," as content:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/mountables/SimpleImageViewComponent.kt start=start_simple_mountable_example end=end_simple_mountable_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/mountables/SimpleImageViewComponent.kt",start:"start_simple_mountable_example",end:"end_simple_mountable_example"},"internal class SimpleImageViewMountable() : SimpleMountable<ImageView>(RenderType.VIEW) {\n\n  override fun createContent(context: Context): ImageView = ImageView(context)\n\n  override fun MeasureScope.measure(widthSpec: Int, heightSpec: Int): MeasureResult {\n    return if (SizeSpec.getMode(widthSpec) == SizeSpec.UNSPECIFIED &&\n        SizeSpec.getMode(heightSpec) == SizeSpec.UNSPECIFIED) {\n      MeasureResult(defaultSize, defaultSize)\n    } else {\n      withEqualSize(widthSpec, heightSpec)\n    }\n  }\n\n  override fun mount(c: Context, content: ImageView, layoutData: Any?) {\n    content.setImageDrawable(c.resources.getDrawable(R.drawable.ic_launcher))\n  }\n\n  override fun unmount(c: Context, content: ImageView, layoutData: Any?) {\n    content.setImageResource(0)\n  }\n}\n")),(0,i.mdx)("h3",{id:"content-size-measurement"},"Content size measurement"),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"This stage of the SimpleMountable's lifecycle can occur on any thread.")),(0,i.mdx)("p",null,"Each SimpleMountable should implement a ",(0,i.mdx)("inlineCode",{parentName:"p"},"measure()")," function to define how it measures itself given arbitrary width and height specs. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"MeasureResult")," object it returns contains the width and height of the content, and optionally any layout data, as shown in the following example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/mountables/bindto/ImageViewComponent.kt start=measure_example_start end=measure_example_end",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/mountables/bindto/ImageViewComponent.kt",start:"measure_example_start",end:"measure_example_end"},"override fun MeasureScope.measure(widthSpec: Int, heightSpec: Int): MeasureResult {\n  // if the sizes are unspecified, set default size; otherwise enforce equal sizes\n  return if (SizeSpec.getMode(widthSpec) == SizeSpec.UNSPECIFIED &&\n      SizeSpec.getMode(heightSpec) == SizeSpec.UNSPECIFIED) {\n    MeasureResult(defaultSize, defaultSize)\n  } else {\n    withEqualSize(widthSpec, heightSpec)\n  }\n}\n")),(0,i.mdx)("p",null,"To learn about the different strategies to measure content, see the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/mountable-measuring"},"Measuring")," page."),(0,i.mdx)("h3",{id:"content-creation"},"Content creation"),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"This stage of the SimpleMountable's lifecycle can only occur on the main thread.")),(0,i.mdx)("p",null,"Each SimpleMountable needs to create the content it hosts (either a ",(0,i.mdx)("inlineCode",{parentName:"p"},"View")," or a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Drawable"),") by a implementing the ",(0,i.mdx)("inlineCode",{parentName:"p"},"createContent()")," method, as shown in the following example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/mountables/bindto/ImageViewComponent.kt start=create_content_example_start end=create_content_example_end",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/mountables/bindto/ImageViewComponent.kt",start:"create_content_example_start",end:"create_content_example_end"},"override fun createContent(context: Context): ImageView = ImageView(context)\n")),(0,i.mdx)("p",null,"You should also pass the type of the created content to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"SimpleMountable")," super constructor, either ",(0,i.mdx)("inlineCode",{parentName:"p"},"RenderType.VIEW")," for views or ",(0,i.mdx)("inlineCode",{parentName:"p"},"RenderType.DRAWABLE")," for drawables."),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"The content should not be mutated based on props passed from MountableComponent to the SimpleMountable.")),(0,i.mdx)("p",null,"In order to optimize the mount performance, the methods from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ContentAllocator")," interface can also be overridden to define a ",(0,i.mdx)("a",{parentName:"p",href:"/docs/mountablecomponents/mountable-preallocation"},"content pooling")," strategy."),(0,i.mdx)("h3",{id:"mounting-and-unmounting-content-properties"},"Mounting and unmounting content properties"),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"This stage of the SimpleMountable's lifecycle can only occur on the main thread.")),(0,i.mdx)("p",null,"Properties can be set and unset on the content using ",(0,i.mdx)("inlineCode",{parentName:"p"},"mount()")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"unmount()")," methods respectively. Additionally, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"shouldUpdate()")," can be overridden to decide whether properties need resetting."),(0,i.mdx)("p",null,"The following code shows a component that extends ",(0,i.mdx)("inlineCode",{parentName:"p"},"SimpleMountable")," and appropriately sets and unsets the properties on the content:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/mountables/bindto/ImageViewComponent.kt start=mount_unmount_example_start end=mount_unmount_example_end",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/mountables/bindto/ImageViewComponent.kt",start:"mount_unmount_example_start",end:"mount_unmount_example_end"},"override fun mount(c: Context, content: ImageView, layoutData: Any?) {\n  content.setImageDrawable(c.getResources().getDrawable(R.drawable.ic_launcher))\n}\n\noverride fun unmount(c: Context, content: ImageView, layoutData: Any?) {\n  content.setImageResource(0)\n  content.rotation = 0f\n  content.scaleX = 1f\n  content.scaleY = 1f\n  content.setBackgroundColor(Color.BLACK)\n}\n")),(0,i.mdx)("admonition",{title:"Important",type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"Once set, a property should be unset in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"unmount()")," method to ensure correctness when the content is reused.")))}d.isMDXComponent=!0}}]);
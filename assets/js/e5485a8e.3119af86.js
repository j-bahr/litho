"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6561,6972,2304,4882,6127,7940,1646,4980,6206],{3905:(e,t,o)=>{o.r(t),o.d(t,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>c});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a.apply(this,arguments)}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),c=function(e){return function(t){var o=u(t.components);return n.createElement(e,a({},t,{components:o}))}},u=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(o),d=r,y=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return o?n.createElement(y,l(l({ref:t},p),{},{components:o})):n.createElement(y,l({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}y.displayName="MDXCreateElement"},85162:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});var n=o(67294),r=o(34334);const a="tabItem_Ymn6";function i(e){var t=e.children,o=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:o},t)}},65488:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var n=o(83117),r=o(67294),a=o(34334),i=o(72389),l=o(67392),s=o(7094),p=o(12466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,o,i=e.lazy,d=e.block,m=e.defaultValue,y=e.values,f=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=y?y:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(o=g.find((function(e){return e.props.default})))?void 0:o.props.value)?t:g[0].props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,s.U)(),w=x.tabGroupChoices,N=x.setTabGroupChoices,j=(0,r.useState)(k),O=j[0],C=j[1],P=[],T=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=w[f];null!=S&&S!==O&&v.some((function(e){return e.value===S}))&&C(S)}var A=function(e){var t=e.currentTarget,o=P.indexOf(t),n=v[o].value;n!==O&&(T(t),C(n),null!=f&&N(f,String(n)))},E=function(e){var t,o=null;switch(e.key){case"ArrowRight":var n,r=P.indexOf(e.currentTarget)+1;o=null!=(n=P[r])?n:P[0];break;case"ArrowLeft":var a,i=P.indexOf(e.currentTarget)-1;o=null!=(a=P[i])?a:P[P.length-1]}null==(t=o)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},h)},v.map((function(e){var t=e.value,o=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return P.push(e)},onKeyDown:E,onFocus:A,onClick:A},i,{className:(0,a.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=o?o:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,i.default)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},7772:(e,t,o)=>{o.d(t,{Z:()=>m});var n=o(83117),r=o(67294),a=o(23746),i=o(7694),l=o(13618),s="0.45.0",p="0.46.0-SNAPSHOT",c="0.10.4",u="0.142.0",d=o(86668);const m=function(e){var t=e.language,o=e.code.replace(/{{site.lithoVersion}}/g,s).replace(/{{site.soloaderVersion}}/g,c).replace(/{{site.lithoSnapshotVersion}}/g,p).replace(/{{site.flipperVersion}}/g,u).trim(),m=(0,d.L)().isDarkTheme?l.Z:i.Z;return r.createElement(a.ZP,(0,n.Z)({},a.lG,{code:o,language:t,theme:m}),(function(e){var t=e.className,o=e.style,n=e.tokens,a=e.getLineProps,i=e.getTokenProps;return r.createElement("pre",{className:t,style:o},n.map((function(e,t){return r.createElement("div",a({line:e,key:t}),e.map((function(e,t){return r.createElement("span",i({token:e,key:t}))})))})))}))}},5221:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=o(83117),r=o(80102),a=(o(67294),o(3905)),i=(o(65488),o(85162),o(7772)),l=["components"],s={id:"project-setup",title:"Setting up the Project"},p=void 0,c={unversionedId:"tutorial/project-setup",id:"tutorial/project-setup",title:"Setting up the Project",description:"After creating an Android app project in Android Studio, take the steps detailed in this page to configure it with the correct settings and dependencies.",source:"@site/../docs/tutorial/project-setup.mdx",sourceDirName:"tutorial",slug:"/tutorial/project-setup",permalink:"/docs/tutorial/project-setup",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/tutorial/project-setup.mdx",tags:[],version:"current",frontMatter:{id:"project-setup",title:"Setting up the Project"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/tutorial/overview"},next:{title:"Components and Props",permalink:"/docs/tutorial/first-components"}},u={},d=[{value:"1. Link to the JCenter repository",id:"1-link-to-the-jcenter-repository",level:2},{value:"2. Add Litho core dependencies",id:"2-add-litho-core-dependencies",level:2},{value:"3. Using the Annotation Processor",id:"3-using-the-annotation-processor",level:2},{value:"4. Wire up native libs",id:"4-wire-up-native-libs",level:2},{value:"Testing your setup",id:"testing-your-setup",level:2},{value:"What next?",id:"what-next",level:2}],m={toc:d};function y(e){var t=e.components,o=(0,r.Z)(e,l);return(0,a.mdx)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"After creating an Android app project in Android Studio, take the steps detailed in this page to configure it with the correct settings and dependencies."),(0,a.mdx)("h2",{id:"1-link-to-the-jcenter-repository"},"1. Link to the JCenter repository"),(0,a.mdx)("p",null,"Litho artifacts are published to Bintray's JCenter, so you need to ensure you have the JCenter repository in your projects's root ",(0,a.mdx)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"repositories {\n  jcenter()\n}\n")),(0,a.mdx)("h2",{id:"2-add-litho-core-dependencies"},"2. Add Litho core dependencies"),(0,a.mdx)("p",null,"Add the following to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"build.gradle")," file, after the 'jcenter' entry of step 1:"),(0,a.mdx)(i.Z,{language:"groovy",code:"\ndependencies {\n  // Litho\n  implementation 'com.facebook.litho:litho-core:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-core-kotlin:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-widget:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-widget-kotlin:{{site.lithoVersion}}'\n  kapt 'com.facebook.litho:litho-processor:{{site.lithoVersion}}'\n  // SoLoader\n  implementation 'com.facebook.soloader:soloader:{{site.soloaderVersion}}'\n  // Testing Litho\n  testImplementation 'com.facebook.litho:litho-testing:{{site.lithoVersion}}'\n}\n",mdxType:"VersionedCodeBlock"}),(0,a.mdx)("h2",{id:"3-using-the-annotation-processor"},"3. Using the Annotation Processor"),(0,a.mdx)("p",null,"The Annotation Processor is a part of the application build/compile process that generates code by reading annotations (such as @Override and @SuppressWanings)."),(0,a.mdx)("p",null,"In order to use your project's dependencies (from Step 2) with Annotation Processors, you need to apply the ",(0,a.mdx)("inlineCode",{parentName:"p"},"kotlin-kapt")," plugin at the top of your app's ",(0,a.mdx)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-groovy"},"apply plugin: 'kotlin-kapt'\n")),(0,a.mdx)("h2",{id:"4-wire-up-native-libs"},"4. Wire up native libs"),(0,a.mdx)("p",null,"Litho has a dependency on ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/SoLoader"},"SoLoader")," to help load native libraries provided by the underlying layout engine, ",(0,a.mdx)("a",{parentName:"p",href:"https://yogalayout.com/docs/"},"Yoga"),(0,a.mdx)("sup",{parentName:"p",id:"fnref-1"},(0,a.mdx)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,a.mdx)("p",null,"Your custom ",(0,a.mdx)("inlineCode",{parentName:"p"},"Application")," class is a good place to initialize SoLoader:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="MyApplication.kt"',title:'"MyApplication.kt"'},"class MyApplication: Application() {\n\n  override fun onCreate() {\n    super.onCreate()\n    SoLoader.init(this, false)\n  }\n}\n")),(0,a.mdx)("h2",{id:"testing-your-setup"},"Testing your setup"),(0,a.mdx)("p",null,'You can test the above setup steps by adding the following simple UI, created with Litho, that displays "Hello, World!" text to an activity:'),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/onboarding/MyActivity.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/onboarding/MyActivity.kt",start:"start_example",end:"end_example"},'import android.os.Bundle\nimport androidx.appcompat.app.AppCompatActivity\nimport com.facebook.litho.Component\nimport com.facebook.litho.ComponentScope\nimport com.facebook.litho.KComponent\nimport com.facebook.litho.LithoView\nimport com.facebook.litho.dp\nimport com.facebook.litho.kotlin.widget.Text\n\nclass MyActivity : AppCompatActivity() {\n\n  override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n\n    val lithoView = LithoView.create(this /* context */, MyComponent())\n    setContentView(lithoView)\n  }\n}\n\nclass MyComponent() : KComponent() {\n  override fun ComponentScope.render(): Component = Text(text = "Hello, World!", textSize = 50.dp)\n}\n')),(0,a.mdx)("p",null,'If you build and run the app you should see "Hello, World!" displayed on the screen. Project setup is complete!'),(0,a.mdx)("h2",{id:"what-next"},"What next?"),(0,a.mdx)("p",null,"The next section of the tutorial, ",(0,a.mdx)("a",{parentName:"p",href:"/docs/tutorial/first-components"},"Components and Props"),", gives you a deeper understanding of what you've completed in this section."),(0,a.mdx)("div",{className:"footnotes"},(0,a.mdx)("hr",{parentName:"div"}),(0,a.mdx)("ol",{parentName:"div"},(0,a.mdx)("li",{parentName:"ol",id:"fn-1"},"Yoga is a cross-platform (usable on Android, iOS, and other platforms) implementation of the Flexbox layout system used in web browsers. Litho uses Yoga to enable layouts (positioning of elements in the screen) to be specified via the Flexbox layouting system.",(0,a.mdx)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}y.isMDXComponent=!0},23746:(e,t,o)=>{o.d(t,{ZP:()=>y,lG:()=>i});var n=o(87410);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a=o(67294),i={Prism:n.Z,theme:r};function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},s.apply(this,arguments)}var p=/\r\n|\r|\n/,c=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var o=e.length;return o>0&&e[o-1]===t?e:e.concat(t)},d=function(e,t){var o=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,o){var n=o.languages,r=o.style;return n&&!n.includes(t)||o.types.forEach((function(t){var o=s({},e[t],r);e[t]=o})),e}),n);return r.root=o,r.plain=s({},o,{backgroundColor:null}),r};function m(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(o[n]=e[n]);return o}const y=function(e){function t(){for(var t=this,o=[],n=arguments.length;n--;)o[n]=arguments[n];e.apply(this,o),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var o=e.theme?d(e.theme,e.language):void 0;return t.themeDict=o})),l(this,"getLineProps",(function(e){var o=e.key,n=e.className,r=e.style,a=s({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==r&&(a.style=void 0!==a.style?s({},a.style,r):r),void 0!==o&&(a.key=o),n&&(a.className+=" "+n),a})),l(this,"getStyleForToken",(function(e){var o=e.types,n=e.empty,r=o.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===o[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return a[o[0]];var i=n?{display:"inline-block"}:{},l=o.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(l))}})),l(this,"getTokenProps",(function(e){var o=e.key,n=e.className,r=e.style,a=e.token,i=s({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?s({},i.style,r):r),void 0!==o&&(i.key=o),n&&(i.className+=" "+n),i})),l(this,"tokenize",(function(e,t,o,n){var r={code:t,grammar:o,language:n,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,o=e.language,n=e.code,r=e.children,a=this.getThemeDict(this.props),i=t.languages[o];return r({tokens:function(e){for(var t=[[]],o=[e],n=[0],r=[e.length],a=0,i=0,l=[],s=[l];i>-1;){for(;(a=n[i]++)<r[i];){var d=void 0,m=t[i],y=o[i][a];if("string"==typeof y?(m=i>0?m:["plain"],d=y):(m=u(m,y.type),y.alias&&(m=u(m,y.alias)),d=y.content),"string"==typeof d){var f=d.split(p),h=f.length;l.push({types:m,content:f[0]});for(var g=1;g<h;g++)c(l),s.push(l=[]),l.push({types:m,content:f[g]})}else i++,t.push(m),o.push(d),n.push(0),r.push(d.length)}i--,t.pop(),o.pop(),n.pop(),r.pop()}return c(l),s}(void 0!==i?this.tokenize(t,n,i,o):[n]),className:"prism-code language-"+o,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)},13618:(e,t,o)=>{o.d(t,{Z:()=>n});const n={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,o)=>{o.d(t,{Z:()=>n});const n={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);
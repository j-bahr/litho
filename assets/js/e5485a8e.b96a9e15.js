(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),i=(n(0),n(182)),r=n(196),l=n(197),s=n(191),c={id:"project-setup",title:"Setting up the project"},p={unversionedId:"tutorial/project-setup",id:"tutorial/project-setup",isDocsHomePage:!1,title:"Setting up the project",description:"To add Litho to your project you'll need to configure it with correct settings and dependencies.",source:"@site/../docs/tutorial/project-setup.mdx",slug:"/tutorial/project-setup",permalink:"/docs/tutorial/project-setup",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/tutorial/project-setup.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/tutorial/overview"},next:{title:"Components and Props",permalink:"/docs/tutorial/first-components"}},u=[{value:"Add Litho core dependencies",id:"add-litho-core-dependencies",children:[]},{value:"Add Sections dependencies",id:"add-sections-dependencies",children:[]},{value:"Wire up native libs",id:"wire-up-native-libs",children:[]}],d={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To add Litho to your project you'll need to configure it with correct settings and dependencies."),Object(i.b)("p",null,"We publish Litho artifacts to Bintray's JCenter and first you need to make sure you have the JCenter\nrepository in your root ",Object(i.b)("inlineCode",{parentName:"p"},"build.gradle")," file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"repositories {\n  jcenter()\n}\n")),Object(i.b)("h2",{id:"add-litho-core-dependencies"},"Add Litho core dependencies"),Object(i.b)(r.a,{groupId:"language",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)(s.a,{language:"groovy",code:"\ndependencies {\n  // Litho\n  implementation 'com.facebook.litho:litho-core:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-widget:{{site.lithoVersion}}'\n  annotationProcessor 'com.facebook.litho:litho-processor:{{site.lithoVersion}}'\n  \n  // SoLoader\n  implementation 'com.facebook.soloader:soloader:{{site.soloaderVersion}}'\n  \n  // Testing Litho\n  testImplementation 'com.facebook.litho:litho-testing:{{site.lithoVersion}}'\n}\n",mdxType:"VersionedCodeBlock"})),Object(i.b)(l.a,{value:"kotlin",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Kotlin support for Litho is experimental at this point."))),Object(i.b)(s.a,{language:"groovy",code:"\ndependencies {\n  // Litho\n  implementation 'com.facebook.litho:litho-core:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-widget:{{site.lithoVersion}}'\n  kapt 'com.facebook.litho:litho-processor:{{site.lithoVersion}}'\n  \n  // SoLoader\n  implementation 'com.facebook.soloader:soloader:{{site.soloaderVersion}}'\n  \n  // Testing Litho\n  testImplementation 'com.facebook.litho:litho-testing:{{site.lithoVersion}}'\n}\n",mdxType:"VersionedCodeBlock"}),Object(i.b)("p",null,"Don't forget that in order to use dependencies with annotation processors, you need to apply Kotlin\nKAPT plugin at the top of your application's ",Object(i.b)("inlineCode",{parentName:"p"},"build.gradle")," file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-groovy"},"apply plugin: 'kotlin-kapt'\n")))),Object(i.b)("h2",{id:"add-sections-dependencies"},"Add Sections dependencies"),Object(i.b)("p",null,"Litho comes with an optional library called Sections for declaratively building lists. You can\ninclude Sections by adding the following additional dependencies to your ",Object(i.b)("inlineCode",{parentName:"p"},"build.gradle")," file:"),Object(i.b)(r.a,{groupId:"language",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)(s.a,{language:"groovy",code:"\ndependencies {\n  // Sections\n  implementation 'com.facebook.litho:litho-sections-core:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-sections-widget:{{site.lithoVersion}}'\n  compileOnly 'com.facebook.litho:litho-sections-annotations:{{site.lithoVersion}}'\n  \n  annotationProcessor 'com.facebook.litho:litho-sections-processor:{{site.lithoVersion}}'\n}\n",mdxType:"VersionedCodeBlock"})),Object(i.b)(l.a,{value:"kotlin",mdxType:"TabItem"},Object(i.b)(s.a,{language:"groovy",code:"\ndependencies {\n  // Sections\n  implementation 'com.facebook.litho:litho-sections-core:{{site.lithoVersion}}'\n  implementation 'com.facebook.litho:litho-sections-widget:{{site.lithoVersion}}'\n  compileOnly 'com.facebook.litho:litho-sections-annotations:{{site.lithoVersion}}'\n  \n  kapt 'com.facebook.litho:litho-sections-processor:{{site.lithoVersion}}'\n}\n",mdxType:"VersionedCodeBlock"}))),Object(i.b)("h2",{id:"wire-up-native-libs"},"Wire up native libs"),Object(i.b)("p",null,"As a last step, you need to initialize ",Object(i.b)("inlineCode",{parentName:"p"},"SoLoader"),". Litho has a dependency on ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebook/SoLoader"},"SoLoader"),"\nto help load native libraries provided by the underlying layout engine, ",Object(i.b)("a",{parentName:"p",href:"https://yogalayout.com/docs/"},"Yoga"),".\nYour custom ",Object(i.b)("inlineCode",{parentName:"p"},"Application")," class is a good place to do this:"),Object(i.b)(r.a,{groupId:"language",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java",metastring:'title="MyApplication.java"',title:'"MyApplication.java"'},"public class MyApplication extends Application {\n\n  @Override\n  public void onCreate() {\n    super.onCreate();\n    SoLoader.init(this, false);\n  }\n}\n"))),Object(i.b)(l.a,{value:"kotlin",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="MyApplication.kt"',title:'"MyApplication.kt"'},"class MyApplication: Application() {\n\n  override fun onCreate() {\n    super.onCreate()\n    SoLoader.init(this, false)\n  }\n}\n")))),Object(i.b)("h1",{id:"testing-your-setup"},"Testing your setup"),Object(i.b)("p",null,"Now you can test this config by adding a simple UI created with Litho - a built-in ",Object(i.b)("inlineCode",{parentName:"p"},"Text"),' widget\nthat displays "Hello World!" text - to an activity.'),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Don't worry about all the unfamiliar classes and red ",Object(i.b)("inlineCode",{parentName:"p"},"Text")," \u2013 we will explain everything in the next\nstep of this tutorial."))),Object(i.b)(r.a,{groupId:"language",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java",metastring:'title="MyActivity.java"',title:'"MyActivity.java"'},'import com.facebook.litho.ComponentContext;\nimport com.facebook.litho.LithoView;\nimport com.facebook.litho.widget.Text;\n\npublic class MyActivity extends AppCompatActivity {\n\n  @Override\n  public void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n\n    final ComponentContext c = new ComponentContext(this);\n\n    final LithoView lithoView = LithoView.create(\n          this /* context */,\n          Text.create(c)\n            .text("Hello, World!")\n            .textSizeDip(50)\n            .build());\n\n    setContentView(lithoView);\n  }\n}\n'))),Object(i.b)(l.a,{value:"kotlin",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="MyActivity.kt"',title:'"MyActivity.kt"'},'import com.facebook.litho.ComponentContext\nimport com.facebook.litho.LithoView\nimport com.facebook.litho.widget.Text\n\nclass MyActivity : AppCompatActivity() {\n\n  override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n\n    val c = ComponentContext(this)\n\n    val lithoView = LithoView.create(\n        this /* context */,\n        Text.create(c)\n            .text("Hello, World!")\n            .textSizeDip(50)\n            .build())\n\n    setContentView(lithoView)\n  }\n}\n')))),Object(i.b)("p",null,"That's it, if you build and run the app you should see \"Hello World!\" displayed on the screen. Setup\nis complete, let's go to the next page to understand what we've just done."))}b.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,m=u["".concat(r,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},185:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},187:function(e,t,n){"use strict";var o=n(0),a=n(188);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},188:function(e,t,n){"use strict";var o=n(0),a=n.n(o).a.createContext(void 0);t.a=a},190:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var o=n(23),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i=n(0),r={Prism:o.a,theme:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=s({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=s({},n,{backgroundColor:null}),a};function b(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var m=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,i=s({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(i.style=r.plain),void 0!==a&&(i.style=void 0!==i.style?s({},i.style,a):a),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i})),l(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,i=t.getThemeDict(t.props);if(void 0!==i){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return i[n[0]];var r=o?{display:"inline-block"}:{},l=n.map((function(e){return i[e]}));return Object.assign.apply(Object,[r].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,i=e.token,r=s({},b(e,["key","className","style","token"]),{className:"token "+i.types.join(" "),children:i.content,style:t.getStyleForToken(i),key:void 0});return void 0!==a&&(r.style=void 0!==r.style?s({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),l(this,"tokenize",(function(e,t,n,o){var a={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",a);var i=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,i=this.getThemeDict(this.props),r=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],i=0,r=0,l=[],s=[l];r>-1;){for(;(i=o[r]++)<a[r];){var d=void 0,b=t[r],m=n[r][i];if("string"==typeof m?(b=r>0?b:["plain"],d=m):(b=u(b,m.type),m.alias&&(b=u(b,m.alias)),d=m.content),"string"==typeof d){var y=d.split(c),g=y.length;l.push({types:b,content:y[0]});for(var h=1;h<g;h++)p(l),s.push(l=[]),l.push({types:b,content:y[h]})}else r++,t.push(b),n.push(d),o.push(0),a.push(d.length)}r--,t.pop(),n.pop(),o.pop(),a.pop()}return p(l),s}(void 0!==r?this.tokenize(t,o,r,n):[o]),className:"prism-code language-"+n,style:void 0!==i?i.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(i.Component);t.a=m},191:function(e,t,n){"use strict";var o=n(3),a=n(0),i=n.n(a),r=n(190),l={plain:{color:"rgb(36, 41, 46)",backgroundColor:"#f6f8fa"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword"],style:{color:"rgb(215, 58, 73)",color:"#e3116c"}},{types:["inserted-sign","inserted"],style:{backgroundColor:"rgb(240, 255, 244)",color:"rgb(34, 134, 58)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted-sign","deleted"],style:{backgroundColor:"rgb(255, 238, 240)",color:"rgb(179, 29, 40)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(36, 41, 46)"}},{types:["operator"],style:{color:"rgb(0, 92, 197)"}},{types:["boolean"],style:{color:"rgb(0, 92, 197)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(111, 66, 193)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["known-class-name","class-name"],style:{color:"rgb(227, 98, 9)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}},{types:["property-access"],style:{color:"rgb(0, 92, 197)"}},{types:["method","function","property-access"],style:{color:"rgb(111, 66, 193)"}},{languages:["json"],types:["property"],style:{color:"rgb(3, 47, 98)"}},{languages:["json"],types:["string"],style:{color:"rgb(3, 47, 98)"}},{languages:["json"],types:["number"],style:{color:"rgb(0, 92, 197)"}},{languages:["json"],types:["comment"],style:{backgroundColor:"rgb(179, 29, 40)",color:"rgb(250, 251, 252)"}}]},s={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},c="0.40.0",p="0.40.1-SNAPSHOT",u="0.9.0",d="0.46.0",b=n(187);t.a=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,c).replace(/{{site.soloaderVersion}}/g,u).replace(/{{site.lithoSnapshotVersion}}/g,p).replace(/{{site.flipperVersion}}/g,d).trim(),a=Object(b.a)().isDarkTheme?s:l;return i.a.createElement(r.a,Object(o.a)({},r.b,{code:n,language:t,theme:a}),(function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,r=e.getTokenProps;return i.a.createElement("pre",{className:t,style:n},o.map((function(e,t){return i.a.createElement("div",a({line:e,key:t}),e.map((function(e,t){return i.a.createElement("span",r({token:e,key:t}))})))})))}))}},193:function(e,t,n){"use strict";var o=n(0),a=n(194);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},194:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)(void 0);t.a=a},196:function(e,t,n){"use strict";var o=n(0),a=n.n(o),i=n(193),r=n(185),l=n(63),s=n.n(l);var c=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,u=e.values,d=e.groupId,b=e.className,m=Object(i.a)(),y=m.tabGroupChoices,g=m.setTabGroupChoices,h=Object(o.useState)(l),v=h[0],f=h[1],j=o.Children.toArray(e.children),O=[];if(null!=d){var k=y[d];null!=k&&k!==v&&u.some((function(e){return e.value===k}))&&f(k)}var w=function(e){var t=e.target,n=O.indexOf(t),o=j[n].props.value;f(o),null!=d&&(g(d,o),setTimeout((function(){var e,n,o,a,i,r,l,c;(e=t.getBoundingClientRect(),n=e.top,o=e.left,a=e.bottom,i=e.right,r=window,l=r.innerHeight,c=r.innerWidth,n>=0&&i<=c&&a<=l&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case p:var o=O.indexOf(e.target)+1;n=O[o]||O[0];break;case c:var a=O.indexOf(e.target)-1;n=O[a]||O[O.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},b)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:w,onClick:w},n)}))),t?Object(o.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},197:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}}}]);
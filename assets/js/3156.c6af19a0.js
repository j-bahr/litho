"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3156,1534,5701,2586,2793,2138,5425,2875,1894],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>y,mdx:()=>m,useMDXComponents:()=>p,withMDXComponents:()=>c});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){return function(t){var r=p(t.components);return n.createElement(e,a({},t,{components:r}))}},p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},y=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),y=o,f=c["".concat(l,".").concat(y)]||c[y]||d[y]||a;return r?n.createElement(f,u(u({ref:t},s),{},{components:r})):n.createElement(f,u({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=v;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[f]="string"==typeof e?e:o,l[1]=u;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(67294),o=r(86010);const a={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.default)(a.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.r(t),r.d(t,{default:()=>O});var n=r(87462),o=r(67294),a=r(86010),l=r(12466),u=r(16550),i=r(91980),s=r(67392),c=r(50012);function p(e){return function(e){return o.Children.map(e,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function y(e){var t=e.values,r=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:p(r);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,a=(0,u.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,i._X)(l),(0,o.useCallback)((function(e){if(l){var t=new URLSearchParams(a.location.search);t.set(l,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[l,a])]}function v(e){var t,r,n,a,l=e.defaultValue,u=e.queryString,i=void 0!==u&&u,s=e.groupId,p=y(e),v=(0,o.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var o=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:l,tabValues:p})})),m=v[0],b=v[1],g=d({queryString:i,groupId:s}),h=g[0],k=g[1],O=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,c.Nk)(t),n=r[0],a=r[1],[n,(0,o.useCallback)((function(e){t&&a.set(e)}),[t,a])]),w=O[0],E=O[1],T=function(){var e=null!=h?h:w;return f({value:e,tabValues:p})?e:null}();return(0,o.useLayoutEffect)((function(){T&&b(T)}),[T]),{selectedValue:m,selectValue:(0,o.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),k(e),E(e)}),[k,E,p]),tabValues:p}}var m=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,r=e.block,u=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,y=function(e){var t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==u&&(p(t),i(n))},f=function(e){var t,r=null;switch(e.key){case"Enter":y(e);break;case"ArrowRight":var n,o=c.indexOf(e.currentTarget)+1;r=null!=(n=c[o])?n:c[0];break;case"ArrowLeft":var a,l=c.indexOf(e.currentTarget)-1;r=null!=(a=c[l])?a:c[c.length-1]}null==(t=r)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.default)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,l=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:y},l,{className:(0,a.default)("tabs__item",b.tabItem,null==l?void 0:l.className,{"tabs__item--active":u===t})}),null!=r?r:t)})))}function h(e){var t=e.lazy,r=e.children,n=e.selectedValue;if(r=Array.isArray(r)?r:[r],t){var a=r.find((function(e){return e.props.value===n}));return a?(0,o.cloneElement)(a,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function k(e){var t=v(e);return o.createElement("div",{className:(0,a.default)("tabs-container",b.tabList)},o.createElement(g,(0,n.Z)({},e,t)),o.createElement(h,(0,n.Z)({},e,t)))}function O(e){var t=(0,m.default)();return o.createElement(k,(0,n.Z)({key:String(t)},e))}},23746:(e,t,r)=>{r.d(t,{ZP:()=>d,lG:()=>l});var n=r(87410);const o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a=r(67294),l={Prism:n.Z,theme:o};function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var s=/\r\n|\r|\n/,c=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},y=function(e,t){var r=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,r){var n=r.languages,o=r.style;return n&&!n.includes(t)||r.types.forEach((function(t){var r=i({},e[t],o);e[t]=r})),e}),n);return o.root=r,o.plain=i({},r,{backgroundColor:null}),o};function f(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}const d=function(e){function t(){for(var t=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];e.apply(this,r),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?y(e.theme,e.language):void 0;return t.themeDict=r})),u(this,"getLineProps",(function(e){var r=e.key,n=e.className,o=e.style,a=i({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?i({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),u(this,"getStyleForToken",(function(e){var r=e.types,n=e.empty,o=r.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return a[r[0]];var l=n?{display:"inline-block"}:{},u=r.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(u))}})),u(this,"getTokenProps",(function(e){var r=e.key,n=e.className,o=e.style,a=e.token,l=i({},f(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?i({},l.style,o):o),void 0!==r&&(l.key=r),n&&(l.className+=" "+n),l})),u(this,"tokenize",(function(e,t,r,n){var o={code:t,grammar:r,language:n,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,n=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[r];return o({tokens:function(e){for(var t=[[]],r=[e],n=[0],o=[e.length],a=0,l=0,u=[],i=[u];l>-1;){for(;(a=n[l]++)<o[l];){var y=void 0,f=t[l],d=r[l][a];if("string"==typeof d?(f=l>0?f:["plain"],y=d):(f=p(f,d.type),d.alias&&(f=p(f,d.alias)),y=d.content),"string"==typeof y){var v=y.split(s),m=v.length;u.push({types:f,content:v[0]});for(var b=1;b<m;b++)c(u),i.push(u=[]),u.push({types:f,content:v[b]})}else l++,t.push(f),r.push(y),n.push(0),o.push(y.length)}l--,t.pop(),r.pop(),n.pop(),o.pop()}return c(u),i}(void 0!==l?this.tokenize(t,n,l,r):[n]),className:"prism-code language-"+r,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)},13618:(e,t,r)=>{r.d(t,{Z:()=>n});const n={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,r)=>{r.d(t,{Z:()=>n});const n={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);
!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=1001)}({0:function(e,t,o){"use strict";function r(e,t,o,r,n,i,l,u,a,s){var c,d="function"==typeof e?e.options:e;if(a){d.components||(d.components={});var f=Object.prototype.hasOwnProperty;for(var p in a)f.call(a,p)&&!f.call(d.components,p)&&(d.components[p]=a[p])}if(s&&("function"==typeof s.beforeCreate&&(s.beforeCreate=[s.beforeCreate]),(s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(d.mixins||(d.mixins=[])).push(s)),t&&(d.render=t,d.staticRenderFns=o,d._compiled=!0),r&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),l?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},d._ssrRegister=c):n&&(c=u?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(d.functional){d._injectStyles=c;var b=d.render;d.render=function(e,t){return c.call(t),b(e,t)}}else{var _=d.beforeCreate;d.beforeCreate=_?[].concat(_,c):[c]}return{exports:e,options:d}}o.d(t,"a",(function(){return r}))},1:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},10:function(e,t,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(11).default,Vue.prototype.__$appStyle__)},1001:function(e,t,o){"use strict";o.r(t);o(10),o(12);var r=o(324);r.default.mpType="page",r.default.route="pages/componentsA/link/link",r.default.el="#root",new Vue(r.default)},107:function(e,t,o){"use strict";o.r(t);var r=o(69),n=o.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(i);t.default=n.a},11:function(e,t,o){"use strict";o.r(t);var r=o(2),n=o.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(i);t.default=n.a},12:function(e,t){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(o){return t.resolve(e()).then((function(){return o}))}),(function(o){return t.resolve(e()).then((function(){throw o}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var o=uni.requireGlobal();ArrayBuffer=o.ArrayBuffer,Int8Array=o.Int8Array,Uint8Array=o.Uint8Array,Uint8ClampedArray=o.Uint8ClampedArray,Int16Array=o.Int16Array,Uint16Array=o.Uint16Array,Int32Array=o.Int32Array,Uint32Array=o.Uint32Array,Float32Array=o.Float32Array,Float64Array=o.Float64Array,BigInt64Array=o.BigInt64Array,BigUint64Array=o.BigUint64Array}},122:function(e,t,o){"use strict";o.r(t);var r=o(71),n=o(67);for(var i in n)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(i);var l=o(0);var u=Object(l.a)(n.default,r.b,r.c,!1,null,"0f0cb6d2","5c32af49",!1,r.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(107).default,this.options.style):Object.assign(this.options.style,o(107).default)}).call(u),t.default=u.exports},123:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={props:{color:{type:String,default:uni.$u.props.link.color},fontSize:{type:[String,Number],default:uni.$u.props.link.fontSize},underLine:{type:Boolean,default:uni.$u.props.link.underLine},href:{type:String,default:uni.$u.props.link.href},mpTips:{type:String,default:uni.$u.props.link.mpTips},lineColor:{type:String,default:uni.$u.props.link.lineColor},text:{type:String,default:uni.$u.props.link.text}}};t.default=r},2:function(e,t){e.exports={"u-line-1":{lines:1,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-2":{lines:2,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-3":{lines:3,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-4":{lines:4,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-5":{lines:5,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-border":{borderWidth:"0.5",borderColor:"#dadbde",borderStyle:"solid"},"u-border-top":{borderTopWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid"},"u-border-left":{borderLeftWidth:"0.5",borderColor:"#dadbde",borderLeftStyle:"solid"},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde",borderRightStyle:"solid"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde",borderBottomStyle:"solid"},"u-border-top-bottom":{borderTopWidth:"0.5",borderBottomWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid",borderBottomStyle:"solid"},"u-reset-button":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0},"u-hover-class":{opacity:.7},"u-primary-light":{color:"#ecf5ff"},"u-warning-light":{color:"#fdf6ec"},"u-success-light":{color:"#f5fff0"},"u-error-light":{color:"#fef0f0"},"u-info-light":{color:"#f4f4f5"},"u-primary-light-bg":{backgroundColor:"#ecf5ff"},"u-warning-light-bg":{backgroundColor:"#fdf6ec"},"u-success-light-bg":{backgroundColor:"#f5fff0"},"u-error-light-bg":{backgroundColor:"#fef0f0"},"u-info-light-bg":{backgroundColor:"#f4f4f5"},"u-primary-dark":{color:"#398ade"},"u-warning-dark":{color:"#f1a532"},"u-success-dark":{color:"#53c21d"},"u-error-dark":{color:"#e45656"},"u-info-dark":{color:"#767a82"},"u-primary-dark-bg":{backgroundColor:"#398ade"},"u-warning-dark-bg":{backgroundColor:"#f1a532"},"u-success-dark-bg":{backgroundColor:"#53c21d"},"u-error-dark-bg":{backgroundColor:"#e45656"},"u-info-dark-bg":{backgroundColor:"#767a82"},"u-primary-disabled":{color:"#9acafc"},"u-warning-disabled":{color:"#f9d39b"},"u-success-disabled":{color:"#a9e08f"},"u-error-disabled":{color:"#f7b2b2"},"u-info-disabled":{color:"#c4c6c9"},"u-primary":{color:"#3c9cff"},"u-warning":{color:"#f9ae3d"},"u-success":{color:"#5ac725"},"u-error":{color:"#f56c6c"},"u-info":{color:"#909399"},"u-primary-bg":{backgroundColor:"#3c9cff"},"u-warning-bg":{backgroundColor:"#f9ae3d"},"u-success-bg":{backgroundColor:"#5ac725"},"u-error-bg":{backgroundColor:"#f56c6c"},"u-info-bg":{backgroundColor:"#909399"},"u-main-color":{color:"#303133"},"u-content-color":{color:"#606266"},"u-tips-color":{color:"#909193"},"u-light-color":{color:"#c0c4cc"},"u-block":{paddingTop:"14",paddingRight:"14",paddingBottom:"14",paddingLeft:"14"},"u-block__section":{marginBottom:"10"},"u-block__title":{marginTop:"10",fontSize:"15",color:"#606266",marginBottom:"10"},"u-cell-icon":{width:"36rpx",height:"36rpx",marginRight:"8rpx"},"u-page":{paddingTop:"15",paddingRight:"15",paddingBottom:"40",paddingLeft:"15"},"u-demo-block":{flex:1,marginBottom:"23"},"u-demo-block__content":{flexDirection:"column"},"u-demo-block__title":{fontSize:"14",color:"#8f9ca2",marginBottom:"8",flexDirection:"row"},"@VERSION":2}},324:function(e,t,o){"use strict";var r=o(727),n=o(443),i=o(0);var l=Object(i.a)(n.default,r.b,r.c,!1,null,null,"ccd7a28e",!1,r.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(885).default,this.options.style):Object.assign(this.options.style,o(885).default)}).call(l),t.default=l.exports},443:function(e,t,o){"use strict";var r=o(444),n=o.n(r);t.default=n.a},444:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{}},methods:{click:function(){e("log","click"," at pages/componentsA/link/link.nvue:63")}}};t.default=o}).call(this,o(56).default)},445:function(e,t){e.exports={"u-page__link-item":{marginTop:"5"},"@VERSION":2}},56:function(e,t,o){"use strict";function r(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function n(){return"string"==typeof __channelId__&&__channelId__}function i(e,t){switch(r(t)){case"Function":return"function() { [native code] }";default:return t}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var l=t.shift();if(n())return t.push(t.pop().replace("at ","uni-app:///")),console[l].apply(console,t);var u=t.map((function(e){var t=Object.prototype.toString.call(e).toLowerCase();if("[object object]"===t||"[object array]"===t)try{e="---BEGIN:JSON---"+JSON.stringify(e,i)+"---END:JSON---"}catch(o){e=t}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var o=r(e).toUpperCase();e="NUMBER"===o||"BOOLEAN"===o?"---BEGIN:"+o+"---"+e+"---END:"+o+"---":String(e)}return e})),a="";if(u.length>1){var s=u.pop();a=u.join("---COMMA---"),0===s.indexOf(" at ")?a+=s:a+="---COMMA---"+s}else a=u[0];console[l](a)},t.log=function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];console[e].apply(console,o)}},67:function(e,t,o){"use strict";o.r(t);var r=o(68),n=o.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(i);t.default=n.a},68:function(e,t,o){"use strict";var r=o(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(o(123)),i={name:"u-link",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],computed:{linkStyle:function(){return{color:this.color,fontSize:uni.$u.addUnit(this.fontSize),lineHeight:uni.$u.addUnit(uni.$u.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"}}},methods:{openLink:function(){plus.runtime.openURL(this.href),this.$emit("click")}}};t.default=i},69:function(e,t){e.exports={"u-link":{flexDirection:"row",flexWrap:"wrap",flex:1},"@VERSION":2}},71:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){}));var r=function(){var e=this.$createElement;return(this._self._c||e)("u-text",{staticClass:["u-link"],style:[this.linkStyle,this.$u.addStyle(this.customStyle)],appendAsTree:!0,attrs:{append:"tree"},on:{click:this.openLink}},[this._v(this._s(this.text))])},n=[]},727:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return r}));var r={uLink:o(122).default},n=function(){var e=this.$createElement,t=this._self._c||e;return t("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[t("view",{staticClass:["u-page"]},[t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u57fa\u672c\u6848\u4f8b")]),t("view",{staticClass:["u-demo-block__content"]},[t("view",{staticClass:["u-page__link-item"]},[t("u-link",{attrs:{href:"https://uviewui.com/",text:"\u6253\u5f00uView UI\u6587\u6863"},on:{click:this.click}})],1)])]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u663e\u793a\u4e0b\u5212\u7ebf")]),t("view",{staticClass:["u-demo-block__content"]},[t("view",{staticClass:["u-page__link-item"]},[t("u-link",{attrs:{href:"https://uviewui.com/",underLine:!0,text:"Go to uView doc"}})],1)])]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u81ea\u5b9a\u4e49\u989c\u8272")]),t("view",{staticClass:["u-demo-block__content"]},[t("view",{staticClass:["u-page__link-item"]},[t("u-link",{attrs:{href:"https://uviewui.com/",lineColor:"#19be6b",color:"#19be6b",text:"\u6253\u5f00uView UI\u6587\u6863"}})],1)])]),t("view",{staticClass:["u-demo-block"]},[t("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u81ea\u5b9a\u4e49\u94fe\u63a5\u5185\u5bb9")]),t("view",{staticClass:["u-demo-block__content"]},[t("view",{staticClass:["u-page__link-item"]},[t("u-link",{attrs:{href:"https://uniapp.dcloud.io/",text:"\u6253\u5f00uni-app\u6587\u6863"}})],1)])])])])},i=[]},885:function(e,t,o){"use strict";o.r(t);var r=o(445),n=o.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(i);t.default=n.a}});
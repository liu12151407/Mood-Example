!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=1136)}({0:function(e,t,o){"use strict";function r(e,t,o,r,n,a,i,u,l,d){var s,c="function"==typeof e?e.options:e;if(l){c.components||(c.components={});var f=Object.prototype.hasOwnProperty;for(var p in l)f.call(l,p)&&!f.call(c.components,p)&&(c.components[p]=l[p])}if(d&&("function"==typeof d.beforeCreate&&(d.beforeCreate=[d.beforeCreate]),(d.beforeCreate||(d.beforeCreate=[])).unshift((function(){this[d.__module]=this})),(c.mixins||(c.mixins=[])).push(d)),t&&(c.render=t,c.staticRenderFns=o,c._compiled=!0),r&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),i?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=s):n&&(s=u?function(){n.call(this,this.$root.$options.shadowRoot)}:n),s)if(c.functional){c._injectStyles=s;var b=c.render;c.render=function(e,t){return s.call(t),b(e,t)}}else{var g=c.beforeCreate;c.beforeCreate=g?[].concat(g,s):[s]}return{exports:e,options:c}}o.d(t,"a",(function(){return r}))},1:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},10:function(e,t,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(11).default,Vue.prototype.__$appStyle__)},11:function(e,t,o){"use strict";o.r(t);var r=o(2),n=o.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(a);t.default=n.a},1136:function(e,t,o){"use strict";o.r(t);o(10),o(12);var r=o(372);r.default.mpType="page",r.default.route="pages/componentsC/textarea/textarea",r.default.el="#root",new Vue(r.default)},12:function(e,t){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(o){return t.resolve(e()).then((function(){return o}))}),(function(o){return t.resolve(e()).then((function(){throw o}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var o=uni.requireGlobal();ArrayBuffer=o.ArrayBuffer,Int8Array=o.Int8Array,Uint8Array=o.Uint8Array,Uint8ClampedArray=o.Uint8ClampedArray,Int16Array=o.Int16Array,Uint16Array=o.Uint16Array,Int32Array=o.Int32Array,Uint32Array=o.Uint32Array,Float32Array=o.Float32Array,Float64Array=o.Float64Array,BigInt64Array=o.BigInt64Array,BigUint64Array=o.BigUint64Array}},2:function(e,t){e.exports={"u-line-1":{lines:1,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-2":{lines:2,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-3":{lines:3,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-4":{lines:4,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-5":{lines:5,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-border":{borderWidth:"0.5",borderColor:"#dadbde",borderStyle:"solid"},"u-border-top":{borderTopWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid"},"u-border-left":{borderLeftWidth:"0.5",borderColor:"#dadbde",borderLeftStyle:"solid"},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde",borderRightStyle:"solid"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde",borderBottomStyle:"solid"},"u-border-top-bottom":{borderTopWidth:"0.5",borderBottomWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid",borderBottomStyle:"solid"},"u-reset-button":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0},"u-hover-class":{opacity:.7},"u-primary-light":{color:"#ecf5ff"},"u-warning-light":{color:"#fdf6ec"},"u-success-light":{color:"#f5fff0"},"u-error-light":{color:"#fef0f0"},"u-info-light":{color:"#f4f4f5"},"u-primary-light-bg":{backgroundColor:"#ecf5ff"},"u-warning-light-bg":{backgroundColor:"#fdf6ec"},"u-success-light-bg":{backgroundColor:"#f5fff0"},"u-error-light-bg":{backgroundColor:"#fef0f0"},"u-info-light-bg":{backgroundColor:"#f4f4f5"},"u-primary-dark":{color:"#398ade"},"u-warning-dark":{color:"#f1a532"},"u-success-dark":{color:"#53c21d"},"u-error-dark":{color:"#e45656"},"u-info-dark":{color:"#767a82"},"u-primary-dark-bg":{backgroundColor:"#398ade"},"u-warning-dark-bg":{backgroundColor:"#f1a532"},"u-success-dark-bg":{backgroundColor:"#53c21d"},"u-error-dark-bg":{backgroundColor:"#e45656"},"u-info-dark-bg":{backgroundColor:"#767a82"},"u-primary-disabled":{color:"#9acafc"},"u-warning-disabled":{color:"#f9d39b"},"u-success-disabled":{color:"#a9e08f"},"u-error-disabled":{color:"#f7b2b2"},"u-info-disabled":{color:"#c4c6c9"},"u-primary":{color:"#3c9cff"},"u-warning":{color:"#f9ae3d"},"u-success":{color:"#5ac725"},"u-error":{color:"#f56c6c"},"u-info":{color:"#909399"},"u-primary-bg":{backgroundColor:"#3c9cff"},"u-warning-bg":{backgroundColor:"#f9ae3d"},"u-success-bg":{backgroundColor:"#5ac725"},"u-error-bg":{backgroundColor:"#f56c6c"},"u-info-bg":{backgroundColor:"#909399"},"u-main-color":{color:"#303133"},"u-content-color":{color:"#606266"},"u-tips-color":{color:"#909193"},"u-light-color":{color:"#c0c4cc"},"u-block":{paddingTop:"14",paddingRight:"14",paddingBottom:"14",paddingLeft:"14"},"u-block__section":{marginBottom:"10"},"u-block__title":{marginTop:"10",fontSize:"15",color:"#606266",marginBottom:"10"},"u-cell-icon":{width:"36rpx",height:"36rpx",marginRight:"8rpx"},"u-page":{paddingTop:"15",paddingRight:"15",paddingBottom:"40",paddingLeft:"15"},"u-demo-block":{flex:1,marginBottom:"23"},"u-demo-block__content":{flexDirection:"column"},"u-demo-block__title":{fontSize:"14",color:"#8f9ca2",marginBottom:"8",flexDirection:"row"},"@VERSION":2}},217:function(e,t,o){"use strict";o.r(t);var r=o(218),n=o.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(a);t.default=n.a},218:function(e,t,o){"use strict";var r=o(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(o(857)),a=r(o(304)),i={name:"u--textarea",mixins:[uni.$u.mpMixin,a.default,uni.$u.mixin],components:{uvTextarea:n.default}};t.default=i},219:function(e,t,o){"use strict";o.r(t);var r=o(220),n=o.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(a);t.default=n.a},220:function(e,t,o){"use strict";var r=o(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(o(304)),a={name:"u-textarea",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],data:function(){return{innerValue:"",focused:!1,firstChange:!0,changeFromInner:!1,innerFormatter:function(e){return e}}},watch:{value:{immediate:!0,handler:function(e,t){this.innerValue=e,this.firstChange=!1,this.changeFromInner=!1}}},computed:{textareaClass:function(){var e=[],t=this.border,o=this.disabled;this.shape;return"surround"===t&&(e=e.concat(["u-border","u-textarea--radius"])),"bottom"===t&&(e=e.concat(["u-border-bottom","u-textarea--no-radius"])),o&&e.push("u-textarea--disabled"),e.join(" ")},textareaStyle:function(){var e={};return"android"===uni.$u.os()&&(e.paddingTop="6px",e.paddingLeft="9px",e.paddingBottom="3px",e.paddingRight="6px"),uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))}},methods:{setFormatter:function(e){this.innerFormatter=e},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){this.$emit("blur",e),uni.$u.formValidate(this,"blur")},onLinechange:function(e){this.$emit("linechange",e)},onInput:function(e){var t=this,o=(e.detail||{}).value,r=void 0===o?"":o,n=(this.formatter||this.innerFormatter)(r);this.innerValue=r,this.$nextTick((function(){t.innerValue=n,t.valueChange()}))},valueChange:function(){var e=this,t=this.innerValue;this.$nextTick((function(){e.$emit("input",t),e.changeFromInner=!0,e.$emit("change",t),uni.$u.formValidate(e,"change")}))},onConfirm:function(e){this.$emit("confirm",e)},onKeyboardheightchange:function(e){this.$emit("keyboardheightchange",e)}}};t.default=a},221:function(e,t){e.exports={"u-textarea":{borderRadius:"4",backgroundColor:"#ffffff",position:"relative",flexDirection:"row",flex:1,paddingTop:"9",paddingRight:"9",paddingBottom:"9",paddingLeft:"9"},"u-textarea--radius":{borderRadius:"4"},"u-textarea--no-radius":{borderRadius:0},"u-textarea--disabled":{backgroundColor:"#f5f7fa"},"u-textarea__field":{flex:1,fontSize:"15",color:"#606266",width:100},"u-textarea__count":{position:"absolute",right:"5",bottom:"2",fontSize:"12",color:"#909193",backgroundColor:"#ffffff",paddingTop:"1",paddingRight:"4",paddingBottom:"1",paddingLeft:"4"},"@VERSION":2}},242:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("uvTextarea",{attrs:{value:e.value,placeholder:e.placeholder,height:e.height,confirmType:e.confirmType,disabled:e.disabled,count:e.count,focus:e.focus,autoHeight:e.autoHeight,fixed:e.fixed,cursorSpacing:e.cursorSpacing,cursor:e.cursor,showConfirmBar:e.showConfirmBar,selectionStart:e.selectionStart,selectionEnd:e.selectionEnd,adjustPosition:e.adjustPosition,disableDefaultPadding:e.disableDefaultPadding,holdKeyboard:e.holdKeyboard,maxlength:e.maxlength,border:e.border,customStyle:e.customStyle,formatter:e.formatter,ignoreCompositionEvent:e.ignoreCompositionEvent},on:{focus:function(t){return e.$emit("focus")},blur:function(t){return e.$emit("blur")},linechange:function(t){return e.$emit("linechange",t)},confirm:function(t){return e.$emit("confirm")},input:function(t){return e.$emit("input",t)},keyboardheightchange:function(t){return e.$emit("keyboardheightchange")}}})},n=[]},249:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:["u-textarea"],class:e.textareaClass,style:[e.textareaStyle]},[o("u-textarea",{staticClass:["u-textarea__field"],style:{height:e.$u.addUnit(e.height)},attrs:{value:e.innerValue,placeholder:e.placeholder,placeholderStyle:e.$u.addStyle(e.placeholderStyle,"string"),placeholderClass:e.placeholderClass,disabled:e.disabled,focus:e.focus,autoHeight:e.autoHeight,fixed:e.fixed,cursorSpacing:e.cursorSpacing,cursor:e.cursor,showConfirmBar:e.showConfirmBar,selectionStart:e.selectionStart,selectionEnd:e.selectionEnd,adjustPosition:e.adjustPosition,disableDefaultPadding:e.disableDefaultPadding,holdKeyboard:e.holdKeyboard,maxlength:e.maxlength,confirmType:e.confirmType,ignoreCompositionEvent:e.ignoreCompositionEvent},on:{focus:e.onFocus,blur:e.onBlur,linechange:e.onLinechange,input:e.onInput,confirm:e.onConfirm,keyboardheightchange:e.onKeyboardheightchange}}),e.count?o("u-text",{staticClass:["u-textarea__count"],style:{"background-color":e.disabled?"transparent":"#fff"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.innerValue.length)+"/"+e._s(e.maxlength))]):e._e()],1)},n=[]},304:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={props:{value:{type:[String,Number],default:uni.$u.props.textarea.value},placeholder:{type:[String,Number],default:uni.$u.props.textarea.placeholder},placeholderClass:{type:String,default:uni.$u.props.input.placeholderClass},placeholderStyle:{type:[String,Object],default:uni.$u.props.input.placeholderStyle},height:{type:[String,Number],default:uni.$u.props.textarea.height},confirmType:{type:String,default:uni.$u.props.textarea.confirmType},disabled:{type:Boolean,default:uni.$u.props.textarea.disabled},count:{type:Boolean,default:uni.$u.props.textarea.count},focus:{type:Boolean,default:uni.$u.props.textarea.focus},autoHeight:{type:Boolean,default:uni.$u.props.textarea.autoHeight},fixed:{type:Boolean,default:uni.$u.props.textarea.fixed},cursorSpacing:{type:Number,default:uni.$u.props.textarea.cursorSpacing},cursor:{type:[String,Number],default:uni.$u.props.textarea.cursor},showConfirmBar:{type:Boolean,default:uni.$u.props.textarea.showConfirmBar},selectionStart:{type:Number,default:uni.$u.props.textarea.selectionStart},selectionEnd:{type:Number,default:uni.$u.props.textarea.selectionEnd},adjustPosition:{type:Boolean,default:uni.$u.props.textarea.adjustPosition},disableDefaultPadding:{type:Boolean,default:uni.$u.props.textarea.disableDefaultPadding},holdKeyboard:{type:Boolean,default:uni.$u.props.textarea.holdKeyboard},maxlength:{type:[String,Number],default:uni.$u.props.textarea.maxlength},border:{type:String,default:uni.$u.props.textarea.border},formatter:{type:[Function,null],default:uni.$u.props.textarea.formatter},ignoreCompositionEvent:{type:Boolean,default:!0}}};t.default=r},305:function(e,t,o){"use strict";o.r(t);var r=o(221),n=o.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return r[e]}))}(a);t.default=n.a},372:function(e,t,o){"use strict";var r=o(775),n=o(705),a=o(0);var i=Object(a.a)(n.default,r.b,r.c,!1,null,null,"a9c9ed12",!1,r.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style)}).call(i),t.default=i.exports},705:function(e,t,o){"use strict";var r=o(706),n=o.n(r);t.default=n.a},706:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={data:function(){return{value1:"",value2:"\u7edf\u8ba1\u5b57\u6570",value3:"",value4:"",value5:""}},methods:{formatter:function(e){return e.replace(/[^0-9]/gi,"")}}}},775:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return r}));var r={"u-Textarea":o(856).default},n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[o("view",{staticClass:["u-page"]},[o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u57fa\u7840\u4f7f\u7528")]),o("view",{staticClass:["u-demo-block__content"]},[o("u--textarea",{attrs:{placeholder:"\u8bf7\u8f93\u5165\u5185\u5bb9"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u5b57\u6570\u7edf\u8ba1")]),o("view",{staticClass:["u-demo-block__content"]},[o("u--textarea",{attrs:{placeholder:"\u8bf7\u8f93\u5165\u5185\u5bb9",count:!0},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u81ea\u52a8\u589e\u9ad8")]),o("view",{staticClass:["u-demo-block__content"]},[o("u--textarea",{attrs:{placeholder:"\u8bf7\u8f93\u5165\u5185\u5bb9",autoHeight:!0},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u7981\u7528\u72b6\u6001")]),o("view",{staticClass:["u-demo-block__content"]},[o("u--textarea",{attrs:{placeholder:"\u6587\u672c\u57df\u5df2\u88ab\u7981\u7528",disabled:!0,count:!0},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1)]),o("view",{staticClass:["u-demo-block"]},[o("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u4e0b\u5212\u7ebf\u6a21\u5f0f")]),o("view",{staticClass:["u-demo-block__content"]},[o("u--textarea",{attrs:{placeholder:"\u8bf7\u8f93\u5165\u5185\u5bb9",border:"bottom"},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}})],1)])])])},a=[]},856:function(e,t,o){"use strict";o.r(t);var r=o(242),n=o(217);for(var a in n)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(a);var i=o(0),u=Object(i.a)(n.default,r.b,r.c,!1,null,null,"3d1ab8af",!1,r.a,void 0);t.default=u.exports},857:function(e,t,o){"use strict";o.r(t);var r=o(249),n=o(219);for(var a in n)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(a);var i=o(0);var u=Object(i.a)(n.default,r.b,r.c,!1,null,"c27e5be4","4f68656e",!1,r.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(305).default,this.options.style):Object.assign(this.options.style,o(305).default)}).call(u),t.default=u.exports}});
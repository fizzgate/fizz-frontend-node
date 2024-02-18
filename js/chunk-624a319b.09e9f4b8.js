/*!
 * Fizz-Admin v3.2.0-beta1
 * (c) 2020-2024 Joker-Lee
 * AGPL v3 Licensed.
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-624a319b"],{"0149":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("el-drawer",{ref:"pluginDrawer",attrs:{"append-to-body":"",title:"添加插件",size:"50%","modal-append-to-body":!1,wrapperClosable:!1,visible:t.drawerVisible},on:{"update:visible":function(e){t.drawerVisible=e}}},[e("div",{staticStyle:{"padding-bottom":"50px"}},[e("plugin-list",{attrs:{config:this.isDedicatedLine?t.pluginNoLineOptions:t.pluginOptions},on:{change:t.getSelectionPlugins}})],1),e("footer",{staticClass:"drawer-footer"},[e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.handlePluginDrawer}},[t._v("添 加")]),e("el-button",{attrs:{size:"small"},on:{click:function(e){t.drawerVisible=!1}}},[t._v("取 消")])],1)])},a=[],s=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),l=i("5880"),o=i("7555");function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var u={name:"pluginDrawer",components:{pluginList:o["default"]},props:{visible:{type:Boolean,default:!1},data:{type:Array,default:function(){return[]}},isDedicatedLine:{type:Boolean,default:!1}},computed:r(r({},Object(l["mapGetters"])(["pluginNoLineOptions","pluginOptions"])),{},{drawerVisible:{get:function(){return this.visible},set:function(){this.$emit("changeDrawer")}}}),watch:{data:{immediate:!0,deep:!0,handler:function(){this.apiPlugins=this.data}}},data:function(){return{selectionPlugins:[],apiPlugins:[]}},methods:r(r({},Object(l["mapActions"])(["getPluginNoLineOptions","getPluginOptions"])),{},{getSelectionPlugins:function(t){this.selectionPlugins=t},handlePluginDrawer:function(){this.addPlugin(this.selectionPlugins),this.drawerVisible=!1,this.$emit("emitData",this.apiPlugins)},addPlugin:function(t){var e=this.apiPlugins.concat(t);this.apiPlugins=e}}),created:function(){if(this.isDedicatedLine){var t=["dedicatedLineCodecPlugin","dedicatedLineApiAuthPlugin","dedicatedLinePairingPlugin"];this.getPluginNoLineOptions({noEngNames:t.join(",")})}else this.getPluginOptions()}},d=u,p=(i("8c48"),i("2877")),g=Object(p["a"])(d,n,a,!1,null,"5447f4c0",null);e["default"]=g.exports},"09b5":function(t,e,i){"use strict";i("d189")},"0e92":function(t,e,i){},"35d1":function(t,e,i){},"378a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"plugin-config-con"},[t._m(0),t.showGroupTip?e("p",{staticClass:"tip"},[t._v("网关分组级别的插件对分组下所有路由都生效")]):t._e(),e("el-button",{staticClass:"add-btn",attrs:{size:"small",type:"primary",disabled:t.disabled,plain:""},on:{click:function(e){t.pluginVisible=!0}}},[t._v("添加插件")]),e("plugin-config",{staticClass:"plugin-list",attrs:{config:t.groupConfig,disabled:"",type:"group",showType:t.showType}}),e("plugin-config",{ref:"pluginConfig",attrs:{config:t.apiPlugins,disabled:t.disabled,type:"route",startIndex:t.groupConfig.length,showType:t.showType},on:{change:t.getApiPluginConfig}}),t.pluginVisible?e("pluginDrawer",{attrs:{visible:t.pluginVisible,data:t.apiPlugins,isDedicatedLine:t.isDedicatedLine},on:{changeDrawer:function(e){t.pluginVisible=!1},emitData:function(e){return t.apiPlugins=e}}}):t._e()],1)},a=[function(){var t=this,e=t._self._c;return e("h3",[e("i",{staticClass:"el-icon-edit-outline avue-group__icon"}),t._v("插件配置")])}],s=(i("8e6e"),i("456d"),i("75fc")),l=(i("ac6a"),i("28a5"),i("bd86")),o=i("60cc"),c=i("0149"),r=i("5880");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){Object(l["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var p={name:"pluginConfigCon",components:{pluginConfig:o["default"],pluginDrawer:c["default"]},props:{disabled:{type:Boolean,default:!1},config:{type:Array,default:function(){return[]}},groupConfig:{type:Array,default:function(){return[]}},showType:{type:Boolean,default:!1},showGroupTip:{type:Boolean,default:!1},isDedicatedLine:{type:Boolean,default:!1}},data:function(){return{apiPlugins:[],pluginVisible:!1}},watch:{apiPlugins:{deep:!0,immediate:!0,handler:function(){this.$emit("emitData",this.apiPlugins)}},config:{immediate:!0,deep:!0,handler:function(){this.apiPlugins=this.config}}},computed:d(d({},Object(r["mapGetters"])(["pluginLineOptions"])),{},{actionType:function(){var t=this.$route.path.split("/");return t[t.length-1]||"add"}}),methods:d(d({},Object(r["mapActions"])(["getPluginLineOptions"])),{},{getApiPluginConfig:function(t){this.apiPlugins=t},validate:function(){var t=this;return new Promise((function(e,i){t.$refs.pluginConfig.validate((function(t,n){t?e():i("string"===typeof n&&n||"请完善插件配置")}))}))},getPluginLine:function(){var t=this;if(this.isDedicatedLine&&"add"===this.actionType){var e=["dedicatedLineCodecPlugin","dedicatedLineApiAuthPlugin","dedicatedLinePairingPlugin"];this.getPluginLineOptions({engNames:e.join(",")}).then((function(){var e=[];t.pluginLineOptions.forEach((function(t){e.push(d(d({},t),{},{plugin:t.id,id:null,disabled:!0}))})),t.apiPlugins=[].concat(e,Object(s["a"])(t.apiPlugins))}))}}}),mounted:function(){this.getPluginLine()}},g=p,f=(i("ef2a"),i("74d1"),i("2877")),h=Object(f["a"])(g,n,a,!1,null,"905703ac",null);e["default"]=h.exports},"60cc":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("el-collapse",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"plugin-config",model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},t._l(t.pluginData,(function(i,n){return e("el-collapse-item",{key:n,attrs:{name:i._uuid||i.id,title:i.chnName,disabled:!i.config}},[e("template",{slot:"title"},[e("div",{staticClass:"plugin-title"},[e("div",{staticClass:"plugin-title-left"},[t.showType?e("span",[t._v(t._s(t.renderIndex(n))+"# \n            "),e("span",{staticClass:"type-level"},[t._v(t._s("route"===t.type?"【路由级别】":"【分组级别】")+" ")]),t._v("\n            "+t._s(i.chnName)+"\n          ")]):e("span",[t._v(t._s(t.renderIndex(n))+"#  "+t._s(i.chnName))]),e("span",{staticStyle:{"margin-left":"20px"},on:{click:function(t){t.stopPropagation()}}},[e("el-tag",{attrs:{size:"mini",type:"success"}},[t._v("执行顺序")]),e("el-input-number",{attrs:{size:"mini","controls-position":"right",disabled:t.disabled||i.disabled},model:{value:i.order,callback:function(e){t.$set(i,"order",e)},expression:"item.order"}})],1),i.instruction?e("div",{staticClass:"use-info"},[e("el-popover",{attrs:{"popper-class":"tooltip-dark",placement:"top",title:"使用说明",trigger:"hover",width:"550"}},[e("div",{staticClass:"content"},[e("pre",[t._v(t._s(i.instruction))])]),e("span",{attrs:{slot:"reference"},slot:"reference"},[e("i",{staticClass:"el-icon-warning-outline"}),t._v(" 使用说明")])])],1):t._e()]),e("div",{staticClass:"plugin-title-right"},[e("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",disabled:t.disabled||i.disabled,circle:""},on:{click:function(e){return e.stopPropagation(),t.delPlugin(i,n)}}})],1)])]),e("plugin-form",{ref:"pluginForm",refInFor:!0,attrs:{disabled:t.disabled||i.disabled,config:i.config,order:i.order,name:i.chnName,data:i.apiPluginConfigs},on:{"update:data":function(e){return t.$set(i,"apiPluginConfigs",e)}}})],2)})),1)},a=[],s=(i("5df3"),i("ac6a"),i("c5f6"),i("6cdf")),l=i("0e0b"),o={components:{pluginForm:s["default"]},data:function(){return{loading:!1,activeNames:[],pluginData:[]}},props:{config:{type:[Array,Object],required:!0,default:function(){return[]}},disabled:{default:!1,type:Boolean},showType:{type:Boolean,default:!1},type:{type:String,default:"route"},startIndex:{type:Number,default:0}},watch:{config:{deep:!0,handler:function(){this.initPluginData()}}},methods:{renderIndex:function(t){return this.startIndex>0?this.startIndex+t+1:t+1},addCollapseActive:function(t){var e=t._uuid||t.id,i=this.activeNames.some((function(t){return t===e}));!i&&t.config&&e&&this.activeNames.push(e)},delPlugin:function(t,e){this.activeNames.splice(this.activeNames.indexOf(t._uuid||t.id),1),this.pluginData.splice(e,1),this.emitData()},validate:function(t){if(this.emitData(),this.pluginData&&this.pluginData.length>0){var e=[];this.$refs.pluginForm.forEach((function(t){e.push(t.validate())})),Promise.all(e).then((function(){t(!0)})).catch((function(e){t(!1,e)}))}else t(!0)},emitData:function(){this.$emit("change",this.pluginData)},initPluginData:function(){var t=this;this.pluginData=[],this.config&&this.config.length&&(this.loading=!0,this.config.forEach((function(e){e._uuid=e._uuid?e._uuid:Object(l["e"])(),t.addCollapseActive(e),t.pluginData.push(Object.assign({},e))})),this.loading=!1)}}},c=o,r=(i("f3780"),i("2877")),u=Object(r["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},"734e":function(t,e,i){},"74d1":function(t,e,i){"use strict";i("0e92")},7555:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"plugin-list"},[e("el-checkbox",{staticStyle:{"padding-bottom":"10px","font-weight":"bold"},attrs:{indeterminate:t.isIndeterminate,disabled:t.disabled},on:{change:t.handleCheckAllChange},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[t._v("\n    全选\n  ")]),e("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},t._l(t.pluginData,(function(i,n){return e("el-collapse-item",{key:n,attrs:{name:n,title:i.chnName,disabled:!i.config}},[e("template",{slot:"title"},[e("div",{staticClass:"plugin-title"},[e("el-checkbox",{attrs:{label:i.chnName,disabled:t.disabled},on:{change:t.handleCheckbox},model:{value:i.check,callback:function(e){t.$set(i,"check",e)},expression:"item.check"}}),i.config?e("el-tag",{attrs:{size:"mini",type:"success"}},[t._v("配置")]):t._e(),i.instruction?e("div",{staticClass:"use-info"},[e("el-popover",{attrs:{"popper-class":"tooltip-dark",placement:"top",title:"使用说明",trigger:"hover",width:"650"}},[e("div",{staticClass:"content"},[e("pre",[t._v(t._s(i.instruction))])]),e("span",{attrs:{slot:"reference"},slot:"reference"},[e("i",{staticClass:"el-icon-warning-outline"}),t._v(" 使用说明")])])],1):t._e()],1)]),e("plugin-form",{ref:"pluginForm",refInFor:!0,attrs:{disabled:!0,config:i.config,order:i.order,name:i.chnName,data:i.apiPluginConfigs},on:{"update:data":function(e){return t.$set(i,"apiPluginConfigs",e)}}})],2)})),1)],1)},a=[],s=(i("ac6a"),i("6cdf")),l={data:function(){return{activeNames:[],pluginData:[],checkAll:!1,isIndeterminate:!1}},props:{config:{type:[Array,Object],required:!0,default:function(){return[]}},disabled:{default:!1,type:Boolean}},computed:{selection:function(){var t=[];return this.pluginData.forEach((function(e){e.check&&t.push(e)})),t}},components:{pluginForm:s["default"]},watch:{config:{immediate:!0,deep:!0,handler:function(){this.initPluginData()}},selection:{deep:!0,handler:function(){this.emitData()}}},methods:{handleCheckAllChange:function(t){this.pluginData.forEach((function(e){e.check=!!t})),this.isIndeterminate=!1},handleCheckbox:function(){this.checkAll=this.selection.length===this.pluginData.length,this.isIndeterminate=this.selection.length>0&&this.selection.length<this.pluginData.length},emitData:function(){this.$emit("change",this.selection)},initPluginData:function(){var t=this;this.pluginData=[],this.config&&this.config.length&&this.config.forEach((function(e){var i=Object.assign({},e,{plugin:e.id,check:!1,id:null});t.pluginData.push(Object.assign({},i))}))}}},o=l,c=(i("09b5"),i("c494"),i("2877")),r=Object(c["a"])(o,n,a,!1,null,"e5ebf704",null);e["default"]=r.exports},"8c48":function(t,e,i){"use strict";i("ceb8d")},b5e0:function(t,e,i){},c494:function(t,e,i){"use strict";i("b5e0")},ceb8d:function(t,e,i){},d189:function(t,e,i){},ef2a:function(t,e,i){"use strict";i("734e")},f3780:function(t,e,i){"use strict";i("35d1")}}]);
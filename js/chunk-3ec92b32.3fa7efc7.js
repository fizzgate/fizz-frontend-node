/*!
 * Fizz-Admin v3.2.0-beta1
 * (c) 2020-2024 Joker-Lee
 * AGPL v3 Licensed.
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ec92b32"],{"0fbd":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[e("el-form",{ref:"requestForm",attrs:{model:t.requestForm,"label-width":"80px"}},[t.componentVisible?e("condition-dialog",{attrs:{visible:t.componentVisible,dialogType:t.dialogType,data:t.dialogData,disabled:t.disabled},on:{changeDrawer:t.onCancel,emitData:t.setComponentData}}):t._e()],1)],1)},i=[],a=o("44d0"),s=o("1620"),r={name:"",components:{conditionDialog:a["default"]},props:{data:{type:Array,default:function(){return[]}},componentVisible:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},isDelScriptWithHttp:{type:Boolean,default:!0},nodeData:Object,lf:Object||String},created:function(){},data:function(){return{components:[]}},methods:{setComponentData:function(t){var e=this.$props.nodeData,o=e.properties.components;o||(o=[]),Object(s["a"])(o,t,"add"),this.components=o,this.submitForm()},submitForm:function(){var t=this.$props.nodeData,e=t.id;t.properties.components=this.components,this.$props.lf.setProperties(e,t.properties),this.$emit("setPropertiesFinish")},onCancel:function(){this.$emit("setPropertiesFinish")}}},p=r,c=(o("f1232"),o("2877")),d=Object(c["a"])(p,n,i,!1,null,"794795dd",null);e["default"]=d.exports},c008:function(t,e,o){},f1232:function(t,e,o){"use strict";o("c008")}}]);
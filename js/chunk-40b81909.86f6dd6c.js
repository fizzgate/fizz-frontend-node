/*!
 * Fizz-Admin v3.2.0-beta1
 * (c) 2020-2024 Joker-Lee
 * AGPL v3 Licensed.
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40b81909"],{"135d":function(t,e,s){},"336b":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t._self._c;return e("div",[e("el-form",{ref:"requestForm",attrs:{model:t.requestForm,"label-width":"80px"}},[e("add-component",{attrs:{data:t.requestForm.components,disabled:t.disabled},on:{"update:data":function(e){return t.$set(t.requestForm,"components",e)}}}),e("footer",{staticClass:"drawer-footer"},[t.disabled||"detail"===t.dialogType?t._e():e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.submitForm()}}},[t._v("\n        确 定\n      ")]),e("el-button",{attrs:{size:"small"},on:{click:t.onCancel}},[t._v("\n        "+t._s(t.disabled||"detail"===t.dialogType?"关 闭":" 取 消")+"\n      ")])],1)],1)],1)},n=[],r=s("c983"),a={name:"",components:{addComponent:r["default"]},props:{disabled:{type:Boolean,default:!1},isDelScriptWithHttp:{type:Boolean,default:!0},nodeData:Object,lf:Object||String},created:function(){var t=this.$props.nodeData.properties;t&&(this.$data.requestForm=Object.assign({},this.$data.requestForm,t))},data:function(){return{request:{},requestForm:{components:[]}}},methods:{submitForm:function(){var t=this.$props.nodeData;t.properties=this.$data.requestForm,this.$props.lf.setProperties(t.id,this.$data.requestForm),this.$emit("setPropertiesFinish")},onCancel:function(){this.$emit("setPropertiesFinish")}}},i=a,d=(s("f7e9"),s("2877")),u=Object(d["a"])(i,o,n,!1,null,"69a02abc",null);e["default"]=u.exports},f7e9:function(t,e,s){"use strict";s("135d")}}]);
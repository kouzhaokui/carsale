(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1587"],{"73Xj":function(e,r,t){"use strict";t.d(r,"a",function(){return l}),t.d(r,"b",function(){return a}),t.d(r,"c",function(){return s});var o=t("t3Un");function l(e){return console.log(e),Object(o.a)({url:"/employee/addEmployee",method:"post",params:e})}function a(e){return console.log(e),Object(o.a)({url:"/employee/getList",method:"get",params:e})}function s(e){return console.log(e),Object(o.a)({url:"/employee/update",method:"post",params:e})}},Bw9G:function(e,r,t){"use strict";t.r(r);var o=t("Yfch"),l=t("73Xj"),a=[{key:"1",display_name:"在职"},{key:"0",display_name:"已离职"}],s={data:function(){var e=this;return{ruleForm:{name:"",phone:"",idCard:"",gender:void 0,salary:void 0,entryTime:void 0,status:"1",password:"",checkPass:""},statusOptions:a,rules:{name:[{required:!0,message:"请输入员工姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入员工联系电话",trigger:"blur"}],idCard:[{required:!0,validator:o.c,trigger:"blur"}],gender:[{required:!0,message:"请选择员工性别",trigger:"change"}],entryTime:[{required:!0,message:"请选择入职日期",trigger:"change"}],status:[{required:!0,message:"请选择员工就职状态",trigger:"blur"}],salary:[{validator:o.d,required:!0,trigger:"blur"}],password:[{validator:function(r,t,o){""===t?o(new Error("请输入密码")):t.length<6?o(new Error("密码长度至少大于六位")):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),o())},required:!0,trigger:"blur"}],age:[{validator:o.b,required:!0,trigger:"blur"}],checkPass:[{validator:function(r,t,o){""===t?o(new Error("请再次输入密码")):t!==e.ruleForm.password?o(new Error("两次输入密码不一致!")):o()},required:!0,trigger:"blur"}]}}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(t){if(!t)return console.log("error submit!!"),!1;Object(l.a)(r.ruleForm).then(function(t){2e4===t.data.code?r.$notify({title:"成功",message:"添加成功",type:"success",duration:2e3}):r.$notify({title:"错误",message:t.data.message,type:"error",duration:2e3}),r.resetForm(e)})})},resetForm:function(e){this.$refs[e].resetFields()}}},n=t("ZrdR"),i=Object(n.a)(s,function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"app-container"},[t("el-header",[t("h3",{staticStyle:{"font-family":"Microsoft YaHei"}},[e._v("添加员工")]),e._v(" "),t("hr",{staticStyle:{border:"0.5px solid #dcdfe6"}})]),e._v(" "),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-row",{attrs:{gutter:24}},[t("el-col",{staticStyle:{width:"400px","margin-left":"50px"},attrs:{xs:24,sm:24,lg:12}},[t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"联系电话",prop:"phone"}},[t("el-input",{model:{value:e.ruleForm.phone,callback:function(r){e.$set(e.ruleForm,"phone",r)},expression:"ruleForm.phone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"身份证号",prop:"idCard"}},[t("el-input",{model:{value:e.ruleForm.idCard,callback:function(r){e.$set(e.ruleForm,"idCard",r)},expression:"ruleForm.idCard"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"性别",prop:"gender"}},[t("el-radio-group",{model:{value:e.ruleForm.gender,callback:function(r){e.$set(e.ruleForm,"gender",r)},expression:"ruleForm.gender"}},[t("el-radio",{attrs:{label:"男"}}),e._v(" "),t("el-radio",{attrs:{label:"女"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"入职日期",prop:"entryTime"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.ruleForm.entryTime,callback:function(r){e.$set(e.ruleForm,"entryTime",r)},expression:"ruleForm.entryTime"}})],1)],1),e._v(" "),t("el-col",{staticStyle:{width:"400px","margin-left":"50px"},attrs:{xs:24,sm:24,lg:12}},[t("el-form-item",{attrs:{label:"薪资/月",prop:"salary"}},[t("el-input",{model:{value:e.ruleForm.salary,callback:function(r){e.$set(e.ruleForm,"salary",e._n(r))},expression:"ruleForm.salary"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"状态",prop:"status"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.status,callback:function(r){e.$set(e.ruleForm,"status",r)},expression:"ruleForm.status"}},e._l(e.statusOptions,function(e){return t("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[t("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm.checkPass,callback:function(r){e.$set(e.ruleForm,"checkPass",r)},expression:"ruleForm.checkPass"}})],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{attrs:{offset:7}},[t("el-form-item",{staticStyle:{margin:"0"}},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("添加")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1)],1)},[],!1,null,null,null);i.options.__file="addEmployee.vue";r.default=i.exports},JYtv:function(e,r,t){var o=t("Rx2n");o(o.S,"Number",{isInteger:t("lmZm")})},Yfch:function(e,r,t){"use strict";t.d(r,"a",function(){return a}),t.d(r,"c",function(){return s}),t.d(r,"b",function(){return n}),t.d(r,"d",function(){return i});var o=t("e9eg"),l=t.n(o);function a(e){return/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(e)}var s=function(e,r,t){if(""===r||void 0===r)t(new Error("请输入身份证号"));else{/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(r)||t(new Error("请输入正确的身份证号")),t()}},n=function(e,r,t){if(!r)return t(new Error("年龄不能为空"));setTimeout(function(){l()(r)?r<18?t(new Error("必须年满18岁")):t():t(new Error("请输入数字值"))},1e3)},i=function(e,r,t){if(!r)return t(new Error("请输入员工薪资"));setTimeout(function(){l()(r)?r<1800?t(new Error("薪资必须大于1800元")):t():t(new Error("请输入数字值"))},1e3)}},e9eg:function(e,r,t){e.exports={default:t("jTtr"),__esModule:!0}},jTtr:function(e,r,t){t("JYtv"),e.exports=t("g24s").Number.isInteger},lmZm:function(e,r,t){var o=t("OMyi"),l=Math.floor;e.exports=function(e){return!o(e)&&isFinite(e)&&l(e)===e}}}]);
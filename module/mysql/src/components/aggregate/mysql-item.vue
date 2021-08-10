<template>
    <el-form :rules="rules"  size="small"
            label-width="110px" :model="requestForm">    
        <el-form-item label="连接地址" prop="URL" key="URL">
                <el-input v-model="requestForm.URL" clearable></el-input>
                <span class="key-tips">数据库链接地址，如：r2dbcs:mysql://root:password@localhost:3306/archer?useSSL=false&useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull&transformedBitIsBoolean=true&serverTimezone=GMT%2B8&nullCatalogMeansCurrent=true&allowPublicKeyRetrieval=true</span>
        </el-form-item>
        <el-form-item label="查询数据SQL" prop="sql" key="sql">
                <el-input type="textarea" v-model="requestForm.sql" clearable></el-input>
                <span class="key-tips">示例：Select dd* from users 请勿以分号结尾</span>
        </el-form-item>
        <el-form-item label="绑定参数" prop="binds" key="binds">
                <el-input v-model="requestForm.binds" clearable></el-input>
                <span class="key-tips">输入使用JSON{"id":"1"}</span>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    name: 'mysqlItem',
    data() {
      return {
        rules: {
          URL: [
            { required: true, message: 'URL是必填', trigger: 'change' }
          ],
          sql: [
            { required: true, message: '必填', trigger: 'change' },
          ],
          binds: [
            { required: true, message: '必填', trigger: 'change' }
          ]
        },
        requestForm: {
            URL:"",
            sql:"",
            binds:""
        }
      }
    },
    created(){
        if (window.globalProps)
            this.requestForm = window.globalProps.requestForm;
    }
}
</script>

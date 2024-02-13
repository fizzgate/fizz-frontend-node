<template>
  <el-form ref="requestForm" :rules="rules" :model="requestForm"  size="small"
          label-width="110px" >    
          <el-form-item label="节点名称" prop="name" key="name">
            <el-input v-model="requestForm.name"
                placeholder="节点名称"></el-input>
          </el-form-item>
        
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
      <footer class="drawer-footer">
      <el-button size="small" type="primary" @click="submitForm()" v-if="!disabled && dialogType !== 'detail'">
        确 定
      </el-button>
      <el-button size="small" @click="onCancel">
        {{!disabled && dialogType !== 'detail' ? ' 取 消' : '关 闭'}}
      </el-button>
    </footer>
  </el-form>
</template>
<script>
export default {
  name: 'node',
  props: {
      model:{
        type: Object,
        default: () => ({
          id:"",
          properties:{
            components:[]
          }
        })
      },
      lf:{
        type: Object
      },
      graphModel:{
        type: Object
      },
      closeDialog:{
        type: Function
      }
  },
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
        ],
        'fallback.defaultResult': [
          {
            validator: (rule, value, callback) => {
              if (value && !validateJson(value)) {
                callback(new Error('请输入正确格式的JSON'));
              } else {
                callback();
              }
            }, trigger: 'blur'
          }
        ]
      },
      disabled:false,
      dialogType:'create',
      requestForm: {
          URL:"",
          sql:"",
          binds:""
      }
    }
  },
  created(){
        const { properties, id} = this.model.getData();
        this.requestForm = {...properties, name:id};
        
  },
  methods: {
    submitForm() {
      this.$refs.requestForm && this.$refs.requestForm.validate().then(() => {
        const nodeData = this.model.getData();
        const {name, ...properties} =  this.$data.requestForm 
        this.lf.setProperties(this.model.id, properties);
        const closeDialog = this.closeDialog;
        if (closeDialog){
          closeDialog();
        }
        
      }).catch(() => {
        this.$message.error('请完善步骤信息');
      })
   
    },

    onCancel(){
      const closeDialog = this.closeDialog;
      if (closeDialog){
        closeDialog();
      }
    }
  }

}
</script>
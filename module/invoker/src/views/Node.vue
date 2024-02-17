<template>
  <avue-form :option="option"
             v-model="requestForm" @submit="saveHandle"></avue-form>
</template>
<script>
import { API_PROXY } from '@/api/config';

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
      requestForm: {
        packagePath:"",
        className:"",
        methodName:"",
        args:""
      },
      option: {
        column: [{
          label: 'jar包路径',
          prop: 'packagePath',
          type: 'select',
          props: {
            label: 'name',
            value: 'value'
          },
          cascader: ['className'],
          dicUrl: `${API_PROXY}/invoker/list`,
          rules: [
            {
              required: true,
              message: '请选择jar包',
              trigger: 'blur'
            }
          ],
          span:24
        },
        {
          label: '类',
          prop: 'className',
          type: 'select',
          cascader: ['methodName'],
          props: {
            label: 'name',
            value: 'value'
          },
          dicUrl: `${API_PROXY}/invoker/classes?path={{packagePath}}`,
          rules: [
            {
              required: true,
              message: '请选择类',
              trigger: 'blur'
            }
          ],
          span:24
        },
        {
          label: '方法',
          prop: 'methodName',
          type: 'select',
          props: {
            label: 'name',
            value: 'value'
          },
          dicUrl: `${API_PROXY}/invoker/methods?path={{packagePath}}&className={{className}}`,
          rules: [
            {
              required: true,
              message: '请选择方法',
              trigger: 'blur'
            }
          ],
          span:24
        },
        {
          label: 'json参数',
          prop: 'args',
          type: 'textarea',
        }],
        span:24
      }
    }
  },
  created(){
        const { properties, id} = this.model.getData();
        this.requestForm = {...properties, name:id};
        
  },
  methods: {
    async saveHandle(form, done, loading){
      const nodeData = this.model.getData();
      const {name, ...properties} =  this.$data.requestForm 
      this.lf.setProperties(this.model.id, properties);
      const closeDialog = this.closeDialog;
      if (closeDialog){
        closeDialog();
      }
      done();
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
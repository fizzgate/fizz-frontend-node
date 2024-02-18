<template>
  <div>
    <div class="node-request-head">调用节点ID：{{model.id}}</div>
    <div class="node-request-body">
    <div>
      {{model.properties.className ? "类名："+model.properties.className: ""}}
    </div>
    <div>
      {{model.properties.methodName ? "路径："+model.properties.methodName: ""}}
    </div>
    </div>
    <div class="node-request-footer">
      <span v-if="model.properties.type" class='node-request-logo'>
        {{ model.properties.type }}
      </span>
        
      <span @click="onComponentClick">组件：{{componentCount}}</span>
    </div>
  </div>
  
</template>

<script>
export default {
  name:"home",
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
      graphModel:{
        type: Object
      }
  },
  data () {
    return {
    }
  },
  methods:{
    onComponentClick(event){
      window.event? window.event.cancelBubble = true : event.stopPropagation();
      const { graphModel, model } = this.$props;
      const data = model.getData();
      graphModel.eventCenter.emit("node:components:click", 
        {
          target:graphModel,
          model:data
        }
      );
      return false;
    }
  },
  computed:{
    componentCount(){
      return this.model.properties.components ? this.model.properties.components.length: 0;
    }
  },
  mounted () {
  },
  watch: {
  }
}
</script>
<style scoped>

</style>
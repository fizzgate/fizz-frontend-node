<template>
  <div class="home">
    <!-- 加载动态组件 -->
    <mysql-item></mysql-item>
  </div>
</template>

<script>
import MysqlItem from '../components/aggregate/mysql-item.vue'
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    MysqlItem
  },
  data() {
    return {
      
    }
  }
}
</script>

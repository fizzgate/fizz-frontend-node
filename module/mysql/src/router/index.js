import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Node from '../views/Node.vue'
console.log("qiankun");
Vue.use(VueRouter)

const routes = [
  {
    path: '/node',
    name: 'node',
    component: Node
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  mode: "abstract",
  base: "/",
  routes
})

export default router

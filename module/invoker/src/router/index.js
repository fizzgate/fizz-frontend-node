import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Node from '../views/Node.vue'

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
 
let mode = window.__POWERED_BY_QIANKUN__ ? "abstract" : "history";
  
const router = new VueRouter({
  mode: mode,
  base: "/",
  routes
}) 

export default router

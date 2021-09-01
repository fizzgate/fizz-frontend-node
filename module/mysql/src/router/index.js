import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  mode: "abstract",
  // base: "/",
  base: window.__POWERED_BY_QIANKUN__ ? '/' : '/module/mysql/',
  routes
})

export default router

import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const index: Array<RouteConfig> = [
  {
    path: 'home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页'
    }
  }
]

const router = new VueRouter({
  routes: [
    {
      component: () => import('@/App.vue'),
      path: '/',
      children: [...index]
    }
  ]
})

export default router

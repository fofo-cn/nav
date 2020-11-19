import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

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
      title: '首页',
      keepAlive: true
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

// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from './grouter'

import Home from '../view/Home.vue'
import Test from '../view/Test.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/test',
    component: Test
  }
]

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
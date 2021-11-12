import { createRouter, createWebHistory } from 'vue-router'

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
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Hellow from '../pages/Hellow.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Hellow',
    component: Hellow
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

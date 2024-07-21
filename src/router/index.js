import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: '屏1',
    component: HomeView
  },
  {
    path: '/p2',
    name: '屏2',
    component: () => import(/* webpackChunkName: "about" */ '../views/p2.vue')
  },
  {
    path: '/p3',
    name: '屏3',
    component: () => import(/* webpackChunkName: "about" */ '../views/p3.vue')
  },
  {
    path: '/p4',
    name: '屏4',
    component: () => import(/* webpackChunkName: "about" */ '../views/p4.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

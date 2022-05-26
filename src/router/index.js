import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/halamanDua',
    name: 'halamanDua',
    component: () => import(/* webpackChunkName: "about" */ '../views/HalamanDua.vue')
  },
  {
    path: '/halamanTiga',
    name: 'halamanTiga',
    component: () => import(/* webpackChunkName: "about" */ '../views/HalamanTiga.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

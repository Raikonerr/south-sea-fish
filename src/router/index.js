import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product',
    name : 'product',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/quality',
    name : 'quality',
    component: () => import('../views/QualityView.vue')
  },
  {
    path:'/order',
    name : 'order',
    component: () => import('../views/OrderView.vue')
  },
  {
    path: '/contact',
    name : 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/login',
    name : 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name : 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/profile',
    name : 'profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path:'/dashboard',
    name : 'dashboard',
    component: () => import('../views/admin/DashboardView.vue')
  },
  {
    path:'/admin/product',
    name : 'admin-product',
    component: () => import('../views/admin/ProductView.vue')
  },
  {
    path:'/admin/order',
    name : 'admin-order',
    component: () => import('../views/admin/OrderView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

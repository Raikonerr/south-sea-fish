import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Dashboard from '../views/admin/content/Dashboard.vue'

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
    path:'/admin/dashboard',
    name : 'dashboard',
    component:() => import('../views/admin/content/Dashboard.vue')
  },
  {
    path:'/admin/product',
    name : 'admin-product',
    component: () => import('../views/admin/content/Products.vue')
  },
  {
    path:'/admin/order',
    name : 'admin-order',
    component: () => import('../views/admin/content/Orders.vue')
  },
  
  {
    path:'/admin/category',
    name : 'admin-category',
    component: () => import('../views/admin/content/Category.vue')
  },
  {
    path:'/admin/customer',
    name : 'admin-customer',
    component: () => import('../views/admin/content/Customer.vue')
  },

  {
    path:'/admin/message',
    name : 'admin-message',
    component: () => import('../views/admin/content/Message.vue')
  },
  
  {
    path:'/product/detail/:id',
    name : 'product-detail',
    component: () => import('../views/ProductDetail.vue')
  },

  {
    path:'/basket',
    name : 'basket',
    component: () => import('../views/BasketView.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

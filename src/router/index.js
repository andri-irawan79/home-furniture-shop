import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ShopPage from  '../views/ProductDetailPage.vue'
import SearchPage from  '../views/SearchPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/product_detail',
    name: 'product_detail',
    component: ShopPage,
  },
  {
    path: '/Search',
    name: 'search',
    component: SearchPage,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

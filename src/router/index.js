import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TShirts from '../components/T-Shirts.vue'
import Jeans from '../components/Jeans.vue'
import ProductPage from '../components/ProductPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/T-Shirts',
    name: 'T-Shirts',
    component: TShirts
  },
  {
    path: '/Jeans',
    name: 'Jeans',
    component: Jeans
  },
  {
    path: '/ProductPage',
    name: 'ProductPage',
    component: ProductPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

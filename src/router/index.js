import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Packages from '../views/Package.vue'
import Checkout from '../views/Checkout.vue'
import Success from '../views/Success.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/packages',
    name: 'Packages',
    component: Packages
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  },
]

const router = new VueRouter({
  routes
})

export default router

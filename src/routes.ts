import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Product from './pages/Product.vue'
import Cart from './pages/Cart.vue'
import CheckOut from "@/pages/CheckOut.vue";
import Success from "@/pages/Success.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/product/:productId', component: Product },
  { path: '/cart', component: Cart },
  {path: '/checkout', component: CheckOut},
  {path: '/success', component: Success}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

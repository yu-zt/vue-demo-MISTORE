import VueRouter from 'vue-router'
import ShoppingMall from '../components/ShoppingMall'
import Login from '../components/Login.vue'
import Buy from '../components/Buy.vue'
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: ShoppingMall
    },
    {
      path: '/shopping-mall',
      component: ShoppingMall
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/buy',
      component: Buy
    }
  ]
})
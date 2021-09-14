import VueRouter from 'vue-router'
import ShoppingMall from '../components/ShoppingMall'
import Login from '../components/Login.vue'

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
  ]
})
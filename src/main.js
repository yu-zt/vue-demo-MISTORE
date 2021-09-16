import Vue from 'vue'
import App from './App.vue'
//引入路由组件
import VueRouter from 'vue-router'
//引入路由器
import router from './router/index'
import './common/common.less';
import './css/base.css'
import './css/index.css'
//引入ElementUI库 和CSS文件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入store
import store from './store'
//使用ElementUI
Vue.use(ElementUI);
//使用路由组件
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

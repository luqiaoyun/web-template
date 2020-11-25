import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios'
import './assets/style/reset.scss'
import { button } from 'element-ui'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

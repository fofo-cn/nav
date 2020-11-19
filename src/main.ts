import Vue from 'vue'
import './css/common.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Input } from 'element-ui'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(Button).use(Input)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

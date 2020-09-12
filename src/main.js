import Vue from 'vue'
import App from './App.vue'
import router from './config/router'
import store from './config/store'
import vuetify from './config/plugins/vuetify'
import './config/toasted/msg'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

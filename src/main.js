import Vue from 'vue'
import App from './App.vue'
import './plugins/firebase_auth'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

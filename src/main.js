import Vue from 'vue'
import App from './App.vue'
import Chat from 'vue-beautiful-chat'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(Chat)
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
}).$mount('#app')

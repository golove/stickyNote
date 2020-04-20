import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ItemData from './model/ItemData'
import CateEnum from './model/CateEnum'
import ActionHelper from './store/ActionHelper'
import Category from './model/CateEnum'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

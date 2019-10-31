import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTypedJs from '../node_modules/vue-typed-js'
import VueObserveVisibility from '../node_modules/vue-observe-visibility'

import './styles.scss'

Vue.config.productionTip = false
Vue.use(VueTypedJs)
Vue.use(VueObserveVisibility)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

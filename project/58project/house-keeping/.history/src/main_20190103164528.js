// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../common/style/index.css'
import '../common/style/styleConfig.scss'
import Vue from 'vue'
import App from './App'


import router from '../common/router'

import store from '../common/store'

//全局引入组件
import {
    HogFooter,
    HogHeader,
    HogPage
} from '../common/components'

Vue.config.productionTip = false

//全局引入组件
Vue.component('HogFooter',HogFooter)
Vue.component('HogHeader',HogHeader)
Vue.component('HogPage',HogPage)



const Hogwards = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
})

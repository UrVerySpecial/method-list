// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import axios from 'axios'
import './filter'
import moment from 'moment'

moment.locale('ja')
Vue.config.productionTip = false
axios.defaults.baseURL = '/api'
Vue.prototype.$http = axios
Vue.use(Buefy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

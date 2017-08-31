import Vue from 'vue'
import VueMDCAdapter from '../components/entry.js'
import Doc from './Doc'

Vue.config.productionTip = false
Vue.use(VueMDCAdapter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Doc/>',
  components: {
    Doc
  }
})

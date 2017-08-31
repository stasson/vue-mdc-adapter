import Vue from 'vue'
import '../dist/vue-mdc-adapter.min.css'
import VueMDCAdapter from '../dist/vue-mdc-adapter.min.js'
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

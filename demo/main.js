import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMDCAdapter from 'vue-mdc-adapter'
import Demo from './demo.vue'

Vue.config.prodtionTip = false
Vue.use(VueRouter)
Vue.use(VueMDCAdapter)

// mount app
const App = Vue.extend(Demo)
new App().$mount('#app')

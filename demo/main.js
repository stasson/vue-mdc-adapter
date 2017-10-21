import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMDCAdapter from 'vue-mdc-adapter'
import index from './index.vue'
import routes from './routes.js'

Vue.config.prodtionTip = true
Vue.use(VueRouter)
Vue.use(VueMDCAdapter)

const router = new VueRouter({routes})

// mount app
const App = Vue.extend({
  render: (h) => h(index) 
})
new App({router}).$mount('#app')

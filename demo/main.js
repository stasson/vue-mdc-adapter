import './styles/demo.scss'
import './polyfill.js';
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'
import VueMDCAdapter from 'vue-mdc-adapter'
import index from './index.vue'
import routes from './routes.js'

Vue.config.productionTip = true
Vue.use(VueRouter)
Vue.use(VueMDCAdapter)
const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

Vue.use(VueAnalytics, {
  id: 'UA-110490450-1',
  router
})

// mount app
const App = Vue.extend({
  render: (h) => h(index) 
})
new App({router}).$mount('#app')

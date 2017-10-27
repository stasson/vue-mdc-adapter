import Home from './home.vue'
import Component from './component.vue'

export default [
  { path: '/component/:id', component: Component, name:'component'},
  { path: '/', component: Home, name:'home' },
  { path: '*', redirect: '/' },
]
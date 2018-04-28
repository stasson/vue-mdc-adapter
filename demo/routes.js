import Home from './home.vue'
import Component from './component.vue'
import Documentation from './doc.vue'

export default [
  { path: '/component/:id', component: Component, name: 'component' },
  { path: '/docs/:id', component: Documentation, name: 'docs' },
  { path: '/', component: Home, name: 'home' },
  { path: '*', redirect: '/' }
]

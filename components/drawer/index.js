import VueMDCDrawer from './mdc-drawer.vue'
import VueMDCDrawerLayout from './mdc-drawer-layout.vue'
import VueMDCDrawerHeader from './mdc-drawer-header.vue'

export default {
  install (vm) {
    vm.component('mdc-drawer', VueMDCDrawer)
    vm.component('mdc-drawer-layout', VueMDCDrawerLayout)
    vm.component('mdc-drawer-header', VueMDCDrawerHeader)
  }
}

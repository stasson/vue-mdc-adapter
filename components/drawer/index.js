import VueMDCDrawer from './mdc-drawer.vue'
import VueMDCDrawerLayout from './mdc-drawer-layout.vue'
import VueMDCDrawerHeader from './mdc-drawer-header.vue'
import VueMDCDrawerList from './mdc-drawer-list.vue'
import VueMDCDrawerItem from './mdc-drawer-item.vue'
import VueMDCDrawerDivider from './mdc-drawer-divider.vue'

export {
  VueMDCDrawer,
  VueMDCDrawerLayout,
  VueMDCDrawerHeader,
  VueMDCDrawerList,
  VueMDCDrawerItem,
  VueMDCDrawerDivider
}

export default {
  install (vm) {
    vm.component('mdc-drawer', VueMDCDrawer)
    vm.component('mdc-drawer-layout', VueMDCDrawerLayout)
    vm.component('mdc-drawer-header', VueMDCDrawerHeader)
    vm.component('mdc-drawer-list', VueMDCDrawerList)
    vm.component('mdc-drawer-item', VueMDCDrawerItem)
    vm.component('mdc-drawer-divider', VueMDCDrawerDivider)
  }
}

import VueMDCTab from './mdc-tab.vue'
import VueMDCTabBar from './mdc-tab-bar.vue'

export { VueMDCTab, VueMDCTabBar }

export default {
  install (vm) {
    vm.component('mdc-tab', VueMDCTab)
    vm.component('mdc-tab-bar', VueMDCTabBar)
  }
}

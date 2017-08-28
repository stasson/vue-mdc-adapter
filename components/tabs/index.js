import '@material/tabs/dist/mdc.tabs.css'

import VueMDCTab from './mdc-tab'
import VueMDCTabBar from './mdc-tab-bar'

export { VueMDCTab, VueMDCTabBar }

export default {
  install (vm) {
    vm.component('mdc-tab', VueMDCTab)
    vm.component('mdc-tab-bar', VueMDCTabBar)
  }
}

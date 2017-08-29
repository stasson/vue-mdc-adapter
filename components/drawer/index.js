import '@material/drawer/dist/mdc.drawer.css'

import VueMDCTemporaryDrawer from './mdc-temporary-drawer.vue'
import VueMDCPersistentDrawer from './mdc-persistent-drawer.vue'
import VueMDCPermanentDrawer from './mdc-permanent-drawer.vue'
import VueMDCDrawerHeader from './mdc-drawer-header.vue'
import VueMDCDrawerToolbarSpacer from './mdc-drawer-toolbar-spacer.vue'

export default {
  install (vm) {
    vm.component('mdc-temporary-drawer', VueMDCTemporaryDrawer)
    vm.component('mdc-persistent-drawer', VueMDCPersistentDrawer)
    vm.component('mdc-permanent-drawer', VueMDCPermanentDrawer)
    vm.component('mdc-drawer-header', VueMDCDrawerHeader)
    vm.component('mdc-drawer-toolbar-spacer', VueMDCDrawerToolbarSpacer)
  }
}

import VueMDCToolbar from './mdc-toolbar.vue'
import VueMDCToolbarRow from './mdc-toolbar-row.vue'
import VueMDCToolbarSection from './mdc-toolbar-section.vue'
import VueMDCToolbarTIconMenu from './mdc-toolbar-icon-menu.vue'
import VueMDCToolbarTitle from './mdc-toolbar-title.vue'
import VueMDCToolbarIcon from './mdc-toolbar-icon.vue'

export {
  VueMDCToolbar,
  VueMDCToolbarRow,
  VueMDCToolbarSection,
  VueMDCToolbarTIconMenu,
  VueMDCToolbarTitle,
  VueMDCToolbarIcon
}

export default {
  install (vm) {
    vm.component('mdc-toolbar', VueMDCToolbar)
    vm.component('mdc-toolbar-row', VueMDCToolbarRow)
    vm.component('mdc-toolbar-section', VueMDCToolbarSection)
    vm.component('mdc-toolbar-icon-menu', VueMDCToolbarTIconMenu)
    vm.component('mdc-toolbar-title', VueMDCToolbarTitle)
    vm.component('mdc-toolbar-icon', VueMDCToolbarIcon)
  }
}

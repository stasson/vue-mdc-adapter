import '@material/toolbar/dist/mdc.toolbar.css'

import VueMDCToolbar from './mdc-toolbar'
import VueMDCToolbarRow from './mdc-toolbar-row'
import VueMDCToolbarSection from './mdc-toolbar-section'
import VueMDCToolbarTIconMenu from './mdc-toolbar-icon-menu'
import VueMDCToolbarTitle from './mdc-toolbar-title'
import VueMDCToolbarIcon from './mdc-toolbar-icon'

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

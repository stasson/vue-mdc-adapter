import '@material/drawer/dist/mdc.drawer.css'

export default {
  install (vm) {
    vm.component('mdc-temporary-drawer', require('./mdc-temporary-drawer'))
    vm.component('mdc-persistent-drawer', require('./mdc-persistent-drawer'))
    vm.component('mdc-drawer-header', require('./mdc-drawer-header'))
    vm.component('mdc-drawer-toolbar-spacer', require('./mdc-drawer-toolbar-spacer'))
    vm.component('mdc-permanent-drawer', require('./mdc-permanent-drawer'))
  }
}

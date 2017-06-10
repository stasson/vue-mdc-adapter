export default {
  install (vm) {
    vm.component('mdc-toolbar', require('./mdc-toolbar'))
    vm.component('mdc-toolbar-row', require('./mdc-toolbar-row'))
    vm.component('mdc-toolbar-section', require('./mdc-toolbar-section'))
    vm.component('mdc-toolbar-title', require('./mdc-toolbar-title'))
  }
}

export default {
  install (vm) {
    vm.component('mdc-menu', require('./mdc-menu'))
    vm.component('mdc-menu-item', require('./mdc-menu-item'))
    vm.component('mdc-menu-divider', require('./mdc-menu-divider'))
    vm.component('mdc-menu-anchor', require('./mdc-menu-anchor'))
  }
}

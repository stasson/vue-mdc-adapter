export default {
  install (vm) {
    vm.component('mdc-grid-list', require('./mdc-grid-list'))
    vm.component('mdc-grid-tile', require('./mdc-grid-tile'))
  }
}

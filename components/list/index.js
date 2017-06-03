export default {
  install (vm) {
    vm.component('mdc-list', require('./mdc-list'))
    vm.component('mdc-list-item', require('./mdc-list-item'))
    vm.component('mdc-list-divider', require('./mdc-list-divider'))
    vm.component('mdc-list-group', require('./mdc-list-group'))
    vm.component('mdc-list-group-header', require('./mdc-list-group-header'))
    vm.component('mdc-list-group-divider', require('./mdc-list-group-divider'))
  }
}

export default {
  install (vm) {
    vm.component('mdc-layout-grid', require('./mdc-layout-grid'))
    vm.component('mdc-layout-cell', require('./mdc-layout-cell'))
  }
}

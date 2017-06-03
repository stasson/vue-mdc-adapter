export default {
  install (vm) {
    vm.component('mdc-card', require('./mdc-card'))
    vm.component('mdc-card-media', require('./mdc-card-media'))
    vm.component('mdc-card-header', require('./mdc-card-header'))
    vm.component('mdc-card-title', require('./mdc-card-title'))
    vm.component('mdc-card-subtitle', require('./mdc-card-subtitle'))
    vm.component('mdc-card-text', require('./mdc-card-text'))
    vm.component('mdc-card-horizontal', require('./mdc-card-horizontal'))
    vm.component('mdc-card-img', require('./mdc-card-img'))
    vm.component('mdc-card-actions', require('./mdc-card-actions'))
    vm.component('mdc-card-action', require('./mdc-card-action'))
  }
}

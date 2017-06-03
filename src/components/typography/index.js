export default {
  install (vm) {
    vm.component('mdc-body', require('./mdc-body'))
    vm.component('mdc-caption', require('./mdc-caption'))
    vm.component('mdc-display', require('./mdc-display'))
    vm.component('mdc-headline', require('./mdc-headline'))
    vm.component('mdc-subheading', require('./mdc-subheading'))
    vm.component('mdc-title', require('./mdc-title'))
  }
}

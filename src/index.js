//
// vue PlugIn
//
import './components/mdc-typography.scss'

export default {
  install (vm) {
    // Directives
    vm.directive('mdc-ripple', require('./components/mdc-ripple'))

    // Components
    vm.component('mdc-button', require('./components/mdc-button'))
    vm.component('mdc-layout-grid', require('./components/mdc-layout-grid'))
    vm.component('mdc-layout-cell', require('./components/mdc-layout-cell'))
    vm.component('mdc-snackbar', require('./components/mdc-snackbar'))
    vm.component('mdc-grid-list', require('./components/mdc-grid-list'))
    vm.component('mdc-grid-tile', require('./components/mdc-grid-tile'))
  }
}

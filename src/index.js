//
// vue PlugIn
//
import '@material/typography/mdc-typography.scss'
import '@material/theme/mdc-theme.scss'

export default {
  install (vm) {
    // Directives
    vm.directive('mdc-ripple', require('./components/mdc-ripple'))

    // Components
    vm.component('mdc-button', require('./components/mdc-button'))
    vm.component('mdc-fab', require('./components/mdc-fab'))
    vm.component('mdc-icon-toggle', require('./components/mdc-icon-toggle'))

    vm.component('mdc-layout-grid', require('./components/mdc-layout-grid'))
    vm.component('mdc-layout-cell', require('./components/mdc-layout-cell'))

    vm.component('mdc-snackbar', require('./components/mdc-snackbar'))

    vm.component('mdc-grid-list', require('./components/mdc-grid-list'))
    vm.component('mdc-grid-tile', require('./components/mdc-grid-tile'))

    vm.component('mdc-card', require('./components/mdc-card'))
    vm.component('mdc-card-header', require('./components/mdc-card-header'))
    vm.component('mdc-card-text', require('./components/mdc-card-text'))
    vm.component('mdc-card-actions', require('./components/mdc-card-actions'))
    vm.component('mdc-card-media', require('./components/mdc-card-media'))
    vm.component('mdc-card-horizontal', require('./components/mdc-card-horizontal'))
    vm.component('mdc-card-img', require('./components/mdc-card-img'))

    vm.component('mdc-checkbox', require('./components/mdc-checkbox'))
    vm.component('mdc-textfield', require('./components/mdc-textfield'))
    vm.component('mdc-radio', require('./components/mdc-radio'))
  }
}

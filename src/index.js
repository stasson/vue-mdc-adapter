//
// vue PlugIn
//
import '@material/typography/mdc-typography.scss'
import '@material/theme/mdc-theme.scss'

export default {
  install (vm) {
    vm.component('mdc-button', require('./components/button/mdc-button'))
    vm.component('mdc-card', require('./components/card/mdc-card'))
    vm.component('mdc-card-header', require('./components/card/mdc-card-header'))
    vm.component('mdc-card-text', require('./components/card/mdc-card-text'))
    vm.component('mdc-card-actions', require('./components/card/mdc-card-actions'))
    vm.component('mdc-card-media', require('./components/card/mdc-card-media'))
    vm.component('mdc-card-horizontal', require('./components/card/mdc-card-horizontal'))
    vm.component('mdc-card-img', require('./components/card/mdc-card-img'))
    vm.component('mdc-checkbox', require('./components/checkbox/mdc-checkbox'))
    // TODO mdc-dialog here
    vm.component('mdc-temporary-drawer', require('./components/drawer/mdc-temporary-drawer'))
    vm.component('mdc-fab', require('./components/fab/mdc-fab'))
    vm.component('mdc-grid-list', require('./components/grid-list/mdc-grid-list'))
    vm.component('mdc-grid-tile', require('./components/grid-list/mdc-grid-tile'))
    vm.component('mdc-icon-toggle', require('./components/icon-toggle/mdc-icon-toggle'))
    vm.component('mdc-layout-grid', require('./components/layout-grid/mdc-layout-grid'))
    vm.component('mdc-layout-cell', require('./components/layout-grid/mdc-layout-cell'))
    vm.component('mdc-list', require('./components/list/mdc-list'))
    vm.component('mdc-list-item', require('./components/list/mdc-list-item'))
    vm.component('mdc-list-divider', require('./components/list/mdc-list-divider'))
    vm.component('mdc-list-group', require('./components/list/mdc-list-group'))
    vm.component('mdc-list-group-header', require('./components/list/mdc-list-group-header'))
    vm.component('mdc-list-group-divider', require('./components/list/mdc-list-group-divider'))
    vm.component('mdc-menu', require('./components/menu/mdc-menu'))
    vm.component('mdc-menu-item', require('./components/menu/mdc-menu-item'))
    vm.component('mdc-menu-divider', require('./components/list/mdc-list-divider'))
    vm.component('mdc-menu-anchor', require('./components/menu/mdc-menu-anchor'))
    vm.component('mdc-radio', require('./components/radio/mdc-radio'))
    vm.directive('mdc-ripple', require('./components/ripple/mdc-ripple'))
    // TODO mdc-select here
    vm.component('mdc-snackbar', require('./components/snackbar/mdc-snackbar'))
    vm.component('mdc-switch', require('./components/switch/mdc-switch'))
    // TODO mdc-tabs here
    vm.component('mdc-toolbar', require('./components/toolbar/mdc-toolbar'))
    vm.component('mdc-textfield', require('./components/textfield/mdc-textfield'))
    vm.component('mdc-body', require('./components/typography/mdc-body'))
    vm.component('mdc-caption', require('./components/typography/mdc-caption'))
    vm.component('mdc-display', require('./components/typography/mdc-display'))
    vm.component('mdc-headline', require('./components/typography/mdc-headline'))
    vm.component('mdc-subheading', require('./components/typography/mdc-subheading'))
    vm.component('mdc-title', require('./components/typography/mdc-title'))
  }
}

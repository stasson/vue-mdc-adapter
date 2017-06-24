import VueMdcCheckbox from './mdc-checkbox'

export {VueMdcCheckbox}

export default {
  install (vm) {
    vm.component('mdc-checkbox', VueMdcCheckbox)
  }
}

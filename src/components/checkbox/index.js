import VueMDCCheckbox from './mdc-checkbox'

export {VueMDCCheckbox}

export default {
  install (vm) {
    vm.component('mdc-checkbox', VueMDCCheckbox)
  }
}

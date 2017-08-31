import VueMDCCheckbox from './mdc-checkbox.vue'

export {VueMDCCheckbox}

export default {
  install (vm) {
    vm.component('mdc-checkbox', VueMDCCheckbox)
  }
}

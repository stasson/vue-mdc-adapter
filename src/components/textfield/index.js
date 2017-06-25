import VueMDCTextField from './mdc-textfield'

export {VueMDCTextField}

export default {
  install (vm) {
    vm.component('mdc-textfield', VueMDCTextField)
  }
}

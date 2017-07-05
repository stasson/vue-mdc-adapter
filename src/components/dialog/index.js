import VueMDCDialog from './mdc-dialog'

export {VueMDCDialog}

export default {
  install (vm) {
    vm.component('mdc-dialog', VueMDCDialog)
  }
}

import VueMDCDialog from './mdc-dialog.vue'

export {VueMDCDialog}

export default {
  install (vm) {
    vm.component('mdc-dialog', VueMDCDialog)
  }
}

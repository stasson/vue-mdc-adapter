import VueMDCSnackbar from './mdc-snackbar.vue'

export {VueMDCSnackbar}

export default {
  install (vm) {
    vm.component('mdc-snackbar', VueMDCSnackbar)
  }
}

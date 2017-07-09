import VueMDCSnackbar from './mdc-snackbar'

export {VueMDCSnackbar}

export default {
  install (vm) {
    vm.component('mdc-snackbar', VueMDCSnackbar)
  }
}

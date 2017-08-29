import '@material/button/dist/mdc.button.css'
import '@material/snackbar/dist/mdc.snackbar.css'

import VueMDCSnackbar from './mdc-snackbar.vue'

export {VueMDCSnackbar}

export default {
  install (vm) {
    vm.component('mdc-snackbar', VueMDCSnackbar)
  }
}

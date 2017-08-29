import '@material/form-field/dist/mdc.form-field.css'
import '@material/checkbox/dist/mdc.checkbox.css'

import VueMDCCheckbox from './mdc-checkbox.vue'

export {VueMDCCheckbox}

export default {
  install (vm) {
    vm.component('mdc-checkbox', VueMDCCheckbox)
  }
}

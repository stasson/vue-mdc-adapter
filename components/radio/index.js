import '@material/form-field/dist/mdc.form-field.css'
import '@material/radio/dist/mdc.radio.css'

import VueMDCRadio from './mdc-radio'

export {VueMDCRadio}

export default {
  install (vm) {
    vm.component('mdc-radio', VueMDCRadio)
  }
}

import '@material/textfield/dist/mdc.textfield.css'

import VueMDCTextField from './mdc-textfield.vue'

export {VueMDCTextField}

export default {
  install (vm) {
    vm.component('mdc-textfield', VueMDCTextField)
  }
}

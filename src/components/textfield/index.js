import '@material/textfield/dist/mdc.textfield.css'

import VueMDCTextField from './mdc-textfield'

export {VueMDCTextField}

export default {
  install (vm) {
    vm.component('mdc-textfield', VueMDCTextField)
  }
}

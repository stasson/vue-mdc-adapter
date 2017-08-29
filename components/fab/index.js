import '@material/fab/dist/mdc.fab.css'

import VueMDCFAB from './mdc-fab.vue'

export {VueMDCFAB}

export default {
  install (vm) {
    vm.component('mdc-fab', VueMDCFAB)
  }
}

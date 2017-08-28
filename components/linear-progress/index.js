import '@material/linear-progress/dist/mdc.linear-progress.css'

import VueMDCLinearProgress from './mdc-linear-progress'

export {
  VueMDCLinearProgress
}

export default {
  install (vm) {
    vm.component('mdc-linear-progress', VueMDCLinearProgress)
  }
}

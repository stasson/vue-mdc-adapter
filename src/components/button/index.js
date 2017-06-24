import VueMdcButton from './mdc-button'

export {VueMdcButton}

export default {
  install (vm) {
    vm.component('mdc-button', VueMdcButton)
  }
}

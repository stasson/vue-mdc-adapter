import VueMDCButton from './mdc-button'

export {VueMDCButton}

export default {
  install (vm) {
    vm.component('mdc-button', VueMDCButton)
  }
}

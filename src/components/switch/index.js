import VueMDCSwitch from './mdc-switch'

export {VueMDCSwitch}

export default {
  install (vm) {
    vm.component('mdc-switch', VueMDCSwitch)
  }
}

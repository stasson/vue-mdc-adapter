import VueMdcSwitch from './mdc-switch'

export {VueMdcSwitch}

export default {
  install (vm) {
    vm.component('mdc-switch', VueMdcSwitch)
  }
}

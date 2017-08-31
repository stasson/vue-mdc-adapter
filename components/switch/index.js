import VueMDCSwitch from './mdc-switch.vue'

export {VueMDCSwitch}

export default {
  install (vm) {
    vm.component('mdc-switch', VueMDCSwitch)
  }
}

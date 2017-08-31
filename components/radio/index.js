import VueMDCRadio from './mdc-radio.vue'

export {VueMDCRadio}

export default {
  install (vm) {
    vm.component('mdc-radio', VueMDCRadio)
  }
}

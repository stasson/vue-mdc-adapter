import VueMDCRadio from './mdc-radio'

export {VueMDCRadio}

export default {
  install (vm) {
    vm.component('mdc-radio', VueMDCRadio)
  }
}

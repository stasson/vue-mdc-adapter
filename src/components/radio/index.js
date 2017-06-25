import VueMdcRadio from './mdc-radio'

export {VueMdcRadio}

export default {
  install (vm) {
    vm.component('mdc-radio', VueMdcRadio)
  }
}

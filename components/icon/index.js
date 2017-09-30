import VueMDCICon from './mdc-icon.vue'

export {VueMDCICon}

export default {
  install (vm) {
    vm.component('mdc-icon', VueMDCICon)
  }
}

import VueMDCButton from './mdc-button.vue'

export {VueMDCButton}

export default {
  install (vm) {
    vm.component('mdc-button', VueMDCButton)
  }
}

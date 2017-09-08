import VueMDCSelect from './mdc-select.vue'
import VueMDCOption from './mdc-option.vue'
import VueMDCMenuPlugin from '../menu'

export {VueMDCSelect, VueMDCOption}

export default {
  install (vm) {
    vm.use(VueMDCMenuPlugin)
    vm.component('mdc-select', VueMDCSelect)
    vm.component('mdc-option', VueMDCOption)
  }
}

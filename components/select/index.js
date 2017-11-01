import VueMDCSelect from './mdc-select.vue'
import VueMDCOption from './mdc-option.vue'
import VueMDCMenuSelect from './mdc-menu-select.vue'
import VueMDCMenuOption from './mdc-menu-option.vue'
import VueMDCMultiSelect from './mdc-multi-select.vue'
import VueMDCMultiOption from './mdc-multi-option.vue'
import VueMDCNativeSelect from './mdc-native-select.vue'
import VueMDCNativeOption from './mdc-native-option.vue'
import VueMDCMenuPlugin from '../menu'

export {
  VueMDCSelect,
  VueMDCOption,
  VueMDCMenuSelect,
  VueMDCMenuOption,
  VueMDCMultiSelect,
  VueMDCMultiOption,
  VueMDCNativeSelect,
  VueMDCNativeOption,
  VueMDCMenuPlugin
}

export default {
  install (vm) {
    vm.use(VueMDCMenuPlugin)
    vm.component('mdc-select', VueMDCSelect)
    vm.component('mdc-option', VueMDCOption)
    vm.component('mdc-menu-select', VueMDCMenuSelect)
    vm.component('mdc-menu-option', VueMDCMenuOption)
    vm.component('mdc-native-select', VueMDCNativeSelect)
    vm.component('mdc-native-option', VueMDCNativeOption)
    vm.component('mdc-multi-select', VueMDCMultiSelect)
    vm.component('mdc-multi-option', VueMDCMultiOption)
  }
}

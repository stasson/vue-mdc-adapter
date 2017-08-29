import '@material/select/dist/mdc.select.css'

import VueMDCSelect from './mdc-select.vue'
import VueMDCSelectOption from './mdc-select-option.vue'
import VueMDCNativeSelect from './mdc-native-select.vue'
import VueMDCNativeSelectOption from './mdc-native-select-option.vue'
import VueMDCRichSelect from './mdc-rich-select.vue'
import VueMDCRichSelectOption from './mdc-rich-select-option.vue'
import VueMDCMenuPlugin from '../menu'

export {VueMDCSelect, VueMDCSelectOption}

export default {
  install (vm) {
    vm.use(VueMDCMenuPlugin)
    vm.component('mdc-select', VueMDCSelect)
    vm.component('mdc-select-option', VueMDCSelectOption)
    vm.component('mdc-native-select', VueMDCNativeSelect)
    vm.component('mdc-native-select-option', VueMDCNativeSelectOption)
    vm.component('mdc-rich-select', VueMDCRichSelect)
    vm.component('mdc-rich-select-option', VueMDCRichSelectOption)
  }
}

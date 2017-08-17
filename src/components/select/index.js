import '@material/select/dist/mdc.select.css'

import VueMDCSelect from './mdc-select'
import VueMDCSelectOption from './mdc-select-option'
import VueMDCNativeSelect from './mdc-native-select'
import VueMDCNativeSelectOption from './mdc-native-select-option'
import VueMDCRichSelect from './mdc-rich-select'
import VueMDCRichSelectOption from './mdc-rich-select-option'
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

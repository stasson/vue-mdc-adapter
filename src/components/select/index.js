import '@material/select/dist/mdc.select.css'

import VueMDCSelect from './mdc-select'
import VueMDCSelectItem from './mdc-select-item'
import VueMDCMenuPlugin from '../menu'

export {VueMDCSelect, VueMDCSelectItem}

export default {
  install (vm) {
    vm.use(VueMDCMenuPlugin)
    vm.component('mdc-select', VueMDCSelect)
    vm.component('mdc-select-item', VueMDCSelectItem)
  }
}

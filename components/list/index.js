import '@material/list/dist/mdc.list.css'

import VueMDCList from './mdc-list.vue'
import VueMDCListItem from './mdc-list-item.vue'
import VueMDCListDivider from './mdc-list-divider.vue'
import VueMDCListGroup from './mdc-list-group.vue'
import VueMDCListGroupHeader from './mdc-list-group-header.vue'
import VueMDCListGroupDivider from './mdc-list-group-divider.vue'

export {
  VueMDCList,
  VueMDCListItem,
  VueMDCListDivider,
  VueMDCListGroup,
  VueMDCListGroupHeader,
  VueMDCListGroupDivider
}

export default {
  install (vm) {
    vm.component('mdc-list', VueMDCList)
    vm.component('mdc-list-item', VueMDCListItem)
    vm.component('mdc-list-divider', VueMDCListDivider)
    vm.component('mdc-list-group', VueMDCListGroup)
    vm.component('mdc-list-group-header', VueMDCListGroupHeader)
    vm.component('mdc-list-group-divider', VueMDCListGroupDivider)
  }
}

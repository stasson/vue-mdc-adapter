import VueMDCList from './mdc-list'
import VueMDCListItem from './mdc-list-item'
import VueMDCListDivider from './mdc-list-divider'
import VueMDCListGroup from './mdc-list-group'
import VueMDCListGroupHeader from './mdc-list-group-header'
import VueMDCListGroupDivider from './mdc-list-group-divider'

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

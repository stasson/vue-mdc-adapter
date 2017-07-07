import VueMDCGridList from './mdc-grid-list'
import VueMDCGridTile from './mdc-grid-tile'

export {VueMDCGridList, VueMDCGridTile}

export default {
  install (vm) {
    vm.component('mdc-grid-list', VueMDCGridList)
    vm.component('mdc-grid-tile', VueMDCGridTile)
  }
}

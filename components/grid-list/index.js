import '@material/grid-list/dist/mdc.grid-list.css'

import VueMDCGridList from './mdc-grid-list.vue'
import VueMDCGridTile from './mdc-grid-tile.vue'

export {VueMDCGridList, VueMDCGridTile}

export default {
  install (vm) {
    vm.component('mdc-grid-list', VueMDCGridList)
    vm.component('mdc-grid-tile', VueMDCGridTile)
  }
}

import '@material/layout-grid/dist/mdc.layout-grid.css'

import VueMDCLayoutGrid from './mdc-layout-grid.vue'
import VueMDCLayoutCell from './mdc-layout-cell.vue'
import VueMDCLayoutInnerGrid from './mdc-layout-inner-grid.vue'

export {VueMDCLayoutGrid}
export {VueMDCLayoutCell}
export {VueMDCLayoutInnerGrid}

export default {
  install (vm) {
    vm.component('mdc-layout-grid', VueMDCLayoutGrid)
    vm.component('mdc-layout-cell', VueMDCLayoutCell)
    vm.component('mdc-layout-inner-grid', VueMDCLayoutInnerGrid)
  }
}

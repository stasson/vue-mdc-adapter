import '@material/layout-grid/dist/mdc.layout-grid.css'

import VueMDCLayoutGrid from './mdc-layout-grid'
import VueMDCLayoutCell from './mdc-layout-cell'
import VueMDCLayoutInnerGrid from './mdc-layout-inner-grid'

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

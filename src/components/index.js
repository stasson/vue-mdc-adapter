//
// vue PlugIn
//
import VueMDCButton from './button'
import VueMDCCard from './card'
import VueMDCCheckbox from './checkbox'
import VueMDCDialog from './dialog'
import VueMDCDrawer from './drawer'
import VueMDCFab from './fab'
import VueMDCGridList from './grid-list'
import VueMDCIconToggle from './icon-toggle'
import VueMDCLayoutGrid from './layout-grid'
import VueMDCLinearProgress from './linear-progress'
import VueMDCList from './list'
import VueMDCMenu from './menu'
import VueMDCRadio from './radio'
import VueMDCSelect from './select'
import VueMDCSnackbar from './snackbar'
import VueMDCSwitch from './switch'
import VueMDCTabs from './tabs'
import VueMDCTexfield from './textfield'
import VueMDCToolbar from './toolbar'
import VueMDCTypography from './typography'

const plugin = {
  install (vm) {
    vm.use(VueMDCButton)
    vm.use(VueMDCCard)
    vm.use(VueMDCCheckbox)
    vm.use(VueMDCDialog)
    vm.use(VueMDCDrawer)
    vm.use(VueMDCFab)
    vm.use(VueMDCGridList)
    vm.use(VueMDCIconToggle)
    vm.use(VueMDCLayoutGrid)
    vm.use(VueMDCLinearProgress)
    vm.use(VueMDCList)
    vm.use(VueMDCMenu)
    vm.use(VueMDCRadio)
    vm.use(VueMDCSelect)
    vm.use(VueMDCSnackbar)
    vm.use(VueMDCSwitch)
    vm.use(VueMDCTabs)
    vm.use(VueMDCTexfield)
    vm.use(VueMDCToolbar)
    vm.use(VueMDCTypography)
  }
}

export default plugin

// Auto-install
let _Vue = null
if (typeof window !== 'undefined') {
  _Vue = window.Vue
} else if (typeof global !== 'undefined') {
  _Vue = global.Vue
}
if (_Vue) {
  _Vue.use(plugin)
}

//
// vue PlugIn
//
export * from './button'
export * from './card'
export * from './checkbox'
export * from './dialog'
export * from './drawer'
export * from './fab'
export * from './grid-list'
export * from './icon'
export * from './icon-toggle'
export * from './layout-app'
export * from './layout-grid'
export * from './linear-progress'
export * from './list'
export * from './menu'
export * from './radio'
export * from './select'
export * from './slider'
export * from './snackbar'
export * from './switch'
export * from './tabs'
export * from './textfield'
export * from './toolbar'
export * from './typography'

import VueMDCButton from './button'
import VueMDCCard from './card'
import VueMDCCheckbox from './checkbox'
import VueMDCDialog from './dialog'
import VueMDCDrawer from './drawer'
import VueMDCFab from './fab'
import VueMDCGridList from './grid-list'
import VueMDCIcon from './icon'
import VueMDCIconToggle from './icon-toggle'
import VueMDCLayoutApp from './layout-app'
import VueMDCLayoutGrid from './layout-grid'
import VueMDCLinearProgress from './linear-progress'
import VueMDCList from './list'
import VueMDCMenu from './menu'
import VueMDCRadio from './radio'
import VueMDCSelect from './select'
import VueMDCSlider from './slider'
import VueMDCSnackbar from './snackbar'
import VueMDCSwitch from './switch'
import VueMDCTabs from './tabs'
import VueMDCTexfield from './textfield'
import VueMDCToolbar from './toolbar'
import VueMDCTypography from './typography'

const plugins = [
  VueMDCButton,
  VueMDCCard,
  VueMDCCheckbox,
  VueMDCDialog,
  VueMDCDrawer,
  VueMDCFab,
  VueMDCGridList,
  VueMDCIcon,
  VueMDCIconToggle,
  VueMDCLayoutApp,
  VueMDCLayoutGrid,
  VueMDCLinearProgress,
  VueMDCList,
  VueMDCMenu,
  VueMDCRadio,
  VueMDCSelect,
  VueMDCSlider,
  VueMDCSnackbar,
  VueMDCSwitch,
  VueMDCTabs,
  VueMDCTexfield,
  VueMDCToolbar,
  VueMDCTypography,
]

const plugin = {
  install (vm) {
    for (let plugin of plugins) {
      vm.use(plugin)
    }
  },
  components: plugins.reduce( (result, plugin) => {
    return Object.assign(result, plugin.components)
  },{})
}

export default plugin

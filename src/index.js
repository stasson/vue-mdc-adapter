//
// vue PlugIn
//
import '@material/typography/mdc-typography.scss'
import '@material/theme/mdc-theme.scss'

import mdcButton from './components/button'
import mdcCard from './components/card'
import mdcCheckbox from './components/checkbox'
import mdcDialog from './components/dialog'
import mdcDrawer from './components/drawer'
import mdcFab from './components/fab'
import mdcGridList from './components/grid-list'
import mdcIconToggle from './components/icon-toggle'
import mdcLayoutGrid from './components/layout-grid'
import mdcList from './components/list'
import mdcMenu from './components/menu'
import mdcRadio from './components/radio'
import mdcRipple from './components/ripple'
import mdcSelect from './components/select'
import mdcSnackbar from './components/snackbar'
import mdcSwitch from './components/switch'
import mdcTabs from './components/tabs'
import mdcTexfield from './components/textfield'
import mdToolbar from './components/toolbar'
import mdcTypography from './components/typography'

export default {
  install (vm) {
    vm.use(mdcButton)
    vm.use(mdcCard)
    vm.use(mdcCheckbox)
    vm.use(mdcDialog)
    vm.use(mdcDrawer)
    vm.use(mdcFab)
    vm.use(mdcGridList)
    vm.use(mdcIconToggle)
    vm.use(mdcLayoutGrid)
    vm.use(mdcList)
    vm.use(mdcMenu)
    vm.use(mdcRadio)
    vm.use(mdcRipple)
    vm.use(mdcSelect)
    vm.use(mdcSnackbar)
    vm.use(mdcSwitch)
    vm.use(mdcTabs)
    vm.use(mdcTexfield)
    vm.use(mdToolbar)
    vm.use(mdcTypography)
  }
}

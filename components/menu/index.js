import '@material/menu/dist/mdc.menu.css'
import VueMDCMenu from './mdc-menu'
import VueMDCMenuItem from './mdc-menu-item'
import VueMDCMenuDivider from './mdc-menu-divider'
import VueMDCMenuAnchor from './mdc-menu-anchor'

export {
  VueMDCMenu,
  VueMDCMenuItem,
  VueMDCMenuDivider,
  VueMDCMenuAnchor
}

export default {
  install (vm) {
    vm.component('mdc-menu', VueMDCMenu)
    vm.component('mdc-menu-item', VueMDCMenuItem)
    vm.component('mdc-menu-divider', VueMDCMenuDivider)
    vm.component('mdc-menu-anchor', VueMDCMenuAnchor)
  }
}

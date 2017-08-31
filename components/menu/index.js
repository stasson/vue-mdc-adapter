import VueMDCMenu from './mdc-menu.vue'
import VueMDCMenuItem from './mdc-menu-item.vue'
import VueMDCMenuDivider from './mdc-menu-divider.vue'
import VueMDCMenuAnchor from './mdc-menu-anchor.vue'

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

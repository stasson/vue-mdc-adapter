import {BasePlugin} from '../base'
import mdcMenu from './mdc-menu.vue'
import mdcMenuItem from './mdc-menu-item.vue'
import mdcMenuDivider from './mdc-menu-divider.vue'
import mdcMenuAnchor from './mdc-menu-anchor.vue'

export {
  mdcMenu,
  mdcMenuItem,
  mdcMenuDivider,
  mdcMenuAnchor
}

export default BasePlugin({
  mdcMenu,
  mdcMenuItem,
  mdcMenuDivider,
  mdcMenuAnchor
})

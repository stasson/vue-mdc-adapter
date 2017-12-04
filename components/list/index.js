import {BasePlugin} from '../base'
import mdcList from './mdc-list.vue'
import mdcListItem from './mdc-list-item.vue'
import mdcListDivider from './mdc-list-divider.vue'
import mdcListGroup from './mdc-list-group.vue'
import mdcListGroupHeader from './mdc-list-group-header.vue'
import mdcListGroupDivider from './mdc-list-group-divider.vue'

export {
  mdcList,
  mdcListItem,
  mdcListDivider,
  mdcListGroup,
  mdcListGroupHeader,
  mdcListGroupDivider
}

export default BasePlugin({
  mdcList,
  mdcListItem,
  mdcListDivider,
  mdcListGroup,
  mdcListGroupHeader,
  mdcListGroupDivider
})

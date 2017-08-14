import '@material/button/dist/mdc.button.css'
import '@material/card/dist/mdc.card.css'

import VueMDCCard from './mdc-card'
import VueMDCCardMedia from './mdc-card-media'
import VueMDCCardHeader from './mdc-card-header'
import VueMDCCardTitle from './mdc-card-title'
import VueMDCCardSubtitle from './mdc-card-subtitle'
import VueMDCCardText from './mdc-card-text'
import VueMDCCardHorizontal from './mdc-card-horizontal'
import VueMDCCardImg from './mdc-card-img'
import VueMDCCardActions from './mdc-card-actions'
import VueMDCCardActionButton from './mdc-card-action-button'

export {VueMDCCard}
export {VueMDCCardMedia}
export {VueMDCCardHeader}
export {VueMDCCardTitle}
export {VueMDCCardSubtitle}
export {VueMDCCardText}
export {VueMDCCardHorizontal}
export {VueMDCCardImg}
export {VueMDCCardActions}
export {VueMDCCardActionButton}

export default {
  install (vm) {
    vm.component('mdc-card', VueMDCCard)
    vm.component('mdc-card-media', VueMDCCardMedia)
    vm.component('mdc-card-header', VueMDCCardHeader)
    vm.component('mdc-card-title', VueMDCCardTitle)
    vm.component('mdc-card-subtitle', VueMDCCardSubtitle)
    vm.component('mdc-card-text', VueMDCCardText)
    vm.component('mdc-card-horizontal', VueMDCCardHorizontal)
    vm.component('mdc-card-img', VueMDCCardImg)
    vm.component('mdc-card-actions', VueMDCCardActions)
    vm.component('mdc-card-action-button', VueMDCCardActionButton)
  }
}

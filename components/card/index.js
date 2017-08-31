import VueMDCCard from './mdc-card.vue'
import VueMDCCardMedia from './mdc-card-media.vue'
import VueMDCCardHeader from './mdc-card-header.vue'
import VueMDCCardTitle from './mdc-card-title.vue'
import VueMDCCardSubtitle from './mdc-card-subtitle.vue'
import VueMDCCardText from './mdc-card-text.vue'
import VueMDCCardHorizontal from './mdc-card-horizontal.vue'
import VueMDCCardImg from './mdc-card-img.vue'
import VueMDCCardActions from './mdc-card-actions.vue'
import VueMDCCardActionButton from './mdc-card-action-button.vue'

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

import VueMDCBody from './mdc-body.vue'
import VueMDCCaption from './mdc-caption.vue'
import VueMDCDisplay from './mdc-display.vue'
import VueMDCHeadline from './mdc-headline.vue'
import VueMDCSubeading from './mdc-subheading.vue'
import VueMDCTitle from './mdc-title.vue'

export {
  VueMDCBody,
  VueMDCCaption,
  VueMDCDisplay,
  VueMDCHeadline,
  VueMDCSubeading,
  VueMDCTitle
}

export default {
  install (vm) {
    vm.component('mdc-body', VueMDCBody)
    vm.component('mdc-caption', VueMDCCaption)
    vm.component('mdc-display', VueMDCDisplay)
    vm.component('mdc-headline', VueMDCHeadline)
    vm.component('mdc-subheading', VueMDCSubeading)
    vm.component('mdc-title', VueMDCTitle)
  }
}

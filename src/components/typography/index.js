import VueMDCBody from './mdc-body'
import VueMDCCaption from './mdc-caption'
import VueMDCDisplay from './mdc-display'
import VueMDCHeadline from './mdc-headline'
import VueMDCSubeading from './mdc-subheading'
import VueMDCTitle from './mdc-title'

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

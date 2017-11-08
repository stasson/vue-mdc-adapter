import {  
  VueMDCTextSection,
  VueMDCText,
  VueMDCBody,
  VueMDCCaption,
  VueMDCDisplay,
  VueMDCHeadline,
  VueMDCSubeading,
  VueMDCTitle
} from './mdc-typography.js'

export const components = {
  VueMDCTextSection,
  VueMDCText,
  VueMDCBody,
  VueMDCCaption,
  VueMDCDisplay,
  VueMDCHeadline,
  VueMDCSubeading,
  VueMDCTitle
}

function install (vm) {
  for (let key in components) {
    let component  = components[key]
    let name = component.name
    vm.component(name, component)
  }
}

export default { install, components }

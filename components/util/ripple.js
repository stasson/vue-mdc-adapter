import '@material/ripple/dist/mdc.ripple.css'
import { MDCRippleFoundation } from '@material/ripple'
import { supportsCssVariables, getMatchesProperty } from '@material/ripple/util'

/* global HTMLElement */
const MATCHES = getMatchesProperty(HTMLElement.prototype)

export class RippleBase extends MDCRippleFoundation {
  constructor (vm, options) {
    super(Object.assign({
      browserSupportsCssVars: () => {
        return supportsCssVariables(window)
      },
      registerResizeHandler: (handler) => {
        return window.addEventListener('resize', handler)
      },
      deregisterResizeHandler: (handler) => {
        return window.removeEventListener('resize', handler)
      },
      getWindowPageOffset: () => {
        return ({x: window.pageXOffset, y: window.pageYOffset})
      },
      isUnbounded: () => {
        return false
      },
      computeBoundingRect: () => {
        return vm.$el.getBoundingClientRect()
      },
      isSurfaceActive: () => {
        return vm.$el[MATCHES](':active')
      },
      isSurfaceDisabled: () => {
        return vm.disabled
      },
      addClass (className) {
        vm.$set(vm.classes, className, true)
      },
      // assumes a data 'classes' property on the root element
      removeClass (className) {
        vm.$delete(vm.classes, className)
      },
      registerInteractionHandler: (evt, handler) => {
        vm.$el.addEventListener(evt, handler)
      },
      deregisterInteractionHandler: (evt, handler) => {
        vm.$el.removeEventListener(evt, handler)
      },
      updateCssVariable: (varName, value) => {
        vm.$set(vm.styles, varName, value)
      }
    }, options))
  }

  static isSurfaceActive (ref) {
    return ref[MATCHES](':active')
  }
}

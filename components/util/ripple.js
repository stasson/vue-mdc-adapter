import MDCRippleFoundation from '@material/ripple/foundation.js'
import { supportsCssVariables, getMatchesProperty } from '@material/ripple/util'

export class RippleBase extends MDCRippleFoundation {

  static get MATCHES () {
    /* global HTMLElement */
    return RippleBase._matches ||
      ( RippleBase._matches = getMatchesProperty(HTMLElement.prototype))
  }

  static isSurfaceActive (ref) {
    return ref[RippleBase.MATCHES](':active')
  }

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
        return vm.$el[RippleBase.MATCHES](':active')
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
}

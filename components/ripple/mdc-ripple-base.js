import MDCRippleFoundation from '@material/ripple/foundation.js'
import {supportsCssVariables, getMatchesProperty, applyPassive} from '@material/ripple/util'

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
      isUnbounded: () => {
        return false
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
      removeClass (className) {
        vm.$delete(vm.classes, className)
      },
      containsEventTarget: (target) => vm.$el.contains(target),
      registerInteractionHandler: (evt, handler) => {
        vm.$el.addEventListener(evt, handler)
      },
      deregisterInteractionHandler: (evt, handler) => {
        vm.$el.removeEventListener(evt, handler)
      },
      registerDocumentInteractionHandler: (evtType, handler) =>
        document.documentElement.addEventListener(evtType, handler, applyPassive()),
      deregisterDocumentInteractionHandler: (evtType, handler) =>
        document.documentElement.removeEventListener(evtType, handler, applyPassive()),
      registerResizeHandler: (handler) => {
        return window.addEventListener('resize', handler)
      },
      deregisterResizeHandler: (handler) => {
        return window.removeEventListener('resize', handler)
      },
      updateCssVariable: (varName, value) => {
        vm.$set(vm.styles, varName, value)
      },
      computeBoundingRect: () => {
        return vm.$el.getBoundingClientRect()
      },
      getWindowPageOffset: () => {
        return ({x: window.pageXOffset, y: window.pageYOffset})
      },
    }, options))
  }
}

export const RippleMixin = {
  data () {
    return {
      classes: {},
      styles: {}
    }
  },
  mounted () {
    this.ripple = new RippleBase(this)
    this.ripple.init()
  },
  beforeDestroy () {
    this.ripple.destroy()
  }
}  
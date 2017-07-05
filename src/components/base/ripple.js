import '@material/ripple/mdc-ripple.scss'
import { MDCRippleFoundation } from '@material/ripple'
import { supportsCssVariables, getMatchesProperty } from '@material/ripple/util'
import VueMDCAdapter from './adapter.js'

/* global HTMLElement */
const MATCHES = getMatchesProperty(HTMLElement.prototype)

export default class VueMDCRipple extends MDCRippleFoundation {
  constructor (vm, options) {
    let adapter = new VueMDCAdapter(vm)
    super(Object.assign({
      isUnbounded: () => false,
      computeBoundingRect: () => {
        return vm.$el.getBoundingClientRect()
      },
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
      isSurfaceActive: () => {
        return adapter.vm.$el[MATCHES](':active')
      },
      isSurfaceDisabled: () => {
        return adapter.vm.disabled
      },
      addClass: (className) => {
        adapter.addClass(className)
      },
      removeClass: (className) => {
        adapter.removeClass(className)
      },
      registerInteractionHandler: (evtType, handler) => {
        adapter.registerInteractionHandler(evtType, handler)
      },
      deregisterInteractionHandler: (evtType, handler) => {
        adapter.deregisterInteractionHandler(evtType, handler)
      },
      updateCssVariable: (varName, value) => {
        adapter.setStyle(varName, value)
      }
    }, options))
  }

  static isSurfaceActive (ref) {
    return ref[MATCHES](':active')
  }
}

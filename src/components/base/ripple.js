import '@material/ripple/mdc-ripple.scss'
import { MDCRippleFoundation } from '@material/ripple'
import { supportsCssVariables, getMatchesProperty } from '@material/ripple/util'
import VueMDCAdapter from './adapter.js'

/* global HTMLElement */
const MATCHES = getMatchesProperty(HTMLElement.prototype)

export default class VueMDCRippleAdapter extends VueMDCAdapter {
  get ripple () {
    let adapter = this
    return new MDCRippleFoundation({
      isUnbounded: () => adapter.isUnbounded(),
      computeBoundingRect: () => adapter.computeBoundingRect(),
      browserSupportsCssVars: () => adapter.browserSupportsCssVars(),
      registerResizeHandler: (handler) => adapter.registerInteractionHandler(handler),
      deregisterResizeHandler: (handler) => adapter.deregisterResizeHandler(handler),
      getWindowPageOffset: () => adapter.getWindowPageOffset(),
      isSurfaceActive: () => adapter.isSurfaceActive(),
      isSurfaceDisabled: () => adapter.isSurfaceDisabled(),
      addClass: (className) => adapter.addClass(className),
      removeClass: (className) => adapter.removeClass(className),
      registerInteractionHandler: (evtType, handler) => adapter.registerInteractionHandler(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) => adapter.deregisterInteractionHandler(evtType, handler),
      updateCssVariable: (varName, value) => adapter.updateCssVariable(varName, value)
    })
  }

  // if unbounded, overwrite in options
  isUnbounded () {
    return false
  }

  // if unbounded, overwrite in options
  computeBoundingRect () {
    return this.surface.getBoundingClientRect()
  }

  // assumes surface is root
  get surface () {
    return this.root
  }

  isSurfaceActive () {
    return this.surface[MATCHES](':active')
  }

  isSurfaceDisabled () {
    return this.surface.disabled
  }

  browserSupportsCssVars () {
    return supportsCssVariables(window)
  }

  registerResizeHandler (handler) {
    return window.addEventListener('resize', handler)
  }

  deregisterResizeHandler (handler) {
    return window.removeEventListener('resize', handler)
  }

  getWindowPageOffset () {
    return ({x: window.pageXOffset, y: window.pageYOffset})
  }
}

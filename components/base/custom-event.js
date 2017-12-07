/* global CustomEvent */

export function emitCustomEvent (el, evtType, evtData, shouldBubble = false) {
  let evt
  if (typeof CustomEvent === 'function') {
    evt = new CustomEvent(evtType, {
      detail: evtData,
      bubbles: shouldBubble
    })
  } else {
    evt = document.createEvent('CustomEvent')
    evt.initCustomEvent(evtType, shouldBubble, false, evtData)
  }
  el.dispatchEvent(evt)
}

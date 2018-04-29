let supportsPassive_

/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
export function applyPassive(globalObj = window, forceRefresh = false) {
  if (supportsPassive_ === undefined || forceRefresh) {
    let isSupported = false
    try {
      globalObj.document.addEventListener('test', null, {
        get passive() {
          isSupported = { passive: true }
        }
      })
    } catch (e) {
      //empty
    }

    supportsPassive_ = isSupported
  }

  return supportsPassive_
}

/**
 * Emit a `blur` event.
 * If you call this function directly from outside the scope of a component, then you must bind the scope manually.
 * @param {*} eventData The event data from the native DOM `blur` event
 */
export function emitBlurEvent (eventData) {
  this.$emit('blur', eventData)
}

/**
 * Adds the `emitBlurEvent` method
 */
export const EmitBlurEventMixin = {
  methods: {
    emitBlurEvent
  }
}

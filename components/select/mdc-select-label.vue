<template>
  <label
    :class="labelClasses"
    class="mdc-floating-label">
    <slot />
  </label>
</template>

<script>
import MDCFloatingLabelFoundation from '@material/floating-label/foundation'

export default {
  name: 'mdc-select-label',
  data() {
    return {
      labelClasses: {}
    }
  },
  mounted() {
    this.foundation = new MDCFloatingLabelFoundation({
      addClass: className => {
        this.$set(this.labelClasses, className, true)
      },
      removeClass: className => {
        this.$delete(this.labelClasses, className)
      },
      getWidth: () => this.$el.offsetWidth,
      registerInteractionHandler: (evtType, handler) => {
        this.$el.addEventListener(evtType, handler)
      },
      deregisterInteractionHandler: (evtType, handler) => {
        this.$el.removeEventListener(evtType, handler)
      }
    })
    this.foundation.init()
  },
  beforeDestroy() {
    let foundation = this.foundation
    this.foundation = null
    foundation.destroy()
  }
}
</script>

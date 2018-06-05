<template>
  <div
    :class="classes"
    v-on="$listeners">
    <slot/>
  </div>
</template>

<script>
import MDCChipSetFoundation from '@material/chips/chip-set/foundation'
export default {
  name: 'mdc-chip-set',
  props: {
    choice: [Boolean],
    filter: [Boolean],
    input: [Boolean]
  },
  provide() {
    return { mdcChipSet: this }
  },
  data() {
    return {
      classes: {
        'mdc-chip-set': true,
        'mdc-chip-set--choice': this.choice,
        'mdc-chip-set--filter': this.filter,
        'mdc-chip-set--input': this.input
      }
    }
  },
  mounted() {
    this.foundation = new MDCChipSetFoundation({
      hasClass: className => this.$el.classList.contains(className),
      registerInteractionHandler: (evtType, handler) => {
        this.$el.addEventListener(evtType, handler)
      },
      deregisterInteractionHandler: (evtType, handler) => {
        this.$el.removeEventListener(evtType, handler)
      },
      removeChip: chip => {
        // TODO: may need refactoring
        this.$nextTick(() => chip.$destroy())
      }
    })

    this.foundation.init()
  },
  beforeDestroy() {
    this.foundation.destroy()
  },
  methods: {}
}
</script>

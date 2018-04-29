<template>
  <div 
    :class="classes" 
    v-on="$listeners">
    <slot/>
  </div>
</template>

<script>
import MDCChipSetFoundation from '@material/chips/chip-set/foundation'
import MDCChipFoundation from '@material/chips/chip/foundation'
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
      appendChip: (text, leadingIcon, trailingIcon) => {
        const chipTextEl = document.createElement('div')
        chipTextEl.classList.add(MDCChipFoundation.cssClasses.TEXT)
        chipTextEl.appendChild(document.createTextNode(text))

        const chipEl = document.createElement('div')
        chipEl.classList.add(MDCChipFoundation.cssClasses.CHIP)
        if (leadingIcon) {
          chipEl.appendChild(leadingIcon)
        }
        chipEl.appendChild(chipTextEl)
        if (trailingIcon) {
          chipEl.appendChild(trailingIcon)
        }
        this.root_.appendChild(chipEl)
        return chipEl
      },
      removeChip: chip => {
        const index = this.chips.indexOf(chip)
        this.chips.splice(index, 1)
        chip.remove()
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

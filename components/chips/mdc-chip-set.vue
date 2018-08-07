
<script>
import MDCChipSetFoundation from '@material/chips/chip-set/foundation'
import { MDCChipFoundation } from '@material/chips/chip/foundation'

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
  methods: {
    handleChipInteraction(evt) {
      this.foundation.handleChipInteraction(evt)
    },
    handleChipRemoval(evt) {
      this.foundation.handleChipRemoval(evt)
    }
  },
  render(h) {
    return h(
      'div',
      {
        class: this.classes,
        on: {
          [MDCChipFoundation.strings.INTERACTION_EVENT]: evt =>
            this.handleChipInteraction(evt),
          [MDCChipFoundation.strings.REMOVAL_EVENT]: evt =>
            this.handleChipRemoval(evt)
        }
      },
      this.$slots.default
    )
  }
}
</script>

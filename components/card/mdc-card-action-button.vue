<script>
import {mdcButtonBase} from '../button'

export default {
  name: 'mdc-card-action-button',
  extends: mdcButtonBase,
  props: {
    compact: Boolean,
    accent: Boolean
  },
  data () {
    return {
      classes: {
        'mdc-button': true,
        'mdc-card__action': true,
        'mdc-card-action-button': true,
        'mdc-button--compact': this.compact,
        'mdc-button--accent': this.accent,
      }
    }
  },
  watch: {
    compact () {
      this.$set(this.classes, 'mdc-button--compact', this.compact )
    },
    accent () {
      this.$set(this.classes, 'mdc-button--accent', this.accent )
    },
  }
}
</script>

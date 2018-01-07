<script>
import {mdcButtonBase} from '../button'

export default {
  name: 'mdc-card-action-button',
  extends: mdcButtonBase,
  props: {
    accent: Boolean
  },
  data () {
    return {
      classes: {
        'mdc-button': true,
        'mdc-card__action': true,
        'mdc-card-action-button': true,
        'mdc-button--compact': true,
        'mdc-button--accent': this.accent,
      }
    }
  }
}
</script>

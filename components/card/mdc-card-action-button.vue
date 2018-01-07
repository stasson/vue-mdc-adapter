<script>
import {mdcButtonBase} from '../button'

export default {
  name: 'mdc-card-action-button',
  extends: mdcButtonBase,
  data () {
    return {
      classes: {
        'mdc-button': true,
        'mdc-card-action-button': true,
        'mdc-button--compact': true,
        'mdc-card__action': true
      }
    }
  }
}
</script>

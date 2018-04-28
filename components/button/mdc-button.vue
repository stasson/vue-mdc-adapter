<script>
import mdcButtonBase from './mdc-button-base.vue'

export default {
  name: 'mdc-button',
  extends: mdcButtonBase,
  props: {
    raised: Boolean,
    unelevated: Boolean,
    stroked: Boolean,
    dense: Boolean
  },
  data() {
    return {
      classes: {
        'mdc-button': true,
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated,
        'mdc-button--stroked': this.stroked,
        'mdc-button--dense': this.dense
      }
    }
  },
  watch: {
    raised() {
      this.$set(this.classes, 'mdc-button--raised', this.raised)
    },
    unelevated() {
      this.$set(this.classes, 'mdc-button--unelevated', this.unelevated)
    },
    stroked() {
      this.$set(this.classes, 'mdc-button--stroked', this.stroked)
    },
    dense() {
      this.$set(this.classes, 'mdc-button--dense', this.dense)
    }
  }
}
</script>

<template>
  <button class="mdc-button mdc-ripple-surface" 
    :class="classes" :disabled="disabled" 
    @click="dispatchEvent">
    <slot>
    </slot>
  </button>
</template>


<style lang="scss">
  @import '@material/button/mdc-button';
</style>


<script>
import {MDCRipple} from '@material/ripple'

export default {
  props: {
    disabled: Boolean,
    primary: Boolean,
    accent: Boolean,
    dense: Boolean,
    raised: Boolean,
    compact: Boolean
  },
  computed: {
    classes: function () {
      return {
        'mdc-button--primary': this.primary,
        'mdc-button--accent': this.accent,
        'mdc-button--dense': this.dense,
        'mdc-button--raised': this.raised,
        'mdc-button--compact': this.compact
      }
    }
  },
  methods: {
    dispatchEvent (event) {
      this.$emit(event.type)
    }
  },
  mounted () {
    this.mdc_ripple_ = MDCRipple.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdc_ripple_.destroy()
  }
}

</script>

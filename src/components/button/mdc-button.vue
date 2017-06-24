<template>
  <button ref="root" :class="classes" :style="styles" :disabled="disabled" 
    @click="$emit('click')">
    <slot />
  </button>
</template>

<style lang="scss">
  @import '@material/button/mdc-button';
</style>

<script>
import {VueMDCRipple} from '../base'

export default {
  name: 'mdc-button',
  props: {
    disabled: Boolean,
    primary: Boolean,
    accent: Boolean,
    dense: Boolean,
    raised: Boolean,
    compact: Boolean
  },
  data () {
    return {
      classes: {
        'mdc-button': true,
        'mdc-button--primary': this.primary,
        'mdc-button--accent': this.accent,
        'mdc-button--dense': this.dense,
        'mdc-button--raised': this.raised,
        'mdc-button--compact': this.compact
      },
      styles: {}
    }
  },
  mounted () {
    this.ripple = new VueMDCRipple(this)
    this.ripple.init()
  },
  beforeDestroy () {
    this.ripple.destroy()
  }
}

</script>

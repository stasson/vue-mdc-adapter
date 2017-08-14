<template>
  <button ref="root" class="mdc-card-action-button"
    :class="classes" :style="styles" :disabled="disabled" 
    @click="$emit('click')">
    <slot />
  </button>
</template>

<style lang="scss">
  @import '@material/card/mdc-card';
  @import '@material/button/mdc-button';
</style>


<script lang="babel">
import {RippleBase} from '../util'

export default {
  name: 'mdc-card-action-button',
  props: {
    disabled: Boolean
  },
  data () {
    return {
      classes: {
        'mdc-button': true,
        'mdc-button--compact': true,
        'mdc-card__action': true
      },
      styles: {}
    }
  },
  mounted () {
    this.ripple = new RippleBase(this)
    this.ripple.init()
  },
  beforeDestroy () {
    this.ripple.destroy()
  }
}
</script>

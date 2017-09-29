<template>
  <button ref="root" :class="classes" :style="styles" :disabled="disabled" 
    @click="dispatchEvent">
    <slot />
  </button>
</template>

<script>
import {RippleBase, DispatchEventMixin} from '../util'

export default {
  name: 'mdc-button',
  mixins: [DispatchEventMixin],
  props: {
    disabled: Boolean,
    raised: Boolean,
    unelevated: Boolean,
    stroked: Boolean,
    dense: Boolean,
    compact: Boolean
  },
  data () {
    return {
      classes: {
        'mdc-button': true,
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated,
        'mdc-button--stroked': this.stroked,
        'mdc-button--dense': this.dense,
        'mdc-button--compact': this.compact
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

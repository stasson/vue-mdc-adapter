<template>
  <a :href="disabled?undefined:href" >
    <button
      ref="root" :class="classes" :style="styles" :disabled="disabled" 
      @click="dispatchEvent">
      <slot />
    </button>
  </a>
</template>

<script>
import {RippleBase, DispatchEventMixin} from '../util'

export default {
  name: 'mdc-button',
  mixins: [DispatchEventMixin],
  props: {
    href: String,
    disabled: Boolean,
    primary: Boolean,
    accent: Boolean,
    dense: Boolean,
    compact: Boolean,
    raised: Boolean,
    unelevated: Boolean
  },
  data () {
    return {
      classes: {
        'mdc-button': true,
        'mdc-button--primary': this.primary,
        'mdc-button--accent': this.accent,
        'mdc-button--dense': this.dense,
        'mdc-button--compact': this.compact,
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated
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

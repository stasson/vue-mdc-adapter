<template>
  <custom-element 
    :tag="isLink ? 'a': 'button'" 
    :href="isLink && href"
    :role="isLink ? 'button' : undefined"
    ref="root" :disabled="disabled" 
    :class="classes" :style="styles" 
    @click="dispatchEvent">
    <slot />
  </custom-element>
</template>

<script>
import {RippleBase, DispatchEventMixin, CustomElementMixin} from '../util'

export default {
  name: 'mdc-button',
  mixins: [DispatchEventMixin, CustomElementMixin],
  props: {
    href: String,
    disabled: Boolean,
    raised: Boolean,
    unelevated: Boolean,
    stroked: Boolean,
    dense: Boolean,
    compact: Boolean
  },
  computed: {
    isLink () {
      return this.href && !this.disabled
    }
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

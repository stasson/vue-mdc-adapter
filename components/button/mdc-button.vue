<template>
  <custom-element 
    class="mdc-button"
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
  data () {
    return {
      classes: {
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated,
        'mdc-button--stroked': this.stroked,
        'mdc-button--dense': this.dense,
        'mdc-button--compact': this.compact
      },
      styles: {}
    }
  },
  computed: {
    isLink () {
      return this.href && !this.disabled
    }
  },
  watch: {
    raised () {
      console.log('raised')
      this.$set(this.classes, 'mdc-button--raised', this.raised )
    },
    unelevated () {
      this.$set(this.classes, 'mdc-button--unelevated', this.unelevated )
    },
    stroked () {
      this.$set(this.classes, 'mdc-button--stroked', this.stroked )
    },
    dense () {
      this.$set(this.classes, 'mdc-button--dense', this.dense )
    },
    compact () {
      this.$set(this.classes, 'mdc-button--compact', this.compact )
    },
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

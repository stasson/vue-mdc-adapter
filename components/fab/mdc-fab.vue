<template>
  <a :href="disabled?undefined:href" >
    <button class="mdc-fab material-icons" :class="classes" :style="styles"
      :disabled="disabled" @click="dispatchEvent" >
      <span class="mdc-fab__icon">
        <slot>
        </slot>
      </span>
    </button>
  </a>
</template>



<script>
import {RippleBase, DispatchEventMixin} from '../util'

export default {
  name: 'mdc-fab',
  mixins: [DispatchEventMixin],
  props: {
    href: String,
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
    absolute: Boolean,
    fixed: Boolean
  },
  data () {
    return {
      classes: {
        'mdc-fab--mini': this.mini,
        'mdc-fab--plain': this.plain,
        'mdc-fab--absolute': this.absolute,
        'mdc-fab--fixed': this.fixed
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

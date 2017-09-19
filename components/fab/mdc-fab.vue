<template>
  <a>
    <button class="mdc-fab material-icons" :class="classes" :style="styles"
      @click="dispatchEvent" >
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
    mini: Boolean,
    absolute: Boolean,
    fixed: Boolean
  },
  data () {
    return {
      classes: {
        'mdc-fab--mini': this.mini,
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

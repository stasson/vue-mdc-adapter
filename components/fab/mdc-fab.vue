<template>
  <custom-element 
    :tag="href ? 'a': 'button'" 
    :href="href"
    :role="href ? 'button' : undefined"
    class="mdc-fab" :class="classes" :style="styles"
    @click="dispatchEvent" >
    <span class="mdc-fab__icon">
      <slot>{{ icon }}</slot>
    </span>
  </custom-element>
</template>

<script>
import {RippleBase, DispatchEventMixin, CustomElementMixin} from '../util'

export default {
  name: 'mdc-fab',
  mixins: [DispatchEventMixin, CustomElementMixin],
  props: {
    href: String,
    icon: String,
    mini: Boolean,
    absolute: Boolean,
    fixed: Boolean
  },
  data () {
    return {
      classes: {
        'material-icons': this.icon,
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

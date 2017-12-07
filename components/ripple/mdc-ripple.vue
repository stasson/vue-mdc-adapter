<template>
  <custom-element :tag="tag" class="mdc-ripple"
    :classes="classes" :styles="styles">
    <slot />
  </custom-element>
</template>

<script>
import {CustomElementMixin} from '../base'
import {RippleBase} from './mdc-ripple-base'

export default {
  name: 'mdc-ripple',
  mixins:[CustomElementMixin],
  props: {
    tag: String
  },
  data () {
    return {
      classes: {},
      styles: {},
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

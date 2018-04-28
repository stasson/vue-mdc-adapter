<template>
  <custom-element 
    :tag="tag" 
    :classes="classes"
    :styles="styles" 
    class="mdc-ripple">
    <slot />
  </custom-element>
</template>

<script>
import { CustomElementMixin } from '../base'
import { RippleMixin } from './mdc-ripple-base'

export default {
  name: 'mdc-ripple',
  mixins: [CustomElementMixin, RippleMixin],
  props: {
    tag: String
  }
}
</script>

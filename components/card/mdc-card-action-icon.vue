<template>
  <span :class="classes" :style="styles" 
    @click="dispatchEvent">
    <slot>{{ icon }}</slot>
  </span>
</template>

<script>
import {DispatchEventMixin} from '../base'
import {RippleBase} from '../ripple'

export default {
  name: 'mdc-card-action-icon',
  mixins: [DispatchEventMixin],
  props: {
    icon: String
  },
  data () {
    return {
      classes: {
        'mdc-card-action-icon': true, 
        'material-icons':!!this.icon,
        'mdc-card__action': true,
        'mdc-card__action--icon': true,
        'mdc-icon-toggle': true
      },
      styles: {}
    }
  },
  watch: {
    icon () {
      this.$set(this.classes, 'material-icons', !!this.icon)
    }
  },
  mounted () {
    this.ripple = new RippleBase(this,{
      isUnbounded: () => true,
    })
    this.ripple.init()
  },
  beforeDestroy () {
    this.ripple.destroy()
  }
}
</script>

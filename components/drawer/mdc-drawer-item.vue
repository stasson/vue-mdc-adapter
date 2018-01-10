<template>
  <custom-link :link="link" 
    class="mdc-drawer-item mdc-list-item" 
    :class="classes" :style="styles"
    @click="onClick">
    <span class="mdc-list-item__graphic" v-if="hasStartDetail">
      <slot name="start-detail">
        <i class="material-icons" aria-hidden="true">{{startIcon}}</i>
      </slot>
    </span>
    <slot></slot>
  </custom-link>
</template>

<script>
import {DispatchEventMixin, CustomLinkMixin} from '../base'
import {RippleBase} from '../ripple'

export default {
  name: 'mdc-drawer-item',
  inject: ['mdcDrawer'],
  mixins: [DispatchEventMixin, CustomLinkMixin],
  props: {
    'start-icon': String,
    'temporary-close': {type: Boolean, default: true},
  },
  data () {
    return {
      classes: {},
      styles: {}
    }
  },
  computed: {
    hasStartDetail () {
      return this.startIcon || this.$slots['start-detail']
    }
  },
  methods: {
    onClick (evt) {
      this.mdcDrawer.isTemporary && this.temporaryClose 
        && this.mdcDrawer.close()
      this.dispatchEvent(evt)
    }
  },
  mounted () {
    this.ripple = new RippleBase(this)
    this.ripple.init()
  },
  beforeDestroy () {
    this.ripple && this.ripple.destroy()
    this.ripple = null
  }
}
</script>

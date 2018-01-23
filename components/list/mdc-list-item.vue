<template>
  <li class="mdc-list-item"
    :class="classes" :style="styles"   
    :tabindex="isInteractive ? '0' : undefined">

    <span class="mdc-list-item__graphic" v-if="hasStartDetail">
      <slot name="start-detail"></slot>
    </span>

    <span class="mdc-list-item__text" v-if="hasSecondary">
      <slot></slot>
      <span class="mdc-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    </span>
    <slot v-else></slot>

    <span class="mdc-list-item__meta" v-if="hasEndDetail">
      <slot name="end-detail"></slot>
    </span>

  </li>
</template>

<script>
import {RippleBase} from '../ripple'

export default {
  name: 'mdc-list-item',
  inject: ['mdcList'],
  data () {
    return {
      classes: {},
      styles: {}
    } 
  },
  computed: {
    isInteractive () {
      return this.mdcList && this.mdcList.interactive
    },
    hasSecondary () {
      return !!this.$slots['secondary']
    },
    hasEndDetail () {
      return !!this.$slots['end-detail']
    },
    hasStartDetail () {
      return !!this.$slots['start-detail']
    }
  },
  mounted () {
    if (this.isInteractive) {
      this.ripple = new RippleBase(this)
      this.ripple.init()
    }
  },
  beforeDestroy () {
    this.ripple && this.ripple.destroy()
    this.ripple = null
  }
}
</script>
  
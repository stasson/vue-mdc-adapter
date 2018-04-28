<template>
  <li 
    :class="[classes, itemClasses]"
    :style="styles" 
    :tabindex="isInteractive ? '0' : undefined"   
    class="mdc-list-item"
    v-on="isInteractive ? $listeners : {}">

    <span 
      v-if="hasStartDetail" 
      class="mdc-list-item__graphic">
      <slot name="start-detail"/>
    </span>

    <span 
      v-if="hasSecondary" 
      class="mdc-list-item__text">
      <slot/>
      <span class="mdc-list-item__secondary-text">
        <slot name="secondary"/>
      </span>
    </span>
    <slot v-else/>

    <span 
      v-if="hasEndDetail" 
      class="mdc-list-item__meta">
      <slot name="end-detail"/>
    </span>

  </li>
</template>

<script>
import { RippleBase } from '../ripple'

export default {
  name: 'mdc-list-item',
  inject: ['mdcList'],
  props: {
    selected: Boolean,
    activated: Boolean
  },
  data() {
    return {
      classes: {},
      styles: {}
    }
  },
  computed: {
    itemClasses() {
      return {
        'mdc-list-item--selected': this.selected,
        'mdc-list-item--activated': this.activated
      }
    },
    isInteractive() {
      return this.mdcList && this.mdcList.interactive
    },
    hasSecondary() {
      return this.$slots['secondary'] && (this.mdcList && this.mdcList.twoLine)
    },
    hasEndDetail() {
      return !!this.$slots['end-detail']
    },
    hasStartDetail() {
      return !!this.$slots['start-detail']
    }
  },
  watch: {
    isInteractive(value) {
      if (value) {
        this.addRipple()
      } else {
        this.removeRipple()
      }
    }
  },
  mounted() {
    this.isInteractive && this.addRipple()
  },
  beforeDestroy() {
    this.removeRipple()
  },
  methods: {
    addRipple() {
      if (!this.ripple) {
        let ripple = new RippleBase(this)
        ripple.init()
        this.ripple = ripple
      }
    },
    removeRipple() {
      if (this.ripple) {
        let ripple = this.ripple
        this.ripple = null
        ripple.destroy()
      }
    }
  }
}
</script>

<template>
  <li 
    :class="[classes, itemClasses]"
    :style="styles" 
    :tabindex="isInteractive ? '0' : undefined"
    class="mdc-grid-tile"
    v-on="isInteractive ? listeners : clickListener">
    <div 
      v-if="cover" 
      class="mdc-grid-tile__primary">
      <div 
        :style="{ backgroundImage: 'url(' + src + ')' }"
        class="mdc-grid-tile__primary-content"/>
    </div>
    <div 
      v-else 
      class="mdc-grid-tile__primary">
      <img 
        :src="src" 
        class="mdc-grid-tile__primary-content" >
    </div>
    <span 
      v-if="title || supportText" 
      class="mdc-grid-tile__secondary">
      <i 
        v-if="icon" 
        class="mdc-grid-tile__icon material-icons">{{ icon }}</i>
      <span 
        v-if="title" 
        class="mdc-grid-tile__title">{{ title }}</span>
      <span 
        v-if="supportText" 
        class="mdc-grid-tile__support-text">{{ supportText }}</span>
    </span>
  </li>
</template>


<script>
import { DispatchEventMixin } from '../base'
import { RippleBase } from '../ripple'

export default {
  name: 'mdc-grid-tile',
  inject: ['mdcGrid'],
  mixins: [DispatchEventMixin],
  props: {
    src: String,
    cover: Boolean,
    icon: String,
    title: String,
    'support-text': String,
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
    clickListener() {
      return { click: e => this.dispatchEvent(e) }
    },
    itemClasses() {
      return {
        'mdc-grid-tile--selected': this.selected,
        'mdc-grid-tile--activated': this.activated
      }
    },
    isInteractive() {
      return this.mdcGrid && this.mdcGrid.interactive
    },
    hasStartDetail() {
      return this.startIcon || this.$slots['start-detail']
    },
    hasEndDetail() {
      return this.endIcon || this.$slots['end-detail']
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

<template>
  <li class="mdc-grid-tile" @click="onClick"
    :class="[classes, itemClasses]" :style="styles"
    :tabindex="isInteractive ? '0' : undefined"
    v-on="isInteractive ? $listeners : {}">
    <div class="mdc-grid-tile__primary" v-if="cover">
      <div class="mdc-grid-tile__primary-content"
        :style="{ backgroundImage: 'url(' + src + ')' }">
      </div>
    </div>
    <div class="mdc-grid-tile__primary" v-else>
        <img class="mdc-grid-tile__primary-content" :src="src" />
    </div>
    <span class="mdc-grid-tile__secondary" v-if="title || supportText">
      <i class="mdc-grid-tile__icon material-icons" v-if="icon">{{ icon }}</i>
      <span class="mdc-grid-tile__title" v-if="title">{{ title }}</span>
      <span class="mdc-grid-tile__support-text" v-if="supportText">{{ supportText }}</span>
    </span>
  </li>
</template>


<script>
import {DispatchEventMixin} from '../base'
import {RippleBase} from '../ripple'

export default {
  name: 'mdc-grid-tile',
  inject: ['mdcGrid'],
  mixins: [DispatchEventMixin],
  props: {
    'src': String,
    'cover': Boolean,
    'icon': String,
    'title': String,
    'support-text': String,
    'selected': Boolean,
    'activated': Boolean
  },
  data () {
    return {
      classes: {},
      styles: {}
    }
  },
  computed: {
    itemClasses () {
      return {
        'mdc-grid-tile--selected': this.selected,
        'mdc-grid-tile--activated': this.activated
      }
    },
    isInteractive () {
      return this.mdcGrid && this.mdcGrid.interactive
    },
    hasStartDetail () {
      return this.startIcon || this.$slots['start-detail']
    },
    hasEndDetail () {
      return this.endIcon || this.$slots['end-detail']
    }
  },
  watch: {
    isInteractive (value) {
      if (value) {
        this.addRipple()
      } else {
        this.removeRipple()
      }
    }
  },
  methods: {
    onClick (evt) {
      this.dispatchEvent(evt)
    },
    addRipple () {
      if (!this.ripple) {
        let ripple = new RippleBase(this)
        ripple.init()
        this.ripple = ripple
      }
    },
    removeRipple () {
      if (this.ripple) {
        let ripple = this.ripple
        this.ripple = null
        ripple.destroy()
      }
    }
  },
  mounted () {
    this.isInteractive && this.addRipple()
    /* eslint-disable no-console */
    console.log(this)
    console.log(this.$el.getBoundingClientRect())
    console.log(this.ripple)
    /* eslint-enable no-console */
  },
  beforeDestroy () {
    this.removeRipple()
  }
}
</script>

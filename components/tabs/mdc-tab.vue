<template>
  <a class="mdc-tab" :class="classes" :style="styles"
    @click="dispatchEvent">
    <i class="material-icons mdc-tab__icon" v-if="hasIcon">{{icon}}</i>
    <span v-if="">
      <slot></slot>  
    </span>
  </a>
</template>

<script lang="babel">
import MDCTabFoundation from '@material/tabs/tab/foundation'
import { RippleBase, emitCustomEvent, DispatchEventMixin } from '../util'

export default {
  name: 'mdc-tab',
  mixins: [DispatchEventMixin],
  props: {
    active: Boolean,
    icon: String
  },
  data () {
    return {
      classes: {},
      styles: {}
    }
  },
  computed: {
    hasIcon () {
      return !!this.icon
    },
    hasText () {
      return !!this.$slots.default
    }
  },
  methods: {
    getComputedWidth () {
      return this.foundation.getComputedWidth()
    },
    getComputedLeft () {
      return this.foundation.getComputedLeft()
    },
    isActive () {
      return this.foundation.isActive()
    },
    setActive (isActive) {
      this.foundation.setActive(isActive)
    },
    isDefaultPreventedOnClick () {
      return this.foundation.preventsDefaultOnClick()
    },
    setPreventDefaultOnClick (preventDefaultOnClick) {
      this.foundation.setPreventDefaultOnClick(preventDefaultOnClick)
    },
    measureSelf () {
      this.foundation.measureSelf()
    }
  },
  mounted () {
    this.foundation = new MDCTabFoundation({
      addClass: (className) =>
        this.$set(this.classes, className, true),
      removeClass: (className) =>
        this.$delete(this.classes, className),
      registerInteractionHandler: (type, handler) =>
        this.$el.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) =>
        this.$el.removeEventListener(type, handler),
      getOffsetWidth: () => {
        return this.$el.offsetWidth
      },
      getOffsetLeft: () =>
        this.$el.offsetLeft,
      notifySelected: () => {
        emitCustomEvent(this.$el,
          MDCTabFoundation.strings.SELECTED_EVENT, {tab: this}, true)
      }
    })
    this.foundation.init()
    this.setActive(this.active)
    this.ripple = new RippleBase(this)
    this.ripple.init()
  },
  beforeDestroy () {
    this.foundation.destroy()
    this.ripple.destroy()
  }
}
</script>

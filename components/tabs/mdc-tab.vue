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
    },
    computedWidth () {
      return this.foundation.getComputedWidth()
    },
    computedLeft () {
      return this.foundation.getComputedLeft()
    },
    isActive: {
      get: function () {
        return this.foundation.isActive()
      },
      set: function (isActive) {
        this.foundation.setActive(isActive)
      }
    },
    preventDefaultOnClick: {
      get: function () {
        return this.foundation.preventsDefaultOnClick()
      },
      set: function (preventDefaultOnClick) {
        this.foundation.setPreventDefaultOnClick(preventDefaultOnClick)
      }
    }
  },
  methods: {
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
      getOffsetWidth: () =>
        this.$el.offsetWidth,
      getOffsetLeft: () =>
        this.$el.offsetLeft,
      notifySelected: () => {
        emitCustomEvent(this.$el,
          MDCTabFoundation.strings.SELECTED_EVENT, {tab: this}, true)
      }
    })
    this.foundation.init()
    this.isActive = this.active
    this.ripple = new RippleBase(this)
    this.ripple.init()
  },
  beforeDestroy () {
    this.foundation.destroy()
    this.ripple.destroy()
  }
}
</script>

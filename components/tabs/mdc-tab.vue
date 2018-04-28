<template>
  <custom-link 
    :class="classes"
    :style="styles" 
    :link="link"
    class="mdc-tab"
    v-on="listeners">

    <i 
      v-if="!!hasIcon" 
      ref="icon"
      :class="hasIcon.classes"
      tabindex="0"
      class="mdc-tab__icon">
      <slot name="icon">{{ hasIcon.content }}</slot>
    </i>

    <span 
      v-if="hasText" 
      :class="{'mdc-tab__icon-text': !!hasIcon}">
      <slot/>
    </span>

  </custom-link>
</template>

<script>
import MDCTabFoundation from '@material/tabs/tab/foundation'
import {
  CustomLinkMixin,
  DispatchEventMixin,
  emitCustomEvent,
  extractIconProp
} from '../base'
import { RippleBase } from '../ripple'

export default {
  name: 'mdc-tab',
  mixins: [CustomLinkMixin, DispatchEventMixin],
  props: {
    active: Boolean,
    icon: [String, Array, Object]
  },
  data() {
    return {
      classes: {},
      styles: {}
    }
  },
  computed: {
    hasIcon() {
      if (this.icon || this.$slots.icon) {
        return this.icon ? extractIconProp(this.icon) : {}
      }
      return false
    },
    hasText() {
      return !!this.$slots.default
    }
  },
  mounted() {
    this.foundation = new MDCTabFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      registerInteractionHandler: (type, handler) =>
        this.$el.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) =>
        this.$el.removeEventListener(type, handler),
      getOffsetWidth: () => {
        return this.$el.offsetWidth
      },
      getOffsetLeft: () => this.$el.offsetLeft,
      notifySelected: () => {
        emitCustomEvent(
          this.$el,
          MDCTabFoundation.strings.SELECTED_EVENT,
          { tab: this },
          true
        )
      }
    })
    this.foundation.init()
    this.setActive(this.active)
    this.ripple = new RippleBase(this)
    this.ripple.init()
  },
  beforeDestroy() {
    this.foundation.destroy()
    this.ripple.destroy()
  },
  methods: {
    getComputedWidth() {
      return this.foundation.getComputedWidth()
    },
    getComputedLeft() {
      return this.foundation.getComputedLeft()
    },
    isActive() {
      return this.foundation.isActive()
    },
    setActive(isActive) {
      this.foundation.setActive(isActive)
    },
    isDefaultPreventedOnClick() {
      return this.foundation.preventsDefaultOnClick()
    },
    setPreventDefaultOnClick(preventDefaultOnClick) {
      this.foundation.setPreventDefaultOnClick(preventDefaultOnClick)
    },
    measureSelf() {
      this.foundation.measureSelf()
    }
  }
}
</script>

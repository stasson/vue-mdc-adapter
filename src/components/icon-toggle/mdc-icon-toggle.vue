<template>
<i class="mdc-icon-toggle material-icons" 
  role="button" aria-pressed="false" 
  :class="classes" :style="styles"
  :tabindex="tabIndex"
  :data-toggle-on='toggleOnData'
  :data-toggle-off='toggleOffData'>
  {{text}}
</i>
</template>

<style lang="scss">
@import '@material/icon-toggle/mdc-icon-toggle';
</style>

<script lang="babel">
import MDCIconToggleFoundation from '@material/icon-toggle/foundation'
import {RippleBase} from '../util'

export default {
  props: {
    'toggle-on': String,
    'toggle-off': String,
    'label-on': String,
    'label-off': String,
    'class-on': String,
    'class-off': String,
    value: Boolean,
    disabled: Boolean,
    primary: Boolean,
    accent: Boolean
  },
  data () {
    return {
      classes: {
        'mdc-icon-toggle--primary': this.primary,
        'mdc-icon-toggle--accent': this.accent
      },
      styles: {},
      tabIndex: 0,
      text: '',
      toggleOnData: JSON.stringify({
        content: this.toggleOn,
        label: this.labelOn,
        cssClass: this.classOn
      }),
      toggleOffData: JSON.stringify({
        content: this.toggleOff,
        label: this.labelOff,
        cssClass: this.classOff
      })
    }
  },
  watch: {
    'value' (value) {
      this.foundation.toggle(value)
    },
    'disabled' (disabled) {
      this.foundation.setDisabled(disabled)
    }
  },
  mounted () {
    this.foundation = new MDCIconToggleFoundation({
      addClass: (className) => this.$set(this.classes, className, true),
      removeClass: (className) => this.$delete(this.classes, className),
      registerInteractionHandler: (evt, handler) =>
        this.$el.addEventListener(evt, handler),
      deregisterInteractionHandler: (evt, handler) =>
        this.$el.removeEventListener(evt, handler),
      setText: (text) => { this.text = text },
      getTabIndex: () => this.tabIndex,
      setTabIndex: (tabIndex) => { this.tabIndex = tabIndex },
      getAttr: (name) => this.$el.getAttribute(name),
      setAttr: (name, value) => { this.$el.setAttribute(name, value) },
      rmAttr: (name) => { this.$el.removeAttribute(name) },
      notifyChange: (evtData) => { this.$emit('input', evtData.isOn) }
    })
    this.foundation.init()
    this.foundation.refreshToggleData()
    this.foundation.toggle(this.value)
    this.foundation.setDisabled(this.disabled)

    this.ripple = new RippleBase(this, {
      isUnbounded: () => true,
      isSurfaceActive: () => this.foundation.isKeyboardActivated(),
      computeBoundingRect: () => {
        const dim = 48
        const {left, top} = this.$el.getBoundingClientRect()
        return {
          left,
          top,
          width: dim,
          height: dim,
          right: left + dim,
          bottom: left + dim
        }
      }
    })
    this.ripple.init()
  },
  beforeDestroy () {
    this.foundation.destroy()
    this.ripple.destroy()
  }
}

</script>

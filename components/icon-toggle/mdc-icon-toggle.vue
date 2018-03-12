<template>
  <span class="mdc-icon-toggle" role="button" aria-pressed="false"
    :class="classes" :style="styles"
    :tabindex="tabIndex"
    :data-toggle-on="toggleOnData"
    :data-toggle-off="toggleOffData">
    <i :class="iconClasses" aria-hidden="true">{{text}}</i>
  </span>
</template>

<script>
import MDCIconToggleFoundation from '@material/icon-toggle/foundation'
import {RippleBase} from '../ripple'

export default {
  name: 'mdc-icon-toggle',
  props: {
    toggleOn: [String, Object],
    toggleOff: [String, Object],
    value: Boolean,
    disabled: Boolean,
    accent: Boolean
  },
  data () {
    return {
      classes: {
        'mdc-icon-toggle--accent': this.accent
      },
      styles: {},
      iconClasses: {},
      tabIndex: 0,
      text: '',
    }
  },
  watch: {
    value (value) {
      this.foundation && this.foundation.toggle(value)
    },
    disabled (disabled) {
      this.foundation && this.foundation.setDisabled(disabled)
    },
    toggleOnData () {
     this.foundation && this.foundation.refreshToggleData()
    },
    toggleOffData () {
    this.foundation && this.foundation.refreshToggleData()
    },
    accent (value) {
      this.$set(this.classes, 'mdc-icon-toggle--secondary', value)
    },
  },
  computed: {
    toggleOnData () {
      let toggle = this.toggleOn
      return toggle && JSON.stringify((typeof toggle === 'string') ? { 
        content: toggle, 
        cssClass: 'material-icons' 
      } : {
        content: toggle.icon || toggle.content,
        label: toggle.label,
        cssClass: toggle.icon ? 'material-icons' : toggle.cssClass
      })
    } ,
    toggleOffData () {
      let toggle = this.toggleOff
      return toggle && JSON.stringify((typeof toggle === 'string') ? { 
        content: toggle, 
        cssClass: 'material-icons' 
      } : {
        content: toggle.icon || toggle.content,
        label: toggle.label,
        cssClass: toggle.icon ? 'material-icons' : toggle.cssClass
      })
    },
  },
  mounted () {
    this.foundation = new MDCIconToggleFoundation({
      addClass: (className) => this.$set(this.iconClasses, className, true),
      removeClass: (className) => this.$delete(this.iconClasses, className),
      registerInteractionHandler: (evt, handler) =>
        this.$el.addEventListener(evt, handler),
      deregisterInteractionHandler: (evt, handler) =>
        this.$el.removeEventListener(evt, handler),
      setText: (text) => { this.text = text },
      getTabIndex: () => this.tabIndex,
      setTabIndex: (tabIndex) => { this.tabIndex = tabIndex },
      getAttr: (name, value) => this.$el.getAttribute(name, value),
      setAttr: (name, value) => { this.$el.setAttribute(name, value) },
      rmAttr: (name) => { this.$el.removeAttribute(name) },
      notifyChange: (evtData) => { this.$emit('input', evtData.isOn) }
    })
    this.foundation.init()
    this.foundation.toggle(this.value)
    this.foundation.setDisabled(this.disabled)

    this.ripple = new RippleBase(this, {
      isUnbounded: () => true,
      isSurfaceActive: () => this.foundation.isKeyboardActivated(),
    })
    this.ripple.init()
  },
  beforeDestroy () {
    this.foundation.destroy()
    this.ripple.destroy()
  }
}
</script>

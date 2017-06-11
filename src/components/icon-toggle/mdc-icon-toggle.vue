<template>
<i class="mdc-icon-toggle material-icons" 
  role="button" aria-pressed="false" :disabled="disabled"
  :class="classes" :style="styles"
  :tabindex="tabIndex"
  :data-toggle-on='toggleOnData'
  :data-toggle-off='toggleOffData'>
  {{text}}
</i>
</template>

<script lang="babel">
import MDCIconToggleFoundation from '@material/icon-toggle/foundation'
import MDCRippleFoundation from '@material/ripple/foundation'
import {applyPassive, supportsCssVariables} from '@material/ripple/util'

export default {
  props: {
    'toggle-on': Object,
    'toggle-off': Object,
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
      text: ''
    }
  },
  watch: {
    'toggleOn': {
      handler () { this.foundation.refreshToggleData() },
      deep: true
    },
    'toggleOff': {
      handler () { this.foundation.refreshToggleData() },
      deep: true
    },
    'value' (value) {
      this.foundation.toggle(value)
    },
    'disabled' (disabled) {
      this.foundation.setDisabled(disabled)
    }
  },
  computed: {
    toggleOnData () {
      return JSON.stringify(this.toggleOn)
    },
    toggleOffData () {
      return JSON.stringify(this.toggleOff)
    }
  },
  mounted () {
    // TODO: add the ripple
    let vm = this
    this.foundation = new MDCIconToggleFoundation({
      addClass (className) {
        vm.$set(vm.classes, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.classes, className)
      },
      registerInteractionHandler (type, handler) {
        vm.$el.addEventListener(type, handler)
      },
      deregisterInteractionHandler (type, handler) {
        vm.$el.removeEventListener(type, handler)
      },
      setText (text) {
        vm.text = text
      },
      getTabIndex () {
        return vm.tabIndex
      },
      setTabIndex (tabIndex) {
        vm.tabIndex = tabIndex
      },
      getAttr (name) {
        return vm.$el.getAttribute(name)
      },
      setAttr (name, value) {
        vm.$el.setAttribute(name, value)
      },
      rmAttr (name) {
        vm.$el.removeAttribute(name)
      },
      notifyChange (evtData) {
        const evtType = 'MDCIconToggle:change'
        let evt
        /* global CustomEvent */
        if (typeof CustomEvent === 'function') {
          evt = new CustomEvent(evtType, {detail: evtData})
        } else {
          evt = document.createEvent('CustomEvent')
          evt.initCustomEvent(evtType, false, false, evtData)
        }
        vm.$el.dispatchEvent(evt)
        vm.$emit('input', evtData.isOn)
      }
    })
    this.foundation.init()
    this.foundation.toggle(this.value)
    this.foundation.setDisabled(this.disabled)

    this.ripple = new MDCRippleFoundation({
      browserSupportsCssVars: () => supportsCssVariables(window),
      isUnbounded: () => true,
      isSurfaceActive: () => vm.foundation.isKeyboardActivated(),
      isSurfaceDisabled: () => vm.disabled,
      addClass (className) {
        vm.$set(vm.classes, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.classes, className)
      },
      registerInteractionHandler (type, handler) {
        vm.$el.addEventListener(type, handler, applyPassive())
      },
      deregisterInteractionHandler (type, handler) {
        vm.$el.removeEventListener(type, handler, applyPassive())
      },
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      updateCssVariable: (varName, value) => {
        vm.styles[varName] = value
      },
      computeBoundingRect: () => {
        const dim = 48
        const {left, top} = vm.$el.getBoundingClientRect()
        return {
          left,
          top,
          width: dim,
          height: dim,
          right: left + dim,
          bottom: left + dim
        }
      },
      getWindowPageOffset: () => ({x: window.pageXOffset, y: window.pageYOffset})
    })
    this.ripple.init()
  },
  beforeDestroy () {
    this.foundation.destroy()
    this.ripple.destroy()
  }
}

</script>

<style lang="scss">
@import '@material/icon-toggle/mdc-icon-toggle';
</style>

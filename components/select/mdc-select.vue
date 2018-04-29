<template>
  <div
    :class="rootClasses"
    :style="styles"
    class="mdc-select">
    <select
      ref="native_control"
      v-bind="$attrs"
      class="mdc-select__native-control"
      v-on="listeners">
      <option
        v-if="!!label"
        class="mdc-option"
        value=""
        disabled
        selected/>
      <slot/>
    </select>
    <div
      ref="label"
      :class="labelClasses"
      class="mdc-floating-label">{{ label }}</div>
    <div
      v-if="bottomLine"
      ref="line"
      :class="lineClasses"
      :style="lineStyles"
      class="mdc-line-ripple"
    />
  </div>
</template>

<script>
import MDCSelectFoundation from '@material/select/foundation'
import MDCFloatingLabelFoundation from '@material/floating-label/foundation'
import MDCLineRippleFoundation from '@material/line-ripple/foundation'
import { RippleBase } from '../ripple'

export default {
  name: 'mdc-select',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: String,
    disabled: Boolean,
    label: String,
    box: Boolean,
    bottomLine: { type: Boolean, default: true }
  },
  data() {
    return {
      styles: {},
      labelClasses: {},
      lineClasses: {},
      lineStyles: {},
      classes: {}
    }
  },
  computed: {
    rootClasses() {
      return {
        'mdc-select--box': this.box,
        ...this.classes
      }
    },
    listeners() {
      return {
        ...this.$listeners,
        change: event => this.$emit('change', event.target.value)
      }
    }
  },
  watch: {
    disabled(value) {
      this.foundation && this.foundation.setDisabled(value)
    },
    value: 'refreshIndex'
  },
  mounted() {
    if (this.label) {
      this.labelFoundation = new MDCFloatingLabelFoundation({
        addClass: className => this.$set(this.labelClasses, className, true),
        removeClass: className => this.$delete(this.labelClasses, className),
        getWidth: () => this.$refs.label.offsetWidth,
        registerInteractionHandler: (evtType, handler) => {
          this.$refs.label.addEventListener(evtType, handler)
        },
        deregisterInteractionHandler: (evtType, handler) => {
          this.$refs.label.removeEventListener(evtType, handler)
        }
      })
      this.labelFoundation.init()
    }

    if (this.bottomLine) {
      this.lineFoundation = new MDCLineRippleFoundation({
        addClass: className => {
          this.$set(this.lineClasses, className, true)
        },
        removeClass: className => {
          this.$delete(this.lineClasses, className)
        },
        hasClass: className => {
          this.$refs.line.classList.contains(className)
        },
        setStyle: (name, value) => {
          this.$set(this.lineStyles, name, value)
        },
        registerEventHandler: (evtType, handler) => {
          this.$refs.line.addEventListener(evtType, handler)
        },
        deregisterEventHandler: (evtType, handler) => {
          this.$refs.line.removeEventListener(evtType, handler)
        }
      })
      this.lineFoundation.init()
    }

    this.foundation = new MDCSelectFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      floatLabel: value => {
        this.labelFoundation.float(value)
      },
      activateBottomLine: () => {
        this.lineFoundation.activate()
      },
      deactivateBottomLine: () => {
        this.lineFoundation.deactivate()
      },
      registerInteractionHandler: (type, handler) =>
        this.$refs.native_control.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) =>
        this.$refs.native_control.removeEventListener(type, handler),
      getSelectedIndex: () => this.$refs.native_control.selectedIndex,
      setSelectedIndex: index =>
        (this.$refs.native_control.selectedIndex = index),
      setDisabled: disabled => (this.$refs.native_control.disabled = disabled),
      getValue: () => this.$refs.native_control.value,
      setValue: value => (this.$refs.native_control.value = value)
    })

    this.foundation.init()

    this.foundation.setDisabled(this.disabled)

    // initial sync with DOM
    this.refreshIndex()
    this.slotObserver = new MutationObserver(() => this.refreshIndex())
    this.slotObserver.observe(this.$refs.native_control, {
      childList: true,
      subtree: true
    })

    if (this.box) {
      this.ripple = new RippleBase(this)
      this.ripple.init()
    }
  },
  beforeDestroy() {
    this.slotObserver.disconnect()
    let foundation = this.foundation
    this.foundation = null
    foundation.destroy()

    let labelFoundation = this.labelFoundation
    this.labelFoundation = null
    labelFoundation.destroy()

    let lineFoundation = this.lineFoundation
    this.lineFoundation = null
    lineFoundation.destroy()

    this.ripple && this.ripple.destroy()
  },
  methods: {
    refreshIndex() {
      const options = [...this.$refs.native_control.querySelectorAll('option')]

      const idx = options.findIndex(({ value }) => {
        return this.value === value
      })

      if (this.$refs.native_control.selectedIndex !== idx) {
        this.foundation.setSelectedIndex(idx)
      }
    }
  }
}
</script>

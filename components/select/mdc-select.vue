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
      class="mdc-select__label">{{ label }}</div>
    <div 
      v-if="bottomLine" 
      ref="bottomLine" 
      :class="bottomLineClasses" 
      class="mdc-select__bottom-line"/>
  </div>
</template>

<script>
import MDCSelectFoundation from '@material/select/foundation'
import MDCSelectBottomLineFoundation from '@material/select/bottom-line/foundation'
import MDCSelectLabelFoundation from '@material/select/label/foundation'
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
      bottomLineClasses: {},
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
      this.labelFoundation = new MDCSelectLabelFoundation({
        addClass: className => this.$set(this.labelClasses, className, true),
        removeClass: className => this.$delete(this.labelClasses, className)
      })
      this.labelFoundation.init()
    }

    if (this.bottomLine) {
      this.bottomLineFoundation = new MDCSelectBottomLineFoundation({
        addClass: className => {
          this.$set(this.bottomLineClasses, className, true)
        },
        removeClass: className => {
          this.$delete(this.bottomLineClasses, className)
        }
      })
      this.bottomLineFoundation.init()
    }

    this.foundation = new MDCSelectFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      floatLabel: value => {
        this.labelFoundation.styleFloat(value)
      },
      activateBottomLine: () => {
        this.bottomLineFoundation.activate()
      },
      deactivateBottomLine: () => {
        this.bottomLineFoundation.deactivate()
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

    let bottomLineFoundation = this.bottomLineFoundation
    this.bottomLineFoundation = null
    bottomLineFoundation.destroy()

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

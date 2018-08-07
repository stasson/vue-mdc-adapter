<template>
  <div
    :id="id"
    :class="rootClasses"
    :style="styles"
    class="mdc-select">
    <select
      ref="native_control"
      :disabled="disabled"
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
    <!-- label -->
    <select-label
      v-if="label"
      ref="label">{{ label }}</select-label>
    <!-- line ripple -->
    <select-line-riple
      v-if="!outlined"
      ref="line"/>
    <!-- outline -->
    <select-notched-outline
      v-if="outlined"
      ref="outline"
    />
  </div>
</template>

<script>
import MDCSelectFoundation from '@material/select/foundation'
import { RippleBase } from '../ripple'

import SelectLabel from './mdc-select-label.vue'
import SelectLineRiple from './mdc-select-line-ripple.vue'
import SelectNotchedOutline from './mdc-select-notched-outline.vue'

export default {
  name: 'mdc-select',
  components: {
    SelectLabel,
    SelectLineRiple,
    SelectNotchedOutline
  },
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: String,
    disabled: Boolean,
    label: String,
    outlined: Boolean,
    id: { type: String }
  },
  data() {
    return {
      styles: {},
      classes: {}
    }
  },
  computed: {
    rootClasses() {
      return {
        'mdc-select--box': !this.outlined,
        'mdc-select--outlined': this.outlined,
        ...this.classes
      }
    },
    listeners() {
      return {
        ...this.$listeners,
        change: event => this.onChange(event)
      }
    }
  },
  watch: {
    disabled(value) {
      this.foundation && this.foundation.updateDisabledStyle(value)
    },
    value: 'refreshIndex'
  },
  mounted() {
    this.foundation = new MDCSelectFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      hasClass: className => this.$el.classList.contains(className),
      activateBottomLine: () => {
        if (this.$refs.line) {
          this.$refs.line.foundation.activate()
        }
      },
      deactivateBottomLine: () => {
        if (this.$refs.line) {
          this.$refs.line.foundation.deactivate()
        }
      },
      getValue: () => this.$refs.native_control.value,
      isRtl: () => {
        return (
          window.getComputedStyle(this.$el).getPropertyValue('direction') ===
          'rtl'
        )
      },
      notchOutline: (labelWidth, isRtl) => {
        if (this.$refs.outline) {
          this.$refs.outline.foundation.notch(labelWidth, isRtl)
        }
      },
      closeOutline: () => {
        if (this.$refs.outline) {
          this.$refs.outline.foundation.closeNotch()
        }
      },
      hasOutline: () => !!this.$refs.outline,
      floatLabel: value => {
        if (this.$refs.label) {
          this.$refs.label.foundation.float(value)
        }
      },
      hasLabel: () => !!this.$refs.label,
      getLabelWidth: () => {
        if (this.$refs.label) {
          return this.$refs.label.foundation.getWidth()
        }
      }
    })

    this.foundation.init()
    this.foundation.handleChange()

    // initial sync with DOM
    this.refreshIndex()
    this.slotObserver = new MutationObserver(() => this.refreshIndex())
    this.slotObserver.observe(this.$refs.native_control, {
      childList: true,
      subtree: true
    })

    this.ripple = new RippleBase(this)
    this.ripple.init()
  },
  beforeDestroy() {
    this.slotObserver.disconnect()

    let foundation = this.foundation
    this.foundation = null
    foundation.destroy()

    this.ripple && this.ripple.destroy()
  },
  methods: {
    refreshIndex() {
      const options = [...this.$refs.native_control.querySelectorAll('option')]

      const idx = options.findIndex(({ value }) => {
        return this.value === value
      })

      if (this.$refs.native_control.selectedIndex !== idx) {
        this.$refs.native_control.selectedIndex = idx
        this.foundation.handleChange()
      }
    },
    onChange(event) {
      this.foundation.handleChange()
      this.$emit('change', event.target.value)
    }
  }
}
</script>

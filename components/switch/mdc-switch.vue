<template>
  <div
    :class="{
      'mdc-form-field': hasLabel,
      'mdc-form-field--align-end': hasLabel && alignEnd
    }"
    class="mdc-switch-wrapper" >

    <div
      :class="classes"
      :styles="styles"
      class="mdc-switch">
      <div class="mdc-switch__track" />
      <div class="mdc-switch__thumb-underlay">
        <div class="mdc-switch__thumb">
          <input
            ref="control"
            :name="name"
            :id="vma_uid_"
            :value="value"
            type="checkbox"
            role="switch"
            class="mdc-switch__native-control"
            @change="onChanged" >

        </div>
      </div>
    </div>

    <label
      v-if="hasLabel"
      :for="vma_uid_"
      class="mdc-switch-label">
      <slot>{{ label }}</slot>
    </label>

  </div>
</template>

<script>
import { DispatchFocusMixin, VMAUniqueIdMixin } from '../base'
import { RippleBase } from '../ripple'
import MDCSwitchFoundation from '@material/switch/foundation'

export default {
  name: 'mdc-switch',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    disabled: Boolean,
    value: String,
    label: String,
    alignEnd: Boolean,
    name: String
  },
  data() {
    return {
      classes: {},
      styles: {}
    }
  },
  computed: {
    hasLabel() {
      return this.label || this.$slots.default
    }
  },
  watch: {
    checked(value) {
      this.foundation && this.foundation.setChecked(value)
    },
    disabled(value) {
      this.foundation && this.foundation.setDisabled(value)
    }
  },

  mounted() {
    this.foundation = new MDCSwitchFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      setNativeControlChecked: checked =>
        (this.$refs.control.checked = checked),
      isNativeControlChecked: () => this.$refs.control.checked,
      setNativeControlDisabled: disabled =>
        (this.$refs.control.disabled = disabled),
      isNativeControlDisabled: () => this.nativeControl_.disabled
    })
    this.foundation.init()
    this.foundation.setChecked(this.checked)
    this.foundation.setDisabled(this.disabled)

    this.ripple = new RippleBase(this)
    this.ripple.init()
  },
  beforeDestroy() {
    this.foundation && this.foundation.destroy()
    this.ripple && this.ripple.destroy()
  },
  methods: {
    onChanged(event) {
      this.foundation && this.foundation.handleChange()
      this.$emit('change', event.target.checked)
    }
  }
}
</script>

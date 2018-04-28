<template>
  <div
    :class="{
      'mdc-form-field': hasLabel,
      'mdc-form-field--align-end': hasLabel && alignEnd
    }"
    class="mdc-switch-wrapper" >

    <div
      :class="{'mdc-switch--disabled': disabled }"
      class="mdc-switch">
      <input
        ref="control"
        :name="name"
        :id="vma_uid_"
        :checked="checked"
        :disabled="disabled"
        type="checkbox"
        class="mdc-switch__native-control"
        @change="onChanged" >

      <div class="mdc-switch__background">
        <div class="mdc-switch__knob"/>
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

export default {
  name: 'mdc-switch',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    label: String,
    alignEnd: Boolean,
    disabled: Boolean,
    value: {
      type: String,
      default() {
        return 'on'
      }
    },
    name: String
  },
  computed: {
    hasLabel() {
      return this.label || this.$slots.default
    }
  },
  methods: {
    onChanged(event) {
      this.$emit('change', event.target.checked)
    }
  }
}
</script>

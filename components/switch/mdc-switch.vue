<template>
  <div class="mdc-switch-wrapper" 
    :class="{
        'mdc-form-field': this.hasLabel,
        'mdc-form-field--align-end': this.hasLabel && this.alignEnd
      }" >

    <div class="mdc-switch" 
      :class="{'mdc-switch--disabled': disabled }">
      <input ref="control" type="checkbox" 
        :name="name" :id="vma_uid_" 
        class="mdc-switch__native-control" 
        :checked="checked" 
        :disabled="disabled"
        @change="onChanged" />

      <div class="mdc-switch__background">
        <div class="mdc-switch__knob"></div>
      </div>

    </div>

    <label :for="vma_uid_" v-if="hasLabel"
      class="mdc-switch-label">
      <slot>{{label}}</slot>
    </label>

  </div>
</template>

<script>
import {DispatchFocusMixin} from '../base'

export default {
  name: 'mdc-switch',
  mixins: [DispatchFocusMixin],
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    'checked': Boolean,
    'label': String,
    'alignEnd': Boolean,
    'disabled': Boolean,
    'value': { type: String, default () { return 'on' } },
    'name': String
  },
  computed: {
    hasLabel () {
      return this.label || this.$slots.default
    }
  },
  methods: {
    onChanged (event) {
      this.$emit('change', event.target.checked)
    }
  }
}
</script>

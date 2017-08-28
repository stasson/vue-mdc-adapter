<template>
  <select class="mdc-select" :disabled="disabled" :value="value"
    @change="onChange">
    <option disabled value="" v-if="label">{{ label }}</option>
    <slot></slot>
  </select>
</template>

<script lang="babel">
import { SelectMixin } from './mdc-select-mixins'

export default {
  mixins: [SelectMixin],
  methods: {
    onChange (evt) {
      let value = evt.target.value
      this.$emit('change', value)
      console.log('native change: ' + value)
    }
  }
}
</script>

<template>
  <select ref="root" class="mdc-select mdc-native-select" 
    v-model="selected" :disabled="disabled"
    @change="onChange"
  >
    <option disabled value="" v-if="label">{{ label }}</option>
    <slot></slot>
  </select>
</template>

<script>
export default {
  name: 'mdc-native-select',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: [String, Array],
    disabled: Boolean,
    label: String
  },
  data () {
    return {
      selected: this.value
    }
  },
  methods: {
    onChange () {
      this.$emit('change', this.selected)
    }
  }
}
</script>

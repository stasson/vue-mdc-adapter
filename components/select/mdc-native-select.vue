<template>
  <select ref="root" class="mdc-select" v-model="selected" :disabled="disabled"
    @change="onChange"
  >
    <option disabled value=""v-if="label">{{ label }}</option>
    <slot></slot>
  </select>
</template>

<script lang="babel">
export default {
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
    onChange (evt) {
      this.$emit('change', this.selected)
      console.log('native change: ' + this.selected)
    }
  }
}
</script>

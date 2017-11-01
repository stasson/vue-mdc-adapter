<template>
  <select :multiple="multiple"  ref="root" v-model="selected" 
    :disabled="disabled"  :size="size"  
    class="mdc-multi-select mdc-list"
    @change="onChange"
  >
    <optgroup class="mdc-list-group" :label="label" v-if="label">
        <slot></slot>
    </optgroup>
    <slot v-else></slot>
  </select>
</template>

<script>
export default {
  name: 'mdc-multi-select',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    multiple: Boolean,
    value: [String, Array],
    disabled: Boolean,
    label: String,
    'max-size': [String, Number]
  },
  data () {
    return {
      selected: this.value,
      size: undefined
    }
  },
  methods: {
    onChange () {
      this.$emit('change', this.selected)
    }
  },
  mounted () {
    const refreshSize = () => {
      let count = this.$refs.root.querySelectorAll('option, optgroup').length
      let max = Number(this.maxSize)
      if (this.label) {
        max += 1
      }
      this.size = Math.min(count, max)
    }

    this.slotObserver = new MutationObserver(() => refreshSize())
    this.slotObserver.observe(this.$el, { childList: true })

    refreshSize()
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
  }
}
</script>

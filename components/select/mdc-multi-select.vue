<template>
  <select :multiple="multiple"  ref="root" v-model="selected" 
    :disabled="disabled"  :style="styles"  
    class="mdc-select mdc-multi-select mdc-list"
    @change="onChange"
  >
    <optgroup ref="optgroup" class="mdc-list-group" :label="label" v-if="label">
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
    value: [Number, String, Object, Array],
    disabled: Boolean,
    label: String,
    maxSize: {
      type: [String, Number],
      default: 4
    }
  },
  data () {
    return {
      selected: this.value,
      size: undefined,
      count: undefined
    }
  },
  computed: {
    styles () {
      let scroll = (this.count > this.size)
      let size = 48* this.size + (scroll? 0 : 16)

      let styles =  {
        'height': size + 'px',
        'overflow-y':  scroll ? 'scroll' : 'hidden'
      }
      if (!scroll) {
        styles['background-image'] = 'unset'
      }
      return styles
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
      this.count = count
      let max = Number(this.maxSize)
      if (this.label) {
        max += 1
      }
      this.size = Math.min(count, max)
    }

    this.slotObserver = new MutationObserver(() => refreshSize())
    this.slotObserver.observe(this.$el, { childList: true, subtree: true })

    refreshSize()
  },
  beforeDestroy () {
    this.slotObserver.disconnect()
  }
}
</script>

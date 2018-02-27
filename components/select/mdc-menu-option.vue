<template>
   <li class="mdc-option mdc-menu-option mdc-list-item" 
    role="option" 
    :tabindex="disabled?-1:0"
    :aria-disabled="disabled">
     <slot></slot>
   </li>
</template>

<script>
export default {
  name: 'mdc-menu-option',
  inject: ['mdcMenuSelect'],
  props: {
    value: [Number, String, Object],
    disabled: Boolean
  },
  methods: {
    resetValue() {
      this.mdcMenuSelect._valueMap.set(this.$el, this.value || this.$el.textContent);
    }
  },
  
  watch: {
    value: this.resetValue
  },
  mounted() {
    this.mdcMenuSelect.$refs.menu.$on('update', this.resetValue)
    this.resetValue()
  }
}
</script>

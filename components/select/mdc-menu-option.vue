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
  props: {
    value: [Number, String, Object],
    disabled: Boolean
  },
  methods: {
    getValue () {
      return this.value || this.$el.textContent.trim()
    }
  }
}
</script>

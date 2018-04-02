<template>
   <li class="mdc-option mdc-list-item" 
    role="option" 
    :tabindex="disabled?-1:0"
    :aria-disabled="disabled"
    :data-value="value">
     <slot></slot>
   </li>
</template>

<script>
export default {
  name: 'mdc-option',
  props: {
    value: String,
    disabled: Boolean,
  },
};
</script>

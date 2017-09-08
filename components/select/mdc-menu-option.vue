<template>
   <li class="mdc-list-item" role="option" 
    :tabindex="disabled?-1:0"
    :aria-disabled="disabled"
    :data-value="value">
     <slot></slot>
   </li>
</template>

<script lang="babel">
export default {
  props: {
    value: String,
    disabled: Boolean
  }
}
</script>

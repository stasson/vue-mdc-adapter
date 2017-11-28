<template>
  <li class="mdc-menu-item mdc-list-item" role="menuitem" 
    :tabindex="disabled?'-1':'0'"
    :aria-disabled="disabled"
    >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'mdc-menu-item',
  props: {
    disabled: Boolean
  }
}
</script>

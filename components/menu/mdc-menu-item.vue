<template>
  <li 
    :tabindex="disabled?'-1':'0'" 
    :aria-disabled="disabled" 
    class="mdc-menu-item mdc-list-item"
    role="menuitem"
  >
    <slot/>
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

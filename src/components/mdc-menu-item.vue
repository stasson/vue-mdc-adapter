<template>
  <li class="mdc-list-item" role="role" tabindex="tabindex">
    <slot></slot>
  </li>
</template>

<style lang="scss">
  @import "@material/menu/mdc-menu";
</style>

<script lang="babel">
export default {
  name: 'mdc-menu-item',
  props: {
    tabindex: {
      type: String,
      default: '0'
    },
    role: {
      type: String,
      default: 'menuitem'
    }
  }
}
</script>

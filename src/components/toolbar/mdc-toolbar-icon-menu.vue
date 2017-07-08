<template>
  <a href="#" class="material-icons mdc-toolbar__icon--menu"
    @click="$emit('click')"
  >
    <slot>menu</slot>
  </a>
</template>

<style lang="scss">
@import "@material/toolbar/mdc-toolbar";
</style>

<script lang="babel">
export default {
  name: 'mdc-toolbar-icon-menu'
}
</script>

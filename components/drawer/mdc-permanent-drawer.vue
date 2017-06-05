
<template>
  <nav class="mdc-permanent-drawer mdc-typography">
    <nav class="mdc-permanent-drawer__content">
      <slot />
    </nav>
  </nav>
</template>

<style lang="scss">
  @import "@material/drawer/permanent/mdc-permanent-drawer";
</style>

<script lang="babel">
export default {
  name: 'mdc-permanent-drawer'
}
</script>

<template>
<div class="mdc-demo mdc-demo--container">
  <mdc-menu-anchor class="myAnchor">
    <mdc-button raised @click="open=true">Open Menu</mdc-button>
    <mdc-menu v-model="open">
      <mdc-menu-item>A Menu Item</mdc-menu-item>
      <mdc-menu-item>Another Menu Item</mdc-menu-item>
      <mdc-menu-item disabled>Disabled Menu Item</mdc-menu-item>
      <mdc-menu-divider>Another Menu Item</mdc-menu-divider>
      <mdc-menu-item>Parted Menu Item</mdc-menu-item>
    </mdc-menu>
  </mdc-menu-anchor>
</div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>

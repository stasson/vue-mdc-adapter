<template>
  <div class="mdc-demo mdc-demo--container">
    <mdc-menu-anchor class="myAnchor">
      <mdc-button raised @click="$refs.menu.show()">Open Menu</mdc-button>
      <mdc-menu ref="menu">
        <mdc-menu-item >A Menu Item</mdc-menu-item>
        <mdc-menu-item >Another Menu Item</mdc-menu-item>
        <mdc-menu-item disabled >Disabled Menu Item</mdc-menu-item>
        <mdc-menu-divider>Another Menu Item</mdc-menu-divider>
        <mdc-menu-item >Parted Menu Item</mdc-menu-item>
      </mdc-menu>
    </mdc-menu-anchor>
  </div>
</template>

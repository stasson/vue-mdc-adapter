<template>
  <div>
    <mdc-drawer persistent>
      <mdc-drawer-header>header</mdc-drawer-header>
      <mdc-drawer-list>
        <mdc-drawer-item>item</mdc-drawer-item>
      </mdc-drawer-list>
  </mdc-drawer>
    <mdc-drawer permanent>
      <mdc-drawer-header>header</mdc-drawer-header>
      <mdc-drawer-list>
        <mdc-drawer-item>item</mdc-drawer-item>
      </mdc-drawer-list>
    </mdc-drawer>
    <mdc-drawer temporary>
      <mdc-drawer-header>header</mdc-drawer-header>
      <mdc-drawer-list>
        <mdc-drawer-item>item</mdc-drawer-item>
      </mdc-drawer-list>
    </mdc-drawer>
  </div>
</template>

<script>
export default {
  name: 'spec',
}
</script>

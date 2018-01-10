<template>
  <nav class="mdc-permanent-drawer mdc-drawer--permanent mdc-typography">
    <nav class="mdc-drawer__content">
      <div class="mdc-drawer__toolbar-spacer" 
        v-if="toolbarSpacer"></div>
      <slot />
    </nav>
  </nav>
</template>

<script>
export default {
  name: 'mdc-permanent-drawer',
  props: {
    'toolbar-spacer': Boolean,
  }
}
</script>

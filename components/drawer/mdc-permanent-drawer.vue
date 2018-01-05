<template>
  <nav class="mdc-permanent-drawer mdc-typography">
    <nav class="mdc-permanent-drawer__content">
      <div class="mdc-permanent-drawer__toolbar-spacer" 
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

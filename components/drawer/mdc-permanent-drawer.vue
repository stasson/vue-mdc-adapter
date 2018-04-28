<template>
  <nav class="mdc-permanent-drawer mdc-drawer--permanent mdc-typography">
    <nav class="mdc-drawer__content">
      <div 
        v-if="toolbarSpacer" 
        class="mdc-drawer__toolbar-spacer"/>
      <slot />
    </nav>
  </nav>
</template>

<script>
export default {
  name: 'mdc-permanent-drawer',
  props: {
    'toolbar-spacer': Boolean
  }
}
</script>

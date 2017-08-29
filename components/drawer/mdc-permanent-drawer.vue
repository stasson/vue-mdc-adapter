
<template>
  <nav class="mdc-permanent-drawer mdc-typography">
    <toolbar-spacer permanent v-if="spacer" />
    <nav class="mdc-permanent-drawer__content">
      <slot />
    </nav>
  </nav>
</template>

<script lang="babel">
import ToolbarSpacer from './mdc-drawer-toolbar-spacer.vue'

export default {
  name: 'mdc-permanent-drawer',
  props: {
    spacer: Boolean
  },
  components: {
    ToolbarSpacer
  }
}
</script>

<template>
  <header class="mdc-drawer-header mdc-drawer__header" v-if="show">
    <div class="mdc-drawer__header-content">
      <slot />
    </div>
  </header>
</template>

<script>
export default {
  name: 'mdc-drawer-header',
  props: {
    'permanent': Boolean,
    'persistent': Boolean,
    'temporary': Boolean
  },
  inject: ['mdcDrawer'],
  computed: {
    show () {
      if (this.temporary || this.persistent || this.permanent) {
        return (this.temporary && this.mdcDrawer.isTemporary) ||
          (this.persistent && this.mdcDrawer.isPersistent) ||
            (this.permanent && this.mdcDrawer.isPermanent)
      } else {
        return true
      }
    }
  }
}
</script>

<template>
  <header class="mdc-drawer-header" :class="[headerClass]" v-if="show">
    <div :class="[headerContentClass]">
      <slot />
    </div>
  </header>
</template>

<script lang="babel">
export default {
  name: 'mdc-drawer-header',
  props: {
    'permanent': Boolean,
    'persistent': Boolean,
    'temporary': Boolean
  },
  inject: ['mdcDrawer'],
  computed: {
    headerClass () {
      return this.mdcDrawer.type + '__header'
    },
    headerContentClass () {
      return this.mdcDrawer.type + '__header-content'
    },
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


<template>
  <header :class="headerClasses">
    <div :class="contentClasses">
      <slot />
    </div>
  </header>
</template>

<script lang="babel">
export default {
  name: 'mdc-drawer-header',
  props: {
    permanent: Boolean,
    persistent: Boolean,
    temporary: Boolean
  },
  computed: {
    headerClasses () {
      return {
        'mdc-persistent-drawer__header': this.persistent,
        'mdc-permanent-drawer__header': this.permanent,
        'mdc-temporary-drawer__header': this.temporary
      }
    },
    contentClasses () {
      return {
        'mdc-persistent-drawer__header-content': this.persistent,
        'mdc-permanent-drawer__header-content': this.permanent,
        'mdc-temporary-drawer__header-content': this.temporary
      }
    }
  }
}
</script>

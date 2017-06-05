
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
    temporary: Boolean,
    type: String
  },
  computed: {
    headerClasses () {
      return {
        'mdc-persistent-drawer__header': this.persistent || this.type === 'persistent',
        'mdc-permanent-drawer__header': this.permanent || this.type === 'permanent',
        'mdc-temporary-drawer__header': this.temporary || this.type === 'temporary'
      }
    },
    contentClasses () {
      return {
        'mdc-persistent-drawer__header-content': this.persistent || this.type === 'persistent',
        'mdc-permanent-drawer__header-content': this.permanent || this.type === 'permanent',
        'mdc-temporary-drawer__header-content': this.temporary || this.type === 'temporary'
      }
    }
  }
}
</script>


<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="babel">
export default {
  name: 'mdc-drawer-toolbar-spacer',
  props: {
    permanent: Boolean,
    persistent: Boolean,
    temporary: Boolean,
    type: String
  },
  computed: {
    classes () {
      return {
        'mdc-persistent-drawer__toolbar-spacer': this.persistent || this.type === 'persistent',
        'mdc-permanent-drawer__toolbar-spacer': this.permanent || this.type === 'permanent',
        'mdc-temporary-drawer__toolbar-spacer': this.temporary || this.type === 'temporary'
      }
    }
  }
}
</script>

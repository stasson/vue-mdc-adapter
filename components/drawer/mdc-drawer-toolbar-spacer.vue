
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
    temporary: Boolean
  },
  computed: {
    classes () {
      return {
        'mdc-persistent-drawer__toolbar-spacer': this.persistent,
        'mdc-permanent-drawer__toolbar_spacer': this.permanent,
        'mdc-temporary-drawer__toolbar_spacer': this.temporary
      }
    }
  }
}
</script>

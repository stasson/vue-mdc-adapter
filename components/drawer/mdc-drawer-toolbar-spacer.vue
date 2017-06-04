
<template>
  <div :class="'mdc-' + this.type.toString() + '-drawer__toolbar-spacer'">
    <slot />
  </div>
</template>

<script lang="babel">
export default {
  name: 'mdc-drawer-toolbar-spacer',
  props: ['type']
}
</script>

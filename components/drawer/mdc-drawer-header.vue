
<template>
  <header :class="'mdc-' + this.type.toString() + '-drawer__header'">
    <div :class="'mdc-' + this.type.toString() + '-drawer__header-content'">
      <slot />
    </div>
  </header>
</template>

<script lang="babel">
export default {
  name: 'mdc-drawer-header',
  props: ['type']
}
</script>

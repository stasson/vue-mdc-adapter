<template>
  <a :href="href"  class="material-icons mdc-toolbar__icon"
    @click="$emit('click')"
  >
    <slot></slot>
  </a>
</template>

<style lang="scss">
@import "@material/toolbar/mdc-toolbar";
</style>

<script lang="babel">
export default {
  name: 'mdc-toolbar-icon',
  props: {
    'href': { type: String, default: '#' }
  }
}
</script>

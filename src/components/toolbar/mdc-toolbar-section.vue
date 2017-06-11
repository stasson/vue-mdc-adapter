<template>
  <section class="mdc-toolbar__section" :class="classes">
    <slot></slot>
  </section>
</template>

<style lang="scss">
@import "@material/toolbar/mdc-toolbar";
</style>

<script lang="babel">
export default {
  name: 'mdc-toolbar-section',
  props: {
    'align-start': Boolean,
    'align-end': Boolean,
    'shrink-to-fit': Boolean
  },
  computed: {
    classes () {
      return {
        'mdc-toolbar__section--align-start': this.alignStart,
        'mdc-toolbar__section--align-end': this.alignEnd,
        'mdc-toolbar__section--shrink-to-fit': this.shrinkToFit
      }
    }
  }
}
</script>

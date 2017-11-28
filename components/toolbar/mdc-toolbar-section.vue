<template>
  <section class="mdc-toolbar-section mdc-toolbar__section" :class="classes">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'mdc-toolbar-section',
  props: {
    'align-start': Boolean,
    'align-end': Boolean,
    'shrink-to-fit': Boolean
  },
  data () {
    return {
      classes: {
        'mdc-toolbar__section--align-start': this.alignStart,
        'mdc-toolbar__section--align-end': this.alignEnd,
        'mdc-toolbar__section--shrink-to-fit': this.shrinkToFit
      }
    }
  }
}
</script>

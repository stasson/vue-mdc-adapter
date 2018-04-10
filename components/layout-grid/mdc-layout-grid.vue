<template>
<div :class="classes">
  <div class="mdc-layout-grid__inner">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'mdc-layout-grid',
  props: {
    'fixed-column-width': Boolean,
    'align-left': Boolean,
    'align-right': Boolean,
  },
  computed: {
    classes() {
      return {
        'mdc-layout-grid': true,
        'mdc-layout-grid--fixed-column-width': this.fixedColumnWidth,
        'mdc-layout-grid--align-left': this.alignLeft,
        'mdc-layout-grid--align-right': this.alignRight,
      };
    },
  },
};
</script>

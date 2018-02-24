<template>
  <div ref="root" class="mdc-chip-set" :class="classes">
    <slot></slot>
  </div>  
</template>

<script>
import MDCChipSetFoundation from '@material/chips/chip-set/foundation';

export default {
  name: 'mdc-chip-set',
  props: {},
  data() {
    return {
      classes: {},
    };
  },
  methods: {},
  mounted() {
    this.foundation = new MDCChipSetFoundation({
      hasClass: className => this.$refs.root.classList.contains(className),
    });

    this.foundation.init();
  },
  beforeDestroy() {
    this.foundation.destroy();
  },
};
</script>

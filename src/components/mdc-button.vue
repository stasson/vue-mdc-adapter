<template>
  <button class="mdc-button" :class="classes" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
  @import '@material/button/mdc-button';
</style>

<script>

var mdcButton = {
  props: {
    disabled: Boolean,
    primary: Boolean,
    accent: Boolean,
    dense: Boolean,
    raised: Boolean,
    compact: Boolean
  },
  computed: {
    classes: function () {
      let vm = this
      let classes = []

      if (vm.primary) classes.push('mdc-button--primary')
      if (vm.accent) classes.push('mdc-button--accent')
      if (vm.dense) classes.push('mdc-button--dense')
      if (vm.raised) classes.push('mdc-button--raised')
      if (vm.compact) classes.push('mdc-button--compact')

      return classes
    }
  }
}

export function install (vm) {
  vm.component('mdc-button', mdcButton)
}

export default mdcButton

</script>


<template>
  <button class="mdc-button" :class="classes" :disabled="disabled" 
    @click="dispatchEvent">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
  @import '@material/button/mdc-button';
</style>

<script>

import {MDCRipple} from '@material/ripple'

export default {
  props: {
    disabled: Boolean,
    primary: Boolean,
    accent: Boolean,
    dense: Boolean,
    raised: Boolean,
    compact: Boolean,
    noRipple: Boolean
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
  },
  methods: {
    dispatchEvent (event) {
      this.$emit(event.type)
    }
  },
  mounted () {
    if (!this.noRipple) {
      this.$el.classList.add('mdc-ripple-surface')
      this.mdc_ripple_ = MDCRipple.attachTo(this.$el)
    }
  },
  beforeDestroy () {
    if (this.mdc_ripple_) {
      this.mdc_ripple_.destroy()
      delete this.mdc_ripple_
    }
  }
}

</script>

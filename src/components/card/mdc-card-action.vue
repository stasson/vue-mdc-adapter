<template>
  <button class="mdc-card-action mdc-button mdc-button--compact mdc-card__action mdc-ripple-surface"
  @click=dispatchEvent >
    <slot></slot>
  </button>
</template>

<style lang="scss">
  @import '@material/card/mdc-card';
  @import '@material/button/mdc-button';
</style>


<script lang="babel">
import {MDCRipple} from '@material/ripple'

export default {
  name: 'mdc-card-action',
  methods: {
    dispatchEvent (event) {
      this.$emit(event.type)
    }
  },
  mounted () {
    this.mdc_ripple_ = MDCRipple.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdc_ripple_.destroy()
  }
}
</script>

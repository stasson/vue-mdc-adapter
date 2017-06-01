<template>
  <div class="mdc-layout-grid" :style=styles>
    <slot></slot>
  </div>
</template>


<style lang="scss">
  @import '@material/layout-grid/mdc-layout-grid';
</style>


<script>

export default {
  props: {
    margin: String,
    gutter: String
  },
  computed: {
    styles () {
      let vm = this
      let style = {}
      if (vm.margin) {
        style['--mdc-layout-grid-margin'] = `${vm.margin}px`
      }
      if (vm.gutter) {
        style['--mdc-layout-grid-gutter'] = `${vm.gutter}px`
      }
      return style
    }
  }
}

</script>


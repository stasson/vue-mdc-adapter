<template>
  <div class="mdc-layout-grid" :class=classes>
    <div class="mdc-layout-grid__inner">
      <slot></slot>
    </div>
  </div>
</template>


<style lang="scss">
  @import '@material/layout-grid/mdc-layout-grid';
</style>


<script>

export default {
  props: {
    'fixed-column-width': Boolean
  },
  data () {
    return {
      classes: {
        'mdc-layout-grid--fixed-column-width': this.fixedColumnWidth
      }
    }
  }
}

</script>

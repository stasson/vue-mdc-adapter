<template>
  <div class="mdc-layout-grid" :class=classes>
    <div class="mdc-layout-grid__inner">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: 'mdc-layout-grid',
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

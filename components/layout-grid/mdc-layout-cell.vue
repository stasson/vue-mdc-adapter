<template>
  <div class="mcd-layout-cell mdc-layout-grid__cell" :class="classes">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  @import '@material/layout-grid/mdc-layout-grid';
</style>

<script>

const spanOptions = {
  type: [String, Number],
  default: null,
  validator: function (value) {
    var num = Number(value)
    return (value <= num) || (num > 0)
  }
}

export default {
  props: {
    span: spanOptions,
    phone: spanOptions,
    tablet: spanOptions,
    desktop: spanOptions,
    align: {
      type: String,
      validator: function (value) {
        return ['top', 'bottom', 'middle'].includes(value)
      }
    }
  },
  computed: {
    classes: function () {
      let vm = this
      let classes = []

      if (vm.span) {
        classes.push(`mdc-layout-grid__cell--span-${vm.span}`)
      }

      if (vm.phone) {
        classes.push(`mdc-layout-grid__cell--span-${vm.phone}-phone`)
      }

      if (vm.tablet) {
        classes.push(`mdc-layout-grid__cell--span-${vm.tablet}-tablet`)
      }

      if (vm.desktop) {
        classes.push(`mdc-layout-grid__cell--span-${vm.desktop}-desktop`)
      }

      if (vm.align) {
        classes.push(`mdc-layout-grid__cell--align-${vm.align}`)
      }

      return classes
    }
  }
}

</script>

<template>
  <div class="mcd-layout-cell mdc-layout-grid__cell" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
const spanOptions = {
  type: [String, Number],
  default: null,
  validator: function (value) {
    var num = Number(value)
    return isFinite(num) && (num <= 12) && (num > 0)
  }
}

export default {
  props: {
    span: spanOptions,
    order: spanOptions,
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
    classes () {
      let classes = []

      if (this.span) {
        classes.push(`mdc-layout-grid__cell--span-${this.span}`)
      }

      if (this.order) {
        classes.push(`mdc-layout-grid__cell--order-${this.order}`)
      }

      if (this.phone) {
        classes.push(`mdc-layout-grid__cell--span-${this.phone}-phone`)
      }

      if (this.tablet) {
        classes.push(`mdc-layout-grid__cell--span-${this.tablet}-tablet`)
      }

      if (this.desktop) {
        classes.push(`mdc-layout-grid__cell--span-${this.desktop}-desktop`)
      }

      if (this.align) {
        classes.push(`mdc-layout-grid__cell--align-${this.align}`)
      }

      return classes
    }
  }
}
</script>

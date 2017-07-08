<template>
  <h1 :class="classes" class="mdc-typography--adjust-margin">
    <slot></slot>
  </h1>
</template>

<style lang="scss">
@import "@material/typography/mdc-typography";
</style>

<script lang="babel">
export default {
  name: 'mdc-display',
  props: {
    'typo': {
      type: String,
      default: 'display1',
      validator: function (value) {
        return ['display1', 'display2', 'display3', 'display4'].includes(value)
      }
    }
  },
  data () {
    let classes = {}
    classes[`mdc-typography--${this.typo}`] = true
    return { classes }
  }
}
</script>

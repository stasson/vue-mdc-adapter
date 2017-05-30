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
    'display': {
      type: [Number, String],
      default: 1
    }
  },
  data () {
    return {
      classes: {
        'mdc-typography--display1': Number(this.display) <= 1,
        'mdc-typography--display2': Number(this.display) === 2,
        'mdc-typography--display3': Number(this.display) === 3,
        'mdc-typography--display4': Number(this.display) >= 4
      }
    }
  }
}
</script>

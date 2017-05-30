<template>
  <p :class="classes" class="mdc-typography--adjust-margin">
    <slot></slot>
  </p>
</template>

<style lang="scss">
@import "@material/typography/mdc-typography";
</style>

<script lang="babel">
export default {
  name: 'mdc-body',
  props: {
    'body': {
      type: [Number, String],
      default: 1
    }
  },
  data () {
    return {
      classes: {
        'mdc-typography--body1': Number(this.body) <= 1,
        'mdc-typography--body2': Number(this.body) >= 2
      }
    }
  }
}
</script>

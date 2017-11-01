<template>
  <p :class="classes" class="mdc-typography--adjust-margin">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'mdc-body',
  props: {
    'typo': {
      type: String,
      default: 'body1',
      validator: function (value) {
        return ['body1', 'body2'].includes(value)
      }
    }
  },
  data () {
    let classes = { }
    classes[`mdc-typography--${this.typo}`] = true
    return { classes }
  }
}
</script>

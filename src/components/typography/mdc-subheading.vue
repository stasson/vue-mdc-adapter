<template>
<div>
  <h3 :class="classes" class="mdc-typography--adjust-margin"
    v-if="classes['mdc-typography--subheading2']">
    <slot></slot>
  </h3>
  <h4 :class="classes" v-else>
    <slot></slot>
  </h4>
</div>
</template>

<style lang="scss">
@import "@material/typography/mdc-typography";
</style>

<script lang="babel">
export default {
  name: 'mdc-subheading',
  props: {
    'typo': {
      type: String,
      default: 'subheading2',
      validator: function (value) {
        return ['subheading2', 'subheading1'].includes(value)
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

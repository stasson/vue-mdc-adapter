<template>
<div>
  <h3 class="mdc-typography--subheading2 mdc-typography--adjust-margin" 
    v-if="Number(subheading)>1">
    <slot></slot>
  </h3>
  <h4 class="mdc-typography--subheading1 mdc-typography--adjust-margin"
    v-else>
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
    'subheading': {
      type: [Number, String],
      default: 2
    }
  }
}
</script>

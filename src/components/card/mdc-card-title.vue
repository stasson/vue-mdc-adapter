<template>
  <h1 class="mdc-card-title mdc-card__title"
      :class="{'mdc-card__title--large': large}">
    <slot></slot>
  </h1>
</template>


<style lang="scss">
  @import '@material/card/mdc-card';
</style>


<script>
export default {
  name: 'mdc-card-title',
  props: {
    'large': Boolean
  }
}
</script>

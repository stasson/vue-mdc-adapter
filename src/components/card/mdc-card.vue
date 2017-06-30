<template>
  <div class="mdc-card" :class="classes">
    <slot>
    </slot>
  </div>
</template>

<style lang="scss">
  @import '@material/card/mdc-card';
</style>

<script>
export default {
  name: 'mdc-card',
  props: {
    'dark': Boolean
  },
  data () {
    return {
      classes: {
        'mdc-card--theme-dark': this.dark
      }
    }
  }
}
</script>

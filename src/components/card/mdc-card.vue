<template>
  <div class="mdc-card" :class="classes">
    <slot>
    </slot>
  </div>
</template>

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

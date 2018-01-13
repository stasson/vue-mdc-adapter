<template>
  <li role="separator" class="mdc-list-divider" 
  :class="classes"></li>
</template>

<script>
export default {
  name: 'mdc-list-divider',
  props: {
    inset: Boolean,
    padded: Boolean
  },
  computed: {
    classes () {
      return {
        'mdc-list-divider--inset': this.inset,
        'mdc-list-divider--padded': this.padded
      }
    }
  }
}
</script>

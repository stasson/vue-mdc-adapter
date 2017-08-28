<template>
  <li role="separator" class="mdc-list-divider" :class="classes"></li>
</template>

<script lang="babel">
export default {
  props: {
    'inset': Boolean
  },
  data () {
    return {
      classes: {
        'mdc-list-divider--inset': this.inset
      }
    }
  }
}
</script>

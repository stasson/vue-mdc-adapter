<template>
  <nav class="mdc-drawer-list mdc-list" :class="classes">
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: 'mdc-drawer-list',
  props: {
    'dense': Boolean,
  },
  data () {
    return {
      classes: {
        'mdc-list--dense': this.dense
      }
    }
  }
  
}
</script>
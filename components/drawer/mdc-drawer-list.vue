<template>
  <nav 
    :class="classes" 
    class="mdc-drawer-list mdc-list">
    <slot/>
  </nav>
</template>

<script>
export default {
  name: 'mdc-drawer-list',
  props: {
    dense: Boolean
  },
  data() {
    return {
      classes: {
        'mdc-list--dense': this.dense
      }
    }
  }
}
</script>

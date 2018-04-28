<template>
  <ul 
    :class="classes" 
    class="mdc-list">
    <slot/>
  </ul>
</template>

<script>
export default {
  name: 'mdc-list',
  props: {
    dense: Boolean,
    avatarList: Boolean,
    twoLine: Boolean,
    bordered: Boolean,
    interactive: Boolean
  },
  provide() {
    return { mdcList: this }
  },
  computed: {
    classes() {
      return {
        'mdc-list--dense': this.dense,
        'mdc-list--avatar-list': this.avatarList,
        'mdc-list--two-line': this.twoLine,
        'mdc-list--bordered': this.bordered,
        'mdc-list--non-interactive': !this.interactive
      }
    }
  }
}
</script>

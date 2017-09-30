<template>
<div>
  <ul class="mdc-list" :class="classes">
    <slot></slot>
  </ul>
</div>
</template>

<script lang="babel">
export default {
  props: {
    'dense': Boolean,
    'avatar-list': Boolean,
    'two-line': Boolean,
    'bordered': Boolean
  },
  data () {
    return {
      classes: {
        'mdc-list--dense': this.dense,
        'mdc-list--avatar-list': this.avatarList,
        'mdc-list--two-line': this.twoLine,
        'mdc-list--bordered': this.bordered
      }
    }
  }
}
</script>

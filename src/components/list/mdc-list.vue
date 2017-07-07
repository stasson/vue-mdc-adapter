<template>
<div>
  
  <ul class="mdc-list" :class="classes">
    <slot></slot>
  </ul>
</div>
</template>

<style lang="scss">
  @import "@material/list/mdc-list";
</style>

<style>
  .mdc-list--bordered {
    /* remove the side padding. we'll be placing it around the item instead. */
    padding-right: 0;
    padding-left: 0;
  }
  .mdc-list--bordered .mdc-list-item {
    /* Add the list side padding padding to the list item. */
    padding: 0 16px;
    /* Add a border around each element. */
    border: 1px solid rgba(0, 0, 0, .12);
  }
  /* Ensure adjacent borders don't collide with one another. */
  .mdc-list--bordered .mdc-list-item:not(:first-child) {
    border-top: none;
  }
</style>


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

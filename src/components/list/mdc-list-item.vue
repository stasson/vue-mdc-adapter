<template>
  <li class="mdc-list-item">

    <span class="mdc-list-item__start-detail" v-if="hasStartDetail">
      <slot name="start-detail"></slot>
    </span>

    <span class="mdc-list-item__text" v-if="hasSecondary">
      <slot></slot>
      <span class="mdc-list-item__text__secondary">
        <slot name="secondary"></slot>
      </span>
    </span>
    <slot v-else></slot>

    <span class="mdc-list-item__end-detail" v-if="hasEndDetail">
      <slot name="end-detail"></slot>
    </span>

  </li>
</template>

<style lang="scss">
  @import "@material/list/mdc-list";
</style>

<script lang="babel">
export default {
  computed: {
    hasSecondary () {
      return !!this.$slots['secondary']
    },
    hasEndDetail () {
      return !!this.$slots['end-detail']
    },
    hasStartDetail () {
      return !!this.$slots['start-detail']
    }
  }
}
</script>

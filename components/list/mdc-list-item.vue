<template>
  <li class="mdc-list-item">

    <span class="mdc-list-item__graphic" v-if="hasStartDetail">
      <slot name="start-detail"></slot>
    </span>

    <span class="mdc-list-item__text" v-if="hasSecondary">
      <slot></slot>
      <span class="mdc-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    </span>
    <slot v-else></slot>

    <span class="mdc-list-item__meta" v-if="hasEndDetail">
      <slot name="end-detail"></slot>
    </span>

  </li>
</template>

<script>
export default {
  name: 'mdc-list-item',
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

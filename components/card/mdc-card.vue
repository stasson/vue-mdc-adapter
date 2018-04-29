<template>
  <div
    :class="{'mdc-card--outlined': outlined}"
    class="mdc-card">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'mdc-card',
  props: {
    outlined: Boolean
  }
}
</script>

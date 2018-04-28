<template>
  <h1 
    :class="{'mdc-card__title--large': large}"
    class="mdc-card-title mdc-card__title">
    <slot/>
  </h1>
</template>

<script>
export default {
  name: 'mdc-card-title',
  props: {
    large: Boolean
  }
}
</script>

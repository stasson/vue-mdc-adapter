<template>
  <h2 class="mdc-typography--title mdc-typography--adjust-margin">
    <slot></slot>
  </h2>
</template>

<style lang="scss">
@import "@material/typography/mdc-typography";
</style>

<script lang="babel">
export default {
  name: 'mdc-title'
}
</script>

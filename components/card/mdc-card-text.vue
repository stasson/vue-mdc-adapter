<template>
  <section class="mdc-card-text mdc-card__supporting-text">
    <slot>
    </slot>
  </section>
</template>

<style lang="scss">
  @import '@material/card/mdc-card';
</style>

<script>
export default {
  name: 'mdc-text'
}
</script>

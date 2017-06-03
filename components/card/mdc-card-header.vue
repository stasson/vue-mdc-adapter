<template>
  <section class="mdc-card-header mdc-card__primary">
    <slot>
    </slot>
  </section>
</template>


<style lang="scss">
  @import '@material/card/mdc-card';
</style>


<script>
export default {
  name: 'mdc-card-header'
}
</script>

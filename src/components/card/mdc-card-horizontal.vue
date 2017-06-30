<template>
  <div class="mdc-card-horizontal mdc-card__horizontal-block">
    <slot>
    </slot>
  </div>
</template>

<style lang="scss">
  @import '@material/card/mdc-card';
</style>

<script>
export default {
  name: 'mdc-card-horizontal'
}
</script>

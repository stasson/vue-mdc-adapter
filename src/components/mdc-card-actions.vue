<template>
  <section class="mdc-card__actions" :class="{ 'mdc-card__actions--vertical': vertical}">
    <slot>
      <button v-for="(value, key) in actions" 
        @click="$emit(key)" ref="key">
        {{ value }}
      </button>
    </slot>
  </section>
</template>

<style scoped lang="scss">
  @import '@material/card/mdc-card';
  @import '@material/button/mdc-button';

  button, .mdc-card-action {
    @extend .mdc-button;
    @extend .mdc-button--compact;
    @extend .mdc-card__action;
  }
</style>



<script>
export default {
  props: {
    actions: Object,
    vertical: Boolean
  }
}
</script>

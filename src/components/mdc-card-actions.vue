<template>
  <section class="mdc-card-actions mdc-card__actions" 
          :class="{ 'mdc-card__actions--vertical': vertical}">
    <slot>
      <button class="mdc-button mdc-button--compact mdc-card__action"
        v-for="(value, key) in actions"
        @click="$emit(key)" ref="key">
        {{ value }}
      </button>
    </slot>
  </section>
</template>

<style lang="scss">
  @import '@material/card/mdc-card';
  @import '@material/button/mdc-button';
</style>


<script>
export default {
  props: {
    actions: Object,
    vertical: Boolean
  }
}
</script>

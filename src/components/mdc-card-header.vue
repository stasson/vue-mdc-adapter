<template>
  <section class="mdc-card__primary">
    <slot>
      <h1 class="title" v-if="title">{{ title }}</h1>
      <h2 class="subtitle" v-if="subtitle">{{ subtitle }}</h2>
    </slot>
  </section>
</template>

<style scoped lang="scss">
  @import '@material/card/mdc-card';

  h1 {
    @extend .mdc-card__title;
  }

  .title {
    @extend .mdc-card__title;
    &-large {
      @extend .mdc-card__title--large;
    }
  }

  h2, .subtitle {
    @extend .mdc-card__subtitle;
  }

</style>



<script>
export default {
  props: {
    title: String,
    subtitle: String
  }
}
</script>

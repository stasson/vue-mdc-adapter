<template>
  <section class="mdc-card-header mdc-card__primary">
    <slot>
      <h1 class="mdc-card-title mdc-card__title" v-if="title"
          :classes="{'mdc-card__title--large': titleLarge}">
        {{ title }}
      </h1>
      <h2 class="mdc-card-subtitle mdc-card__subtitle" v-if="subtitle">
        {{ subtitle }}
      </h2>
    </slot>
  </section>
</template>


<style lang="scss">
  @import '@material/card/mdc-card';
</style>


<script>
export default {
  props: {
    title: String,
    'title-large': Boolean,
    subtitle: String
  }
}
</script>

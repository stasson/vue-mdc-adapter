<template>
  <section class="mdc-card-header mdc-card__primary">
    <slot>
      <h1 
        v-if="title"
        :class="{'mdc-card__title--large': largeTitle}"
        class="mdc-card__title"
      >
        {{ title }}
      </h1>
      <h2 
        v-if="subtitle"
        class="mdc-card__subtitle"
      >
        {{ subtitle }} 
      </h2>
    </slot>
  </section>
</template>

<script>
export default {
  name: 'mdc-card-header',
  props: {
    title: String,
    subtitle: String,
    'large-title': { type: Boolean, default: true }
  }
}
</script>

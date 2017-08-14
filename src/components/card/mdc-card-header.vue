<template>
  <section class="mdc-card-header mdc-card__primary">
    <slot>
      <h1 class="mdc-card__title"
        :class="{'mdc-card__title--large': largeTitle}"
        v-if="title"
        >
        {{ title }}
      </h1>
      <h2 class="mdc-card__subtitle"
        v-if="subtitle"
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
    'title': String,
    'subtitle': String,
    'large-title': { type: Boolean, default: true }
  }
}
</script>

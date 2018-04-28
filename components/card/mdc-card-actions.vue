<template>
  <section 
    :class="classes" 
    class="mdc-card-actions mdc-card__actions">
    <slot/>
  </section>
</template>

<script>
export default {
  name: 'mdc-card-actions',
  props: {
    fullBleed: Boolean
  },
  computed: {
    classes() {
      return {
        'mdc-card__actions--full-bleed': this.fullBleed
      }
    }
  }
}
</script>

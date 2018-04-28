<template>
  <section 
    :class="classes" 
    :style="styles" 
    class="mdc-card-media mdc-card__media">
    <div 
      v-if="$slots.default" 
      class="mdc-card__media-content">
      <slot/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'mdc-card-media',
  props: {
    src: String,
    square: Boolean
  },
  computed: {
    styles() {
      var styles = {
        backgroundImage: `url(${this.src})`
      }

      return styles
    },
    classes() {
      return this.square ? 'mdc-card__media--square' : 'mdc-card__media--16-9'
    }
  }
}
</script>

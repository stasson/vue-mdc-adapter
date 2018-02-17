<template>
  <section class="mdc-card-media mdc-card__media" 
    :class="classes" :style="styles">
    <div class="mdc-card__media-content" v-if="$slots.default">
      <slot>
      </slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "mdc-card-media",
  props: {
    src: String,
    'square': Boolean
  },
  computed: {
    styles() {
      var styles = {
        backgroundImage: `url(${this.src})`
      };

      return styles;
    }, 
    classes() {
      return this.square ? 'mdc-card__media--square': 'mdc-card__media--16-9'
    }
  }
}
</script>

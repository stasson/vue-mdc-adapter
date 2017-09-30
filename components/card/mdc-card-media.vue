<template>
  <section class="mdc-card-media mdc-card__media" :style="styles"
    :classes="{'mdc-theme--dark': dark}" >
    <slot>
    </slot>
  </section>
</template>

<script>
export default {
  name: 'mdc-card-media',
  props: {
    src: {
      type: String,
      required: true
    },
    height: [String, Number],
    dark: Boolean
  },
  computed: {
    styles () {
      var styles = {
        backgroundImage: `url(${this.src})`
      }

      if (this.height) {
        styles.height = `${this.height}px`
      }

      return styles
    }
  }
}
</script>

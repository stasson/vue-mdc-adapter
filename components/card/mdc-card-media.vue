<template>
  <section class="mdc-card-media mdc-card__media" :style="styles">
    <slot>
    </slot>
  </section>
</template>

<style lang="scss">
  @import '@material/card/mdc-card';
  
  .mdc-card-media {
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>

<script>

export default {
  name: 'mdc-card-media',
  props: {
    src: {
      type: String,
      required: true
    },
    height: [String, Number]
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

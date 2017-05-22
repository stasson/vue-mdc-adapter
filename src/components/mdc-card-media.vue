<template>
  <section class="mdc-card__media" :style="styles">
    <slot>
    </slot>
  </section>
</template>

<style scoped lang="scss">
  @import '@material/card/mdc-card';
</style>

<script>

export default {
  props: {
    src: String,
    height: [String, Number]
  },
  computed: {
    styles () {
      var styles = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }
      if (this.src) {
        styles.backgroundImage = `url(${this.src})`
      }
      if (this.height) {
        styles.height = `${this.height}px`
      }
      return styles
    }
  }
}
</script>

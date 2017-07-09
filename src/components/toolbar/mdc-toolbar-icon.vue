<template>
  <a :href="href"  class="material-icons mdc-toolbar__icon"
    @click="onClick"
  >
    <slot></slot>
  </a>
</template>

<style lang="scss">
@import "@material/toolbar/mdc-toolbar";
</style>

<script lang="babel">
export default {
  name: 'mdc-toolbar-icon',
  props: {
    'href': { type: String, default: '#' },
    'event': String
  },
  methods: {
    onClick () {
      if (this.event) {
        this.$mdc.$emit(this.event)
      } else {
        this.$emit('click')
      }
    }
  }
}
</script>

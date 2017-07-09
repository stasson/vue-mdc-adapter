<template>
  <a href="#" class="material-icons mdc-toolbar__icon--menu"
    @click="onClick"
  >
    <slot>menu</slot>
  </a>
</template>

<style lang="scss">
@import "@material/toolbar/mdc-toolbar";
</style>

<script lang="babel">
export default {
  name: 'mdc-toolbar-icon-menu',
  props: {
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

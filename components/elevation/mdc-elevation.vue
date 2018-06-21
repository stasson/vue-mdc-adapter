<template>
  <div
    :class="classes"
    class="mdc-elevation">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'mdc-elevation',
  props: {
    z: {
      type: [Number, String],
      default() {
        return 1
      }
    }
  },
  data() {
    let elevationClasses = {}
    elevationClasses[`mdc-elevation--z${this.z}`] = true

    return {
      classes: elevationClasses
    }
  }
}
</script>

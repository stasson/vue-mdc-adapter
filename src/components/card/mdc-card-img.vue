<template>
  <img class="mdc-card-img mdc-card__media-item" :class="classes"
       :src="src">
  </img>
</template>

<style lang="scss">
  @import '@material/card/mdc-card';
</style>


<script>

export default {
  props: {
    src: {
      type: String,
      required: true
    },
    mult: {
      type: [Number, String],
      validator: function (value) {
        return [1, 1.5, 2, 3].includes(Number(value))
      }
    }
  },
  computed: {
    classes: function () {
      let mult = Number(this.mult)
      return {
        'mdc-card__media-item--1dot5x': mult === 1.5,
        'mdc-card__media-item--2x': mult === 2,
        'mdc-card__media-item--3x': mult === 3
      }
    }
  }
}

</script>

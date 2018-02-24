<template>
  <div class="mdc-demo mdc-demo--container">
    <div class="slider-demo">
      <mdc-slider step=1 max=10 v-model="sliderValue" />
      <mdc-slider step=1 max=10 display-markers v-model="sliderValue" />
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        sliderValue: 5
      }
    }
  }
</script>

<style>
.slider-demo {
  width: 75%;
}
</style>

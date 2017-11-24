<template>
  <div class="mdc-demo mdc-demo--container">
<div class="slider-demo"><mdc-slider step=1 max=10 v-model="sliderValue"></mdc-slider>
<mdc-slider step=1 max=10 display-markers v-model="sliderValue"></mdc-slider>
</div>  </div>
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
  min-width: 400px;
}
</style>

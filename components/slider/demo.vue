<template>
  <div class="mdc-demo mdc-demo--container">
    <div class="slider-demo">
      <mdc-slider 
        v-model="sliderValue" 
        step="1" 
        max="10" />
      <mdc-slider 
        v-model="sliderValue" 
        step="1" 
        max="10" 
        display-markers />
    </div>
  </div>
</template>

<script>
export default {
  data() {
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

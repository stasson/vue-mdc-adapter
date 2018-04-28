<template>
  <div class="mdc-demo mdc-demo--container">
    <mdc-radio 
      v-model="picked" 
      label="Radio1" 
      name="radios" 
      checked/>
    <mdc-radio 
      v-model="picked" 
      label="Radio2" 
      name="radios"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: ''
    }
  }
}
</script>

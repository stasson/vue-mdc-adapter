<template>
  <div class="mdc-demo mdc-demo--container">
      <mdc-radio label="Radio1" name="radios" v-model="picked" checked></mdc-radio>
      <mdc-radio label="Radio2" name="radios" v-model="picked"></mdc-radio>
  </div>
</template>

<script>
export default {
  data () {
    return {
      picked:'',
    }
  }
}
</script>
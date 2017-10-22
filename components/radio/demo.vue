<template>
  <div class="mdc-demo">
    <mdc-radio label="Radio1" name="radios" v-model="picked" checked></mdc-radio>
    <mdc-radio label="Radio2" name="radios" v-model="picked"></mdc-radio>
    <br>
    <mdc-button dense >{{ picked }}</mdc-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        picked:false,
      }
    }
  }
</script>
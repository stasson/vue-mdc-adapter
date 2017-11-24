<template>
  <div class="mdc-demo mdc-demo--container">
    <mdc-checkbox v-model="checked" :indeterminate.sync="indeterminate"
      :label="checked?'checked':'unchecked'"
      ></mdc-checkbox>
    <mdc-button dense @click="indeterminate=true">make indeterminate</mdc-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        checked:false,
        indeterminate:false,
      }
    }
  }
</script>
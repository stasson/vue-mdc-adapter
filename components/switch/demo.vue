<template>
  <div class="mdc-demo">
    <p><mdc-switch v-model="checked" :label="checked?'switch on':'switch off'"></mdc-switch></p>
    <p><mdc-switch disabled label="Disabled"></mdc-switch></p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        checked:false,
      }
    }
  }
</script>
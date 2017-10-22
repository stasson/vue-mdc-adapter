<template>
  <div class="mdc-demo">
    <p><mdc-checkbox v-model="checked" :indeterminate.sync="indeterminate"
        :label="checked?'checked':'unchecked'"
        ></mdc-checkbox>
      <br>
      <mdc-button dense @click="indeterminate=true">make indeterminate</mdc-button>
    </p>
    <p><mdc-checkbox disabled label="Disabled"></mdc-checkbox></p>
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
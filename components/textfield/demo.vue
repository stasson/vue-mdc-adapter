<template>
  <div class="mdc-demo mdc-demo--container">
    <mdc-layout-grid>
      <mdc-layout-cell span=6>
        <mdc-textfield :disabled="!enabled" v-model="textField"
          label="Simple textfield"></mdc-textfield>
        <mdc-textfield :disabled="!enabled" v-model="textField"
          label="with help text"
          helptext="Help text..."></mdc-textfield>
        <mdc-textfield :disabled="!enabled" v-model="textField"
          label="in a box"
          helptext="Help text..." box></mdc-textfield>
      </mdc-layout-cell>
      <mdc-layout-cell  span=6>
        <p><mdc-textfield :disabled="!enabled" v-model="textField" multiline
            label="multiline" ></mdc-textfield></p>
      </mdc-layout-cell>
    </mdc-layout-grid>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        textField: '',
        enabled: true
      }
    }
  }
</script>

<template>
  <div class="mdc-demo mdc-demo--container">
    <mdc-layout-grid>
      <mdc-layout-cell span=8>
        <mdc-textfield :disabled="!enabled" v-model="textField"
          label="Simple textfield"></mdc-textfield>
        <mdc-textfield :disabled="!enabled" v-model="textField"
          label="with help text"
          helptext="Help text..."></mdc-textfield>
      </mdc-layout-cell>
      <mdc-layout-cell  span=4>
        <mdc-checkbox :label="enabled?'enabled':'disabled'" v-model="enabled"></mdc-checkbox>
      </mdc-layout-cell>
      <mdc-layout-cell  span=12>
        <p><mdc-textfield :disabled="!enabled" v-model="textField" multiline
            label="multiline" ></mdc-textfield></p>
        <p><mdc-textfield :disabled="!enabled" v-model="textField" fullwidth
            label="fullwidth"
            helptext="Help text..." ></mdc-textfield></p>
        <p><mdc-textfield :disabled="!enabled" v-model="textField" fullwidth multiline
            label="fullwidth multiline"
            helptext="Help text..." ></mdc-textfield></p>
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

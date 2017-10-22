<template>
  <div class="mdc-demo">
    <mdc-textfield v-model="textField"
      label="Simple textfield"></mdc-textfield>
    <mdc-textfield v-model="textField"
      label="with help text"
      helptext="Help text..."></mdc-textfield>
    <p><mdc-textfield
      label="disabled" disabled></mdc-textfield></p>
    <p><mdc-textfield v-model="textField" multiline
        label="multiline" ></mdc-textfield></p>
    <p><mdc-textfield v-model="textField" fullwidth
        label="fullwidth"
        helptext="Help text..." ></mdc-textfield></p>
    <p><mdc-textfield v-model="textField" fullwidth multiline
        label="fullwidth multiline"
        helptext="Help text..." ></mdc-textfield></p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        textField: ''
      }
    }
  }
</script>

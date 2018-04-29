<template>
  <div class="mdc-demo mdc-demo--container">
    <mdc-layout-grid>
      <mdc-layout-cell span="6">
        <mdc-textfield
          :disabled="!enabled"
          v-model="textField"
          label="textfield"
          helptext="Help text..."/>
        <form>
          <mdc-textfield
            v-model="password"
            type="password"
            label="Password"
            minlength="8"
            maxlength="10"
            helptext="passord must be 8 to 10 characters"
            helptext-persistent
            helptext-validation
            autocomplete/>
        </form>
        <mdc-textfield
          :disabled="!enabled"
          v-model="textField"
          label="outlined"
          outline
          helptext="Help text..."
          trailing-icon="event"/>
        <mdc-textfield
          :disabled="!enabled"
          v-model="textField"
          :leading-icon="{className: 'fa fa-font-awesome'}"
          label="in a box"
          helptext="Help text..."
          box/>
      </mdc-layout-cell>
      <mdc-layout-cell span="6">
        <p><mdc-textfield
          :disabled="!enabled"
          v-model="textField"
          multiline
          rows="15"
          label="multiline" /></p>
      </mdc-layout-cell>
      <mdc-layout-cell span="12">
        <p><mdc-textfield
          :disabled="!enabled"
          v-model="textField"
          fullwidth
          label="full width" /></p>
      </mdc-layout-cell>
    </mdc-layout-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textField: '',
      enabled: true,
      password: ''
    }
  }
}
</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
</style>

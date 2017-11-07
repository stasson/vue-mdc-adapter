<template>
  <div>
    <mdc-menu-select v-model="selectValue" label="select label">
      <mdc-menu-option>option1</mdc-menu-option>
      <mdc-menu-option value="option2">Option2</mdc-menu-option>
    </mdc-menu-select>

    <mdc-native-select v-model="selectValue" label="select label">
      <mdc-native-option>option1</mdc-native-option>
      <mdc-native-option value="option2">Option2</mdc-native-option>
    </mdc-native-select>

    <mdc-multi-select v-model="selectValues" label="multi select label">
      <mdc-multi-option>option3</mdc-multi-option>
      <mdc-multi-option>option3</mdc-multi-option>
    </mdc-multi-select>

  </div>
</template>

<script>
export default {
  name:'spec',
  data () {
    return {
      selectValue: undefined,
      selectValues: [],
    }
  }
}
</script>

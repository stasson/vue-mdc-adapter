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
import VueMDCMenuSelect from './mdc-menu-select.vue'
import VueMDCMenuOption from './mdc-menu-option.vue'
import VueMDCNativeSelect from './mdc-native-select.vue'
import VueMDCNativeOption from './mdc-native-option.vue'
import VueMDCMultiSelect from './mdc-multi-select.vue'
import VueMDCMultiOption from './mdc-multi-option.vue'

const components = {
  'mdc-menu-select': VueMDCMenuSelect,
  'mdc-menu-option': VueMDCMenuOption,
  'mdc-native-select': VueMDCNativeSelect,
  'mdc-native-option': VueMDCNativeOption,
  'mdc-multi-select': VueMDCMultiSelect,
  'mdc-multi-option': VueMDCMultiOption,
}

export default {
  name:'spec',
  data () {
    return {
      selectValue: undefined,
      selectValues: [],
    }
  },
  components 
}
</script>

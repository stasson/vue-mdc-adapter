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
import mdcMenuSelect from './mdc-menu-select.vue'
import mdcMenuOption from './mdc-menu-option.vue'
import mdcNativeSelect from './mdc-native-select.vue'
import mdcNativeOption from './mdc-native-option.vue'
import mdcMultiSelect from './mdc-multi-select.vue'
import mdcMultiOption from './mdc-multi-option.vue'

const components = {
  'mdc-menu-select': mdcMenuSelect,
  'mdc-menu-option': mdcMenuOption,
  'mdc-native-select': mdcNativeSelect,
  'mdc-native-option': mdcNativeOption,
  'mdc-multi-select': mdcMultiSelect,
  'mdc-multi-option': mdcMultiOption,
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

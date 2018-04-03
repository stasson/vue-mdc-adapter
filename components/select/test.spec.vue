<template>
  <div>
    <mdc-select v-model="selectValue" label="select label">
      <mdc-option>option1</mdc-option>
      <mdc-option value="option2">Option2</mdc-option>
    </mdc-select>
  </div>
</template>

<script>
import mdcSelect from './mdc-select.vue'
import mdcOption from './mdc-option.vue'

const components = {
  'mdc-select': mdcSelect,
  'mdc-option': mdcOption,
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

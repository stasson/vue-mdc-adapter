<template>
<div>
  <mdc-select v-model="selectValue" label="select label">
    <optgroup label="options">
      <option>option1</option>
      <option value="option2">Option2</option>
    </optgroup>
  </mdc-select>
</div>
</template>

<script>
import mdcSelect from './mdc-select.vue'

const components = {
  'mdc-select': mdcSelect,
}

export default {
  name: 'spec',
  data() {
    return {
      selectValue: undefined,
    }
  },
  components
}
</script>

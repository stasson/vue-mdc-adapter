<template>
  <div class="mdc-demo">
    <mdc-select v-model="selectValue" label="Pick up a food group" native="false">
      <mdc-option>
        Bread, Cereal, Rice, and Pasta
      </mdc-option>
      <mdc-option value="vegies">
        Vegetables
      </mdc-option>
      <mdc-option>
         Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
      </mdc-option>
    </mdc-select>
    <mdc-body><br>Selected: {{ selectValue }}</mdc-body>
    <p><br></p>

    <mdc-select multiple v-model="selectValues" label="Pick one or both">
      <mdc-option>
        Potato
      </mdc-option>
      <mdc-option>
        Cereal
      </mdc-option>
    </mdc-select>
    <mdc-body><br>Selected: {{ selectValues }}</mdc-body>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selectValue: undefined,
        selectValues: [],
      }
    }
  }
</script>

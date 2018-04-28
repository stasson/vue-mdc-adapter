<template>
  <div class="mdc-demo mdc-demo--container">
    <div>
      <mdc-select 
        v-model="selectedType" 
        label="Pick up a food type">
        <optgroup label="categories">
          <option 
            v-for="type in types" 
            :value="type" 
            :key="type">{{ type }}</option>
        </optgroup>
      </mdc-select>

      <mdc-caption tag="p" >Selected Type: {{ selectedType }}</mdc-caption>
      <br>
      <br><br><br>
      <mdc-select 
        v-if="selectedType" 
        v-model="selectedValue" 
        box 
        label="Pick up a food">
        <option 
          v-for="option of options" 
          :key="option" 
          :value="option.toLowerCase()">{{ option }}</option>
      </mdc-select>

      <mdc-caption 
        v-if="selectedType" 
        tag="p">Selected Value: {{ selectedValue }}</mdc-caption>
      <br>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedType: 'Meat',
      selectedValue: undefined,
      food: {
        Vegetables: ['Spinach', 'Carrots', 'Onions', 'Broccoli'],
        Meat: ['Eggs', 'Chicken', 'Fish', 'Turkey', 'Pork', 'Beef'],
        Fruits: ['Apples', 'Oranges', 'Bananas', 'Berries', 'Lemons']
      }
    }
  },
  computed: {
    types() {
      return Object.keys(this.food)
    },
    options() {
      return this.selectedType ? this.food[this.selectedType] : []
    }
  }
}
</script>

<style>
.mdc-demo .mdc-select {
  width: 10em;
}
</style>

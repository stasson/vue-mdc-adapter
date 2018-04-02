<template>
  <div class="mdc-demo mdc-demo--container">
    <div>
      <mdc-select v-model="selectedType" label="Pick up a food type">
        <mdc-option v-for="type in types" :key="type"
        >{{type}}</mdc-option>
      </mdc-select>
      <br><br><br>
      <mdc-select box v-model="selectedValue" label="Pick up a food"
        v-if="selectedType">
        <mdc-option v-for="option of options" :key="option"
        :value="option.toLowerCase()"
        >{{option}}</mdc-option>
      </mdc-select>

      <mdc-caption tag="p" v-if="selectedType"
      >Selected Value: {{ selectedValue }}</mdc-caption>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedType: undefined,
      selectedValue: undefined,
      selectedValues: [],
      food: {
        Vegetables: ['Spinach', 'Carrots', 'Onions', 'Broccoli'],
        Meat: ['Eggs', 'Chicken', 'Fish', 'Turkey', 'Pork', 'Beef'],
        Fruits: ['Apples', 'Oranges', 'Bananas', 'Berries', 'Lemons'],
      },
    };
  },
  computed: {
    types() {
      return Object.keys(this.food);
    },
    options() {
      return this.selectedType ? this.food[this.selectedType] : [];
    },
  },
};
</script>

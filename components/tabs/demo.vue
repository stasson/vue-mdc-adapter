<template>
<div class="">
  <h3>Simple</h3>
  <section class="mdc-demo mdc-demo--container">
    <mdc-tab-bar @change="onSelected">
      <mdc-tab v-for="item in items" :key="item">{{item}}</mdc-tab>
    </mdc-tab-bar>
  </section>
  <br>
  <div v-if="selectedItem">
    Selected: <span class="demo-tabs-selected">{{selectedItem}}</span>
  </div>
  <h3>With icons and text</h3>
  <section class="mdc-demo mdc-demo--container">
    <mdc-tab-bar>
      <mdc-tab icon="phone">Recents</mdc-tab>
      <mdc-tab icon="favorite">Favorites</mdc-tab>
      <mdc-tab icon="personal_pin">Nearby</mdc-tab>
    </mdc-tab-bar>
  </section>
</div>
</template>

<script>
export default {
  data() {
    const items = ['item one', 'item two', 'item three'];
    return {
      selectedItem: items[0],
      items,
    };
  },
  methods: {
    onSelected(idx) {
      this.selectedItem = this.items[idx];
    },
  },
};
</script>

<style>
.demo-tabs-selected {
  font-style: italic;
}
</style>

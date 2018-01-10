<template>
  <div class="mdc-demo mdc-demo--container">
    <div>
      <mdc-icon-toggle v-model="toggle"
        :toggle-on="{ icon:'favorite', label: 'Remove from favorites'}"
        :toggle-off="{ icon: 'favorite_border', label: 'Add to favorites'}"
        ></mdc-icon-toggle>
      <mdc-icon-toggle v-model="toggle"
        :toggle-on="{ cssClass:'fa fa-font-awesome'}"
        :toggle-off="{ cssClass: 'fa fa-fort-awesome'}"
        ></mdc-icon-toggle>
      <mdc-icon-toggle accent v-model="toggle"
        toggle-on="cloud_done" toggle-off="cloud"
      ></mdc-icon-toggle>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: true
    }
  }
}
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
</style>

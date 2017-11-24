<template>
  <div class="mdc-demo mdc-demo--container">
    <div>
      <mdc-icon-toggle v-model="toggle"
        toggle-on="favorite" label-on="Remove from favorites"
        toggle-off="favorite_border" label-off="Add to favorites"
        ></mdc-icon-toggle>

      <mdc-icon-toggle primary v-model="toggle"
        toggle-on="star" toggle-off="star_border"
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
<template>
  <div class="mdc-demo">
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
    <mdc-icon-toggle disabled
      toggle-on="mood_bad" toggle-off="mood" ></mdc-icon-toggle>
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
<template>
  <div class="mdc-demo mdc-demo--container">
    <mdc-grid-list icon-align-start with-support-text width=150 
      class="mdc-demo" interactive>
      <mdc-grid-tile :src="tile"
        :title="'Title ' + (index + 1)"
        support-text="support text" cover icon="star_border"
        v-for="(item, index) in 4" :key="index"></mdc-grid-tile>
    </mdc-grid-list>
  </div>   
</template>

<script>
import tile from 'demo/assets/tile-1-1.jpg'

export default {
  data () {
    return {
      tile,
    }
  }
}
</script>

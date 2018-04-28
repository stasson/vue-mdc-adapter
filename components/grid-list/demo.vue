<template>
  <div class="mdc-demo mdc-demo--container">
    <mdc-grid-list 
      icon-align-start 
      with-support-text 
      width="150" 
      class="mdc-demo" 
      interactive>
      <mdc-grid-tile 
        v-for="(item, index) in 4"
        :src="tile"
        :title="'Title ' + (index + 1)" 
        :key="index" 
        support-text="support text"
        cover 
        icon="star_border"/>
    </mdc-grid-list>
  </div>   
</template>

<script>
import tile from 'demo/assets/tile-1-1.jpg'

export default {
  data() {
    return {
      tile
    }
  }
}
</script>

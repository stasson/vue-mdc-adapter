<template>
  <div class="mdc-demo">
    <mdc-card>
      <mdc-card-media height=150 :src="card" ></mdc-card-media>
      <mdc-card-header title="Title" subtitle="Subtitle"></mdc-card-header>
      <mdc-card-horizontal>
        <mdc-card-text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </mdc-card-text>
          <mdc-card-img :src="tile" ></mdc-card-img>
      </mdc-card-horizontal>
      <mdc-card-actions>
        <mdc-card-action-button >Action button</mdc-card-action-button>
        <mdc-card-action-button disabled>Action disabled</mdc-card-action-button>
      </mdc-card-actions>
    </mdc-card>
  </div>
</template>

<script>
import tile from 'demo/assets/tile-1-1.jpg'
import card from 'demo/assets/card-16-9.jpg'

export default {
  data () {
    return {
      tile, card
    }
  }
}
</script>
      
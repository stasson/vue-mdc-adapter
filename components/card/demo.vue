<template>
  <div class="mdc-demo">
    <mdc-card>
      <mdc-card-media height=150 :src="card" size="cover" position="center">
      </mdc-card-media>
      <mdc-card-header title="Title goes here" subtitle="subtitle here" ></mdc-card-header>
      <mdc-card-actions>
        <mdc-card-action-button>ACTION 1</mdc-card-action-button>
        <mdc-card-action-button>ACTION 2</mdc-card-action-button>
      </mdc-card-actions>
    </mdc-card>
  </div>
</template>

<script>
import card from 'demo/assets/card-16-9.jpg'

export default {
  data () {
    return {
      card
    }
  }
}
</script>
      
<style>
.mdc-demo .mdc-card {
  background-color: white;
  width: 320px;
  margin: 32px auto;
}
</style>
